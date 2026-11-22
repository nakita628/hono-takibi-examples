import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1SalesRoute } from '../routes'

const app = new OpenAPIHono()

export const salesHandler = app.openapi(getV1SalesRoute, (c) => {
  throw new Error('Not implemented')
})
