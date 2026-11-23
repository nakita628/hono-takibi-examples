import { OpenAPIHono } from '@hono/zod-openapi'
import { postListenPathTykBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const listenPathHandler = app.openapi(postListenPathTykBatchRoute, (c) => {
  throw new Error('Not implemented')
})
