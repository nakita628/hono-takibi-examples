import { OpenAPIHono } from '@hono/zod-openapi'
import { postActionSendMessageBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const actionSendMessageBatchHandler = app.openapi(postActionSendMessageBatchRoute, (c) => {
  throw new Error('Not implemented')
})
