import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDPaymentServiceProviderIssuerTransactionItemIdRoute,
  getUserUserIDPaymentServiceProviderIssuerTransactionRoute,
  postUserUserIDPaymentServiceProviderIssuerTransactionRoute,
  putUserUserIDPaymentServiceProviderIssuerTransactionItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentServiceProviderIssuerTransactionHandler = app
  .openapi(postUserUserIDPaymentServiceProviderIssuerTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDPaymentServiceProviderIssuerTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDPaymentServiceProviderIssuerTransactionItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIDPaymentServiceProviderIssuerTransactionItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
