import { OpenAPIHono } from '@hono/zod-openapi'
import { getBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app.openapi(getBatchRoute, (c) => {
  throw new Error('Not implemented')
})
