import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAWSGlueBatchCreatePartitionHandler,
  XAmzTargetAWSGlueBatchDeleteConnectionHandler,
  XAmzTargetAWSGlueBatchDeletePartitionHandler,
  XAmzTargetAWSGlueBatchDeleteTableHandler,
  XAmzTargetAWSGlueBatchDeleteTableVersionHandler,
  XAmzTargetAWSGlueBatchGetBlueprintsHandler,
  XAmzTargetAWSGlueBatchGetCrawlersHandler,
  XAmzTargetAWSGlueBatchGetCustomEntityTypesHandler,
  XAmzTargetAWSGlueBatchGetDataQualityResultHandler,
  XAmzTargetAWSGlueBatchGetDevEndpointsHandler,
  XAmzTargetAWSGlueBatchGetJobsHandler,
  XAmzTargetAWSGlueBatchGetPartitionHandler,
  XAmzTargetAWSGlueBatchGetTriggersHandler,
  XAmzTargetAWSGlueBatchGetWorkflowsHandler,
  XAmzTargetAWSGlueBatchStopJobRunHandler,
  XAmzTargetAWSGlueBatchUpdatePartitionHandler,
  XAmzTargetAWSGlueCancelDataQualityRuleRecommendationRunHandler,
  XAmzTargetAWSGlueCancelDataQualityRulesetEvaluationRunHandler,
  XAmzTargetAWSGlueCancelMLTaskRunHandler,
  XAmzTargetAWSGlueCancelStatementHandler,
  XAmzTargetAWSGlueCheckSchemaVersionValidityHandler,
  XAmzTargetAWSGlueCreateBlueprintHandler,
  XAmzTargetAWSGlueCreateClassifierHandler,
  XAmzTargetAWSGlueCreateConnectionHandler,
  XAmzTargetAWSGlueCreateCrawlerHandler,
  XAmzTargetAWSGlueCreateCustomEntityTypeHandler,
  XAmzTargetAWSGlueCreateDatabaseHandler,
  XAmzTargetAWSGlueCreateDataQualityRulesetHandler,
  XAmzTargetAWSGlueCreateDevEndpointHandler,
  XAmzTargetAWSGlueCreateJobHandler,
  XAmzTargetAWSGlueCreateMLTransformHandler,
  XAmzTargetAWSGlueCreatePartitionHandler,
  XAmzTargetAWSGlueCreatePartitionIndexHandler,
  XAmzTargetAWSGlueCreateRegistryHandler,
  XAmzTargetAWSGlueCreateSchemaHandler,
  XAmzTargetAWSGlueCreateScriptHandler,
  XAmzTargetAWSGlueCreateSecurityConfigurationHandler,
  XAmzTargetAWSGlueCreateSessionHandler,
  XAmzTargetAWSGlueCreateTableHandler,
  XAmzTargetAWSGlueCreateTriggerHandler,
  XAmzTargetAWSGlueCreateUserDefinedFunctionHandler,
  XAmzTargetAWSGlueCreateWorkflowHandler,
  XAmzTargetAWSGlueDeleteBlueprintHandler,
  XAmzTargetAWSGlueDeleteClassifierHandler,
  XAmzTargetAWSGlueDeleteColumnStatisticsForPartitionHandler,
  XAmzTargetAWSGlueDeleteColumnStatisticsForTableHandler,
  XAmzTargetAWSGlueDeleteConnectionHandler,
  XAmzTargetAWSGlueDeleteCrawlerHandler,
  XAmzTargetAWSGlueDeleteCustomEntityTypeHandler,
  XAmzTargetAWSGlueDeleteDatabaseHandler,
  XAmzTargetAWSGlueDeleteDataQualityRulesetHandler,
  XAmzTargetAWSGlueDeleteDevEndpointHandler,
  XAmzTargetAWSGlueDeleteJobHandler,
  XAmzTargetAWSGlueDeleteMLTransformHandler,
  XAmzTargetAWSGlueDeletePartitionHandler,
  XAmzTargetAWSGlueDeletePartitionIndexHandler,
  XAmzTargetAWSGlueDeleteRegistryHandler,
  XAmzTargetAWSGlueDeleteResourcePolicyHandler,
  XAmzTargetAWSGlueDeleteSchemaHandler,
  XAmzTargetAWSGlueDeleteSchemaVersionsHandler,
  XAmzTargetAWSGlueDeleteSecurityConfigurationHandler,
  XAmzTargetAWSGlueDeleteSessionHandler,
  XAmzTargetAWSGlueDeleteTableHandler,
  XAmzTargetAWSGlueDeleteTableVersionHandler,
  XAmzTargetAWSGlueDeleteTriggerHandler,
  XAmzTargetAWSGlueDeleteUserDefinedFunctionHandler,
  XAmzTargetAWSGlueDeleteWorkflowHandler,
  XAmzTargetAWSGlueGetBlueprintHandler,
  XAmzTargetAWSGlueGetBlueprintRunHandler,
  XAmzTargetAWSGlueGetBlueprintRunsHandler,
  XAmzTargetAWSGlueGetCatalogImportStatusHandler,
  XAmzTargetAWSGlueGetClassifierHandler,
  XAmzTargetAWSGlueGetClassifiersHandler,
  XAmzTargetAWSGlueGetColumnStatisticsForPartitionHandler,
  XAmzTargetAWSGlueGetColumnStatisticsForTableHandler,
  XAmzTargetAWSGlueGetConnectionHandler,
  XAmzTargetAWSGlueGetConnectionsHandler,
  XAmzTargetAWSGlueGetCrawlerHandler,
  XAmzTargetAWSGlueGetCrawlerMetricsHandler,
  XAmzTargetAWSGlueGetCrawlersHandler,
  XAmzTargetAWSGlueGetCustomEntityTypeHandler,
  XAmzTargetAWSGlueGetDatabaseHandler,
  XAmzTargetAWSGlueGetDatabasesHandler,
  XAmzTargetAWSGlueGetDataCatalogEncryptionSettingsHandler,
  XAmzTargetAWSGlueGetDataflowGraphHandler,
  XAmzTargetAWSGlueGetDataQualityResultHandler,
  XAmzTargetAWSGlueGetDataQualityRuleRecommendationRunHandler,
  XAmzTargetAWSGlueGetDataQualityRulesetEvaluationRunHandler,
  XAmzTargetAWSGlueGetDataQualityRulesetHandler,
  XAmzTargetAWSGlueGetDevEndpointHandler,
  XAmzTargetAWSGlueGetDevEndpointsHandler,
  XAmzTargetAWSGlueGetJobBookmarkHandler,
  XAmzTargetAWSGlueGetJobHandler,
  XAmzTargetAWSGlueGetJobRunHandler,
  XAmzTargetAWSGlueGetJobRunsHandler,
  XAmzTargetAWSGlueGetJobsHandler,
  XAmzTargetAWSGlueGetMappingHandler,
  XAmzTargetAWSGlueGetMLTaskRunHandler,
  XAmzTargetAWSGlueGetMLTaskRunsHandler,
  XAmzTargetAWSGlueGetMLTransformHandler,
  XAmzTargetAWSGlueGetMLTransformsHandler,
  XAmzTargetAWSGlueGetPartitionHandler,
  XAmzTargetAWSGlueGetPartitionIndexesHandler,
  XAmzTargetAWSGlueGetPartitionsHandler,
  XAmzTargetAWSGlueGetPlanHandler,
  XAmzTargetAWSGlueGetRegistryHandler,
  XAmzTargetAWSGlueGetResourcePoliciesHandler,
  XAmzTargetAWSGlueGetResourcePolicyHandler,
  XAmzTargetAWSGlueGetSchemaByDefinitionHandler,
  XAmzTargetAWSGlueGetSchemaHandler,
  XAmzTargetAWSGlueGetSchemaVersionHandler,
  XAmzTargetAWSGlueGetSchemaVersionsDiffHandler,
  XAmzTargetAWSGlueGetSecurityConfigurationHandler,
  XAmzTargetAWSGlueGetSecurityConfigurationsHandler,
  XAmzTargetAWSGlueGetSessionHandler,
  XAmzTargetAWSGlueGetStatementHandler,
  XAmzTargetAWSGlueGetTableHandler,
  XAmzTargetAWSGlueGetTablesHandler,
  XAmzTargetAWSGlueGetTableVersionHandler,
  XAmzTargetAWSGlueGetTableVersionsHandler,
  XAmzTargetAWSGlueGetTagsHandler,
  XAmzTargetAWSGlueGetTriggerHandler,
  XAmzTargetAWSGlueGetTriggersHandler,
  XAmzTargetAWSGlueGetUnfilteredPartitionMetadataHandler,
  XAmzTargetAWSGlueGetUnfilteredPartitionsMetadataHandler,
  XAmzTargetAWSGlueGetUnfilteredTableMetadataHandler,
  XAmzTargetAWSGlueGetUserDefinedFunctionHandler,
  XAmzTargetAWSGlueGetUserDefinedFunctionsHandler,
  XAmzTargetAWSGlueGetWorkflowHandler,
  XAmzTargetAWSGlueGetWorkflowRunHandler,
  XAmzTargetAWSGlueGetWorkflowRunPropertiesHandler,
  XAmzTargetAWSGlueGetWorkflowRunsHandler,
  XAmzTargetAWSGlueImportCatalogToGlueHandler,
  XAmzTargetAWSGlueListBlueprintsHandler,
  XAmzTargetAWSGlueListCrawlersHandler,
  XAmzTargetAWSGlueListCrawlsHandler,
  XAmzTargetAWSGlueListCustomEntityTypesHandler,
  XAmzTargetAWSGlueListDataQualityResultsHandler,
  XAmzTargetAWSGlueListDataQualityRuleRecommendationRunsHandler,
  XAmzTargetAWSGlueListDataQualityRulesetEvaluationRunsHandler,
  XAmzTargetAWSGlueListDataQualityRulesetsHandler,
  XAmzTargetAWSGlueListDevEndpointsHandler,
  XAmzTargetAWSGlueListJobsHandler,
  XAmzTargetAWSGlueListMLTransformsHandler,
  XAmzTargetAWSGlueListRegistriesHandler,
  XAmzTargetAWSGlueListSchemasHandler,
  XAmzTargetAWSGlueListSchemaVersionsHandler,
  XAmzTargetAWSGlueListSessionsHandler,
  XAmzTargetAWSGlueListStatementsHandler,
  XAmzTargetAWSGlueListTriggersHandler,
  XAmzTargetAWSGlueListWorkflowsHandler,
  XAmzTargetAWSGluePutDataCatalogEncryptionSettingsHandler,
  XAmzTargetAWSGluePutResourcePolicyHandler,
  XAmzTargetAWSGluePutSchemaVersionMetadataHandler,
  XAmzTargetAWSGluePutWorkflowRunPropertiesHandler,
  XAmzTargetAWSGlueQuerySchemaVersionMetadataHandler,
  XAmzTargetAWSGlueRegisterSchemaVersionHandler,
  XAmzTargetAWSGlueRemoveSchemaVersionMetadataHandler,
  XAmzTargetAWSGlueResetJobBookmarkHandler,
  XAmzTargetAWSGlueResumeWorkflowRunHandler,
  XAmzTargetAWSGlueRunStatementHandler,
  XAmzTargetAWSGlueSearchTablesHandler,
  XAmzTargetAWSGlueStartBlueprintRunHandler,
  XAmzTargetAWSGlueStartCrawlerHandler,
  XAmzTargetAWSGlueStartCrawlerScheduleHandler,
  XAmzTargetAWSGlueStartDataQualityRuleRecommendationRunHandler,
  XAmzTargetAWSGlueStartDataQualityRulesetEvaluationRunHandler,
  XAmzTargetAWSGlueStartExportLabelsTaskRunHandler,
  XAmzTargetAWSGlueStartImportLabelsTaskRunHandler,
  XAmzTargetAWSGlueStartJobRunHandler,
  XAmzTargetAWSGlueStartMLEvaluationTaskRunHandler,
  XAmzTargetAWSGlueStartMLLabelingSetGenerationTaskRunHandler,
  XAmzTargetAWSGlueStartTriggerHandler,
  XAmzTargetAWSGlueStartWorkflowRunHandler,
  XAmzTargetAWSGlueStopCrawlerHandler,
  XAmzTargetAWSGlueStopCrawlerScheduleHandler,
  XAmzTargetAWSGlueStopSessionHandler,
  XAmzTargetAWSGlueStopTriggerHandler,
  XAmzTargetAWSGlueStopWorkflowRunHandler,
  XAmzTargetAWSGlueTagResourceHandler,
  XAmzTargetAWSGlueUntagResourceHandler,
  XAmzTargetAWSGlueUpdateBlueprintHandler,
  XAmzTargetAWSGlueUpdateClassifierHandler,
  XAmzTargetAWSGlueUpdateColumnStatisticsForPartitionHandler,
  XAmzTargetAWSGlueUpdateColumnStatisticsForTableHandler,
  XAmzTargetAWSGlueUpdateConnectionHandler,
  XAmzTargetAWSGlueUpdateCrawlerHandler,
  XAmzTargetAWSGlueUpdateCrawlerScheduleHandler,
  XAmzTargetAWSGlueUpdateDatabaseHandler,
  XAmzTargetAWSGlueUpdateDataQualityRulesetHandler,
  XAmzTargetAWSGlueUpdateDevEndpointHandler,
  XAmzTargetAWSGlueUpdateJobFromSourceControlHandler,
  XAmzTargetAWSGlueUpdateJobHandler,
  XAmzTargetAWSGlueUpdateMLTransformHandler,
  XAmzTargetAWSGlueUpdatePartitionHandler,
  XAmzTargetAWSGlueUpdateRegistryHandler,
  XAmzTargetAWSGlueUpdateSchemaHandler,
  XAmzTargetAWSGlueUpdateSourceControlFromJobHandler,
  XAmzTargetAWSGlueUpdateTableHandler,
  XAmzTargetAWSGlueUpdateTriggerHandler,
  XAmzTargetAWSGlueUpdateUserDefinedFunctionHandler,
  XAmzTargetAWSGlueUpdateWorkflowHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAWSGlueBatchCreatePartitionHandler)
  .route('/', XAmzTargetAWSGlueBatchDeleteConnectionHandler)
  .route('/', XAmzTargetAWSGlueBatchDeletePartitionHandler)
  .route('/', XAmzTargetAWSGlueBatchDeleteTableHandler)
  .route('/', XAmzTargetAWSGlueBatchDeleteTableVersionHandler)
  .route('/', XAmzTargetAWSGlueBatchGetBlueprintsHandler)
  .route('/', XAmzTargetAWSGlueBatchGetCrawlersHandler)
  .route('/', XAmzTargetAWSGlueBatchGetCustomEntityTypesHandler)
  .route('/', XAmzTargetAWSGlueBatchGetDataQualityResultHandler)
  .route('/', XAmzTargetAWSGlueBatchGetDevEndpointsHandler)
  .route('/', XAmzTargetAWSGlueBatchGetJobsHandler)
  .route('/', XAmzTargetAWSGlueBatchGetPartitionHandler)
  .route('/', XAmzTargetAWSGlueBatchGetTriggersHandler)
  .route('/', XAmzTargetAWSGlueBatchGetWorkflowsHandler)
  .route('/', XAmzTargetAWSGlueBatchStopJobRunHandler)
  .route('/', XAmzTargetAWSGlueBatchUpdatePartitionHandler)
  .route('/', XAmzTargetAWSGlueCancelDataQualityRuleRecommendationRunHandler)
  .route('/', XAmzTargetAWSGlueCancelDataQualityRulesetEvaluationRunHandler)
  .route('/', XAmzTargetAWSGlueCancelMLTaskRunHandler)
  .route('/', XAmzTargetAWSGlueCancelStatementHandler)
  .route('/', XAmzTargetAWSGlueCheckSchemaVersionValidityHandler)
  .route('/', XAmzTargetAWSGlueCreateBlueprintHandler)
  .route('/', XAmzTargetAWSGlueCreateClassifierHandler)
  .route('/', XAmzTargetAWSGlueCreateConnectionHandler)
  .route('/', XAmzTargetAWSGlueCreateCrawlerHandler)
  .route('/', XAmzTargetAWSGlueCreateCustomEntityTypeHandler)
  .route('/', XAmzTargetAWSGlueCreateDataQualityRulesetHandler)
  .route('/', XAmzTargetAWSGlueCreateDatabaseHandler)
  .route('/', XAmzTargetAWSGlueCreateDevEndpointHandler)
  .route('/', XAmzTargetAWSGlueCreateJobHandler)
  .route('/', XAmzTargetAWSGlueCreateMLTransformHandler)
  .route('/', XAmzTargetAWSGlueCreatePartitionHandler)
  .route('/', XAmzTargetAWSGlueCreatePartitionIndexHandler)
  .route('/', XAmzTargetAWSGlueCreateRegistryHandler)
  .route('/', XAmzTargetAWSGlueCreateSchemaHandler)
  .route('/', XAmzTargetAWSGlueCreateScriptHandler)
  .route('/', XAmzTargetAWSGlueCreateSecurityConfigurationHandler)
  .route('/', XAmzTargetAWSGlueCreateSessionHandler)
  .route('/', XAmzTargetAWSGlueCreateTableHandler)
  .route('/', XAmzTargetAWSGlueCreateTriggerHandler)
  .route('/', XAmzTargetAWSGlueCreateUserDefinedFunctionHandler)
  .route('/', XAmzTargetAWSGlueCreateWorkflowHandler)
  .route('/', XAmzTargetAWSGlueDeleteBlueprintHandler)
  .route('/', XAmzTargetAWSGlueDeleteClassifierHandler)
  .route('/', XAmzTargetAWSGlueDeleteColumnStatisticsForPartitionHandler)
  .route('/', XAmzTargetAWSGlueDeleteColumnStatisticsForTableHandler)
  .route('/', XAmzTargetAWSGlueDeleteConnectionHandler)
  .route('/', XAmzTargetAWSGlueDeleteCrawlerHandler)
  .route('/', XAmzTargetAWSGlueDeleteCustomEntityTypeHandler)
  .route('/', XAmzTargetAWSGlueDeleteDataQualityRulesetHandler)
  .route('/', XAmzTargetAWSGlueDeleteDatabaseHandler)
  .route('/', XAmzTargetAWSGlueDeleteDevEndpointHandler)
  .route('/', XAmzTargetAWSGlueDeleteJobHandler)
  .route('/', XAmzTargetAWSGlueDeleteMLTransformHandler)
  .route('/', XAmzTargetAWSGlueDeletePartitionHandler)
  .route('/', XAmzTargetAWSGlueDeletePartitionIndexHandler)
  .route('/', XAmzTargetAWSGlueDeleteRegistryHandler)
  .route('/', XAmzTargetAWSGlueDeleteResourcePolicyHandler)
  .route('/', XAmzTargetAWSGlueDeleteSchemaHandler)
  .route('/', XAmzTargetAWSGlueDeleteSchemaVersionsHandler)
  .route('/', XAmzTargetAWSGlueDeleteSecurityConfigurationHandler)
  .route('/', XAmzTargetAWSGlueDeleteSessionHandler)
  .route('/', XAmzTargetAWSGlueDeleteTableHandler)
  .route('/', XAmzTargetAWSGlueDeleteTableVersionHandler)
  .route('/', XAmzTargetAWSGlueDeleteTriggerHandler)
  .route('/', XAmzTargetAWSGlueDeleteUserDefinedFunctionHandler)
  .route('/', XAmzTargetAWSGlueDeleteWorkflowHandler)
  .route('/', XAmzTargetAWSGlueGetBlueprintHandler)
  .route('/', XAmzTargetAWSGlueGetBlueprintRunHandler)
  .route('/', XAmzTargetAWSGlueGetBlueprintRunsHandler)
  .route('/', XAmzTargetAWSGlueGetCatalogImportStatusHandler)
  .route('/', XAmzTargetAWSGlueGetClassifierHandler)
  .route('/', XAmzTargetAWSGlueGetClassifiersHandler)
  .route('/', XAmzTargetAWSGlueGetColumnStatisticsForPartitionHandler)
  .route('/', XAmzTargetAWSGlueGetColumnStatisticsForTableHandler)
  .route('/', XAmzTargetAWSGlueGetConnectionHandler)
  .route('/', XAmzTargetAWSGlueGetConnectionsHandler)
  .route('/', XAmzTargetAWSGlueGetCrawlerHandler)
  .route('/', XAmzTargetAWSGlueGetCrawlerMetricsHandler)
  .route('/', XAmzTargetAWSGlueGetCrawlersHandler)
  .route('/', XAmzTargetAWSGlueGetCustomEntityTypeHandler)
  .route('/', XAmzTargetAWSGlueGetDataCatalogEncryptionSettingsHandler)
  .route('/', XAmzTargetAWSGlueGetDataQualityResultHandler)
  .route('/', XAmzTargetAWSGlueGetDataQualityRuleRecommendationRunHandler)
  .route('/', XAmzTargetAWSGlueGetDataQualityRulesetHandler)
  .route('/', XAmzTargetAWSGlueGetDataQualityRulesetEvaluationRunHandler)
  .route('/', XAmzTargetAWSGlueGetDatabaseHandler)
  .route('/', XAmzTargetAWSGlueGetDatabasesHandler)
  .route('/', XAmzTargetAWSGlueGetDataflowGraphHandler)
  .route('/', XAmzTargetAWSGlueGetDevEndpointHandler)
  .route('/', XAmzTargetAWSGlueGetDevEndpointsHandler)
  .route('/', XAmzTargetAWSGlueGetJobHandler)
  .route('/', XAmzTargetAWSGlueGetJobBookmarkHandler)
  .route('/', XAmzTargetAWSGlueGetJobRunHandler)
  .route('/', XAmzTargetAWSGlueGetJobRunsHandler)
  .route('/', XAmzTargetAWSGlueGetJobsHandler)
  .route('/', XAmzTargetAWSGlueGetMLTaskRunHandler)
  .route('/', XAmzTargetAWSGlueGetMLTaskRunsHandler)
  .route('/', XAmzTargetAWSGlueGetMLTransformHandler)
  .route('/', XAmzTargetAWSGlueGetMLTransformsHandler)
  .route('/', XAmzTargetAWSGlueGetMappingHandler)
  .route('/', XAmzTargetAWSGlueGetPartitionHandler)
  .route('/', XAmzTargetAWSGlueGetPartitionIndexesHandler)
  .route('/', XAmzTargetAWSGlueGetPartitionsHandler)
  .route('/', XAmzTargetAWSGlueGetPlanHandler)
  .route('/', XAmzTargetAWSGlueGetRegistryHandler)
  .route('/', XAmzTargetAWSGlueGetResourcePoliciesHandler)
  .route('/', XAmzTargetAWSGlueGetResourcePolicyHandler)
  .route('/', XAmzTargetAWSGlueGetSchemaHandler)
  .route('/', XAmzTargetAWSGlueGetSchemaByDefinitionHandler)
  .route('/', XAmzTargetAWSGlueGetSchemaVersionHandler)
  .route('/', XAmzTargetAWSGlueGetSchemaVersionsDiffHandler)
  .route('/', XAmzTargetAWSGlueGetSecurityConfigurationHandler)
  .route('/', XAmzTargetAWSGlueGetSecurityConfigurationsHandler)
  .route('/', XAmzTargetAWSGlueGetSessionHandler)
  .route('/', XAmzTargetAWSGlueGetStatementHandler)
  .route('/', XAmzTargetAWSGlueGetTableHandler)
  .route('/', XAmzTargetAWSGlueGetTableVersionHandler)
  .route('/', XAmzTargetAWSGlueGetTableVersionsHandler)
  .route('/', XAmzTargetAWSGlueGetTablesHandler)
  .route('/', XAmzTargetAWSGlueGetTagsHandler)
  .route('/', XAmzTargetAWSGlueGetTriggerHandler)
  .route('/', XAmzTargetAWSGlueGetTriggersHandler)
  .route('/', XAmzTargetAWSGlueGetUnfilteredPartitionMetadataHandler)
  .route('/', XAmzTargetAWSGlueGetUnfilteredPartitionsMetadataHandler)
  .route('/', XAmzTargetAWSGlueGetUnfilteredTableMetadataHandler)
  .route('/', XAmzTargetAWSGlueGetUserDefinedFunctionHandler)
  .route('/', XAmzTargetAWSGlueGetUserDefinedFunctionsHandler)
  .route('/', XAmzTargetAWSGlueGetWorkflowHandler)
  .route('/', XAmzTargetAWSGlueGetWorkflowRunHandler)
  .route('/', XAmzTargetAWSGlueGetWorkflowRunPropertiesHandler)
  .route('/', XAmzTargetAWSGlueGetWorkflowRunsHandler)
  .route('/', XAmzTargetAWSGlueImportCatalogToGlueHandler)
  .route('/', XAmzTargetAWSGlueListBlueprintsHandler)
  .route('/', XAmzTargetAWSGlueListCrawlersHandler)
  .route('/', XAmzTargetAWSGlueListCrawlsHandler)
  .route('/', XAmzTargetAWSGlueListCustomEntityTypesHandler)
  .route('/', XAmzTargetAWSGlueListDataQualityResultsHandler)
  .route('/', XAmzTargetAWSGlueListDataQualityRuleRecommendationRunsHandler)
  .route('/', XAmzTargetAWSGlueListDataQualityRulesetEvaluationRunsHandler)
  .route('/', XAmzTargetAWSGlueListDataQualityRulesetsHandler)
  .route('/', XAmzTargetAWSGlueListDevEndpointsHandler)
  .route('/', XAmzTargetAWSGlueListJobsHandler)
  .route('/', XAmzTargetAWSGlueListMLTransformsHandler)
  .route('/', XAmzTargetAWSGlueListRegistriesHandler)
  .route('/', XAmzTargetAWSGlueListSchemaVersionsHandler)
  .route('/', XAmzTargetAWSGlueListSchemasHandler)
  .route('/', XAmzTargetAWSGlueListSessionsHandler)
  .route('/', XAmzTargetAWSGlueListStatementsHandler)
  .route('/', XAmzTargetAWSGlueListTriggersHandler)
  .route('/', XAmzTargetAWSGlueListWorkflowsHandler)
  .route('/', XAmzTargetAWSGluePutDataCatalogEncryptionSettingsHandler)
  .route('/', XAmzTargetAWSGluePutResourcePolicyHandler)
  .route('/', XAmzTargetAWSGluePutSchemaVersionMetadataHandler)
  .route('/', XAmzTargetAWSGluePutWorkflowRunPropertiesHandler)
  .route('/', XAmzTargetAWSGlueQuerySchemaVersionMetadataHandler)
  .route('/', XAmzTargetAWSGlueRegisterSchemaVersionHandler)
  .route('/', XAmzTargetAWSGlueRemoveSchemaVersionMetadataHandler)
  .route('/', XAmzTargetAWSGlueResetJobBookmarkHandler)
  .route('/', XAmzTargetAWSGlueResumeWorkflowRunHandler)
  .route('/', XAmzTargetAWSGlueRunStatementHandler)
  .route('/', XAmzTargetAWSGlueSearchTablesHandler)
  .route('/', XAmzTargetAWSGlueStartBlueprintRunHandler)
  .route('/', XAmzTargetAWSGlueStartCrawlerHandler)
  .route('/', XAmzTargetAWSGlueStartCrawlerScheduleHandler)
  .route('/', XAmzTargetAWSGlueStartDataQualityRuleRecommendationRunHandler)
  .route('/', XAmzTargetAWSGlueStartDataQualityRulesetEvaluationRunHandler)
  .route('/', XAmzTargetAWSGlueStartExportLabelsTaskRunHandler)
  .route('/', XAmzTargetAWSGlueStartImportLabelsTaskRunHandler)
  .route('/', XAmzTargetAWSGlueStartJobRunHandler)
  .route('/', XAmzTargetAWSGlueStartMLEvaluationTaskRunHandler)
  .route('/', XAmzTargetAWSGlueStartMLLabelingSetGenerationTaskRunHandler)
  .route('/', XAmzTargetAWSGlueStartTriggerHandler)
  .route('/', XAmzTargetAWSGlueStartWorkflowRunHandler)
  .route('/', XAmzTargetAWSGlueStopCrawlerHandler)
  .route('/', XAmzTargetAWSGlueStopCrawlerScheduleHandler)
  .route('/', XAmzTargetAWSGlueStopSessionHandler)
  .route('/', XAmzTargetAWSGlueStopTriggerHandler)
  .route('/', XAmzTargetAWSGlueStopWorkflowRunHandler)
  .route('/', XAmzTargetAWSGlueTagResourceHandler)
  .route('/', XAmzTargetAWSGlueUntagResourceHandler)
  .route('/', XAmzTargetAWSGlueUpdateBlueprintHandler)
  .route('/', XAmzTargetAWSGlueUpdateClassifierHandler)
  .route('/', XAmzTargetAWSGlueUpdateColumnStatisticsForPartitionHandler)
  .route('/', XAmzTargetAWSGlueUpdateColumnStatisticsForTableHandler)
  .route('/', XAmzTargetAWSGlueUpdateConnectionHandler)
  .route('/', XAmzTargetAWSGlueUpdateCrawlerHandler)
  .route('/', XAmzTargetAWSGlueUpdateCrawlerScheduleHandler)
  .route('/', XAmzTargetAWSGlueUpdateDataQualityRulesetHandler)
  .route('/', XAmzTargetAWSGlueUpdateDatabaseHandler)
  .route('/', XAmzTargetAWSGlueUpdateDevEndpointHandler)
  .route('/', XAmzTargetAWSGlueUpdateJobHandler)
  .route('/', XAmzTargetAWSGlueUpdateJobFromSourceControlHandler)
  .route('/', XAmzTargetAWSGlueUpdateMLTransformHandler)
  .route('/', XAmzTargetAWSGlueUpdatePartitionHandler)
  .route('/', XAmzTargetAWSGlueUpdateRegistryHandler)
  .route('/', XAmzTargetAWSGlueUpdateSchemaHandler)
  .route('/', XAmzTargetAWSGlueUpdateSourceControlFromJobHandler)
  .route('/', XAmzTargetAWSGlueUpdateTableHandler)
  .route('/', XAmzTargetAWSGlueUpdateTriggerHandler)
  .route('/', XAmzTargetAWSGlueUpdateUserDefinedFunctionHandler)
  .route('/', XAmzTargetAWSGlueUpdateWorkflowHandler)

export default app
