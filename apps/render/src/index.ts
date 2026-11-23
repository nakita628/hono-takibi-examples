import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBlueprintsBlueprintIdRoute,
  deleteBuildSourcesBuildSourceIdEnvGroupsEnvGroupIdRoute,
  deleteBuildSourcesBuildSourceIdEnvVarsEnvVarKeyRoute,
  deleteBuildSourcesBuildSourceIdRoute,
  deleteBuildSourcesBuildSourceIdSecretFilesEnvVarKeyRoute,
  deleteCronJobsCronJobIdRunsRoute,
  deleteDedicatedIpsDedicatedIpIdRoute,
  deleteDisksDiskIdRoute,
  deleteEnvGroupsEnvGroupIdEnvVarsEnvVarKeyRoute,
  deleteEnvGroupsEnvGroupIdRoute,
  deleteEnvGroupsEnvGroupIdSecretFilesEnvVarKeyRoute,
  deleteEnvGroupsEnvGroupIdServicesServiceIdRoute,
  deleteEnvironmentsEnvironmentIdResourcesRoute,
  deleteEnvironmentsEnvironmentIdRoute,
  deleteFlowRunsFlowRunIdRoute,
  deleteKeyValueRedisIdRoute,
  deleteLogsStreamsOwnerOwnerIdRoute,
  deleteLogsStreamsResourceResourceIdRoute,
  deleteMetricsStreamOwnerIdRoute,
  deleteOwnersOwnerIdMembersUserIdRoute,
  deletePostgresPostgresIdCredentialsUsernameRoute,
  deletePostgresPostgresIdRoute,
  deleteProjectsProjectIdRoute,
  deleteRedisRedisIdRoute,
  deleteRegistrycredentialsRegistryCredentialIdRoute,
  deleteSandboxGroupsSandboxGroupIdBuildsBuildIdRoute,
  deleteSandboxGroupsSandboxGroupIdCredentialsCredentialIdRoute,
  deleteSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdRoute,
  deleteServicesServiceIdAutoscalingRoute,
  deleteServicesServiceIdCustomDomainsCustomDomainNameOrIDRoute,
  deleteServicesServiceIdEnvVarsEnvVarKeyRoute,
  deleteServicesServiceIdHeadersHeaderIdRoute,
  deleteServicesServiceIdRoute,
  deleteServicesServiceIdRoutesRouteIdRoute,
  deleteServicesServiceIdSecretFilesEnvVarKeyRoute,
  deleteTaskRunsTaskRunIdRoute,
  deleteWebhooksWebhookIdRoute,
  deleteWorkflowsWorkflowIdRoute,
  getBlueprintsBlueprintIdRoute,
  getBlueprintsBlueprintIdSyncsRoute,
  getBlueprintsRoute,
  getBuildSourcesBuildSourceIdBuildsBuildIdRoute,
  getBuildSourcesBuildSourceIdBuildsRoute,
  getBuildSourcesBuildSourceIdEnvVarsEnvVarKeyRoute,
  getBuildSourcesBuildSourceIdEnvVarsRoute,
  getBuildSourcesBuildSourceIdRoute,
  getBuildSourcesBuildSourceIdSecretFilesEnvVarKeyRoute,
  getBuildSourcesBuildSourceIdSecretFilesRoute,
  getBuildSourcesRoute,
  getDedicatedIpsDedicatedIpIdRoute,
  getDedicatedIpsRoute,
  getDisksDiskIdRoute,
  getDisksDiskIdSnapshotsRoute,
  getDisksRoute,
  getEnvGroupsEnvGroupIdEnvVarsEnvVarKeyRoute,
  getEnvGroupsEnvGroupIdRoute,
  getEnvGroupsEnvGroupIdSecretFilesEnvVarKeyRoute,
  getEnvGroupsRoute,
  getEnvironmentsEnvironmentIdRoute,
  getEnvironmentsRoute,
  getEventsEventIdRoute,
  getFlowRunsFlowRunIdRoute,
  getFlowRunsFlowRunIdStepsRoute,
  getFlowRunsFlowRunIdStepsStepSeqAttemptsAttemptRoute,
  getFlowRunsFlowRunIdStepsStepSeqRoute,
  getFlowRunsRoute,
  getFlowsFlowIdRoute,
  getFlowsRoute,
  getKeyValueRedisIdConnectionInfoRoute,
  getKeyValueRedisIdRoute,
  getKeyValueRoute,
  getLogsRoute,
  getLogsStreamsOwnerOwnerIdRoute,
  getLogsStreamsResourceResourceIdRoute,
  getLogsStreamsResourceRoute,
  getLogsSubscribeRoute,
  getLogsValuesRoute,
  getMaintenanceMaintenanceRunIDRoute,
  getMaintenanceRoute,
  getMetricsActiveConnectionsRoute,
  getMetricsBandwidthRoute,
  getMetricsBandwidthSourcesRoute,
  getMetricsCpuLimitRoute,
  getMetricsCpuRoute,
  getMetricsCpuTargetRoute,
  getMetricsDiskCapacityRoute,
  getMetricsDiskUsageRoute,
  getMetricsFiltersApplicationRoute,
  getMetricsFiltersHttpRoute,
  getMetricsFiltersPathRoute,
  getMetricsHttpLatencyRoute,
  getMetricsHttpRequestsRoute,
  getMetricsInstanceCountRoute,
  getMetricsMemoryLimitRoute,
  getMetricsMemoryRoute,
  getMetricsMemoryTargetRoute,
  getMetricsReplicationLagRoute,
  getMetricsStreamOwnerIdRoute,
  getMetricsTaskRunsCompletedRoute,
  getMetricsTaskRunsQueuedRoute,
  getNotificationSettingsOverridesRoute,
  getNotificationSettingsOverridesServicesServiceIdRoute,
  getNotificationSettingsOwnersOwnerIdRoute,
  getOrganizationsOrgIdAuditLogsRoute,
  getOwnersOwnerIdAuditLogsRoute,
  getOwnersOwnerIdMembersRoute,
  getOwnersOwnerIdRoute,
  getOwnersRoute,
  getPostgresPostgresIdConnectionInfoRoute,
  getPostgresPostgresIdCredentialsRoute,
  getPostgresPostgresIdExportRoute,
  getPostgresPostgresIdQueryProcessesRoute,
  getPostgresPostgresIdQuerySizesRoute,
  getPostgresPostgresIdQueryTableScansRoute,
  getPostgresPostgresIdQueryTopQueriesRoute,
  getPostgresPostgresIdRecoveryRoute,
  getPostgresPostgresIdRoute,
  getPostgresRoute,
  getProjectsProjectIdRoute,
  getProjectsRoute,
  getRedisRedisIdConnectionInfoRoute,
  getRedisRedisIdRoute,
  getRedisRoute,
  getRegistrycredentialsRegistryCredentialIdRoute,
  getRegistrycredentialsRoute,
  getSandboxesRoute,
  getSandboxesSandboxIdExecsExecIdRoute,
  getSandboxesSandboxIdExecsRoute,
  getSandboxesSandboxIdRoute,
  getSandboxGroupsRoute,
  getSandboxGroupsSandboxGroupIdBuildsBuildIdRoute,
  getSandboxGroupsSandboxGroupIdBuildsRoute,
  getSandboxGroupsSandboxGroupIdCredentialsCredentialIdRoute,
  getSandboxGroupsSandboxGroupIdCredentialsCredentialIdVersionsRoute,
  getSandboxGroupsSandboxGroupIdCredentialsRoute,
  getSandboxGroupsSandboxGroupIdRoute,
  getSandboxGroupsSandboxGroupIdSnapshotsRoute,
  getSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdRoute,
  getServicesRoute,
  getServicesServiceIdCustomDomainsCustomDomainNameOrIDRoute,
  getServicesServiceIdCustomDomainsRoute,
  getServicesServiceIdDeploysDeployIdRoute,
  getServicesServiceIdDeploysRoute,
  getServicesServiceIdEnvVarsEnvVarKeyRoute,
  getServicesServiceIdEnvVarsRoute,
  getServicesServiceIdEventsRoute,
  getServicesServiceIdHeadersRoute,
  getServicesServiceIdInstancesRoute,
  getServicesServiceIdJobsJobIdRoute,
  getServicesServiceIdJobsRoute,
  getServicesServiceIdOutboundIpsRoute,
  getServicesServiceIdRoute,
  getServicesServiceIdRoutesRoute,
  getServicesServiceIdSecretFilesEnvVarKeyRoute,
  getServicesServiceIdSecretFilesRoute,
  getTaskRunsEventsRoute,
  getTaskRunsRoute,
  getTaskRunsTaskRunIdRoute,
  getTasksRoute,
  getTasksTaskIdRoute,
  getUsersRoute,
  getWebhooksRoute,
  getWebhooksWebhookIdEventsRoute,
  getWebhooksWebhookIdRoute,
  getWorkflowsRoute,
  getWorkflowsWorkflowIdRoute,
  getWorkflowversionsRoute,
  getWorkflowversionsWorkflowVersionIdRoute,
  patchBlueprintsBlueprintIdRoute,
  patchBuildSourcesBuildSourceIdRoute,
  patchDedicatedIpsDedicatedIpIdRoute,
  patchDisksDiskIdRoute,
  patchEnvGroupsEnvGroupIdRoute,
  patchEnvironmentsEnvironmentIdRoute,
  patchKeyValueRedisIdRoute,
  patchMaintenanceMaintenanceRunIDRoute,
  patchNotificationSettingsOverridesServicesServiceIdRoute,
  patchNotificationSettingsOwnersOwnerIdRoute,
  patchOwnersOwnerIdMembersUserIdRoute,
  patchPostgresPostgresIdRoute,
  patchProjectsProjectIdRoute,
  patchRedisRedisIdRoute,
  patchRegistrycredentialsRegistryCredentialIdRoute,
  patchSandboxGroupsSandboxGroupIdCredentialsCredentialIdRoute,
  patchSandboxGroupsSandboxGroupIdRoute,
  patchServicesServiceIdRoute,
  patchServicesServiceIdRoutesRouteIdRoute,
  patchWebhooksWebhookIdRoute,
  patchWorkflowsWorkflowIdRoute,
  postBlueprintsValidateRoute,
  postBuildSourcesBuildSourceIdBuildsRoute,
  postBuildSourcesBuildSourceIdEnvGroupsEnvGroupIdRoute,
  postBuildSourcesRoute,
  postCronJobsCronJobIdRunsRoute,
  postDedicatedIpsRoute,
  postDisksDiskIdSnapshotsRestoreRoute,
  postDisksRoute,
  postEnvGroupsEnvGroupIdServicesServiceIdRoute,
  postEnvGroupsRoute,
  postEnvironmentsEnvironmentIdResourcesRoute,
  postEnvironmentsRoute,
  postFlowRunsRoute,
  postKeyValueRedisIdResumeRoute,
  postKeyValueRedisIdSuspendRoute,
  postKeyValueRoute,
  postMaintenanceMaintenanceRunIDTriggerRoute,
  postPostgresPostgresIdCredentialsRoute,
  postPostgresPostgresIdExportRoute,
  postPostgresPostgresIdFailoverRoute,
  postPostgresPostgresIdRecoveryRoute,
  postPostgresPostgresIdRestartRoute,
  postPostgresPostgresIdResumeRoute,
  postPostgresPostgresIdSuspendRoute,
  postPostgresRoute,
  postProjectsRoute,
  postRedisRedisIdResumeRoute,
  postRedisRedisIdSuspendRoute,
  postRedisRoute,
  postRegistrycredentialsRoute,
  postSandboxesRoute,
  postSandboxesSandboxIdFilesOperationTokenRoute,
  postSandboxesSandboxIdRunsOperationTokenRoute,
  postSandboxesSandboxIdSnapshotsRoute,
  postSandboxesSandboxIdSuspendRoute,
  postSandboxesSandboxIdTerminateRoute,
  postSandboxGroupsRoute,
  postSandboxGroupsSandboxGroupIdBuildsRoute,
  postSandboxGroupsSandboxGroupIdCredentialsCredentialIdRestoreRoute,
  postSandboxGroupsSandboxGroupIdCredentialsRoute,
  postServicesRoute,
  postServicesServiceIdCachePurgeRoute,
  postServicesServiceIdCustomDomainsCustomDomainNameOrIDVerifyRoute,
  postServicesServiceIdCustomDomainsRoute,
  postServicesServiceIdDeploysDeployIdCancelRoute,
  postServicesServiceIdDeploysRoute,
  postServicesServiceIdHeadersRoute,
  postServicesServiceIdJobsJobIdCancelRoute,
  postServicesServiceIdJobsRoute,
  postServicesServiceIdPreviewRoute,
  postServicesServiceIdRestartRoute,
  postServicesServiceIdResumeRoute,
  postServicesServiceIdRollbackRoute,
  postServicesServiceIdRoutesRoute,
  postServicesServiceIdScaleRoute,
  postServicesServiceIdSuspendRoute,
  postTaskRunsRoute,
  postWebhooksRoute,
  postWorkflowsRoute,
  postWorkflowversionsRoute,
  putBuildSourcesBuildSourceIdEnvVarsEnvVarKeyRoute,
  putBuildSourcesBuildSourceIdEnvVarsRoute,
  putBuildSourcesBuildSourceIdSecretFilesEnvVarKeyRoute,
  putBuildSourcesBuildSourceIdSecretFilesRoute,
  putEnvGroupsEnvGroupIdEnvVarsEnvVarKeyRoute,
  putEnvGroupsEnvGroupIdSecretFilesEnvVarKeyRoute,
  putLogsStreamsOwnerOwnerIdRoute,
  putLogsStreamsResourceResourceIdRoute,
  putMetricsStreamOwnerIdRoute,
  putServicesServiceIdAutoscalingRoute,
  putServicesServiceIdEnvVarsEnvVarKeyRoute,
  putServicesServiceIdEnvVarsRoute,
  putServicesServiceIdHeadersRoute,
  putServicesServiceIdRoutesRoute,
  putServicesServiceIdSecretFilesEnvVarKeyRoute,
  putServicesServiceIdSecretFilesRoute,
} from './routes'
import {
  deleteBlueprintsBlueprintIdRouteHandler,
  deleteBuildSourcesBuildSourceIdEnvGroupsEnvGroupIdRouteHandler,
  deleteBuildSourcesBuildSourceIdEnvVarsEnvVarKeyRouteHandler,
  deleteBuildSourcesBuildSourceIdRouteHandler,
  deleteBuildSourcesBuildSourceIdSecretFilesEnvVarKeyRouteHandler,
  deleteCronJobsCronJobIdRunsRouteHandler,
  deleteDedicatedIpsDedicatedIpIdRouteHandler,
  deleteDisksDiskIdRouteHandler,
  deleteEnvGroupsEnvGroupIdEnvVarsEnvVarKeyRouteHandler,
  deleteEnvGroupsEnvGroupIdRouteHandler,
  deleteEnvGroupsEnvGroupIdSecretFilesEnvVarKeyRouteHandler,
  deleteEnvGroupsEnvGroupIdServicesServiceIdRouteHandler,
  deleteEnvironmentsEnvironmentIdResourcesRouteHandler,
  deleteEnvironmentsEnvironmentIdRouteHandler,
  deleteFlowRunsFlowRunIdRouteHandler,
  deleteKeyValueRedisIdRouteHandler,
  deleteLogsStreamsOwnerOwnerIdRouteHandler,
  deleteLogsStreamsResourceResourceIdRouteHandler,
  deleteMetricsStreamOwnerIdRouteHandler,
  deleteOwnersOwnerIdMembersUserIdRouteHandler,
  deletePostgresPostgresIdCredentialsUsernameRouteHandler,
  deletePostgresPostgresIdRouteHandler,
  deleteProjectsProjectIdRouteHandler,
  deleteRedisRedisIdRouteHandler,
  deleteRegistrycredentialsRegistryCredentialIdRouteHandler,
  deleteSandboxGroupsSandboxGroupIdBuildsBuildIdRouteHandler,
  deleteSandboxGroupsSandboxGroupIdCredentialsCredentialIdRouteHandler,
  deleteSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdRouteHandler,
  deleteServicesServiceIdAutoscalingRouteHandler,
  deleteServicesServiceIdCustomDomainsCustomDomainNameOrIDRouteHandler,
  deleteServicesServiceIdEnvVarsEnvVarKeyRouteHandler,
  deleteServicesServiceIdHeadersHeaderIdRouteHandler,
  deleteServicesServiceIdRouteHandler,
  deleteServicesServiceIdRoutesRouteIdRouteHandler,
  deleteServicesServiceIdSecretFilesEnvVarKeyRouteHandler,
  deleteTaskRunsTaskRunIdRouteHandler,
  deleteWebhooksWebhookIdRouteHandler,
  deleteWorkflowsWorkflowIdRouteHandler,
  getBlueprintsBlueprintIdRouteHandler,
  getBlueprintsBlueprintIdSyncsRouteHandler,
  getBlueprintsRouteHandler,
  getBuildSourcesBuildSourceIdBuildsBuildIdRouteHandler,
  getBuildSourcesBuildSourceIdBuildsRouteHandler,
  getBuildSourcesBuildSourceIdEnvVarsEnvVarKeyRouteHandler,
  getBuildSourcesBuildSourceIdEnvVarsRouteHandler,
  getBuildSourcesBuildSourceIdRouteHandler,
  getBuildSourcesBuildSourceIdSecretFilesEnvVarKeyRouteHandler,
  getBuildSourcesBuildSourceIdSecretFilesRouteHandler,
  getBuildSourcesRouteHandler,
  getDedicatedIpsDedicatedIpIdRouteHandler,
  getDedicatedIpsRouteHandler,
  getDisksDiskIdRouteHandler,
  getDisksDiskIdSnapshotsRouteHandler,
  getDisksRouteHandler,
  getEnvGroupsEnvGroupIdEnvVarsEnvVarKeyRouteHandler,
  getEnvGroupsEnvGroupIdRouteHandler,
  getEnvGroupsEnvGroupIdSecretFilesEnvVarKeyRouteHandler,
  getEnvGroupsRouteHandler,
  getEnvironmentsEnvironmentIdRouteHandler,
  getEnvironmentsRouteHandler,
  getEventsEventIdRouteHandler,
  getFlowRunsFlowRunIdRouteHandler,
  getFlowRunsFlowRunIdStepsRouteHandler,
  getFlowRunsFlowRunIdStepsStepSeqAttemptsAttemptRouteHandler,
  getFlowRunsFlowRunIdStepsStepSeqRouteHandler,
  getFlowRunsRouteHandler,
  getFlowsFlowIdRouteHandler,
  getFlowsRouteHandler,
  getKeyValueRedisIdConnectionInfoRouteHandler,
  getKeyValueRedisIdRouteHandler,
  getKeyValueRouteHandler,
  getLogsRouteHandler,
  getLogsStreamsOwnerOwnerIdRouteHandler,
  getLogsStreamsResourceResourceIdRouteHandler,
  getLogsStreamsResourceRouteHandler,
  getLogsSubscribeRouteHandler,
  getLogsValuesRouteHandler,
  getMaintenanceMaintenanceRunIDRouteHandler,
  getMaintenanceRouteHandler,
  getMetricsActiveConnectionsRouteHandler,
  getMetricsBandwidthRouteHandler,
  getMetricsBandwidthSourcesRouteHandler,
  getMetricsCpuLimitRouteHandler,
  getMetricsCpuRouteHandler,
  getMetricsCpuTargetRouteHandler,
  getMetricsDiskCapacityRouteHandler,
  getMetricsDiskUsageRouteHandler,
  getMetricsFiltersApplicationRouteHandler,
  getMetricsFiltersHttpRouteHandler,
  getMetricsFiltersPathRouteHandler,
  getMetricsHttpLatencyRouteHandler,
  getMetricsHttpRequestsRouteHandler,
  getMetricsInstanceCountRouteHandler,
  getMetricsMemoryLimitRouteHandler,
  getMetricsMemoryRouteHandler,
  getMetricsMemoryTargetRouteHandler,
  getMetricsReplicationLagRouteHandler,
  getMetricsStreamOwnerIdRouteHandler,
  getMetricsTaskRunsCompletedRouteHandler,
  getMetricsTaskRunsQueuedRouteHandler,
  getNotificationSettingsOverridesRouteHandler,
  getNotificationSettingsOverridesServicesServiceIdRouteHandler,
  getNotificationSettingsOwnersOwnerIdRouteHandler,
  getOrganizationsOrgIdAuditLogsRouteHandler,
  getOwnersOwnerIdAuditLogsRouteHandler,
  getOwnersOwnerIdMembersRouteHandler,
  getOwnersOwnerIdRouteHandler,
  getOwnersRouteHandler,
  getPostgresPostgresIdConnectionInfoRouteHandler,
  getPostgresPostgresIdCredentialsRouteHandler,
  getPostgresPostgresIdExportRouteHandler,
  getPostgresPostgresIdQueryProcessesRouteHandler,
  getPostgresPostgresIdQuerySizesRouteHandler,
  getPostgresPostgresIdQueryTableScansRouteHandler,
  getPostgresPostgresIdQueryTopQueriesRouteHandler,
  getPostgresPostgresIdRecoveryRouteHandler,
  getPostgresPostgresIdRouteHandler,
  getPostgresRouteHandler,
  getProjectsProjectIdRouteHandler,
  getProjectsRouteHandler,
  getRedisRedisIdConnectionInfoRouteHandler,
  getRedisRedisIdRouteHandler,
  getRedisRouteHandler,
  getRegistrycredentialsRegistryCredentialIdRouteHandler,
  getRegistrycredentialsRouteHandler,
  getSandboxesRouteHandler,
  getSandboxesSandboxIdExecsExecIdRouteHandler,
  getSandboxesSandboxIdExecsRouteHandler,
  getSandboxesSandboxIdRouteHandler,
  getSandboxGroupsRouteHandler,
  getSandboxGroupsSandboxGroupIdBuildsBuildIdRouteHandler,
  getSandboxGroupsSandboxGroupIdBuildsRouteHandler,
  getSandboxGroupsSandboxGroupIdCredentialsCredentialIdRouteHandler,
  getSandboxGroupsSandboxGroupIdCredentialsCredentialIdVersionsRouteHandler,
  getSandboxGroupsSandboxGroupIdCredentialsRouteHandler,
  getSandboxGroupsSandboxGroupIdRouteHandler,
  getSandboxGroupsSandboxGroupIdSnapshotsRouteHandler,
  getSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdRouteHandler,
  getServicesRouteHandler,
  getServicesServiceIdCustomDomainsCustomDomainNameOrIDRouteHandler,
  getServicesServiceIdCustomDomainsRouteHandler,
  getServicesServiceIdDeploysDeployIdRouteHandler,
  getServicesServiceIdDeploysRouteHandler,
  getServicesServiceIdEnvVarsEnvVarKeyRouteHandler,
  getServicesServiceIdEnvVarsRouteHandler,
  getServicesServiceIdEventsRouteHandler,
  getServicesServiceIdHeadersRouteHandler,
  getServicesServiceIdInstancesRouteHandler,
  getServicesServiceIdJobsJobIdRouteHandler,
  getServicesServiceIdJobsRouteHandler,
  getServicesServiceIdOutboundIpsRouteHandler,
  getServicesServiceIdRouteHandler,
  getServicesServiceIdRoutesRouteHandler,
  getServicesServiceIdSecretFilesEnvVarKeyRouteHandler,
  getServicesServiceIdSecretFilesRouteHandler,
  getTaskRunsEventsRouteHandler,
  getTaskRunsRouteHandler,
  getTaskRunsTaskRunIdRouteHandler,
  getTasksRouteHandler,
  getTasksTaskIdRouteHandler,
  getUsersRouteHandler,
  getWebhooksRouteHandler,
  getWebhooksWebhookIdEventsRouteHandler,
  getWebhooksWebhookIdRouteHandler,
  getWorkflowsRouteHandler,
  getWorkflowsWorkflowIdRouteHandler,
  getWorkflowversionsRouteHandler,
  getWorkflowversionsWorkflowVersionIdRouteHandler,
  patchBlueprintsBlueprintIdRouteHandler,
  patchBuildSourcesBuildSourceIdRouteHandler,
  patchDedicatedIpsDedicatedIpIdRouteHandler,
  patchDisksDiskIdRouteHandler,
  patchEnvGroupsEnvGroupIdRouteHandler,
  patchEnvironmentsEnvironmentIdRouteHandler,
  patchKeyValueRedisIdRouteHandler,
  patchMaintenanceMaintenanceRunIDRouteHandler,
  patchNotificationSettingsOverridesServicesServiceIdRouteHandler,
  patchNotificationSettingsOwnersOwnerIdRouteHandler,
  patchOwnersOwnerIdMembersUserIdRouteHandler,
  patchPostgresPostgresIdRouteHandler,
  patchProjectsProjectIdRouteHandler,
  patchRedisRedisIdRouteHandler,
  patchRegistrycredentialsRegistryCredentialIdRouteHandler,
  patchSandboxGroupsSandboxGroupIdCredentialsCredentialIdRouteHandler,
  patchSandboxGroupsSandboxGroupIdRouteHandler,
  patchServicesServiceIdRouteHandler,
  patchServicesServiceIdRoutesRouteIdRouteHandler,
  patchWebhooksWebhookIdRouteHandler,
  patchWorkflowsWorkflowIdRouteHandler,
  postBlueprintsValidateRouteHandler,
  postBuildSourcesBuildSourceIdBuildsRouteHandler,
  postBuildSourcesBuildSourceIdEnvGroupsEnvGroupIdRouteHandler,
  postBuildSourcesRouteHandler,
  postCronJobsCronJobIdRunsRouteHandler,
  postDedicatedIpsRouteHandler,
  postDisksDiskIdSnapshotsRestoreRouteHandler,
  postDisksRouteHandler,
  postEnvGroupsEnvGroupIdServicesServiceIdRouteHandler,
  postEnvGroupsRouteHandler,
  postEnvironmentsEnvironmentIdResourcesRouteHandler,
  postEnvironmentsRouteHandler,
  postFlowRunsRouteHandler,
  postKeyValueRedisIdResumeRouteHandler,
  postKeyValueRedisIdSuspendRouteHandler,
  postKeyValueRouteHandler,
  postMaintenanceMaintenanceRunIDTriggerRouteHandler,
  postPostgresPostgresIdCredentialsRouteHandler,
  postPostgresPostgresIdExportRouteHandler,
  postPostgresPostgresIdFailoverRouteHandler,
  postPostgresPostgresIdRecoveryRouteHandler,
  postPostgresPostgresIdRestartRouteHandler,
  postPostgresPostgresIdResumeRouteHandler,
  postPostgresPostgresIdSuspendRouteHandler,
  postPostgresRouteHandler,
  postProjectsRouteHandler,
  postRedisRedisIdResumeRouteHandler,
  postRedisRedisIdSuspendRouteHandler,
  postRedisRouteHandler,
  postRegistrycredentialsRouteHandler,
  postSandboxesRouteHandler,
  postSandboxesSandboxIdFilesOperationTokenRouteHandler,
  postSandboxesSandboxIdRunsOperationTokenRouteHandler,
  postSandboxesSandboxIdSnapshotsRouteHandler,
  postSandboxesSandboxIdSuspendRouteHandler,
  postSandboxesSandboxIdTerminateRouteHandler,
  postSandboxGroupsRouteHandler,
  postSandboxGroupsSandboxGroupIdBuildsRouteHandler,
  postSandboxGroupsSandboxGroupIdCredentialsCredentialIdRestoreRouteHandler,
  postSandboxGroupsSandboxGroupIdCredentialsRouteHandler,
  postServicesRouteHandler,
  postServicesServiceIdCachePurgeRouteHandler,
  postServicesServiceIdCustomDomainsCustomDomainNameOrIDVerifyRouteHandler,
  postServicesServiceIdCustomDomainsRouteHandler,
  postServicesServiceIdDeploysDeployIdCancelRouteHandler,
  postServicesServiceIdDeploysRouteHandler,
  postServicesServiceIdHeadersRouteHandler,
  postServicesServiceIdJobsJobIdCancelRouteHandler,
  postServicesServiceIdJobsRouteHandler,
  postServicesServiceIdPreviewRouteHandler,
  postServicesServiceIdRestartRouteHandler,
  postServicesServiceIdResumeRouteHandler,
  postServicesServiceIdRollbackRouteHandler,
  postServicesServiceIdRoutesRouteHandler,
  postServicesServiceIdScaleRouteHandler,
  postServicesServiceIdSuspendRouteHandler,
  postTaskRunsRouteHandler,
  postWebhooksRouteHandler,
  postWorkflowsRouteHandler,
  postWorkflowversionsRouteHandler,
  putBuildSourcesBuildSourceIdEnvVarsEnvVarKeyRouteHandler,
  putBuildSourcesBuildSourceIdEnvVarsRouteHandler,
  putBuildSourcesBuildSourceIdSecretFilesEnvVarKeyRouteHandler,
  putBuildSourcesBuildSourceIdSecretFilesRouteHandler,
  putEnvGroupsEnvGroupIdEnvVarsEnvVarKeyRouteHandler,
  putEnvGroupsEnvGroupIdSecretFilesEnvVarKeyRouteHandler,
  putLogsStreamsOwnerOwnerIdRouteHandler,
  putLogsStreamsResourceResourceIdRouteHandler,
  putMetricsStreamOwnerIdRouteHandler,
  putServicesServiceIdAutoscalingRouteHandler,
  putServicesServiceIdEnvVarsEnvVarKeyRouteHandler,
  putServicesServiceIdEnvVarsRouteHandler,
  putServicesServiceIdHeadersRouteHandler,
  putServicesServiceIdRoutesRouteHandler,
  putServicesServiceIdSecretFilesEnvVarKeyRouteHandler,
  putServicesServiceIdSecretFilesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getBlueprintsRoute, getBlueprintsRouteHandler)
  .openapi(postBlueprintsValidateRoute, postBlueprintsValidateRouteHandler)
  .openapi(patchOwnersOwnerIdMembersUserIdRoute, patchOwnersOwnerIdMembersUserIdRouteHandler)
  .openapi(deleteOwnersOwnerIdMembersUserIdRoute, deleteOwnersOwnerIdMembersUserIdRouteHandler)
  .openapi(getBlueprintsBlueprintIdRoute, getBlueprintsBlueprintIdRouteHandler)
  .openapi(patchBlueprintsBlueprintIdRoute, patchBlueprintsBlueprintIdRouteHandler)
  .openapi(deleteBlueprintsBlueprintIdRoute, deleteBlueprintsBlueprintIdRouteHandler)
  .openapi(getBlueprintsBlueprintIdSyncsRoute, getBlueprintsBlueprintIdSyncsRouteHandler)
  .openapi(getDedicatedIpsRoute, getDedicatedIpsRouteHandler)
  .openapi(postDedicatedIpsRoute, postDedicatedIpsRouteHandler)
  .openapi(getDedicatedIpsDedicatedIpIdRoute, getDedicatedIpsDedicatedIpIdRouteHandler)
  .openapi(patchDedicatedIpsDedicatedIpIdRoute, patchDedicatedIpsDedicatedIpIdRouteHandler)
  .openapi(deleteDedicatedIpsDedicatedIpIdRoute, deleteDedicatedIpsDedicatedIpIdRouteHandler)
  .openapi(getDisksRoute, getDisksRouteHandler)
  .openapi(postDisksRoute, postDisksRouteHandler)
  .openapi(getDisksDiskIdRoute, getDisksDiskIdRouteHandler)
  .openapi(patchDisksDiskIdRoute, patchDisksDiskIdRouteHandler)
  .openapi(deleteDisksDiskIdRoute, deleteDisksDiskIdRouteHandler)
  .openapi(getDisksDiskIdSnapshotsRoute, getDisksDiskIdSnapshotsRouteHandler)
  .openapi(postDisksDiskIdSnapshotsRestoreRoute, postDisksDiskIdSnapshotsRestoreRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(getOwnersRoute, getOwnersRouteHandler)
  .openapi(getOwnersOwnerIdRoute, getOwnersOwnerIdRouteHandler)
  .openapi(getOwnersOwnerIdMembersRoute, getOwnersOwnerIdMembersRouteHandler)
  .openapi(getOwnersOwnerIdAuditLogsRoute, getOwnersOwnerIdAuditLogsRouteHandler)
  .openapi(getOrganizationsOrgIdAuditLogsRoute, getOrganizationsOrgIdAuditLogsRouteHandler)
  .openapi(
    getNotificationSettingsOwnersOwnerIdRoute,
    getNotificationSettingsOwnersOwnerIdRouteHandler,
  )
  .openapi(
    patchNotificationSettingsOwnersOwnerIdRoute,
    patchNotificationSettingsOwnersOwnerIdRouteHandler,
  )
  .openapi(getNotificationSettingsOverridesRoute, getNotificationSettingsOverridesRouteHandler)
  .openapi(
    getNotificationSettingsOverridesServicesServiceIdRoute,
    getNotificationSettingsOverridesServicesServiceIdRouteHandler,
  )
  .openapi(
    patchNotificationSettingsOverridesServicesServiceIdRoute,
    patchNotificationSettingsOverridesServicesServiceIdRouteHandler,
  )
  .openapi(getRegistrycredentialsRoute, getRegistrycredentialsRouteHandler)
  .openapi(postRegistrycredentialsRoute, postRegistrycredentialsRouteHandler)
  .openapi(
    getRegistrycredentialsRegistryCredentialIdRoute,
    getRegistrycredentialsRegistryCredentialIdRouteHandler,
  )
  .openapi(
    patchRegistrycredentialsRegistryCredentialIdRoute,
    patchRegistrycredentialsRegistryCredentialIdRouteHandler,
  )
  .openapi(
    deleteRegistrycredentialsRegistryCredentialIdRoute,
    deleteRegistrycredentialsRegistryCredentialIdRouteHandler,
  )
  .openapi(getServicesRoute, getServicesRouteHandler)
  .openapi(postServicesRoute, postServicesRouteHandler)
  .openapi(getServicesServiceIdRoute, getServicesServiceIdRouteHandler)
  .openapi(patchServicesServiceIdRoute, patchServicesServiceIdRouteHandler)
  .openapi(deleteServicesServiceIdRoute, deleteServicesServiceIdRouteHandler)
  .openapi(postServicesServiceIdCachePurgeRoute, postServicesServiceIdCachePurgeRouteHandler)
  .openapi(getServicesServiceIdDeploysRoute, getServicesServiceIdDeploysRouteHandler)
  .openapi(postServicesServiceIdDeploysRoute, postServicesServiceIdDeploysRouteHandler)
  .openapi(
    getServicesServiceIdDeploysDeployIdRoute,
    getServicesServiceIdDeploysDeployIdRouteHandler,
  )
  .openapi(
    postServicesServiceIdDeploysDeployIdCancelRoute,
    postServicesServiceIdDeploysDeployIdCancelRouteHandler,
  )
  .openapi(postServicesServiceIdRollbackRoute, postServicesServiceIdRollbackRouteHandler)
  .openapi(getServicesServiceIdEnvVarsRoute, getServicesServiceIdEnvVarsRouteHandler)
  .openapi(putServicesServiceIdEnvVarsRoute, putServicesServiceIdEnvVarsRouteHandler)
  .openapi(
    getServicesServiceIdEnvVarsEnvVarKeyRoute,
    getServicesServiceIdEnvVarsEnvVarKeyRouteHandler,
  )
  .openapi(
    putServicesServiceIdEnvVarsEnvVarKeyRoute,
    putServicesServiceIdEnvVarsEnvVarKeyRouteHandler,
  )
  .openapi(
    deleteServicesServiceIdEnvVarsEnvVarKeyRoute,
    deleteServicesServiceIdEnvVarsEnvVarKeyRouteHandler,
  )
  .openapi(getServicesServiceIdSecretFilesRoute, getServicesServiceIdSecretFilesRouteHandler)
  .openapi(putServicesServiceIdSecretFilesRoute, putServicesServiceIdSecretFilesRouteHandler)
  .openapi(
    getServicesServiceIdSecretFilesEnvVarKeyRoute,
    getServicesServiceIdSecretFilesEnvVarKeyRouteHandler,
  )
  .openapi(
    putServicesServiceIdSecretFilesEnvVarKeyRoute,
    putServicesServiceIdSecretFilesEnvVarKeyRouteHandler,
  )
  .openapi(
    deleteServicesServiceIdSecretFilesEnvVarKeyRoute,
    deleteServicesServiceIdSecretFilesEnvVarKeyRouteHandler,
  )
  .openapi(getServicesServiceIdEventsRoute, getServicesServiceIdEventsRouteHandler)
  .openapi(getServicesServiceIdHeadersRoute, getServicesServiceIdHeadersRouteHandler)
  .openapi(postServicesServiceIdHeadersRoute, postServicesServiceIdHeadersRouteHandler)
  .openapi(putServicesServiceIdHeadersRoute, putServicesServiceIdHeadersRouteHandler)
  .openapi(
    deleteServicesServiceIdHeadersHeaderIdRoute,
    deleteServicesServiceIdHeadersHeaderIdRouteHandler,
  )
  .openapi(getServicesServiceIdRoutesRoute, getServicesServiceIdRoutesRouteHandler)
  .openapi(postServicesServiceIdRoutesRoute, postServicesServiceIdRoutesRouteHandler)
  .openapi(putServicesServiceIdRoutesRoute, putServicesServiceIdRoutesRouteHandler)
  .openapi(
    patchServicesServiceIdRoutesRouteIdRoute,
    patchServicesServiceIdRoutesRouteIdRouteHandler,
  )
  .openapi(
    deleteServicesServiceIdRoutesRouteIdRoute,
    deleteServicesServiceIdRoutesRouteIdRouteHandler,
  )
  .openapi(getServicesServiceIdCustomDomainsRoute, getServicesServiceIdCustomDomainsRouteHandler)
  .openapi(postServicesServiceIdCustomDomainsRoute, postServicesServiceIdCustomDomainsRouteHandler)
  .openapi(
    getServicesServiceIdCustomDomainsCustomDomainNameOrIDRoute,
    getServicesServiceIdCustomDomainsCustomDomainNameOrIDRouteHandler,
  )
  .openapi(
    deleteServicesServiceIdCustomDomainsCustomDomainNameOrIDRoute,
    deleteServicesServiceIdCustomDomainsCustomDomainNameOrIDRouteHandler,
  )
  .openapi(
    postServicesServiceIdCustomDomainsCustomDomainNameOrIDVerifyRoute,
    postServicesServiceIdCustomDomainsCustomDomainNameOrIDVerifyRouteHandler,
  )
  .openapi(postServicesServiceIdSuspendRoute, postServicesServiceIdSuspendRouteHandler)
  .openapi(postServicesServiceIdResumeRoute, postServicesServiceIdResumeRouteHandler)
  .openapi(postServicesServiceIdRestartRoute, postServicesServiceIdRestartRouteHandler)
  .openapi(postServicesServiceIdScaleRoute, postServicesServiceIdScaleRouteHandler)
  .openapi(putServicesServiceIdAutoscalingRoute, putServicesServiceIdAutoscalingRouteHandler)
  .openapi(deleteServicesServiceIdAutoscalingRoute, deleteServicesServiceIdAutoscalingRouteHandler)
  .openapi(postServicesServiceIdPreviewRoute, postServicesServiceIdPreviewRouteHandler)
  .openapi(getServicesServiceIdJobsRoute, getServicesServiceIdJobsRouteHandler)
  .openapi(postServicesServiceIdJobsRoute, postServicesServiceIdJobsRouteHandler)
  .openapi(getServicesServiceIdJobsJobIdRoute, getServicesServiceIdJobsJobIdRouteHandler)
  .openapi(
    postServicesServiceIdJobsJobIdCancelRoute,
    postServicesServiceIdJobsJobIdCancelRouteHandler,
  )
  .openapi(getServicesServiceIdInstancesRoute, getServicesServiceIdInstancesRouteHandler)
  .openapi(getServicesServiceIdOutboundIpsRoute, getServicesServiceIdOutboundIpsRouteHandler)
  .openapi(postCronJobsCronJobIdRunsRoute, postCronJobsCronJobIdRunsRouteHandler)
  .openapi(deleteCronJobsCronJobIdRunsRoute, deleteCronJobsCronJobIdRunsRouteHandler)
  .openapi(getEventsEventIdRoute, getEventsEventIdRouteHandler)
  .openapi(getLogsRoute, getLogsRouteHandler)
  .openapi(getLogsSubscribeRoute, getLogsSubscribeRouteHandler)
  .openapi(getLogsValuesRoute, getLogsValuesRouteHandler)
  .openapi(getLogsStreamsOwnerOwnerIdRoute, getLogsStreamsOwnerOwnerIdRouteHandler)
  .openapi(putLogsStreamsOwnerOwnerIdRoute, putLogsStreamsOwnerOwnerIdRouteHandler)
  .openapi(deleteLogsStreamsOwnerOwnerIdRoute, deleteLogsStreamsOwnerOwnerIdRouteHandler)
  .openapi(getLogsStreamsResourceRoute, getLogsStreamsResourceRouteHandler)
  .openapi(getLogsStreamsResourceResourceIdRoute, getLogsStreamsResourceResourceIdRouteHandler)
  .openapi(putLogsStreamsResourceResourceIdRoute, putLogsStreamsResourceResourceIdRouteHandler)
  .openapi(
    deleteLogsStreamsResourceResourceIdRoute,
    deleteLogsStreamsResourceResourceIdRouteHandler,
  )
  .openapi(getMetricsStreamOwnerIdRoute, getMetricsStreamOwnerIdRouteHandler)
  .openapi(putMetricsStreamOwnerIdRoute, putMetricsStreamOwnerIdRouteHandler)
  .openapi(deleteMetricsStreamOwnerIdRoute, deleteMetricsStreamOwnerIdRouteHandler)
  .openapi(getMetricsCpuRoute, getMetricsCpuRouteHandler)
  .openapi(getMetricsCpuLimitRoute, getMetricsCpuLimitRouteHandler)
  .openapi(getMetricsCpuTargetRoute, getMetricsCpuTargetRouteHandler)
  .openapi(getMetricsMemoryRoute, getMetricsMemoryRouteHandler)
  .openapi(getMetricsMemoryLimitRoute, getMetricsMemoryLimitRouteHandler)
  .openapi(getMetricsMemoryTargetRoute, getMetricsMemoryTargetRouteHandler)
  .openapi(getMetricsHttpRequestsRoute, getMetricsHttpRequestsRouteHandler)
  .openapi(getMetricsHttpLatencyRoute, getMetricsHttpLatencyRouteHandler)
  .openapi(getMetricsBandwidthRoute, getMetricsBandwidthRouteHandler)
  .openapi(getMetricsBandwidthSourcesRoute, getMetricsBandwidthSourcesRouteHandler)
  .openapi(getMetricsDiskUsageRoute, getMetricsDiskUsageRouteHandler)
  .openapi(getMetricsDiskCapacityRoute, getMetricsDiskCapacityRouteHandler)
  .openapi(getMetricsInstanceCountRoute, getMetricsInstanceCountRouteHandler)
  .openapi(getMetricsActiveConnectionsRoute, getMetricsActiveConnectionsRouteHandler)
  .openapi(getMetricsReplicationLagRoute, getMetricsReplicationLagRouteHandler)
  .openapi(getMetricsFiltersApplicationRoute, getMetricsFiltersApplicationRouteHandler)
  .openapi(getMetricsFiltersHttpRoute, getMetricsFiltersHttpRouteHandler)
  .openapi(getMetricsFiltersPathRoute, getMetricsFiltersPathRouteHandler)
  .openapi(getMetricsTaskRunsQueuedRoute, getMetricsTaskRunsQueuedRouteHandler)
  .openapi(getMetricsTaskRunsCompletedRoute, getMetricsTaskRunsCompletedRouteHandler)
  .openapi(getKeyValueRoute, getKeyValueRouteHandler)
  .openapi(postKeyValueRoute, postKeyValueRouteHandler)
  .openapi(getKeyValueRedisIdRoute, getKeyValueRedisIdRouteHandler)
  .openapi(patchKeyValueRedisIdRoute, patchKeyValueRedisIdRouteHandler)
  .openapi(deleteKeyValueRedisIdRoute, deleteKeyValueRedisIdRouteHandler)
  .openapi(getKeyValueRedisIdConnectionInfoRoute, getKeyValueRedisIdConnectionInfoRouteHandler)
  .openapi(postKeyValueRedisIdSuspendRoute, postKeyValueRedisIdSuspendRouteHandler)
  .openapi(postKeyValueRedisIdResumeRoute, postKeyValueRedisIdResumeRouteHandler)
  .openapi(getRedisRoute, getRedisRouteHandler)
  .openapi(postRedisRoute, postRedisRouteHandler)
  .openapi(getRedisRedisIdRoute, getRedisRedisIdRouteHandler)
  .openapi(patchRedisRedisIdRoute, patchRedisRedisIdRouteHandler)
  .openapi(deleteRedisRedisIdRoute, deleteRedisRedisIdRouteHandler)
  .openapi(getRedisRedisIdConnectionInfoRoute, getRedisRedisIdConnectionInfoRouteHandler)
  .openapi(postRedisRedisIdSuspendRoute, postRedisRedisIdSuspendRouteHandler)
  .openapi(postRedisRedisIdResumeRoute, postRedisRedisIdResumeRouteHandler)
  .openapi(getPostgresRoute, getPostgresRouteHandler)
  .openapi(postPostgresRoute, postPostgresRouteHandler)
  .openapi(getPostgresPostgresIdRoute, getPostgresPostgresIdRouteHandler)
  .openapi(patchPostgresPostgresIdRoute, patchPostgresPostgresIdRouteHandler)
  .openapi(deletePostgresPostgresIdRoute, deletePostgresPostgresIdRouteHandler)
  .openapi(
    getPostgresPostgresIdConnectionInfoRoute,
    getPostgresPostgresIdConnectionInfoRouteHandler,
  )
  .openapi(getPostgresPostgresIdRecoveryRoute, getPostgresPostgresIdRecoveryRouteHandler)
  .openapi(postPostgresPostgresIdRecoveryRoute, postPostgresPostgresIdRecoveryRouteHandler)
  .openapi(postPostgresPostgresIdSuspendRoute, postPostgresPostgresIdSuspendRouteHandler)
  .openapi(postPostgresPostgresIdResumeRoute, postPostgresPostgresIdResumeRouteHandler)
  .openapi(postPostgresPostgresIdRestartRoute, postPostgresPostgresIdRestartRouteHandler)
  .openapi(postPostgresPostgresIdFailoverRoute, postPostgresPostgresIdFailoverRouteHandler)
  .openapi(getPostgresPostgresIdExportRoute, getPostgresPostgresIdExportRouteHandler)
  .openapi(postPostgresPostgresIdExportRoute, postPostgresPostgresIdExportRouteHandler)
  .openapi(getPostgresPostgresIdCredentialsRoute, getPostgresPostgresIdCredentialsRouteHandler)
  .openapi(postPostgresPostgresIdCredentialsRoute, postPostgresPostgresIdCredentialsRouteHandler)
  .openapi(
    deletePostgresPostgresIdCredentialsUsernameRoute,
    deletePostgresPostgresIdCredentialsUsernameRouteHandler,
  )
  .openapi(
    getPostgresPostgresIdQueryProcessesRoute,
    getPostgresPostgresIdQueryProcessesRouteHandler,
  )
  .openapi(
    getPostgresPostgresIdQueryTopQueriesRoute,
    getPostgresPostgresIdQueryTopQueriesRouteHandler,
  )
  .openapi(getPostgresPostgresIdQuerySizesRoute, getPostgresPostgresIdQuerySizesRouteHandler)
  .openapi(
    getPostgresPostgresIdQueryTableScansRoute,
    getPostgresPostgresIdQueryTableScansRouteHandler,
  )
  .openapi(getProjectsRoute, getProjectsRouteHandler)
  .openapi(postProjectsRoute, postProjectsRouteHandler)
  .openapi(getProjectsProjectIdRoute, getProjectsProjectIdRouteHandler)
  .openapi(patchProjectsProjectIdRoute, patchProjectsProjectIdRouteHandler)
  .openapi(deleteProjectsProjectIdRoute, deleteProjectsProjectIdRouteHandler)
  .openapi(postEnvironmentsRoute, postEnvironmentsRouteHandler)
  .openapi(getEnvironmentsRoute, getEnvironmentsRouteHandler)
  .openapi(getEnvironmentsEnvironmentIdRoute, getEnvironmentsEnvironmentIdRouteHandler)
  .openapi(patchEnvironmentsEnvironmentIdRoute, patchEnvironmentsEnvironmentIdRouteHandler)
  .openapi(deleteEnvironmentsEnvironmentIdRoute, deleteEnvironmentsEnvironmentIdRouteHandler)
  .openapi(
    postEnvironmentsEnvironmentIdResourcesRoute,
    postEnvironmentsEnvironmentIdResourcesRouteHandler,
  )
  .openapi(
    deleteEnvironmentsEnvironmentIdResourcesRoute,
    deleteEnvironmentsEnvironmentIdResourcesRouteHandler,
  )
  .openapi(getEnvGroupsRoute, getEnvGroupsRouteHandler)
  .openapi(postEnvGroupsRoute, postEnvGroupsRouteHandler)
  .openapi(getEnvGroupsEnvGroupIdRoute, getEnvGroupsEnvGroupIdRouteHandler)
  .openapi(patchEnvGroupsEnvGroupIdRoute, patchEnvGroupsEnvGroupIdRouteHandler)
  .openapi(deleteEnvGroupsEnvGroupIdRoute, deleteEnvGroupsEnvGroupIdRouteHandler)
  .openapi(
    postEnvGroupsEnvGroupIdServicesServiceIdRoute,
    postEnvGroupsEnvGroupIdServicesServiceIdRouteHandler,
  )
  .openapi(
    deleteEnvGroupsEnvGroupIdServicesServiceIdRoute,
    deleteEnvGroupsEnvGroupIdServicesServiceIdRouteHandler,
  )
  .openapi(
    getEnvGroupsEnvGroupIdEnvVarsEnvVarKeyRoute,
    getEnvGroupsEnvGroupIdEnvVarsEnvVarKeyRouteHandler,
  )
  .openapi(
    putEnvGroupsEnvGroupIdEnvVarsEnvVarKeyRoute,
    putEnvGroupsEnvGroupIdEnvVarsEnvVarKeyRouteHandler,
  )
  .openapi(
    deleteEnvGroupsEnvGroupIdEnvVarsEnvVarKeyRoute,
    deleteEnvGroupsEnvGroupIdEnvVarsEnvVarKeyRouteHandler,
  )
  .openapi(
    getEnvGroupsEnvGroupIdSecretFilesEnvVarKeyRoute,
    getEnvGroupsEnvGroupIdSecretFilesEnvVarKeyRouteHandler,
  )
  .openapi(
    putEnvGroupsEnvGroupIdSecretFilesEnvVarKeyRoute,
    putEnvGroupsEnvGroupIdSecretFilesEnvVarKeyRouteHandler,
  )
  .openapi(
    deleteEnvGroupsEnvGroupIdSecretFilesEnvVarKeyRoute,
    deleteEnvGroupsEnvGroupIdSecretFilesEnvVarKeyRouteHandler,
  )
  .openapi(getMaintenanceRoute, getMaintenanceRouteHandler)
  .openapi(getMaintenanceMaintenanceRunIDRoute, getMaintenanceMaintenanceRunIDRouteHandler)
  .openapi(patchMaintenanceMaintenanceRunIDRoute, patchMaintenanceMaintenanceRunIDRouteHandler)
  .openapi(
    postMaintenanceMaintenanceRunIDTriggerRoute,
    postMaintenanceMaintenanceRunIDTriggerRouteHandler,
  )
  .openapi(postBuildSourcesRoute, postBuildSourcesRouteHandler)
  .openapi(getBuildSourcesRoute, getBuildSourcesRouteHandler)
  .openapi(getBuildSourcesBuildSourceIdRoute, getBuildSourcesBuildSourceIdRouteHandler)
  .openapi(patchBuildSourcesBuildSourceIdRoute, patchBuildSourcesBuildSourceIdRouteHandler)
  .openapi(deleteBuildSourcesBuildSourceIdRoute, deleteBuildSourcesBuildSourceIdRouteHandler)
  .openapi(getBuildSourcesBuildSourceIdBuildsRoute, getBuildSourcesBuildSourceIdBuildsRouteHandler)
  .openapi(
    postBuildSourcesBuildSourceIdBuildsRoute,
    postBuildSourcesBuildSourceIdBuildsRouteHandler,
  )
  .openapi(
    getBuildSourcesBuildSourceIdBuildsBuildIdRoute,
    getBuildSourcesBuildSourceIdBuildsBuildIdRouteHandler,
  )
  .openapi(
    getBuildSourcesBuildSourceIdEnvVarsRoute,
    getBuildSourcesBuildSourceIdEnvVarsRouteHandler,
  )
  .openapi(
    putBuildSourcesBuildSourceIdEnvVarsRoute,
    putBuildSourcesBuildSourceIdEnvVarsRouteHandler,
  )
  .openapi(
    getBuildSourcesBuildSourceIdEnvVarsEnvVarKeyRoute,
    getBuildSourcesBuildSourceIdEnvVarsEnvVarKeyRouteHandler,
  )
  .openapi(
    putBuildSourcesBuildSourceIdEnvVarsEnvVarKeyRoute,
    putBuildSourcesBuildSourceIdEnvVarsEnvVarKeyRouteHandler,
  )
  .openapi(
    deleteBuildSourcesBuildSourceIdEnvVarsEnvVarKeyRoute,
    deleteBuildSourcesBuildSourceIdEnvVarsEnvVarKeyRouteHandler,
  )
  .openapi(
    getBuildSourcesBuildSourceIdSecretFilesRoute,
    getBuildSourcesBuildSourceIdSecretFilesRouteHandler,
  )
  .openapi(
    putBuildSourcesBuildSourceIdSecretFilesRoute,
    putBuildSourcesBuildSourceIdSecretFilesRouteHandler,
  )
  .openapi(
    getBuildSourcesBuildSourceIdSecretFilesEnvVarKeyRoute,
    getBuildSourcesBuildSourceIdSecretFilesEnvVarKeyRouteHandler,
  )
  .openapi(
    putBuildSourcesBuildSourceIdSecretFilesEnvVarKeyRoute,
    putBuildSourcesBuildSourceIdSecretFilesEnvVarKeyRouteHandler,
  )
  .openapi(
    deleteBuildSourcesBuildSourceIdSecretFilesEnvVarKeyRoute,
    deleteBuildSourcesBuildSourceIdSecretFilesEnvVarKeyRouteHandler,
  )
  .openapi(
    postBuildSourcesBuildSourceIdEnvGroupsEnvGroupIdRoute,
    postBuildSourcesBuildSourceIdEnvGroupsEnvGroupIdRouteHandler,
  )
  .openapi(
    deleteBuildSourcesBuildSourceIdEnvGroupsEnvGroupIdRoute,
    deleteBuildSourcesBuildSourceIdEnvGroupsEnvGroupIdRouteHandler,
  )
  .openapi(postWebhooksRoute, postWebhooksRouteHandler)
  .openapi(getWebhooksRoute, getWebhooksRouteHandler)
  .openapi(getWebhooksWebhookIdRoute, getWebhooksWebhookIdRouteHandler)
  .openapi(patchWebhooksWebhookIdRoute, patchWebhooksWebhookIdRouteHandler)
  .openapi(deleteWebhooksWebhookIdRoute, deleteWebhooksWebhookIdRouteHandler)
  .openapi(getWebhooksWebhookIdEventsRoute, getWebhooksWebhookIdEventsRouteHandler)
  .openapi(getWorkflowsRoute, getWorkflowsRouteHandler)
  .openapi(postWorkflowsRoute, postWorkflowsRouteHandler)
  .openapi(getWorkflowsWorkflowIdRoute, getWorkflowsWorkflowIdRouteHandler)
  .openapi(patchWorkflowsWorkflowIdRoute, patchWorkflowsWorkflowIdRouteHandler)
  .openapi(deleteWorkflowsWorkflowIdRoute, deleteWorkflowsWorkflowIdRouteHandler)
  .openapi(getWorkflowversionsRoute, getWorkflowversionsRouteHandler)
  .openapi(postWorkflowversionsRoute, postWorkflowversionsRouteHandler)
  .openapi(
    getWorkflowversionsWorkflowVersionIdRoute,
    getWorkflowversionsWorkflowVersionIdRouteHandler,
  )
  .openapi(getTasksRoute, getTasksRouteHandler)
  .openapi(getTasksTaskIdRoute, getTasksTaskIdRouteHandler)
  .openapi(getTaskRunsRoute, getTaskRunsRouteHandler)
  .openapi(postTaskRunsRoute, postTaskRunsRouteHandler)
  .openapi(getTaskRunsEventsRoute, getTaskRunsEventsRouteHandler)
  .openapi(getTaskRunsTaskRunIdRoute, getTaskRunsTaskRunIdRouteHandler)
  .openapi(deleteTaskRunsTaskRunIdRoute, deleteTaskRunsTaskRunIdRouteHandler)
  .openapi(getFlowsRoute, getFlowsRouteHandler)
  .openapi(getFlowsFlowIdRoute, getFlowsFlowIdRouteHandler)
  .openapi(getFlowRunsRoute, getFlowRunsRouteHandler)
  .openapi(postFlowRunsRoute, postFlowRunsRouteHandler)
  .openapi(getFlowRunsFlowRunIdRoute, getFlowRunsFlowRunIdRouteHandler)
  .openapi(deleteFlowRunsFlowRunIdRoute, deleteFlowRunsFlowRunIdRouteHandler)
  .openapi(getFlowRunsFlowRunIdStepsRoute, getFlowRunsFlowRunIdStepsRouteHandler)
  .openapi(getFlowRunsFlowRunIdStepsStepSeqRoute, getFlowRunsFlowRunIdStepsStepSeqRouteHandler)
  .openapi(
    getFlowRunsFlowRunIdStepsStepSeqAttemptsAttemptRoute,
    getFlowRunsFlowRunIdStepsStepSeqAttemptsAttemptRouteHandler,
  )
  .openapi(postSandboxesRoute, postSandboxesRouteHandler)
  .openapi(getSandboxesRoute, getSandboxesRouteHandler)
  .openapi(postSandboxGroupsRoute, postSandboxGroupsRouteHandler)
  .openapi(getSandboxGroupsRoute, getSandboxGroupsRouteHandler)
  .openapi(getSandboxesSandboxIdRoute, getSandboxesSandboxIdRouteHandler)
  .openapi(getSandboxesSandboxIdExecsRoute, getSandboxesSandboxIdExecsRouteHandler)
  .openapi(getSandboxesSandboxIdExecsExecIdRoute, getSandboxesSandboxIdExecsExecIdRouteHandler)
  .openapi(postSandboxesSandboxIdTerminateRoute, postSandboxesSandboxIdTerminateRouteHandler)
  .openapi(postSandboxesSandboxIdSuspendRoute, postSandboxesSandboxIdSuspendRouteHandler)
  .openapi(postSandboxesSandboxIdSnapshotsRoute, postSandboxesSandboxIdSnapshotsRouteHandler)
  .openapi(getSandboxGroupsSandboxGroupIdRoute, getSandboxGroupsSandboxGroupIdRouteHandler)
  .openapi(patchSandboxGroupsSandboxGroupIdRoute, patchSandboxGroupsSandboxGroupIdRouteHandler)
  .openapi(
    getSandboxGroupsSandboxGroupIdCredentialsRoute,
    getSandboxGroupsSandboxGroupIdCredentialsRouteHandler,
  )
  .openapi(
    postSandboxGroupsSandboxGroupIdCredentialsRoute,
    postSandboxGroupsSandboxGroupIdCredentialsRouteHandler,
  )
  .openapi(
    getSandboxGroupsSandboxGroupIdCredentialsCredentialIdRoute,
    getSandboxGroupsSandboxGroupIdCredentialsCredentialIdRouteHandler,
  )
  .openapi(
    patchSandboxGroupsSandboxGroupIdCredentialsCredentialIdRoute,
    patchSandboxGroupsSandboxGroupIdCredentialsCredentialIdRouteHandler,
  )
  .openapi(
    deleteSandboxGroupsSandboxGroupIdCredentialsCredentialIdRoute,
    deleteSandboxGroupsSandboxGroupIdCredentialsCredentialIdRouteHandler,
  )
  .openapi(
    getSandboxGroupsSandboxGroupIdCredentialsCredentialIdVersionsRoute,
    getSandboxGroupsSandboxGroupIdCredentialsCredentialIdVersionsRouteHandler,
  )
  .openapi(
    postSandboxGroupsSandboxGroupIdCredentialsCredentialIdRestoreRoute,
    postSandboxGroupsSandboxGroupIdCredentialsCredentialIdRestoreRouteHandler,
  )
  .openapi(
    getSandboxGroupsSandboxGroupIdBuildsRoute,
    getSandboxGroupsSandboxGroupIdBuildsRouteHandler,
  )
  .openapi(
    postSandboxGroupsSandboxGroupIdBuildsRoute,
    postSandboxGroupsSandboxGroupIdBuildsRouteHandler,
  )
  .openapi(
    getSandboxGroupsSandboxGroupIdBuildsBuildIdRoute,
    getSandboxGroupsSandboxGroupIdBuildsBuildIdRouteHandler,
  )
  .openapi(
    deleteSandboxGroupsSandboxGroupIdBuildsBuildIdRoute,
    deleteSandboxGroupsSandboxGroupIdBuildsBuildIdRouteHandler,
  )
  .openapi(
    getSandboxGroupsSandboxGroupIdSnapshotsRoute,
    getSandboxGroupsSandboxGroupIdSnapshotsRouteHandler,
  )
  .openapi(
    getSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdRoute,
    getSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdRouteHandler,
  )
  .openapi(
    deleteSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdRoute,
    deleteSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdRouteHandler,
  )
  .openapi(
    postSandboxesSandboxIdRunsOperationTokenRoute,
    postSandboxesSandboxIdRunsOperationTokenRouteHandler,
  )
  .openapi(
    postSandboxesSandboxIdFilesOperationTokenRoute,
    postSandboxesSandboxIdFilesOperationTokenRouteHandler,
  )

export default app
