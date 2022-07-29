const Koa = require('koa')
const app = new Koa();

const mainRouter = require('./INTRO/lib/routes/hello-router')
const port = 3000;

app.use(mainRouter.routes());

app.listen(port, () => {
  console.log(`Service is running on http://localhost:${port}`);
});
