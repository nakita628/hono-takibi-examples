import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminDatabaseBackupsRoute,
  deleteAdminIntegrityReportIdRoute,
  deleteAdminUsersIdRoute,
  getAdminConfigDefaultsRoute,
  getAdminConfigRoute,
  getAdminConfigStorageTemplateRoute,
  getAdminDatabaseBackupsFilenameRoute,
  getAdminDatabaseBackupsRoute,
  getAdminIntegrityReportIdFileRoute,
  getAdminIntegrityReportRoute,
  getAdminIntegrityReportTypeCsvRoute,
  getAdminIntegritySummaryRoute,
  getAdminMaintenanceDetectInstallRoute,
  getAdminMaintenanceStatusRoute,
  getAdminUsersIdCalendarHeatmapRoute,
  getAdminUsersIdPreferencesRoute,
  getAdminUsersIdRoute,
  getAdminUsersIdSessionsRoute,
  getAdminUsersIdStatisticsRoute,
  getAdminUsersRoute,
  postAdminAuthUnlinkAllRoute,
  postAdminConfigStorageTemplatePreviewRoute,
  postAdminDatabaseBackupsStartRestoreRoute,
  postAdminDatabaseBackupsUploadRoute,
  postAdminMaintenanceLoginRoute,
  postAdminMaintenanceRoute,
  postAdminNotificationsRoute,
  postAdminNotificationsTemplatesNamePreviewRoute,
  postAdminNotificationsTemplatesNameRoute,
  postAdminNotificationsTestEmailRoute,
  postAdminUsersIdRestoreRoute,
  postAdminUsersRoute,
  putAdminConfigRoute,
  putAdminUsersIdPreferencesRoute,
  putAdminUsersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminHandler = app
  .openapi(postAdminAuthUnlinkAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminConfigDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminConfigStorageTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigStorageTemplatePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDatabaseBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDatabaseBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDatabaseBackupsStartRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDatabaseBackupsUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDatabaseBackupsFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminIntegrityReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminIntegrityReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminIntegrityReportIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminIntegrityReportTypeCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminIntegritySummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminMaintenanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminMaintenanceDetectInstallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminMaintenanceLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminMaintenanceStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminNotificationsTemplatesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminNotificationsTemplatesNamePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminNotificationsTestEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersIdCalendarHeatmapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersIdPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminUsersIdPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersIdStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
