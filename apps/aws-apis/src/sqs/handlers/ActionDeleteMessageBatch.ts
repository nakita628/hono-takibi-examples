import { OpenAPIHono } from '@hono/zod-openapi'
import { postActionDeleteMessageBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteMessageBatchHandler = app.openapi(
  postActionDeleteMessageBatchRoute,
  (c) => {},
)
