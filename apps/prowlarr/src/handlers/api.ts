import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1ApplicationsBulkRoute,
  deleteApiV1ApplicationsIdRoute,
  deleteApiV1AppprofileIdRoute,
  deleteApiV1CommandIdRoute,
  deleteApiV1CustomfilterIdRoute,
  deleteApiV1DownloadclientBulkRoute,
  deleteApiV1DownloadclientIdRoute,
  deleteApiV1IndexerBulkRoute,
  deleteApiV1IndexerIdRoute,
  deleteApiV1IndexerproxyIdRoute,
  deleteApiV1NotificationIdRoute,
  deleteApiV1SystemBackupIdRoute,
  deleteApiV1TagIdRoute,
  getApiRoute,
  getApiV1ApplicationsIdRoute,
  getApiV1ApplicationsRoute,
  getApiV1ApplicationsSchemaRoute,
  getApiV1AppprofileIdRoute,
  getApiV1AppprofileRoute,
  getApiV1AppprofileSchemaRoute,
  getApiV1CommandIdRoute,
  getApiV1CommandRoute,
  getApiV1ConfigDevelopmentIdRoute,
  getApiV1ConfigDevelopmentRoute,
  getApiV1ConfigDownloadclientIdRoute,
  getApiV1ConfigDownloadclientRoute,
  getApiV1ConfigHostIdRoute,
  getApiV1ConfigHostRoute,
  getApiV1ConfigUiIdRoute,
  getApiV1ConfigUiRoute,
  getApiV1CustomfilterIdRoute,
  getApiV1CustomfilterRoute,
  getApiV1DownloadclientIdRoute,
  getApiV1DownloadclientRoute,
  getApiV1DownloadclientSchemaRoute,
  getApiV1FilesystemRoute,
  getApiV1FilesystemTypeRoute,
  getApiV1HealthRoute,
  getApiV1HistoryIndexerRoute,
  getApiV1HistoryRoute,
  getApiV1HistorySinceRoute,
  getApiV1IndexerCategoriesRoute,
  getApiV1IndexerIdDownloadRoute,
  getApiV1IndexerIdNewznabRoute,
  getApiV1IndexerIdRoute,
  getApiV1IndexerproxyIdRoute,
  getApiV1IndexerproxyRoute,
  getApiV1IndexerproxySchemaRoute,
  getApiV1IndexerRoute,
  getApiV1IndexerSchemaRoute,
  getApiV1IndexerstatsRoute,
  getApiV1IndexerstatusRoute,
  getApiV1LocalizationOptionsRoute,
  getApiV1LocalizationRoute,
  getApiV1LogFileFilenameRoute,
  getApiV1LogFileRoute,
  getApiV1LogFileUpdateFilenameRoute,
  getApiV1LogFileUpdateRoute,
  getApiV1LogRoute,
  getApiV1NotificationIdRoute,
  getApiV1NotificationRoute,
  getApiV1NotificationSchemaRoute,
  getApiV1SearchRoute,
  getApiV1SystemBackupRoute,
  getApiV1SystemRoutesDuplicateRoute,
  getApiV1SystemRoutesRoute,
  getApiV1SystemStatusRoute,
  getApiV1SystemTaskIdRoute,
  getApiV1SystemTaskRoute,
  getApiV1TagDetailIdRoute,
  getApiV1TagDetailRoute,
  getApiV1TagIdRoute,
  getApiV1TagRoute,
  getApiV1UpdateRoute,
  postApiV1ApplicationsActionNameRoute,
  postApiV1ApplicationsRoute,
  postApiV1ApplicationsTestallRoute,
  postApiV1ApplicationsTestRoute,
  postApiV1AppprofileRoute,
  postApiV1CommandRoute,
  postApiV1CustomfilterRoute,
  postApiV1DownloadclientActionNameRoute,
  postApiV1DownloadclientRoute,
  postApiV1DownloadclientTestallRoute,
  postApiV1DownloadclientTestRoute,
  postApiV1IndexerActionNameRoute,
  postApiV1IndexerproxyActionNameRoute,
  postApiV1IndexerproxyRoute,
  postApiV1IndexerproxyTestallRoute,
  postApiV1IndexerproxyTestRoute,
  postApiV1IndexerRoute,
  postApiV1IndexerTestallRoute,
  postApiV1IndexerTestRoute,
  postApiV1NotificationActionNameRoute,
  postApiV1NotificationRoute,
  postApiV1NotificationTestallRoute,
  postApiV1NotificationTestRoute,
  postApiV1SearchBulkRoute,
  postApiV1SearchRoute,
  postApiV1SystemBackupRestoreIdRoute,
  postApiV1SystemBackupRestoreUploadRoute,
  postApiV1SystemRestartRoute,
  postApiV1SystemShutdownRoute,
  postApiV1TagRoute,
  putApiV1ApplicationsBulkRoute,
  putApiV1ApplicationsIdRoute,
  putApiV1AppprofileIdRoute,
  putApiV1ConfigDevelopmentIdRoute,
  putApiV1ConfigDownloadclientIdRoute,
  putApiV1ConfigHostIdRoute,
  putApiV1ConfigUiIdRoute,
  putApiV1CustomfilterIdRoute,
  putApiV1DownloadclientBulkRoute,
  putApiV1DownloadclientIdRoute,
  putApiV1IndexerBulkRoute,
  putApiV1IndexerIdRoute,
  putApiV1IndexerproxyIdRoute,
  putApiV1NotificationIdRoute,
  putApiV1TagIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ApplicationsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ApplicationsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ApplicationsSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ApplicationsTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ApplicationsTestallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ApplicationsActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AppprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AppprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppprofileSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SystemBackupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SystemBackupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SystemBackupRestoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SystemBackupRestoreUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CommandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1CommandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CustomfilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1CustomfilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1CustomfilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CustomfilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CustomfilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ConfigDevelopmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigDevelopmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigDevelopmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DownloadclientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DownloadclientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DownloadclientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DownloadclientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DownloadclientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DownloadclientBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DownloadclientBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DownloadclientSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DownloadclientTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DownloadclientTestallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DownloadclientActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigDownloadclientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ConfigDownloadclientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigDownloadclientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1FilesystemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1FilesystemTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1HistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1HistorySinceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1HistoryIndexerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigHostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ConfigHostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigHostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1IndexerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1IndexerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1IndexerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1IndexerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1IndexerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1IndexerBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1IndexerBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1IndexerSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1IndexerTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1IndexerTestallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1IndexerActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1IndexerCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1IndexerproxyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1IndexerproxyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1IndexerproxyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1IndexerproxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1IndexerproxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1IndexerproxySchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1IndexerproxyTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1IndexerproxyTestallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1IndexerproxyActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1IndexerstatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1IndexerstatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LocalizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LocalizationOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LogFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LogFileFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1IndexerIdNewznabRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1IndexerIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NotificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NotificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NotificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NotificationSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NotificationTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NotificationTestallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NotificationActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SearchBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SystemStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SystemRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SystemRoutesDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SystemShutdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SystemRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1TagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1TagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagDetailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagDetailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SystemTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SystemTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ConfigUiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigUiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigUiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LogFileUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LogFileUpdateFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
