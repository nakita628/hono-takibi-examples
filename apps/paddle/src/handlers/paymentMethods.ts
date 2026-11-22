import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCustomersCustomerIdPaymentMethodsPaymentMethodIdRoute,
  getCustomersCustomerIdPaymentMethodsPaymentMethodIdRoute,
  getCustomersCustomerIdPaymentMethodsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentMethodsHandler = app
  .openapi(getCustomersCustomerIdPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersCustomerIdPaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCustomersCustomerIdPaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
