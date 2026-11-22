import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsAppIdQuotesBatchRoute,
  deleteAppsAppIdQuotesIdAttachRoute,
  deleteAppsAppIdQuotesIdRoute,
  deleteAppsAppIdQuotesIdTagRoute,
  getAppsAppIdQuotesDownloadRoute,
  getAppsAppIdQuotesIdPdfRoute,
  getAppsAppIdQuotesIdPreviewJpgRoute,
  getAppsAppIdQuotesIdRoute,
  getAppsAppIdQuotesIdYousignPreviewJpgRoute,
  getAppsAppIdQuotesNextnumberRoute,
  getAppsAppIdQuotesRoute,
  getAppsAppIdQuotesStatisticsRoute,
  postAppsAppIdQuotesBatchRoute,
  postAppsAppIdQuotesFreshRoute,
  postAppsAppIdQuotesIdAttachRoute,
  postAppsAppIdQuotesIdDownpaymentRoute,
  postAppsAppIdQuotesIdDuplicateRoute,
  postAppsAppIdQuotesIdFinalizeRoute,
  postAppsAppIdQuotesIdInvoiceRoute,
  postAppsAppIdQuotesIdRoute,
  postAppsAppIdQuotesIdSituationInvoiceRoute,
  postAppsAppIdQuotesIdTagRoute,
  postAppsAppIdQuotesIdUpdatestatusRoute,
  postAppsAppIdQuotesInvoiceRoute,
  postAppsAppIdQuotesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const quotesHandler = app
  .openapi(getAppsAppIdQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdQuotesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdQuotesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdQuotesDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdQuotesFreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdQuotesInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdQuotesNextnumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdQuotesStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdQuotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdQuotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdQuotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdQuotesIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdQuotesIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdQuotesIdDownpaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdQuotesIdDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdQuotesIdFinalizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdQuotesIdInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdQuotesIdPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdQuotesIdPreviewJpgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdQuotesIdSituationInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdQuotesIdTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdQuotesIdTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdQuotesIdUpdatestatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdQuotesIdYousignPreviewJpgRoute, (c) => {
    throw new Error('Not implemented')
  })
