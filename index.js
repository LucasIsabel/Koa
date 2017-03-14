const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router({ prefix: '/api' });

router.get('/user', async (ctx, next) => {
    try {
        ctx.body = { name: 'Lucas Oliveira', method:'GET' }
        await next();
    } catch (e){
        console.log(e);
    }
});

router.post('/user', async (ctx, next) => {
    try {
        ctx.body = { name: 'Lucas Oliveira', method:'POST' }
        await next();
    } catch (e){
        console.log(e);
    }
});

router.put('/user/:id', async (ctx, next) => {
    try {
        const id = ctx.params.id;
        ctx.body = { name: 'Lucas Oliveira', method:'UPDATE', id:id }
        await next();
    } catch (e){
        console.log(e);
    }
});

router.delete('/user', async (ctx, next) => {
    try {
        ctx.body = { name: 'Lucas Oliveira', method:'DELETE' }
        await next();
    } catch (e){
        console.log(e);
    }
});

router.patch('/user', async (ctx, next) => {
    try {
        ctx.body = { name: 'Lucas Oliveira', method:'DELETE' }
        await next();
    } catch (e){
        console.log(e);
    }
});

app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(3000, () => console.log("It's running fine"));


