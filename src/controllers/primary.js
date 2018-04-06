const list = function (ctx, next) {
    let a = 1;
    ctx.body = 'Hello World!';
    next();
}

module.exports = {
    list
};
