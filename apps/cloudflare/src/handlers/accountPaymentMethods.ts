import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdPaymentMethodsPaymentMethodIdRoute,
  getAccountsAccountIdPaymentMethodsPaymentMethodIdRoute,
  getAccountsAccountIdPaymentMethodsRoute,
  postAccountsAccountIdPaymentMethodsPaymentMethodIdSetAsDefaultRoute,
  postAccountsAccountIdPaymentMethodsRoute,
  putAccountsAccountIdPaymentMethodsPaymentMethodIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountPaymentMethodsHandler = app
  .openapi(getAccountsAccountIdPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdPaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdPaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdPaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdPaymentMethodsPaymentMethodIdSetAsDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
