import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminTeamsTeamIDApiKeysApiKeyIDRoute,
  deleteApiKeysApiKeyIDRoute,
  deleteClustersClusterIDRigsInstancesInstanceIDRoute,
  deleteEventsWebhooksWebhookIDRoute,
  deleteSandboxesSandboxIDRoute,
  deleteSecretsSecretIDRoute,
  deleteTemplatesTagsRoute,
  deleteTemplatesTemplateIDRoute,
  deleteUnstableAdminClustersClusterIDRoute,
  deleteUnstableAdminTeamsTeamIDBanRoute,
  deleteUnstableAdminTemplatesAliasesAliasIDRoute,
  deleteUnstableAdminTemplatesDefaultsTemplateIDRoute,
  deleteUnstableManagementClustersClusterIDRoute,
  deleteUnstableManagementProjectsProjectIDClusterClusterIDRoute,
  deleteUnstableManagementProjectsProjectIDRoute,
  deleteVolumesVolumeIDRoute,
  getAdminSandboxesRunningCountsRoute,
  getAdminSandboxesSandboxIDRoute,
  getAdminTeamsTeamIDApiKeysRoute,
  getApiKeysRoute,
  getClustersClusterIDRigsRigIDErrorsRoute,
  getClustersClusterIDRigsRigIDInstancesRoute,
  getClustersClusterIDRigsRoute,
  getDefaultTemplatesRoute,
  getEventsSandboxesRoute,
  getEventsSandboxesSandboxIDRoute,
  getEventsWebhooksRoute,
  getEventsWebhooksWebhookIDDeliveriesRoute,
  getEventsWebhooksWebhookIDRoute,
  getEventsWebhooksWebhookIDStatsRoute,
  getHealthRoute,
  getNodesNodeIDRoute,
  getNodesNodeIDSandboxesRoute,
  getNodesRoute,
  getSandboxesMetricsRoute,
  getSandboxesRoute,
  getSandboxesSandboxIDLogsRoute,
  getSandboxesSandboxIDMetricsRoute,
  getSandboxesSandboxIDRoute,
  getSecretsRoute,
  getSecretsSecretIDRoute,
  getSnapshotsRoute,
  getTeamsTeamIDMetricsMaxRoute,
  getTeamsTeamIDMetricsRoute,
  getTemplatesAliasesAliasRoute,
  getTemplatesRoute,
  getTemplatesTemplateIDBuildsBuildIDLogsRoute,
  getTemplatesTemplateIDBuildsBuildIDStatusRoute,
  getTemplatesTemplateIDBuildsRoute,
  getTemplatesTemplateIDFilesHashRoute,
  getTemplatesTemplateIDRoute,
  getTemplatesTemplateIDTagsCountRoute,
  getTemplatesTemplateIDTagsExistsRoute,
  getTemplatesTemplateIDTagsGroupsRoute,
  getTemplatesTemplateIDTagsRoute,
  getTemplatesTemplateIDTagsTagAssignmentsRoute,
  getUnstableAdminClustersClusterIDMetadataRoute,
  getUnstableAdminClustersClusterIDRoute,
  getUnstableAdminClustersClusterIDTeamsRoute,
  getUnstableAdminClustersRoute,
  getUnstableAdminSandboxesSandboxIDBuildsRoute,
  getUnstableAdminSandboxesSandboxIDOverviewRoute,
  getUnstableAdminTeamsTeamIDRoute,
  getUnstableAdminTemplatesAliasesRoute,
  getUnstableAdminTemplatesLookupRoute,
  getUnstableBuildsBuildIDRoute,
  getUnstableBuildsRoute,
  getUnstableBuildsStatusesRoute,
  getUnstableManagementClustersClusterIDDestroyReadinessRoute,
  getUnstableManagementClustersClusterIDProjectsRoute,
  getUnstableManagementTelemetryNamesRoute,
  getUnstableSandboxesSandboxIDRecordRoute,
  getUnstableTeamsTeamIDLimitsRoute,
  getUnstableTeamsTeamIDStatusRoute,
  getUnstableTemplatesSearchRoute,
  getV2SandboxesRoute,
  getV2SandboxesSandboxIDLogsRoute,
  getV2TemplatesRoute,
  getV2TemplatesTemplateIDRoute,
  getVolumesRoute,
  getVolumesVolumeIDRoute,
  patchApiKeysApiKeyIDRoute,
  patchEventsWebhooksWebhookIDRoute,
  patchTemplatesTemplateIDRoute,
  patchUnstableAdminClustersClusterIDRoute,
  patchUnstableAdminTemplatesDefaultsTemplateIDRoute,
  patchV2TemplatesTemplateIDRoute,
  postAdminTeamsTeamIDApiKeysRoute,
  postAdminTeamsTeamIDBuildsCancelRoute,
  postAdminTeamsTeamIDSandboxesKillRoute,
  postApiKeysRoute,
  postEventsWebhooksRoute,
  postNodesNodeIDRoute,
  postSandboxesRoute,
  postSandboxesSandboxIDConnectRoute,
  postSandboxesSandboxIDForkRoute,
  postSandboxesSandboxIDPauseRoute,
  postSandboxesSandboxIDRefreshesRoute,
  postSandboxesSandboxIDResumeRoute,
  postSandboxesSandboxIDSnapshotsRoute,
  postSandboxesSandboxIDTimeoutRoute,
  postSecretsRoute,
  postSecretsSecretIDRoute,
  postTemplatesTagsRoute,
  postUnstableAdminClustersRoute,
  postUnstableAdminSandboxesSandboxIDBuildsRestoreRoute,
  postUnstableAdminTeamsBansRoute,
  postUnstableAdminTeamsQueryRoute,
  postUnstableAdminTemplatesAliasesRoute,
  postUnstableAdminTemplatesDefaultsRoute,
  postV2SandboxesRoute,
  postV2SandboxesSandboxIDConnectRoute,
  postV2TemplatesTemplateIDBuildsBuildIDRoute,
  postV3TemplatesRoute,
  postVolumesRoute,
  putClustersClusterIDRigsRigIDCapacityRoute,
  putSandboxesSandboxIDNetworkRoute,
  putUnstableAdminClustersClusterIDTokenRoute,
  putUnstableAdminTeamsTeamIDBanRoute,
  putUnstableAdminTeamsTeamIDSchedulingLabelsRoute,
  putUnstableManagementClustersClusterIDDeletionRoute,
  putUnstableManagementClustersClusterIDRoute,
  putUnstableManagementClustersClusterIDTelemetryRoute,
  putUnstableManagementProjectsProjectIDBanRoute,
  putUnstableManagementProjectsProjectIDBlockRoute,
  putUnstableManagementProjectsProjectIDClusterClusterIDRoute,
  putUnstableManagementProjectsProjectIDLimitsRoute,
  putUnstableManagementProjectsProjectIDMembersUserIDRoute,
  putUnstableManagementProjectsProjectIDRoute,
  putUnstableManagementProjectsProjectIDSettingsRoute,
} from './routes'
import {
  deleteAdminTeamsTeamIDApiKeysApiKeyIDRouteHandler,
  deleteApiKeysApiKeyIDRouteHandler,
  deleteClustersClusterIDRigsInstancesInstanceIDRouteHandler,
  deleteEventsWebhooksWebhookIDRouteHandler,
  deleteSandboxesSandboxIDRouteHandler,
  deleteSecretsSecretIDRouteHandler,
  deleteTemplatesTagsRouteHandler,
  deleteTemplatesTemplateIDRouteHandler,
  deleteUnstableAdminClustersClusterIDRouteHandler,
  deleteUnstableAdminTeamsTeamIDBanRouteHandler,
  deleteUnstableAdminTemplatesAliasesAliasIDRouteHandler,
  deleteUnstableAdminTemplatesDefaultsTemplateIDRouteHandler,
  deleteUnstableManagementClustersClusterIDRouteHandler,
  deleteUnstableManagementProjectsProjectIDClusterClusterIDRouteHandler,
  deleteUnstableManagementProjectsProjectIDRouteHandler,
  deleteVolumesVolumeIDRouteHandler,
  getAdminSandboxesRunningCountsRouteHandler,
  getAdminSandboxesSandboxIDRouteHandler,
  getAdminTeamsTeamIDApiKeysRouteHandler,
  getApiKeysRouteHandler,
  getClustersClusterIDRigsRigIDErrorsRouteHandler,
  getClustersClusterIDRigsRigIDInstancesRouteHandler,
  getClustersClusterIDRigsRouteHandler,
  getDefaultTemplatesRouteHandler,
  getEventsSandboxesRouteHandler,
  getEventsSandboxesSandboxIDRouteHandler,
  getEventsWebhooksRouteHandler,
  getEventsWebhooksWebhookIDDeliveriesRouteHandler,
  getEventsWebhooksWebhookIDRouteHandler,
  getEventsWebhooksWebhookIDStatsRouteHandler,
  getHealthRouteHandler,
  getNodesNodeIDRouteHandler,
  getNodesNodeIDSandboxesRouteHandler,
  getNodesRouteHandler,
  getSandboxesMetricsRouteHandler,
  getSandboxesRouteHandler,
  getSandboxesSandboxIDLogsRouteHandler,
  getSandboxesSandboxIDMetricsRouteHandler,
  getSandboxesSandboxIDRouteHandler,
  getSecretsRouteHandler,
  getSecretsSecretIDRouteHandler,
  getSnapshotsRouteHandler,
  getTeamsTeamIDMetricsMaxRouteHandler,
  getTeamsTeamIDMetricsRouteHandler,
  getTemplatesAliasesAliasRouteHandler,
  getTemplatesRouteHandler,
  getTemplatesTemplateIDBuildsBuildIDLogsRouteHandler,
  getTemplatesTemplateIDBuildsBuildIDStatusRouteHandler,
  getTemplatesTemplateIDBuildsRouteHandler,
  getTemplatesTemplateIDFilesHashRouteHandler,
  getTemplatesTemplateIDRouteHandler,
  getTemplatesTemplateIDTagsCountRouteHandler,
  getTemplatesTemplateIDTagsExistsRouteHandler,
  getTemplatesTemplateIDTagsGroupsRouteHandler,
  getTemplatesTemplateIDTagsRouteHandler,
  getTemplatesTemplateIDTagsTagAssignmentsRouteHandler,
  getUnstableAdminClustersClusterIDMetadataRouteHandler,
  getUnstableAdminClustersClusterIDRouteHandler,
  getUnstableAdminClustersClusterIDTeamsRouteHandler,
  getUnstableAdminClustersRouteHandler,
  getUnstableAdminSandboxesSandboxIDBuildsRouteHandler,
  getUnstableAdminSandboxesSandboxIDOverviewRouteHandler,
  getUnstableAdminTeamsTeamIDRouteHandler,
  getUnstableAdminTemplatesAliasesRouteHandler,
  getUnstableAdminTemplatesLookupRouteHandler,
  getUnstableBuildsBuildIDRouteHandler,
  getUnstableBuildsRouteHandler,
  getUnstableBuildsStatusesRouteHandler,
  getUnstableManagementClustersClusterIDDestroyReadinessRouteHandler,
  getUnstableManagementClustersClusterIDProjectsRouteHandler,
  getUnstableManagementTelemetryNamesRouteHandler,
  getUnstableSandboxesSandboxIDRecordRouteHandler,
  getUnstableTeamsTeamIDLimitsRouteHandler,
  getUnstableTeamsTeamIDStatusRouteHandler,
  getUnstableTemplatesSearchRouteHandler,
  getV2SandboxesRouteHandler,
  getV2SandboxesSandboxIDLogsRouteHandler,
  getV2TemplatesRouteHandler,
  getV2TemplatesTemplateIDRouteHandler,
  getVolumesRouteHandler,
  getVolumesVolumeIDRouteHandler,
  patchApiKeysApiKeyIDRouteHandler,
  patchEventsWebhooksWebhookIDRouteHandler,
  patchTemplatesTemplateIDRouteHandler,
  patchUnstableAdminClustersClusterIDRouteHandler,
  patchUnstableAdminTemplatesDefaultsTemplateIDRouteHandler,
  patchV2TemplatesTemplateIDRouteHandler,
  postAdminTeamsTeamIDApiKeysRouteHandler,
  postAdminTeamsTeamIDBuildsCancelRouteHandler,
  postAdminTeamsTeamIDSandboxesKillRouteHandler,
  postApiKeysRouteHandler,
  postEventsWebhooksRouteHandler,
  postNodesNodeIDRouteHandler,
  postSandboxesRouteHandler,
  postSandboxesSandboxIDConnectRouteHandler,
  postSandboxesSandboxIDForkRouteHandler,
  postSandboxesSandboxIDPauseRouteHandler,
  postSandboxesSandboxIDRefreshesRouteHandler,
  postSandboxesSandboxIDResumeRouteHandler,
  postSandboxesSandboxIDSnapshotsRouteHandler,
  postSandboxesSandboxIDTimeoutRouteHandler,
  postSecretsRouteHandler,
  postSecretsSecretIDRouteHandler,
  postTemplatesTagsRouteHandler,
  postUnstableAdminClustersRouteHandler,
  postUnstableAdminSandboxesSandboxIDBuildsRestoreRouteHandler,
  postUnstableAdminTeamsBansRouteHandler,
  postUnstableAdminTeamsQueryRouteHandler,
  postUnstableAdminTemplatesAliasesRouteHandler,
  postUnstableAdminTemplatesDefaultsRouteHandler,
  postV2SandboxesRouteHandler,
  postV2SandboxesSandboxIDConnectRouteHandler,
  postV2TemplatesTemplateIDBuildsBuildIDRouteHandler,
  postV3TemplatesRouteHandler,
  postVolumesRouteHandler,
  putClustersClusterIDRigsRigIDCapacityRouteHandler,
  putSandboxesSandboxIDNetworkRouteHandler,
  putUnstableAdminClustersClusterIDTokenRouteHandler,
  putUnstableAdminTeamsTeamIDBanRouteHandler,
  putUnstableAdminTeamsTeamIDSchedulingLabelsRouteHandler,
  putUnstableManagementClustersClusterIDDeletionRouteHandler,
  putUnstableManagementClustersClusterIDRouteHandler,
  putUnstableManagementClustersClusterIDTelemetryRouteHandler,
  putUnstableManagementProjectsProjectIDBanRouteHandler,
  putUnstableManagementProjectsProjectIDBlockRouteHandler,
  putUnstableManagementProjectsProjectIDClusterClusterIDRouteHandler,
  putUnstableManagementProjectsProjectIDLimitsRouteHandler,
  putUnstableManagementProjectsProjectIDMembersUserIDRouteHandler,
  putUnstableManagementProjectsProjectIDRouteHandler,
  putUnstableManagementProjectsProjectIDSettingsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getHealthRoute, getHealthRouteHandler)
  .openapi(getTeamsTeamIDMetricsRoute, getTeamsTeamIDMetricsRouteHandler)
  .openapi(getTeamsTeamIDMetricsMaxRoute, getTeamsTeamIDMetricsMaxRouteHandler)
  .openapi(getUnstableTeamsTeamIDStatusRoute, getUnstableTeamsTeamIDStatusRouteHandler)
  .openapi(getUnstableTeamsTeamIDLimitsRoute, getUnstableTeamsTeamIDLimitsRouteHandler)
  .openapi(getSandboxesRoute, getSandboxesRouteHandler)
  .openapi(postSandboxesRoute, postSandboxesRouteHandler)
  .openapi(postV2SandboxesRoute, postV2SandboxesRouteHandler)
  .openapi(getV2SandboxesRoute, getV2SandboxesRouteHandler)
  .openapi(getSandboxesMetricsRoute, getSandboxesMetricsRouteHandler)
  .openapi(getSandboxesSandboxIDLogsRoute, getSandboxesSandboxIDLogsRouteHandler)
  .openapi(getV2SandboxesSandboxIDLogsRoute, getV2SandboxesSandboxIDLogsRouteHandler)
  .openapi(getSandboxesSandboxIDRoute, getSandboxesSandboxIDRouteHandler)
  .openapi(deleteSandboxesSandboxIDRoute, deleteSandboxesSandboxIDRouteHandler)
  .openapi(getSandboxesSandboxIDMetricsRoute, getSandboxesSandboxIDMetricsRouteHandler)
  .openapi(
    getUnstableSandboxesSandboxIDRecordRoute,
    getUnstableSandboxesSandboxIDRecordRouteHandler,
  )
  .openapi(postSandboxesSandboxIDPauseRoute, postSandboxesSandboxIDPauseRouteHandler)
  .openapi(postSandboxesSandboxIDResumeRoute, postSandboxesSandboxIDResumeRouteHandler)
  .openapi(postSandboxesSandboxIDForkRoute, postSandboxesSandboxIDForkRouteHandler)
  .openapi(postSandboxesSandboxIDConnectRoute, postSandboxesSandboxIDConnectRouteHandler)
  .openapi(postV2SandboxesSandboxIDConnectRoute, postV2SandboxesSandboxIDConnectRouteHandler)
  .openapi(postSandboxesSandboxIDTimeoutRoute, postSandboxesSandboxIDTimeoutRouteHandler)
  .openapi(putSandboxesSandboxIDNetworkRoute, putSandboxesSandboxIDNetworkRouteHandler)
  .openapi(postSandboxesSandboxIDRefreshesRoute, postSandboxesSandboxIDRefreshesRouteHandler)
  .openapi(postSandboxesSandboxIDSnapshotsRoute, postSandboxesSandboxIDSnapshotsRouteHandler)
  .openapi(getSnapshotsRoute, getSnapshotsRouteHandler)
  .openapi(postV3TemplatesRoute, postV3TemplatesRouteHandler)
  .openapi(getV2TemplatesRoute, getV2TemplatesRouteHandler)
  .openapi(getTemplatesTemplateIDFilesHashRoute, getTemplatesTemplateIDFilesHashRouteHandler)
  .openapi(getTemplatesRoute, getTemplatesRouteHandler)
  .openapi(getDefaultTemplatesRoute, getDefaultTemplatesRouteHandler)
  .openapi(getUnstableTemplatesSearchRoute, getUnstableTemplatesSearchRouteHandler)
  .openapi(getUnstableBuildsRoute, getUnstableBuildsRouteHandler)
  .openapi(getUnstableBuildsStatusesRoute, getUnstableBuildsStatusesRouteHandler)
  .openapi(getUnstableBuildsBuildIDRoute, getUnstableBuildsBuildIDRouteHandler)
  .openapi(getTemplatesTemplateIDRoute, getTemplatesTemplateIDRouteHandler)
  .openapi(deleteTemplatesTemplateIDRoute, deleteTemplatesTemplateIDRouteHandler)
  .openapi(patchTemplatesTemplateIDRoute, patchTemplatesTemplateIDRouteHandler)
  .openapi(getTemplatesTemplateIDBuildsRoute, getTemplatesTemplateIDBuildsRouteHandler)
  .openapi(
    postV2TemplatesTemplateIDBuildsBuildIDRoute,
    postV2TemplatesTemplateIDBuildsBuildIDRouteHandler,
  )
  .openapi(getV2TemplatesTemplateIDRoute, getV2TemplatesTemplateIDRouteHandler)
  .openapi(patchV2TemplatesTemplateIDRoute, patchV2TemplatesTemplateIDRouteHandler)
  .openapi(
    getTemplatesTemplateIDBuildsBuildIDStatusRoute,
    getTemplatesTemplateIDBuildsBuildIDStatusRouteHandler,
  )
  .openapi(
    getTemplatesTemplateIDBuildsBuildIDLogsRoute,
    getTemplatesTemplateIDBuildsBuildIDLogsRouteHandler,
  )
  .openapi(postTemplatesTagsRoute, postTemplatesTagsRouteHandler)
  .openapi(deleteTemplatesTagsRoute, deleteTemplatesTagsRouteHandler)
  .openapi(getTemplatesTemplateIDTagsRoute, getTemplatesTemplateIDTagsRouteHandler)
  .openapi(getTemplatesTemplateIDTagsGroupsRoute, getTemplatesTemplateIDTagsGroupsRouteHandler)
  .openapi(getTemplatesTemplateIDTagsCountRoute, getTemplatesTemplateIDTagsCountRouteHandler)
  .openapi(getTemplatesTemplateIDTagsExistsRoute, getTemplatesTemplateIDTagsExistsRouteHandler)
  .openapi(
    getTemplatesTemplateIDTagsTagAssignmentsRoute,
    getTemplatesTemplateIDTagsTagAssignmentsRouteHandler,
  )
  .openapi(getTemplatesAliasesAliasRoute, getTemplatesAliasesAliasRouteHandler)
  .openapi(getNodesRoute, getNodesRouteHandler)
  .openapi(getNodesNodeIDRoute, getNodesNodeIDRouteHandler)
  .openapi(postNodesNodeIDRoute, postNodesNodeIDRouteHandler)
  .openapi(getNodesNodeIDSandboxesRoute, getNodesNodeIDSandboxesRouteHandler)
  .openapi(postAdminTeamsTeamIDSandboxesKillRoute, postAdminTeamsTeamIDSandboxesKillRouteHandler)
  .openapi(getAdminSandboxesRunningCountsRoute, getAdminSandboxesRunningCountsRouteHandler)
  .openapi(getAdminSandboxesSandboxIDRoute, getAdminSandboxesSandboxIDRouteHandler)
  .openapi(
    getUnstableAdminSandboxesSandboxIDOverviewRoute,
    getUnstableAdminSandboxesSandboxIDOverviewRouteHandler,
  )
  .openapi(
    getUnstableAdminSandboxesSandboxIDBuildsRoute,
    getUnstableAdminSandboxesSandboxIDBuildsRouteHandler,
  )
  .openapi(
    postUnstableAdminSandboxesSandboxIDBuildsRestoreRoute,
    postUnstableAdminSandboxesSandboxIDBuildsRestoreRouteHandler,
  )
  .openapi(postAdminTeamsTeamIDBuildsCancelRoute, postAdminTeamsTeamIDBuildsCancelRouteHandler)
  .openapi(getAdminTeamsTeamIDApiKeysRoute, getAdminTeamsTeamIDApiKeysRouteHandler)
  .openapi(postAdminTeamsTeamIDApiKeysRoute, postAdminTeamsTeamIDApiKeysRouteHandler)
  .openapi(
    deleteAdminTeamsTeamIDApiKeysApiKeyIDRoute,
    deleteAdminTeamsTeamIDApiKeysApiKeyIDRouteHandler,
  )
  .openapi(
    getUnstableManagementTelemetryNamesRoute,
    getUnstableManagementTelemetryNamesRouteHandler,
  )
  .openapi(
    putUnstableManagementClustersClusterIDRoute,
    putUnstableManagementClustersClusterIDRouteHandler,
  )
  .openapi(
    deleteUnstableManagementClustersClusterIDRoute,
    deleteUnstableManagementClustersClusterIDRouteHandler,
  )
  .openapi(
    putUnstableManagementClustersClusterIDTelemetryRoute,
    putUnstableManagementClustersClusterIDTelemetryRouteHandler,
  )
  .openapi(
    getUnstableManagementClustersClusterIDProjectsRoute,
    getUnstableManagementClustersClusterIDProjectsRouteHandler,
  )
  .openapi(
    putUnstableManagementClustersClusterIDDeletionRoute,
    putUnstableManagementClustersClusterIDDeletionRouteHandler,
  )
  .openapi(
    getUnstableManagementClustersClusterIDDestroyReadinessRoute,
    getUnstableManagementClustersClusterIDDestroyReadinessRouteHandler,
  )
  .openapi(
    putUnstableManagementProjectsProjectIDClusterClusterIDRoute,
    putUnstableManagementProjectsProjectIDClusterClusterIDRouteHandler,
  )
  .openapi(
    deleteUnstableManagementProjectsProjectIDClusterClusterIDRoute,
    deleteUnstableManagementProjectsProjectIDClusterClusterIDRouteHandler,
  )
  .openapi(
    putUnstableManagementProjectsProjectIDRoute,
    putUnstableManagementProjectsProjectIDRouteHandler,
  )
  .openapi(
    deleteUnstableManagementProjectsProjectIDRoute,
    deleteUnstableManagementProjectsProjectIDRouteHandler,
  )
  .openapi(
    putUnstableManagementProjectsProjectIDMembersUserIDRoute,
    putUnstableManagementProjectsProjectIDMembersUserIDRouteHandler,
  )
  .openapi(
    putUnstableManagementProjectsProjectIDLimitsRoute,
    putUnstableManagementProjectsProjectIDLimitsRouteHandler,
  )
  .openapi(
    putUnstableManagementProjectsProjectIDSettingsRoute,
    putUnstableManagementProjectsProjectIDSettingsRouteHandler,
  )
  .openapi(
    putUnstableManagementProjectsProjectIDBlockRoute,
    putUnstableManagementProjectsProjectIDBlockRouteHandler,
  )
  .openapi(
    putUnstableManagementProjectsProjectIDBanRoute,
    putUnstableManagementProjectsProjectIDBanRouteHandler,
  )
  .openapi(postUnstableAdminTeamsQueryRoute, postUnstableAdminTeamsQueryRouteHandler)
  .openapi(postUnstableAdminTeamsBansRoute, postUnstableAdminTeamsBansRouteHandler)
  .openapi(getUnstableAdminTeamsTeamIDRoute, getUnstableAdminTeamsTeamIDRouteHandler)
  .openapi(
    putUnstableAdminTeamsTeamIDSchedulingLabelsRoute,
    putUnstableAdminTeamsTeamIDSchedulingLabelsRouteHandler,
  )
  .openapi(putUnstableAdminTeamsTeamIDBanRoute, putUnstableAdminTeamsTeamIDBanRouteHandler)
  .openapi(deleteUnstableAdminTeamsTeamIDBanRoute, deleteUnstableAdminTeamsTeamIDBanRouteHandler)
  .openapi(getUnstableAdminClustersRoute, getUnstableAdminClustersRouteHandler)
  .openapi(postUnstableAdminClustersRoute, postUnstableAdminClustersRouteHandler)
  .openapi(getUnstableAdminClustersClusterIDRoute, getUnstableAdminClustersClusterIDRouteHandler)
  .openapi(
    patchUnstableAdminClustersClusterIDRoute,
    patchUnstableAdminClustersClusterIDRouteHandler,
  )
  .openapi(
    deleteUnstableAdminClustersClusterIDRoute,
    deleteUnstableAdminClustersClusterIDRouteHandler,
  )
  .openapi(
    getUnstableAdminClustersClusterIDMetadataRoute,
    getUnstableAdminClustersClusterIDMetadataRouteHandler,
  )
  .openapi(
    getUnstableAdminClustersClusterIDTeamsRoute,
    getUnstableAdminClustersClusterIDTeamsRouteHandler,
  )
  .openapi(
    putUnstableAdminClustersClusterIDTokenRoute,
    putUnstableAdminClustersClusterIDTokenRouteHandler,
  )
  .openapi(getUnstableAdminTemplatesAliasesRoute, getUnstableAdminTemplatesAliasesRouteHandler)
  .openapi(postUnstableAdminTemplatesAliasesRoute, postUnstableAdminTemplatesAliasesRouteHandler)
  .openapi(
    deleteUnstableAdminTemplatesAliasesAliasIDRoute,
    deleteUnstableAdminTemplatesAliasesAliasIDRouteHandler,
  )
  .openapi(postUnstableAdminTemplatesDefaultsRoute, postUnstableAdminTemplatesDefaultsRouteHandler)
  .openapi(
    patchUnstableAdminTemplatesDefaultsTemplateIDRoute,
    patchUnstableAdminTemplatesDefaultsTemplateIDRouteHandler,
  )
  .openapi(
    deleteUnstableAdminTemplatesDefaultsTemplateIDRoute,
    deleteUnstableAdminTemplatesDefaultsTemplateIDRouteHandler,
  )
  .openapi(getUnstableAdminTemplatesLookupRoute, getUnstableAdminTemplatesLookupRouteHandler)
  .openapi(getApiKeysRoute, getApiKeysRouteHandler)
  .openapi(postApiKeysRoute, postApiKeysRouteHandler)
  .openapi(patchApiKeysApiKeyIDRoute, patchApiKeysApiKeyIDRouteHandler)
  .openapi(deleteApiKeysApiKeyIDRoute, deleteApiKeysApiKeyIDRouteHandler)
  .openapi(getVolumesRoute, getVolumesRouteHandler)
  .openapi(postVolumesRoute, postVolumesRouteHandler)
  .openapi(getVolumesVolumeIDRoute, getVolumesVolumeIDRouteHandler)
  .openapi(deleteVolumesVolumeIDRoute, deleteVolumesVolumeIDRouteHandler)
  .openapi(getSecretsRoute, getSecretsRouteHandler)
  .openapi(postSecretsRoute, postSecretsRouteHandler)
  .openapi(getSecretsSecretIDRoute, getSecretsSecretIDRouteHandler)
  .openapi(postSecretsSecretIDRoute, postSecretsSecretIDRouteHandler)
  .openapi(deleteSecretsSecretIDRoute, deleteSecretsSecretIDRouteHandler)
  .openapi(getClustersClusterIDRigsRoute, getClustersClusterIDRigsRouteHandler)
  .openapi(
    putClustersClusterIDRigsRigIDCapacityRoute,
    putClustersClusterIDRigsRigIDCapacityRouteHandler,
  )
  .openapi(
    deleteClustersClusterIDRigsInstancesInstanceIDRoute,
    deleteClustersClusterIDRigsInstancesInstanceIDRouteHandler,
  )
  .openapi(
    getClustersClusterIDRigsRigIDInstancesRoute,
    getClustersClusterIDRigsRigIDInstancesRouteHandler,
  )
  .openapi(
    getClustersClusterIDRigsRigIDErrorsRoute,
    getClustersClusterIDRigsRigIDErrorsRouteHandler,
  )
  .openapi(getEventsSandboxesSandboxIDRoute, getEventsSandboxesSandboxIDRouteHandler)
  .openapi(getEventsSandboxesRoute, getEventsSandboxesRouteHandler)
  .openapi(postEventsWebhooksRoute, postEventsWebhooksRouteHandler)
  .openapi(getEventsWebhooksRoute, getEventsWebhooksRouteHandler)
  .openapi(getEventsWebhooksWebhookIDRoute, getEventsWebhooksWebhookIDRouteHandler)
  .openapi(patchEventsWebhooksWebhookIDRoute, patchEventsWebhooksWebhookIDRouteHandler)
  .openapi(deleteEventsWebhooksWebhookIDRoute, deleteEventsWebhooksWebhookIDRouteHandler)
  .openapi(
    getEventsWebhooksWebhookIDDeliveriesRoute,
    getEventsWebhooksWebhookIDDeliveriesRouteHandler,
  )
  .openapi(getEventsWebhooksWebhookIDStatsRoute, getEventsWebhooksWebhookIDStatsRouteHandler)

export default app
