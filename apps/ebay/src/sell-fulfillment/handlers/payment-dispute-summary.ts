import { OpenAPIHono } from '@hono/zod-openapi'
import { getPaymentDisputeSummaryRoute } from '../routes'

const app = new OpenAPIHono()

export const paymentDisputeSummaryHandler = app.openapi(getPaymentDisputeSummaryRoute, (c) => {
  throw new Error('Not implemented')
})
