import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDashboardsUidDashboardUidPublicDashboardsUidRoute,
  deleteDashboardsUidUidRoute,
  getDashboardsHomeRoute,
  getDashboardsPublicDashboardsRoute,
  getDashboardsTagsRoute,
  getDashboardsUidDashboardUidPublicDashboardsRoute,
  getDashboardsUidUidPermissionsRoute,
  getDashboardsUidUidRoute,
  getDashboardsUidUidVersionsDashboardVersionIDRoute,
  getDashboardsUidUidVersionsRoute,
  getDashboardsVariablesSharedClustersOccurrencesRoute,
  getDashboardsVariablesSharedClustersRoute,
  patchDashboardsUidDashboardUidPublicDashboardsUidRoute,
  postDashboardsDbRoute,
  postDashboardsImportRoute,
  postDashboardsInterpolateRoute,
  postDashboardsUidDashboardUidPublicDashboardsRoute,
  postDashboardsUidUidPermissionsRoute,
  postDashboardsUidUidRestoreRoute,
  postDashboardsVariablesPromoteRoute,
  postDashboardsVariablesSharedClustersRescanRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dashboardsHandler = app
  .openapi(postDashboardsDbRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDashboardsHomeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDashboardsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDashboardsInterpolateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDashboardsPublicDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDashboardsTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDashboardsUidDashboardUidPublicDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDashboardsUidDashboardUidPublicDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDashboardsUidDashboardUidPublicDashboardsUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDashboardsUidDashboardUidPublicDashboardsUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDashboardsUidUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDashboardsUidUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDashboardsUidUidPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDashboardsUidUidPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDashboardsUidUidRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDashboardsUidUidVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDashboardsUidUidVersionsDashboardVersionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDashboardsVariablesPromoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDashboardsVariablesSharedClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDashboardsVariablesSharedClustersOccurrencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDashboardsVariablesSharedClustersRescanRoute, (c) => {
    throw new Error('Not implemented')
  })
