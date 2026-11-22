import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiCustomersRoute } from '../routes'

const app = new OpenAPIHono()

export const customersHandler = app.openapi(getApiCustomersRoute, (c) => {
  throw new Error('Not implemented')
})
