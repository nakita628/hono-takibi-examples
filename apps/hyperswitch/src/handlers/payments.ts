import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPaymentsListRoute,
  getPaymentsPaymentIdCancelPostCaptureRoute,
  getPaymentsPaymentIdClientRoute,
  getPaymentsPaymentIdRoute,
  postPaymentsPaymentId3dsAuthenticationRoute,
  postPaymentsPaymentIdCancelPostCaptureRoute,
  postPaymentsPaymentIdCancelRoute,
  postPaymentsPaymentIdCaptureRoute,
  postPaymentsPaymentIdCompleteAuthorizeRoute,
  postPaymentsPaymentIdConfirmRoute,
  postPaymentsPaymentIdEligibilityCheckRoute,
  postPaymentsPaymentIdEligibilityRoute,
  postPaymentsPaymentIdExtendAuthorizationRoute,
  postPaymentsPaymentIdIncrementalAuthorizationRoute,
  postPaymentsPaymentIdPostSessionTokensRoute,
  postPaymentsPaymentIdRoute,
  postPaymentsPaymentIdUpdateMetadataRoute,
  postPaymentsRoute,
  postPaymentsSessionTokensRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentsHandler = app
  .openapi(postPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsPaymentIdConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsPaymentIdCaptureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsSessionTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsPaymentIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsPaymentIdCancelPostCaptureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentsPaymentIdCancelPostCaptureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsPaymentIdExtendAuthorizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsPaymentIdIncrementalAuthorizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsPaymentId3dsAuthenticationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsPaymentIdCompleteAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsPaymentIdPostSessionTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsPaymentIdUpdateMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsPaymentIdEligibilityCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsPaymentIdEligibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentsPaymentIdClientRoute, (c) => {
    throw new Error('Not implemented')
  })
