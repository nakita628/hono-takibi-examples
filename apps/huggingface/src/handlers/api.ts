import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const getApiNotificationsRouteHandler: RouteHandler<
  typeof getApiNotificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSettingsMcpRouteHandler: RouteHandler<typeof getApiSettingsMcpRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiSettingsWebhooksRouteHandler: RouteHandler<
  typeof getApiSettingsWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSettingsWebhooksRouteHandler: RouteHandler<
  typeof postApiSettingsWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSettingsWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof getApiSettingsWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSettingsWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof postApiSettingsWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiSettingsWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof deleteApiSettingsWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSettingsWebhooksWebhookIdActionRouteHandler: RouteHandler<
  typeof postApiSettingsWebhooksWebhookIdActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSettingsWebhooksWebhookIdReplayLogIdRouteHandler: RouteHandler<
  typeof postApiSettingsWebhooksWebhookIdReplayLogIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSettingsPapersClaimRouteHandler: RouteHandler<
  typeof postApiSettingsPapersClaimRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSettingsRepositoriesRouteHandler: RouteHandler<
  typeof getApiSettingsRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOrganizationsNameSettingsTokensRouteHandler: RouteHandler<
  typeof getApiOrganizationsNameSettingsTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOrganizationsNameSettingsRepositoriesRouteHandler: RouteHandler<
  typeof getApiOrganizationsNameSettingsRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiOrganizationsNameSettingsSsoCredentialsRouteHandler: RouteHandler<
  typeof putApiOrganizationsNameSettingsSsoCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOrganizationsNameAuditLogExportRouteHandler: RouteHandler<
  typeof getApiOrganizationsNameAuditLogExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiOrganizationsNameResourceGroupsResourceGroupIdRouteHandler: RouteHandler<
  typeof patchApiOrganizationsNameResourceGroupsResourceGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiOrganizationsNameResourceGroupsResourceGroupIdRouteHandler: RouteHandler<
  typeof deleteApiOrganizationsNameResourceGroupsResourceGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOrganizationsNameResourceGroupsResourceGroupIdRouteHandler: RouteHandler<
  typeof getApiOrganizationsNameResourceGroupsResourceGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiOrganizationsNameResourceGroupsResourceGroupIdSettingsRouteHandler: RouteHandler<
  typeof postApiOrganizationsNameResourceGroupsResourceGroupIdSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiOrganizationsNameResourceGroupsResourceGroupIdUsersRouteHandler: RouteHandler<
  typeof postApiOrganizationsNameResourceGroupsResourceGroupIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiOrganizationsNameResourceGroupsResourceGroupIdInviteRouteHandler: RouteHandler<
  typeof postApiOrganizationsNameResourceGroupsResourceGroupIdInviteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOrganizationsNameResourceGroupsResourceGroupIdInvitationsRouteHandler: RouteHandler<
  typeof getApiOrganizationsNameResourceGroupsResourceGroupIdInvitationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiOrganizationsNameResourceGroupsResourceGroupIdInvitationIdResendRouteHandler: RouteHandler<
  typeof postApiOrganizationsNameResourceGroupsResourceGroupIdInvitationIdResendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsernameRouteHandler: RouteHandler<
  typeof deleteApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsernameRouteHandler: RouteHandler<
  typeof patchApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOrganizationsNameResourceGroupsRouteHandler: RouteHandler<
  typeof getApiOrganizationsNameResourceGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiOrganizationsNameResourceGroupsRouteHandler: RouteHandler<
  typeof postApiOrganizationsNameResourceGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOrganizationsNameResourceGroupsSettingsRouteHandler: RouteHandler<
  typeof getApiOrganizationsNameResourceGroupsSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiOrganizationsNameResourceGroupsSettingsRouteHandler: RouteHandler<
  typeof postApiOrganizationsNameResourceGroupsSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOrganizationsNameSettingsNetworkSecurityRouteHandler: RouteHandler<
  typeof getApiOrganizationsNameSettingsNetworkSecurityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiOrganizationsNameSettingsNetworkSecurityRouteHandler: RouteHandler<
  typeof patchApiOrganizationsNameSettingsNetworkSecurityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOrganizationsNameServiceAccountsRouteHandler: RouteHandler<
  typeof getApiOrganizationsNameServiceAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiOrganizationsNameServiceAccountsRouteHandler: RouteHandler<
  typeof postApiOrganizationsNameServiceAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOrganizationsNameServiceAccountsServiceAccountIdRouteHandler: RouteHandler<
  typeof getApiOrganizationsNameServiceAccountsServiceAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiOrganizationsNameServiceAccountsServiceAccountIdRouteHandler: RouteHandler<
  typeof deleteApiOrganizationsNameServiceAccountsServiceAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiOrganizationsNameServiceAccountsServiceAccountIdTokensRouteHandler: RouteHandler<
  typeof postApiOrganizationsNameServiceAccountsServiceAccountIdTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdRouteHandler: RouteHandler<
  typeof deleteApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdRouteHandler: RouteHandler<
  typeof patchApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdRotateRouteHandler: RouteHandler<
  typeof postApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdRotateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishersRouteHandler: RouteHandler<
  typeof getApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishersRouteHandler: RouteHandler<
  typeof postApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOrganizationsNameAvatarRouteHandler: RouteHandler<
  typeof getApiOrganizationsNameAvatarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOrganizationsNameMembersRouteHandler: RouteHandler<
  typeof getApiOrganizationsNameMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOrganizationsNameScimV2ServiceProviderConfigRouteHandler: RouteHandler<
  typeof getApiOrganizationsNameScimV2ServiceProviderConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOrganizationsNameScimV2ResourceTypesRouteHandler: RouteHandler<
  typeof getApiOrganizationsNameScimV2ResourceTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOrganizationsNameScimV2SchemasRouteHandler: RouteHandler<
  typeof getApiOrganizationsNameScimV2SchemasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOrganizationsNameScimV2SchemasSchemaIdRouteHandler: RouteHandler<
  typeof getApiOrganizationsNameScimV2SchemasSchemaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOrganizationsNameScimV2UsersRouteHandler: RouteHandler<
  typeof getApiOrganizationsNameScimV2UsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiOrganizationsNameScimV2UsersRouteHandler: RouteHandler<
  typeof postApiOrganizationsNameScimV2UsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOrganizationsNameScimV2UsersUserIdRouteHandler: RouteHandler<
  typeof getApiOrganizationsNameScimV2UsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiOrganizationsNameScimV2UsersUserIdRouteHandler: RouteHandler<
  typeof patchApiOrganizationsNameScimV2UsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiOrganizationsNameScimV2UsersUserIdRouteHandler: RouteHandler<
  typeof putApiOrganizationsNameScimV2UsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiOrganizationsNameScimV2UsersUserIdRouteHandler: RouteHandler<
  typeof deleteApiOrganizationsNameScimV2UsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOrganizationsNameScimV2GroupsRouteHandler: RouteHandler<
  typeof getApiOrganizationsNameScimV2GroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiOrganizationsNameScimV2GroupsRouteHandler: RouteHandler<
  typeof postApiOrganizationsNameScimV2GroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOrganizationsNameScimV2GroupsGroupIdRouteHandler: RouteHandler<
  typeof getApiOrganizationsNameScimV2GroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiOrganizationsNameScimV2GroupsGroupIdRouteHandler: RouteHandler<
  typeof putApiOrganizationsNameScimV2GroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiOrganizationsNameScimV2GroupsGroupIdRouteHandler: RouteHandler<
  typeof patchApiOrganizationsNameScimV2GroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiOrganizationsNameScimV2GroupsGroupIdRouteHandler: RouteHandler<
  typeof deleteApiOrganizationsNameScimV2GroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOrganizationsNameScimProvisioningV2UsersRouteHandler: RouteHandler<
  typeof getApiOrganizationsNameScimProvisioningV2UsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiOrganizationsNameScimProvisioningV2UsersRouteHandler: RouteHandler<
  typeof postApiOrganizationsNameScimProvisioningV2UsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOrganizationsNameScimProvisioningV2UsersUserIdRouteHandler: RouteHandler<
  typeof getApiOrganizationsNameScimProvisioningV2UsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiOrganizationsNameScimProvisioningV2UsersUserIdRouteHandler: RouteHandler<
  typeof patchApiOrganizationsNameScimProvisioningV2UsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiOrganizationsNameScimProvisioningV2UsersUserIdRouteHandler: RouteHandler<
  typeof putApiOrganizationsNameScimProvisioningV2UsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiOrganizationsNameScimProvisioningV2UsersUserIdRouteHandler: RouteHandler<
  typeof deleteApiOrganizationsNameScimProvisioningV2UsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOrganizationsNameScimProvisioningV2GroupsRouteHandler: RouteHandler<
  typeof getApiOrganizationsNameScimProvisioningV2GroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiOrganizationsNameScimProvisioningV2GroupsRouteHandler: RouteHandler<
  typeof postApiOrganizationsNameScimProvisioningV2GroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOrganizationsNameScimProvisioningV2GroupsGroupIdRouteHandler: RouteHandler<
  typeof getApiOrganizationsNameScimProvisioningV2GroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiOrganizationsNameScimProvisioningV2GroupsGroupIdRouteHandler: RouteHandler<
  typeof putApiOrganizationsNameScimProvisioningV2GroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiOrganizationsNameScimProvisioningV2GroupsGroupIdRouteHandler: RouteHandler<
  typeof patchApiOrganizationsNameScimProvisioningV2GroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiOrganizationsNameScimProvisioningV2GroupsGroupIdRouteHandler: RouteHandler<
  typeof deleteApiOrganizationsNameScimProvisioningV2GroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiRegistryTokenRouteHandler: RouteHandler<
  typeof getApiRegistryTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiBlogSlugCommentRouteHandler: RouteHandler<
  typeof postApiBlogSlugCommentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiBlogSlugCommentCommentIdReplyRouteHandler: RouteHandler<
  typeof postApiBlogSlugCommentCommentIdReplyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiBlogNamespaceSlugCommentRouteHandler: RouteHandler<
  typeof postApiBlogNamespaceSlugCommentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiBlogNamespaceSlugCommentCommentIdReplyRouteHandler: RouteHandler<
  typeof postApiBlogNamespaceSlugCommentCommentIdReplyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiBlogNamespaceSlugResourceGroupRouteHandler: RouteHandler<
  typeof getApiBlogNamespaceSlugResourceGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiBlogNamespaceSlugResourceGroupRouteHandler: RouteHandler<
  typeof postApiBlogNamespaceSlugResourceGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDocsRouteHandler: RouteHandler<typeof getApiDocsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDocsSearchRouteHandler: RouteHandler<typeof getApiDocsSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiDocsSearchFullTextRouteHandler: RouteHandler<
  typeof getApiDocsSearchFullTextRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiWhoamiV2RouteHandler: RouteHandler<typeof getApiWhoamiV2Route> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOrganizationsNameBillingUsageByResourceGroupRouteHandler: RouteHandler<
  typeof getApiOrganizationsNameBillingUsageByResourceGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOrganizationsNameBillingUsageByInferenceSessionRouteHandler: RouteHandler<
  typeof getApiOrganizationsNameBillingUsageByInferenceSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOrganizationsNameBillingUsageInferenceRouteHandler: RouteHandler<
  typeof getApiOrganizationsNameBillingUsageInferenceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOrganizationsNameBillingCreditsRouteHandler: RouteHandler<
  typeof getApiOrganizationsNameBillingCreditsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiOrganizationsNameBillingPrepaidCreditsPurchaseLinkRouteHandler: RouteHandler<
  typeof postApiOrganizationsNameBillingPrepaidCreditsPurchaseLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSettingsBillingCreditsRouteHandler: RouteHandler<
  typeof getApiSettingsBillingCreditsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSettingsBillingPrepaidCreditsPurchaseLinkRouteHandler: RouteHandler<
  typeof postApiSettingsBillingPrepaidCreditsPurchaseLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSettingsBillingUsageByInferenceSessionRouteHandler: RouteHandler<
  typeof getApiSettingsBillingUsageByInferenceSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSettingsBillingUsageJobsRouteHandler: RouteHandler<
  typeof getApiSettingsBillingUsageJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUsersUsernameOverviewRouteHandler: RouteHandler<
  typeof getApiUsersUsernameOverviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUsersUsernameSocialsRouteHandler: RouteHandler<
  typeof getApiUsersUsernameSocialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUsersUsernameAvatarRouteHandler: RouteHandler<
  typeof getApiUsersUsernameAvatarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUsersUsernameLikesRouteHandler: RouteHandler<
  typeof getApiUsersUsernameLikesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUsersUsernameFollowersRouteHandler: RouteHandler<
  typeof getApiUsersUsernameFollowersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUsersUsernameFollowingRouteHandler: RouteHandler<
  typeof getApiUsersUsernameFollowingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUsersUsernameFollowingOrgsRouteHandler: RouteHandler<
  typeof getApiUsersUsernameFollowingOrgsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOrganizationsNameSocialsRouteHandler: RouteHandler<
  typeof getApiOrganizationsNameSocialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiInferenceEndpointsNamespaceAuthCheckPermsRouteHandler: RouteHandler<
  typeof postApiInferenceEndpointsNamespaceAuthCheckPermsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiInferenceEndpointsNamespaceEndpointAuthCheckPermsRouteHandler: RouteHandler<
  typeof postApiInferenceEndpointsNamespaceEndpointAuthCheckPermsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiJobsNamespaceAuthCheckPermsRouteHandler: RouteHandler<
  typeof postApiJobsNamespaceAuthCheckPermsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiJobsNamespaceJobIdAuthCheckPermsRouteHandler: RouteHandler<
  typeof postApiJobsNamespaceJobIdAuthCheckPermsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiModelsNamespaceRepoTreesizeRevPathRouteHandler: RouteHandler<
  typeof getApiModelsNamespaceRepoTreesizeRevPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSpacesNamespaceRepoTreesizeRevPathRouteHandler: RouteHandler<
  typeof getApiSpacesNamespaceRepoTreesizeRevPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDatasetsNamespaceRepoTreesizeRevPathRouteHandler: RouteHandler<
  typeof getApiDatasetsNamespaceRepoTreesizeRevPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiModelsNamespaceRepoSafetensorsMetadataPathRouteHandler: RouteHandler<
  typeof getApiModelsNamespaceRepoSafetensorsMetadataPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiModelsNamespaceRepoLfsFilesRouteHandler: RouteHandler<
  typeof getApiModelsNamespaceRepoLfsFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDatasetsNamespaceRepoLfsFilesRouteHandler: RouteHandler<
  typeof getApiDatasetsNamespaceRepoLfsFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSpacesNamespaceRepoLfsFilesRouteHandler: RouteHandler<
  typeof getApiSpacesNamespaceRepoLfsFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiModelsNamespaceRepoLfsFilesDuplicateRouteHandler: RouteHandler<
  typeof postApiModelsNamespaceRepoLfsFilesDuplicateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiKernelsNamespaceRepoLfsFilesDuplicateRouteHandler: RouteHandler<
  typeof postApiKernelsNamespaceRepoLfsFilesDuplicateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiDatasetsNamespaceRepoLfsFilesDuplicateRouteHandler: RouteHandler<
  typeof postApiDatasetsNamespaceRepoLfsFilesDuplicateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSpacesNamespaceRepoLfsFilesDuplicateRouteHandler: RouteHandler<
  typeof postApiSpacesNamespaceRepoLfsFilesDuplicateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiBucketsNamespaceRepoLfsFilesDuplicateRouteHandler: RouteHandler<
  typeof postApiBucketsNamespaceRepoLfsFilesDuplicateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiModelsNamespaceRepoCommitsRevRouteHandler: RouteHandler<
  typeof getApiModelsNamespaceRepoCommitsRevRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSpacesNamespaceRepoCommitsRevRouteHandler: RouteHandler<
  typeof getApiSpacesNamespaceRepoCommitsRevRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDatasetsNamespaceRepoCommitsRevRouteHandler: RouteHandler<
  typeof getApiDatasetsNamespaceRepoCommitsRevRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiModelsNamespaceRepoRefsRouteHandler: RouteHandler<
  typeof getApiModelsNamespaceRepoRefsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDatasetsNamespaceRepoRefsRouteHandler: RouteHandler<
  typeof getApiDatasetsNamespaceRepoRefsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSpacesNamespaceRepoRefsRouteHandler: RouteHandler<
  typeof getApiSpacesNamespaceRepoRefsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiModelsNamespaceRepoCompareCompareRouteHandler: RouteHandler<
  typeof getApiModelsNamespaceRepoCompareCompareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDatasetsNamespaceRepoCompareCompareRouteHandler: RouteHandler<
  typeof getApiDatasetsNamespaceRepoCompareCompareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSpacesNamespaceRepoCompareCompareRouteHandler: RouteHandler<
  typeof getApiSpacesNamespaceRepoCompareCompareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiModelsNamespaceRepoPathsInfoRevRouteHandler: RouteHandler<
  typeof postApiModelsNamespaceRepoPathsInfoRevRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiDatasetsNamespaceRepoPathsInfoRevRouteHandler: RouteHandler<
  typeof postApiDatasetsNamespaceRepoPathsInfoRevRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSpacesNamespaceRepoPathsInfoRevRouteHandler: RouteHandler<
  typeof postApiSpacesNamespaceRepoPathsInfoRevRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiModelsNamespaceRepoPreuploadRevRouteHandler: RouteHandler<
  typeof postApiModelsNamespaceRepoPreuploadRevRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSpacesNamespaceRepoPreuploadRevRouteHandler: RouteHandler<
  typeof postApiSpacesNamespaceRepoPreuploadRevRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiDatasetsNamespaceRepoPreuploadRevRouteHandler: RouteHandler<
  typeof postApiDatasetsNamespaceRepoPreuploadRevRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiModelsNamespaceRepoXetWriteTokenRevRouteHandler: RouteHandler<
  typeof getApiModelsNamespaceRepoXetWriteTokenRevRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSpacesNamespaceRepoXetWriteTokenRevRouteHandler: RouteHandler<
  typeof getApiSpacesNamespaceRepoXetWriteTokenRevRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDatasetsNamespaceRepoXetWriteTokenRevRouteHandler: RouteHandler<
  typeof getApiDatasetsNamespaceRepoXetWriteTokenRevRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiBucketsNamespaceRepoXetWriteTokenRouteHandler: RouteHandler<
  typeof getApiBucketsNamespaceRepoXetWriteTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiContainersNamespaceRepoXetWriteTokenRouteHandler: RouteHandler<
  typeof getApiContainersNamespaceRepoXetWriteTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiModelsNamespaceRepoXetReadTokenRevRouteHandler: RouteHandler<
  typeof getApiModelsNamespaceRepoXetReadTokenRevRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSpacesNamespaceRepoXetReadTokenRevRouteHandler: RouteHandler<
  typeof getApiSpacesNamespaceRepoXetReadTokenRevRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDatasetsNamespaceRepoXetReadTokenRevRouteHandler: RouteHandler<
  typeof getApiDatasetsNamespaceRepoXetReadTokenRevRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiBucketsNamespaceRepoXetReadTokenRouteHandler: RouteHandler<
  typeof getApiBucketsNamespaceRepoXetReadTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiContainersNamespaceRepoXetReadTokenRouteHandler: RouteHandler<
  typeof getApiContainersNamespaceRepoXetReadTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiModelsNamespaceRepoCommitRevRouteHandler: RouteHandler<
  typeof postApiModelsNamespaceRepoCommitRevRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiDatasetsNamespaceRepoCommitRevRouteHandler: RouteHandler<
  typeof postApiDatasetsNamespaceRepoCommitRevRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSpacesNamespaceRepoCommitRevRouteHandler: RouteHandler<
  typeof postApiSpacesNamespaceRepoCommitRevRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiModelsNamespaceRepoResourceGroupRouteHandler: RouteHandler<
  typeof postApiModelsNamespaceRepoResourceGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiModelsNamespaceRepoResourceGroupRouteHandler: RouteHandler<
  typeof getApiModelsNamespaceRepoResourceGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSpacesNamespaceRepoResourceGroupRouteHandler: RouteHandler<
  typeof postApiSpacesNamespaceRepoResourceGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSpacesNamespaceRepoResourceGroupRouteHandler: RouteHandler<
  typeof getApiSpacesNamespaceRepoResourceGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiDatasetsNamespaceRepoResourceGroupRouteHandler: RouteHandler<
  typeof postApiDatasetsNamespaceRepoResourceGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDatasetsNamespaceRepoResourceGroupRouteHandler: RouteHandler<
  typeof getApiDatasetsNamespaceRepoResourceGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiBucketsNamespaceRepoResourceGroupRouteHandler: RouteHandler<
  typeof postApiBucketsNamespaceRepoResourceGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiBucketsNamespaceRepoResourceGroupRouteHandler: RouteHandler<
  typeof getApiBucketsNamespaceRepoResourceGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiContainersNamespaceRepoResourceGroupRouteHandler: RouteHandler<
  typeof postApiContainersNamespaceRepoResourceGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiContainersNamespaceRepoResourceGroupRouteHandler: RouteHandler<
  typeof getApiContainersNamespaceRepoResourceGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiModelsNamespaceRepoSuperSquashRevRouteHandler: RouteHandler<
  typeof postApiModelsNamespaceRepoSuperSquashRevRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiDatasetsNamespaceRepoSuperSquashRevRouteHandler: RouteHandler<
  typeof postApiDatasetsNamespaceRepoSuperSquashRevRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSpacesNamespaceRepoSuperSquashRevRouteHandler: RouteHandler<
  typeof postApiSpacesNamespaceRepoSuperSquashRevRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiModelsNamespaceRepoSettingsRouteHandler: RouteHandler<
  typeof putApiModelsNamespaceRepoSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiSpacesNamespaceRepoSettingsRouteHandler: RouteHandler<
  typeof putApiSpacesNamespaceRepoSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiDatasetsNamespaceRepoSettingsRouteHandler: RouteHandler<
  typeof putApiDatasetsNamespaceRepoSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiRepoTypeNamespaceRepoSettingsTrustedPublishersRouteHandler: RouteHandler<
  typeof getApiRepoTypeNamespaceRepoSettingsTrustedPublishersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiRepoTypeNamespaceRepoSettingsTrustedPublishersRouteHandler: RouteHandler<
  typeof postApiRepoTypeNamespaceRepoSettingsTrustedPublishersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiModelsNamespaceRepoTreeRevPathRouteHandler: RouteHandler<
  typeof getApiModelsNamespaceRepoTreeRevPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSpacesNamespaceRepoTreeRevPathRouteHandler: RouteHandler<
  typeof getApiSpacesNamespaceRepoTreeRevPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDatasetsNamespaceRepoTreeRevPathRouteHandler: RouteHandler<
  typeof getApiDatasetsNamespaceRepoTreeRevPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiModelsNamespaceRepoNotebookRevPathRouteHandler: RouteHandler<
  typeof getApiModelsNamespaceRepoNotebookRevPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDatasetsNamespaceRepoNotebookRevPathRouteHandler: RouteHandler<
  typeof getApiDatasetsNamespaceRepoNotebookRevPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSpacesNamespaceRepoNotebookRevPathRouteHandler: RouteHandler<
  typeof getApiSpacesNamespaceRepoNotebookRevPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiModelsNamespaceRepoScanRouteHandler: RouteHandler<
  typeof getApiModelsNamespaceRepoScanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDatasetsNamespaceRepoScanRouteHandler: RouteHandler<
  typeof getApiDatasetsNamespaceRepoScanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSpacesNamespaceRepoScanRouteHandler: RouteHandler<
  typeof getApiSpacesNamespaceRepoScanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiKernelsNamespaceRepoScanRouteHandler: RouteHandler<
  typeof getApiKernelsNamespaceRepoScanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiRepoTypeNamespaceRepoDiscussionsRouteHandler: RouteHandler<
  typeof getApiRepoTypeNamespaceRepoDiscussionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiRepoTypeNamespaceRepoDiscussionsRouteHandler: RouteHandler<
  typeof postApiRepoTypeNamespaceRepoDiscussionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiRepoTypeNamespaceRepoDiscussionsNumRouteHandler: RouteHandler<
  typeof getApiRepoTypeNamespaceRepoDiscussionsNumRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiRepoTypeNamespaceRepoDiscussionsNumCommentRouteHandler: RouteHandler<
  typeof postApiRepoTypeNamespaceRepoDiscussionsNumCommentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiRepoTypeNamespaceRepoDiscussionsNumStatusRouteHandler: RouteHandler<
  typeof postApiRepoTypeNamespaceRepoDiscussionsNumStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiRepoTypeNamespaceRepoDiscussionsNumTitleRouteHandler: RouteHandler<
  typeof postApiRepoTypeNamespaceRepoDiscussionsNumTitleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiRepoTypeNamespaceRepoDiscussionsNumStorageRouteHandler: RouteHandler<
  typeof getApiRepoTypeNamespaceRepoDiscussionsNumStorageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiKernelsRouteHandler: RouteHandler<typeof getApiKernelsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiKernelsNamespaceRepoRouteHandler: RouteHandler<
  typeof getApiKernelsNamespaceRepoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiKernelsNamespaceRepoRevisionRevRouteHandler: RouteHandler<
  typeof getApiKernelsNamespaceRepoRevisionRevRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDatasetsNamespaceRepoLeaderboardRouteHandler: RouteHandler<
  typeof getApiDatasetsNamespaceRepoLeaderboardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiModelsNamespaceRepoJwtRouteHandler: RouteHandler<
  typeof getApiModelsNamespaceRepoJwtRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSpacesNamespaceRepoJwtRouteHandler: RouteHandler<
  typeof getApiSpacesNamespaceRepoJwtRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDatasetsNamespaceRepoJwtRouteHandler: RouteHandler<
  typeof getApiDatasetsNamespaceRepoJwtRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAgentHarnessesRouteHandler: RouteHandler<
  typeof getApiAgentHarnessesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiModelsTagsByTypeRouteHandler: RouteHandler<
  typeof getApiModelsTagsByTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDatasetsTagsByTypeRouteHandler: RouteHandler<
  typeof getApiDatasetsTagsByTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTrendingRouteHandler: RouteHandler<typeof getApiTrendingRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiQuicksearchRouteHandler: RouteHandler<typeof getApiQuicksearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiQuicksearchRouteHandler: RouteHandler<typeof postApiQuicksearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiSpacesHardwareRouteHandler: RouteHandler<
  typeof getApiSpacesHardwareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSpacesTemplatesRouteHandler: RouteHandler<
  typeof getApiSpacesTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSpacesZeroGpuQuotaRouteHandler: RouteHandler<
  typeof getApiSpacesZeroGpuQuotaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSpacesNamespaceRepoSecretsRouteHandler: RouteHandler<
  typeof getApiSpacesNamespaceRepoSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSpacesNamespaceRepoVariablesRouteHandler: RouteHandler<
  typeof getApiSpacesNamespaceRepoVariablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiRepoTypeNamespaceRepoDuplicateRouteHandler: RouteHandler<
  typeof postApiRepoTypeNamespaceRepoDuplicateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiRepoTypeNamespaceRepoDuplicateStatusRouteHandler: RouteHandler<
  typeof getApiRepoTypeNamespaceRepoDuplicateStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReposCreateRouteHandler: RouteHandler<typeof postApiReposCreateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchApiRepoTypeNamespaceRepoSqlConsoleEmbedIdRouteHandler: RouteHandler<
  typeof patchApiRepoTypeNamespaceRepoSqlConsoleEmbedIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiRepoTypeNamespaceRepoSqlConsoleEmbedIdRouteHandler: RouteHandler<
  typeof deleteApiRepoTypeNamespaceRepoSqlConsoleEmbedIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiRepoTypeNamespaceRepoSqlConsoleEmbedIdHideRouteHandler: RouteHandler<
  typeof postApiRepoTypeNamespaceRepoSqlConsoleEmbedIdHideRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiRepoTypeNamespaceRepoSqlConsoleEmbedRouteHandler: RouteHandler<
  typeof postApiRepoTypeNamespaceRepoSqlConsoleEmbedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiResolveCacheSpacesNamespaceRepoRevPathRouteHandler: RouteHandler<
  typeof getApiResolveCacheSpacesNamespaceRepoRevPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiResolveCacheDatasetsNamespaceRepoRevPathRouteHandler: RouteHandler<
  typeof getApiResolveCacheDatasetsNamespaceRepoRevPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiResolveCacheModelsNamespaceRepoRevPathRouteHandler: RouteHandler<
  typeof getApiResolveCacheModelsNamespaceRepoRevPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiModelsNamespaceRepoUserAccessRequestStatusRouteHandler: RouteHandler<
  typeof getApiModelsNamespaceRepoUserAccessRequestStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDatasetsNamespaceRepoUserAccessRequestStatusRouteHandler: RouteHandler<
  typeof getApiDatasetsNamespaceRepoUserAccessRequestStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiModelsNamespaceRepoUserAccessRequestBatchRouteHandler: RouteHandler<
  typeof postApiModelsNamespaceRepoUserAccessRequestBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiDatasetsNamespaceRepoUserAccessRequestBatchRouteHandler: RouteHandler<
  typeof postApiDatasetsNamespaceRepoUserAccessRequestBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDailyPapersRouteHandler: RouteHandler<typeof getApiDailyPapersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiPapersRouteHandler: RouteHandler<typeof getApiPapersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPapersIndexRouteHandler: RouteHandler<typeof postApiPapersIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiPapersPaperIdRouteHandler: RouteHandler<
  typeof getApiPapersPaperIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPapersPaperIdCommentRouteHandler: RouteHandler<
  typeof postApiPapersPaperIdCommentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPapersPaperIdCommentCommentIdReplyRouteHandler: RouteHandler<
  typeof postApiPapersPaperIdCommentCommentIdReplyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPapersPaperIdLinksRouteHandler: RouteHandler<
  typeof postApiPapersPaperIdLinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPapersPaperIdMediaRouteHandler: RouteHandler<
  typeof postApiPapersPaperIdMediaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPostsUsernamePostSlugCommentRouteHandler: RouteHandler<
  typeof postApiPostsUsernamePostSlugCommentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPostsUsernamePostSlugCommentCommentIdReplyRouteHandler: RouteHandler<
  typeof postApiPostsUsernamePostSlugCommentCommentIdReplyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCollectionsNamespaceSlugIdRouteHandler: RouteHandler<
  typeof getApiCollectionsNamespaceSlugIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiCollectionsNamespaceSlugIdRouteHandler: RouteHandler<
  typeof patchApiCollectionsNamespaceSlugIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCollectionsNamespaceSlugRouteHandler: RouteHandler<
  typeof getApiCollectionsNamespaceSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiCollectionsNamespaceSlugRouteHandler: RouteHandler<
  typeof patchApiCollectionsNamespaceSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCollectionsNamespaceSlugIdItemsRouteHandler: RouteHandler<
  typeof postApiCollectionsNamespaceSlugIdItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCollectionsNamespaceSlugItemsRouteHandler: RouteHandler<
  typeof postApiCollectionsNamespaceSlugItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCollectionsRouteHandler: RouteHandler<typeof postApiCollectionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiCollectionsRouteHandler: RouteHandler<typeof getApiCollectionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiCollectionsNamespaceSlugIdResourceGroupRouteHandler: RouteHandler<
  typeof getApiCollectionsNamespaceSlugIdResourceGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCollectionsNamespaceSlugIdResourceGroupRouteHandler: RouteHandler<
  typeof postApiCollectionsNamespaceSlugIdResourceGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCollectionsNamespaceSlugResourceGroupRouteHandler: RouteHandler<
  typeof getApiCollectionsNamespaceSlugResourceGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCollectionsNamespaceSlugResourceGroupRouteHandler: RouteHandler<
  typeof postApiCollectionsNamespaceSlugResourceGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiBucketsNamespaceRepoRouteHandler: RouteHandler<
  typeof postApiBucketsNamespaceRepoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiBucketsNamespaceRepoRouteHandler: RouteHandler<
  typeof getApiBucketsNamespaceRepoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiContainersNamespaceRepoRouteHandler: RouteHandler<
  typeof postApiContainersNamespaceRepoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiContainersNamespaceRepoRouteHandler: RouteHandler<
  typeof getApiContainersNamespaceRepoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiBucketsNamespaceRepoSettingsRouteHandler: RouteHandler<
  typeof putApiBucketsNamespaceRepoSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiContainersNamespaceRepoSettingsRouteHandler: RouteHandler<
  typeof putApiContainersNamespaceRepoSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiBucketsNamespaceRouteHandler: RouteHandler<
  typeof getApiBucketsNamespaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiContainersNamespaceRouteHandler: RouteHandler<
  typeof getApiContainersNamespaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiBucketsNamespaceRepoBatchRouteHandler: RouteHandler<
  typeof postApiBucketsNamespaceRepoBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiContainersNamespaceRepoBatchRouteHandler: RouteHandler<
  typeof postApiContainersNamespaceRepoBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiBucketsNamespaceRepoTreePathRouteHandler: RouteHandler<
  typeof getApiBucketsNamespaceRepoTreePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiContainersNamespaceRepoTreePathRouteHandler: RouteHandler<
  typeof getApiContainersNamespaceRepoTreePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiBucketsNamespaceRepoEventsRouteHandler: RouteHandler<
  typeof getApiBucketsNamespaceRepoEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiBucketsNamespaceRepoPathsInfoRouteHandler: RouteHandler<
  typeof postApiBucketsNamespaceRepoPathsInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiContainersNamespaceRepoPathsInfoRouteHandler: RouteHandler<
  typeof postApiContainersNamespaceRepoPathsInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiJobsHardwareRouteHandler: RouteHandler<typeof getApiJobsHardwareRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiJobsNamespaceRouteHandler: RouteHandler<
  typeof getApiJobsNamespaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiJobsNamespaceRouteHandler: RouteHandler<
  typeof postApiJobsNamespaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiJobsNamespaceCountRouteHandler: RouteHandler<
  typeof getApiJobsNamespaceCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiJobsNamespaceJobIdRouteHandler: RouteHandler<
  typeof getApiJobsNamespaceJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiJobsNamespaceJobIdCancelRouteHandler: RouteHandler<
  typeof postApiJobsNamespaceJobIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiJobsNamespaceJobIdDuplicateRouteHandler: RouteHandler<
  typeof postApiJobsNamespaceJobIdDuplicateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiJobsNamespaceJobIdLabelsRouteHandler: RouteHandler<
  typeof putApiJobsNamespaceJobIdLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiJobsNamespaceJobIdExposeRouteHandler: RouteHandler<
  typeof putApiJobsNamespaceJobIdExposeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiScheduledJobsNamespaceRouteHandler: RouteHandler<
  typeof postApiScheduledJobsNamespaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiScheduledJobsNamespaceRouteHandler: RouteHandler<
  typeof getApiScheduledJobsNamespaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiScheduledJobsNamespaceJobIdRouteHandler: RouteHandler<
  typeof getApiScheduledJobsNamespaceJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiScheduledJobsNamespaceJobIdRunRouteHandler: RouteHandler<
  typeof postApiScheduledJobsNamespaceJobIdRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiScheduledJobsNamespaceJobIdScheduleRouteHandler: RouteHandler<
  typeof postApiScheduledJobsNamespaceJobIdScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiScheduledJobsNamespaceJobIdLabelsRouteHandler: RouteHandler<
  typeof putApiScheduledJobsNamespaceJobIdLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
