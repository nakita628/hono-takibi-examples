import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CartsMineShippingMethodsRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsMineShippingMethodsHandler = app.openapi(
  getV1CartsMineShippingMethodsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
