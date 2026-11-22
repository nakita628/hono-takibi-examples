import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CustomersMeShippingAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const customersMeShippingAddressHandler = app.openapi(
  getV1CustomersMeShippingAddressRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
