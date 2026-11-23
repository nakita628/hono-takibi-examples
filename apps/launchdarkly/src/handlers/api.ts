import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const getApiV2RouteHandler: RouteHandler<typeof getApiV2Route> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AccountRelayAutoConfigsRouteHandler: RouteHandler<
  typeof getApiV2AccountRelayAutoConfigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2AccountRelayAutoConfigsRouteHandler: RouteHandler<
  typeof postApiV2AccountRelayAutoConfigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AccountRelayAutoConfigsIdRouteHandler: RouteHandler<
  typeof getApiV2AccountRelayAutoConfigsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2AccountRelayAutoConfigsIdRouteHandler: RouteHandler<
  typeof patchApiV2AccountRelayAutoConfigsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2AccountRelayAutoConfigsIdRouteHandler: RouteHandler<
  typeof deleteApiV2AccountRelayAutoConfigsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2AccountRelayAutoConfigsIdResetRouteHandler: RouteHandler<
  typeof postApiV2AccountRelayAutoConfigsIdResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ApplicationsRouteHandler: RouteHandler<
  typeof getApiV2ApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ApplicationsApplicationKeyRouteHandler: RouteHandler<
  typeof getApiV2ApplicationsApplicationKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ApplicationsApplicationKeyRouteHandler: RouteHandler<
  typeof patchApiV2ApplicationsApplicationKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ApplicationsApplicationKeyRouteHandler: RouteHandler<
  typeof deleteApiV2ApplicationsApplicationKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ApplicationsApplicationKeyVersionsRouteHandler: RouteHandler<
  typeof getApiV2ApplicationsApplicationKeyVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ApplicationsApplicationKeyVersionsVersionKeyRouteHandler: RouteHandler<
  typeof patchApiV2ApplicationsApplicationKeyVersionsVersionKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ApplicationsApplicationKeyVersionsVersionKeyRouteHandler: RouteHandler<
  typeof deleteApiV2ApplicationsApplicationKeyVersionsVersionKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ApprovalRequestsRouteHandler: RouteHandler<
  typeof getApiV2ApprovalRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ApprovalRequestsRouteHandler: RouteHandler<
  typeof postApiV2ApprovalRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ApprovalRequestsIdRouteHandler: RouteHandler<
  typeof getApiV2ApprovalRequestsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ApprovalRequestsIdRouteHandler: RouteHandler<
  typeof patchApiV2ApprovalRequestsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ApprovalRequestsIdRouteHandler: RouteHandler<
  typeof deleteApiV2ApprovalRequestsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ApprovalRequestsIdApplyRouteHandler: RouteHandler<
  typeof postApiV2ApprovalRequestsIdApplyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ApprovalRequestsIdReviewsRouteHandler: RouteHandler<
  typeof postApiV2ApprovalRequestsIdReviewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AuditlogRouteHandler: RouteHandler<typeof getApiV2AuditlogRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV2AuditlogRouteHandler: RouteHandler<typeof postApiV2AuditlogRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV2AuditlogCountsRouteHandler: RouteHandler<
  typeof postApiV2AuditlogCountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AuditlogIdRouteHandler: RouteHandler<typeof getApiV2AuditlogIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2CallerIdentityRouteHandler: RouteHandler<
  typeof getApiV2CallerIdentityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CodeRefsExtinctionsRouteHandler: RouteHandler<
  typeof getApiV2CodeRefsExtinctionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CodeRefsRepositoriesRouteHandler: RouteHandler<
  typeof getApiV2CodeRefsRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2CodeRefsRepositoriesRouteHandler: RouteHandler<
  typeof postApiV2CodeRefsRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CodeRefsRepositoriesRepoRouteHandler: RouteHandler<
  typeof getApiV2CodeRefsRepositoriesRepoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2CodeRefsRepositoriesRepoRouteHandler: RouteHandler<
  typeof patchApiV2CodeRefsRepositoriesRepoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2CodeRefsRepositoriesRepoRouteHandler: RouteHandler<
  typeof deleteApiV2CodeRefsRepositoriesRepoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2CodeRefsRepositoriesRepoBranchDeleteTasksRouteHandler: RouteHandler<
  typeof postApiV2CodeRefsRepositoriesRepoBranchDeleteTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CodeRefsRepositoriesRepoBranchesRouteHandler: RouteHandler<
  typeof getApiV2CodeRefsRepositoriesRepoBranchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CodeRefsRepositoriesRepoBranchesBranchRouteHandler: RouteHandler<
  typeof getApiV2CodeRefsRepositoriesRepoBranchesBranchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2CodeRefsRepositoriesRepoBranchesBranchRouteHandler: RouteHandler<
  typeof putApiV2CodeRefsRepositoriesRepoBranchesBranchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2CodeRefsRepositoriesRepoBranchesBranchExtinctionEventsRouteHandler: RouteHandler<
  typeof postApiV2CodeRefsRepositoriesRepoBranchesBranchExtinctionEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CodeRefsStatisticsRouteHandler: RouteHandler<
  typeof getApiV2CodeRefsStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CodeRefsStatisticsProjectKeyRouteHandler: RouteHandler<
  typeof getApiV2CodeRefsStatisticsProjectKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DestinationsRouteHandler: RouteHandler<
  typeof getApiV2DestinationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2DestinationsGenerateWarehouseDestinationKeyPairRouteHandler: RouteHandler<
  typeof postApiV2DestinationsGenerateWarehouseDestinationKeyPairRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyGenerateTrustPolicyRouteHandler: RouteHandler<
  typeof postApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyGenerateTrustPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyGenerateWarehouseDestinationKeyPairRouteHandler: RouteHandler<
  typeof postApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyGenerateWarehouseDestinationKeyPairRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyKindsKindCompleteSetupRouteHandler: RouteHandler<
  typeof postApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyKindsKindCompleteSetupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyKindsKindSetupRouteHandler: RouteHandler<
  typeof postApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyKindsKindSetupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2DestinationsProjectKeyEnvironmentKeyRouteHandler: RouteHandler<
  typeof postApiV2DestinationsProjectKeyEnvironmentKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DestinationsProjectKeyEnvironmentKeyIdRouteHandler: RouteHandler<
  typeof getApiV2DestinationsProjectKeyEnvironmentKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2DestinationsProjectKeyEnvironmentKeyIdRouteHandler: RouteHandler<
  typeof patchApiV2DestinationsProjectKeyEnvironmentKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2DestinationsProjectKeyEnvironmentKeyIdRouteHandler: RouteHandler<
  typeof deleteApiV2DestinationsProjectKeyEnvironmentKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyRouteHandler: RouteHandler<
  typeof getApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyRouteHandler: RouteHandler<
  typeof postApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyIdRouteHandler: RouteHandler<
  typeof patchApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyIdRouteHandler: RouteHandler<
  typeof deleteApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2FlagStatusProjectKeyFeatureFlagKeyRouteHandler: RouteHandler<
  typeof getApiV2FlagStatusProjectKeyFeatureFlagKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2FlagStatusesProjectKeyEnvironmentKeyRouteHandler: RouteHandler<
  typeof getApiV2FlagStatusesProjectKeyEnvironmentKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2FlagStatusesProjectKeyEnvironmentKeyFeatureFlagKeyRouteHandler: RouteHandler<
  typeof getApiV2FlagStatusesProjectKeyEnvironmentKeyFeatureFlagKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2FlagsProjectKeyRouteHandler: RouteHandler<
  typeof getApiV2FlagsProjectKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2FlagsProjectKeyRouteHandler: RouteHandler<
  typeof postApiV2FlagsProjectKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2FlagsProjectKeyEnvironmentKeyFeatureFlagKeyDependentFlagsRouteHandler: RouteHandler<
  typeof getApiV2FlagsProjectKeyEnvironmentKeyFeatureFlagKeyDependentFlagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2FlagsProjectKeyFeatureFlagKeyRouteHandler: RouteHandler<
  typeof getApiV2FlagsProjectKeyFeatureFlagKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2FlagsProjectKeyFeatureFlagKeyRouteHandler: RouteHandler<
  typeof patchApiV2FlagsProjectKeyFeatureFlagKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2FlagsProjectKeyFeatureFlagKeyRouteHandler: RouteHandler<
  typeof deleteApiV2FlagsProjectKeyFeatureFlagKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2FlagsProjectKeyFeatureFlagKeyCopyRouteHandler: RouteHandler<
  typeof postApiV2FlagsProjectKeyFeatureFlagKeyCopyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2FlagsProjectKeyFeatureFlagKeyDependentFlagsRouteHandler: RouteHandler<
  typeof getApiV2FlagsProjectKeyFeatureFlagKeyDependentFlagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2FlagsProjectKeyFeatureFlagKeyExpiringTargetsEnvironmentKeyRouteHandler: RouteHandler<
  typeof getApiV2FlagsProjectKeyFeatureFlagKeyExpiringTargetsEnvironmentKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2FlagsProjectKeyFeatureFlagKeyExpiringTargetsEnvironmentKeyRouteHandler: RouteHandler<
  typeof patchApiV2FlagsProjectKeyFeatureFlagKeyExpiringTargetsEnvironmentKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2FlagsProjectKeyFeatureFlagKeyExpiringUserTargetsEnvironmentKeyRouteHandler: RouteHandler<
  typeof getApiV2FlagsProjectKeyFeatureFlagKeyExpiringUserTargetsEnvironmentKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2FlagsProjectKeyFeatureFlagKeyExpiringUserTargetsEnvironmentKeyRouteHandler: RouteHandler<
  typeof patchApiV2FlagsProjectKeyFeatureFlagKeyExpiringUserTargetsEnvironmentKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyRouteHandler: RouteHandler<
  typeof getApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyRouteHandler: RouteHandler<
  typeof postApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyIdRouteHandler: RouteHandler<
  typeof getApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyIdRouteHandler: RouteHandler<
  typeof patchApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyIdRouteHandler: RouteHandler<
  typeof deleteApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2FlagsProjectKeyFlagKeyReleaseRouteHandler: RouteHandler<
  typeof getApiV2FlagsProjectKeyFlagKeyReleaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2FlagsProjectKeyFlagKeyReleaseRouteHandler: RouteHandler<
  typeof patchApiV2FlagsProjectKeyFlagKeyReleaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2FlagsProjectKeyFlagKeyReleaseRouteHandler: RouteHandler<
  typeof deleteApiV2FlagsProjectKeyFlagKeyReleaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2IntegrationCapabilitiesBigSegmentStoreRouteHandler: RouteHandler<
  typeof getApiV2IntegrationCapabilitiesBigSegmentStoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyRouteHandler: RouteHandler<
  typeof postApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyIntegrationIdRouteHandler: RouteHandler<
  typeof getApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyIntegrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyIntegrationIdRouteHandler: RouteHandler<
  typeof patchApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyIntegrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyIntegrationIdRouteHandler: RouteHandler<
  typeof deleteApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyIntegrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2IntegrationCapabilitiesFeatureStoreRouteHandler: RouteHandler<
  typeof getApiV2IntegrationCapabilitiesFeatureStoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyRouteHandler: RouteHandler<
  typeof getApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyRouteHandler: RouteHandler<
  typeof postApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdRouteHandler: RouteHandler<
  typeof getApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdRouteHandler: RouteHandler<
  typeof patchApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdRouteHandler: RouteHandler<
  typeof deleteApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdValidateRouteHandler: RouteHandler<
  typeof postApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2IntegrationCapabilitiesFlagImportRouteHandler: RouteHandler<
  typeof getApiV2IntegrationCapabilitiesFlagImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyRouteHandler: RouteHandler<
  typeof postApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdRouteHandler: RouteHandler<
  typeof getApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdRouteHandler: RouteHandler<
  typeof patchApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdRouteHandler: RouteHandler<
  typeof deleteApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdTriggerRouteHandler: RouteHandler<
  typeof postApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdTriggerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2IntegrationConfigurationsKeysIntegrationKeyRouteHandler: RouteHandler<
  typeof getApiV2IntegrationConfigurationsKeysIntegrationKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2IntegrationConfigurationsKeysIntegrationKeyRouteHandler: RouteHandler<
  typeof postApiV2IntegrationConfigurationsKeysIntegrationKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2IntegrationConfigurationsIntegrationConfigurationIdRouteHandler: RouteHandler<
  typeof getApiV2IntegrationConfigurationsIntegrationConfigurationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2IntegrationConfigurationsIntegrationConfigurationIdRouteHandler: RouteHandler<
  typeof patchApiV2IntegrationConfigurationsIntegrationConfigurationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2IntegrationConfigurationsIntegrationConfigurationIdRouteHandler: RouteHandler<
  typeof deleteApiV2IntegrationConfigurationsIntegrationConfigurationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2IntegrationsIntegrationKeyRouteHandler: RouteHandler<
  typeof getApiV2IntegrationsIntegrationKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2IntegrationsIntegrationKeyRouteHandler: RouteHandler<
  typeof postApiV2IntegrationsIntegrationKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2IntegrationsIntegrationKeyIdRouteHandler: RouteHandler<
  typeof getApiV2IntegrationsIntegrationKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2IntegrationsIntegrationKeyIdRouteHandler: RouteHandler<
  typeof patchApiV2IntegrationsIntegrationKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2IntegrationsIntegrationKeyIdRouteHandler: RouteHandler<
  typeof deleteApiV2IntegrationsIntegrationKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2MembersRouteHandler: RouteHandler<typeof getApiV2MembersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2MembersRouteHandler: RouteHandler<typeof postApiV2MembersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchApiV2MembersRouteHandler: RouteHandler<typeof patchApiV2MembersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2MembersIdRouteHandler: RouteHandler<typeof getApiV2MembersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchApiV2MembersIdRouteHandler: RouteHandler<
  typeof patchApiV2MembersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2MembersIdRouteHandler: RouteHandler<
  typeof deleteApiV2MembersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2MembersIdTeamsRouteHandler: RouteHandler<
  typeof postApiV2MembersIdTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2MetricsProjectKeyRouteHandler: RouteHandler<
  typeof getApiV2MetricsProjectKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2MetricsProjectKeyRouteHandler: RouteHandler<
  typeof postApiV2MetricsProjectKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2MetricsProjectKeyMetricKeyRouteHandler: RouteHandler<
  typeof getApiV2MetricsProjectKeyMetricKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2MetricsProjectKeyMetricKeyRouteHandler: RouteHandler<
  typeof patchApiV2MetricsProjectKeyMetricKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2MetricsProjectKeyMetricKeyRouteHandler: RouteHandler<
  typeof deleteApiV2MetricsProjectKeyMetricKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OauthClientsRouteHandler: RouteHandler<
  typeof getApiV2OauthClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2OauthClientsRouteHandler: RouteHandler<
  typeof postApiV2OauthClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OauthClientsClientIdRouteHandler: RouteHandler<
  typeof getApiV2OauthClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2OauthClientsClientIdRouteHandler: RouteHandler<
  typeof patchApiV2OauthClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2OauthClientsClientIdRouteHandler: RouteHandler<
  typeof deleteApiV2OauthClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OpenapiJsonRouteHandler: RouteHandler<
  typeof getApiV2OpenapiJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsRouteHandler: RouteHandler<typeof getApiV2ProjectsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsRouteHandler: RouteHandler<typeof postApiV2ProjectsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ProjectsProjectKeyRouteHandler: RouteHandler<
  typeof patchApiV2ProjectsProjectKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ProjectsProjectKeyRouteHandler: RouteHandler<
  typeof deleteApiV2ProjectsProjectKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyContextKindsRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyContextKindsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ProjectsProjectKeyContextKindsKeyRouteHandler: RouteHandler<
  typeof putApiV2ProjectsProjectKeyContextKindsKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyEnvironmentsRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyEnvironmentsRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyRouteHandler: RouteHandler<
  typeof patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyRouteHandler: RouteHandler<
  typeof deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyApiKeyRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyApiKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextAttributesRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextAttributesAttributeNameRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextAttributesAttributeNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextsSearchRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextsContextKindContextKeyFlagsFeatureFlagKeyRouteHandler: RouteHandler<
  typeof putApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextsContextKindContextKeyFlagsFeatureFlagKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextsKindKeyRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextsKindKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsExperimentKeyRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsExperimentKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsExperimentKeyRouteHandler: RouteHandler<
  typeof patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsExperimentKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsExperimentKeyIterationsRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsExperimentKeyIterationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyFlagsEvaluateRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyFlagsEvaluateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyFollowersRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyFollowersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsIdHoldoutIdRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsIdHoldoutIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsHoldoutKeyRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsHoldoutKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsHoldoutKeyRouteHandler: RouteHandler<
  typeof patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsHoldoutKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyMobileKeyRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyMobileKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySegmentsEvaluateRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySegmentsEvaluateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyExperimentationSettingsRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyExperimentationSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ProjectsProjectKeyExperimentationSettingsRouteHandler: RouteHandler<
  typeof putApiV2ProjectsProjectKeyExperimentationSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyExperimentsRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyExperimentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyFlagDefaultsRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyFlagDefaultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ProjectsProjectKeyFlagDefaultsRouteHandler: RouteHandler<
  typeof patchApiV2ProjectsProjectKeyFlagDefaultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ProjectsProjectKeyFlagDefaultsRouteHandler: RouteHandler<
  typeof putApiV2ProjectsProjectKeyFlagDefaultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsFlagCopyRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsFlagCopyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdRouteHandler: RouteHandler<
  typeof patchApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdRouteHandler: RouteHandler<
  typeof deleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdApplyRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdApplyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdReviewsRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdReviewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyFollowersRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyFollowersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyFollowersMemberIdRouteHandler: RouteHandler<
  typeof putApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyFollowersMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyFollowersMemberIdRouteHandler: RouteHandler<
  typeof deleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyFollowersMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesIdRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesIdRouteHandler: RouteHandler<
  typeof patchApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesIdRouteHandler: RouteHandler<
  typeof deleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsWorkflowIdRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsWorkflowIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsWorkflowIdRouteHandler: RouteHandler<
  typeof deleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsWorkflowIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyMigrationSafetyIssuesRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyMigrationSafetyIssuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ProjectsProjectKeyFlagsFlagKeyReleaseRouteHandler: RouteHandler<
  typeof putApiV2ProjectsProjectKeyFlagsFlagKeyReleaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ProjectsProjectKeyFlagsFlagKeyReleasePhasesPhaseIdRouteHandler: RouteHandler<
  typeof putApiV2ProjectsProjectKeyFlagsFlagKeyReleasePhasesPhaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyLayersRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyLayersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyLayersRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyLayersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ProjectsProjectKeyLayersLayerKeyRouteHandler: RouteHandler<
  typeof patchApiV2ProjectsProjectKeyLayersLayerKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyMetricGroupsRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyMetricGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyMetricGroupsRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyMetricGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyMetricGroupsMetricGroupKeyRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyMetricGroupsMetricGroupKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ProjectsProjectKeyMetricGroupsMetricGroupKeyRouteHandler: RouteHandler<
  typeof patchApiV2ProjectsProjectKeyMetricGroupsMetricGroupKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ProjectsProjectKeyMetricGroupsMetricGroupKeyRouteHandler: RouteHandler<
  typeof deleteApiV2ProjectsProjectKeyMetricGroupsMetricGroupKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyReleasePipelinesRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyReleasePipelinesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyReleasePipelinesRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyReleasePipelinesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyRouteHandler: RouteHandler<
  typeof putApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyRouteHandler: RouteHandler<
  typeof deleteApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyReleasesRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyReleasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2PublicIpListRouteHandler: RouteHandler<
  typeof getApiV2PublicIpListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2RolesRouteHandler: RouteHandler<typeof getApiV2RolesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2RolesRouteHandler: RouteHandler<typeof postApiV2RolesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2RolesCustomRoleKeyRouteHandler: RouteHandler<
  typeof getApiV2RolesCustomRoleKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2RolesCustomRoleKeyRouteHandler: RouteHandler<
  typeof patchApiV2RolesCustomRoleKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2RolesCustomRoleKeyRouteHandler: RouteHandler<
  typeof deleteApiV2RolesCustomRoleKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2SegmentsProjectKeyEnvironmentKeyRouteHandler: RouteHandler<
  typeof getApiV2SegmentsProjectKeyEnvironmentKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2SegmentsProjectKeyEnvironmentKeyRouteHandler: RouteHandler<
  typeof postApiV2SegmentsProjectKeyEnvironmentKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyRouteHandler: RouteHandler<
  typeof getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyRouteHandler: RouteHandler<
  typeof patchApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyRouteHandler: RouteHandler<
  typeof deleteApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyContextsRouteHandler: RouteHandler<
  typeof postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyContextsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyContextsContextKeyRouteHandler: RouteHandler<
  typeof getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyContextsContextKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyExportsRouteHandler: RouteHandler<
  typeof postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyExportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyExportsExportIDRouteHandler: RouteHandler<
  typeof getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyExportsExportIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyImportsRouteHandler: RouteHandler<
  typeof postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyImportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyImportsImportIDRouteHandler: RouteHandler<
  typeof getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyImportsImportIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyUsersRouteHandler: RouteHandler<
  typeof postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyUsersUserKeyRouteHandler: RouteHandler<
  typeof getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyUsersUserKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2SegmentsProjectKeySegmentKeyExpiringTargetsEnvironmentKeyRouteHandler: RouteHandler<
  typeof getApiV2SegmentsProjectKeySegmentKeyExpiringTargetsEnvironmentKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2SegmentsProjectKeySegmentKeyExpiringTargetsEnvironmentKeyRouteHandler: RouteHandler<
  typeof patchApiV2SegmentsProjectKeySegmentKeyExpiringTargetsEnvironmentKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2SegmentsProjectKeySegmentKeyExpiringUserTargetsEnvironmentKeyRouteHandler: RouteHandler<
  typeof getApiV2SegmentsProjectKeySegmentKeyExpiringUserTargetsEnvironmentKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2SegmentsProjectKeySegmentKeyExpiringUserTargetsEnvironmentKeyRouteHandler: RouteHandler<
  typeof patchApiV2SegmentsProjectKeySegmentKeyExpiringUserTargetsEnvironmentKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TeamsRouteHandler: RouteHandler<typeof getApiV2TeamsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2TeamsRouteHandler: RouteHandler<typeof postApiV2TeamsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2TeamsRouteHandler: RouteHandler<typeof patchApiV2TeamsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TeamsTeamKeyRouteHandler: RouteHandler<
  typeof getApiV2TeamsTeamKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2TeamsTeamKeyRouteHandler: RouteHandler<
  typeof patchApiV2TeamsTeamKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2TeamsTeamKeyRouteHandler: RouteHandler<
  typeof deleteApiV2TeamsTeamKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TeamsTeamKeyMaintainersRouteHandler: RouteHandler<
  typeof getApiV2TeamsTeamKeyMaintainersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2TeamsTeamKeyMembersRouteHandler: RouteHandler<
  typeof postApiV2TeamsTeamKeyMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TeamsTeamKeyRolesRouteHandler: RouteHandler<
  typeof getApiV2TeamsTeamKeyRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TemplatesRouteHandler: RouteHandler<typeof getApiV2TemplatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV2TemplatesRouteHandler: RouteHandler<typeof postApiV2TemplatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiV2TemplatesTemplateKeyRouteHandler: RouteHandler<
  typeof deleteApiV2TemplatesTemplateKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TokensRouteHandler: RouteHandler<typeof getApiV2TokensRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2TokensRouteHandler: RouteHandler<typeof postApiV2TokensRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TokensIdRouteHandler: RouteHandler<typeof getApiV2TokensIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchApiV2TokensIdRouteHandler: RouteHandler<typeof patchApiV2TokensIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiV2TokensIdRouteHandler: RouteHandler<
  typeof deleteApiV2TokensIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2TokensIdResetRouteHandler: RouteHandler<
  typeof postApiV2TokensIdResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsageAiRunsRouteHandler: RouteHandler<
  typeof getApiV2UsageAiRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsageClientsideContextsRouteHandler: RouteHandler<
  typeof getApiV2UsageClientsideContextsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsageClientsideMauRouteHandler: RouteHandler<
  typeof getApiV2UsageClientsideMauRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsageDataExportEventsRouteHandler: RouteHandler<
  typeof getApiV2UsageDataExportEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsageEvaluationsProjectKeyEnvironmentKeyFeatureFlagKeyRouteHandler: RouteHandler<
  typeof getApiV2UsageEvaluationsProjectKeyEnvironmentKeyFeatureFlagKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsageEventsTypeRouteHandler: RouteHandler<
  typeof getApiV2UsageEventsTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsageExperimentationEventsRouteHandler: RouteHandler<
  typeof getApiV2UsageExperimentationEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsageExperimentationKeysRouteHandler: RouteHandler<
  typeof getApiV2UsageExperimentationKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsageMauRouteHandler: RouteHandler<typeof getApiV2UsageMauRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2UsageMauBycategoryRouteHandler: RouteHandler<
  typeof getApiV2UsageMauBycategoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsageMauSdksRouteHandler: RouteHandler<
  typeof getApiV2UsageMauSdksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsageObservabilityErrorsRouteHandler: RouteHandler<
  typeof getApiV2UsageObservabilityErrorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsageObservabilityLogsRouteHandler: RouteHandler<
  typeof getApiV2UsageObservabilityLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsageObservabilityMetricsRouteHandler: RouteHandler<
  typeof getApiV2UsageObservabilityMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsageObservabilitySessionsRouteHandler: RouteHandler<
  typeof getApiV2UsageObservabilitySessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsageObservabilityTracesRouteHandler: RouteHandler<
  typeof getApiV2UsageObservabilityTracesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsageSdkVersionsAllRouteHandler: RouteHandler<
  typeof getApiV2UsageSdkVersionsAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsageSdkVersionsDetailsRouteHandler: RouteHandler<
  typeof getApiV2UsageSdkVersionsDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsageServersideContextsRouteHandler: RouteHandler<
  typeof getApiV2UsageServersideContextsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsageServiceConnectionsRouteHandler: RouteHandler<
  typeof getApiV2UsageServiceConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsageStreamsSourceRouteHandler: RouteHandler<
  typeof getApiV2UsageStreamsSourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsageStreamsSourceBysdkversionRouteHandler: RouteHandler<
  typeof getApiV2UsageStreamsSourceBysdkversionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsageStreamsSourceSdkversionsRouteHandler: RouteHandler<
  typeof getApiV2UsageStreamsSourceSdkversionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsageTotalContextsRouteHandler: RouteHandler<
  typeof getApiV2UsageTotalContextsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsageTotalMauRouteHandler: RouteHandler<
  typeof getApiV2UsageTotalMauRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsageVegaAiRouteHandler: RouteHandler<
  typeof getApiV2UsageVegaAiRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsageWarehouseExportRouteHandler: RouteHandler<
  typeof getApiV2UsageWarehouseExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UserSearchProjectKeyEnvironmentKeyRouteHandler: RouteHandler<
  typeof getApiV2UserSearchProjectKeyEnvironmentKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersProjectKeyEnvironmentKeyRouteHandler: RouteHandler<
  typeof getApiV2UsersProjectKeyEnvironmentKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersProjectKeyEnvironmentKeyUserKeyRouteHandler: RouteHandler<
  typeof getApiV2UsersProjectKeyEnvironmentKeyUserKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersProjectKeyEnvironmentKeyUserKeyFlagsRouteHandler: RouteHandler<
  typeof getApiV2UsersProjectKeyEnvironmentKeyUserKeyFlagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersProjectKeyEnvironmentKeyUserKeyFlagsFeatureFlagKeyRouteHandler: RouteHandler<
  typeof getApiV2UsersProjectKeyEnvironmentKeyUserKeyFlagsFeatureFlagKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2UsersProjectKeyEnvironmentKeyUserKeyFlagsFeatureFlagKeyRouteHandler: RouteHandler<
  typeof putApiV2UsersProjectKeyEnvironmentKeyUserKeyFlagsFeatureFlagKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersProjectKeyUserKeyExpiringUserTargetsEnvironmentKeyRouteHandler: RouteHandler<
  typeof getApiV2UsersProjectKeyUserKeyExpiringUserTargetsEnvironmentKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2UsersProjectKeyUserKeyExpiringUserTargetsEnvironmentKeyRouteHandler: RouteHandler<
  typeof patchApiV2UsersProjectKeyUserKeyExpiringUserTargetsEnvironmentKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2VersionsRouteHandler: RouteHandler<typeof getApiV2VersionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2WebhooksRouteHandler: RouteHandler<typeof getApiV2WebhooksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV2WebhooksRouteHandler: RouteHandler<typeof postApiV2WebhooksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2WebhooksIdRouteHandler: RouteHandler<typeof getApiV2WebhooksIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchApiV2WebhooksIdRouteHandler: RouteHandler<
  typeof patchApiV2WebhooksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2WebhooksIdRouteHandler: RouteHandler<
  typeof deleteApiV2WebhooksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TagsRouteHandler: RouteHandler<typeof getApiV2TagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsageDataExportEventsProjectsRankingRouteHandler: RouteHandler<
  typeof getApiV2UsageDataExportEventsProjectsRankingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyAiConfigsConfigKeyTargetingRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyAiConfigsConfigKeyTargetingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ProjectsProjectKeyAiConfigsConfigKeyTargetingRouteHandler: RouteHandler<
  typeof patchApiV2ProjectsProjectKeyAiConfigsConfigKeyTargetingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyAiConfigsRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyAiConfigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyAiConfigsRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyAiConfigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ProjectsProjectKeyAiConfigsConfigKeyRouteHandler: RouteHandler<
  typeof deleteApiV2ProjectsProjectKeyAiConfigsConfigKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyAiConfigsConfigKeyRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyAiConfigsConfigKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ProjectsProjectKeyAiConfigsConfigKeyRouteHandler: RouteHandler<
  typeof patchApiV2ProjectsProjectKeyAiConfigsConfigKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsVariationKeyRouteHandler: RouteHandler<
  typeof deleteApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsVariationKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsVariationKeyRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsVariationKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsVariationKeyRouteHandler: RouteHandler<
  typeof patchApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsVariationKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyAiConfigsQuickStatsRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyAiConfigsQuickStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyAiConfigsConfigKeyMetricsRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyAiConfigsConfigKeyMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyAiConfigsConfigKeyMetricsByVariationRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyAiConfigsConfigKeyMetricsByVariationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ProjectsProjectKeyAiConfigsModelConfigsRestrictedRouteHandler: RouteHandler<
  typeof deleteApiV2ProjectsProjectKeyAiConfigsModelConfigsRestrictedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyAiConfigsModelConfigsRestrictedRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyAiConfigsModelConfigsRestrictedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyAiConfigsModelConfigsRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyAiConfigsModelConfigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyAiConfigsModelConfigsRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyAiConfigsModelConfigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyRouteHandler: RouteHandler<
  typeof deleteApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyRouteHandler: RouteHandler<
  typeof patchApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyVersionsRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyAiToolsRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyAiToolsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyAiToolsRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyAiToolsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyAiToolsToolKeyVersionsRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyAiToolsToolKeyVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyAiToolsToolKeyReferencesRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyAiToolsToolKeyReferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ProjectsProjectKeyAiToolsToolKeyRouteHandler: RouteHandler<
  typeof deleteApiV2ProjectsProjectKeyAiToolsToolKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyAiToolsToolKeyRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyAiToolsToolKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ProjectsProjectKeyAiToolsToolKeyRouteHandler: RouteHandler<
  typeof patchApiV2ProjectsProjectKeyAiToolsToolKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyAiConfigsPromptSnippetsRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyAiConfigsPromptSnippetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyAiConfigsPromptSnippetsRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyAiConfigsPromptSnippetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyRouteHandler: RouteHandler<
  typeof deleteApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyRouteHandler: RouteHandler<
  typeof patchApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyReferencesRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyReferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyVersionsRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyAiConfigsSkillsRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyAiConfigsSkillsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyAiConfigsSkillsRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyAiConfigsSkillsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyRouteHandler: RouteHandler<
  typeof deleteApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyRouteHandler: RouteHandler<
  typeof patchApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyReferencesRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyReferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyVersionsRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyAgentGraphsRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyAgentGraphsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyAgentGraphsRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyAgentGraphsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ProjectsProjectKeyAgentGraphsGraphKeyRouteHandler: RouteHandler<
  typeof deleteApiV2ProjectsProjectKeyAgentGraphsGraphKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyAgentGraphsGraphKeyRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyAgentGraphsGraphKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ProjectsProjectKeyAgentGraphsGraphKeyRouteHandler: RouteHandler<
  typeof patchApiV2ProjectsProjectKeyAgentGraphsGraphKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyAgentOptimizationsRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyAgentOptimizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyAgentOptimizationsRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyAgentOptimizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRouteHandler: RouteHandler<
  typeof deleteApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRouteHandler: RouteHandler<
  typeof patchApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyResultsRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyResultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyResultsRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyResultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyAllResultsRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyAllResultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRunsRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRunsRunIdRouteHandler: RouteHandler<
  typeof deleteApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRunsRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRunsRunIdResultsRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRunsRunIdResultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyResultsResultIdRouteHandler: RouteHandler<
  typeof patchApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyResultsResultIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AnnouncementsRouteHandler: RouteHandler<
  typeof getApiV2AnnouncementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2AnnouncementsRouteHandler: RouteHandler<
  typeof postApiV2AnnouncementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2AnnouncementsAnnouncementIdRouteHandler: RouteHandler<
  typeof deleteApiV2AnnouncementsAnnouncementIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2AnnouncementsAnnouncementIdRouteHandler: RouteHandler<
  typeof patchApiV2AnnouncementsAnnouncementIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ApprovalRequestsProjectsProjectKeySettingsRouteHandler: RouteHandler<
  typeof getApiV2ApprovalRequestsProjectsProjectKeySettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ApprovalRequestsProjectsProjectKeySettingsRouteHandler: RouteHandler<
  typeof patchApiV2ApprovalRequestsProjectsProjectKeySettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyViewsRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyViewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyViewsRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyViewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ProjectsProjectKeyViewsViewKeyRouteHandler: RouteHandler<
  typeof deleteApiV2ProjectsProjectKeyViewsViewKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyViewsViewKeyRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyViewsViewKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ProjectsProjectKeyViewsViewKeyRouteHandler: RouteHandler<
  typeof patchApiV2ProjectsProjectKeyViewsViewKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ProjectsProjectKeyViewsViewKeyLinkResourceTypeRouteHandler: RouteHandler<
  typeof deleteApiV2ProjectsProjectKeyViewsViewKeyLinkResourceTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyViewsViewKeyLinkResourceTypeRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyViewsViewKeyLinkResourceTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyViewsViewKeyLinkedResourceTypeRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyViewsViewKeyLinkedResourceTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyViewAssociationsResourceTypeResourceKeyRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyViewAssociationsResourceTypeResourceKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesReleaseIdRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesReleaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesReleaseIdStopRouteHandler: RouteHandler<
  typeof putApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesReleaseIdStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansReleasePlanKeyRouteHandler: RouteHandler<
  typeof deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansReleasePlanKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansReleasePlanKeyRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansReleasePlanKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansReleasePlanKeyRouteHandler: RouteHandler<
  typeof putApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansReleasePlanKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyDefaultReleasePlanRouteHandler: RouteHandler<
  typeof deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyDefaultReleasePlanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyDefaultReleasePlanRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyDefaultReleasePlanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyDefaultReleasePlanRouteHandler: RouteHandler<
  typeof putApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyDefaultReleasePlanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyFlagReleasePlansRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyFlagReleasePlansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyFlagReleasePlansRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyFlagReleasePlansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ProjectsProjectKeyFlagReleasePlansPlanKeyRouteHandler: RouteHandler<
  typeof deleteApiV2ProjectsProjectKeyFlagReleasePlansPlanKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyFlagReleasePlansPlanKeyRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyFlagReleasePlansPlanKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ProjectsProjectKeyFlagReleasePlansPlanKeyRouteHandler: RouteHandler<
  typeof putApiV2ProjectsProjectKeyFlagReleasePlansPlanKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesRouteHandler: RouteHandler<
  typeof getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesRouteHandler: RouteHandler<
  typeof postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesIdRouteHandler: RouteHandler<
  typeof deleteApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesIdRouteHandler: RouteHandler<
  typeof getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesIdRouteHandler: RouteHandler<
  typeof patchApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AccountIpAllowlistRouteHandler: RouteHandler<
  typeof getApiV2AccountIpAllowlistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2AccountIpAllowlistRouteHandler: RouteHandler<
  typeof patchApiV2AccountIpAllowlistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2AccountIpAllowlistRouteHandler: RouteHandler<
  typeof postApiV2AccountIpAllowlistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2AccountIpAllowlistIdRouteHandler: RouteHandler<
  typeof deleteApiV2AccountIpAllowlistIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2AccountIpAllowlistIdRouteHandler: RouteHandler<
  typeof patchApiV2AccountIpAllowlistIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeySdkKeysRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeySdkKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyRouteHandler: RouteHandler<
  typeof deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyRouteHandler: RouteHandler<
  typeof patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyViewsRouteHandler: RouteHandler<
  typeof putApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyViewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDRouteHandler: RouteHandler<
  typeof deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDRouteHandler: RouteHandler<
  typeof getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDRouteHandler: RouteHandler<
  typeof patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDEnableRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDDisableRouteHandler: RouteHandler<
  typeof postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2EngineeringInsightsChartsDeploymentsFrequencyRouteHandler: RouteHandler<
  typeof getApiV2EngineeringInsightsChartsDeploymentsFrequencyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2EngineeringInsightsChartsFlagsStaleRouteHandler: RouteHandler<
  typeof getApiV2EngineeringInsightsChartsFlagsStaleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2EngineeringInsightsChartsFlagsStatusRouteHandler: RouteHandler<
  typeof getApiV2EngineeringInsightsChartsFlagsStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2EngineeringInsightsChartsLeadTimeRouteHandler: RouteHandler<
  typeof getApiV2EngineeringInsightsChartsLeadTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2EngineeringInsightsChartsReleasesFrequencyRouteHandler: RouteHandler<
  typeof getApiV2EngineeringInsightsChartsReleasesFrequencyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2EngineeringInsightsDeploymentEventsRouteHandler: RouteHandler<
  typeof postApiV2EngineeringInsightsDeploymentEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2EngineeringInsightsDeploymentsRouteHandler: RouteHandler<
  typeof getApiV2EngineeringInsightsDeploymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2EngineeringInsightsDeploymentsDeploymentIDRouteHandler: RouteHandler<
  typeof getApiV2EngineeringInsightsDeploymentsDeploymentIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2EngineeringInsightsDeploymentsDeploymentIDRouteHandler: RouteHandler<
  typeof patchApiV2EngineeringInsightsDeploymentsDeploymentIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2EngineeringInsightsFlagEventsRouteHandler: RouteHandler<
  typeof getApiV2EngineeringInsightsFlagEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2EngineeringInsightsInsightsGroupRouteHandler: RouteHandler<
  typeof postApiV2EngineeringInsightsInsightsGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2EngineeringInsightsInsightsGroupsRouteHandler: RouteHandler<
  typeof getApiV2EngineeringInsightsInsightsGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2EngineeringInsightsInsightsGroupsInsightGroupKeyRouteHandler: RouteHandler<
  typeof getApiV2EngineeringInsightsInsightsGroupsInsightGroupKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2EngineeringInsightsInsightsGroupsInsightGroupKeyRouteHandler: RouteHandler<
  typeof patchApiV2EngineeringInsightsInsightsGroupsInsightGroupKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2EngineeringInsightsInsightsGroupsInsightGroupKeyRouteHandler: RouteHandler<
  typeof deleteApiV2EngineeringInsightsInsightsGroupsInsightGroupKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2EngineeringInsightsInsightsScoresRouteHandler: RouteHandler<
  typeof getApiV2EngineeringInsightsInsightsScoresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2EngineeringInsightsPullRequestsRouteHandler: RouteHandler<
  typeof getApiV2EngineeringInsightsPullRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2EngineeringInsightsRepositoriesRouteHandler: RouteHandler<
  typeof getApiV2EngineeringInsightsRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2EngineeringInsightsRepositoriesProjectsRouteHandler: RouteHandler<
  typeof putApiV2EngineeringInsightsRepositoriesProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2EngineeringInsightsRepositoriesRepositoryKeyProjectsProjectKeyRouteHandler: RouteHandler<
  typeof deleteApiV2EngineeringInsightsRepositoriesRepositoryKeyProjectsProjectKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
