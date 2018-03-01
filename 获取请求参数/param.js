const Koa  = require('koa');
const router = require('koa-router')();

const app = new Koa();

router.get('/blog/:article', async (ctx, next) => {
    ctx.response.body = `<h1>${ctx.params.article}</h1>`;
});

app.use(router.routes());

app.listen(3000, () => {
    console.log(`Server is running at 3000 port.`);
});