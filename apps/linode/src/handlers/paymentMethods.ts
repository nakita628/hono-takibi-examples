import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionAccountPaymentMethodsPaymentMethodIdRoute,
  getApiVersionAccountPaymentMethodsPaymentMethodIdRoute,
  getApiVersionAccountPaymentMethodsRoute,
  postApiVersionAccountPaymentMethodsPaymentMethodIdMakeDefaultRoute,
  postApiVersionAccountPaymentMethodsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentMethodsHandler = app
  .openapi(postApiVersionAccountPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountPaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionAccountPaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionAccountPaymentMethodsPaymentMethodIdMakeDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
