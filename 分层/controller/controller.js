const HomeService = require('../service/home');
module.exports = {
    index: async (ctx, next) => {
        ctx.response.body = '<h1>Index Page</h1>';
    },
    home: async(ctx, next) => {
        ctx.response.body = '<h1>Home Page</h1>';
    },
    user: async (ctx, next) => {
        ctx.response.body = `
        <form method="POST" action="/user/register">
            用户名：<input type="text" name="name"><br>
            密码：<input type="password" name="pd"><br>
            <button type="submit">登录</button>
        </form>
     ` ;
    },
    register: async (ctx, next) => {
        const { name, pd } = ctx.request.body;
        const data = await HomeService.register(name, pd);
        ctx.response.body = `<p>${data}</p>`;
    },
    404: async (ctx, next) => {
        ctx.response.body = '<h1>404 Not Found</h1>';
    },
};