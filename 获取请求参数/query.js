const Koa = require('koa');
const router = require('koa-router')();

const app = new Koa();

router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>Index Page</h1>';
});

router.get('/home', async (ctx, next) => {
   ctx.response.body =
       `
<pre>
ctx.request.query:
${JSON.stringify(ctx.request.query, null, 4)}
</pre>
<p>ctx.request.querystring: ${ctx.request.querystring}</p>
       `;
});

app.use(router.routes());

app.listen(3000);