import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCustomersCustomerIdPaymentMethodsPaymentMethodIdRoute,
  deleteApiCustomersCustomerIdRoute,
  getApiCustomersCustomerIdPaymentMethodsPaymentMethodIdRoute,
  getApiCustomersCustomerIdPaymentMethodsRoute,
  getApiCustomersCustomerIdRoute,
  getApiCustomersRoute,
  patchApiCustomersCustomerIdPaymentMethodsPaymentMethodIdRoute,
  patchApiCustomersCustomerIdRoute,
  postApiCustomersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customersHandler = app
  .openapi(postApiCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCustomersCustomerIdPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCustomersCustomerIdPaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiCustomersCustomerIdPaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCustomersCustomerIdPaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
