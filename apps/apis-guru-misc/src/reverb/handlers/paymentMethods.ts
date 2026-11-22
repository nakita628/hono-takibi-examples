import { OpenAPIHono } from '@hono/zod-openapi'
import { getPaymentMethodsRoute } from '../routes'

const app = new OpenAPIHono()

export const paymentMethodsHandler = app.openapi(getPaymentMethodsRoute, (c) => {
  throw new Error('Not implemented')
})
