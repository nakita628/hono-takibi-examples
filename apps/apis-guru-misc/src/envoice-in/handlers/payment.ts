import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiPaymentSupportedRoute } from '../routes'

const app = new OpenAPIHono()

export const paymentHandler = app.openapi(getApiPaymentSupportedRoute, (c) => {
  throw new Error('Not implemented')
})
