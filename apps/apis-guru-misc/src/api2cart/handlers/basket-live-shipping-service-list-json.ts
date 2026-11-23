import { OpenAPIHono } from '@hono/zod-openapi'
import { getBasketLiveShippingServiceListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const basketLiveShippingServiceListJsonHandler = app.openapi(
  getBasketLiveShippingServiceListJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
