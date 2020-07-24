import Router from 'koa-router';
import TodoService from "../service/todo";

const router = new Router()

router.post('/add', async ctx => {
    const { userId, todoName, integral } = ctx.request.body;
    //系统管理员判断
    try {
        const data = await TodoService.add(userId, todoName, integral);
        ctx.body = {
            code: 0,
            data,
        };
    } catch (error) {
        ctx.body = {
            code: 1,
            message: error.message,
            data: null
        };
    }
});

router.get('/list', async ctx => {
    const { userId } = ctx.request.query;
    //系统管理员判断
    try {
        const data = await TodoService.getAll(userId);
        ctx.body = {
            code: 0,
            data,
        };
    } catch (error) {
        ctx.body = {
            code: 1,
            message: error.message,
            data: null
        };
    }
});
export default router.routes()