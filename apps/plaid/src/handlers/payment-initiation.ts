import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postPaymentInitiationConsentCreateRoute,
  postPaymentInitiationConsentGetRoute,
  postPaymentInitiationConsentPaymentExecuteRoute,
  postPaymentInitiationConsentRevokeRoute,
  postPaymentInitiationPaymentCreateRoute,
  postPaymentInitiationPaymentGetRoute,
  postPaymentInitiationPaymentListRoute,
  postPaymentInitiationPaymentReverseRoute,
  postPaymentInitiationPaymentTokenCreateRoute,
  postPaymentInitiationRecipientCreateRoute,
  postPaymentInitiationRecipientGetRoute,
  postPaymentInitiationRecipientListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentInitiationHandler = app
  .openapi(postPaymentInitiationRecipientCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentInitiationPaymentReverseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentInitiationRecipientGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentInitiationRecipientListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentInitiationPaymentCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentInitiationPaymentTokenCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentInitiationConsentCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentInitiationConsentGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentInitiationConsentRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentInitiationConsentPaymentExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentInitiationPaymentGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentInitiationPaymentListRoute, (c) => {
    throw new Error('Not implemented')
  })
