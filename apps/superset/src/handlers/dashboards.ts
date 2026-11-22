import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1DashboardIdOrSlugEmbeddedRoute,
  deleteApiV1DashboardIndexRoute,
  deleteApiV1DashboardPkFavoritesIndexRoute,
  deleteApiV1DashboardPkRoute,
  getApiV1DashboardExportIndexRoute,
  getApiV1DashboardExportXlsxDownloadJobIdIndexRoute,
  getApiV1DashboardExportXlsxStatusJobIdIndexRoute,
  getApiV1DashboardFavoriteStatusIndexRoute,
  getApiV1DashboardIdOrSlugChartsRoute,
  getApiV1DashboardIdOrSlugDatasetsRoute,
  getApiV1DashboardIdOrSlugEmbeddedRoute,
  getApiV1DashboardIdOrSlugRoute,
  getApiV1DashboardIdOrSlugTabsRoute,
  getApiV1DashboardIndexRoute,
  getApiV1DashboardInfoRoute,
  getApiV1DashboardPkExportAsExampleIndexRoute,
  getApiV1DashboardPkScreenshotDigestIndexRoute,
  getApiV1DashboardPkThumbnailDigestIndexRoute,
  getApiV1DashboardRelatedColumnNameRoute,
  getApiV1DashboardUuidStrActivityIndexRoute,
  getApiV1DashboardUuidStrVersionsIndexRoute,
  getApiV1DashboardUuidStrVersionsVersionUuidStrIndexRoute,
  postApiV1DashboardIdOrSlugCopyIndexRoute,
  postApiV1DashboardIdOrSlugEmbeddedRoute,
  postApiV1DashboardImportIndexRoute,
  postApiV1DashboardIndexRoute,
  postApiV1DashboardPkCacheDashboardScreenshotIndexRoute,
  postApiV1DashboardPkExportXlsxIndexRoute,
  postApiV1DashboardPkFavoritesIndexRoute,
  postApiV1DashboardUuidPurgeRoute,
  postApiV1DashboardUuidRestoreRoute,
  postApiV1DashboardUuidStrVersionsVersionUuidStrRestoreRoute,
  putApiV1DashboardIdOrSlugEmbeddedRoute,
  putApiV1DashboardPkChartCustomizationsRoute,
  putApiV1DashboardPkColorsRoute,
  putApiV1DashboardPkFiltersRoute,
  putApiV1DashboardPkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dashboardsHandler = app
  .openapi(deleteApiV1DashboardIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DashboardIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardExportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardExportXlsxDownloadJobIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardExportXlsxStatusJobIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardFavoriteStatusIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DashboardImportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardRelatedColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardIdOrSlugChartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DashboardIdOrSlugCopyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardIdOrSlugDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DashboardIdOrSlugEmbeddedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardIdOrSlugEmbeddedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DashboardIdOrSlugEmbeddedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DashboardIdOrSlugEmbeddedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardIdOrSlugTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DashboardPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DashboardPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DashboardPkCacheDashboardScreenshotIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DashboardPkChartCustomizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DashboardPkColorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardPkExportAsExampleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DashboardPkExportXlsxIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DashboardPkFavoritesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DashboardPkFavoritesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DashboardPkFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardPkScreenshotDigestIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardPkThumbnailDigestIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardUuidStrActivityIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardUuidStrVersionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardUuidStrVersionsVersionUuidStrIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DashboardUuidStrVersionsVersionUuidStrRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DashboardUuidPurgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DashboardUuidRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
