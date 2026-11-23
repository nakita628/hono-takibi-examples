import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2AccountIpAllowlistIdRoute,
  deleteApiV2AccountRelayAutoConfigsIdRoute,
  deleteApiV2AnnouncementsAnnouncementIdRoute,
  deleteApiV2ApplicationsApplicationKeyRoute,
  deleteApiV2ApplicationsApplicationKeyVersionsVersionKeyRoute,
  deleteApiV2ApprovalRequestsIdRoute,
  deleteApiV2CodeRefsRepositoriesRepoRoute,
  deleteApiV2DestinationsProjectKeyEnvironmentKeyIdRoute,
  deleteApiV2EngineeringInsightsInsightsGroupsInsightGroupKeyRoute,
  deleteApiV2EngineeringInsightsRepositoriesRepositoryKeyProjectsProjectKeyRoute,
  deleteApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyIdRoute,
  deleteApiV2FlagsProjectKeyFeatureFlagKeyRoute,
  deleteApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyIdRoute,
  deleteApiV2FlagsProjectKeyFlagKeyReleaseRoute,
  deleteApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyIntegrationIdRoute,
  deleteApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdRoute,
  deleteApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdRoute,
  deleteApiV2IntegrationConfigurationsIntegrationConfigurationIdRoute,
  deleteApiV2IntegrationsIntegrationKeyIdRoute,
  deleteApiV2MembersIdRoute,
  deleteApiV2MetricsProjectKeyMetricKeyRoute,
  deleteApiV2OauthClientsClientIdRoute,
  deleteApiV2ProjectsProjectKeyAgentGraphsGraphKeyRoute,
  deleteApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRoute,
  deleteApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRunsRunIdRoute,
  deleteApiV2ProjectsProjectKeyAiConfigsConfigKeyRoute,
  deleteApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsVariationKeyRoute,
  deleteApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyRoute,
  deleteApiV2ProjectsProjectKeyAiConfigsModelConfigsRestrictedRoute,
  deleteApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyRoute,
  deleteApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyRoute,
  deleteApiV2ProjectsProjectKeyAiToolsToolKeyRoute,
  deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDRoute,
  deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyDefaultReleasePlanRoute,
  deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansReleasePlanKeyRoute,
  deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyRoute,
  deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyRoute,
  deleteApiV2ProjectsProjectKeyFlagReleasePlansPlanKeyRoute,
  deleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdRoute,
  deleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyFollowersMemberIdRoute,
  deleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesIdRoute,
  deleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsWorkflowIdRoute,
  deleteApiV2ProjectsProjectKeyMetricGroupsMetricGroupKeyRoute,
  deleteApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyRoute,
  deleteApiV2ProjectsProjectKeyRoute,
  deleteApiV2ProjectsProjectKeyViewsViewKeyLinkResourceTypeRoute,
  deleteApiV2ProjectsProjectKeyViewsViewKeyRoute,
  deleteApiV2RolesCustomRoleKeyRoute,
  deleteApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyRoute,
  deleteApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesIdRoute,
  deleteApiV2TeamsTeamKeyRoute,
  deleteApiV2TemplatesTemplateKeyRoute,
  deleteApiV2TokensIdRoute,
  deleteApiV2WebhooksIdRoute,
  getApiV2AccountIpAllowlistRoute,
  getApiV2AccountRelayAutoConfigsIdRoute,
  getApiV2AccountRelayAutoConfigsRoute,
  getApiV2AnnouncementsRoute,
  getApiV2ApplicationsApplicationKeyRoute,
  getApiV2ApplicationsApplicationKeyVersionsRoute,
  getApiV2ApplicationsRoute,
  getApiV2ApprovalRequestsIdRoute,
  getApiV2ApprovalRequestsProjectsProjectKeySettingsRoute,
  getApiV2ApprovalRequestsRoute,
  getApiV2AuditlogIdRoute,
  getApiV2AuditlogRoute,
  getApiV2CallerIdentityRoute,
  getApiV2CodeRefsExtinctionsRoute,
  getApiV2CodeRefsRepositoriesRepoBranchesBranchRoute,
  getApiV2CodeRefsRepositoriesRepoBranchesRoute,
  getApiV2CodeRefsRepositoriesRepoRoute,
  getApiV2CodeRefsRepositoriesRoute,
  getApiV2CodeRefsStatisticsProjectKeyRoute,
  getApiV2CodeRefsStatisticsRoute,
  getApiV2DestinationsProjectKeyEnvironmentKeyIdRoute,
  getApiV2DestinationsRoute,
  getApiV2EngineeringInsightsChartsDeploymentsFrequencyRoute,
  getApiV2EngineeringInsightsChartsFlagsStaleRoute,
  getApiV2EngineeringInsightsChartsFlagsStatusRoute,
  getApiV2EngineeringInsightsChartsLeadTimeRoute,
  getApiV2EngineeringInsightsChartsReleasesFrequencyRoute,
  getApiV2EngineeringInsightsDeploymentsDeploymentIDRoute,
  getApiV2EngineeringInsightsDeploymentsRoute,
  getApiV2EngineeringInsightsFlagEventsRoute,
  getApiV2EngineeringInsightsInsightsGroupsInsightGroupKeyRoute,
  getApiV2EngineeringInsightsInsightsGroupsRoute,
  getApiV2EngineeringInsightsInsightsScoresRoute,
  getApiV2EngineeringInsightsPullRequestsRoute,
  getApiV2EngineeringInsightsRepositoriesRoute,
  getApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyRoute,
  getApiV2FlagsProjectKeyEnvironmentKeyFeatureFlagKeyDependentFlagsRoute,
  getApiV2FlagsProjectKeyFeatureFlagKeyDependentFlagsRoute,
  getApiV2FlagsProjectKeyFeatureFlagKeyExpiringTargetsEnvironmentKeyRoute,
  getApiV2FlagsProjectKeyFeatureFlagKeyExpiringUserTargetsEnvironmentKeyRoute,
  getApiV2FlagsProjectKeyFeatureFlagKeyRoute,
  getApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyIdRoute,
  getApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyRoute,
  getApiV2FlagsProjectKeyFlagKeyReleaseRoute,
  getApiV2FlagsProjectKeyRoute,
  getApiV2FlagStatusesProjectKeyEnvironmentKeyFeatureFlagKeyRoute,
  getApiV2FlagStatusesProjectKeyEnvironmentKeyRoute,
  getApiV2FlagStatusProjectKeyFeatureFlagKeyRoute,
  getApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyIntegrationIdRoute,
  getApiV2IntegrationCapabilitiesBigSegmentStoreRoute,
  getApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdRoute,
  getApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyRoute,
  getApiV2IntegrationCapabilitiesFeatureStoreRoute,
  getApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdRoute,
  getApiV2IntegrationCapabilitiesFlagImportRoute,
  getApiV2IntegrationConfigurationsIntegrationConfigurationIdRoute,
  getApiV2IntegrationConfigurationsKeysIntegrationKeyRoute,
  getApiV2IntegrationsIntegrationKeyIdRoute,
  getApiV2IntegrationsIntegrationKeyRoute,
  getApiV2MembersIdRoute,
  getApiV2MembersRoute,
  getApiV2MetricsProjectKeyMetricKeyRoute,
  getApiV2MetricsProjectKeyRoute,
  getApiV2OauthClientsClientIdRoute,
  getApiV2OauthClientsRoute,
  getApiV2OpenapiJsonRoute,
  getApiV2ProjectsProjectKeyAgentGraphsGraphKeyRoute,
  getApiV2ProjectsProjectKeyAgentGraphsRoute,
  getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyAllResultsRoute,
  getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyResultsRoute,
  getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRoute,
  getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRunsRoute,
  getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRunsRunIdResultsRoute,
  getApiV2ProjectsProjectKeyAgentOptimizationsRoute,
  getApiV2ProjectsProjectKeyAiConfigsConfigKeyMetricsByVariationRoute,
  getApiV2ProjectsProjectKeyAiConfigsConfigKeyMetricsRoute,
  getApiV2ProjectsProjectKeyAiConfigsConfigKeyRoute,
  getApiV2ProjectsProjectKeyAiConfigsConfigKeyTargetingRoute,
  getApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsVariationKeyRoute,
  getApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyRoute,
  getApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyVersionsRoute,
  getApiV2ProjectsProjectKeyAiConfigsModelConfigsRoute,
  getApiV2ProjectsProjectKeyAiConfigsPromptSnippetsRoute,
  getApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyReferencesRoute,
  getApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyRoute,
  getApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyVersionsRoute,
  getApiV2ProjectsProjectKeyAiConfigsQuickStatsRoute,
  getApiV2ProjectsProjectKeyAiConfigsRoute,
  getApiV2ProjectsProjectKeyAiConfigsSkillsRoute,
  getApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyReferencesRoute,
  getApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyRoute,
  getApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyVersionsRoute,
  getApiV2ProjectsProjectKeyAiToolsRoute,
  getApiV2ProjectsProjectKeyAiToolsToolKeyReferencesRoute,
  getApiV2ProjectsProjectKeyAiToolsToolKeyRoute,
  getApiV2ProjectsProjectKeyAiToolsToolKeyVersionsRoute,
  getApiV2ProjectsProjectKeyContextKindsRoute,
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersRoute,
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDRoute,
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextAttributesAttributeNameRoute,
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextAttributesRoute,
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextsKindKeyRoute,
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyDefaultReleasePlanRoute,
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsExperimentKeyRoute,
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsRoute,
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyFollowersRoute,
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsHoldoutKeyRoute,
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsIdHoldoutIdRoute,
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsRoute,
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansReleasePlanKeyRoute,
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansRoute,
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyRoute,
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysRoute,
  getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyRoute,
  getApiV2ProjectsProjectKeyEnvironmentsRoute,
  getApiV2ProjectsProjectKeyExperimentationSettingsRoute,
  getApiV2ProjectsProjectKeyExperimentsRoute,
  getApiV2ProjectsProjectKeyFlagDefaultsRoute,
  getApiV2ProjectsProjectKeyFlagReleasePlansPlanKeyRoute,
  getApiV2ProjectsProjectKeyFlagReleasePlansRoute,
  getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdRoute,
  getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsRoute,
  getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyFollowersRoute,
  getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesIdRoute,
  getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesRoute,
  getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsRoute,
  getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsWorkflowIdRoute,
  getApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesReleaseIdRoute,
  getApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesRoute,
  getApiV2ProjectsProjectKeyLayersRoute,
  getApiV2ProjectsProjectKeyMetricGroupsMetricGroupKeyRoute,
  getApiV2ProjectsProjectKeyMetricGroupsRoute,
  getApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyReleasesRoute,
  getApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyRoute,
  getApiV2ProjectsProjectKeyReleasePipelinesRoute,
  getApiV2ProjectsProjectKeyRoute,
  getApiV2ProjectsProjectKeySdkKeysRoute,
  getApiV2ProjectsProjectKeyViewAssociationsResourceTypeResourceKeyRoute,
  getApiV2ProjectsProjectKeyViewsRoute,
  getApiV2ProjectsProjectKeyViewsViewKeyLinkedResourceTypeRoute,
  getApiV2ProjectsProjectKeyViewsViewKeyRoute,
  getApiV2ProjectsRoute,
  getApiV2PublicIpListRoute,
  getApiV2RolesCustomRoleKeyRoute,
  getApiV2RolesRoute,
  getApiV2Route,
  getApiV2SegmentsProjectKeyEnvironmentKeyRoute,
  getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyContextsContextKeyRoute,
  getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyExportsExportIDRoute,
  getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyImportsImportIDRoute,
  getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyRoute,
  getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesIdRoute,
  getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesRoute,
  getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyUsersUserKeyRoute,
  getApiV2SegmentsProjectKeySegmentKeyExpiringTargetsEnvironmentKeyRoute,
  getApiV2SegmentsProjectKeySegmentKeyExpiringUserTargetsEnvironmentKeyRoute,
  getApiV2TagsRoute,
  getApiV2TeamsRoute,
  getApiV2TeamsTeamKeyMaintainersRoute,
  getApiV2TeamsTeamKeyRolesRoute,
  getApiV2TeamsTeamKeyRoute,
  getApiV2TemplatesRoute,
  getApiV2TokensIdRoute,
  getApiV2TokensRoute,
  getApiV2UsageAiRunsRoute,
  getApiV2UsageClientsideContextsRoute,
  getApiV2UsageClientsideMauRoute,
  getApiV2UsageDataExportEventsProjectsRankingRoute,
  getApiV2UsageDataExportEventsRoute,
  getApiV2UsageEvaluationsProjectKeyEnvironmentKeyFeatureFlagKeyRoute,
  getApiV2UsageEventsTypeRoute,
  getApiV2UsageExperimentationEventsRoute,
  getApiV2UsageExperimentationKeysRoute,
  getApiV2UsageMauBycategoryRoute,
  getApiV2UsageMauRoute,
  getApiV2UsageMauSdksRoute,
  getApiV2UsageObservabilityErrorsRoute,
  getApiV2UsageObservabilityLogsRoute,
  getApiV2UsageObservabilityMetricsRoute,
  getApiV2UsageObservabilitySessionsRoute,
  getApiV2UsageObservabilityTracesRoute,
  getApiV2UsageSdkVersionsAllRoute,
  getApiV2UsageSdkVersionsDetailsRoute,
  getApiV2UsageServersideContextsRoute,
  getApiV2UsageServiceConnectionsRoute,
  getApiV2UsageStreamsSourceBysdkversionRoute,
  getApiV2UsageStreamsSourceRoute,
  getApiV2UsageStreamsSourceSdkversionsRoute,
  getApiV2UsageTotalContextsRoute,
  getApiV2UsageTotalMauRoute,
  getApiV2UsageVegaAiRoute,
  getApiV2UsageWarehouseExportRoute,
  getApiV2UserSearchProjectKeyEnvironmentKeyRoute,
  getApiV2UsersProjectKeyEnvironmentKeyRoute,
  getApiV2UsersProjectKeyEnvironmentKeyUserKeyFlagsFeatureFlagKeyRoute,
  getApiV2UsersProjectKeyEnvironmentKeyUserKeyFlagsRoute,
  getApiV2UsersProjectKeyEnvironmentKeyUserKeyRoute,
  getApiV2UsersProjectKeyUserKeyExpiringUserTargetsEnvironmentKeyRoute,
  getApiV2VersionsRoute,
  getApiV2WebhooksIdRoute,
  getApiV2WebhooksRoute,
  patchApiV2AccountIpAllowlistIdRoute,
  patchApiV2AccountIpAllowlistRoute,
  patchApiV2AccountRelayAutoConfigsIdRoute,
  patchApiV2AnnouncementsAnnouncementIdRoute,
  patchApiV2ApplicationsApplicationKeyRoute,
  patchApiV2ApplicationsApplicationKeyVersionsVersionKeyRoute,
  patchApiV2ApprovalRequestsIdRoute,
  patchApiV2ApprovalRequestsProjectsProjectKeySettingsRoute,
  patchApiV2CodeRefsRepositoriesRepoRoute,
  patchApiV2DestinationsProjectKeyEnvironmentKeyIdRoute,
  patchApiV2EngineeringInsightsDeploymentsDeploymentIDRoute,
  patchApiV2EngineeringInsightsInsightsGroupsInsightGroupKeyRoute,
  patchApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyIdRoute,
  patchApiV2FlagsProjectKeyFeatureFlagKeyExpiringTargetsEnvironmentKeyRoute,
  patchApiV2FlagsProjectKeyFeatureFlagKeyExpiringUserTargetsEnvironmentKeyRoute,
  patchApiV2FlagsProjectKeyFeatureFlagKeyRoute,
  patchApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyIdRoute,
  patchApiV2FlagsProjectKeyFlagKeyReleaseRoute,
  patchApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyIntegrationIdRoute,
  patchApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdRoute,
  patchApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdRoute,
  patchApiV2IntegrationConfigurationsIntegrationConfigurationIdRoute,
  patchApiV2IntegrationsIntegrationKeyIdRoute,
  patchApiV2MembersIdRoute,
  patchApiV2MembersRoute,
  patchApiV2MetricsProjectKeyMetricKeyRoute,
  patchApiV2OauthClientsClientIdRoute,
  patchApiV2ProjectsProjectKeyAgentGraphsGraphKeyRoute,
  patchApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyResultsResultIdRoute,
  patchApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRoute,
  patchApiV2ProjectsProjectKeyAiConfigsConfigKeyRoute,
  patchApiV2ProjectsProjectKeyAiConfigsConfigKeyTargetingRoute,
  patchApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsVariationKeyRoute,
  patchApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyRoute,
  patchApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyRoute,
  patchApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyRoute,
  patchApiV2ProjectsProjectKeyAiToolsToolKeyRoute,
  patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDRoute,
  patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsExperimentKeyRoute,
  patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsHoldoutKeyRoute,
  patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyRoute,
  patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyRoute,
  patchApiV2ProjectsProjectKeyFlagDefaultsRoute,
  patchApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdRoute,
  patchApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesIdRoute,
  patchApiV2ProjectsProjectKeyLayersLayerKeyRoute,
  patchApiV2ProjectsProjectKeyMetricGroupsMetricGroupKeyRoute,
  patchApiV2ProjectsProjectKeyRoute,
  patchApiV2ProjectsProjectKeyViewsViewKeyRoute,
  patchApiV2RolesCustomRoleKeyRoute,
  patchApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyRoute,
  patchApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesIdRoute,
  patchApiV2SegmentsProjectKeySegmentKeyExpiringTargetsEnvironmentKeyRoute,
  patchApiV2SegmentsProjectKeySegmentKeyExpiringUserTargetsEnvironmentKeyRoute,
  patchApiV2TeamsRoute,
  patchApiV2TeamsTeamKeyRoute,
  patchApiV2TokensIdRoute,
  patchApiV2UsersProjectKeyUserKeyExpiringUserTargetsEnvironmentKeyRoute,
  patchApiV2WebhooksIdRoute,
  postApiV2AccountIpAllowlistRoute,
  postApiV2AccountRelayAutoConfigsIdResetRoute,
  postApiV2AccountRelayAutoConfigsRoute,
  postApiV2AnnouncementsRoute,
  postApiV2ApprovalRequestsIdApplyRoute,
  postApiV2ApprovalRequestsIdReviewsRoute,
  postApiV2ApprovalRequestsRoute,
  postApiV2AuditlogCountsRoute,
  postApiV2AuditlogRoute,
  postApiV2CodeRefsRepositoriesRepoBranchDeleteTasksRoute,
  postApiV2CodeRefsRepositoriesRepoBranchesBranchExtinctionEventsRoute,
  postApiV2CodeRefsRepositoriesRoute,
  postApiV2DestinationsGenerateWarehouseDestinationKeyPairRoute,
  postApiV2DestinationsProjectKeyEnvironmentKeyRoute,
  postApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyGenerateTrustPolicyRoute,
  postApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyGenerateWarehouseDestinationKeyPairRoute,
  postApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyKindsKindCompleteSetupRoute,
  postApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyKindsKindSetupRoute,
  postApiV2EngineeringInsightsDeploymentEventsRoute,
  postApiV2EngineeringInsightsInsightsGroupRoute,
  postApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyRoute,
  postApiV2FlagsProjectKeyFeatureFlagKeyCopyRoute,
  postApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyRoute,
  postApiV2FlagsProjectKeyRoute,
  postApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyRoute,
  postApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdValidateRoute,
  postApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyRoute,
  postApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdTriggerRoute,
  postApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyRoute,
  postApiV2IntegrationConfigurationsKeysIntegrationKeyRoute,
  postApiV2IntegrationsIntegrationKeyRoute,
  postApiV2MembersIdTeamsRoute,
  postApiV2MembersRoute,
  postApiV2MetricsProjectKeyRoute,
  postApiV2OauthClientsRoute,
  postApiV2ProjectsProjectKeyAgentGraphsRoute,
  postApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyResultsRoute,
  postApiV2ProjectsProjectKeyAgentOptimizationsRoute,
  postApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsRoute,
  postApiV2ProjectsProjectKeyAiConfigsModelConfigsRestrictedRoute,
  postApiV2ProjectsProjectKeyAiConfigsModelConfigsRoute,
  postApiV2ProjectsProjectKeyAiConfigsPromptSnippetsRoute,
  postApiV2ProjectsProjectKeyAiConfigsRoute,
  postApiV2ProjectsProjectKeyAiConfigsSkillsRoute,
  postApiV2ProjectsProjectKeyAiToolsRoute,
  postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersRoute,
  postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDDisableRoute,
  postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDEnableRoute,
  postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyApiKeyRoute,
  postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextsSearchRoute,
  postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsExperimentKeyIterationsRoute,
  postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsRoute,
  postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyFlagsEvaluateRoute,
  postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsRoute,
  postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyMobileKeyRoute,
  postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansRoute,
  postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysRoute,
  postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySegmentsEvaluateRoute,
  postApiV2ProjectsProjectKeyEnvironmentsRoute,
  postApiV2ProjectsProjectKeyFlagReleasePlansRoute,
  postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsFlagCopyRoute,
  postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdApplyRoute,
  postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdReviewsRoute,
  postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsRoute,
  postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesRoute,
  postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsRoute,
  postApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyMigrationSafetyIssuesRoute,
  postApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesRoute,
  postApiV2ProjectsProjectKeyLayersRoute,
  postApiV2ProjectsProjectKeyMetricGroupsRoute,
  postApiV2ProjectsProjectKeyReleasePipelinesRoute,
  postApiV2ProjectsProjectKeyViewsRoute,
  postApiV2ProjectsProjectKeyViewsViewKeyLinkResourceTypeRoute,
  postApiV2ProjectsRoute,
  postApiV2RolesRoute,
  postApiV2SegmentsProjectKeyEnvironmentKeyRoute,
  postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyContextsRoute,
  postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyExportsRoute,
  postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyImportsRoute,
  postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesRoute,
  postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyUsersRoute,
  postApiV2TeamsRoute,
  postApiV2TeamsTeamKeyMembersRoute,
  postApiV2TemplatesRoute,
  postApiV2TokensIdResetRoute,
  postApiV2TokensRoute,
  postApiV2WebhooksRoute,
  putApiV2CodeRefsRepositoriesRepoBranchesBranchRoute,
  putApiV2EngineeringInsightsRepositoriesProjectsRoute,
  putApiV2ProjectsProjectKeyContextKindsKeyRoute,
  putApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextsContextKindContextKeyFlagsFeatureFlagKeyRoute,
  putApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyDefaultReleasePlanRoute,
  putApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansReleasePlanKeyRoute,
  putApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyViewsRoute,
  putApiV2ProjectsProjectKeyExperimentationSettingsRoute,
  putApiV2ProjectsProjectKeyFlagDefaultsRoute,
  putApiV2ProjectsProjectKeyFlagReleasePlansPlanKeyRoute,
  putApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyFollowersMemberIdRoute,
  putApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesReleaseIdStopRoute,
  putApiV2ProjectsProjectKeyFlagsFlagKeyReleasePhasesPhaseIdRoute,
  putApiV2ProjectsProjectKeyFlagsFlagKeyReleaseRoute,
  putApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyRoute,
  putApiV2UsersProjectKeyEnvironmentKeyUserKeyFlagsFeatureFlagKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountRelayAutoConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AccountRelayAutoConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountRelayAutoConfigsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2AccountRelayAutoConfigsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AccountRelayAutoConfigsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AccountRelayAutoConfigsIdResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ApplicationsApplicationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ApplicationsApplicationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ApplicationsApplicationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ApplicationsApplicationKeyVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ApplicationsApplicationKeyVersionsVersionKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ApplicationsApplicationKeyVersionsVersionKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ApprovalRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ApprovalRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ApprovalRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ApprovalRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ApprovalRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ApprovalRequestsIdApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ApprovalRequestsIdReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuditlogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AuditlogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AuditlogCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuditlogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CallerIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CodeRefsExtinctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CodeRefsRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CodeRefsRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CodeRefsRepositoriesRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2CodeRefsRepositoriesRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CodeRefsRepositoriesRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CodeRefsRepositoriesRepoBranchDeleteTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CodeRefsRepositoriesRepoBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CodeRefsRepositoriesRepoBranchesBranchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2CodeRefsRepositoriesRepoBranchesBranchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CodeRefsRepositoriesRepoBranchesBranchExtinctionEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CodeRefsStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CodeRefsStatisticsProjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DestinationsGenerateWarehouseDestinationKeyPairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyGenerateTrustPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyGenerateWarehouseDestinationKeyPairRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyKindsKindCompleteSetupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyKindsKindSetupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DestinationsProjectKeyEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DestinationsProjectKeyEnvironmentKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DestinationsProjectKeyEnvironmentKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DestinationsProjectKeyEnvironmentKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FlagStatusProjectKeyFeatureFlagKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FlagStatusesProjectKeyEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FlagStatusesProjectKeyEnvironmentKeyFeatureFlagKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FlagsProjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2FlagsProjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FlagsProjectKeyEnvironmentKeyFeatureFlagKeyDependentFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FlagsProjectKeyFeatureFlagKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2FlagsProjectKeyFeatureFlagKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2FlagsProjectKeyFeatureFlagKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2FlagsProjectKeyFeatureFlagKeyCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FlagsProjectKeyFeatureFlagKeyDependentFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FlagsProjectKeyFeatureFlagKeyExpiringTargetsEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2FlagsProjectKeyFeatureFlagKeyExpiringTargetsEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FlagsProjectKeyFeatureFlagKeyExpiringUserTargetsEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2FlagsProjectKeyFeatureFlagKeyExpiringUserTargetsEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FlagsProjectKeyFlagKeyReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2FlagsProjectKeyFlagKeyReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2FlagsProjectKeyFlagKeyReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationCapabilitiesBigSegmentStoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyIntegrationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyIntegrationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyIntegrationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV2IntegrationCapabilitiesFeatureStoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdValidateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV2IntegrationCapabilitiesFlagImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdTriggerRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV2IntegrationConfigurationsKeysIntegrationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationConfigurationsKeysIntegrationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationConfigurationsIntegrationConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IntegrationConfigurationsIntegrationConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationConfigurationsIntegrationConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationsIntegrationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationsIntegrationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationsIntegrationKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IntegrationsIntegrationKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationsIntegrationKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2MembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2MembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MembersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2MembersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2MembersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2MembersIdTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MetricsProjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2MetricsProjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MetricsProjectKeyMetricKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2MetricsProjectKeyMetricKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2MetricsProjectKeyMetricKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OauthClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2OauthClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OauthClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OpenapiJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyContextKindsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ProjectsProjectKeyContextKindsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextAttributesAttributeNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextsContextKindContextKeyFlagsFeatureFlagKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextsKindKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsExperimentKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsExperimentKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsExperimentKeyIterationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyFlagsEvaluateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsIdHoldoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsHoldoutKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsHoldoutKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyMobileKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySegmentsEvaluateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyExperimentationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ProjectsProjectKeyExperimentationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyFlagDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyFlagDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ProjectsProjectKeyFlagDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsFlagCopyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdApplyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdReviewsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyFollowersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyFollowersMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyFollowersMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsWorkflowIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsWorkflowIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyMigrationSafetyIssuesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putApiV2ProjectsProjectKeyFlagsFlagKeyReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ProjectsProjectKeyFlagsFlagKeyReleasePhasesPhaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyLayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyLayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyLayersLayerKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyMetricGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyMetricGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyMetricGroupsMetricGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyMetricGroupsMetricGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyMetricGroupsMetricGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyReleasePipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyReleasePipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PublicIpListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RolesCustomRoleKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2RolesCustomRoleKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RolesCustomRoleKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SegmentsProjectKeyEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SegmentsProjectKeyEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyContextsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyContextsContextKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyExportsExportIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyImportsImportIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyUsersUserKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SegmentsProjectKeySegmentKeyExpiringTargetsEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SegmentsProjectKeySegmentKeyExpiringTargetsEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SegmentsProjectKeySegmentKeyExpiringUserTargetsEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SegmentsProjectKeySegmentKeyExpiringUserTargetsEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2TeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TeamsTeamKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2TeamsTeamKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TeamsTeamKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TeamsTeamKeyMaintainersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TeamsTeamKeyMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TeamsTeamKeyRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TemplatesTemplateKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2TokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TokensIdResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageAiRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageClientsideContextsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageClientsideMauRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageDataExportEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageEvaluationsProjectKeyEnvironmentKeyFeatureFlagKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageEventsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageExperimentationEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageExperimentationKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageMauRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageMauBycategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageMauSdksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageObservabilityErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageObservabilityLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageObservabilityMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageObservabilitySessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageObservabilityTracesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageSdkVersionsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageSdkVersionsDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageServersideContextsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageServiceConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageStreamsSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageStreamsSourceBysdkversionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageStreamsSourceSdkversionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageTotalContextsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageTotalMauRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageVegaAiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageWarehouseExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UserSearchProjectKeyEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersProjectKeyEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersProjectKeyEnvironmentKeyUserKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersProjectKeyEnvironmentKeyUserKeyFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersProjectKeyEnvironmentKeyUserKeyFlagsFeatureFlagKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersProjectKeyEnvironmentKeyUserKeyFlagsFeatureFlagKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersProjectKeyUserKeyExpiringUserTargetsEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2UsersProjectKeyUserKeyExpiringUserTargetsEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2VersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2WebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2WebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2WebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageDataExportEventsProjectsRankingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsConfigKeyTargetingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyAiConfigsConfigKeyTargetingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyAiConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyAiConfigsConfigKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsConfigKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyAiConfigsConfigKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsVariationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsVariationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsVariationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsQuickStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsConfigKeyMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsConfigKeyMetricsByVariationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyAiConfigsModelConfigsRestrictedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyAiConfigsModelConfigsRestrictedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsModelConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyAiConfigsModelConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiToolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyAiToolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiToolsToolKeyVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiToolsToolKeyReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyAiToolsToolKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiToolsToolKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyAiToolsToolKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsPromptSnippetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyAiConfigsPromptSnippetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsSkillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyAiConfigsSkillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAgentGraphsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyAgentGraphsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyAgentGraphsGraphKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAgentGraphsGraphKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyAgentGraphsGraphKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAgentOptimizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyAgentOptimizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyAllResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRunsRunIdResultsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyResultsResultIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV2AnnouncementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AnnouncementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AnnouncementsAnnouncementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2AnnouncementsAnnouncementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ApprovalRequestsProjectsProjectKeySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ApprovalRequestsProjectsProjectKeySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyViewsViewKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyViewsViewKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyViewsViewKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyViewsViewKeyLinkResourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyViewsViewKeyLinkResourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyViewsViewKeyLinkedResourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyViewAssociationsResourceTypeResourceKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesReleaseIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesReleaseIdStopRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansReleasePlanKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansReleasePlanKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansReleasePlanKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyDefaultReleasePlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyDefaultReleasePlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyDefaultReleasePlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyFlagReleasePlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyFlagReleasePlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyFlagReleasePlansPlanKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyFlagReleasePlansPlanKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ProjectsProjectKeyFlagReleasePlansPlanKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountIpAllowlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2AccountIpAllowlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AccountIpAllowlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AccountIpAllowlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2AccountIpAllowlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeySdkKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDEnableRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDDisableRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV2EngineeringInsightsChartsDeploymentsFrequencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EngineeringInsightsChartsFlagsStaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EngineeringInsightsChartsFlagsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EngineeringInsightsChartsLeadTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EngineeringInsightsChartsReleasesFrequencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2EngineeringInsightsDeploymentEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EngineeringInsightsDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EngineeringInsightsDeploymentsDeploymentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2EngineeringInsightsDeploymentsDeploymentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EngineeringInsightsFlagEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2EngineeringInsightsInsightsGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EngineeringInsightsInsightsGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EngineeringInsightsInsightsGroupsInsightGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2EngineeringInsightsInsightsGroupsInsightGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2EngineeringInsightsInsightsGroupsInsightGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EngineeringInsightsInsightsScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EngineeringInsightsPullRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EngineeringInsightsRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2EngineeringInsightsRepositoriesProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2EngineeringInsightsRepositoriesRepositoryKeyProjectsProjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
