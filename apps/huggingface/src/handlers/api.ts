import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiOrganizationsNameResourceGroupsResourceGroupIdRoute,
  deleteApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsernameRoute,
  deleteApiOrganizationsNameScimProvisioningV2GroupsGroupIdRoute,
  deleteApiOrganizationsNameScimProvisioningV2UsersUserIdRoute,
  deleteApiOrganizationsNameScimV2GroupsGroupIdRoute,
  deleteApiOrganizationsNameScimV2UsersUserIdRoute,
  deleteApiOrganizationsNameServiceAccountsServiceAccountIdRoute,
  deleteApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdRoute,
  deleteApiRepoTypeNamespaceRepoSqlConsoleEmbedIdRoute,
  deleteApiSettingsWebhooksWebhookIdRoute,
  getApiAgentHarnessesRoute,
  getApiBlogNamespaceSlugResourceGroupRoute,
  getApiBucketsNamespaceRepoEventsRoute,
  getApiBucketsNamespaceRepoResourceGroupRoute,
  getApiBucketsNamespaceRepoRoute,
  getApiBucketsNamespaceRepoTreePathRoute,
  getApiBucketsNamespaceRepoXetReadTokenRoute,
  getApiBucketsNamespaceRepoXetWriteTokenRoute,
  getApiBucketsNamespaceRoute,
  getApiCollectionsNamespaceSlugIdResourceGroupRoute,
  getApiCollectionsNamespaceSlugIdRoute,
  getApiCollectionsNamespaceSlugResourceGroupRoute,
  getApiCollectionsNamespaceSlugRoute,
  getApiCollectionsRoute,
  getApiContainersNamespaceRepoResourceGroupRoute,
  getApiContainersNamespaceRepoRoute,
  getApiContainersNamespaceRepoTreePathRoute,
  getApiContainersNamespaceRepoXetReadTokenRoute,
  getApiContainersNamespaceRepoXetWriteTokenRoute,
  getApiContainersNamespaceRoute,
  getApiDailyPapersRoute,
  getApiDatasetsNamespaceRepoCommitsRevRoute,
  getApiDatasetsNamespaceRepoCompareCompareRoute,
  getApiDatasetsNamespaceRepoJwtRoute,
  getApiDatasetsNamespaceRepoLeaderboardRoute,
  getApiDatasetsNamespaceRepoLfsFilesRoute,
  getApiDatasetsNamespaceRepoNotebookRevPathRoute,
  getApiDatasetsNamespaceRepoRefsRoute,
  getApiDatasetsNamespaceRepoResourceGroupRoute,
  getApiDatasetsNamespaceRepoScanRoute,
  getApiDatasetsNamespaceRepoTreeRevPathRoute,
  getApiDatasetsNamespaceRepoTreesizeRevPathRoute,
  getApiDatasetsNamespaceRepoUserAccessRequestStatusRoute,
  getApiDatasetsNamespaceRepoXetReadTokenRevRoute,
  getApiDatasetsNamespaceRepoXetWriteTokenRevRoute,
  getApiDatasetsTagsByTypeRoute,
  getApiDocsRoute,
  getApiDocsSearchFullTextRoute,
  getApiDocsSearchRoute,
  getApiJobsHardwareRoute,
  getApiJobsNamespaceCountRoute,
  getApiJobsNamespaceJobIdRoute,
  getApiJobsNamespaceRoute,
  getApiKernelsNamespaceRepoRevisionRevRoute,
  getApiKernelsNamespaceRepoRoute,
  getApiKernelsNamespaceRepoScanRoute,
  getApiKernelsRoute,
  getApiModelsNamespaceRepoCommitsRevRoute,
  getApiModelsNamespaceRepoCompareCompareRoute,
  getApiModelsNamespaceRepoJwtRoute,
  getApiModelsNamespaceRepoLfsFilesRoute,
  getApiModelsNamespaceRepoNotebookRevPathRoute,
  getApiModelsNamespaceRepoRefsRoute,
  getApiModelsNamespaceRepoResourceGroupRoute,
  getApiModelsNamespaceRepoSafetensorsMetadataPathRoute,
  getApiModelsNamespaceRepoScanRoute,
  getApiModelsNamespaceRepoTreeRevPathRoute,
  getApiModelsNamespaceRepoTreesizeRevPathRoute,
  getApiModelsNamespaceRepoUserAccessRequestStatusRoute,
  getApiModelsNamespaceRepoXetReadTokenRevRoute,
  getApiModelsNamespaceRepoXetWriteTokenRevRoute,
  getApiModelsTagsByTypeRoute,
  getApiNotificationsRoute,
  getApiOrganizationsNameAuditLogExportRoute,
  getApiOrganizationsNameAvatarRoute,
  getApiOrganizationsNameBillingCreditsRoute,
  getApiOrganizationsNameBillingUsageByInferenceSessionRoute,
  getApiOrganizationsNameBillingUsageByResourceGroupRoute,
  getApiOrganizationsNameBillingUsageInferenceRoute,
  getApiOrganizationsNameMembersRoute,
  getApiOrganizationsNameResourceGroupsResourceGroupIdInvitationsRoute,
  getApiOrganizationsNameResourceGroupsResourceGroupIdRoute,
  getApiOrganizationsNameResourceGroupsRoute,
  getApiOrganizationsNameResourceGroupsSettingsRoute,
  getApiOrganizationsNameScimProvisioningV2GroupsGroupIdRoute,
  getApiOrganizationsNameScimProvisioningV2GroupsRoute,
  getApiOrganizationsNameScimProvisioningV2UsersRoute,
  getApiOrganizationsNameScimProvisioningV2UsersUserIdRoute,
  getApiOrganizationsNameScimV2GroupsGroupIdRoute,
  getApiOrganizationsNameScimV2GroupsRoute,
  getApiOrganizationsNameScimV2ResourceTypesRoute,
  getApiOrganizationsNameScimV2SchemasRoute,
  getApiOrganizationsNameScimV2SchemasSchemaIdRoute,
  getApiOrganizationsNameScimV2ServiceProviderConfigRoute,
  getApiOrganizationsNameScimV2UsersRoute,
  getApiOrganizationsNameScimV2UsersUserIdRoute,
  getApiOrganizationsNameServiceAccountsRoute,
  getApiOrganizationsNameServiceAccountsServiceAccountIdRoute,
  getApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishersRoute,
  getApiOrganizationsNameSettingsNetworkSecurityRoute,
  getApiOrganizationsNameSettingsRepositoriesRoute,
  getApiOrganizationsNameSettingsTokensRoute,
  getApiOrganizationsNameSocialsRoute,
  getApiPapersPaperIdRoute,
  getApiPapersRoute,
  getApiQuicksearchRoute,
  getApiRegistryTokenRoute,
  getApiRepoTypeNamespaceRepoDiscussionsNumRoute,
  getApiRepoTypeNamespaceRepoDiscussionsNumStorageRoute,
  getApiRepoTypeNamespaceRepoDiscussionsRoute,
  getApiRepoTypeNamespaceRepoDuplicateStatusRoute,
  getApiRepoTypeNamespaceRepoSettingsTrustedPublishersRoute,
  getApiResolveCacheDatasetsNamespaceRepoRevPathRoute,
  getApiResolveCacheModelsNamespaceRepoRevPathRoute,
  getApiResolveCacheSpacesNamespaceRepoRevPathRoute,
  getApiScheduledJobsNamespaceJobIdRoute,
  getApiScheduledJobsNamespaceRoute,
  getApiSettingsBillingCreditsRoute,
  getApiSettingsBillingUsageByInferenceSessionRoute,
  getApiSettingsBillingUsageJobsRoute,
  getApiSettingsMcpRoute,
  getApiSettingsRepositoriesRoute,
  getApiSettingsWebhooksRoute,
  getApiSettingsWebhooksWebhookIdRoute,
  getApiSpacesHardwareRoute,
  getApiSpacesNamespaceRepoCommitsRevRoute,
  getApiSpacesNamespaceRepoCompareCompareRoute,
  getApiSpacesNamespaceRepoJwtRoute,
  getApiSpacesNamespaceRepoLfsFilesRoute,
  getApiSpacesNamespaceRepoNotebookRevPathRoute,
  getApiSpacesNamespaceRepoRefsRoute,
  getApiSpacesNamespaceRepoResourceGroupRoute,
  getApiSpacesNamespaceRepoScanRoute,
  getApiSpacesNamespaceRepoSecretsRoute,
  getApiSpacesNamespaceRepoTreeRevPathRoute,
  getApiSpacesNamespaceRepoTreesizeRevPathRoute,
  getApiSpacesNamespaceRepoVariablesRoute,
  getApiSpacesNamespaceRepoXetReadTokenRevRoute,
  getApiSpacesNamespaceRepoXetWriteTokenRevRoute,
  getApiSpacesTemplatesRoute,
  getApiSpacesZeroGpuQuotaRoute,
  getApiTrendingRoute,
  getApiUsersUsernameAvatarRoute,
  getApiUsersUsernameFollowersRoute,
  getApiUsersUsernameFollowingOrgsRoute,
  getApiUsersUsernameFollowingRoute,
  getApiUsersUsernameLikesRoute,
  getApiUsersUsernameOverviewRoute,
  getApiUsersUsernameSocialsRoute,
  getApiWhoamiV2Route,
  patchApiCollectionsNamespaceSlugIdRoute,
  patchApiCollectionsNamespaceSlugRoute,
  patchApiOrganizationsNameResourceGroupsResourceGroupIdRoute,
  patchApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsernameRoute,
  patchApiOrganizationsNameScimProvisioningV2GroupsGroupIdRoute,
  patchApiOrganizationsNameScimProvisioningV2UsersUserIdRoute,
  patchApiOrganizationsNameScimV2GroupsGroupIdRoute,
  patchApiOrganizationsNameScimV2UsersUserIdRoute,
  patchApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdRoute,
  patchApiOrganizationsNameSettingsNetworkSecurityRoute,
  patchApiRepoTypeNamespaceRepoSqlConsoleEmbedIdRoute,
  postApiBlogNamespaceSlugCommentCommentIdReplyRoute,
  postApiBlogNamespaceSlugCommentRoute,
  postApiBlogNamespaceSlugResourceGroupRoute,
  postApiBlogSlugCommentCommentIdReplyRoute,
  postApiBlogSlugCommentRoute,
  postApiBucketsNamespaceRepoBatchRoute,
  postApiBucketsNamespaceRepoLfsFilesDuplicateRoute,
  postApiBucketsNamespaceRepoPathsInfoRoute,
  postApiBucketsNamespaceRepoResourceGroupRoute,
  postApiBucketsNamespaceRepoRoute,
  postApiCollectionsNamespaceSlugIdItemsRoute,
  postApiCollectionsNamespaceSlugIdResourceGroupRoute,
  postApiCollectionsNamespaceSlugItemsRoute,
  postApiCollectionsNamespaceSlugResourceGroupRoute,
  postApiCollectionsRoute,
  postApiContainersNamespaceRepoBatchRoute,
  postApiContainersNamespaceRepoPathsInfoRoute,
  postApiContainersNamespaceRepoResourceGroupRoute,
  postApiContainersNamespaceRepoRoute,
  postApiDatasetsNamespaceRepoCommitRevRoute,
  postApiDatasetsNamespaceRepoLfsFilesDuplicateRoute,
  postApiDatasetsNamespaceRepoPathsInfoRevRoute,
  postApiDatasetsNamespaceRepoPreuploadRevRoute,
  postApiDatasetsNamespaceRepoResourceGroupRoute,
  postApiDatasetsNamespaceRepoSuperSquashRevRoute,
  postApiDatasetsNamespaceRepoUserAccessRequestBatchRoute,
  postApiInferenceEndpointsNamespaceAuthCheckPermsRoute,
  postApiInferenceEndpointsNamespaceEndpointAuthCheckPermsRoute,
  postApiJobsNamespaceAuthCheckPermsRoute,
  postApiJobsNamespaceJobIdAuthCheckPermsRoute,
  postApiJobsNamespaceJobIdCancelRoute,
  postApiJobsNamespaceJobIdDuplicateRoute,
  postApiJobsNamespaceRoute,
  postApiKernelsNamespaceRepoLfsFilesDuplicateRoute,
  postApiModelsNamespaceRepoCommitRevRoute,
  postApiModelsNamespaceRepoLfsFilesDuplicateRoute,
  postApiModelsNamespaceRepoPathsInfoRevRoute,
  postApiModelsNamespaceRepoPreuploadRevRoute,
  postApiModelsNamespaceRepoResourceGroupRoute,
  postApiModelsNamespaceRepoSuperSquashRevRoute,
  postApiModelsNamespaceRepoUserAccessRequestBatchRoute,
  postApiOrganizationsNameBillingPrepaidCreditsPurchaseLinkRoute,
  postApiOrganizationsNameResourceGroupsResourceGroupIdInvitationIdResendRoute,
  postApiOrganizationsNameResourceGroupsResourceGroupIdInviteRoute,
  postApiOrganizationsNameResourceGroupsResourceGroupIdSettingsRoute,
  postApiOrganizationsNameResourceGroupsResourceGroupIdUsersRoute,
  postApiOrganizationsNameResourceGroupsRoute,
  postApiOrganizationsNameResourceGroupsSettingsRoute,
  postApiOrganizationsNameScimProvisioningV2GroupsRoute,
  postApiOrganizationsNameScimProvisioningV2UsersRoute,
  postApiOrganizationsNameScimV2GroupsRoute,
  postApiOrganizationsNameScimV2UsersRoute,
  postApiOrganizationsNameServiceAccountsRoute,
  postApiOrganizationsNameServiceAccountsServiceAccountIdTokensRoute,
  postApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdRotateRoute,
  postApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishersRoute,
  postApiPapersIndexRoute,
  postApiPapersPaperIdCommentCommentIdReplyRoute,
  postApiPapersPaperIdCommentRoute,
  postApiPapersPaperIdLinksRoute,
  postApiPapersPaperIdMediaRoute,
  postApiPostsUsernamePostSlugCommentCommentIdReplyRoute,
  postApiPostsUsernamePostSlugCommentRoute,
  postApiQuicksearchRoute,
  postApiReposCreateRoute,
  postApiRepoTypeNamespaceRepoDiscussionsNumCommentRoute,
  postApiRepoTypeNamespaceRepoDiscussionsNumStatusRoute,
  postApiRepoTypeNamespaceRepoDiscussionsNumTitleRoute,
  postApiRepoTypeNamespaceRepoDiscussionsRoute,
  postApiRepoTypeNamespaceRepoDuplicateRoute,
  postApiRepoTypeNamespaceRepoSettingsTrustedPublishersRoute,
  postApiRepoTypeNamespaceRepoSqlConsoleEmbedIdHideRoute,
  postApiRepoTypeNamespaceRepoSqlConsoleEmbedRoute,
  postApiScheduledJobsNamespaceJobIdRunRoute,
  postApiScheduledJobsNamespaceJobIdScheduleRoute,
  postApiScheduledJobsNamespaceRoute,
  postApiSettingsBillingPrepaidCreditsPurchaseLinkRoute,
  postApiSettingsPapersClaimRoute,
  postApiSettingsWebhooksRoute,
  postApiSettingsWebhooksWebhookIdActionRoute,
  postApiSettingsWebhooksWebhookIdReplayLogIdRoute,
  postApiSettingsWebhooksWebhookIdRoute,
  postApiSpacesNamespaceRepoCommitRevRoute,
  postApiSpacesNamespaceRepoLfsFilesDuplicateRoute,
  postApiSpacesNamespaceRepoPathsInfoRevRoute,
  postApiSpacesNamespaceRepoPreuploadRevRoute,
  postApiSpacesNamespaceRepoResourceGroupRoute,
  postApiSpacesNamespaceRepoSuperSquashRevRoute,
  putApiBucketsNamespaceRepoSettingsRoute,
  putApiContainersNamespaceRepoSettingsRoute,
  putApiDatasetsNamespaceRepoSettingsRoute,
  putApiJobsNamespaceJobIdExposeRoute,
  putApiJobsNamespaceJobIdLabelsRoute,
  putApiModelsNamespaceRepoSettingsRoute,
  putApiOrganizationsNameScimProvisioningV2GroupsGroupIdRoute,
  putApiOrganizationsNameScimProvisioningV2UsersUserIdRoute,
  putApiOrganizationsNameScimV2GroupsGroupIdRoute,
  putApiOrganizationsNameScimV2UsersUserIdRoute,
  putApiOrganizationsNameSettingsSsoCredentialsRoute,
  putApiScheduledJobsNamespaceJobIdLabelsRoute,
  putApiSpacesNamespaceRepoSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsMcpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiSettingsWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsWebhooksWebhookIdActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsWebhooksWebhookIdReplayLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsPapersClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameSettingsTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameSettingsRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiOrganizationsNameSettingsSsoCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameAuditLogExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiOrganizationsNameResourceGroupsResourceGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiOrganizationsNameResourceGroupsResourceGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameResourceGroupsResourceGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrganizationsNameResourceGroupsResourceGroupIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrganizationsNameResourceGroupsResourceGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrganizationsNameResourceGroupsResourceGroupIdInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameResourceGroupsResourceGroupIdInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrganizationsNameResourceGroupsResourceGroupIdInvitationIdResendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameResourceGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrganizationsNameResourceGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameResourceGroupsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrganizationsNameResourceGroupsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameSettingsNetworkSecurityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiOrganizationsNameSettingsNetworkSecurityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameServiceAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrganizationsNameServiceAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameServiceAccountsServiceAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiOrganizationsNameServiceAccountsServiceAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrganizationsNameServiceAccountsServiceAccountIdTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameScimV2ServiceProviderConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameScimV2ResourceTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameScimV2SchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameScimV2SchemasSchemaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameScimV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrganizationsNameScimV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameScimV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiOrganizationsNameScimV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiOrganizationsNameScimV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiOrganizationsNameScimV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameScimV2GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrganizationsNameScimV2GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameScimV2GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiOrganizationsNameScimV2GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiOrganizationsNameScimV2GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiOrganizationsNameScimV2GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameScimProvisioningV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrganizationsNameScimProvisioningV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameScimProvisioningV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiOrganizationsNameScimProvisioningV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiOrganizationsNameScimProvisioningV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiOrganizationsNameScimProvisioningV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameScimProvisioningV2GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrganizationsNameScimProvisioningV2GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameScimProvisioningV2GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiOrganizationsNameScimProvisioningV2GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiOrganizationsNameScimProvisioningV2GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiOrganizationsNameScimProvisioningV2GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRegistryTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBlogSlugCommentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBlogSlugCommentCommentIdReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBlogNamespaceSlugCommentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBlogNamespaceSlugCommentCommentIdReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBlogNamespaceSlugResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBlogNamespaceSlugResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDocsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDocsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDocsSearchFullTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWhoamiV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameBillingUsageByResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameBillingUsageByInferenceSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameBillingUsageInferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameBillingCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrganizationsNameBillingPrepaidCreditsPurchaseLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsBillingCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsBillingPrepaidCreditsPurchaseLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsBillingUsageByInferenceSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsBillingUsageJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUsernameOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUsernameSocialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUsernameAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUsernameLikesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUsernameFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUsernameFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUsernameFollowingOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameSocialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInferenceEndpointsNamespaceAuthCheckPermsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInferenceEndpointsNamespaceEndpointAuthCheckPermsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiJobsNamespaceAuthCheckPermsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiJobsNamespaceJobIdAuthCheckPermsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiModelsNamespaceRepoTreesizeRevPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesNamespaceRepoTreesizeRevPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDatasetsNamespaceRepoTreesizeRevPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiModelsNamespaceRepoSafetensorsMetadataPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiModelsNamespaceRepoLfsFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDatasetsNamespaceRepoLfsFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesNamespaceRepoLfsFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiModelsNamespaceRepoLfsFilesDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiKernelsNamespaceRepoLfsFilesDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDatasetsNamespaceRepoLfsFilesDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSpacesNamespaceRepoLfsFilesDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBucketsNamespaceRepoLfsFilesDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiModelsNamespaceRepoCommitsRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesNamespaceRepoCommitsRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDatasetsNamespaceRepoCommitsRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiModelsNamespaceRepoRefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDatasetsNamespaceRepoRefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesNamespaceRepoRefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiModelsNamespaceRepoCompareCompareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDatasetsNamespaceRepoCompareCompareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesNamespaceRepoCompareCompareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiModelsNamespaceRepoPathsInfoRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDatasetsNamespaceRepoPathsInfoRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSpacesNamespaceRepoPathsInfoRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiModelsNamespaceRepoPreuploadRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSpacesNamespaceRepoPreuploadRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDatasetsNamespaceRepoPreuploadRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiModelsNamespaceRepoXetWriteTokenRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesNamespaceRepoXetWriteTokenRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDatasetsNamespaceRepoXetWriteTokenRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBucketsNamespaceRepoXetWriteTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiContainersNamespaceRepoXetWriteTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiModelsNamespaceRepoXetReadTokenRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesNamespaceRepoXetReadTokenRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDatasetsNamespaceRepoXetReadTokenRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBucketsNamespaceRepoXetReadTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiContainersNamespaceRepoXetReadTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiModelsNamespaceRepoCommitRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDatasetsNamespaceRepoCommitRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSpacesNamespaceRepoCommitRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiModelsNamespaceRepoResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiModelsNamespaceRepoResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSpacesNamespaceRepoResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesNamespaceRepoResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDatasetsNamespaceRepoResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDatasetsNamespaceRepoResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBucketsNamespaceRepoResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBucketsNamespaceRepoResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiContainersNamespaceRepoResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiContainersNamespaceRepoResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiModelsNamespaceRepoSuperSquashRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDatasetsNamespaceRepoSuperSquashRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSpacesNamespaceRepoSuperSquashRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiModelsNamespaceRepoSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiSpacesNamespaceRepoSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDatasetsNamespaceRepoSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRepoTypeNamespaceRepoSettingsTrustedPublishersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRepoTypeNamespaceRepoSettingsTrustedPublishersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiModelsNamespaceRepoTreeRevPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesNamespaceRepoTreeRevPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDatasetsNamespaceRepoTreeRevPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiModelsNamespaceRepoNotebookRevPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDatasetsNamespaceRepoNotebookRevPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesNamespaceRepoNotebookRevPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiModelsNamespaceRepoScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDatasetsNamespaceRepoScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesNamespaceRepoScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKernelsNamespaceRepoScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRepoTypeNamespaceRepoDiscussionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRepoTypeNamespaceRepoDiscussionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRepoTypeNamespaceRepoDiscussionsNumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRepoTypeNamespaceRepoDiscussionsNumCommentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRepoTypeNamespaceRepoDiscussionsNumStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRepoTypeNamespaceRepoDiscussionsNumTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRepoTypeNamespaceRepoDiscussionsNumStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKernelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKernelsNamespaceRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKernelsNamespaceRepoRevisionRevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDatasetsNamespaceRepoLeaderboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiModelsNamespaceRepoJwtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesNamespaceRepoJwtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDatasetsNamespaceRepoJwtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAgentHarnessesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiModelsTagsByTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDatasetsTagsByTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTrendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiQuicksearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiQuicksearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesHardwareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesZeroGpuQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesNamespaceRepoSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesNamespaceRepoVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRepoTypeNamespaceRepoDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRepoTypeNamespaceRepoDuplicateStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReposCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiRepoTypeNamespaceRepoSqlConsoleEmbedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiRepoTypeNamespaceRepoSqlConsoleEmbedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRepoTypeNamespaceRepoSqlConsoleEmbedIdHideRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRepoTypeNamespaceRepoSqlConsoleEmbedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiResolveCacheSpacesNamespaceRepoRevPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiResolveCacheDatasetsNamespaceRepoRevPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiResolveCacheModelsNamespaceRepoRevPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiModelsNamespaceRepoUserAccessRequestStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDatasetsNamespaceRepoUserAccessRequestStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiModelsNamespaceRepoUserAccessRequestBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDatasetsNamespaceRepoUserAccessRequestBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDailyPapersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPapersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPapersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPapersPaperIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPapersPaperIdCommentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPapersPaperIdCommentCommentIdReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPapersPaperIdLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPapersPaperIdMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPostsUsernamePostSlugCommentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPostsUsernamePostSlugCommentCommentIdReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCollectionsNamespaceSlugIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiCollectionsNamespaceSlugIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCollectionsNamespaceSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiCollectionsNamespaceSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCollectionsNamespaceSlugIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCollectionsNamespaceSlugItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCollectionsNamespaceSlugIdResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCollectionsNamespaceSlugIdResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCollectionsNamespaceSlugResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCollectionsNamespaceSlugResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBucketsNamespaceRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBucketsNamespaceRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiContainersNamespaceRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiContainersNamespaceRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiBucketsNamespaceRepoSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiContainersNamespaceRepoSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBucketsNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiContainersNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBucketsNamespaceRepoBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiContainersNamespaceRepoBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBucketsNamespaceRepoTreePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiContainersNamespaceRepoTreePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBucketsNamespaceRepoEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBucketsNamespaceRepoPathsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiContainersNamespaceRepoPathsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJobsHardwareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJobsNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiJobsNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJobsNamespaceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJobsNamespaceJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiJobsNamespaceJobIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiJobsNamespaceJobIdDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiJobsNamespaceJobIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiJobsNamespaceJobIdExposeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiScheduledJobsNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiScheduledJobsNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiScheduledJobsNamespaceJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiScheduledJobsNamespaceJobIdRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiScheduledJobsNamespaceJobIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiScheduledJobsNamespaceJobIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
