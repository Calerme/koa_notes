const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(bodyParser());

router.get('/', async (ctx, next) => {
   ctx.response.body = `
<form method="POST" action="/register">
名字：<input type="text" name="name">
年龄：<input type="number" name="age" min="0" max="120" >
<button type="submit">提交</button>
</form>
   `;
});

router.post('/register', async (ctx, next) => {
    ctx.response.body = `${ctx.request.body.name}今年${ctx.request.body.age}岁`;
});

app.use(router.routes());

app.listen(3000, () => {
   console.log(`Server is running at 3000 port.`);
});