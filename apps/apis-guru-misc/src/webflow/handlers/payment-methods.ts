import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePaymentMethodsPaymentMethodIdRoute,
  getPaymentMethodsPaymentMethodIdRoute,
  getPaymentMethodsRoute,
  optionsPaymentMethodsPaymentMethodIdRoute,
  optionsPaymentMethodsRoute,
  patchPaymentMethodsPaymentMethodIdRoute,
  postPaymentMethodsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentMethodsHandler = app
  .openapi(getPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsPaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
