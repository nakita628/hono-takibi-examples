import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPurchaseOrdersPurchaseOrderIDAttachmentsAttachmentIDRoute,
  getPurchaseOrdersPurchaseOrderIDAttachmentsFileNameRoute,
  getPurchaseOrdersPurchaseOrderIDAttachmentsRoute,
  getPurchaseOrdersPurchaseOrderIDHistoryRoute,
  getPurchaseOrdersPurchaseOrderIDPdfRoute,
  getPurchaseOrdersPurchaseOrderIDRoute,
  getPurchaseOrdersPurchaseOrderNumberRoute,
  getPurchaseOrdersRoute,
  postPurchaseOrdersPurchaseOrderIDAttachmentsFileNameRoute,
  postPurchaseOrdersPurchaseOrderIDRoute,
  postPurchaseOrdersRoute,
  putPurchaseOrdersPurchaseOrderIDAttachmentsFileNameRoute,
  putPurchaseOrdersPurchaseOrderIDHistoryRoute,
  putPurchaseOrdersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const purchaseOrdersHandler = app
  .openapi(getPurchaseOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPurchaseOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPurchaseOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPurchaseOrdersPurchaseOrderIDPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPurchaseOrdersPurchaseOrderIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPurchaseOrdersPurchaseOrderIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPurchaseOrdersPurchaseOrderNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPurchaseOrdersPurchaseOrderIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPurchaseOrdersPurchaseOrderIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPurchaseOrdersPurchaseOrderIDAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPurchaseOrdersPurchaseOrderIDAttachmentsAttachmentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPurchaseOrdersPurchaseOrderIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPurchaseOrdersPurchaseOrderIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPurchaseOrdersPurchaseOrderIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
