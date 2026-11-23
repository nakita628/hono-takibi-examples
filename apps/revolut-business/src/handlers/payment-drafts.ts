import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePaymentDraftsPaymentDraftIdPaymentsPaymentIdRoute,
  deletePaymentDraftsPaymentDraftIdRoute,
  getPaymentDraftsPaymentDraftIdRoute,
  getPaymentDraftsRoute,
  patchPaymentDraftsPaymentDraftIdPaymentsPaymentIdRoute,
  patchPaymentDraftsPaymentDraftIdRoute,
  postPaymentDraftsPaymentDraftIdPaymentsRoute,
  postPaymentDraftsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentDraftsHandler = app
  .openapi(getPaymentDraftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentDraftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentDraftsPaymentDraftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePaymentDraftsPaymentDraftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPaymentDraftsPaymentDraftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentDraftsPaymentDraftIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPaymentDraftsPaymentDraftIdPaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePaymentDraftsPaymentDraftIdPaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
