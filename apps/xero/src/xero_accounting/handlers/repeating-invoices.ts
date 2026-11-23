import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRepeatingInvoicesRepeatingInvoiceIDAttachmentsAttachmentIDRoute,
  getRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameRoute,
  getRepeatingInvoicesRepeatingInvoiceIDAttachmentsRoute,
  getRepeatingInvoicesRepeatingInvoiceIDHistoryRoute,
  getRepeatingInvoicesRepeatingInvoiceIDRoute,
  getRepeatingInvoicesRoute,
  postRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameRoute,
  postRepeatingInvoicesRepeatingInvoiceIDRoute,
  postRepeatingInvoicesRoute,
  putRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameRoute,
  putRepeatingInvoicesRepeatingInvoiceIDHistoryRoute,
  putRepeatingInvoicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const repeatingInvoicesHandler = app
  .openapi(getRepeatingInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepeatingInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepeatingInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepeatingInvoicesRepeatingInvoiceIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepeatingInvoicesRepeatingInvoiceIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepeatingInvoicesRepeatingInvoiceIDAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepeatingInvoicesRepeatingInvoiceIDAttachmentsAttachmentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepeatingInvoicesRepeatingInvoiceIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepeatingInvoicesRepeatingInvoiceIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
