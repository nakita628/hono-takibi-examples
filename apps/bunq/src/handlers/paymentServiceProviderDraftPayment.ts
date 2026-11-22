import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDPaymentServiceProviderDraftPaymentItemIdRoute,
  getUserUserIDPaymentServiceProviderDraftPaymentRoute,
  postUserUserIDPaymentServiceProviderDraftPaymentRoute,
  putUserUserIDPaymentServiceProviderDraftPaymentItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentServiceProviderDraftPaymentHandler = app
  .openapi(postUserUserIDPaymentServiceProviderDraftPaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDPaymentServiceProviderDraftPaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIDPaymentServiceProviderDraftPaymentItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDPaymentServiceProviderDraftPaymentItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
