import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCancelsRoute,
  postPaymentsPaymentPspReferenceAmountUpdatesRoute,
  postPaymentsPaymentPspReferenceCancelsRoute,
  postPaymentsPaymentPspReferenceCapturesRoute,
  postPaymentsPaymentPspReferenceRefundsRoute,
  postPaymentsPaymentPspReferenceReversalsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const modificationsHandler = app
  .openapi(postCancelsRoute, (c) => {
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
