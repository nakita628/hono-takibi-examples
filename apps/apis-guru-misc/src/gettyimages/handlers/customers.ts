import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3CustomersCurrentRoute } from '../routes'

const app = new OpenAPIHono()

export const customersHandler = app.openapi(getV3CustomersCurrentRoute, (c) => {
  throw new Error('Not implemented')
})
