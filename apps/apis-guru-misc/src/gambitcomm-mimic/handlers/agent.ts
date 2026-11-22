import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMimicAgentAgentNumFromDeleteIPPortRoute,
  deleteMimicAgentAgentNumIpaliasDeleteIPPortRoute,
  deleteMimicAgentAgentNumRemoveRoute,
  deleteMimicAgentAgentNumTimerScriptDeleteScriptIntervalArgRoute,
  deleteMimicAgentAgentNumTrapConfigDeleteIPPortRoute,
  getMimicAgentAgentNumFromListRoute,
  getMimicAgentAgentNumGetChangedRoute,
  getMimicAgentAgentNumGetConfigChangedRoute,
  getMimicAgentAgentNumGetDelayRoute,
  getMimicAgentAgentNumGetDropsRoute,
  getMimicAgentAgentNumGetHostRoute,
  getMimicAgentAgentNumGetInformTimeoutRoute,
  getMimicAgentAgentNumGetInterfaceRoute,
  getMimicAgentAgentNumGetMaskRoute,
  getMimicAgentAgentNumGetMibsRoute,
  getMimicAgentAgentNumGetNumStartsRoute,
  getMimicAgentAgentNumGetOiddirRoute,
  getMimicAgentAgentNumGetOwnerRoute,
  getMimicAgentAgentNumGetPdusizeRoute,
  getMimicAgentAgentNumGetPortRoute,
  getMimicAgentAgentNumGetPrivdirRoute,
  getMimicAgentAgentNumGetProtocolRoute,
  getMimicAgentAgentNumGetReadRoute,
  getMimicAgentAgentNumGetScenRoute,
  getMimicAgentAgentNumGetSimRoute,
  getMimicAgentAgentNumGetStartRoute,
  getMimicAgentAgentNumGetStateChangedRoute,
  getMimicAgentAgentNumGetStateRoute,
  getMimicAgentAgentNumGetStatisticsRoute,
  getMimicAgentAgentNumGetTraceRoute,
  getMimicAgentAgentNumGetValidateRoute,
  getMimicAgentAgentNumGetWriteRoute,
  getMimicAgentAgentNumIpaliasListRoute,
  getMimicAgentAgentNumIpaliasStatusIPPortRoute,
  getMimicAgentAgentNumProtocolProtGetConfigRoute,
  getMimicAgentAgentNumStoreExistsVarRoute,
  getMimicAgentAgentNumStoreGetVarRoute,
  getMimicAgentAgentNumStoreListRoute,
  getMimicAgentAgentNumStorePersistsVarRoute,
  getMimicAgentAgentNumTimerScriptListRoute,
  getMimicAgentAgentNumTrapConfigListRoute,
  getMimicAgentAgentNumTrapListRoute,
  postMimicAgentAgentNumAddIPRoute,
  postMimicAgentAgentNumFromAddIPPortRoute,
  postMimicAgentAgentNumIpaliasAddIPPortMaskInterfaceRoute,
  postMimicAgentAgentNumTimerScriptAddScriptIntervalArgRoute,
  postMimicAgentAgentNumTrapConfigAddIPPortRoute,
  putMimicAgentAgentNumHaltRoute,
  putMimicAgentAgentNumIpaliasStartIPPortRoute,
  putMimicAgentAgentNumIpaliasStopIPPortRoute,
  putMimicAgentAgentNumPauseRoute,
  putMimicAgentAgentNumReloadRoute,
  putMimicAgentAgentNumResumeRoute,
  putMimicAgentAgentNumSaveRoute,
  putMimicAgentAgentNumSetDelayDelayRoute,
  putMimicAgentAgentNumSetDropsDropsRoute,
  putMimicAgentAgentNumSetHostHostRoute,
  putMimicAgentAgentNumSetInformTimeoutInformTimeoutRoute,
  putMimicAgentAgentNumSetInterfaceInterfaceRoute,
  putMimicAgentAgentNumSetMaskMaskRoute,
  putMimicAgentAgentNumSetMibsRoute,
  putMimicAgentAgentNumSetOiddirOiddirRoute,
  putMimicAgentAgentNumSetOwnerOwnerRoute,
  putMimicAgentAgentNumSetPdusizePdusizeRoute,
  putMimicAgentAgentNumSetPortPortRoute,
  putMimicAgentAgentNumSetPrivdirPrivdirRoute,
  putMimicAgentAgentNumSetProtocolRoute,
  putMimicAgentAgentNumSetReadReadRoute,
  putMimicAgentAgentNumSetStartStartRoute,
  putMimicAgentAgentNumSetTraceTraceRoute,
  putMimicAgentAgentNumSetValidateValidateRoute,
  putMimicAgentAgentNumSetWriteWriteRoute,
  putMimicAgentAgentNumStartRoute,
  putMimicAgentAgentNumStopRoute,
  putMimicAgentAgentNumStoreCopyOtherAgentRoute,
  putMimicAgentAgentNumStoreLreplaceVarIndexRoute,
  putMimicAgentAgentNumStoreSetVarPersistRoute,
  putMimicAgentAgentNumStoreUnsetVarRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentHandler = app
  .openapi(postMimicAgentAgentNumAddIPRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMimicAgentAgentNumFromAddIPPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMimicAgentAgentNumFromDeleteIPPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumFromListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumGetChangedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumGetConfigChangedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumGetDelayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumGetDropsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumGetHostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumGetInformTimeoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumGetInterfaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumGetMaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumGetMibsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumGetNumStartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumGetOiddirRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumGetOwnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumGetPdusizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumGetPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumGetPrivdirRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumGetProtocolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumGetReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumGetScenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumGetSimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumGetStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumGetStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumGetStateChangedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumGetStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumGetTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumGetValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumGetWriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumHaltRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMimicAgentAgentNumIpaliasAddIPPortMaskInterfaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMimicAgentAgentNumIpaliasDeleteIPPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumIpaliasListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumIpaliasStartIPPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumIpaliasStatusIPPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumIpaliasStopIPPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolProtGetConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumReloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMimicAgentAgentNumRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumSaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumSetDelayDelayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumSetDropsDropsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumSetHostHostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumSetInformTimeoutInformTimeoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumSetInterfaceInterfaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumSetMaskMaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumSetMibsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumSetOiddirOiddirRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumSetOwnerOwnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumSetPdusizePdusizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumSetPortPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumSetPrivdirPrivdirRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumSetProtocolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumSetReadReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumSetStartStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumSetTraceTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumSetValidateValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumSetWriteWriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumStoreCopyOtherAgentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumStoreExistsVarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumStoreGetVarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumStoreListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumStoreLreplaceVarIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumStorePersistsVarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumStoreSetVarPersistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumStoreUnsetVarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMimicAgentAgentNumTimerScriptAddScriptIntervalArgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMimicAgentAgentNumTimerScriptDeleteScriptIntervalArgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumTimerScriptListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMimicAgentAgentNumTrapConfigAddIPPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMimicAgentAgentNumTrapConfigDeleteIPPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumTrapConfigListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumTrapListRoute, (c) => {
    throw new Error('Not implemented')
  })
