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
  getContentPathRoute,
  getIdApiRoute,
  getIdDownloadRoute,
  getLoginRoute,
  getLogoutRoute,
  getPathRoute,
  getPingRoute,
  getRoute,
  headPingRoute,
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
  postLoginRoute,
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
} from './routes'
import {
  deleteApiV1ApplicationsBulkRouteHandler,
  deleteApiV1ApplicationsIdRouteHandler,
  deleteApiV1AppprofileIdRouteHandler,
  deleteApiV1CommandIdRouteHandler,
  deleteApiV1CustomfilterIdRouteHandler,
  deleteApiV1DownloadclientBulkRouteHandler,
  deleteApiV1DownloadclientIdRouteHandler,
  deleteApiV1IndexerBulkRouteHandler,
  deleteApiV1IndexerIdRouteHandler,
  deleteApiV1IndexerproxyIdRouteHandler,
  deleteApiV1NotificationIdRouteHandler,
  deleteApiV1SystemBackupIdRouteHandler,
  deleteApiV1TagIdRouteHandler,
  getApiRouteHandler,
  getApiV1ApplicationsIdRouteHandler,
  getApiV1ApplicationsRouteHandler,
  getApiV1ApplicationsSchemaRouteHandler,
  getApiV1AppprofileIdRouteHandler,
  getApiV1AppprofileRouteHandler,
  getApiV1AppprofileSchemaRouteHandler,
  getApiV1CommandIdRouteHandler,
  getApiV1CommandRouteHandler,
  getApiV1ConfigDevelopmentIdRouteHandler,
  getApiV1ConfigDevelopmentRouteHandler,
  getApiV1ConfigDownloadclientIdRouteHandler,
  getApiV1ConfigDownloadclientRouteHandler,
  getApiV1ConfigHostIdRouteHandler,
  getApiV1ConfigHostRouteHandler,
  getApiV1ConfigUiIdRouteHandler,
  getApiV1ConfigUiRouteHandler,
  getApiV1CustomfilterIdRouteHandler,
  getApiV1CustomfilterRouteHandler,
  getApiV1DownloadclientIdRouteHandler,
  getApiV1DownloadclientRouteHandler,
  getApiV1DownloadclientSchemaRouteHandler,
  getApiV1FilesystemRouteHandler,
  getApiV1FilesystemTypeRouteHandler,
  getApiV1HealthRouteHandler,
  getApiV1HistoryIndexerRouteHandler,
  getApiV1HistoryRouteHandler,
  getApiV1HistorySinceRouteHandler,
  getApiV1IndexerCategoriesRouteHandler,
  getApiV1IndexerIdDownloadRouteHandler,
  getApiV1IndexerIdNewznabRouteHandler,
  getApiV1IndexerIdRouteHandler,
  getApiV1IndexerproxyIdRouteHandler,
  getApiV1IndexerproxyRouteHandler,
  getApiV1IndexerproxySchemaRouteHandler,
  getApiV1IndexerRouteHandler,
  getApiV1IndexerSchemaRouteHandler,
  getApiV1IndexerstatsRouteHandler,
  getApiV1IndexerstatusRouteHandler,
  getApiV1LocalizationOptionsRouteHandler,
  getApiV1LocalizationRouteHandler,
  getApiV1LogFileFilenameRouteHandler,
  getApiV1LogFileRouteHandler,
  getApiV1LogFileUpdateFilenameRouteHandler,
  getApiV1LogFileUpdateRouteHandler,
  getApiV1LogRouteHandler,
  getApiV1NotificationIdRouteHandler,
  getApiV1NotificationRouteHandler,
  getApiV1NotificationSchemaRouteHandler,
  getApiV1SearchRouteHandler,
  getApiV1SystemBackupRouteHandler,
  getApiV1SystemRoutesDuplicateRouteHandler,
  getApiV1SystemRoutesRouteHandler,
  getApiV1SystemStatusRouteHandler,
  getApiV1SystemTaskIdRouteHandler,
  getApiV1SystemTaskRouteHandler,
  getApiV1TagDetailIdRouteHandler,
  getApiV1TagDetailRouteHandler,
  getApiV1TagIdRouteHandler,
  getApiV1TagRouteHandler,
  getApiV1UpdateRouteHandler,
  getContentPathRouteHandler,
  getIdApiRouteHandler,
  getIdDownloadRouteHandler,
  getLoginRouteHandler,
  getLogoutRouteHandler,
  getPathRouteHandler,
  getPingRouteHandler,
  getRouteHandler,
  headPingRouteHandler,
  postApiV1ApplicationsActionNameRouteHandler,
  postApiV1ApplicationsRouteHandler,
  postApiV1ApplicationsTestallRouteHandler,
  postApiV1ApplicationsTestRouteHandler,
  postApiV1AppprofileRouteHandler,
  postApiV1CommandRouteHandler,
  postApiV1CustomfilterRouteHandler,
  postApiV1DownloadclientActionNameRouteHandler,
  postApiV1DownloadclientRouteHandler,
  postApiV1DownloadclientTestallRouteHandler,
  postApiV1DownloadclientTestRouteHandler,
  postApiV1IndexerActionNameRouteHandler,
  postApiV1IndexerproxyActionNameRouteHandler,
  postApiV1IndexerproxyRouteHandler,
  postApiV1IndexerproxyTestallRouteHandler,
  postApiV1IndexerproxyTestRouteHandler,
  postApiV1IndexerRouteHandler,
  postApiV1IndexerTestallRouteHandler,
  postApiV1IndexerTestRouteHandler,
  postApiV1NotificationActionNameRouteHandler,
  postApiV1NotificationRouteHandler,
  postApiV1NotificationTestallRouteHandler,
  postApiV1NotificationTestRouteHandler,
  postApiV1SearchBulkRouteHandler,
  postApiV1SearchRouteHandler,
  postApiV1SystemBackupRestoreIdRouteHandler,
  postApiV1SystemBackupRestoreUploadRouteHandler,
  postApiV1SystemRestartRouteHandler,
  postApiV1SystemShutdownRouteHandler,
  postApiV1TagRouteHandler,
  postLoginRouteHandler,
  putApiV1ApplicationsBulkRouteHandler,
  putApiV1ApplicationsIdRouteHandler,
  putApiV1AppprofileIdRouteHandler,
  putApiV1ConfigDevelopmentIdRouteHandler,
  putApiV1ConfigDownloadclientIdRouteHandler,
  putApiV1ConfigHostIdRouteHandler,
  putApiV1ConfigUiIdRouteHandler,
  putApiV1CustomfilterIdRouteHandler,
  putApiV1DownloadclientBulkRouteHandler,
  putApiV1DownloadclientIdRouteHandler,
  putApiV1IndexerBulkRouteHandler,
  putApiV1IndexerIdRouteHandler,
  putApiV1IndexerproxyIdRouteHandler,
  putApiV1NotificationIdRouteHandler,
  putApiV1TagIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiRoute, getApiRouteHandler)
  .openapi(getApiV1ApplicationsIdRoute, getApiV1ApplicationsIdRouteHandler)
  .openapi(putApiV1ApplicationsIdRoute, putApiV1ApplicationsIdRouteHandler)
  .openapi(deleteApiV1ApplicationsIdRoute, deleteApiV1ApplicationsIdRouteHandler)
  .openapi(getApiV1ApplicationsRoute, getApiV1ApplicationsRouteHandler)
  .openapi(postApiV1ApplicationsRoute, postApiV1ApplicationsRouteHandler)
  .openapi(putApiV1ApplicationsBulkRoute, putApiV1ApplicationsBulkRouteHandler)
  .openapi(deleteApiV1ApplicationsBulkRoute, deleteApiV1ApplicationsBulkRouteHandler)
  .openapi(getApiV1ApplicationsSchemaRoute, getApiV1ApplicationsSchemaRouteHandler)
  .openapi(postApiV1ApplicationsTestRoute, postApiV1ApplicationsTestRouteHandler)
  .openapi(postApiV1ApplicationsTestallRoute, postApiV1ApplicationsTestallRouteHandler)
  .openapi(postApiV1ApplicationsActionNameRoute, postApiV1ApplicationsActionNameRouteHandler)
  .openapi(postApiV1AppprofileRoute, postApiV1AppprofileRouteHandler)
  .openapi(getApiV1AppprofileRoute, getApiV1AppprofileRouteHandler)
  .openapi(deleteApiV1AppprofileIdRoute, deleteApiV1AppprofileIdRouteHandler)
  .openapi(putApiV1AppprofileIdRoute, putApiV1AppprofileIdRouteHandler)
  .openapi(getApiV1AppprofileIdRoute, getApiV1AppprofileIdRouteHandler)
  .openapi(getApiV1AppprofileSchemaRoute, getApiV1AppprofileSchemaRouteHandler)
  .openapi(postLoginRoute, postLoginRouteHandler)
  .openapi(getLoginRoute, getLoginRouteHandler)
  .openapi(getLogoutRoute, getLogoutRouteHandler)
  .openapi(getApiV1SystemBackupRoute, getApiV1SystemBackupRouteHandler)
  .openapi(deleteApiV1SystemBackupIdRoute, deleteApiV1SystemBackupIdRouteHandler)
  .openapi(postApiV1SystemBackupRestoreIdRoute, postApiV1SystemBackupRestoreIdRouteHandler)
  .openapi(postApiV1SystemBackupRestoreUploadRoute, postApiV1SystemBackupRestoreUploadRouteHandler)
  .openapi(getApiV1CommandIdRoute, getApiV1CommandIdRouteHandler)
  .openapi(deleteApiV1CommandIdRoute, deleteApiV1CommandIdRouteHandler)
  .openapi(postApiV1CommandRoute, postApiV1CommandRouteHandler)
  .openapi(getApiV1CommandRoute, getApiV1CommandRouteHandler)
  .openapi(getApiV1CustomfilterIdRoute, getApiV1CustomfilterIdRouteHandler)
  .openapi(putApiV1CustomfilterIdRoute, putApiV1CustomfilterIdRouteHandler)
  .openapi(deleteApiV1CustomfilterIdRoute, deleteApiV1CustomfilterIdRouteHandler)
  .openapi(getApiV1CustomfilterRoute, getApiV1CustomfilterRouteHandler)
  .openapi(postApiV1CustomfilterRoute, postApiV1CustomfilterRouteHandler)
  .openapi(putApiV1ConfigDevelopmentIdRoute, putApiV1ConfigDevelopmentIdRouteHandler)
  .openapi(getApiV1ConfigDevelopmentIdRoute, getApiV1ConfigDevelopmentIdRouteHandler)
  .openapi(getApiV1ConfigDevelopmentRoute, getApiV1ConfigDevelopmentRouteHandler)
  .openapi(getApiV1DownloadclientIdRoute, getApiV1DownloadclientIdRouteHandler)
  .openapi(putApiV1DownloadclientIdRoute, putApiV1DownloadclientIdRouteHandler)
  .openapi(deleteApiV1DownloadclientIdRoute, deleteApiV1DownloadclientIdRouteHandler)
  .openapi(getApiV1DownloadclientRoute, getApiV1DownloadclientRouteHandler)
  .openapi(postApiV1DownloadclientRoute, postApiV1DownloadclientRouteHandler)
  .openapi(putApiV1DownloadclientBulkRoute, putApiV1DownloadclientBulkRouteHandler)
  .openapi(deleteApiV1DownloadclientBulkRoute, deleteApiV1DownloadclientBulkRouteHandler)
  .openapi(getApiV1DownloadclientSchemaRoute, getApiV1DownloadclientSchemaRouteHandler)
  .openapi(postApiV1DownloadclientTestRoute, postApiV1DownloadclientTestRouteHandler)
  .openapi(postApiV1DownloadclientTestallRoute, postApiV1DownloadclientTestallRouteHandler)
  .openapi(postApiV1DownloadclientActionNameRoute, postApiV1DownloadclientActionNameRouteHandler)
  .openapi(getApiV1ConfigDownloadclientIdRoute, getApiV1ConfigDownloadclientIdRouteHandler)
  .openapi(putApiV1ConfigDownloadclientIdRoute, putApiV1ConfigDownloadclientIdRouteHandler)
  .openapi(getApiV1ConfigDownloadclientRoute, getApiV1ConfigDownloadclientRouteHandler)
  .openapi(getApiV1FilesystemRoute, getApiV1FilesystemRouteHandler)
  .openapi(getApiV1FilesystemTypeRoute, getApiV1FilesystemTypeRouteHandler)
  .openapi(getApiV1HealthRoute, getApiV1HealthRouteHandler)
  .openapi(getApiV1HistoryRoute, getApiV1HistoryRouteHandler)
  .openapi(getApiV1HistorySinceRoute, getApiV1HistorySinceRouteHandler)
  .openapi(getApiV1HistoryIndexerRoute, getApiV1HistoryIndexerRouteHandler)
  .openapi(getApiV1ConfigHostIdRoute, getApiV1ConfigHostIdRouteHandler)
  .openapi(putApiV1ConfigHostIdRoute, putApiV1ConfigHostIdRouteHandler)
  .openapi(getApiV1ConfigHostRoute, getApiV1ConfigHostRouteHandler)
  .openapi(getApiV1IndexerIdRoute, getApiV1IndexerIdRouteHandler)
  .openapi(putApiV1IndexerIdRoute, putApiV1IndexerIdRouteHandler)
  .openapi(deleteApiV1IndexerIdRoute, deleteApiV1IndexerIdRouteHandler)
  .openapi(getApiV1IndexerRoute, getApiV1IndexerRouteHandler)
  .openapi(postApiV1IndexerRoute, postApiV1IndexerRouteHandler)
  .openapi(putApiV1IndexerBulkRoute, putApiV1IndexerBulkRouteHandler)
  .openapi(deleteApiV1IndexerBulkRoute, deleteApiV1IndexerBulkRouteHandler)
  .openapi(getApiV1IndexerSchemaRoute, getApiV1IndexerSchemaRouteHandler)
  .openapi(postApiV1IndexerTestRoute, postApiV1IndexerTestRouteHandler)
  .openapi(postApiV1IndexerTestallRoute, postApiV1IndexerTestallRouteHandler)
  .openapi(postApiV1IndexerActionNameRoute, postApiV1IndexerActionNameRouteHandler)
  .openapi(getApiV1IndexerCategoriesRoute, getApiV1IndexerCategoriesRouteHandler)
  .openapi(getApiV1IndexerproxyIdRoute, getApiV1IndexerproxyIdRouteHandler)
  .openapi(putApiV1IndexerproxyIdRoute, putApiV1IndexerproxyIdRouteHandler)
  .openapi(deleteApiV1IndexerproxyIdRoute, deleteApiV1IndexerproxyIdRouteHandler)
  .openapi(getApiV1IndexerproxyRoute, getApiV1IndexerproxyRouteHandler)
  .openapi(postApiV1IndexerproxyRoute, postApiV1IndexerproxyRouteHandler)
  .openapi(getApiV1IndexerproxySchemaRoute, getApiV1IndexerproxySchemaRouteHandler)
  .openapi(postApiV1IndexerproxyTestRoute, postApiV1IndexerproxyTestRouteHandler)
  .openapi(postApiV1IndexerproxyTestallRoute, postApiV1IndexerproxyTestallRouteHandler)
  .openapi(postApiV1IndexerproxyActionNameRoute, postApiV1IndexerproxyActionNameRouteHandler)
  .openapi(getApiV1IndexerstatsRoute, getApiV1IndexerstatsRouteHandler)
  .openapi(getApiV1IndexerstatusRoute, getApiV1IndexerstatusRouteHandler)
  .openapi(getApiV1LocalizationRoute, getApiV1LocalizationRouteHandler)
  .openapi(getApiV1LocalizationOptionsRoute, getApiV1LocalizationOptionsRouteHandler)
  .openapi(getApiV1LogRoute, getApiV1LogRouteHandler)
  .openapi(getApiV1LogFileRoute, getApiV1LogFileRouteHandler)
  .openapi(getApiV1LogFileFilenameRoute, getApiV1LogFileFilenameRouteHandler)
  .openapi(getApiV1IndexerIdNewznabRoute, getApiV1IndexerIdNewznabRouteHandler)
  .openapi(getIdApiRoute, getIdApiRouteHandler)
  .openapi(getApiV1IndexerIdDownloadRoute, getApiV1IndexerIdDownloadRouteHandler)
  .openapi(getIdDownloadRoute, getIdDownloadRouteHandler)
  .openapi(getApiV1NotificationIdRoute, getApiV1NotificationIdRouteHandler)
  .openapi(putApiV1NotificationIdRoute, putApiV1NotificationIdRouteHandler)
  .openapi(deleteApiV1NotificationIdRoute, deleteApiV1NotificationIdRouteHandler)
  .openapi(getApiV1NotificationRoute, getApiV1NotificationRouteHandler)
  .openapi(postApiV1NotificationRoute, postApiV1NotificationRouteHandler)
  .openapi(getApiV1NotificationSchemaRoute, getApiV1NotificationSchemaRouteHandler)
  .openapi(postApiV1NotificationTestRoute, postApiV1NotificationTestRouteHandler)
  .openapi(postApiV1NotificationTestallRoute, postApiV1NotificationTestallRouteHandler)
  .openapi(postApiV1NotificationActionNameRoute, postApiV1NotificationActionNameRouteHandler)
  .openapi(getPingRoute, getPingRouteHandler)
  .openapi(headPingRoute, headPingRouteHandler)
  .openapi(postApiV1SearchRoute, postApiV1SearchRouteHandler)
  .openapi(getApiV1SearchRoute, getApiV1SearchRouteHandler)
  .openapi(postApiV1SearchBulkRoute, postApiV1SearchBulkRouteHandler)
  .openapi(getContentPathRoute, getContentPathRouteHandler)
  .openapi(getRoute, getRouteHandler)
  .openapi(getPathRoute, getPathRouteHandler)
  .openapi(getApiV1SystemStatusRoute, getApiV1SystemStatusRouteHandler)
  .openapi(getApiV1SystemRoutesRoute, getApiV1SystemRoutesRouteHandler)
  .openapi(getApiV1SystemRoutesDuplicateRoute, getApiV1SystemRoutesDuplicateRouteHandler)
  .openapi(postApiV1SystemShutdownRoute, postApiV1SystemShutdownRouteHandler)
  .openapi(postApiV1SystemRestartRoute, postApiV1SystemRestartRouteHandler)
  .openapi(getApiV1TagIdRoute, getApiV1TagIdRouteHandler)
  .openapi(putApiV1TagIdRoute, putApiV1TagIdRouteHandler)
  .openapi(deleteApiV1TagIdRoute, deleteApiV1TagIdRouteHandler)
  .openapi(getApiV1TagRoute, getApiV1TagRouteHandler)
  .openapi(postApiV1TagRoute, postApiV1TagRouteHandler)
  .openapi(getApiV1TagDetailIdRoute, getApiV1TagDetailIdRouteHandler)
  .openapi(getApiV1TagDetailRoute, getApiV1TagDetailRouteHandler)
  .openapi(getApiV1SystemTaskRoute, getApiV1SystemTaskRouteHandler)
  .openapi(getApiV1SystemTaskIdRoute, getApiV1SystemTaskIdRouteHandler)
  .openapi(putApiV1ConfigUiIdRoute, putApiV1ConfigUiIdRouteHandler)
  .openapi(getApiV1ConfigUiIdRoute, getApiV1ConfigUiIdRouteHandler)
  .openapi(getApiV1ConfigUiRoute, getApiV1ConfigUiRouteHandler)
  .openapi(getApiV1UpdateRoute, getApiV1UpdateRouteHandler)
  .openapi(getApiV1LogFileUpdateRoute, getApiV1LogFileUpdateRouteHandler)
  .openapi(getApiV1LogFileUpdateFilenameRoute, getApiV1LogFileUpdateFilenameRouteHandler)

export default app
