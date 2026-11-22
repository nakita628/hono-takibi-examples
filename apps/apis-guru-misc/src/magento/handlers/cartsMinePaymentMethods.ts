import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CartsMinePaymentMethodsRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsMinePaymentMethodsHandler = app.openapi(
  getV1CartsMinePaymentMethodsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
