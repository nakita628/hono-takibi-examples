import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1InvoicesIdRoute,
  getApiV1InvoiceInvitationKeyDownloadRoute,
  getApiV1InvoicesCreateRoute,
  getApiV1InvoicesIdActionRoute,
  getApiV1InvoicesIdDeliveryNoteRoute,
  getApiV1InvoicesIdEditRoute,
  getApiV1InvoicesIdRoute,
  getApiV1InvoicesRoute,
  postApiV1InvoicesBulkRoute,
  postApiV1InvoicesIdUploadRoute,
  postApiV1InvoicesRoute,
  putApiV1InvoicesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invoicesHandler = app
  .openapi(getApiV1InvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1InvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1InvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1InvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InvoicesIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InvoicesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1InvoicesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InvoicesIdActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InvoiceInvitationKeyDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InvoicesIdDeliveryNoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1InvoicesIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
