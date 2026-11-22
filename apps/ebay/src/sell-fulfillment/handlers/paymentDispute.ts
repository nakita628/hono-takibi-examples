import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPaymentDisputePaymentDisputeIdActivityRoute,
  getPaymentDisputePaymentDisputeIdFetchEvidenceContentRoute,
  getPaymentDisputePaymentDisputeIdRoute,
  getPaymentDisputeSummaryRoute,
  postPaymentDisputePaymentDisputeIdAcceptRoute,
  postPaymentDisputePaymentDisputeIdAddEvidenceRoute,
  postPaymentDisputePaymentDisputeIdContestRoute,
  postPaymentDisputePaymentDisputeIdUpdateEvidenceRoute,
  postPaymentDisputePaymentDisputeIdUploadEvidenceFileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentDisputeHandler = app
  .openapi(getPaymentDisputePaymentDisputeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentDisputePaymentDisputeIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentDisputePaymentDisputeIdActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentDisputePaymentDisputeIdAddEvidenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentDisputePaymentDisputeIdContestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentDisputePaymentDisputeIdFetchEvidenceContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentDisputePaymentDisputeIdUpdateEvidenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentDisputePaymentDisputeIdUploadEvidenceFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentDisputeSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
