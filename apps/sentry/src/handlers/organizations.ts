import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugDetectorsIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugIssuesIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesExternalIssueIdIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugMembersMemberIdIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugOrgAuthTokensTokenIdIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugReleasesVersionIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugRoute,
  deleteOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdRoute,
  deleteOrganizationsOrganizationIdOrSlugSpikeProtectionsIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugStarredServiceSpansIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugWorkflowsIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexRoute,
  getOrganizationsIndexRoute,
  getOrganizationsOrganizationIdOrSlugAgentsConversationsConversationIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugAgentsConversationsIndexRoute,
  getOrganizationsOrganizationIdOrSlugAvailableActionsIndexRoute,
  getOrganizationsOrganizationIdOrSlugChunkUploadIndexRoute,
  getOrganizationsOrganizationIdOrSlugCodeMappingsIndexRoute,
  getOrganizationsOrganizationIdOrSlugCodeownersAssociationsIndexRoute,
  getOrganizationsOrganizationIdOrSlugConfigIntegrationsIndexRoute,
  getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsIndexRoute,
  getOrganizationsOrganizationIdOrSlugDashboardsIndexRoute,
  getOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugDetectorsIndexRoute,
  getOrganizationsOrganizationIdOrSlugDiscoverSavedIndexRoute,
  getOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugDsnLookupIndexRoute,
  getOrganizationsOrganizationIdOrSlugEnvironmentsIndexRoute,
  getOrganizationsOrganizationIdOrSlugEventidsEventIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugEventsDroppedIndexRoute,
  getOrganizationsOrganizationIdOrSlugEventsIndexRoute,
  getOrganizationsOrganizationIdOrSlugEventsTimeseriesIndexRoute,
  getOrganizationsOrganizationIdOrSlugFlagsLogsFlagLogIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugFlagsLogsIndexRoute,
  getOrganizationsOrganizationIdOrSlugForwardingIndexRoute,
  getOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexRoute,
  getOrganizationsOrganizationIdOrSlugIndexRoute,
  getOrganizationsOrganizationIdOrSlugIntegrationsIndexRoute,
  getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelsIndexRoute,
  getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelValidateIndexRoute,
  getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdReposIndexRoute,
  getOrganizationsOrganizationIdOrSlugIssuesIndexRoute,
  getOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexRoute,
  getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsEventIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsIndexRoute,
  getOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesIndexRoute,
  getOrganizationsOrganizationIdOrSlugIssuesIssueIdHashesIndexRoute,
  getOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIndexRoute,
  getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyIndexRoute,
  getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyValuesIndexRoute,
  getOrganizationsOrganizationIdOrSlugMembersIndexRoute,
  getOrganizationsOrganizationIdOrSlugMembersMemberIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugMonitorsIndexRoute,
  getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexRoute,
  getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexRoute,
  getOrganizationsOrganizationIdOrSlugNotebooksNotebookIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugNotificationsActionsIndexRoute,
  getOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexRoute,
  getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdInstallDetailsIndexRoute,
  getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdSizeAnalysisIndexRoute,
  getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsLatestBaseIndexRoute,
  getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndexRoute,
  getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdImagesImageIdentifierIndexRoute,
  getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugProfilingChunksIndexRoute,
  getOrganizationsOrganizationIdOrSlugProfilingFlamegraphIndexRoute,
  getOrganizationsOrganizationIdOrSlugProjectKeysIndexRoute,
  getOrganizationsOrganizationIdOrSlugProjectsIndexRoute,
  getOrganizationsOrganizationIdOrSlugRelayUsageIndexRoute,
  getOrganizationsOrganizationIdOrSlugReleasesIndexRoute,
  getOrganizationsOrganizationIdOrSlugReleasesVersionCommitfilesIndexRoute,
  getOrganizationsOrganizationIdOrSlugReleasesVersionCommitsIndexRoute,
  getOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexRoute,
  getOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexRoute,
  getOrganizationsOrganizationIdOrSlugReleasesVersionIndexRoute,
  getOrganizationsOrganizationIdOrSlugReleasesVersionPreviousWithCommitsIndexRoute,
  getOrganizationsOrganizationIdOrSlugReleaseThresholdStatusesIndexRoute,
  getOrganizationsOrganizationIdOrSlugReplayCountIndexRoute,
  getOrganizationsOrganizationIdOrSlugReplaySelectorsIndexRoute,
  getOrganizationsOrganizationIdOrSlugReplaysIndexRoute,
  getOrganizationsOrganizationIdOrSlugReplaysReplayIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugReposIndexRoute,
  getOrganizationsOrganizationIdOrSlugReposRepoIdCommitsIndexRoute,
  getOrganizationsOrganizationIdOrSlugScimV2GroupsRoute,
  getOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugRoute,
  getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesResourceTypeNameRoute,
  getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesRoute,
  getOrganizationsOrganizationIdOrSlugScimV2SchemasSchemaUriRoute,
  getOrganizationsOrganizationIdOrSlugScimV2ServiceProviderConfigRoute,
  getOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdRoute,
  getOrganizationsOrganizationIdOrSlugScimV2UsersRoute,
  getOrganizationsOrganizationIdOrSlugSentryAppComponentsIndexRoute,
  getOrganizationsOrganizationIdOrSlugSentryAppInstallationsIndexRoute,
  getOrganizationsOrganizationIdOrSlugSentryAppsIndexRoute,
  getOrganizationsOrganizationIdOrSlugSessionsIndexRoute,
  getOrganizationsOrganizationIdOrSlugSharedIssuesShareIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugShortidsIssueIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugStatsSummaryIndexRoute,
  getOrganizationsOrganizationIdOrSlugStatsV2IndexRoute,
  getOrganizationsOrganizationIdOrSlugTagsIndexRoute,
  getOrganizationsOrganizationIdOrSlugTeamsIndexRoute,
  getOrganizationsOrganizationIdOrSlugTraceItemsAttributesIndexRoute,
  getOrganizationsOrganizationIdOrSlugTraceItemsMetricsIndexRoute,
  getOrganizationsOrganizationIdOrSlugTraceItemsStatsIndexRoute,
  getOrganizationsOrganizationIdOrSlugTraceLogsIndexRoute,
  getOrganizationsOrganizationIdOrSlugTraceMetaTraceIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugTraceTraceIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugUserTeamsIndexRoute,
  getOrganizationsOrganizationIdOrSlugWorkflowsIndexRoute,
  getOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexRoute,
  patchOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugRoute,
  patchOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdRoute,
  postOrganizationsOrganizationIdOrSlugArtifactbundleAssembleIndexRoute,
  postOrganizationsOrganizationIdOrSlugChunkUploadIndexRoute,
  postOrganizationsOrganizationIdOrSlugCodeMappingsBulkIndexRoute,
  postOrganizationsOrganizationIdOrSlugCodeMappingsIndexRoute,
  postOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsRevisionIdRestoreIndexRoute,
  postOrganizationsOrganizationIdOrSlugDashboardsIndexRoute,
  postOrganizationsOrganizationIdOrSlugDiscoverSavedIndexRoute,
  postOrganizationsOrganizationIdOrSlugExternalUsersIndexRoute,
  postOrganizationsOrganizationIdOrSlugForwardingIndexRoute,
  postOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexRoute,
  postOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexRoute,
  postOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexRoute,
  postOrganizationsOrganizationIdOrSlugMembersIndexRoute,
  postOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexRoute,
  postOrganizationsOrganizationIdOrSlugMonitorsIndexRoute,
  postOrganizationsOrganizationIdOrSlugNotebooksIndexRoute,
  postOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksIndexRoute,
  postOrganizationsOrganizationIdOrSlugNotificationsActionsIndexRoute,
  postOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexRoute,
  postOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndexRoute,
  postOrganizationsOrganizationIdOrSlugProjectsIndexRoute,
  postOrganizationsOrganizationIdOrSlugProjectsProjectIdOrSlugDetectorsIndexRoute,
  postOrganizationsOrganizationIdOrSlugReleasesIndexRoute,
  postOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexRoute,
  postOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexRoute,
  postOrganizationsOrganizationIdOrSlugScimV2GroupsRoute,
  postOrganizationsOrganizationIdOrSlugScimV2UsersRoute,
  postOrganizationsOrganizationIdOrSlugSpikeProtectionsIndexRoute,
  postOrganizationsOrganizationIdOrSlugStarredServiceSpansIndexRoute,
  postOrganizationsOrganizationIdOrSlugTeamsIndexRoute,
  postOrganizationsOrganizationIdOrSlugWorkflowsIndexRoute,
  putOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndexRoute,
  putOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexRoute,
  putOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexRoute,
  putOrganizationsOrganizationIdOrSlugDetectorsIndexRoute,
  putOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexRoute,
  putOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndexRoute,
  putOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndexRoute,
  putOrganizationsOrganizationIdOrSlugIndexRoute,
  putOrganizationsOrganizationIdOrSlugIssuesIndexRoute,
  putOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexRoute,
  putOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexRoute,
  putOrganizationsOrganizationIdOrSlugMembersMemberIdIndexRoute,
  putOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexRoute,
  putOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexRoute,
  putOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndexRoute,
  putOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksOrderIndexRoute,
  putOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexRoute,
  putOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexRoute,
  putOrganizationsOrganizationIdOrSlugReleasesVersionIndexRoute,
  putOrganizationsOrganizationIdOrSlugReposSettingsIndexRoute,
  putOrganizationsOrganizationIdOrSlugWorkflowsIndexRoute,
  putOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexRoute,
} from '../routes'

export const getOrganizationsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationsOrganizationIdOrSlugIndexRouteHandler: RouteHandler<
  typeof putOrganizationsOrganizationIdOrSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugAgentsConversationsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugAgentsConversationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugAgentsConversationsConversationIdIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugAgentsConversationsConversationIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsOrganizationIdOrSlugArtifactbundleAssembleIndexRouteHandler: RouteHandler<
  typeof postOrganizationsOrganizationIdOrSlugArtifactbundleAssembleIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugAvailableActionsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugAvailableActionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugChunkUploadIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugChunkUploadIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsOrganizationIdOrSlugChunkUploadIndexRouteHandler: RouteHandler<
  typeof postOrganizationsOrganizationIdOrSlugChunkUploadIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugCodeMappingsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugCodeMappingsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsOrganizationIdOrSlugCodeMappingsIndexRouteHandler: RouteHandler<
  typeof postOrganizationsOrganizationIdOrSlugCodeMappingsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndexRouteHandler: RouteHandler<
  typeof putOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndexRouteHandler: RouteHandler<
  typeof deleteOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsOrganizationIdOrSlugCodeMappingsBulkIndexRouteHandler: RouteHandler<
  typeof postOrganizationsOrganizationIdOrSlugCodeMappingsBulkIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugCodeownersAssociationsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugCodeownersAssociationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugConfigIntegrationsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugConfigIntegrationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugDashboardsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugDashboardsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsOrganizationIdOrSlugDashboardsIndexRouteHandler: RouteHandler<
  typeof postOrganizationsOrganizationIdOrSlugDashboardsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexRouteHandler: RouteHandler<
  typeof putOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexRouteHandler: RouteHandler<
  typeof deleteOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsRevisionIdRestoreIndexRouteHandler: RouteHandler<
  typeof postOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsRevisionIdRestoreIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugDetectorsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugDetectorsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationsOrganizationIdOrSlugDetectorsIndexRouteHandler: RouteHandler<
  typeof putOrganizationsOrganizationIdOrSlugDetectorsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationsOrganizationIdOrSlugDetectorsIndexRouteHandler: RouteHandler<
  typeof deleteOrganizationsOrganizationIdOrSlugDetectorsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexRouteHandler: RouteHandler<
  typeof putOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexRouteHandler: RouteHandler<
  typeof deleteOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugDiscoverSavedIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugDiscoverSavedIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsOrganizationIdOrSlugDiscoverSavedIndexRouteHandler: RouteHandler<
  typeof postOrganizationsOrganizationIdOrSlugDiscoverSavedIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexRouteHandler: RouteHandler<
  typeof putOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexRouteHandler: RouteHandler<
  typeof deleteOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugDsnLookupIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugDsnLookupIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugEnvironmentsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugEnvironmentsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugEventidsEventIdIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugEventidsEventIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugEventsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugEventsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugEventsDroppedIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugEventsDroppedIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugEventsTimeseriesIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugEventsTimeseriesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsOrganizationIdOrSlugExternalUsersIndexRouteHandler: RouteHandler<
  typeof postOrganizationsOrganizationIdOrSlugExternalUsersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndexRouteHandler: RouteHandler<
  typeof putOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndexRouteHandler: RouteHandler<
  typeof deleteOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugFlagsLogsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugFlagsLogsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugFlagsLogsFlagLogIdIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugFlagsLogsFlagLogIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugForwardingIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugForwardingIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsOrganizationIdOrSlugForwardingIndexRouteHandler: RouteHandler<
  typeof postOrganizationsOrganizationIdOrSlugForwardingIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndexRouteHandler: RouteHandler<
  typeof putOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndexRouteHandler: RouteHandler<
  typeof deleteOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexRouteHandler: RouteHandler<
  typeof postOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugIntegrationsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugIntegrationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexRouteHandler: RouteHandler<
  typeof deleteOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelValidateIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelValidateIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdReposIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdReposIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugIssuesIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugIssuesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationsOrganizationIdOrSlugIssuesIndexRouteHandler: RouteHandler<
  typeof putOrganizationsOrganizationIdOrSlugIssuesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationsOrganizationIdOrSlugIssuesIndexRouteHandler: RouteHandler<
  typeof deleteOrganizationsOrganizationIdOrSlugIssuesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugMembersIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugMembersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsOrganizationIdOrSlugMembersIndexRouteHandler: RouteHandler<
  typeof postOrganizationsOrganizationIdOrSlugMembersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugMembersMemberIdIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugMembersMemberIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationsOrganizationIdOrSlugMembersMemberIdIndexRouteHandler: RouteHandler<
  typeof putOrganizationsOrganizationIdOrSlugMembersMemberIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationsOrganizationIdOrSlugMembersMemberIdIndexRouteHandler: RouteHandler<
  typeof deleteOrganizationsOrganizationIdOrSlugMembersMemberIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexRouteHandler: RouteHandler<
  typeof postOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexRouteHandler: RouteHandler<
  typeof putOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexRouteHandler: RouteHandler<
  typeof deleteOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugMonitorsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugMonitorsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsOrganizationIdOrSlugMonitorsIndexRouteHandler: RouteHandler<
  typeof postOrganizationsOrganizationIdOrSlugMonitorsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexRouteHandler: RouteHandler<
  typeof putOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexRouteHandler: RouteHandler<
  typeof deleteOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsOrganizationIdOrSlugNotebooksIndexRouteHandler: RouteHandler<
  typeof postOrganizationsOrganizationIdOrSlugNotebooksIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugNotebooksNotebookIdIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugNotebooksNotebookIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksIndexRouteHandler: RouteHandler<
  typeof postOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndexRouteHandler: RouteHandler<
  typeof putOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndexRouteHandler: RouteHandler<
  typeof deleteOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksOrderIndexRouteHandler: RouteHandler<
  typeof putOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksOrderIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugNotificationsActionsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugNotificationsActionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsOrganizationIdOrSlugNotificationsActionsIndexRouteHandler: RouteHandler<
  typeof postOrganizationsOrganizationIdOrSlugNotificationsActionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexRouteHandler: RouteHandler<
  typeof putOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexRouteHandler: RouteHandler<
  typeof deleteOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexRouteHandler: RouteHandler<
  typeof postOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationsOrganizationIdOrSlugOrgAuthTokensTokenIdIndexRouteHandler: RouteHandler<
  typeof deleteOrganizationsOrganizationIdOrSlugOrgAuthTokensTokenIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdInstallDetailsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdInstallDetailsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdSizeAnalysisIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdSizeAnalysisIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndexRouteHandler: RouteHandler<
  typeof deleteOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndexRouteHandler: RouteHandler<
  typeof postOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdImagesImageIdentifierIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdImagesImageIdentifierIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsLatestBaseIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsLatestBaseIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugProfilingChunksIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugProfilingChunksIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugProfilingFlamegraphIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugProfilingFlamegraphIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugProjectKeysIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugProjectKeysIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugProjectsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugProjectsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsOrganizationIdOrSlugProjectsIndexRouteHandler: RouteHandler<
  typeof postOrganizationsOrganizationIdOrSlugProjectsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsOrganizationIdOrSlugProjectsProjectIdOrSlugDetectorsIndexRouteHandler: RouteHandler<
  typeof postOrganizationsOrganizationIdOrSlugProjectsProjectIdOrSlugDetectorsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugRelayUsageIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugRelayUsageIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugReleaseThresholdStatusesIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugReleaseThresholdStatusesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugReleasesIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugReleasesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsOrganizationIdOrSlugReleasesIndexRouteHandler: RouteHandler<
  typeof postOrganizationsOrganizationIdOrSlugReleasesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugReleasesVersionIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugReleasesVersionIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationsOrganizationIdOrSlugReleasesVersionIndexRouteHandler: RouteHandler<
  typeof putOrganizationsOrganizationIdOrSlugReleasesVersionIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationsOrganizationIdOrSlugReleasesVersionIndexRouteHandler: RouteHandler<
  typeof deleteOrganizationsOrganizationIdOrSlugReleasesVersionIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugReleasesVersionCommitsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugReleasesVersionCommitsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexRouteHandler: RouteHandler<
  typeof postOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexRouteHandler: RouteHandler<
  typeof postOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexRouteHandler: RouteHandler<
  typeof putOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexRouteHandler: RouteHandler<
  typeof deleteOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugReleasesVersionPreviousWithCommitsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugReleasesVersionPreviousWithCommitsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugReplayCountIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugReplayCountIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugReplaySelectorsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugReplaySelectorsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugReplaysIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugReplaysIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugReplaysReplayIdIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugReplaysReplayIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugReposIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugReposIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugReposRepoIdCommitsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugReposRepoIdCommitsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationsOrganizationIdOrSlugReposSettingsIndexRouteHandler: RouteHandler<
  typeof putOrganizationsOrganizationIdOrSlugReposSettingsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugScimV2GroupsRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugScimV2GroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsOrganizationIdOrSlugScimV2GroupsRouteHandler: RouteHandler<
  typeof postOrganizationsOrganizationIdOrSlugScimV2GroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugRouteHandler: RouteHandler<
  typeof patchOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugRouteHandler: RouteHandler<
  typeof deleteOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesResourceTypeNameRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesResourceTypeNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugScimV2SchemasSchemaUriRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugScimV2SchemasSchemaUriRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugScimV2ServiceProviderConfigRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugScimV2ServiceProviderConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugScimV2UsersRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugScimV2UsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsOrganizationIdOrSlugScimV2UsersRouteHandler: RouteHandler<
  typeof postOrganizationsOrganizationIdOrSlugScimV2UsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdRouteHandler: RouteHandler<
  typeof patchOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdRouteHandler: RouteHandler<
  typeof deleteOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugSentryAppComponentsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugSentryAppComponentsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugSentryAppsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugSentryAppsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugSessionsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugSessionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugShortidsIssueIdIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugShortidsIssueIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsOrganizationIdOrSlugStarredServiceSpansIndexRouteHandler: RouteHandler<
  typeof postOrganizationsOrganizationIdOrSlugStarredServiceSpansIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationsOrganizationIdOrSlugStarredServiceSpansIndexRouteHandler: RouteHandler<
  typeof deleteOrganizationsOrganizationIdOrSlugStarredServiceSpansIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugStatsSummaryIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugStatsSummaryIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugStatsV2IndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugStatsV2IndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugTagsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugTagsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugTeamsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugTeamsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsOrganizationIdOrSlugTeamsIndexRouteHandler: RouteHandler<
  typeof postOrganizationsOrganizationIdOrSlugTeamsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugTraceItemsAttributesIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugTraceItemsAttributesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugTraceItemsMetricsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugTraceItemsMetricsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugTraceItemsStatsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugTraceItemsStatsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugTraceLogsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugTraceLogsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugTraceMetaTraceIdIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugTraceMetaTraceIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugTraceTraceIdIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugTraceTraceIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugUserTeamsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugUserTeamsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugWorkflowsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugWorkflowsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsOrganizationIdOrSlugWorkflowsIndexRouteHandler: RouteHandler<
  typeof postOrganizationsOrganizationIdOrSlugWorkflowsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationsOrganizationIdOrSlugWorkflowsIndexRouteHandler: RouteHandler<
  typeof putOrganizationsOrganizationIdOrSlugWorkflowsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationsOrganizationIdOrSlugWorkflowsIndexRouteHandler: RouteHandler<
  typeof deleteOrganizationsOrganizationIdOrSlugWorkflowsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexRouteHandler: RouteHandler<
  typeof putOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexRouteHandler: RouteHandler<
  typeof deleteOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugReleasesVersionCommitfilesIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugReleasesVersionCommitfilesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugSentryAppInstallationsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugSentryAppInstallationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsOrganizationIdOrSlugSpikeProtectionsIndexRouteHandler: RouteHandler<
  typeof postOrganizationsOrganizationIdOrSlugSpikeProtectionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationsOrganizationIdOrSlugSpikeProtectionsIndexRouteHandler: RouteHandler<
  typeof deleteOrganizationsOrganizationIdOrSlugSpikeProtectionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexRouteHandler: RouteHandler<
  typeof putOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexRouteHandler: RouteHandler<
  typeof deleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexRouteHandler: RouteHandler<
  typeof postOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsEventIdIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsEventIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesExternalIssueIdIndexRouteHandler: RouteHandler<
  typeof deleteOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesExternalIssueIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugIssuesIssueIdHashesIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdHashesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexRouteHandler: RouteHandler<
  typeof postOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexRouteHandler: RouteHandler<
  typeof putOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexRouteHandler: RouteHandler<
  typeof deleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyValuesIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyValuesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationsOrganizationIdOrSlugSharedIssuesShareIdIndexRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationIdOrSlugSharedIssuesShareIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
