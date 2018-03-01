const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const router = require('./router');

const app = new Koa();

app.use(bodyParser());

router(app);

app.listen(3000, () => {
    console.log('Server is running at 3000 port.');
});