import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1SalesReportsRoute } from '../routes'

const app = new OpenAPIHono()

export const salesReportsHandler = app.openapi(getV1SalesReportsRoute, (c) => {
  throw new Error('Not implemented')
})
