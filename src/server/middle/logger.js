function log(ctx) {
  console.log(ctx.url)
}

module.exports = function() {
  return async function(ctx, next) {
    log(ctx);
    await(next);
  }
}
