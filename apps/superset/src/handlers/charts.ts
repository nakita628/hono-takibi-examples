import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1ChartIndexRoute,
  deleteApiV1ChartPkFavoritesIndexRoute,
  deleteApiV1ChartPkRoute,
  getApiV1ChartExportIndexRoute,
  getApiV1ChartFavoriteStatusIndexRoute,
  getApiV1ChartIdOrUuidRoute,
  getApiV1ChartIndexRoute,
  getApiV1ChartInfoRoute,
  getApiV1ChartPkCacheScreenshotIndexRoute,
  getApiV1ChartPkDataIndexRoute,
  getApiV1ChartPkDeckLayersIndexRoute,
  getApiV1ChartPkScreenshotDigestIndexRoute,
  getApiV1ChartPkThumbnailDigestIndexRoute,
  getApiV1ChartRelatedColumnNameRoute,
  getApiV1ChartUuidStrActivityIndexRoute,
  getApiV1ChartUuidStrVersionsIndexRoute,
  getApiV1ChartUuidStrVersionsVersionUuidStrIndexRoute,
  postApiV1ChartDataRoute,
  postApiV1ChartDataStopRoute,
  postApiV1ChartImportIndexRoute,
  postApiV1ChartIndexRoute,
  postApiV1ChartPkFavoritesIndexRoute,
  postApiV1ChartUuidPurgeRoute,
  postApiV1ChartUuidRestoreRoute,
  postApiV1ChartUuidStrVersionsVersionUuidStrRestoreRoute,
  putApiV1ChartPkRoute,
  putApiV1ChartWarmUpCacheRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chartsHandler = app
  .openapi(deleteApiV1ChartIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChartIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChartIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChartInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChartDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChartDataStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChartExportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChartFavoriteStatusIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChartImportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChartRelatedColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ChartWarmUpCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChartIdOrUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ChartPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ChartPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChartPkCacheScreenshotIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChartPkDataIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChartPkDeckLayersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ChartPkFavoritesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChartPkFavoritesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChartPkScreenshotDigestIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChartPkThumbnailDigestIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChartUuidStrActivityIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChartUuidStrVersionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChartUuidStrVersionsVersionUuidStrIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChartUuidStrVersionsVersionUuidStrRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChartUuidPurgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChartUuidRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
