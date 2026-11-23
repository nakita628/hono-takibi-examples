import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteContactFlowModulesInstanceIdContactFlowModuleIdRoute,
  deleteContactFlowsInstanceIdContactFlowIdRoute,
  deleteHoursOfOperationsInstanceIdHoursOfOperationIdRoute,
  deleteInstanceInstanceIdApprovedOriginOriginRoute,
  deleteInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdRoute,
  deleteInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesUseCaseIdRoute,
  deleteInstanceInstanceIdLambdaFunctionFunctionArnRoute,
  deleteInstanceInstanceIdLexBotBotNameLexRegionRoute,
  deleteInstanceInstanceIdRoute,
  deleteInstanceInstanceIdSecurityKeyAssociationIdRoute,
  deleteInstanceInstanceIdStorageConfigAssociationIdResourceTypeRoute,
  deleteInstanceInstanceIdTaskTemplateTaskTemplateIdRoute,
  deletePhoneNumberPhoneNumberIdContactFlowInstanceIdRoute,
  deletePhoneNumberPhoneNumberIdRoute,
  deleteQuickConnectsInstanceIdQuickConnectIdRoute,
  deleteRulesInstanceIdRuleIdRoute,
  deleteSecurityProfilesInstanceIdSecurityProfileIdRoute,
  deleteTagsResourceArnTagKeysRoute,
  deleteTrafficDistributionGroupTrafficDistributionGroupIdRoute,
  deleteUserHierarchyGroupsInstanceIdHierarchyGroupIdRoute,
  deleteUsersInstanceIdUserIdRoute,
  getAgentStatusInstanceIdAgentStatusIdRoute,
  getAgentStatusInstanceIdRoute,
  getContactAttributesInstanceIdInitialContactIdRoute,
  getContactFlowModulesInstanceIdContactFlowModuleIdRoute,
  getContactFlowModulesSummaryInstanceIdRoute,
  getContactFlowsInstanceIdContactFlowIdRoute,
  getContactFlowsSummaryInstanceIdRoute,
  getContactReferencesInstanceIdContactIdReferenceTypesRoute,
  getContactsInstanceIdContactIdRoute,
  getHoursOfOperationsInstanceIdHoursOfOperationIdRoute,
  getHoursOfOperationsSummaryInstanceIdRoute,
  getInstanceInstanceIdApprovedOriginsRoute,
  getInstanceInstanceIdAttributeAttributeTypeRoute,
  getInstanceInstanceIdAttributesRoute,
  getInstanceInstanceIdBotsLexVersionRoute,
  getInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesRoute,
  getInstanceInstanceIdIntegrationAssociationsRoute,
  getInstanceInstanceIdLambdaFunctionsRoute,
  getInstanceInstanceIdLexBotsRoute,
  getInstanceInstanceIdRoute,
  getInstanceInstanceIdSecurityKeysRoute,
  getInstanceInstanceIdStorageConfigAssociationIdResourceTypeRoute,
  getInstanceInstanceIdStorageConfigsResourceTypeRoute,
  getInstanceInstanceIdTaskTemplateRoute,
  getInstanceInstanceIdTaskTemplateTaskTemplateIdRoute,
  getInstanceRoute,
  getPhoneNumberPhoneNumberIdRoute,
  getPhoneNumbersSummaryInstanceIdRoute,
  getPromptsSummaryInstanceIdRoute,
  getQueuesInstanceIdQueueIdQuickConnectsRoute,
  getQueuesInstanceIdQueueIdRoute,
  getQueuesSummaryInstanceIdRoute,
  getQuickConnectsInstanceIdQuickConnectIdRoute,
  getQuickConnectsInstanceIdRoute,
  getRoutingProfilesInstanceIdRoutingProfileIdQueuesRoute,
  getRoutingProfilesInstanceIdRoutingProfileIdRoute,
  getRoutingProfilesSummaryInstanceIdRoute,
  getRulesInstanceIdRoute,
  getRulesInstanceIdRuleIdRoute,
  getSecurityProfilesInstanceIdSecurityProfileIdRoute,
  getSecurityProfilesPermissionsInstanceIdSecurityProfileIdRoute,
  getSecurityProfilesSummaryInstanceIdRoute,
  getTagsResourceArnRoute,
  getTrafficDistributionGroupsRoute,
  getTrafficDistributionGroupTrafficDistributionGroupIdRoute,
  getTrafficDistributionIdRoute,
  getUserFederateInstanceIdRoute,
  getUserHierarchyGroupsInstanceIdHierarchyGroupIdRoute,
  getUserHierarchyGroupsSummaryInstanceIdRoute,
  getUserHierarchyStructureInstanceIdRoute,
  getUsersInstanceIdUserIdRoute,
  getUsersSummaryInstanceIdRoute,
  getVocabularyInstanceIdVocabularyIdRoute,
  postAgentStatusInstanceIdAgentStatusIdRoute,
  postContactAttributesRoute,
  postContactCreateParticipantRoute,
  postContactFlowModulesInstanceIdContactFlowModuleIdContentRoute,
  postContactFlowModulesInstanceIdContactFlowModuleIdMetadataRoute,
  postContactFlowsInstanceIdContactFlowIdContentRoute,
  postContactFlowsInstanceIdContactFlowIdMetadataRoute,
  postContactFlowsInstanceIdContactFlowIdNameRoute,
  postContactMonitorRoute,
  postContactResumeRecordingRoute,
  postContactScheduleRoute,
  postContactsInstanceIdContactIdRoute,
  postContactStartRecordingRoute,
  postContactStartStreamingRoute,
  postContactStopRecordingRoute,
  postContactStopRoute,
  postContactStopStreamingRoute,
  postContactSuspendRecordingRoute,
  postContactTransferRoute,
  postDefaultVocabularySummaryInstanceIdRoute,
  postHoursOfOperationsInstanceIdHoursOfOperationIdRoute,
  postInstanceInstanceIdAttributeAttributeTypeRoute,
  postInstanceInstanceIdBotRoute,
  postInstanceInstanceIdReplicateRoute,
  postInstanceInstanceIdStorageConfigAssociationIdResourceTypeRoute,
  postInstanceInstanceIdTaskTemplateTaskTemplateIdRoute,
  postMetricsCurrentInstanceIdRoute,
  postMetricsDataRoute,
  postMetricsHistoricalInstanceIdRoute,
  postMetricsUserdataInstanceIdRoute,
  postPhoneNumberClaimRoute,
  postPhoneNumberListRoute,
  postPhoneNumberSearchAvailableRoute,
  postQueuesInstanceIdQueueIdAssociateQuickConnectsRoute,
  postQueuesInstanceIdQueueIdDisassociateQuickConnectsRoute,
  postQueuesInstanceIdQueueIdHoursOfOperationRoute,
  postQueuesInstanceIdQueueIdMaxContactsRoute,
  postQueuesInstanceIdQueueIdNameRoute,
  postQueuesInstanceIdQueueIdOutboundCallerConfigRoute,
  postQueuesInstanceIdQueueIdStatusRoute,
  postQuickConnectsInstanceIdQuickConnectIdConfigRoute,
  postQuickConnectsInstanceIdQuickConnectIdNameRoute,
  postRoutingProfilesInstanceIdRoutingProfileIdAssociateQueuesRoute,
  postRoutingProfilesInstanceIdRoutingProfileIdConcurrencyRoute,
  postRoutingProfilesInstanceIdRoutingProfileIdDefaultOutboundQueueRoute,
  postRoutingProfilesInstanceIdRoutingProfileIdDisassociateQueuesRoute,
  postRoutingProfilesInstanceIdRoutingProfileIdNameRoute,
  postRoutingProfilesInstanceIdRoutingProfileIdQueuesRoute,
  postRulesInstanceIdRoute,
  postSearchQueuesRoute,
  postSearchRoutingProfilesRoute,
  postSearchSecurityProfilesRoute,
  postSearchUsersRoute,
  postSecurityProfilesInstanceIdSecurityProfileIdRoute,
  postTagsResourceArnRoute,
  postUserHierarchyGroupsInstanceIdHierarchyGroupIdNameRoute,
  postUserHierarchyStructureInstanceIdRoute,
  postUsersInstanceIdUserIdContactRoute,
  postUsersInstanceIdUserIdHierarchyRoute,
  postUsersInstanceIdUserIdIdentityInfoRoute,
  postUsersInstanceIdUserIdPhoneConfigRoute,
  postUsersInstanceIdUserIdRoutingProfileRoute,
  postUsersInstanceIdUserIdSecurityProfilesRoute,
  postVocabularyInstanceIdRoute,
  postVocabularyRemoveInstanceIdVocabularyIdRoute,
  postVocabularySummaryInstanceIdRoute,
  putAgentStatusInstanceIdRoute,
  putContactChatRoute,
  putContactFlowModulesInstanceIdRoute,
  putContactFlowsInstanceIdRoute,
  putContactOutboundVoiceRoute,
  putContactParticipantRoleConfigInstanceIdContactIdRoute,
  putContactTaskRoute,
  putDefaultVocabularyInstanceIdLanguageCodeRoute,
  putHoursOfOperationsInstanceIdRoute,
  putInstanceInstanceIdApprovedOriginRoute,
  putInstanceInstanceIdBotRoute,
  putInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesRoute,
  putInstanceInstanceIdIntegrationAssociationsRoute,
  putInstanceInstanceIdLambdaFunctionRoute,
  putInstanceInstanceIdLexBotRoute,
  putInstanceInstanceIdSecurityKeyRoute,
  putInstanceInstanceIdStorageConfigRoute,
  putInstanceInstanceIdTaskTemplateRoute,
  putInstanceRoute,
  putPhoneNumberPhoneNumberIdContactFlowRoute,
  putPhoneNumberPhoneNumberIdRoute,
  putQueuesInstanceIdRoute,
  putQuickConnectsInstanceIdRoute,
  putRoutingProfilesInstanceIdRoute,
  putRulesInstanceIdRuleIdRoute,
  putSecurityProfilesInstanceIdRoute,
  putTrafficDistributionGroupRoute,
  putTrafficDistributionIdRoute,
  putUserHierarchyGroupsInstanceIdRoute,
  putUsersInstanceIdRoute,
  putUsersInstanceIdUserIdStatusRoute,
} from './routes'
import {
  deleteContactFlowModulesInstanceIdContactFlowModuleIdRouteHandler,
  deleteContactFlowsInstanceIdContactFlowIdRouteHandler,
  deleteHoursOfOperationsInstanceIdHoursOfOperationIdRouteHandler,
  deleteInstanceInstanceIdApprovedOriginOriginRouteHandler,
  deleteInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdRouteHandler,
  deleteInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesUseCaseIdRouteHandler,
  deleteInstanceInstanceIdLambdaFunctionFunctionArnRouteHandler,
  deleteInstanceInstanceIdLexBotBotNameLexRegionRouteHandler,
  deleteInstanceInstanceIdRouteHandler,
  deleteInstanceInstanceIdSecurityKeyAssociationIdRouteHandler,
  deleteInstanceInstanceIdStorageConfigAssociationIdResourceTypeRouteHandler,
  deleteInstanceInstanceIdTaskTemplateTaskTemplateIdRouteHandler,
  deletePhoneNumberPhoneNumberIdContactFlowInstanceIdRouteHandler,
  deletePhoneNumberPhoneNumberIdRouteHandler,
  deleteQuickConnectsInstanceIdQuickConnectIdRouteHandler,
  deleteRulesInstanceIdRuleIdRouteHandler,
  deleteSecurityProfilesInstanceIdSecurityProfileIdRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  deleteTrafficDistributionGroupTrafficDistributionGroupIdRouteHandler,
  deleteUserHierarchyGroupsInstanceIdHierarchyGroupIdRouteHandler,
  deleteUsersInstanceIdUserIdRouteHandler,
  getAgentStatusInstanceIdAgentStatusIdRouteHandler,
  getAgentStatusInstanceIdRouteHandler,
  getContactAttributesInstanceIdInitialContactIdRouteHandler,
  getContactFlowModulesInstanceIdContactFlowModuleIdRouteHandler,
  getContactFlowModulesSummaryInstanceIdRouteHandler,
  getContactFlowsInstanceIdContactFlowIdRouteHandler,
  getContactFlowsSummaryInstanceIdRouteHandler,
  getContactReferencesInstanceIdContactIdReferenceTypesRouteHandler,
  getContactsInstanceIdContactIdRouteHandler,
  getHoursOfOperationsInstanceIdHoursOfOperationIdRouteHandler,
  getHoursOfOperationsSummaryInstanceIdRouteHandler,
  getInstanceInstanceIdApprovedOriginsRouteHandler,
  getInstanceInstanceIdAttributeAttributeTypeRouteHandler,
  getInstanceInstanceIdAttributesRouteHandler,
  getInstanceInstanceIdBotsLexVersionRouteHandler,
  getInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesRouteHandler,
  getInstanceInstanceIdIntegrationAssociationsRouteHandler,
  getInstanceInstanceIdLambdaFunctionsRouteHandler,
  getInstanceInstanceIdLexBotsRouteHandler,
  getInstanceInstanceIdRouteHandler,
  getInstanceInstanceIdSecurityKeysRouteHandler,
  getInstanceInstanceIdStorageConfigAssociationIdResourceTypeRouteHandler,
  getInstanceInstanceIdStorageConfigsResourceTypeRouteHandler,
  getInstanceInstanceIdTaskTemplateRouteHandler,
  getInstanceInstanceIdTaskTemplateTaskTemplateIdRouteHandler,
  getInstanceRouteHandler,
  getPhoneNumberPhoneNumberIdRouteHandler,
  getPhoneNumbersSummaryInstanceIdRouteHandler,
  getPromptsSummaryInstanceIdRouteHandler,
  getQueuesInstanceIdQueueIdQuickConnectsRouteHandler,
  getQueuesInstanceIdQueueIdRouteHandler,
  getQueuesSummaryInstanceIdRouteHandler,
  getQuickConnectsInstanceIdQuickConnectIdRouteHandler,
  getQuickConnectsInstanceIdRouteHandler,
  getRoutingProfilesInstanceIdRoutingProfileIdQueuesRouteHandler,
  getRoutingProfilesInstanceIdRoutingProfileIdRouteHandler,
  getRoutingProfilesSummaryInstanceIdRouteHandler,
  getRulesInstanceIdRouteHandler,
  getRulesInstanceIdRuleIdRouteHandler,
  getSecurityProfilesInstanceIdSecurityProfileIdRouteHandler,
  getSecurityProfilesPermissionsInstanceIdSecurityProfileIdRouteHandler,
  getSecurityProfilesSummaryInstanceIdRouteHandler,
  getTagsResourceArnRouteHandler,
  getTrafficDistributionGroupsRouteHandler,
  getTrafficDistributionGroupTrafficDistributionGroupIdRouteHandler,
  getTrafficDistributionIdRouteHandler,
  getUserFederateInstanceIdRouteHandler,
  getUserHierarchyGroupsInstanceIdHierarchyGroupIdRouteHandler,
  getUserHierarchyGroupsSummaryInstanceIdRouteHandler,
  getUserHierarchyStructureInstanceIdRouteHandler,
  getUsersInstanceIdUserIdRouteHandler,
  getUsersSummaryInstanceIdRouteHandler,
  getVocabularyInstanceIdVocabularyIdRouteHandler,
  postAgentStatusInstanceIdAgentStatusIdRouteHandler,
  postContactAttributesRouteHandler,
  postContactCreateParticipantRouteHandler,
  postContactFlowModulesInstanceIdContactFlowModuleIdContentRouteHandler,
  postContactFlowModulesInstanceIdContactFlowModuleIdMetadataRouteHandler,
  postContactFlowsInstanceIdContactFlowIdContentRouteHandler,
  postContactFlowsInstanceIdContactFlowIdMetadataRouteHandler,
  postContactFlowsInstanceIdContactFlowIdNameRouteHandler,
  postContactMonitorRouteHandler,
  postContactResumeRecordingRouteHandler,
  postContactScheduleRouteHandler,
  postContactsInstanceIdContactIdRouteHandler,
  postContactStartRecordingRouteHandler,
  postContactStartStreamingRouteHandler,
  postContactStopRecordingRouteHandler,
  postContactStopRouteHandler,
  postContactStopStreamingRouteHandler,
  postContactSuspendRecordingRouteHandler,
  postContactTransferRouteHandler,
  postDefaultVocabularySummaryInstanceIdRouteHandler,
  postHoursOfOperationsInstanceIdHoursOfOperationIdRouteHandler,
  postInstanceInstanceIdAttributeAttributeTypeRouteHandler,
  postInstanceInstanceIdBotRouteHandler,
  postInstanceInstanceIdReplicateRouteHandler,
  postInstanceInstanceIdStorageConfigAssociationIdResourceTypeRouteHandler,
  postInstanceInstanceIdTaskTemplateTaskTemplateIdRouteHandler,
  postMetricsCurrentInstanceIdRouteHandler,
  postMetricsDataRouteHandler,
  postMetricsHistoricalInstanceIdRouteHandler,
  postMetricsUserdataInstanceIdRouteHandler,
  postPhoneNumberClaimRouteHandler,
  postPhoneNumberListRouteHandler,
  postPhoneNumberSearchAvailableRouteHandler,
  postQueuesInstanceIdQueueIdAssociateQuickConnectsRouteHandler,
  postQueuesInstanceIdQueueIdDisassociateQuickConnectsRouteHandler,
  postQueuesInstanceIdQueueIdHoursOfOperationRouteHandler,
  postQueuesInstanceIdQueueIdMaxContactsRouteHandler,
  postQueuesInstanceIdQueueIdNameRouteHandler,
  postQueuesInstanceIdQueueIdOutboundCallerConfigRouteHandler,
  postQueuesInstanceIdQueueIdStatusRouteHandler,
  postQuickConnectsInstanceIdQuickConnectIdConfigRouteHandler,
  postQuickConnectsInstanceIdQuickConnectIdNameRouteHandler,
  postRoutingProfilesInstanceIdRoutingProfileIdAssociateQueuesRouteHandler,
  postRoutingProfilesInstanceIdRoutingProfileIdConcurrencyRouteHandler,
  postRoutingProfilesInstanceIdRoutingProfileIdDefaultOutboundQueueRouteHandler,
  postRoutingProfilesInstanceIdRoutingProfileIdDisassociateQueuesRouteHandler,
  postRoutingProfilesInstanceIdRoutingProfileIdNameRouteHandler,
  postRoutingProfilesInstanceIdRoutingProfileIdQueuesRouteHandler,
  postRulesInstanceIdRouteHandler,
  postSearchQueuesRouteHandler,
  postSearchRoutingProfilesRouteHandler,
  postSearchSecurityProfilesRouteHandler,
  postSearchUsersRouteHandler,
  postSecurityProfilesInstanceIdSecurityProfileIdRouteHandler,
  postTagsResourceArnRouteHandler,
  postUserHierarchyGroupsInstanceIdHierarchyGroupIdNameRouteHandler,
  postUserHierarchyStructureInstanceIdRouteHandler,
  postUsersInstanceIdUserIdContactRouteHandler,
  postUsersInstanceIdUserIdHierarchyRouteHandler,
  postUsersInstanceIdUserIdIdentityInfoRouteHandler,
  postUsersInstanceIdUserIdPhoneConfigRouteHandler,
  postUsersInstanceIdUserIdRoutingProfileRouteHandler,
  postUsersInstanceIdUserIdSecurityProfilesRouteHandler,
  postVocabularyInstanceIdRouteHandler,
  postVocabularyRemoveInstanceIdVocabularyIdRouteHandler,
  postVocabularySummaryInstanceIdRouteHandler,
  putAgentStatusInstanceIdRouteHandler,
  putContactChatRouteHandler,
  putContactFlowModulesInstanceIdRouteHandler,
  putContactFlowsInstanceIdRouteHandler,
  putContactOutboundVoiceRouteHandler,
  putContactParticipantRoleConfigInstanceIdContactIdRouteHandler,
  putContactTaskRouteHandler,
  putDefaultVocabularyInstanceIdLanguageCodeRouteHandler,
  putHoursOfOperationsInstanceIdRouteHandler,
  putInstanceInstanceIdApprovedOriginRouteHandler,
  putInstanceInstanceIdBotRouteHandler,
  putInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesRouteHandler,
  putInstanceInstanceIdIntegrationAssociationsRouteHandler,
  putInstanceInstanceIdLambdaFunctionRouteHandler,
  putInstanceInstanceIdLexBotRouteHandler,
  putInstanceInstanceIdSecurityKeyRouteHandler,
  putInstanceInstanceIdStorageConfigRouteHandler,
  putInstanceInstanceIdTaskTemplateRouteHandler,
  putInstanceRouteHandler,
  putPhoneNumberPhoneNumberIdContactFlowRouteHandler,
  putPhoneNumberPhoneNumberIdRouteHandler,
  putQueuesInstanceIdRouteHandler,
  putQuickConnectsInstanceIdRouteHandler,
  putRoutingProfilesInstanceIdRouteHandler,
  putRulesInstanceIdRuleIdRouteHandler,
  putSecurityProfilesInstanceIdRouteHandler,
  putTrafficDistributionGroupRouteHandler,
  putTrafficDistributionIdRouteHandler,
  putUserHierarchyGroupsInstanceIdRouteHandler,
  putUsersInstanceIdRouteHandler,
  putUsersInstanceIdUserIdStatusRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    putInstanceInstanceIdApprovedOriginRoute,
    putInstanceInstanceIdApprovedOriginRouteHandler,
  )
  .openapi(putInstanceInstanceIdBotRoute, putInstanceInstanceIdBotRouteHandler)
  .openapi(postInstanceInstanceIdBotRoute, postInstanceInstanceIdBotRouteHandler)
  .openapi(
    putDefaultVocabularyInstanceIdLanguageCodeRoute,
    putDefaultVocabularyInstanceIdLanguageCodeRouteHandler,
  )
  .openapi(putInstanceInstanceIdStorageConfigRoute, putInstanceInstanceIdStorageConfigRouteHandler)
  .openapi(
    putInstanceInstanceIdLambdaFunctionRoute,
    putInstanceInstanceIdLambdaFunctionRouteHandler,
  )
  .openapi(putInstanceInstanceIdLexBotRoute, putInstanceInstanceIdLexBotRouteHandler)
  .openapi(
    putPhoneNumberPhoneNumberIdContactFlowRoute,
    putPhoneNumberPhoneNumberIdContactFlowRouteHandler,
  )
  .openapi(
    postQueuesInstanceIdQueueIdAssociateQuickConnectsRoute,
    postQueuesInstanceIdQueueIdAssociateQuickConnectsRouteHandler,
  )
  .openapi(
    postRoutingProfilesInstanceIdRoutingProfileIdAssociateQueuesRoute,
    postRoutingProfilesInstanceIdRoutingProfileIdAssociateQueuesRouteHandler,
  )
  .openapi(putInstanceInstanceIdSecurityKeyRoute, putInstanceInstanceIdSecurityKeyRouteHandler)
  .openapi(postPhoneNumberClaimRoute, postPhoneNumberClaimRouteHandler)
  .openapi(putAgentStatusInstanceIdRoute, putAgentStatusInstanceIdRouteHandler)
  .openapi(getAgentStatusInstanceIdRoute, getAgentStatusInstanceIdRouteHandler)
  .openapi(putContactFlowsInstanceIdRoute, putContactFlowsInstanceIdRouteHandler)
  .openapi(putContactFlowModulesInstanceIdRoute, putContactFlowModulesInstanceIdRouteHandler)
  .openapi(putHoursOfOperationsInstanceIdRoute, putHoursOfOperationsInstanceIdRouteHandler)
  .openapi(putInstanceRoute, putInstanceRouteHandler)
  .openapi(getInstanceRoute, getInstanceRouteHandler)
  .openapi(
    putInstanceInstanceIdIntegrationAssociationsRoute,
    putInstanceInstanceIdIntegrationAssociationsRouteHandler,
  )
  .openapi(
    getInstanceInstanceIdIntegrationAssociationsRoute,
    getInstanceInstanceIdIntegrationAssociationsRouteHandler,
  )
  .openapi(postContactCreateParticipantRoute, postContactCreateParticipantRouteHandler)
  .openapi(putQueuesInstanceIdRoute, putQueuesInstanceIdRouteHandler)
  .openapi(putQuickConnectsInstanceIdRoute, putQuickConnectsInstanceIdRouteHandler)
  .openapi(getQuickConnectsInstanceIdRoute, getQuickConnectsInstanceIdRouteHandler)
  .openapi(putRoutingProfilesInstanceIdRoute, putRoutingProfilesInstanceIdRouteHandler)
  .openapi(postRulesInstanceIdRoute, postRulesInstanceIdRouteHandler)
  .openapi(getRulesInstanceIdRoute, getRulesInstanceIdRouteHandler)
  .openapi(putSecurityProfilesInstanceIdRoute, putSecurityProfilesInstanceIdRouteHandler)
  .openapi(putInstanceInstanceIdTaskTemplateRoute, putInstanceInstanceIdTaskTemplateRouteHandler)
  .openapi(getInstanceInstanceIdTaskTemplateRoute, getInstanceInstanceIdTaskTemplateRouteHandler)
  .openapi(putTrafficDistributionGroupRoute, putTrafficDistributionGroupRouteHandler)
  .openapi(
    putInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesRoute,
    putInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesRouteHandler,
  )
  .openapi(
    getInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesRoute,
    getInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesRouteHandler,
  )
  .openapi(putUsersInstanceIdRoute, putUsersInstanceIdRouteHandler)
  .openapi(putUserHierarchyGroupsInstanceIdRoute, putUserHierarchyGroupsInstanceIdRouteHandler)
  .openapi(postVocabularyInstanceIdRoute, postVocabularyInstanceIdRouteHandler)
  .openapi(
    deleteContactFlowsInstanceIdContactFlowIdRoute,
    deleteContactFlowsInstanceIdContactFlowIdRouteHandler,
  )
  .openapi(
    getContactFlowsInstanceIdContactFlowIdRoute,
    getContactFlowsInstanceIdContactFlowIdRouteHandler,
  )
  .openapi(
    deleteContactFlowModulesInstanceIdContactFlowModuleIdRoute,
    deleteContactFlowModulesInstanceIdContactFlowModuleIdRouteHandler,
  )
  .openapi(
    getContactFlowModulesInstanceIdContactFlowModuleIdRoute,
    getContactFlowModulesInstanceIdContactFlowModuleIdRouteHandler,
  )
  .openapi(
    deleteHoursOfOperationsInstanceIdHoursOfOperationIdRoute,
    deleteHoursOfOperationsInstanceIdHoursOfOperationIdRouteHandler,
  )
  .openapi(
    getHoursOfOperationsInstanceIdHoursOfOperationIdRoute,
    getHoursOfOperationsInstanceIdHoursOfOperationIdRouteHandler,
  )
  .openapi(
    postHoursOfOperationsInstanceIdHoursOfOperationIdRoute,
    postHoursOfOperationsInstanceIdHoursOfOperationIdRouteHandler,
  )
  .openapi(deleteInstanceInstanceIdRoute, deleteInstanceInstanceIdRouteHandler)
  .openapi(getInstanceInstanceIdRoute, getInstanceInstanceIdRouteHandler)
  .openapi(
    deleteInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdRoute,
    deleteInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdRouteHandler,
  )
  .openapi(
    deleteQuickConnectsInstanceIdQuickConnectIdRoute,
    deleteQuickConnectsInstanceIdQuickConnectIdRouteHandler,
  )
  .openapi(
    getQuickConnectsInstanceIdQuickConnectIdRoute,
    getQuickConnectsInstanceIdQuickConnectIdRouteHandler,
  )
  .openapi(deleteRulesInstanceIdRuleIdRoute, deleteRulesInstanceIdRuleIdRouteHandler)
  .openapi(getRulesInstanceIdRuleIdRoute, getRulesInstanceIdRuleIdRouteHandler)
  .openapi(putRulesInstanceIdRuleIdRoute, putRulesInstanceIdRuleIdRouteHandler)
  .openapi(
    deleteSecurityProfilesInstanceIdSecurityProfileIdRoute,
    deleteSecurityProfilesInstanceIdSecurityProfileIdRouteHandler,
  )
  .openapi(
    getSecurityProfilesInstanceIdSecurityProfileIdRoute,
    getSecurityProfilesInstanceIdSecurityProfileIdRouteHandler,
  )
  .openapi(
    postSecurityProfilesInstanceIdSecurityProfileIdRoute,
    postSecurityProfilesInstanceIdSecurityProfileIdRouteHandler,
  )
  .openapi(
    deleteInstanceInstanceIdTaskTemplateTaskTemplateIdRoute,
    deleteInstanceInstanceIdTaskTemplateTaskTemplateIdRouteHandler,
  )
  .openapi(
    getInstanceInstanceIdTaskTemplateTaskTemplateIdRoute,
    getInstanceInstanceIdTaskTemplateTaskTemplateIdRouteHandler,
  )
  .openapi(
    postInstanceInstanceIdTaskTemplateTaskTemplateIdRoute,
    postInstanceInstanceIdTaskTemplateTaskTemplateIdRouteHandler,
  )
  .openapi(
    deleteTrafficDistributionGroupTrafficDistributionGroupIdRoute,
    deleteTrafficDistributionGroupTrafficDistributionGroupIdRouteHandler,
  )
  .openapi(
    getTrafficDistributionGroupTrafficDistributionGroupIdRoute,
    getTrafficDistributionGroupTrafficDistributionGroupIdRouteHandler,
  )
  .openapi(
    deleteInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesUseCaseIdRoute,
    deleteInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesUseCaseIdRouteHandler,
  )
  .openapi(deleteUsersInstanceIdUserIdRoute, deleteUsersInstanceIdUserIdRouteHandler)
  .openapi(getUsersInstanceIdUserIdRoute, getUsersInstanceIdUserIdRouteHandler)
  .openapi(
    deleteUserHierarchyGroupsInstanceIdHierarchyGroupIdRoute,
    deleteUserHierarchyGroupsInstanceIdHierarchyGroupIdRouteHandler,
  )
  .openapi(
    getUserHierarchyGroupsInstanceIdHierarchyGroupIdRoute,
    getUserHierarchyGroupsInstanceIdHierarchyGroupIdRouteHandler,
  )
  .openapi(
    postVocabularyRemoveInstanceIdVocabularyIdRoute,
    postVocabularyRemoveInstanceIdVocabularyIdRouteHandler,
  )
  .openapi(
    getAgentStatusInstanceIdAgentStatusIdRoute,
    getAgentStatusInstanceIdAgentStatusIdRouteHandler,
  )
  .openapi(
    postAgentStatusInstanceIdAgentStatusIdRoute,
    postAgentStatusInstanceIdAgentStatusIdRouteHandler,
  )
  .openapi(getContactsInstanceIdContactIdRoute, getContactsInstanceIdContactIdRouteHandler)
  .openapi(postContactsInstanceIdContactIdRoute, postContactsInstanceIdContactIdRouteHandler)
  .openapi(
    getInstanceInstanceIdAttributeAttributeTypeRoute,
    getInstanceInstanceIdAttributeAttributeTypeRouteHandler,
  )
  .openapi(
    postInstanceInstanceIdAttributeAttributeTypeRoute,
    postInstanceInstanceIdAttributeAttributeTypeRouteHandler,
  )
  .openapi(
    getInstanceInstanceIdStorageConfigAssociationIdResourceTypeRoute,
    getInstanceInstanceIdStorageConfigAssociationIdResourceTypeRouteHandler,
  )
  .openapi(
    deleteInstanceInstanceIdStorageConfigAssociationIdResourceTypeRoute,
    deleteInstanceInstanceIdStorageConfigAssociationIdResourceTypeRouteHandler,
  )
  .openapi(
    postInstanceInstanceIdStorageConfigAssociationIdResourceTypeRoute,
    postInstanceInstanceIdStorageConfigAssociationIdResourceTypeRouteHandler,
  )
  .openapi(getPhoneNumberPhoneNumberIdRoute, getPhoneNumberPhoneNumberIdRouteHandler)
  .openapi(deletePhoneNumberPhoneNumberIdRoute, deletePhoneNumberPhoneNumberIdRouteHandler)
  .openapi(putPhoneNumberPhoneNumberIdRoute, putPhoneNumberPhoneNumberIdRouteHandler)
  .openapi(getQueuesInstanceIdQueueIdRoute, getQueuesInstanceIdQueueIdRouteHandler)
  .openapi(
    getRoutingProfilesInstanceIdRoutingProfileIdRoute,
    getRoutingProfilesInstanceIdRoutingProfileIdRouteHandler,
  )
  .openapi(
    getUserHierarchyStructureInstanceIdRoute,
    getUserHierarchyStructureInstanceIdRouteHandler,
  )
  .openapi(
    postUserHierarchyStructureInstanceIdRoute,
    postUserHierarchyStructureInstanceIdRouteHandler,
  )
  .openapi(
    getVocabularyInstanceIdVocabularyIdRoute,
    getVocabularyInstanceIdVocabularyIdRouteHandler,
  )
  .openapi(
    deleteInstanceInstanceIdApprovedOriginOriginRoute,
    deleteInstanceInstanceIdApprovedOriginOriginRouteHandler,
  )
  .openapi(
    deleteInstanceInstanceIdLambdaFunctionFunctionArnRoute,
    deleteInstanceInstanceIdLambdaFunctionFunctionArnRouteHandler,
  )
  .openapi(
    deleteInstanceInstanceIdLexBotBotNameLexRegionRoute,
    deleteInstanceInstanceIdLexBotBotNameLexRegionRouteHandler,
  )
  .openapi(
    deletePhoneNumberPhoneNumberIdContactFlowInstanceIdRoute,
    deletePhoneNumberPhoneNumberIdContactFlowInstanceIdRouteHandler,
  )
  .openapi(
    postQueuesInstanceIdQueueIdDisassociateQuickConnectsRoute,
    postQueuesInstanceIdQueueIdDisassociateQuickConnectsRouteHandler,
  )
  .openapi(
    postRoutingProfilesInstanceIdRoutingProfileIdDisassociateQueuesRoute,
    postRoutingProfilesInstanceIdRoutingProfileIdDisassociateQueuesRouteHandler,
  )
  .openapi(
    deleteInstanceInstanceIdSecurityKeyAssociationIdRoute,
    deleteInstanceInstanceIdSecurityKeyAssociationIdRouteHandler,
  )
  .openapi(postUsersInstanceIdUserIdContactRoute, postUsersInstanceIdUserIdContactRouteHandler)
  .openapi(
    getContactAttributesInstanceIdInitialContactIdRoute,
    getContactAttributesInstanceIdInitialContactIdRouteHandler,
  )
  .openapi(postMetricsCurrentInstanceIdRoute, postMetricsCurrentInstanceIdRouteHandler)
  .openapi(postMetricsUserdataInstanceIdRoute, postMetricsUserdataInstanceIdRouteHandler)
  .openapi(getUserFederateInstanceIdRoute, getUserFederateInstanceIdRouteHandler)
  .openapi(postMetricsHistoricalInstanceIdRoute, postMetricsHistoricalInstanceIdRouteHandler)
  .openapi(postMetricsDataRoute, postMetricsDataRouteHandler)
  .openapi(getTrafficDistributionIdRoute, getTrafficDistributionIdRouteHandler)
  .openapi(putTrafficDistributionIdRoute, putTrafficDistributionIdRouteHandler)
  .openapi(
    getInstanceInstanceIdApprovedOriginsRoute,
    getInstanceInstanceIdApprovedOriginsRouteHandler,
  )
  .openapi(
    getInstanceInstanceIdBotsLexVersionRoute,
    getInstanceInstanceIdBotsLexVersionRouteHandler,
  )
  .openapi(
    getContactFlowModulesSummaryInstanceIdRoute,
    getContactFlowModulesSummaryInstanceIdRouteHandler,
  )
  .openapi(getContactFlowsSummaryInstanceIdRoute, getContactFlowsSummaryInstanceIdRouteHandler)
  .openapi(
    getContactReferencesInstanceIdContactIdReferenceTypesRoute,
    getContactReferencesInstanceIdContactIdReferenceTypesRouteHandler,
  )
  .openapi(
    postDefaultVocabularySummaryInstanceIdRoute,
    postDefaultVocabularySummaryInstanceIdRouteHandler,
  )
  .openapi(
    getHoursOfOperationsSummaryInstanceIdRoute,
    getHoursOfOperationsSummaryInstanceIdRouteHandler,
  )
  .openapi(getInstanceInstanceIdAttributesRoute, getInstanceInstanceIdAttributesRouteHandler)
  .openapi(
    getInstanceInstanceIdStorageConfigsResourceTypeRoute,
    getInstanceInstanceIdStorageConfigsResourceTypeRouteHandler,
  )
  .openapi(
    getInstanceInstanceIdLambdaFunctionsRoute,
    getInstanceInstanceIdLambdaFunctionsRouteHandler,
  )
  .openapi(getInstanceInstanceIdLexBotsRoute, getInstanceInstanceIdLexBotsRouteHandler)
  .openapi(getPhoneNumbersSummaryInstanceIdRoute, getPhoneNumbersSummaryInstanceIdRouteHandler)
  .openapi(postPhoneNumberListRoute, postPhoneNumberListRouteHandler)
  .openapi(getPromptsSummaryInstanceIdRoute, getPromptsSummaryInstanceIdRouteHandler)
  .openapi(
    getQueuesInstanceIdQueueIdQuickConnectsRoute,
    getQueuesInstanceIdQueueIdQuickConnectsRouteHandler,
  )
  .openapi(getQueuesSummaryInstanceIdRoute, getQueuesSummaryInstanceIdRouteHandler)
  .openapi(
    getRoutingProfilesInstanceIdRoutingProfileIdQueuesRoute,
    getRoutingProfilesInstanceIdRoutingProfileIdQueuesRouteHandler,
  )
  .openapi(
    postRoutingProfilesInstanceIdRoutingProfileIdQueuesRoute,
    postRoutingProfilesInstanceIdRoutingProfileIdQueuesRouteHandler,
  )
  .openapi(
    getRoutingProfilesSummaryInstanceIdRoute,
    getRoutingProfilesSummaryInstanceIdRouteHandler,
  )
  .openapi(getInstanceInstanceIdSecurityKeysRoute, getInstanceInstanceIdSecurityKeysRouteHandler)
  .openapi(
    getSecurityProfilesPermissionsInstanceIdSecurityProfileIdRoute,
    getSecurityProfilesPermissionsInstanceIdSecurityProfileIdRouteHandler,
  )
  .openapi(
    getSecurityProfilesSummaryInstanceIdRoute,
    getSecurityProfilesSummaryInstanceIdRouteHandler,
  )
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(getTrafficDistributionGroupsRoute, getTrafficDistributionGroupsRouteHandler)
  .openapi(
    getUserHierarchyGroupsSummaryInstanceIdRoute,
    getUserHierarchyGroupsSummaryInstanceIdRouteHandler,
  )
  .openapi(getUsersSummaryInstanceIdRoute, getUsersSummaryInstanceIdRouteHandler)
  .openapi(postContactMonitorRoute, postContactMonitorRouteHandler)
  .openapi(putUsersInstanceIdUserIdStatusRoute, putUsersInstanceIdUserIdStatusRouteHandler)
  .openapi(postInstanceInstanceIdReplicateRoute, postInstanceInstanceIdReplicateRouteHandler)
  .openapi(postContactResumeRecordingRoute, postContactResumeRecordingRouteHandler)
  .openapi(postPhoneNumberSearchAvailableRoute, postPhoneNumberSearchAvailableRouteHandler)
  .openapi(postSearchQueuesRoute, postSearchQueuesRouteHandler)
  .openapi(postSearchRoutingProfilesRoute, postSearchRoutingProfilesRouteHandler)
  .openapi(postSearchSecurityProfilesRoute, postSearchSecurityProfilesRouteHandler)
  .openapi(postSearchUsersRoute, postSearchUsersRouteHandler)
  .openapi(postVocabularySummaryInstanceIdRoute, postVocabularySummaryInstanceIdRouteHandler)
  .openapi(putContactChatRoute, putContactChatRouteHandler)
  .openapi(postContactStartRecordingRoute, postContactStartRecordingRouteHandler)
  .openapi(postContactStartStreamingRoute, postContactStartStreamingRouteHandler)
  .openapi(putContactOutboundVoiceRoute, putContactOutboundVoiceRouteHandler)
  .openapi(putContactTaskRoute, putContactTaskRouteHandler)
  .openapi(postContactStopRoute, postContactStopRouteHandler)
  .openapi(postContactStopRecordingRoute, postContactStopRecordingRouteHandler)
  .openapi(postContactStopStreamingRoute, postContactStopStreamingRouteHandler)
  .openapi(postContactSuspendRecordingRoute, postContactSuspendRecordingRouteHandler)
  .openapi(postContactTransferRoute, postContactTransferRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)
  .openapi(postContactAttributesRoute, postContactAttributesRouteHandler)
  .openapi(
    postContactFlowsInstanceIdContactFlowIdContentRoute,
    postContactFlowsInstanceIdContactFlowIdContentRouteHandler,
  )
  .openapi(
    postContactFlowsInstanceIdContactFlowIdMetadataRoute,
    postContactFlowsInstanceIdContactFlowIdMetadataRouteHandler,
  )
  .openapi(
    postContactFlowModulesInstanceIdContactFlowModuleIdContentRoute,
    postContactFlowModulesInstanceIdContactFlowModuleIdContentRouteHandler,
  )
  .openapi(
    postContactFlowModulesInstanceIdContactFlowModuleIdMetadataRoute,
    postContactFlowModulesInstanceIdContactFlowModuleIdMetadataRouteHandler,
  )
  .openapi(
    postContactFlowsInstanceIdContactFlowIdNameRoute,
    postContactFlowsInstanceIdContactFlowIdNameRouteHandler,
  )
  .openapi(postContactScheduleRoute, postContactScheduleRouteHandler)
  .openapi(
    putContactParticipantRoleConfigInstanceIdContactIdRoute,
    putContactParticipantRoleConfigInstanceIdContactIdRouteHandler,
  )
  .openapi(
    postQueuesInstanceIdQueueIdHoursOfOperationRoute,
    postQueuesInstanceIdQueueIdHoursOfOperationRouteHandler,
  )
  .openapi(
    postQueuesInstanceIdQueueIdMaxContactsRoute,
    postQueuesInstanceIdQueueIdMaxContactsRouteHandler,
  )
  .openapi(postQueuesInstanceIdQueueIdNameRoute, postQueuesInstanceIdQueueIdNameRouteHandler)
  .openapi(
    postQueuesInstanceIdQueueIdOutboundCallerConfigRoute,
    postQueuesInstanceIdQueueIdOutboundCallerConfigRouteHandler,
  )
  .openapi(postQueuesInstanceIdQueueIdStatusRoute, postQueuesInstanceIdQueueIdStatusRouteHandler)
  .openapi(
    postQuickConnectsInstanceIdQuickConnectIdConfigRoute,
    postQuickConnectsInstanceIdQuickConnectIdConfigRouteHandler,
  )
  .openapi(
    postQuickConnectsInstanceIdQuickConnectIdNameRoute,
    postQuickConnectsInstanceIdQuickConnectIdNameRouteHandler,
  )
  .openapi(
    postRoutingProfilesInstanceIdRoutingProfileIdConcurrencyRoute,
    postRoutingProfilesInstanceIdRoutingProfileIdConcurrencyRouteHandler,
  )
  .openapi(
    postRoutingProfilesInstanceIdRoutingProfileIdDefaultOutboundQueueRoute,
    postRoutingProfilesInstanceIdRoutingProfileIdDefaultOutboundQueueRouteHandler,
  )
  .openapi(
    postRoutingProfilesInstanceIdRoutingProfileIdNameRoute,
    postRoutingProfilesInstanceIdRoutingProfileIdNameRouteHandler,
  )
  .openapi(postUsersInstanceIdUserIdHierarchyRoute, postUsersInstanceIdUserIdHierarchyRouteHandler)
  .openapi(
    postUserHierarchyGroupsInstanceIdHierarchyGroupIdNameRoute,
    postUserHierarchyGroupsInstanceIdHierarchyGroupIdNameRouteHandler,
  )
  .openapi(
    postUsersInstanceIdUserIdIdentityInfoRoute,
    postUsersInstanceIdUserIdIdentityInfoRouteHandler,
  )
  .openapi(
    postUsersInstanceIdUserIdPhoneConfigRoute,
    postUsersInstanceIdUserIdPhoneConfigRouteHandler,
  )
  .openapi(
    postUsersInstanceIdUserIdRoutingProfileRoute,
    postUsersInstanceIdUserIdRoutingProfileRouteHandler,
  )
  .openapi(
    postUsersInstanceIdUserIdSecurityProfilesRoute,
    postUsersInstanceIdUserIdSecurityProfilesRouteHandler,
  )

export default app
