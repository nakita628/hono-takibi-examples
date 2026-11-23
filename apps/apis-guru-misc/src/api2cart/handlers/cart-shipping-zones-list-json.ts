import { OpenAPIHono } from '@hono/zod-openapi'
import { getCartShippingZonesListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const cartShippingZonesListJsonHandler = app.openapi(
  getCartShippingZonesListJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
