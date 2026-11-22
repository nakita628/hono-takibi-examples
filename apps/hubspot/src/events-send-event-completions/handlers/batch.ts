import { OpenAPIHono } from '@hono/zod-openapi'
import { postEvents202609SendBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app.openapi(postEvents202609SendBatchRoute, (c) => {
  throw new Error('Not implemented')
})
