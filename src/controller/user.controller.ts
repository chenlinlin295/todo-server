import Router from 'koa-router';
import UserService from "../service/user";

const router = new Router()

router.get('/', async ctx => {
    ctx.body = 'User'
});

router.post('/login', async ctx => {
    const { username, openId } = ctx.request.body;
    //系统管理员判断
    try {
        const data = await UserService.login(username, openId);
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