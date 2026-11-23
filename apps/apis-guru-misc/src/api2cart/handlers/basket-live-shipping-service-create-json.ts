import { OpenAPIHono } from '@hono/zod-openapi'
import { postBasketLiveShippingServiceCreateJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const basketLiveShippingServiceCreateJsonHandler = app.openapi(
  postBasketLiveShippingServiceCreateJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
