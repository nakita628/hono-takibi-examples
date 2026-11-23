import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiOrdersPvtDocumentOrderIdRoute,
  postApiOrdersExtendsearchOrdersRoute,
  postApiOrdersPvtDocumentOrderIdActionsStartHandlingRoute,
  postApiOrdersPvtDocumentOrderIdCancelRoute,
  postApiOrdersPvtDocumentOrderIdInvoicesRoute,
  postApiOrdersPvtDocumentOrderIdPaymentPaymentIdNotifyPaymentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(postApiOrdersExtendsearchOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrdersPvtDocumentOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrdersPvtDocumentOrderIdActionsStartHandlingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrdersPvtDocumentOrderIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrdersPvtDocumentOrderIdInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrdersPvtDocumentOrderIdPaymentPaymentIdNotifyPaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
