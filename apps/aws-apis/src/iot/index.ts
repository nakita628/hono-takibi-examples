import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuditConfigurationRoute,
  deleteAuditScheduledauditsScheduledAuditNameRoute,
  deleteAuthorizerAuthorizerNameRoute,
  deleteBillingGroupsBillingGroupNameRoute,
  deleteCacertificateCaCertificateIdRoute,
  deleteCertificatesCertificateIdRoute,
  deleteCustomMetricMetricNameRoute,
  deleteDefaultAuthorizerRoute,
  deleteDestinationsArnRoute,
  deleteDimensionsNameRoute,
  deleteDomainConfigurationsDomainConfigurationNameRoute,
  deleteDynamicThingGroupsThingGroupNameRoute,
  deleteFleetMetricMetricNameRoute,
  deleteJobsJobIdRoute,
  deleteJobTemplatesJobTemplateIdRoute,
  deleteMitigationactionsActionsActionNameRoute,
  deleteOtaUpdatesOtaUpdateIdRoute,
  deletePoliciesPolicyNameRoute,
  deletePoliciesPolicyNameVersionPolicyVersionIdRoute,
  deletePrincipalPoliciesPolicyNameXAmznIotPrincipalRoute,
  deleteProvisioningTemplatesTemplateNameRoute,
  deleteProvisioningTemplatesTemplateNameVersionsVersionIdRoute,
  deleteRegistrationcodeRoute,
  deleteRoleAliasesRoleAliasRoute,
  deleteRulesRuleNameRoute,
  deleteSecurityProfilesSecurityProfileNameRoute,
  deleteSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArnRoute,
  deleteStreamsStreamIdRoute,
  deleteThingGroupsThingGroupNameRoute,
  deleteThingsThingNameJobsJobIdExecutionNumberExecutionNumberRoute,
  deleteThingsThingNamePrincipalsXAmznPrincipalRoute,
  deleteThingsThingNameRoute,
  deleteThingTypesThingTypeNameRoute,
  deleteV2LoggingLevelTargetTypeTargetNameRoute,
  getActiveViolationsRoute,
  getAuditConfigurationRoute,
  getAuditFindingsFindingIdRoute,
  getAuditMitigationactionsExecutionsTaskIdFindingIdRoute,
  getAuditMitigationactionsTasksStartTimeEndTimeRoute,
  getAuditMitigationactionsTasksTaskIdRoute,
  getAuditRelatedResourcesFindingIdRoute,
  getAuditScheduledauditsRoute,
  getAuditScheduledauditsScheduledAuditNameRoute,
  getAuditTasksStartTimeEndTimeRoute,
  getAuditTasksTaskIdRoute,
  getAuthorizerAuthorizerNameRoute,
  getAuthorizersIndexRoute,
  getBehaviorModelTrainingSummariesRoute,
  getBillingGroupsBillingGroupNameRoute,
  getBillingGroupsBillingGroupNameThingsRoute,
  getBillingGroupsRoute,
  getCacertificateCaCertificateIdRoute,
  getCacertificatesRoute,
  getCertificatesByCaCaCertificateIdRoute,
  getCertificatesCertificateIdRoute,
  getCertificatesOutGoingRoute,
  getCertificatesRoute,
  getConfirmdestinationConfirmationTokenRoute,
  getCustomMetricMetricNameRoute,
  getCustomMetricsRoute,
  getDefaultAuthorizerRoute,
  getDestinationsArnRoute,
  getDestinationsRoute,
  getDetectMitigationactionsExecutionsRoute,
  getDetectMitigationactionsTasksStartTimeEndTimeRoute,
  getDetectMitigationactionsTasksTaskIdRoute,
  getDimensionsNameRoute,
  getDimensionsRoute,
  getDomainConfigurationsDomainConfigurationNameRoute,
  getDomainConfigurationsRoute,
  getEndpointRoute,
  getEventConfigurationsRoute,
  getFleetMetricMetricNameRoute,
  getFleetMetricsRoute,
  getIndexingConfigRoute,
  getIndicesIndexNameRoute,
  getIndicesRoute,
  getJobsJobIdJobDocumentRoute,
  getJobsJobIdRoute,
  getJobsJobIdThingsRoute,
  getJobsRoute,
  getJobTemplatesJobTemplateIdRoute,
  getJobTemplatesRoute,
  getLoggingOptionsRoute,
  getManagedJobTemplatesRoute,
  getManagedJobTemplatesTemplateNameRoute,
  getMetricValuesThingNameMetricNameStartTimeEndTimeRoute,
  getMitigationactionsActionsActionNameRoute,
  getMitigationactionsActionsRoute,
  getOtaUpdatesOtaUpdateIdRoute,
  getOtaUpdatesRoute,
  getPoliciesPolicyNameRoute,
  getPoliciesPolicyNameVersionPolicyVersionIdRoute,
  getPoliciesPolicyNameVersionRoute,
  getPoliciesRoute,
  getPolicyPrincipalsXAmznIotPolicyRoute,
  getPrincipalPoliciesXAmznIotPrincipalRoute,
  getPrincipalsThingsXAmznPrincipalRoute,
  getProvisioningTemplatesRoute,
  getProvisioningTemplatesTemplateNameRoute,
  getProvisioningTemplatesTemplateNameVersionsRoute,
  getProvisioningTemplatesTemplateNameVersionsVersionIdRoute,
  getRegistrationcodeRoute,
  getRoleAliasesRoleAliasRoute,
  getRoleAliasesRoute,
  getRulesRoute,
  getRulesRuleNameRoute,
  getSecurityProfilesForTargetSecurityProfileTargetArnRoute,
  getSecurityProfilesRoute,
  getSecurityProfilesSecurityProfileNameRoute,
  getSecurityProfilesSecurityProfileNameTargetsRoute,
  getStreamsRoute,
  getStreamsStreamIdRoute,
  getTagsResourceArnRoute,
  getThingGroupsRoute,
  getThingGroupsThingGroupNameRoute,
  getThingGroupsThingGroupNameThingsRoute,
  getThingRegistrationTasksRoute,
  getThingRegistrationTasksTaskIdReportsReportTypeRoute,
  getThingRegistrationTasksTaskIdRoute,
  getThingsRoute,
  getThingsThingNameJobsJobIdRoute,
  getThingsThingNameJobsRoute,
  getThingsThingNamePrincipalsRoute,
  getThingsThingNameRoute,
  getThingsThingNameThingGroupsRoute,
  getThingTypesRoute,
  getThingTypesThingTypeNameRoute,
  getV2LoggingLevelRoute,
  getV2LoggingOptionsRoute,
  getViolationEventsStartTimeEndTimeRoute,
  patchAcceptCertificateTransferCertificateIdRoute,
  patchAuditConfigurationRoute,
  patchAuditScheduledauditsScheduledAuditNameRoute,
  patchAuditSuppressionsUpdateRoute,
  patchBillingGroupsBillingGroupNameRoute,
  patchCancelCertificateTransferCertificateIdRoute,
  patchCustomMetricMetricNameRoute,
  patchDestinationsRoute,
  patchDimensionsNameRoute,
  patchDynamicThingGroupsThingGroupNameRoute,
  patchEventConfigurationsRoute,
  patchFleetMetricMetricNameRoute,
  patchJobsJobIdRoute,
  patchMitigationactionsActionsActionNameRoute,
  patchPoliciesPolicyNameVersionPolicyVersionIdRoute,
  patchProvisioningTemplatesTemplateNameRoute,
  patchRejectCertificateTransferCertificateIdRoute,
  patchRulesRuleNameRoute,
  patchSecurityProfilesSecurityProfileNameRoute,
  patchThingGroupsThingGroupNameRoute,
  patchThingsThingNameRoute,
  patchTransferCertificateCertificateIdTargetAwsAccountRoute,
  postAttachedPoliciesTargetRoute,
  postAuditFindingsRoute,
  postAuditMitigationactionsTasksTaskIdRoute,
  postAuditScheduledauditsScheduledAuditNameRoute,
  postAuditSuppressionsCreateRoute,
  postAuditSuppressionsDeleteRoute,
  postAuditSuppressionsDescribeRoute,
  postAuditSuppressionsListRoute,
  postAuditTasksRoute,
  postAuthorizerAuthorizerNameRoute,
  postAuthorizerAuthorizerNameTestRoute,
  postBillingGroupsBillingGroupNameRoute,
  postCacertificateRoute,
  postCertificateRegisterNoCaRoute,
  postCertificateRegisterRoute,
  postCertificatesRoute,
  postCustomMetricMetricNameRoute,
  postDefaultAuthorizerRoute,
  postDestinationsRoute,
  postDimensionsNameRoute,
  postDomainConfigurationsDomainConfigurationNameRoute,
  postDynamicThingGroupsThingGroupNameRoute,
  postEffectivePoliciesRoute,
  postIndexingConfigRoute,
  postIndicesBucketsRoute,
  postIndicesCardinalityRoute,
  postIndicesPercentilesRoute,
  postIndicesSearchRoute,
  postIndicesStatisticsRoute,
  postJobsJobIdTargetsRoute,
  postKeysAndCertificateRoute,
  postLoggingOptionsRoute,
  postMitigationactionsActionsActionNameRoute,
  postOtaUpdatesOtaUpdateIdRoute,
  postPoliciesPolicyNameRoute,
  postPoliciesPolicyNameVersionRoute,
  postPolicyTargetsPolicyNameRoute,
  postProvisioningTemplatesRoute,
  postProvisioningTemplatesTemplateNameProvisioningClaimRoute,
  postProvisioningTemplatesTemplateNameVersionsRoute,
  postRoleAliasesRoleAliasRoute,
  postRulesRuleNameDisableRoute,
  postRulesRuleNameEnableRoute,
  postRulesRuleNameRoute,
  postSecurityProfileBehaviorsValidateRoute,
  postSecurityProfilesSecurityProfileNameRoute,
  postStreamsStreamIdRoute,
  postTagsRoute,
  postTargetPoliciesPolicyNameRoute,
  postTestAuthorizationRoute,
  postThingGroupsThingGroupNameRoute,
  postThingRegistrationTasksRoute,
  postThingsRoute,
  postThingsThingNameRoute,
  postThingTypesThingTypeNameDeprecateRoute,
  postThingTypesThingTypeNameRoute,
  postUntagRoute,
  postV2LoggingLevelRoute,
  postV2LoggingOptionsRoute,
  postViolationsVerificationStateViolationIdRoute,
  putAuditMitigationactionsTasksTaskIdCancelRoute,
  putAuditTasksTaskIdCancelRoute,
  putAuthorizerAuthorizerNameRoute,
  putBillingGroupsAddThingToBillingGroupRoute,
  putBillingGroupsRemoveThingFromBillingGroupRoute,
  putCacertificateCaCertificateIdRoute,
  putCertificatesCertificateIdNewStatusRoute,
  putDetectMitigationactionsTasksTaskIdCancelRoute,
  putDetectMitigationactionsTasksTaskIdRoute,
  putDomainConfigurationsDomainConfigurationNameRoute,
  putFleetMetricMetricNameRoute,
  putJobsJobIdCancelRoute,
  putJobsJobIdRoute,
  putJobTemplatesJobTemplateIdRoute,
  putPrincipalPoliciesPolicyNameXAmznIotPrincipalRoute,
  putRoleAliasesRoleAliasRoute,
  putSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArnRoute,
  putStreamsStreamIdRoute,
  putTargetPoliciesPolicyNameRoute,
  putThingGroupsAddThingToThingGroupRoute,
  putThingGroupsRemoveThingFromThingGroupRoute,
  putThingGroupsUpdateThingGroupsForThingRoute,
  putThingRegistrationTasksTaskIdCancelRoute,
  putThingsThingNameJobsJobIdCancelRoute,
  putThingsThingNamePrincipalsXAmznPrincipalRoute,
} from './routes'
import {
  deleteAuditConfigurationRouteHandler,
  deleteAuditScheduledauditsScheduledAuditNameRouteHandler,
  deleteAuthorizerAuthorizerNameRouteHandler,
  deleteBillingGroupsBillingGroupNameRouteHandler,
  deleteCacertificateCaCertificateIdRouteHandler,
  deleteCertificatesCertificateIdRouteHandler,
  deleteCustomMetricMetricNameRouteHandler,
  deleteDefaultAuthorizerRouteHandler,
  deleteDestinationsArnRouteHandler,
  deleteDimensionsNameRouteHandler,
  deleteDomainConfigurationsDomainConfigurationNameRouteHandler,
  deleteDynamicThingGroupsThingGroupNameRouteHandler,
  deleteFleetMetricMetricNameRouteHandler,
  deleteJobsJobIdRouteHandler,
  deleteJobTemplatesJobTemplateIdRouteHandler,
  deleteMitigationactionsActionsActionNameRouteHandler,
  deleteOtaUpdatesOtaUpdateIdRouteHandler,
  deletePoliciesPolicyNameRouteHandler,
  deletePoliciesPolicyNameVersionPolicyVersionIdRouteHandler,
  deletePrincipalPoliciesPolicyNameXAmznIotPrincipalRouteHandler,
  deleteProvisioningTemplatesTemplateNameRouteHandler,
  deleteProvisioningTemplatesTemplateNameVersionsVersionIdRouteHandler,
  deleteRegistrationcodeRouteHandler,
  deleteRoleAliasesRoleAliasRouteHandler,
  deleteRulesRuleNameRouteHandler,
  deleteSecurityProfilesSecurityProfileNameRouteHandler,
  deleteSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArnRouteHandler,
  deleteStreamsStreamIdRouteHandler,
  deleteThingGroupsThingGroupNameRouteHandler,
  deleteThingsThingNameJobsJobIdExecutionNumberExecutionNumberRouteHandler,
  deleteThingsThingNamePrincipalsXAmznPrincipalRouteHandler,
  deleteThingsThingNameRouteHandler,
  deleteThingTypesThingTypeNameRouteHandler,
  deleteV2LoggingLevelTargetTypeTargetNameRouteHandler,
  getActiveViolationsRouteHandler,
  getAuditConfigurationRouteHandler,
  getAuditFindingsFindingIdRouteHandler,
  getAuditMitigationactionsExecutionsTaskIdFindingIdRouteHandler,
  getAuditMitigationactionsTasksStartTimeEndTimeRouteHandler,
  getAuditMitigationactionsTasksTaskIdRouteHandler,
  getAuditRelatedResourcesFindingIdRouteHandler,
  getAuditScheduledauditsRouteHandler,
  getAuditScheduledauditsScheduledAuditNameRouteHandler,
  getAuditTasksStartTimeEndTimeRouteHandler,
  getAuditTasksTaskIdRouteHandler,
  getAuthorizerAuthorizerNameRouteHandler,
  getAuthorizersIndexRouteHandler,
  getBehaviorModelTrainingSummariesRouteHandler,
  getBillingGroupsBillingGroupNameRouteHandler,
  getBillingGroupsBillingGroupNameThingsRouteHandler,
  getBillingGroupsRouteHandler,
  getCacertificateCaCertificateIdRouteHandler,
  getCacertificatesRouteHandler,
  getCertificatesByCaCaCertificateIdRouteHandler,
  getCertificatesCertificateIdRouteHandler,
  getCertificatesOutGoingRouteHandler,
  getCertificatesRouteHandler,
  getConfirmdestinationConfirmationTokenRouteHandler,
  getCustomMetricMetricNameRouteHandler,
  getCustomMetricsRouteHandler,
  getDefaultAuthorizerRouteHandler,
  getDestinationsArnRouteHandler,
  getDestinationsRouteHandler,
  getDetectMitigationactionsExecutionsRouteHandler,
  getDetectMitigationactionsTasksStartTimeEndTimeRouteHandler,
  getDetectMitigationactionsTasksTaskIdRouteHandler,
  getDimensionsNameRouteHandler,
  getDimensionsRouteHandler,
  getDomainConfigurationsDomainConfigurationNameRouteHandler,
  getDomainConfigurationsRouteHandler,
  getEndpointRouteHandler,
  getEventConfigurationsRouteHandler,
  getFleetMetricMetricNameRouteHandler,
  getFleetMetricsRouteHandler,
  getIndexingConfigRouteHandler,
  getIndicesIndexNameRouteHandler,
  getIndicesRouteHandler,
  getJobsJobIdJobDocumentRouteHandler,
  getJobsJobIdRouteHandler,
  getJobsJobIdThingsRouteHandler,
  getJobsRouteHandler,
  getJobTemplatesJobTemplateIdRouteHandler,
  getJobTemplatesRouteHandler,
  getLoggingOptionsRouteHandler,
  getManagedJobTemplatesRouteHandler,
  getManagedJobTemplatesTemplateNameRouteHandler,
  getMetricValuesThingNameMetricNameStartTimeEndTimeRouteHandler,
  getMitigationactionsActionsActionNameRouteHandler,
  getMitigationactionsActionsRouteHandler,
  getOtaUpdatesOtaUpdateIdRouteHandler,
  getOtaUpdatesRouteHandler,
  getPoliciesPolicyNameRouteHandler,
  getPoliciesPolicyNameVersionPolicyVersionIdRouteHandler,
  getPoliciesPolicyNameVersionRouteHandler,
  getPoliciesRouteHandler,
  getPolicyPrincipalsXAmznIotPolicyRouteHandler,
  getPrincipalPoliciesXAmznIotPrincipalRouteHandler,
  getPrincipalsThingsXAmznPrincipalRouteHandler,
  getProvisioningTemplatesRouteHandler,
  getProvisioningTemplatesTemplateNameRouteHandler,
  getProvisioningTemplatesTemplateNameVersionsRouteHandler,
  getProvisioningTemplatesTemplateNameVersionsVersionIdRouteHandler,
  getRegistrationcodeRouteHandler,
  getRoleAliasesRoleAliasRouteHandler,
  getRoleAliasesRouteHandler,
  getRulesRouteHandler,
  getRulesRuleNameRouteHandler,
  getSecurityProfilesForTargetSecurityProfileTargetArnRouteHandler,
  getSecurityProfilesRouteHandler,
  getSecurityProfilesSecurityProfileNameRouteHandler,
  getSecurityProfilesSecurityProfileNameTargetsRouteHandler,
  getStreamsRouteHandler,
  getStreamsStreamIdRouteHandler,
  getTagsResourceArnRouteHandler,
  getThingGroupsRouteHandler,
  getThingGroupsThingGroupNameRouteHandler,
  getThingGroupsThingGroupNameThingsRouteHandler,
  getThingRegistrationTasksRouteHandler,
  getThingRegistrationTasksTaskIdReportsReportTypeRouteHandler,
  getThingRegistrationTasksTaskIdRouteHandler,
  getThingsRouteHandler,
  getThingsThingNameJobsJobIdRouteHandler,
  getThingsThingNameJobsRouteHandler,
  getThingsThingNamePrincipalsRouteHandler,
  getThingsThingNameRouteHandler,
  getThingsThingNameThingGroupsRouteHandler,
  getThingTypesRouteHandler,
  getThingTypesThingTypeNameRouteHandler,
  getV2LoggingLevelRouteHandler,
  getV2LoggingOptionsRouteHandler,
  getViolationEventsStartTimeEndTimeRouteHandler,
  patchAcceptCertificateTransferCertificateIdRouteHandler,
  patchAuditConfigurationRouteHandler,
  patchAuditScheduledauditsScheduledAuditNameRouteHandler,
  patchAuditSuppressionsUpdateRouteHandler,
  patchBillingGroupsBillingGroupNameRouteHandler,
  patchCancelCertificateTransferCertificateIdRouteHandler,
  patchCustomMetricMetricNameRouteHandler,
  patchDestinationsRouteHandler,
  patchDimensionsNameRouteHandler,
  patchDynamicThingGroupsThingGroupNameRouteHandler,
  patchEventConfigurationsRouteHandler,
  patchFleetMetricMetricNameRouteHandler,
  patchJobsJobIdRouteHandler,
  patchMitigationactionsActionsActionNameRouteHandler,
  patchPoliciesPolicyNameVersionPolicyVersionIdRouteHandler,
  patchProvisioningTemplatesTemplateNameRouteHandler,
  patchRejectCertificateTransferCertificateIdRouteHandler,
  patchRulesRuleNameRouteHandler,
  patchSecurityProfilesSecurityProfileNameRouteHandler,
  patchThingGroupsThingGroupNameRouteHandler,
  patchThingsThingNameRouteHandler,
  patchTransferCertificateCertificateIdTargetAwsAccountRouteHandler,
  postAttachedPoliciesTargetRouteHandler,
  postAuditFindingsRouteHandler,
  postAuditMitigationactionsTasksTaskIdRouteHandler,
  postAuditScheduledauditsScheduledAuditNameRouteHandler,
  postAuditSuppressionsCreateRouteHandler,
  postAuditSuppressionsDeleteRouteHandler,
  postAuditSuppressionsDescribeRouteHandler,
  postAuditSuppressionsListRouteHandler,
  postAuditTasksRouteHandler,
  postAuthorizerAuthorizerNameRouteHandler,
  postAuthorizerAuthorizerNameTestRouteHandler,
  postBillingGroupsBillingGroupNameRouteHandler,
  postCacertificateRouteHandler,
  postCertificateRegisterNoCaRouteHandler,
  postCertificateRegisterRouteHandler,
  postCertificatesRouteHandler,
  postCustomMetricMetricNameRouteHandler,
  postDefaultAuthorizerRouteHandler,
  postDestinationsRouteHandler,
  postDimensionsNameRouteHandler,
  postDomainConfigurationsDomainConfigurationNameRouteHandler,
  postDynamicThingGroupsThingGroupNameRouteHandler,
  postEffectivePoliciesRouteHandler,
  postIndexingConfigRouteHandler,
  postIndicesBucketsRouteHandler,
  postIndicesCardinalityRouteHandler,
  postIndicesPercentilesRouteHandler,
  postIndicesSearchRouteHandler,
  postIndicesStatisticsRouteHandler,
  postJobsJobIdTargetsRouteHandler,
  postKeysAndCertificateRouteHandler,
  postLoggingOptionsRouteHandler,
  postMitigationactionsActionsActionNameRouteHandler,
  postOtaUpdatesOtaUpdateIdRouteHandler,
  postPoliciesPolicyNameRouteHandler,
  postPoliciesPolicyNameVersionRouteHandler,
  postPolicyTargetsPolicyNameRouteHandler,
  postProvisioningTemplatesRouteHandler,
  postProvisioningTemplatesTemplateNameProvisioningClaimRouteHandler,
  postProvisioningTemplatesTemplateNameVersionsRouteHandler,
  postRoleAliasesRoleAliasRouteHandler,
  postRulesRuleNameDisableRouteHandler,
  postRulesRuleNameEnableRouteHandler,
  postRulesRuleNameRouteHandler,
  postSecurityProfileBehaviorsValidateRouteHandler,
  postSecurityProfilesSecurityProfileNameRouteHandler,
  postStreamsStreamIdRouteHandler,
  postTagsRouteHandler,
  postTargetPoliciesPolicyNameRouteHandler,
  postTestAuthorizationRouteHandler,
  postThingGroupsThingGroupNameRouteHandler,
  postThingRegistrationTasksRouteHandler,
  postThingsRouteHandler,
  postThingsThingNameRouteHandler,
  postThingTypesThingTypeNameDeprecateRouteHandler,
  postThingTypesThingTypeNameRouteHandler,
  postUntagRouteHandler,
  postV2LoggingLevelRouteHandler,
  postV2LoggingOptionsRouteHandler,
  postViolationsVerificationStateViolationIdRouteHandler,
  putAuditMitigationactionsTasksTaskIdCancelRouteHandler,
  putAuditTasksTaskIdCancelRouteHandler,
  putAuthorizerAuthorizerNameRouteHandler,
  putBillingGroupsAddThingToBillingGroupRouteHandler,
  putBillingGroupsRemoveThingFromBillingGroupRouteHandler,
  putCacertificateCaCertificateIdRouteHandler,
  putCertificatesCertificateIdNewStatusRouteHandler,
  putDetectMitigationactionsTasksTaskIdCancelRouteHandler,
  putDetectMitigationactionsTasksTaskIdRouteHandler,
  putDomainConfigurationsDomainConfigurationNameRouteHandler,
  putFleetMetricMetricNameRouteHandler,
  putJobsJobIdCancelRouteHandler,
  putJobsJobIdRouteHandler,
  putJobTemplatesJobTemplateIdRouteHandler,
  putPrincipalPoliciesPolicyNameXAmznIotPrincipalRouteHandler,
  putRoleAliasesRoleAliasRouteHandler,
  putSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArnRouteHandler,
  putStreamsStreamIdRouteHandler,
  putTargetPoliciesPolicyNameRouteHandler,
  putThingGroupsAddThingToThingGroupRouteHandler,
  putThingGroupsRemoveThingFromThingGroupRouteHandler,
  putThingGroupsUpdateThingGroupsForThingRouteHandler,
  putThingRegistrationTasksTaskIdCancelRouteHandler,
  putThingsThingNameJobsJobIdCancelRouteHandler,
  putThingsThingNamePrincipalsXAmznPrincipalRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    patchAcceptCertificateTransferCertificateIdRoute,
    patchAcceptCertificateTransferCertificateIdRouteHandler,
  )
  .openapi(
    putBillingGroupsAddThingToBillingGroupRoute,
    putBillingGroupsAddThingToBillingGroupRouteHandler,
  )
  .openapi(putThingGroupsAddThingToThingGroupRoute, putThingGroupsAddThingToThingGroupRouteHandler)
  .openapi(postJobsJobIdTargetsRoute, postJobsJobIdTargetsRouteHandler)
  .openapi(putTargetPoliciesPolicyNameRoute, putTargetPoliciesPolicyNameRouteHandler)
  .openapi(postTargetPoliciesPolicyNameRoute, postTargetPoliciesPolicyNameRouteHandler)
  .openapi(
    putPrincipalPoliciesPolicyNameXAmznIotPrincipalRoute,
    putPrincipalPoliciesPolicyNameXAmznIotPrincipalRouteHandler,
  )
  .openapi(
    deletePrincipalPoliciesPolicyNameXAmznIotPrincipalRoute,
    deletePrincipalPoliciesPolicyNameXAmznIotPrincipalRouteHandler,
  )
  .openapi(
    putSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArnRoute,
    putSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArnRouteHandler,
  )
  .openapi(
    deleteSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArnRoute,
    deleteSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArnRouteHandler,
  )
  .openapi(
    putThingsThingNamePrincipalsXAmznPrincipalRoute,
    putThingsThingNamePrincipalsXAmznPrincipalRouteHandler,
  )
  .openapi(
    deleteThingsThingNamePrincipalsXAmznPrincipalRoute,
    deleteThingsThingNamePrincipalsXAmznPrincipalRouteHandler,
  )
  .openapi(
    putAuditMitigationactionsTasksTaskIdCancelRoute,
    putAuditMitigationactionsTasksTaskIdCancelRouteHandler,
  )
  .openapi(putAuditTasksTaskIdCancelRoute, putAuditTasksTaskIdCancelRouteHandler)
  .openapi(
    patchCancelCertificateTransferCertificateIdRoute,
    patchCancelCertificateTransferCertificateIdRouteHandler,
  )
  .openapi(
    putDetectMitigationactionsTasksTaskIdCancelRoute,
    putDetectMitigationactionsTasksTaskIdCancelRouteHandler,
  )
  .openapi(putJobsJobIdCancelRoute, putJobsJobIdCancelRouteHandler)
  .openapi(putThingsThingNameJobsJobIdCancelRoute, putThingsThingNameJobsJobIdCancelRouteHandler)
  .openapi(deleteDefaultAuthorizerRoute, deleteDefaultAuthorizerRouteHandler)
  .openapi(getDefaultAuthorizerRoute, getDefaultAuthorizerRouteHandler)
  .openapi(postDefaultAuthorizerRoute, postDefaultAuthorizerRouteHandler)
  .openapi(
    getConfirmdestinationConfirmationTokenRoute,
    getConfirmdestinationConfirmationTokenRouteHandler,
  )
  .openapi(postAuditSuppressionsCreateRoute, postAuditSuppressionsCreateRouteHandler)
  .openapi(postAuthorizerAuthorizerNameRoute, postAuthorizerAuthorizerNameRouteHandler)
  .openapi(deleteAuthorizerAuthorizerNameRoute, deleteAuthorizerAuthorizerNameRouteHandler)
  .openapi(getAuthorizerAuthorizerNameRoute, getAuthorizerAuthorizerNameRouteHandler)
  .openapi(putAuthorizerAuthorizerNameRoute, putAuthorizerAuthorizerNameRouteHandler)
  .openapi(postBillingGroupsBillingGroupNameRoute, postBillingGroupsBillingGroupNameRouteHandler)
  .openapi(
    deleteBillingGroupsBillingGroupNameRoute,
    deleteBillingGroupsBillingGroupNameRouteHandler,
  )
  .openapi(getBillingGroupsBillingGroupNameRoute, getBillingGroupsBillingGroupNameRouteHandler)
  .openapi(patchBillingGroupsBillingGroupNameRoute, patchBillingGroupsBillingGroupNameRouteHandler)
  .openapi(postCertificatesRoute, postCertificatesRouteHandler)
  .openapi(getCertificatesRoute, getCertificatesRouteHandler)
  .openapi(postCustomMetricMetricNameRoute, postCustomMetricMetricNameRouteHandler)
  .openapi(deleteCustomMetricMetricNameRoute, deleteCustomMetricMetricNameRouteHandler)
  .openapi(getCustomMetricMetricNameRoute, getCustomMetricMetricNameRouteHandler)
  .openapi(patchCustomMetricMetricNameRoute, patchCustomMetricMetricNameRouteHandler)
  .openapi(postDimensionsNameRoute, postDimensionsNameRouteHandler)
  .openapi(deleteDimensionsNameRoute, deleteDimensionsNameRouteHandler)
  .openapi(getDimensionsNameRoute, getDimensionsNameRouteHandler)
  .openapi(patchDimensionsNameRoute, patchDimensionsNameRouteHandler)
  .openapi(
    postDomainConfigurationsDomainConfigurationNameRoute,
    postDomainConfigurationsDomainConfigurationNameRouteHandler,
  )
  .openapi(
    deleteDomainConfigurationsDomainConfigurationNameRoute,
    deleteDomainConfigurationsDomainConfigurationNameRouteHandler,
  )
  .openapi(
    getDomainConfigurationsDomainConfigurationNameRoute,
    getDomainConfigurationsDomainConfigurationNameRouteHandler,
  )
  .openapi(
    putDomainConfigurationsDomainConfigurationNameRoute,
    putDomainConfigurationsDomainConfigurationNameRouteHandler,
  )
  .openapi(
    postDynamicThingGroupsThingGroupNameRoute,
    postDynamicThingGroupsThingGroupNameRouteHandler,
  )
  .openapi(
    deleteDynamicThingGroupsThingGroupNameRoute,
    deleteDynamicThingGroupsThingGroupNameRouteHandler,
  )
  .openapi(
    patchDynamicThingGroupsThingGroupNameRoute,
    patchDynamicThingGroupsThingGroupNameRouteHandler,
  )
  .openapi(putFleetMetricMetricNameRoute, putFleetMetricMetricNameRouteHandler)
  .openapi(deleteFleetMetricMetricNameRoute, deleteFleetMetricMetricNameRouteHandler)
  .openapi(getFleetMetricMetricNameRoute, getFleetMetricMetricNameRouteHandler)
  .openapi(patchFleetMetricMetricNameRoute, patchFleetMetricMetricNameRouteHandler)
  .openapi(putJobsJobIdRoute, putJobsJobIdRouteHandler)
  .openapi(deleteJobsJobIdRoute, deleteJobsJobIdRouteHandler)
  .openapi(getJobsJobIdRoute, getJobsJobIdRouteHandler)
  .openapi(patchJobsJobIdRoute, patchJobsJobIdRouteHandler)
  .openapi(putJobTemplatesJobTemplateIdRoute, putJobTemplatesJobTemplateIdRouteHandler)
  .openapi(deleteJobTemplatesJobTemplateIdRoute, deleteJobTemplatesJobTemplateIdRouteHandler)
  .openapi(getJobTemplatesJobTemplateIdRoute, getJobTemplatesJobTemplateIdRouteHandler)
  .openapi(postKeysAndCertificateRoute, postKeysAndCertificateRouteHandler)
  .openapi(
    postMitigationactionsActionsActionNameRoute,
    postMitigationactionsActionsActionNameRouteHandler,
  )
  .openapi(
    deleteMitigationactionsActionsActionNameRoute,
    deleteMitigationactionsActionsActionNameRouteHandler,
  )
  .openapi(
    getMitigationactionsActionsActionNameRoute,
    getMitigationactionsActionsActionNameRouteHandler,
  )
  .openapi(
    patchMitigationactionsActionsActionNameRoute,
    patchMitigationactionsActionsActionNameRouteHandler,
  )
  .openapi(postOtaUpdatesOtaUpdateIdRoute, postOtaUpdatesOtaUpdateIdRouteHandler)
  .openapi(deleteOtaUpdatesOtaUpdateIdRoute, deleteOtaUpdatesOtaUpdateIdRouteHandler)
  .openapi(getOtaUpdatesOtaUpdateIdRoute, getOtaUpdatesOtaUpdateIdRouteHandler)
  .openapi(postPoliciesPolicyNameRoute, postPoliciesPolicyNameRouteHandler)
  .openapi(deletePoliciesPolicyNameRoute, deletePoliciesPolicyNameRouteHandler)
  .openapi(getPoliciesPolicyNameRoute, getPoliciesPolicyNameRouteHandler)
  .openapi(postPoliciesPolicyNameVersionRoute, postPoliciesPolicyNameVersionRouteHandler)
  .openapi(getPoliciesPolicyNameVersionRoute, getPoliciesPolicyNameVersionRouteHandler)
  .openapi(
    postProvisioningTemplatesTemplateNameProvisioningClaimRoute,
    postProvisioningTemplatesTemplateNameProvisioningClaimRouteHandler,
  )
  .openapi(postProvisioningTemplatesRoute, postProvisioningTemplatesRouteHandler)
  .openapi(getProvisioningTemplatesRoute, getProvisioningTemplatesRouteHandler)
  .openapi(
    postProvisioningTemplatesTemplateNameVersionsRoute,
    postProvisioningTemplatesTemplateNameVersionsRouteHandler,
  )
  .openapi(
    getProvisioningTemplatesTemplateNameVersionsRoute,
    getProvisioningTemplatesTemplateNameVersionsRouteHandler,
  )
  .openapi(postRoleAliasesRoleAliasRoute, postRoleAliasesRoleAliasRouteHandler)
  .openapi(deleteRoleAliasesRoleAliasRoute, deleteRoleAliasesRoleAliasRouteHandler)
  .openapi(getRoleAliasesRoleAliasRoute, getRoleAliasesRoleAliasRouteHandler)
  .openapi(putRoleAliasesRoleAliasRoute, putRoleAliasesRoleAliasRouteHandler)
  .openapi(
    postAuditScheduledauditsScheduledAuditNameRoute,
    postAuditScheduledauditsScheduledAuditNameRouteHandler,
  )
  .openapi(
    deleteAuditScheduledauditsScheduledAuditNameRoute,
    deleteAuditScheduledauditsScheduledAuditNameRouteHandler,
  )
  .openapi(
    getAuditScheduledauditsScheduledAuditNameRoute,
    getAuditScheduledauditsScheduledAuditNameRouteHandler,
  )
  .openapi(
    patchAuditScheduledauditsScheduledAuditNameRoute,
    patchAuditScheduledauditsScheduledAuditNameRouteHandler,
  )
  .openapi(
    postSecurityProfilesSecurityProfileNameRoute,
    postSecurityProfilesSecurityProfileNameRouteHandler,
  )
  .openapi(
    deleteSecurityProfilesSecurityProfileNameRoute,
    deleteSecurityProfilesSecurityProfileNameRouteHandler,
  )
  .openapi(
    getSecurityProfilesSecurityProfileNameRoute,
    getSecurityProfilesSecurityProfileNameRouteHandler,
  )
  .openapi(
    patchSecurityProfilesSecurityProfileNameRoute,
    patchSecurityProfilesSecurityProfileNameRouteHandler,
  )
  .openapi(postStreamsStreamIdRoute, postStreamsStreamIdRouteHandler)
  .openapi(deleteStreamsStreamIdRoute, deleteStreamsStreamIdRouteHandler)
  .openapi(getStreamsStreamIdRoute, getStreamsStreamIdRouteHandler)
  .openapi(putStreamsStreamIdRoute, putStreamsStreamIdRouteHandler)
  .openapi(postThingsThingNameRoute, postThingsThingNameRouteHandler)
  .openapi(deleteThingsThingNameRoute, deleteThingsThingNameRouteHandler)
  .openapi(getThingsThingNameRoute, getThingsThingNameRouteHandler)
  .openapi(patchThingsThingNameRoute, patchThingsThingNameRouteHandler)
  .openapi(postThingGroupsThingGroupNameRoute, postThingGroupsThingGroupNameRouteHandler)
  .openapi(deleteThingGroupsThingGroupNameRoute, deleteThingGroupsThingGroupNameRouteHandler)
  .openapi(getThingGroupsThingGroupNameRoute, getThingGroupsThingGroupNameRouteHandler)
  .openapi(patchThingGroupsThingGroupNameRoute, patchThingGroupsThingGroupNameRouteHandler)
  .openapi(postThingTypesThingTypeNameRoute, postThingTypesThingTypeNameRouteHandler)
  .openapi(deleteThingTypesThingTypeNameRoute, deleteThingTypesThingTypeNameRouteHandler)
  .openapi(getThingTypesThingTypeNameRoute, getThingTypesThingTypeNameRouteHandler)
  .openapi(postRulesRuleNameRoute, postRulesRuleNameRouteHandler)
  .openapi(deleteRulesRuleNameRoute, deleteRulesRuleNameRouteHandler)
  .openapi(getRulesRuleNameRoute, getRulesRuleNameRouteHandler)
  .openapi(patchRulesRuleNameRoute, patchRulesRuleNameRouteHandler)
  .openapi(postDestinationsRoute, postDestinationsRouteHandler)
  .openapi(getDestinationsRoute, getDestinationsRouteHandler)
  .openapi(patchDestinationsRoute, patchDestinationsRouteHandler)
  .openapi(deleteAuditConfigurationRoute, deleteAuditConfigurationRouteHandler)
  .openapi(getAuditConfigurationRoute, getAuditConfigurationRouteHandler)
  .openapi(patchAuditConfigurationRoute, patchAuditConfigurationRouteHandler)
  .openapi(postAuditSuppressionsDeleteRoute, postAuditSuppressionsDeleteRouteHandler)
  .openapi(deleteCacertificateCaCertificateIdRoute, deleteCacertificateCaCertificateIdRouteHandler)
  .openapi(getCacertificateCaCertificateIdRoute, getCacertificateCaCertificateIdRouteHandler)
  .openapi(putCacertificateCaCertificateIdRoute, putCacertificateCaCertificateIdRouteHandler)
  .openapi(deleteCertificatesCertificateIdRoute, deleteCertificatesCertificateIdRouteHandler)
  .openapi(getCertificatesCertificateIdRoute, getCertificatesCertificateIdRouteHandler)
  .openapi(
    deleteThingsThingNameJobsJobIdExecutionNumberExecutionNumberRoute,
    deleteThingsThingNameJobsJobIdExecutionNumberExecutionNumberRouteHandler,
  )
  .openapi(
    deletePoliciesPolicyNameVersionPolicyVersionIdRoute,
    deletePoliciesPolicyNameVersionPolicyVersionIdRouteHandler,
  )
  .openapi(
    getPoliciesPolicyNameVersionPolicyVersionIdRoute,
    getPoliciesPolicyNameVersionPolicyVersionIdRouteHandler,
  )
  .openapi(
    patchPoliciesPolicyNameVersionPolicyVersionIdRoute,
    patchPoliciesPolicyNameVersionPolicyVersionIdRouteHandler,
  )
  .openapi(
    deleteProvisioningTemplatesTemplateNameRoute,
    deleteProvisioningTemplatesTemplateNameRouteHandler,
  )
  .openapi(
    getProvisioningTemplatesTemplateNameRoute,
    getProvisioningTemplatesTemplateNameRouteHandler,
  )
  .openapi(
    patchProvisioningTemplatesTemplateNameRoute,
    patchProvisioningTemplatesTemplateNameRouteHandler,
  )
  .openapi(
    deleteProvisioningTemplatesTemplateNameVersionsVersionIdRoute,
    deleteProvisioningTemplatesTemplateNameVersionsVersionIdRouteHandler,
  )
  .openapi(
    getProvisioningTemplatesTemplateNameVersionsVersionIdRoute,
    getProvisioningTemplatesTemplateNameVersionsVersionIdRouteHandler,
  )
  .openapi(deleteRegistrationcodeRoute, deleteRegistrationcodeRouteHandler)
  .openapi(getRegistrationcodeRoute, getRegistrationcodeRouteHandler)
  .openapi(deleteDestinationsArnRoute, deleteDestinationsArnRouteHandler)
  .openapi(getDestinationsArnRoute, getDestinationsArnRouteHandler)
  .openapi(
    deleteV2LoggingLevelTargetTypeTargetNameRoute,
    deleteV2LoggingLevelTargetTypeTargetNameRouteHandler,
  )
  .openapi(
    postThingTypesThingTypeNameDeprecateRoute,
    postThingTypesThingTypeNameDeprecateRouteHandler,
  )
  .openapi(getAuditFindingsFindingIdRoute, getAuditFindingsFindingIdRouteHandler)
  .openapi(
    getAuditMitigationactionsTasksTaskIdRoute,
    getAuditMitigationactionsTasksTaskIdRouteHandler,
  )
  .openapi(
    postAuditMitigationactionsTasksTaskIdRoute,
    postAuditMitigationactionsTasksTaskIdRouteHandler,
  )
  .openapi(postAuditSuppressionsDescribeRoute, postAuditSuppressionsDescribeRouteHandler)
  .openapi(getAuditTasksTaskIdRoute, getAuditTasksTaskIdRouteHandler)
  .openapi(
    getDetectMitigationactionsTasksTaskIdRoute,
    getDetectMitigationactionsTasksTaskIdRouteHandler,
  )
  .openapi(
    putDetectMitigationactionsTasksTaskIdRoute,
    putDetectMitigationactionsTasksTaskIdRouteHandler,
  )
  .openapi(getEndpointRoute, getEndpointRouteHandler)
  .openapi(getEventConfigurationsRoute, getEventConfigurationsRouteHandler)
  .openapi(patchEventConfigurationsRoute, patchEventConfigurationsRouteHandler)
  .openapi(getIndicesIndexNameRoute, getIndicesIndexNameRouteHandler)
  .openapi(getThingsThingNameJobsJobIdRoute, getThingsThingNameJobsJobIdRouteHandler)
  .openapi(getManagedJobTemplatesTemplateNameRoute, getManagedJobTemplatesTemplateNameRouteHandler)
  .openapi(getThingRegistrationTasksTaskIdRoute, getThingRegistrationTasksTaskIdRouteHandler)
  .openapi(postRulesRuleNameDisableRoute, postRulesRuleNameDisableRouteHandler)
  .openapi(postRulesRuleNameEnableRoute, postRulesRuleNameEnableRouteHandler)
  .openapi(getBehaviorModelTrainingSummariesRoute, getBehaviorModelTrainingSummariesRouteHandler)
  .openapi(postIndicesBucketsRoute, postIndicesBucketsRouteHandler)
  .openapi(postIndicesCardinalityRoute, postIndicesCardinalityRouteHandler)
  .openapi(postEffectivePoliciesRoute, postEffectivePoliciesRouteHandler)
  .openapi(getIndexingConfigRoute, getIndexingConfigRouteHandler)
  .openapi(postIndexingConfigRoute, postIndexingConfigRouteHandler)
  .openapi(getJobsJobIdJobDocumentRoute, getJobsJobIdJobDocumentRouteHandler)
  .openapi(getLoggingOptionsRoute, getLoggingOptionsRouteHandler)
  .openapi(postLoggingOptionsRoute, postLoggingOptionsRouteHandler)
  .openapi(postIndicesPercentilesRoute, postIndicesPercentilesRouteHandler)
  .openapi(postIndicesStatisticsRoute, postIndicesStatisticsRouteHandler)
  .openapi(getV2LoggingOptionsRoute, getV2LoggingOptionsRouteHandler)
  .openapi(postV2LoggingOptionsRoute, postV2LoggingOptionsRouteHandler)
  .openapi(getActiveViolationsRoute, getActiveViolationsRouteHandler)
  .openapi(postAttachedPoliciesTargetRoute, postAttachedPoliciesTargetRouteHandler)
  .openapi(postAuditFindingsRoute, postAuditFindingsRouteHandler)
  .openapi(
    getAuditMitigationactionsExecutionsTaskIdFindingIdRoute,
    getAuditMitigationactionsExecutionsTaskIdFindingIdRouteHandler,
  )
  .openapi(
    getAuditMitigationactionsTasksStartTimeEndTimeRoute,
    getAuditMitigationactionsTasksStartTimeEndTimeRouteHandler,
  )
  .openapi(postAuditSuppressionsListRoute, postAuditSuppressionsListRouteHandler)
  .openapi(getAuditTasksStartTimeEndTimeRoute, getAuditTasksStartTimeEndTimeRouteHandler)
  .openapi(getAuthorizersIndexRoute, getAuthorizersIndexRouteHandler)
  .openapi(getBillingGroupsRoute, getBillingGroupsRouteHandler)
  .openapi(getCacertificatesRoute, getCacertificatesRouteHandler)
  .openapi(getCertificatesByCaCaCertificateIdRoute, getCertificatesByCaCaCertificateIdRouteHandler)
  .openapi(getCustomMetricsRoute, getCustomMetricsRouteHandler)
  .openapi(
    getDetectMitigationactionsExecutionsRoute,
    getDetectMitigationactionsExecutionsRouteHandler,
  )
  .openapi(
    getDetectMitigationactionsTasksStartTimeEndTimeRoute,
    getDetectMitigationactionsTasksStartTimeEndTimeRouteHandler,
  )
  .openapi(getDimensionsRoute, getDimensionsRouteHandler)
  .openapi(getDomainConfigurationsRoute, getDomainConfigurationsRouteHandler)
  .openapi(getFleetMetricsRoute, getFleetMetricsRouteHandler)
  .openapi(getIndicesRoute, getIndicesRouteHandler)
  .openapi(getJobsJobIdThingsRoute, getJobsJobIdThingsRouteHandler)
  .openapi(getThingsThingNameJobsRoute, getThingsThingNameJobsRouteHandler)
  .openapi(getJobTemplatesRoute, getJobTemplatesRouteHandler)
  .openapi(getJobsRoute, getJobsRouteHandler)
  .openapi(getManagedJobTemplatesRoute, getManagedJobTemplatesRouteHandler)
  .openapi(
    getMetricValuesThingNameMetricNameStartTimeEndTimeRoute,
    getMetricValuesThingNameMetricNameStartTimeEndTimeRouteHandler,
  )
  .openapi(getMitigationactionsActionsRoute, getMitigationactionsActionsRouteHandler)
  .openapi(getOtaUpdatesRoute, getOtaUpdatesRouteHandler)
  .openapi(getCertificatesOutGoingRoute, getCertificatesOutGoingRouteHandler)
  .openapi(getPoliciesRoute, getPoliciesRouteHandler)
  .openapi(getPolicyPrincipalsXAmznIotPolicyRoute, getPolicyPrincipalsXAmznIotPolicyRouteHandler)
  .openapi(
    getPrincipalPoliciesXAmznIotPrincipalRoute,
    getPrincipalPoliciesXAmznIotPrincipalRouteHandler,
  )
  .openapi(getPrincipalsThingsXAmznPrincipalRoute, getPrincipalsThingsXAmznPrincipalRouteHandler)
  .openapi(getAuditRelatedResourcesFindingIdRoute, getAuditRelatedResourcesFindingIdRouteHandler)
  .openapi(getRoleAliasesRoute, getRoleAliasesRouteHandler)
  .openapi(getAuditScheduledauditsRoute, getAuditScheduledauditsRouteHandler)
  .openapi(getSecurityProfilesRoute, getSecurityProfilesRouteHandler)
  .openapi(
    getSecurityProfilesForTargetSecurityProfileTargetArnRoute,
    getSecurityProfilesForTargetSecurityProfileTargetArnRouteHandler,
  )
  .openapi(getStreamsRoute, getStreamsRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postPolicyTargetsPolicyNameRoute, postPolicyTargetsPolicyNameRouteHandler)
  .openapi(
    getSecurityProfilesSecurityProfileNameTargetsRoute,
    getSecurityProfilesSecurityProfileNameTargetsRouteHandler,
  )
  .openapi(getThingGroupsRoute, getThingGroupsRouteHandler)
  .openapi(getThingsThingNameThingGroupsRoute, getThingsThingNameThingGroupsRouteHandler)
  .openapi(getThingsThingNamePrincipalsRoute, getThingsThingNamePrincipalsRouteHandler)
  .openapi(
    getThingRegistrationTasksTaskIdReportsReportTypeRoute,
    getThingRegistrationTasksTaskIdReportsReportTypeRouteHandler,
  )
  .openapi(getThingRegistrationTasksRoute, getThingRegistrationTasksRouteHandler)
  .openapi(postThingRegistrationTasksRoute, postThingRegistrationTasksRouteHandler)
  .openapi(getThingTypesRoute, getThingTypesRouteHandler)
  .openapi(getThingsRoute, getThingsRouteHandler)
  .openapi(postThingsRoute, postThingsRouteHandler)
  .openapi(
    getBillingGroupsBillingGroupNameThingsRoute,
    getBillingGroupsBillingGroupNameThingsRouteHandler,
  )
  .openapi(getThingGroupsThingGroupNameThingsRoute, getThingGroupsThingGroupNameThingsRouteHandler)
  .openapi(getRulesRoute, getRulesRouteHandler)
  .openapi(getV2LoggingLevelRoute, getV2LoggingLevelRouteHandler)
  .openapi(postV2LoggingLevelRoute, postV2LoggingLevelRouteHandler)
  .openapi(getViolationEventsStartTimeEndTimeRoute, getViolationEventsStartTimeEndTimeRouteHandler)
  .openapi(
    postViolationsVerificationStateViolationIdRoute,
    postViolationsVerificationStateViolationIdRouteHandler,
  )
  .openapi(postCacertificateRoute, postCacertificateRouteHandler)
  .openapi(postCertificateRegisterRoute, postCertificateRegisterRouteHandler)
  .openapi(postCertificateRegisterNoCaRoute, postCertificateRegisterNoCaRouteHandler)
  .openapi(
    patchRejectCertificateTransferCertificateIdRoute,
    patchRejectCertificateTransferCertificateIdRouteHandler,
  )
  .openapi(
    putBillingGroupsRemoveThingFromBillingGroupRoute,
    putBillingGroupsRemoveThingFromBillingGroupRouteHandler,
  )
  .openapi(
    putThingGroupsRemoveThingFromThingGroupRoute,
    putThingGroupsRemoveThingFromThingGroupRouteHandler,
  )
  .openapi(postIndicesSearchRoute, postIndicesSearchRouteHandler)
  .openapi(postAuditTasksRoute, postAuditTasksRouteHandler)
  .openapi(
    putThingRegistrationTasksTaskIdCancelRoute,
    putThingRegistrationTasksTaskIdCancelRouteHandler,
  )
  .openapi(postTagsRoute, postTagsRouteHandler)
  .openapi(postTestAuthorizationRoute, postTestAuthorizationRouteHandler)
  .openapi(postAuthorizerAuthorizerNameTestRoute, postAuthorizerAuthorizerNameTestRouteHandler)
  .openapi(
    patchTransferCertificateCertificateIdTargetAwsAccountRoute,
    patchTransferCertificateCertificateIdTargetAwsAccountRouteHandler,
  )
  .openapi(postUntagRoute, postUntagRouteHandler)
  .openapi(patchAuditSuppressionsUpdateRoute, patchAuditSuppressionsUpdateRouteHandler)
  .openapi(
    putCertificatesCertificateIdNewStatusRoute,
    putCertificatesCertificateIdNewStatusRouteHandler,
  )
  .openapi(
    putThingGroupsUpdateThingGroupsForThingRoute,
    putThingGroupsUpdateThingGroupsForThingRouteHandler,
  )
  .openapi(
    postSecurityProfileBehaviorsValidateRoute,
    postSecurityProfileBehaviorsValidateRouteHandler,
  )

export default app
