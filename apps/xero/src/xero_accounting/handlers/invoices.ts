import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInvoicesInvoiceIDAttachmentsAttachmentIDRoute,
  getInvoicesInvoiceIDAttachmentsFileNameRoute,
  getInvoicesInvoiceIDAttachmentsRoute,
  getInvoicesInvoiceIDHistoryRoute,
  getInvoicesInvoiceIDOnlineInvoiceRoute,
  getInvoicesInvoiceIDPdfRoute,
  getInvoicesInvoiceIDRoute,
  getInvoicesRoute,
  postInvoicesInvoiceIDAttachmentsFileNameRoute,
  postInvoicesInvoiceIDEmailRoute,
  postInvoicesInvoiceIDRoute,
  postInvoicesRoute,
  putInvoicesInvoiceIDAttachmentsFileNameRoute,
  putInvoicesInvoiceIDHistoryRoute,
  putInvoicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invoicesHandler = app
  .openapi(getInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvoicesInvoiceIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvoicesInvoiceIDPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvoicesInvoiceIDAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvoicesInvoiceIDAttachmentsAttachmentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvoicesInvoiceIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInvoicesInvoiceIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvoicesInvoiceIDOnlineInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIDEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvoicesInvoiceIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInvoicesInvoiceIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
