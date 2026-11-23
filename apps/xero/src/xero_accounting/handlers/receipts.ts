import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getReceiptsReceiptIDAttachmentsAttachmentIDRoute,
  getReceiptsReceiptIDAttachmentsFileNameRoute,
  getReceiptsReceiptIDAttachmentsRoute,
  getReceiptsReceiptIDHistoryRoute,
  getReceiptsReceiptIDRoute,
  getReceiptsRoute,
  postReceiptsReceiptIDAttachmentsFileNameRoute,
  postReceiptsReceiptIDRoute,
  putReceiptsReceiptIDAttachmentsFileNameRoute,
  putReceiptsReceiptIDHistoryRoute,
  putReceiptsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const receiptsHandler = app
  .openapi(getReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReceiptsReceiptIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReceiptsReceiptIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReceiptsReceiptIDAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReceiptsReceiptIDAttachmentsAttachmentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReceiptsReceiptIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReceiptsReceiptIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReceiptsReceiptIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReceiptsReceiptIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReceiptsReceiptIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
