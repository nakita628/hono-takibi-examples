import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const pluginsHandler = app
  .openapi(postPluginsAsynchronousSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsAsynchronousSearchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsAsynchronousSearchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsAsynchronousSearchStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsFlowFrameworkWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsFlowFrameworkWorkflowSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsFlowFrameworkWorkflowSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsFlowFrameworkWorkflowStepsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsFlowFrameworkWorkflowWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsFlowFrameworkWorkflowWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsFlowFrameworkWorkflowWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsFlowFrameworkWorkflowWorkflowIdDeprovisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsFlowFrameworkWorkflowWorkflowIdProvisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsFlowFrameworkWorkflowWorkflowIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsFlowFrameworkWorkflowStateSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsFlowFrameworkWorkflowStateSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsIsmAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsIsmAddIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsIsmChangePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsIsmChangePolicyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsIsmExplainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsIsmExplainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsIsmExplainIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsIsmExplainIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsIsmPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsIsmPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsIsmPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsIsmPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headPluginsIsmPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsIsmPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsIsmRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsIsmRemoveIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsIsmRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsIsmRetryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsKnnNodeIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsKnnNodeIdStatsStatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsKnnModelsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsKnnModelsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsKnnModelsTrainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsKnnModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsKnnModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsKnnModelsModelIdTrainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsKnnStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsKnnStatsStatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsKnnWarmupIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsLtrNodeIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsLtrNodeIdStatsStatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsLtrStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsLtrStatsStatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlExecuteAlgorithmNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlPredictAlgorithmNameModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlTrainPredictAlgorithmNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlTrainAlgorithmNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMlNodeIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMlNodeIdStatsStatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlAgentsRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMlAgentsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlAgentsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsMlAgentsAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMlAgentsAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlAgentsAgentIdExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlAgentsAgentIdExecuteStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlConnectorsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMlConnectorsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlConnectorsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsMlConnectorsConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMlConnectorsConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsMlConnectorsConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsMlControllersModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMlControllersModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlControllersModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsMlControllersModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMlMemoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlMemoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlMemoryContainersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMlMemoryContainersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlMemoryContainersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsMlMemoryContainersMemoryContainerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMlMemoryContainersMemoryContainerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsMlMemoryContainersMemoryContainerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlMemoryContainersMemoryContainerIdMemoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlMemoryContainersMemoryContainerIdMemoriesTypeDeleteByQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMlMemoryContainersMemoryContainerIdMemoriesTypeSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsMlMemoryContainersMemoryContainerIdMemoriesTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMlMemoryContainersMemoryContainerIdMemoriesTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsMlMemoryContainersMemoryContainerIdMemoriesTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlMemoryContainersMemoryContainerIdMemoriesSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMlMemorySearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlMemorySearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsMlMemoryMemoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMlMemoryMemoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsMlMemoryMemoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMlMemoryMemoryIdSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlMemoryMemoryIdSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMlMemoryMemoryIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlMemoryMemoryIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMlMemoryMessageMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsMlMemoryMessageMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMlMemoryMessageMessageIdTracesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlModelGroupsRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMlModelGroupsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlModelGroupsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsMlModelGroupsModelGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMlModelGroupsModelGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsMlModelGroupsModelGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlModelsRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlModelsRegisterMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMlModelsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlModelsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlModelsUndeployRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlModelsUnloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlModelsUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsMlModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMlModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsMlModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlModelsModelIdDeployRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlModelsModelIdLoadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlModelsModelIdPredictRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlModelsModelIdPredictStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlModelsModelIdUndeployRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlModelsModelIdUnloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlModelsModelIdChunkChunkNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlModelsModelIdUploadChunkChunkNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlModelsMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMlProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMlProfileModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMlProfileModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMlProfileTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMlProfileTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMlStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMlStatsStatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMlTasksSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlTasksSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsMlTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMlTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMlToolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsMlToolsExecuteToolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMlToolsToolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsNeuralNodeIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsNeuralNodeIdStatsStatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsNeuralStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsNeuralStatsStatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsNotificationsChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsNotificationsConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsNotificationsConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsNotificationsConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsNotificationsConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsNotificationsConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsNotificationsConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsNotificationsFeatureTestConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsNotificationsFeatureTestConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsNotificationsFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsObservabilityLocalStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsObservabilityObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsObservabilityObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsObservabilityObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsObservabilityObjectObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsObservabilityObjectObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsObservabilityObjectObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsPplRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsPplExplainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsPplStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsPplStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsQueryDatasourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsQueryDatasourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsQueryDatasourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsQueryDatasourcesDatasourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsQueryDatasourcesDatasourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsQuerySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsRefreshSearchAnalyzersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsReplicationAutofollowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsReplicationAutofollowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsReplicationIndexPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsReplicationIndexResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsReplicationIndexStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsReplicationIndexStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsReplicationIndexStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsReplicationIndexUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsReplicationAutofollowStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsReplicationFollowerStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsReplicationLeaderStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsRollupJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsRollupJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsRollupJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsRollupJobsIdExplainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsRollupJobsIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsRollupJobsIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSearchRelevanceNodeIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSearchRelevanceNodeIdStatsStatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSearchRelevanceExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsSearchRelevanceExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsSearchRelevanceExperimentsExperimentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSearchRelevanceExperimentsExperimentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSearchRelevanceExperimentsScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsSearchRelevanceExperimentsScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsSearchRelevanceExperimentsScheduleExperimentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSearchRelevanceExperimentsScheduleExperimentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSearchRelevanceJudgmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsSearchRelevanceJudgmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsSearchRelevanceJudgmentsJudgmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSearchRelevanceJudgmentsJudgmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSearchRelevanceQuerySetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsSearchRelevanceQuerySetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsSearchRelevanceQuerySetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsSearchRelevanceQuerySetsQuerySetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSearchRelevanceQuerySetsQuerySetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSearchRelevanceSearchConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsSearchRelevanceSearchConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsSearchRelevanceSearchConfigurationsSearchConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSearchRelevanceSearchConfigurationsSearchConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSearchRelevanceStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSearchRelevanceStatsStatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityAnalyticsAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityAnalyticsFindingsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityAnalyticsFindingsCorrelateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityApiUpgradeCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsSecurityApiUpgradePerformRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityApiAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsSecurityApiAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityApiActiongroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPluginsSecurityApiActiongroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsSecurityApiActiongroupsActionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityApiActiongroupsActionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPluginsSecurityApiActiongroupsActionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsSecurityApiActiongroupsActionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityApiAllowlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPluginsSecurityApiAllowlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsSecurityApiAllowlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityApiAuditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPluginsSecurityApiAuditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsSecurityApiAuditConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsSecurityApiAuthtokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsSecurityApiCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityApiCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsSecurityApiCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsSecurityApiCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityApiCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityApiCertificatesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsSecurityApiGenerateonbehalfoftokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityApiInternalusersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPluginsSecurityApiInternalusersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsSecurityApiInternalusersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityApiInternalusersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPluginsSecurityApiInternalusersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsSecurityApiInternalusersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsSecurityApiInternalusersUsernameAuthtokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsSecurityApiMigrateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityApiNodesdnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPluginsSecurityApiNodesdnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsSecurityApiNodesdnClusterNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityApiNodesdnClusterNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPluginsSecurityApiNodesdnClusterNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsSecurityApiNodesdnClusterNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityApiPermissionsinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityApiRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPluginsSecurityApiRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsSecurityApiRolesRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityApiRolesRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPluginsSecurityApiRolesRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsSecurityApiRolesRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityApiRolesmappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPluginsSecurityApiRolesmappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsSecurityApiRolesmappingRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityApiRolesmappingRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPluginsSecurityApiRolesmappingRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsSecurityApiRolesmappingRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityApiSecurityconfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPluginsSecurityApiSecurityconfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsSecurityApiSecurityconfigConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityApiSslCertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsSecurityApiSslHttpReloadcertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsSecurityApiSslTransportReloadcertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityApiTenancyConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsSecurityApiTenancyConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityApiTenantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPluginsSecurityApiTenantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsSecurityApiTenantsTenantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityApiTenantsTenantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPluginsSecurityApiTenantsTenantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsSecurityApiTenantsTenantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityApiUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsSecurityApiUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityApiUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsSecurityApiUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsSecurityApiUserUsernameAuthtokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityApiValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityAuthinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsSecurityAuthinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityDashboardsinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsSecurityDashboardsinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsSecurityHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityTenantinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsSecurityTenantinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityWhoamiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsSecurityWhoamiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSecurityWhoamiprotectedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSmPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsSmPoliciesPolicyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSmPoliciesPolicyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsSmPoliciesPolicyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsSmPoliciesPolicyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSmPoliciesPolicyNameExplainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsSmPoliciesPolicyNameStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsSmPoliciesPolicyNameStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsSqlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsSqlExplainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsSqlCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsSqlStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsSqlStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsTransformRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsTransformPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsTransformIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsTransformIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsTransformIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsTransformIdExplainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsTransformIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsTransformIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsGeospatialUploadStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsGeospatialGeojsonUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsGeospatialGeojsonUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsGeospatialIp2geoDatasourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsGeospatialIp2geoDatasourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsGeospatialIp2geoDatasourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsGeospatialIp2geoDatasourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsGeospatialIp2geoDatasourceNameSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsUbiInitializeRoute, (c) => {
    throw new Error('Not implemented')
  })
