import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CustomersCustomerIdCartsRoute } from '../routes'

const app = new OpenAPIHono()

export const customersCustomerIdCartsHandler = app.openapi(
  postV1CustomersCustomerIdCartsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
