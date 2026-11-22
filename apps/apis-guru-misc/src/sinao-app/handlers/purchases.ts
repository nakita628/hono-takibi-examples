import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsAppIdPurchasesBatchRoute,
  deleteAppsAppIdPurchasesIdAttachRoute,
  deleteAppsAppIdPurchasesIdRoute,
  deleteAppsAppIdPurchasesIdTagRoute,
  getAppsAppIdPurchasesDownloadRoute,
  getAppsAppIdPurchasesIdOriginalRoute,
  getAppsAppIdPurchasesIdPreviewJpgRoute,
  getAppsAppIdPurchasesIdRoute,
  getAppsAppIdPurchasesIdThumbnailJpgRoute,
  getAppsAppIdPurchasesRoute,
  getAppsAppIdPurchasesStatisticsRoute,
  postAppsAppIdPurchasesBatchRoute,
  postAppsAppIdPurchasesIdAttachRoute,
  postAppsAppIdPurchasesIdRoute,
  postAppsAppIdPurchasesIdTagRoute,
  postAppsAppIdPurchasesIdUpdatestatusRoute,
  postAppsAppIdPurchasesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const purchasesHandler = app
  .openapi(getAppsAppIdPurchasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdPurchasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdPurchasesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdPurchasesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdPurchasesDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdPurchasesStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdPurchasesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdPurchasesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdPurchasesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdPurchasesIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdPurchasesIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdPurchasesIdOriginalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdPurchasesIdPreviewJpgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdPurchasesIdTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdPurchasesIdTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdPurchasesIdThumbnailJpgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdPurchasesIdUpdatestatusRoute, (c) => {
    throw new Error('Not implemented')
  })
