import { OpenAPIHono } from '@hono/zod-openapi'
import { postBookingsBookingIdPaymentRoute } from '../routes'

const app = new OpenAPIHono()

export const paymentsHandler = app.openapi(postBookingsBookingIdPaymentRoute, (c) => {
  throw new Error('Not implemented')
})
