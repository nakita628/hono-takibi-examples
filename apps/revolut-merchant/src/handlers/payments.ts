import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiPaymentsPaymentIdRoute } from '../routes'

const app = new OpenAPIHono()

export const paymentsHandler = app.openapi(getApiPaymentsPaymentIdRoute, (c) => {
  throw new Error('Not implemented')
})
