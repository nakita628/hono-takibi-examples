import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePaymentMethodsMethodIdRoute,
  getPaymentMethodsMethodIdRoute,
  postPaymentMethodsMethodIdUpdateRoute,
  postPaymentMethodsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentMethodsHandler = app
  .openapi(postPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentMethodsMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePaymentMethodsMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentMethodsMethodIdUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
