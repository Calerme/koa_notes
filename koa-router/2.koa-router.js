const Koa = require('koa');
const router = require('koa-router')();

const app = new Koa();

router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>Index Page</h1>';
});

router.get('/home', async (ctx, next) => {
    ctx.response.body = '<h1>Home Page</h1>';
});

router.all('/*', async (ctx, next) => {
    ctx.response.status = 404;
    ctx.response.body = '<h1>404 Not Found!</h1>';
});

app.use(router.routes());

app.listen(3000, () => {
    console.log('Server is running at 3000 port');
});
