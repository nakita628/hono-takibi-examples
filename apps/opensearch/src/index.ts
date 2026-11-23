import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteClusterDecommissionAwarenessRoute,
  deleteClusterRoutingAwarenessWeightsRoute,
  deleteClusterVotingConfigExclusionsRoute,
  deleteComponentTemplateNameRoute,
  deleteDanglingIndexUuidRoute,
  deleteDataStreamNameRoute,
  deleteIndexAliasesNameRoute,
  deleteIndexAliasNameRoute,
  deleteIndexDocIdRoute,
  deleteIndexRoute,
  deleteIndexTemplateNameRoute,
  deleteIngestPipelineIdRoute,
  deleteLtrFeatureIdRoute,
  deleteLtrFeaturesetIdRoute,
  deleteLtrModelIdRoute,
  deleteLtrRoute,
  deleteLtrStoreFeatureIdRoute,
  deleteLtrStoreFeaturesetIdRoute,
  deleteLtrStoreModelIdRoute,
  deleteLtrStoreRoute,
  deleteOpendistroAsynchronousSearchIdRoute,
  deleteOpendistroIsmPoliciesPolicyIdRoute,
  deleteOpendistroRollupJobsIdRoute,
  deleteOpendistroSecurityApiActiongroupsActionGroupRoute,
  deleteOpendistroSecurityApiCacheRoute,
  deleteOpendistroSecurityApiInternalusersUsernameRoute,
  deleteOpendistroSecurityApiNodesdnClusterNameRoute,
  deleteOpendistroSecurityApiRolesmappingRoleRoute,
  deleteOpendistroSecurityApiRolesRoleRoute,
  deleteOpendistroSecurityApiTenantsTenantRoute,
  deleteOpendistroSecurityApiUserUsernameRoute,
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
  deleteScriptsIdRoute,
  deleteSearchPipelineIdRoute,
  deleteSearchPointInTimeAllRoute,
  deleteSearchPointInTimeRoute,
  deleteSearchScrollRoute,
  deleteSearchScrollScrollIdRoute,
  deleteSnapshotRepositoryRoute,
  deleteSnapshotRepositorySnapshotRoute,
  deleteTemplateNameRoute,
  deleteWlmQueryGroupNameRoute,
  getAliasNameRoute,
  getAliasRoute,
  getAnalyzeRoute,
  getCatAliasesNameRoute,
  getCatAliasesRoute,
  getCatAllocationNodeIdRoute,
  getCatAllocationRoute,
  getCatClusterManagerRoute,
  getCatCountIndexRoute,
  getCatCountRoute,
  getCatFielddataFieldsRoute,
  getCatFielddataRoute,
  getCatHealthRoute,
  getCatIndicesIndexRoute,
  getCatIndicesRoute,
  getCatMasterRoute,
  getCatNodeattrsRoute,
  getCatNodesRoute,
  getCatPendingTasksRoute,
  getCatPitSegmentsAllRoute,
  getCatPitSegmentsRoute,
  getCatPluginsRoute,
  getCatRecoveryIndexRoute,
  getCatRecoveryRoute,
  getCatRepositoriesRoute,
  getCatRoute,
  getCatSegmentReplicationIndexRoute,
  getCatSegmentReplicationRoute,
  getCatSegmentsIndexRoute,
  getCatSegmentsRoute,
  getCatShardsIndexRoute,
  getCatShardsRoute,
  getCatSnapshotsRepositoryRoute,
  getCatSnapshotsRoute,
  getCatTasksRoute,
  getCatTemplatesNameRoute,
  getCatTemplatesRoute,
  getCatThreadPoolRoute,
  getCatThreadPoolThreadPoolPatternsRoute,
  getClusterAllocationExplainRoute,
  getClusterDecommissionAwarenessAwarenessAttributeNameStatusRoute,
  getClusterHealthIndexRoute,
  getClusterHealthRoute,
  getClusterNodesHotthreadsRoute,
  getClusterNodesHotThreadsRoute,
  getClusterNodesNodeIdHotthreadsRoute,
  getClusterNodesNodeIdHotThreadsRoute,
  getClusterPendingTasksRoute,
  getClusterRoutingAwarenessAttributeWeightsRoute,
  getClusterSettingsRoute,
  getClusterStateMetricIndexRoute,
  getClusterStateMetricRoute,
  getClusterStateRoute,
  getClusterStatsMetricIndexMetricNodesNodeIdRoute,
  getClusterStatsMetricNodesNodeIdRoute,
  getClusterStatsNodesNodeIdRoute,
  getClusterStatsRoute,
  getComponentTemplateNameRoute,
  getComponentTemplateRoute,
  getCountRoute,
  getDanglingRoute,
  getDataStreamNameRoute,
  getDataStreamNameStatsRoute,
  getDataStreamRoute,
  getDataStreamStatsRoute,
  getFieldCapsRoute,
  getFlushRoute,
  getIndexAliasNameRoute,
  getIndexAliasRoute,
  getIndexAnalyzeRoute,
  getIndexCountRoute,
  getIndexDocIdRoute,
  getIndexExplainIdRoute,
  getIndexFieldCapsRoute,
  getIndexFlushRoute,
  getIndexIngestionStateRoute,
  getIndexMappingFieldFieldsRoute,
  getIndexMappingRoute,
  getIndexMgetRoute,
  getIndexMsearchRoute,
  getIndexMsearchTemplateRoute,
  getIndexMtermvectorsRoute,
  getIndexRankEvalRoute,
  getIndexRecoveryRoute,
  getIndexRefreshRoute,
  getIndexRoute,
  getIndexSearchRoute,
  getIndexSearchShardsRoute,
  getIndexSearchTemplateRoute,
  getIndexSegmentsRoute,
  getIndexSettingsNameRoute,
  getIndexSettingsRoute,
  getIndexShardStoresRoute,
  getIndexSourceIdRoute,
  getIndexStatsMetricRoute,
  getIndexStatsRoute,
  getIndexTemplateNameRoute,
  getIndexTemplateRoute,
  getIndexTermvectorsIdRoute,
  getIndexTermvectorsRoute,
  getIndexUpgradeRoute,
  getIndexValidateQueryRoute,
  getIngestPipelineIdRoute,
  getIngestPipelineIdSimulateRoute,
  getIngestPipelineRoute,
  getIngestPipelineSimulateRoute,
  getIngestProcessorGrokRoute,
  getInsightsTopQueriesRoute,
  getListIndicesIndexRoute,
  getListIndicesRoute,
  getListRoute,
  getListShardsIndexRoute,
  getListShardsRoute,
  getLtrCachestatsRoute,
  getLtrFeatureIdRoute,
  getLtrFeatureRoute,
  getLtrFeaturesetIdRoute,
  getLtrFeaturesetRoute,
  getLtrModelIdRoute,
  getLtrModelRoute,
  getLtrRoute,
  getLtrStoreFeatureIdRoute,
  getLtrStoreFeatureRoute,
  getLtrStoreFeaturesetIdRoute,
  getLtrStoreFeaturesetRoute,
  getLtrStoreModelIdRoute,
  getLtrStoreModelRoute,
  getLtrStoreRoute,
  getMappingFieldFieldsRoute,
  getMappingRoute,
  getMgetRoute,
  getMsearchRoute,
  getMsearchTemplateRoute,
  getMtermvectorsRoute,
  getNodesHotthreadsRoute,
  getNodesHotThreadsRoute,
  getNodesNodeIdHotthreadsRoute,
  getNodesNodeIdHotThreadsRoute,
  getNodesNodeIdMetricRoute,
  getNodesNodeIdOrMetricRoute,
  getNodesNodeIdStatsMetricIndexMetricRoute,
  getNodesNodeIdStatsMetricRoute,
  getNodesNodeIdStatsRoute,
  getNodesNodeIdUsageMetricRoute,
  getNodesNodeIdUsageRoute,
  getNodesRoute,
  getNodesStatsMetricIndexMetricRoute,
  getNodesStatsMetricRoute,
  getNodesStatsRoute,
  getNodesUsageMetricRoute,
  getNodesUsageRoute,
  getOpendistroAsynchronousSearchIdRoute,
  getOpendistroAsynchronousSearchStatsRoute,
  getOpendistroIsmExplainIndexRoute,
  getOpendistroIsmExplainRoute,
  getOpendistroIsmPoliciesPolicyIdRoute,
  getOpendistroIsmPoliciesRoute,
  getOpendistroKnnNodeIdStatsStatRoute,
  getOpendistroKnnStatsStatRoute,
  getOpendistroKnnWarmupIndexRoute,
  getOpendistroPplStatsRoute,
  getOpendistroRollupJobsIdExplainRoute,
  getOpendistroRollupJobsIdRoute,
  getOpendistroSecurityApiAccountRoute,
  getOpendistroSecurityApiActiongroupsActionGroupRoute,
  getOpendistroSecurityApiAllowlistRoute,
  getOpendistroSecurityApiCacheRoute,
  getOpendistroSecurityApiInternalusersUsernameRoute,
  getOpendistroSecurityApiNodesdnClusterNameRoute,
  getOpendistroSecurityApiPermissionsinfoRoute,
  getOpendistroSecurityApiRolesmappingRoleRoute,
  getOpendistroSecurityApiRolesRoleRoute,
  getOpendistroSecurityApiSecurityconfigRoute,
  getOpendistroSecurityApiSslCertsRoute,
  getOpendistroSecurityApiTenancyConfigRoute,
  getOpendistroSecurityApiTenantsRoute,
  getOpendistroSecurityApiTenantsTenantRoute,
  getOpendistroSecurityApiUserRoute,
  getOpendistroSecurityApiUserUsernameRoute,
  getOpendistroSecurityApiValidateRoute,
  getOpendistroSecurityAuthinfoRoute,
  getOpendistroSecurityHealthRoute,
  getOpendistroSecurityKibanainfoRoute,
  getOpendistroSecuritySslinfoRoute,
  getOpendistroSecurityTenantinfoRoute,
  getOpendistroSqlStatsRoute,
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
  getRankEvalRoute,
  getRecoveryRoute,
  getRefreshRoute,
  getRemoteInfoRoute,
  getRenderTemplateIdRoute,
  getRenderTemplateRoute,
  getResolveIndexNameRoute,
  getRoute,
  getScriptContextRoute,
  getScriptLanguageRoute,
  getScriptsIdRoute,
  getScriptsPainlessExecuteRoute,
  getSearchPipelineIdRoute,
  getSearchPipelineRoute,
  getSearchPointInTimeAllRoute,
  getSearchRoute,
  getSearchScrollRoute,
  getSearchScrollScrollIdRoute,
  getSearchShardsRoute,
  getSearchTemplateRoute,
  getSegmentsRoute,
  getSettingsNameRoute,
  getSettingsRoute,
  getShardStoresRoute,
  getSnapshotRepositoryRoute,
  getSnapshotRepositorySnapshotRoute,
  getSnapshotRepositorySnapshotStatusRoute,
  getSnapshotRepositoryStatusRoute,
  getSnapshotRoute,
  getSnapshotStatusRoute,
  getStatsMetricRoute,
  getStatsRoute,
  getTasksRoute,
  getTasksTaskIdRoute,
  getTemplateNameRoute,
  getTemplateRoute,
  getUpgradeRoute,
  getValidateQueryRoute,
  getWlmQueryGroupNameRoute,
  getWlmQueryGroupRoute,
  headAliasNameRoute,
  headComponentTemplateNameRoute,
  headIndexAliasNameRoute,
  headIndexDocIdRoute,
  headIndexRoute,
  headIndexSourceIdRoute,
  headIndexTemplateNameRoute,
  headOpendistroIsmPoliciesPolicyIdRoute,
  headPluginsIsmPoliciesPolicyIdRoute,
  headRoute,
  headTemplateNameRoute,
  patchOpendistroSecurityApiActiongroupsActionGroupRoute,
  patchOpendistroSecurityApiAllowlistRoute,
  patchOpendistroSecurityApiInternalusersUsernameRoute,
  patchOpendistroSecurityApiNodesdnClusterNameRoute,
  patchOpendistroSecurityApiRolesmappingRoleRoute,
  patchOpendistroSecurityApiRolesRoleRoute,
  patchOpendistroSecurityApiSecurityconfigRoute,
  patchOpendistroSecurityApiTenantsRoute,
  patchOpendistroSecurityApiTenantsTenantRoute,
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
  postAliasesNameRoute,
  postAliasesRoute,
  postAliasNameRoute,
  postAliasRolloverNewIndexRoute,
  postAliasRolloverRoute,
  postAnalyzeRoute,
  postBulkRoute,
  postBulkStreamRoute,
  postCacheClearRoute,
  postClusterAllocationExplainRoute,
  postClusterRerouteRoute,
  postClusterVotingConfigExclusionsRoute,
  postComponentTemplateNameRoute,
  postCountRoute,
  postDanglingIndexUuidRoute,
  postDeleteByQueryTaskIdRethrottleRoute,
  postFieldCapsRoute,
  postFlushRoute,
  postForcemergeRoute,
  postIndexAliasesNameRoute,
  postIndexAliasNameRoute,
  postIndexAnalyzeRoute,
  postIndexBulkRoute,
  postIndexBulkStreamRoute,
  postIndexCacheClearRoute,
  postIndexCloneTargetRoute,
  postIndexCloseRoute,
  postIndexCountRoute,
  postIndexCreateIdRoute,
  postIndexDeleteByQueryRoute,
  postIndexDocIdRoute,
  postIndexDocRoute,
  postIndexExplainIdRoute,
  postIndexFieldCapsRoute,
  postIndexFlushRoute,
  postIndexForcemergeRoute,
  postIndexIngestionPauseRoute,
  postIndexIngestionResumeRoute,
  postIndexMappingRoute,
  postIndexMgetRoute,
  postIndexMsearchRoute,
  postIndexMsearchTemplateRoute,
  postIndexMtermvectorsRoute,
  postIndexOpenRoute,
  postIndexRankEvalRoute,
  postIndexRefreshRoute,
  postIndexSearchPointInTimeRoute,
  postIndexSearchRoute,
  postIndexSearchShardsRoute,
  postIndexSearchTemplateRoute,
  postIndexShrinkTargetRoute,
  postIndexSplitTargetRoute,
  postIndexTemplateNameRoute,
  postIndexTemplateSimulateIndexNameRoute,
  postIndexTemplateSimulateNameRoute,
  postIndexTemplateSimulateRoute,
  postIndexTermvectorsIdRoute,
  postIndexTermvectorsRoute,
  postIndexUpdateByQueryRoute,
  postIndexUpdateIdRoute,
  postIndexUpgradeRoute,
  postIndexValidateQueryRoute,
  postIngestPipelineIdSimulateRoute,
  postIngestPipelineSimulateRoute,
  postLtrClearcacheRoute,
  postLtrFeatureIdRoute,
  postLtrFeaturesetIdRoute,
  postLtrFeaturesetNameAddfeaturesQueryRoute,
  postLtrFeaturesetNameAddfeaturesRoute,
  postLtrFeaturesetNameCreatemodelRoute,
  postLtrStoreClearcacheRoute,
  postLtrStoreFeatureIdRoute,
  postLtrStoreFeaturesetIdRoute,
  postLtrStoreFeaturesetNameAddfeaturesQueryRoute,
  postLtrStoreFeaturesetNameAddfeaturesRoute,
  postLtrStoreFeaturesetNameCreatemodelRoute,
  postMgetRoute,
  postMsearchRoute,
  postMsearchTemplateRoute,
  postMtermvectorsRoute,
  postNodesNodeIdReloadSecureSettingsRoute,
  postNodesReloadSecureSettingsRoute,
  postOpendistroAsynchronousSearchRoute,
  postOpendistroIsmAddIndexRoute,
  postOpendistroIsmAddRoute,
  postOpendistroIsmChangePolicyIndexRoute,
  postOpendistroIsmChangePolicyRoute,
  postOpendistroIsmExplainIndexRoute,
  postOpendistroIsmExplainRoute,
  postOpendistroIsmRemoveIndexRoute,
  postOpendistroIsmRemoveRoute,
  postOpendistroIsmRetryIndexRoute,
  postOpendistroIsmRetryRoute,
  postOpendistroPplExplainRoute,
  postOpendistroPplRoute,
  postOpendistroPplStatsRoute,
  postOpendistroRefreshSearchAnalyzersIndexRoute,
  postOpendistroRollupJobsIdStartRoute,
  postOpendistroRollupJobsIdStopRoute,
  postOpendistroSecurityApiAuthtokenRoute,
  postOpendistroSecurityApiCacheRoute,
  postOpendistroSecurityApiInternalusersUsernameAuthtokenRoute,
  postOpendistroSecurityApiMigrateRoute,
  postOpendistroSecurityApiUserUsernameAuthtokenRoute,
  postOpendistroSecurityAuthinfoRoute,
  postOpendistroSecurityHealthRoute,
  postOpendistroSecurityKibanainfoRoute,
  postOpendistroSecurityTenantinfoRoute,
  postOpendistroSqlCloseRoute,
  postOpendistroSqlExplainRoute,
  postOpendistroSqlRoute,
  postOpendistroSqlStatsRoute,
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
  postRankEvalRoute,
  postRefreshRoute,
  postReindexRoute,
  postReindexTaskIdRethrottleRoute,
  postRemotestoreRestoreRoute,
  postRenderTemplateIdRoute,
  postRenderTemplateRoute,
  postScriptsIdContextRoute,
  postScriptsIdRoute,
  postScriptsPainlessExecuteRoute,
  postSearchRoute,
  postSearchScrollRoute,
  postSearchScrollScrollIdRoute,
  postSearchShardsRoute,
  postSearchTemplateRoute,
  postSnapshotRepositoryCleanupRoute,
  postSnapshotRepositoryRoute,
  postSnapshotRepositorySnapshotRestoreRoute,
  postSnapshotRepositorySnapshotRoute,
  postSnapshotRepositoryVerifyRoute,
  postTasksCancelRoute,
  postTasksTaskIdCancelRoute,
  postTemplateNameRoute,
  postUpdateByQueryTaskIdRethrottleRoute,
  postUpgradeRoute,
  postValidateQueryRoute,
  putAliasesNameRoute,
  putAliasNameRoute,
  putAliasRoute,
  putBulkRoute,
  putBulkStreamRoute,
  putClusterDecommissionAwarenessAwarenessAttributeNameAwarenessAttributeValueRoute,
  putClusterRoutingAwarenessAttributeWeightsRoute,
  putClusterSettingsRoute,
  putComponentTemplateNameRoute,
  putDataStreamNameRoute,
  putIndexAliasesNameRoute,
  putIndexAliasesRoute,
  putIndexAliasNameRoute,
  putIndexAliasRoute,
  putIndexBlockBlockRoute,
  putIndexBulkRoute,
  putIndexBulkStreamRoute,
  putIndexCloneTargetRoute,
  putIndexCreateIdRoute,
  putIndexDocIdRoute,
  putIndexMappingRoute,
  putIndexRoute,
  putIndexSettingsRoute,
  putIndexShrinkTargetRoute,
  putIndexSplitTargetRoute,
  putIndexTemplateNameRoute,
  putIngestPipelineIdRoute,
  putLtrFeatureIdRoute,
  putLtrFeaturesetIdRoute,
  putLtrModelIdRoute,
  putLtrRoute,
  putLtrStoreFeatureIdRoute,
  putLtrStoreFeaturesetIdRoute,
  putLtrStoreModelIdRoute,
  putLtrStoreRoute,
  putOpendistroIsmPoliciesPolicyIdRoute,
  putOpendistroIsmPoliciesRoute,
  putOpendistroRollupJobsIdRoute,
  putOpendistroSecurityApiAccountRoute,
  putOpendistroSecurityApiActiongroupsActionGroupRoute,
  putOpendistroSecurityApiAllowlistRoute,
  putOpendistroSecurityApiAuditConfigRoute,
  putOpendistroSecurityApiCacheRoute,
  putOpendistroSecurityApiInternalusersUsernameRoute,
  putOpendistroSecurityApiNodesdnClusterNameRoute,
  putOpendistroSecurityApiRolesmappingRoleRoute,
  putOpendistroSecurityApiRolesRoleRoute,
  putOpendistroSecurityApiSecurityconfigConfigRoute,
  putOpendistroSecurityApiSslHttpReloadcertsRoute,
  putOpendistroSecurityApiSslTransportReloadcertsRoute,
  putOpendistroSecurityApiTenancyConfigRoute,
  putOpendistroSecurityApiTenantsTenantRoute,
  putOpendistroSecurityApiUserUsernameRoute,
  putOpendistroSqlSettingsRoute,
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
  putScriptsIdContextRoute,
  putScriptsIdRoute,
  putSearchPipelineIdRoute,
  putSettingsRoute,
  putSnapshotRepositoryRoute,
  putSnapshotRepositorySnapshotCloneTargetSnapshotRoute,
  putSnapshotRepositorySnapshotRoute,
  putTemplateNameRoute,
  putWlmQueryGroupNameRoute,
  putWlmQueryGroupRoute,
} from './routes'
import {
  deleteClusterDecommissionAwarenessRouteHandler,
  deleteClusterRoutingAwarenessWeightsRouteHandler,
  deleteClusterVotingConfigExclusionsRouteHandler,
  deleteComponentTemplateNameRouteHandler,
  deleteDanglingIndexUuidRouteHandler,
  deleteDataStreamNameRouteHandler,
  deleteIndexAliasesNameRouteHandler,
  deleteIndexAliasNameRouteHandler,
  deleteIndexDocIdRouteHandler,
  deleteIndexRouteHandler,
  deleteIndexTemplateNameRouteHandler,
  deleteIngestPipelineIdRouteHandler,
  deleteLtrFeatureIdRouteHandler,
  deleteLtrFeaturesetIdRouteHandler,
  deleteLtrModelIdRouteHandler,
  deleteLtrRouteHandler,
  deleteLtrStoreFeatureIdRouteHandler,
  deleteLtrStoreFeaturesetIdRouteHandler,
  deleteLtrStoreModelIdRouteHandler,
  deleteLtrStoreRouteHandler,
  deleteOpendistroAsynchronousSearchIdRouteHandler,
  deleteOpendistroIsmPoliciesPolicyIdRouteHandler,
  deleteOpendistroRollupJobsIdRouteHandler,
  deleteOpendistroSecurityApiActiongroupsActionGroupRouteHandler,
  deleteOpendistroSecurityApiCacheRouteHandler,
  deleteOpendistroSecurityApiInternalusersUsernameRouteHandler,
  deleteOpendistroSecurityApiNodesdnClusterNameRouteHandler,
  deleteOpendistroSecurityApiRolesmappingRoleRouteHandler,
  deleteOpendistroSecurityApiRolesRoleRouteHandler,
  deleteOpendistroSecurityApiTenantsTenantRouteHandler,
  deleteOpendistroSecurityApiUserUsernameRouteHandler,
  deletePluginsAsynchronousSearchIdRouteHandler,
  deletePluginsFlowFrameworkWorkflowWorkflowIdRouteHandler,
  deletePluginsGeospatialIp2geoDatasourceNameRouteHandler,
  deletePluginsIsmPoliciesPolicyIdRouteHandler,
  deletePluginsKnnModelsModelIdRouteHandler,
  deletePluginsMlAgentsAgentIdRouteHandler,
  deletePluginsMlConnectorsConnectorIdRouteHandler,
  deletePluginsMlControllersModelIdRouteHandler,
  deletePluginsMlMemoryContainersMemoryContainerIdMemoriesTypeIdRouteHandler,
  deletePluginsMlMemoryContainersMemoryContainerIdRouteHandler,
  deletePluginsMlMemoryMemoryIdRouteHandler,
  deletePluginsMlModelGroupsModelGroupIdRouteHandler,
  deletePluginsMlModelsModelIdRouteHandler,
  deletePluginsMlTasksTaskIdRouteHandler,
  deletePluginsNotificationsConfigsConfigIdRouteHandler,
  deletePluginsNotificationsConfigsRouteHandler,
  deletePluginsObservabilityObjectObjectIdRouteHandler,
  deletePluginsObservabilityObjectRouteHandler,
  deletePluginsQueryDatasourcesDatasourceNameRouteHandler,
  deletePluginsReplicationAutofollowRouteHandler,
  deletePluginsRollupJobsIdRouteHandler,
  deletePluginsSearchRelevanceExperimentsExperimentIdRouteHandler,
  deletePluginsSearchRelevanceExperimentsScheduleExperimentIdRouteHandler,
  deletePluginsSearchRelevanceJudgmentsJudgmentIdRouteHandler,
  deletePluginsSearchRelevanceQuerySetsQuerySetIdRouteHandler,
  deletePluginsSearchRelevanceSearchConfigurationsSearchConfigurationIdRouteHandler,
  deletePluginsSecurityApiActiongroupsActionGroupRouteHandler,
  deletePluginsSecurityApiCacheRouteHandler,
  deletePluginsSecurityApiInternalusersUsernameRouteHandler,
  deletePluginsSecurityApiNodesdnClusterNameRouteHandler,
  deletePluginsSecurityApiRolesmappingRoleRouteHandler,
  deletePluginsSecurityApiRolesRoleRouteHandler,
  deletePluginsSecurityApiTenantsTenantRouteHandler,
  deletePluginsSecurityApiUserUsernameRouteHandler,
  deletePluginsSmPoliciesPolicyNameRouteHandler,
  deletePluginsTransformIdRouteHandler,
  deleteScriptsIdRouteHandler,
  deleteSearchPipelineIdRouteHandler,
  deleteSearchPointInTimeAllRouteHandler,
  deleteSearchPointInTimeRouteHandler,
  deleteSearchScrollRouteHandler,
  deleteSearchScrollScrollIdRouteHandler,
  deleteSnapshotRepositoryRouteHandler,
  deleteSnapshotRepositorySnapshotRouteHandler,
  deleteTemplateNameRouteHandler,
  deleteWlmQueryGroupNameRouteHandler,
  getAliasNameRouteHandler,
  getAliasRouteHandler,
  getAnalyzeRouteHandler,
  getCatAliasesNameRouteHandler,
  getCatAliasesRouteHandler,
  getCatAllocationNodeIdRouteHandler,
  getCatAllocationRouteHandler,
  getCatClusterManagerRouteHandler,
  getCatCountIndexRouteHandler,
  getCatCountRouteHandler,
  getCatFielddataFieldsRouteHandler,
  getCatFielddataRouteHandler,
  getCatHealthRouteHandler,
  getCatIndicesIndexRouteHandler,
  getCatIndicesRouteHandler,
  getCatMasterRouteHandler,
  getCatNodeattrsRouteHandler,
  getCatNodesRouteHandler,
  getCatPendingTasksRouteHandler,
  getCatPitSegmentsAllRouteHandler,
  getCatPitSegmentsRouteHandler,
  getCatPluginsRouteHandler,
  getCatRecoveryIndexRouteHandler,
  getCatRecoveryRouteHandler,
  getCatRepositoriesRouteHandler,
  getCatRouteHandler,
  getCatSegmentReplicationIndexRouteHandler,
  getCatSegmentReplicationRouteHandler,
  getCatSegmentsIndexRouteHandler,
  getCatSegmentsRouteHandler,
  getCatShardsIndexRouteHandler,
  getCatShardsRouteHandler,
  getCatSnapshotsRepositoryRouteHandler,
  getCatSnapshotsRouteHandler,
  getCatTasksRouteHandler,
  getCatTemplatesNameRouteHandler,
  getCatTemplatesRouteHandler,
  getCatThreadPoolRouteHandler,
  getCatThreadPoolThreadPoolPatternsRouteHandler,
  getClusterAllocationExplainRouteHandler,
  getClusterDecommissionAwarenessAwarenessAttributeNameStatusRouteHandler,
  getClusterHealthIndexRouteHandler,
  getClusterHealthRouteHandler,
  getClusterNodesHotthreadsRouteHandler,
  getClusterNodesHotThreadsRouteHandler,
  getClusterNodesNodeIdHotthreadsRouteHandler,
  getClusterNodesNodeIdHotThreadsRouteHandler,
  getClusterPendingTasksRouteHandler,
  getClusterRoutingAwarenessAttributeWeightsRouteHandler,
  getClusterSettingsRouteHandler,
  getClusterStateMetricIndexRouteHandler,
  getClusterStateMetricRouteHandler,
  getClusterStateRouteHandler,
  getClusterStatsMetricIndexMetricNodesNodeIdRouteHandler,
  getClusterStatsMetricNodesNodeIdRouteHandler,
  getClusterStatsNodesNodeIdRouteHandler,
  getClusterStatsRouteHandler,
  getComponentTemplateNameRouteHandler,
  getComponentTemplateRouteHandler,
  getCountRouteHandler,
  getDanglingRouteHandler,
  getDataStreamNameRouteHandler,
  getDataStreamNameStatsRouteHandler,
  getDataStreamRouteHandler,
  getDataStreamStatsRouteHandler,
  getFieldCapsRouteHandler,
  getFlushRouteHandler,
  getIndexAliasNameRouteHandler,
  getIndexAliasRouteHandler,
  getIndexAnalyzeRouteHandler,
  getIndexCountRouteHandler,
  getIndexDocIdRouteHandler,
  getIndexExplainIdRouteHandler,
  getIndexFieldCapsRouteHandler,
  getIndexFlushRouteHandler,
  getIndexIngestionStateRouteHandler,
  getIndexMappingFieldFieldsRouteHandler,
  getIndexMappingRouteHandler,
  getIndexMgetRouteHandler,
  getIndexMsearchRouteHandler,
  getIndexMsearchTemplateRouteHandler,
  getIndexMtermvectorsRouteHandler,
  getIndexRankEvalRouteHandler,
  getIndexRecoveryRouteHandler,
  getIndexRefreshRouteHandler,
  getIndexRouteHandler,
  getIndexSearchRouteHandler,
  getIndexSearchShardsRouteHandler,
  getIndexSearchTemplateRouteHandler,
  getIndexSegmentsRouteHandler,
  getIndexSettingsNameRouteHandler,
  getIndexSettingsRouteHandler,
  getIndexShardStoresRouteHandler,
  getIndexSourceIdRouteHandler,
  getIndexStatsMetricRouteHandler,
  getIndexStatsRouteHandler,
  getIndexTemplateNameRouteHandler,
  getIndexTemplateRouteHandler,
  getIndexTermvectorsIdRouteHandler,
  getIndexTermvectorsRouteHandler,
  getIndexUpgradeRouteHandler,
  getIndexValidateQueryRouteHandler,
  getIngestPipelineIdRouteHandler,
  getIngestPipelineIdSimulateRouteHandler,
  getIngestPipelineRouteHandler,
  getIngestPipelineSimulateRouteHandler,
  getIngestProcessorGrokRouteHandler,
  getInsightsTopQueriesRouteHandler,
  getListIndicesIndexRouteHandler,
  getListIndicesRouteHandler,
  getListRouteHandler,
  getListShardsIndexRouteHandler,
  getListShardsRouteHandler,
  getLtrCachestatsRouteHandler,
  getLtrFeatureIdRouteHandler,
  getLtrFeatureRouteHandler,
  getLtrFeaturesetIdRouteHandler,
  getLtrFeaturesetRouteHandler,
  getLtrModelIdRouteHandler,
  getLtrModelRouteHandler,
  getLtrRouteHandler,
  getLtrStoreFeatureIdRouteHandler,
  getLtrStoreFeatureRouteHandler,
  getLtrStoreFeaturesetIdRouteHandler,
  getLtrStoreFeaturesetRouteHandler,
  getLtrStoreModelIdRouteHandler,
  getLtrStoreModelRouteHandler,
  getLtrStoreRouteHandler,
  getMappingFieldFieldsRouteHandler,
  getMappingRouteHandler,
  getMgetRouteHandler,
  getMsearchRouteHandler,
  getMsearchTemplateRouteHandler,
  getMtermvectorsRouteHandler,
  getNodesHotthreadsRouteHandler,
  getNodesHotThreadsRouteHandler,
  getNodesNodeIdHotthreadsRouteHandler,
  getNodesNodeIdHotThreadsRouteHandler,
  getNodesNodeIdMetricRouteHandler,
  getNodesNodeIdOrMetricRouteHandler,
  getNodesNodeIdStatsMetricIndexMetricRouteHandler,
  getNodesNodeIdStatsMetricRouteHandler,
  getNodesNodeIdStatsRouteHandler,
  getNodesNodeIdUsageMetricRouteHandler,
  getNodesNodeIdUsageRouteHandler,
  getNodesRouteHandler,
  getNodesStatsMetricIndexMetricRouteHandler,
  getNodesStatsMetricRouteHandler,
  getNodesStatsRouteHandler,
  getNodesUsageMetricRouteHandler,
  getNodesUsageRouteHandler,
  getOpendistroAsynchronousSearchIdRouteHandler,
  getOpendistroAsynchronousSearchStatsRouteHandler,
  getOpendistroIsmExplainIndexRouteHandler,
  getOpendistroIsmExplainRouteHandler,
  getOpendistroIsmPoliciesPolicyIdRouteHandler,
  getOpendistroIsmPoliciesRouteHandler,
  getOpendistroKnnNodeIdStatsStatRouteHandler,
  getOpendistroKnnStatsStatRouteHandler,
  getOpendistroKnnWarmupIndexRouteHandler,
  getOpendistroPplStatsRouteHandler,
  getOpendistroRollupJobsIdExplainRouteHandler,
  getOpendistroRollupJobsIdRouteHandler,
  getOpendistroSecurityApiAccountRouteHandler,
  getOpendistroSecurityApiActiongroupsActionGroupRouteHandler,
  getOpendistroSecurityApiAllowlistRouteHandler,
  getOpendistroSecurityApiCacheRouteHandler,
  getOpendistroSecurityApiInternalusersUsernameRouteHandler,
  getOpendistroSecurityApiNodesdnClusterNameRouteHandler,
  getOpendistroSecurityApiPermissionsinfoRouteHandler,
  getOpendistroSecurityApiRolesmappingRoleRouteHandler,
  getOpendistroSecurityApiRolesRoleRouteHandler,
  getOpendistroSecurityApiSecurityconfigRouteHandler,
  getOpendistroSecurityApiSslCertsRouteHandler,
  getOpendistroSecurityApiTenancyConfigRouteHandler,
  getOpendistroSecurityApiTenantsRouteHandler,
  getOpendistroSecurityApiTenantsTenantRouteHandler,
  getOpendistroSecurityApiUserRouteHandler,
  getOpendistroSecurityApiUserUsernameRouteHandler,
  getOpendistroSecurityApiValidateRouteHandler,
  getOpendistroSecurityAuthinfoRouteHandler,
  getOpendistroSecurityHealthRouteHandler,
  getOpendistroSecurityKibanainfoRouteHandler,
  getOpendistroSecuritySslinfoRouteHandler,
  getOpendistroSecurityTenantinfoRouteHandler,
  getOpendistroSqlStatsRouteHandler,
  getPluginsAsynchronousSearchIdRouteHandler,
  getPluginsAsynchronousSearchStatsRouteHandler,
  getPluginsFlowFrameworkWorkflowSearchRouteHandler,
  getPluginsFlowFrameworkWorkflowStateSearchRouteHandler,
  getPluginsFlowFrameworkWorkflowStepsRouteHandler,
  getPluginsFlowFrameworkWorkflowWorkflowIdRouteHandler,
  getPluginsFlowFrameworkWorkflowWorkflowIdStatusRouteHandler,
  getPluginsGeospatialIp2geoDatasourceNameRouteHandler,
  getPluginsGeospatialIp2geoDatasourceRouteHandler,
  getPluginsGeospatialUploadStatsRouteHandler,
  getPluginsIsmExplainIndexRouteHandler,
  getPluginsIsmExplainRouteHandler,
  getPluginsIsmPoliciesPolicyIdRouteHandler,
  getPluginsIsmPoliciesRouteHandler,
  getPluginsKnnModelsModelIdRouteHandler,
  getPluginsKnnModelsSearchRouteHandler,
  getPluginsKnnNodeIdStatsRouteHandler,
  getPluginsKnnNodeIdStatsStatRouteHandler,
  getPluginsKnnStatsRouteHandler,
  getPluginsKnnStatsStatRouteHandler,
  getPluginsKnnWarmupIndexRouteHandler,
  getPluginsLtrNodeIdStatsRouteHandler,
  getPluginsLtrNodeIdStatsStatRouteHandler,
  getPluginsLtrStatsRouteHandler,
  getPluginsLtrStatsStatRouteHandler,
  getPluginsMlAgentsAgentIdRouteHandler,
  getPluginsMlAgentsSearchRouteHandler,
  getPluginsMlConnectorsConnectorIdRouteHandler,
  getPluginsMlConnectorsSearchRouteHandler,
  getPluginsMlControllersModelIdRouteHandler,
  getPluginsMlMemoryContainersMemoryContainerIdMemoriesTypeIdRouteHandler,
  getPluginsMlMemoryContainersMemoryContainerIdMemoriesTypeSearchRouteHandler,
  getPluginsMlMemoryContainersMemoryContainerIdRouteHandler,
  getPluginsMlMemoryContainersSearchRouteHandler,
  getPluginsMlMemoryMemoryIdMessagesRouteHandler,
  getPluginsMlMemoryMemoryIdRouteHandler,
  getPluginsMlMemoryMemoryIdSearchRouteHandler,
  getPluginsMlMemoryMessageMessageIdRouteHandler,
  getPluginsMlMemoryMessageMessageIdTracesRouteHandler,
  getPluginsMlMemoryRouteHandler,
  getPluginsMlMemorySearchRouteHandler,
  getPluginsMlModelGroupsModelGroupIdRouteHandler,
  getPluginsMlModelGroupsSearchRouteHandler,
  getPluginsMlModelsModelIdRouteHandler,
  getPluginsMlModelsSearchRouteHandler,
  getPluginsMlNodeIdStatsRouteHandler,
  getPluginsMlNodeIdStatsStatRouteHandler,
  getPluginsMlProfileModelsModelIdRouteHandler,
  getPluginsMlProfileModelsRouteHandler,
  getPluginsMlProfileRouteHandler,
  getPluginsMlProfileTasksRouteHandler,
  getPluginsMlProfileTasksTaskIdRouteHandler,
  getPluginsMlStatsRouteHandler,
  getPluginsMlStatsStatRouteHandler,
  getPluginsMlTasksSearchRouteHandler,
  getPluginsMlTasksTaskIdRouteHandler,
  getPluginsMlToolsRouteHandler,
  getPluginsMlToolsToolNameRouteHandler,
  getPluginsNeuralNodeIdStatsRouteHandler,
  getPluginsNeuralNodeIdStatsStatRouteHandler,
  getPluginsNeuralStatsRouteHandler,
  getPluginsNeuralStatsStatRouteHandler,
  getPluginsNotificationsChannelsRouteHandler,
  getPluginsNotificationsConfigsConfigIdRouteHandler,
  getPluginsNotificationsConfigsRouteHandler,
  getPluginsNotificationsFeaturesRouteHandler,
  getPluginsNotificationsFeatureTestConfigIdRouteHandler,
  getPluginsObservabilityLocalStatsRouteHandler,
  getPluginsObservabilityObjectObjectIdRouteHandler,
  getPluginsObservabilityObjectRouteHandler,
  getPluginsPplStatsRouteHandler,
  getPluginsQueryDatasourcesDatasourceNameRouteHandler,
  getPluginsQueryDatasourcesRouteHandler,
  getPluginsReplicationAutofollowStatsRouteHandler,
  getPluginsReplicationFollowerStatsRouteHandler,
  getPluginsReplicationIndexStatusRouteHandler,
  getPluginsReplicationLeaderStatsRouteHandler,
  getPluginsRollupJobsIdExplainRouteHandler,
  getPluginsRollupJobsIdRouteHandler,
  getPluginsSearchRelevanceExperimentsExperimentIdRouteHandler,
  getPluginsSearchRelevanceExperimentsRouteHandler,
  getPluginsSearchRelevanceExperimentsScheduleExperimentIdRouteHandler,
  getPluginsSearchRelevanceExperimentsScheduleRouteHandler,
  getPluginsSearchRelevanceJudgmentsJudgmentIdRouteHandler,
  getPluginsSearchRelevanceJudgmentsRouteHandler,
  getPluginsSearchRelevanceNodeIdStatsRouteHandler,
  getPluginsSearchRelevanceNodeIdStatsStatRouteHandler,
  getPluginsSearchRelevanceQuerySetsQuerySetIdRouteHandler,
  getPluginsSearchRelevanceQuerySetsRouteHandler,
  getPluginsSearchRelevanceSearchConfigurationsRouteHandler,
  getPluginsSearchRelevanceSearchConfigurationsSearchConfigurationIdRouteHandler,
  getPluginsSearchRelevanceStatsRouteHandler,
  getPluginsSearchRelevanceStatsStatRouteHandler,
  getPluginsSecurityAnalyticsAlertsRouteHandler,
  getPluginsSecurityAnalyticsFindingsCorrelateRouteHandler,
  getPluginsSecurityAnalyticsFindingsSearchRouteHandler,
  getPluginsSecurityApiAccountRouteHandler,
  getPluginsSecurityApiActiongroupsActionGroupRouteHandler,
  getPluginsSecurityApiActiongroupsRouteHandler,
  getPluginsSecurityApiAllowlistRouteHandler,
  getPluginsSecurityApiAuditRouteHandler,
  getPluginsSecurityApiCacheRouteHandler,
  getPluginsSecurityApiCertificatesNodeIdRouteHandler,
  getPluginsSecurityApiCertificatesRouteHandler,
  getPluginsSecurityApiInternalusersRouteHandler,
  getPluginsSecurityApiInternalusersUsernameRouteHandler,
  getPluginsSecurityApiNodesdnClusterNameRouteHandler,
  getPluginsSecurityApiNodesdnRouteHandler,
  getPluginsSecurityApiPermissionsinfoRouteHandler,
  getPluginsSecurityApiRolesmappingRoleRouteHandler,
  getPluginsSecurityApiRolesmappingRouteHandler,
  getPluginsSecurityApiRolesRoleRouteHandler,
  getPluginsSecurityApiRolesRouteHandler,
  getPluginsSecurityApiSecurityconfigRouteHandler,
  getPluginsSecurityApiSslCertsRouteHandler,
  getPluginsSecurityApiTenancyConfigRouteHandler,
  getPluginsSecurityApiTenantsRouteHandler,
  getPluginsSecurityApiTenantsTenantRouteHandler,
  getPluginsSecurityApiUpgradeCheckRouteHandler,
  getPluginsSecurityApiUserRouteHandler,
  getPluginsSecurityApiUserUsernameRouteHandler,
  getPluginsSecurityApiValidateRouteHandler,
  getPluginsSecurityAuthinfoRouteHandler,
  getPluginsSecurityDashboardsinfoRouteHandler,
  getPluginsSecurityHealthRouteHandler,
  getPluginsSecurityTenantinfoRouteHandler,
  getPluginsSecurityWhoamiprotectedRouteHandler,
  getPluginsSecurityWhoamiRouteHandler,
  getPluginsSmPoliciesPolicyNameExplainRouteHandler,
  getPluginsSmPoliciesPolicyNameRouteHandler,
  getPluginsSmPoliciesRouteHandler,
  getPluginsSqlStatsRouteHandler,
  getPluginsTransformIdExplainRouteHandler,
  getPluginsTransformIdRouteHandler,
  getPluginsTransformRouteHandler,
  getRankEvalRouteHandler,
  getRecoveryRouteHandler,
  getRefreshRouteHandler,
  getRemoteInfoRouteHandler,
  getRenderTemplateIdRouteHandler,
  getRenderTemplateRouteHandler,
  getResolveIndexNameRouteHandler,
  getRouteHandler,
  getScriptContextRouteHandler,
  getScriptLanguageRouteHandler,
  getScriptsIdRouteHandler,
  getScriptsPainlessExecuteRouteHandler,
  getSearchPipelineIdRouteHandler,
  getSearchPipelineRouteHandler,
  getSearchPointInTimeAllRouteHandler,
  getSearchRouteHandler,
  getSearchScrollRouteHandler,
  getSearchScrollScrollIdRouteHandler,
  getSearchShardsRouteHandler,
  getSearchTemplateRouteHandler,
  getSegmentsRouteHandler,
  getSettingsNameRouteHandler,
  getSettingsRouteHandler,
  getShardStoresRouteHandler,
  getSnapshotRepositoryRouteHandler,
  getSnapshotRepositorySnapshotRouteHandler,
  getSnapshotRepositorySnapshotStatusRouteHandler,
  getSnapshotRepositoryStatusRouteHandler,
  getSnapshotRouteHandler,
  getSnapshotStatusRouteHandler,
  getStatsMetricRouteHandler,
  getStatsRouteHandler,
  getTasksRouteHandler,
  getTasksTaskIdRouteHandler,
  getTemplateNameRouteHandler,
  getTemplateRouteHandler,
  getUpgradeRouteHandler,
  getValidateQueryRouteHandler,
  getWlmQueryGroupNameRouteHandler,
  getWlmQueryGroupRouteHandler,
  headAliasNameRouteHandler,
  headComponentTemplateNameRouteHandler,
  headIndexAliasNameRouteHandler,
  headIndexDocIdRouteHandler,
  headIndexRouteHandler,
  headIndexSourceIdRouteHandler,
  headIndexTemplateNameRouteHandler,
  headOpendistroIsmPoliciesPolicyIdRouteHandler,
  headPluginsIsmPoliciesPolicyIdRouteHandler,
  headRouteHandler,
  headTemplateNameRouteHandler,
  patchOpendistroSecurityApiActiongroupsActionGroupRouteHandler,
  patchOpendistroSecurityApiAllowlistRouteHandler,
  patchOpendistroSecurityApiInternalusersUsernameRouteHandler,
  patchOpendistroSecurityApiNodesdnClusterNameRouteHandler,
  patchOpendistroSecurityApiRolesmappingRoleRouteHandler,
  patchOpendistroSecurityApiRolesRoleRouteHandler,
  patchOpendistroSecurityApiSecurityconfigRouteHandler,
  patchOpendistroSecurityApiTenantsRouteHandler,
  patchOpendistroSecurityApiTenantsTenantRouteHandler,
  patchPluginsSecurityApiActiongroupsActionGroupRouteHandler,
  patchPluginsSecurityApiActiongroupsRouteHandler,
  patchPluginsSecurityApiAllowlistRouteHandler,
  patchPluginsSecurityApiAuditRouteHandler,
  patchPluginsSecurityApiInternalusersRouteHandler,
  patchPluginsSecurityApiInternalusersUsernameRouteHandler,
  patchPluginsSecurityApiNodesdnClusterNameRouteHandler,
  patchPluginsSecurityApiNodesdnRouteHandler,
  patchPluginsSecurityApiRolesmappingRoleRouteHandler,
  patchPluginsSecurityApiRolesmappingRouteHandler,
  patchPluginsSecurityApiRolesRoleRouteHandler,
  patchPluginsSecurityApiRolesRouteHandler,
  patchPluginsSecurityApiSecurityconfigRouteHandler,
  patchPluginsSecurityApiTenantsRouteHandler,
  patchPluginsSecurityApiTenantsTenantRouteHandler,
  postAliasesNameRouteHandler,
  postAliasesRouteHandler,
  postAliasNameRouteHandler,
  postAliasRolloverNewIndexRouteHandler,
  postAliasRolloverRouteHandler,
  postAnalyzeRouteHandler,
  postBulkRouteHandler,
  postBulkStreamRouteHandler,
  postCacheClearRouteHandler,
  postClusterAllocationExplainRouteHandler,
  postClusterRerouteRouteHandler,
  postClusterVotingConfigExclusionsRouteHandler,
  postComponentTemplateNameRouteHandler,
  postCountRouteHandler,
  postDanglingIndexUuidRouteHandler,
  postDeleteByQueryTaskIdRethrottleRouteHandler,
  postFieldCapsRouteHandler,
  postFlushRouteHandler,
  postForcemergeRouteHandler,
  postIndexAliasesNameRouteHandler,
  postIndexAliasNameRouteHandler,
  postIndexAnalyzeRouteHandler,
  postIndexBulkRouteHandler,
  postIndexBulkStreamRouteHandler,
  postIndexCacheClearRouteHandler,
  postIndexCloneTargetRouteHandler,
  postIndexCloseRouteHandler,
  postIndexCountRouteHandler,
  postIndexCreateIdRouteHandler,
  postIndexDeleteByQueryRouteHandler,
  postIndexDocIdRouteHandler,
  postIndexDocRouteHandler,
  postIndexExplainIdRouteHandler,
  postIndexFieldCapsRouteHandler,
  postIndexFlushRouteHandler,
  postIndexForcemergeRouteHandler,
  postIndexIngestionPauseRouteHandler,
  postIndexIngestionResumeRouteHandler,
  postIndexMappingRouteHandler,
  postIndexMgetRouteHandler,
  postIndexMsearchRouteHandler,
  postIndexMsearchTemplateRouteHandler,
  postIndexMtermvectorsRouteHandler,
  postIndexOpenRouteHandler,
  postIndexRankEvalRouteHandler,
  postIndexRefreshRouteHandler,
  postIndexSearchPointInTimeRouteHandler,
  postIndexSearchRouteHandler,
  postIndexSearchShardsRouteHandler,
  postIndexSearchTemplateRouteHandler,
  postIndexShrinkTargetRouteHandler,
  postIndexSplitTargetRouteHandler,
  postIndexTemplateNameRouteHandler,
  postIndexTemplateSimulateIndexNameRouteHandler,
  postIndexTemplateSimulateNameRouteHandler,
  postIndexTemplateSimulateRouteHandler,
  postIndexTermvectorsIdRouteHandler,
  postIndexTermvectorsRouteHandler,
  postIndexUpdateByQueryRouteHandler,
  postIndexUpdateIdRouteHandler,
  postIndexUpgradeRouteHandler,
  postIndexValidateQueryRouteHandler,
  postIngestPipelineIdSimulateRouteHandler,
  postIngestPipelineSimulateRouteHandler,
  postLtrClearcacheRouteHandler,
  postLtrFeatureIdRouteHandler,
  postLtrFeaturesetIdRouteHandler,
  postLtrFeaturesetNameAddfeaturesQueryRouteHandler,
  postLtrFeaturesetNameAddfeaturesRouteHandler,
  postLtrFeaturesetNameCreatemodelRouteHandler,
  postLtrStoreClearcacheRouteHandler,
  postLtrStoreFeatureIdRouteHandler,
  postLtrStoreFeaturesetIdRouteHandler,
  postLtrStoreFeaturesetNameAddfeaturesQueryRouteHandler,
  postLtrStoreFeaturesetNameAddfeaturesRouteHandler,
  postLtrStoreFeaturesetNameCreatemodelRouteHandler,
  postMgetRouteHandler,
  postMsearchRouteHandler,
  postMsearchTemplateRouteHandler,
  postMtermvectorsRouteHandler,
  postNodesNodeIdReloadSecureSettingsRouteHandler,
  postNodesReloadSecureSettingsRouteHandler,
  postOpendistroAsynchronousSearchRouteHandler,
  postOpendistroIsmAddIndexRouteHandler,
  postOpendistroIsmAddRouteHandler,
  postOpendistroIsmChangePolicyIndexRouteHandler,
  postOpendistroIsmChangePolicyRouteHandler,
  postOpendistroIsmExplainIndexRouteHandler,
  postOpendistroIsmExplainRouteHandler,
  postOpendistroIsmRemoveIndexRouteHandler,
  postOpendistroIsmRemoveRouteHandler,
  postOpendistroIsmRetryIndexRouteHandler,
  postOpendistroIsmRetryRouteHandler,
  postOpendistroPplExplainRouteHandler,
  postOpendistroPplRouteHandler,
  postOpendistroPplStatsRouteHandler,
  postOpendistroRefreshSearchAnalyzersIndexRouteHandler,
  postOpendistroRollupJobsIdStartRouteHandler,
  postOpendistroRollupJobsIdStopRouteHandler,
  postOpendistroSecurityApiAuthtokenRouteHandler,
  postOpendistroSecurityApiCacheRouteHandler,
  postOpendistroSecurityApiInternalusersUsernameAuthtokenRouteHandler,
  postOpendistroSecurityApiMigrateRouteHandler,
  postOpendistroSecurityApiUserUsernameAuthtokenRouteHandler,
  postOpendistroSecurityAuthinfoRouteHandler,
  postOpendistroSecurityHealthRouteHandler,
  postOpendistroSecurityKibanainfoRouteHandler,
  postOpendistroSecurityTenantinfoRouteHandler,
  postOpendistroSqlCloseRouteHandler,
  postOpendistroSqlExplainRouteHandler,
  postOpendistroSqlRouteHandler,
  postOpendistroSqlStatsRouteHandler,
  postPluginsAsynchronousSearchRouteHandler,
  postPluginsFlowFrameworkWorkflowRouteHandler,
  postPluginsFlowFrameworkWorkflowSearchRouteHandler,
  postPluginsFlowFrameworkWorkflowStateSearchRouteHandler,
  postPluginsFlowFrameworkWorkflowWorkflowIdDeprovisionRouteHandler,
  postPluginsFlowFrameworkWorkflowWorkflowIdProvisionRouteHandler,
  postPluginsGeospatialGeojsonUploadRouteHandler,
  postPluginsIsmAddIndexRouteHandler,
  postPluginsIsmAddRouteHandler,
  postPluginsIsmChangePolicyIndexRouteHandler,
  postPluginsIsmChangePolicyRouteHandler,
  postPluginsIsmExplainIndexRouteHandler,
  postPluginsIsmExplainRouteHandler,
  postPluginsIsmRemoveIndexRouteHandler,
  postPluginsIsmRemoveRouteHandler,
  postPluginsIsmRetryIndexRouteHandler,
  postPluginsIsmRetryRouteHandler,
  postPluginsKnnModelsModelIdTrainRouteHandler,
  postPluginsKnnModelsSearchRouteHandler,
  postPluginsKnnModelsTrainRouteHandler,
  postPluginsMlAgentsAgentIdExecuteRouteHandler,
  postPluginsMlAgentsAgentIdExecuteStreamRouteHandler,
  postPluginsMlAgentsRegisterRouteHandler,
  postPluginsMlAgentsSearchRouteHandler,
  postPluginsMlConnectorsCreateRouteHandler,
  postPluginsMlConnectorsSearchRouteHandler,
  postPluginsMlControllersModelIdRouteHandler,
  postPluginsMlExecuteAlgorithmNameRouteHandler,
  postPluginsMlMemoryContainersCreateRouteHandler,
  postPluginsMlMemoryContainersMemoryContainerIdMemoriesRouteHandler,
  postPluginsMlMemoryContainersMemoryContainerIdMemoriesSessionsRouteHandler,
  postPluginsMlMemoryContainersMemoryContainerIdMemoriesTypeDeleteByQueryRouteHandler,
  postPluginsMlMemoryContainersSearchRouteHandler,
  postPluginsMlMemoryMemoryIdMessagesRouteHandler,
  postPluginsMlMemoryMemoryIdSearchRouteHandler,
  postPluginsMlMemoryRouteHandler,
  postPluginsMlMemorySearchRouteHandler,
  postPluginsMlModelGroupsRegisterRouteHandler,
  postPluginsMlModelGroupsSearchRouteHandler,
  postPluginsMlModelsMetaRouteHandler,
  postPluginsMlModelsModelIdChunkChunkNumberRouteHandler,
  postPluginsMlModelsModelIdDeployRouteHandler,
  postPluginsMlModelsModelIdLoadRouteHandler,
  postPluginsMlModelsModelIdPredictRouteHandler,
  postPluginsMlModelsModelIdPredictStreamRouteHandler,
  postPluginsMlModelsModelIdUndeployRouteHandler,
  postPluginsMlModelsModelIdUnloadRouteHandler,
  postPluginsMlModelsModelIdUploadChunkChunkNumberRouteHandler,
  postPluginsMlModelsRegisterMetaRouteHandler,
  postPluginsMlModelsRegisterRouteHandler,
  postPluginsMlModelsSearchRouteHandler,
  postPluginsMlModelsUndeployRouteHandler,
  postPluginsMlModelsUnloadRouteHandler,
  postPluginsMlModelsUploadRouteHandler,
  postPluginsMlPredictAlgorithmNameModelIdRouteHandler,
  postPluginsMlTasksSearchRouteHandler,
  postPluginsMlToolsExecuteToolNameRouteHandler,
  postPluginsMlTrainAlgorithmNameRouteHandler,
  postPluginsMlTrainPredictAlgorithmNameRouteHandler,
  postPluginsNotificationsConfigsRouteHandler,
  postPluginsNotificationsFeatureTestConfigIdRouteHandler,
  postPluginsObservabilityObjectRouteHandler,
  postPluginsPplExplainRouteHandler,
  postPluginsPplRouteHandler,
  postPluginsPplStatsRouteHandler,
  postPluginsQueryDatasourcesRouteHandler,
  postPluginsRefreshSearchAnalyzersIndexRouteHandler,
  postPluginsReplicationAutofollowRouteHandler,
  postPluginsReplicationIndexPauseRouteHandler,
  postPluginsReplicationIndexResumeRouteHandler,
  postPluginsReplicationIndexStopRouteHandler,
  postPluginsRollupJobsIdStartRouteHandler,
  postPluginsRollupJobsIdStopRouteHandler,
  postPluginsSearchRelevanceExperimentsScheduleRouteHandler,
  postPluginsSearchRelevanceQuerySetsRouteHandler,
  postPluginsSecurityApiAuthtokenRouteHandler,
  postPluginsSecurityApiCacheRouteHandler,
  postPluginsSecurityApiGenerateonbehalfoftokenRouteHandler,
  postPluginsSecurityApiInternalusersUsernameAuthtokenRouteHandler,
  postPluginsSecurityApiMigrateRouteHandler,
  postPluginsSecurityApiUpgradePerformRouteHandler,
  postPluginsSecurityApiUserUsernameAuthtokenRouteHandler,
  postPluginsSecurityAuthinfoRouteHandler,
  postPluginsSecurityDashboardsinfoRouteHandler,
  postPluginsSecurityHealthRouteHandler,
  postPluginsSecurityTenantinfoRouteHandler,
  postPluginsSecurityWhoamiRouteHandler,
  postPluginsSmPoliciesPolicyNameRouteHandler,
  postPluginsSmPoliciesPolicyNameStartRouteHandler,
  postPluginsSmPoliciesPolicyNameStopRouteHandler,
  postPluginsSqlCloseRouteHandler,
  postPluginsSqlExplainRouteHandler,
  postPluginsSqlRouteHandler,
  postPluginsSqlStatsRouteHandler,
  postPluginsTransformIdStartRouteHandler,
  postPluginsTransformIdStopRouteHandler,
  postPluginsTransformPreviewRouteHandler,
  postPluginsUbiInitializeRouteHandler,
  postRankEvalRouteHandler,
  postRefreshRouteHandler,
  postReindexRouteHandler,
  postReindexTaskIdRethrottleRouteHandler,
  postRemotestoreRestoreRouteHandler,
  postRenderTemplateIdRouteHandler,
  postRenderTemplateRouteHandler,
  postScriptsIdContextRouteHandler,
  postScriptsIdRouteHandler,
  postScriptsPainlessExecuteRouteHandler,
  postSearchRouteHandler,
  postSearchScrollRouteHandler,
  postSearchScrollScrollIdRouteHandler,
  postSearchShardsRouteHandler,
  postSearchTemplateRouteHandler,
  postSnapshotRepositoryCleanupRouteHandler,
  postSnapshotRepositoryRouteHandler,
  postSnapshotRepositorySnapshotRestoreRouteHandler,
  postSnapshotRepositorySnapshotRouteHandler,
  postSnapshotRepositoryVerifyRouteHandler,
  postTasksCancelRouteHandler,
  postTasksTaskIdCancelRouteHandler,
  postTemplateNameRouteHandler,
  postUpdateByQueryTaskIdRethrottleRouteHandler,
  postUpgradeRouteHandler,
  postValidateQueryRouteHandler,
  putAliasesNameRouteHandler,
  putAliasNameRouteHandler,
  putAliasRouteHandler,
  putBulkRouteHandler,
  putBulkStreamRouteHandler,
  putClusterDecommissionAwarenessAwarenessAttributeNameAwarenessAttributeValueRouteHandler,
  putClusterRoutingAwarenessAttributeWeightsRouteHandler,
  putClusterSettingsRouteHandler,
  putComponentTemplateNameRouteHandler,
  putDataStreamNameRouteHandler,
  putIndexAliasesNameRouteHandler,
  putIndexAliasesRouteHandler,
  putIndexAliasNameRouteHandler,
  putIndexAliasRouteHandler,
  putIndexBlockBlockRouteHandler,
  putIndexBulkRouteHandler,
  putIndexBulkStreamRouteHandler,
  putIndexCloneTargetRouteHandler,
  putIndexCreateIdRouteHandler,
  putIndexDocIdRouteHandler,
  putIndexMappingRouteHandler,
  putIndexRouteHandler,
  putIndexSettingsRouteHandler,
  putIndexShrinkTargetRouteHandler,
  putIndexSplitTargetRouteHandler,
  putIndexTemplateNameRouteHandler,
  putIngestPipelineIdRouteHandler,
  putLtrFeatureIdRouteHandler,
  putLtrFeaturesetIdRouteHandler,
  putLtrModelIdRouteHandler,
  putLtrRouteHandler,
  putLtrStoreFeatureIdRouteHandler,
  putLtrStoreFeaturesetIdRouteHandler,
  putLtrStoreModelIdRouteHandler,
  putLtrStoreRouteHandler,
  putOpendistroIsmPoliciesPolicyIdRouteHandler,
  putOpendistroIsmPoliciesRouteHandler,
  putOpendistroRollupJobsIdRouteHandler,
  putOpendistroSecurityApiAccountRouteHandler,
  putOpendistroSecurityApiActiongroupsActionGroupRouteHandler,
  putOpendistroSecurityApiAllowlistRouteHandler,
  putOpendistroSecurityApiAuditConfigRouteHandler,
  putOpendistroSecurityApiCacheRouteHandler,
  putOpendistroSecurityApiInternalusersUsernameRouteHandler,
  putOpendistroSecurityApiNodesdnClusterNameRouteHandler,
  putOpendistroSecurityApiRolesmappingRoleRouteHandler,
  putOpendistroSecurityApiRolesRoleRouteHandler,
  putOpendistroSecurityApiSecurityconfigConfigRouteHandler,
  putOpendistroSecurityApiSslHttpReloadcertsRouteHandler,
  putOpendistroSecurityApiSslTransportReloadcertsRouteHandler,
  putOpendistroSecurityApiTenancyConfigRouteHandler,
  putOpendistroSecurityApiTenantsTenantRouteHandler,
  putOpendistroSecurityApiUserUsernameRouteHandler,
  putOpendistroSqlSettingsRouteHandler,
  putPluginsFlowFrameworkWorkflowWorkflowIdRouteHandler,
  putPluginsGeospatialGeojsonUploadRouteHandler,
  putPluginsGeospatialIp2geoDatasourceNameRouteHandler,
  putPluginsGeospatialIp2geoDatasourceNameSettingsRouteHandler,
  putPluginsIsmPoliciesPolicyIdRouteHandler,
  putPluginsIsmPoliciesRouteHandler,
  putPluginsMlConnectorsConnectorIdRouteHandler,
  putPluginsMlControllersModelIdRouteHandler,
  putPluginsMlMemoryContainersMemoryContainerIdMemoriesTypeIdRouteHandler,
  putPluginsMlMemoryContainersMemoryContainerIdRouteHandler,
  putPluginsMlMemoryMemoryIdRouteHandler,
  putPluginsMlMemoryMessageMessageIdRouteHandler,
  putPluginsMlModelGroupsModelGroupIdRouteHandler,
  putPluginsMlModelsModelIdRouteHandler,
  putPluginsNotificationsConfigsConfigIdRouteHandler,
  putPluginsObservabilityObjectObjectIdRouteHandler,
  putPluginsQueryDatasourcesRouteHandler,
  putPluginsQuerySettingsRouteHandler,
  putPluginsReplicationIndexStartRouteHandler,
  putPluginsReplicationIndexUpdateRouteHandler,
  putPluginsRollupJobsIdRouteHandler,
  putPluginsSearchRelevanceExperimentsRouteHandler,
  putPluginsSearchRelevanceJudgmentsRouteHandler,
  putPluginsSearchRelevanceQuerySetsRouteHandler,
  putPluginsSearchRelevanceSearchConfigurationsRouteHandler,
  putPluginsSecurityApiAccountRouteHandler,
  putPluginsSecurityApiActiongroupsActionGroupRouteHandler,
  putPluginsSecurityApiAllowlistRouteHandler,
  putPluginsSecurityApiAuditConfigRouteHandler,
  putPluginsSecurityApiCacheRouteHandler,
  putPluginsSecurityApiInternalusersUsernameRouteHandler,
  putPluginsSecurityApiNodesdnClusterNameRouteHandler,
  putPluginsSecurityApiRolesmappingRoleRouteHandler,
  putPluginsSecurityApiRolesRoleRouteHandler,
  putPluginsSecurityApiSecurityconfigConfigRouteHandler,
  putPluginsSecurityApiSslHttpReloadcertsRouteHandler,
  putPluginsSecurityApiSslTransportReloadcertsRouteHandler,
  putPluginsSecurityApiTenancyConfigRouteHandler,
  putPluginsSecurityApiTenantsTenantRouteHandler,
  putPluginsSecurityApiUserUsernameRouteHandler,
  putPluginsSmPoliciesPolicyNameRouteHandler,
  putPluginsTransformIdRouteHandler,
  putScriptsIdContextRouteHandler,
  putScriptsIdRouteHandler,
  putSearchPipelineIdRouteHandler,
  putSettingsRouteHandler,
  putSnapshotRepositoryRouteHandler,
  putSnapshotRepositorySnapshotCloneTargetSnapshotRouteHandler,
  putSnapshotRepositorySnapshotRouteHandler,
  putTemplateNameRouteHandler,
  putWlmQueryGroupNameRouteHandler,
  putWlmQueryGroupRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRoute, getRouteHandler)
  .openapi(headRoute, headRouteHandler)
  .openapi(getAliasRoute, getAliasRouteHandler)
  .openapi(putAliasRoute, putAliasRouteHandler)
  .openapi(getAliasNameRoute, getAliasNameRouteHandler)
  .openapi(headAliasNameRoute, headAliasNameRouteHandler)
  .openapi(postAliasNameRoute, postAliasNameRouteHandler)
  .openapi(putAliasNameRoute, putAliasNameRouteHandler)
  .openapi(postAliasesRoute, postAliasesRouteHandler)
  .openapi(postAliasesNameRoute, postAliasesNameRouteHandler)
  .openapi(putAliasesNameRoute, putAliasesNameRouteHandler)
  .openapi(getAnalyzeRoute, getAnalyzeRouteHandler)
  .openapi(postAnalyzeRoute, postAnalyzeRouteHandler)
  .openapi(postBulkRoute, postBulkRouteHandler)
  .openapi(putBulkRoute, putBulkRouteHandler)
  .openapi(postBulkStreamRoute, postBulkStreamRouteHandler)
  .openapi(putBulkStreamRoute, putBulkStreamRouteHandler)
  .openapi(postCacheClearRoute, postCacheClearRouteHandler)
  .openapi(getCatRoute, getCatRouteHandler)
  .openapi(getCatAliasesRoute, getCatAliasesRouteHandler)
  .openapi(getCatAliasesNameRoute, getCatAliasesNameRouteHandler)
  .openapi(getCatAllocationRoute, getCatAllocationRouteHandler)
  .openapi(getCatAllocationNodeIdRoute, getCatAllocationNodeIdRouteHandler)
  .openapi(getCatClusterManagerRoute, getCatClusterManagerRouteHandler)
  .openapi(getCatCountRoute, getCatCountRouteHandler)
  .openapi(getCatCountIndexRoute, getCatCountIndexRouteHandler)
  .openapi(getCatFielddataRoute, getCatFielddataRouteHandler)
  .openapi(getCatFielddataFieldsRoute, getCatFielddataFieldsRouteHandler)
  .openapi(getCatHealthRoute, getCatHealthRouteHandler)
  .openapi(getCatIndicesRoute, getCatIndicesRouteHandler)
  .openapi(getCatIndicesIndexRoute, getCatIndicesIndexRouteHandler)
  .openapi(getCatMasterRoute, getCatMasterRouteHandler)
  .openapi(getCatNodeattrsRoute, getCatNodeattrsRouteHandler)
  .openapi(getCatNodesRoute, getCatNodesRouteHandler)
  .openapi(getCatPendingTasksRoute, getCatPendingTasksRouteHandler)
  .openapi(getCatPitSegmentsRoute, getCatPitSegmentsRouteHandler)
  .openapi(getCatPitSegmentsAllRoute, getCatPitSegmentsAllRouteHandler)
  .openapi(getCatPluginsRoute, getCatPluginsRouteHandler)
  .openapi(getCatRecoveryRoute, getCatRecoveryRouteHandler)
  .openapi(getCatRecoveryIndexRoute, getCatRecoveryIndexRouteHandler)
  .openapi(getCatRepositoriesRoute, getCatRepositoriesRouteHandler)
  .openapi(getCatSegmentReplicationRoute, getCatSegmentReplicationRouteHandler)
  .openapi(getCatSegmentReplicationIndexRoute, getCatSegmentReplicationIndexRouteHandler)
  .openapi(getCatSegmentsRoute, getCatSegmentsRouteHandler)
  .openapi(getCatSegmentsIndexRoute, getCatSegmentsIndexRouteHandler)
  .openapi(getCatShardsRoute, getCatShardsRouteHandler)
  .openapi(getCatShardsIndexRoute, getCatShardsIndexRouteHandler)
  .openapi(getCatSnapshotsRoute, getCatSnapshotsRouteHandler)
  .openapi(getCatSnapshotsRepositoryRoute, getCatSnapshotsRepositoryRouteHandler)
  .openapi(getCatTasksRoute, getCatTasksRouteHandler)
  .openapi(getCatTemplatesRoute, getCatTemplatesRouteHandler)
  .openapi(getCatTemplatesNameRoute, getCatTemplatesNameRouteHandler)
  .openapi(getCatThreadPoolRoute, getCatThreadPoolRouteHandler)
  .openapi(getCatThreadPoolThreadPoolPatternsRoute, getCatThreadPoolThreadPoolPatternsRouteHandler)
  .openapi(getClusterAllocationExplainRoute, getClusterAllocationExplainRouteHandler)
  .openapi(postClusterAllocationExplainRoute, postClusterAllocationExplainRouteHandler)
  .openapi(deleteClusterDecommissionAwarenessRoute, deleteClusterDecommissionAwarenessRouteHandler)
  .openapi(
    getClusterDecommissionAwarenessAwarenessAttributeNameStatusRoute,
    getClusterDecommissionAwarenessAwarenessAttributeNameStatusRouteHandler,
  )
  .openapi(
    putClusterDecommissionAwarenessAwarenessAttributeNameAwarenessAttributeValueRoute,
    putClusterDecommissionAwarenessAwarenessAttributeNameAwarenessAttributeValueRouteHandler,
  )
  .openapi(getClusterHealthRoute, getClusterHealthRouteHandler)
  .openapi(getClusterHealthIndexRoute, getClusterHealthIndexRouteHandler)
  .openapi(getClusterNodesNodeIdHotThreadsRoute, getClusterNodesNodeIdHotThreadsRouteHandler)
  .openapi(getClusterNodesHotThreadsRoute, getClusterNodesHotThreadsRouteHandler)
  .openapi(getClusterPendingTasksRoute, getClusterPendingTasksRouteHandler)
  .openapi(postClusterRerouteRoute, postClusterRerouteRouteHandler)
  .openapi(
    getClusterRoutingAwarenessAttributeWeightsRoute,
    getClusterRoutingAwarenessAttributeWeightsRouteHandler,
  )
  .openapi(
    putClusterRoutingAwarenessAttributeWeightsRoute,
    putClusterRoutingAwarenessAttributeWeightsRouteHandler,
  )
  .openapi(
    deleteClusterRoutingAwarenessWeightsRoute,
    deleteClusterRoutingAwarenessWeightsRouteHandler,
  )
  .openapi(getClusterSettingsRoute, getClusterSettingsRouteHandler)
  .openapi(putClusterSettingsRoute, putClusterSettingsRouteHandler)
  .openapi(getClusterStateRoute, getClusterStateRouteHandler)
  .openapi(getClusterStateMetricRoute, getClusterStateMetricRouteHandler)
  .openapi(getClusterStateMetricIndexRoute, getClusterStateMetricIndexRouteHandler)
  .openapi(getClusterStatsRoute, getClusterStatsRouteHandler)
  .openapi(
    getClusterStatsMetricIndexMetricNodesNodeIdRoute,
    getClusterStatsMetricIndexMetricNodesNodeIdRouteHandler,
  )
  .openapi(getClusterStatsMetricNodesNodeIdRoute, getClusterStatsMetricNodesNodeIdRouteHandler)
  .openapi(getClusterStatsNodesNodeIdRoute, getClusterStatsNodesNodeIdRouteHandler)
  .openapi(
    deleteClusterVotingConfigExclusionsRoute,
    deleteClusterVotingConfigExclusionsRouteHandler,
  )
  .openapi(postClusterVotingConfigExclusionsRoute, postClusterVotingConfigExclusionsRouteHandler)
  .openapi(getComponentTemplateRoute, getComponentTemplateRouteHandler)
  .openapi(deleteComponentTemplateNameRoute, deleteComponentTemplateNameRouteHandler)
  .openapi(getComponentTemplateNameRoute, getComponentTemplateNameRouteHandler)
  .openapi(headComponentTemplateNameRoute, headComponentTemplateNameRouteHandler)
  .openapi(postComponentTemplateNameRoute, postComponentTemplateNameRouteHandler)
  .openapi(putComponentTemplateNameRoute, putComponentTemplateNameRouteHandler)
  .openapi(getCountRoute, getCountRouteHandler)
  .openapi(postCountRoute, postCountRouteHandler)
  .openapi(getDanglingRoute, getDanglingRouteHandler)
  .openapi(deleteDanglingIndexUuidRoute, deleteDanglingIndexUuidRouteHandler)
  .openapi(postDanglingIndexUuidRoute, postDanglingIndexUuidRouteHandler)
  .openapi(getDataStreamRoute, getDataStreamRouteHandler)
  .openapi(getDataStreamStatsRoute, getDataStreamStatsRouteHandler)
  .openapi(deleteDataStreamNameRoute, deleteDataStreamNameRouteHandler)
  .openapi(getDataStreamNameRoute, getDataStreamNameRouteHandler)
  .openapi(putDataStreamNameRoute, putDataStreamNameRouteHandler)
  .openapi(getDataStreamNameStatsRoute, getDataStreamNameStatsRouteHandler)
  .openapi(postDeleteByQueryTaskIdRethrottleRoute, postDeleteByQueryTaskIdRethrottleRouteHandler)
  .openapi(getFieldCapsRoute, getFieldCapsRouteHandler)
  .openapi(postFieldCapsRoute, postFieldCapsRouteHandler)
  .openapi(getFlushRoute, getFlushRouteHandler)
  .openapi(postFlushRoute, postFlushRouteHandler)
  .openapi(postForcemergeRoute, postForcemergeRouteHandler)
  .openapi(getIndexTemplateRoute, getIndexTemplateRouteHandler)
  .openapi(postIndexTemplateSimulateRoute, postIndexTemplateSimulateRouteHandler)
  .openapi(postIndexTemplateSimulateIndexNameRoute, postIndexTemplateSimulateIndexNameRouteHandler)
  .openapi(postIndexTemplateSimulateNameRoute, postIndexTemplateSimulateNameRouteHandler)
  .openapi(deleteIndexTemplateNameRoute, deleteIndexTemplateNameRouteHandler)
  .openapi(getIndexTemplateNameRoute, getIndexTemplateNameRouteHandler)
  .openapi(headIndexTemplateNameRoute, headIndexTemplateNameRouteHandler)
  .openapi(postIndexTemplateNameRoute, postIndexTemplateNameRouteHandler)
  .openapi(putIndexTemplateNameRoute, putIndexTemplateNameRouteHandler)
  .openapi(getIngestPipelineRoute, getIngestPipelineRouteHandler)
  .openapi(getIngestPipelineSimulateRoute, getIngestPipelineSimulateRouteHandler)
  .openapi(postIngestPipelineSimulateRoute, postIngestPipelineSimulateRouteHandler)
  .openapi(deleteIngestPipelineIdRoute, deleteIngestPipelineIdRouteHandler)
  .openapi(getIngestPipelineIdRoute, getIngestPipelineIdRouteHandler)
  .openapi(putIngestPipelineIdRoute, putIngestPipelineIdRouteHandler)
  .openapi(getIngestPipelineIdSimulateRoute, getIngestPipelineIdSimulateRouteHandler)
  .openapi(postIngestPipelineIdSimulateRoute, postIngestPipelineIdSimulateRouteHandler)
  .openapi(getIngestProcessorGrokRoute, getIngestProcessorGrokRouteHandler)
  .openapi(getInsightsTopQueriesRoute, getInsightsTopQueriesRouteHandler)
  .openapi(getListRoute, getListRouteHandler)
  .openapi(getListIndicesRoute, getListIndicesRouteHandler)
  .openapi(getListIndicesIndexRoute, getListIndicesIndexRouteHandler)
  .openapi(getListShardsRoute, getListShardsRouteHandler)
  .openapi(getListShardsIndexRoute, getListShardsIndexRouteHandler)
  .openapi(deleteLtrRoute, deleteLtrRouteHandler)
  .openapi(getLtrRoute, getLtrRouteHandler)
  .openapi(putLtrRoute, putLtrRouteHandler)
  .openapi(getLtrCachestatsRoute, getLtrCachestatsRouteHandler)
  .openapi(postLtrClearcacheRoute, postLtrClearcacheRouteHandler)
  .openapi(getLtrFeatureRoute, getLtrFeatureRouteHandler)
  .openapi(deleteLtrFeatureIdRoute, deleteLtrFeatureIdRouteHandler)
  .openapi(getLtrFeatureIdRoute, getLtrFeatureIdRouteHandler)
  .openapi(postLtrFeatureIdRoute, postLtrFeatureIdRouteHandler)
  .openapi(putLtrFeatureIdRoute, putLtrFeatureIdRouteHandler)
  .openapi(getLtrFeaturesetRoute, getLtrFeaturesetRouteHandler)
  .openapi(deleteLtrFeaturesetIdRoute, deleteLtrFeaturesetIdRouteHandler)
  .openapi(getLtrFeaturesetIdRoute, getLtrFeaturesetIdRouteHandler)
  .openapi(postLtrFeaturesetIdRoute, postLtrFeaturesetIdRouteHandler)
  .openapi(putLtrFeaturesetIdRoute, putLtrFeaturesetIdRouteHandler)
  .openapi(postLtrFeaturesetNameAddfeaturesRoute, postLtrFeaturesetNameAddfeaturesRouteHandler)
  .openapi(
    postLtrFeaturesetNameAddfeaturesQueryRoute,
    postLtrFeaturesetNameAddfeaturesQueryRouteHandler,
  )
  .openapi(postLtrFeaturesetNameCreatemodelRoute, postLtrFeaturesetNameCreatemodelRouteHandler)
  .openapi(getLtrModelRoute, getLtrModelRouteHandler)
  .openapi(deleteLtrModelIdRoute, deleteLtrModelIdRouteHandler)
  .openapi(getLtrModelIdRoute, getLtrModelIdRouteHandler)
  .openapi(putLtrModelIdRoute, putLtrModelIdRouteHandler)
  .openapi(deleteLtrStoreRoute, deleteLtrStoreRouteHandler)
  .openapi(getLtrStoreRoute, getLtrStoreRouteHandler)
  .openapi(putLtrStoreRoute, putLtrStoreRouteHandler)
  .openapi(postLtrStoreClearcacheRoute, postLtrStoreClearcacheRouteHandler)
  .openapi(getLtrStoreFeatureRoute, getLtrStoreFeatureRouteHandler)
  .openapi(deleteLtrStoreFeatureIdRoute, deleteLtrStoreFeatureIdRouteHandler)
  .openapi(getLtrStoreFeatureIdRoute, getLtrStoreFeatureIdRouteHandler)
  .openapi(postLtrStoreFeatureIdRoute, postLtrStoreFeatureIdRouteHandler)
  .openapi(putLtrStoreFeatureIdRoute, putLtrStoreFeatureIdRouteHandler)
  .openapi(getLtrStoreFeaturesetRoute, getLtrStoreFeaturesetRouteHandler)
  .openapi(deleteLtrStoreFeaturesetIdRoute, deleteLtrStoreFeaturesetIdRouteHandler)
  .openapi(getLtrStoreFeaturesetIdRoute, getLtrStoreFeaturesetIdRouteHandler)
  .openapi(postLtrStoreFeaturesetIdRoute, postLtrStoreFeaturesetIdRouteHandler)
  .openapi(putLtrStoreFeaturesetIdRoute, putLtrStoreFeaturesetIdRouteHandler)
  .openapi(
    postLtrStoreFeaturesetNameAddfeaturesRoute,
    postLtrStoreFeaturesetNameAddfeaturesRouteHandler,
  )
  .openapi(
    postLtrStoreFeaturesetNameAddfeaturesQueryRoute,
    postLtrStoreFeaturesetNameAddfeaturesQueryRouteHandler,
  )
  .openapi(
    postLtrStoreFeaturesetNameCreatemodelRoute,
    postLtrStoreFeaturesetNameCreatemodelRouteHandler,
  )
  .openapi(getLtrStoreModelRoute, getLtrStoreModelRouteHandler)
  .openapi(deleteLtrStoreModelIdRoute, deleteLtrStoreModelIdRouteHandler)
  .openapi(getLtrStoreModelIdRoute, getLtrStoreModelIdRouteHandler)
  .openapi(putLtrStoreModelIdRoute, putLtrStoreModelIdRouteHandler)
  .openapi(getMappingRoute, getMappingRouteHandler)
  .openapi(getMappingFieldFieldsRoute, getMappingFieldFieldsRouteHandler)
  .openapi(getMgetRoute, getMgetRouteHandler)
  .openapi(postMgetRoute, postMgetRouteHandler)
  .openapi(getMsearchRoute, getMsearchRouteHandler)
  .openapi(postMsearchRoute, postMsearchRouteHandler)
  .openapi(getMsearchTemplateRoute, getMsearchTemplateRouteHandler)
  .openapi(postMsearchTemplateRoute, postMsearchTemplateRouteHandler)
  .openapi(getMtermvectorsRoute, getMtermvectorsRouteHandler)
  .openapi(postMtermvectorsRoute, postMtermvectorsRouteHandler)
  .openapi(getNodesRoute, getNodesRouteHandler)
  .openapi(getNodesNodeIdOrMetricRoute, getNodesNodeIdOrMetricRouteHandler)
  .openapi(getNodesNodeIdMetricRoute, getNodesNodeIdMetricRouteHandler)
  .openapi(getNodesNodeIdHotThreadsRoute, getNodesNodeIdHotThreadsRouteHandler)
  .openapi(
    postNodesNodeIdReloadSecureSettingsRoute,
    postNodesNodeIdReloadSecureSettingsRouteHandler,
  )
  .openapi(getNodesNodeIdStatsRoute, getNodesNodeIdStatsRouteHandler)
  .openapi(getNodesNodeIdStatsMetricRoute, getNodesNodeIdStatsMetricRouteHandler)
  .openapi(
    getNodesNodeIdStatsMetricIndexMetricRoute,
    getNodesNodeIdStatsMetricIndexMetricRouteHandler,
  )
  .openapi(getNodesNodeIdUsageRoute, getNodesNodeIdUsageRouteHandler)
  .openapi(getNodesNodeIdUsageMetricRoute, getNodesNodeIdUsageMetricRouteHandler)
  .openapi(getNodesHotThreadsRoute, getNodesHotThreadsRouteHandler)
  .openapi(postNodesReloadSecureSettingsRoute, postNodesReloadSecureSettingsRouteHandler)
  .openapi(getNodesStatsRoute, getNodesStatsRouteHandler)
  .openapi(getNodesStatsMetricRoute, getNodesStatsMetricRouteHandler)
  .openapi(getNodesStatsMetricIndexMetricRoute, getNodesStatsMetricIndexMetricRouteHandler)
  .openapi(getNodesUsageRoute, getNodesUsageRouteHandler)
  .openapi(getNodesUsageMetricRoute, getNodesUsageMetricRouteHandler)
  .openapi(getOpendistroSecuritySslinfoRoute, getOpendistroSecuritySslinfoRouteHandler)
  .openapi(postPluginsAsynchronousSearchRoute, postPluginsAsynchronousSearchRouteHandler)
  .openapi(deletePluginsAsynchronousSearchIdRoute, deletePluginsAsynchronousSearchIdRouteHandler)
  .openapi(getPluginsAsynchronousSearchIdRoute, getPluginsAsynchronousSearchIdRouteHandler)
  .openapi(getPluginsAsynchronousSearchStatsRoute, getPluginsAsynchronousSearchStatsRouteHandler)
  .openapi(postPluginsFlowFrameworkWorkflowRoute, postPluginsFlowFrameworkWorkflowRouteHandler)
  .openapi(
    getPluginsFlowFrameworkWorkflowSearchRoute,
    getPluginsFlowFrameworkWorkflowSearchRouteHandler,
  )
  .openapi(
    postPluginsFlowFrameworkWorkflowSearchRoute,
    postPluginsFlowFrameworkWorkflowSearchRouteHandler,
  )
  .openapi(
    getPluginsFlowFrameworkWorkflowStepsRoute,
    getPluginsFlowFrameworkWorkflowStepsRouteHandler,
  )
  .openapi(
    deletePluginsFlowFrameworkWorkflowWorkflowIdRoute,
    deletePluginsFlowFrameworkWorkflowWorkflowIdRouteHandler,
  )
  .openapi(
    getPluginsFlowFrameworkWorkflowWorkflowIdRoute,
    getPluginsFlowFrameworkWorkflowWorkflowIdRouteHandler,
  )
  .openapi(
    putPluginsFlowFrameworkWorkflowWorkflowIdRoute,
    putPluginsFlowFrameworkWorkflowWorkflowIdRouteHandler,
  )
  .openapi(
    postPluginsFlowFrameworkWorkflowWorkflowIdDeprovisionRoute,
    postPluginsFlowFrameworkWorkflowWorkflowIdDeprovisionRouteHandler,
  )
  .openapi(
    postPluginsFlowFrameworkWorkflowWorkflowIdProvisionRoute,
    postPluginsFlowFrameworkWorkflowWorkflowIdProvisionRouteHandler,
  )
  .openapi(
    getPluginsFlowFrameworkWorkflowWorkflowIdStatusRoute,
    getPluginsFlowFrameworkWorkflowWorkflowIdStatusRouteHandler,
  )
  .openapi(
    getPluginsFlowFrameworkWorkflowStateSearchRoute,
    getPluginsFlowFrameworkWorkflowStateSearchRouteHandler,
  )
  .openapi(
    postPluginsFlowFrameworkWorkflowStateSearchRoute,
    postPluginsFlowFrameworkWorkflowStateSearchRouteHandler,
  )
  .openapi(postPluginsIsmAddRoute, postPluginsIsmAddRouteHandler)
  .openapi(postPluginsIsmAddIndexRoute, postPluginsIsmAddIndexRouteHandler)
  .openapi(postPluginsIsmChangePolicyRoute, postPluginsIsmChangePolicyRouteHandler)
  .openapi(postPluginsIsmChangePolicyIndexRoute, postPluginsIsmChangePolicyIndexRouteHandler)
  .openapi(getPluginsIsmExplainRoute, getPluginsIsmExplainRouteHandler)
  .openapi(postPluginsIsmExplainRoute, postPluginsIsmExplainRouteHandler)
  .openapi(getPluginsIsmExplainIndexRoute, getPluginsIsmExplainIndexRouteHandler)
  .openapi(postPluginsIsmExplainIndexRoute, postPluginsIsmExplainIndexRouteHandler)
  .openapi(getPluginsIsmPoliciesRoute, getPluginsIsmPoliciesRouteHandler)
  .openapi(putPluginsIsmPoliciesRoute, putPluginsIsmPoliciesRouteHandler)
  .openapi(deletePluginsIsmPoliciesPolicyIdRoute, deletePluginsIsmPoliciesPolicyIdRouteHandler)
  .openapi(getPluginsIsmPoliciesPolicyIdRoute, getPluginsIsmPoliciesPolicyIdRouteHandler)
  .openapi(headPluginsIsmPoliciesPolicyIdRoute, headPluginsIsmPoliciesPolicyIdRouteHandler)
  .openapi(putPluginsIsmPoliciesPolicyIdRoute, putPluginsIsmPoliciesPolicyIdRouteHandler)
  .openapi(postPluginsIsmRemoveRoute, postPluginsIsmRemoveRouteHandler)
  .openapi(postPluginsIsmRemoveIndexRoute, postPluginsIsmRemoveIndexRouteHandler)
  .openapi(postPluginsIsmRetryRoute, postPluginsIsmRetryRouteHandler)
  .openapi(postPluginsIsmRetryIndexRoute, postPluginsIsmRetryIndexRouteHandler)
  .openapi(getPluginsKnnNodeIdStatsRoute, getPluginsKnnNodeIdStatsRouteHandler)
  .openapi(getPluginsKnnNodeIdStatsStatRoute, getPluginsKnnNodeIdStatsStatRouteHandler)
  .openapi(getPluginsKnnModelsSearchRoute, getPluginsKnnModelsSearchRouteHandler)
  .openapi(postPluginsKnnModelsSearchRoute, postPluginsKnnModelsSearchRouteHandler)
  .openapi(postPluginsKnnModelsTrainRoute, postPluginsKnnModelsTrainRouteHandler)
  .openapi(deletePluginsKnnModelsModelIdRoute, deletePluginsKnnModelsModelIdRouteHandler)
  .openapi(getPluginsKnnModelsModelIdRoute, getPluginsKnnModelsModelIdRouteHandler)
  .openapi(postPluginsKnnModelsModelIdTrainRoute, postPluginsKnnModelsModelIdTrainRouteHandler)
  .openapi(getPluginsKnnStatsRoute, getPluginsKnnStatsRouteHandler)
  .openapi(getPluginsKnnStatsStatRoute, getPluginsKnnStatsStatRouteHandler)
  .openapi(getPluginsKnnWarmupIndexRoute, getPluginsKnnWarmupIndexRouteHandler)
  .openapi(getPluginsLtrNodeIdStatsRoute, getPluginsLtrNodeIdStatsRouteHandler)
  .openapi(getPluginsLtrNodeIdStatsStatRoute, getPluginsLtrNodeIdStatsStatRouteHandler)
  .openapi(getPluginsLtrStatsRoute, getPluginsLtrStatsRouteHandler)
  .openapi(getPluginsLtrStatsStatRoute, getPluginsLtrStatsStatRouteHandler)
  .openapi(postPluginsMlExecuteAlgorithmNameRoute, postPluginsMlExecuteAlgorithmNameRouteHandler)
  .openapi(
    postPluginsMlPredictAlgorithmNameModelIdRoute,
    postPluginsMlPredictAlgorithmNameModelIdRouteHandler,
  )
  .openapi(
    postPluginsMlTrainPredictAlgorithmNameRoute,
    postPluginsMlTrainPredictAlgorithmNameRouteHandler,
  )
  .openapi(postPluginsMlTrainAlgorithmNameRoute, postPluginsMlTrainAlgorithmNameRouteHandler)
  .openapi(getPluginsMlNodeIdStatsRoute, getPluginsMlNodeIdStatsRouteHandler)
  .openapi(getPluginsMlNodeIdStatsStatRoute, getPluginsMlNodeIdStatsStatRouteHandler)
  .openapi(postPluginsMlAgentsRegisterRoute, postPluginsMlAgentsRegisterRouteHandler)
  .openapi(getPluginsMlAgentsSearchRoute, getPluginsMlAgentsSearchRouteHandler)
  .openapi(postPluginsMlAgentsSearchRoute, postPluginsMlAgentsSearchRouteHandler)
  .openapi(deletePluginsMlAgentsAgentIdRoute, deletePluginsMlAgentsAgentIdRouteHandler)
  .openapi(getPluginsMlAgentsAgentIdRoute, getPluginsMlAgentsAgentIdRouteHandler)
  .openapi(postPluginsMlAgentsAgentIdExecuteRoute, postPluginsMlAgentsAgentIdExecuteRouteHandler)
  .openapi(
    postPluginsMlAgentsAgentIdExecuteStreamRoute,
    postPluginsMlAgentsAgentIdExecuteStreamRouteHandler,
  )
  .openapi(postPluginsMlConnectorsCreateRoute, postPluginsMlConnectorsCreateRouteHandler)
  .openapi(getPluginsMlConnectorsSearchRoute, getPluginsMlConnectorsSearchRouteHandler)
  .openapi(postPluginsMlConnectorsSearchRoute, postPluginsMlConnectorsSearchRouteHandler)
  .openapi(
    deletePluginsMlConnectorsConnectorIdRoute,
    deletePluginsMlConnectorsConnectorIdRouteHandler,
  )
  .openapi(getPluginsMlConnectorsConnectorIdRoute, getPluginsMlConnectorsConnectorIdRouteHandler)
  .openapi(putPluginsMlConnectorsConnectorIdRoute, putPluginsMlConnectorsConnectorIdRouteHandler)
  .openapi(deletePluginsMlControllersModelIdRoute, deletePluginsMlControllersModelIdRouteHandler)
  .openapi(getPluginsMlControllersModelIdRoute, getPluginsMlControllersModelIdRouteHandler)
  .openapi(postPluginsMlControllersModelIdRoute, postPluginsMlControllersModelIdRouteHandler)
  .openapi(putPluginsMlControllersModelIdRoute, putPluginsMlControllersModelIdRouteHandler)
  .openapi(getPluginsMlMemoryRoute, getPluginsMlMemoryRouteHandler)
  .openapi(postPluginsMlMemoryRoute, postPluginsMlMemoryRouteHandler)
  .openapi(
    postPluginsMlMemoryContainersCreateRoute,
    postPluginsMlMemoryContainersCreateRouteHandler,
  )
  .openapi(getPluginsMlMemoryContainersSearchRoute, getPluginsMlMemoryContainersSearchRouteHandler)
  .openapi(
    postPluginsMlMemoryContainersSearchRoute,
    postPluginsMlMemoryContainersSearchRouteHandler,
  )
  .openapi(
    deletePluginsMlMemoryContainersMemoryContainerIdRoute,
    deletePluginsMlMemoryContainersMemoryContainerIdRouteHandler,
  )
  .openapi(
    getPluginsMlMemoryContainersMemoryContainerIdRoute,
    getPluginsMlMemoryContainersMemoryContainerIdRouteHandler,
  )
  .openapi(
    putPluginsMlMemoryContainersMemoryContainerIdRoute,
    putPluginsMlMemoryContainersMemoryContainerIdRouteHandler,
  )
  .openapi(
    postPluginsMlMemoryContainersMemoryContainerIdMemoriesRoute,
    postPluginsMlMemoryContainersMemoryContainerIdMemoriesRouteHandler,
  )
  .openapi(
    postPluginsMlMemoryContainersMemoryContainerIdMemoriesTypeDeleteByQueryRoute,
    postPluginsMlMemoryContainersMemoryContainerIdMemoriesTypeDeleteByQueryRouteHandler,
  )
  .openapi(
    getPluginsMlMemoryContainersMemoryContainerIdMemoriesTypeSearchRoute,
    getPluginsMlMemoryContainersMemoryContainerIdMemoriesTypeSearchRouteHandler,
  )
  .openapi(
    deletePluginsMlMemoryContainersMemoryContainerIdMemoriesTypeIdRoute,
    deletePluginsMlMemoryContainersMemoryContainerIdMemoriesTypeIdRouteHandler,
  )
  .openapi(
    getPluginsMlMemoryContainersMemoryContainerIdMemoriesTypeIdRoute,
    getPluginsMlMemoryContainersMemoryContainerIdMemoriesTypeIdRouteHandler,
  )
  .openapi(
    putPluginsMlMemoryContainersMemoryContainerIdMemoriesTypeIdRoute,
    putPluginsMlMemoryContainersMemoryContainerIdMemoriesTypeIdRouteHandler,
  )
  .openapi(
    postPluginsMlMemoryContainersMemoryContainerIdMemoriesSessionsRoute,
    postPluginsMlMemoryContainersMemoryContainerIdMemoriesSessionsRouteHandler,
  )
  .openapi(getPluginsMlMemorySearchRoute, getPluginsMlMemorySearchRouteHandler)
  .openapi(postPluginsMlMemorySearchRoute, postPluginsMlMemorySearchRouteHandler)
  .openapi(deletePluginsMlMemoryMemoryIdRoute, deletePluginsMlMemoryMemoryIdRouteHandler)
  .openapi(getPluginsMlMemoryMemoryIdRoute, getPluginsMlMemoryMemoryIdRouteHandler)
  .openapi(putPluginsMlMemoryMemoryIdRoute, putPluginsMlMemoryMemoryIdRouteHandler)
  .openapi(getPluginsMlMemoryMemoryIdSearchRoute, getPluginsMlMemoryMemoryIdSearchRouteHandler)
  .openapi(postPluginsMlMemoryMemoryIdSearchRoute, postPluginsMlMemoryMemoryIdSearchRouteHandler)
  .openapi(getPluginsMlMemoryMemoryIdMessagesRoute, getPluginsMlMemoryMemoryIdMessagesRouteHandler)
  .openapi(
    postPluginsMlMemoryMemoryIdMessagesRoute,
    postPluginsMlMemoryMemoryIdMessagesRouteHandler,
  )
  .openapi(getPluginsMlMemoryMessageMessageIdRoute, getPluginsMlMemoryMessageMessageIdRouteHandler)
  .openapi(putPluginsMlMemoryMessageMessageIdRoute, putPluginsMlMemoryMessageMessageIdRouteHandler)
  .openapi(
    getPluginsMlMemoryMessageMessageIdTracesRoute,
    getPluginsMlMemoryMessageMessageIdTracesRouteHandler,
  )
  .openapi(postPluginsMlModelGroupsRegisterRoute, postPluginsMlModelGroupsRegisterRouteHandler)
  .openapi(getPluginsMlModelGroupsSearchRoute, getPluginsMlModelGroupsSearchRouteHandler)
  .openapi(postPluginsMlModelGroupsSearchRoute, postPluginsMlModelGroupsSearchRouteHandler)
  .openapi(
    deletePluginsMlModelGroupsModelGroupIdRoute,
    deletePluginsMlModelGroupsModelGroupIdRouteHandler,
  )
  .openapi(
    getPluginsMlModelGroupsModelGroupIdRoute,
    getPluginsMlModelGroupsModelGroupIdRouteHandler,
  )
  .openapi(
    putPluginsMlModelGroupsModelGroupIdRoute,
    putPluginsMlModelGroupsModelGroupIdRouteHandler,
  )
  .openapi(postPluginsMlModelsRegisterRoute, postPluginsMlModelsRegisterRouteHandler)
  .openapi(postPluginsMlModelsRegisterMetaRoute, postPluginsMlModelsRegisterMetaRouteHandler)
  .openapi(getPluginsMlModelsSearchRoute, getPluginsMlModelsSearchRouteHandler)
  .openapi(postPluginsMlModelsSearchRoute, postPluginsMlModelsSearchRouteHandler)
  .openapi(postPluginsMlModelsUndeployRoute, postPluginsMlModelsUndeployRouteHandler)
  .openapi(postPluginsMlModelsUnloadRoute, postPluginsMlModelsUnloadRouteHandler)
  .openapi(postPluginsMlModelsUploadRoute, postPluginsMlModelsUploadRouteHandler)
  .openapi(deletePluginsMlModelsModelIdRoute, deletePluginsMlModelsModelIdRouteHandler)
  .openapi(getPluginsMlModelsModelIdRoute, getPluginsMlModelsModelIdRouteHandler)
  .openapi(putPluginsMlModelsModelIdRoute, putPluginsMlModelsModelIdRouteHandler)
  .openapi(postPluginsMlModelsModelIdDeployRoute, postPluginsMlModelsModelIdDeployRouteHandler)
  .openapi(postPluginsMlModelsModelIdLoadRoute, postPluginsMlModelsModelIdLoadRouteHandler)
  .openapi(postPluginsMlModelsModelIdPredictRoute, postPluginsMlModelsModelIdPredictRouteHandler)
  .openapi(
    postPluginsMlModelsModelIdPredictStreamRoute,
    postPluginsMlModelsModelIdPredictStreamRouteHandler,
  )
  .openapi(postPluginsMlModelsModelIdUndeployRoute, postPluginsMlModelsModelIdUndeployRouteHandler)
  .openapi(postPluginsMlModelsModelIdUnloadRoute, postPluginsMlModelsModelIdUnloadRouteHandler)
  .openapi(
    postPluginsMlModelsModelIdChunkChunkNumberRoute,
    postPluginsMlModelsModelIdChunkChunkNumberRouteHandler,
  )
  .openapi(
    postPluginsMlModelsModelIdUploadChunkChunkNumberRoute,
    postPluginsMlModelsModelIdUploadChunkChunkNumberRouteHandler,
  )
  .openapi(postPluginsMlModelsMetaRoute, postPluginsMlModelsMetaRouteHandler)
  .openapi(getPluginsMlProfileRoute, getPluginsMlProfileRouteHandler)
  .openapi(getPluginsMlProfileModelsRoute, getPluginsMlProfileModelsRouteHandler)
  .openapi(getPluginsMlProfileModelsModelIdRoute, getPluginsMlProfileModelsModelIdRouteHandler)
  .openapi(getPluginsMlProfileTasksRoute, getPluginsMlProfileTasksRouteHandler)
  .openapi(getPluginsMlProfileTasksTaskIdRoute, getPluginsMlProfileTasksTaskIdRouteHandler)
  .openapi(getPluginsMlStatsRoute, getPluginsMlStatsRouteHandler)
  .openapi(getPluginsMlStatsStatRoute, getPluginsMlStatsStatRouteHandler)
  .openapi(getPluginsMlTasksSearchRoute, getPluginsMlTasksSearchRouteHandler)
  .openapi(postPluginsMlTasksSearchRoute, postPluginsMlTasksSearchRouteHandler)
  .openapi(deletePluginsMlTasksTaskIdRoute, deletePluginsMlTasksTaskIdRouteHandler)
  .openapi(getPluginsMlTasksTaskIdRoute, getPluginsMlTasksTaskIdRouteHandler)
  .openapi(getPluginsMlToolsRoute, getPluginsMlToolsRouteHandler)
  .openapi(postPluginsMlToolsExecuteToolNameRoute, postPluginsMlToolsExecuteToolNameRouteHandler)
  .openapi(getPluginsMlToolsToolNameRoute, getPluginsMlToolsToolNameRouteHandler)
  .openapi(getPluginsNeuralNodeIdStatsRoute, getPluginsNeuralNodeIdStatsRouteHandler)
  .openapi(getPluginsNeuralNodeIdStatsStatRoute, getPluginsNeuralNodeIdStatsStatRouteHandler)
  .openapi(getPluginsNeuralStatsRoute, getPluginsNeuralStatsRouteHandler)
  .openapi(getPluginsNeuralStatsStatRoute, getPluginsNeuralStatsStatRouteHandler)
  .openapi(getPluginsNotificationsChannelsRoute, getPluginsNotificationsChannelsRouteHandler)
  .openapi(deletePluginsNotificationsConfigsRoute, deletePluginsNotificationsConfigsRouteHandler)
  .openapi(getPluginsNotificationsConfigsRoute, getPluginsNotificationsConfigsRouteHandler)
  .openapi(postPluginsNotificationsConfigsRoute, postPluginsNotificationsConfigsRouteHandler)
  .openapi(
    deletePluginsNotificationsConfigsConfigIdRoute,
    deletePluginsNotificationsConfigsConfigIdRouteHandler,
  )
  .openapi(
    getPluginsNotificationsConfigsConfigIdRoute,
    getPluginsNotificationsConfigsConfigIdRouteHandler,
  )
  .openapi(
    putPluginsNotificationsConfigsConfigIdRoute,
    putPluginsNotificationsConfigsConfigIdRouteHandler,
  )
  .openapi(
    getPluginsNotificationsFeatureTestConfigIdRoute,
    getPluginsNotificationsFeatureTestConfigIdRouteHandler,
  )
  .openapi(
    postPluginsNotificationsFeatureTestConfigIdRoute,
    postPluginsNotificationsFeatureTestConfigIdRouteHandler,
  )
  .openapi(getPluginsNotificationsFeaturesRoute, getPluginsNotificationsFeaturesRouteHandler)
  .openapi(getPluginsObservabilityLocalStatsRoute, getPluginsObservabilityLocalStatsRouteHandler)
  .openapi(deletePluginsObservabilityObjectRoute, deletePluginsObservabilityObjectRouteHandler)
  .openapi(getPluginsObservabilityObjectRoute, getPluginsObservabilityObjectRouteHandler)
  .openapi(postPluginsObservabilityObjectRoute, postPluginsObservabilityObjectRouteHandler)
  .openapi(
    deletePluginsObservabilityObjectObjectIdRoute,
    deletePluginsObservabilityObjectObjectIdRouteHandler,
  )
  .openapi(
    getPluginsObservabilityObjectObjectIdRoute,
    getPluginsObservabilityObjectObjectIdRouteHandler,
  )
  .openapi(
    putPluginsObservabilityObjectObjectIdRoute,
    putPluginsObservabilityObjectObjectIdRouteHandler,
  )
  .openapi(postPluginsPplRoute, postPluginsPplRouteHandler)
  .openapi(postPluginsPplExplainRoute, postPluginsPplExplainRouteHandler)
  .openapi(getPluginsPplStatsRoute, getPluginsPplStatsRouteHandler)
  .openapi(postPluginsPplStatsRoute, postPluginsPplStatsRouteHandler)
  .openapi(getPluginsQueryDatasourcesRoute, getPluginsQueryDatasourcesRouteHandler)
  .openapi(postPluginsQueryDatasourcesRoute, postPluginsQueryDatasourcesRouteHandler)
  .openapi(putPluginsQueryDatasourcesRoute, putPluginsQueryDatasourcesRouteHandler)
  .openapi(
    deletePluginsQueryDatasourcesDatasourceNameRoute,
    deletePluginsQueryDatasourcesDatasourceNameRouteHandler,
  )
  .openapi(
    getPluginsQueryDatasourcesDatasourceNameRoute,
    getPluginsQueryDatasourcesDatasourceNameRouteHandler,
  )
  .openapi(putPluginsQuerySettingsRoute, putPluginsQuerySettingsRouteHandler)
  .openapi(
    postPluginsRefreshSearchAnalyzersIndexRoute,
    postPluginsRefreshSearchAnalyzersIndexRouteHandler,
  )
  .openapi(deletePluginsReplicationAutofollowRoute, deletePluginsReplicationAutofollowRouteHandler)
  .openapi(postPluginsReplicationAutofollowRoute, postPluginsReplicationAutofollowRouteHandler)
  .openapi(postPluginsReplicationIndexPauseRoute, postPluginsReplicationIndexPauseRouteHandler)
  .openapi(postPluginsReplicationIndexResumeRoute, postPluginsReplicationIndexResumeRouteHandler)
  .openapi(putPluginsReplicationIndexStartRoute, putPluginsReplicationIndexStartRouteHandler)
  .openapi(getPluginsReplicationIndexStatusRoute, getPluginsReplicationIndexStatusRouteHandler)
  .openapi(postPluginsReplicationIndexStopRoute, postPluginsReplicationIndexStopRouteHandler)
  .openapi(putPluginsReplicationIndexUpdateRoute, putPluginsReplicationIndexUpdateRouteHandler)
  .openapi(
    getPluginsReplicationAutofollowStatsRoute,
    getPluginsReplicationAutofollowStatsRouteHandler,
  )
  .openapi(getPluginsReplicationFollowerStatsRoute, getPluginsReplicationFollowerStatsRouteHandler)
  .openapi(getPluginsReplicationLeaderStatsRoute, getPluginsReplicationLeaderStatsRouteHandler)
  .openapi(deletePluginsRollupJobsIdRoute, deletePluginsRollupJobsIdRouteHandler)
  .openapi(getPluginsRollupJobsIdRoute, getPluginsRollupJobsIdRouteHandler)
  .openapi(putPluginsRollupJobsIdRoute, putPluginsRollupJobsIdRouteHandler)
  .openapi(getPluginsRollupJobsIdExplainRoute, getPluginsRollupJobsIdExplainRouteHandler)
  .openapi(postPluginsRollupJobsIdStartRoute, postPluginsRollupJobsIdStartRouteHandler)
  .openapi(postPluginsRollupJobsIdStopRoute, postPluginsRollupJobsIdStopRouteHandler)
  .openapi(
    getPluginsSearchRelevanceNodeIdStatsRoute,
    getPluginsSearchRelevanceNodeIdStatsRouteHandler,
  )
  .openapi(
    getPluginsSearchRelevanceNodeIdStatsStatRoute,
    getPluginsSearchRelevanceNodeIdStatsStatRouteHandler,
  )
  .openapi(
    getPluginsSearchRelevanceExperimentsRoute,
    getPluginsSearchRelevanceExperimentsRouteHandler,
  )
  .openapi(
    putPluginsSearchRelevanceExperimentsRoute,
    putPluginsSearchRelevanceExperimentsRouteHandler,
  )
  .openapi(
    deletePluginsSearchRelevanceExperimentsExperimentIdRoute,
    deletePluginsSearchRelevanceExperimentsExperimentIdRouteHandler,
  )
  .openapi(
    getPluginsSearchRelevanceExperimentsExperimentIdRoute,
    getPluginsSearchRelevanceExperimentsExperimentIdRouteHandler,
  )
  .openapi(
    getPluginsSearchRelevanceExperimentsScheduleRoute,
    getPluginsSearchRelevanceExperimentsScheduleRouteHandler,
  )
  .openapi(
    postPluginsSearchRelevanceExperimentsScheduleRoute,
    postPluginsSearchRelevanceExperimentsScheduleRouteHandler,
  )
  .openapi(
    deletePluginsSearchRelevanceExperimentsScheduleExperimentIdRoute,
    deletePluginsSearchRelevanceExperimentsScheduleExperimentIdRouteHandler,
  )
  .openapi(
    getPluginsSearchRelevanceExperimentsScheduleExperimentIdRoute,
    getPluginsSearchRelevanceExperimentsScheduleExperimentIdRouteHandler,
  )
  .openapi(getPluginsSearchRelevanceJudgmentsRoute, getPluginsSearchRelevanceJudgmentsRouteHandler)
  .openapi(putPluginsSearchRelevanceJudgmentsRoute, putPluginsSearchRelevanceJudgmentsRouteHandler)
  .openapi(
    deletePluginsSearchRelevanceJudgmentsJudgmentIdRoute,
    deletePluginsSearchRelevanceJudgmentsJudgmentIdRouteHandler,
  )
  .openapi(
    getPluginsSearchRelevanceJudgmentsJudgmentIdRoute,
    getPluginsSearchRelevanceJudgmentsJudgmentIdRouteHandler,
  )
  .openapi(getPluginsSearchRelevanceQuerySetsRoute, getPluginsSearchRelevanceQuerySetsRouteHandler)
  .openapi(
    postPluginsSearchRelevanceQuerySetsRoute,
    postPluginsSearchRelevanceQuerySetsRouteHandler,
  )
  .openapi(putPluginsSearchRelevanceQuerySetsRoute, putPluginsSearchRelevanceQuerySetsRouteHandler)
  .openapi(
    deletePluginsSearchRelevanceQuerySetsQuerySetIdRoute,
    deletePluginsSearchRelevanceQuerySetsQuerySetIdRouteHandler,
  )
  .openapi(
    getPluginsSearchRelevanceQuerySetsQuerySetIdRoute,
    getPluginsSearchRelevanceQuerySetsQuerySetIdRouteHandler,
  )
  .openapi(
    getPluginsSearchRelevanceSearchConfigurationsRoute,
    getPluginsSearchRelevanceSearchConfigurationsRouteHandler,
  )
  .openapi(
    putPluginsSearchRelevanceSearchConfigurationsRoute,
    putPluginsSearchRelevanceSearchConfigurationsRouteHandler,
  )
  .openapi(
    deletePluginsSearchRelevanceSearchConfigurationsSearchConfigurationIdRoute,
    deletePluginsSearchRelevanceSearchConfigurationsSearchConfigurationIdRouteHandler,
  )
  .openapi(
    getPluginsSearchRelevanceSearchConfigurationsSearchConfigurationIdRoute,
    getPluginsSearchRelevanceSearchConfigurationsSearchConfigurationIdRouteHandler,
  )
  .openapi(getPluginsSearchRelevanceStatsRoute, getPluginsSearchRelevanceStatsRouteHandler)
  .openapi(getPluginsSearchRelevanceStatsStatRoute, getPluginsSearchRelevanceStatsStatRouteHandler)
  .openapi(getPluginsSecurityAnalyticsAlertsRoute, getPluginsSecurityAnalyticsAlertsRouteHandler)
  .openapi(
    getPluginsSecurityAnalyticsFindingsSearchRoute,
    getPluginsSecurityAnalyticsFindingsSearchRouteHandler,
  )
  .openapi(
    getPluginsSecurityAnalyticsFindingsCorrelateRoute,
    getPluginsSecurityAnalyticsFindingsCorrelateRouteHandler,
  )
  .openapi(getPluginsSecurityApiUpgradeCheckRoute, getPluginsSecurityApiUpgradeCheckRouteHandler)
  .openapi(
    postPluginsSecurityApiUpgradePerformRoute,
    postPluginsSecurityApiUpgradePerformRouteHandler,
  )
  .openapi(getPluginsSecurityApiAccountRoute, getPluginsSecurityApiAccountRouteHandler)
  .openapi(putPluginsSecurityApiAccountRoute, putPluginsSecurityApiAccountRouteHandler)
  .openapi(getPluginsSecurityApiActiongroupsRoute, getPluginsSecurityApiActiongroupsRouteHandler)
  .openapi(
    patchPluginsSecurityApiActiongroupsRoute,
    patchPluginsSecurityApiActiongroupsRouteHandler,
  )
  .openapi(
    deletePluginsSecurityApiActiongroupsActionGroupRoute,
    deletePluginsSecurityApiActiongroupsActionGroupRouteHandler,
  )
  .openapi(
    getPluginsSecurityApiActiongroupsActionGroupRoute,
    getPluginsSecurityApiActiongroupsActionGroupRouteHandler,
  )
  .openapi(
    patchPluginsSecurityApiActiongroupsActionGroupRoute,
    patchPluginsSecurityApiActiongroupsActionGroupRouteHandler,
  )
  .openapi(
    putPluginsSecurityApiActiongroupsActionGroupRoute,
    putPluginsSecurityApiActiongroupsActionGroupRouteHandler,
  )
  .openapi(getPluginsSecurityApiAllowlistRoute, getPluginsSecurityApiAllowlistRouteHandler)
  .openapi(patchPluginsSecurityApiAllowlistRoute, patchPluginsSecurityApiAllowlistRouteHandler)
  .openapi(putPluginsSecurityApiAllowlistRoute, putPluginsSecurityApiAllowlistRouteHandler)
  .openapi(getPluginsSecurityApiAuditRoute, getPluginsSecurityApiAuditRouteHandler)
  .openapi(patchPluginsSecurityApiAuditRoute, patchPluginsSecurityApiAuditRouteHandler)
  .openapi(putPluginsSecurityApiAuditConfigRoute, putPluginsSecurityApiAuditConfigRouteHandler)
  .openapi(postPluginsSecurityApiAuthtokenRoute, postPluginsSecurityApiAuthtokenRouteHandler)
  .openapi(deletePluginsSecurityApiCacheRoute, deletePluginsSecurityApiCacheRouteHandler)
  .openapi(getPluginsSecurityApiCacheRoute, getPluginsSecurityApiCacheRouteHandler)
  .openapi(postPluginsSecurityApiCacheRoute, postPluginsSecurityApiCacheRouteHandler)
  .openapi(putPluginsSecurityApiCacheRoute, putPluginsSecurityApiCacheRouteHandler)
  .openapi(getPluginsSecurityApiCertificatesRoute, getPluginsSecurityApiCertificatesRouteHandler)
  .openapi(
    getPluginsSecurityApiCertificatesNodeIdRoute,
    getPluginsSecurityApiCertificatesNodeIdRouteHandler,
  )
  .openapi(
    postPluginsSecurityApiGenerateonbehalfoftokenRoute,
    postPluginsSecurityApiGenerateonbehalfoftokenRouteHandler,
  )
  .openapi(getPluginsSecurityApiInternalusersRoute, getPluginsSecurityApiInternalusersRouteHandler)
  .openapi(
    patchPluginsSecurityApiInternalusersRoute,
    patchPluginsSecurityApiInternalusersRouteHandler,
  )
  .openapi(
    deletePluginsSecurityApiInternalusersUsernameRoute,
    deletePluginsSecurityApiInternalusersUsernameRouteHandler,
  )
  .openapi(
    getPluginsSecurityApiInternalusersUsernameRoute,
    getPluginsSecurityApiInternalusersUsernameRouteHandler,
  )
  .openapi(
    patchPluginsSecurityApiInternalusersUsernameRoute,
    patchPluginsSecurityApiInternalusersUsernameRouteHandler,
  )
  .openapi(
    putPluginsSecurityApiInternalusersUsernameRoute,
    putPluginsSecurityApiInternalusersUsernameRouteHandler,
  )
  .openapi(
    postPluginsSecurityApiInternalusersUsernameAuthtokenRoute,
    postPluginsSecurityApiInternalusersUsernameAuthtokenRouteHandler,
  )
  .openapi(postPluginsSecurityApiMigrateRoute, postPluginsSecurityApiMigrateRouteHandler)
  .openapi(getPluginsSecurityApiNodesdnRoute, getPluginsSecurityApiNodesdnRouteHandler)
  .openapi(patchPluginsSecurityApiNodesdnRoute, patchPluginsSecurityApiNodesdnRouteHandler)
  .openapi(
    deletePluginsSecurityApiNodesdnClusterNameRoute,
    deletePluginsSecurityApiNodesdnClusterNameRouteHandler,
  )
  .openapi(
    getPluginsSecurityApiNodesdnClusterNameRoute,
    getPluginsSecurityApiNodesdnClusterNameRouteHandler,
  )
  .openapi(
    patchPluginsSecurityApiNodesdnClusterNameRoute,
    patchPluginsSecurityApiNodesdnClusterNameRouteHandler,
  )
  .openapi(
    putPluginsSecurityApiNodesdnClusterNameRoute,
    putPluginsSecurityApiNodesdnClusterNameRouteHandler,
  )
  .openapi(
    getPluginsSecurityApiPermissionsinfoRoute,
    getPluginsSecurityApiPermissionsinfoRouteHandler,
  )
  .openapi(getPluginsSecurityApiRolesRoute, getPluginsSecurityApiRolesRouteHandler)
  .openapi(patchPluginsSecurityApiRolesRoute, patchPluginsSecurityApiRolesRouteHandler)
  .openapi(deletePluginsSecurityApiRolesRoleRoute, deletePluginsSecurityApiRolesRoleRouteHandler)
  .openapi(getPluginsSecurityApiRolesRoleRoute, getPluginsSecurityApiRolesRoleRouteHandler)
  .openapi(patchPluginsSecurityApiRolesRoleRoute, patchPluginsSecurityApiRolesRoleRouteHandler)
  .openapi(putPluginsSecurityApiRolesRoleRoute, putPluginsSecurityApiRolesRoleRouteHandler)
  .openapi(getPluginsSecurityApiRolesmappingRoute, getPluginsSecurityApiRolesmappingRouteHandler)
  .openapi(
    patchPluginsSecurityApiRolesmappingRoute,
    patchPluginsSecurityApiRolesmappingRouteHandler,
  )
  .openapi(
    deletePluginsSecurityApiRolesmappingRoleRoute,
    deletePluginsSecurityApiRolesmappingRoleRouteHandler,
  )
  .openapi(
    getPluginsSecurityApiRolesmappingRoleRoute,
    getPluginsSecurityApiRolesmappingRoleRouteHandler,
  )
  .openapi(
    patchPluginsSecurityApiRolesmappingRoleRoute,
    patchPluginsSecurityApiRolesmappingRoleRouteHandler,
  )
  .openapi(
    putPluginsSecurityApiRolesmappingRoleRoute,
    putPluginsSecurityApiRolesmappingRoleRouteHandler,
  )
  .openapi(
    getPluginsSecurityApiSecurityconfigRoute,
    getPluginsSecurityApiSecurityconfigRouteHandler,
  )
  .openapi(
    patchPluginsSecurityApiSecurityconfigRoute,
    patchPluginsSecurityApiSecurityconfigRouteHandler,
  )
  .openapi(
    putPluginsSecurityApiSecurityconfigConfigRoute,
    putPluginsSecurityApiSecurityconfigConfigRouteHandler,
  )
  .openapi(getPluginsSecurityApiSslCertsRoute, getPluginsSecurityApiSslCertsRouteHandler)
  .openapi(
    putPluginsSecurityApiSslHttpReloadcertsRoute,
    putPluginsSecurityApiSslHttpReloadcertsRouteHandler,
  )
  .openapi(
    putPluginsSecurityApiSslTransportReloadcertsRoute,
    putPluginsSecurityApiSslTransportReloadcertsRouteHandler,
  )
  .openapi(getPluginsSecurityApiTenancyConfigRoute, getPluginsSecurityApiTenancyConfigRouteHandler)
  .openapi(putPluginsSecurityApiTenancyConfigRoute, putPluginsSecurityApiTenancyConfigRouteHandler)
  .openapi(getPluginsSecurityApiTenantsRoute, getPluginsSecurityApiTenantsRouteHandler)
  .openapi(patchPluginsSecurityApiTenantsRoute, patchPluginsSecurityApiTenantsRouteHandler)
  .openapi(
    deletePluginsSecurityApiTenantsTenantRoute,
    deletePluginsSecurityApiTenantsTenantRouteHandler,
  )
  .openapi(getPluginsSecurityApiTenantsTenantRoute, getPluginsSecurityApiTenantsTenantRouteHandler)
  .openapi(
    patchPluginsSecurityApiTenantsTenantRoute,
    patchPluginsSecurityApiTenantsTenantRouteHandler,
  )
  .openapi(putPluginsSecurityApiTenantsTenantRoute, putPluginsSecurityApiTenantsTenantRouteHandler)
  .openapi(getPluginsSecurityApiUserRoute, getPluginsSecurityApiUserRouteHandler)
  .openapi(
    deletePluginsSecurityApiUserUsernameRoute,
    deletePluginsSecurityApiUserUsernameRouteHandler,
  )
  .openapi(getPluginsSecurityApiUserUsernameRoute, getPluginsSecurityApiUserUsernameRouteHandler)
  .openapi(putPluginsSecurityApiUserUsernameRoute, putPluginsSecurityApiUserUsernameRouteHandler)
  .openapi(
    postPluginsSecurityApiUserUsernameAuthtokenRoute,
    postPluginsSecurityApiUserUsernameAuthtokenRouteHandler,
  )
  .openapi(getPluginsSecurityApiValidateRoute, getPluginsSecurityApiValidateRouteHandler)
  .openapi(getPluginsSecurityAuthinfoRoute, getPluginsSecurityAuthinfoRouteHandler)
  .openapi(postPluginsSecurityAuthinfoRoute, postPluginsSecurityAuthinfoRouteHandler)
  .openapi(getPluginsSecurityDashboardsinfoRoute, getPluginsSecurityDashboardsinfoRouteHandler)
  .openapi(postPluginsSecurityDashboardsinfoRoute, postPluginsSecurityDashboardsinfoRouteHandler)
  .openapi(getPluginsSecurityHealthRoute, getPluginsSecurityHealthRouteHandler)
  .openapi(postPluginsSecurityHealthRoute, postPluginsSecurityHealthRouteHandler)
  .openapi(getPluginsSecurityTenantinfoRoute, getPluginsSecurityTenantinfoRouteHandler)
  .openapi(postPluginsSecurityTenantinfoRoute, postPluginsSecurityTenantinfoRouteHandler)
  .openapi(getPluginsSecurityWhoamiRoute, getPluginsSecurityWhoamiRouteHandler)
  .openapi(postPluginsSecurityWhoamiRoute, postPluginsSecurityWhoamiRouteHandler)
  .openapi(getPluginsSecurityWhoamiprotectedRoute, getPluginsSecurityWhoamiprotectedRouteHandler)
  .openapi(getPluginsSmPoliciesRoute, getPluginsSmPoliciesRouteHandler)
  .openapi(deletePluginsSmPoliciesPolicyNameRoute, deletePluginsSmPoliciesPolicyNameRouteHandler)
  .openapi(getPluginsSmPoliciesPolicyNameRoute, getPluginsSmPoliciesPolicyNameRouteHandler)
  .openapi(postPluginsSmPoliciesPolicyNameRoute, postPluginsSmPoliciesPolicyNameRouteHandler)
  .openapi(putPluginsSmPoliciesPolicyNameRoute, putPluginsSmPoliciesPolicyNameRouteHandler)
  .openapi(
    getPluginsSmPoliciesPolicyNameExplainRoute,
    getPluginsSmPoliciesPolicyNameExplainRouteHandler,
  )
  .openapi(
    postPluginsSmPoliciesPolicyNameStartRoute,
    postPluginsSmPoliciesPolicyNameStartRouteHandler,
  )
  .openapi(
    postPluginsSmPoliciesPolicyNameStopRoute,
    postPluginsSmPoliciesPolicyNameStopRouteHandler,
  )
  .openapi(postPluginsSqlRoute, postPluginsSqlRouteHandler)
  .openapi(postPluginsSqlExplainRoute, postPluginsSqlExplainRouteHandler)
  .openapi(postPluginsSqlCloseRoute, postPluginsSqlCloseRouteHandler)
  .openapi(getPluginsSqlStatsRoute, getPluginsSqlStatsRouteHandler)
  .openapi(postPluginsSqlStatsRoute, postPluginsSqlStatsRouteHandler)
  .openapi(getPluginsTransformRoute, getPluginsTransformRouteHandler)
  .openapi(postPluginsTransformPreviewRoute, postPluginsTransformPreviewRouteHandler)
  .openapi(deletePluginsTransformIdRoute, deletePluginsTransformIdRouteHandler)
  .openapi(getPluginsTransformIdRoute, getPluginsTransformIdRouteHandler)
  .openapi(putPluginsTransformIdRoute, putPluginsTransformIdRouteHandler)
  .openapi(getPluginsTransformIdExplainRoute, getPluginsTransformIdExplainRouteHandler)
  .openapi(postPluginsTransformIdStartRoute, postPluginsTransformIdStartRouteHandler)
  .openapi(postPluginsTransformIdStopRoute, postPluginsTransformIdStopRouteHandler)
  .openapi(getPluginsGeospatialUploadStatsRoute, getPluginsGeospatialUploadStatsRouteHandler)
  .openapi(postPluginsGeospatialGeojsonUploadRoute, postPluginsGeospatialGeojsonUploadRouteHandler)
  .openapi(putPluginsGeospatialGeojsonUploadRoute, putPluginsGeospatialGeojsonUploadRouteHandler)
  .openapi(
    getPluginsGeospatialIp2geoDatasourceRoute,
    getPluginsGeospatialIp2geoDatasourceRouteHandler,
  )
  .openapi(
    deletePluginsGeospatialIp2geoDatasourceNameRoute,
    deletePluginsGeospatialIp2geoDatasourceNameRouteHandler,
  )
  .openapi(
    getPluginsGeospatialIp2geoDatasourceNameRoute,
    getPluginsGeospatialIp2geoDatasourceNameRouteHandler,
  )
  .openapi(
    putPluginsGeospatialIp2geoDatasourceNameRoute,
    putPluginsGeospatialIp2geoDatasourceNameRouteHandler,
  )
  .openapi(
    putPluginsGeospatialIp2geoDatasourceNameSettingsRoute,
    putPluginsGeospatialIp2geoDatasourceNameSettingsRouteHandler,
  )
  .openapi(postPluginsUbiInitializeRoute, postPluginsUbiInitializeRouteHandler)
  .openapi(getRankEvalRoute, getRankEvalRouteHandler)
  .openapi(postRankEvalRoute, postRankEvalRouteHandler)
  .openapi(getRecoveryRoute, getRecoveryRouteHandler)
  .openapi(getRefreshRoute, getRefreshRouteHandler)
  .openapi(postRefreshRoute, postRefreshRouteHandler)
  .openapi(postReindexRoute, postReindexRouteHandler)
  .openapi(postReindexTaskIdRethrottleRoute, postReindexTaskIdRethrottleRouteHandler)
  .openapi(getRemoteInfoRoute, getRemoteInfoRouteHandler)
  .openapi(postRemotestoreRestoreRoute, postRemotestoreRestoreRouteHandler)
  .openapi(getRenderTemplateRoute, getRenderTemplateRouteHandler)
  .openapi(postRenderTemplateRoute, postRenderTemplateRouteHandler)
  .openapi(getRenderTemplateIdRoute, getRenderTemplateIdRouteHandler)
  .openapi(postRenderTemplateIdRoute, postRenderTemplateIdRouteHandler)
  .openapi(getResolveIndexNameRoute, getResolveIndexNameRouteHandler)
  .openapi(getScriptContextRoute, getScriptContextRouteHandler)
  .openapi(getScriptLanguageRoute, getScriptLanguageRouteHandler)
  .openapi(deleteScriptsIdRoute, deleteScriptsIdRouteHandler)
  .openapi(getScriptsIdRoute, getScriptsIdRouteHandler)
  .openapi(postScriptsIdRoute, postScriptsIdRouteHandler)
  .openapi(putScriptsIdRoute, putScriptsIdRouteHandler)
  .openapi(postScriptsIdContextRoute, postScriptsIdContextRouteHandler)
  .openapi(putScriptsIdContextRoute, putScriptsIdContextRouteHandler)
  .openapi(getScriptsPainlessExecuteRoute, getScriptsPainlessExecuteRouteHandler)
  .openapi(postScriptsPainlessExecuteRoute, postScriptsPainlessExecuteRouteHandler)
  .openapi(getSearchRoute, getSearchRouteHandler)
  .openapi(postSearchRoute, postSearchRouteHandler)
  .openapi(getSearchShardsRoute, getSearchShardsRouteHandler)
  .openapi(postSearchShardsRoute, postSearchShardsRouteHandler)
  .openapi(getSearchPipelineRoute, getSearchPipelineRouteHandler)
  .openapi(deleteSearchPipelineIdRoute, deleteSearchPipelineIdRouteHandler)
  .openapi(getSearchPipelineIdRoute, getSearchPipelineIdRouteHandler)
  .openapi(putSearchPipelineIdRoute, putSearchPipelineIdRouteHandler)
  .openapi(deleteSearchPointInTimeRoute, deleteSearchPointInTimeRouteHandler)
  .openapi(deleteSearchPointInTimeAllRoute, deleteSearchPointInTimeAllRouteHandler)
  .openapi(getSearchPointInTimeAllRoute, getSearchPointInTimeAllRouteHandler)
  .openapi(deleteSearchScrollRoute, deleteSearchScrollRouteHandler)
  .openapi(getSearchScrollRoute, getSearchScrollRouteHandler)
  .openapi(postSearchScrollRoute, postSearchScrollRouteHandler)
  .openapi(deleteSearchScrollScrollIdRoute, deleteSearchScrollScrollIdRouteHandler)
  .openapi(getSearchScrollScrollIdRoute, getSearchScrollScrollIdRouteHandler)
  .openapi(postSearchScrollScrollIdRoute, postSearchScrollScrollIdRouteHandler)
  .openapi(getSearchTemplateRoute, getSearchTemplateRouteHandler)
  .openapi(postSearchTemplateRoute, postSearchTemplateRouteHandler)
  .openapi(getSegmentsRoute, getSegmentsRouteHandler)
  .openapi(getSettingsRoute, getSettingsRouteHandler)
  .openapi(putSettingsRoute, putSettingsRouteHandler)
  .openapi(getSettingsNameRoute, getSettingsNameRouteHandler)
  .openapi(getShardStoresRoute, getShardStoresRouteHandler)
  .openapi(getSnapshotRoute, getSnapshotRouteHandler)
  .openapi(getSnapshotStatusRoute, getSnapshotStatusRouteHandler)
  .openapi(deleteSnapshotRepositoryRoute, deleteSnapshotRepositoryRouteHandler)
  .openapi(getSnapshotRepositoryRoute, getSnapshotRepositoryRouteHandler)
  .openapi(postSnapshotRepositoryRoute, postSnapshotRepositoryRouteHandler)
  .openapi(putSnapshotRepositoryRoute, putSnapshotRepositoryRouteHandler)
  .openapi(postSnapshotRepositoryCleanupRoute, postSnapshotRepositoryCleanupRouteHandler)
  .openapi(getSnapshotRepositoryStatusRoute, getSnapshotRepositoryStatusRouteHandler)
  .openapi(postSnapshotRepositoryVerifyRoute, postSnapshotRepositoryVerifyRouteHandler)
  .openapi(deleteSnapshotRepositorySnapshotRoute, deleteSnapshotRepositorySnapshotRouteHandler)
  .openapi(getSnapshotRepositorySnapshotRoute, getSnapshotRepositorySnapshotRouteHandler)
  .openapi(postSnapshotRepositorySnapshotRoute, postSnapshotRepositorySnapshotRouteHandler)
  .openapi(putSnapshotRepositorySnapshotRoute, putSnapshotRepositorySnapshotRouteHandler)
  .openapi(
    putSnapshotRepositorySnapshotCloneTargetSnapshotRoute,
    putSnapshotRepositorySnapshotCloneTargetSnapshotRouteHandler,
  )
  .openapi(
    postSnapshotRepositorySnapshotRestoreRoute,
    postSnapshotRepositorySnapshotRestoreRouteHandler,
  )
  .openapi(
    getSnapshotRepositorySnapshotStatusRoute,
    getSnapshotRepositorySnapshotStatusRouteHandler,
  )
  .openapi(getStatsRoute, getStatsRouteHandler)
  .openapi(getStatsMetricRoute, getStatsMetricRouteHandler)
  .openapi(getTasksRoute, getTasksRouteHandler)
  .openapi(postTasksCancelRoute, postTasksCancelRouteHandler)
  .openapi(getTasksTaskIdRoute, getTasksTaskIdRouteHandler)
  .openapi(postTasksTaskIdCancelRoute, postTasksTaskIdCancelRouteHandler)
  .openapi(getTemplateRoute, getTemplateRouteHandler)
  .openapi(deleteTemplateNameRoute, deleteTemplateNameRouteHandler)
  .openapi(getTemplateNameRoute, getTemplateNameRouteHandler)
  .openapi(headTemplateNameRoute, headTemplateNameRouteHandler)
  .openapi(postTemplateNameRoute, postTemplateNameRouteHandler)
  .openapi(putTemplateNameRoute, putTemplateNameRouteHandler)
  .openapi(postUpdateByQueryTaskIdRethrottleRoute, postUpdateByQueryTaskIdRethrottleRouteHandler)
  .openapi(getUpgradeRoute, getUpgradeRouteHandler)
  .openapi(postUpgradeRoute, postUpgradeRouteHandler)
  .openapi(getValidateQueryRoute, getValidateQueryRouteHandler)
  .openapi(postValidateQueryRoute, postValidateQueryRouteHandler)
  .openapi(getWlmQueryGroupRoute, getWlmQueryGroupRouteHandler)
  .openapi(putWlmQueryGroupRoute, putWlmQueryGroupRouteHandler)
  .openapi(deleteWlmQueryGroupNameRoute, deleteWlmQueryGroupNameRouteHandler)
  .openapi(getWlmQueryGroupNameRoute, getWlmQueryGroupNameRouteHandler)
  .openapi(putWlmQueryGroupNameRoute, putWlmQueryGroupNameRouteHandler)
  .openapi(postAliasRolloverRoute, postAliasRolloverRouteHandler)
  .openapi(postAliasRolloverNewIndexRoute, postAliasRolloverNewIndexRouteHandler)
  .openapi(deleteIndexRoute, deleteIndexRouteHandler)
  .openapi(getIndexRoute, getIndexRouteHandler)
  .openapi(headIndexRoute, headIndexRouteHandler)
  .openapi(putIndexRoute, putIndexRouteHandler)
  .openapi(getIndexAliasRoute, getIndexAliasRouteHandler)
  .openapi(putIndexAliasRoute, putIndexAliasRouteHandler)
  .openapi(deleteIndexAliasNameRoute, deleteIndexAliasNameRouteHandler)
  .openapi(getIndexAliasNameRoute, getIndexAliasNameRouteHandler)
  .openapi(headIndexAliasNameRoute, headIndexAliasNameRouteHandler)
  .openapi(postIndexAliasNameRoute, postIndexAliasNameRouteHandler)
  .openapi(putIndexAliasNameRoute, putIndexAliasNameRouteHandler)
  .openapi(putIndexAliasesRoute, putIndexAliasesRouteHandler)
  .openapi(deleteIndexAliasesNameRoute, deleteIndexAliasesNameRouteHandler)
  .openapi(postIndexAliasesNameRoute, postIndexAliasesNameRouteHandler)
  .openapi(putIndexAliasesNameRoute, putIndexAliasesNameRouteHandler)
  .openapi(getIndexAnalyzeRoute, getIndexAnalyzeRouteHandler)
  .openapi(postIndexAnalyzeRoute, postIndexAnalyzeRouteHandler)
  .openapi(putIndexBlockBlockRoute, putIndexBlockBlockRouteHandler)
  .openapi(postIndexBulkRoute, postIndexBulkRouteHandler)
  .openapi(putIndexBulkRoute, putIndexBulkRouteHandler)
  .openapi(postIndexBulkStreamRoute, postIndexBulkStreamRouteHandler)
  .openapi(putIndexBulkStreamRoute, putIndexBulkStreamRouteHandler)
  .openapi(postIndexCacheClearRoute, postIndexCacheClearRouteHandler)
  .openapi(postIndexCloneTargetRoute, postIndexCloneTargetRouteHandler)
  .openapi(putIndexCloneTargetRoute, putIndexCloneTargetRouteHandler)
  .openapi(postIndexCloseRoute, postIndexCloseRouteHandler)
  .openapi(getIndexCountRoute, getIndexCountRouteHandler)
  .openapi(postIndexCountRoute, postIndexCountRouteHandler)
  .openapi(postIndexCreateIdRoute, postIndexCreateIdRouteHandler)
  .openapi(putIndexCreateIdRoute, putIndexCreateIdRouteHandler)
  .openapi(postIndexDeleteByQueryRoute, postIndexDeleteByQueryRouteHandler)
  .openapi(postIndexDocRoute, postIndexDocRouteHandler)
  .openapi(deleteIndexDocIdRoute, deleteIndexDocIdRouteHandler)
  .openapi(getIndexDocIdRoute, getIndexDocIdRouteHandler)
  .openapi(headIndexDocIdRoute, headIndexDocIdRouteHandler)
  .openapi(postIndexDocIdRoute, postIndexDocIdRouteHandler)
  .openapi(putIndexDocIdRoute, putIndexDocIdRouteHandler)
  .openapi(getIndexExplainIdRoute, getIndexExplainIdRouteHandler)
  .openapi(postIndexExplainIdRoute, postIndexExplainIdRouteHandler)
  .openapi(getIndexFieldCapsRoute, getIndexFieldCapsRouteHandler)
  .openapi(postIndexFieldCapsRoute, postIndexFieldCapsRouteHandler)
  .openapi(getIndexFlushRoute, getIndexFlushRouteHandler)
  .openapi(postIndexFlushRoute, postIndexFlushRouteHandler)
  .openapi(postIndexForcemergeRoute, postIndexForcemergeRouteHandler)
  .openapi(getIndexMappingRoute, getIndexMappingRouteHandler)
  .openapi(postIndexMappingRoute, postIndexMappingRouteHandler)
  .openapi(putIndexMappingRoute, putIndexMappingRouteHandler)
  .openapi(getIndexMappingFieldFieldsRoute, getIndexMappingFieldFieldsRouteHandler)
  .openapi(getIndexMgetRoute, getIndexMgetRouteHandler)
  .openapi(postIndexMgetRoute, postIndexMgetRouteHandler)
  .openapi(getIndexMsearchRoute, getIndexMsearchRouteHandler)
  .openapi(postIndexMsearchRoute, postIndexMsearchRouteHandler)
  .openapi(getIndexMsearchTemplateRoute, getIndexMsearchTemplateRouteHandler)
  .openapi(postIndexMsearchTemplateRoute, postIndexMsearchTemplateRouteHandler)
  .openapi(getIndexMtermvectorsRoute, getIndexMtermvectorsRouteHandler)
  .openapi(postIndexMtermvectorsRoute, postIndexMtermvectorsRouteHandler)
  .openapi(postIndexOpenRoute, postIndexOpenRouteHandler)
  .openapi(getIndexRankEvalRoute, getIndexRankEvalRouteHandler)
  .openapi(postIndexRankEvalRoute, postIndexRankEvalRouteHandler)
  .openapi(getIndexRecoveryRoute, getIndexRecoveryRouteHandler)
  .openapi(getIndexRefreshRoute, getIndexRefreshRouteHandler)
  .openapi(postIndexRefreshRoute, postIndexRefreshRouteHandler)
  .openapi(getIndexSearchRoute, getIndexSearchRouteHandler)
  .openapi(postIndexSearchRoute, postIndexSearchRouteHandler)
  .openapi(getIndexSearchShardsRoute, getIndexSearchShardsRouteHandler)
  .openapi(postIndexSearchShardsRoute, postIndexSearchShardsRouteHandler)
  .openapi(postIndexSearchPointInTimeRoute, postIndexSearchPointInTimeRouteHandler)
  .openapi(getIndexSearchTemplateRoute, getIndexSearchTemplateRouteHandler)
  .openapi(postIndexSearchTemplateRoute, postIndexSearchTemplateRouteHandler)
  .openapi(getIndexSegmentsRoute, getIndexSegmentsRouteHandler)
  .openapi(getIndexSettingsRoute, getIndexSettingsRouteHandler)
  .openapi(putIndexSettingsRoute, putIndexSettingsRouteHandler)
  .openapi(getIndexSettingsNameRoute, getIndexSettingsNameRouteHandler)
  .openapi(getIndexShardStoresRoute, getIndexShardStoresRouteHandler)
  .openapi(postIndexShrinkTargetRoute, postIndexShrinkTargetRouteHandler)
  .openapi(putIndexShrinkTargetRoute, putIndexShrinkTargetRouteHandler)
  .openapi(getIndexSourceIdRoute, getIndexSourceIdRouteHandler)
  .openapi(headIndexSourceIdRoute, headIndexSourceIdRouteHandler)
  .openapi(postIndexSplitTargetRoute, postIndexSplitTargetRouteHandler)
  .openapi(putIndexSplitTargetRoute, putIndexSplitTargetRouteHandler)
  .openapi(getIndexStatsRoute, getIndexStatsRouteHandler)
  .openapi(getIndexStatsMetricRoute, getIndexStatsMetricRouteHandler)
  .openapi(getIndexTermvectorsRoute, getIndexTermvectorsRouteHandler)
  .openapi(postIndexTermvectorsRoute, postIndexTermvectorsRouteHandler)
  .openapi(getIndexTermvectorsIdRoute, getIndexTermvectorsIdRouteHandler)
  .openapi(postIndexTermvectorsIdRoute, postIndexTermvectorsIdRouteHandler)
  .openapi(postIndexUpdateByQueryRoute, postIndexUpdateByQueryRouteHandler)
  .openapi(postIndexUpdateIdRoute, postIndexUpdateIdRouteHandler)
  .openapi(getIndexUpgradeRoute, getIndexUpgradeRouteHandler)
  .openapi(postIndexUpgradeRoute, postIndexUpgradeRouteHandler)
  .openapi(getIndexValidateQueryRoute, getIndexValidateQueryRouteHandler)
  .openapi(postIndexValidateQueryRoute, postIndexValidateQueryRouteHandler)
  .openapi(postIndexIngestionPauseRoute, postIndexIngestionPauseRouteHandler)
  .openapi(postIndexIngestionResumeRoute, postIndexIngestionResumeRouteHandler)
  .openapi(getIndexIngestionStateRoute, getIndexIngestionStateRouteHandler)
  .openapi(postOpendistroAsynchronousSearchRoute, postOpendistroAsynchronousSearchRouteHandler)
  .openapi(
    getOpendistroAsynchronousSearchStatsRoute,
    getOpendistroAsynchronousSearchStatsRouteHandler,
  )
  .openapi(getOpendistroAsynchronousSearchIdRoute, getOpendistroAsynchronousSearchIdRouteHandler)
  .openapi(
    deleteOpendistroAsynchronousSearchIdRoute,
    deleteOpendistroAsynchronousSearchIdRouteHandler,
  )
  .openapi(postOpendistroIsmAddRoute, postOpendistroIsmAddRouteHandler)
  .openapi(postOpendistroIsmAddIndexRoute, postOpendistroIsmAddIndexRouteHandler)
  .openapi(postOpendistroIsmChangePolicyRoute, postOpendistroIsmChangePolicyRouteHandler)
  .openapi(postOpendistroIsmChangePolicyIndexRoute, postOpendistroIsmChangePolicyIndexRouteHandler)
  .openapi(getOpendistroIsmExplainRoute, getOpendistroIsmExplainRouteHandler)
  .openapi(postOpendistroIsmExplainRoute, postOpendistroIsmExplainRouteHandler)
  .openapi(getOpendistroIsmExplainIndexRoute, getOpendistroIsmExplainIndexRouteHandler)
  .openapi(postOpendistroIsmExplainIndexRoute, postOpendistroIsmExplainIndexRouteHandler)
  .openapi(getOpendistroIsmPoliciesRoute, getOpendistroIsmPoliciesRouteHandler)
  .openapi(putOpendistroIsmPoliciesRoute, putOpendistroIsmPoliciesRouteHandler)
  .openapi(getOpendistroIsmPoliciesPolicyIdRoute, getOpendistroIsmPoliciesPolicyIdRouteHandler)
  .openapi(headOpendistroIsmPoliciesPolicyIdRoute, headOpendistroIsmPoliciesPolicyIdRouteHandler)
  .openapi(putOpendistroIsmPoliciesPolicyIdRoute, putOpendistroIsmPoliciesPolicyIdRouteHandler)
  .openapi(
    deleteOpendistroIsmPoliciesPolicyIdRoute,
    deleteOpendistroIsmPoliciesPolicyIdRouteHandler,
  )
  .openapi(postOpendistroIsmRemoveRoute, postOpendistroIsmRemoveRouteHandler)
  .openapi(postOpendistroIsmRemoveIndexRoute, postOpendistroIsmRemoveIndexRouteHandler)
  .openapi(postOpendistroIsmRetryRoute, postOpendistroIsmRetryRouteHandler)
  .openapi(postOpendistroIsmRetryIndexRoute, postOpendistroIsmRetryIndexRouteHandler)
  .openapi(getOpendistroKnnStatsStatRoute, getOpendistroKnnStatsStatRouteHandler)
  .openapi(getOpendistroKnnWarmupIndexRoute, getOpendistroKnnWarmupIndexRouteHandler)
  .openapi(getOpendistroKnnNodeIdStatsStatRoute, getOpendistroKnnNodeIdStatsStatRouteHandler)
  .openapi(postOpendistroPplRoute, postOpendistroPplRouteHandler)
  .openapi(postOpendistroPplExplainRoute, postOpendistroPplExplainRouteHandler)
  .openapi(getOpendistroPplStatsRoute, getOpendistroPplStatsRouteHandler)
  .openapi(postOpendistroPplStatsRoute, postOpendistroPplStatsRouteHandler)
  .openapi(
    postOpendistroRefreshSearchAnalyzersIndexRoute,
    postOpendistroRefreshSearchAnalyzersIndexRouteHandler,
  )
  .openapi(getOpendistroRollupJobsIdRoute, getOpendistroRollupJobsIdRouteHandler)
  .openapi(putOpendistroRollupJobsIdRoute, putOpendistroRollupJobsIdRouteHandler)
  .openapi(deleteOpendistroRollupJobsIdRoute, deleteOpendistroRollupJobsIdRouteHandler)
  .openapi(getOpendistroRollupJobsIdExplainRoute, getOpendistroRollupJobsIdExplainRouteHandler)
  .openapi(postOpendistroRollupJobsIdStartRoute, postOpendistroRollupJobsIdStartRouteHandler)
  .openapi(postOpendistroRollupJobsIdStopRoute, postOpendistroRollupJobsIdStopRouteHandler)
  .openapi(getOpendistroSecurityApiAccountRoute, getOpendistroSecurityApiAccountRouteHandler)
  .openapi(putOpendistroSecurityApiAccountRoute, putOpendistroSecurityApiAccountRouteHandler)
  .openapi(
    getOpendistroSecurityApiActiongroupsActionGroupRoute,
    getOpendistroSecurityApiActiongroupsActionGroupRouteHandler,
  )
  .openapi(
    putOpendistroSecurityApiActiongroupsActionGroupRoute,
    putOpendistroSecurityApiActiongroupsActionGroupRouteHandler,
  )
  .openapi(
    patchOpendistroSecurityApiActiongroupsActionGroupRoute,
    patchOpendistroSecurityApiActiongroupsActionGroupRouteHandler,
  )
  .openapi(
    deleteOpendistroSecurityApiActiongroupsActionGroupRoute,
    deleteOpendistroSecurityApiActiongroupsActionGroupRouteHandler,
  )
  .openapi(
    putOpendistroSecurityApiAuditConfigRoute,
    putOpendistroSecurityApiAuditConfigRouteHandler,
  )
  .openapi(postOpendistroSecurityApiAuthtokenRoute, postOpendistroSecurityApiAuthtokenRouteHandler)
  .openapi(getOpendistroSecurityApiCacheRoute, getOpendistroSecurityApiCacheRouteHandler)
  .openapi(postOpendistroSecurityApiCacheRoute, postOpendistroSecurityApiCacheRouteHandler)
  .openapi(putOpendistroSecurityApiCacheRoute, putOpendistroSecurityApiCacheRouteHandler)
  .openapi(deleteOpendistroSecurityApiCacheRoute, deleteOpendistroSecurityApiCacheRouteHandler)
  .openapi(
    getOpendistroSecurityApiInternalusersUsernameRoute,
    getOpendistroSecurityApiInternalusersUsernameRouteHandler,
  )
  .openapi(
    putOpendistroSecurityApiInternalusersUsernameRoute,
    putOpendistroSecurityApiInternalusersUsernameRouteHandler,
  )
  .openapi(
    patchOpendistroSecurityApiInternalusersUsernameRoute,
    patchOpendistroSecurityApiInternalusersUsernameRouteHandler,
  )
  .openapi(
    deleteOpendistroSecurityApiInternalusersUsernameRoute,
    deleteOpendistroSecurityApiInternalusersUsernameRouteHandler,
  )
  .openapi(
    postOpendistroSecurityApiInternalusersUsernameAuthtokenRoute,
    postOpendistroSecurityApiInternalusersUsernameAuthtokenRouteHandler,
  )
  .openapi(postOpendistroSecurityApiMigrateRoute, postOpendistroSecurityApiMigrateRouteHandler)
  .openapi(
    getOpendistroSecurityApiPermissionsinfoRoute,
    getOpendistroSecurityApiPermissionsinfoRouteHandler,
  )
  .openapi(getOpendistroSecurityApiRolesRoleRoute, getOpendistroSecurityApiRolesRoleRouteHandler)
  .openapi(putOpendistroSecurityApiRolesRoleRoute, putOpendistroSecurityApiRolesRoleRouteHandler)
  .openapi(
    patchOpendistroSecurityApiRolesRoleRoute,
    patchOpendistroSecurityApiRolesRoleRouteHandler,
  )
  .openapi(
    deleteOpendistroSecurityApiRolesRoleRoute,
    deleteOpendistroSecurityApiRolesRoleRouteHandler,
  )
  .openapi(
    getOpendistroSecurityApiRolesmappingRoleRoute,
    getOpendistroSecurityApiRolesmappingRoleRouteHandler,
  )
  .openapi(
    putOpendistroSecurityApiRolesmappingRoleRoute,
    putOpendistroSecurityApiRolesmappingRoleRouteHandler,
  )
  .openapi(
    patchOpendistroSecurityApiRolesmappingRoleRoute,
    patchOpendistroSecurityApiRolesmappingRoleRouteHandler,
  )
  .openapi(
    deleteOpendistroSecurityApiRolesmappingRoleRoute,
    deleteOpendistroSecurityApiRolesmappingRoleRouteHandler,
  )
  .openapi(
    getOpendistroSecurityApiSecurityconfigRoute,
    getOpendistroSecurityApiSecurityconfigRouteHandler,
  )
  .openapi(
    patchOpendistroSecurityApiSecurityconfigRoute,
    patchOpendistroSecurityApiSecurityconfigRouteHandler,
  )
  .openapi(
    putOpendistroSecurityApiSecurityconfigConfigRoute,
    putOpendistroSecurityApiSecurityconfigConfigRouteHandler,
  )
  .openapi(getOpendistroSecurityApiSslCertsRoute, getOpendistroSecurityApiSslCertsRouteHandler)
  .openapi(
    putOpendistroSecurityApiSslTransportReloadcertsRoute,
    putOpendistroSecurityApiSslTransportReloadcertsRouteHandler,
  )
  .openapi(
    putOpendistroSecurityApiSslHttpReloadcertsRoute,
    putOpendistroSecurityApiSslHttpReloadcertsRouteHandler,
  )
  .openapi(
    getOpendistroSecurityApiNodesdnClusterNameRoute,
    getOpendistroSecurityApiNodesdnClusterNameRouteHandler,
  )
  .openapi(
    putOpendistroSecurityApiNodesdnClusterNameRoute,
    putOpendistroSecurityApiNodesdnClusterNameRouteHandler,
  )
  .openapi(
    patchOpendistroSecurityApiNodesdnClusterNameRoute,
    patchOpendistroSecurityApiNodesdnClusterNameRouteHandler,
  )
  .openapi(
    deleteOpendistroSecurityApiNodesdnClusterNameRoute,
    deleteOpendistroSecurityApiNodesdnClusterNameRouteHandler,
  )
  .openapi(
    getOpendistroSecurityApiTenancyConfigRoute,
    getOpendistroSecurityApiTenancyConfigRouteHandler,
  )
  .openapi(
    putOpendistroSecurityApiTenancyConfigRoute,
    putOpendistroSecurityApiTenancyConfigRouteHandler,
  )
  .openapi(getOpendistroSecurityApiTenantsRoute, getOpendistroSecurityApiTenantsRouteHandler)
  .openapi(patchOpendistroSecurityApiTenantsRoute, patchOpendistroSecurityApiTenantsRouteHandler)
  .openapi(
    getOpendistroSecurityApiTenantsTenantRoute,
    getOpendistroSecurityApiTenantsTenantRouteHandler,
  )
  .openapi(
    putOpendistroSecurityApiTenantsTenantRoute,
    putOpendistroSecurityApiTenantsTenantRouteHandler,
  )
  .openapi(
    patchOpendistroSecurityApiTenantsTenantRoute,
    patchOpendistroSecurityApiTenantsTenantRouteHandler,
  )
  .openapi(
    deleteOpendistroSecurityApiTenantsTenantRoute,
    deleteOpendistroSecurityApiTenantsTenantRouteHandler,
  )
  .openapi(getOpendistroSecurityApiUserRoute, getOpendistroSecurityApiUserRouteHandler)
  .openapi(
    getOpendistroSecurityApiUserUsernameRoute,
    getOpendistroSecurityApiUserUsernameRouteHandler,
  )
  .openapi(
    putOpendistroSecurityApiUserUsernameRoute,
    putOpendistroSecurityApiUserUsernameRouteHandler,
  )
  .openapi(
    deleteOpendistroSecurityApiUserUsernameRoute,
    deleteOpendistroSecurityApiUserUsernameRouteHandler,
  )
  .openapi(
    postOpendistroSecurityApiUserUsernameAuthtokenRoute,
    postOpendistroSecurityApiUserUsernameAuthtokenRouteHandler,
  )
  .openapi(getOpendistroSecurityApiValidateRoute, getOpendistroSecurityApiValidateRouteHandler)
  .openapi(getOpendistroSecurityApiAllowlistRoute, getOpendistroSecurityApiAllowlistRouteHandler)
  .openapi(putOpendistroSecurityApiAllowlistRoute, putOpendistroSecurityApiAllowlistRouteHandler)
  .openapi(
    patchOpendistroSecurityApiAllowlistRoute,
    patchOpendistroSecurityApiAllowlistRouteHandler,
  )
  .openapi(getOpendistroSecurityAuthinfoRoute, getOpendistroSecurityAuthinfoRouteHandler)
  .openapi(postOpendistroSecurityAuthinfoRoute, postOpendistroSecurityAuthinfoRouteHandler)
  .openapi(getOpendistroSecurityHealthRoute, getOpendistroSecurityHealthRouteHandler)
  .openapi(postOpendistroSecurityHealthRoute, postOpendistroSecurityHealthRouteHandler)
  .openapi(getOpendistroSecurityKibanainfoRoute, getOpendistroSecurityKibanainfoRouteHandler)
  .openapi(postOpendistroSecurityKibanainfoRoute, postOpendistroSecurityKibanainfoRouteHandler)
  .openapi(getOpendistroSecurityTenantinfoRoute, getOpendistroSecurityTenantinfoRouteHandler)
  .openapi(postOpendistroSecurityTenantinfoRoute, postOpendistroSecurityTenantinfoRouteHandler)
  .openapi(postOpendistroSqlRoute, postOpendistroSqlRouteHandler)
  .openapi(postOpendistroSqlExplainRoute, postOpendistroSqlExplainRouteHandler)
  .openapi(postOpendistroSqlCloseRoute, postOpendistroSqlCloseRouteHandler)
  .openapi(putOpendistroSqlSettingsRoute, putOpendistroSqlSettingsRouteHandler)
  .openapi(getOpendistroSqlStatsRoute, getOpendistroSqlStatsRouteHandler)
  .openapi(postOpendistroSqlStatsRoute, postOpendistroSqlStatsRouteHandler)
  .openapi(getClusterNodesHotthreadsRoute, getClusterNodesHotthreadsRouteHandler)
  .openapi(getClusterNodesNodeIdHotthreadsRoute, getClusterNodesNodeIdHotthreadsRouteHandler)
  .openapi(getNodesNodeIdHotthreadsRoute, getNodesNodeIdHotthreadsRouteHandler)
  .openapi(getNodesHotthreadsRoute, getNodesHotthreadsRouteHandler)

export default app
