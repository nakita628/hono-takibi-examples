import { OpenAPIHono } from '@hono/zod-openapi'
import { postOrdersCancelRoute, postOrdersRoute, postPaymentMethodsBalanceRoute } from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app
  .openapi(postOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrdersCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentMethodsBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
