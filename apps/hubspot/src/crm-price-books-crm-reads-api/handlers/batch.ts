import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects202609ObjectTypeBatchReadRoute } from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app.openapi(postCrmObjects202609ObjectTypeBatchReadRoute, (c) => {
  throw new Error('Not implemented')
})
