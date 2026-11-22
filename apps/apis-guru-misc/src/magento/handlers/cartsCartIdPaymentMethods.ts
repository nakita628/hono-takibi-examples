import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CartsCartIdPaymentMethodsRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsCartIdPaymentMethodsHandler = app.openapi(
  getV1CartsCartIdPaymentMethodsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
