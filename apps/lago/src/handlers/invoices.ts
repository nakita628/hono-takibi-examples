import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteInvoicesLagoIdRoute,
  getInvoicesLagoIdRoute,
  getInvoicesRoute,
  postInvoicesLagoIdDownloadRoute,
  postInvoicesLagoIdDownloadXmlRoute,
  postInvoicesLagoIdLoseDisputeRoute,
  postInvoicesLagoIdPaymentUrlRoute,
  postInvoicesLagoIdRetryPaymentRoute,
  postInvoicesLagoIdRetryRoute,
  postInvoicesLagoIdVoidRoute,
  postInvoicesPreviewRoute,
  postInvoicesRoute,
  putInvoicesLagoIdFinalizeRoute,
  putInvoicesLagoIdRefreshRoute,
  putInvoicesLagoIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invoicesHandler = app
  .openapi(postInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInvoicesLagoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvoicesLagoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInvoicesLagoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesLagoIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesLagoIdDownloadXmlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInvoicesLagoIdFinalizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesLagoIdLoseDisputeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInvoicesLagoIdRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesLagoIdRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesLagoIdPaymentUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesLagoIdRetryPaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesLagoIdVoidRoute, (c) => {
    throw new Error('Not implemented')
  })
