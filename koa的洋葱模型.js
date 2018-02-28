const koa = require('koa');

const app = new koa();

app.use(async (ctx, next) => {
    const stime = new Date().getTime();
    await next();
    const etime = new Date().getTime();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello Koa</h1>';
    console.log(`请求地址：${ctx.path}，响应时间：${etime - stime}ms`)
});

app.use(async (ctx, next) => {
   console.log('中间件1 doSomething');
   await next();
   console.log('中间件1 end');
});

app.use(async (ctx, next) => {
    console.log('中间件2 doSomething');
    await next();
    console.log('中间件2 end');
});

app.use(async (ctx, next) => {
    console.log('中间件3 doSomething');
    await next();
    console.log('中间件3 end');
});

app.listen(3000, () => {
   console.log('Sever is running at http://loacalhost:3000')
});