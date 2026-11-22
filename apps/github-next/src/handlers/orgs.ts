import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrgsOrgAttestationsAttestationIdRoute,
  deleteOrgsOrgAttestationsDigestSubjectDigestRoute,
  deleteOrgsOrgBlocksUsernameRoute,
  deleteOrgsOrgHooksHookIdRoute,
  deleteOrgsOrgInvitationsInvitationIdRoute,
  deleteOrgsOrgIssueFieldsIssueFieldIdRoute,
  deleteOrgsOrgIssueTypesIssueTypeIdRoute,
  deleteOrgsOrgMembershipsUsernameRoute,
  deleteOrgsOrgMembersUsernameRoute,
  deleteOrgsOrgOrganizationRolesTeamsTeamSlugRoleIdRoute,
  deleteOrgsOrgOrganizationRolesTeamsTeamSlugRoute,
  deleteOrgsOrgOrganizationRolesUsersUsernameRoleIdRoute,
  deleteOrgsOrgOrganizationRolesUsersUsernameRoute,
  deleteOrgsOrgOutsideCollaboratorsUsernameRoute,
  deleteOrgsOrgPropertiesInstallationsValuesPropertyNameRoute,
  deleteOrgsOrgPropertiesSchemaCustomPropertyNameRoute,
  deleteOrgsOrgPublicMembersUsernameRoute,
  deleteOrgsOrgRoute,
  deleteOrgsOrgSecurityManagersTeamsTeamSlugRoute,
  deleteOrgsOrgSettingsImmutableReleasesRepositoriesRepositoryIdRoute,
  getOrganizationsRoute,
  getOrgsOrgArtifactsMetadataDeploymentRecordClusterClusterJobsJobIdRoute,
  getOrgsOrgArtifactsSubjectDigestMetadataDeploymentRecordsRoute,
  getOrgsOrgArtifactsSubjectDigestMetadataStorageRecordsRoute,
  getOrgsOrgAttestationsRepositoriesRoute,
  getOrgsOrgAttestationsSubjectDigestRoute,
  getOrgsOrgBlocksRoute,
  getOrgsOrgBlocksUsernameRoute,
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
  getOrgsOrgInstallationsRoute,
  getOrgsOrgInvitationsInvitationIdTeamsRoute,
  getOrgsOrgInvitationsRoute,
  getOrgsOrgIssueFieldsRoute,
  getOrgsOrgIssueTypesRoute,
  getOrgsOrgMembershipsUsernameRoute,
  getOrgsOrgMembersRoute,
  getOrgsOrgMembersUsernameRoute,
  getOrgsOrgOrganizationRolesRoleIdRoute,
  getOrgsOrgOrganizationRolesRoleIdTeamsRoute,
  getOrgsOrgOrganizationRolesRoleIdUsersRoute,
  getOrgsOrgOrganizationRolesRoute,
  getOrgsOrgOutsideCollaboratorsRoute,
  getOrgsOrgPersonalAccessTokenRequestsPatRequestIdRepositoriesRoute,
  getOrgsOrgPersonalAccessTokenRequestsRoute,
  getOrgsOrgPersonalAccessTokensPatIdRepositoriesRoute,
  getOrgsOrgPersonalAccessTokensRoute,
  getOrgsOrgPropertiesInstallationsRoute,
  getOrgsOrgPropertiesInstallationsSchemaRoute,
  getOrgsOrgPropertiesSchemaCustomPropertyNameRoute,
  getOrgsOrgPropertiesSchemaRoute,
  getOrgsOrgPropertiesValuesRoute,
  getOrgsOrgPublicMembersRoute,
  getOrgsOrgPublicMembersUsernameRoute,
  getOrgsOrgRoute,
  getOrgsOrgRulesetsRulesetIdHistoryRoute,
  getOrgsOrgRulesetsRulesetIdHistoryVersionIdRoute,
  getOrgsOrgSecurityManagersRoute,
  getOrgsOrgSettingsImmutableReleasesRepositoriesRoute,
  getOrgsOrgSettingsImmutableReleasesRoute,
  getUserMembershipsOrgsOrgRoute,
  getUserMembershipsOrgsRoute,
  getUserOrgsRoute,
  getUsersUsernameOrgsRoute,
  patchOrgsOrgHooksHookIdConfigRoute,
  patchOrgsOrgHooksHookIdRoute,
  patchOrgsOrgIssueFieldsIssueFieldIdRoute,
  patchOrgsOrgPropertiesInstallationsValuesPropertyNameRoute,
  patchOrgsOrgPropertiesInstallationsValuesRoute,
  patchOrgsOrgPropertiesSchemaRoute,
  patchOrgsOrgPropertiesValuesRoute,
  patchOrgsOrgRoute,
  patchUserMembershipsOrgsOrgRoute,
  postOrgsOrgArtifactsMetadataDeploymentRecordClusterClusterJobsRoute,
  postOrgsOrgArtifactsMetadataDeploymentRecordClusterClusterRoute,
  postOrgsOrgArtifactsMetadataDeploymentRecordRoute,
  postOrgsOrgArtifactsMetadataStorageRecordRoute,
  postOrgsOrgAttestationsBulkListRoute,
  postOrgsOrgAttestationsDeleteRequestRoute,
  postOrgsOrgHooksHookIdDeliveriesDeliveryIdAttemptsRoute,
  postOrgsOrgHooksHookIdPingsRoute,
  postOrgsOrgHooksRoute,
  postOrgsOrgInvitationsRoute,
  postOrgsOrgIssueFieldsRoute,
  postOrgsOrgIssueTypesRoute,
  postOrgsOrgPersonalAccessTokenRequestsPatRequestIdRoute,
  postOrgsOrgPersonalAccessTokenRequestsRoute,
  postOrgsOrgPersonalAccessTokensPatIdRoute,
  postOrgsOrgPersonalAccessTokensRoute,
  postOrgsOrgPropertiesInstallationsRoute,
  postOrgsOrgSecurityProductEnablementRoute,
  putOrgsOrgBlocksUsernameRoute,
  putOrgsOrgIssueTypesIssueTypeIdRoute,
  putOrgsOrgMembershipsUsernameRoute,
  putOrgsOrgOrganizationRolesTeamsTeamSlugRoleIdRoute,
  putOrgsOrgOrganizationRolesUsersUsernameRoleIdRoute,
  putOrgsOrgOutsideCollaboratorsUsernameRoute,
  putOrgsOrgPropertiesSchemaCustomPropertyNameRoute,
  putOrgsOrgPublicMembersUsernameRoute,
  putOrgsOrgSecurityManagersTeamsTeamSlugRoute,
  putOrgsOrgSettingsImmutableReleasesRepositoriesRepositoryIdRoute,
  putOrgsOrgSettingsImmutableReleasesRepositoriesRoute,
  putOrgsOrgSettingsImmutableReleasesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsHandler = app
  .openapi(getOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgRoute, (c) => {
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
  .openapi(getOrgsOrgInstallationsRoute, (c) => {
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
  .openapi(getOrgsOrgMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgMembersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgMembersUsernameRoute, (c) => {
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
  .openapi(getOrgsOrgRulesetsRulesetIdHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgRulesetsRulesetIdHistoryVersionIdRoute, (c) => {
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
  .openapi(postOrgsOrgSecurityProductEnablementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserMembershipsOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserMembershipsOrgsOrgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserMembershipsOrgsOrgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
