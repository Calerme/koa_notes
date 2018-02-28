// 自己实现一个 koa 路由
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    if (ctx.request.path === '/') {
        ctx.response.body = '<h1>Index Page</h1>';
    } else {
        await next();
    }
});

app.use(async (ctx, next) => {
    if (ctx.request.path === '/home') {
        ctx.response.body = '<h1>Home Page</h1>';
    } else {
        await next();
    }
});

app.use(async (ctx, next) => {
   ctx.response.body = '<h1>404 Not Found!</h1>';
});

app.listen(3000, function () {
    console.log('Server is running at 3000 port.');
});