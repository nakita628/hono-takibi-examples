import { OpenAPIHono } from '@hono/zod-openapi'
import { postBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app.openapi(postBatchRoute, (c) => {
  throw new Error('Not implemented')
})
