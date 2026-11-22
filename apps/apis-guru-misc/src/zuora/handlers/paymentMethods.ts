import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ObjectPaymentMethodIdRoute,
  deleteV1PaymentMethodsPaymentMethodIdRoute,
  getV1ObjectPaymentMethodIdRoute,
  getV1PaymentMethodsCreditCardsAccountsAccountKeyRoute,
  getV1PaymentMethodsPaymentMethodIdProfilesRoute,
  getV1PaymentMethodsPaymentMethodIdRoute,
  postV1ObjectPaymentMethodRoute,
  postV1PaymentMethodsCreditCardsRoute,
  postV1PaymentMethodsDecryptionRoute,
  postV1PaymentMethodsPaymentMethodIdAuthorizeRoute,
  postV1PaymentMethodsPaymentMethodIdProfilesProfileNumberCancelRoute,
  postV1PaymentMethodsPaymentMethodIdProfilesProfileNumberExpireRoute,
  postV1PaymentMethodsPaymentMethodIdProfilesRoute,
  postV1PaymentMethodsPaymentMethodIdVoidAuthorizeRoute,
  postV1PaymentMethodsRoute,
  putV1ObjectPaymentMethodIdRoute,
  putV1PaymentMethodsCreditCardsPaymentMethodIdRoute,
  putV1PaymentMethodsPaymentMethodIdRoute,
  putV1PaymentMethodsPaymentMethodIdScrubRoute,
  putV1PaymentMethodsPaymentMethodIdVerifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentMethodsHandler = app
  .openapi(postV1ObjectPaymentMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentMethodsCreditCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentMethodsCreditCardsAccountsAccountKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PaymentMethodsCreditCardsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentMethodsDecryptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentMethodsPaymentMethodIdAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentMethodsPaymentMethodIdProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentMethodsPaymentMethodIdProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentMethodsPaymentMethodIdProfilesProfileNumberCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentMethodsPaymentMethodIdProfilesProfileNumberExpireRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PaymentMethodsPaymentMethodIdScrubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PaymentMethodsPaymentMethodIdVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentMethodsPaymentMethodIdVoidAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
