import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCustomersCustomerIdRoute,
  getCustomersCustomerIdMandatesRoute,
  getCustomersCustomerIdPaymentMethodsRoute,
  getCustomersCustomerIdRoute,
  getCustomersListRoute,
  getCustomersPaymentMethodsRoute,
  postCustomersCustomerIdRoute,
  postCustomersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customersHandler = app
  .openapi(getCustomersCustomerIdMandatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersCustomerIdPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
