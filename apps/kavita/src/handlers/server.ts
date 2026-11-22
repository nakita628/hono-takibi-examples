import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiServerActivityRoute,
  getApiServerChangelogRoute,
  getApiServerCheckForUpdatesRoute,
  getApiServerCheckOutOfDateRoute,
  getApiServerCheckUpdateRoute,
  getApiServerDebugExportExportIdRoute,
  getApiServerIsTaskRunningRoute,
  getApiServerJobsRoute,
  getApiServerLogsRoute,
  getApiServerMediaErrorsForSeriesRoute,
  getApiServerMediaErrorsRoute,
  getApiServerServerInfoSlimRoute,
  postApiServerAnalyzeFilesRoute,
  postApiServerBackupDbRoute,
  postApiServerBustKavitaplusCacheRoute,
  postApiServerCleanupRoute,
  postApiServerCleanupWantToReadRoute,
  postApiServerClearCacheRoute,
  postApiServerClearMediaAlertsRoute,
  postApiServerConvertMediaRoute,
  postApiServerDebugExportRoute,
  postApiServerMediaErrorsDismissRoute,
  postApiServerMediaErrorsUndismissRoute,
  postApiServerSyncThemesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serverHandler = app
  .openapi(postApiServerClearCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiServerCleanupWantToReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiServerCleanupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiServerBackupDbRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiServerAnalyzeFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServerServerInfoSlimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiServerConvertMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServerLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiServerDebugExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServerDebugExportExportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServerCheckForUpdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServerCheckUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServerCheckOutOfDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServerChangelogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServerJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServerActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServerMediaErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiServerMediaErrorsDismissRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiServerMediaErrorsUndismissRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServerMediaErrorsForSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiServerClearMediaAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiServerBustKavitaplusCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiServerSyncThemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServerIsTaskRunningRoute, (c) => {
    throw new Error('Not implemented')
  })
