import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMimicAccessDelUserRoute,
  deleteMimicAgentAgentNumFromDeleteIPPortRoute,
  deleteMimicAgentAgentNumIpaliasDeleteIPPortRoute,
  deleteMimicAgentAgentNumProtocolMsgProxyPortRemovePortRoute,
  deleteMimicAgentAgentNumProtocolMsgSnmpv3AccessClearRoute,
  deleteMimicAgentAgentNumProtocolMsgSnmpv3AccessDelAccessNameRoute,
  deleteMimicAgentAgentNumProtocolMsgSnmpv3GroupClearRoute,
  deleteMimicAgentAgentNumProtocolMsgSnmpv3GroupDelGroupNameRoute,
  deleteMimicAgentAgentNumProtocolMsgSnmpv3UserClearRoute,
  deleteMimicAgentAgentNumProtocolMsgSnmpv3UserDelUserNameRoute,
  deleteMimicAgentAgentNumProtocolMsgSnmpv3ViewClearRoute,
  deleteMimicAgentAgentNumProtocolMsgSnmpv3ViewDelViewNameRoute,
  deleteMimicAgentAgentNumProtocolMsgWebPortRemovePortRoute,
  deleteMimicAgentAgentNumRemoveRoute,
  deleteMimicAgentAgentNumTimerScriptDeleteScriptIntervalArgRoute,
  deleteMimicAgentAgentNumTrapConfigDeleteIPPortRoute,
  deleteMimicAgentAgentNumValueRemoveObjectInstanceRoute,
  deleteMimicTimerScriptDeleteScriptIntervalArgRoute,
  getMimicAccessGetAcldbRoute,
  getMimicAccessGetAdmindirRoute,
  getMimicAccessGetAdminuserRoute,
  getMimicAccessGetEnabledRoute,
  getMimicAccessListRoute,
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
  getMimicAgentAgentNumProtocolMsgCoapGetArgsRoute,
  getMimicAgentAgentNumProtocolMsgCoapGetConfigRoute,
  getMimicAgentAgentNumProtocolMsgCoapGetStatisticsRoute,
  getMimicAgentAgentNumProtocolMsgCoapGetTraceRoute,
  getMimicAgentAgentNumProtocolMsgDhcpGetArgsRoute,
  getMimicAgentAgentNumProtocolMsgDhcpGetConfigRoute,
  getMimicAgentAgentNumProtocolMsgDhcpGetStatisticsRoute,
  getMimicAgentAgentNumProtocolMsgDhcpGetTraceRoute,
  getMimicAgentAgentNumProtocolMsgDhcpParamsRoute,
  getMimicAgentAgentNumProtocolMsgIpmiGetArgsRoute,
  getMimicAgentAgentNumProtocolMsgIpmiGetAttrRoute,
  getMimicAgentAgentNumProtocolMsgIpmiGetConfigRoute,
  getMimicAgentAgentNumProtocolMsgIpmiGetStatisticsRoute,
  getMimicAgentAgentNumProtocolMsgIpmiGetTraceRoute,
  getMimicAgentAgentNumProtocolMsgMqttClientGetProtstateRoute,
  getMimicAgentAgentNumProtocolMsgMqttClientGetStateRoute,
  getMimicAgentAgentNumProtocolMsgMqttClientMessageCardRoute,
  getMimicAgentAgentNumProtocolMsgMqttClientMessageGetMsgNumAttrRoute,
  getMimicAgentAgentNumProtocolMsgMqttClientSubscribeCardRoute,
  getMimicAgentAgentNumProtocolMsgMqttClientSubscribeGetSubNumAttrRoute,
  getMimicAgentAgentNumProtocolMsgMqttGetArgsRoute,
  getMimicAgentAgentNumProtocolMsgMqttGetConfigRoute,
  getMimicAgentAgentNumProtocolMsgMqttGetStatisticsRoute,
  getMimicAgentAgentNumProtocolMsgMqttGetTraceRoute,
  getMimicAgentAgentNumProtocolMsgNetflowFlowListRoute,
  getMimicAgentAgentNumProtocolMsgNetflowGetArgsRoute,
  getMimicAgentAgentNumProtocolMsgNetflowGetConfigRoute,
  getMimicAgentAgentNumProtocolMsgNetflowGetStatisticsRoute,
  getMimicAgentAgentNumProtocolMsgNetflowGetTraceRoute,
  getMimicAgentAgentNumProtocolMsgProxyGetArgsRoute,
  getMimicAgentAgentNumProtocolMsgProxyGetConfigRoute,
  getMimicAgentAgentNumProtocolMsgProxyGetStatisticsRoute,
  getMimicAgentAgentNumProtocolMsgProxyGetTraceRoute,
  getMimicAgentAgentNumProtocolMsgProxyPortIsStartedPortRoute,
  getMimicAgentAgentNumProtocolMsgProxyPortListRoute,
  getMimicAgentAgentNumProtocolMsgSflowGetArgsRoute,
  getMimicAgentAgentNumProtocolMsgSflowGetConfigRoute,
  getMimicAgentAgentNumProtocolMsgSflowGetStatisticsRoute,
  getMimicAgentAgentNumProtocolMsgSflowGetTraceRoute,
  getMimicAgentAgentNumProtocolMsgSnmptcpGetArgsRoute,
  getMimicAgentAgentNumProtocolMsgSnmptcpGetConfigRoute,
  getMimicAgentAgentNumProtocolMsgSnmptcpGetStatisticsRoute,
  getMimicAgentAgentNumProtocolMsgSnmptcpGetTraceRoute,
  getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasIsenabledIpaddressPortRoute,
  getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasListRoute,
  getMimicAgentAgentNumProtocolMsgSnmpv3AccessListRoute,
  getMimicAgentAgentNumProtocolMsgSnmpv3GetConfigRoute,
  getMimicAgentAgentNumProtocolMsgSnmpv3GetContextEngineidRoute,
  getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginebootsRoute,
  getMimicAgentAgentNumProtocolMsgSnmpv3GetEngineidRoute,
  getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginetimeRoute,
  getMimicAgentAgentNumProtocolMsgSnmpv3GroupListRoute,
  getMimicAgentAgentNumProtocolMsgSnmpv3UserListRoute,
  getMimicAgentAgentNumProtocolMsgSnmpv3ViewListRoute,
  getMimicAgentAgentNumProtocolMsgSshGetArgsRoute,
  getMimicAgentAgentNumProtocolMsgSshGetConfigRoute,
  getMimicAgentAgentNumProtocolMsgSshGetStatisticsRoute,
  getMimicAgentAgentNumProtocolMsgSshGetTraceRoute,
  getMimicAgentAgentNumProtocolMsgSshIpaliasIsenabledIpaddressPortRoute,
  getMimicAgentAgentNumProtocolMsgSshIpaliasListRoute,
  getMimicAgentAgentNumProtocolMsgSyslogGetArgsRoute,
  getMimicAgentAgentNumProtocolMsgSyslogGetAttrRoute,
  getMimicAgentAgentNumProtocolMsgSyslogGetConfigRoute,
  getMimicAgentAgentNumProtocolMsgSyslogGetStatisticsRoute,
  getMimicAgentAgentNumProtocolMsgSyslogGetTraceRoute,
  getMimicAgentAgentNumProtocolMsgTelnetGetArgsRoute,
  getMimicAgentAgentNumProtocolMsgTelnetGetConfigRoute,
  getMimicAgentAgentNumProtocolMsgTelnetGetStatisticsRoute,
  getMimicAgentAgentNumProtocolMsgTelnetGetTraceRoute,
  getMimicAgentAgentNumProtocolMsgTelnetIpaliasIsenabledIpaddressPortRoute,
  getMimicAgentAgentNumProtocolMsgTelnetIpaliasListRoute,
  getMimicAgentAgentNumProtocolMsgTelnetServerGetConnectionsRoute,
  getMimicAgentAgentNumProtocolMsgTelnetServerGetKeymapRoute,
  getMimicAgentAgentNumProtocolMsgTelnetServerGetRulesdbRoute,
  getMimicAgentAgentNumProtocolMsgTelnetServerGetStateRoute,
  getMimicAgentAgentNumProtocolMsgTelnetServerGetUserdbRoute,
  getMimicAgentAgentNumProtocolMsgTelnetServerGetUsersRoute,
  getMimicAgentAgentNumProtocolMsgTftpGetArgsRoute,
  getMimicAgentAgentNumProtocolMsgTftpGetConfigRoute,
  getMimicAgentAgentNumProtocolMsgTftpGetStatisticsRoute,
  getMimicAgentAgentNumProtocolMsgTftpGetTraceRoute,
  getMimicAgentAgentNumProtocolMsgTftpSessionIDGetParameterRoute,
  getMimicAgentAgentNumProtocolMsgTftpSessionIDStatusRoute,
  getMimicAgentAgentNumProtocolMsgTodGetArgsRoute,
  getMimicAgentAgentNumProtocolMsgTodGetConfigRoute,
  getMimicAgentAgentNumProtocolMsgTodGetStatisticsRoute,
  getMimicAgentAgentNumProtocolMsgTodGettimeServerServerAddrPortPortNumScriptScriptNameTimeoutTimeSecRetriesNumRetriesRoute,
  getMimicAgentAgentNumProtocolMsgTodGetTraceRoute,
  getMimicAgentAgentNumProtocolMsgWebGetArgsRoute,
  getMimicAgentAgentNumProtocolMsgWebGetConfigRoute,
  getMimicAgentAgentNumProtocolMsgWebGetStatisticsRoute,
  getMimicAgentAgentNumProtocolMsgWebGetTraceRoute,
  getMimicAgentAgentNumProtocolMsgWebPortExistsPortRoute,
  getMimicAgentAgentNumProtocolProtGetConfigRoute,
  getMimicAgentAgentNumStoreExistsVarRoute,
  getMimicAgentAgentNumStoreGetVarRoute,
  getMimicAgentAgentNumStoreListRoute,
  getMimicAgentAgentNumStorePersistsVarRoute,
  getMimicAgentAgentNumTimerScriptListRoute,
  getMimicAgentAgentNumTrapConfigListRoute,
  getMimicAgentAgentNumTrapListRoute,
  getMimicAgentAgentNumValueEvalObjectInstanceRoute,
  getMimicAgentAgentNumValueGetObjectInstanceVariableRoute,
  getMimicAgentAgentNumValueInfoObjectRoute,
  getMimicAgentAgentNumValueInstancesObjectRoute,
  getMimicAgentAgentNumValueListOIDRoute,
  getMimicAgentAgentNumValueMevalObjInsArrayRoute,
  getMimicAgentAgentNumValueMgetObjInsVarArrayRoute,
  getMimicAgentAgentNumValueMibObjectRoute,
  getMimicAgentAgentNumValueNameOIDRoute,
  getMimicAgentAgentNumValueOidObjectRoute,
  getMimicAgentAgentNumValueSplitOIDRoute,
  getMimicAgentAgentNumValueStateGetObjectRoute,
  getMimicAgentAgentNumValueVariablesObjectInstanceRoute,
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
  getMimicProtocolMsgCoapGetStatsHdrRoute,
  getMimicProtocolMsgDhcpGetStatsHdrRoute,
  getMimicProtocolMsgIpmiGetStatsHdrRoute,
  getMimicProtocolMsgMqttGetStatsHdrRoute,
  getMimicProtocolMsgNetflowGetStatsHdrRoute,
  getMimicProtocolMsgProxyGetStatsHdrRoute,
  getMimicProtocolMsgSflowGetStatsHdrRoute,
  getMimicProtocolMsgSnmptcpGetStatsHdrRoute,
  getMimicProtocolMsgSshGetStatsHdrRoute,
  getMimicProtocolMsgSyslogGetStatsHdrRoute,
  getMimicProtocolMsgTelnetGetStatsHdrRoute,
  getMimicProtocolMsgTftpGetStatsHdrRoute,
  getMimicProtocolMsgTodGetStatsHdrRoute,
  getMimicProtocolMsgWebGetStatsHdrRoute,
  getMimicStoreExistsVarRoute,
  getMimicStoreGetVarRoute,
  getMimicStoreListRoute,
  getMimicStorePersistsVarRoute,
  getMimicTimerScriptListRoute,
  postMimicAccessAddUserAgentsMaskRoute,
  postMimicAgentAgentNumAddIPRoute,
  postMimicAgentAgentNumFromAddIPPortRoute,
  postMimicAgentAgentNumIpaliasAddIPPortMaskInterfaceRoute,
  postMimicAgentAgentNumProtocolMsgProxyPortAddPortTargetTargetPortRoute,
  postMimicAgentAgentNumProtocolMsgSnmpv3AccessAddGroupNamePrefixSecurityModelSecurityLevelContextMatchReadViewWriteViewNotifyViewRoute,
  postMimicAgentAgentNumProtocolMsgSnmpv3GroupAddGroupNameSecurityModelSecurityNameRoute,
  postMimicAgentAgentNumProtocolMsgSnmpv3UserAddUserNameSecurityNameAuthProtocolAuthKeyPrivProtocolPrivKeyRoute,
  postMimicAgentAgentNumProtocolMsgSnmpv3ViewAddViewNameViewTypeSubtreeMaskRoute,
  postMimicAgentAgentNumProtocolMsgSyslogSendPriRoute,
  postMimicAgentAgentNumProtocolMsgTftpSessionReadServerSrcfileRoute,
  postMimicAgentAgentNumProtocolMsgTftpSessionWriteServerSrcfileRoute,
  postMimicAgentAgentNumProtocolMsgWebPortAddPortRoute,
  postMimicAgentAgentNumTimerScriptAddScriptIntervalArgRoute,
  postMimicAgentAgentNumTrapConfigAddIPPortRoute,
  postMimicAgentAgentNumValueAddObjectInstanceRoute,
  postMimicTimerScriptAddScriptIntervalArgRoute,
  putMimicAccessLoadFilenameRoute,
  putMimicAccessSaveFilenameRoute,
  putMimicAccessSetAcldbDatabaseNameRoute,
  putMimicAccessSetEnabledEnabledOrNotRoute,
  putMimicAgentAgentNumHaltRoute,
  putMimicAgentAgentNumIpaliasStartIPPortRoute,
  putMimicAgentAgentNumIpaliasStopIPPortRoute,
  putMimicAgentAgentNumPauseRoute,
  putMimicAgentAgentNumProtocolMsgCoapSetConfigArgumentValueRoute,
  putMimicAgentAgentNumProtocolMsgCoapSetTraceEnableOrNotRoute,
  putMimicAgentAgentNumProtocolMsgDhcpSetConfigArgumentValueRoute,
  putMimicAgentAgentNumProtocolMsgDhcpSetTraceEnableOrNotRoute,
  putMimicAgentAgentNumProtocolMsgIpmiSetAttrValueRoute,
  putMimicAgentAgentNumProtocolMsgIpmiSetConfigArgumentValueRoute,
  putMimicAgentAgentNumProtocolMsgIpmiSetTraceEnableOrNotRoute,
  putMimicAgentAgentNumProtocolMsgMqttClientMessageSetMsgNumAttrValueRoute,
  putMimicAgentAgentNumProtocolMsgMqttClientResubscribeSubNumRoute,
  putMimicAgentAgentNumProtocolMsgMqttClientRuntimeAbortRoute,
  putMimicAgentAgentNumProtocolMsgMqttClientRuntimeConnectRoute,
  putMimicAgentAgentNumProtocolMsgMqttClientRuntimeDisconnectRoute,
  putMimicAgentAgentNumProtocolMsgMqttClientSetBrokerBrokerAddrRoute,
  putMimicAgentAgentNumProtocolMsgMqttClientSetCleansessionCleanOrNotRoute,
  putMimicAgentAgentNumProtocolMsgMqttClientSetClientidClientIDRoute,
  putMimicAgentAgentNumProtocolMsgMqttClientSetKeepaliveAliveTimeRoute,
  putMimicAgentAgentNumProtocolMsgMqttClientSetOnDisconnectActionRoute,
  putMimicAgentAgentNumProtocolMsgMqttClientSetPasswordPasswordRoute,
  putMimicAgentAgentNumProtocolMsgMqttClientSetPortPortRoute,
  putMimicAgentAgentNumProtocolMsgMqttClientSetUsernameUsernameRoute,
  putMimicAgentAgentNumProtocolMsgMqttClientSetWillmsgMsgRoute,
  putMimicAgentAgentNumProtocolMsgMqttClientSetWillqosQosRoute,
  putMimicAgentAgentNumProtocolMsgMqttClientSetWillretainRetainRoute,
  putMimicAgentAgentNumProtocolMsgMqttClientSetWilltopicTopicRoute,
  putMimicAgentAgentNumProtocolMsgMqttClientSubscribeSetSubNumAttrValueRoute,
  putMimicAgentAgentNumProtocolMsgMqttClientUnsubscribeSubNumRoute,
  putMimicAgentAgentNumProtocolMsgMqttSetConfigArgumentValueRoute,
  putMimicAgentAgentNumProtocolMsgMqttSetTraceEnableOrNotRoute,
  putMimicAgentAgentNumProtocolMsgNetflowFlowChangeDfsIntervalIntervalRoute,
  putMimicAgentAgentNumProtocolMsgNetflowFlowChangeFlowsetUidFieldNumAttrValueRoute,
  putMimicAgentAgentNumProtocolMsgNetflowFlowChangeTfsIntervalIntervalRoute,
  putMimicAgentAgentNumProtocolMsgNetflowHaltRoute,
  putMimicAgentAgentNumProtocolMsgNetflowReloadRoute,
  putMimicAgentAgentNumProtocolMsgNetflowResumeRoute,
  putMimicAgentAgentNumProtocolMsgNetflowSetCollectorCollectorIPRoute,
  putMimicAgentAgentNumProtocolMsgNetflowSetConfigArgumentValueRoute,
  putMimicAgentAgentNumProtocolMsgNetflowSetFilenameFileNameRoute,
  putMimicAgentAgentNumProtocolMsgNetflowSetTraceEnableOrNotRoute,
  putMimicAgentAgentNumProtocolMsgProxyPortStartPortRoute,
  putMimicAgentAgentNumProtocolMsgProxyPortStopPortRoute,
  putMimicAgentAgentNumProtocolMsgProxySetConfigArgumentValueRoute,
  putMimicAgentAgentNumProtocolMsgProxySetTraceEnableOrNotRoute,
  putMimicAgentAgentNumProtocolMsgSflowHaltRoute,
  putMimicAgentAgentNumProtocolMsgSflowReloadRoute,
  putMimicAgentAgentNumProtocolMsgSflowResumeRoute,
  putMimicAgentAgentNumProtocolMsgSflowSetConfigArgumentValueRoute,
  putMimicAgentAgentNumProtocolMsgSflowSetTraceEnableOrNotRoute,
  putMimicAgentAgentNumProtocolMsgSnmptcpIpaliasDisableIpaddressPortRoute,
  putMimicAgentAgentNumProtocolMsgSnmptcpIpaliasEnableIpaddressPortRoute,
  putMimicAgentAgentNumProtocolMsgSnmptcpSetConfigArgumentValueRoute,
  putMimicAgentAgentNumProtocolMsgSnmptcpSetTraceEnableOrNotRoute,
  putMimicAgentAgentNumProtocolMsgSnmpv3SetConfigParameterValueRoute,
  putMimicAgentAgentNumProtocolMsgSnmpv3UsmSaveasFilenameRoute,
  putMimicAgentAgentNumProtocolMsgSnmpv3UsmSaveRoute,
  putMimicAgentAgentNumProtocolMsgSnmpv3VacmSaveasFilenameRoute,
  putMimicAgentAgentNumProtocolMsgSnmpv3VacmSaveRoute,
  putMimicAgentAgentNumProtocolMsgSshIpaliasDisableIpaddressPortRoute,
  putMimicAgentAgentNumProtocolMsgSshIpaliasEnableIpaddressPortRoute,
  putMimicAgentAgentNumProtocolMsgSshSetConfigArgumentValueRoute,
  putMimicAgentAgentNumProtocolMsgSshSetTraceEnableOrNotRoute,
  putMimicAgentAgentNumProtocolMsgSyslogSetAttrValueRoute,
  putMimicAgentAgentNumProtocolMsgSyslogSetConfigArgumentValueRoute,
  putMimicAgentAgentNumProtocolMsgSyslogSetTraceEnableOrNotRoute,
  putMimicAgentAgentNumProtocolMsgTelnetConnectionLogonConnectionIDUserPasswordRoute,
  putMimicAgentAgentNumProtocolMsgTelnetConnectionRequestConnectionIDCommandRoute,
  putMimicAgentAgentNumProtocolMsgTelnetConnectionSignalConnectionIDSignalNameRoute,
  putMimicAgentAgentNumProtocolMsgTelnetIpaliasDisableIpaddressPortRoute,
  putMimicAgentAgentNumProtocolMsgTelnetIpaliasEnableIpaddressPortRoute,
  putMimicAgentAgentNumProtocolMsgTelnetSetConfigArgumentValueRoute,
  putMimicAgentAgentNumProtocolMsgTelnetSetTraceEnableOrNotRoute,
  putMimicAgentAgentNumProtocolMsgTftpSessionIDSetParameterValueRoute,
  putMimicAgentAgentNumProtocolMsgTftpSessionIDStartRoute,
  putMimicAgentAgentNumProtocolMsgTftpSessionIDStopRoute,
  putMimicAgentAgentNumProtocolMsgTftpSetConfigArgumentValueRoute,
  putMimicAgentAgentNumProtocolMsgTftpSetTraceEnableOrNotRoute,
  putMimicAgentAgentNumProtocolMsgTodSetConfigArgumentValueRoute,
  putMimicAgentAgentNumProtocolMsgTodSetTraceEnableOrNotRoute,
  putMimicAgentAgentNumProtocolMsgWebPortSetPortProtocolVersionRoute,
  putMimicAgentAgentNumProtocolMsgWebPortStartPortRoute,
  putMimicAgentAgentNumProtocolMsgWebPortStopPortRoute,
  putMimicAgentAgentNumProtocolMsgWebSetConfigArgumentValueRoute,
  putMimicAgentAgentNumProtocolMsgWebSetTraceEnableOrNotRoute,
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
  putMimicAgentAgentNumValueMsetRoute,
  putMimicAgentAgentNumValueMunsetRoute,
  putMimicAgentAgentNumValueSetObjectInstanceVariableRoute,
  putMimicAgentAgentNumValueStateSetObjectStateRoute,
  putMimicAgentAgentNumValueUnsetObjectInstanceVariableRoute,
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

export const mimicHandler = app
  .openapi(postMimicAccessAddUserAgentsMaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMimicAccessDelUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAccessGetAcldbRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAccessGetAdmindirRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAccessGetAdminuserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAccessGetEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAccessListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAccessLoadFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAccessSaveFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAccessSetAcldbDatabaseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAccessSetEnabledEnabledOrNotRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getMimicAgentAgentNumProtocolMsgCoapGetArgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgCoapGetConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgCoapGetStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgCoapGetTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgCoapSetConfigArgumentValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgCoapSetTraceEnableOrNotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgDhcpGetArgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgDhcpGetConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgDhcpGetStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgDhcpGetTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgDhcpParamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgDhcpSetConfigArgumentValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgDhcpSetTraceEnableOrNotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgIpmiGetArgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgIpmiGetConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgIpmiGetStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgIpmiGetTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgIpmiGetAttrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgIpmiSetConfigArgumentValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgIpmiSetTraceEnableOrNotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgIpmiSetAttrValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgMqttClientGetProtstateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgMqttClientGetStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgMqttClientMessageCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgMqttClientMessageGetMsgNumAttrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgMqttClientMessageSetMsgNumAttrValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgMqttClientResubscribeSubNumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgMqttClientRuntimeAbortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgMqttClientRuntimeConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgMqttClientRuntimeDisconnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgMqttClientSetBrokerBrokerAddrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgMqttClientSetCleansessionCleanOrNotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgMqttClientSetClientidClientIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgMqttClientSetKeepaliveAliveTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgMqttClientSetOnDisconnectActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgMqttClientSetPasswordPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgMqttClientSetPortPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgMqttClientSetUsernameUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgMqttClientSetWillmsgMsgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgMqttClientSetWillqosQosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgMqttClientSetWillretainRetainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgMqttClientSetWilltopicTopicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgMqttClientSubscribeCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgMqttClientSubscribeGetSubNumAttrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgMqttClientSubscribeSetSubNumAttrValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgMqttClientUnsubscribeSubNumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgMqttGetArgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgMqttGetConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgMqttGetStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgMqttGetTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgMqttSetConfigArgumentValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgMqttSetTraceEnableOrNotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgNetflowFlowChangeDfsIntervalIntervalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgNetflowFlowChangeTfsIntervalIntervalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putMimicAgentAgentNumProtocolMsgNetflowFlowChangeFlowsetUidFieldNumAttrValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMimicAgentAgentNumProtocolMsgNetflowFlowListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgNetflowGetArgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgNetflowGetConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgNetflowGetStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgNetflowGetTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgNetflowHaltRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgNetflowReloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgNetflowResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgNetflowSetCollectorCollectorIPRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgNetflowSetConfigArgumentValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgNetflowSetFilenameFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgNetflowSetTraceEnableOrNotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgProxyGetArgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgProxyGetConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgProxyGetStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgProxyGetTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMimicAgentAgentNumProtocolMsgProxyPortAddPortTargetTargetPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgProxyPortIsStartedPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgProxyPortListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMimicAgentAgentNumProtocolMsgProxyPortRemovePortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgProxyPortStartPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgProxyPortStopPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgProxySetConfigArgumentValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgProxySetTraceEnableOrNotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSflowGetArgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSflowGetConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSflowGetStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSflowGetTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSflowHaltRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSflowReloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSflowResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSflowSetConfigArgumentValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSflowSetTraceEnableOrNotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSnmptcpGetArgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSnmptcpGetConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSnmptcpGetStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSnmptcpGetTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSnmptcpIpaliasDisableIpaddressPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSnmptcpIpaliasEnableIpaddressPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasIsenabledIpaddressPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSnmptcpSetConfigArgumentValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSnmptcpSetTraceEnableOrNotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMimicAgentAgentNumProtocolMsgSnmpv3AccessAddGroupNamePrefixSecurityModelSecurityLevelContextMatchReadViewWriteViewNotifyViewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteMimicAgentAgentNumProtocolMsgSnmpv3AccessClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMimicAgentAgentNumProtocolMsgSnmpv3AccessDelAccessNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSnmpv3AccessListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSnmpv3GetConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSnmpv3GetContextEngineidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginebootsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSnmpv3GetEngineidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginetimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMimicAgentAgentNumProtocolMsgSnmpv3GroupAddGroupNameSecurityModelSecurityNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteMimicAgentAgentNumProtocolMsgSnmpv3GroupClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMimicAgentAgentNumProtocolMsgSnmpv3GroupDelGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSnmpv3GroupListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSnmpv3SetConfigParameterValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMimicAgentAgentNumProtocolMsgSnmpv3UserAddUserNameSecurityNameAuthProtocolAuthKeyPrivProtocolPrivKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteMimicAgentAgentNumProtocolMsgSnmpv3UserClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMimicAgentAgentNumProtocolMsgSnmpv3UserDelUserNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSnmpv3UserListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSnmpv3UsmSaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSnmpv3UsmSaveasFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSnmpv3VacmSaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSnmpv3VacmSaveasFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMimicAgentAgentNumProtocolMsgSnmpv3ViewAddViewNameViewTypeSubtreeMaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMimicAgentAgentNumProtocolMsgSnmpv3ViewClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMimicAgentAgentNumProtocolMsgSnmpv3ViewDelViewNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSnmpv3ViewListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSshGetArgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSshGetConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSshGetStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSshGetTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSshIpaliasDisableIpaddressPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSshIpaliasEnableIpaddressPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSshIpaliasIsenabledIpaddressPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSshIpaliasListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSshSetConfigArgumentValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSshSetTraceEnableOrNotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSyslogGetArgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSyslogGetConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSyslogGetStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSyslogGetTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSyslogGetAttrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMimicAgentAgentNumProtocolMsgSyslogSendPriRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSyslogSetConfigArgumentValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSyslogSetTraceEnableOrNotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSyslogSetAttrValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putMimicAgentAgentNumProtocolMsgTelnetConnectionLogonConnectionIDUserPasswordRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putMimicAgentAgentNumProtocolMsgTelnetConnectionRequestConnectionIDCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putMimicAgentAgentNumProtocolMsgTelnetConnectionSignalConnectionIDSignalNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMimicAgentAgentNumProtocolMsgTelnetGetArgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTelnetGetConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTelnetGetStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTelnetGetTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgTelnetIpaliasDisableIpaddressPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgTelnetIpaliasEnableIpaddressPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTelnetIpaliasIsenabledIpaddressPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTelnetIpaliasListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTelnetServerGetConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTelnetServerGetKeymapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTelnetServerGetRulesdbRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTelnetServerGetStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTelnetServerGetUserdbRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTelnetServerGetUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgTelnetSetConfigArgumentValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgTelnetSetTraceEnableOrNotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTftpGetArgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTftpGetConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTftpGetStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTftpGetTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMimicAgentAgentNumProtocolMsgTftpSessionReadServerSrcfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMimicAgentAgentNumProtocolMsgTftpSessionWriteServerSrcfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgTftpSetConfigArgumentValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgTftpSetTraceEnableOrNotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTftpSessionIDGetParameterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgTftpSessionIDSetParameterValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgTftpSessionIDStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTftpSessionIDStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgTftpSessionIDStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTodGetArgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTodGetConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTodGetStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTodGetTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMimicAgentAgentNumProtocolMsgTodGettimeServerServerAddrPortPortNumScriptScriptNameTimeoutTimeSecRetriesNumRetriesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putMimicAgentAgentNumProtocolMsgTodSetConfigArgumentValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgTodSetTraceEnableOrNotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgWebGetArgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgWebGetConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgWebGetStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgWebGetTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMimicAgentAgentNumProtocolMsgWebPortAddPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgWebPortExistsPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMimicAgentAgentNumProtocolMsgWebPortRemovePortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgWebPortSetPortProtocolVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgWebPortStartPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgWebPortStopPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgWebSetConfigArgumentValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgWebSetTraceEnableOrNotRoute, (c) => {
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
  .openapi(postMimicAgentAgentNumValueAddObjectInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumValueEvalObjectInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumValueGetObjectInstanceVariableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumValueInfoObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumValueInstancesObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumValueListOIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumValueMevalObjInsArrayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumValueMgetObjInsVarArrayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumValueMibObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumValueMsetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumValueMunsetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumValueNameOIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumValueOidObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMimicAgentAgentNumValueRemoveObjectInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumValueSetObjectInstanceVariableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumValueSplitOIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumValueStateGetObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumValueStateSetObjectStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumValueUnsetObjectInstanceVariableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumValueVariablesObjectInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getMimicProtocolMsgCoapGetStatsHdrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicProtocolMsgDhcpGetStatsHdrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicProtocolMsgIpmiGetStatsHdrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicProtocolMsgMqttGetStatsHdrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicProtocolMsgNetflowGetStatsHdrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicProtocolMsgProxyGetStatsHdrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicProtocolMsgSflowGetStatsHdrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicProtocolMsgSnmptcpGetStatsHdrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicProtocolMsgSshGetStatsHdrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicProtocolMsgSyslogGetStatsHdrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicProtocolMsgTelnetGetStatsHdrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicProtocolMsgTftpGetStatsHdrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicProtocolMsgTodGetStatsHdrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicProtocolMsgWebGetStatsHdrRoute, (c) => {
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
