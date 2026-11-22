import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChartIndexRoute,
  deleteChartPkRoute,
  getChartDataCacheKeyRoute,
  getChartExportIndexRoute,
  getChartFavoriteStatusIndexRoute,
  getChartIndexRoute,
  getChartInfoRoute,
  getChartPkCacheScreenshotIndexRoute,
  getChartPkDataIndexRoute,
  getChartPkRoute,
  getChartPkScreenshotDigestIndexRoute,
  getChartPkThumbnailDigestIndexRoute,
  getChartRelatedColumnNameRoute,
  postChartDataRoute,
  postChartImportIndexRoute,
  postChartIndexRoute,
  putChartPkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chartsHandler = app
  .openapi(deleteChartIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChartIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChartDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartDataCacheKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartExportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartFavoriteStatusIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChartImportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartRelatedColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChartPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChartPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartPkCacheScreenshotIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartPkDataIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartPkScreenshotDigestIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartPkThumbnailDigestIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
