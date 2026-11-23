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
  postV1MediaResourceNameRoute,
  postV1QuerySearchRoute,
  postV1QuerySuggestRoute,
  postV1SettingsDatasourcesRoute,
  postV1SettingsNameResetRoute,
  postV1SettingsSearchapplicationsRoute,
  putV1IndexingNameSchemaRoute,
  putV1SettingsNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1DebugNameItemsSearchByViewUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DebugNameCheckAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DebugParentItemsForunmappedidentityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DebugParentUnmappedidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1IndexingNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndexingNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndexingNameItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IndexingNameItemsDeleteQueueItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IndexingNameItemsPollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IndexingNameItemsUnreserveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1IndexingNameSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndexingNameSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1IndexingNameSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IndexingNameIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IndexingNamePushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IndexingNameUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MediaResourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1QuerySearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1QuerySourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1QuerySuggestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SettingsCustomerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1SettingsCustomerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SettingsDatasourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SettingsDatasourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SettingsSearchapplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SettingsSearchapplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SettingsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SettingsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1SettingsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SettingsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SettingsNameResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StatsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StatsIndexNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StatsQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StatsQueryNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StatsSearchapplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StatsSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StatsSessionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StatsUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StatsUserNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameLroRoute, (c) => {
    throw new Error('Not implemented')
  })
