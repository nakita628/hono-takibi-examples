import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteOrgsOrgActionsHostedRunnersHostedRunnerIdRoute,
  deleteOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionIdRoute,
  deleteOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionIdVersionsVersionRoute,
  deleteOrgsOrgActionsOidcCustomizationPropertiesRepoCustomPropertyNameRoute,
  deleteOrgsOrgActionsPermissionsRepositoriesRepositoryIdRoute,
  deleteOrgsOrgActionsPermissionsSelfHostedRunnersRepositoriesRepositoryIdRoute,
  deleteOrgsOrgActionsPoliciesPolicyIdRoute,
  deleteOrgsOrgActionsRunnerGroupsRunnerGroupIdRepositoriesRepositoryIdRoute,
  deleteOrgsOrgActionsRunnerGroupsRunnerGroupIdRoute,
  deleteOrgsOrgActionsRunnerGroupsRunnerGroupIdRunnersRunnerIdRoute,
  deleteOrgsOrgActionsRunnersRunnerIdLabelsNameRoute,
  deleteOrgsOrgActionsRunnersRunnerIdLabelsRoute,
  deleteOrgsOrgActionsRunnersRunnerIdRoute,
  deleteOrgsOrgActionsSecretsSecretNameRepositoriesRepositoryIdRoute,
  deleteOrgsOrgActionsSecretsSecretNameRoute,
  deleteOrgsOrgActionsVariablesNameRepositoriesRepositoryIdRoute,
  deleteOrgsOrgActionsVariablesNameRoute,
  deleteOrgsOrgAgentsSecretsSecretNameRepositoriesRepositoryIdRoute,
  deleteOrgsOrgAgentsSecretsSecretNameRoute,
  deleteOrgsOrgAgentsVariablesNameRepositoriesRepositoryIdRoute,
  deleteOrgsOrgAgentsVariablesNameRoute,
  deleteOrgsOrgAttestationsAttestationIdRoute,
  deleteOrgsOrgAttestationsDigestSubjectDigestRoute,
  deleteOrgsOrgBlocksUsernameRoute,
  deleteOrgsOrgCampaignsCampaignNumberRoute,
  deleteOrgsOrgCodeSecurityConfigurationsConfigurationIdRoute,
  deleteOrgsOrgCodeSecurityConfigurationsDetachRoute,
  deleteOrgsOrgCodespacesAccessSelectedUsersRoute,
  deleteOrgsOrgCodespacesSecretsSecretNameRepositoriesRepositoryIdRoute,
  deleteOrgsOrgCodespacesSecretsSecretNameRoute,
  deleteOrgsOrgCopilotBillingSelectedTeamsRoute,
  deleteOrgsOrgCopilotBillingSelectedUsersRoute,
  deleteOrgsOrgCopilotCodingAgentPermissionsRepositoriesRepositoryIdRoute,
  deleteOrgsOrgCopilotSpacesSpaceNumberCollaboratorsActorTypeActorIdentifierRoute,
  deleteOrgsOrgCopilotSpacesSpaceNumberResourcesSpaceResourceIdRoute,
  deleteOrgsOrgCopilotSpacesSpaceNumberRoute,
  deleteOrgsOrgDependabotSecretsSecretNameRepositoriesRepositoryIdRoute,
  deleteOrgsOrgDependabotSecretsSecretNameRoute,
  deleteOrgsOrgHooksHookIdRoute,
  deleteOrgsOrgInteractionLimitsRoute,
  deleteOrgsOrgInvitationsInvitationIdRoute,
  deleteOrgsOrgIssueFieldsIssueFieldIdRoute,
  deleteOrgsOrgIssueTypesIssueTypeIdRoute,
  deleteOrgsOrgMembershipsUsernameRoute,
  deleteOrgsOrgMembersUsernameCodespacesCodespaceNameRoute,
  deleteOrgsOrgMembersUsernameRoute,
  deleteOrgsOrgMigrationsMigrationIdArchiveRoute,
  deleteOrgsOrgMigrationsMigrationIdReposRepoNameLockRoute,
  deleteOrgsOrgOrganizationRolesTeamsTeamSlugRoleIdRoute,
  deleteOrgsOrgOrganizationRolesTeamsTeamSlugRoute,
  deleteOrgsOrgOrganizationRolesUsersUsernameRoleIdRoute,
  deleteOrgsOrgOrganizationRolesUsersUsernameRoute,
  deleteOrgsOrgOutsideCollaboratorsUsernameRoute,
  deleteOrgsOrgPackagesPackageTypePackageNameRoute,
  deleteOrgsOrgPackagesPackageTypePackageNameVersionsPackageVersionIdRoute,
  deleteOrgsOrgPrivateRegistriesSecretNameRoute,
  deleteOrgsOrgProjectsV2ProjectNumberItemsItemIdRoute,
  deleteOrgsOrgPropertiesInstallationsValuesPropertyNameRoute,
  deleteOrgsOrgPropertiesSchemaCustomPropertyNameRoute,
  deleteOrgsOrgPublicMembersUsernameRoute,
  deleteOrgsOrgRoute,
  deleteOrgsOrgRulesetsRulesetIdRoute,
  deleteOrgsOrgSecretScanningCustomPatternsRoute,
  deleteOrgsOrgSecurityManagersTeamsTeamSlugRoute,
  deleteOrgsOrgSettingsImmutableReleasesRepositoriesRepositoryIdRoute,
  deleteOrgsOrgSettingsNetworkConfigurationsNetworkConfigurationIdRoute,
  deleteOrgsOrgTeamsTeamSlugCopilotCustomizationsRoute,
  deleteOrgsOrgTeamsTeamSlugMembershipsUsernameRoute,
  deleteOrgsOrgTeamsTeamSlugReposOwnerRepoRoute,
  deleteOrgsOrgTeamsTeamSlugRoute,
  getOrgsOrgActionsCacheUsageByRepositoryRoute,
  getOrgsOrgActionsCacheUsageRoute,
  getOrgsOrgActionsHostedRunnersHostedRunnerIdRoute,
  getOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionIdRoute,
  getOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionIdVersionsRoute,
  getOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionIdVersionsVersionRoute,
  getOrgsOrgActionsHostedRunnersImagesCustomRoute,
  getOrgsOrgActionsHostedRunnersImagesGithubOwnedRoute,
  getOrgsOrgActionsHostedRunnersImagesPartnerRoute,
  getOrgsOrgActionsHostedRunnersLimitsRoute,
  getOrgsOrgActionsHostedRunnersMachineSizesRoute,
  getOrgsOrgActionsHostedRunnersPlatformsRoute,
  getOrgsOrgActionsHostedRunnersRoute,
  getOrgsOrgActionsOidcCustomizationPropertiesRepoRoute,
  getOrgsOrgActionsOidcCustomizationSubRoute,
  getOrgsOrgActionsPermissionsArtifactAndLogRetentionRoute,
  getOrgsOrgActionsPermissionsForkPrContributorApprovalRoute,
  getOrgsOrgActionsPermissionsForkPrWorkflowsPrivateReposRoute,
  getOrgsOrgActionsPermissionsRepositoriesRoute,
  getOrgsOrgActionsPermissionsRoute,
  getOrgsOrgActionsPermissionsSelectedActionsRoute,
  getOrgsOrgActionsPermissionsSelfHostedRunnersRepositoriesRoute,
  getOrgsOrgActionsPermissionsSelfHostedRunnersRoute,
  getOrgsOrgActionsPermissionsWorkflowRoute,
  getOrgsOrgActionsPoliciesPolicyIdRoute,
  getOrgsOrgActionsPoliciesRoute,
  getOrgsOrgActionsRunnerGroupsRoute,
  getOrgsOrgActionsRunnerGroupsRunnerGroupIdHostedRunnersRoute,
  getOrgsOrgActionsRunnerGroupsRunnerGroupIdRepositoriesRoute,
  getOrgsOrgActionsRunnerGroupsRunnerGroupIdRoute,
  getOrgsOrgActionsRunnerGroupsRunnerGroupIdRunnersRoute,
  getOrgsOrgActionsRunnersDeprecationsVersionRoute,
  getOrgsOrgActionsRunnersDownloadsRoute,
  getOrgsOrgActionsRunnersRoute,
  getOrgsOrgActionsRunnersRunnerIdLabelsRoute,
  getOrgsOrgActionsRunnersRunnerIdRoute,
  getOrgsOrgActionsSecretsPublicKeyRoute,
  getOrgsOrgActionsSecretsRoute,
  getOrgsOrgActionsSecretsSecretNameRepositoriesRoute,
  getOrgsOrgActionsSecretsSecretNameRoute,
  getOrgsOrgActionsVariablesNameRepositoriesRoute,
  getOrgsOrgActionsVariablesNameRoute,
  getOrgsOrgActionsVariablesRoute,
  getOrgsOrgAgentsSecretsPublicKeyRoute,
  getOrgsOrgAgentsSecretsRoute,
  getOrgsOrgAgentsSecretsSecretNameRepositoriesRoute,
  getOrgsOrgAgentsSecretsSecretNameRoute,
  getOrgsOrgAgentsVariablesNameRepositoriesRoute,
  getOrgsOrgAgentsVariablesNameRoute,
  getOrgsOrgAgentsVariablesRoute,
  getOrgsOrgArtifactsMetadataDeploymentRecordClusterClusterJobsJobIdRoute,
  getOrgsOrgArtifactsSubjectDigestMetadataDeploymentRecordsRoute,
  getOrgsOrgArtifactsSubjectDigestMetadataStorageRecordsRoute,
  getOrgsOrgAttestationsRepositoriesRoute,
  getOrgsOrgAttestationsSubjectDigestRoute,
  getOrgsOrgBlocksRoute,
  getOrgsOrgBlocksUsernameRoute,
  getOrgsOrgCampaignsCampaignNumberRoute,
  getOrgsOrgCampaignsRoute,
  getOrgsOrgCodeScanningAiScanRoute,
  getOrgsOrgCodeScanningAlertsRoute,
  getOrgsOrgCodeSecurityConfigurationsConfigurationIdRepositoriesRoute,
  getOrgsOrgCodeSecurityConfigurationsConfigurationIdRoute,
  getOrgsOrgCodeSecurityConfigurationsDefaultsRoute,
  getOrgsOrgCodeSecurityConfigurationsRoute,
  getOrgsOrgCodespacesRoute,
  getOrgsOrgCodespacesSecretsPublicKeyRoute,
  getOrgsOrgCodespacesSecretsRoute,
  getOrgsOrgCodespacesSecretsSecretNameRepositoriesRoute,
  getOrgsOrgCodespacesSecretsSecretNameRoute,
  getOrgsOrgCopilotBillingRoute,
  getOrgsOrgCopilotBillingSeatsRoute,
  getOrgsOrgCopilotCodeReviewRunnerRoute,
  getOrgsOrgCopilotCodeReviewSettingsRoute,
  getOrgsOrgCopilotCodingAgentPermissionsRepositoriesRoute,
  getOrgsOrgCopilotCodingAgentPermissionsRoute,
  getOrgsOrgCopilotContentExclusionRoute,
  getOrgsOrgCopilotMetricsReportsOrganization1DayRoute,
  getOrgsOrgCopilotMetricsReportsOrganization28DayLatestRoute,
  getOrgsOrgCopilotMetricsReportsRepos1DayRoute,
  getOrgsOrgCopilotMetricsReportsUsers1DayRoute,
  getOrgsOrgCopilotMetricsReportsUsers28DayLatestRoute,
  getOrgsOrgCopilotMetricsReportsUserTeams1DayRoute,
  getOrgsOrgCopilotPoliciesCodeReviewRoute,
  getOrgsOrgCopilotSpacesRoute,
  getOrgsOrgCopilotSpacesSpaceNumberCollaboratorsRoute,
  getOrgsOrgCopilotSpacesSpaceNumberResourcesRoute,
  getOrgsOrgCopilotSpacesSpaceNumberResourcesSpaceResourceIdRoute,
  getOrgsOrgCopilotSpacesSpaceNumberRoute,
  getOrgsOrgDependabotAlertsRoute,
  getOrgsOrgDependabotRepositoryAccessRoute,
  getOrgsOrgDependabotSecretsPublicKeyRoute,
  getOrgsOrgDependabotSecretsRoute,
  getOrgsOrgDependabotSecretsSecretNameRepositoriesRoute,
  getOrgsOrgDependabotSecretsSecretNameRoute,
  getOrgsOrgDockerConflictsRoute,
  getOrgsOrgEventsRoute,
  getOrgsOrgFailedInvitationsRoute,
  getOrgsOrgHooksHookIdConfigRoute,
  getOrgsOrgHooksHookIdDeliveriesDeliveryIdRoute,
  getOrgsOrgHooksHookIdDeliveriesRoute,
  getOrgsOrgHooksHookIdRoute,
  getOrgsOrgHooksRoute,
  getOrgsOrgInsightsApiRouteStatsActorTypeActorIdRoute,
  getOrgsOrgInsightsApiSubjectStatsRoute,
  getOrgsOrgInsightsApiSummaryStatsActorTypeActorIdRoute,
  getOrgsOrgInsightsApiSummaryStatsRoute,
  getOrgsOrgInsightsApiSummaryStatsUsersUserIdRoute,
  getOrgsOrgInsightsApiTimeStatsActorTypeActorIdRoute,
  getOrgsOrgInsightsApiTimeStatsRoute,
  getOrgsOrgInsightsApiTimeStatsUsersUserIdRoute,
  getOrgsOrgInsightsApiUserStatsUserIdRoute,
  getOrgsOrgInstallationRoute,
  getOrgsOrgInstallationsRoute,
  getOrgsOrgInteractionLimitsPullsCreationCapRoute,
  getOrgsOrgInteractionLimitsRoute,
  getOrgsOrgInvitationsInvitationIdTeamsRoute,
  getOrgsOrgInvitationsRoute,
  getOrgsOrgIssueFieldsRoute,
  getOrgsOrgIssuesRoute,
  getOrgsOrgIssueTypesRoute,
  getOrgsOrgMembershipsUsernameRoute,
  getOrgsOrgMembersRoute,
  getOrgsOrgMembersUsernameCodespacesRoute,
  getOrgsOrgMembersUsernameCopilotRoute,
  getOrgsOrgMembersUsernameRoute,
  getOrgsOrgMigrationsMigrationIdArchiveRoute,
  getOrgsOrgMigrationsMigrationIdRepositoriesRoute,
  getOrgsOrgMigrationsMigrationIdRoute,
  getOrgsOrgMigrationsRoute,
  getOrgsOrgOrganizationRolesRoleIdRoute,
  getOrgsOrgOrganizationRolesRoleIdTeamsRoute,
  getOrgsOrgOrganizationRolesRoleIdUsersRoute,
  getOrgsOrgOrganizationRolesRoute,
  getOrgsOrgOutsideCollaboratorsRoute,
  getOrgsOrgPackagesPackageTypePackageNameRoute,
  getOrgsOrgPackagesPackageTypePackageNameVersionsPackageVersionIdRoute,
  getOrgsOrgPackagesPackageTypePackageNameVersionsRoute,
  getOrgsOrgPackagesRoute,
  getOrgsOrgPersonalAccessTokenRequestsPatRequestIdRepositoriesRoute,
  getOrgsOrgPersonalAccessTokenRequestsRoute,
  getOrgsOrgPersonalAccessTokensPatIdRepositoriesRoute,
  getOrgsOrgPersonalAccessTokensRoute,
  getOrgsOrgPrivateRegistriesPublicKeyRoute,
  getOrgsOrgPrivateRegistriesRoute,
  getOrgsOrgPrivateRegistriesSecretNameRoute,
  getOrgsOrgProjectsV2ProjectNumberFieldsFieldIdRoute,
  getOrgsOrgProjectsV2ProjectNumberFieldsRoute,
  getOrgsOrgProjectsV2ProjectNumberItemsItemIdRoute,
  getOrgsOrgProjectsV2ProjectNumberItemsRoute,
  getOrgsOrgProjectsV2ProjectNumberRoute,
  getOrgsOrgProjectsV2ProjectNumberViewsViewNumberItemsRoute,
  getOrgsOrgProjectsV2Route,
  getOrgsOrgPropertiesInstallationsRoute,
  getOrgsOrgPropertiesInstallationsSchemaRoute,
  getOrgsOrgPropertiesSchemaCustomPropertyNameRoute,
  getOrgsOrgPropertiesSchemaRoute,
  getOrgsOrgPropertiesValuesRoute,
  getOrgsOrgPublicMembersRoute,
  getOrgsOrgPublicMembersUsernameRoute,
  getOrgsOrgReposRoute,
  getOrgsOrgRoute,
  getOrgsOrgRulesetsRoute,
  getOrgsOrgRulesetsRulesetIdHistoryRoute,
  getOrgsOrgRulesetsRulesetIdHistoryVersionIdRoute,
  getOrgsOrgRulesetsRulesetIdRoute,
  getOrgsOrgRulesetsRuleSuitesRoute,
  getOrgsOrgRulesetsRuleSuitesRuleSuiteIdRoute,
  getOrgsOrgSecretScanningAlertsRoute,
  getOrgsOrgSecretScanningCustomPatternsRoute,
  getOrgsOrgSecretScanningPatternConfigurationsRoute,
  getOrgsOrgSecurityAdvisoriesRoute,
  getOrgsOrgSecurityManagersRoute,
  getOrgsOrgSettingsImmutableReleasesRepositoriesRoute,
  getOrgsOrgSettingsImmutableReleasesRoute,
  getOrgsOrgSettingsNetworkConfigurationsNetworkConfigurationIdRoute,
  getOrgsOrgSettingsNetworkConfigurationsRoute,
  getOrgsOrgSettingsNetworkSettingsNetworkSettingsIdRoute,
  getOrgsOrgTeamsRoute,
  getOrgsOrgTeamsTeamSlugCopilotCustomizationsRoute,
  getOrgsOrgTeamsTeamSlugInvitationsRoute,
  getOrgsOrgTeamsTeamSlugMembershipsUsernameRoute,
  getOrgsOrgTeamsTeamSlugMembersRoute,
  getOrgsOrgTeamsTeamSlugReposOwnerRepoRoute,
  getOrgsOrgTeamsTeamSlugReposRoute,
  getOrgsOrgTeamsTeamSlugRoute,
  getOrgsOrgTeamsTeamSlugTeamsRoute,
  patchOrgsOrgActionsHostedRunnersHostedRunnerIdRoute,
  patchOrgsOrgActionsRunnerGroupsRunnerGroupIdRoute,
  patchOrgsOrgActionsVariablesNameRoute,
  patchOrgsOrgAgentsVariablesNameRoute,
  patchOrgsOrgCampaignsCampaignNumberRoute,
  patchOrgsOrgCodeScanningAiScanRoute,
  patchOrgsOrgCodeSecurityConfigurationsConfigurationIdRoute,
  patchOrgsOrgCopilotCodeReviewSettingsRoute,
  patchOrgsOrgDependabotRepositoryAccessRoute,
  patchOrgsOrgHooksHookIdConfigRoute,
  patchOrgsOrgHooksHookIdRoute,
  patchOrgsOrgInteractionLimitsPullsCreationCapRoute,
  patchOrgsOrgIssueFieldsIssueFieldIdRoute,
  patchOrgsOrgPrivateRegistriesSecretNameRoute,
  patchOrgsOrgProjectsV2ProjectNumberItemsItemIdRoute,
  patchOrgsOrgPropertiesInstallationsValuesPropertyNameRoute,
  patchOrgsOrgPropertiesInstallationsValuesRoute,
  patchOrgsOrgPropertiesSchemaRoute,
  patchOrgsOrgPropertiesValuesRoute,
  patchOrgsOrgRoute,
  patchOrgsOrgSecretScanningCustomPatternsPatternIdRoute,
  patchOrgsOrgSecretScanningPatternConfigurationsRoute,
  patchOrgsOrgSettingsNetworkConfigurationsNetworkConfigurationIdRoute,
  patchOrgsOrgTeamsTeamSlugRoute,
  postOrgsOrgActionsHostedRunnersRoute,
  postOrgsOrgActionsOidcCustomizationPropertiesRepoRoute,
  postOrgsOrgActionsPoliciesRoute,
  postOrgsOrgActionsRunnerGroupsRoute,
  postOrgsOrgActionsRunnersGenerateJitconfigRoute,
  postOrgsOrgActionsRunnersRegistrationTokenRoute,
  postOrgsOrgActionsRunnersRemoveTokenRoute,
  postOrgsOrgActionsRunnersRunnerIdLabelsRoute,
  postOrgsOrgActionsVariablesRoute,
  postOrgsOrgAgentsVariablesRoute,
  postOrgsOrgArtifactsMetadataDeploymentRecordClusterClusterJobsRoute,
  postOrgsOrgArtifactsMetadataDeploymentRecordClusterClusterRoute,
  postOrgsOrgArtifactsMetadataDeploymentRecordRoute,
  postOrgsOrgArtifactsMetadataStorageRecordRoute,
  postOrgsOrgAttestationsBulkListRoute,
  postOrgsOrgAttestationsDeleteRequestRoute,
  postOrgsOrgCampaignsRoute,
  postOrgsOrgCodeSecurityConfigurationsConfigurationIdAttachRoute,
  postOrgsOrgCodeSecurityConfigurationsRoute,
  postOrgsOrgCodespacesAccessSelectedUsersRoute,
  postOrgsOrgCopilotBillingSelectedTeamsRoute,
  postOrgsOrgCopilotBillingSelectedUsersRoute,
  postOrgsOrgCopilotSpacesRoute,
  postOrgsOrgCopilotSpacesSpaceNumberCollaboratorsRoute,
  postOrgsOrgCopilotSpacesSpaceNumberResourcesRoute,
  postOrgsOrgHooksHookIdDeliveriesDeliveryIdAttemptsRoute,
  postOrgsOrgHooksHookIdPingsRoute,
  postOrgsOrgHooksRoute,
  postOrgsOrgInvitationsRoute,
  postOrgsOrgIssueFieldsRoute,
  postOrgsOrgIssueTypesRoute,
  postOrgsOrgMembersUsernameCodespacesCodespaceNameStopRoute,
  postOrgsOrgMigrationsRoute,
  postOrgsOrgPackagesPackageTypePackageNameRestoreRoute,
  postOrgsOrgPackagesPackageTypePackageNameVersionsPackageVersionIdRestoreRoute,
  postOrgsOrgPersonalAccessTokenRequestsPatRequestIdRoute,
  postOrgsOrgPersonalAccessTokenRequestsRoute,
  postOrgsOrgPersonalAccessTokensPatIdRoute,
  postOrgsOrgPersonalAccessTokensRoute,
  postOrgsOrgPrivateRegistriesRoute,
  postOrgsOrgProjectsV2ProjectNumberDraftsRoute,
  postOrgsOrgProjectsV2ProjectNumberFieldsRoute,
  postOrgsOrgProjectsV2ProjectNumberItemsRoute,
  postOrgsOrgProjectsV2ProjectNumberViewsRoute,
  postOrgsOrgPropertiesInstallationsRoute,
  postOrgsOrgReposRoute,
  postOrgsOrgRulesetsRoute,
  postOrgsOrgSecretScanningCustomPatternsRoute,
  postOrgsOrgSecurityProductEnablementRoute,
  postOrgsOrgSettingsNetworkConfigurationsRoute,
  postOrgsOrgTeamsRoute,
  putOrgsOrgActionsOidcCustomizationSubRoute,
  putOrgsOrgActionsPermissionsArtifactAndLogRetentionRoute,
  putOrgsOrgActionsPermissionsForkPrContributorApprovalRoute,
  putOrgsOrgActionsPermissionsForkPrWorkflowsPrivateReposRoute,
  putOrgsOrgActionsPermissionsRepositoriesRepositoryIdRoute,
  putOrgsOrgActionsPermissionsRepositoriesRoute,
  putOrgsOrgActionsPermissionsRoute,
  putOrgsOrgActionsPermissionsSelectedActionsRoute,
  putOrgsOrgActionsPermissionsSelfHostedRunnersRepositoriesRepositoryIdRoute,
  putOrgsOrgActionsPermissionsSelfHostedRunnersRepositoriesRoute,
  putOrgsOrgActionsPermissionsSelfHostedRunnersRoute,
  putOrgsOrgActionsPermissionsWorkflowRoute,
  putOrgsOrgActionsPoliciesPolicyIdRoute,
  putOrgsOrgActionsRunnerGroupsRunnerGroupIdRepositoriesRepositoryIdRoute,
  putOrgsOrgActionsRunnerGroupsRunnerGroupIdRepositoriesRoute,
  putOrgsOrgActionsRunnerGroupsRunnerGroupIdRunnersRoute,
  putOrgsOrgActionsRunnerGroupsRunnerGroupIdRunnersRunnerIdRoute,
  putOrgsOrgActionsRunnersRunnerIdLabelsRoute,
  putOrgsOrgActionsSecretsSecretNameRepositoriesRepositoryIdRoute,
  putOrgsOrgActionsSecretsSecretNameRepositoriesRoute,
  putOrgsOrgActionsSecretsSecretNameRoute,
  putOrgsOrgActionsVariablesNameRepositoriesRepositoryIdRoute,
  putOrgsOrgActionsVariablesNameRepositoriesRoute,
  putOrgsOrgAgentsSecretsSecretNameRepositoriesRepositoryIdRoute,
  putOrgsOrgAgentsSecretsSecretNameRepositoriesRoute,
  putOrgsOrgAgentsSecretsSecretNameRoute,
  putOrgsOrgAgentsVariablesNameRepositoriesRepositoryIdRoute,
  putOrgsOrgAgentsVariablesNameRepositoriesRoute,
  putOrgsOrgBlocksUsernameRoute,
  putOrgsOrgCodeSecurityConfigurationsConfigurationIdDefaultsRoute,
  putOrgsOrgCodespacesAccessRoute,
  putOrgsOrgCodespacesSecretsSecretNameRepositoriesRepositoryIdRoute,
  putOrgsOrgCodespacesSecretsSecretNameRepositoriesRoute,
  putOrgsOrgCodespacesSecretsSecretNameRoute,
  putOrgsOrgCopilotCodeReviewRunnerRoute,
  putOrgsOrgCopilotCodingAgentPermissionsRepositoriesRepositoryIdRoute,
  putOrgsOrgCopilotCodingAgentPermissionsRepositoriesRoute,
  putOrgsOrgCopilotCodingAgentPermissionsRoute,
  putOrgsOrgCopilotContentExclusionRoute,
  putOrgsOrgCopilotPoliciesCodeReviewRoute,
  putOrgsOrgCopilotSpacesSpaceNumberCollaboratorsActorTypeActorIdentifierRoute,
  putOrgsOrgCopilotSpacesSpaceNumberResourcesSpaceResourceIdRoute,
  putOrgsOrgCopilotSpacesSpaceNumberRoute,
  putOrgsOrgDependabotRepositoryAccessDefaultLevelRoute,
  putOrgsOrgDependabotSecretsSecretNameRepositoriesRepositoryIdRoute,
  putOrgsOrgDependabotSecretsSecretNameRepositoriesRoute,
  putOrgsOrgDependabotSecretsSecretNameRoute,
  putOrgsOrgInteractionLimitsRoute,
  putOrgsOrgIssueTypesIssueTypeIdRoute,
  putOrgsOrgMembershipsUsernameRoute,
  putOrgsOrgOrganizationRolesTeamsTeamSlugRoleIdRoute,
  putOrgsOrgOrganizationRolesUsersUsernameRoleIdRoute,
  putOrgsOrgOutsideCollaboratorsUsernameRoute,
  putOrgsOrgPropertiesSchemaCustomPropertyNameRoute,
  putOrgsOrgPublicMembersUsernameRoute,
  putOrgsOrgRulesetsRulesetIdRoute,
  putOrgsOrgSecurityManagersTeamsTeamSlugRoute,
  putOrgsOrgSettingsImmutableReleasesRepositoriesRepositoryIdRoute,
  putOrgsOrgSettingsImmutableReleasesRepositoriesRoute,
  putOrgsOrgSettingsImmutableReleasesRoute,
  putOrgsOrgTeamsTeamSlugCopilotCustomizationsRoute,
  putOrgsOrgTeamsTeamSlugMembershipsUsernameRoute,
  putOrgsOrgTeamsTeamSlugReposOwnerRepoRoute,
} from '../routes'

export const getOrgsOrgRouteHandler: RouteHandler<typeof getOrgsOrgRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrgsOrgRouteHandler: RouteHandler<typeof patchOrgsOrgRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgRouteHandler: RouteHandler<typeof deleteOrgsOrgRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsCacheUsageRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsCacheUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsCacheUsageByRepositoryRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsCacheUsageByRepositoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsHostedRunnersRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsHostedRunnersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgActionsHostedRunnersRouteHandler: RouteHandler<
  typeof postOrgsOrgActionsHostedRunnersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsHostedRunnersImagesCustomRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsHostedRunnersImagesCustomRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionIdRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionIdRouteHandler: RouteHandler<
  typeof deleteOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionIdVersionsRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionIdVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionIdVersionsVersionRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionIdVersionsVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionIdVersionsVersionRouteHandler: RouteHandler<
  typeof deleteOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionIdVersionsVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsHostedRunnersImagesGithubOwnedRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsHostedRunnersImagesGithubOwnedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsHostedRunnersImagesPartnerRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsHostedRunnersImagesPartnerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsHostedRunnersLimitsRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsHostedRunnersLimitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsHostedRunnersMachineSizesRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsHostedRunnersMachineSizesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsHostedRunnersPlatformsRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsHostedRunnersPlatformsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsHostedRunnersHostedRunnerIdRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsHostedRunnersHostedRunnerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrgsOrgActionsHostedRunnersHostedRunnerIdRouteHandler: RouteHandler<
  typeof patchOrgsOrgActionsHostedRunnersHostedRunnerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgActionsHostedRunnersHostedRunnerIdRouteHandler: RouteHandler<
  typeof deleteOrgsOrgActionsHostedRunnersHostedRunnerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsOidcCustomizationPropertiesRepoRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsOidcCustomizationPropertiesRepoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgActionsOidcCustomizationPropertiesRepoRouteHandler: RouteHandler<
  typeof postOrgsOrgActionsOidcCustomizationPropertiesRepoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgActionsOidcCustomizationPropertiesRepoCustomPropertyNameRouteHandler: RouteHandler<
  typeof deleteOrgsOrgActionsOidcCustomizationPropertiesRepoCustomPropertyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsOidcCustomizationSubRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsOidcCustomizationSubRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgActionsOidcCustomizationSubRouteHandler: RouteHandler<
  typeof putOrgsOrgActionsOidcCustomizationSubRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsPermissionsRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgActionsPermissionsRouteHandler: RouteHandler<
  typeof putOrgsOrgActionsPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsPermissionsArtifactAndLogRetentionRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsPermissionsArtifactAndLogRetentionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgActionsPermissionsArtifactAndLogRetentionRouteHandler: RouteHandler<
  typeof putOrgsOrgActionsPermissionsArtifactAndLogRetentionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsPermissionsForkPrContributorApprovalRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsPermissionsForkPrContributorApprovalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgActionsPermissionsForkPrContributorApprovalRouteHandler: RouteHandler<
  typeof putOrgsOrgActionsPermissionsForkPrContributorApprovalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsPermissionsForkPrWorkflowsPrivateReposRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsPermissionsForkPrWorkflowsPrivateReposRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgActionsPermissionsForkPrWorkflowsPrivateReposRouteHandler: RouteHandler<
  typeof putOrgsOrgActionsPermissionsForkPrWorkflowsPrivateReposRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsPermissionsRepositoriesRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsPermissionsRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgActionsPermissionsRepositoriesRouteHandler: RouteHandler<
  typeof putOrgsOrgActionsPermissionsRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgActionsPermissionsRepositoriesRepositoryIdRouteHandler: RouteHandler<
  typeof putOrgsOrgActionsPermissionsRepositoriesRepositoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgActionsPermissionsRepositoriesRepositoryIdRouteHandler: RouteHandler<
  typeof deleteOrgsOrgActionsPermissionsRepositoriesRepositoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsPermissionsSelectedActionsRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsPermissionsSelectedActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgActionsPermissionsSelectedActionsRouteHandler: RouteHandler<
  typeof putOrgsOrgActionsPermissionsSelectedActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsPermissionsSelfHostedRunnersRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsPermissionsSelfHostedRunnersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgActionsPermissionsSelfHostedRunnersRouteHandler: RouteHandler<
  typeof putOrgsOrgActionsPermissionsSelfHostedRunnersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsPermissionsSelfHostedRunnersRepositoriesRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsPermissionsSelfHostedRunnersRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgActionsPermissionsSelfHostedRunnersRepositoriesRouteHandler: RouteHandler<
  typeof putOrgsOrgActionsPermissionsSelfHostedRunnersRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgActionsPermissionsSelfHostedRunnersRepositoriesRepositoryIdRouteHandler: RouteHandler<
  typeof putOrgsOrgActionsPermissionsSelfHostedRunnersRepositoriesRepositoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgActionsPermissionsSelfHostedRunnersRepositoriesRepositoryIdRouteHandler: RouteHandler<
  typeof deleteOrgsOrgActionsPermissionsSelfHostedRunnersRepositoriesRepositoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsPermissionsWorkflowRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsPermissionsWorkflowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgActionsPermissionsWorkflowRouteHandler: RouteHandler<
  typeof putOrgsOrgActionsPermissionsWorkflowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsPoliciesRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgActionsPoliciesRouteHandler: RouteHandler<
  typeof postOrgsOrgActionsPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsPoliciesPolicyIdRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsPoliciesPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgActionsPoliciesPolicyIdRouteHandler: RouteHandler<
  typeof putOrgsOrgActionsPoliciesPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgActionsPoliciesPolicyIdRouteHandler: RouteHandler<
  typeof deleteOrgsOrgActionsPoliciesPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsRunnerGroupsRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsRunnerGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgActionsRunnerGroupsRouteHandler: RouteHandler<
  typeof postOrgsOrgActionsRunnerGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsRunnerGroupsRunnerGroupIdRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsRunnerGroupsRunnerGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrgsOrgActionsRunnerGroupsRunnerGroupIdRouteHandler: RouteHandler<
  typeof patchOrgsOrgActionsRunnerGroupsRunnerGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgActionsRunnerGroupsRunnerGroupIdRouteHandler: RouteHandler<
  typeof deleteOrgsOrgActionsRunnerGroupsRunnerGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsRunnerGroupsRunnerGroupIdHostedRunnersRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsRunnerGroupsRunnerGroupIdHostedRunnersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsRunnerGroupsRunnerGroupIdRepositoriesRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsRunnerGroupsRunnerGroupIdRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgActionsRunnerGroupsRunnerGroupIdRepositoriesRouteHandler: RouteHandler<
  typeof putOrgsOrgActionsRunnerGroupsRunnerGroupIdRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgActionsRunnerGroupsRunnerGroupIdRepositoriesRepositoryIdRouteHandler: RouteHandler<
  typeof putOrgsOrgActionsRunnerGroupsRunnerGroupIdRepositoriesRepositoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgActionsRunnerGroupsRunnerGroupIdRepositoriesRepositoryIdRouteHandler: RouteHandler<
  typeof deleteOrgsOrgActionsRunnerGroupsRunnerGroupIdRepositoriesRepositoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsRunnerGroupsRunnerGroupIdRunnersRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsRunnerGroupsRunnerGroupIdRunnersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgActionsRunnerGroupsRunnerGroupIdRunnersRouteHandler: RouteHandler<
  typeof putOrgsOrgActionsRunnerGroupsRunnerGroupIdRunnersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgActionsRunnerGroupsRunnerGroupIdRunnersRunnerIdRouteHandler: RouteHandler<
  typeof putOrgsOrgActionsRunnerGroupsRunnerGroupIdRunnersRunnerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgActionsRunnerGroupsRunnerGroupIdRunnersRunnerIdRouteHandler: RouteHandler<
  typeof deleteOrgsOrgActionsRunnerGroupsRunnerGroupIdRunnersRunnerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsRunnersRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsRunnersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsRunnersDeprecationsVersionRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsRunnersDeprecationsVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsRunnersDownloadsRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsRunnersDownloadsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgActionsRunnersGenerateJitconfigRouteHandler: RouteHandler<
  typeof postOrgsOrgActionsRunnersGenerateJitconfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgActionsRunnersRegistrationTokenRouteHandler: RouteHandler<
  typeof postOrgsOrgActionsRunnersRegistrationTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgActionsRunnersRemoveTokenRouteHandler: RouteHandler<
  typeof postOrgsOrgActionsRunnersRemoveTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsRunnersRunnerIdRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsRunnersRunnerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgActionsRunnersRunnerIdRouteHandler: RouteHandler<
  typeof deleteOrgsOrgActionsRunnersRunnerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsRunnersRunnerIdLabelsRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsRunnersRunnerIdLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgActionsRunnersRunnerIdLabelsRouteHandler: RouteHandler<
  typeof postOrgsOrgActionsRunnersRunnerIdLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgActionsRunnersRunnerIdLabelsRouteHandler: RouteHandler<
  typeof putOrgsOrgActionsRunnersRunnerIdLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgActionsRunnersRunnerIdLabelsRouteHandler: RouteHandler<
  typeof deleteOrgsOrgActionsRunnersRunnerIdLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgActionsRunnersRunnerIdLabelsNameRouteHandler: RouteHandler<
  typeof deleteOrgsOrgActionsRunnersRunnerIdLabelsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsSecretsRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsSecretsPublicKeyRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsSecretsPublicKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsSecretsSecretNameRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsSecretsSecretNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgActionsSecretsSecretNameRouteHandler: RouteHandler<
  typeof putOrgsOrgActionsSecretsSecretNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgActionsSecretsSecretNameRouteHandler: RouteHandler<
  typeof deleteOrgsOrgActionsSecretsSecretNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsSecretsSecretNameRepositoriesRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsSecretsSecretNameRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgActionsSecretsSecretNameRepositoriesRouteHandler: RouteHandler<
  typeof putOrgsOrgActionsSecretsSecretNameRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgActionsSecretsSecretNameRepositoriesRepositoryIdRouteHandler: RouteHandler<
  typeof putOrgsOrgActionsSecretsSecretNameRepositoriesRepositoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgActionsSecretsSecretNameRepositoriesRepositoryIdRouteHandler: RouteHandler<
  typeof deleteOrgsOrgActionsSecretsSecretNameRepositoriesRepositoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsVariablesRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsVariablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgActionsVariablesRouteHandler: RouteHandler<
  typeof postOrgsOrgActionsVariablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsVariablesNameRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsVariablesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrgsOrgActionsVariablesNameRouteHandler: RouteHandler<
  typeof patchOrgsOrgActionsVariablesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgActionsVariablesNameRouteHandler: RouteHandler<
  typeof deleteOrgsOrgActionsVariablesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgActionsVariablesNameRepositoriesRouteHandler: RouteHandler<
  typeof getOrgsOrgActionsVariablesNameRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgActionsVariablesNameRepositoriesRouteHandler: RouteHandler<
  typeof putOrgsOrgActionsVariablesNameRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgActionsVariablesNameRepositoriesRepositoryIdRouteHandler: RouteHandler<
  typeof putOrgsOrgActionsVariablesNameRepositoriesRepositoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgActionsVariablesNameRepositoriesRepositoryIdRouteHandler: RouteHandler<
  typeof deleteOrgsOrgActionsVariablesNameRepositoriesRepositoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgAgentsSecretsRouteHandler: RouteHandler<
  typeof getOrgsOrgAgentsSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgAgentsSecretsPublicKeyRouteHandler: RouteHandler<
  typeof getOrgsOrgAgentsSecretsPublicKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgAgentsSecretsSecretNameRouteHandler: RouteHandler<
  typeof getOrgsOrgAgentsSecretsSecretNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgAgentsSecretsSecretNameRouteHandler: RouteHandler<
  typeof putOrgsOrgAgentsSecretsSecretNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgAgentsSecretsSecretNameRouteHandler: RouteHandler<
  typeof deleteOrgsOrgAgentsSecretsSecretNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgAgentsSecretsSecretNameRepositoriesRouteHandler: RouteHandler<
  typeof getOrgsOrgAgentsSecretsSecretNameRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgAgentsSecretsSecretNameRepositoriesRouteHandler: RouteHandler<
  typeof putOrgsOrgAgentsSecretsSecretNameRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgAgentsSecretsSecretNameRepositoriesRepositoryIdRouteHandler: RouteHandler<
  typeof putOrgsOrgAgentsSecretsSecretNameRepositoriesRepositoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgAgentsSecretsSecretNameRepositoriesRepositoryIdRouteHandler: RouteHandler<
  typeof deleteOrgsOrgAgentsSecretsSecretNameRepositoriesRepositoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgAgentsVariablesRouteHandler: RouteHandler<
  typeof getOrgsOrgAgentsVariablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgAgentsVariablesRouteHandler: RouteHandler<
  typeof postOrgsOrgAgentsVariablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgAgentsVariablesNameRouteHandler: RouteHandler<
  typeof getOrgsOrgAgentsVariablesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrgsOrgAgentsVariablesNameRouteHandler: RouteHandler<
  typeof patchOrgsOrgAgentsVariablesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgAgentsVariablesNameRouteHandler: RouteHandler<
  typeof deleteOrgsOrgAgentsVariablesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgAgentsVariablesNameRepositoriesRouteHandler: RouteHandler<
  typeof getOrgsOrgAgentsVariablesNameRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgAgentsVariablesNameRepositoriesRouteHandler: RouteHandler<
  typeof putOrgsOrgAgentsVariablesNameRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgAgentsVariablesNameRepositoriesRepositoryIdRouteHandler: RouteHandler<
  typeof putOrgsOrgAgentsVariablesNameRepositoriesRepositoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgAgentsVariablesNameRepositoriesRepositoryIdRouteHandler: RouteHandler<
  typeof deleteOrgsOrgAgentsVariablesNameRepositoriesRepositoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgArtifactsMetadataDeploymentRecordRouteHandler: RouteHandler<
  typeof postOrgsOrgArtifactsMetadataDeploymentRecordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgArtifactsMetadataDeploymentRecordClusterClusterRouteHandler: RouteHandler<
  typeof postOrgsOrgArtifactsMetadataDeploymentRecordClusterClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgArtifactsMetadataDeploymentRecordClusterClusterJobsRouteHandler: RouteHandler<
  typeof postOrgsOrgArtifactsMetadataDeploymentRecordClusterClusterJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgArtifactsMetadataDeploymentRecordClusterClusterJobsJobIdRouteHandler: RouteHandler<
  typeof getOrgsOrgArtifactsMetadataDeploymentRecordClusterClusterJobsJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgArtifactsMetadataStorageRecordRouteHandler: RouteHandler<
  typeof postOrgsOrgArtifactsMetadataStorageRecordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgArtifactsSubjectDigestMetadataDeploymentRecordsRouteHandler: RouteHandler<
  typeof getOrgsOrgArtifactsSubjectDigestMetadataDeploymentRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgArtifactsSubjectDigestMetadataStorageRecordsRouteHandler: RouteHandler<
  typeof getOrgsOrgArtifactsSubjectDigestMetadataStorageRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgAttestationsBulkListRouteHandler: RouteHandler<
  typeof postOrgsOrgAttestationsBulkListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgAttestationsDeleteRequestRouteHandler: RouteHandler<
  typeof postOrgsOrgAttestationsDeleteRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgAttestationsDigestSubjectDigestRouteHandler: RouteHandler<
  typeof deleteOrgsOrgAttestationsDigestSubjectDigestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgAttestationsRepositoriesRouteHandler: RouteHandler<
  typeof getOrgsOrgAttestationsRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgAttestationsAttestationIdRouteHandler: RouteHandler<
  typeof deleteOrgsOrgAttestationsAttestationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgAttestationsSubjectDigestRouteHandler: RouteHandler<
  typeof getOrgsOrgAttestationsSubjectDigestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgBlocksRouteHandler: RouteHandler<typeof getOrgsOrgBlocksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgBlocksUsernameRouteHandler: RouteHandler<
  typeof getOrgsOrgBlocksUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgBlocksUsernameRouteHandler: RouteHandler<
  typeof putOrgsOrgBlocksUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgBlocksUsernameRouteHandler: RouteHandler<
  typeof deleteOrgsOrgBlocksUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgCampaignsRouteHandler: RouteHandler<
  typeof getOrgsOrgCampaignsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgCampaignsRouteHandler: RouteHandler<
  typeof postOrgsOrgCampaignsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgCampaignsCampaignNumberRouteHandler: RouteHandler<
  typeof getOrgsOrgCampaignsCampaignNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrgsOrgCampaignsCampaignNumberRouteHandler: RouteHandler<
  typeof patchOrgsOrgCampaignsCampaignNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgCampaignsCampaignNumberRouteHandler: RouteHandler<
  typeof deleteOrgsOrgCampaignsCampaignNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgCodeScanningAiScanRouteHandler: RouteHandler<
  typeof getOrgsOrgCodeScanningAiScanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrgsOrgCodeScanningAiScanRouteHandler: RouteHandler<
  typeof patchOrgsOrgCodeScanningAiScanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgCodeScanningAlertsRouteHandler: RouteHandler<
  typeof getOrgsOrgCodeScanningAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgCodeSecurityConfigurationsRouteHandler: RouteHandler<
  typeof getOrgsOrgCodeSecurityConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgCodeSecurityConfigurationsRouteHandler: RouteHandler<
  typeof postOrgsOrgCodeSecurityConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgCodeSecurityConfigurationsDefaultsRouteHandler: RouteHandler<
  typeof getOrgsOrgCodeSecurityConfigurationsDefaultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgCodeSecurityConfigurationsDetachRouteHandler: RouteHandler<
  typeof deleteOrgsOrgCodeSecurityConfigurationsDetachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgCodeSecurityConfigurationsConfigurationIdRouteHandler: RouteHandler<
  typeof getOrgsOrgCodeSecurityConfigurationsConfigurationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrgsOrgCodeSecurityConfigurationsConfigurationIdRouteHandler: RouteHandler<
  typeof patchOrgsOrgCodeSecurityConfigurationsConfigurationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgCodeSecurityConfigurationsConfigurationIdRouteHandler: RouteHandler<
  typeof deleteOrgsOrgCodeSecurityConfigurationsConfigurationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgCodeSecurityConfigurationsConfigurationIdAttachRouteHandler: RouteHandler<
  typeof postOrgsOrgCodeSecurityConfigurationsConfigurationIdAttachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgCodeSecurityConfigurationsConfigurationIdDefaultsRouteHandler: RouteHandler<
  typeof putOrgsOrgCodeSecurityConfigurationsConfigurationIdDefaultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgCodeSecurityConfigurationsConfigurationIdRepositoriesRouteHandler: RouteHandler<
  typeof getOrgsOrgCodeSecurityConfigurationsConfigurationIdRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgCodespacesRouteHandler: RouteHandler<
  typeof getOrgsOrgCodespacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgCodespacesAccessRouteHandler: RouteHandler<
  typeof putOrgsOrgCodespacesAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgCodespacesAccessSelectedUsersRouteHandler: RouteHandler<
  typeof postOrgsOrgCodespacesAccessSelectedUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgCodespacesAccessSelectedUsersRouteHandler: RouteHandler<
  typeof deleteOrgsOrgCodespacesAccessSelectedUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgCodespacesSecretsRouteHandler: RouteHandler<
  typeof getOrgsOrgCodespacesSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgCodespacesSecretsPublicKeyRouteHandler: RouteHandler<
  typeof getOrgsOrgCodespacesSecretsPublicKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgCodespacesSecretsSecretNameRouteHandler: RouteHandler<
  typeof getOrgsOrgCodespacesSecretsSecretNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgCodespacesSecretsSecretNameRouteHandler: RouteHandler<
  typeof putOrgsOrgCodespacesSecretsSecretNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgCodespacesSecretsSecretNameRouteHandler: RouteHandler<
  typeof deleteOrgsOrgCodespacesSecretsSecretNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgCodespacesSecretsSecretNameRepositoriesRouteHandler: RouteHandler<
  typeof getOrgsOrgCodespacesSecretsSecretNameRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgCodespacesSecretsSecretNameRepositoriesRouteHandler: RouteHandler<
  typeof putOrgsOrgCodespacesSecretsSecretNameRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgCodespacesSecretsSecretNameRepositoriesRepositoryIdRouteHandler: RouteHandler<
  typeof putOrgsOrgCodespacesSecretsSecretNameRepositoriesRepositoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgCodespacesSecretsSecretNameRepositoriesRepositoryIdRouteHandler: RouteHandler<
  typeof deleteOrgsOrgCodespacesSecretsSecretNameRepositoriesRepositoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgCopilotSpacesRouteHandler: RouteHandler<
  typeof getOrgsOrgCopilotSpacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgCopilotSpacesRouteHandler: RouteHandler<
  typeof postOrgsOrgCopilotSpacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgCopilotSpacesSpaceNumberRouteHandler: RouteHandler<
  typeof getOrgsOrgCopilotSpacesSpaceNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgCopilotSpacesSpaceNumberRouteHandler: RouteHandler<
  typeof putOrgsOrgCopilotSpacesSpaceNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgCopilotSpacesSpaceNumberRouteHandler: RouteHandler<
  typeof deleteOrgsOrgCopilotSpacesSpaceNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgCopilotSpacesSpaceNumberCollaboratorsRouteHandler: RouteHandler<
  typeof getOrgsOrgCopilotSpacesSpaceNumberCollaboratorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgCopilotSpacesSpaceNumberCollaboratorsRouteHandler: RouteHandler<
  typeof postOrgsOrgCopilotSpacesSpaceNumberCollaboratorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgCopilotSpacesSpaceNumberCollaboratorsActorTypeActorIdentifierRouteHandler: RouteHandler<
  typeof putOrgsOrgCopilotSpacesSpaceNumberCollaboratorsActorTypeActorIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgCopilotSpacesSpaceNumberCollaboratorsActorTypeActorIdentifierRouteHandler: RouteHandler<
  typeof deleteOrgsOrgCopilotSpacesSpaceNumberCollaboratorsActorTypeActorIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgCopilotSpacesSpaceNumberResourcesRouteHandler: RouteHandler<
  typeof getOrgsOrgCopilotSpacesSpaceNumberResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgCopilotSpacesSpaceNumberResourcesRouteHandler: RouteHandler<
  typeof postOrgsOrgCopilotSpacesSpaceNumberResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgCopilotSpacesSpaceNumberResourcesSpaceResourceIdRouteHandler: RouteHandler<
  typeof getOrgsOrgCopilotSpacesSpaceNumberResourcesSpaceResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgCopilotSpacesSpaceNumberResourcesSpaceResourceIdRouteHandler: RouteHandler<
  typeof putOrgsOrgCopilotSpacesSpaceNumberResourcesSpaceResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgCopilotSpacesSpaceNumberResourcesSpaceResourceIdRouteHandler: RouteHandler<
  typeof deleteOrgsOrgCopilotSpacesSpaceNumberResourcesSpaceResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgCopilotBillingRouteHandler: RouteHandler<
  typeof getOrgsOrgCopilotBillingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgCopilotBillingSeatsRouteHandler: RouteHandler<
  typeof getOrgsOrgCopilotBillingSeatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgCopilotBillingSelectedTeamsRouteHandler: RouteHandler<
  typeof postOrgsOrgCopilotBillingSelectedTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgCopilotBillingSelectedTeamsRouteHandler: RouteHandler<
  typeof deleteOrgsOrgCopilotBillingSelectedTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgCopilotBillingSelectedUsersRouteHandler: RouteHandler<
  typeof postOrgsOrgCopilotBillingSelectedUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgCopilotBillingSelectedUsersRouteHandler: RouteHandler<
  typeof deleteOrgsOrgCopilotBillingSelectedUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgCopilotCodeReviewRunnerRouteHandler: RouteHandler<
  typeof getOrgsOrgCopilotCodeReviewRunnerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgCopilotCodeReviewRunnerRouteHandler: RouteHandler<
  typeof putOrgsOrgCopilotCodeReviewRunnerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgCopilotCodeReviewSettingsRouteHandler: RouteHandler<
  typeof getOrgsOrgCopilotCodeReviewSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrgsOrgCopilotCodeReviewSettingsRouteHandler: RouteHandler<
  typeof patchOrgsOrgCopilotCodeReviewSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgCopilotCodingAgentPermissionsRouteHandler: RouteHandler<
  typeof getOrgsOrgCopilotCodingAgentPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgCopilotCodingAgentPermissionsRouteHandler: RouteHandler<
  typeof putOrgsOrgCopilotCodingAgentPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgCopilotCodingAgentPermissionsRepositoriesRouteHandler: RouteHandler<
  typeof getOrgsOrgCopilotCodingAgentPermissionsRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgCopilotCodingAgentPermissionsRepositoriesRouteHandler: RouteHandler<
  typeof putOrgsOrgCopilotCodingAgentPermissionsRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgCopilotCodingAgentPermissionsRepositoriesRepositoryIdRouteHandler: RouteHandler<
  typeof putOrgsOrgCopilotCodingAgentPermissionsRepositoriesRepositoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgCopilotCodingAgentPermissionsRepositoriesRepositoryIdRouteHandler: RouteHandler<
  typeof deleteOrgsOrgCopilotCodingAgentPermissionsRepositoriesRepositoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgCopilotContentExclusionRouteHandler: RouteHandler<
  typeof getOrgsOrgCopilotContentExclusionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgCopilotContentExclusionRouteHandler: RouteHandler<
  typeof putOrgsOrgCopilotContentExclusionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgCopilotMetricsReportsOrganization1DayRouteHandler: RouteHandler<
  typeof getOrgsOrgCopilotMetricsReportsOrganization1DayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgCopilotMetricsReportsOrganization28DayLatestRouteHandler: RouteHandler<
  typeof getOrgsOrgCopilotMetricsReportsOrganization28DayLatestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgCopilotMetricsReportsRepos1DayRouteHandler: RouteHandler<
  typeof getOrgsOrgCopilotMetricsReportsRepos1DayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgCopilotMetricsReportsUserTeams1DayRouteHandler: RouteHandler<
  typeof getOrgsOrgCopilotMetricsReportsUserTeams1DayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgCopilotMetricsReportsUsers1DayRouteHandler: RouteHandler<
  typeof getOrgsOrgCopilotMetricsReportsUsers1DayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgCopilotMetricsReportsUsers28DayLatestRouteHandler: RouteHandler<
  typeof getOrgsOrgCopilotMetricsReportsUsers28DayLatestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgCopilotPoliciesCodeReviewRouteHandler: RouteHandler<
  typeof getOrgsOrgCopilotPoliciesCodeReviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgCopilotPoliciesCodeReviewRouteHandler: RouteHandler<
  typeof putOrgsOrgCopilotPoliciesCodeReviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgDependabotAlertsRouteHandler: RouteHandler<
  typeof getOrgsOrgDependabotAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgDependabotRepositoryAccessRouteHandler: RouteHandler<
  typeof getOrgsOrgDependabotRepositoryAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrgsOrgDependabotRepositoryAccessRouteHandler: RouteHandler<
  typeof patchOrgsOrgDependabotRepositoryAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgDependabotRepositoryAccessDefaultLevelRouteHandler: RouteHandler<
  typeof putOrgsOrgDependabotRepositoryAccessDefaultLevelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgDependabotSecretsRouteHandler: RouteHandler<
  typeof getOrgsOrgDependabotSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgDependabotSecretsPublicKeyRouteHandler: RouteHandler<
  typeof getOrgsOrgDependabotSecretsPublicKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgDependabotSecretsSecretNameRouteHandler: RouteHandler<
  typeof getOrgsOrgDependabotSecretsSecretNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgDependabotSecretsSecretNameRouteHandler: RouteHandler<
  typeof putOrgsOrgDependabotSecretsSecretNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgDependabotSecretsSecretNameRouteHandler: RouteHandler<
  typeof deleteOrgsOrgDependabotSecretsSecretNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgDependabotSecretsSecretNameRepositoriesRouteHandler: RouteHandler<
  typeof getOrgsOrgDependabotSecretsSecretNameRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgDependabotSecretsSecretNameRepositoriesRouteHandler: RouteHandler<
  typeof putOrgsOrgDependabotSecretsSecretNameRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgDependabotSecretsSecretNameRepositoriesRepositoryIdRouteHandler: RouteHandler<
  typeof putOrgsOrgDependabotSecretsSecretNameRepositoriesRepositoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgDependabotSecretsSecretNameRepositoriesRepositoryIdRouteHandler: RouteHandler<
  typeof deleteOrgsOrgDependabotSecretsSecretNameRepositoriesRepositoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgDockerConflictsRouteHandler: RouteHandler<
  typeof getOrgsOrgDockerConflictsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgEventsRouteHandler: RouteHandler<typeof getOrgsOrgEventsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgFailedInvitationsRouteHandler: RouteHandler<
  typeof getOrgsOrgFailedInvitationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgHooksRouteHandler: RouteHandler<typeof getOrgsOrgHooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgHooksRouteHandler: RouteHandler<typeof postOrgsOrgHooksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgHooksHookIdRouteHandler: RouteHandler<
  typeof getOrgsOrgHooksHookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrgsOrgHooksHookIdRouteHandler: RouteHandler<
  typeof patchOrgsOrgHooksHookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgHooksHookIdRouteHandler: RouteHandler<
  typeof deleteOrgsOrgHooksHookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgHooksHookIdConfigRouteHandler: RouteHandler<
  typeof getOrgsOrgHooksHookIdConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrgsOrgHooksHookIdConfigRouteHandler: RouteHandler<
  typeof patchOrgsOrgHooksHookIdConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgHooksHookIdDeliveriesRouteHandler: RouteHandler<
  typeof getOrgsOrgHooksHookIdDeliveriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgHooksHookIdDeliveriesDeliveryIdRouteHandler: RouteHandler<
  typeof getOrgsOrgHooksHookIdDeliveriesDeliveryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgHooksHookIdDeliveriesDeliveryIdAttemptsRouteHandler: RouteHandler<
  typeof postOrgsOrgHooksHookIdDeliveriesDeliveryIdAttemptsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgHooksHookIdPingsRouteHandler: RouteHandler<
  typeof postOrgsOrgHooksHookIdPingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgInsightsApiRouteStatsActorTypeActorIdRouteHandler: RouteHandler<
  typeof getOrgsOrgInsightsApiRouteStatsActorTypeActorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgInsightsApiSubjectStatsRouteHandler: RouteHandler<
  typeof getOrgsOrgInsightsApiSubjectStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgInsightsApiSummaryStatsRouteHandler: RouteHandler<
  typeof getOrgsOrgInsightsApiSummaryStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgInsightsApiSummaryStatsUsersUserIdRouteHandler: RouteHandler<
  typeof getOrgsOrgInsightsApiSummaryStatsUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgInsightsApiSummaryStatsActorTypeActorIdRouteHandler: RouteHandler<
  typeof getOrgsOrgInsightsApiSummaryStatsActorTypeActorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgInsightsApiTimeStatsRouteHandler: RouteHandler<
  typeof getOrgsOrgInsightsApiTimeStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgInsightsApiTimeStatsUsersUserIdRouteHandler: RouteHandler<
  typeof getOrgsOrgInsightsApiTimeStatsUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgInsightsApiTimeStatsActorTypeActorIdRouteHandler: RouteHandler<
  typeof getOrgsOrgInsightsApiTimeStatsActorTypeActorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgInsightsApiUserStatsUserIdRouteHandler: RouteHandler<
  typeof getOrgsOrgInsightsApiUserStatsUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgInstallationRouteHandler: RouteHandler<
  typeof getOrgsOrgInstallationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgInstallationsRouteHandler: RouteHandler<
  typeof getOrgsOrgInstallationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgInteractionLimitsRouteHandler: RouteHandler<
  typeof getOrgsOrgInteractionLimitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgInteractionLimitsRouteHandler: RouteHandler<
  typeof putOrgsOrgInteractionLimitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgInteractionLimitsRouteHandler: RouteHandler<
  typeof deleteOrgsOrgInteractionLimitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgInteractionLimitsPullsCreationCapRouteHandler: RouteHandler<
  typeof getOrgsOrgInteractionLimitsPullsCreationCapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrgsOrgInteractionLimitsPullsCreationCapRouteHandler: RouteHandler<
  typeof patchOrgsOrgInteractionLimitsPullsCreationCapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgInvitationsRouteHandler: RouteHandler<
  typeof getOrgsOrgInvitationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgInvitationsRouteHandler: RouteHandler<
  typeof postOrgsOrgInvitationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgInvitationsInvitationIdRouteHandler: RouteHandler<
  typeof deleteOrgsOrgInvitationsInvitationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgInvitationsInvitationIdTeamsRouteHandler: RouteHandler<
  typeof getOrgsOrgInvitationsInvitationIdTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgIssueFieldsRouteHandler: RouteHandler<
  typeof getOrgsOrgIssueFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgIssueFieldsRouteHandler: RouteHandler<
  typeof postOrgsOrgIssueFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrgsOrgIssueFieldsIssueFieldIdRouteHandler: RouteHandler<
  typeof patchOrgsOrgIssueFieldsIssueFieldIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgIssueFieldsIssueFieldIdRouteHandler: RouteHandler<
  typeof deleteOrgsOrgIssueFieldsIssueFieldIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgIssueTypesRouteHandler: RouteHandler<
  typeof getOrgsOrgIssueTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgIssueTypesRouteHandler: RouteHandler<
  typeof postOrgsOrgIssueTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgIssueTypesIssueTypeIdRouteHandler: RouteHandler<
  typeof putOrgsOrgIssueTypesIssueTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgIssueTypesIssueTypeIdRouteHandler: RouteHandler<
  typeof deleteOrgsOrgIssueTypesIssueTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgIssuesRouteHandler: RouteHandler<typeof getOrgsOrgIssuesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgMembersRouteHandler: RouteHandler<typeof getOrgsOrgMembersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgMembersUsernameRouteHandler: RouteHandler<
  typeof getOrgsOrgMembersUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgMembersUsernameRouteHandler: RouteHandler<
  typeof deleteOrgsOrgMembersUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgMembersUsernameCodespacesRouteHandler: RouteHandler<
  typeof getOrgsOrgMembersUsernameCodespacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgMembersUsernameCodespacesCodespaceNameRouteHandler: RouteHandler<
  typeof deleteOrgsOrgMembersUsernameCodespacesCodespaceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgMembersUsernameCodespacesCodespaceNameStopRouteHandler: RouteHandler<
  typeof postOrgsOrgMembersUsernameCodespacesCodespaceNameStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgMembersUsernameCopilotRouteHandler: RouteHandler<
  typeof getOrgsOrgMembersUsernameCopilotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgMembershipsUsernameRouteHandler: RouteHandler<
  typeof getOrgsOrgMembershipsUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgMembershipsUsernameRouteHandler: RouteHandler<
  typeof putOrgsOrgMembershipsUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgMembershipsUsernameRouteHandler: RouteHandler<
  typeof deleteOrgsOrgMembershipsUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgMigrationsRouteHandler: RouteHandler<
  typeof getOrgsOrgMigrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgMigrationsRouteHandler: RouteHandler<
  typeof postOrgsOrgMigrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgMigrationsMigrationIdRouteHandler: RouteHandler<
  typeof getOrgsOrgMigrationsMigrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgMigrationsMigrationIdArchiveRouteHandler: RouteHandler<
  typeof getOrgsOrgMigrationsMigrationIdArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgMigrationsMigrationIdArchiveRouteHandler: RouteHandler<
  typeof deleteOrgsOrgMigrationsMigrationIdArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgMigrationsMigrationIdReposRepoNameLockRouteHandler: RouteHandler<
  typeof deleteOrgsOrgMigrationsMigrationIdReposRepoNameLockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgMigrationsMigrationIdRepositoriesRouteHandler: RouteHandler<
  typeof getOrgsOrgMigrationsMigrationIdRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgOrganizationRolesRouteHandler: RouteHandler<
  typeof getOrgsOrgOrganizationRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgOrganizationRolesTeamsTeamSlugRouteHandler: RouteHandler<
  typeof deleteOrgsOrgOrganizationRolesTeamsTeamSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgOrganizationRolesTeamsTeamSlugRoleIdRouteHandler: RouteHandler<
  typeof putOrgsOrgOrganizationRolesTeamsTeamSlugRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgOrganizationRolesTeamsTeamSlugRoleIdRouteHandler: RouteHandler<
  typeof deleteOrgsOrgOrganizationRolesTeamsTeamSlugRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgOrganizationRolesUsersUsernameRouteHandler: RouteHandler<
  typeof deleteOrgsOrgOrganizationRolesUsersUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgOrganizationRolesUsersUsernameRoleIdRouteHandler: RouteHandler<
  typeof putOrgsOrgOrganizationRolesUsersUsernameRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgOrganizationRolesUsersUsernameRoleIdRouteHandler: RouteHandler<
  typeof deleteOrgsOrgOrganizationRolesUsersUsernameRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgOrganizationRolesRoleIdRouteHandler: RouteHandler<
  typeof getOrgsOrgOrganizationRolesRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgOrganizationRolesRoleIdTeamsRouteHandler: RouteHandler<
  typeof getOrgsOrgOrganizationRolesRoleIdTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgOrganizationRolesRoleIdUsersRouteHandler: RouteHandler<
  typeof getOrgsOrgOrganizationRolesRoleIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgOutsideCollaboratorsRouteHandler: RouteHandler<
  typeof getOrgsOrgOutsideCollaboratorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgOutsideCollaboratorsUsernameRouteHandler: RouteHandler<
  typeof putOrgsOrgOutsideCollaboratorsUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgOutsideCollaboratorsUsernameRouteHandler: RouteHandler<
  typeof deleteOrgsOrgOutsideCollaboratorsUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgPackagesRouteHandler: RouteHandler<typeof getOrgsOrgPackagesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgPackagesPackageTypePackageNameRouteHandler: RouteHandler<
  typeof getOrgsOrgPackagesPackageTypePackageNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgPackagesPackageTypePackageNameRouteHandler: RouteHandler<
  typeof deleteOrgsOrgPackagesPackageTypePackageNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgPackagesPackageTypePackageNameRestoreRouteHandler: RouteHandler<
  typeof postOrgsOrgPackagesPackageTypePackageNameRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgPackagesPackageTypePackageNameVersionsRouteHandler: RouteHandler<
  typeof getOrgsOrgPackagesPackageTypePackageNameVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgPackagesPackageTypePackageNameVersionsPackageVersionIdRouteHandler: RouteHandler<
  typeof getOrgsOrgPackagesPackageTypePackageNameVersionsPackageVersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgPackagesPackageTypePackageNameVersionsPackageVersionIdRouteHandler: RouteHandler<
  typeof deleteOrgsOrgPackagesPackageTypePackageNameVersionsPackageVersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgPackagesPackageTypePackageNameVersionsPackageVersionIdRestoreRouteHandler: RouteHandler<
  typeof postOrgsOrgPackagesPackageTypePackageNameVersionsPackageVersionIdRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgPersonalAccessTokenRequestsRouteHandler: RouteHandler<
  typeof getOrgsOrgPersonalAccessTokenRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgPersonalAccessTokenRequestsRouteHandler: RouteHandler<
  typeof postOrgsOrgPersonalAccessTokenRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgPersonalAccessTokenRequestsPatRequestIdRouteHandler: RouteHandler<
  typeof postOrgsOrgPersonalAccessTokenRequestsPatRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgPersonalAccessTokenRequestsPatRequestIdRepositoriesRouteHandler: RouteHandler<
  typeof getOrgsOrgPersonalAccessTokenRequestsPatRequestIdRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgPersonalAccessTokensRouteHandler: RouteHandler<
  typeof getOrgsOrgPersonalAccessTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgPersonalAccessTokensRouteHandler: RouteHandler<
  typeof postOrgsOrgPersonalAccessTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgPersonalAccessTokensPatIdRouteHandler: RouteHandler<
  typeof postOrgsOrgPersonalAccessTokensPatIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgPersonalAccessTokensPatIdRepositoriesRouteHandler: RouteHandler<
  typeof getOrgsOrgPersonalAccessTokensPatIdRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgPrivateRegistriesRouteHandler: RouteHandler<
  typeof getOrgsOrgPrivateRegistriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgPrivateRegistriesRouteHandler: RouteHandler<
  typeof postOrgsOrgPrivateRegistriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgPrivateRegistriesPublicKeyRouteHandler: RouteHandler<
  typeof getOrgsOrgPrivateRegistriesPublicKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgPrivateRegistriesSecretNameRouteHandler: RouteHandler<
  typeof getOrgsOrgPrivateRegistriesSecretNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrgsOrgPrivateRegistriesSecretNameRouteHandler: RouteHandler<
  typeof patchOrgsOrgPrivateRegistriesSecretNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgPrivateRegistriesSecretNameRouteHandler: RouteHandler<
  typeof deleteOrgsOrgPrivateRegistriesSecretNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgProjectsV2RouteHandler: RouteHandler<
  typeof getOrgsOrgProjectsV2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgProjectsV2ProjectNumberRouteHandler: RouteHandler<
  typeof getOrgsOrgProjectsV2ProjectNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgProjectsV2ProjectNumberDraftsRouteHandler: RouteHandler<
  typeof postOrgsOrgProjectsV2ProjectNumberDraftsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgProjectsV2ProjectNumberFieldsRouteHandler: RouteHandler<
  typeof getOrgsOrgProjectsV2ProjectNumberFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgProjectsV2ProjectNumberFieldsRouteHandler: RouteHandler<
  typeof postOrgsOrgProjectsV2ProjectNumberFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgProjectsV2ProjectNumberFieldsFieldIdRouteHandler: RouteHandler<
  typeof getOrgsOrgProjectsV2ProjectNumberFieldsFieldIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgProjectsV2ProjectNumberItemsRouteHandler: RouteHandler<
  typeof getOrgsOrgProjectsV2ProjectNumberItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgProjectsV2ProjectNumberItemsRouteHandler: RouteHandler<
  typeof postOrgsOrgProjectsV2ProjectNumberItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgProjectsV2ProjectNumberItemsItemIdRouteHandler: RouteHandler<
  typeof getOrgsOrgProjectsV2ProjectNumberItemsItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrgsOrgProjectsV2ProjectNumberItemsItemIdRouteHandler: RouteHandler<
  typeof patchOrgsOrgProjectsV2ProjectNumberItemsItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgProjectsV2ProjectNumberItemsItemIdRouteHandler: RouteHandler<
  typeof deleteOrgsOrgProjectsV2ProjectNumberItemsItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgProjectsV2ProjectNumberViewsRouteHandler: RouteHandler<
  typeof postOrgsOrgProjectsV2ProjectNumberViewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgProjectsV2ProjectNumberViewsViewNumberItemsRouteHandler: RouteHandler<
  typeof getOrgsOrgProjectsV2ProjectNumberViewsViewNumberItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgPropertiesInstallationsRouteHandler: RouteHandler<
  typeof getOrgsOrgPropertiesInstallationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgPropertiesInstallationsRouteHandler: RouteHandler<
  typeof postOrgsOrgPropertiesInstallationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgPropertiesInstallationsSchemaRouteHandler: RouteHandler<
  typeof getOrgsOrgPropertiesInstallationsSchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrgsOrgPropertiesInstallationsValuesRouteHandler: RouteHandler<
  typeof patchOrgsOrgPropertiesInstallationsValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrgsOrgPropertiesInstallationsValuesPropertyNameRouteHandler: RouteHandler<
  typeof patchOrgsOrgPropertiesInstallationsValuesPropertyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgPropertiesInstallationsValuesPropertyNameRouteHandler: RouteHandler<
  typeof deleteOrgsOrgPropertiesInstallationsValuesPropertyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgPropertiesSchemaRouteHandler: RouteHandler<
  typeof getOrgsOrgPropertiesSchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrgsOrgPropertiesSchemaRouteHandler: RouteHandler<
  typeof patchOrgsOrgPropertiesSchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgPropertiesSchemaCustomPropertyNameRouteHandler: RouteHandler<
  typeof getOrgsOrgPropertiesSchemaCustomPropertyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgPropertiesSchemaCustomPropertyNameRouteHandler: RouteHandler<
  typeof putOrgsOrgPropertiesSchemaCustomPropertyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgPropertiesSchemaCustomPropertyNameRouteHandler: RouteHandler<
  typeof deleteOrgsOrgPropertiesSchemaCustomPropertyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgPropertiesValuesRouteHandler: RouteHandler<
  typeof getOrgsOrgPropertiesValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrgsOrgPropertiesValuesRouteHandler: RouteHandler<
  typeof patchOrgsOrgPropertiesValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgPublicMembersRouteHandler: RouteHandler<
  typeof getOrgsOrgPublicMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgPublicMembersUsernameRouteHandler: RouteHandler<
  typeof getOrgsOrgPublicMembersUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgPublicMembersUsernameRouteHandler: RouteHandler<
  typeof putOrgsOrgPublicMembersUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgPublicMembersUsernameRouteHandler: RouteHandler<
  typeof deleteOrgsOrgPublicMembersUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgReposRouteHandler: RouteHandler<typeof getOrgsOrgReposRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgReposRouteHandler: RouteHandler<typeof postOrgsOrgReposRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgRulesetsRouteHandler: RouteHandler<typeof getOrgsOrgRulesetsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgRulesetsRouteHandler: RouteHandler<
  typeof postOrgsOrgRulesetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgRulesetsRuleSuitesRouteHandler: RouteHandler<
  typeof getOrgsOrgRulesetsRuleSuitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgRulesetsRuleSuitesRuleSuiteIdRouteHandler: RouteHandler<
  typeof getOrgsOrgRulesetsRuleSuitesRuleSuiteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgRulesetsRulesetIdRouteHandler: RouteHandler<
  typeof getOrgsOrgRulesetsRulesetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgRulesetsRulesetIdRouteHandler: RouteHandler<
  typeof putOrgsOrgRulesetsRulesetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgRulesetsRulesetIdRouteHandler: RouteHandler<
  typeof deleteOrgsOrgRulesetsRulesetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgRulesetsRulesetIdHistoryRouteHandler: RouteHandler<
  typeof getOrgsOrgRulesetsRulesetIdHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgRulesetsRulesetIdHistoryVersionIdRouteHandler: RouteHandler<
  typeof getOrgsOrgRulesetsRulesetIdHistoryVersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgSecretScanningAlertsRouteHandler: RouteHandler<
  typeof getOrgsOrgSecretScanningAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgSecretScanningCustomPatternsRouteHandler: RouteHandler<
  typeof getOrgsOrgSecretScanningCustomPatternsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgSecretScanningCustomPatternsRouteHandler: RouteHandler<
  typeof postOrgsOrgSecretScanningCustomPatternsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgSecretScanningCustomPatternsRouteHandler: RouteHandler<
  typeof deleteOrgsOrgSecretScanningCustomPatternsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrgsOrgSecretScanningCustomPatternsPatternIdRouteHandler: RouteHandler<
  typeof patchOrgsOrgSecretScanningCustomPatternsPatternIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgSecretScanningPatternConfigurationsRouteHandler: RouteHandler<
  typeof getOrgsOrgSecretScanningPatternConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrgsOrgSecretScanningPatternConfigurationsRouteHandler: RouteHandler<
  typeof patchOrgsOrgSecretScanningPatternConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgSecurityAdvisoriesRouteHandler: RouteHandler<
  typeof getOrgsOrgSecurityAdvisoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgSecurityManagersRouteHandler: RouteHandler<
  typeof getOrgsOrgSecurityManagersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgSecurityManagersTeamsTeamSlugRouteHandler: RouteHandler<
  typeof putOrgsOrgSecurityManagersTeamsTeamSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgSecurityManagersTeamsTeamSlugRouteHandler: RouteHandler<
  typeof deleteOrgsOrgSecurityManagersTeamsTeamSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgSettingsImmutableReleasesRouteHandler: RouteHandler<
  typeof getOrgsOrgSettingsImmutableReleasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgSettingsImmutableReleasesRouteHandler: RouteHandler<
  typeof putOrgsOrgSettingsImmutableReleasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgSettingsImmutableReleasesRepositoriesRouteHandler: RouteHandler<
  typeof getOrgsOrgSettingsImmutableReleasesRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgSettingsImmutableReleasesRepositoriesRouteHandler: RouteHandler<
  typeof putOrgsOrgSettingsImmutableReleasesRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgSettingsImmutableReleasesRepositoriesRepositoryIdRouteHandler: RouteHandler<
  typeof putOrgsOrgSettingsImmutableReleasesRepositoriesRepositoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgSettingsImmutableReleasesRepositoriesRepositoryIdRouteHandler: RouteHandler<
  typeof deleteOrgsOrgSettingsImmutableReleasesRepositoriesRepositoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgSettingsNetworkConfigurationsRouteHandler: RouteHandler<
  typeof getOrgsOrgSettingsNetworkConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgSettingsNetworkConfigurationsRouteHandler: RouteHandler<
  typeof postOrgsOrgSettingsNetworkConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgSettingsNetworkConfigurationsNetworkConfigurationIdRouteHandler: RouteHandler<
  typeof getOrgsOrgSettingsNetworkConfigurationsNetworkConfigurationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrgsOrgSettingsNetworkConfigurationsNetworkConfigurationIdRouteHandler: RouteHandler<
  typeof patchOrgsOrgSettingsNetworkConfigurationsNetworkConfigurationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgSettingsNetworkConfigurationsNetworkConfigurationIdRouteHandler: RouteHandler<
  typeof deleteOrgsOrgSettingsNetworkConfigurationsNetworkConfigurationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgSettingsNetworkSettingsNetworkSettingsIdRouteHandler: RouteHandler<
  typeof getOrgsOrgSettingsNetworkSettingsNetworkSettingsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgTeamsRouteHandler: RouteHandler<typeof getOrgsOrgTeamsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgTeamsRouteHandler: RouteHandler<typeof postOrgsOrgTeamsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgTeamsTeamSlugRouteHandler: RouteHandler<
  typeof getOrgsOrgTeamsTeamSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrgsOrgTeamsTeamSlugRouteHandler: RouteHandler<
  typeof patchOrgsOrgTeamsTeamSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgTeamsTeamSlugRouteHandler: RouteHandler<
  typeof deleteOrgsOrgTeamsTeamSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgTeamsTeamSlugCopilotCustomizationsRouteHandler: RouteHandler<
  typeof getOrgsOrgTeamsTeamSlugCopilotCustomizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgTeamsTeamSlugCopilotCustomizationsRouteHandler: RouteHandler<
  typeof putOrgsOrgTeamsTeamSlugCopilotCustomizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgTeamsTeamSlugCopilotCustomizationsRouteHandler: RouteHandler<
  typeof deleteOrgsOrgTeamsTeamSlugCopilotCustomizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgTeamsTeamSlugInvitationsRouteHandler: RouteHandler<
  typeof getOrgsOrgTeamsTeamSlugInvitationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgTeamsTeamSlugMembersRouteHandler: RouteHandler<
  typeof getOrgsOrgTeamsTeamSlugMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgTeamsTeamSlugMembershipsUsernameRouteHandler: RouteHandler<
  typeof getOrgsOrgTeamsTeamSlugMembershipsUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgTeamsTeamSlugMembershipsUsernameRouteHandler: RouteHandler<
  typeof putOrgsOrgTeamsTeamSlugMembershipsUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgTeamsTeamSlugMembershipsUsernameRouteHandler: RouteHandler<
  typeof deleteOrgsOrgTeamsTeamSlugMembershipsUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgTeamsTeamSlugReposRouteHandler: RouteHandler<
  typeof getOrgsOrgTeamsTeamSlugReposRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgTeamsTeamSlugReposOwnerRepoRouteHandler: RouteHandler<
  typeof getOrgsOrgTeamsTeamSlugReposOwnerRepoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrgsOrgTeamsTeamSlugReposOwnerRepoRouteHandler: RouteHandler<
  typeof putOrgsOrgTeamsTeamSlugReposOwnerRepoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrgsOrgTeamsTeamSlugReposOwnerRepoRouteHandler: RouteHandler<
  typeof deleteOrgsOrgTeamsTeamSlugReposOwnerRepoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrgsOrgTeamsTeamSlugTeamsRouteHandler: RouteHandler<
  typeof getOrgsOrgTeamsTeamSlugTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrgsOrgSecurityProductEnablementRouteHandler: RouteHandler<
  typeof postOrgsOrgSecurityProductEnablementRoute
> = async (c) => {
  throw new Error('Not implemented')
}
