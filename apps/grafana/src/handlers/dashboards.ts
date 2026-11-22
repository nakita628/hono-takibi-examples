import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDashboardsUidDashboardUidPublicDashboardsUidRoute,
  deleteDashboardsUidUidRoute,
  deleteSnapshotsKeyRoute,
  getDashboardsHomeRoute,
  getDashboardSnapshotsRoute,
  getDashboardsPublicDashboardsRoute,
  getDashboardsTagsRoute,
  getDashboardsUidDashboardUidPublicDashboardsRoute,
  getDashboardsUidUidPermissionsRoute,
  getDashboardsUidUidRoute,
  getDashboardsUidUidVersionsDashboardVersionIDRoute,
  getDashboardsUidUidVersionsRoute,
  getPublicDashboardsAccessTokenAnnotationsRoute,
  getPublicDashboardsAccessTokenRoute,
  getSnapshotsDeleteDeleteKeyRoute,
  getSnapshotsKeyRoute,
  patchDashboardsUidDashboardUidPublicDashboardsUidRoute,
  postDashboardsDbRoute,
  postDashboardsImportRoute,
  postDashboardsInterpolateRoute,
  postDashboardsUidDashboardUidPublicDashboardsRoute,
  postDashboardsUidUidPermissionsRoute,
  postDashboardsUidUidRestoreRoute,
  postPublicDashboardsAccessTokenPanelsPanelIdQueryRoute,
  postSnapshotsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dashboardsHandler = app
  .openapi(getDashboardSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getPublicDashboardsAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicDashboardsAccessTokenAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicDashboardsAccessTokenPanelsPanelIdQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnapshotsDeleteDeleteKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSnapshotsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnapshotsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
