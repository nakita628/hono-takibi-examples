import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIDRoute,
  getAccountsAccountIDAttachmentsAttachmentIDRoute,
  getAccountsAccountIDAttachmentsFileNameRoute,
  getAccountsAccountIDAttachmentsRoute,
  getAccountsAccountIDRoute,
  getAccountsRoute,
  postAccountsAccountIDAttachmentsFileNameRoute,
  postAccountsAccountIDRoute,
  putAccountsAccountIDAttachmentsFileNameRoute,
  putAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIDAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIDAttachmentsAttachmentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
