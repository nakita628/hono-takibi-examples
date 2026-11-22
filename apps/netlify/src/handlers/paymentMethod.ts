import { OpenAPIHono } from '@hono/zod-openapi'
import { getBillingPaymentMethodsRoute } from '../routes'

const app = new OpenAPIHono()

export const paymentMethodHandler = app.openapi(getBillingPaymentMethodsRoute, (c) => {
  throw new Error('Not implemented')
})
