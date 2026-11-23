import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePaymentMethodsIdRoute,
  getPaymentMethodsIdRoute,
  putPaymentMethodsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentMethodsHandler = app
  .openapi(deletePaymentMethodsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentMethodsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPaymentMethodsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
