import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CustomersRoute } from '../routes'

const app = new OpenAPIHono()

export const customersHandler = app.openapi(postV1CustomersRoute, (c) => {
  throw new Error('Not implemented')
})
