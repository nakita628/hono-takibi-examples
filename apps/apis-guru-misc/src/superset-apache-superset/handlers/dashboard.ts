import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDashboardIndexRoute,
  deleteDashboardPkRoute,
  getDashboardExportIndexRoute,
  getDashboardFavoriteStatusIndexRoute,
  getDashboardIdOrSlugChartsRoute,
  getDashboardIdOrSlugDatasetsRoute,
  getDashboardIdOrSlugRoute,
  getDashboardIndexRoute,
  getDashboardInfoRoute,
  getDashboardPkThumbnailDigestIndexRoute,
  getDashboardRelatedColumnNameRoute,
  postDashboardImportIndexRoute,
  postDashboardIndexRoute,
  putDashboardPkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dashboardHandler = app
  .openapi(deleteDashboardIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDashboardIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDashboardIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDashboardInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDashboardExportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDashboardFavoriteStatusIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDashboardImportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDashboardRelatedColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDashboardIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDashboardIdOrSlugChartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDashboardIdOrSlugDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDashboardPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDashboardPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDashboardPkThumbnailDigestIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
