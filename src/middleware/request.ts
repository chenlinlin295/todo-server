import { Context } from 'koa'
import RequestHandler from '../core/requestHandler'

export default async (ctx: Context, next: () => Promise<any>) => {
    ctx.$req = new RequestHandler()

    next()
}