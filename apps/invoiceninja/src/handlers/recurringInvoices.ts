import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1RecurringInvoicesIdRoute,
  getApiV1RecurringInvoiceInvitationKeyDownloadRoute,
  getApiV1RecurringInvoicesCreateRoute,
  getApiV1RecurringInvoicesIdActionRoute,
  getApiV1RecurringInvoicesIdEditRoute,
  getApiV1RecurringInvoicesIdRoute,
  getApiV1RecurringInvoicesRoute,
  postApiV1RecurringInvoicesBulkRoute,
  postApiV1RecurringInvoicesIdUploadRoute,
  postApiV1RecurringInvoicesRoute,
  putApiV1RecurringInvoicesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const recurringInvoicesHandler = app
  .openapi(getApiV1RecurringInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RecurringInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RecurringInvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1RecurringInvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1RecurringInvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RecurringInvoicesIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RecurringInvoicesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RecurringInvoicesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RecurringInvoicesIdActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RecurringInvoiceInvitationKeyDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RecurringInvoicesIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
