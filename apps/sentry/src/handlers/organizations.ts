import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getOrganizationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugAgentsConversationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugAgentsConversationsConversationIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugArtifactbundleAssembleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugAvailableActionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugChunkUploadIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugChunkUploadIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugCodeMappingsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugCodeMappingsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugCodeMappingsBulkIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugCodeownersAssociationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugConfigIntegrationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugDashboardsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugDashboardsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsRevisionIdRestoreIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdOrSlugDetectorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugDetectorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugDetectorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugDiscoverSavedIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugDiscoverSavedIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugDsnLookupIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugEnvironmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugEventidsEventIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugEventsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugEventsDroppedIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugEventsTimeseriesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugExternalUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugFlagsLogsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugFlagsLogsFlagLogIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugForwardingIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugForwardingIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugIntegrationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelValidateIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdReposIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugIssuesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugIssuesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugIssuesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugMembersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugMembersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugMembersMemberIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugMembersMemberIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugMembersMemberIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdOrSlugMonitorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugMonitorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugNotebooksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugNotebooksNotebookIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksOrderIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugNotificationsActionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugNotificationsActionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugOrgAuthTokensTokenIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdInstallDetailsIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdSizeAnalysisIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdImagesImageIdentifierIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsLatestBaseIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdOrSlugProfilingChunksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugProfilingFlamegraphIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugProjectKeysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugProjectsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugProjectsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugProjectsProjectIdOrSlugDetectorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugRelayUsageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugReleaseThresholdStatusesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugReleasesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugReleasesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugReleasesVersionIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugReleasesVersionIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugReleasesVersionIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugReleasesVersionCommitsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationsOrganizationIdOrSlugReleasesVersionPreviousWithCommitsIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdOrSlugReplayCountIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugReplaySelectorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugReplaysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugReplaysReplayIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugReposIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugReposRepoIdCommitsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugReposSettingsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugScimV2GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugScimV2GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesResourceTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugScimV2SchemasSchemaUriRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugScimV2ServiceProviderConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugScimV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugScimV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugSentryAppComponentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugSentryAppsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugSessionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugShortidsIssueIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugStarredServiceSpansIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugStarredServiceSpansIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugStatsSummaryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugStatsV2IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugTagsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugTeamsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugTeamsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugTraceItemsAttributesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugTraceItemsMetricsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugTraceItemsStatsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugTraceLogsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugTraceMetaTraceIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugTraceTraceIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugUserTeamsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugWorkflowsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugWorkflowsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugWorkflowsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugWorkflowsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugReleasesVersionCommitfilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugSentryAppInstallationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugSpikeProtectionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugSpikeProtectionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsEventIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesExternalIssueIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdOrSlugIssuesIssueIdHashesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyValuesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugSharedIssuesShareIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
