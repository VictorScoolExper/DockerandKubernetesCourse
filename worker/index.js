const keys = require("./keys");
const redis = require("redis");

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});

const sub = redisClient.duplicate();

function fib(index) {
  if (index < 2) return 1;
  return fib(index - 1) + fib(index - 2);
}
// will listen to messages
sub.on("message", (channel, message) => {
  // this will insert it into a hash called values and we push the fib
  redisClient.hset("values", message, fib(parseInt(message)));
});

sub.subscribe('insert');
