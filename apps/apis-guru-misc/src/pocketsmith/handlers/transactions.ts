import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTransactionsIdRoute,
  deleteTransactionsTransactionIdAttachmentsAttachmentIdRoute,
  getTransactionsIdAttachmentsRoute,
  getTransactionsIdRoute,
  postTransactionsIdAttachmentsRoute,
  putTransactionsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionsHandler = app
  .openapi(deleteTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransactionsIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionsIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTransactionsTransactionIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
