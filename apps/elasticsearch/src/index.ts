import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApplicationAnalyticsNameRoute,
  deleteApplicationSearchApplicationNameRoute,
  deleteAsyncSearchIdRoute,
  deleteCcrAutoFollowNameRoute,
  deleteClusterVotingConfigExclusionsRoute,
  deleteComponentTemplateNameRoute,
  deleteConnectorConnectorIdRoute,
  deleteConnectorSyncJobConnectorSyncJobIdRoute,
  deleteDanglingIndexUuidRoute,
  deleteDataStreamNameLifecycleRoute,
  deleteDataStreamNameOptionsRoute,
  deleteDataStreamNameRoute,
  deleteEnrichPolicyNameRoute,
  deleteEqlSearchIdRoute,
  deleteIlmPolicyPolicyRoute,
  deleteIndexAliasesNameRoute,
  deleteIndexAliasNameRoute,
  deleteIndexBlockBlockRoute,
  deleteIndexDocIdRoute,
  deleteIndexRoute,
  deleteIndexTemplateNameRoute,
  deleteInferenceInferenceIdRoute,
  deleteInferenceRegionPolicyRoute,
  deleteInferenceTaskTypeInferenceIdRoute,
  deleteIngestGeoipDatabaseIdRoute,
  deleteIngestIpLocationDatabaseIdRoute,
  deleteIngestPipelineIdRoute,
  deleteLicenseRoute,
  deleteLogstashPipelineIdRoute,
  deleteMlAnomalyDetectorsJobIdForecastForecastIdRoute,
  deleteMlAnomalyDetectorsJobIdForecastRoute,
  deleteMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRoute,
  deleteMlAnomalyDetectorsJobIdRoute,
  deleteMlCalendarsCalendarIdEventsEventIdRoute,
  deleteMlCalendarsCalendarIdJobsJobIdRoute,
  deleteMlCalendarsCalendarIdRoute,
  deleteMlDatafeedsDatafeedIdRoute,
  deleteMlDataFrameAnalyticsIdRoute,
  deleteMlDeleteExpiredDataJobIdRoute,
  deleteMlDeleteExpiredDataRoute,
  deleteMlFiltersFilterIdRoute,
  deleteMlTrainedModelsModelIdModelAliasesModelAliasRoute,
  deleteMlTrainedModelsModelIdRoute,
  deleteNodesNodeIdRepositoriesMeteringMaxArchiveVersionRoute,
  deletePitRoute,
  deleteQueryAsyncIdRoute,
  deleteQueryDatasetNameRoute,
  deleteQueryDataSourceNameRoute,
  deleteQueryRulesRulesetIdRoute,
  deleteQueryRulesRulesetIdRuleRuleIdRoute,
  deleteQueryViewNameRoute,
  deleteRollupJobIdRoute,
  deleteScriptsIdRoute,
  deleteSearchScrollRoute,
  deleteSearchScrollScrollIdRoute,
  deleteSecurityApiKeyRoute,
  deleteSecurityOauth2TokenRoute,
  deleteSecurityPrivilegeApplicationNameRoute,
  deleteSecurityRoleMappingNameRoute,
  deleteSecurityRoleNameRoute,
  deleteSecurityRoleRoute,
  deleteSecurityServiceNamespaceServiceCredentialTokenNameRoute,
  deleteSecurityServiceNamespaceServiceRoute,
  deleteSecurityUserUsernameRoute,
  deleteSlmPolicyPolicyIdRoute,
  deleteSnapshotRepositoryRoute,
  deleteSnapshotRepositorySnapshotRoute,
  deleteSqlAsyncDeleteIdRoute,
  deleteSynonymsIdRoute,
  deleteSynonymsSetIdRuleIdRoute,
  deleteTemplateNameRoute,
  deleteTransformTransformIdRoute,
  deleteWatcherWatchIdRoute,
  getAliasNameRoute,
  getAliasRoute,
  getAnalyzeRoute,
  getApplicationAnalyticsNameRoute,
  getApplicationAnalyticsRoute,
  getApplicationSearchApplicationNameRoute,
  getApplicationSearchApplicationNameSearchRoute,
  getApplicationSearchApplicationRoute,
  getAsyncSearchIdRoute,
  getAsyncSearchStatusIdRoute,
  getCatAliasesNameRoute,
  getCatAliasesRoute,
  getCatAllocationNodeIdRoute,
  getCatAllocationRoute,
  getCatCircuitBreakerCircuitBreakerPatternsRoute,
  getCatCircuitBreakerRoute,
  getCatComponentTemplatesNameRoute,
  getCatComponentTemplatesRoute,
  getCatCountIndexRoute,
  getCatCountRoute,
  getCatFielddataFieldsRoute,
  getCatFielddataRoute,
  getCatHealthRoute,
  getCatIndicesIndexRoute,
  getCatIndicesRoute,
  getCatMasterRoute,
  getCatMlAnomalyDetectorsJobIdRoute,
  getCatMlAnomalyDetectorsRoute,
  getCatMlDatafeedsDatafeedIdRoute,
  getCatMlDatafeedsRoute,
  getCatMlDataFrameAnalyticsIdRoute,
  getCatMlDataFrameAnalyticsRoute,
  getCatMlTrainedModelsModelIdRoute,
  getCatMlTrainedModelsRoute,
  getCatNodeattrsRoute,
  getCatNodesRoute,
  getCatPendingTasksRoute,
  getCatPluginsRoute,
  getCatRecoveryIndexRoute,
  getCatRecoveryRoute,
  getCatRepositoriesRoute,
  getCatRoute,
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
  getCatTransformsRoute,
  getCatTransformsTransformIdRoute,
  getCcrAutoFollowNameRoute,
  getCcrAutoFollowRoute,
  getCcrStatsRoute,
  getClusterAllocationExplainRoute,
  getClusterHealthIndexRoute,
  getClusterHealthRoute,
  getClusterPendingTasksRoute,
  getClusterSettingsRoute,
  getClusterStateMetricIndexRoute,
  getClusterStateMetricRoute,
  getClusterStateRoute,
  getClusterStatsNodesNodeIdRoute,
  getClusterStatsRoute,
  getComponentTemplateNameRoute,
  getComponentTemplateRoute,
  getConnectorConnectorIdRoute,
  getConnectorRoute,
  getConnectorSyncJobConnectorSyncJobIdRoute,
  getConnectorSyncJobRoute,
  getCountRoute,
  getDanglingRoute,
  getDataStreamNameLifecycleRoute,
  getDataStreamNameMappingsRoute,
  getDataStreamNameOptionsRoute,
  getDataStreamNameRoute,
  getDataStreamNameSettingsRoute,
  getDataStreamNameStatsRoute,
  getDataStreamRoute,
  getDataStreamStatsRoute,
  getEnrichPolicyNameRoute,
  getEnrichPolicyRoute,
  getEnrichStatsRoute,
  getEqlSearchIdRoute,
  getEqlSearchStatusIdRoute,
  getFeaturesRoute,
  getFieldCapsRoute,
  getFleetFleetMsearchRoute,
  getFlushRoute,
  getHealthReportFeatureRoute,
  getHealthReportRoute,
  getIlmPolicyPolicyRoute,
  getIlmPolicyRoute,
  getIlmStatusRoute,
  getIndexAliasNameRoute,
  getIndexAliasRoute,
  getIndexAnalyzeRoute,
  getIndexCcrInfoRoute,
  getIndexCcrStatsRoute,
  getIndexCountRoute,
  getIndexDocIdRoute,
  getIndexEqlSearchRoute,
  getIndexExplainIdRoute,
  getIndexFieldCapsRoute,
  getIndexFieldUsageStatsRoute,
  getIndexFleetFleetMsearchRoute,
  getIndexFleetFleetSearchRoute,
  getIndexFleetGlobalCheckpointsRoute,
  getIndexFlushRoute,
  getIndexGraphExploreRoute,
  getIndexIlmExplainRoute,
  getIndexKnnEvalRoute,
  getIndexLifecycleExplainRoute,
  getIndexMappingFieldFieldsRoute,
  getIndexMappingRoute,
  getIndexMgetRoute,
  getIndexMigrationDeprecationsRoute,
  getIndexMsearchRoute,
  getIndexMsearchTemplateRoute,
  getIndexMtermvectorsRoute,
  getIndexMvtFieldZoomXYRoute,
  getIndexRankEvalRoute,
  getIndexRecoveryRoute,
  getIndexRefreshRoute,
  getIndexReloadSearchAnalyzersRoute,
  getIndexRollupDataRoute,
  getIndexRollupSearchRoute,
  getIndexRoute,
  getIndexSearchableSnapshotsStatsRoute,
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
  getIndexTermsEnumRoute,
  getIndexTermvectorsIdRoute,
  getIndexTermvectorsRoute,
  getIndexValidateQueryRoute,
  getInferenceInferenceIdRoute,
  getInferenceRegionPolicyRoute,
  getInferenceRoute,
  getInferenceTaskTypeAllRoute,
  getInferenceTaskTypeInferenceIdRoute,
  getInfoTargetRoute,
  getIngestGeoipDatabaseIdRoute,
  getIngestGeoipDatabaseRoute,
  getIngestGeoipStatsRoute,
  getIngestIndexSimulateRoute,
  getIngestIpLocationDatabaseIdRoute,
  getIngestIpLocationDatabaseRoute,
  getIngestPipelineIdRoute,
  getIngestPipelineIdSimulateRoute,
  getIngestPipelineRoute,
  getIngestPipelineSimulateRoute,
  getIngestProcessorGrokRoute,
  getIngestSimulateRoute,
  getLicenseBasicStatusRoute,
  getLicenseRoute,
  getLicenseTrialStatusRoute,
  getLifecycleStatsRoute,
  getLogstashPipelineIdRoute,
  getLogstashPipelineRoute,
  getMappingFieldFieldsRoute,
  getMappingRoute,
  getMgetRoute,
  getMigrationDeprecationsRoute,
  getMigrationReindexIndexStatusRoute,
  getMigrationSystemFeaturesRoute,
  getMlAnomalyDetectorsJobIdModelSnapshotsRoute,
  getMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRoute,
  getMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdUpgradeStatsRoute,
  getMlAnomalyDetectorsJobIdResultsBucketsRoute,
  getMlAnomalyDetectorsJobIdResultsBucketsTimestampRoute,
  getMlAnomalyDetectorsJobIdResultsCategoriesCategoryIdRoute,
  getMlAnomalyDetectorsJobIdResultsCategoriesRoute,
  getMlAnomalyDetectorsJobIdResultsInfluencersRoute,
  getMlAnomalyDetectorsJobIdResultsOverallBucketsRoute,
  getMlAnomalyDetectorsJobIdResultsRecordsRoute,
  getMlAnomalyDetectorsJobIdRoute,
  getMlAnomalyDetectorsJobIdStatsRoute,
  getMlAnomalyDetectorsRoute,
  getMlAnomalyDetectorsStatsRoute,
  getMlCalendarsCalendarIdEventsRoute,
  getMlCalendarsCalendarIdRoute,
  getMlCalendarsRoute,
  getMlDatafeedsDatafeedIdPreviewRoute,
  getMlDatafeedsDatafeedIdRoute,
  getMlDatafeedsDatafeedIdStatsRoute,
  getMlDatafeedsPreviewRoute,
  getMlDatafeedsRoute,
  getMlDatafeedsStatsRoute,
  getMlDataFrameAnalyticsExplainRoute,
  getMlDataFrameAnalyticsIdExplainRoute,
  getMlDataFrameAnalyticsIdPreviewRoute,
  getMlDataFrameAnalyticsIdRoute,
  getMlDataFrameAnalyticsIdStatsRoute,
  getMlDataFrameAnalyticsPreviewRoute,
  getMlDataFrameAnalyticsRoute,
  getMlDataFrameAnalyticsStatsRoute,
  getMlFiltersFilterIdRoute,
  getMlFiltersRoute,
  getMlInfoRoute,
  getMlMemoryNodeIdStatsRoute,
  getMlMemoryStatsRoute,
  getMlTrainedModelsModelIdRoute,
  getMlTrainedModelsModelIdStatsRoute,
  getMlTrainedModelsRoute,
  getMlTrainedModelsStatsRoute,
  getMsearchRoute,
  getMsearchTemplateRoute,
  getMtermvectorsRoute,
  getNodesHotThreadsRoute,
  getNodesMetricRoute,
  getNodesNodeIdHotThreadsRoute,
  getNodesNodeIdMetricRoute,
  getNodesNodeIdRepositoriesMeteringRoute,
  getNodesNodeIdRoute,
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
  getPrometheusApiV1StatusBuildinfoRoute,
  getPrometheusIndexApiV1StatusBuildinfoRoute,
  getQueryAsyncIdRoute,
  getQueryDatasetNameRoute,
  getQueryDatasetRoute,
  getQueryDataSourceNameRoute,
  getQueryDataSourceRoute,
  getQueryQueriesIdRoute,
  getQueryQueriesRoute,
  getQueryRulesRoute,
  getQueryRulesRulesetIdRoute,
  getQueryRulesRulesetIdRuleRuleIdRoute,
  getQueryViewNameRoute,
  getQueryViewRoute,
  getRankEvalRoute,
  getRecoveryRoute,
  getRefreshRoute,
  getReindexRoute,
  getReindexTaskIdRoute,
  getRemoteInfoRoute,
  getRenderTemplateIdRoute,
  getRenderTemplateRoute,
  getResolveClusterNameRoute,
  getResolveClusterRoute,
  getResolveIndexNameRoute,
  getRollupDataIdRoute,
  getRollupDataRoute,
  getRollupJobIdRoute,
  getRollupJobRoute,
  getRoute,
  getScriptContextRoute,
  getScriptLanguageRoute,
  getScriptsIdRoute,
  getScriptsPainlessExecuteRoute,
  getSearchableSnapshotsCacheStatsRoute,
  getSearchableSnapshotsNodeIdCacheStatsRoute,
  getSearchableSnapshotsStatsRoute,
  getSearchRoute,
  getSearchScrollRoute,
  getSearchScrollScrollIdRoute,
  getSearchShardsRoute,
  getSearchTemplateRoute,
  getSecurityApiKeyRoute,
  getSecurityAuthenticateRoute,
  getSecurityEnrollKibanaRoute,
  getSecurityEnrollNodeRoute,
  getSecurityPrivilegeApplicationNameRoute,
  getSecurityPrivilegeApplicationRoute,
  getSecurityPrivilegeBuiltinRoute,
  getSecurityPrivilegeRoute,
  getSecurityProfileHasPrivilegesRoute,
  getSecurityProfileSuggestRoute,
  getSecurityProfileUidRoute,
  getSecurityQueryApiKeyRoute,
  getSecurityQueryRoleRoute,
  getSecurityQueryUserRoute,
  getSecurityRoleMappingNameRoute,
  getSecurityRoleMappingRoute,
  getSecurityRoleNameRoute,
  getSecurityRoleRoute,
  getSecuritySamlMetadataRealmNameRoute,
  getSecurityServiceNamespaceRoute,
  getSecurityServiceNamespaceServiceCredentialRoute,
  getSecurityServiceNamespaceServiceRoute,
  getSecurityServiceRoute,
  getSecuritySettingsRoute,
  getSecurityStatsRoute,
  getSecurityUserHasPrivilegesRoute,
  getSecurityUserPrivilegesRoute,
  getSecurityUserRoute,
  getSecurityUserUserHasPrivilegesRoute,
  getSecurityUserUsernameRoute,
  getSegmentsRoute,
  getSettingsNameRoute,
  getSettingsRoute,
  getShardStoresRoute,
  getSlmPolicyPolicyIdRoute,
  getSlmPolicyRoute,
  getSlmStatsRoute,
  getSlmStatusRoute,
  getSnapshotRepositoryRoute,
  getSnapshotRepositorySnapshotRoute,
  getSnapshotRepositorySnapshotStatusRoute,
  getSnapshotRepositoryStatusRoute,
  getSnapshotRoute,
  getSnapshotStatusRoute,
  getSqlAsyncIdRoute,
  getSqlAsyncStatusIdRoute,
  getSqlRoute,
  getSqlTranslateRoute,
  getSslCertificatesRoute,
  getStatsMetricRoute,
  getStatsRoute,
  getStreamsStatusRoute,
  getSynonymsIdRoute,
  getSynonymsRoute,
  getSynonymsSetIdRuleIdRoute,
  getTasksRoute,
  getTasksTaskIdRoute,
  getTemplateNameRoute,
  getTemplateRoute,
  getTextStructureFindFieldStructureRoute,
  getTextStructureFindMessageStructureRoute,
  getTextStructureTestGrokPatternRoute,
  getTransformNodeStatsRoute,
  getTransformPreviewRoute,
  getTransformRoute,
  getTransformTransformIdPreviewRoute,
  getTransformTransformIdRoute,
  getTransformTransformIdStatsRoute,
  getValidateQueryRoute,
  getWatcherQueryWatchesRoute,
  getWatcherSettingsRoute,
  getWatcherStatsMetricRoute,
  getWatcherStatsRoute,
  getWatcherWatchIdRoute,
  getXpackRoute,
  getXpackUsageRoute,
  headAliasNameRoute,
  headComponentTemplateNameRoute,
  headIndexAliasNameRoute,
  headIndexDocIdRoute,
  headIndexRoute,
  headIndexSourceIdRoute,
  headIndexTemplateNameRoute,
  headRoute,
  headTemplateNameRoute,
  postAliasesRoute,
  postAliasRolloverNewIndexRoute,
  postAliasRolloverRoute,
  postAnalyzeRoute,
  postApplicationAnalyticsCollectionNameEventEventTypeRoute,
  postApplicationSearchApplicationNameRenderQueryRoute,
  postApplicationSearchApplicationNameSearchRoute,
  postAsyncSearchRoute,
  postBulkRoute,
  postCacheClearRoute,
  postCatCountIndexRoute,
  postCatCountRoute,
  postCcrAutoFollowNamePauseRoute,
  postCcrAutoFollowNameResumeRoute,
  postClusterAllocationExplainRoute,
  postClusterRerouteRoute,
  postClusterVotingConfigExclusionsRoute,
  postComponentTemplateNameRoute,
  postConnectorRoute,
  postConnectorSyncJobRoute,
  postCountRoute,
  postCreateFromSourceDestRoute,
  postDanglingIndexUuidRoute,
  postDataStreamMigrateNameRoute,
  postDataStreamModifyRoute,
  postDataStreamPromoteNameRoute,
  postDeleteByQueryTaskIdRethrottleRoute,
  postEncryptionResetRoute,
  postFeaturesResetRoute,
  postFieldCapsRoute,
  postFleetFleetMsearchRoute,
  postFlushRoute,
  postForcemergeRoute,
  postIlmMigrateToDataTiersRoute,
  postIlmMoveIndexRoute,
  postIlmStartRoute,
  postIlmStopRoute,
  postIndexAliasesNameRoute,
  postIndexAliasNameRoute,
  postIndexAnalyzeRoute,
  postIndexAsyncSearchRoute,
  postIndexBulkRoute,
  postIndexCacheClearRoute,
  postIndexCcrForgetFollowerRoute,
  postIndexCcrPauseFollowRoute,
  postIndexCcrResumeFollowRoute,
  postIndexCcrUnfollowRoute,
  postIndexCloneTargetRoute,
  postIndexCloseRoute,
  postIndexCountRoute,
  postIndexCreateIdRoute,
  postIndexDeleteByQueryRoute,
  postIndexDiskUsageRoute,
  postIndexDocIdRoute,
  postIndexDocRoute,
  postIndexDownsampleTargetIndexRoute,
  postIndexEqlSearchRoute,
  postIndexExplainIdRoute,
  postIndexFieldCapsRoute,
  postIndexFleetFleetMsearchRoute,
  postIndexFleetFleetSearchRoute,
  postIndexFlushRoute,
  postIndexForcemergeRoute,
  postIndexGraphExploreRoute,
  postIndexIlmRemoveRoute,
  postIndexIlmRetryRoute,
  postIndexKnnEvalRoute,
  postIndexMappingRoute,
  postIndexMgetRoute,
  postIndexMsearchRoute,
  postIndexMsearchTemplateRoute,
  postIndexMtermvectorsRoute,
  postIndexMvtFieldZoomXYRoute,
  postIndexOpenRoute,
  postIndexPitRoute,
  postIndexRankEvalRoute,
  postIndexRefreshRoute,
  postIndexReloadSearchAnalyzersRoute,
  postIndexRollupSearchRoute,
  postIndexSearchableSnapshotsCacheClearRoute,
  postIndexSearchRoute,
  postIndexSearchShardsRoute,
  postIndexSearchTemplateRoute,
  postIndexShrinkTargetRoute,
  postIndexSplitTargetRoute,
  postIndexTemplateNameRoute,
  postIndexTemplateSimulateIndexNameRoute,
  postIndexTemplateSimulateNameRoute,
  postIndexTemplateSimulateRoute,
  postIndexTermsEnumRoute,
  postIndexTermvectorsIdRoute,
  postIndexTermvectorsRoute,
  postIndexUpdateByQueryRoute,
  postIndexUpdateIdRoute,
  postIndexValidateQueryRoute,
  postInferenceChatCompletionInferenceIdRoute,
  postInferenceChatCompletionInferenceIdStreamRoute,
  postInferenceCompletionInferenceIdRoute,
  postInferenceCompletionInferenceIdStreamRoute,
  postInferenceDecisionInferenceIdRoute,
  postInferenceDocumentExtractionInferenceIdRoute,
  postInferenceEmbeddingInferenceIdRoute,
  postInferenceInferenceIdRoute,
  postInferenceRerankInferenceIdRoute,
  postInferenceSparseEmbeddingInferenceIdRoute,
  postInferenceTaskTypeInferenceIdRoute,
  postInferenceTextEmbeddingInferenceIdRoute,
  postIngestIndexSimulateRoute,
  postIngestPipelineIdSimulateRoute,
  postIngestPipelineSimulateRoute,
  postIngestSimulateRoute,
  postLicenseRoute,
  postLicenseStartBasicRoute,
  postLicenseStartTrialRoute,
  postMgetRoute,
  postMigrationReindexIndexCancelRoute,
  postMigrationReindexRoute,
  postMigrationSystemFeaturesRoute,
  postMlAnomalyDetectorsEstimateModelMemoryRoute,
  postMlAnomalyDetectorsJobIdCloseRoute,
  postMlAnomalyDetectorsJobIdDataRoute,
  postMlAnomalyDetectorsJobIdFlushRoute,
  postMlAnomalyDetectorsJobIdForecastRoute,
  postMlAnomalyDetectorsJobIdModelSnapshotsRoute,
  postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRevertRoute,
  postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRoute,
  postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdUpdateRoute,
  postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdUpgradeRoute,
  postMlAnomalyDetectorsJobIdOpenRoute,
  postMlAnomalyDetectorsJobIdResetRoute,
  postMlAnomalyDetectorsJobIdResultsBucketsRoute,
  postMlAnomalyDetectorsJobIdResultsBucketsTimestampRoute,
  postMlAnomalyDetectorsJobIdResultsCategoriesCategoryIdRoute,
  postMlAnomalyDetectorsJobIdResultsCategoriesRoute,
  postMlAnomalyDetectorsJobIdResultsInfluencersRoute,
  postMlAnomalyDetectorsJobIdResultsOverallBucketsRoute,
  postMlAnomalyDetectorsJobIdResultsRecordsRoute,
  postMlAnomalyDetectorsJobIdUpdateRoute,
  postMlCalendarsCalendarIdEventsRoute,
  postMlCalendarsCalendarIdRoute,
  postMlCalendarsRoute,
  postMlDatafeedsDatafeedIdPreviewRoute,
  postMlDatafeedsDatafeedIdStartRoute,
  postMlDatafeedsDatafeedIdStopRoute,
  postMlDatafeedsDatafeedIdUpdateRoute,
  postMlDatafeedsPreviewRoute,
  postMlDataFrameAnalyticsExplainRoute,
  postMlDataFrameAnalyticsIdExplainRoute,
  postMlDataFrameAnalyticsIdPreviewRoute,
  postMlDataFrameAnalyticsIdStartRoute,
  postMlDataFrameAnalyticsIdStopRoute,
  postMlDataFrameAnalyticsIdUpdateRoute,
  postMlDataFrameAnalyticsPreviewRoute,
  postMlDataFrameEvaluateRoute,
  postMlFiltersFilterIdUpdateRoute,
  postMlSetUpgradeModeRoute,
  postMlTrainedModelsModelIdDeploymentCacheClearRoute,
  postMlTrainedModelsModelIdDeploymentStartRoute,
  postMlTrainedModelsModelIdDeploymentStopRoute,
  postMlTrainedModelsModelIdDeploymentUpdateRoute,
  postMlTrainedModelsModelIdInferRoute,
  postMsearchRoute,
  postMsearchTemplateRoute,
  postMtermvectorsRoute,
  postNodesNodeIdReloadSecureSettingsRoute,
  postNodesReloadSecureSettingsRoute,
  postQueryAsyncIdStopRoute,
  postQueryAsyncRoute,
  postQueryRoute,
  postQueryRulesRulesetIdTestRoute,
  postRankEvalRoute,
  postRefreshRoute,
  postReindexRoute,
  postReindexTaskIdCancelRoute,
  postReindexTaskIdRethrottleRoute,
  postRenderTemplateIdRoute,
  postRenderTemplateRoute,
  postResolveIndexNameRoute,
  postRollupJobIdStartRoute,
  postRollupJobIdStopRoute,
  postScriptsIdContextRoute,
  postScriptsIdRoute,
  postScriptsPainlessExecuteRoute,
  postSearchableSnapshotsCacheClearRoute,
  postSearchRoute,
  postSearchScrollRoute,
  postSearchScrollScrollIdRoute,
  postSearchShardsRoute,
  postSearchTemplateRoute,
  postSecurityApiKeyBulkUpdateRoute,
  postSecurityApiKeyCloneRoute,
  postSecurityApiKeyGrantRoute,
  postSecurityApiKeyIdsClearCacheRoute,
  postSecurityApiKeyRoute,
  postSecurityCrossClusterApiKeyRoute,
  postSecurityDelegatePkiRoute,
  postSecurityOauth2TokenRoute,
  postSecurityOidcAuthenticateRoute,
  postSecurityOidcLogoutRoute,
  postSecurityOidcPrepareRoute,
  postSecurityPrivilegeApplicationClearCacheRoute,
  postSecurityPrivilegeRoute,
  postSecurityProfileActivateRoute,
  postSecurityProfileHasPrivilegesRoute,
  postSecurityProfileSuggestRoute,
  postSecurityProfileUidDataRoute,
  postSecurityProfileUidDisableRoute,
  postSecurityProfileUidEnableRoute,
  postSecurityQueryApiKeyRoute,
  postSecurityQueryRoleRoute,
  postSecurityQueryUserRoute,
  postSecurityRealmRealmsClearCacheRoute,
  postSecurityRoleMappingNameRoute,
  postSecurityRoleNameClearCacheRoute,
  postSecurityRoleNameRoute,
  postSecurityRoleRoute,
  postSecuritySamlAuthenticateRoute,
  postSecuritySamlCompleteLogoutRoute,
  postSecuritySamlInvalidateRoute,
  postSecuritySamlLogoutRoute,
  postSecuritySamlPrepareRoute,
  postSecurityServiceNamespaceServiceCredentialTokenNameClearCacheRoute,
  postSecurityServiceNamespaceServiceCredentialTokenNameRoute,
  postSecurityServiceNamespaceServiceCredentialTokenRoute,
  postSecurityUserHasPrivilegesRoute,
  postSecurityUserPasswordRoute,
  postSecurityUserUserHasPrivilegesRoute,
  postSecurityUserUsernameDisableRoute,
  postSecurityUserUsernameEnableRoute,
  postSecurityUserUsernamePasswordRoute,
  postSecurityUserUsernameRoute,
  postSlmExecuteRetentionRoute,
  postSlmStartRoute,
  postSlmStopRoute,
  postSnapshotRepositoryAnalyzeRoute,
  postSnapshotRepositoryCleanupRoute,
  postSnapshotRepositoryRoute,
  postSnapshotRepositorySnapshotMountRoute,
  postSnapshotRepositorySnapshotRestoreRoute,
  postSnapshotRepositorySnapshotRoute,
  postSnapshotRepositoryVerifyIntegrityRoute,
  postSnapshotRepositoryVerifyRoute,
  postSqlCloseRoute,
  postSqlRoute,
  postSqlTranslateRoute,
  postStreamsNameDisableRoute,
  postStreamsNameEnableRoute,
  postTasksCancelRoute,
  postTasksTaskIdCancelRoute,
  postTemplateNameRoute,
  postTextStructureFindMessageStructureRoute,
  postTextStructureFindStructureRoute,
  postTextStructureTestGrokPatternRoute,
  postTransformPreviewRoute,
  postTransformSetUpgradeModeRoute,
  postTransformTransformIdPreviewRoute,
  postTransformTransformIdResetRoute,
  postTransformTransformIdScheduleNowRoute,
  postTransformTransformIdStartRoute,
  postTransformTransformIdStopRoute,
  postTransformTransformIdUpdateRoute,
  postTransformUpgradeRoute,
  postUpdateByQueryTaskIdRethrottleRoute,
  postValidateQueryRoute,
  postWatcherQueryWatchesRoute,
  postWatcherStartRoute,
  postWatcherStopRoute,
  postWatcherWatchExecuteRoute,
  postWatcherWatchIdExecuteRoute,
  postWatcherWatchIdRoute,
  postWatcherWatchWatchIdAckActionIdRoute,
  postWatcherWatchWatchIdAckRoute,
  postWatcherWatchWatchIdActivateRoute,
  postWatcherWatchWatchIdDeactivateRoute,
  putApplicationAnalyticsNameRoute,
  putApplicationSearchApplicationNameRoute,
  putBulkRoute,
  putCcrAutoFollowNameRoute,
  putClusterSettingsRoute,
  putComponentTemplateNameRoute,
  putConnectorConnectorIdApiKeyIdRoute,
  putConnectorConnectorIdCheckInRoute,
  putConnectorConnectorIdConfigurationRoute,
  putConnectorConnectorIdErrorRoute,
  putConnectorConnectorIdFeaturesRoute,
  putConnectorConnectorIdFilteringActivateRoute,
  putConnectorConnectorIdFilteringRoute,
  putConnectorConnectorIdFilteringValidationRoute,
  putConnectorConnectorIdIndexNameRoute,
  putConnectorConnectorIdNameRoute,
  putConnectorConnectorIdNativeRoute,
  putConnectorConnectorIdPipelineRoute,
  putConnectorConnectorIdRoute,
  putConnectorConnectorIdSchedulingRoute,
  putConnectorConnectorIdServiceTypeRoute,
  putConnectorConnectorIdStatusRoute,
  putConnectorRoute,
  putConnectorSyncJobConnectorSyncJobIdCancelRoute,
  putConnectorSyncJobConnectorSyncJobIdCheckInRoute,
  putConnectorSyncJobConnectorSyncJobIdClaimRoute,
  putConnectorSyncJobConnectorSyncJobIdErrorRoute,
  putConnectorSyncJobConnectorSyncJobIdStatsRoute,
  putCreateFromSourceDestRoute,
  putDataStreamNameLifecycleRoute,
  putDataStreamNameMappingsRoute,
  putDataStreamNameOptionsRoute,
  putDataStreamNameRoute,
  putDataStreamNameSettingsRoute,
  putEnrichPolicyNameExecuteRoute,
  putEnrichPolicyNameRoute,
  putIlmPolicyPolicyRoute,
  putIndexAliasesNameRoute,
  putIndexAliasNameRoute,
  putIndexBlockBlockRoute,
  putIndexBulkRoute,
  putIndexCcrFollowRoute,
  putIndexCloneTargetRoute,
  putIndexCreateIdRoute,
  putIndexDocIdRoute,
  putIndexMappingRoute,
  putIndexRoute,
  putIndexSettingsRoute,
  putIndexShrinkTargetRoute,
  putIndexSplitTargetRoute,
  putIndexTemplateNameRoute,
  putInferenceInferenceIdRoute,
  putInferenceInferenceIdUpdateRoute,
  putInferenceRegionPolicyRoute,
  putInferenceTaskTypeAi21InferenceIdRoute,
  putInferenceTaskTypeAlibabacloudInferenceIdRoute,
  putInferenceTaskTypeAmazonbedrockInferenceIdRoute,
  putInferenceTaskTypeAmazonsagemakerInferenceIdRoute,
  putInferenceTaskTypeAnthropicInferenceIdRoute,
  putInferenceTaskTypeAzureaistudioInferenceIdRoute,
  putInferenceTaskTypeAzureopenaiInferenceIdRoute,
  putInferenceTaskTypeCohereInferenceIdRoute,
  putInferenceTaskTypeContextualaiInferenceIdRoute,
  putInferenceTaskTypeCustomInferenceIdRoute,
  putInferenceTaskTypeDeepseekInferenceIdRoute,
  putInferenceTaskTypeElasticsearchInferenceIdRoute,
  putInferenceTaskTypeElserInferenceIdRoute,
  putInferenceTaskTypeFireworksaiInferenceIdRoute,
  putInferenceTaskTypeGoogleaistudioInferenceIdRoute,
  putInferenceTaskTypeGooglevertexaiInferenceIdRoute,
  putInferenceTaskTypeGroqInferenceIdRoute,
  putInferenceTaskTypeHuggingfaceInferenceIdRoute,
  putInferenceTaskTypeInferenceIdRoute,
  putInferenceTaskTypeInferenceIdUpdateRoute,
  putInferenceTaskTypeJinaaiInferenceIdRoute,
  putInferenceTaskTypeLlamaInferenceIdRoute,
  putInferenceTaskTypeMistralInferenceIdRoute,
  putInferenceTaskTypeNvidiaInferenceIdRoute,
  putInferenceTaskTypeOpenaiInferenceIdRoute,
  putInferenceTaskTypeOpenshiftaiInferenceIdRoute,
  putInferenceTaskTypeVoyageaiInferenceIdRoute,
  putInferenceTaskTypeWatsonxInferenceIdRoute,
  putIngestGeoipDatabaseIdRoute,
  putIngestIpLocationDatabaseIdRoute,
  putIngestPipelineIdRoute,
  putLicenseRoute,
  putLogstashPipelineIdRoute,
  putMlAnomalyDetectorsJobIdRoute,
  putMlCalendarsCalendarIdJobsJobIdRoute,
  putMlCalendarsCalendarIdRoute,
  putMlDatafeedsDatafeedIdRoute,
  putMlDataFrameAnalyticsIdRoute,
  putMlFiltersFilterIdRoute,
  putMlTrainedModelsModelIdDefinitionPartRoute,
  putMlTrainedModelsModelIdModelAliasesModelAliasRoute,
  putMlTrainedModelsModelIdRoute,
  putMlTrainedModelsModelIdVocabularyRoute,
  putQueryDatasetNameRoute,
  putQueryDataSourceNameRoute,
  putQueryRulesRulesetIdRoute,
  putQueryRulesRulesetIdRuleRuleIdRoute,
  putQueryViewNameRoute,
  putRollupJobIdRoute,
  putScriptsIdContextRoute,
  putScriptsIdRoute,
  putSecurityApiKeyCloneRoute,
  putSecurityApiKeyIdRoute,
  putSecurityApiKeyRoute,
  putSecurityCrossClusterApiKeyIdRoute,
  putSecurityPrivilegeRoute,
  putSecurityProfileUidDataRoute,
  putSecurityProfileUidDisableRoute,
  putSecurityProfileUidEnableRoute,
  putSecurityRoleMappingNameRoute,
  putSecurityRoleNameRoute,
  putSecurityServiceNamespaceServiceCredentialTokenNameRoute,
  putSecurityServiceNamespaceServiceRoute,
  putSecuritySettingsRoute,
  putSecurityUserPasswordRoute,
  putSecurityUserUsernameDisableRoute,
  putSecurityUserUsernameEnableRoute,
  putSecurityUserUsernamePasswordRoute,
  putSecurityUserUsernameRoute,
  putSettingsRoute,
  putSlmPolicyPolicyIdExecuteRoute,
  putSlmPolicyPolicyIdRoute,
  putSnapshotRepositoryRoute,
  putSnapshotRepositorySnapshotCloneTargetSnapshotRoute,
  putSnapshotRepositorySnapshotRoute,
  putSynonymsIdRoute,
  putSynonymsSetIdRuleIdRoute,
  putTemplateNameRoute,
  putTransformTransformIdRoute,
  putWatcherSettingsRoute,
  putWatcherWatchExecuteRoute,
  putWatcherWatchIdExecuteRoute,
  putWatcherWatchIdRoute,
  putWatcherWatchWatchIdAckActionIdRoute,
  putWatcherWatchWatchIdAckRoute,
  putWatcherWatchWatchIdActivateRoute,
  putWatcherWatchWatchIdDeactivateRoute,
} from './routes'
import {
  deleteApplicationAnalyticsNameRouteHandler,
  deleteApplicationSearchApplicationNameRouteHandler,
  deleteAsyncSearchIdRouteHandler,
  deleteCcrAutoFollowNameRouteHandler,
  deleteClusterVotingConfigExclusionsRouteHandler,
  deleteComponentTemplateNameRouteHandler,
  deleteConnectorConnectorIdRouteHandler,
  deleteConnectorSyncJobConnectorSyncJobIdRouteHandler,
  deleteDanglingIndexUuidRouteHandler,
  deleteDataStreamNameLifecycleRouteHandler,
  deleteDataStreamNameOptionsRouteHandler,
  deleteDataStreamNameRouteHandler,
  deleteEnrichPolicyNameRouteHandler,
  deleteEqlSearchIdRouteHandler,
  deleteIlmPolicyPolicyRouteHandler,
  deleteIndexAliasesNameRouteHandler,
  deleteIndexAliasNameRouteHandler,
  deleteIndexBlockBlockRouteHandler,
  deleteIndexDocIdRouteHandler,
  deleteIndexRouteHandler,
  deleteIndexTemplateNameRouteHandler,
  deleteInferenceInferenceIdRouteHandler,
  deleteInferenceRegionPolicyRouteHandler,
  deleteInferenceTaskTypeInferenceIdRouteHandler,
  deleteIngestGeoipDatabaseIdRouteHandler,
  deleteIngestIpLocationDatabaseIdRouteHandler,
  deleteIngestPipelineIdRouteHandler,
  deleteLicenseRouteHandler,
  deleteLogstashPipelineIdRouteHandler,
  deleteMlAnomalyDetectorsJobIdForecastForecastIdRouteHandler,
  deleteMlAnomalyDetectorsJobIdForecastRouteHandler,
  deleteMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRouteHandler,
  deleteMlAnomalyDetectorsJobIdRouteHandler,
  deleteMlCalendarsCalendarIdEventsEventIdRouteHandler,
  deleteMlCalendarsCalendarIdJobsJobIdRouteHandler,
  deleteMlCalendarsCalendarIdRouteHandler,
  deleteMlDatafeedsDatafeedIdRouteHandler,
  deleteMlDataFrameAnalyticsIdRouteHandler,
  deleteMlDeleteExpiredDataJobIdRouteHandler,
  deleteMlDeleteExpiredDataRouteHandler,
  deleteMlFiltersFilterIdRouteHandler,
  deleteMlTrainedModelsModelIdModelAliasesModelAliasRouteHandler,
  deleteMlTrainedModelsModelIdRouteHandler,
  deleteNodesNodeIdRepositoriesMeteringMaxArchiveVersionRouteHandler,
  deletePitRouteHandler,
  deleteQueryAsyncIdRouteHandler,
  deleteQueryDatasetNameRouteHandler,
  deleteQueryDataSourceNameRouteHandler,
  deleteQueryRulesRulesetIdRouteHandler,
  deleteQueryRulesRulesetIdRuleRuleIdRouteHandler,
  deleteQueryViewNameRouteHandler,
  deleteRollupJobIdRouteHandler,
  deleteScriptsIdRouteHandler,
  deleteSearchScrollRouteHandler,
  deleteSearchScrollScrollIdRouteHandler,
  deleteSecurityApiKeyRouteHandler,
  deleteSecurityOauth2TokenRouteHandler,
  deleteSecurityPrivilegeApplicationNameRouteHandler,
  deleteSecurityRoleMappingNameRouteHandler,
  deleteSecurityRoleNameRouteHandler,
  deleteSecurityRoleRouteHandler,
  deleteSecurityServiceNamespaceServiceCredentialTokenNameRouteHandler,
  deleteSecurityServiceNamespaceServiceRouteHandler,
  deleteSecurityUserUsernameRouteHandler,
  deleteSlmPolicyPolicyIdRouteHandler,
  deleteSnapshotRepositoryRouteHandler,
  deleteSnapshotRepositorySnapshotRouteHandler,
  deleteSqlAsyncDeleteIdRouteHandler,
  deleteSynonymsIdRouteHandler,
  deleteSynonymsSetIdRuleIdRouteHandler,
  deleteTemplateNameRouteHandler,
  deleteTransformTransformIdRouteHandler,
  deleteWatcherWatchIdRouteHandler,
  getAliasNameRouteHandler,
  getAliasRouteHandler,
  getAnalyzeRouteHandler,
  getApplicationAnalyticsNameRouteHandler,
  getApplicationAnalyticsRouteHandler,
  getApplicationSearchApplicationNameRouteHandler,
  getApplicationSearchApplicationNameSearchRouteHandler,
  getApplicationSearchApplicationRouteHandler,
  getAsyncSearchIdRouteHandler,
  getAsyncSearchStatusIdRouteHandler,
  getCatAliasesNameRouteHandler,
  getCatAliasesRouteHandler,
  getCatAllocationNodeIdRouteHandler,
  getCatAllocationRouteHandler,
  getCatCircuitBreakerCircuitBreakerPatternsRouteHandler,
  getCatCircuitBreakerRouteHandler,
  getCatComponentTemplatesNameRouteHandler,
  getCatComponentTemplatesRouteHandler,
  getCatCountIndexRouteHandler,
  getCatCountRouteHandler,
  getCatFielddataFieldsRouteHandler,
  getCatFielddataRouteHandler,
  getCatHealthRouteHandler,
  getCatIndicesIndexRouteHandler,
  getCatIndicesRouteHandler,
  getCatMasterRouteHandler,
  getCatMlAnomalyDetectorsJobIdRouteHandler,
  getCatMlAnomalyDetectorsRouteHandler,
  getCatMlDatafeedsDatafeedIdRouteHandler,
  getCatMlDatafeedsRouteHandler,
  getCatMlDataFrameAnalyticsIdRouteHandler,
  getCatMlDataFrameAnalyticsRouteHandler,
  getCatMlTrainedModelsModelIdRouteHandler,
  getCatMlTrainedModelsRouteHandler,
  getCatNodeattrsRouteHandler,
  getCatNodesRouteHandler,
  getCatPendingTasksRouteHandler,
  getCatPluginsRouteHandler,
  getCatRecoveryIndexRouteHandler,
  getCatRecoveryRouteHandler,
  getCatRepositoriesRouteHandler,
  getCatRouteHandler,
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
  getCatTransformsRouteHandler,
  getCatTransformsTransformIdRouteHandler,
  getCcrAutoFollowNameRouteHandler,
  getCcrAutoFollowRouteHandler,
  getCcrStatsRouteHandler,
  getClusterAllocationExplainRouteHandler,
  getClusterHealthIndexRouteHandler,
  getClusterHealthRouteHandler,
  getClusterPendingTasksRouteHandler,
  getClusterSettingsRouteHandler,
  getClusterStateMetricIndexRouteHandler,
  getClusterStateMetricRouteHandler,
  getClusterStateRouteHandler,
  getClusterStatsNodesNodeIdRouteHandler,
  getClusterStatsRouteHandler,
  getComponentTemplateNameRouteHandler,
  getComponentTemplateRouteHandler,
  getConnectorConnectorIdRouteHandler,
  getConnectorRouteHandler,
  getConnectorSyncJobConnectorSyncJobIdRouteHandler,
  getConnectorSyncJobRouteHandler,
  getCountRouteHandler,
  getDanglingRouteHandler,
  getDataStreamNameLifecycleRouteHandler,
  getDataStreamNameMappingsRouteHandler,
  getDataStreamNameOptionsRouteHandler,
  getDataStreamNameRouteHandler,
  getDataStreamNameSettingsRouteHandler,
  getDataStreamNameStatsRouteHandler,
  getDataStreamRouteHandler,
  getDataStreamStatsRouteHandler,
  getEnrichPolicyNameRouteHandler,
  getEnrichPolicyRouteHandler,
  getEnrichStatsRouteHandler,
  getEqlSearchIdRouteHandler,
  getEqlSearchStatusIdRouteHandler,
  getFeaturesRouteHandler,
  getFieldCapsRouteHandler,
  getFleetFleetMsearchRouteHandler,
  getFlushRouteHandler,
  getHealthReportFeatureRouteHandler,
  getHealthReportRouteHandler,
  getIlmPolicyPolicyRouteHandler,
  getIlmPolicyRouteHandler,
  getIlmStatusRouteHandler,
  getIndexAliasNameRouteHandler,
  getIndexAliasRouteHandler,
  getIndexAnalyzeRouteHandler,
  getIndexCcrInfoRouteHandler,
  getIndexCcrStatsRouteHandler,
  getIndexCountRouteHandler,
  getIndexDocIdRouteHandler,
  getIndexEqlSearchRouteHandler,
  getIndexExplainIdRouteHandler,
  getIndexFieldCapsRouteHandler,
  getIndexFieldUsageStatsRouteHandler,
  getIndexFleetFleetMsearchRouteHandler,
  getIndexFleetFleetSearchRouteHandler,
  getIndexFleetGlobalCheckpointsRouteHandler,
  getIndexFlushRouteHandler,
  getIndexGraphExploreRouteHandler,
  getIndexIlmExplainRouteHandler,
  getIndexKnnEvalRouteHandler,
  getIndexLifecycleExplainRouteHandler,
  getIndexMappingFieldFieldsRouteHandler,
  getIndexMappingRouteHandler,
  getIndexMgetRouteHandler,
  getIndexMigrationDeprecationsRouteHandler,
  getIndexMsearchRouteHandler,
  getIndexMsearchTemplateRouteHandler,
  getIndexMtermvectorsRouteHandler,
  getIndexMvtFieldZoomXYRouteHandler,
  getIndexRankEvalRouteHandler,
  getIndexRecoveryRouteHandler,
  getIndexRefreshRouteHandler,
  getIndexReloadSearchAnalyzersRouteHandler,
  getIndexRollupDataRouteHandler,
  getIndexRollupSearchRouteHandler,
  getIndexRouteHandler,
  getIndexSearchableSnapshotsStatsRouteHandler,
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
  getIndexTermsEnumRouteHandler,
  getIndexTermvectorsIdRouteHandler,
  getIndexTermvectorsRouteHandler,
  getIndexValidateQueryRouteHandler,
  getInferenceInferenceIdRouteHandler,
  getInferenceRegionPolicyRouteHandler,
  getInferenceRouteHandler,
  getInferenceTaskTypeAllRouteHandler,
  getInferenceTaskTypeInferenceIdRouteHandler,
  getInfoTargetRouteHandler,
  getIngestGeoipDatabaseIdRouteHandler,
  getIngestGeoipDatabaseRouteHandler,
  getIngestGeoipStatsRouteHandler,
  getIngestIndexSimulateRouteHandler,
  getIngestIpLocationDatabaseIdRouteHandler,
  getIngestIpLocationDatabaseRouteHandler,
  getIngestPipelineIdRouteHandler,
  getIngestPipelineIdSimulateRouteHandler,
  getIngestPipelineRouteHandler,
  getIngestPipelineSimulateRouteHandler,
  getIngestProcessorGrokRouteHandler,
  getIngestSimulateRouteHandler,
  getLicenseBasicStatusRouteHandler,
  getLicenseRouteHandler,
  getLicenseTrialStatusRouteHandler,
  getLifecycleStatsRouteHandler,
  getLogstashPipelineIdRouteHandler,
  getLogstashPipelineRouteHandler,
  getMappingFieldFieldsRouteHandler,
  getMappingRouteHandler,
  getMgetRouteHandler,
  getMigrationDeprecationsRouteHandler,
  getMigrationReindexIndexStatusRouteHandler,
  getMigrationSystemFeaturesRouteHandler,
  getMlAnomalyDetectorsJobIdModelSnapshotsRouteHandler,
  getMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRouteHandler,
  getMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdUpgradeStatsRouteHandler,
  getMlAnomalyDetectorsJobIdResultsBucketsRouteHandler,
  getMlAnomalyDetectorsJobIdResultsBucketsTimestampRouteHandler,
  getMlAnomalyDetectorsJobIdResultsCategoriesCategoryIdRouteHandler,
  getMlAnomalyDetectorsJobIdResultsCategoriesRouteHandler,
  getMlAnomalyDetectorsJobIdResultsInfluencersRouteHandler,
  getMlAnomalyDetectorsJobIdResultsOverallBucketsRouteHandler,
  getMlAnomalyDetectorsJobIdResultsRecordsRouteHandler,
  getMlAnomalyDetectorsJobIdRouteHandler,
  getMlAnomalyDetectorsJobIdStatsRouteHandler,
  getMlAnomalyDetectorsRouteHandler,
  getMlAnomalyDetectorsStatsRouteHandler,
  getMlCalendarsCalendarIdEventsRouteHandler,
  getMlCalendarsCalendarIdRouteHandler,
  getMlCalendarsRouteHandler,
  getMlDatafeedsDatafeedIdPreviewRouteHandler,
  getMlDatafeedsDatafeedIdRouteHandler,
  getMlDatafeedsDatafeedIdStatsRouteHandler,
  getMlDatafeedsPreviewRouteHandler,
  getMlDatafeedsRouteHandler,
  getMlDatafeedsStatsRouteHandler,
  getMlDataFrameAnalyticsExplainRouteHandler,
  getMlDataFrameAnalyticsIdExplainRouteHandler,
  getMlDataFrameAnalyticsIdPreviewRouteHandler,
  getMlDataFrameAnalyticsIdRouteHandler,
  getMlDataFrameAnalyticsIdStatsRouteHandler,
  getMlDataFrameAnalyticsPreviewRouteHandler,
  getMlDataFrameAnalyticsRouteHandler,
  getMlDataFrameAnalyticsStatsRouteHandler,
  getMlFiltersFilterIdRouteHandler,
  getMlFiltersRouteHandler,
  getMlInfoRouteHandler,
  getMlMemoryNodeIdStatsRouteHandler,
  getMlMemoryStatsRouteHandler,
  getMlTrainedModelsModelIdRouteHandler,
  getMlTrainedModelsModelIdStatsRouteHandler,
  getMlTrainedModelsRouteHandler,
  getMlTrainedModelsStatsRouteHandler,
  getMsearchRouteHandler,
  getMsearchTemplateRouteHandler,
  getMtermvectorsRouteHandler,
  getNodesHotThreadsRouteHandler,
  getNodesMetricRouteHandler,
  getNodesNodeIdHotThreadsRouteHandler,
  getNodesNodeIdMetricRouteHandler,
  getNodesNodeIdRepositoriesMeteringRouteHandler,
  getNodesNodeIdRouteHandler,
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
  getPrometheusApiV1StatusBuildinfoRouteHandler,
  getPrometheusIndexApiV1StatusBuildinfoRouteHandler,
  getQueryAsyncIdRouteHandler,
  getQueryDatasetNameRouteHandler,
  getQueryDatasetRouteHandler,
  getQueryDataSourceNameRouteHandler,
  getQueryDataSourceRouteHandler,
  getQueryQueriesIdRouteHandler,
  getQueryQueriesRouteHandler,
  getQueryRulesRouteHandler,
  getQueryRulesRulesetIdRouteHandler,
  getQueryRulesRulesetIdRuleRuleIdRouteHandler,
  getQueryViewNameRouteHandler,
  getQueryViewRouteHandler,
  getRankEvalRouteHandler,
  getRecoveryRouteHandler,
  getRefreshRouteHandler,
  getReindexRouteHandler,
  getReindexTaskIdRouteHandler,
  getRemoteInfoRouteHandler,
  getRenderTemplateIdRouteHandler,
  getRenderTemplateRouteHandler,
  getResolveClusterNameRouteHandler,
  getResolveClusterRouteHandler,
  getResolveIndexNameRouteHandler,
  getRollupDataIdRouteHandler,
  getRollupDataRouteHandler,
  getRollupJobIdRouteHandler,
  getRollupJobRouteHandler,
  getRouteHandler,
  getScriptContextRouteHandler,
  getScriptLanguageRouteHandler,
  getScriptsIdRouteHandler,
  getScriptsPainlessExecuteRouteHandler,
  getSearchableSnapshotsCacheStatsRouteHandler,
  getSearchableSnapshotsNodeIdCacheStatsRouteHandler,
  getSearchableSnapshotsStatsRouteHandler,
  getSearchRouteHandler,
  getSearchScrollRouteHandler,
  getSearchScrollScrollIdRouteHandler,
  getSearchShardsRouteHandler,
  getSearchTemplateRouteHandler,
  getSecurityApiKeyRouteHandler,
  getSecurityAuthenticateRouteHandler,
  getSecurityEnrollKibanaRouteHandler,
  getSecurityEnrollNodeRouteHandler,
  getSecurityPrivilegeApplicationNameRouteHandler,
  getSecurityPrivilegeApplicationRouteHandler,
  getSecurityPrivilegeBuiltinRouteHandler,
  getSecurityPrivilegeRouteHandler,
  getSecurityProfileHasPrivilegesRouteHandler,
  getSecurityProfileSuggestRouteHandler,
  getSecurityProfileUidRouteHandler,
  getSecurityQueryApiKeyRouteHandler,
  getSecurityQueryRoleRouteHandler,
  getSecurityQueryUserRouteHandler,
  getSecurityRoleMappingNameRouteHandler,
  getSecurityRoleMappingRouteHandler,
  getSecurityRoleNameRouteHandler,
  getSecurityRoleRouteHandler,
  getSecuritySamlMetadataRealmNameRouteHandler,
  getSecurityServiceNamespaceRouteHandler,
  getSecurityServiceNamespaceServiceCredentialRouteHandler,
  getSecurityServiceNamespaceServiceRouteHandler,
  getSecurityServiceRouteHandler,
  getSecuritySettingsRouteHandler,
  getSecurityStatsRouteHandler,
  getSecurityUserHasPrivilegesRouteHandler,
  getSecurityUserPrivilegesRouteHandler,
  getSecurityUserRouteHandler,
  getSecurityUserUserHasPrivilegesRouteHandler,
  getSecurityUserUsernameRouteHandler,
  getSegmentsRouteHandler,
  getSettingsNameRouteHandler,
  getSettingsRouteHandler,
  getShardStoresRouteHandler,
  getSlmPolicyPolicyIdRouteHandler,
  getSlmPolicyRouteHandler,
  getSlmStatsRouteHandler,
  getSlmStatusRouteHandler,
  getSnapshotRepositoryRouteHandler,
  getSnapshotRepositorySnapshotRouteHandler,
  getSnapshotRepositorySnapshotStatusRouteHandler,
  getSnapshotRepositoryStatusRouteHandler,
  getSnapshotRouteHandler,
  getSnapshotStatusRouteHandler,
  getSqlAsyncIdRouteHandler,
  getSqlAsyncStatusIdRouteHandler,
  getSqlRouteHandler,
  getSqlTranslateRouteHandler,
  getSslCertificatesRouteHandler,
  getStatsMetricRouteHandler,
  getStatsRouteHandler,
  getStreamsStatusRouteHandler,
  getSynonymsIdRouteHandler,
  getSynonymsRouteHandler,
  getSynonymsSetIdRuleIdRouteHandler,
  getTasksRouteHandler,
  getTasksTaskIdRouteHandler,
  getTemplateNameRouteHandler,
  getTemplateRouteHandler,
  getTextStructureFindFieldStructureRouteHandler,
  getTextStructureFindMessageStructureRouteHandler,
  getTextStructureTestGrokPatternRouteHandler,
  getTransformNodeStatsRouteHandler,
  getTransformPreviewRouteHandler,
  getTransformRouteHandler,
  getTransformTransformIdPreviewRouteHandler,
  getTransformTransformIdRouteHandler,
  getTransformTransformIdStatsRouteHandler,
  getValidateQueryRouteHandler,
  getWatcherQueryWatchesRouteHandler,
  getWatcherSettingsRouteHandler,
  getWatcherStatsMetricRouteHandler,
  getWatcherStatsRouteHandler,
  getWatcherWatchIdRouteHandler,
  getXpackRouteHandler,
  getXpackUsageRouteHandler,
  headAliasNameRouteHandler,
  headComponentTemplateNameRouteHandler,
  headIndexAliasNameRouteHandler,
  headIndexDocIdRouteHandler,
  headIndexRouteHandler,
  headIndexSourceIdRouteHandler,
  headIndexTemplateNameRouteHandler,
  headRouteHandler,
  headTemplateNameRouteHandler,
  postAliasesRouteHandler,
  postAliasRolloverNewIndexRouteHandler,
  postAliasRolloverRouteHandler,
  postAnalyzeRouteHandler,
  postApplicationAnalyticsCollectionNameEventEventTypeRouteHandler,
  postApplicationSearchApplicationNameRenderQueryRouteHandler,
  postApplicationSearchApplicationNameSearchRouteHandler,
  postAsyncSearchRouteHandler,
  postBulkRouteHandler,
  postCacheClearRouteHandler,
  postCatCountIndexRouteHandler,
  postCatCountRouteHandler,
  postCcrAutoFollowNamePauseRouteHandler,
  postCcrAutoFollowNameResumeRouteHandler,
  postClusterAllocationExplainRouteHandler,
  postClusterRerouteRouteHandler,
  postClusterVotingConfigExclusionsRouteHandler,
  postComponentTemplateNameRouteHandler,
  postConnectorRouteHandler,
  postConnectorSyncJobRouteHandler,
  postCountRouteHandler,
  postCreateFromSourceDestRouteHandler,
  postDanglingIndexUuidRouteHandler,
  postDataStreamMigrateNameRouteHandler,
  postDataStreamModifyRouteHandler,
  postDataStreamPromoteNameRouteHandler,
  postDeleteByQueryTaskIdRethrottleRouteHandler,
  postEncryptionResetRouteHandler,
  postFeaturesResetRouteHandler,
  postFieldCapsRouteHandler,
  postFleetFleetMsearchRouteHandler,
  postFlushRouteHandler,
  postForcemergeRouteHandler,
  postIlmMigrateToDataTiersRouteHandler,
  postIlmMoveIndexRouteHandler,
  postIlmStartRouteHandler,
  postIlmStopRouteHandler,
  postIndexAliasesNameRouteHandler,
  postIndexAliasNameRouteHandler,
  postIndexAnalyzeRouteHandler,
  postIndexAsyncSearchRouteHandler,
  postIndexBulkRouteHandler,
  postIndexCacheClearRouteHandler,
  postIndexCcrForgetFollowerRouteHandler,
  postIndexCcrPauseFollowRouteHandler,
  postIndexCcrResumeFollowRouteHandler,
  postIndexCcrUnfollowRouteHandler,
  postIndexCloneTargetRouteHandler,
  postIndexCloseRouteHandler,
  postIndexCountRouteHandler,
  postIndexCreateIdRouteHandler,
  postIndexDeleteByQueryRouteHandler,
  postIndexDiskUsageRouteHandler,
  postIndexDocIdRouteHandler,
  postIndexDocRouteHandler,
  postIndexDownsampleTargetIndexRouteHandler,
  postIndexEqlSearchRouteHandler,
  postIndexExplainIdRouteHandler,
  postIndexFieldCapsRouteHandler,
  postIndexFleetFleetMsearchRouteHandler,
  postIndexFleetFleetSearchRouteHandler,
  postIndexFlushRouteHandler,
  postIndexForcemergeRouteHandler,
  postIndexGraphExploreRouteHandler,
  postIndexIlmRemoveRouteHandler,
  postIndexIlmRetryRouteHandler,
  postIndexKnnEvalRouteHandler,
  postIndexMappingRouteHandler,
  postIndexMgetRouteHandler,
  postIndexMsearchRouteHandler,
  postIndexMsearchTemplateRouteHandler,
  postIndexMtermvectorsRouteHandler,
  postIndexMvtFieldZoomXYRouteHandler,
  postIndexOpenRouteHandler,
  postIndexPitRouteHandler,
  postIndexRankEvalRouteHandler,
  postIndexRefreshRouteHandler,
  postIndexReloadSearchAnalyzersRouteHandler,
  postIndexRollupSearchRouteHandler,
  postIndexSearchableSnapshotsCacheClearRouteHandler,
  postIndexSearchRouteHandler,
  postIndexSearchShardsRouteHandler,
  postIndexSearchTemplateRouteHandler,
  postIndexShrinkTargetRouteHandler,
  postIndexSplitTargetRouteHandler,
  postIndexTemplateNameRouteHandler,
  postIndexTemplateSimulateIndexNameRouteHandler,
  postIndexTemplateSimulateNameRouteHandler,
  postIndexTemplateSimulateRouteHandler,
  postIndexTermsEnumRouteHandler,
  postIndexTermvectorsIdRouteHandler,
  postIndexTermvectorsRouteHandler,
  postIndexUpdateByQueryRouteHandler,
  postIndexUpdateIdRouteHandler,
  postIndexValidateQueryRouteHandler,
  postInferenceChatCompletionInferenceIdRouteHandler,
  postInferenceChatCompletionInferenceIdStreamRouteHandler,
  postInferenceCompletionInferenceIdRouteHandler,
  postInferenceCompletionInferenceIdStreamRouteHandler,
  postInferenceDecisionInferenceIdRouteHandler,
  postInferenceDocumentExtractionInferenceIdRouteHandler,
  postInferenceEmbeddingInferenceIdRouteHandler,
  postInferenceInferenceIdRouteHandler,
  postInferenceRerankInferenceIdRouteHandler,
  postInferenceSparseEmbeddingInferenceIdRouteHandler,
  postInferenceTaskTypeInferenceIdRouteHandler,
  postInferenceTextEmbeddingInferenceIdRouteHandler,
  postIngestIndexSimulateRouteHandler,
  postIngestPipelineIdSimulateRouteHandler,
  postIngestPipelineSimulateRouteHandler,
  postIngestSimulateRouteHandler,
  postLicenseRouteHandler,
  postLicenseStartBasicRouteHandler,
  postLicenseStartTrialRouteHandler,
  postMgetRouteHandler,
  postMigrationReindexIndexCancelRouteHandler,
  postMigrationReindexRouteHandler,
  postMigrationSystemFeaturesRouteHandler,
  postMlAnomalyDetectorsEstimateModelMemoryRouteHandler,
  postMlAnomalyDetectorsJobIdCloseRouteHandler,
  postMlAnomalyDetectorsJobIdDataRouteHandler,
  postMlAnomalyDetectorsJobIdFlushRouteHandler,
  postMlAnomalyDetectorsJobIdForecastRouteHandler,
  postMlAnomalyDetectorsJobIdModelSnapshotsRouteHandler,
  postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRevertRouteHandler,
  postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRouteHandler,
  postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdUpdateRouteHandler,
  postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdUpgradeRouteHandler,
  postMlAnomalyDetectorsJobIdOpenRouteHandler,
  postMlAnomalyDetectorsJobIdResetRouteHandler,
  postMlAnomalyDetectorsJobIdResultsBucketsRouteHandler,
  postMlAnomalyDetectorsJobIdResultsBucketsTimestampRouteHandler,
  postMlAnomalyDetectorsJobIdResultsCategoriesCategoryIdRouteHandler,
  postMlAnomalyDetectorsJobIdResultsCategoriesRouteHandler,
  postMlAnomalyDetectorsJobIdResultsInfluencersRouteHandler,
  postMlAnomalyDetectorsJobIdResultsOverallBucketsRouteHandler,
  postMlAnomalyDetectorsJobIdResultsRecordsRouteHandler,
  postMlAnomalyDetectorsJobIdUpdateRouteHandler,
  postMlCalendarsCalendarIdEventsRouteHandler,
  postMlCalendarsCalendarIdRouteHandler,
  postMlCalendarsRouteHandler,
  postMlDatafeedsDatafeedIdPreviewRouteHandler,
  postMlDatafeedsDatafeedIdStartRouteHandler,
  postMlDatafeedsDatafeedIdStopRouteHandler,
  postMlDatafeedsDatafeedIdUpdateRouteHandler,
  postMlDatafeedsPreviewRouteHandler,
  postMlDataFrameAnalyticsExplainRouteHandler,
  postMlDataFrameAnalyticsIdExplainRouteHandler,
  postMlDataFrameAnalyticsIdPreviewRouteHandler,
  postMlDataFrameAnalyticsIdStartRouteHandler,
  postMlDataFrameAnalyticsIdStopRouteHandler,
  postMlDataFrameAnalyticsIdUpdateRouteHandler,
  postMlDataFrameAnalyticsPreviewRouteHandler,
  postMlDataFrameEvaluateRouteHandler,
  postMlFiltersFilterIdUpdateRouteHandler,
  postMlSetUpgradeModeRouteHandler,
  postMlTrainedModelsModelIdDeploymentCacheClearRouteHandler,
  postMlTrainedModelsModelIdDeploymentStartRouteHandler,
  postMlTrainedModelsModelIdDeploymentStopRouteHandler,
  postMlTrainedModelsModelIdDeploymentUpdateRouteHandler,
  postMlTrainedModelsModelIdInferRouteHandler,
  postMsearchRouteHandler,
  postMsearchTemplateRouteHandler,
  postMtermvectorsRouteHandler,
  postNodesNodeIdReloadSecureSettingsRouteHandler,
  postNodesReloadSecureSettingsRouteHandler,
  postQueryAsyncIdStopRouteHandler,
  postQueryAsyncRouteHandler,
  postQueryRouteHandler,
  postQueryRulesRulesetIdTestRouteHandler,
  postRankEvalRouteHandler,
  postRefreshRouteHandler,
  postReindexRouteHandler,
  postReindexTaskIdCancelRouteHandler,
  postReindexTaskIdRethrottleRouteHandler,
  postRenderTemplateIdRouteHandler,
  postRenderTemplateRouteHandler,
  postResolveIndexNameRouteHandler,
  postRollupJobIdStartRouteHandler,
  postRollupJobIdStopRouteHandler,
  postScriptsIdContextRouteHandler,
  postScriptsIdRouteHandler,
  postScriptsPainlessExecuteRouteHandler,
  postSearchableSnapshotsCacheClearRouteHandler,
  postSearchRouteHandler,
  postSearchScrollRouteHandler,
  postSearchScrollScrollIdRouteHandler,
  postSearchShardsRouteHandler,
  postSearchTemplateRouteHandler,
  postSecurityApiKeyBulkUpdateRouteHandler,
  postSecurityApiKeyCloneRouteHandler,
  postSecurityApiKeyGrantRouteHandler,
  postSecurityApiKeyIdsClearCacheRouteHandler,
  postSecurityApiKeyRouteHandler,
  postSecurityCrossClusterApiKeyRouteHandler,
  postSecurityDelegatePkiRouteHandler,
  postSecurityOauth2TokenRouteHandler,
  postSecurityOidcAuthenticateRouteHandler,
  postSecurityOidcLogoutRouteHandler,
  postSecurityOidcPrepareRouteHandler,
  postSecurityPrivilegeApplicationClearCacheRouteHandler,
  postSecurityPrivilegeRouteHandler,
  postSecurityProfileActivateRouteHandler,
  postSecurityProfileHasPrivilegesRouteHandler,
  postSecurityProfileSuggestRouteHandler,
  postSecurityProfileUidDataRouteHandler,
  postSecurityProfileUidDisableRouteHandler,
  postSecurityProfileUidEnableRouteHandler,
  postSecurityQueryApiKeyRouteHandler,
  postSecurityQueryRoleRouteHandler,
  postSecurityQueryUserRouteHandler,
  postSecurityRealmRealmsClearCacheRouteHandler,
  postSecurityRoleMappingNameRouteHandler,
  postSecurityRoleNameClearCacheRouteHandler,
  postSecurityRoleNameRouteHandler,
  postSecurityRoleRouteHandler,
  postSecuritySamlAuthenticateRouteHandler,
  postSecuritySamlCompleteLogoutRouteHandler,
  postSecuritySamlInvalidateRouteHandler,
  postSecuritySamlLogoutRouteHandler,
  postSecuritySamlPrepareRouteHandler,
  postSecurityServiceNamespaceServiceCredentialTokenNameClearCacheRouteHandler,
  postSecurityServiceNamespaceServiceCredentialTokenNameRouteHandler,
  postSecurityServiceNamespaceServiceCredentialTokenRouteHandler,
  postSecurityUserHasPrivilegesRouteHandler,
  postSecurityUserPasswordRouteHandler,
  postSecurityUserUserHasPrivilegesRouteHandler,
  postSecurityUserUsernameDisableRouteHandler,
  postSecurityUserUsernameEnableRouteHandler,
  postSecurityUserUsernamePasswordRouteHandler,
  postSecurityUserUsernameRouteHandler,
  postSlmExecuteRetentionRouteHandler,
  postSlmStartRouteHandler,
  postSlmStopRouteHandler,
  postSnapshotRepositoryAnalyzeRouteHandler,
  postSnapshotRepositoryCleanupRouteHandler,
  postSnapshotRepositoryRouteHandler,
  postSnapshotRepositorySnapshotMountRouteHandler,
  postSnapshotRepositorySnapshotRestoreRouteHandler,
  postSnapshotRepositorySnapshotRouteHandler,
  postSnapshotRepositoryVerifyIntegrityRouteHandler,
  postSnapshotRepositoryVerifyRouteHandler,
  postSqlCloseRouteHandler,
  postSqlRouteHandler,
  postSqlTranslateRouteHandler,
  postStreamsNameDisableRouteHandler,
  postStreamsNameEnableRouteHandler,
  postTasksCancelRouteHandler,
  postTasksTaskIdCancelRouteHandler,
  postTemplateNameRouteHandler,
  postTextStructureFindMessageStructureRouteHandler,
  postTextStructureFindStructureRouteHandler,
  postTextStructureTestGrokPatternRouteHandler,
  postTransformPreviewRouteHandler,
  postTransformSetUpgradeModeRouteHandler,
  postTransformTransformIdPreviewRouteHandler,
  postTransformTransformIdResetRouteHandler,
  postTransformTransformIdScheduleNowRouteHandler,
  postTransformTransformIdStartRouteHandler,
  postTransformTransformIdStopRouteHandler,
  postTransformTransformIdUpdateRouteHandler,
  postTransformUpgradeRouteHandler,
  postUpdateByQueryTaskIdRethrottleRouteHandler,
  postValidateQueryRouteHandler,
  postWatcherQueryWatchesRouteHandler,
  postWatcherStartRouteHandler,
  postWatcherStopRouteHandler,
  postWatcherWatchExecuteRouteHandler,
  postWatcherWatchIdExecuteRouteHandler,
  postWatcherWatchIdRouteHandler,
  postWatcherWatchWatchIdAckActionIdRouteHandler,
  postWatcherWatchWatchIdAckRouteHandler,
  postWatcherWatchWatchIdActivateRouteHandler,
  postWatcherWatchWatchIdDeactivateRouteHandler,
  putApplicationAnalyticsNameRouteHandler,
  putApplicationSearchApplicationNameRouteHandler,
  putBulkRouteHandler,
  putCcrAutoFollowNameRouteHandler,
  putClusterSettingsRouteHandler,
  putComponentTemplateNameRouteHandler,
  putConnectorConnectorIdApiKeyIdRouteHandler,
  putConnectorConnectorIdCheckInRouteHandler,
  putConnectorConnectorIdConfigurationRouteHandler,
  putConnectorConnectorIdErrorRouteHandler,
  putConnectorConnectorIdFeaturesRouteHandler,
  putConnectorConnectorIdFilteringActivateRouteHandler,
  putConnectorConnectorIdFilteringRouteHandler,
  putConnectorConnectorIdFilteringValidationRouteHandler,
  putConnectorConnectorIdIndexNameRouteHandler,
  putConnectorConnectorIdNameRouteHandler,
  putConnectorConnectorIdNativeRouteHandler,
  putConnectorConnectorIdPipelineRouteHandler,
  putConnectorConnectorIdRouteHandler,
  putConnectorConnectorIdSchedulingRouteHandler,
  putConnectorConnectorIdServiceTypeRouteHandler,
  putConnectorConnectorIdStatusRouteHandler,
  putConnectorRouteHandler,
  putConnectorSyncJobConnectorSyncJobIdCancelRouteHandler,
  putConnectorSyncJobConnectorSyncJobIdCheckInRouteHandler,
  putConnectorSyncJobConnectorSyncJobIdClaimRouteHandler,
  putConnectorSyncJobConnectorSyncJobIdErrorRouteHandler,
  putConnectorSyncJobConnectorSyncJobIdStatsRouteHandler,
  putCreateFromSourceDestRouteHandler,
  putDataStreamNameLifecycleRouteHandler,
  putDataStreamNameMappingsRouteHandler,
  putDataStreamNameOptionsRouteHandler,
  putDataStreamNameRouteHandler,
  putDataStreamNameSettingsRouteHandler,
  putEnrichPolicyNameExecuteRouteHandler,
  putEnrichPolicyNameRouteHandler,
  putIlmPolicyPolicyRouteHandler,
  putIndexAliasesNameRouteHandler,
  putIndexAliasNameRouteHandler,
  putIndexBlockBlockRouteHandler,
  putIndexBulkRouteHandler,
  putIndexCcrFollowRouteHandler,
  putIndexCloneTargetRouteHandler,
  putIndexCreateIdRouteHandler,
  putIndexDocIdRouteHandler,
  putIndexMappingRouteHandler,
  putIndexRouteHandler,
  putIndexSettingsRouteHandler,
  putIndexShrinkTargetRouteHandler,
  putIndexSplitTargetRouteHandler,
  putIndexTemplateNameRouteHandler,
  putInferenceInferenceIdRouteHandler,
  putInferenceInferenceIdUpdateRouteHandler,
  putInferenceRegionPolicyRouteHandler,
  putInferenceTaskTypeAi21InferenceIdRouteHandler,
  putInferenceTaskTypeAlibabacloudInferenceIdRouteHandler,
  putInferenceTaskTypeAmazonbedrockInferenceIdRouteHandler,
  putInferenceTaskTypeAmazonsagemakerInferenceIdRouteHandler,
  putInferenceTaskTypeAnthropicInferenceIdRouteHandler,
  putInferenceTaskTypeAzureaistudioInferenceIdRouteHandler,
  putInferenceTaskTypeAzureopenaiInferenceIdRouteHandler,
  putInferenceTaskTypeCohereInferenceIdRouteHandler,
  putInferenceTaskTypeContextualaiInferenceIdRouteHandler,
  putInferenceTaskTypeCustomInferenceIdRouteHandler,
  putInferenceTaskTypeDeepseekInferenceIdRouteHandler,
  putInferenceTaskTypeElasticsearchInferenceIdRouteHandler,
  putInferenceTaskTypeElserInferenceIdRouteHandler,
  putInferenceTaskTypeFireworksaiInferenceIdRouteHandler,
  putInferenceTaskTypeGoogleaistudioInferenceIdRouteHandler,
  putInferenceTaskTypeGooglevertexaiInferenceIdRouteHandler,
  putInferenceTaskTypeGroqInferenceIdRouteHandler,
  putInferenceTaskTypeHuggingfaceInferenceIdRouteHandler,
  putInferenceTaskTypeInferenceIdRouteHandler,
  putInferenceTaskTypeInferenceIdUpdateRouteHandler,
  putInferenceTaskTypeJinaaiInferenceIdRouteHandler,
  putInferenceTaskTypeLlamaInferenceIdRouteHandler,
  putInferenceTaskTypeMistralInferenceIdRouteHandler,
  putInferenceTaskTypeNvidiaInferenceIdRouteHandler,
  putInferenceTaskTypeOpenaiInferenceIdRouteHandler,
  putInferenceTaskTypeOpenshiftaiInferenceIdRouteHandler,
  putInferenceTaskTypeVoyageaiInferenceIdRouteHandler,
  putInferenceTaskTypeWatsonxInferenceIdRouteHandler,
  putIngestGeoipDatabaseIdRouteHandler,
  putIngestIpLocationDatabaseIdRouteHandler,
  putIngestPipelineIdRouteHandler,
  putLicenseRouteHandler,
  putLogstashPipelineIdRouteHandler,
  putMlAnomalyDetectorsJobIdRouteHandler,
  putMlCalendarsCalendarIdJobsJobIdRouteHandler,
  putMlCalendarsCalendarIdRouteHandler,
  putMlDatafeedsDatafeedIdRouteHandler,
  putMlDataFrameAnalyticsIdRouteHandler,
  putMlFiltersFilterIdRouteHandler,
  putMlTrainedModelsModelIdDefinitionPartRouteHandler,
  putMlTrainedModelsModelIdModelAliasesModelAliasRouteHandler,
  putMlTrainedModelsModelIdRouteHandler,
  putMlTrainedModelsModelIdVocabularyRouteHandler,
  putQueryDatasetNameRouteHandler,
  putQueryDataSourceNameRouteHandler,
  putQueryRulesRulesetIdRouteHandler,
  putQueryRulesRulesetIdRuleRuleIdRouteHandler,
  putQueryViewNameRouteHandler,
  putRollupJobIdRouteHandler,
  putScriptsIdContextRouteHandler,
  putScriptsIdRouteHandler,
  putSecurityApiKeyCloneRouteHandler,
  putSecurityApiKeyIdRouteHandler,
  putSecurityApiKeyRouteHandler,
  putSecurityCrossClusterApiKeyIdRouteHandler,
  putSecurityPrivilegeRouteHandler,
  putSecurityProfileUidDataRouteHandler,
  putSecurityProfileUidDisableRouteHandler,
  putSecurityProfileUidEnableRouteHandler,
  putSecurityRoleMappingNameRouteHandler,
  putSecurityRoleNameRouteHandler,
  putSecurityServiceNamespaceServiceCredentialTokenNameRouteHandler,
  putSecurityServiceNamespaceServiceRouteHandler,
  putSecuritySettingsRouteHandler,
  putSecurityUserPasswordRouteHandler,
  putSecurityUserUsernameDisableRouteHandler,
  putSecurityUserUsernameEnableRouteHandler,
  putSecurityUserUsernamePasswordRouteHandler,
  putSecurityUserUsernameRouteHandler,
  putSettingsRouteHandler,
  putSlmPolicyPolicyIdExecuteRouteHandler,
  putSlmPolicyPolicyIdRouteHandler,
  putSnapshotRepositoryRouteHandler,
  putSnapshotRepositorySnapshotCloneTargetSnapshotRouteHandler,
  putSnapshotRepositorySnapshotRouteHandler,
  putSynonymsIdRouteHandler,
  putSynonymsSetIdRuleIdRouteHandler,
  putTemplateNameRouteHandler,
  putTransformTransformIdRouteHandler,
  putWatcherSettingsRouteHandler,
  putWatcherWatchExecuteRouteHandler,
  putWatcherWatchIdExecuteRouteHandler,
  putWatcherWatchIdRouteHandler,
  putWatcherWatchWatchIdAckActionIdRouteHandler,
  putWatcherWatchWatchIdAckRouteHandler,
  putWatcherWatchWatchIdActivateRouteHandler,
  putWatcherWatchWatchIdDeactivateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAsyncSearchIdRoute, getAsyncSearchIdRouteHandler)
  .openapi(deleteAsyncSearchIdRoute, deleteAsyncSearchIdRouteHandler)
  .openapi(getAsyncSearchStatusIdRoute, getAsyncSearchStatusIdRouteHandler)
  .openapi(postAsyncSearchRoute, postAsyncSearchRouteHandler)
  .openapi(postIndexAsyncSearchRoute, postIndexAsyncSearchRouteHandler)
  .openapi(putBulkRoute, putBulkRouteHandler)
  .openapi(postBulkRoute, postBulkRouteHandler)
  .openapi(putIndexBulkRoute, putIndexBulkRouteHandler)
  .openapi(postIndexBulkRoute, postIndexBulkRouteHandler)
  .openapi(postReindexTaskIdCancelRoute, postReindexTaskIdCancelRouteHandler)
  .openapi(getCatAliasesRoute, getCatAliasesRouteHandler)
  .openapi(getCatAliasesNameRoute, getCatAliasesNameRouteHandler)
  .openapi(getCatAllocationRoute, getCatAllocationRouteHandler)
  .openapi(getCatAllocationNodeIdRoute, getCatAllocationNodeIdRouteHandler)
  .openapi(getCatCircuitBreakerRoute, getCatCircuitBreakerRouteHandler)
  .openapi(
    getCatCircuitBreakerCircuitBreakerPatternsRoute,
    getCatCircuitBreakerCircuitBreakerPatternsRouteHandler,
  )
  .openapi(getCatComponentTemplatesRoute, getCatComponentTemplatesRouteHandler)
  .openapi(getCatComponentTemplatesNameRoute, getCatComponentTemplatesNameRouteHandler)
  .openapi(getCatCountRoute, getCatCountRouteHandler)
  .openapi(postCatCountRoute, postCatCountRouteHandler)
  .openapi(getCatCountIndexRoute, getCatCountIndexRouteHandler)
  .openapi(postCatCountIndexRoute, postCatCountIndexRouteHandler)
  .openapi(getCatFielddataRoute, getCatFielddataRouteHandler)
  .openapi(getCatFielddataFieldsRoute, getCatFielddataFieldsRouteHandler)
  .openapi(getCatHealthRoute, getCatHealthRouteHandler)
  .openapi(getCatRoute, getCatRouteHandler)
  .openapi(getCatIndicesRoute, getCatIndicesRouteHandler)
  .openapi(getCatIndicesIndexRoute, getCatIndicesIndexRouteHandler)
  .openapi(getCatMasterRoute, getCatMasterRouteHandler)
  .openapi(getCatMlDataFrameAnalyticsRoute, getCatMlDataFrameAnalyticsRouteHandler)
  .openapi(getCatMlDataFrameAnalyticsIdRoute, getCatMlDataFrameAnalyticsIdRouteHandler)
  .openapi(getCatMlDatafeedsRoute, getCatMlDatafeedsRouteHandler)
  .openapi(getCatMlDatafeedsDatafeedIdRoute, getCatMlDatafeedsDatafeedIdRouteHandler)
  .openapi(getCatMlAnomalyDetectorsRoute, getCatMlAnomalyDetectorsRouteHandler)
  .openapi(getCatMlAnomalyDetectorsJobIdRoute, getCatMlAnomalyDetectorsJobIdRouteHandler)
  .openapi(getCatMlTrainedModelsRoute, getCatMlTrainedModelsRouteHandler)
  .openapi(getCatMlTrainedModelsModelIdRoute, getCatMlTrainedModelsModelIdRouteHandler)
  .openapi(getCatNodeattrsRoute, getCatNodeattrsRouteHandler)
  .openapi(getCatNodesRoute, getCatNodesRouteHandler)
  .openapi(getCatPendingTasksRoute, getCatPendingTasksRouteHandler)
  .openapi(getCatPluginsRoute, getCatPluginsRouteHandler)
  .openapi(getCatRecoveryRoute, getCatRecoveryRouteHandler)
  .openapi(getCatRecoveryIndexRoute, getCatRecoveryIndexRouteHandler)
  .openapi(getCatRepositoriesRoute, getCatRepositoriesRouteHandler)
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
  .openapi(getCatTransformsRoute, getCatTransformsRouteHandler)
  .openapi(getCatTransformsTransformIdRoute, getCatTransformsTransformIdRouteHandler)
  .openapi(getCcrAutoFollowNameRoute, getCcrAutoFollowNameRouteHandler)
  .openapi(putCcrAutoFollowNameRoute, putCcrAutoFollowNameRouteHandler)
  .openapi(deleteCcrAutoFollowNameRoute, deleteCcrAutoFollowNameRouteHandler)
  .openapi(putIndexCcrFollowRoute, putIndexCcrFollowRouteHandler)
  .openapi(getIndexCcrInfoRoute, getIndexCcrInfoRouteHandler)
  .openapi(getIndexCcrStatsRoute, getIndexCcrStatsRouteHandler)
  .openapi(postIndexCcrForgetFollowerRoute, postIndexCcrForgetFollowerRouteHandler)
  .openapi(getCcrAutoFollowRoute, getCcrAutoFollowRouteHandler)
  .openapi(postCcrAutoFollowNamePauseRoute, postCcrAutoFollowNamePauseRouteHandler)
  .openapi(postIndexCcrPauseFollowRoute, postIndexCcrPauseFollowRouteHandler)
  .openapi(postCcrAutoFollowNameResumeRoute, postCcrAutoFollowNameResumeRouteHandler)
  .openapi(postIndexCcrResumeFollowRoute, postIndexCcrResumeFollowRouteHandler)
  .openapi(getCcrStatsRoute, getCcrStatsRouteHandler)
  .openapi(postIndexCcrUnfollowRoute, postIndexCcrUnfollowRouteHandler)
  .openapi(getSearchScrollRoute, getSearchScrollRouteHandler)
  .openapi(postSearchScrollRoute, postSearchScrollRouteHandler)
  .openapi(deleteSearchScrollRoute, deleteSearchScrollRouteHandler)
  .openapi(getSearchScrollScrollIdRoute, getSearchScrollScrollIdRouteHandler)
  .openapi(postSearchScrollScrollIdRoute, postSearchScrollScrollIdRouteHandler)
  .openapi(deleteSearchScrollScrollIdRoute, deleteSearchScrollScrollIdRouteHandler)
  .openapi(deletePitRoute, deletePitRouteHandler)
  .openapi(getClusterAllocationExplainRoute, getClusterAllocationExplainRouteHandler)
  .openapi(postClusterAllocationExplainRoute, postClusterAllocationExplainRouteHandler)
  .openapi(getComponentTemplateNameRoute, getComponentTemplateNameRouteHandler)
  .openapi(putComponentTemplateNameRoute, putComponentTemplateNameRouteHandler)
  .openapi(postComponentTemplateNameRoute, postComponentTemplateNameRouteHandler)
  .openapi(deleteComponentTemplateNameRoute, deleteComponentTemplateNameRouteHandler)
  .openapi(headComponentTemplateNameRoute, headComponentTemplateNameRouteHandler)
  .openapi(postClusterVotingConfigExclusionsRoute, postClusterVotingConfigExclusionsRouteHandler)
  .openapi(
    deleteClusterVotingConfigExclusionsRoute,
    deleteClusterVotingConfigExclusionsRouteHandler,
  )
  .openapi(getComponentTemplateRoute, getComponentTemplateRouteHandler)
  .openapi(getClusterSettingsRoute, getClusterSettingsRouteHandler)
  .openapi(putClusterSettingsRoute, putClusterSettingsRouteHandler)
  .openapi(getClusterHealthRoute, getClusterHealthRouteHandler)
  .openapi(getClusterHealthIndexRoute, getClusterHealthIndexRouteHandler)
  .openapi(getInfoTargetRoute, getInfoTargetRouteHandler)
  .openapi(getClusterPendingTasksRoute, getClusterPendingTasksRouteHandler)
  .openapi(getRemoteInfoRoute, getRemoteInfoRouteHandler)
  .openapi(postClusterRerouteRoute, postClusterRerouteRouteHandler)
  .openapi(getClusterStateRoute, getClusterStateRouteHandler)
  .openapi(getClusterStateMetricRoute, getClusterStateMetricRouteHandler)
  .openapi(getClusterStateMetricIndexRoute, getClusterStateMetricIndexRouteHandler)
  .openapi(getClusterStatsRoute, getClusterStatsRouteHandler)
  .openapi(getClusterStatsNodesNodeIdRoute, getClusterStatsNodesNodeIdRouteHandler)
  .openapi(putConnectorConnectorIdCheckInRoute, putConnectorConnectorIdCheckInRouteHandler)
  .openapi(getConnectorConnectorIdRoute, getConnectorConnectorIdRouteHandler)
  .openapi(putConnectorConnectorIdRoute, putConnectorConnectorIdRouteHandler)
  .openapi(deleteConnectorConnectorIdRoute, deleteConnectorConnectorIdRouteHandler)
  .openapi(getConnectorRoute, getConnectorRouteHandler)
  .openapi(putConnectorRoute, putConnectorRouteHandler)
  .openapi(postConnectorRoute, postConnectorRouteHandler)
  .openapi(
    putConnectorSyncJobConnectorSyncJobIdCancelRoute,
    putConnectorSyncJobConnectorSyncJobIdCancelRouteHandler,
  )
  .openapi(
    putConnectorSyncJobConnectorSyncJobIdCheckInRoute,
    putConnectorSyncJobConnectorSyncJobIdCheckInRouteHandler,
  )
  .openapi(
    putConnectorSyncJobConnectorSyncJobIdClaimRoute,
    putConnectorSyncJobConnectorSyncJobIdClaimRouteHandler,
  )
  .openapi(
    getConnectorSyncJobConnectorSyncJobIdRoute,
    getConnectorSyncJobConnectorSyncJobIdRouteHandler,
  )
  .openapi(
    deleteConnectorSyncJobConnectorSyncJobIdRoute,
    deleteConnectorSyncJobConnectorSyncJobIdRouteHandler,
  )
  .openapi(
    putConnectorSyncJobConnectorSyncJobIdErrorRoute,
    putConnectorSyncJobConnectorSyncJobIdErrorRouteHandler,
  )
  .openapi(getConnectorSyncJobRoute, getConnectorSyncJobRouteHandler)
  .openapi(postConnectorSyncJobRoute, postConnectorSyncJobRouteHandler)
  .openapi(
    putConnectorSyncJobConnectorSyncJobIdStatsRoute,
    putConnectorSyncJobConnectorSyncJobIdStatsRouteHandler,
  )
  .openapi(
    putConnectorConnectorIdFilteringActivateRoute,
    putConnectorConnectorIdFilteringActivateRouteHandler,
  )
  .openapi(putConnectorConnectorIdApiKeyIdRoute, putConnectorConnectorIdApiKeyIdRouteHandler)
  .openapi(
    putConnectorConnectorIdConfigurationRoute,
    putConnectorConnectorIdConfigurationRouteHandler,
  )
  .openapi(putConnectorConnectorIdErrorRoute, putConnectorConnectorIdErrorRouteHandler)
  .openapi(putConnectorConnectorIdFeaturesRoute, putConnectorConnectorIdFeaturesRouteHandler)
  .openapi(putConnectorConnectorIdFilteringRoute, putConnectorConnectorIdFilteringRouteHandler)
  .openapi(
    putConnectorConnectorIdFilteringValidationRoute,
    putConnectorConnectorIdFilteringValidationRouteHandler,
  )
  .openapi(putConnectorConnectorIdIndexNameRoute, putConnectorConnectorIdIndexNameRouteHandler)
  .openapi(putConnectorConnectorIdNameRoute, putConnectorConnectorIdNameRouteHandler)
  .openapi(putConnectorConnectorIdNativeRoute, putConnectorConnectorIdNativeRouteHandler)
  .openapi(putConnectorConnectorIdPipelineRoute, putConnectorConnectorIdPipelineRouteHandler)
  .openapi(putConnectorConnectorIdSchedulingRoute, putConnectorConnectorIdSchedulingRouteHandler)
  .openapi(putConnectorConnectorIdServiceTypeRoute, putConnectorConnectorIdServiceTypeRouteHandler)
  .openapi(putConnectorConnectorIdStatusRoute, putConnectorConnectorIdStatusRouteHandler)
  .openapi(getCountRoute, getCountRouteHandler)
  .openapi(postCountRoute, postCountRouteHandler)
  .openapi(getIndexCountRoute, getIndexCountRouteHandler)
  .openapi(postIndexCountRoute, postIndexCountRouteHandler)
  .openapi(putIndexCreateIdRoute, putIndexCreateIdRouteHandler)
  .openapi(postIndexCreateIdRoute, postIndexCreateIdRouteHandler)
  .openapi(postDanglingIndexUuidRoute, postDanglingIndexUuidRouteHandler)
  .openapi(deleteDanglingIndexUuidRoute, deleteDanglingIndexUuidRouteHandler)
  .openapi(getDanglingRoute, getDanglingRouteHandler)
  .openapi(getIndexDocIdRoute, getIndexDocIdRouteHandler)
  .openapi(putIndexDocIdRoute, putIndexDocIdRouteHandler)
  .openapi(postIndexDocIdRoute, postIndexDocIdRouteHandler)
  .openapi(deleteIndexDocIdRoute, deleteIndexDocIdRouteHandler)
  .openapi(headIndexDocIdRoute, headIndexDocIdRouteHandler)
  .openapi(postIndexDeleteByQueryRoute, postIndexDeleteByQueryRouteHandler)
  .openapi(postDeleteByQueryTaskIdRethrottleRoute, postDeleteByQueryTaskIdRethrottleRouteHandler)
  .openapi(getScriptsIdRoute, getScriptsIdRouteHandler)
  .openapi(putScriptsIdRoute, putScriptsIdRouteHandler)
  .openapi(postScriptsIdRoute, postScriptsIdRouteHandler)
  .openapi(deleteScriptsIdRoute, deleteScriptsIdRouteHandler)
  .openapi(postEncryptionResetRoute, postEncryptionResetRouteHandler)
  .openapi(getEnrichPolicyNameRoute, getEnrichPolicyNameRouteHandler)
  .openapi(putEnrichPolicyNameRoute, putEnrichPolicyNameRouteHandler)
  .openapi(deleteEnrichPolicyNameRoute, deleteEnrichPolicyNameRouteHandler)
  .openapi(putEnrichPolicyNameExecuteRoute, putEnrichPolicyNameExecuteRouteHandler)
  .openapi(getEnrichPolicyRoute, getEnrichPolicyRouteHandler)
  .openapi(getEnrichStatsRoute, getEnrichStatsRouteHandler)
  .openapi(getEqlSearchIdRoute, getEqlSearchIdRouteHandler)
  .openapi(deleteEqlSearchIdRoute, deleteEqlSearchIdRouteHandler)
  .openapi(getEqlSearchStatusIdRoute, getEqlSearchStatusIdRouteHandler)
  .openapi(getIndexEqlSearchRoute, getIndexEqlSearchRouteHandler)
  .openapi(postIndexEqlSearchRoute, postIndexEqlSearchRouteHandler)
  .openapi(postQueryAsyncRoute, postQueryAsyncRouteHandler)
  .openapi(getQueryAsyncIdRoute, getQueryAsyncIdRouteHandler)
  .openapi(deleteQueryAsyncIdRoute, deleteQueryAsyncIdRouteHandler)
  .openapi(postQueryAsyncIdStopRoute, postQueryAsyncIdStopRouteHandler)
  .openapi(getQueryDataSourceNameRoute, getQueryDataSourceNameRouteHandler)
  .openapi(putQueryDataSourceNameRoute, putQueryDataSourceNameRouteHandler)
  .openapi(deleteQueryDataSourceNameRoute, deleteQueryDataSourceNameRouteHandler)
  .openapi(getQueryDatasetNameRoute, getQueryDatasetNameRouteHandler)
  .openapi(putQueryDatasetNameRoute, putQueryDatasetNameRouteHandler)
  .openapi(deleteQueryDatasetNameRoute, deleteQueryDatasetNameRouteHandler)
  .openapi(getQueryViewNameRoute, getQueryViewNameRouteHandler)
  .openapi(putQueryViewNameRoute, putQueryViewNameRouteHandler)
  .openapi(deleteQueryViewNameRoute, deleteQueryViewNameRouteHandler)
  .openapi(getQueryDataSourceRoute, getQueryDataSourceRouteHandler)
  .openapi(getQueryDatasetRoute, getQueryDatasetRouteHandler)
  .openapi(getQueryQueriesIdRoute, getQueryQueriesIdRouteHandler)
  .openapi(getQueryViewRoute, getQueryViewRouteHandler)
  .openapi(getQueryQueriesRoute, getQueryQueriesRouteHandler)
  .openapi(postQueryRoute, postQueryRouteHandler)
  .openapi(getIndexSourceIdRoute, getIndexSourceIdRouteHandler)
  .openapi(headIndexSourceIdRoute, headIndexSourceIdRouteHandler)
  .openapi(getIndexExplainIdRoute, getIndexExplainIdRouteHandler)
  .openapi(postIndexExplainIdRoute, postIndexExplainIdRouteHandler)
  .openapi(getFeaturesRoute, getFeaturesRouteHandler)
  .openapi(postFeaturesResetRoute, postFeaturesResetRouteHandler)
  .openapi(getFieldCapsRoute, getFieldCapsRouteHandler)
  .openapi(postFieldCapsRoute, postFieldCapsRouteHandler)
  .openapi(getIndexFieldCapsRoute, getIndexFieldCapsRouteHandler)
  .openapi(postIndexFieldCapsRoute, postIndexFieldCapsRouteHandler)
  .openapi(getIndexFleetGlobalCheckpointsRoute, getIndexFleetGlobalCheckpointsRouteHandler)
  .openapi(getFleetFleetMsearchRoute, getFleetFleetMsearchRouteHandler)
  .openapi(postFleetFleetMsearchRoute, postFleetFleetMsearchRouteHandler)
  .openapi(getIndexFleetFleetMsearchRoute, getIndexFleetFleetMsearchRouteHandler)
  .openapi(postIndexFleetFleetMsearchRoute, postIndexFleetFleetMsearchRouteHandler)
  .openapi(getIndexFleetFleetSearchRoute, getIndexFleetFleetSearchRouteHandler)
  .openapi(postIndexFleetFleetSearchRoute, postIndexFleetFleetSearchRouteHandler)
  .openapi(getReindexTaskIdRoute, getReindexTaskIdRouteHandler)
  .openapi(getScriptContextRoute, getScriptContextRouteHandler)
  .openapi(getScriptLanguageRoute, getScriptLanguageRouteHandler)
  .openapi(getIndexGraphExploreRoute, getIndexGraphExploreRouteHandler)
  .openapi(postIndexGraphExploreRoute, postIndexGraphExploreRouteHandler)
  .openapi(getHealthReportRoute, getHealthReportRouteHandler)
  .openapi(getHealthReportFeatureRoute, getHealthReportFeatureRouteHandler)
  .openapi(getIlmPolicyPolicyRoute, getIlmPolicyPolicyRouteHandler)
  .openapi(putIlmPolicyPolicyRoute, putIlmPolicyPolicyRouteHandler)
  .openapi(deleteIlmPolicyPolicyRoute, deleteIlmPolicyPolicyRouteHandler)
  .openapi(getIndexIlmExplainRoute, getIndexIlmExplainRouteHandler)
  .openapi(getIlmPolicyRoute, getIlmPolicyRouteHandler)
  .openapi(getIlmStatusRoute, getIlmStatusRouteHandler)
  .openapi(postIlmMigrateToDataTiersRoute, postIlmMigrateToDataTiersRouteHandler)
  .openapi(postIlmMoveIndexRoute, postIlmMoveIndexRouteHandler)
  .openapi(postIndexIlmRemoveRoute, postIndexIlmRemoveRouteHandler)
  .openapi(postIndexIlmRetryRoute, postIndexIlmRetryRouteHandler)
  .openapi(postIlmStartRoute, postIlmStartRouteHandler)
  .openapi(postIlmStopRoute, postIlmStopRouteHandler)
  .openapi(postIndexDocRoute, postIndexDocRouteHandler)
  .openapi(putIndexBlockBlockRoute, putIndexBlockBlockRouteHandler)
  .openapi(deleteIndexBlockBlockRoute, deleteIndexBlockBlockRouteHandler)
  .openapi(getAnalyzeRoute, getAnalyzeRouteHandler)
  .openapi(postAnalyzeRoute, postAnalyzeRouteHandler)
  .openapi(getIndexAnalyzeRoute, getIndexAnalyzeRouteHandler)
  .openapi(postIndexAnalyzeRoute, postIndexAnalyzeRouteHandler)
  .openapi(postMigrationReindexIndexCancelRoute, postMigrationReindexIndexCancelRouteHandler)
  .openapi(postCacheClearRoute, postCacheClearRouteHandler)
  .openapi(postIndexCacheClearRoute, postIndexCacheClearRouteHandler)
  .openapi(putIndexCloneTargetRoute, putIndexCloneTargetRouteHandler)
  .openapi(postIndexCloneTargetRoute, postIndexCloneTargetRouteHandler)
  .openapi(postIndexCloseRoute, postIndexCloseRouteHandler)
  .openapi(getIndexRoute, getIndexRouteHandler)
  .openapi(putIndexRoute, putIndexRouteHandler)
  .openapi(deleteIndexRoute, deleteIndexRouteHandler)
  .openapi(headIndexRoute, headIndexRouteHandler)
  .openapi(getDataStreamNameRoute, getDataStreamNameRouteHandler)
  .openapi(putDataStreamNameRoute, putDataStreamNameRouteHandler)
  .openapi(deleteDataStreamNameRoute, deleteDataStreamNameRouteHandler)
  .openapi(putCreateFromSourceDestRoute, putCreateFromSourceDestRouteHandler)
  .openapi(postCreateFromSourceDestRoute, postCreateFromSourceDestRouteHandler)
  .openapi(getDataStreamStatsRoute, getDataStreamStatsRouteHandler)
  .openapi(getDataStreamNameStatsRoute, getDataStreamNameStatsRouteHandler)
  .openapi(getIndexAliasNameRoute, getIndexAliasNameRouteHandler)
  .openapi(putIndexAliasNameRoute, putIndexAliasNameRouteHandler)
  .openapi(postIndexAliasNameRoute, postIndexAliasNameRouteHandler)
  .openapi(deleteIndexAliasNameRoute, deleteIndexAliasNameRouteHandler)
  .openapi(headIndexAliasNameRoute, headIndexAliasNameRouteHandler)
  .openapi(putIndexAliasesNameRoute, putIndexAliasesNameRouteHandler)
  .openapi(postIndexAliasesNameRoute, postIndexAliasesNameRouteHandler)
  .openapi(deleteIndexAliasesNameRoute, deleteIndexAliasesNameRouteHandler)
  .openapi(getDataStreamNameLifecycleRoute, getDataStreamNameLifecycleRouteHandler)
  .openapi(putDataStreamNameLifecycleRoute, putDataStreamNameLifecycleRouteHandler)
  .openapi(deleteDataStreamNameLifecycleRoute, deleteDataStreamNameLifecycleRouteHandler)
  .openapi(getDataStreamNameOptionsRoute, getDataStreamNameOptionsRouteHandler)
  .openapi(putDataStreamNameOptionsRoute, putDataStreamNameOptionsRouteHandler)
  .openapi(deleteDataStreamNameOptionsRoute, deleteDataStreamNameOptionsRouteHandler)
  .openapi(getIndexTemplateNameRoute, getIndexTemplateNameRouteHandler)
  .openapi(putIndexTemplateNameRoute, putIndexTemplateNameRouteHandler)
  .openapi(postIndexTemplateNameRoute, postIndexTemplateNameRouteHandler)
  .openapi(deleteIndexTemplateNameRoute, deleteIndexTemplateNameRouteHandler)
  .openapi(headIndexTemplateNameRoute, headIndexTemplateNameRouteHandler)
  .openapi(getTemplateNameRoute, getTemplateNameRouteHandler)
  .openapi(putTemplateNameRoute, putTemplateNameRouteHandler)
  .openapi(postTemplateNameRoute, postTemplateNameRouteHandler)
  .openapi(deleteTemplateNameRoute, deleteTemplateNameRouteHandler)
  .openapi(headTemplateNameRoute, headTemplateNameRouteHandler)
  .openapi(postIndexDiskUsageRoute, postIndexDiskUsageRouteHandler)
  .openapi(postIndexDownsampleTargetIndexRoute, postIndexDownsampleTargetIndexRouteHandler)
  .openapi(getAliasNameRoute, getAliasNameRouteHandler)
  .openapi(headAliasNameRoute, headAliasNameRouteHandler)
  .openapi(getIndexLifecycleExplainRoute, getIndexLifecycleExplainRouteHandler)
  .openapi(getIndexFieldUsageStatsRoute, getIndexFieldUsageStatsRouteHandler)
  .openapi(getFlushRoute, getFlushRouteHandler)
  .openapi(postFlushRoute, postFlushRouteHandler)
  .openapi(getIndexFlushRoute, getIndexFlushRouteHandler)
  .openapi(postIndexFlushRoute, postIndexFlushRouteHandler)
  .openapi(postForcemergeRoute, postForcemergeRouteHandler)
  .openapi(postIndexForcemergeRoute, postIndexForcemergeRouteHandler)
  .openapi(getAliasRoute, getAliasRouteHandler)
  .openapi(getIndexAliasRoute, getIndexAliasRouteHandler)
  .openapi(getLifecycleStatsRoute, getLifecycleStatsRouteHandler)
  .openapi(getDataStreamRoute, getDataStreamRouteHandler)
  .openapi(getDataStreamNameMappingsRoute, getDataStreamNameMappingsRouteHandler)
  .openapi(putDataStreamNameMappingsRoute, putDataStreamNameMappingsRouteHandler)
  .openapi(getDataStreamNameSettingsRoute, getDataStreamNameSettingsRouteHandler)
  .openapi(putDataStreamNameSettingsRoute, putDataStreamNameSettingsRouteHandler)
  .openapi(getMappingFieldFieldsRoute, getMappingFieldFieldsRouteHandler)
  .openapi(getIndexMappingFieldFieldsRoute, getIndexMappingFieldFieldsRouteHandler)
  .openapi(getIndexTemplateRoute, getIndexTemplateRouteHandler)
  .openapi(getMappingRoute, getMappingRouteHandler)
  .openapi(getIndexMappingRoute, getIndexMappingRouteHandler)
  .openapi(putIndexMappingRoute, putIndexMappingRouteHandler)
  .openapi(postIndexMappingRoute, postIndexMappingRouteHandler)
  .openapi(getMigrationReindexIndexStatusRoute, getMigrationReindexIndexStatusRouteHandler)
  .openapi(getSettingsRoute, getSettingsRouteHandler)
  .openapi(putSettingsRoute, putSettingsRouteHandler)
  .openapi(getIndexSettingsRoute, getIndexSettingsRouteHandler)
  .openapi(putIndexSettingsRoute, putIndexSettingsRouteHandler)
  .openapi(getIndexSettingsNameRoute, getIndexSettingsNameRouteHandler)
  .openapi(getSettingsNameRoute, getSettingsNameRouteHandler)
  .openapi(getTemplateRoute, getTemplateRouteHandler)
  .openapi(postMigrationReindexRoute, postMigrationReindexRouteHandler)
  .openapi(postDataStreamMigrateNameRoute, postDataStreamMigrateNameRouteHandler)
  .openapi(postDataStreamModifyRoute, postDataStreamModifyRouteHandler)
  .openapi(postIndexOpenRoute, postIndexOpenRouteHandler)
  .openapi(postDataStreamPromoteNameRoute, postDataStreamPromoteNameRouteHandler)
  .openapi(getRecoveryRoute, getRecoveryRouteHandler)
  .openapi(getIndexRecoveryRoute, getIndexRecoveryRouteHandler)
  .openapi(getRefreshRoute, getRefreshRouteHandler)
  .openapi(postRefreshRoute, postRefreshRouteHandler)
  .openapi(getIndexRefreshRoute, getIndexRefreshRouteHandler)
  .openapi(postIndexRefreshRoute, postIndexRefreshRouteHandler)
  .openapi(getIndexReloadSearchAnalyzersRoute, getIndexReloadSearchAnalyzersRouteHandler)
  .openapi(postIndexReloadSearchAnalyzersRoute, postIndexReloadSearchAnalyzersRouteHandler)
  .openapi(getResolveClusterRoute, getResolveClusterRouteHandler)
  .openapi(getResolveClusterNameRoute, getResolveClusterNameRouteHandler)
  .openapi(getResolveIndexNameRoute, getResolveIndexNameRouteHandler)
  .openapi(postResolveIndexNameRoute, postResolveIndexNameRouteHandler)
  .openapi(postAliasRolloverRoute, postAliasRolloverRouteHandler)
  .openapi(postAliasRolloverNewIndexRoute, postAliasRolloverNewIndexRouteHandler)
  .openapi(getSegmentsRoute, getSegmentsRouteHandler)
  .openapi(getIndexSegmentsRoute, getIndexSegmentsRouteHandler)
  .openapi(getShardStoresRoute, getShardStoresRouteHandler)
  .openapi(getIndexShardStoresRoute, getIndexShardStoresRouteHandler)
  .openapi(putIndexShrinkTargetRoute, putIndexShrinkTargetRouteHandler)
  .openapi(postIndexShrinkTargetRoute, postIndexShrinkTargetRouteHandler)
  .openapi(postIndexTemplateSimulateIndexNameRoute, postIndexTemplateSimulateIndexNameRouteHandler)
  .openapi(postIndexTemplateSimulateRoute, postIndexTemplateSimulateRouteHandler)
  .openapi(postIndexTemplateSimulateNameRoute, postIndexTemplateSimulateNameRouteHandler)
  .openapi(putIndexSplitTargetRoute, putIndexSplitTargetRouteHandler)
  .openapi(postIndexSplitTargetRoute, postIndexSplitTargetRouteHandler)
  .openapi(getStatsRoute, getStatsRouteHandler)
  .openapi(getStatsMetricRoute, getStatsMetricRouteHandler)
  .openapi(getIndexStatsRoute, getIndexStatsRouteHandler)
  .openapi(getIndexStatsMetricRoute, getIndexStatsMetricRouteHandler)
  .openapi(postAliasesRoute, postAliasesRouteHandler)
  .openapi(getValidateQueryRoute, getValidateQueryRouteHandler)
  .openapi(postValidateQueryRoute, postValidateQueryRouteHandler)
  .openapi(getIndexValidateQueryRoute, getIndexValidateQueryRouteHandler)
  .openapi(postIndexValidateQueryRoute, postIndexValidateQueryRouteHandler)
  .openapi(
    postInferenceChatCompletionInferenceIdRoute,
    postInferenceChatCompletionInferenceIdRouteHandler,
  )
  .openapi(
    postInferenceChatCompletionInferenceIdStreamRoute,
    postInferenceChatCompletionInferenceIdStreamRouteHandler,
  )
  .openapi(postInferenceCompletionInferenceIdRoute, postInferenceCompletionInferenceIdRouteHandler)
  .openapi(postInferenceDecisionInferenceIdRoute, postInferenceDecisionInferenceIdRouteHandler)
  .openapi(getInferenceInferenceIdRoute, getInferenceInferenceIdRouteHandler)
  .openapi(putInferenceInferenceIdRoute, putInferenceInferenceIdRouteHandler)
  .openapi(postInferenceInferenceIdRoute, postInferenceInferenceIdRouteHandler)
  .openapi(deleteInferenceInferenceIdRoute, deleteInferenceInferenceIdRouteHandler)
  .openapi(getInferenceTaskTypeInferenceIdRoute, getInferenceTaskTypeInferenceIdRouteHandler)
  .openapi(putInferenceTaskTypeInferenceIdRoute, putInferenceTaskTypeInferenceIdRouteHandler)
  .openapi(postInferenceTaskTypeInferenceIdRoute, postInferenceTaskTypeInferenceIdRouteHandler)
  .openapi(deleteInferenceTaskTypeInferenceIdRoute, deleteInferenceTaskTypeInferenceIdRouteHandler)
  .openapi(getInferenceRegionPolicyRoute, getInferenceRegionPolicyRouteHandler)
  .openapi(putInferenceRegionPolicyRoute, putInferenceRegionPolicyRouteHandler)
  .openapi(deleteInferenceRegionPolicyRoute, deleteInferenceRegionPolicyRouteHandler)
  .openapi(
    postInferenceDocumentExtractionInferenceIdRoute,
    postInferenceDocumentExtractionInferenceIdRouteHandler,
  )
  .openapi(postInferenceEmbeddingInferenceIdRoute, postInferenceEmbeddingInferenceIdRouteHandler)
  .openapi(getInferenceRoute, getInferenceRouteHandler)
  .openapi(getInferenceTaskTypeAllRoute, getInferenceTaskTypeAllRouteHandler)
  .openapi(
    putInferenceTaskTypeAi21InferenceIdRoute,
    putInferenceTaskTypeAi21InferenceIdRouteHandler,
  )
  .openapi(
    putInferenceTaskTypeAlibabacloudInferenceIdRoute,
    putInferenceTaskTypeAlibabacloudInferenceIdRouteHandler,
  )
  .openapi(
    putInferenceTaskTypeAmazonbedrockInferenceIdRoute,
    putInferenceTaskTypeAmazonbedrockInferenceIdRouteHandler,
  )
  .openapi(
    putInferenceTaskTypeAmazonsagemakerInferenceIdRoute,
    putInferenceTaskTypeAmazonsagemakerInferenceIdRouteHandler,
  )
  .openapi(
    putInferenceTaskTypeAnthropicInferenceIdRoute,
    putInferenceTaskTypeAnthropicInferenceIdRouteHandler,
  )
  .openapi(
    putInferenceTaskTypeAzureaistudioInferenceIdRoute,
    putInferenceTaskTypeAzureaistudioInferenceIdRouteHandler,
  )
  .openapi(
    putInferenceTaskTypeAzureopenaiInferenceIdRoute,
    putInferenceTaskTypeAzureopenaiInferenceIdRouteHandler,
  )
  .openapi(
    putInferenceTaskTypeCohereInferenceIdRoute,
    putInferenceTaskTypeCohereInferenceIdRouteHandler,
  )
  .openapi(
    putInferenceTaskTypeContextualaiInferenceIdRoute,
    putInferenceTaskTypeContextualaiInferenceIdRouteHandler,
  )
  .openapi(
    putInferenceTaskTypeCustomInferenceIdRoute,
    putInferenceTaskTypeCustomInferenceIdRouteHandler,
  )
  .openapi(
    putInferenceTaskTypeDeepseekInferenceIdRoute,
    putInferenceTaskTypeDeepseekInferenceIdRouteHandler,
  )
  .openapi(
    putInferenceTaskTypeElasticsearchInferenceIdRoute,
    putInferenceTaskTypeElasticsearchInferenceIdRouteHandler,
  )
  .openapi(
    putInferenceTaskTypeElserInferenceIdRoute,
    putInferenceTaskTypeElserInferenceIdRouteHandler,
  )
  .openapi(
    putInferenceTaskTypeFireworksaiInferenceIdRoute,
    putInferenceTaskTypeFireworksaiInferenceIdRouteHandler,
  )
  .openapi(
    putInferenceTaskTypeGoogleaistudioInferenceIdRoute,
    putInferenceTaskTypeGoogleaistudioInferenceIdRouteHandler,
  )
  .openapi(
    putInferenceTaskTypeGooglevertexaiInferenceIdRoute,
    putInferenceTaskTypeGooglevertexaiInferenceIdRouteHandler,
  )
  .openapi(
    putInferenceTaskTypeGroqInferenceIdRoute,
    putInferenceTaskTypeGroqInferenceIdRouteHandler,
  )
  .openapi(
    putInferenceTaskTypeHuggingfaceInferenceIdRoute,
    putInferenceTaskTypeHuggingfaceInferenceIdRouteHandler,
  )
  .openapi(
    putInferenceTaskTypeJinaaiInferenceIdRoute,
    putInferenceTaskTypeJinaaiInferenceIdRouteHandler,
  )
  .openapi(
    putInferenceTaskTypeLlamaInferenceIdRoute,
    putInferenceTaskTypeLlamaInferenceIdRouteHandler,
  )
  .openapi(
    putInferenceTaskTypeMistralInferenceIdRoute,
    putInferenceTaskTypeMistralInferenceIdRouteHandler,
  )
  .openapi(
    putInferenceTaskTypeNvidiaInferenceIdRoute,
    putInferenceTaskTypeNvidiaInferenceIdRouteHandler,
  )
  .openapi(
    putInferenceTaskTypeOpenaiInferenceIdRoute,
    putInferenceTaskTypeOpenaiInferenceIdRouteHandler,
  )
  .openapi(
    putInferenceTaskTypeOpenshiftaiInferenceIdRoute,
    putInferenceTaskTypeOpenshiftaiInferenceIdRouteHandler,
  )
  .openapi(
    putInferenceTaskTypeVoyageaiInferenceIdRoute,
    putInferenceTaskTypeVoyageaiInferenceIdRouteHandler,
  )
  .openapi(
    putInferenceTaskTypeWatsonxInferenceIdRoute,
    putInferenceTaskTypeWatsonxInferenceIdRouteHandler,
  )
  .openapi(postInferenceRerankInferenceIdRoute, postInferenceRerankInferenceIdRouteHandler)
  .openapi(
    postInferenceSparseEmbeddingInferenceIdRoute,
    postInferenceSparseEmbeddingInferenceIdRouteHandler,
  )
  .openapi(
    postInferenceCompletionInferenceIdStreamRoute,
    postInferenceCompletionInferenceIdStreamRouteHandler,
  )
  .openapi(
    postInferenceTextEmbeddingInferenceIdRoute,
    postInferenceTextEmbeddingInferenceIdRouteHandler,
  )
  .openapi(putInferenceInferenceIdUpdateRoute, putInferenceInferenceIdUpdateRouteHandler)
  .openapi(
    putInferenceTaskTypeInferenceIdUpdateRoute,
    putInferenceTaskTypeInferenceIdUpdateRouteHandler,
  )
  .openapi(getRoute, getRouteHandler)
  .openapi(headRoute, headRouteHandler)
  .openapi(getIngestGeoipDatabaseIdRoute, getIngestGeoipDatabaseIdRouteHandler)
  .openapi(putIngestGeoipDatabaseIdRoute, putIngestGeoipDatabaseIdRouteHandler)
  .openapi(deleteIngestGeoipDatabaseIdRoute, deleteIngestGeoipDatabaseIdRouteHandler)
  .openapi(getIngestIpLocationDatabaseIdRoute, getIngestIpLocationDatabaseIdRouteHandler)
  .openapi(putIngestIpLocationDatabaseIdRoute, putIngestIpLocationDatabaseIdRouteHandler)
  .openapi(deleteIngestIpLocationDatabaseIdRoute, deleteIngestIpLocationDatabaseIdRouteHandler)
  .openapi(getIngestPipelineIdRoute, getIngestPipelineIdRouteHandler)
  .openapi(putIngestPipelineIdRoute, putIngestPipelineIdRouteHandler)
  .openapi(deleteIngestPipelineIdRoute, deleteIngestPipelineIdRouteHandler)
  .openapi(getIngestGeoipStatsRoute, getIngestGeoipStatsRouteHandler)
  .openapi(getIngestGeoipDatabaseRoute, getIngestGeoipDatabaseRouteHandler)
  .openapi(getIngestIpLocationDatabaseRoute, getIngestIpLocationDatabaseRouteHandler)
  .openapi(getIngestPipelineRoute, getIngestPipelineRouteHandler)
  .openapi(getIngestProcessorGrokRoute, getIngestProcessorGrokRouteHandler)
  .openapi(getIngestPipelineSimulateRoute, getIngestPipelineSimulateRouteHandler)
  .openapi(postIngestPipelineSimulateRoute, postIngestPipelineSimulateRouteHandler)
  .openapi(getIngestPipelineIdSimulateRoute, getIngestPipelineIdSimulateRouteHandler)
  .openapi(postIngestPipelineIdSimulateRoute, postIngestPipelineIdSimulateRouteHandler)
  .openapi(getIndexKnnEvalRoute, getIndexKnnEvalRouteHandler)
  .openapi(postIndexKnnEvalRoute, postIndexKnnEvalRouteHandler)
  .openapi(getLicenseRoute, getLicenseRouteHandler)
  .openapi(putLicenseRoute, putLicenseRouteHandler)
  .openapi(postLicenseRoute, postLicenseRouteHandler)
  .openapi(deleteLicenseRoute, deleteLicenseRouteHandler)
  .openapi(getLicenseBasicStatusRoute, getLicenseBasicStatusRouteHandler)
  .openapi(getLicenseTrialStatusRoute, getLicenseTrialStatusRouteHandler)
  .openapi(postLicenseStartBasicRoute, postLicenseStartBasicRouteHandler)
  .openapi(postLicenseStartTrialRoute, postLicenseStartTrialRouteHandler)
  .openapi(getReindexRoute, getReindexRouteHandler)
  .openapi(postReindexRoute, postReindexRouteHandler)
  .openapi(getLogstashPipelineIdRoute, getLogstashPipelineIdRouteHandler)
  .openapi(putLogstashPipelineIdRoute, putLogstashPipelineIdRouteHandler)
  .openapi(deleteLogstashPipelineIdRoute, deleteLogstashPipelineIdRouteHandler)
  .openapi(getLogstashPipelineRoute, getLogstashPipelineRouteHandler)
  .openapi(getMgetRoute, getMgetRouteHandler)
  .openapi(postMgetRoute, postMgetRouteHandler)
  .openapi(getIndexMgetRoute, getIndexMgetRouteHandler)
  .openapi(postIndexMgetRoute, postIndexMgetRouteHandler)
  .openapi(getMigrationDeprecationsRoute, getMigrationDeprecationsRouteHandler)
  .openapi(getIndexMigrationDeprecationsRoute, getIndexMigrationDeprecationsRouteHandler)
  .openapi(getMigrationSystemFeaturesRoute, getMigrationSystemFeaturesRouteHandler)
  .openapi(postMigrationSystemFeaturesRoute, postMigrationSystemFeaturesRouteHandler)
  .openapi(
    postMlTrainedModelsModelIdDeploymentCacheClearRoute,
    postMlTrainedModelsModelIdDeploymentCacheClearRouteHandler,
  )
  .openapi(postMlAnomalyDetectorsJobIdCloseRoute, postMlAnomalyDetectorsJobIdCloseRouteHandler)
  .openapi(getMlCalendarsCalendarIdRoute, getMlCalendarsCalendarIdRouteHandler)
  .openapi(putMlCalendarsCalendarIdRoute, putMlCalendarsCalendarIdRouteHandler)
  .openapi(postMlCalendarsCalendarIdRoute, postMlCalendarsCalendarIdRouteHandler)
  .openapi(deleteMlCalendarsCalendarIdRoute, deleteMlCalendarsCalendarIdRouteHandler)
  .openapi(
    deleteMlCalendarsCalendarIdEventsEventIdRoute,
    deleteMlCalendarsCalendarIdEventsEventIdRouteHandler,
  )
  .openapi(putMlCalendarsCalendarIdJobsJobIdRoute, putMlCalendarsCalendarIdJobsJobIdRouteHandler)
  .openapi(
    deleteMlCalendarsCalendarIdJobsJobIdRoute,
    deleteMlCalendarsCalendarIdJobsJobIdRouteHandler,
  )
  .openapi(getMlDataFrameAnalyticsIdRoute, getMlDataFrameAnalyticsIdRouteHandler)
  .openapi(putMlDataFrameAnalyticsIdRoute, putMlDataFrameAnalyticsIdRouteHandler)
  .openapi(deleteMlDataFrameAnalyticsIdRoute, deleteMlDataFrameAnalyticsIdRouteHandler)
  .openapi(getMlDatafeedsDatafeedIdRoute, getMlDatafeedsDatafeedIdRouteHandler)
  .openapi(putMlDatafeedsDatafeedIdRoute, putMlDatafeedsDatafeedIdRouteHandler)
  .openapi(deleteMlDatafeedsDatafeedIdRoute, deleteMlDatafeedsDatafeedIdRouteHandler)
  .openapi(deleteMlDeleteExpiredDataJobIdRoute, deleteMlDeleteExpiredDataJobIdRouteHandler)
  .openapi(deleteMlDeleteExpiredDataRoute, deleteMlDeleteExpiredDataRouteHandler)
  .openapi(getMlFiltersFilterIdRoute, getMlFiltersFilterIdRouteHandler)
  .openapi(putMlFiltersFilterIdRoute, putMlFiltersFilterIdRouteHandler)
  .openapi(deleteMlFiltersFilterIdRoute, deleteMlFiltersFilterIdRouteHandler)
  .openapi(
    postMlAnomalyDetectorsJobIdForecastRoute,
    postMlAnomalyDetectorsJobIdForecastRouteHandler,
  )
  .openapi(
    deleteMlAnomalyDetectorsJobIdForecastRoute,
    deleteMlAnomalyDetectorsJobIdForecastRouteHandler,
  )
  .openapi(
    deleteMlAnomalyDetectorsJobIdForecastForecastIdRoute,
    deleteMlAnomalyDetectorsJobIdForecastForecastIdRouteHandler,
  )
  .openapi(getMlAnomalyDetectorsJobIdRoute, getMlAnomalyDetectorsJobIdRouteHandler)
  .openapi(putMlAnomalyDetectorsJobIdRoute, putMlAnomalyDetectorsJobIdRouteHandler)
  .openapi(deleteMlAnomalyDetectorsJobIdRoute, deleteMlAnomalyDetectorsJobIdRouteHandler)
  .openapi(
    getMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRoute,
    getMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRouteHandler,
  )
  .openapi(
    postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRoute,
    postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRouteHandler,
  )
  .openapi(
    deleteMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRoute,
    deleteMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRouteHandler,
  )
  .openapi(getMlTrainedModelsModelIdRoute, getMlTrainedModelsModelIdRouteHandler)
  .openapi(putMlTrainedModelsModelIdRoute, putMlTrainedModelsModelIdRouteHandler)
  .openapi(deleteMlTrainedModelsModelIdRoute, deleteMlTrainedModelsModelIdRouteHandler)
  .openapi(
    putMlTrainedModelsModelIdModelAliasesModelAliasRoute,
    putMlTrainedModelsModelIdModelAliasesModelAliasRouteHandler,
  )
  .openapi(
    deleteMlTrainedModelsModelIdModelAliasesModelAliasRoute,
    deleteMlTrainedModelsModelIdModelAliasesModelAliasRouteHandler,
  )
  .openapi(
    postMlAnomalyDetectorsEstimateModelMemoryRoute,
    postMlAnomalyDetectorsEstimateModelMemoryRouteHandler,
  )
  .openapi(postMlDataFrameEvaluateRoute, postMlDataFrameEvaluateRouteHandler)
  .openapi(getMlDataFrameAnalyticsExplainRoute, getMlDataFrameAnalyticsExplainRouteHandler)
  .openapi(postMlDataFrameAnalyticsExplainRoute, postMlDataFrameAnalyticsExplainRouteHandler)
  .openapi(getMlDataFrameAnalyticsIdExplainRoute, getMlDataFrameAnalyticsIdExplainRouteHandler)
  .openapi(postMlDataFrameAnalyticsIdExplainRoute, postMlDataFrameAnalyticsIdExplainRouteHandler)
  .openapi(postMlAnomalyDetectorsJobIdFlushRoute, postMlAnomalyDetectorsJobIdFlushRouteHandler)
  .openapi(
    getMlAnomalyDetectorsJobIdResultsBucketsTimestampRoute,
    getMlAnomalyDetectorsJobIdResultsBucketsTimestampRouteHandler,
  )
  .openapi(
    postMlAnomalyDetectorsJobIdResultsBucketsTimestampRoute,
    postMlAnomalyDetectorsJobIdResultsBucketsTimestampRouteHandler,
  )
  .openapi(
    getMlAnomalyDetectorsJobIdResultsBucketsRoute,
    getMlAnomalyDetectorsJobIdResultsBucketsRouteHandler,
  )
  .openapi(
    postMlAnomalyDetectorsJobIdResultsBucketsRoute,
    postMlAnomalyDetectorsJobIdResultsBucketsRouteHandler,
  )
  .openapi(getMlCalendarsCalendarIdEventsRoute, getMlCalendarsCalendarIdEventsRouteHandler)
  .openapi(postMlCalendarsCalendarIdEventsRoute, postMlCalendarsCalendarIdEventsRouteHandler)
  .openapi(getMlCalendarsRoute, getMlCalendarsRouteHandler)
  .openapi(postMlCalendarsRoute, postMlCalendarsRouteHandler)
  .openapi(
    getMlAnomalyDetectorsJobIdResultsCategoriesCategoryIdRoute,
    getMlAnomalyDetectorsJobIdResultsCategoriesCategoryIdRouteHandler,
  )
  .openapi(
    postMlAnomalyDetectorsJobIdResultsCategoriesCategoryIdRoute,
    postMlAnomalyDetectorsJobIdResultsCategoriesCategoryIdRouteHandler,
  )
  .openapi(
    getMlAnomalyDetectorsJobIdResultsCategoriesRoute,
    getMlAnomalyDetectorsJobIdResultsCategoriesRouteHandler,
  )
  .openapi(
    postMlAnomalyDetectorsJobIdResultsCategoriesRoute,
    postMlAnomalyDetectorsJobIdResultsCategoriesRouteHandler,
  )
  .openapi(getMlDataFrameAnalyticsRoute, getMlDataFrameAnalyticsRouteHandler)
  .openapi(getMlDataFrameAnalyticsStatsRoute, getMlDataFrameAnalyticsStatsRouteHandler)
  .openapi(getMlDataFrameAnalyticsIdStatsRoute, getMlDataFrameAnalyticsIdStatsRouteHandler)
  .openapi(getMlDatafeedsDatafeedIdStatsRoute, getMlDatafeedsDatafeedIdStatsRouteHandler)
  .openapi(getMlDatafeedsStatsRoute, getMlDatafeedsStatsRouteHandler)
  .openapi(getMlDatafeedsRoute, getMlDatafeedsRouteHandler)
  .openapi(getMlFiltersRoute, getMlFiltersRouteHandler)
  .openapi(
    getMlAnomalyDetectorsJobIdResultsInfluencersRoute,
    getMlAnomalyDetectorsJobIdResultsInfluencersRouteHandler,
  )
  .openapi(
    postMlAnomalyDetectorsJobIdResultsInfluencersRoute,
    postMlAnomalyDetectorsJobIdResultsInfluencersRouteHandler,
  )
  .openapi(getMlAnomalyDetectorsStatsRoute, getMlAnomalyDetectorsStatsRouteHandler)
  .openapi(getMlAnomalyDetectorsJobIdStatsRoute, getMlAnomalyDetectorsJobIdStatsRouteHandler)
  .openapi(getMlAnomalyDetectorsRoute, getMlAnomalyDetectorsRouteHandler)
  .openapi(getMlMemoryStatsRoute, getMlMemoryStatsRouteHandler)
  .openapi(getMlMemoryNodeIdStatsRoute, getMlMemoryNodeIdStatsRouteHandler)
  .openapi(
    getMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdUpgradeStatsRoute,
    getMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdUpgradeStatsRouteHandler,
  )
  .openapi(
    getMlAnomalyDetectorsJobIdModelSnapshotsRoute,
    getMlAnomalyDetectorsJobIdModelSnapshotsRouteHandler,
  )
  .openapi(
    postMlAnomalyDetectorsJobIdModelSnapshotsRoute,
    postMlAnomalyDetectorsJobIdModelSnapshotsRouteHandler,
  )
  .openapi(
    getMlAnomalyDetectorsJobIdResultsOverallBucketsRoute,
    getMlAnomalyDetectorsJobIdResultsOverallBucketsRouteHandler,
  )
  .openapi(
    postMlAnomalyDetectorsJobIdResultsOverallBucketsRoute,
    postMlAnomalyDetectorsJobIdResultsOverallBucketsRouteHandler,
  )
  .openapi(
    getMlAnomalyDetectorsJobIdResultsRecordsRoute,
    getMlAnomalyDetectorsJobIdResultsRecordsRouteHandler,
  )
  .openapi(
    postMlAnomalyDetectorsJobIdResultsRecordsRoute,
    postMlAnomalyDetectorsJobIdResultsRecordsRouteHandler,
  )
  .openapi(getMlTrainedModelsRoute, getMlTrainedModelsRouteHandler)
  .openapi(getMlTrainedModelsModelIdStatsRoute, getMlTrainedModelsModelIdStatsRouteHandler)
  .openapi(getMlTrainedModelsStatsRoute, getMlTrainedModelsStatsRouteHandler)
  .openapi(postMlTrainedModelsModelIdInferRoute, postMlTrainedModelsModelIdInferRouteHandler)
  .openapi(getMlInfoRoute, getMlInfoRouteHandler)
  .openapi(postMlAnomalyDetectorsJobIdOpenRoute, postMlAnomalyDetectorsJobIdOpenRouteHandler)
  .openapi(postMlAnomalyDetectorsJobIdDataRoute, postMlAnomalyDetectorsJobIdDataRouteHandler)
  .openapi(getMlDataFrameAnalyticsPreviewRoute, getMlDataFrameAnalyticsPreviewRouteHandler)
  .openapi(postMlDataFrameAnalyticsPreviewRoute, postMlDataFrameAnalyticsPreviewRouteHandler)
  .openapi(getMlDataFrameAnalyticsIdPreviewRoute, getMlDataFrameAnalyticsIdPreviewRouteHandler)
  .openapi(postMlDataFrameAnalyticsIdPreviewRoute, postMlDataFrameAnalyticsIdPreviewRouteHandler)
  .openapi(getMlDatafeedsDatafeedIdPreviewRoute, getMlDatafeedsDatafeedIdPreviewRouteHandler)
  .openapi(postMlDatafeedsDatafeedIdPreviewRoute, postMlDatafeedsDatafeedIdPreviewRouteHandler)
  .openapi(getMlDatafeedsPreviewRoute, getMlDatafeedsPreviewRouteHandler)
  .openapi(postMlDatafeedsPreviewRoute, postMlDatafeedsPreviewRouteHandler)
  .openapi(
    putMlTrainedModelsModelIdDefinitionPartRoute,
    putMlTrainedModelsModelIdDefinitionPartRouteHandler,
  )
  .openapi(
    putMlTrainedModelsModelIdVocabularyRoute,
    putMlTrainedModelsModelIdVocabularyRouteHandler,
  )
  .openapi(postMlAnomalyDetectorsJobIdResetRoute, postMlAnomalyDetectorsJobIdResetRouteHandler)
  .openapi(
    postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRevertRoute,
    postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRevertRouteHandler,
  )
  .openapi(postMlSetUpgradeModeRoute, postMlSetUpgradeModeRouteHandler)
  .openapi(postMlDataFrameAnalyticsIdStartRoute, postMlDataFrameAnalyticsIdStartRouteHandler)
  .openapi(postMlDatafeedsDatafeedIdStartRoute, postMlDatafeedsDatafeedIdStartRouteHandler)
  .openapi(
    postMlTrainedModelsModelIdDeploymentStartRoute,
    postMlTrainedModelsModelIdDeploymentStartRouteHandler,
  )
  .openapi(postMlDataFrameAnalyticsIdStopRoute, postMlDataFrameAnalyticsIdStopRouteHandler)
  .openapi(postMlDatafeedsDatafeedIdStopRoute, postMlDatafeedsDatafeedIdStopRouteHandler)
  .openapi(
    postMlTrainedModelsModelIdDeploymentStopRoute,
    postMlTrainedModelsModelIdDeploymentStopRouteHandler,
  )
  .openapi(postMlDataFrameAnalyticsIdUpdateRoute, postMlDataFrameAnalyticsIdUpdateRouteHandler)
  .openapi(postMlDatafeedsDatafeedIdUpdateRoute, postMlDatafeedsDatafeedIdUpdateRouteHandler)
  .openapi(postMlFiltersFilterIdUpdateRoute, postMlFiltersFilterIdUpdateRouteHandler)
  .openapi(postMlAnomalyDetectorsJobIdUpdateRoute, postMlAnomalyDetectorsJobIdUpdateRouteHandler)
  .openapi(
    postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdUpdateRoute,
    postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdUpdateRouteHandler,
  )
  .openapi(
    postMlTrainedModelsModelIdDeploymentUpdateRoute,
    postMlTrainedModelsModelIdDeploymentUpdateRouteHandler,
  )
  .openapi(
    postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdUpgradeRoute,
    postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdUpgradeRouteHandler,
  )
  .openapi(getMsearchRoute, getMsearchRouteHandler)
  .openapi(postMsearchRoute, postMsearchRouteHandler)
  .openapi(getIndexMsearchRoute, getIndexMsearchRouteHandler)
  .openapi(postIndexMsearchRoute, postIndexMsearchRouteHandler)
  .openapi(getMsearchTemplateRoute, getMsearchTemplateRouteHandler)
  .openapi(postMsearchTemplateRoute, postMsearchTemplateRouteHandler)
  .openapi(getIndexMsearchTemplateRoute, getIndexMsearchTemplateRouteHandler)
  .openapi(postIndexMsearchTemplateRoute, postIndexMsearchTemplateRouteHandler)
  .openapi(getMtermvectorsRoute, getMtermvectorsRouteHandler)
  .openapi(postMtermvectorsRoute, postMtermvectorsRouteHandler)
  .openapi(getIndexMtermvectorsRoute, getIndexMtermvectorsRouteHandler)
  .openapi(postIndexMtermvectorsRoute, postIndexMtermvectorsRouteHandler)
  .openapi(
    deleteNodesNodeIdRepositoriesMeteringMaxArchiveVersionRoute,
    deleteNodesNodeIdRepositoriesMeteringMaxArchiveVersionRouteHandler,
  )
  .openapi(getNodesNodeIdRepositoriesMeteringRoute, getNodesNodeIdRepositoriesMeteringRouteHandler)
  .openapi(getNodesHotThreadsRoute, getNodesHotThreadsRouteHandler)
  .openapi(getNodesNodeIdHotThreadsRoute, getNodesNodeIdHotThreadsRouteHandler)
  .openapi(getNodesRoute, getNodesRouteHandler)
  .openapi(getNodesNodeIdRoute, getNodesNodeIdRouteHandler)
  .openapi(getNodesMetricRoute, getNodesMetricRouteHandler)
  .openapi(getNodesNodeIdMetricRoute, getNodesNodeIdMetricRouteHandler)
  .openapi(postNodesReloadSecureSettingsRoute, postNodesReloadSecureSettingsRouteHandler)
  .openapi(
    postNodesNodeIdReloadSecureSettingsRoute,
    postNodesNodeIdReloadSecureSettingsRouteHandler,
  )
  .openapi(getNodesStatsRoute, getNodesStatsRouteHandler)
  .openapi(getNodesNodeIdStatsRoute, getNodesNodeIdStatsRouteHandler)
  .openapi(getNodesStatsMetricRoute, getNodesStatsMetricRouteHandler)
  .openapi(getNodesNodeIdStatsMetricRoute, getNodesNodeIdStatsMetricRouteHandler)
  .openapi(getNodesStatsMetricIndexMetricRoute, getNodesStatsMetricIndexMetricRouteHandler)
  .openapi(
    getNodesNodeIdStatsMetricIndexMetricRoute,
    getNodesNodeIdStatsMetricIndexMetricRouteHandler,
  )
  .openapi(getNodesUsageRoute, getNodesUsageRouteHandler)
  .openapi(getNodesNodeIdUsageRoute, getNodesNodeIdUsageRouteHandler)
  .openapi(getNodesUsageMetricRoute, getNodesUsageMetricRouteHandler)
  .openapi(getNodesNodeIdUsageMetricRoute, getNodesNodeIdUsageMetricRouteHandler)
  .openapi(postIndexPitRoute, postIndexPitRouteHandler)
  .openapi(getPrometheusApiV1StatusBuildinfoRoute, getPrometheusApiV1StatusBuildinfoRouteHandler)
  .openapi(
    getPrometheusIndexApiV1StatusBuildinfoRoute,
    getPrometheusIndexApiV1StatusBuildinfoRouteHandler,
  )
  .openapi(putScriptsIdContextRoute, putScriptsIdContextRouteHandler)
  .openapi(postScriptsIdContextRoute, postScriptsIdContextRouteHandler)
  .openapi(getQueryRulesRulesetIdRuleRuleIdRoute, getQueryRulesRulesetIdRuleRuleIdRouteHandler)
  .openapi(putQueryRulesRulesetIdRuleRuleIdRoute, putQueryRulesRulesetIdRuleRuleIdRouteHandler)
  .openapi(
    deleteQueryRulesRulesetIdRuleRuleIdRoute,
    deleteQueryRulesRulesetIdRuleRuleIdRouteHandler,
  )
  .openapi(getQueryRulesRulesetIdRoute, getQueryRulesRulesetIdRouteHandler)
  .openapi(putQueryRulesRulesetIdRoute, putQueryRulesRulesetIdRouteHandler)
  .openapi(deleteQueryRulesRulesetIdRoute, deleteQueryRulesRulesetIdRouteHandler)
  .openapi(getQueryRulesRoute, getQueryRulesRouteHandler)
  .openapi(postQueryRulesRulesetIdTestRoute, postQueryRulesRulesetIdTestRouteHandler)
  .openapi(getRankEvalRoute, getRankEvalRouteHandler)
  .openapi(postRankEvalRoute, postRankEvalRouteHandler)
  .openapi(getIndexRankEvalRoute, getIndexRankEvalRouteHandler)
  .openapi(postIndexRankEvalRoute, postIndexRankEvalRouteHandler)
  .openapi(postReindexTaskIdRethrottleRoute, postReindexTaskIdRethrottleRouteHandler)
  .openapi(getRenderTemplateRoute, getRenderTemplateRouteHandler)
  .openapi(postRenderTemplateRoute, postRenderTemplateRouteHandler)
  .openapi(getRenderTemplateIdRoute, getRenderTemplateIdRouteHandler)
  .openapi(postRenderTemplateIdRoute, postRenderTemplateIdRouteHandler)
  .openapi(getRollupJobIdRoute, getRollupJobIdRouteHandler)
  .openapi(putRollupJobIdRoute, putRollupJobIdRouteHandler)
  .openapi(deleteRollupJobIdRoute, deleteRollupJobIdRouteHandler)
  .openapi(getRollupJobRoute, getRollupJobRouteHandler)
  .openapi(getRollupDataIdRoute, getRollupDataIdRouteHandler)
  .openapi(getRollupDataRoute, getRollupDataRouteHandler)
  .openapi(getIndexRollupDataRoute, getIndexRollupDataRouteHandler)
  .openapi(getIndexRollupSearchRoute, getIndexRollupSearchRouteHandler)
  .openapi(postIndexRollupSearchRoute, postIndexRollupSearchRouteHandler)
  .openapi(postRollupJobIdStartRoute, postRollupJobIdStartRouteHandler)
  .openapi(postRollupJobIdStopRoute, postRollupJobIdStopRouteHandler)
  .openapi(getScriptsPainlessExecuteRoute, getScriptsPainlessExecuteRouteHandler)
  .openapi(postScriptsPainlessExecuteRoute, postScriptsPainlessExecuteRouteHandler)
  .openapi(getSearchRoute, getSearchRouteHandler)
  .openapi(postSearchRoute, postSearchRouteHandler)
  .openapi(getIndexSearchRoute, getIndexSearchRouteHandler)
  .openapi(postIndexSearchRoute, postIndexSearchRouteHandler)
  .openapi(
    getApplicationSearchApplicationNameRoute,
    getApplicationSearchApplicationNameRouteHandler,
  )
  .openapi(
    putApplicationSearchApplicationNameRoute,
    putApplicationSearchApplicationNameRouteHandler,
  )
  .openapi(
    deleteApplicationSearchApplicationNameRoute,
    deleteApplicationSearchApplicationNameRouteHandler,
  )
  .openapi(getApplicationAnalyticsNameRoute, getApplicationAnalyticsNameRouteHandler)
  .openapi(putApplicationAnalyticsNameRoute, putApplicationAnalyticsNameRouteHandler)
  .openapi(deleteApplicationAnalyticsNameRoute, deleteApplicationAnalyticsNameRouteHandler)
  .openapi(getApplicationAnalyticsRoute, getApplicationAnalyticsRouteHandler)
  .openapi(getApplicationSearchApplicationRoute, getApplicationSearchApplicationRouteHandler)
  .openapi(
    postApplicationAnalyticsCollectionNameEventEventTypeRoute,
    postApplicationAnalyticsCollectionNameEventEventTypeRouteHandler,
  )
  .openapi(
    postApplicationSearchApplicationNameRenderQueryRoute,
    postApplicationSearchApplicationNameRenderQueryRouteHandler,
  )
  .openapi(
    getApplicationSearchApplicationNameSearchRoute,
    getApplicationSearchApplicationNameSearchRouteHandler,
  )
  .openapi(
    postApplicationSearchApplicationNameSearchRoute,
    postApplicationSearchApplicationNameSearchRouteHandler,
  )
  .openapi(getIndexMvtFieldZoomXYRoute, getIndexMvtFieldZoomXYRouteHandler)
  .openapi(postIndexMvtFieldZoomXYRoute, postIndexMvtFieldZoomXYRouteHandler)
  .openapi(getSearchShardsRoute, getSearchShardsRouteHandler)
  .openapi(postSearchShardsRoute, postSearchShardsRouteHandler)
  .openapi(getIndexSearchShardsRoute, getIndexSearchShardsRouteHandler)
  .openapi(postIndexSearchShardsRoute, postIndexSearchShardsRouteHandler)
  .openapi(getSearchTemplateRoute, getSearchTemplateRouteHandler)
  .openapi(postSearchTemplateRoute, postSearchTemplateRouteHandler)
  .openapi(getIndexSearchTemplateRoute, getIndexSearchTemplateRouteHandler)
  .openapi(postIndexSearchTemplateRoute, postIndexSearchTemplateRouteHandler)
  .openapi(getSearchableSnapshotsCacheStatsRoute, getSearchableSnapshotsCacheStatsRouteHandler)
  .openapi(
    getSearchableSnapshotsNodeIdCacheStatsRoute,
    getSearchableSnapshotsNodeIdCacheStatsRouteHandler,
  )
  .openapi(postSearchableSnapshotsCacheClearRoute, postSearchableSnapshotsCacheClearRouteHandler)
  .openapi(
    postIndexSearchableSnapshotsCacheClearRoute,
    postIndexSearchableSnapshotsCacheClearRouteHandler,
  )
  .openapi(
    postSnapshotRepositorySnapshotMountRoute,
    postSnapshotRepositorySnapshotMountRouteHandler,
  )
  .openapi(getSearchableSnapshotsStatsRoute, getSearchableSnapshotsStatsRouteHandler)
  .openapi(getIndexSearchableSnapshotsStatsRoute, getIndexSearchableSnapshotsStatsRouteHandler)
  .openapi(postSecurityProfileActivateRoute, postSecurityProfileActivateRouteHandler)
  .openapi(getSecurityAuthenticateRoute, getSecurityAuthenticateRouteHandler)
  .openapi(getSecurityRoleRoute, getSecurityRoleRouteHandler)
  .openapi(postSecurityRoleRoute, postSecurityRoleRouteHandler)
  .openapi(deleteSecurityRoleRoute, deleteSecurityRoleRouteHandler)
  .openapi(postSecurityApiKeyBulkUpdateRoute, postSecurityApiKeyBulkUpdateRouteHandler)
  .openapi(putSecurityUserUsernamePasswordRoute, putSecurityUserUsernamePasswordRouteHandler)
  .openapi(postSecurityUserUsernamePasswordRoute, postSecurityUserUsernamePasswordRouteHandler)
  .openapi(putSecurityUserPasswordRoute, putSecurityUserPasswordRouteHandler)
  .openapi(postSecurityUserPasswordRoute, postSecurityUserPasswordRouteHandler)
  .openapi(postSecurityApiKeyIdsClearCacheRoute, postSecurityApiKeyIdsClearCacheRouteHandler)
  .openapi(
    postSecurityPrivilegeApplicationClearCacheRoute,
    postSecurityPrivilegeApplicationClearCacheRouteHandler,
  )
  .openapi(postSecurityRealmRealmsClearCacheRoute, postSecurityRealmRealmsClearCacheRouteHandler)
  .openapi(postSecurityRoleNameClearCacheRoute, postSecurityRoleNameClearCacheRouteHandler)
  .openapi(
    postSecurityServiceNamespaceServiceCredentialTokenNameClearCacheRoute,
    postSecurityServiceNamespaceServiceCredentialTokenNameClearCacheRouteHandler,
  )
  .openapi(putSecurityApiKeyCloneRoute, putSecurityApiKeyCloneRouteHandler)
  .openapi(postSecurityApiKeyCloneRoute, postSecurityApiKeyCloneRouteHandler)
  .openapi(getSecurityApiKeyRoute, getSecurityApiKeyRouteHandler)
  .openapi(putSecurityApiKeyRoute, putSecurityApiKeyRouteHandler)
  .openapi(postSecurityApiKeyRoute, postSecurityApiKeyRouteHandler)
  .openapi(deleteSecurityApiKeyRoute, deleteSecurityApiKeyRouteHandler)
  .openapi(postSecurityCrossClusterApiKeyRoute, postSecurityCrossClusterApiKeyRouteHandler)
  .openapi(
    putSecurityServiceNamespaceServiceCredentialTokenNameRoute,
    putSecurityServiceNamespaceServiceCredentialTokenNameRouteHandler,
  )
  .openapi(
    postSecurityServiceNamespaceServiceCredentialTokenNameRoute,
    postSecurityServiceNamespaceServiceCredentialTokenNameRouteHandler,
  )
  .openapi(
    deleteSecurityServiceNamespaceServiceCredentialTokenNameRoute,
    deleteSecurityServiceNamespaceServiceCredentialTokenNameRouteHandler,
  )
  .openapi(
    postSecurityServiceNamespaceServiceCredentialTokenRoute,
    postSecurityServiceNamespaceServiceCredentialTokenRouteHandler,
  )
  .openapi(postSecurityDelegatePkiRoute, postSecurityDelegatePkiRouteHandler)
  .openapi(
    getSecurityPrivilegeApplicationNameRoute,
    getSecurityPrivilegeApplicationNameRouteHandler,
  )
  .openapi(
    deleteSecurityPrivilegeApplicationNameRoute,
    deleteSecurityPrivilegeApplicationNameRouteHandler,
  )
  .openapi(getSecurityRoleNameRoute, getSecurityRoleNameRouteHandler)
  .openapi(putSecurityRoleNameRoute, putSecurityRoleNameRouteHandler)
  .openapi(postSecurityRoleNameRoute, postSecurityRoleNameRouteHandler)
  .openapi(deleteSecurityRoleNameRoute, deleteSecurityRoleNameRouteHandler)
  .openapi(getSecurityRoleMappingNameRoute, getSecurityRoleMappingNameRouteHandler)
  .openapi(putSecurityRoleMappingNameRoute, putSecurityRoleMappingNameRouteHandler)
  .openapi(postSecurityRoleMappingNameRoute, postSecurityRoleMappingNameRouteHandler)
  .openapi(deleteSecurityRoleMappingNameRoute, deleteSecurityRoleMappingNameRouteHandler)
  .openapi(getSecurityUserUsernameRoute, getSecurityUserUsernameRouteHandler)
  .openapi(putSecurityUserUsernameRoute, putSecurityUserUsernameRouteHandler)
  .openapi(postSecurityUserUsernameRoute, postSecurityUserUsernameRouteHandler)
  .openapi(deleteSecurityUserUsernameRoute, deleteSecurityUserUsernameRouteHandler)
  .openapi(getSecurityServiceNamespaceServiceRoute, getSecurityServiceNamespaceServiceRouteHandler)
  .openapi(putSecurityServiceNamespaceServiceRoute, putSecurityServiceNamespaceServiceRouteHandler)
  .openapi(
    deleteSecurityServiceNamespaceServiceRoute,
    deleteSecurityServiceNamespaceServiceRouteHandler,
  )
  .openapi(putSecurityUserUsernameDisableRoute, putSecurityUserUsernameDisableRouteHandler)
  .openapi(postSecurityUserUsernameDisableRoute, postSecurityUserUsernameDisableRouteHandler)
  .openapi(putSecurityProfileUidDisableRoute, putSecurityProfileUidDisableRouteHandler)
  .openapi(postSecurityProfileUidDisableRoute, postSecurityProfileUidDisableRouteHandler)
  .openapi(putSecurityUserUsernameEnableRoute, putSecurityUserUsernameEnableRouteHandler)
  .openapi(postSecurityUserUsernameEnableRoute, postSecurityUserUsernameEnableRouteHandler)
  .openapi(putSecurityProfileUidEnableRoute, putSecurityProfileUidEnableRouteHandler)
  .openapi(postSecurityProfileUidEnableRoute, postSecurityProfileUidEnableRouteHandler)
  .openapi(getSecurityEnrollKibanaRoute, getSecurityEnrollKibanaRouteHandler)
  .openapi(getSecurityEnrollNodeRoute, getSecurityEnrollNodeRouteHandler)
  .openapi(getSecurityPrivilegeBuiltinRoute, getSecurityPrivilegeBuiltinRouteHandler)
  .openapi(getSecurityPrivilegeRoute, getSecurityPrivilegeRouteHandler)
  .openapi(putSecurityPrivilegeRoute, putSecurityPrivilegeRouteHandler)
  .openapi(postSecurityPrivilegeRoute, postSecurityPrivilegeRouteHandler)
  .openapi(getSecurityPrivilegeApplicationRoute, getSecurityPrivilegeApplicationRouteHandler)
  .openapi(getSecurityRoleMappingRoute, getSecurityRoleMappingRouteHandler)
  .openapi(getSecurityServiceNamespaceRoute, getSecurityServiceNamespaceRouteHandler)
  .openapi(getSecurityServiceRoute, getSecurityServiceRouteHandler)
  .openapi(
    getSecurityServiceNamespaceServiceCredentialRoute,
    getSecurityServiceNamespaceServiceCredentialRouteHandler,
  )
  .openapi(getSecuritySettingsRoute, getSecuritySettingsRouteHandler)
  .openapi(putSecuritySettingsRoute, putSecuritySettingsRouteHandler)
  .openapi(getSecurityStatsRoute, getSecurityStatsRouteHandler)
  .openapi(postSecurityOauth2TokenRoute, postSecurityOauth2TokenRouteHandler)
  .openapi(deleteSecurityOauth2TokenRoute, deleteSecurityOauth2TokenRouteHandler)
  .openapi(getSecurityUserRoute, getSecurityUserRouteHandler)
  .openapi(getSecurityUserPrivilegesRoute, getSecurityUserPrivilegesRouteHandler)
  .openapi(getSecurityProfileUidRoute, getSecurityProfileUidRouteHandler)
  .openapi(postSecurityApiKeyGrantRoute, postSecurityApiKeyGrantRouteHandler)
  .openapi(getSecurityUserHasPrivilegesRoute, getSecurityUserHasPrivilegesRouteHandler)
  .openapi(postSecurityUserHasPrivilegesRoute, postSecurityUserHasPrivilegesRouteHandler)
  .openapi(getSecurityUserUserHasPrivilegesRoute, getSecurityUserUserHasPrivilegesRouteHandler)
  .openapi(postSecurityUserUserHasPrivilegesRoute, postSecurityUserUserHasPrivilegesRouteHandler)
  .openapi(getSecurityProfileHasPrivilegesRoute, getSecurityProfileHasPrivilegesRouteHandler)
  .openapi(postSecurityProfileHasPrivilegesRoute, postSecurityProfileHasPrivilegesRouteHandler)
  .openapi(postSecurityOidcAuthenticateRoute, postSecurityOidcAuthenticateRouteHandler)
  .openapi(postSecurityOidcLogoutRoute, postSecurityOidcLogoutRouteHandler)
  .openapi(postSecurityOidcPrepareRoute, postSecurityOidcPrepareRouteHandler)
  .openapi(getSecurityQueryApiKeyRoute, getSecurityQueryApiKeyRouteHandler)
  .openapi(postSecurityQueryApiKeyRoute, postSecurityQueryApiKeyRouteHandler)
  .openapi(getSecurityQueryRoleRoute, getSecurityQueryRoleRouteHandler)
  .openapi(postSecurityQueryRoleRoute, postSecurityQueryRoleRouteHandler)
  .openapi(getSecurityQueryUserRoute, getSecurityQueryUserRouteHandler)
  .openapi(postSecurityQueryUserRoute, postSecurityQueryUserRouteHandler)
  .openapi(postSecuritySamlAuthenticateRoute, postSecuritySamlAuthenticateRouteHandler)
  .openapi(postSecuritySamlCompleteLogoutRoute, postSecuritySamlCompleteLogoutRouteHandler)
  .openapi(postSecuritySamlInvalidateRoute, postSecuritySamlInvalidateRouteHandler)
  .openapi(postSecuritySamlLogoutRoute, postSecuritySamlLogoutRouteHandler)
  .openapi(postSecuritySamlPrepareRoute, postSecuritySamlPrepareRouteHandler)
  .openapi(getSecuritySamlMetadataRealmNameRoute, getSecuritySamlMetadataRealmNameRouteHandler)
  .openapi(getSecurityProfileSuggestRoute, getSecurityProfileSuggestRouteHandler)
  .openapi(postSecurityProfileSuggestRoute, postSecurityProfileSuggestRouteHandler)
  .openapi(putSecurityApiKeyIdRoute, putSecurityApiKeyIdRouteHandler)
  .openapi(putSecurityCrossClusterApiKeyIdRoute, putSecurityCrossClusterApiKeyIdRouteHandler)
  .openapi(putSecurityProfileUidDataRoute, putSecurityProfileUidDataRouteHandler)
  .openapi(postSecurityProfileUidDataRoute, postSecurityProfileUidDataRouteHandler)
  .openapi(getIngestSimulateRoute, getIngestSimulateRouteHandler)
  .openapi(postIngestSimulateRoute, postIngestSimulateRouteHandler)
  .openapi(getIngestIndexSimulateRoute, getIngestIndexSimulateRouteHandler)
  .openapi(postIngestIndexSimulateRoute, postIngestIndexSimulateRouteHandler)
  .openapi(getSlmPolicyPolicyIdRoute, getSlmPolicyPolicyIdRouteHandler)
  .openapi(putSlmPolicyPolicyIdRoute, putSlmPolicyPolicyIdRouteHandler)
  .openapi(deleteSlmPolicyPolicyIdRoute, deleteSlmPolicyPolicyIdRouteHandler)
  .openapi(putSlmPolicyPolicyIdExecuteRoute, putSlmPolicyPolicyIdExecuteRouteHandler)
  .openapi(postSlmExecuteRetentionRoute, postSlmExecuteRetentionRouteHandler)
  .openapi(getSlmPolicyRoute, getSlmPolicyRouteHandler)
  .openapi(getSlmStatsRoute, getSlmStatsRouteHandler)
  .openapi(getSlmStatusRoute, getSlmStatusRouteHandler)
  .openapi(postSlmStartRoute, postSlmStartRouteHandler)
  .openapi(postSlmStopRoute, postSlmStopRouteHandler)
  .openapi(postSnapshotRepositoryCleanupRoute, postSnapshotRepositoryCleanupRouteHandler)
  .openapi(
    putSnapshotRepositorySnapshotCloneTargetSnapshotRoute,
    putSnapshotRepositorySnapshotCloneTargetSnapshotRouteHandler,
  )
  .openapi(getSnapshotRepositorySnapshotRoute, getSnapshotRepositorySnapshotRouteHandler)
  .openapi(putSnapshotRepositorySnapshotRoute, putSnapshotRepositorySnapshotRouteHandler)
  .openapi(postSnapshotRepositorySnapshotRoute, postSnapshotRepositorySnapshotRouteHandler)
  .openapi(deleteSnapshotRepositorySnapshotRoute, deleteSnapshotRepositorySnapshotRouteHandler)
  .openapi(getSnapshotRepositoryRoute, getSnapshotRepositoryRouteHandler)
  .openapi(putSnapshotRepositoryRoute, putSnapshotRepositoryRouteHandler)
  .openapi(postSnapshotRepositoryRoute, postSnapshotRepositoryRouteHandler)
  .openapi(deleteSnapshotRepositoryRoute, deleteSnapshotRepositoryRouteHandler)
  .openapi(getSnapshotRoute, getSnapshotRouteHandler)
  .openapi(postSnapshotRepositoryAnalyzeRoute, postSnapshotRepositoryAnalyzeRouteHandler)
  .openapi(
    postSnapshotRepositoryVerifyIntegrityRoute,
    postSnapshotRepositoryVerifyIntegrityRouteHandler,
  )
  .openapi(
    postSnapshotRepositorySnapshotRestoreRoute,
    postSnapshotRepositorySnapshotRestoreRouteHandler,
  )
  .openapi(getSnapshotStatusRoute, getSnapshotStatusRouteHandler)
  .openapi(getSnapshotRepositoryStatusRoute, getSnapshotRepositoryStatusRouteHandler)
  .openapi(
    getSnapshotRepositorySnapshotStatusRoute,
    getSnapshotRepositorySnapshotStatusRouteHandler,
  )
  .openapi(postSnapshotRepositoryVerifyRoute, postSnapshotRepositoryVerifyRouteHandler)
  .openapi(postSqlCloseRoute, postSqlCloseRouteHandler)
  .openapi(deleteSqlAsyncDeleteIdRoute, deleteSqlAsyncDeleteIdRouteHandler)
  .openapi(getSqlAsyncIdRoute, getSqlAsyncIdRouteHandler)
  .openapi(getSqlAsyncStatusIdRoute, getSqlAsyncStatusIdRouteHandler)
  .openapi(getSqlRoute, getSqlRouteHandler)
  .openapi(postSqlRoute, postSqlRouteHandler)
  .openapi(getSqlTranslateRoute, getSqlTranslateRouteHandler)
  .openapi(postSqlTranslateRoute, postSqlTranslateRouteHandler)
  .openapi(getSslCertificatesRoute, getSslCertificatesRouteHandler)
  .openapi(postStreamsNameDisableRoute, postStreamsNameDisableRouteHandler)
  .openapi(postStreamsNameEnableRoute, postStreamsNameEnableRouteHandler)
  .openapi(getStreamsStatusRoute, getStreamsStatusRouteHandler)
  .openapi(getSynonymsIdRoute, getSynonymsIdRouteHandler)
  .openapi(putSynonymsIdRoute, putSynonymsIdRouteHandler)
  .openapi(deleteSynonymsIdRoute, deleteSynonymsIdRouteHandler)
  .openapi(getSynonymsSetIdRuleIdRoute, getSynonymsSetIdRuleIdRouteHandler)
  .openapi(putSynonymsSetIdRuleIdRoute, putSynonymsSetIdRuleIdRouteHandler)
  .openapi(deleteSynonymsSetIdRuleIdRoute, deleteSynonymsSetIdRuleIdRouteHandler)
  .openapi(getSynonymsRoute, getSynonymsRouteHandler)
  .openapi(postTasksCancelRoute, postTasksCancelRouteHandler)
  .openapi(postTasksTaskIdCancelRoute, postTasksTaskIdCancelRouteHandler)
  .openapi(getTasksTaskIdRoute, getTasksTaskIdRouteHandler)
  .openapi(getTasksRoute, getTasksRouteHandler)
  .openapi(getIndexTermsEnumRoute, getIndexTermsEnumRouteHandler)
  .openapi(postIndexTermsEnumRoute, postIndexTermsEnumRouteHandler)
  .openapi(getIndexTermvectorsIdRoute, getIndexTermvectorsIdRouteHandler)
  .openapi(postIndexTermvectorsIdRoute, postIndexTermvectorsIdRouteHandler)
  .openapi(getIndexTermvectorsRoute, getIndexTermvectorsRouteHandler)
  .openapi(postIndexTermvectorsRoute, postIndexTermvectorsRouteHandler)
  .openapi(getTextStructureFindFieldStructureRoute, getTextStructureFindFieldStructureRouteHandler)
  .openapi(
    getTextStructureFindMessageStructureRoute,
    getTextStructureFindMessageStructureRouteHandler,
  )
  .openapi(
    postTextStructureFindMessageStructureRoute,
    postTextStructureFindMessageStructureRouteHandler,
  )
  .openapi(postTextStructureFindStructureRoute, postTextStructureFindStructureRouteHandler)
  .openapi(getTextStructureTestGrokPatternRoute, getTextStructureTestGrokPatternRouteHandler)
  .openapi(postTextStructureTestGrokPatternRoute, postTextStructureTestGrokPatternRouteHandler)
  .openapi(getTransformTransformIdRoute, getTransformTransformIdRouteHandler)
  .openapi(putTransformTransformIdRoute, putTransformTransformIdRouteHandler)
  .openapi(deleteTransformTransformIdRoute, deleteTransformTransformIdRouteHandler)
  .openapi(getTransformNodeStatsRoute, getTransformNodeStatsRouteHandler)
  .openapi(getTransformRoute, getTransformRouteHandler)
  .openapi(getTransformTransformIdStatsRoute, getTransformTransformIdStatsRouteHandler)
  .openapi(getTransformTransformIdPreviewRoute, getTransformTransformIdPreviewRouteHandler)
  .openapi(postTransformTransformIdPreviewRoute, postTransformTransformIdPreviewRouteHandler)
  .openapi(getTransformPreviewRoute, getTransformPreviewRouteHandler)
  .openapi(postTransformPreviewRoute, postTransformPreviewRouteHandler)
  .openapi(postTransformTransformIdResetRoute, postTransformTransformIdResetRouteHandler)
  .openapi(
    postTransformTransformIdScheduleNowRoute,
    postTransformTransformIdScheduleNowRouteHandler,
  )
  .openapi(postTransformSetUpgradeModeRoute, postTransformSetUpgradeModeRouteHandler)
  .openapi(postTransformTransformIdStartRoute, postTransformTransformIdStartRouteHandler)
  .openapi(postTransformTransformIdStopRoute, postTransformTransformIdStopRouteHandler)
  .openapi(postTransformTransformIdUpdateRoute, postTransformTransformIdUpdateRouteHandler)
  .openapi(postTransformUpgradeRoute, postTransformUpgradeRouteHandler)
  .openapi(postIndexUpdateIdRoute, postIndexUpdateIdRouteHandler)
  .openapi(postIndexUpdateByQueryRoute, postIndexUpdateByQueryRouteHandler)
  .openapi(postUpdateByQueryTaskIdRethrottleRoute, postUpdateByQueryTaskIdRethrottleRouteHandler)
  .openapi(putWatcherWatchWatchIdAckRoute, putWatcherWatchWatchIdAckRouteHandler)
  .openapi(postWatcherWatchWatchIdAckRoute, postWatcherWatchWatchIdAckRouteHandler)
  .openapi(putWatcherWatchWatchIdAckActionIdRoute, putWatcherWatchWatchIdAckActionIdRouteHandler)
  .openapi(postWatcherWatchWatchIdAckActionIdRoute, postWatcherWatchWatchIdAckActionIdRouteHandler)
  .openapi(putWatcherWatchWatchIdActivateRoute, putWatcherWatchWatchIdActivateRouteHandler)
  .openapi(postWatcherWatchWatchIdActivateRoute, postWatcherWatchWatchIdActivateRouteHandler)
  .openapi(putWatcherWatchWatchIdDeactivateRoute, putWatcherWatchWatchIdDeactivateRouteHandler)
  .openapi(postWatcherWatchWatchIdDeactivateRoute, postWatcherWatchWatchIdDeactivateRouteHandler)
  .openapi(getWatcherWatchIdRoute, getWatcherWatchIdRouteHandler)
  .openapi(putWatcherWatchIdRoute, putWatcherWatchIdRouteHandler)
  .openapi(postWatcherWatchIdRoute, postWatcherWatchIdRouteHandler)
  .openapi(deleteWatcherWatchIdRoute, deleteWatcherWatchIdRouteHandler)
  .openapi(putWatcherWatchIdExecuteRoute, putWatcherWatchIdExecuteRouteHandler)
  .openapi(postWatcherWatchIdExecuteRoute, postWatcherWatchIdExecuteRouteHandler)
  .openapi(putWatcherWatchExecuteRoute, putWatcherWatchExecuteRouteHandler)
  .openapi(postWatcherWatchExecuteRoute, postWatcherWatchExecuteRouteHandler)
  .openapi(getWatcherSettingsRoute, getWatcherSettingsRouteHandler)
  .openapi(putWatcherSettingsRoute, putWatcherSettingsRouteHandler)
  .openapi(getWatcherQueryWatchesRoute, getWatcherQueryWatchesRouteHandler)
  .openapi(postWatcherQueryWatchesRoute, postWatcherQueryWatchesRouteHandler)
  .openapi(postWatcherStartRoute, postWatcherStartRouteHandler)
  .openapi(getWatcherStatsRoute, getWatcherStatsRouteHandler)
  .openapi(getWatcherStatsMetricRoute, getWatcherStatsMetricRouteHandler)
  .openapi(postWatcherStopRoute, postWatcherStopRouteHandler)
  .openapi(getXpackRoute, getXpackRouteHandler)
  .openapi(getXpackUsageRoute, getXpackUsageRouteHandler)

export default app
