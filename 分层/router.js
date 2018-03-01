const router = require('koa-router')();
const HomeController = require('./controller/controller');

module.exports = (app) => {
  router.get('/', HomeController.index);

  router.get('/home', HomeController.home);

  router.get('/user', HomeController.user);

  router.post('/user/register', HomeController.register);

  router.all('/*', HomeController[404]);

  app.use(router.routes())
      .use(router.allowedMethods());
};