import { OpenAPIHono } from '@hono/zod-openapi'
import { postActionChangeMessageVisibilityBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionChangeMessageVisibilityBatchHandler = app.openapi(
  postActionChangeMessageVisibilityBatchRoute,
  (c) => {},
)
