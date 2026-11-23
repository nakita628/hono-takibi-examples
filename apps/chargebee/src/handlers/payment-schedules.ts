import { OpenAPIHono } from '@hono/zod-openapi'
import { getPaymentSchedulesRoute } from '../routes'

const app = new OpenAPIHono()

export const paymentSchedulesHandler = app.openapi(getPaymentSchedulesRoute, (c) => {
  throw new Error('Not implemented')
})
