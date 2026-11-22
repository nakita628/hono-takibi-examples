import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCustomersExternalCustomerIdPaymentMethodsLagoIdRoute,
  getCustomersExternalCustomerIdPaymentMethodsRoute,
  putCustomersExternalCustomerIdPaymentMethodsLagoIdSetAsDefaultRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentMethodsHandler = app
  .openapi(getCustomersExternalCustomerIdPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCustomersExternalCustomerIdPaymentMethodsLagoIdSetAsDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCustomersExternalCustomerIdPaymentMethodsLagoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
