import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const orgsHandler = app
  .openapi(getOrgsOrgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsCacheUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsCacheUsageByRepositoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsHostedRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgActionsHostedRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsHostedRunnersImagesCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionIdVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionIdVersionsVersionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrgsOrgActionsHostedRunnersImagesGithubOwnedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsHostedRunnersImagesPartnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsHostedRunnersLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsHostedRunnersMachineSizesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsHostedRunnersPlatformsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsHostedRunnersHostedRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgActionsHostedRunnersHostedRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsHostedRunnersHostedRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsOidcCustomizationPropertiesRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgActionsOidcCustomizationPropertiesRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsOidcCustomizationPropertiesRepoCustomPropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsOidcCustomizationSubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsOidcCustomizationSubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsPermissionsArtifactAndLogRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsPermissionsArtifactAndLogRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsPermissionsForkPrContributorApprovalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsPermissionsForkPrContributorApprovalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsPermissionsForkPrWorkflowsPrivateReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsPermissionsForkPrWorkflowsPrivateReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsPermissionsRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsPermissionsRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsPermissionsRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsPermissionsRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsPermissionsSelectedActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsPermissionsSelectedActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsPermissionsSelfHostedRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsPermissionsSelfHostedRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsPermissionsSelfHostedRunnersRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsPermissionsSelfHostedRunnersRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsPermissionsSelfHostedRunnersRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsPermissionsSelfHostedRunnersRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsPermissionsWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsPermissionsWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgActionsPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsRunnerGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgActionsRunnerGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsRunnerGroupsRunnerGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgActionsRunnerGroupsRunnerGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsRunnerGroupsRunnerGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsRunnerGroupsRunnerGroupIdHostedRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsRunnerGroupsRunnerGroupIdRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsRunnerGroupsRunnerGroupIdRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsRunnerGroupsRunnerGroupIdRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsRunnerGroupsRunnerGroupIdRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsRunnerGroupsRunnerGroupIdRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsRunnerGroupsRunnerGroupIdRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsRunnerGroupsRunnerGroupIdRunnersRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsRunnerGroupsRunnerGroupIdRunnersRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsRunnersDeprecationsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsRunnersDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgActionsRunnersGenerateJitconfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgActionsRunnersRegistrationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgActionsRunnersRemoveTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsRunnersRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsRunnersRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsRunnersRunnerIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgActionsRunnersRunnerIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsRunnersRunnerIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsRunnersRunnerIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsRunnersRunnerIdLabelsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsSecretsPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsSecretsSecretNameRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsSecretsSecretNameRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsSecretsSecretNameRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsSecretsSecretNameRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgActionsVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsVariablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgActionsVariablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsVariablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsVariablesNameRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsVariablesNameRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsVariablesNameRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsVariablesNameRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgAgentsSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgAgentsSecretsPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgAgentsSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgAgentsSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgAgentsSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgAgentsSecretsSecretNameRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgAgentsSecretsSecretNameRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgAgentsSecretsSecretNameRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgAgentsSecretsSecretNameRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgAgentsVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgAgentsVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgAgentsVariablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgAgentsVariablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgAgentsVariablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgAgentsVariablesNameRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgAgentsVariablesNameRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgAgentsVariablesNameRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgAgentsVariablesNameRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgArtifactsMetadataDeploymentRecordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgArtifactsMetadataDeploymentRecordClusterClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgArtifactsMetadataDeploymentRecordClusterClusterJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgArtifactsMetadataDeploymentRecordClusterClusterJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgArtifactsMetadataStorageRecordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgArtifactsSubjectDigestMetadataDeploymentRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgArtifactsSubjectDigestMetadataStorageRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgAttestationsBulkListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgAttestationsDeleteRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgAttestationsDigestSubjectDigestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgAttestationsRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgAttestationsAttestationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgAttestationsSubjectDigestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgBlocksUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgBlocksUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgBlocksUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCampaignsCampaignNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgCampaignsCampaignNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgCampaignsCampaignNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCodeScanningAiScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgCodeScanningAiScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCodeScanningAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCodeSecurityConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgCodeSecurityConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCodeSecurityConfigurationsDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgCodeSecurityConfigurationsDetachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCodeSecurityConfigurationsConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgCodeSecurityConfigurationsConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgCodeSecurityConfigurationsConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgCodeSecurityConfigurationsConfigurationIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgCodeSecurityConfigurationsConfigurationIdDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCodeSecurityConfigurationsConfigurationIdRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCodespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgCodespacesAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgCodespacesAccessSelectedUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgCodespacesAccessSelectedUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCodespacesSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCodespacesSecretsPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCodespacesSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgCodespacesSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgCodespacesSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCodespacesSecretsSecretNameRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgCodespacesSecretsSecretNameRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgCodespacesSecretsSecretNameRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgCodespacesSecretsSecretNameRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCopilotSpacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgCopilotSpacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCopilotSpacesSpaceNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgCopilotSpacesSpaceNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgCopilotSpacesSpaceNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCopilotSpacesSpaceNumberCollaboratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgCopilotSpacesSpaceNumberCollaboratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgCopilotSpacesSpaceNumberCollaboratorsActorTypeActorIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgCopilotSpacesSpaceNumberCollaboratorsActorTypeActorIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCopilotSpacesSpaceNumberResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgCopilotSpacesSpaceNumberResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCopilotSpacesSpaceNumberResourcesSpaceResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgCopilotSpacesSpaceNumberResourcesSpaceResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgCopilotSpacesSpaceNumberResourcesSpaceResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCopilotBillingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCopilotBillingSeatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgCopilotBillingSelectedTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgCopilotBillingSelectedTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgCopilotBillingSelectedUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgCopilotBillingSelectedUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCopilotCodeReviewRunnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgCopilotCodeReviewRunnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCopilotCodeReviewSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgCopilotCodeReviewSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCopilotCodingAgentPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgCopilotCodingAgentPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCopilotCodingAgentPermissionsRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgCopilotCodingAgentPermissionsRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgCopilotCodingAgentPermissionsRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgCopilotCodingAgentPermissionsRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCopilotContentExclusionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgCopilotContentExclusionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCopilotMetricsReportsOrganization1DayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCopilotMetricsReportsOrganization28DayLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCopilotMetricsReportsRepos1DayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCopilotMetricsReportsUserTeams1DayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCopilotMetricsReportsUsers1DayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCopilotMetricsReportsUsers28DayLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCopilotPoliciesCodeReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgCopilotPoliciesCodeReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgDependabotAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgDependabotRepositoryAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgDependabotRepositoryAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgDependabotRepositoryAccessDefaultLevelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgDependabotSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgDependabotSecretsPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgDependabotSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgDependabotSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgDependabotSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgDependabotSecretsSecretNameRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgDependabotSecretsSecretNameRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgDependabotSecretsSecretNameRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgDependabotSecretsSecretNameRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgDockerConflictsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgFailedInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgHooksHookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgHooksHookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgHooksHookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgHooksHookIdConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgHooksHookIdConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgHooksHookIdDeliveriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgHooksHookIdDeliveriesDeliveryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgHooksHookIdDeliveriesDeliveryIdAttemptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgHooksHookIdPingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgInsightsApiRouteStatsActorTypeActorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgInsightsApiSubjectStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgInsightsApiSummaryStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgInsightsApiSummaryStatsUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgInsightsApiSummaryStatsActorTypeActorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgInsightsApiTimeStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgInsightsApiTimeStatsUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgInsightsApiTimeStatsActorTypeActorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgInsightsApiUserStatsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgInstallationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgInstallationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgInteractionLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgInteractionLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgInteractionLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgInteractionLimitsPullsCreationCapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgInteractionLimitsPullsCreationCapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgInvitationsInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgInvitationsInvitationIdTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgIssueFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgIssueFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgIssueFieldsIssueFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgIssueFieldsIssueFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgIssueTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgIssueTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgIssueTypesIssueTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgIssueTypesIssueTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgMembersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgMembersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgMembersUsernameCodespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgMembersUsernameCodespacesCodespaceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgMembersUsernameCodespacesCodespaceNameStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgMembersUsernameCopilotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgMembershipsUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgMembershipsUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgMembershipsUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgMigrationsMigrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgMigrationsMigrationIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgMigrationsMigrationIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgMigrationsMigrationIdReposRepoNameLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgMigrationsMigrationIdRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgOrganizationRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgOrganizationRolesTeamsTeamSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgOrganizationRolesTeamsTeamSlugRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgOrganizationRolesTeamsTeamSlugRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgOrganizationRolesUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgOrganizationRolesUsersUsernameRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgOrganizationRolesUsersUsernameRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgOrganizationRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgOrganizationRolesRoleIdTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgOrganizationRolesRoleIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgOutsideCollaboratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgOutsideCollaboratorsUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgOutsideCollaboratorsUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgPackagesPackageTypePackageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgPackagesPackageTypePackageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgPackagesPackageTypePackageNameRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgPackagesPackageTypePackageNameVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgPackagesPackageTypePackageNameVersionsPackageVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgPackagesPackageTypePackageNameVersionsPackageVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgPackagesPackageTypePackageNameVersionsPackageVersionIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgPersonalAccessTokenRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgPersonalAccessTokenRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgPersonalAccessTokenRequestsPatRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgPersonalAccessTokenRequestsPatRequestIdRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgPersonalAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgPersonalAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgPersonalAccessTokensPatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgPersonalAccessTokensPatIdRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgPrivateRegistriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgPrivateRegistriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgPrivateRegistriesPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgPrivateRegistriesSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgPrivateRegistriesSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgPrivateRegistriesSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgProjectsV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgProjectsV2ProjectNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgProjectsV2ProjectNumberDraftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgProjectsV2ProjectNumberFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgProjectsV2ProjectNumberFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgProjectsV2ProjectNumberFieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgProjectsV2ProjectNumberItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgProjectsV2ProjectNumberItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgProjectsV2ProjectNumberItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgProjectsV2ProjectNumberItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgProjectsV2ProjectNumberItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgProjectsV2ProjectNumberViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgProjectsV2ProjectNumberViewsViewNumberItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgPropertiesInstallationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgPropertiesInstallationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgPropertiesInstallationsSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgPropertiesInstallationsValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgPropertiesInstallationsValuesPropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgPropertiesInstallationsValuesPropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgPropertiesSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgPropertiesSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgPropertiesSchemaCustomPropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgPropertiesSchemaCustomPropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgPropertiesSchemaCustomPropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgPropertiesValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgPropertiesValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgPublicMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgPublicMembersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgPublicMembersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgPublicMembersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgRulesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgRulesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgRulesetsRuleSuitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgRulesetsRuleSuitesRuleSuiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgRulesetsRulesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgRulesetsRulesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgRulesetsRulesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgRulesetsRulesetIdHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgRulesetsRulesetIdHistoryVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgSecretScanningAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgSecretScanningCustomPatternsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgSecretScanningCustomPatternsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgSecretScanningCustomPatternsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgSecretScanningCustomPatternsPatternIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgSecretScanningPatternConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgSecretScanningPatternConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgSecurityAdvisoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgSecurityManagersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgSecurityManagersTeamsTeamSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgSecurityManagersTeamsTeamSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgSettingsImmutableReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgSettingsImmutableReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgSettingsImmutableReleasesRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgSettingsImmutableReleasesRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgSettingsImmutableReleasesRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgSettingsImmutableReleasesRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgSettingsNetworkConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgSettingsNetworkConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgSettingsNetworkConfigurationsNetworkConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgSettingsNetworkConfigurationsNetworkConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgSettingsNetworkConfigurationsNetworkConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgSettingsNetworkSettingsNetworkSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgTeamsTeamSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgTeamsTeamSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgTeamsTeamSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgTeamsTeamSlugCopilotCustomizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgTeamsTeamSlugCopilotCustomizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgTeamsTeamSlugCopilotCustomizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgTeamsTeamSlugInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgTeamsTeamSlugMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgTeamsTeamSlugMembershipsUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgTeamsTeamSlugMembershipsUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgTeamsTeamSlugMembershipsUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgTeamsTeamSlugReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgTeamsTeamSlugReposOwnerRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgTeamsTeamSlugReposOwnerRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgTeamsTeamSlugReposOwnerRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgTeamsTeamSlugTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgSecurityProductEnablementRoute, (c) => {
    throw new Error('Not implemented')
  })
