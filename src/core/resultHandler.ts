/*
 * @Author: your name
 * @Date: 2020-05-21 11:57:31
 * @LastEditTime: 2020-07-27 19:11:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /middle-platform/app/core/instence/resultHandler.ts
 */
import { ReadStream } from 'fs'
import { Context } from 'koa'


export interface DataStructure {
  elapsed: number
  get_url: string
  timestamp: string
  track_id: string
  clientFrom: string
  data: any
  status: number
  message: string
}

export interface Result {
  successJson(data: any): void
  downloadStream(stream: ReadStream, filename: string): void
  failure(error: Error, status?: number): void
}

/**
 * 上层响应
 *
 * @export
 * @class ResultHandler
 * @implements {Result}
 */
export default class ResultHandler implements Result {
  private now = new Date()
  constructor(private ctx: Context) {}

  /**
   * 请求成功返回JSON模板
   *
   * @param {*} [data=null]
   *
   * @memberOf ResponseTmp
   */
  public successJson(data: any = null): void {
    this.ctx.body = this.resultJson(data, '全部成功', 0)
  }
  /**
   * 下载文件
   *
   * @param {ReadStream} stream 需要下载文件的流信息
   * @param {string} filename 下载文件名
   *
   * @memberOf ResponseTmp
   */
  public downloadStream(stream: ReadStream, filename: string): void {
    this.ctx.attachment(filename)
    this.ctx.set('Content-Type', 'application/octet-stream')
    this.ctx.body = stream
  }
  /**
   * 请求失败返回模板
   *
   * @param {Error} error
   * @param {number} [status=500]
   *
   * @memberOf ResponseTmp
   */
  public failure(error: Error, status = 500): void {
    const message: string = error.message || '服务器端错误'
    this.ctx.body = this.resultJson(null, message, status)
  }
  /**
   * 基础模板携带数据
   *
   * @readonly
   * @private
   * @type {*}
   * @memberOf ResponseTmp
   */
  private resultJson(data: any, message: string, status = 0): DataStructure {
    return {
      elapsed: this.timeDiff,
      get_url: this.ctx.url,
      timestamp: this.now.toISOString(),
      track_id: this.ctx.trackId,
      clientFrom: this.ctx.request.ip,
      message,
      status,
      data,
    }
  }
  /**
   * 获取响应时间差
   *
   * @readonly
   * @type {number}
   * @memberOf ResponseTmp
   */
  private get timeDiff(): number {
    return Date.now() - this.now.getTime()
  }
}
