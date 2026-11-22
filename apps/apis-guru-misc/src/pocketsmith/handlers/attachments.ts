import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAttachmentsIdRoute,
  deleteTransactionsTransactionIdAttachmentsAttachmentIdRoute,
  getAttachmentsIdRoute,
  getTransactionsIdAttachmentsRoute,
  getUsersIdAttachmentsRoute,
  postTransactionsIdAttachmentsRoute,
  postUsersIdAttachmentsRoute,
  putAttachmentsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const attachmentsHandler = app
  .openapi(deleteAttachmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAttachmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAttachmentsIdRoute, (c) => {
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
  .openapi(getUsersIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
