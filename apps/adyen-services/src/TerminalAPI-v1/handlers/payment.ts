import { OpenAPIHono } from '@hono/zod-openapi'
import { postPaymentRoute } from '../routes'

const app = new OpenAPIHono()

export const paymentHandler = app.openapi(postPaymentRoute, (c) => {
  throw new Error('Not implemented')
})
