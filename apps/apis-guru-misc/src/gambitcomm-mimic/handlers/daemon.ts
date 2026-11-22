import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMimicTimerScriptDeleteScriptIntervalArgRoute,
  getMimicGetActiveDataListRoute,
  getMimicGetActiveListRoute,
  getMimicGetCfgfileChangedRoute,
  getMimicGetCfgfileRoute,
  getMimicGetChangedConfigListRoute,
  getMimicGetChangedStateListRoute,
  getMimicGetClientsRoute,
  getMimicGetConfiguredListRoute,
  getMimicGetInterfacesRoute,
  getMimicGetLastRoute,
  getMimicGetLogRoute,
  getMimicGetMaxRoute,
  getMimicGetNetaddrRoute,
  getMimicGetNetdevRoute,
  getMimicGetProductRoute,
  getMimicGetProtocolsRoute,
  getMimicGetReturnRoute,
  getMimicGetVersionRoute,
  getMimicMgetInfoArrayRoute,
  getMimicStoreExistsVarRoute,
  getMimicStoreGetVarRoute,
  getMimicStoreListRoute,
  getMimicStorePersistsVarRoute,
  getMimicTimerScriptListRoute,
  postMimicTimerScriptAddScriptIntervalArgRoute,
  putMimicClearFirstAgentNumLastAgentNumRoute,
  putMimicLoadCfgFileFirstAgentNumLastAgentNumStartAgentNumRoute,
  putMimicSaveasCfgFileFirstAgentNumLastAgentNumRoute,
  putMimicSaveRoute,
  putMimicSetLogRoute,
  putMimicSetNetdevRoute,
  putMimicSetPersistentRoute,
  putMimicStartRoute,
  putMimicStopRoute,
  putMimicStoreLreplaceVarIndexRoute,
  putMimicStoreSetVarPersistRoute,
  putMimicStoreUnsetVarRoute,
  putMimicTerminateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const daemonHandler = app
  .openapi(putMimicClearFirstAgentNumLastAgentNumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicGetActiveDataListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicGetActiveListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicGetCfgfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicGetCfgfileChangedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicGetChangedConfigListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicGetChangedStateListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicGetClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicGetConfiguredListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicGetInterfacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicGetLastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicGetLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicGetMaxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicGetNetaddrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicGetNetdevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicGetProductRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicGetProtocolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicGetReturnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicGetVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicLoadCfgFileFirstAgentNumLastAgentNumStartAgentNumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicMgetInfoArrayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicSaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicSaveasCfgFileFirstAgentNumLastAgentNumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicSetLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicSetNetdevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicSetPersistentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicStoreExistsVarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicStoreGetVarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicStoreListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicStoreLreplaceVarIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicStorePersistsVarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicStoreSetVarPersistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicStoreUnsetVarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicTerminateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMimicTimerScriptAddScriptIntervalArgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMimicTimerScriptDeleteScriptIntervalArgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicTimerScriptListRoute, (c) => {
    throw new Error('Not implemented')
  })
