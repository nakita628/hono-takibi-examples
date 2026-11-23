import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const postMimicAccessAddUserAgentsMaskRouteHandler: RouteHandler<
  typeof postMimicAccessAddUserAgentsMaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMimicAccessDelUserRouteHandler: RouteHandler<
  typeof deleteMimicAccessDelUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAccessGetAcldbRouteHandler: RouteHandler<
  typeof getMimicAccessGetAcldbRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAccessGetAdmindirRouteHandler: RouteHandler<
  typeof getMimicAccessGetAdmindirRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAccessGetAdminuserRouteHandler: RouteHandler<
  typeof getMimicAccessGetAdminuserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAccessGetEnabledRouteHandler: RouteHandler<
  typeof getMimicAccessGetEnabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAccessListRouteHandler: RouteHandler<typeof getMimicAccessListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putMimicAccessLoadFilenameRouteHandler: RouteHandler<
  typeof putMimicAccessLoadFilenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAccessSaveFilenameRouteHandler: RouteHandler<
  typeof putMimicAccessSaveFilenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAccessSetAcldbDatabaseNameRouteHandler: RouteHandler<
  typeof putMimicAccessSetAcldbDatabaseNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAccessSetEnabledEnabledOrNotRouteHandler: RouteHandler<
  typeof putMimicAccessSetEnabledEnabledOrNotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMimicAgentAgentNumAddIPRouteHandler: RouteHandler<
  typeof postMimicAgentAgentNumAddIPRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMimicAgentAgentNumFromAddIPPortRouteHandler: RouteHandler<
  typeof postMimicAgentAgentNumFromAddIPPortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMimicAgentAgentNumFromDeleteIPPortRouteHandler: RouteHandler<
  typeof deleteMimicAgentAgentNumFromDeleteIPPortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumFromListRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumFromListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumGetChangedRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumGetChangedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumGetConfigChangedRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumGetConfigChangedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumGetDelayRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumGetDelayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumGetDropsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumGetDropsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumGetHostRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumGetHostRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumGetInformTimeoutRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumGetInformTimeoutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumGetInterfaceRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumGetInterfaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumGetMaskRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumGetMaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumGetMibsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumGetMibsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumGetNumStartsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumGetNumStartsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumGetOiddirRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumGetOiddirRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumGetOwnerRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumGetOwnerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumGetPdusizeRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumGetPdusizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumGetPortRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumGetPortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumGetPrivdirRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumGetPrivdirRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumGetProtocolRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumGetProtocolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumGetReadRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumGetReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumGetScenRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumGetScenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumGetSimRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumGetSimRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumGetStartRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumGetStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumGetStateRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumGetStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumGetStateChangedRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumGetStateChangedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumGetStatisticsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumGetStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumGetTraceRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumGetTraceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumGetValidateRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumGetValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumGetWriteRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumGetWriteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumHaltRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumHaltRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMimicAgentAgentNumIpaliasAddIPPortMaskInterfaceRouteHandler: RouteHandler<
  typeof postMimicAgentAgentNumIpaliasAddIPPortMaskInterfaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMimicAgentAgentNumIpaliasDeleteIPPortRouteHandler: RouteHandler<
  typeof deleteMimicAgentAgentNumIpaliasDeleteIPPortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumIpaliasListRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumIpaliasListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumIpaliasStartIPPortRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumIpaliasStartIPPortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumIpaliasStatusIPPortRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumIpaliasStatusIPPortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumIpaliasStopIPPortRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumIpaliasStopIPPortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumPauseRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumPauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgCoapGetArgsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgCoapGetArgsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgCoapGetConfigRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgCoapGetConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgCoapGetStatisticsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgCoapGetStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgCoapGetTraceRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgCoapGetTraceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgCoapSetConfigArgumentValueRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgCoapSetConfigArgumentValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgCoapSetTraceEnableOrNotRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgCoapSetTraceEnableOrNotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgDhcpGetArgsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgDhcpGetArgsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgDhcpGetConfigRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgDhcpGetConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgDhcpGetStatisticsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgDhcpGetStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgDhcpGetTraceRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgDhcpGetTraceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgDhcpParamsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgDhcpParamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgDhcpSetConfigArgumentValueRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgDhcpSetConfigArgumentValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgDhcpSetTraceEnableOrNotRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgDhcpSetTraceEnableOrNotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgIpmiGetArgsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgIpmiGetArgsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgIpmiGetConfigRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgIpmiGetConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgIpmiGetStatisticsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgIpmiGetStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgIpmiGetTraceRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgIpmiGetTraceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgIpmiGetAttrRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgIpmiGetAttrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgIpmiSetConfigArgumentValueRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgIpmiSetConfigArgumentValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgIpmiSetTraceEnableOrNotRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgIpmiSetTraceEnableOrNotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgIpmiSetAttrValueRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgIpmiSetAttrValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgMqttClientGetProtstateRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgMqttClientGetProtstateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgMqttClientGetStateRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgMqttClientGetStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgMqttClientMessageCardRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgMqttClientMessageCardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgMqttClientMessageGetMsgNumAttrRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgMqttClientMessageGetMsgNumAttrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgMqttClientMessageSetMsgNumAttrValueRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgMqttClientMessageSetMsgNumAttrValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgMqttClientResubscribeSubNumRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgMqttClientResubscribeSubNumRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgMqttClientRuntimeAbortRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgMqttClientRuntimeAbortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgMqttClientRuntimeConnectRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgMqttClientRuntimeConnectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgMqttClientRuntimeDisconnectRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgMqttClientRuntimeDisconnectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgMqttClientSetBrokerBrokerAddrRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgMqttClientSetBrokerBrokerAddrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgMqttClientSetCleansessionCleanOrNotRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgMqttClientSetCleansessionCleanOrNotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgMqttClientSetClientidClientIDRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgMqttClientSetClientidClientIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgMqttClientSetKeepaliveAliveTimeRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgMqttClientSetKeepaliveAliveTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgMqttClientSetOnDisconnectActionRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgMqttClientSetOnDisconnectActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgMqttClientSetPasswordPasswordRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgMqttClientSetPasswordPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgMqttClientSetPortPortRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgMqttClientSetPortPortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgMqttClientSetUsernameUsernameRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgMqttClientSetUsernameUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgMqttClientSetWillmsgMsgRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgMqttClientSetWillmsgMsgRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgMqttClientSetWillqosQosRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgMqttClientSetWillqosQosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgMqttClientSetWillretainRetainRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgMqttClientSetWillretainRetainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgMqttClientSetWilltopicTopicRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgMqttClientSetWilltopicTopicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgMqttClientSubscribeCardRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgMqttClientSubscribeCardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgMqttClientSubscribeGetSubNumAttrRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgMqttClientSubscribeGetSubNumAttrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgMqttClientSubscribeSetSubNumAttrValueRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgMqttClientSubscribeSetSubNumAttrValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgMqttClientUnsubscribeSubNumRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgMqttClientUnsubscribeSubNumRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgMqttGetArgsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgMqttGetArgsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgMqttGetConfigRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgMqttGetConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgMqttGetStatisticsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgMqttGetStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgMqttGetTraceRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgMqttGetTraceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgMqttSetConfigArgumentValueRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgMqttSetConfigArgumentValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgMqttSetTraceEnableOrNotRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgMqttSetTraceEnableOrNotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgNetflowFlowChangeDfsIntervalIntervalRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgNetflowFlowChangeDfsIntervalIntervalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgNetflowFlowChangeTfsIntervalIntervalRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgNetflowFlowChangeTfsIntervalIntervalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgNetflowFlowChangeFlowsetUidFieldNumAttrValueRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgNetflowFlowChangeFlowsetUidFieldNumAttrValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgNetflowFlowListRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgNetflowFlowListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgNetflowGetArgsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgNetflowGetArgsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgNetflowGetConfigRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgNetflowGetConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgNetflowGetStatisticsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgNetflowGetStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgNetflowGetTraceRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgNetflowGetTraceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgNetflowHaltRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgNetflowHaltRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgNetflowReloadRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgNetflowReloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgNetflowResumeRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgNetflowResumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgNetflowSetCollectorCollectorIPRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgNetflowSetCollectorCollectorIPRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgNetflowSetConfigArgumentValueRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgNetflowSetConfigArgumentValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgNetflowSetFilenameFileNameRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgNetflowSetFilenameFileNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgNetflowSetTraceEnableOrNotRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgNetflowSetTraceEnableOrNotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgProxyGetArgsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgProxyGetArgsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgProxyGetConfigRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgProxyGetConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgProxyGetStatisticsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgProxyGetStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgProxyGetTraceRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgProxyGetTraceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMimicAgentAgentNumProtocolMsgProxyPortAddPortTargetTargetPortRouteHandler: RouteHandler<
  typeof postMimicAgentAgentNumProtocolMsgProxyPortAddPortTargetTargetPortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgProxyPortIsStartedPortRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgProxyPortIsStartedPortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgProxyPortListRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgProxyPortListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMimicAgentAgentNumProtocolMsgProxyPortRemovePortRouteHandler: RouteHandler<
  typeof deleteMimicAgentAgentNumProtocolMsgProxyPortRemovePortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgProxyPortStartPortRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgProxyPortStartPortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgProxyPortStopPortRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgProxyPortStopPortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgProxySetConfigArgumentValueRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgProxySetConfigArgumentValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgProxySetTraceEnableOrNotRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgProxySetTraceEnableOrNotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgSflowGetArgsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgSflowGetArgsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgSflowGetConfigRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgSflowGetConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgSflowGetStatisticsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgSflowGetStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgSflowGetTraceRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgSflowGetTraceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgSflowHaltRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgSflowHaltRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgSflowReloadRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgSflowReloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgSflowResumeRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgSflowResumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgSflowSetConfigArgumentValueRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgSflowSetConfigArgumentValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgSflowSetTraceEnableOrNotRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgSflowSetTraceEnableOrNotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgSnmptcpGetArgsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgSnmptcpGetArgsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgSnmptcpGetConfigRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgSnmptcpGetConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgSnmptcpGetStatisticsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgSnmptcpGetStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgSnmptcpGetTraceRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgSnmptcpGetTraceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgSnmptcpIpaliasDisableIpaddressPortRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgSnmptcpIpaliasDisableIpaddressPortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgSnmptcpIpaliasEnableIpaddressPortRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgSnmptcpIpaliasEnableIpaddressPortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasIsenabledIpaddressPortRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasIsenabledIpaddressPortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasListRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgSnmptcpSetConfigArgumentValueRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgSnmptcpSetConfigArgumentValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgSnmptcpSetTraceEnableOrNotRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgSnmptcpSetTraceEnableOrNotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMimicAgentAgentNumProtocolMsgSnmpv3AccessAddGroupNamePrefixSecurityModelSecurityLevelContextMatchReadViewWriteViewNotifyViewRouteHandler: RouteHandler<
  typeof postMimicAgentAgentNumProtocolMsgSnmpv3AccessAddGroupNamePrefixSecurityModelSecurityLevelContextMatchReadViewWriteViewNotifyViewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMimicAgentAgentNumProtocolMsgSnmpv3AccessClearRouteHandler: RouteHandler<
  typeof deleteMimicAgentAgentNumProtocolMsgSnmpv3AccessClearRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMimicAgentAgentNumProtocolMsgSnmpv3AccessDelAccessNameRouteHandler: RouteHandler<
  typeof deleteMimicAgentAgentNumProtocolMsgSnmpv3AccessDelAccessNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgSnmpv3AccessListRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgSnmpv3AccessListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgSnmpv3GetConfigRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgSnmpv3GetConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgSnmpv3GetContextEngineidRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgSnmpv3GetContextEngineidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginebootsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginebootsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgSnmpv3GetEngineidRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgSnmpv3GetEngineidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginetimeRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginetimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMimicAgentAgentNumProtocolMsgSnmpv3GroupAddGroupNameSecurityModelSecurityNameRouteHandler: RouteHandler<
  typeof postMimicAgentAgentNumProtocolMsgSnmpv3GroupAddGroupNameSecurityModelSecurityNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMimicAgentAgentNumProtocolMsgSnmpv3GroupClearRouteHandler: RouteHandler<
  typeof deleteMimicAgentAgentNumProtocolMsgSnmpv3GroupClearRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMimicAgentAgentNumProtocolMsgSnmpv3GroupDelGroupNameRouteHandler: RouteHandler<
  typeof deleteMimicAgentAgentNumProtocolMsgSnmpv3GroupDelGroupNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgSnmpv3GroupListRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgSnmpv3GroupListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgSnmpv3SetConfigParameterValueRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgSnmpv3SetConfigParameterValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMimicAgentAgentNumProtocolMsgSnmpv3UserAddUserNameSecurityNameAuthProtocolAuthKeyPrivProtocolPrivKeyRouteHandler: RouteHandler<
  typeof postMimicAgentAgentNumProtocolMsgSnmpv3UserAddUserNameSecurityNameAuthProtocolAuthKeyPrivProtocolPrivKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMimicAgentAgentNumProtocolMsgSnmpv3UserClearRouteHandler: RouteHandler<
  typeof deleteMimicAgentAgentNumProtocolMsgSnmpv3UserClearRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMimicAgentAgentNumProtocolMsgSnmpv3UserDelUserNameRouteHandler: RouteHandler<
  typeof deleteMimicAgentAgentNumProtocolMsgSnmpv3UserDelUserNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgSnmpv3UserListRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgSnmpv3UserListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgSnmpv3UsmSaveRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgSnmpv3UsmSaveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgSnmpv3UsmSaveasFilenameRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgSnmpv3UsmSaveasFilenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgSnmpv3VacmSaveRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgSnmpv3VacmSaveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgSnmpv3VacmSaveasFilenameRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgSnmpv3VacmSaveasFilenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMimicAgentAgentNumProtocolMsgSnmpv3ViewAddViewNameViewTypeSubtreeMaskRouteHandler: RouteHandler<
  typeof postMimicAgentAgentNumProtocolMsgSnmpv3ViewAddViewNameViewTypeSubtreeMaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMimicAgentAgentNumProtocolMsgSnmpv3ViewClearRouteHandler: RouteHandler<
  typeof deleteMimicAgentAgentNumProtocolMsgSnmpv3ViewClearRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMimicAgentAgentNumProtocolMsgSnmpv3ViewDelViewNameRouteHandler: RouteHandler<
  typeof deleteMimicAgentAgentNumProtocolMsgSnmpv3ViewDelViewNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgSnmpv3ViewListRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgSnmpv3ViewListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgSshGetArgsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgSshGetArgsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgSshGetConfigRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgSshGetConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgSshGetStatisticsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgSshGetStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgSshGetTraceRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgSshGetTraceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgSshIpaliasDisableIpaddressPortRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgSshIpaliasDisableIpaddressPortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgSshIpaliasEnableIpaddressPortRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgSshIpaliasEnableIpaddressPortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgSshIpaliasIsenabledIpaddressPortRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgSshIpaliasIsenabledIpaddressPortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgSshIpaliasListRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgSshIpaliasListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgSshSetConfigArgumentValueRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgSshSetConfigArgumentValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgSshSetTraceEnableOrNotRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgSshSetTraceEnableOrNotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgSyslogGetArgsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgSyslogGetArgsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgSyslogGetConfigRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgSyslogGetConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgSyslogGetStatisticsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgSyslogGetStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgSyslogGetTraceRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgSyslogGetTraceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgSyslogGetAttrRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgSyslogGetAttrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMimicAgentAgentNumProtocolMsgSyslogSendPriRouteHandler: RouteHandler<
  typeof postMimicAgentAgentNumProtocolMsgSyslogSendPriRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgSyslogSetConfigArgumentValueRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgSyslogSetConfigArgumentValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgSyslogSetTraceEnableOrNotRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgSyslogSetTraceEnableOrNotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgSyslogSetAttrValueRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgSyslogSetAttrValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgTelnetConnectionLogonConnectionIDUserPasswordRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgTelnetConnectionLogonConnectionIDUserPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgTelnetConnectionRequestConnectionIDCommandRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgTelnetConnectionRequestConnectionIDCommandRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgTelnetConnectionSignalConnectionIDSignalNameRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgTelnetConnectionSignalConnectionIDSignalNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgTelnetGetArgsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgTelnetGetArgsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgTelnetGetConfigRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgTelnetGetConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgTelnetGetStatisticsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgTelnetGetStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgTelnetGetTraceRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgTelnetGetTraceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgTelnetIpaliasDisableIpaddressPortRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgTelnetIpaliasDisableIpaddressPortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgTelnetIpaliasEnableIpaddressPortRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgTelnetIpaliasEnableIpaddressPortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgTelnetIpaliasIsenabledIpaddressPortRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgTelnetIpaliasIsenabledIpaddressPortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgTelnetIpaliasListRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgTelnetIpaliasListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgTelnetServerGetConnectionsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgTelnetServerGetConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgTelnetServerGetKeymapRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgTelnetServerGetKeymapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgTelnetServerGetRulesdbRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgTelnetServerGetRulesdbRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgTelnetServerGetStateRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgTelnetServerGetStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgTelnetServerGetUserdbRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgTelnetServerGetUserdbRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgTelnetServerGetUsersRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgTelnetServerGetUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgTelnetSetConfigArgumentValueRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgTelnetSetConfigArgumentValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgTelnetSetTraceEnableOrNotRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgTelnetSetTraceEnableOrNotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgTftpGetArgsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgTftpGetArgsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgTftpGetConfigRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgTftpGetConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgTftpGetStatisticsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgTftpGetStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgTftpGetTraceRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgTftpGetTraceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMimicAgentAgentNumProtocolMsgTftpSessionReadServerSrcfileRouteHandler: RouteHandler<
  typeof postMimicAgentAgentNumProtocolMsgTftpSessionReadServerSrcfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMimicAgentAgentNumProtocolMsgTftpSessionWriteServerSrcfileRouteHandler: RouteHandler<
  typeof postMimicAgentAgentNumProtocolMsgTftpSessionWriteServerSrcfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgTftpSetConfigArgumentValueRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgTftpSetConfigArgumentValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgTftpSetTraceEnableOrNotRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgTftpSetTraceEnableOrNotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgTftpSessionIDGetParameterRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgTftpSessionIDGetParameterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgTftpSessionIDSetParameterValueRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgTftpSessionIDSetParameterValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgTftpSessionIDStartRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgTftpSessionIDStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgTftpSessionIDStatusRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgTftpSessionIDStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgTftpSessionIDStopRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgTftpSessionIDStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgTodGetArgsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgTodGetArgsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgTodGetConfigRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgTodGetConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgTodGetStatisticsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgTodGetStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgTodGetTraceRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgTodGetTraceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgTodGettimeServerServerAddrPortPortNumScriptScriptNameTimeoutTimeSecRetriesNumRetriesRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgTodGettimeServerServerAddrPortPortNumScriptScriptNameTimeoutTimeSecRetriesNumRetriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgTodSetConfigArgumentValueRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgTodSetConfigArgumentValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgTodSetTraceEnableOrNotRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgTodSetTraceEnableOrNotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgWebGetArgsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgWebGetArgsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgWebGetConfigRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgWebGetConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgWebGetStatisticsRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgWebGetStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgWebGetTraceRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgWebGetTraceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMimicAgentAgentNumProtocolMsgWebPortAddPortRouteHandler: RouteHandler<
  typeof postMimicAgentAgentNumProtocolMsgWebPortAddPortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolMsgWebPortExistsPortRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolMsgWebPortExistsPortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMimicAgentAgentNumProtocolMsgWebPortRemovePortRouteHandler: RouteHandler<
  typeof deleteMimicAgentAgentNumProtocolMsgWebPortRemovePortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgWebPortSetPortProtocolVersionRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgWebPortSetPortProtocolVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgWebPortStartPortRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgWebPortStartPortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgWebPortStopPortRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgWebPortStopPortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgWebSetConfigArgumentValueRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgWebSetConfigArgumentValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumProtocolMsgWebSetTraceEnableOrNotRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumProtocolMsgWebSetTraceEnableOrNotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumProtocolProtGetConfigRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumProtocolProtGetConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumReloadRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumReloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMimicAgentAgentNumRemoveRouteHandler: RouteHandler<
  typeof deleteMimicAgentAgentNumRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumResumeRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumResumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumSaveRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumSaveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumSetDelayDelayRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumSetDelayDelayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumSetDropsDropsRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumSetDropsDropsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumSetHostHostRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumSetHostHostRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumSetInformTimeoutInformTimeoutRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumSetInformTimeoutInformTimeoutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumSetInterfaceInterfaceRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumSetInterfaceInterfaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumSetMaskMaskRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumSetMaskMaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumSetMibsRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumSetMibsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumSetOiddirOiddirRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumSetOiddirOiddirRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumSetOwnerOwnerRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumSetOwnerOwnerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumSetPdusizePdusizeRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumSetPdusizePdusizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumSetPortPortRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumSetPortPortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumSetPrivdirPrivdirRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumSetPrivdirPrivdirRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumSetProtocolRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumSetProtocolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumSetReadReadRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumSetReadReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumSetStartStartRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumSetStartStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumSetTraceTraceRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumSetTraceTraceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumSetValidateValidateRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumSetValidateValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumSetWriteWriteRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumSetWriteWriteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumStartRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumStopRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumStoreCopyOtherAgentRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumStoreCopyOtherAgentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumStoreExistsVarRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumStoreExistsVarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumStoreGetVarRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumStoreGetVarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumStoreListRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumStoreListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumStoreLreplaceVarIndexRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumStoreLreplaceVarIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumStorePersistsVarRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumStorePersistsVarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumStoreSetVarPersistRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumStoreSetVarPersistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumStoreUnsetVarRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumStoreUnsetVarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMimicAgentAgentNumTimerScriptAddScriptIntervalArgRouteHandler: RouteHandler<
  typeof postMimicAgentAgentNumTimerScriptAddScriptIntervalArgRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMimicAgentAgentNumTimerScriptDeleteScriptIntervalArgRouteHandler: RouteHandler<
  typeof deleteMimicAgentAgentNumTimerScriptDeleteScriptIntervalArgRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumTimerScriptListRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumTimerScriptListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMimicAgentAgentNumTrapConfigAddIPPortRouteHandler: RouteHandler<
  typeof postMimicAgentAgentNumTrapConfigAddIPPortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMimicAgentAgentNumTrapConfigDeleteIPPortRouteHandler: RouteHandler<
  typeof deleteMimicAgentAgentNumTrapConfigDeleteIPPortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumTrapConfigListRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumTrapConfigListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumTrapListRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumTrapListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMimicAgentAgentNumValueAddObjectInstanceRouteHandler: RouteHandler<
  typeof postMimicAgentAgentNumValueAddObjectInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumValueEvalObjectInstanceRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumValueEvalObjectInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumValueGetObjectInstanceVariableRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumValueGetObjectInstanceVariableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumValueInfoObjectRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumValueInfoObjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumValueInstancesObjectRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumValueInstancesObjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumValueListOIDRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumValueListOIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumValueMevalObjInsArrayRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumValueMevalObjInsArrayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumValueMgetObjInsVarArrayRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumValueMgetObjInsVarArrayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumValueMibObjectRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumValueMibObjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumValueMsetRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumValueMsetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumValueMunsetRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumValueMunsetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumValueNameOIDRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumValueNameOIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumValueOidObjectRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumValueOidObjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMimicAgentAgentNumValueRemoveObjectInstanceRouteHandler: RouteHandler<
  typeof deleteMimicAgentAgentNumValueRemoveObjectInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumValueSetObjectInstanceVariableRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumValueSetObjectInstanceVariableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumValueSplitOIDRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumValueSplitOIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumValueStateGetObjectRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumValueStateGetObjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumValueStateSetObjectStateRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumValueStateSetObjectStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicAgentAgentNumValueUnsetObjectInstanceVariableRouteHandler: RouteHandler<
  typeof putMimicAgentAgentNumValueUnsetObjectInstanceVariableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicAgentAgentNumValueVariablesObjectInstanceRouteHandler: RouteHandler<
  typeof getMimicAgentAgentNumValueVariablesObjectInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicClearFirstAgentNumLastAgentNumRouteHandler: RouteHandler<
  typeof putMimicClearFirstAgentNumLastAgentNumRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicGetActiveDataListRouteHandler: RouteHandler<
  typeof getMimicGetActiveDataListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicGetActiveListRouteHandler: RouteHandler<
  typeof getMimicGetActiveListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicGetCfgfileRouteHandler: RouteHandler<typeof getMimicGetCfgfileRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMimicGetCfgfileChangedRouteHandler: RouteHandler<
  typeof getMimicGetCfgfileChangedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicGetChangedConfigListRouteHandler: RouteHandler<
  typeof getMimicGetChangedConfigListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicGetChangedStateListRouteHandler: RouteHandler<
  typeof getMimicGetChangedStateListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicGetClientsRouteHandler: RouteHandler<typeof getMimicGetClientsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMimicGetConfiguredListRouteHandler: RouteHandler<
  typeof getMimicGetConfiguredListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicGetInterfacesRouteHandler: RouteHandler<
  typeof getMimicGetInterfacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicGetLastRouteHandler: RouteHandler<typeof getMimicGetLastRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicGetLogRouteHandler: RouteHandler<typeof getMimicGetLogRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicGetMaxRouteHandler: RouteHandler<typeof getMimicGetMaxRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicGetNetaddrRouteHandler: RouteHandler<typeof getMimicGetNetaddrRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMimicGetNetdevRouteHandler: RouteHandler<typeof getMimicGetNetdevRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMimicGetProductRouteHandler: RouteHandler<typeof getMimicGetProductRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMimicGetProtocolsRouteHandler: RouteHandler<
  typeof getMimicGetProtocolsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicGetReturnRouteHandler: RouteHandler<typeof getMimicGetReturnRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMimicGetVersionRouteHandler: RouteHandler<typeof getMimicGetVersionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putMimicLoadCfgFileFirstAgentNumLastAgentNumStartAgentNumRouteHandler: RouteHandler<
  typeof putMimicLoadCfgFileFirstAgentNumLastAgentNumStartAgentNumRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicMgetInfoArrayRouteHandler: RouteHandler<
  typeof getMimicMgetInfoArrayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicProtocolMsgCoapGetStatsHdrRouteHandler: RouteHandler<
  typeof getMimicProtocolMsgCoapGetStatsHdrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicProtocolMsgDhcpGetStatsHdrRouteHandler: RouteHandler<
  typeof getMimicProtocolMsgDhcpGetStatsHdrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicProtocolMsgIpmiGetStatsHdrRouteHandler: RouteHandler<
  typeof getMimicProtocolMsgIpmiGetStatsHdrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicProtocolMsgMqttGetStatsHdrRouteHandler: RouteHandler<
  typeof getMimicProtocolMsgMqttGetStatsHdrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicProtocolMsgNetflowGetStatsHdrRouteHandler: RouteHandler<
  typeof getMimicProtocolMsgNetflowGetStatsHdrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicProtocolMsgProxyGetStatsHdrRouteHandler: RouteHandler<
  typeof getMimicProtocolMsgProxyGetStatsHdrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicProtocolMsgSflowGetStatsHdrRouteHandler: RouteHandler<
  typeof getMimicProtocolMsgSflowGetStatsHdrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicProtocolMsgSnmptcpGetStatsHdrRouteHandler: RouteHandler<
  typeof getMimicProtocolMsgSnmptcpGetStatsHdrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicProtocolMsgSshGetStatsHdrRouteHandler: RouteHandler<
  typeof getMimicProtocolMsgSshGetStatsHdrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicProtocolMsgSyslogGetStatsHdrRouteHandler: RouteHandler<
  typeof getMimicProtocolMsgSyslogGetStatsHdrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicProtocolMsgTelnetGetStatsHdrRouteHandler: RouteHandler<
  typeof getMimicProtocolMsgTelnetGetStatsHdrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicProtocolMsgTftpGetStatsHdrRouteHandler: RouteHandler<
  typeof getMimicProtocolMsgTftpGetStatsHdrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicProtocolMsgTodGetStatsHdrRouteHandler: RouteHandler<
  typeof getMimicProtocolMsgTodGetStatsHdrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicProtocolMsgWebGetStatsHdrRouteHandler: RouteHandler<
  typeof getMimicProtocolMsgWebGetStatsHdrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicSaveRouteHandler: RouteHandler<typeof putMimicSaveRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicSaveasCfgFileFirstAgentNumLastAgentNumRouteHandler: RouteHandler<
  typeof putMimicSaveasCfgFileFirstAgentNumLastAgentNumRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicSetLogRouteHandler: RouteHandler<typeof putMimicSetLogRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicSetNetdevRouteHandler: RouteHandler<typeof putMimicSetNetdevRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putMimicSetPersistentRouteHandler: RouteHandler<
  typeof putMimicSetPersistentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicStartRouteHandler: RouteHandler<typeof putMimicStartRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicStopRouteHandler: RouteHandler<typeof putMimicStopRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicStoreExistsVarRouteHandler: RouteHandler<
  typeof getMimicStoreExistsVarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicStoreGetVarRouteHandler: RouteHandler<
  typeof getMimicStoreGetVarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicStoreListRouteHandler: RouteHandler<typeof getMimicStoreListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putMimicStoreLreplaceVarIndexRouteHandler: RouteHandler<
  typeof putMimicStoreLreplaceVarIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicStorePersistsVarRouteHandler: RouteHandler<
  typeof getMimicStorePersistsVarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicStoreSetVarPersistRouteHandler: RouteHandler<
  typeof putMimicStoreSetVarPersistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicStoreUnsetVarRouteHandler: RouteHandler<
  typeof putMimicStoreUnsetVarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMimicTerminateRouteHandler: RouteHandler<typeof putMimicTerminateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postMimicTimerScriptAddScriptIntervalArgRouteHandler: RouteHandler<
  typeof postMimicTimerScriptAddScriptIntervalArgRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMimicTimerScriptDeleteScriptIntervalArgRouteHandler: RouteHandler<
  typeof deleteMimicTimerScriptDeleteScriptIntervalArgRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMimicTimerScriptListRouteHandler: RouteHandler<
  typeof getMimicTimerScriptListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
