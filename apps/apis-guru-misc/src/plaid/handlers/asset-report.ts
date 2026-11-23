import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAssetReportAuditCopyCreateRoute,
  postAssetReportAuditCopyGetRoute,
  postAssetReportAuditCopyRemoveRoute,
  postAssetReportCreateRoute,
  postAssetReportFilterRoute,
  postAssetReportGetRoute,
  postAssetReportPdfGetRoute,
  postAssetReportRefreshRoute,
  postAssetReportRemoveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assetReportHandler = app
  .openapi(postAssetReportAuditCopyCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetReportAuditCopyGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetReportAuditCopyRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetReportCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetReportFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetReportGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetReportPdfGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetReportRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetReportRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
