import { Context } from 'koa'
import ResultHandler from '../core/resultHandler'

export default async (ctx: Context, next: () => Promise<any>) => {
    ctx.$res = new ResultHandler(ctx)

    next()
}