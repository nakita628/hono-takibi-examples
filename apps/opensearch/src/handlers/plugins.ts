import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePluginsAsynchronousSearchIdRoute,
  deletePluginsFlowFrameworkWorkflowWorkflowIdRoute,
  deletePluginsGeospatialIp2geoDatasourceNameRoute,
  deletePluginsIsmPoliciesPolicyIdRoute,
  deletePluginsKnnModelsModelIdRoute,
  deletePluginsMlAgentsAgentIdRoute,
  deletePluginsMlConnectorsConnectorIdRoute,
  deletePluginsMlControllersModelIdRoute,
  deletePluginsMlMemoryContainersMemoryContainerIdMemoriesTypeIdRoute,
  deletePluginsMlMemoryContainersMemoryContainerIdRoute,
  deletePluginsMlMemoryMemoryIdRoute,
  deletePluginsMlModelGroupsModelGroupIdRoute,
  deletePluginsMlModelsModelIdRoute,
  deletePluginsMlTasksTaskIdRoute,
  deletePluginsNotificationsConfigsConfigIdRoute,
  deletePluginsNotificationsConfigsRoute,
  deletePluginsObservabilityObjectObjectIdRoute,
  deletePluginsObservabilityObjectRoute,
  deletePluginsQueryDatasourcesDatasourceNameRoute,
  deletePluginsReplicationAutofollowRoute,
  deletePluginsRollupJobsIdRoute,
  deletePluginsSearchRelevanceExperimentsExperimentIdRoute,
  deletePluginsSearchRelevanceExperimentsScheduleExperimentIdRoute,
  deletePluginsSearchRelevanceJudgmentsJudgmentIdRoute,
  deletePluginsSearchRelevanceQuerySetsQuerySetIdRoute,
  deletePluginsSearchRelevanceSearchConfigurationsSearchConfigurationIdRoute,
  deletePluginsSecurityApiActiongroupsActionGroupRoute,
  deletePluginsSecurityApiCacheRoute,
  deletePluginsSecurityApiInternalusersUsernameRoute,
  deletePluginsSecurityApiNodesdnClusterNameRoute,
  deletePluginsSecurityApiRolesmappingRoleRoute,
  deletePluginsSecurityApiRolesRoleRoute,
  deletePluginsSecurityApiTenantsTenantRoute,
  deletePluginsSecurityApiUserUsernameRoute,
  deletePluginsSmPoliciesPolicyNameRoute,
  deletePluginsTransformIdRoute,
  getPluginsAsynchronousSearchIdRoute,
  getPluginsAsynchronousSearchStatsRoute,
  getPluginsFlowFrameworkWorkflowSearchRoute,
  getPluginsFlowFrameworkWorkflowStateSearchRoute,
  getPluginsFlowFrameworkWorkflowStepsRoute,
  getPluginsFlowFrameworkWorkflowWorkflowIdRoute,
  getPluginsFlowFrameworkWorkflowWorkflowIdStatusRoute,
  getPluginsGeospatialIp2geoDatasourceNameRoute,
  getPluginsGeospatialIp2geoDatasourceRoute,
  getPluginsGeospatialUploadStatsRoute,
  getPluginsIsmExplainIndexRoute,
  getPluginsIsmExplainRoute,
  getPluginsIsmPoliciesPolicyIdRoute,
  getPluginsIsmPoliciesRoute,
  getPluginsKnnModelsModelIdRoute,
  getPluginsKnnModelsSearchRoute,
  getPluginsKnnNodeIdStatsRoute,
  getPluginsKnnNodeIdStatsStatRoute,
  getPluginsKnnStatsRoute,
  getPluginsKnnStatsStatRoute,
  getPluginsKnnWarmupIndexRoute,
  getPluginsLtrNodeIdStatsRoute,
  getPluginsLtrNodeIdStatsStatRoute,
  getPluginsLtrStatsRoute,
  getPluginsLtrStatsStatRoute,
  getPluginsMlAgentsAgentIdRoute,
  getPluginsMlAgentsSearchRoute,
  getPluginsMlConnectorsConnectorIdRoute,
  getPluginsMlConnectorsSearchRoute,
  getPluginsMlControllersModelIdRoute,
  getPluginsMlMemoryContainersMemoryContainerIdMemoriesTypeIdRoute,
  getPluginsMlMemoryContainersMemoryContainerIdMemoriesTypeSearchRoute,
  getPluginsMlMemoryContainersMemoryContainerIdRoute,
  getPluginsMlMemoryContainersSearchRoute,
  getPluginsMlMemoryMemoryIdMessagesRoute,
  getPluginsMlMemoryMemoryIdRoute,
  getPluginsMlMemoryMemoryIdSearchRoute,
  getPluginsMlMemoryMessageMessageIdRoute,
  getPluginsMlMemoryMessageMessageIdTracesRoute,
  getPluginsMlMemoryRoute,
  getPluginsMlMemorySearchRoute,
  getPluginsMlModelGroupsModelGroupIdRoute,
  getPluginsMlModelGroupsSearchRoute,
  getPluginsMlModelsModelIdRoute,
  getPluginsMlModelsSearchRoute,
  getPluginsMlNodeIdStatsRoute,
  getPluginsMlNodeIdStatsStatRoute,
  getPluginsMlProfileModelsModelIdRoute,
  getPluginsMlProfileModelsRoute,
  getPluginsMlProfileRoute,
  getPluginsMlProfileTasksRoute,
  getPluginsMlProfileTasksTaskIdRoute,
  getPluginsMlStatsRoute,
  getPluginsMlStatsStatRoute,
  getPluginsMlTasksSearchRoute,
  getPluginsMlTasksTaskIdRoute,
  getPluginsMlToolsRoute,
  getPluginsMlToolsToolNameRoute,
  getPluginsNeuralNodeIdStatsRoute,
  getPluginsNeuralNodeIdStatsStatRoute,
  getPluginsNeuralStatsRoute,
  getPluginsNeuralStatsStatRoute,
  getPluginsNotificationsChannelsRoute,
  getPluginsNotificationsConfigsConfigIdRoute,
  getPluginsNotificationsConfigsRoute,
  getPluginsNotificationsFeaturesRoute,
  getPluginsNotificationsFeatureTestConfigIdRoute,
  getPluginsObservabilityLocalStatsRoute,
  getPluginsObservabilityObjectObjectIdRoute,
  getPluginsObservabilityObjectRoute,
  getPluginsPplStatsRoute,
  getPluginsQueryDatasourcesDatasourceNameRoute,
  getPluginsQueryDatasourcesRoute,
  getPluginsReplicationAutofollowStatsRoute,
  getPluginsReplicationFollowerStatsRoute,
  getPluginsReplicationIndexStatusRoute,
  getPluginsReplicationLeaderStatsRoute,
  getPluginsRollupJobsIdExplainRoute,
  getPluginsRollupJobsIdRoute,
  getPluginsSearchRelevanceExperimentsExperimentIdRoute,
  getPluginsSearchRelevanceExperimentsRoute,
  getPluginsSearchRelevanceExperimentsScheduleExperimentIdRoute,
  getPluginsSearchRelevanceExperimentsScheduleRoute,
  getPluginsSearchRelevanceJudgmentsJudgmentIdRoute,
  getPluginsSearchRelevanceJudgmentsRoute,
  getPluginsSearchRelevanceNodeIdStatsRoute,
  getPluginsSearchRelevanceNodeIdStatsStatRoute,
  getPluginsSearchRelevanceQuerySetsQuerySetIdRoute,
  getPluginsSearchRelevanceQuerySetsRoute,
  getPluginsSearchRelevanceSearchConfigurationsRoute,
  getPluginsSearchRelevanceSearchConfigurationsSearchConfigurationIdRoute,
  getPluginsSearchRelevanceStatsRoute,
  getPluginsSearchRelevanceStatsStatRoute,
  getPluginsSecurityAnalyticsAlertsRoute,
  getPluginsSecurityAnalyticsFindingsCorrelateRoute,
  getPluginsSecurityAnalyticsFindingsSearchRoute,
  getPluginsSecurityApiAccountRoute,
  getPluginsSecurityApiActiongroupsActionGroupRoute,
  getPluginsSecurityApiActiongroupsRoute,
  getPluginsSecurityApiAllowlistRoute,
  getPluginsSecurityApiAuditRoute,
  getPluginsSecurityApiCacheRoute,
  getPluginsSecurityApiCertificatesNodeIdRoute,
  getPluginsSecurityApiCertificatesRoute,
  getPluginsSecurityApiInternalusersRoute,
  getPluginsSecurityApiInternalusersUsernameRoute,
  getPluginsSecurityApiNodesdnClusterNameRoute,
  getPluginsSecurityApiNodesdnRoute,
  getPluginsSecurityApiPermissionsinfoRoute,
  getPluginsSecurityApiRolesmappingRoleRoute,
  getPluginsSecurityApiRolesmappingRoute,
  getPluginsSecurityApiRolesRoleRoute,
  getPluginsSecurityApiRolesRoute,
  getPluginsSecurityApiSecurityconfigRoute,
  getPluginsSecurityApiSslCertsRoute,
  getPluginsSecurityApiTenancyConfigRoute,
  getPluginsSecurityApiTenantsRoute,
  getPluginsSecurityApiTenantsTenantRoute,
  getPluginsSecurityApiUpgradeCheckRoute,
  getPluginsSecurityApiUserRoute,
  getPluginsSecurityApiUserUsernameRoute,
  getPluginsSecurityApiValidateRoute,
  getPluginsSecurityAuthinfoRoute,
  getPluginsSecurityDashboardsinfoRoute,
  getPluginsSecurityHealthRoute,
  getPluginsSecurityTenantinfoRoute,
  getPluginsSecurityWhoamiprotectedRoute,
  getPluginsSecurityWhoamiRoute,
  getPluginsSmPoliciesPolicyNameExplainRoute,
  getPluginsSmPoliciesPolicyNameRoute,
  getPluginsSmPoliciesRoute,
  getPluginsSqlStatsRoute,
  getPluginsTransformIdExplainRoute,
  getPluginsTransformIdRoute,
  getPluginsTransformRoute,
  headPluginsIsmPoliciesPolicyIdRoute,
  patchPluginsSecurityApiActiongroupsActionGroupRoute,
  patchPluginsSecurityApiActiongroupsRoute,
  patchPluginsSecurityApiAllowlistRoute,
  patchPluginsSecurityApiAuditRoute,
  patchPluginsSecurityApiInternalusersRoute,
  patchPluginsSecurityApiInternalusersUsernameRoute,
  patchPluginsSecurityApiNodesdnClusterNameRoute,
  patchPluginsSecurityApiNodesdnRoute,
  patchPluginsSecurityApiRolesmappingRoleRoute,
  patchPluginsSecurityApiRolesmappingRoute,
  patchPluginsSecurityApiRolesRoleRoute,
  patchPluginsSecurityApiRolesRoute,
  patchPluginsSecurityApiSecurityconfigRoute,
  patchPluginsSecurityApiTenantsRoute,
  patchPluginsSecurityApiTenantsTenantRoute,
  postPluginsAsynchronousSearchRoute,
  postPluginsFlowFrameworkWorkflowRoute,
  postPluginsFlowFrameworkWorkflowSearchRoute,
  postPluginsFlowFrameworkWorkflowStateSearchRoute,
  postPluginsFlowFrameworkWorkflowWorkflowIdDeprovisionRoute,
  postPluginsFlowFrameworkWorkflowWorkflowIdProvisionRoute,
  postPluginsGeospatialGeojsonUploadRoute,
  postPluginsIsmAddIndexRoute,
  postPluginsIsmAddRoute,
  postPluginsIsmChangePolicyIndexRoute,
  postPluginsIsmChangePolicyRoute,
  postPluginsIsmExplainIndexRoute,
  postPluginsIsmExplainRoute,
  postPluginsIsmRemoveIndexRoute,
  postPluginsIsmRemoveRoute,
  postPluginsIsmRetryIndexRoute,
  postPluginsIsmRetryRoute,
  postPluginsKnnModelsModelIdTrainRoute,
  postPluginsKnnModelsSearchRoute,
  postPluginsKnnModelsTrainRoute,
  postPluginsMlAgentsAgentIdExecuteRoute,
  postPluginsMlAgentsAgentIdExecuteStreamRoute,
  postPluginsMlAgentsRegisterRoute,
  postPluginsMlAgentsSearchRoute,
  postPluginsMlConnectorsCreateRoute,
  postPluginsMlConnectorsSearchRoute,
  postPluginsMlControllersModelIdRoute,
  postPluginsMlExecuteAlgorithmNameRoute,
  postPluginsMlMemoryContainersCreateRoute,
  postPluginsMlMemoryContainersMemoryContainerIdMemoriesRoute,
  postPluginsMlMemoryContainersMemoryContainerIdMemoriesSessionsRoute,
  postPluginsMlMemoryContainersMemoryContainerIdMemoriesTypeDeleteByQueryRoute,
  postPluginsMlMemoryContainersSearchRoute,
  postPluginsMlMemoryMemoryIdMessagesRoute,
  postPluginsMlMemoryMemoryIdSearchRoute,
  postPluginsMlMemoryRoute,
  postPluginsMlMemorySearchRoute,
  postPluginsMlModelGroupsRegisterRoute,
  postPluginsMlModelGroupsSearchRoute,
  postPluginsMlModelsMetaRoute,
  postPluginsMlModelsModelIdChunkChunkNumberRoute,
  postPluginsMlModelsModelIdDeployRoute,
  postPluginsMlModelsModelIdLoadRoute,
  postPluginsMlModelsModelIdPredictRoute,
  postPluginsMlModelsModelIdPredictStreamRoute,
  postPluginsMlModelsModelIdUndeployRoute,
  postPluginsMlModelsModelIdUnloadRoute,
  postPluginsMlModelsModelIdUploadChunkChunkNumberRoute,
  postPluginsMlModelsRegisterMetaRoute,
  postPluginsMlModelsRegisterRoute,
  postPluginsMlModelsSearchRoute,
  postPluginsMlModelsUndeployRoute,
  postPluginsMlModelsUnloadRoute,
  postPluginsMlModelsUploadRoute,
  postPluginsMlPredictAlgorithmNameModelIdRoute,
  postPluginsMlTasksSearchRoute,
  postPluginsMlToolsExecuteToolNameRoute,
  postPluginsMlTrainAlgorithmNameRoute,
  postPluginsMlTrainPredictAlgorithmNameRoute,
  postPluginsNotificationsConfigsRoute,
  postPluginsNotificationsFeatureTestConfigIdRoute,
  postPluginsObservabilityObjectRoute,
  postPluginsPplExplainRoute,
  postPluginsPplRoute,
  postPluginsPplStatsRoute,
  postPluginsQueryDatasourcesRoute,
  postPluginsRefreshSearchAnalyzersIndexRoute,
  postPluginsReplicationAutofollowRoute,
  postPluginsReplicationIndexPauseRoute,
  postPluginsReplicationIndexResumeRoute,
  postPluginsReplicationIndexStopRoute,
  postPluginsRollupJobsIdStartRoute,
  postPluginsRollupJobsIdStopRoute,
  postPluginsSearchRelevanceExperimentsScheduleRoute,
  postPluginsSearchRelevanceQuerySetsRoute,
  postPluginsSecurityApiAuthtokenRoute,
  postPluginsSecurityApiCacheRoute,
  postPluginsSecurityApiGenerateonbehalfoftokenRoute,
  postPluginsSecurityApiInternalusersUsernameAuthtokenRoute,
  postPluginsSecurityApiMigrateRoute,
  postPluginsSecurityApiUpgradePerformRoute,
  postPluginsSecurityApiUserUsernameAuthtokenRoute,
  postPluginsSecurityAuthinfoRoute,
  postPluginsSecurityDashboardsinfoRoute,
  postPluginsSecurityHealthRoute,
  postPluginsSecurityTenantinfoRoute,
  postPluginsSecurityWhoamiRoute,
  postPluginsSmPoliciesPolicyNameRoute,
  postPluginsSmPoliciesPolicyNameStartRoute,
  postPluginsSmPoliciesPolicyNameStopRoute,
  postPluginsSqlCloseRoute,
  postPluginsSqlExplainRoute,
  postPluginsSqlRoute,
  postPluginsSqlStatsRoute,
  postPluginsTransformIdStartRoute,
  postPluginsTransformIdStopRoute,
  postPluginsTransformPreviewRoute,
  postPluginsUbiInitializeRoute,
  putPluginsFlowFrameworkWorkflowWorkflowIdRoute,
  putPluginsGeospatialGeojsonUploadRoute,
  putPluginsGeospatialIp2geoDatasourceNameRoute,
  putPluginsGeospatialIp2geoDatasourceNameSettingsRoute,
  putPluginsIsmPoliciesPolicyIdRoute,
  putPluginsIsmPoliciesRoute,
  putPluginsMlConnectorsConnectorIdRoute,
  putPluginsMlControllersModelIdRoute,
  putPluginsMlMemoryContainersMemoryContainerIdMemoriesTypeIdRoute,
  putPluginsMlMemoryContainersMemoryContainerIdRoute,
  putPluginsMlMemoryMemoryIdRoute,
  putPluginsMlMemoryMessageMessageIdRoute,
  putPluginsMlModelGroupsModelGroupIdRoute,
  putPluginsMlModelsModelIdRoute,
  putPluginsNotificationsConfigsConfigIdRoute,
  putPluginsObservabilityObjectObjectIdRoute,
  putPluginsQueryDatasourcesRoute,
  putPluginsQuerySettingsRoute,
  putPluginsReplicationIndexStartRoute,
  putPluginsReplicationIndexUpdateRoute,
  putPluginsRollupJobsIdRoute,
  putPluginsSearchRelevanceExperimentsRoute,
  putPluginsSearchRelevanceJudgmentsRoute,
  putPluginsSearchRelevanceQuerySetsRoute,
  putPluginsSearchRelevanceSearchConfigurationsRoute,
  putPluginsSecurityApiAccountRoute,
  putPluginsSecurityApiActiongroupsActionGroupRoute,
  putPluginsSecurityApiAllowlistRoute,
  putPluginsSecurityApiAuditConfigRoute,
  putPluginsSecurityApiCacheRoute,
  putPluginsSecurityApiInternalusersUsernameRoute,
  putPluginsSecurityApiNodesdnClusterNameRoute,
  putPluginsSecurityApiRolesmappingRoleRoute,
  putPluginsSecurityApiRolesRoleRoute,
  putPluginsSecurityApiSecurityconfigConfigRoute,
  putPluginsSecurityApiSslHttpReloadcertsRoute,
  putPluginsSecurityApiSslTransportReloadcertsRoute,
  putPluginsSecurityApiTenancyConfigRoute,
  putPluginsSecurityApiTenantsTenantRoute,
  putPluginsSecurityApiUserUsernameRoute,
  putPluginsSmPoliciesPolicyNameRoute,
  putPluginsTransformIdRoute,
} from '../routes'

export const postPluginsAsynchronousSearchRouteHandler: RouteHandler<
  typeof postPluginsAsynchronousSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsAsynchronousSearchIdRouteHandler: RouteHandler<
  typeof deletePluginsAsynchronousSearchIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsAsynchronousSearchIdRouteHandler: RouteHandler<
  typeof getPluginsAsynchronousSearchIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsAsynchronousSearchStatsRouteHandler: RouteHandler<
  typeof getPluginsAsynchronousSearchStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsFlowFrameworkWorkflowRouteHandler: RouteHandler<
  typeof postPluginsFlowFrameworkWorkflowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsFlowFrameworkWorkflowSearchRouteHandler: RouteHandler<
  typeof getPluginsFlowFrameworkWorkflowSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsFlowFrameworkWorkflowSearchRouteHandler: RouteHandler<
  typeof postPluginsFlowFrameworkWorkflowSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsFlowFrameworkWorkflowStepsRouteHandler: RouteHandler<
  typeof getPluginsFlowFrameworkWorkflowStepsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsFlowFrameworkWorkflowWorkflowIdRouteHandler: RouteHandler<
  typeof deletePluginsFlowFrameworkWorkflowWorkflowIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsFlowFrameworkWorkflowWorkflowIdRouteHandler: RouteHandler<
  typeof getPluginsFlowFrameworkWorkflowWorkflowIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsFlowFrameworkWorkflowWorkflowIdRouteHandler: RouteHandler<
  typeof putPluginsFlowFrameworkWorkflowWorkflowIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsFlowFrameworkWorkflowWorkflowIdDeprovisionRouteHandler: RouteHandler<
  typeof postPluginsFlowFrameworkWorkflowWorkflowIdDeprovisionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsFlowFrameworkWorkflowWorkflowIdProvisionRouteHandler: RouteHandler<
  typeof postPluginsFlowFrameworkWorkflowWorkflowIdProvisionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsFlowFrameworkWorkflowWorkflowIdStatusRouteHandler: RouteHandler<
  typeof getPluginsFlowFrameworkWorkflowWorkflowIdStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsFlowFrameworkWorkflowStateSearchRouteHandler: RouteHandler<
  typeof getPluginsFlowFrameworkWorkflowStateSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsFlowFrameworkWorkflowStateSearchRouteHandler: RouteHandler<
  typeof postPluginsFlowFrameworkWorkflowStateSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsIsmAddRouteHandler: RouteHandler<typeof postPluginsIsmAddRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPluginsIsmAddIndexRouteHandler: RouteHandler<
  typeof postPluginsIsmAddIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsIsmChangePolicyRouteHandler: RouteHandler<
  typeof postPluginsIsmChangePolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsIsmChangePolicyIndexRouteHandler: RouteHandler<
  typeof postPluginsIsmChangePolicyIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsIsmExplainRouteHandler: RouteHandler<
  typeof getPluginsIsmExplainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsIsmExplainRouteHandler: RouteHandler<
  typeof postPluginsIsmExplainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsIsmExplainIndexRouteHandler: RouteHandler<
  typeof getPluginsIsmExplainIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsIsmExplainIndexRouteHandler: RouteHandler<
  typeof postPluginsIsmExplainIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsIsmPoliciesRouteHandler: RouteHandler<
  typeof getPluginsIsmPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsIsmPoliciesRouteHandler: RouteHandler<
  typeof putPluginsIsmPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsIsmPoliciesPolicyIdRouteHandler: RouteHandler<
  typeof deletePluginsIsmPoliciesPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsIsmPoliciesPolicyIdRouteHandler: RouteHandler<
  typeof getPluginsIsmPoliciesPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const headPluginsIsmPoliciesPolicyIdRouteHandler: RouteHandler<
  typeof headPluginsIsmPoliciesPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsIsmPoliciesPolicyIdRouteHandler: RouteHandler<
  typeof putPluginsIsmPoliciesPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsIsmRemoveRouteHandler: RouteHandler<
  typeof postPluginsIsmRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsIsmRemoveIndexRouteHandler: RouteHandler<
  typeof postPluginsIsmRemoveIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsIsmRetryRouteHandler: RouteHandler<
  typeof postPluginsIsmRetryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsIsmRetryIndexRouteHandler: RouteHandler<
  typeof postPluginsIsmRetryIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsKnnNodeIdStatsRouteHandler: RouteHandler<
  typeof getPluginsKnnNodeIdStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsKnnNodeIdStatsStatRouteHandler: RouteHandler<
  typeof getPluginsKnnNodeIdStatsStatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsKnnModelsSearchRouteHandler: RouteHandler<
  typeof getPluginsKnnModelsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsKnnModelsSearchRouteHandler: RouteHandler<
  typeof postPluginsKnnModelsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsKnnModelsTrainRouteHandler: RouteHandler<
  typeof postPluginsKnnModelsTrainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsKnnModelsModelIdRouteHandler: RouteHandler<
  typeof deletePluginsKnnModelsModelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsKnnModelsModelIdRouteHandler: RouteHandler<
  typeof getPluginsKnnModelsModelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsKnnModelsModelIdTrainRouteHandler: RouteHandler<
  typeof postPluginsKnnModelsModelIdTrainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsKnnStatsRouteHandler: RouteHandler<typeof getPluginsKnnStatsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPluginsKnnStatsStatRouteHandler: RouteHandler<
  typeof getPluginsKnnStatsStatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsKnnWarmupIndexRouteHandler: RouteHandler<
  typeof getPluginsKnnWarmupIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsLtrNodeIdStatsRouteHandler: RouteHandler<
  typeof getPluginsLtrNodeIdStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsLtrNodeIdStatsStatRouteHandler: RouteHandler<
  typeof getPluginsLtrNodeIdStatsStatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsLtrStatsRouteHandler: RouteHandler<typeof getPluginsLtrStatsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPluginsLtrStatsStatRouteHandler: RouteHandler<
  typeof getPluginsLtrStatsStatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlExecuteAlgorithmNameRouteHandler: RouteHandler<
  typeof postPluginsMlExecuteAlgorithmNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlPredictAlgorithmNameModelIdRouteHandler: RouteHandler<
  typeof postPluginsMlPredictAlgorithmNameModelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlTrainPredictAlgorithmNameRouteHandler: RouteHandler<
  typeof postPluginsMlTrainPredictAlgorithmNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlTrainAlgorithmNameRouteHandler: RouteHandler<
  typeof postPluginsMlTrainAlgorithmNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsMlNodeIdStatsRouteHandler: RouteHandler<
  typeof getPluginsMlNodeIdStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsMlNodeIdStatsStatRouteHandler: RouteHandler<
  typeof getPluginsMlNodeIdStatsStatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlAgentsRegisterRouteHandler: RouteHandler<
  typeof postPluginsMlAgentsRegisterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsMlAgentsSearchRouteHandler: RouteHandler<
  typeof getPluginsMlAgentsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlAgentsSearchRouteHandler: RouteHandler<
  typeof postPluginsMlAgentsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsMlAgentsAgentIdRouteHandler: RouteHandler<
  typeof deletePluginsMlAgentsAgentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsMlAgentsAgentIdRouteHandler: RouteHandler<
  typeof getPluginsMlAgentsAgentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlAgentsAgentIdExecuteRouteHandler: RouteHandler<
  typeof postPluginsMlAgentsAgentIdExecuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlAgentsAgentIdExecuteStreamRouteHandler: RouteHandler<
  typeof postPluginsMlAgentsAgentIdExecuteStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlConnectorsCreateRouteHandler: RouteHandler<
  typeof postPluginsMlConnectorsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsMlConnectorsSearchRouteHandler: RouteHandler<
  typeof getPluginsMlConnectorsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlConnectorsSearchRouteHandler: RouteHandler<
  typeof postPluginsMlConnectorsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsMlConnectorsConnectorIdRouteHandler: RouteHandler<
  typeof deletePluginsMlConnectorsConnectorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsMlConnectorsConnectorIdRouteHandler: RouteHandler<
  typeof getPluginsMlConnectorsConnectorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsMlConnectorsConnectorIdRouteHandler: RouteHandler<
  typeof putPluginsMlConnectorsConnectorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsMlControllersModelIdRouteHandler: RouteHandler<
  typeof deletePluginsMlControllersModelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsMlControllersModelIdRouteHandler: RouteHandler<
  typeof getPluginsMlControllersModelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlControllersModelIdRouteHandler: RouteHandler<
  typeof postPluginsMlControllersModelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsMlControllersModelIdRouteHandler: RouteHandler<
  typeof putPluginsMlControllersModelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsMlMemoryRouteHandler: RouteHandler<typeof getPluginsMlMemoryRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPluginsMlMemoryRouteHandler: RouteHandler<
  typeof postPluginsMlMemoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlMemoryContainersCreateRouteHandler: RouteHandler<
  typeof postPluginsMlMemoryContainersCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsMlMemoryContainersSearchRouteHandler: RouteHandler<
  typeof getPluginsMlMemoryContainersSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlMemoryContainersSearchRouteHandler: RouteHandler<
  typeof postPluginsMlMemoryContainersSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsMlMemoryContainersMemoryContainerIdRouteHandler: RouteHandler<
  typeof deletePluginsMlMemoryContainersMemoryContainerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsMlMemoryContainersMemoryContainerIdRouteHandler: RouteHandler<
  typeof getPluginsMlMemoryContainersMemoryContainerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsMlMemoryContainersMemoryContainerIdRouteHandler: RouteHandler<
  typeof putPluginsMlMemoryContainersMemoryContainerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlMemoryContainersMemoryContainerIdMemoriesRouteHandler: RouteHandler<
  typeof postPluginsMlMemoryContainersMemoryContainerIdMemoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlMemoryContainersMemoryContainerIdMemoriesTypeDeleteByQueryRouteHandler: RouteHandler<
  typeof postPluginsMlMemoryContainersMemoryContainerIdMemoriesTypeDeleteByQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsMlMemoryContainersMemoryContainerIdMemoriesTypeSearchRouteHandler: RouteHandler<
  typeof getPluginsMlMemoryContainersMemoryContainerIdMemoriesTypeSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsMlMemoryContainersMemoryContainerIdMemoriesTypeIdRouteHandler: RouteHandler<
  typeof deletePluginsMlMemoryContainersMemoryContainerIdMemoriesTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsMlMemoryContainersMemoryContainerIdMemoriesTypeIdRouteHandler: RouteHandler<
  typeof getPluginsMlMemoryContainersMemoryContainerIdMemoriesTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsMlMemoryContainersMemoryContainerIdMemoriesTypeIdRouteHandler: RouteHandler<
  typeof putPluginsMlMemoryContainersMemoryContainerIdMemoriesTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlMemoryContainersMemoryContainerIdMemoriesSessionsRouteHandler: RouteHandler<
  typeof postPluginsMlMemoryContainersMemoryContainerIdMemoriesSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsMlMemorySearchRouteHandler: RouteHandler<
  typeof getPluginsMlMemorySearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlMemorySearchRouteHandler: RouteHandler<
  typeof postPluginsMlMemorySearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsMlMemoryMemoryIdRouteHandler: RouteHandler<
  typeof deletePluginsMlMemoryMemoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsMlMemoryMemoryIdRouteHandler: RouteHandler<
  typeof getPluginsMlMemoryMemoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsMlMemoryMemoryIdRouteHandler: RouteHandler<
  typeof putPluginsMlMemoryMemoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsMlMemoryMemoryIdSearchRouteHandler: RouteHandler<
  typeof getPluginsMlMemoryMemoryIdSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlMemoryMemoryIdSearchRouteHandler: RouteHandler<
  typeof postPluginsMlMemoryMemoryIdSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsMlMemoryMemoryIdMessagesRouteHandler: RouteHandler<
  typeof getPluginsMlMemoryMemoryIdMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlMemoryMemoryIdMessagesRouteHandler: RouteHandler<
  typeof postPluginsMlMemoryMemoryIdMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsMlMemoryMessageMessageIdRouteHandler: RouteHandler<
  typeof getPluginsMlMemoryMessageMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsMlMemoryMessageMessageIdRouteHandler: RouteHandler<
  typeof putPluginsMlMemoryMessageMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsMlMemoryMessageMessageIdTracesRouteHandler: RouteHandler<
  typeof getPluginsMlMemoryMessageMessageIdTracesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlModelGroupsRegisterRouteHandler: RouteHandler<
  typeof postPluginsMlModelGroupsRegisterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsMlModelGroupsSearchRouteHandler: RouteHandler<
  typeof getPluginsMlModelGroupsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlModelGroupsSearchRouteHandler: RouteHandler<
  typeof postPluginsMlModelGroupsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsMlModelGroupsModelGroupIdRouteHandler: RouteHandler<
  typeof deletePluginsMlModelGroupsModelGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsMlModelGroupsModelGroupIdRouteHandler: RouteHandler<
  typeof getPluginsMlModelGroupsModelGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsMlModelGroupsModelGroupIdRouteHandler: RouteHandler<
  typeof putPluginsMlModelGroupsModelGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlModelsRegisterRouteHandler: RouteHandler<
  typeof postPluginsMlModelsRegisterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlModelsRegisterMetaRouteHandler: RouteHandler<
  typeof postPluginsMlModelsRegisterMetaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsMlModelsSearchRouteHandler: RouteHandler<
  typeof getPluginsMlModelsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlModelsSearchRouteHandler: RouteHandler<
  typeof postPluginsMlModelsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlModelsUndeployRouteHandler: RouteHandler<
  typeof postPluginsMlModelsUndeployRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlModelsUnloadRouteHandler: RouteHandler<
  typeof postPluginsMlModelsUnloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlModelsUploadRouteHandler: RouteHandler<
  typeof postPluginsMlModelsUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsMlModelsModelIdRouteHandler: RouteHandler<
  typeof deletePluginsMlModelsModelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsMlModelsModelIdRouteHandler: RouteHandler<
  typeof getPluginsMlModelsModelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsMlModelsModelIdRouteHandler: RouteHandler<
  typeof putPluginsMlModelsModelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlModelsModelIdDeployRouteHandler: RouteHandler<
  typeof postPluginsMlModelsModelIdDeployRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlModelsModelIdLoadRouteHandler: RouteHandler<
  typeof postPluginsMlModelsModelIdLoadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlModelsModelIdPredictRouteHandler: RouteHandler<
  typeof postPluginsMlModelsModelIdPredictRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlModelsModelIdPredictStreamRouteHandler: RouteHandler<
  typeof postPluginsMlModelsModelIdPredictStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlModelsModelIdUndeployRouteHandler: RouteHandler<
  typeof postPluginsMlModelsModelIdUndeployRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlModelsModelIdUnloadRouteHandler: RouteHandler<
  typeof postPluginsMlModelsModelIdUnloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlModelsModelIdChunkChunkNumberRouteHandler: RouteHandler<
  typeof postPluginsMlModelsModelIdChunkChunkNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlModelsModelIdUploadChunkChunkNumberRouteHandler: RouteHandler<
  typeof postPluginsMlModelsModelIdUploadChunkChunkNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlModelsMetaRouteHandler: RouteHandler<
  typeof postPluginsMlModelsMetaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsMlProfileRouteHandler: RouteHandler<
  typeof getPluginsMlProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsMlProfileModelsRouteHandler: RouteHandler<
  typeof getPluginsMlProfileModelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsMlProfileModelsModelIdRouteHandler: RouteHandler<
  typeof getPluginsMlProfileModelsModelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsMlProfileTasksRouteHandler: RouteHandler<
  typeof getPluginsMlProfileTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsMlProfileTasksTaskIdRouteHandler: RouteHandler<
  typeof getPluginsMlProfileTasksTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsMlStatsRouteHandler: RouteHandler<typeof getPluginsMlStatsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPluginsMlStatsStatRouteHandler: RouteHandler<
  typeof getPluginsMlStatsStatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsMlTasksSearchRouteHandler: RouteHandler<
  typeof getPluginsMlTasksSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsMlTasksSearchRouteHandler: RouteHandler<
  typeof postPluginsMlTasksSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsMlTasksTaskIdRouteHandler: RouteHandler<
  typeof deletePluginsMlTasksTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsMlTasksTaskIdRouteHandler: RouteHandler<
  typeof getPluginsMlTasksTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsMlToolsRouteHandler: RouteHandler<typeof getPluginsMlToolsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPluginsMlToolsExecuteToolNameRouteHandler: RouteHandler<
  typeof postPluginsMlToolsExecuteToolNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsMlToolsToolNameRouteHandler: RouteHandler<
  typeof getPluginsMlToolsToolNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsNeuralNodeIdStatsRouteHandler: RouteHandler<
  typeof getPluginsNeuralNodeIdStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsNeuralNodeIdStatsStatRouteHandler: RouteHandler<
  typeof getPluginsNeuralNodeIdStatsStatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsNeuralStatsRouteHandler: RouteHandler<
  typeof getPluginsNeuralStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsNeuralStatsStatRouteHandler: RouteHandler<
  typeof getPluginsNeuralStatsStatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsNotificationsChannelsRouteHandler: RouteHandler<
  typeof getPluginsNotificationsChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsNotificationsConfigsRouteHandler: RouteHandler<
  typeof deletePluginsNotificationsConfigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsNotificationsConfigsRouteHandler: RouteHandler<
  typeof getPluginsNotificationsConfigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsNotificationsConfigsRouteHandler: RouteHandler<
  typeof postPluginsNotificationsConfigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsNotificationsConfigsConfigIdRouteHandler: RouteHandler<
  typeof deletePluginsNotificationsConfigsConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsNotificationsConfigsConfigIdRouteHandler: RouteHandler<
  typeof getPluginsNotificationsConfigsConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsNotificationsConfigsConfigIdRouteHandler: RouteHandler<
  typeof putPluginsNotificationsConfigsConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsNotificationsFeatureTestConfigIdRouteHandler: RouteHandler<
  typeof getPluginsNotificationsFeatureTestConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsNotificationsFeatureTestConfigIdRouteHandler: RouteHandler<
  typeof postPluginsNotificationsFeatureTestConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsNotificationsFeaturesRouteHandler: RouteHandler<
  typeof getPluginsNotificationsFeaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsObservabilityLocalStatsRouteHandler: RouteHandler<
  typeof getPluginsObservabilityLocalStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsObservabilityObjectRouteHandler: RouteHandler<
  typeof deletePluginsObservabilityObjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsObservabilityObjectRouteHandler: RouteHandler<
  typeof getPluginsObservabilityObjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsObservabilityObjectRouteHandler: RouteHandler<
  typeof postPluginsObservabilityObjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsObservabilityObjectObjectIdRouteHandler: RouteHandler<
  typeof deletePluginsObservabilityObjectObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsObservabilityObjectObjectIdRouteHandler: RouteHandler<
  typeof getPluginsObservabilityObjectObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsObservabilityObjectObjectIdRouteHandler: RouteHandler<
  typeof putPluginsObservabilityObjectObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsPplRouteHandler: RouteHandler<typeof postPluginsPplRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsPplExplainRouteHandler: RouteHandler<
  typeof postPluginsPplExplainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsPplStatsRouteHandler: RouteHandler<typeof getPluginsPplStatsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPluginsPplStatsRouteHandler: RouteHandler<
  typeof postPluginsPplStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsQueryDatasourcesRouteHandler: RouteHandler<
  typeof getPluginsQueryDatasourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsQueryDatasourcesRouteHandler: RouteHandler<
  typeof postPluginsQueryDatasourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsQueryDatasourcesRouteHandler: RouteHandler<
  typeof putPluginsQueryDatasourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsQueryDatasourcesDatasourceNameRouteHandler: RouteHandler<
  typeof deletePluginsQueryDatasourcesDatasourceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsQueryDatasourcesDatasourceNameRouteHandler: RouteHandler<
  typeof getPluginsQueryDatasourcesDatasourceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsQuerySettingsRouteHandler: RouteHandler<
  typeof putPluginsQuerySettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsRefreshSearchAnalyzersIndexRouteHandler: RouteHandler<
  typeof postPluginsRefreshSearchAnalyzersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsReplicationAutofollowRouteHandler: RouteHandler<
  typeof deletePluginsReplicationAutofollowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsReplicationAutofollowRouteHandler: RouteHandler<
  typeof postPluginsReplicationAutofollowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsReplicationIndexPauseRouteHandler: RouteHandler<
  typeof postPluginsReplicationIndexPauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsReplicationIndexResumeRouteHandler: RouteHandler<
  typeof postPluginsReplicationIndexResumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsReplicationIndexStartRouteHandler: RouteHandler<
  typeof putPluginsReplicationIndexStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsReplicationIndexStatusRouteHandler: RouteHandler<
  typeof getPluginsReplicationIndexStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsReplicationIndexStopRouteHandler: RouteHandler<
  typeof postPluginsReplicationIndexStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsReplicationIndexUpdateRouteHandler: RouteHandler<
  typeof putPluginsReplicationIndexUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsReplicationAutofollowStatsRouteHandler: RouteHandler<
  typeof getPluginsReplicationAutofollowStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsReplicationFollowerStatsRouteHandler: RouteHandler<
  typeof getPluginsReplicationFollowerStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsReplicationLeaderStatsRouteHandler: RouteHandler<
  typeof getPluginsReplicationLeaderStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsRollupJobsIdRouteHandler: RouteHandler<
  typeof deletePluginsRollupJobsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsRollupJobsIdRouteHandler: RouteHandler<
  typeof getPluginsRollupJobsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsRollupJobsIdRouteHandler: RouteHandler<
  typeof putPluginsRollupJobsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsRollupJobsIdExplainRouteHandler: RouteHandler<
  typeof getPluginsRollupJobsIdExplainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsRollupJobsIdStartRouteHandler: RouteHandler<
  typeof postPluginsRollupJobsIdStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsRollupJobsIdStopRouteHandler: RouteHandler<
  typeof postPluginsRollupJobsIdStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSearchRelevanceNodeIdStatsRouteHandler: RouteHandler<
  typeof getPluginsSearchRelevanceNodeIdStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSearchRelevanceNodeIdStatsStatRouteHandler: RouteHandler<
  typeof getPluginsSearchRelevanceNodeIdStatsStatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSearchRelevanceExperimentsRouteHandler: RouteHandler<
  typeof getPluginsSearchRelevanceExperimentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsSearchRelevanceExperimentsRouteHandler: RouteHandler<
  typeof putPluginsSearchRelevanceExperimentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsSearchRelevanceExperimentsExperimentIdRouteHandler: RouteHandler<
  typeof deletePluginsSearchRelevanceExperimentsExperimentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSearchRelevanceExperimentsExperimentIdRouteHandler: RouteHandler<
  typeof getPluginsSearchRelevanceExperimentsExperimentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSearchRelevanceExperimentsScheduleRouteHandler: RouteHandler<
  typeof getPluginsSearchRelevanceExperimentsScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsSearchRelevanceExperimentsScheduleRouteHandler: RouteHandler<
  typeof postPluginsSearchRelevanceExperimentsScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsSearchRelevanceExperimentsScheduleExperimentIdRouteHandler: RouteHandler<
  typeof deletePluginsSearchRelevanceExperimentsScheduleExperimentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSearchRelevanceExperimentsScheduleExperimentIdRouteHandler: RouteHandler<
  typeof getPluginsSearchRelevanceExperimentsScheduleExperimentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSearchRelevanceJudgmentsRouteHandler: RouteHandler<
  typeof getPluginsSearchRelevanceJudgmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsSearchRelevanceJudgmentsRouteHandler: RouteHandler<
  typeof putPluginsSearchRelevanceJudgmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsSearchRelevanceJudgmentsJudgmentIdRouteHandler: RouteHandler<
  typeof deletePluginsSearchRelevanceJudgmentsJudgmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSearchRelevanceJudgmentsJudgmentIdRouteHandler: RouteHandler<
  typeof getPluginsSearchRelevanceJudgmentsJudgmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSearchRelevanceQuerySetsRouteHandler: RouteHandler<
  typeof getPluginsSearchRelevanceQuerySetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsSearchRelevanceQuerySetsRouteHandler: RouteHandler<
  typeof postPluginsSearchRelevanceQuerySetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsSearchRelevanceQuerySetsRouteHandler: RouteHandler<
  typeof putPluginsSearchRelevanceQuerySetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsSearchRelevanceQuerySetsQuerySetIdRouteHandler: RouteHandler<
  typeof deletePluginsSearchRelevanceQuerySetsQuerySetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSearchRelevanceQuerySetsQuerySetIdRouteHandler: RouteHandler<
  typeof getPluginsSearchRelevanceQuerySetsQuerySetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSearchRelevanceSearchConfigurationsRouteHandler: RouteHandler<
  typeof getPluginsSearchRelevanceSearchConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsSearchRelevanceSearchConfigurationsRouteHandler: RouteHandler<
  typeof putPluginsSearchRelevanceSearchConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsSearchRelevanceSearchConfigurationsSearchConfigurationIdRouteHandler: RouteHandler<
  typeof deletePluginsSearchRelevanceSearchConfigurationsSearchConfigurationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSearchRelevanceSearchConfigurationsSearchConfigurationIdRouteHandler: RouteHandler<
  typeof getPluginsSearchRelevanceSearchConfigurationsSearchConfigurationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSearchRelevanceStatsRouteHandler: RouteHandler<
  typeof getPluginsSearchRelevanceStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSearchRelevanceStatsStatRouteHandler: RouteHandler<
  typeof getPluginsSearchRelevanceStatsStatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityAnalyticsAlertsRouteHandler: RouteHandler<
  typeof getPluginsSecurityAnalyticsAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityAnalyticsFindingsSearchRouteHandler: RouteHandler<
  typeof getPluginsSecurityAnalyticsFindingsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityAnalyticsFindingsCorrelateRouteHandler: RouteHandler<
  typeof getPluginsSecurityAnalyticsFindingsCorrelateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityApiUpgradeCheckRouteHandler: RouteHandler<
  typeof getPluginsSecurityApiUpgradeCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsSecurityApiUpgradePerformRouteHandler: RouteHandler<
  typeof postPluginsSecurityApiUpgradePerformRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityApiAccountRouteHandler: RouteHandler<
  typeof getPluginsSecurityApiAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsSecurityApiAccountRouteHandler: RouteHandler<
  typeof putPluginsSecurityApiAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityApiActiongroupsRouteHandler: RouteHandler<
  typeof getPluginsSecurityApiActiongroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPluginsSecurityApiActiongroupsRouteHandler: RouteHandler<
  typeof patchPluginsSecurityApiActiongroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsSecurityApiActiongroupsActionGroupRouteHandler: RouteHandler<
  typeof deletePluginsSecurityApiActiongroupsActionGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityApiActiongroupsActionGroupRouteHandler: RouteHandler<
  typeof getPluginsSecurityApiActiongroupsActionGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPluginsSecurityApiActiongroupsActionGroupRouteHandler: RouteHandler<
  typeof patchPluginsSecurityApiActiongroupsActionGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsSecurityApiActiongroupsActionGroupRouteHandler: RouteHandler<
  typeof putPluginsSecurityApiActiongroupsActionGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityApiAllowlistRouteHandler: RouteHandler<
  typeof getPluginsSecurityApiAllowlistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPluginsSecurityApiAllowlistRouteHandler: RouteHandler<
  typeof patchPluginsSecurityApiAllowlistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsSecurityApiAllowlistRouteHandler: RouteHandler<
  typeof putPluginsSecurityApiAllowlistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityApiAuditRouteHandler: RouteHandler<
  typeof getPluginsSecurityApiAuditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPluginsSecurityApiAuditRouteHandler: RouteHandler<
  typeof patchPluginsSecurityApiAuditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsSecurityApiAuditConfigRouteHandler: RouteHandler<
  typeof putPluginsSecurityApiAuditConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsSecurityApiAuthtokenRouteHandler: RouteHandler<
  typeof postPluginsSecurityApiAuthtokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsSecurityApiCacheRouteHandler: RouteHandler<
  typeof deletePluginsSecurityApiCacheRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityApiCacheRouteHandler: RouteHandler<
  typeof getPluginsSecurityApiCacheRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsSecurityApiCacheRouteHandler: RouteHandler<
  typeof postPluginsSecurityApiCacheRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsSecurityApiCacheRouteHandler: RouteHandler<
  typeof putPluginsSecurityApiCacheRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityApiCertificatesRouteHandler: RouteHandler<
  typeof getPluginsSecurityApiCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityApiCertificatesNodeIdRouteHandler: RouteHandler<
  typeof getPluginsSecurityApiCertificatesNodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsSecurityApiGenerateonbehalfoftokenRouteHandler: RouteHandler<
  typeof postPluginsSecurityApiGenerateonbehalfoftokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityApiInternalusersRouteHandler: RouteHandler<
  typeof getPluginsSecurityApiInternalusersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPluginsSecurityApiInternalusersRouteHandler: RouteHandler<
  typeof patchPluginsSecurityApiInternalusersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsSecurityApiInternalusersUsernameRouteHandler: RouteHandler<
  typeof deletePluginsSecurityApiInternalusersUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityApiInternalusersUsernameRouteHandler: RouteHandler<
  typeof getPluginsSecurityApiInternalusersUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPluginsSecurityApiInternalusersUsernameRouteHandler: RouteHandler<
  typeof patchPluginsSecurityApiInternalusersUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsSecurityApiInternalusersUsernameRouteHandler: RouteHandler<
  typeof putPluginsSecurityApiInternalusersUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsSecurityApiInternalusersUsernameAuthtokenRouteHandler: RouteHandler<
  typeof postPluginsSecurityApiInternalusersUsernameAuthtokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsSecurityApiMigrateRouteHandler: RouteHandler<
  typeof postPluginsSecurityApiMigrateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityApiNodesdnRouteHandler: RouteHandler<
  typeof getPluginsSecurityApiNodesdnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPluginsSecurityApiNodesdnRouteHandler: RouteHandler<
  typeof patchPluginsSecurityApiNodesdnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsSecurityApiNodesdnClusterNameRouteHandler: RouteHandler<
  typeof deletePluginsSecurityApiNodesdnClusterNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityApiNodesdnClusterNameRouteHandler: RouteHandler<
  typeof getPluginsSecurityApiNodesdnClusterNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPluginsSecurityApiNodesdnClusterNameRouteHandler: RouteHandler<
  typeof patchPluginsSecurityApiNodesdnClusterNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsSecurityApiNodesdnClusterNameRouteHandler: RouteHandler<
  typeof putPluginsSecurityApiNodesdnClusterNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityApiPermissionsinfoRouteHandler: RouteHandler<
  typeof getPluginsSecurityApiPermissionsinfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityApiRolesRouteHandler: RouteHandler<
  typeof getPluginsSecurityApiRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPluginsSecurityApiRolesRouteHandler: RouteHandler<
  typeof patchPluginsSecurityApiRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsSecurityApiRolesRoleRouteHandler: RouteHandler<
  typeof deletePluginsSecurityApiRolesRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityApiRolesRoleRouteHandler: RouteHandler<
  typeof getPluginsSecurityApiRolesRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPluginsSecurityApiRolesRoleRouteHandler: RouteHandler<
  typeof patchPluginsSecurityApiRolesRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsSecurityApiRolesRoleRouteHandler: RouteHandler<
  typeof putPluginsSecurityApiRolesRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityApiRolesmappingRouteHandler: RouteHandler<
  typeof getPluginsSecurityApiRolesmappingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPluginsSecurityApiRolesmappingRouteHandler: RouteHandler<
  typeof patchPluginsSecurityApiRolesmappingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsSecurityApiRolesmappingRoleRouteHandler: RouteHandler<
  typeof deletePluginsSecurityApiRolesmappingRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityApiRolesmappingRoleRouteHandler: RouteHandler<
  typeof getPluginsSecurityApiRolesmappingRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPluginsSecurityApiRolesmappingRoleRouteHandler: RouteHandler<
  typeof patchPluginsSecurityApiRolesmappingRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsSecurityApiRolesmappingRoleRouteHandler: RouteHandler<
  typeof putPluginsSecurityApiRolesmappingRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityApiSecurityconfigRouteHandler: RouteHandler<
  typeof getPluginsSecurityApiSecurityconfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPluginsSecurityApiSecurityconfigRouteHandler: RouteHandler<
  typeof patchPluginsSecurityApiSecurityconfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsSecurityApiSecurityconfigConfigRouteHandler: RouteHandler<
  typeof putPluginsSecurityApiSecurityconfigConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityApiSslCertsRouteHandler: RouteHandler<
  typeof getPluginsSecurityApiSslCertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsSecurityApiSslHttpReloadcertsRouteHandler: RouteHandler<
  typeof putPluginsSecurityApiSslHttpReloadcertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsSecurityApiSslTransportReloadcertsRouteHandler: RouteHandler<
  typeof putPluginsSecurityApiSslTransportReloadcertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityApiTenancyConfigRouteHandler: RouteHandler<
  typeof getPluginsSecurityApiTenancyConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsSecurityApiTenancyConfigRouteHandler: RouteHandler<
  typeof putPluginsSecurityApiTenancyConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityApiTenantsRouteHandler: RouteHandler<
  typeof getPluginsSecurityApiTenantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPluginsSecurityApiTenantsRouteHandler: RouteHandler<
  typeof patchPluginsSecurityApiTenantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsSecurityApiTenantsTenantRouteHandler: RouteHandler<
  typeof deletePluginsSecurityApiTenantsTenantRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityApiTenantsTenantRouteHandler: RouteHandler<
  typeof getPluginsSecurityApiTenantsTenantRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPluginsSecurityApiTenantsTenantRouteHandler: RouteHandler<
  typeof patchPluginsSecurityApiTenantsTenantRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsSecurityApiTenantsTenantRouteHandler: RouteHandler<
  typeof putPluginsSecurityApiTenantsTenantRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityApiUserRouteHandler: RouteHandler<
  typeof getPluginsSecurityApiUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsSecurityApiUserUsernameRouteHandler: RouteHandler<
  typeof deletePluginsSecurityApiUserUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityApiUserUsernameRouteHandler: RouteHandler<
  typeof getPluginsSecurityApiUserUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsSecurityApiUserUsernameRouteHandler: RouteHandler<
  typeof putPluginsSecurityApiUserUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsSecurityApiUserUsernameAuthtokenRouteHandler: RouteHandler<
  typeof postPluginsSecurityApiUserUsernameAuthtokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityApiValidateRouteHandler: RouteHandler<
  typeof getPluginsSecurityApiValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityAuthinfoRouteHandler: RouteHandler<
  typeof getPluginsSecurityAuthinfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsSecurityAuthinfoRouteHandler: RouteHandler<
  typeof postPluginsSecurityAuthinfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityDashboardsinfoRouteHandler: RouteHandler<
  typeof getPluginsSecurityDashboardsinfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsSecurityDashboardsinfoRouteHandler: RouteHandler<
  typeof postPluginsSecurityDashboardsinfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityHealthRouteHandler: RouteHandler<
  typeof getPluginsSecurityHealthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsSecurityHealthRouteHandler: RouteHandler<
  typeof postPluginsSecurityHealthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityTenantinfoRouteHandler: RouteHandler<
  typeof getPluginsSecurityTenantinfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsSecurityTenantinfoRouteHandler: RouteHandler<
  typeof postPluginsSecurityTenantinfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityWhoamiRouteHandler: RouteHandler<
  typeof getPluginsSecurityWhoamiRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsSecurityWhoamiRouteHandler: RouteHandler<
  typeof postPluginsSecurityWhoamiRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSecurityWhoamiprotectedRouteHandler: RouteHandler<
  typeof getPluginsSecurityWhoamiprotectedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSmPoliciesRouteHandler: RouteHandler<
  typeof getPluginsSmPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsSmPoliciesPolicyNameRouteHandler: RouteHandler<
  typeof deletePluginsSmPoliciesPolicyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSmPoliciesPolicyNameRouteHandler: RouteHandler<
  typeof getPluginsSmPoliciesPolicyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsSmPoliciesPolicyNameRouteHandler: RouteHandler<
  typeof postPluginsSmPoliciesPolicyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsSmPoliciesPolicyNameRouteHandler: RouteHandler<
  typeof putPluginsSmPoliciesPolicyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSmPoliciesPolicyNameExplainRouteHandler: RouteHandler<
  typeof getPluginsSmPoliciesPolicyNameExplainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsSmPoliciesPolicyNameStartRouteHandler: RouteHandler<
  typeof postPluginsSmPoliciesPolicyNameStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsSmPoliciesPolicyNameStopRouteHandler: RouteHandler<
  typeof postPluginsSmPoliciesPolicyNameStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsSqlRouteHandler: RouteHandler<typeof postPluginsSqlRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsSqlExplainRouteHandler: RouteHandler<
  typeof postPluginsSqlExplainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsSqlCloseRouteHandler: RouteHandler<
  typeof postPluginsSqlCloseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsSqlStatsRouteHandler: RouteHandler<typeof getPluginsSqlStatsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPluginsSqlStatsRouteHandler: RouteHandler<
  typeof postPluginsSqlStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsTransformRouteHandler: RouteHandler<
  typeof getPluginsTransformRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsTransformPreviewRouteHandler: RouteHandler<
  typeof postPluginsTransformPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsTransformIdRouteHandler: RouteHandler<
  typeof deletePluginsTransformIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsTransformIdRouteHandler: RouteHandler<
  typeof getPluginsTransformIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsTransformIdRouteHandler: RouteHandler<
  typeof putPluginsTransformIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsTransformIdExplainRouteHandler: RouteHandler<
  typeof getPluginsTransformIdExplainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsTransformIdStartRouteHandler: RouteHandler<
  typeof postPluginsTransformIdStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsTransformIdStopRouteHandler: RouteHandler<
  typeof postPluginsTransformIdStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsGeospatialUploadStatsRouteHandler: RouteHandler<
  typeof getPluginsGeospatialUploadStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsGeospatialGeojsonUploadRouteHandler: RouteHandler<
  typeof postPluginsGeospatialGeojsonUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsGeospatialGeojsonUploadRouteHandler: RouteHandler<
  typeof putPluginsGeospatialGeojsonUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsGeospatialIp2geoDatasourceRouteHandler: RouteHandler<
  typeof getPluginsGeospatialIp2geoDatasourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsGeospatialIp2geoDatasourceNameRouteHandler: RouteHandler<
  typeof deletePluginsGeospatialIp2geoDatasourceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsGeospatialIp2geoDatasourceNameRouteHandler: RouteHandler<
  typeof getPluginsGeospatialIp2geoDatasourceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsGeospatialIp2geoDatasourceNameRouteHandler: RouteHandler<
  typeof putPluginsGeospatialIp2geoDatasourceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsGeospatialIp2geoDatasourceNameSettingsRouteHandler: RouteHandler<
  typeof putPluginsGeospatialIp2geoDatasourceNameSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsUbiInitializeRouteHandler: RouteHandler<
  typeof postPluginsUbiInitializeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
