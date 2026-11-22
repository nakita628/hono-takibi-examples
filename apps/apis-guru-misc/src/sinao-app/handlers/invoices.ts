import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsAppIdInvoicesBatchRoute,
  deleteAppsAppIdInvoicesIdAttachRoute,
  deleteAppsAppIdInvoicesIdRoute,
  deleteAppsAppIdInvoicesIdTagRoute,
  getAppsAppIdInvoicesDownloadRoute,
  getAppsAppIdInvoicesIdPdfRoute,
  getAppsAppIdInvoicesIdPreviewJpgRoute,
  getAppsAppIdInvoicesIdRoute,
  getAppsAppIdInvoicesNextnumberRoute,
  getAppsAppIdInvoicesRoute,
  getAppsAppIdInvoicesStatisticsRoute,
  postAppsAppIdInvoicesBatchRoute,
  postAppsAppIdInvoicesFreshRoute,
  postAppsAppIdInvoicesIdAttachRoute,
  postAppsAppIdInvoicesIdAvoidRoute,
  postAppsAppIdInvoicesIdDuplicateRoute,
  postAppsAppIdInvoicesIdFinalizeRoute,
  postAppsAppIdInvoicesIdRoute,
  postAppsAppIdInvoicesIdTagRoute,
  postAppsAppIdInvoicesIdUpdatestatusRoute,
  postAppsAppIdInvoicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invoicesHandler = app
  .openapi(getAppsAppIdInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdInvoicesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdInvoicesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdInvoicesDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdInvoicesFreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdInvoicesNextnumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdInvoicesStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdInvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdInvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdInvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdInvoicesIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdInvoicesIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdInvoicesIdAvoidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdInvoicesIdDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdInvoicesIdFinalizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdInvoicesIdPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdInvoicesIdPreviewJpgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdInvoicesIdTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdInvoicesIdTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdInvoicesIdUpdatestatusRoute, (c) => {
    throw new Error('Not implemented')
  })
