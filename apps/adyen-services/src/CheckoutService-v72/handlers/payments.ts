import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postPaymentsDetailsRoute,
  postPaymentsPaymentPspReferenceAmountUpdatesRoute,
  postPaymentsPaymentPspReferenceCancelsRoute,
  postPaymentsPaymentPspReferenceCapturesRoute,
  postPaymentsPaymentPspReferenceRefundsRoute,
  postPaymentsPaymentPspReferenceReversalsRoute,
  postPaymentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentsHandler = app
  .openapi(postPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsPaymentPspReferenceAmountUpdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsPaymentPspReferenceCancelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsPaymentPspReferenceCapturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsPaymentPspReferenceRefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsPaymentPspReferenceReversalsRoute, (c) => {
    throw new Error('Not implemented')
  })
