import { OpenAPIHono } from '@hono/zod-openapi'
import { getV21AccountsAccountIdPaymentGatewayAccountsRoute } from '../routes'

const app = new OpenAPIHono()

export const paymentGatewayAccountsHandler = app.openapi(
  getV21AccountsAccountIdPaymentGatewayAccountsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
