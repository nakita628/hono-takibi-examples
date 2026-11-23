import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAwsGlueBatchCreatePartitionHandler,
  xAmzTargetAwsGlueBatchDeleteConnectionHandler,
  xAmzTargetAwsGlueBatchDeletePartitionHandler,
  xAmzTargetAwsGlueBatchDeleteTableHandler,
  xAmzTargetAwsGlueBatchDeleteTableVersionHandler,
  xAmzTargetAwsGlueBatchGetBlueprintsHandler,
  xAmzTargetAwsGlueBatchGetCrawlersHandler,
  xAmzTargetAwsGlueBatchGetCustomEntityTypesHandler,
  xAmzTargetAwsGlueBatchGetDataQualityResultHandler,
  xAmzTargetAwsGlueBatchGetDevEndpointsHandler,
  xAmzTargetAwsGlueBatchGetJobsHandler,
  xAmzTargetAwsGlueBatchGetPartitionHandler,
  xAmzTargetAwsGlueBatchGetTriggersHandler,
  xAmzTargetAwsGlueBatchGetWorkflowsHandler,
  xAmzTargetAwsGlueBatchStopJobRunHandler,
  xAmzTargetAwsGlueBatchUpdatePartitionHandler,
  xAmzTargetAwsGlueCancelDataQualityRuleRecommendationRunHandler,
  xAmzTargetAwsGlueCancelDataQualityRulesetEvaluationRunHandler,
  xAmzTargetAwsGlueCancelMlTaskRunHandler,
  xAmzTargetAwsGlueCancelStatementHandler,
  xAmzTargetAwsGlueCheckSchemaVersionValidityHandler,
  xAmzTargetAwsGlueCreateBlueprintHandler,
  xAmzTargetAwsGlueCreateClassifierHandler,
  xAmzTargetAwsGlueCreateConnectionHandler,
  xAmzTargetAwsGlueCreateCrawlerHandler,
  xAmzTargetAwsGlueCreateCustomEntityTypeHandler,
  xAmzTargetAwsGlueCreateDatabaseHandler,
  xAmzTargetAwsGlueCreateDataQualityRulesetHandler,
  xAmzTargetAwsGlueCreateDevEndpointHandler,
  xAmzTargetAwsGlueCreateJobHandler,
  xAmzTargetAwsGlueCreateMlTransformHandler,
  xAmzTargetAwsGlueCreatePartitionHandler,
  xAmzTargetAwsGlueCreatePartitionIndexHandler,
  xAmzTargetAwsGlueCreateRegistryHandler,
  xAmzTargetAwsGlueCreateSchemaHandler,
  xAmzTargetAwsGlueCreateScriptHandler,
  xAmzTargetAwsGlueCreateSecurityConfigurationHandler,
  xAmzTargetAwsGlueCreateSessionHandler,
  xAmzTargetAwsGlueCreateTableHandler,
  xAmzTargetAwsGlueCreateTriggerHandler,
  xAmzTargetAwsGlueCreateUserDefinedFunctionHandler,
  xAmzTargetAwsGlueCreateWorkflowHandler,
  xAmzTargetAwsGlueDeleteBlueprintHandler,
  xAmzTargetAwsGlueDeleteClassifierHandler,
  xAmzTargetAwsGlueDeleteColumnStatisticsForPartitionHandler,
  xAmzTargetAwsGlueDeleteColumnStatisticsForTableHandler,
  xAmzTargetAwsGlueDeleteConnectionHandler,
  xAmzTargetAwsGlueDeleteCrawlerHandler,
  xAmzTargetAwsGlueDeleteCustomEntityTypeHandler,
  xAmzTargetAwsGlueDeleteDatabaseHandler,
  xAmzTargetAwsGlueDeleteDataQualityRulesetHandler,
  xAmzTargetAwsGlueDeleteDevEndpointHandler,
  xAmzTargetAwsGlueDeleteJobHandler,
  xAmzTargetAwsGlueDeleteMlTransformHandler,
  xAmzTargetAwsGlueDeletePartitionHandler,
  xAmzTargetAwsGlueDeletePartitionIndexHandler,
  xAmzTargetAwsGlueDeleteRegistryHandler,
  xAmzTargetAwsGlueDeleteResourcePolicyHandler,
  xAmzTargetAwsGlueDeleteSchemaHandler,
  xAmzTargetAwsGlueDeleteSchemaVersionsHandler,
  xAmzTargetAwsGlueDeleteSecurityConfigurationHandler,
  xAmzTargetAwsGlueDeleteSessionHandler,
  xAmzTargetAwsGlueDeleteTableHandler,
  xAmzTargetAwsGlueDeleteTableVersionHandler,
  xAmzTargetAwsGlueDeleteTriggerHandler,
  xAmzTargetAwsGlueDeleteUserDefinedFunctionHandler,
  xAmzTargetAwsGlueDeleteWorkflowHandler,
  xAmzTargetAwsGlueGetBlueprintHandler,
  xAmzTargetAwsGlueGetBlueprintRunHandler,
  xAmzTargetAwsGlueGetBlueprintRunsHandler,
  xAmzTargetAwsGlueGetCatalogImportStatusHandler,
  xAmzTargetAwsGlueGetClassifierHandler,
  xAmzTargetAwsGlueGetClassifiersHandler,
  xAmzTargetAwsGlueGetColumnStatisticsForPartitionHandler,
  xAmzTargetAwsGlueGetColumnStatisticsForTableHandler,
  xAmzTargetAwsGlueGetConnectionHandler,
  xAmzTargetAwsGlueGetConnectionsHandler,
  xAmzTargetAwsGlueGetCrawlerHandler,
  xAmzTargetAwsGlueGetCrawlerMetricsHandler,
  xAmzTargetAwsGlueGetCrawlersHandler,
  xAmzTargetAwsGlueGetCustomEntityTypeHandler,
  xAmzTargetAwsGlueGetDatabaseHandler,
  xAmzTargetAwsGlueGetDatabasesHandler,
  xAmzTargetAwsGlueGetDataCatalogEncryptionSettingsHandler,
  xAmzTargetAwsGlueGetDataflowGraphHandler,
  xAmzTargetAwsGlueGetDataQualityResultHandler,
  xAmzTargetAwsGlueGetDataQualityRuleRecommendationRunHandler,
  xAmzTargetAwsGlueGetDataQualityRulesetEvaluationRunHandler,
  xAmzTargetAwsGlueGetDataQualityRulesetHandler,
  xAmzTargetAwsGlueGetDevEndpointHandler,
  xAmzTargetAwsGlueGetDevEndpointsHandler,
  xAmzTargetAwsGlueGetJobBookmarkHandler,
  xAmzTargetAwsGlueGetJobHandler,
  xAmzTargetAwsGlueGetJobRunHandler,
  xAmzTargetAwsGlueGetJobRunsHandler,
  xAmzTargetAwsGlueGetJobsHandler,
  xAmzTargetAwsGlueGetMappingHandler,
  xAmzTargetAwsGlueGetMlTaskRunHandler,
  xAmzTargetAwsGlueGetMlTaskRunsHandler,
  xAmzTargetAwsGlueGetMlTransformHandler,
  xAmzTargetAwsGlueGetMlTransformsHandler,
  xAmzTargetAwsGlueGetPartitionHandler,
  xAmzTargetAwsGlueGetPartitionIndexesHandler,
  xAmzTargetAwsGlueGetPartitionsHandler,
  xAmzTargetAwsGlueGetPlanHandler,
  xAmzTargetAwsGlueGetRegistryHandler,
  xAmzTargetAwsGlueGetResourcePoliciesHandler,
  xAmzTargetAwsGlueGetResourcePolicyHandler,
  xAmzTargetAwsGlueGetSchemaByDefinitionHandler,
  xAmzTargetAwsGlueGetSchemaHandler,
  xAmzTargetAwsGlueGetSchemaVersionHandler,
  xAmzTargetAwsGlueGetSchemaVersionsDiffHandler,
  xAmzTargetAwsGlueGetSecurityConfigurationHandler,
  xAmzTargetAwsGlueGetSecurityConfigurationsHandler,
  xAmzTargetAwsGlueGetSessionHandler,
  xAmzTargetAwsGlueGetStatementHandler,
  xAmzTargetAwsGlueGetTableHandler,
  xAmzTargetAwsGlueGetTablesHandler,
  xAmzTargetAwsGlueGetTableVersionHandler,
  xAmzTargetAwsGlueGetTableVersionsHandler,
  xAmzTargetAwsGlueGetTagsHandler,
  xAmzTargetAwsGlueGetTriggerHandler,
  xAmzTargetAwsGlueGetTriggersHandler,
  xAmzTargetAwsGlueGetUnfilteredPartitionMetadataHandler,
  xAmzTargetAwsGlueGetUnfilteredPartitionsMetadataHandler,
  xAmzTargetAwsGlueGetUnfilteredTableMetadataHandler,
  xAmzTargetAwsGlueGetUserDefinedFunctionHandler,
  xAmzTargetAwsGlueGetUserDefinedFunctionsHandler,
  xAmzTargetAwsGlueGetWorkflowHandler,
  xAmzTargetAwsGlueGetWorkflowRunHandler,
  xAmzTargetAwsGlueGetWorkflowRunPropertiesHandler,
  xAmzTargetAwsGlueGetWorkflowRunsHandler,
  xAmzTargetAwsGlueImportCatalogToGlueHandler,
  xAmzTargetAwsGlueListBlueprintsHandler,
  xAmzTargetAwsGlueListCrawlersHandler,
  xAmzTargetAwsGlueListCrawlsHandler,
  xAmzTargetAwsGlueListCustomEntityTypesHandler,
  xAmzTargetAwsGlueListDataQualityResultsHandler,
  xAmzTargetAwsGlueListDataQualityRuleRecommendationRunsHandler,
  xAmzTargetAwsGlueListDataQualityRulesetEvaluationRunsHandler,
  xAmzTargetAwsGlueListDataQualityRulesetsHandler,
  xAmzTargetAwsGlueListDevEndpointsHandler,
  xAmzTargetAwsGlueListJobsHandler,
  xAmzTargetAwsGlueListMlTransformsHandler,
  xAmzTargetAwsGlueListRegistriesHandler,
  xAmzTargetAwsGlueListSchemasHandler,
  xAmzTargetAwsGlueListSchemaVersionsHandler,
  xAmzTargetAwsGlueListSessionsHandler,
  xAmzTargetAwsGlueListStatementsHandler,
  xAmzTargetAwsGlueListTriggersHandler,
  xAmzTargetAwsGlueListWorkflowsHandler,
  xAmzTargetAwsGluePutDataCatalogEncryptionSettingsHandler,
  xAmzTargetAwsGluePutResourcePolicyHandler,
  xAmzTargetAwsGluePutSchemaVersionMetadataHandler,
  xAmzTargetAwsGluePutWorkflowRunPropertiesHandler,
  xAmzTargetAwsGlueQuerySchemaVersionMetadataHandler,
  xAmzTargetAwsGlueRegisterSchemaVersionHandler,
  xAmzTargetAwsGlueRemoveSchemaVersionMetadataHandler,
  xAmzTargetAwsGlueResetJobBookmarkHandler,
  xAmzTargetAwsGlueResumeWorkflowRunHandler,
  xAmzTargetAwsGlueRunStatementHandler,
  xAmzTargetAwsGlueSearchTablesHandler,
  xAmzTargetAwsGlueStartBlueprintRunHandler,
  xAmzTargetAwsGlueStartCrawlerHandler,
  xAmzTargetAwsGlueStartCrawlerScheduleHandler,
  xAmzTargetAwsGlueStartDataQualityRuleRecommendationRunHandler,
  xAmzTargetAwsGlueStartDataQualityRulesetEvaluationRunHandler,
  xAmzTargetAwsGlueStartExportLabelsTaskRunHandler,
  xAmzTargetAwsGlueStartImportLabelsTaskRunHandler,
  xAmzTargetAwsGlueStartJobRunHandler,
  xAmzTargetAwsGlueStartMlEvaluationTaskRunHandler,
  xAmzTargetAwsGlueStartMlLabelingSetGenerationTaskRunHandler,
  xAmzTargetAwsGlueStartTriggerHandler,
  xAmzTargetAwsGlueStartWorkflowRunHandler,
  xAmzTargetAwsGlueStopCrawlerHandler,
  xAmzTargetAwsGlueStopCrawlerScheduleHandler,
  xAmzTargetAwsGlueStopSessionHandler,
  xAmzTargetAwsGlueStopTriggerHandler,
  xAmzTargetAwsGlueStopWorkflowRunHandler,
  xAmzTargetAwsGlueTagResourceHandler,
  xAmzTargetAwsGlueUntagResourceHandler,
  xAmzTargetAwsGlueUpdateBlueprintHandler,
  xAmzTargetAwsGlueUpdateClassifierHandler,
  xAmzTargetAwsGlueUpdateColumnStatisticsForPartitionHandler,
  xAmzTargetAwsGlueUpdateColumnStatisticsForTableHandler,
  xAmzTargetAwsGlueUpdateConnectionHandler,
  xAmzTargetAwsGlueUpdateCrawlerHandler,
  xAmzTargetAwsGlueUpdateCrawlerScheduleHandler,
  xAmzTargetAwsGlueUpdateDatabaseHandler,
  xAmzTargetAwsGlueUpdateDataQualityRulesetHandler,
  xAmzTargetAwsGlueUpdateDevEndpointHandler,
  xAmzTargetAwsGlueUpdateJobFromSourceControlHandler,
  xAmzTargetAwsGlueUpdateJobHandler,
  xAmzTargetAwsGlueUpdateMlTransformHandler,
  xAmzTargetAwsGlueUpdatePartitionHandler,
  xAmzTargetAwsGlueUpdateRegistryHandler,
  xAmzTargetAwsGlueUpdateSchemaHandler,
  xAmzTargetAwsGlueUpdateSourceControlFromJobHandler,
  xAmzTargetAwsGlueUpdateTableHandler,
  xAmzTargetAwsGlueUpdateTriggerHandler,
  xAmzTargetAwsGlueUpdateUserDefinedFunctionHandler,
  xAmzTargetAwsGlueUpdateWorkflowHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAwsGlueBatchCreatePartitionHandler)
  .route('/', xAmzTargetAwsGlueBatchDeleteConnectionHandler)
  .route('/', xAmzTargetAwsGlueBatchDeletePartitionHandler)
  .route('/', xAmzTargetAwsGlueBatchDeleteTableHandler)
  .route('/', xAmzTargetAwsGlueBatchDeleteTableVersionHandler)
  .route('/', xAmzTargetAwsGlueBatchGetBlueprintsHandler)
  .route('/', xAmzTargetAwsGlueBatchGetCrawlersHandler)
  .route('/', xAmzTargetAwsGlueBatchGetCustomEntityTypesHandler)
  .route('/', xAmzTargetAwsGlueBatchGetDataQualityResultHandler)
  .route('/', xAmzTargetAwsGlueBatchGetDevEndpointsHandler)
  .route('/', xAmzTargetAwsGlueBatchGetJobsHandler)
  .route('/', xAmzTargetAwsGlueBatchGetPartitionHandler)
  .route('/', xAmzTargetAwsGlueBatchGetTriggersHandler)
  .route('/', xAmzTargetAwsGlueBatchGetWorkflowsHandler)
  .route('/', xAmzTargetAwsGlueBatchStopJobRunHandler)
  .route('/', xAmzTargetAwsGlueBatchUpdatePartitionHandler)
  .route('/', xAmzTargetAwsGlueCancelDataQualityRuleRecommendationRunHandler)
  .route('/', xAmzTargetAwsGlueCancelDataQualityRulesetEvaluationRunHandler)
  .route('/', xAmzTargetAwsGlueCancelMlTaskRunHandler)
  .route('/', xAmzTargetAwsGlueCancelStatementHandler)
  .route('/', xAmzTargetAwsGlueCheckSchemaVersionValidityHandler)
  .route('/', xAmzTargetAwsGlueCreateBlueprintHandler)
  .route('/', xAmzTargetAwsGlueCreateClassifierHandler)
  .route('/', xAmzTargetAwsGlueCreateConnectionHandler)
  .route('/', xAmzTargetAwsGlueCreateCrawlerHandler)
  .route('/', xAmzTargetAwsGlueCreateCustomEntityTypeHandler)
  .route('/', xAmzTargetAwsGlueCreateDataQualityRulesetHandler)
  .route('/', xAmzTargetAwsGlueCreateDatabaseHandler)
  .route('/', xAmzTargetAwsGlueCreateDevEndpointHandler)
  .route('/', xAmzTargetAwsGlueCreateJobHandler)
  .route('/', xAmzTargetAwsGlueCreateMlTransformHandler)
  .route('/', xAmzTargetAwsGlueCreatePartitionHandler)
  .route('/', xAmzTargetAwsGlueCreatePartitionIndexHandler)
  .route('/', xAmzTargetAwsGlueCreateRegistryHandler)
  .route('/', xAmzTargetAwsGlueCreateSchemaHandler)
  .route('/', xAmzTargetAwsGlueCreateScriptHandler)
  .route('/', xAmzTargetAwsGlueCreateSecurityConfigurationHandler)
  .route('/', xAmzTargetAwsGlueCreateSessionHandler)
  .route('/', xAmzTargetAwsGlueCreateTableHandler)
  .route('/', xAmzTargetAwsGlueCreateTriggerHandler)
  .route('/', xAmzTargetAwsGlueCreateUserDefinedFunctionHandler)
  .route('/', xAmzTargetAwsGlueCreateWorkflowHandler)
  .route('/', xAmzTargetAwsGlueDeleteBlueprintHandler)
  .route('/', xAmzTargetAwsGlueDeleteClassifierHandler)
  .route('/', xAmzTargetAwsGlueDeleteColumnStatisticsForPartitionHandler)
  .route('/', xAmzTargetAwsGlueDeleteColumnStatisticsForTableHandler)
  .route('/', xAmzTargetAwsGlueDeleteConnectionHandler)
  .route('/', xAmzTargetAwsGlueDeleteCrawlerHandler)
  .route('/', xAmzTargetAwsGlueDeleteCustomEntityTypeHandler)
  .route('/', xAmzTargetAwsGlueDeleteDataQualityRulesetHandler)
  .route('/', xAmzTargetAwsGlueDeleteDatabaseHandler)
  .route('/', xAmzTargetAwsGlueDeleteDevEndpointHandler)
  .route('/', xAmzTargetAwsGlueDeleteJobHandler)
  .route('/', xAmzTargetAwsGlueDeleteMlTransformHandler)
  .route('/', xAmzTargetAwsGlueDeletePartitionHandler)
  .route('/', xAmzTargetAwsGlueDeletePartitionIndexHandler)
  .route('/', xAmzTargetAwsGlueDeleteRegistryHandler)
  .route('/', xAmzTargetAwsGlueDeleteResourcePolicyHandler)
  .route('/', xAmzTargetAwsGlueDeleteSchemaHandler)
  .route('/', xAmzTargetAwsGlueDeleteSchemaVersionsHandler)
  .route('/', xAmzTargetAwsGlueDeleteSecurityConfigurationHandler)
  .route('/', xAmzTargetAwsGlueDeleteSessionHandler)
  .route('/', xAmzTargetAwsGlueDeleteTableHandler)
  .route('/', xAmzTargetAwsGlueDeleteTableVersionHandler)
  .route('/', xAmzTargetAwsGlueDeleteTriggerHandler)
  .route('/', xAmzTargetAwsGlueDeleteUserDefinedFunctionHandler)
  .route('/', xAmzTargetAwsGlueDeleteWorkflowHandler)
  .route('/', xAmzTargetAwsGlueGetBlueprintHandler)
  .route('/', xAmzTargetAwsGlueGetBlueprintRunHandler)
  .route('/', xAmzTargetAwsGlueGetBlueprintRunsHandler)
  .route('/', xAmzTargetAwsGlueGetCatalogImportStatusHandler)
  .route('/', xAmzTargetAwsGlueGetClassifierHandler)
  .route('/', xAmzTargetAwsGlueGetClassifiersHandler)
  .route('/', xAmzTargetAwsGlueGetColumnStatisticsForPartitionHandler)
  .route('/', xAmzTargetAwsGlueGetColumnStatisticsForTableHandler)
  .route('/', xAmzTargetAwsGlueGetConnectionHandler)
  .route('/', xAmzTargetAwsGlueGetConnectionsHandler)
  .route('/', xAmzTargetAwsGlueGetCrawlerHandler)
  .route('/', xAmzTargetAwsGlueGetCrawlerMetricsHandler)
  .route('/', xAmzTargetAwsGlueGetCrawlersHandler)
  .route('/', xAmzTargetAwsGlueGetCustomEntityTypeHandler)
  .route('/', xAmzTargetAwsGlueGetDataCatalogEncryptionSettingsHandler)
  .route('/', xAmzTargetAwsGlueGetDataQualityResultHandler)
  .route('/', xAmzTargetAwsGlueGetDataQualityRuleRecommendationRunHandler)
  .route('/', xAmzTargetAwsGlueGetDataQualityRulesetHandler)
  .route('/', xAmzTargetAwsGlueGetDataQualityRulesetEvaluationRunHandler)
  .route('/', xAmzTargetAwsGlueGetDatabaseHandler)
  .route('/', xAmzTargetAwsGlueGetDatabasesHandler)
  .route('/', xAmzTargetAwsGlueGetDataflowGraphHandler)
  .route('/', xAmzTargetAwsGlueGetDevEndpointHandler)
  .route('/', xAmzTargetAwsGlueGetDevEndpointsHandler)
  .route('/', xAmzTargetAwsGlueGetJobHandler)
  .route('/', xAmzTargetAwsGlueGetJobBookmarkHandler)
  .route('/', xAmzTargetAwsGlueGetJobRunHandler)
  .route('/', xAmzTargetAwsGlueGetJobRunsHandler)
  .route('/', xAmzTargetAwsGlueGetJobsHandler)
  .route('/', xAmzTargetAwsGlueGetMlTaskRunHandler)
  .route('/', xAmzTargetAwsGlueGetMlTaskRunsHandler)
  .route('/', xAmzTargetAwsGlueGetMlTransformHandler)
  .route('/', xAmzTargetAwsGlueGetMlTransformsHandler)
  .route('/', xAmzTargetAwsGlueGetMappingHandler)
  .route('/', xAmzTargetAwsGlueGetPartitionHandler)
  .route('/', xAmzTargetAwsGlueGetPartitionIndexesHandler)
  .route('/', xAmzTargetAwsGlueGetPartitionsHandler)
  .route('/', xAmzTargetAwsGlueGetPlanHandler)
  .route('/', xAmzTargetAwsGlueGetRegistryHandler)
  .route('/', xAmzTargetAwsGlueGetResourcePoliciesHandler)
  .route('/', xAmzTargetAwsGlueGetResourcePolicyHandler)
  .route('/', xAmzTargetAwsGlueGetSchemaHandler)
  .route('/', xAmzTargetAwsGlueGetSchemaByDefinitionHandler)
  .route('/', xAmzTargetAwsGlueGetSchemaVersionHandler)
  .route('/', xAmzTargetAwsGlueGetSchemaVersionsDiffHandler)
  .route('/', xAmzTargetAwsGlueGetSecurityConfigurationHandler)
  .route('/', xAmzTargetAwsGlueGetSecurityConfigurationsHandler)
  .route('/', xAmzTargetAwsGlueGetSessionHandler)
  .route('/', xAmzTargetAwsGlueGetStatementHandler)
  .route('/', xAmzTargetAwsGlueGetTableHandler)
  .route('/', xAmzTargetAwsGlueGetTableVersionHandler)
  .route('/', xAmzTargetAwsGlueGetTableVersionsHandler)
  .route('/', xAmzTargetAwsGlueGetTablesHandler)
  .route('/', xAmzTargetAwsGlueGetTagsHandler)
  .route('/', xAmzTargetAwsGlueGetTriggerHandler)
  .route('/', xAmzTargetAwsGlueGetTriggersHandler)
  .route('/', xAmzTargetAwsGlueGetUnfilteredPartitionMetadataHandler)
  .route('/', xAmzTargetAwsGlueGetUnfilteredPartitionsMetadataHandler)
  .route('/', xAmzTargetAwsGlueGetUnfilteredTableMetadataHandler)
  .route('/', xAmzTargetAwsGlueGetUserDefinedFunctionHandler)
  .route('/', xAmzTargetAwsGlueGetUserDefinedFunctionsHandler)
  .route('/', xAmzTargetAwsGlueGetWorkflowHandler)
  .route('/', xAmzTargetAwsGlueGetWorkflowRunHandler)
  .route('/', xAmzTargetAwsGlueGetWorkflowRunPropertiesHandler)
  .route('/', xAmzTargetAwsGlueGetWorkflowRunsHandler)
  .route('/', xAmzTargetAwsGlueImportCatalogToGlueHandler)
  .route('/', xAmzTargetAwsGlueListBlueprintsHandler)
  .route('/', xAmzTargetAwsGlueListCrawlersHandler)
  .route('/', xAmzTargetAwsGlueListCrawlsHandler)
  .route('/', xAmzTargetAwsGlueListCustomEntityTypesHandler)
  .route('/', xAmzTargetAwsGlueListDataQualityResultsHandler)
  .route('/', xAmzTargetAwsGlueListDataQualityRuleRecommendationRunsHandler)
  .route('/', xAmzTargetAwsGlueListDataQualityRulesetEvaluationRunsHandler)
  .route('/', xAmzTargetAwsGlueListDataQualityRulesetsHandler)
  .route('/', xAmzTargetAwsGlueListDevEndpointsHandler)
  .route('/', xAmzTargetAwsGlueListJobsHandler)
  .route('/', xAmzTargetAwsGlueListMlTransformsHandler)
  .route('/', xAmzTargetAwsGlueListRegistriesHandler)
  .route('/', xAmzTargetAwsGlueListSchemaVersionsHandler)
  .route('/', xAmzTargetAwsGlueListSchemasHandler)
  .route('/', xAmzTargetAwsGlueListSessionsHandler)
  .route('/', xAmzTargetAwsGlueListStatementsHandler)
  .route('/', xAmzTargetAwsGlueListTriggersHandler)
  .route('/', xAmzTargetAwsGlueListWorkflowsHandler)
  .route('/', xAmzTargetAwsGluePutDataCatalogEncryptionSettingsHandler)
  .route('/', xAmzTargetAwsGluePutResourcePolicyHandler)
  .route('/', xAmzTargetAwsGluePutSchemaVersionMetadataHandler)
  .route('/', xAmzTargetAwsGluePutWorkflowRunPropertiesHandler)
  .route('/', xAmzTargetAwsGlueQuerySchemaVersionMetadataHandler)
  .route('/', xAmzTargetAwsGlueRegisterSchemaVersionHandler)
  .route('/', xAmzTargetAwsGlueRemoveSchemaVersionMetadataHandler)
  .route('/', xAmzTargetAwsGlueResetJobBookmarkHandler)
  .route('/', xAmzTargetAwsGlueResumeWorkflowRunHandler)
  .route('/', xAmzTargetAwsGlueRunStatementHandler)
  .route('/', xAmzTargetAwsGlueSearchTablesHandler)
  .route('/', xAmzTargetAwsGlueStartBlueprintRunHandler)
  .route('/', xAmzTargetAwsGlueStartCrawlerHandler)
  .route('/', xAmzTargetAwsGlueStartCrawlerScheduleHandler)
  .route('/', xAmzTargetAwsGlueStartDataQualityRuleRecommendationRunHandler)
  .route('/', xAmzTargetAwsGlueStartDataQualityRulesetEvaluationRunHandler)
  .route('/', xAmzTargetAwsGlueStartExportLabelsTaskRunHandler)
  .route('/', xAmzTargetAwsGlueStartImportLabelsTaskRunHandler)
  .route('/', xAmzTargetAwsGlueStartJobRunHandler)
  .route('/', xAmzTargetAwsGlueStartMlEvaluationTaskRunHandler)
  .route('/', xAmzTargetAwsGlueStartMlLabelingSetGenerationTaskRunHandler)
  .route('/', xAmzTargetAwsGlueStartTriggerHandler)
  .route('/', xAmzTargetAwsGlueStartWorkflowRunHandler)
  .route('/', xAmzTargetAwsGlueStopCrawlerHandler)
  .route('/', xAmzTargetAwsGlueStopCrawlerScheduleHandler)
  .route('/', xAmzTargetAwsGlueStopSessionHandler)
  .route('/', xAmzTargetAwsGlueStopTriggerHandler)
  .route('/', xAmzTargetAwsGlueStopWorkflowRunHandler)
  .route('/', xAmzTargetAwsGlueTagResourceHandler)
  .route('/', xAmzTargetAwsGlueUntagResourceHandler)
  .route('/', xAmzTargetAwsGlueUpdateBlueprintHandler)
  .route('/', xAmzTargetAwsGlueUpdateClassifierHandler)
  .route('/', xAmzTargetAwsGlueUpdateColumnStatisticsForPartitionHandler)
  .route('/', xAmzTargetAwsGlueUpdateColumnStatisticsForTableHandler)
  .route('/', xAmzTargetAwsGlueUpdateConnectionHandler)
  .route('/', xAmzTargetAwsGlueUpdateCrawlerHandler)
  .route('/', xAmzTargetAwsGlueUpdateCrawlerScheduleHandler)
  .route('/', xAmzTargetAwsGlueUpdateDataQualityRulesetHandler)
  .route('/', xAmzTargetAwsGlueUpdateDatabaseHandler)
  .route('/', xAmzTargetAwsGlueUpdateDevEndpointHandler)
  .route('/', xAmzTargetAwsGlueUpdateJobHandler)
  .route('/', xAmzTargetAwsGlueUpdateJobFromSourceControlHandler)
  .route('/', xAmzTargetAwsGlueUpdateMlTransformHandler)
  .route('/', xAmzTargetAwsGlueUpdatePartitionHandler)
  .route('/', xAmzTargetAwsGlueUpdateRegistryHandler)
  .route('/', xAmzTargetAwsGlueUpdateSchemaHandler)
  .route('/', xAmzTargetAwsGlueUpdateSourceControlFromJobHandler)
  .route('/', xAmzTargetAwsGlueUpdateTableHandler)
  .route('/', xAmzTargetAwsGlueUpdateTriggerHandler)
  .route('/', xAmzTargetAwsGlueUpdateUserDefinedFunctionHandler)
  .route('/', xAmzTargetAwsGlueUpdateWorkflowHandler)

export default app
