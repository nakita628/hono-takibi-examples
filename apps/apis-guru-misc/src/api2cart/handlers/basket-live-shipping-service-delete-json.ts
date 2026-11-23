import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteBasketLiveShippingServiceDeleteJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const basketLiveShippingServiceDeleteJsonHandler = app.openapi(
  deleteBasketLiveShippingServiceDeleteJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
