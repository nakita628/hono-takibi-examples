import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCustomersCustomerIdPaymentMethodsPaymentMethodIdRoute,
  getCustomersCustomerIdAddressesAddressIdRoute,
  getCustomersCustomerIdAddressesRoute,
  getCustomersCustomerIdBusinessesBusinessIdRoute,
  getCustomersCustomerIdBusinessesRoute,
  getCustomersCustomerIdCreditBalancesRoute,
  getCustomersCustomerIdPaymentMethodsPaymentMethodIdRoute,
  getCustomersCustomerIdPaymentMethodsRoute,
  getCustomersCustomerIdRoute,
  getCustomersRoute,
  patchCustomersCustomerIdAddressesAddressIdRoute,
  patchCustomersCustomerIdBusinessesBusinessIdRoute,
  patchCustomersCustomerIdRoute,
  postCustomersCustomerIdAddressesRoute,
  postCustomersCustomerIdAuthTokenRoute,
  postCustomersCustomerIdBusinessesRoute,
  postCustomersCustomerIdPortalSessionsRoute,
  postCustomersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customersHandler = app
  .openapi(getCustomersCustomerIdAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersCustomerIdAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersCustomerIdAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCustomersCustomerIdAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersCustomerIdBusinessesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersCustomerIdBusinessesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersCustomerIdBusinessesBusinessIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCustomersCustomerIdBusinessesBusinessIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersCustomerIdCreditBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersCustomerIdAuthTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersCustomerIdPortalSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersCustomerIdPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersCustomerIdPaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCustomersCustomerIdPaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
