import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2PaymentMethodsPaymentMethodIdRoute, getV2PaymentMethodsRoute } from '../routes'

const app = new OpenAPIHono()

export const paymentMethodsHandler = app
  .openapi(getV2PaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
