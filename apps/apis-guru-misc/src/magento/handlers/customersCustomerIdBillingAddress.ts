import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CustomersCustomerIdBillingAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const customersCustomerIdBillingAddressHandler = app.openapi(
  getV1CustomersCustomerIdBillingAddressRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
