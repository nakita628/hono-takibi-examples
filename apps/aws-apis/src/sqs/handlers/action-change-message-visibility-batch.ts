import { OpenAPIHono } from '@hono/zod-openapi'
import { postActionChangeMessageVisibilityBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const actionChangeMessageVisibilityBatchHandler = app.openapi(
  postActionChangeMessageVisibilityBatchRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
