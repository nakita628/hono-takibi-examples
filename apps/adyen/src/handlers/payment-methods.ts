import { OpenAPIHono } from '@hono/zod-openapi'
import { postPaymentMethodsBalanceRoute, postPaymentMethodsRoute } from '../routes'

const app = new OpenAPIHono()

export const paymentMethodsHandler = app
  .openapi(postPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentMethodsBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
