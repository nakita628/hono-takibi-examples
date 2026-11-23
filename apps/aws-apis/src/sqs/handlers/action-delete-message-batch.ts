import { OpenAPIHono } from '@hono/zod-openapi'
import { postActionDeleteMessageBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteMessageBatchHandler = app.openapi(
  postActionDeleteMessageBatchRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
