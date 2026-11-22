import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CustomersCustomerIdConfirmRoute } from '../routes'

const app = new OpenAPIHono()

export const customersCustomerIdConfirmHandler = app.openapi(
  getV1CustomersCustomerIdConfirmRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
