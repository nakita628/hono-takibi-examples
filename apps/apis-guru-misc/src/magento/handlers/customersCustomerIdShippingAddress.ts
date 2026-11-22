import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CustomersCustomerIdShippingAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const customersCustomerIdShippingAddressHandler = app.openapi(
  getV1CustomersCustomerIdShippingAddressRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
