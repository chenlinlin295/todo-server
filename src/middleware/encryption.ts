/*
 * @Author: your name
 * @Date: 2020-05-15 00:26:22
 * @LastEditTime: 2020-07-27 19:10:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /middle-platform/app/middleware/identifies.ts
 */
import { createHash } from 'crypto'
import { Context } from 'koa'

// 添加唯一标识位
export default async (ctx: Context, next: () => Promise<any>) => {
  const hash = createHash('md5')

  hash.update(Date.now().toString())
  ctx.trackId = hash.digest('hex')
  await next()
}
