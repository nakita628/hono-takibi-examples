import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CustomersAddressesAddressIdRoute } from '../routes'

const app = new OpenAPIHono()

export const customersAddressesAddressIdHandler = app.openapi(
  getV1CustomersAddressesAddressIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
