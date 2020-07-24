import { Context } from 'koa';
import Router from 'koa-router';


const router = new Router()

router.get('/', async ctx => {
    ctx.body = '任务'
})

export default router.routes()