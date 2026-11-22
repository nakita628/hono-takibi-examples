import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CustomersMeBillingAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const customersMeBillingAddressHandler = app.openapi(
  getV1CustomersMeBillingAddressRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
