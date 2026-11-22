import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1PaymentgatewaysRoute } from '../routes'

const app = new OpenAPIHono()

export const paymentGatewaysHandler = app.openapi(getV1PaymentgatewaysRoute, (c) => {
  throw new Error('Not implemented')
})
