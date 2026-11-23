import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1IndexingNameRoute,
  deleteV1IndexingNameSchemaRoute,
  deleteV1SettingsNameRoute,
  getV1DebugParentItemsForunmappedidentityRoute,
  getV1DebugParentUnmappedidsRoute,
  getV1IndexingNameItemsRoute,
  getV1IndexingNameRoute,
  getV1IndexingNameSchemaRoute,
  getV1NameLroRoute,
  getV1NameRoute,
  getV1QuerySourcesRoute,
  getV1SettingsCustomerRoute,
  getV1SettingsDatasourcesRoute,
  getV1SettingsNameRoute,
  getV1SettingsSearchapplicationsRoute,
  getV1StatsIndexNameRoute,
  getV1StatsIndexRoute,
  getV1StatsQueryNameRoute,
  getV1StatsQueryRoute,
  getV1StatsSearchapplicationRoute,
  getV1StatsSessionNameRoute,
  getV1StatsSessionRoute,
  getV1StatsUserNameRoute,
  getV1StatsUserRoute,
  patchV1SettingsCustomerRoute,
  patchV1SettingsNameRoute,
  postV1DebugNameCheckAccessRoute,
  postV1DebugNameItemsSearchByViewUrlRoute,
  postV1IndexingNameIndexRoute,
  postV1IndexingNameItemsDeleteQueueItemsRoute,
  postV1IndexingNameItemsPollRoute,
  postV1IndexingNameItemsUnreserveRoute,
  postV1IndexingNamePushRoute,
  postV1IndexingNameUploadRoute,
  postV1InitializeCustomerRoute,
  postV1MediaResourceNameRoute,
  postV1QuerySearchRoute,
  postV1QuerySuggestRoute,
  postV1SettingsDatasourcesRoute,
  postV1SettingsNameResetRoute,
  postV1SettingsSearchapplicationsRoute,
  putV1IndexingNameSchemaRoute,
  putV1SettingsNameRoute,
} from './routes'
import {
  deleteV1IndexingNameRouteHandler,
  deleteV1IndexingNameSchemaRouteHandler,
  deleteV1SettingsNameRouteHandler,
  getV1DebugParentItemsForunmappedidentityRouteHandler,
  getV1DebugParentUnmappedidsRouteHandler,
  getV1IndexingNameItemsRouteHandler,
  getV1IndexingNameRouteHandler,
  getV1IndexingNameSchemaRouteHandler,
  getV1NameLroRouteHandler,
  getV1NameRouteHandler,
  getV1QuerySourcesRouteHandler,
  getV1SettingsCustomerRouteHandler,
  getV1SettingsDatasourcesRouteHandler,
  getV1SettingsNameRouteHandler,
  getV1SettingsSearchapplicationsRouteHandler,
  getV1StatsIndexNameRouteHandler,
  getV1StatsIndexRouteHandler,
  getV1StatsQueryNameRouteHandler,
  getV1StatsQueryRouteHandler,
  getV1StatsSearchapplicationRouteHandler,
  getV1StatsSessionNameRouteHandler,
  getV1StatsSessionRouteHandler,
  getV1StatsUserNameRouteHandler,
  getV1StatsUserRouteHandler,
  patchV1SettingsCustomerRouteHandler,
  patchV1SettingsNameRouteHandler,
  postV1DebugNameCheckAccessRouteHandler,
  postV1DebugNameItemsSearchByViewUrlRouteHandler,
  postV1IndexingNameIndexRouteHandler,
  postV1IndexingNameItemsDeleteQueueItemsRouteHandler,
  postV1IndexingNameItemsPollRouteHandler,
  postV1IndexingNameItemsUnreserveRouteHandler,
  postV1IndexingNamePushRouteHandler,
  postV1IndexingNameUploadRouteHandler,
  postV1InitializeCustomerRouteHandler,
  postV1MediaResourceNameRouteHandler,
  postV1QuerySearchRouteHandler,
  postV1QuerySuggestRouteHandler,
  postV1SettingsDatasourcesRouteHandler,
  postV1SettingsNameResetRouteHandler,
  postV1SettingsSearchapplicationsRouteHandler,
  putV1IndexingNameSchemaRouteHandler,
  putV1SettingsNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postV1DebugNameItemsSearchByViewUrlRoute,
    postV1DebugNameItemsSearchByViewUrlRouteHandler,
  )
  .openapi(postV1DebugNameCheckAccessRoute, postV1DebugNameCheckAccessRouteHandler)
  .openapi(
    getV1DebugParentItemsForunmappedidentityRoute,
    getV1DebugParentItemsForunmappedidentityRouteHandler,
  )
  .openapi(getV1DebugParentUnmappedidsRoute, getV1DebugParentUnmappedidsRouteHandler)
  .openapi(deleteV1IndexingNameRoute, deleteV1IndexingNameRouteHandler)
  .openapi(getV1IndexingNameRoute, getV1IndexingNameRouteHandler)
  .openapi(getV1IndexingNameItemsRoute, getV1IndexingNameItemsRouteHandler)
  .openapi(
    postV1IndexingNameItemsDeleteQueueItemsRoute,
    postV1IndexingNameItemsDeleteQueueItemsRouteHandler,
  )
  .openapi(postV1IndexingNameItemsPollRoute, postV1IndexingNameItemsPollRouteHandler)
  .openapi(postV1IndexingNameItemsUnreserveRoute, postV1IndexingNameItemsUnreserveRouteHandler)
  .openapi(deleteV1IndexingNameSchemaRoute, deleteV1IndexingNameSchemaRouteHandler)
  .openapi(getV1IndexingNameSchemaRoute, getV1IndexingNameSchemaRouteHandler)
  .openapi(putV1IndexingNameSchemaRoute, putV1IndexingNameSchemaRouteHandler)
  .openapi(postV1IndexingNameIndexRoute, postV1IndexingNameIndexRouteHandler)
  .openapi(postV1IndexingNamePushRoute, postV1IndexingNamePushRouteHandler)
  .openapi(postV1IndexingNameUploadRoute, postV1IndexingNameUploadRouteHandler)
  .openapi(postV1MediaResourceNameRoute, postV1MediaResourceNameRouteHandler)
  .openapi(postV1QuerySearchRoute, postV1QuerySearchRouteHandler)
  .openapi(getV1QuerySourcesRoute, getV1QuerySourcesRouteHandler)
  .openapi(postV1QuerySuggestRoute, postV1QuerySuggestRouteHandler)
  .openapi(getV1SettingsCustomerRoute, getV1SettingsCustomerRouteHandler)
  .openapi(patchV1SettingsCustomerRoute, patchV1SettingsCustomerRouteHandler)
  .openapi(getV1SettingsDatasourcesRoute, getV1SettingsDatasourcesRouteHandler)
  .openapi(postV1SettingsDatasourcesRoute, postV1SettingsDatasourcesRouteHandler)
  .openapi(getV1SettingsSearchapplicationsRoute, getV1SettingsSearchapplicationsRouteHandler)
  .openapi(postV1SettingsSearchapplicationsRoute, postV1SettingsSearchapplicationsRouteHandler)
  .openapi(deleteV1SettingsNameRoute, deleteV1SettingsNameRouteHandler)
  .openapi(getV1SettingsNameRoute, getV1SettingsNameRouteHandler)
  .openapi(patchV1SettingsNameRoute, patchV1SettingsNameRouteHandler)
  .openapi(putV1SettingsNameRoute, putV1SettingsNameRouteHandler)
  .openapi(postV1SettingsNameResetRoute, postV1SettingsNameResetRouteHandler)
  .openapi(getV1StatsIndexRoute, getV1StatsIndexRouteHandler)
  .openapi(getV1StatsIndexNameRoute, getV1StatsIndexNameRouteHandler)
  .openapi(getV1StatsQueryRoute, getV1StatsQueryRouteHandler)
  .openapi(getV1StatsQueryNameRoute, getV1StatsQueryNameRouteHandler)
  .openapi(getV1StatsSearchapplicationRoute, getV1StatsSearchapplicationRouteHandler)
  .openapi(getV1StatsSessionRoute, getV1StatsSessionRouteHandler)
  .openapi(getV1StatsSessionNameRoute, getV1StatsSessionNameRouteHandler)
  .openapi(getV1StatsUserRoute, getV1StatsUserRouteHandler)
  .openapi(getV1StatsUserNameRoute, getV1StatsUserNameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(getV1NameLroRoute, getV1NameLroRouteHandler)
  .openapi(postV1InitializeCustomerRoute, postV1InitializeCustomerRouteHandler)

export default app
