import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSGlueBatchCreatePartitionKey() {
  return ['#X-Amz-Target=AWSGlue.BatchCreatePartition'] as const
}

export function getXAmzTargetAWSGlueBatchDeleteConnectionKey() {
  return ['#X-Amz-Target=AWSGlue.BatchDeleteConnection'] as const
}

export function getXAmzTargetAWSGlueBatchDeletePartitionKey() {
  return ['#X-Amz-Target=AWSGlue.BatchDeletePartition'] as const
}

export function getXAmzTargetAWSGlueBatchDeleteTableKey() {
  return ['#X-Amz-Target=AWSGlue.BatchDeleteTable'] as const
}

export function getXAmzTargetAWSGlueBatchDeleteTableVersionKey() {
  return ['#X-Amz-Target=AWSGlue.BatchDeleteTableVersion'] as const
}

export function getXAmzTargetAWSGlueBatchGetBlueprintsKey() {
  return ['#X-Amz-Target=AWSGlue.BatchGetBlueprints'] as const
}

export function getXAmzTargetAWSGlueBatchGetCrawlersKey() {
  return ['#X-Amz-Target=AWSGlue.BatchGetCrawlers'] as const
}

export function getXAmzTargetAWSGlueBatchGetCustomEntityTypesKey() {
  return ['#X-Amz-Target=AWSGlue.BatchGetCustomEntityTypes'] as const
}

export function getXAmzTargetAWSGlueBatchGetDataQualityResultKey() {
  return ['#X-Amz-Target=AWSGlue.BatchGetDataQualityResult'] as const
}

export function getXAmzTargetAWSGlueBatchGetDevEndpointsKey() {
  return ['#X-Amz-Target=AWSGlue.BatchGetDevEndpoints'] as const
}

export function getXAmzTargetAWSGlueBatchGetJobsKey() {
  return ['#X-Amz-Target=AWSGlue.BatchGetJobs'] as const
}

export function getXAmzTargetAWSGlueBatchGetPartitionKey() {
  return ['#X-Amz-Target=AWSGlue.BatchGetPartition'] as const
}

export function getXAmzTargetAWSGlueBatchGetTriggersKey() {
  return ['#X-Amz-Target=AWSGlue.BatchGetTriggers'] as const
}

export function getXAmzTargetAWSGlueBatchGetWorkflowsKey() {
  return ['#X-Amz-Target=AWSGlue.BatchGetWorkflows'] as const
}

export function getXAmzTargetAWSGlueBatchStopJobRunKey() {
  return ['#X-Amz-Target=AWSGlue.BatchStopJobRun'] as const
}

export function getXAmzTargetAWSGlueBatchUpdatePartitionKey() {
  return ['#X-Amz-Target=AWSGlue.BatchUpdatePartition'] as const
}

export function getXAmzTargetAWSGlueCancelDataQualityRuleRecommendationRunKey() {
  return ['#X-Amz-Target=AWSGlue.CancelDataQualityRuleRecommendationRun'] as const
}

export function getXAmzTargetAWSGlueCancelDataQualityRulesetEvaluationRunKey() {
  return ['#X-Amz-Target=AWSGlue.CancelDataQualityRulesetEvaluationRun'] as const
}

export function getXAmzTargetAWSGlueCancelMLTaskRunKey() {
  return ['#X-Amz-Target=AWSGlue.CancelMLTaskRun'] as const
}

export function getXAmzTargetAWSGlueCancelStatementKey() {
  return ['#X-Amz-Target=AWSGlue.CancelStatement'] as const
}

export function getXAmzTargetAWSGlueCheckSchemaVersionValidityKey() {
  return ['#X-Amz-Target=AWSGlue.CheckSchemaVersionValidity'] as const
}

export function getXAmzTargetAWSGlueCreateBlueprintKey() {
  return ['#X-Amz-Target=AWSGlue.CreateBlueprint'] as const
}

export function getXAmzTargetAWSGlueCreateClassifierKey() {
  return ['#X-Amz-Target=AWSGlue.CreateClassifier'] as const
}

export function getXAmzTargetAWSGlueCreateConnectionKey() {
  return ['#X-Amz-Target=AWSGlue.CreateConnection'] as const
}

export function getXAmzTargetAWSGlueCreateCrawlerKey() {
  return ['#X-Amz-Target=AWSGlue.CreateCrawler'] as const
}

export function getXAmzTargetAWSGlueCreateCustomEntityTypeKey() {
  return ['#X-Amz-Target=AWSGlue.CreateCustomEntityType'] as const
}

export function getXAmzTargetAWSGlueCreateDataQualityRulesetKey() {
  return ['#X-Amz-Target=AWSGlue.CreateDataQualityRuleset'] as const
}

export function getXAmzTargetAWSGlueCreateDatabaseKey() {
  return ['#X-Amz-Target=AWSGlue.CreateDatabase'] as const
}

export function getXAmzTargetAWSGlueCreateDevEndpointKey() {
  return ['#X-Amz-Target=AWSGlue.CreateDevEndpoint'] as const
}

export function getXAmzTargetAWSGlueCreateJobKey() {
  return ['#X-Amz-Target=AWSGlue.CreateJob'] as const
}

export function getXAmzTargetAWSGlueCreateMLTransformKey() {
  return ['#X-Amz-Target=AWSGlue.CreateMLTransform'] as const
}

export function getXAmzTargetAWSGlueCreatePartitionKey() {
  return ['#X-Amz-Target=AWSGlue.CreatePartition'] as const
}

export function getXAmzTargetAWSGlueCreatePartitionIndexKey() {
  return ['#X-Amz-Target=AWSGlue.CreatePartitionIndex'] as const
}

export function getXAmzTargetAWSGlueCreateRegistryKey() {
  return ['#X-Amz-Target=AWSGlue.CreateRegistry'] as const
}

export function getXAmzTargetAWSGlueCreateSchemaKey() {
  return ['#X-Amz-Target=AWSGlue.CreateSchema'] as const
}

export function getXAmzTargetAWSGlueCreateScriptKey() {
  return ['#X-Amz-Target=AWSGlue.CreateScript'] as const
}

export function getXAmzTargetAWSGlueCreateSecurityConfigurationKey() {
  return ['#X-Amz-Target=AWSGlue.CreateSecurityConfiguration'] as const
}

export function getXAmzTargetAWSGlueCreateSessionKey() {
  return ['#X-Amz-Target=AWSGlue.CreateSession'] as const
}

export function getXAmzTargetAWSGlueCreateTableKey() {
  return ['#X-Amz-Target=AWSGlue.CreateTable'] as const
}

export function getXAmzTargetAWSGlueCreateTriggerKey() {
  return ['#X-Amz-Target=AWSGlue.CreateTrigger'] as const
}

export function getXAmzTargetAWSGlueCreateUserDefinedFunctionKey() {
  return ['#X-Amz-Target=AWSGlue.CreateUserDefinedFunction'] as const
}

export function getXAmzTargetAWSGlueCreateWorkflowKey() {
  return ['#X-Amz-Target=AWSGlue.CreateWorkflow'] as const
}

export function getXAmzTargetAWSGlueDeleteBlueprintKey() {
  return ['#X-Amz-Target=AWSGlue.DeleteBlueprint'] as const
}

export function getXAmzTargetAWSGlueDeleteClassifierKey() {
  return ['#X-Amz-Target=AWSGlue.DeleteClassifier'] as const
}

export function getXAmzTargetAWSGlueDeleteColumnStatisticsForPartitionKey() {
  return ['#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForPartition'] as const
}

export function getXAmzTargetAWSGlueDeleteColumnStatisticsForTableKey() {
  return ['#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForTable'] as const
}

export function getXAmzTargetAWSGlueDeleteConnectionKey() {
  return ['#X-Amz-Target=AWSGlue.DeleteConnection'] as const
}

export function getXAmzTargetAWSGlueDeleteCrawlerKey() {
  return ['#X-Amz-Target=AWSGlue.DeleteCrawler'] as const
}

export function getXAmzTargetAWSGlueDeleteCustomEntityTypeKey() {
  return ['#X-Amz-Target=AWSGlue.DeleteCustomEntityType'] as const
}

export function getXAmzTargetAWSGlueDeleteDataQualityRulesetKey() {
  return ['#X-Amz-Target=AWSGlue.DeleteDataQualityRuleset'] as const
}

export function getXAmzTargetAWSGlueDeleteDatabaseKey() {
  return ['#X-Amz-Target=AWSGlue.DeleteDatabase'] as const
}

export function getXAmzTargetAWSGlueDeleteDevEndpointKey() {
  return ['#X-Amz-Target=AWSGlue.DeleteDevEndpoint'] as const
}

export function getXAmzTargetAWSGlueDeleteJobKey() {
  return ['#X-Amz-Target=AWSGlue.DeleteJob'] as const
}

export function getXAmzTargetAWSGlueDeleteMLTransformKey() {
  return ['#X-Amz-Target=AWSGlue.DeleteMLTransform'] as const
}

export function getXAmzTargetAWSGlueDeletePartitionKey() {
  return ['#X-Amz-Target=AWSGlue.DeletePartition'] as const
}

export function getXAmzTargetAWSGlueDeletePartitionIndexKey() {
  return ['#X-Amz-Target=AWSGlue.DeletePartitionIndex'] as const
}

export function getXAmzTargetAWSGlueDeleteRegistryKey() {
  return ['#X-Amz-Target=AWSGlue.DeleteRegistry'] as const
}

export function getXAmzTargetAWSGlueDeleteResourcePolicyKey() {
  return ['#X-Amz-Target=AWSGlue.DeleteResourcePolicy'] as const
}

export function getXAmzTargetAWSGlueDeleteSchemaKey() {
  return ['#X-Amz-Target=AWSGlue.DeleteSchema'] as const
}

export function getXAmzTargetAWSGlueDeleteSchemaVersionsKey() {
  return ['#X-Amz-Target=AWSGlue.DeleteSchemaVersions'] as const
}

export function getXAmzTargetAWSGlueDeleteSecurityConfigurationKey() {
  return ['#X-Amz-Target=AWSGlue.DeleteSecurityConfiguration'] as const
}

export function getXAmzTargetAWSGlueDeleteSessionKey() {
  return ['#X-Amz-Target=AWSGlue.DeleteSession'] as const
}

export function getXAmzTargetAWSGlueDeleteTableKey() {
  return ['#X-Amz-Target=AWSGlue.DeleteTable'] as const
}

export function getXAmzTargetAWSGlueDeleteTableVersionKey() {
  return ['#X-Amz-Target=AWSGlue.DeleteTableVersion'] as const
}

export function getXAmzTargetAWSGlueDeleteTriggerKey() {
  return ['#X-Amz-Target=AWSGlue.DeleteTrigger'] as const
}

export function getXAmzTargetAWSGlueDeleteUserDefinedFunctionKey() {
  return ['#X-Amz-Target=AWSGlue.DeleteUserDefinedFunction'] as const
}

export function getXAmzTargetAWSGlueDeleteWorkflowKey() {
  return ['#X-Amz-Target=AWSGlue.DeleteWorkflow'] as const
}

export function getXAmzTargetAWSGlueGetBlueprintKey() {
  return ['#X-Amz-Target=AWSGlue.GetBlueprint'] as const
}

export function getXAmzTargetAWSGlueGetBlueprintRunKey() {
  return ['#X-Amz-Target=AWSGlue.GetBlueprintRun'] as const
}

export function getXAmzTargetAWSGlueGetBlueprintRunsKey() {
  return ['#X-Amz-Target=AWSGlue.GetBlueprintRuns'] as const
}

export function getXAmzTargetAWSGlueGetCatalogImportStatusKey() {
  return ['#X-Amz-Target=AWSGlue.GetCatalogImportStatus'] as const
}

export function getXAmzTargetAWSGlueGetClassifierKey() {
  return ['#X-Amz-Target=AWSGlue.GetClassifier'] as const
}

export function getXAmzTargetAWSGlueGetClassifiersKey() {
  return ['#X-Amz-Target=AWSGlue.GetClassifiers'] as const
}

export function getXAmzTargetAWSGlueGetColumnStatisticsForPartitionKey() {
  return ['#X-Amz-Target=AWSGlue.GetColumnStatisticsForPartition'] as const
}

export function getXAmzTargetAWSGlueGetColumnStatisticsForTableKey() {
  return ['#X-Amz-Target=AWSGlue.GetColumnStatisticsForTable'] as const
}

export function getXAmzTargetAWSGlueGetConnectionKey() {
  return ['#X-Amz-Target=AWSGlue.GetConnection'] as const
}

export function getXAmzTargetAWSGlueGetConnectionsKey() {
  return ['#X-Amz-Target=AWSGlue.GetConnections'] as const
}

export function getXAmzTargetAWSGlueGetCrawlerKey() {
  return ['#X-Amz-Target=AWSGlue.GetCrawler'] as const
}

export function getXAmzTargetAWSGlueGetCrawlerMetricsKey() {
  return ['#X-Amz-Target=AWSGlue.GetCrawlerMetrics'] as const
}

export function getXAmzTargetAWSGlueGetCrawlersKey() {
  return ['#X-Amz-Target=AWSGlue.GetCrawlers'] as const
}

export function getXAmzTargetAWSGlueGetCustomEntityTypeKey() {
  return ['#X-Amz-Target=AWSGlue.GetCustomEntityType'] as const
}

export function getXAmzTargetAWSGlueGetDataCatalogEncryptionSettingsKey() {
  return ['#X-Amz-Target=AWSGlue.GetDataCatalogEncryptionSettings'] as const
}

export function getXAmzTargetAWSGlueGetDataQualityResultKey() {
  return ['#X-Amz-Target=AWSGlue.GetDataQualityResult'] as const
}

export function getXAmzTargetAWSGlueGetDataQualityRuleRecommendationRunKey() {
  return ['#X-Amz-Target=AWSGlue.GetDataQualityRuleRecommendationRun'] as const
}

export function getXAmzTargetAWSGlueGetDataQualityRulesetKey() {
  return ['#X-Amz-Target=AWSGlue.GetDataQualityRuleset'] as const
}

export function getXAmzTargetAWSGlueGetDataQualityRulesetEvaluationRunKey() {
  return ['#X-Amz-Target=AWSGlue.GetDataQualityRulesetEvaluationRun'] as const
}

export function getXAmzTargetAWSGlueGetDatabaseKey() {
  return ['#X-Amz-Target=AWSGlue.GetDatabase'] as const
}

export function getXAmzTargetAWSGlueGetDatabasesKey() {
  return ['#X-Amz-Target=AWSGlue.GetDatabases'] as const
}

export function getXAmzTargetAWSGlueGetDataflowGraphKey() {
  return ['#X-Amz-Target=AWSGlue.GetDataflowGraph'] as const
}

export function getXAmzTargetAWSGlueGetDevEndpointKey() {
  return ['#X-Amz-Target=AWSGlue.GetDevEndpoint'] as const
}

export function getXAmzTargetAWSGlueGetDevEndpointsKey() {
  return ['#X-Amz-Target=AWSGlue.GetDevEndpoints'] as const
}

export function getXAmzTargetAWSGlueGetJobKey() {
  return ['#X-Amz-Target=AWSGlue.GetJob'] as const
}

export function getXAmzTargetAWSGlueGetJobBookmarkKey() {
  return ['#X-Amz-Target=AWSGlue.GetJobBookmark'] as const
}

export function getXAmzTargetAWSGlueGetJobRunKey() {
  return ['#X-Amz-Target=AWSGlue.GetJobRun'] as const
}

export function getXAmzTargetAWSGlueGetJobRunsKey() {
  return ['#X-Amz-Target=AWSGlue.GetJobRuns'] as const
}

export function getXAmzTargetAWSGlueGetJobsKey() {
  return ['#X-Amz-Target=AWSGlue.GetJobs'] as const
}

export function getXAmzTargetAWSGlueGetMLTaskRunKey() {
  return ['#X-Amz-Target=AWSGlue.GetMLTaskRun'] as const
}

export function getXAmzTargetAWSGlueGetMLTaskRunsKey() {
  return ['#X-Amz-Target=AWSGlue.GetMLTaskRuns'] as const
}

export function getXAmzTargetAWSGlueGetMLTransformKey() {
  return ['#X-Amz-Target=AWSGlue.GetMLTransform'] as const
}

export function getXAmzTargetAWSGlueGetMLTransformsKey() {
  return ['#X-Amz-Target=AWSGlue.GetMLTransforms'] as const
}

export function getXAmzTargetAWSGlueGetMappingKey() {
  return ['#X-Amz-Target=AWSGlue.GetMapping'] as const
}

export function getXAmzTargetAWSGlueGetPartitionKey() {
  return ['#X-Amz-Target=AWSGlue.GetPartition'] as const
}

export function getXAmzTargetAWSGlueGetPartitionIndexesKey() {
  return ['#X-Amz-Target=AWSGlue.GetPartitionIndexes'] as const
}

export function getXAmzTargetAWSGlueGetPartitionsKey() {
  return ['#X-Amz-Target=AWSGlue.GetPartitions'] as const
}

export function getXAmzTargetAWSGlueGetPlanKey() {
  return ['#X-Amz-Target=AWSGlue.GetPlan'] as const
}

export function getXAmzTargetAWSGlueGetRegistryKey() {
  return ['#X-Amz-Target=AWSGlue.GetRegistry'] as const
}

export function getXAmzTargetAWSGlueGetResourcePoliciesKey() {
  return ['#X-Amz-Target=AWSGlue.GetResourcePolicies'] as const
}

export function getXAmzTargetAWSGlueGetResourcePolicyKey() {
  return ['#X-Amz-Target=AWSGlue.GetResourcePolicy'] as const
}

export function getXAmzTargetAWSGlueGetSchemaKey() {
  return ['#X-Amz-Target=AWSGlue.GetSchema'] as const
}

export function getXAmzTargetAWSGlueGetSchemaByDefinitionKey() {
  return ['#X-Amz-Target=AWSGlue.GetSchemaByDefinition'] as const
}

export function getXAmzTargetAWSGlueGetSchemaVersionKey() {
  return ['#X-Amz-Target=AWSGlue.GetSchemaVersion'] as const
}

export function getXAmzTargetAWSGlueGetSchemaVersionsDiffKey() {
  return ['#X-Amz-Target=AWSGlue.GetSchemaVersionsDiff'] as const
}

export function getXAmzTargetAWSGlueGetSecurityConfigurationKey() {
  return ['#X-Amz-Target=AWSGlue.GetSecurityConfiguration'] as const
}

export function getXAmzTargetAWSGlueGetSecurityConfigurationsKey() {
  return ['#X-Amz-Target=AWSGlue.GetSecurityConfigurations'] as const
}

export function getXAmzTargetAWSGlueGetSessionKey() {
  return ['#X-Amz-Target=AWSGlue.GetSession'] as const
}

export function getXAmzTargetAWSGlueGetStatementKey() {
  return ['#X-Amz-Target=AWSGlue.GetStatement'] as const
}

export function getXAmzTargetAWSGlueGetTableKey() {
  return ['#X-Amz-Target=AWSGlue.GetTable'] as const
}

export function getXAmzTargetAWSGlueGetTableVersionKey() {
  return ['#X-Amz-Target=AWSGlue.GetTableVersion'] as const
}

export function getXAmzTargetAWSGlueGetTableVersionsKey() {
  return ['#X-Amz-Target=AWSGlue.GetTableVersions'] as const
}

export function getXAmzTargetAWSGlueGetTablesKey() {
  return ['#X-Amz-Target=AWSGlue.GetTables'] as const
}

export function getXAmzTargetAWSGlueGetTagsKey() {
  return ['#X-Amz-Target=AWSGlue.GetTags'] as const
}

export function getXAmzTargetAWSGlueGetTriggerKey() {
  return ['#X-Amz-Target=AWSGlue.GetTrigger'] as const
}

export function getXAmzTargetAWSGlueGetTriggersKey() {
  return ['#X-Amz-Target=AWSGlue.GetTriggers'] as const
}

export function getXAmzTargetAWSGlueGetUnfilteredPartitionMetadataKey() {
  return ['#X-Amz-Target=AWSGlue.GetUnfilteredPartitionMetadata'] as const
}

export function getXAmzTargetAWSGlueGetUnfilteredPartitionsMetadataKey() {
  return ['#X-Amz-Target=AWSGlue.GetUnfilteredPartitionsMetadata'] as const
}

export function getXAmzTargetAWSGlueGetUnfilteredTableMetadataKey() {
  return ['#X-Amz-Target=AWSGlue.GetUnfilteredTableMetadata'] as const
}

export function getXAmzTargetAWSGlueGetUserDefinedFunctionKey() {
  return ['#X-Amz-Target=AWSGlue.GetUserDefinedFunction'] as const
}

export function getXAmzTargetAWSGlueGetUserDefinedFunctionsKey() {
  return ['#X-Amz-Target=AWSGlue.GetUserDefinedFunctions'] as const
}

export function getXAmzTargetAWSGlueGetWorkflowKey() {
  return ['#X-Amz-Target=AWSGlue.GetWorkflow'] as const
}

export function getXAmzTargetAWSGlueGetWorkflowRunKey() {
  return ['#X-Amz-Target=AWSGlue.GetWorkflowRun'] as const
}

export function getXAmzTargetAWSGlueGetWorkflowRunPropertiesKey() {
  return ['#X-Amz-Target=AWSGlue.GetWorkflowRunProperties'] as const
}

export function getXAmzTargetAWSGlueGetWorkflowRunsKey() {
  return ['#X-Amz-Target=AWSGlue.GetWorkflowRuns'] as const
}

export function getXAmzTargetAWSGlueImportCatalogToGlueKey() {
  return ['#X-Amz-Target=AWSGlue.ImportCatalogToGlue'] as const
}

export function getXAmzTargetAWSGlueListBlueprintsKey() {
  return ['#X-Amz-Target=AWSGlue.ListBlueprints'] as const
}

export function getXAmzTargetAWSGlueListCrawlersKey() {
  return ['#X-Amz-Target=AWSGlue.ListCrawlers'] as const
}

export function getXAmzTargetAWSGlueListCrawlsKey() {
  return ['#X-Amz-Target=AWSGlue.ListCrawls'] as const
}

export function getXAmzTargetAWSGlueListCustomEntityTypesKey() {
  return ['#X-Amz-Target=AWSGlue.ListCustomEntityTypes'] as const
}

export function getXAmzTargetAWSGlueListDataQualityResultsKey() {
  return ['#X-Amz-Target=AWSGlue.ListDataQualityResults'] as const
}

export function getXAmzTargetAWSGlueListDataQualityRuleRecommendationRunsKey() {
  return ['#X-Amz-Target=AWSGlue.ListDataQualityRuleRecommendationRuns'] as const
}

export function getXAmzTargetAWSGlueListDataQualityRulesetEvaluationRunsKey() {
  return ['#X-Amz-Target=AWSGlue.ListDataQualityRulesetEvaluationRuns'] as const
}

export function getXAmzTargetAWSGlueListDataQualityRulesetsKey() {
  return ['#X-Amz-Target=AWSGlue.ListDataQualityRulesets'] as const
}

export function getXAmzTargetAWSGlueListDevEndpointsKey() {
  return ['#X-Amz-Target=AWSGlue.ListDevEndpoints'] as const
}

export function getXAmzTargetAWSGlueListJobsKey() {
  return ['#X-Amz-Target=AWSGlue.ListJobs'] as const
}

export function getXAmzTargetAWSGlueListMLTransformsKey() {
  return ['#X-Amz-Target=AWSGlue.ListMLTransforms'] as const
}

export function getXAmzTargetAWSGlueListRegistriesKey() {
  return ['#X-Amz-Target=AWSGlue.ListRegistries'] as const
}

export function getXAmzTargetAWSGlueListSchemaVersionsKey() {
  return ['#X-Amz-Target=AWSGlue.ListSchemaVersions'] as const
}

export function getXAmzTargetAWSGlueListSchemasKey() {
  return ['#X-Amz-Target=AWSGlue.ListSchemas'] as const
}

export function getXAmzTargetAWSGlueListSessionsKey() {
  return ['#X-Amz-Target=AWSGlue.ListSessions'] as const
}

export function getXAmzTargetAWSGlueListStatementsKey() {
  return ['#X-Amz-Target=AWSGlue.ListStatements'] as const
}

export function getXAmzTargetAWSGlueListTriggersKey() {
  return ['#X-Amz-Target=AWSGlue.ListTriggers'] as const
}

export function getXAmzTargetAWSGlueListWorkflowsKey() {
  return ['#X-Amz-Target=AWSGlue.ListWorkflows'] as const
}

export function getXAmzTargetAWSGluePutDataCatalogEncryptionSettingsKey() {
  return ['#X-Amz-Target=AWSGlue.PutDataCatalogEncryptionSettings'] as const
}

export function getXAmzTargetAWSGluePutResourcePolicyKey() {
  return ['#X-Amz-Target=AWSGlue.PutResourcePolicy'] as const
}

export function getXAmzTargetAWSGluePutSchemaVersionMetadataKey() {
  return ['#X-Amz-Target=AWSGlue.PutSchemaVersionMetadata'] as const
}

export function getXAmzTargetAWSGluePutWorkflowRunPropertiesKey() {
  return ['#X-Amz-Target=AWSGlue.PutWorkflowRunProperties'] as const
}

export function getXAmzTargetAWSGlueQuerySchemaVersionMetadataKey() {
  return ['#X-Amz-Target=AWSGlue.QuerySchemaVersionMetadata'] as const
}

export function getXAmzTargetAWSGlueRegisterSchemaVersionKey() {
  return ['#X-Amz-Target=AWSGlue.RegisterSchemaVersion'] as const
}

export function getXAmzTargetAWSGlueRemoveSchemaVersionMetadataKey() {
  return ['#X-Amz-Target=AWSGlue.RemoveSchemaVersionMetadata'] as const
}

export function getXAmzTargetAWSGlueResetJobBookmarkKey() {
  return ['#X-Amz-Target=AWSGlue.ResetJobBookmark'] as const
}

export function getXAmzTargetAWSGlueResumeWorkflowRunKey() {
  return ['#X-Amz-Target=AWSGlue.ResumeWorkflowRun'] as const
}

export function getXAmzTargetAWSGlueRunStatementKey() {
  return ['#X-Amz-Target=AWSGlue.RunStatement'] as const
}

export function getXAmzTargetAWSGlueSearchTablesKey() {
  return ['#X-Amz-Target=AWSGlue.SearchTables'] as const
}

export function getXAmzTargetAWSGlueStartBlueprintRunKey() {
  return ['#X-Amz-Target=AWSGlue.StartBlueprintRun'] as const
}

export function getXAmzTargetAWSGlueStartCrawlerKey() {
  return ['#X-Amz-Target=AWSGlue.StartCrawler'] as const
}

export function getXAmzTargetAWSGlueStartCrawlerScheduleKey() {
  return ['#X-Amz-Target=AWSGlue.StartCrawlerSchedule'] as const
}

export function getXAmzTargetAWSGlueStartDataQualityRuleRecommendationRunKey() {
  return ['#X-Amz-Target=AWSGlue.StartDataQualityRuleRecommendationRun'] as const
}

export function getXAmzTargetAWSGlueStartDataQualityRulesetEvaluationRunKey() {
  return ['#X-Amz-Target=AWSGlue.StartDataQualityRulesetEvaluationRun'] as const
}

export function getXAmzTargetAWSGlueStartExportLabelsTaskRunKey() {
  return ['#X-Amz-Target=AWSGlue.StartExportLabelsTaskRun'] as const
}

export function getXAmzTargetAWSGlueStartImportLabelsTaskRunKey() {
  return ['#X-Amz-Target=AWSGlue.StartImportLabelsTaskRun'] as const
}

export function getXAmzTargetAWSGlueStartJobRunKey() {
  return ['#X-Amz-Target=AWSGlue.StartJobRun'] as const
}

export function getXAmzTargetAWSGlueStartMLEvaluationTaskRunKey() {
  return ['#X-Amz-Target=AWSGlue.StartMLEvaluationTaskRun'] as const
}

export function getXAmzTargetAWSGlueStartMLLabelingSetGenerationTaskRunKey() {
  return ['#X-Amz-Target=AWSGlue.StartMLLabelingSetGenerationTaskRun'] as const
}

export function getXAmzTargetAWSGlueStartTriggerKey() {
  return ['#X-Amz-Target=AWSGlue.StartTrigger'] as const
}

export function getXAmzTargetAWSGlueStartWorkflowRunKey() {
  return ['#X-Amz-Target=AWSGlue.StartWorkflowRun'] as const
}

export function getXAmzTargetAWSGlueStopCrawlerKey() {
  return ['#X-Amz-Target=AWSGlue.StopCrawler'] as const
}

export function getXAmzTargetAWSGlueStopCrawlerScheduleKey() {
  return ['#X-Amz-Target=AWSGlue.StopCrawlerSchedule'] as const
}

export function getXAmzTargetAWSGlueStopSessionKey() {
  return ['#X-Amz-Target=AWSGlue.StopSession'] as const
}

export function getXAmzTargetAWSGlueStopTriggerKey() {
  return ['#X-Amz-Target=AWSGlue.StopTrigger'] as const
}

export function getXAmzTargetAWSGlueStopWorkflowRunKey() {
  return ['#X-Amz-Target=AWSGlue.StopWorkflowRun'] as const
}

export function getXAmzTargetAWSGlueTagResourceKey() {
  return ['#X-Amz-Target=AWSGlue.TagResource'] as const
}

export function getXAmzTargetAWSGlueUntagResourceKey() {
  return ['#X-Amz-Target=AWSGlue.UntagResource'] as const
}

export function getXAmzTargetAWSGlueUpdateBlueprintKey() {
  return ['#X-Amz-Target=AWSGlue.UpdateBlueprint'] as const
}

export function getXAmzTargetAWSGlueUpdateClassifierKey() {
  return ['#X-Amz-Target=AWSGlue.UpdateClassifier'] as const
}

export function getXAmzTargetAWSGlueUpdateColumnStatisticsForPartitionKey() {
  return ['#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForPartition'] as const
}

export function getXAmzTargetAWSGlueUpdateColumnStatisticsForTableKey() {
  return ['#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForTable'] as const
}

export function getXAmzTargetAWSGlueUpdateConnectionKey() {
  return ['#X-Amz-Target=AWSGlue.UpdateConnection'] as const
}

export function getXAmzTargetAWSGlueUpdateCrawlerKey() {
  return ['#X-Amz-Target=AWSGlue.UpdateCrawler'] as const
}

export function getXAmzTargetAWSGlueUpdateCrawlerScheduleKey() {
  return ['#X-Amz-Target=AWSGlue.UpdateCrawlerSchedule'] as const
}

export function getXAmzTargetAWSGlueUpdateDataQualityRulesetKey() {
  return ['#X-Amz-Target=AWSGlue.UpdateDataQualityRuleset'] as const
}

export function getXAmzTargetAWSGlueUpdateDatabaseKey() {
  return ['#X-Amz-Target=AWSGlue.UpdateDatabase'] as const
}

export function getXAmzTargetAWSGlueUpdateDevEndpointKey() {
  return ['#X-Amz-Target=AWSGlue.UpdateDevEndpoint'] as const
}

export function getXAmzTargetAWSGlueUpdateJobKey() {
  return ['#X-Amz-Target=AWSGlue.UpdateJob'] as const
}

export function getXAmzTargetAWSGlueUpdateJobFromSourceControlKey() {
  return ['#X-Amz-Target=AWSGlue.UpdateJobFromSourceControl'] as const
}

export function getXAmzTargetAWSGlueUpdateMLTransformKey() {
  return ['#X-Amz-Target=AWSGlue.UpdateMLTransform'] as const
}

export function getXAmzTargetAWSGlueUpdatePartitionKey() {
  return ['#X-Amz-Target=AWSGlue.UpdatePartition'] as const
}

export function getXAmzTargetAWSGlueUpdateRegistryKey() {
  return ['#X-Amz-Target=AWSGlue.UpdateRegistry'] as const
}

export function getXAmzTargetAWSGlueUpdateSchemaKey() {
  return ['#X-Amz-Target=AWSGlue.UpdateSchema'] as const
}

export function getXAmzTargetAWSGlueUpdateSourceControlFromJobKey() {
  return ['#X-Amz-Target=AWSGlue.UpdateSourceControlFromJob'] as const
}

export function getXAmzTargetAWSGlueUpdateTableKey() {
  return ['#X-Amz-Target=AWSGlue.UpdateTable'] as const
}

export function getXAmzTargetAWSGlueUpdateTriggerKey() {
  return ['#X-Amz-Target=AWSGlue.UpdateTrigger'] as const
}

export function getXAmzTargetAWSGlueUpdateUserDefinedFunctionKey() {
  return ['#X-Amz-Target=AWSGlue.UpdateUserDefinedFunction'] as const
}

export function getXAmzTargetAWSGlueUpdateWorkflowKey() {
  return ['#X-Amz-Target=AWSGlue.UpdateWorkflow'] as const
}

export function getPostXAmzTargetAWSGlueBatchCreatePartitionMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.BatchCreatePartition',
    '/#X-Amz-Target=AWSGlue.BatchCreatePartition',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueBatchCreatePartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchCreatePartition']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchCreatePartition']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueBatchCreatePartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.BatchCreatePartition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.BatchCreatePartition'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueBatchCreatePartition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchCreatePartition']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchCreatePartition']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueBatchCreatePartitionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueBatchDeleteConnectionMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.BatchDeleteConnection',
    '/#X-Amz-Target=AWSGlue.BatchDeleteConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueBatchDeleteConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchDeleteConnection']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchDeleteConnection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueBatchDeleteConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.BatchDeleteConnection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.BatchDeleteConnection'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueBatchDeleteConnection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchDeleteConnection']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchDeleteConnection']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueBatchDeleteConnectionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueBatchDeletePartitionMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.BatchDeletePartition',
    '/#X-Amz-Target=AWSGlue.BatchDeletePartition',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueBatchDeletePartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchDeletePartition']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchDeletePartition']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueBatchDeletePartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.BatchDeletePartition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.BatchDeletePartition'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueBatchDeletePartition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchDeletePartition']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchDeletePartition']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueBatchDeletePartitionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueBatchDeleteTableMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.BatchDeleteTable',
    '/#X-Amz-Target=AWSGlue.BatchDeleteTable',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueBatchDeleteTableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchDeleteTable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchDeleteTable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueBatchDeleteTableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchDeleteTable']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.BatchDeleteTable'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueBatchDeleteTable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchDeleteTable']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchDeleteTable']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueBatchDeleteTableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueBatchDeleteTableVersionMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.BatchDeleteTableVersion',
    '/#X-Amz-Target=AWSGlue.BatchDeleteTableVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueBatchDeleteTableVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchDeleteTableVersion']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchDeleteTableVersion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueBatchDeleteTableVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.BatchDeleteTableVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.BatchDeleteTableVersion'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueBatchDeleteTableVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.BatchDeleteTableVersion']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchDeleteTableVersion']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueBatchDeleteTableVersionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueBatchGetBlueprintsMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.BatchGetBlueprints',
    '/#X-Amz-Target=AWSGlue.BatchGetBlueprints',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueBatchGetBlueprintsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetBlueprints']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetBlueprints']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueBatchGetBlueprintsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetBlueprints']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.BatchGetBlueprints'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueBatchGetBlueprints<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetBlueprints']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetBlueprints']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueBatchGetBlueprintsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueBatchGetCrawlersMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.BatchGetCrawlers',
    '/#X-Amz-Target=AWSGlue.BatchGetCrawlers',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueBatchGetCrawlersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetCrawlers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetCrawlers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueBatchGetCrawlersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetCrawlers']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.BatchGetCrawlers'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueBatchGetCrawlers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetCrawlers']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetCrawlers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueBatchGetCrawlersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueBatchGetCustomEntityTypesMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.BatchGetCustomEntityTypes',
    '/#X-Amz-Target=AWSGlue.BatchGetCustomEntityTypes',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueBatchGetCustomEntityTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetCustomEntityTypes']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetCustomEntityTypes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueBatchGetCustomEntityTypesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.BatchGetCustomEntityTypes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.BatchGetCustomEntityTypes'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueBatchGetCustomEntityTypes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.BatchGetCustomEntityTypes']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.BatchGetCustomEntityTypes']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueBatchGetCustomEntityTypesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueBatchGetDataQualityResultMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.BatchGetDataQualityResult',
    '/#X-Amz-Target=AWSGlue.BatchGetDataQualityResult',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueBatchGetDataQualityResultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetDataQualityResult']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetDataQualityResult']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueBatchGetDataQualityResultMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.BatchGetDataQualityResult']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.BatchGetDataQualityResult'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueBatchGetDataQualityResult<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.BatchGetDataQualityResult']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.BatchGetDataQualityResult']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueBatchGetDataQualityResultMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueBatchGetDevEndpointsMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.BatchGetDevEndpoints',
    '/#X-Amz-Target=AWSGlue.BatchGetDevEndpoints',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueBatchGetDevEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetDevEndpoints']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetDevEndpoints']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueBatchGetDevEndpointsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.BatchGetDevEndpoints']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.BatchGetDevEndpoints'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueBatchGetDevEndpoints<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetDevEndpoints']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetDevEndpoints']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueBatchGetDevEndpointsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueBatchGetJobsMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.BatchGetJobs',
    '/#X-Amz-Target=AWSGlue.BatchGetJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueBatchGetJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetJobs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetJobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueBatchGetJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetJobs']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.BatchGetJobs'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueBatchGetJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetJobs']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetJobs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueBatchGetJobsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueBatchGetPartitionMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.BatchGetPartition',
    '/#X-Amz-Target=AWSGlue.BatchGetPartition',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueBatchGetPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetPartition']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetPartition']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueBatchGetPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetPartition']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.BatchGetPartition'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueBatchGetPartition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetPartition']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetPartition']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueBatchGetPartitionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueBatchGetTriggersMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.BatchGetTriggers',
    '/#X-Amz-Target=AWSGlue.BatchGetTriggers',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueBatchGetTriggersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetTriggers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetTriggers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueBatchGetTriggersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetTriggers']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.BatchGetTriggers'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueBatchGetTriggers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetTriggers']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetTriggers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueBatchGetTriggersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueBatchGetWorkflowsMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.BatchGetWorkflows',
    '/#X-Amz-Target=AWSGlue.BatchGetWorkflows',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueBatchGetWorkflowsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetWorkflows']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetWorkflows']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueBatchGetWorkflowsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetWorkflows']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.BatchGetWorkflows'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueBatchGetWorkflows<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetWorkflows']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetWorkflows']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueBatchGetWorkflowsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueBatchStopJobRunMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.BatchStopJobRun',
    '/#X-Amz-Target=AWSGlue.BatchStopJobRun',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueBatchStopJobRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchStopJobRun']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchStopJobRun']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueBatchStopJobRunMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchStopJobRun']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.BatchStopJobRun'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueBatchStopJobRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchStopJobRun']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchStopJobRun']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueBatchStopJobRunMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueBatchUpdatePartitionMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.BatchUpdatePartition',
    '/#X-Amz-Target=AWSGlue.BatchUpdatePartition',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueBatchUpdatePartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchUpdatePartition']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchUpdatePartition']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueBatchUpdatePartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.BatchUpdatePartition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.BatchUpdatePartition'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueBatchUpdatePartition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchUpdatePartition']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchUpdatePartition']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueBatchUpdatePartitionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueCancelDataQualityRuleRecommendationRunMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.CancelDataQualityRuleRecommendationRun',
    '/#X-Amz-Target=AWSGlue.CancelDataQualityRuleRecommendationRun',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueCancelDataQualityRuleRecommendationRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSGlue.CancelDataQualityRuleRecommendationRun']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.CancelDataQualityRuleRecommendationRun']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueCancelDataQualityRuleRecommendationRunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.CancelDataQualityRuleRecommendationRun']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.CancelDataQualityRuleRecommendationRun'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueCancelDataQualityRuleRecommendationRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.CancelDataQualityRuleRecommendationRun']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.CancelDataQualityRuleRecommendationRun']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSGlueCancelDataQualityRuleRecommendationRunMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueCancelDataQualityRulesetEvaluationRunMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.CancelDataQualityRulesetEvaluationRun',
    '/#X-Amz-Target=AWSGlue.CancelDataQualityRulesetEvaluationRun',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueCancelDataQualityRulesetEvaluationRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSGlue.CancelDataQualityRulesetEvaluationRun']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.CancelDataQualityRulesetEvaluationRun']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueCancelDataQualityRulesetEvaluationRunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.CancelDataQualityRulesetEvaluationRun']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.CancelDataQualityRulesetEvaluationRun'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueCancelDataQualityRulesetEvaluationRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.CancelDataQualityRulesetEvaluationRun']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.CancelDataQualityRulesetEvaluationRun']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSGlueCancelDataQualityRulesetEvaluationRunMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueCancelMLTaskRunMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.CancelMLTaskRun',
    '/#X-Amz-Target=AWSGlue.CancelMLTaskRun',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueCancelMLTaskRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CancelMLTaskRun']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CancelMLTaskRun']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueCancelMLTaskRunMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CancelMLTaskRun']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.CancelMLTaskRun'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueCancelMLTaskRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CancelMLTaskRun']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CancelMLTaskRun']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueCancelMLTaskRunMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueCancelStatementMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.CancelStatement',
    '/#X-Amz-Target=AWSGlue.CancelStatement',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueCancelStatementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CancelStatement']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CancelStatement']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueCancelStatementMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CancelStatement']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.CancelStatement'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueCancelStatement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CancelStatement']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CancelStatement']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueCancelStatementMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueCheckSchemaVersionValidityMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.CheckSchemaVersionValidity',
    '/#X-Amz-Target=AWSGlue.CheckSchemaVersionValidity',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueCheckSchemaVersionValidityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CheckSchemaVersionValidity']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CheckSchemaVersionValidity']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueCheckSchemaVersionValidityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.CheckSchemaVersionValidity']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.CheckSchemaVersionValidity'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueCheckSchemaVersionValidity<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.CheckSchemaVersionValidity']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.CheckSchemaVersionValidity']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueCheckSchemaVersionValidityMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueCreateBlueprintMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateBlueprint',
    '/#X-Amz-Target=AWSGlue.CreateBlueprint',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueCreateBlueprintMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateBlueprint']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateBlueprint']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueCreateBlueprintMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateBlueprint']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.CreateBlueprint'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueCreateBlueprint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateBlueprint']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateBlueprint']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueCreateBlueprintMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueCreateClassifierMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateClassifier',
    '/#X-Amz-Target=AWSGlue.CreateClassifier',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueCreateClassifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateClassifier']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateClassifier']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueCreateClassifierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateClassifier']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.CreateClassifier'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueCreateClassifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateClassifier']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateClassifier']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueCreateClassifierMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueCreateConnectionMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateConnection',
    '/#X-Amz-Target=AWSGlue.CreateConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueCreateConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateConnection']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateConnection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueCreateConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateConnection']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.CreateConnection'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueCreateConnection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateConnection']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateConnection']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueCreateConnectionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueCreateCrawlerMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateCrawler',
    '/#X-Amz-Target=AWSGlue.CreateCrawler',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueCreateCrawlerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateCrawler']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateCrawler']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueCreateCrawlerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateCrawler']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.CreateCrawler'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueCreateCrawler<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateCrawler']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateCrawler']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueCreateCrawlerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueCreateCustomEntityTypeMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateCustomEntityType',
    '/#X-Amz-Target=AWSGlue.CreateCustomEntityType',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueCreateCustomEntityTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateCustomEntityType']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateCustomEntityType']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueCreateCustomEntityTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.CreateCustomEntityType']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.CreateCustomEntityType'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueCreateCustomEntityType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateCustomEntityType']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateCustomEntityType']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueCreateCustomEntityTypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueCreateDataQualityRulesetMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateDataQualityRuleset',
    '/#X-Amz-Target=AWSGlue.CreateDataQualityRuleset',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueCreateDataQualityRulesetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateDataQualityRuleset']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateDataQualityRuleset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueCreateDataQualityRulesetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.CreateDataQualityRuleset']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.CreateDataQualityRuleset'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueCreateDataQualityRuleset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.CreateDataQualityRuleset']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.CreateDataQualityRuleset']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueCreateDataQualityRulesetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueCreateDatabaseMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateDatabase',
    '/#X-Amz-Target=AWSGlue.CreateDatabase',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueCreateDatabaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateDatabase']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateDatabase']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueCreateDatabaseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateDatabase']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.CreateDatabase'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueCreateDatabase<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateDatabase']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateDatabase']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueCreateDatabaseMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueCreateDevEndpointMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateDevEndpoint',
    '/#X-Amz-Target=AWSGlue.CreateDevEndpoint',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueCreateDevEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateDevEndpoint']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateDevEndpoint']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueCreateDevEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateDevEndpoint']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.CreateDevEndpoint'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueCreateDevEndpoint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateDevEndpoint']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateDevEndpoint']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueCreateDevEndpointMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueCreateJobMutationKey() {
  return ['#X-Amz-Target=AWSGlue.CreateJob', '/#X-Amz-Target=AWSGlue.CreateJob', 'POST'] as const
}

export function getPostXAmzTargetAWSGlueCreateJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateJob']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueCreateJobMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateJob']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.CreateJob'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueCreateJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateJob']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateJob']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueCreateJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueCreateMLTransformMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateMLTransform',
    '/#X-Amz-Target=AWSGlue.CreateMLTransform',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueCreateMLTransformMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateMLTransform']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateMLTransform']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueCreateMLTransformMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateMLTransform']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.CreateMLTransform'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueCreateMLTransform<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateMLTransform']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateMLTransform']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueCreateMLTransformMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueCreatePartitionMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreatePartition',
    '/#X-Amz-Target=AWSGlue.CreatePartition',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueCreatePartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreatePartition']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreatePartition']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueCreatePartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreatePartition']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.CreatePartition'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueCreatePartition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreatePartition']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreatePartition']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueCreatePartitionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueCreatePartitionIndexMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreatePartitionIndex',
    '/#X-Amz-Target=AWSGlue.CreatePartitionIndex',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueCreatePartitionIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreatePartitionIndex']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreatePartitionIndex']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueCreatePartitionIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.CreatePartitionIndex']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.CreatePartitionIndex'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueCreatePartitionIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreatePartitionIndex']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreatePartitionIndex']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueCreatePartitionIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueCreateRegistryMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateRegistry',
    '/#X-Amz-Target=AWSGlue.CreateRegistry',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueCreateRegistryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateRegistry']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateRegistry']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueCreateRegistryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateRegistry']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.CreateRegistry'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueCreateRegistry<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateRegistry']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateRegistry']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueCreateRegistryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueCreateSchemaMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateSchema',
    '/#X-Amz-Target=AWSGlue.CreateSchema',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueCreateSchemaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateSchema']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateSchema']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueCreateSchemaMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateSchema']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.CreateSchema'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueCreateSchema<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateSchema']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateSchema']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueCreateSchemaMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueCreateScriptMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateScript',
    '/#X-Amz-Target=AWSGlue.CreateScript',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueCreateScriptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateScript']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateScript']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueCreateScriptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateScript']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.CreateScript'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueCreateScript<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateScript']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateScript']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueCreateScriptMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueCreateSecurityConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateSecurityConfiguration',
    '/#X-Amz-Target=AWSGlue.CreateSecurityConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueCreateSecurityConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSGlue.CreateSecurityConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateSecurityConfiguration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueCreateSecurityConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.CreateSecurityConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.CreateSecurityConfiguration'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueCreateSecurityConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.CreateSecurityConfiguration']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.CreateSecurityConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueCreateSecurityConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueCreateSessionMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateSession',
    '/#X-Amz-Target=AWSGlue.CreateSession',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueCreateSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateSession']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateSession']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueCreateSessionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateSession']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.CreateSession'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueCreateSession<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateSession']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateSession']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueCreateSessionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueCreateTableMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateTable',
    '/#X-Amz-Target=AWSGlue.CreateTable',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueCreateTableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateTable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateTable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueCreateTableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateTable']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.CreateTable'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueCreateTable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateTable']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateTable']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueCreateTableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueCreateTriggerMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateTrigger',
    '/#X-Amz-Target=AWSGlue.CreateTrigger',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueCreateTriggerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateTrigger']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateTrigger']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueCreateTriggerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateTrigger']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.CreateTrigger'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueCreateTrigger<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateTrigger']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateTrigger']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueCreateTriggerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueCreateUserDefinedFunctionMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateUserDefinedFunction',
    '/#X-Amz-Target=AWSGlue.CreateUserDefinedFunction',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueCreateUserDefinedFunctionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateUserDefinedFunction']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateUserDefinedFunction']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueCreateUserDefinedFunctionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.CreateUserDefinedFunction']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.CreateUserDefinedFunction'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueCreateUserDefinedFunction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.CreateUserDefinedFunction']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.CreateUserDefinedFunction']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueCreateUserDefinedFunctionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueCreateWorkflowMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateWorkflow',
    '/#X-Amz-Target=AWSGlue.CreateWorkflow',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueCreateWorkflowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateWorkflow']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateWorkflow']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueCreateWorkflowMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateWorkflow']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.CreateWorkflow'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueCreateWorkflow<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateWorkflow']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateWorkflow']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueCreateWorkflowMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueDeleteBlueprintMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteBlueprint',
    '/#X-Amz-Target=AWSGlue.DeleteBlueprint',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueDeleteBlueprintMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteBlueprint']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteBlueprint']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueDeleteBlueprintMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteBlueprint']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.DeleteBlueprint'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueDeleteBlueprint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteBlueprint']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteBlueprint']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueDeleteBlueprintMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueDeleteClassifierMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteClassifier',
    '/#X-Amz-Target=AWSGlue.DeleteClassifier',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueDeleteClassifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteClassifier']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteClassifier']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueDeleteClassifierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteClassifier']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.DeleteClassifier'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueDeleteClassifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteClassifier']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteClassifier']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueDeleteClassifierMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueDeleteColumnStatisticsForPartitionMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForPartition',
    '/#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForPartition',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueDeleteColumnStatisticsForPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForPartition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForPartition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueDeleteColumnStatisticsForPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForPartition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForPartition'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueDeleteColumnStatisticsForPartition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForPartition']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForPartition']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSGlueDeleteColumnStatisticsForPartitionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueDeleteColumnStatisticsForTableMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForTable',
    '/#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForTable',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueDeleteColumnStatisticsForTableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForTable']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForTable']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueDeleteColumnStatisticsForTableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForTable']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForTable'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueDeleteColumnStatisticsForTable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForTable']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForTable']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueDeleteColumnStatisticsForTableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueDeleteConnectionMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteConnection',
    '/#X-Amz-Target=AWSGlue.DeleteConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueDeleteConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteConnection']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteConnection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueDeleteConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteConnection']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.DeleteConnection'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueDeleteConnection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteConnection']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteConnection']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueDeleteConnectionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueDeleteCrawlerMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteCrawler',
    '/#X-Amz-Target=AWSGlue.DeleteCrawler',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueDeleteCrawlerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteCrawler']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteCrawler']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueDeleteCrawlerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteCrawler']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.DeleteCrawler'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueDeleteCrawler<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteCrawler']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteCrawler']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueDeleteCrawlerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueDeleteCustomEntityTypeMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteCustomEntityType',
    '/#X-Amz-Target=AWSGlue.DeleteCustomEntityType',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueDeleteCustomEntityTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteCustomEntityType']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteCustomEntityType']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueDeleteCustomEntityTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.DeleteCustomEntityType']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.DeleteCustomEntityType'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueDeleteCustomEntityType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteCustomEntityType']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteCustomEntityType']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueDeleteCustomEntityTypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueDeleteDataQualityRulesetMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteDataQualityRuleset',
    '/#X-Amz-Target=AWSGlue.DeleteDataQualityRuleset',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueDeleteDataQualityRulesetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteDataQualityRuleset']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteDataQualityRuleset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueDeleteDataQualityRulesetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.DeleteDataQualityRuleset']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.DeleteDataQualityRuleset'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueDeleteDataQualityRuleset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.DeleteDataQualityRuleset']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.DeleteDataQualityRuleset']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueDeleteDataQualityRulesetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueDeleteDatabaseMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteDatabase',
    '/#X-Amz-Target=AWSGlue.DeleteDatabase',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueDeleteDatabaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteDatabase']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteDatabase']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueDeleteDatabaseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteDatabase']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.DeleteDatabase'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueDeleteDatabase<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteDatabase']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteDatabase']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueDeleteDatabaseMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueDeleteDevEndpointMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteDevEndpoint',
    '/#X-Amz-Target=AWSGlue.DeleteDevEndpoint',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueDeleteDevEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteDevEndpoint']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteDevEndpoint']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueDeleteDevEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteDevEndpoint']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.DeleteDevEndpoint'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueDeleteDevEndpoint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteDevEndpoint']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteDevEndpoint']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueDeleteDevEndpointMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueDeleteJobMutationKey() {
  return ['#X-Amz-Target=AWSGlue.DeleteJob', '/#X-Amz-Target=AWSGlue.DeleteJob', 'POST'] as const
}

export function getPostXAmzTargetAWSGlueDeleteJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteJob']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueDeleteJobMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteJob']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.DeleteJob'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueDeleteJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteJob']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteJob']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueDeleteJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueDeleteMLTransformMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteMLTransform',
    '/#X-Amz-Target=AWSGlue.DeleteMLTransform',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueDeleteMLTransformMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteMLTransform']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteMLTransform']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueDeleteMLTransformMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteMLTransform']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.DeleteMLTransform'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueDeleteMLTransform<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteMLTransform']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteMLTransform']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueDeleteMLTransformMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueDeletePartitionMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeletePartition',
    '/#X-Amz-Target=AWSGlue.DeletePartition',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueDeletePartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeletePartition']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeletePartition']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueDeletePartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeletePartition']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.DeletePartition'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueDeletePartition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeletePartition']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeletePartition']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueDeletePartitionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueDeletePartitionIndexMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeletePartitionIndex',
    '/#X-Amz-Target=AWSGlue.DeletePartitionIndex',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueDeletePartitionIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeletePartitionIndex']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeletePartitionIndex']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueDeletePartitionIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.DeletePartitionIndex']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.DeletePartitionIndex'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueDeletePartitionIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeletePartitionIndex']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeletePartitionIndex']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueDeletePartitionIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueDeleteRegistryMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteRegistry',
    '/#X-Amz-Target=AWSGlue.DeleteRegistry',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueDeleteRegistryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteRegistry']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteRegistry']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueDeleteRegistryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteRegistry']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.DeleteRegistry'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueDeleteRegistry<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteRegistry']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteRegistry']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueDeleteRegistryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueDeleteResourcePolicyMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteResourcePolicy',
    '/#X-Amz-Target=AWSGlue.DeleteResourcePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueDeleteResourcePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteResourcePolicy']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteResourcePolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueDeleteResourcePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.DeleteResourcePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.DeleteResourcePolicy'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueDeleteResourcePolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteResourcePolicy']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteResourcePolicy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueDeleteResourcePolicyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueDeleteSchemaMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteSchema',
    '/#X-Amz-Target=AWSGlue.DeleteSchema',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueDeleteSchemaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteSchema']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteSchema']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueDeleteSchemaMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteSchema']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.DeleteSchema'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueDeleteSchema<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteSchema']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteSchema']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueDeleteSchemaMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueDeleteSchemaVersionsMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteSchemaVersions',
    '/#X-Amz-Target=AWSGlue.DeleteSchemaVersions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueDeleteSchemaVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteSchemaVersions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteSchemaVersions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueDeleteSchemaVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.DeleteSchemaVersions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.DeleteSchemaVersions'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueDeleteSchemaVersions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteSchemaVersions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteSchemaVersions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueDeleteSchemaVersionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueDeleteSecurityConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteSecurityConfiguration',
    '/#X-Amz-Target=AWSGlue.DeleteSecurityConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueDeleteSecurityConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSGlue.DeleteSecurityConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteSecurityConfiguration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueDeleteSecurityConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.DeleteSecurityConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.DeleteSecurityConfiguration'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueDeleteSecurityConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.DeleteSecurityConfiguration']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.DeleteSecurityConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueDeleteSecurityConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueDeleteSessionMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteSession',
    '/#X-Amz-Target=AWSGlue.DeleteSession',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueDeleteSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteSession']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteSession']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueDeleteSessionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteSession']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.DeleteSession'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueDeleteSession<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteSession']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteSession']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueDeleteSessionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueDeleteTableMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteTable',
    '/#X-Amz-Target=AWSGlue.DeleteTable',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueDeleteTableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteTable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteTable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueDeleteTableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteTable']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.DeleteTable'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueDeleteTable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteTable']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteTable']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueDeleteTableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueDeleteTableVersionMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteTableVersion',
    '/#X-Amz-Target=AWSGlue.DeleteTableVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueDeleteTableVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteTableVersion']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteTableVersion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueDeleteTableVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteTableVersion']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.DeleteTableVersion'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueDeleteTableVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteTableVersion']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteTableVersion']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueDeleteTableVersionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueDeleteTriggerMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteTrigger',
    '/#X-Amz-Target=AWSGlue.DeleteTrigger',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueDeleteTriggerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteTrigger']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteTrigger']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueDeleteTriggerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteTrigger']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.DeleteTrigger'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueDeleteTrigger<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteTrigger']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteTrigger']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueDeleteTriggerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueDeleteUserDefinedFunctionMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteUserDefinedFunction',
    '/#X-Amz-Target=AWSGlue.DeleteUserDefinedFunction',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueDeleteUserDefinedFunctionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteUserDefinedFunction']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteUserDefinedFunction']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueDeleteUserDefinedFunctionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.DeleteUserDefinedFunction']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.DeleteUserDefinedFunction'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueDeleteUserDefinedFunction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.DeleteUserDefinedFunction']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.DeleteUserDefinedFunction']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueDeleteUserDefinedFunctionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueDeleteWorkflowMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteWorkflow',
    '/#X-Amz-Target=AWSGlue.DeleteWorkflow',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueDeleteWorkflowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteWorkflow']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteWorkflow']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueDeleteWorkflowMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteWorkflow']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.DeleteWorkflow'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueDeleteWorkflow<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteWorkflow']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteWorkflow']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueDeleteWorkflowMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetBlueprintMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetBlueprint',
    '/#X-Amz-Target=AWSGlue.GetBlueprint',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetBlueprintMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetBlueprint']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetBlueprint']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetBlueprintMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetBlueprint']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetBlueprint'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetBlueprint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetBlueprint']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetBlueprint']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetBlueprintMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetBlueprintRunMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetBlueprintRun',
    '/#X-Amz-Target=AWSGlue.GetBlueprintRun',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetBlueprintRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetBlueprintRun']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetBlueprintRun']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetBlueprintRunMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetBlueprintRun']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetBlueprintRun'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetBlueprintRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetBlueprintRun']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetBlueprintRun']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetBlueprintRunMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetBlueprintRunsMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetBlueprintRuns',
    '/#X-Amz-Target=AWSGlue.GetBlueprintRuns',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetBlueprintRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetBlueprintRuns']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetBlueprintRuns']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetBlueprintRunsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetBlueprintRuns']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetBlueprintRuns'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetBlueprintRuns<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetBlueprintRuns']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetBlueprintRuns']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetBlueprintRunsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetCatalogImportStatusMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetCatalogImportStatus',
    '/#X-Amz-Target=AWSGlue.GetCatalogImportStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetCatalogImportStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetCatalogImportStatus']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetCatalogImportStatus']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetCatalogImportStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.GetCatalogImportStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.GetCatalogImportStatus'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetCatalogImportStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetCatalogImportStatus']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetCatalogImportStatus']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetCatalogImportStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetClassifierMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetClassifier',
    '/#X-Amz-Target=AWSGlue.GetClassifier',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetClassifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetClassifier']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetClassifier']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetClassifierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetClassifier']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetClassifier'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetClassifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetClassifier']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetClassifier']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetClassifierMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetClassifiersMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetClassifiers',
    '/#X-Amz-Target=AWSGlue.GetClassifiers',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetClassifiersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetClassifiers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetClassifiers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetClassifiersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetClassifiers']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetClassifiers'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetClassifiers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetClassifiers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetClassifiers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetClassifiersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetColumnStatisticsForPartitionMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetColumnStatisticsForPartition',
    '/#X-Amz-Target=AWSGlue.GetColumnStatisticsForPartition',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetColumnStatisticsForPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSGlue.GetColumnStatisticsForPartition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.GetColumnStatisticsForPartition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetColumnStatisticsForPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.GetColumnStatisticsForPartition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.GetColumnStatisticsForPartition'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetColumnStatisticsForPartition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.GetColumnStatisticsForPartition']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.GetColumnStatisticsForPartition']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetColumnStatisticsForPartitionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetColumnStatisticsForTableMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetColumnStatisticsForTable',
    '/#X-Amz-Target=AWSGlue.GetColumnStatisticsForTable',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetColumnStatisticsForTableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSGlue.GetColumnStatisticsForTable']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetColumnStatisticsForTable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetColumnStatisticsForTableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.GetColumnStatisticsForTable']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.GetColumnStatisticsForTable'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetColumnStatisticsForTable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.GetColumnStatisticsForTable']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.GetColumnStatisticsForTable']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetColumnStatisticsForTableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetConnectionMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetConnection',
    '/#X-Amz-Target=AWSGlue.GetConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetConnection']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetConnection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetConnection']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetConnection'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetConnection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetConnection']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetConnection']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetConnectionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetConnectionsMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetConnections',
    '/#X-Amz-Target=AWSGlue.GetConnections',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetConnections']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetConnections']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetConnectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetConnections']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetConnections'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetConnections<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetConnections']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetConnections']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetConnectionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetCrawlerMutationKey() {
  return ['#X-Amz-Target=AWSGlue.GetCrawler', '/#X-Amz-Target=AWSGlue.GetCrawler', 'POST'] as const
}

export function getPostXAmzTargetAWSGlueGetCrawlerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetCrawler']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetCrawler']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetCrawlerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetCrawler']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetCrawler'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetCrawler<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetCrawler']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetCrawler']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetCrawlerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetCrawlerMetricsMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetCrawlerMetrics',
    '/#X-Amz-Target=AWSGlue.GetCrawlerMetrics',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetCrawlerMetricsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetCrawlerMetrics']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetCrawlerMetrics']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetCrawlerMetricsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetCrawlerMetrics']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetCrawlerMetrics'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetCrawlerMetrics<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetCrawlerMetrics']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetCrawlerMetrics']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetCrawlerMetricsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetCrawlersMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetCrawlers',
    '/#X-Amz-Target=AWSGlue.GetCrawlers',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetCrawlersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetCrawlers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetCrawlers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetCrawlersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetCrawlers']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetCrawlers'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetCrawlers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetCrawlers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetCrawlers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetCrawlersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetCustomEntityTypeMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetCustomEntityType',
    '/#X-Amz-Target=AWSGlue.GetCustomEntityType',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetCustomEntityTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetCustomEntityType']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetCustomEntityType']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetCustomEntityTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetCustomEntityType']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetCustomEntityType'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetCustomEntityType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetCustomEntityType']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetCustomEntityType']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetCustomEntityTypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetDataCatalogEncryptionSettingsMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetDataCatalogEncryptionSettings',
    '/#X-Amz-Target=AWSGlue.GetDataCatalogEncryptionSettings',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetDataCatalogEncryptionSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSGlue.GetDataCatalogEncryptionSettings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.GetDataCatalogEncryptionSettings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetDataCatalogEncryptionSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.GetDataCatalogEncryptionSettings']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.GetDataCatalogEncryptionSettings'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetDataCatalogEncryptionSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.GetDataCatalogEncryptionSettings']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.GetDataCatalogEncryptionSettings']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSGlueGetDataCatalogEncryptionSettingsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetDataQualityResultMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetDataQualityResult',
    '/#X-Amz-Target=AWSGlue.GetDataQualityResult',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetDataQualityResultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetDataQualityResult']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDataQualityResult']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetDataQualityResultMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.GetDataQualityResult']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.GetDataQualityResult'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetDataQualityResult<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetDataQualityResult']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDataQualityResult']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetDataQualityResultMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetDataQualityRuleRecommendationRunMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetDataQualityRuleRecommendationRun',
    '/#X-Amz-Target=AWSGlue.GetDataQualityRuleRecommendationRun',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetDataQualityRuleRecommendationRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSGlue.GetDataQualityRuleRecommendationRun']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.GetDataQualityRuleRecommendationRun']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetDataQualityRuleRecommendationRunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.GetDataQualityRuleRecommendationRun']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.GetDataQualityRuleRecommendationRun'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetDataQualityRuleRecommendationRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.GetDataQualityRuleRecommendationRun']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.GetDataQualityRuleRecommendationRun']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSGlueGetDataQualityRuleRecommendationRunMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetDataQualityRulesetMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetDataQualityRuleset',
    '/#X-Amz-Target=AWSGlue.GetDataQualityRuleset',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetDataQualityRulesetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetDataQualityRuleset']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDataQualityRuleset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetDataQualityRulesetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.GetDataQualityRuleset']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.GetDataQualityRuleset'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetDataQualityRuleset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetDataQualityRuleset']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDataQualityRuleset']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetDataQualityRulesetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetDataQualityRulesetEvaluationRunMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetDataQualityRulesetEvaluationRun',
    '/#X-Amz-Target=AWSGlue.GetDataQualityRulesetEvaluationRun',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetDataQualityRulesetEvaluationRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSGlue.GetDataQualityRulesetEvaluationRun']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.GetDataQualityRulesetEvaluationRun']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetDataQualityRulesetEvaluationRunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.GetDataQualityRulesetEvaluationRun']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.GetDataQualityRulesetEvaluationRun'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetDataQualityRulesetEvaluationRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.GetDataQualityRulesetEvaluationRun']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.GetDataQualityRulesetEvaluationRun']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSGlueGetDataQualityRulesetEvaluationRunMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetDatabaseMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetDatabase',
    '/#X-Amz-Target=AWSGlue.GetDatabase',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetDatabaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetDatabase']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDatabase']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetDatabaseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDatabase']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetDatabase'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetDatabase<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetDatabase']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDatabase']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetDatabaseMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetDatabasesMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetDatabases',
    '/#X-Amz-Target=AWSGlue.GetDatabases',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetDatabasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetDatabases']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDatabases']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetDatabasesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDatabases']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetDatabases'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetDatabases<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetDatabases']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDatabases']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetDatabasesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetDataflowGraphMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetDataflowGraph',
    '/#X-Amz-Target=AWSGlue.GetDataflowGraph',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetDataflowGraphMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetDataflowGraph']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDataflowGraph']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetDataflowGraphMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDataflowGraph']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetDataflowGraph'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetDataflowGraph<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetDataflowGraph']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDataflowGraph']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetDataflowGraphMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetDevEndpointMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetDevEndpoint',
    '/#X-Amz-Target=AWSGlue.GetDevEndpoint',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetDevEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetDevEndpoint']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDevEndpoint']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetDevEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDevEndpoint']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetDevEndpoint'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetDevEndpoint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetDevEndpoint']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDevEndpoint']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetDevEndpointMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetDevEndpointsMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetDevEndpoints',
    '/#X-Amz-Target=AWSGlue.GetDevEndpoints',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetDevEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetDevEndpoints']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDevEndpoints']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetDevEndpointsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDevEndpoints']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetDevEndpoints'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetDevEndpoints<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetDevEndpoints']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDevEndpoints']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetDevEndpointsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetJobMutationKey() {
  return ['#X-Amz-Target=AWSGlue.GetJob', '/#X-Amz-Target=AWSGlue.GetJob', 'POST'] as const
}

export function getPostXAmzTargetAWSGlueGetJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetJob']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetJobMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetJob']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetJob'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetJob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetJob']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetJob']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetJobMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetJobBookmarkMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetJobBookmark',
    '/#X-Amz-Target=AWSGlue.GetJobBookmark',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetJobBookmarkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobBookmark']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobBookmark']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetJobBookmarkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobBookmark']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetJobBookmark'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetJobBookmark<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobBookmark']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobBookmark']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetJobBookmarkMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetJobRunMutationKey() {
  return ['#X-Amz-Target=AWSGlue.GetJobRun', '/#X-Amz-Target=AWSGlue.GetJobRun', 'POST'] as const
}

export function getPostXAmzTargetAWSGlueGetJobRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobRun']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobRun']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetJobRunMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobRun']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetJobRun'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetJobRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobRun']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobRun']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetJobRunMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetJobRunsMutationKey() {
  return ['#X-Amz-Target=AWSGlue.GetJobRuns', '/#X-Amz-Target=AWSGlue.GetJobRuns', 'POST'] as const
}

export function getPostXAmzTargetAWSGlueGetJobRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobRuns']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobRuns']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetJobRunsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobRuns']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetJobRuns'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetJobRuns<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobRuns']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobRuns']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetJobRunsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetJobsMutationKey() {
  return ['#X-Amz-Target=AWSGlue.GetJobs', '/#X-Amz-Target=AWSGlue.GetJobs', 'POST'] as const
}

export function getPostXAmzTargetAWSGlueGetJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobs']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetJobs'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobs']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetJobsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetMLTaskRunMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetMLTaskRun',
    '/#X-Amz-Target=AWSGlue.GetMLTaskRun',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetMLTaskRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTaskRun']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTaskRun']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetMLTaskRunMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTaskRun']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetMLTaskRun'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetMLTaskRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTaskRun']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTaskRun']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetMLTaskRunMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetMLTaskRunsMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetMLTaskRuns',
    '/#X-Amz-Target=AWSGlue.GetMLTaskRuns',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetMLTaskRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTaskRuns']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTaskRuns']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetMLTaskRunsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTaskRuns']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetMLTaskRuns'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetMLTaskRuns<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTaskRuns']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTaskRuns']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetMLTaskRunsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetMLTransformMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetMLTransform',
    '/#X-Amz-Target=AWSGlue.GetMLTransform',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetMLTransformMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTransform']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTransform']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetMLTransformMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTransform']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetMLTransform'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetMLTransform<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTransform']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTransform']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetMLTransformMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetMLTransformsMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetMLTransforms',
    '/#X-Amz-Target=AWSGlue.GetMLTransforms',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetMLTransformsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTransforms']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTransforms']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetMLTransformsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTransforms']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetMLTransforms'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetMLTransforms<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTransforms']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTransforms']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetMLTransformsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetMappingMutationKey() {
  return ['#X-Amz-Target=AWSGlue.GetMapping', '/#X-Amz-Target=AWSGlue.GetMapping', 'POST'] as const
}

export function getPostXAmzTargetAWSGlueGetMappingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetMapping']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetMapping']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetMappingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetMapping']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetMapping'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetMapping<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetMapping']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetMapping']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetMappingMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetPartitionMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetPartition',
    '/#X-Amz-Target=AWSGlue.GetPartition',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetPartition']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetPartition']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetPartition']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetPartition'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetPartition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetPartition']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetPartition']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetPartitionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetPartitionIndexesMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetPartitionIndexes',
    '/#X-Amz-Target=AWSGlue.GetPartitionIndexes',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetPartitionIndexesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetPartitionIndexes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetPartitionIndexes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetPartitionIndexesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetPartitionIndexes']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetPartitionIndexes'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetPartitionIndexes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetPartitionIndexes']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetPartitionIndexes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetPartitionIndexesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetPartitionsMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetPartitions',
    '/#X-Amz-Target=AWSGlue.GetPartitions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetPartitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetPartitions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetPartitions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetPartitionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetPartitions']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetPartitions'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetPartitions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetPartitions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetPartitions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetPartitionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetPlanMutationKey() {
  return ['#X-Amz-Target=AWSGlue.GetPlan', '/#X-Amz-Target=AWSGlue.GetPlan', 'POST'] as const
}

export function getPostXAmzTargetAWSGlueGetPlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetPlan']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetPlan']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetPlanMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetPlan']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetPlan'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetPlan<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetPlan']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetPlan']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetPlanMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetRegistryMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetRegistry',
    '/#X-Amz-Target=AWSGlue.GetRegistry',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetRegistryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetRegistry']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetRegistry']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetRegistryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetRegistry']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetRegistry'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetRegistry<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetRegistry']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetRegistry']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetRegistryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetResourcePoliciesMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetResourcePolicies',
    '/#X-Amz-Target=AWSGlue.GetResourcePolicies',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetResourcePoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetResourcePolicies']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetResourcePolicies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetResourcePoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetResourcePolicies']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetResourcePolicies'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetResourcePolicies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetResourcePolicies']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetResourcePolicies']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetResourcePoliciesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetResourcePolicyMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetResourcePolicy',
    '/#X-Amz-Target=AWSGlue.GetResourcePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetResourcePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetResourcePolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetResourcePolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetResourcePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetResourcePolicy']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetResourcePolicy'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetResourcePolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetResourcePolicy']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetResourcePolicy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetResourcePolicyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetSchemaMutationKey() {
  return ['#X-Amz-Target=AWSGlue.GetSchema', '/#X-Amz-Target=AWSGlue.GetSchema', 'POST'] as const
}

export function getPostXAmzTargetAWSGlueGetSchemaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetSchema']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetSchema']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetSchemaMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetSchema']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetSchema'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetSchema<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetSchema']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetSchema']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetSchemaMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetSchemaByDefinitionMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetSchemaByDefinition',
    '/#X-Amz-Target=AWSGlue.GetSchemaByDefinition',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetSchemaByDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetSchemaByDefinition']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetSchemaByDefinition']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetSchemaByDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.GetSchemaByDefinition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.GetSchemaByDefinition'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetSchemaByDefinition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetSchemaByDefinition']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetSchemaByDefinition']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetSchemaByDefinitionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetSchemaVersionMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetSchemaVersion',
    '/#X-Amz-Target=AWSGlue.GetSchemaVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetSchemaVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetSchemaVersion']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetSchemaVersion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetSchemaVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetSchemaVersion']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetSchemaVersion'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetSchemaVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetSchemaVersion']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetSchemaVersion']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetSchemaVersionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetSchemaVersionsDiffMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetSchemaVersionsDiff',
    '/#X-Amz-Target=AWSGlue.GetSchemaVersionsDiff',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetSchemaVersionsDiffMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetSchemaVersionsDiff']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetSchemaVersionsDiff']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetSchemaVersionsDiffMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.GetSchemaVersionsDiff']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.GetSchemaVersionsDiff'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetSchemaVersionsDiff<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetSchemaVersionsDiff']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetSchemaVersionsDiff']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetSchemaVersionsDiffMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetSecurityConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetSecurityConfiguration',
    '/#X-Amz-Target=AWSGlue.GetSecurityConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetSecurityConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetSecurityConfiguration']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetSecurityConfiguration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetSecurityConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.GetSecurityConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.GetSecurityConfiguration'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetSecurityConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.GetSecurityConfiguration']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.GetSecurityConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetSecurityConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetSecurityConfigurationsMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetSecurityConfigurations',
    '/#X-Amz-Target=AWSGlue.GetSecurityConfigurations',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetSecurityConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetSecurityConfigurations']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetSecurityConfigurations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetSecurityConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.GetSecurityConfigurations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.GetSecurityConfigurations'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetSecurityConfigurations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.GetSecurityConfigurations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.GetSecurityConfigurations']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetSecurityConfigurationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetSessionMutationKey() {
  return ['#X-Amz-Target=AWSGlue.GetSession', '/#X-Amz-Target=AWSGlue.GetSession', 'POST'] as const
}

export function getPostXAmzTargetAWSGlueGetSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetSession']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetSession']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetSessionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetSession']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetSession'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetSession<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetSession']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetSession']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetSessionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetStatementMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetStatement',
    '/#X-Amz-Target=AWSGlue.GetStatement',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetStatementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetStatement']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetStatement']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetStatementMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetStatement']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetStatement'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetStatement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetStatement']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetStatement']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetStatementMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetTableMutationKey() {
  return ['#X-Amz-Target=AWSGlue.GetTable', '/#X-Amz-Target=AWSGlue.GetTable', 'POST'] as const
}

export function getPostXAmzTargetAWSGlueGetTableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetTable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetTableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTable']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetTable'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetTable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetTable']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTable']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetTableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetTableVersionMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetTableVersion',
    '/#X-Amz-Target=AWSGlue.GetTableVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetTableVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetTableVersion']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTableVersion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetTableVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTableVersion']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetTableVersion'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetTableVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetTableVersion']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTableVersion']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetTableVersionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetTableVersionsMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetTableVersions',
    '/#X-Amz-Target=AWSGlue.GetTableVersions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetTableVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetTableVersions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTableVersions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetTableVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTableVersions']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetTableVersions'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetTableVersions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetTableVersions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTableVersions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetTableVersionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetTablesMutationKey() {
  return ['#X-Amz-Target=AWSGlue.GetTables', '/#X-Amz-Target=AWSGlue.GetTables', 'POST'] as const
}

export function getPostXAmzTargetAWSGlueGetTablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetTables']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTables']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetTablesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTables']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetTables'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetTables<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetTables']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTables']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetTablesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetTagsMutationKey() {
  return ['#X-Amz-Target=AWSGlue.GetTags', '/#X-Amz-Target=AWSGlue.GetTags', 'POST'] as const
}

export function getPostXAmzTargetAWSGlueGetTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetTags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTags']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetTags'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetTags']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetTagsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetTriggerMutationKey() {
  return ['#X-Amz-Target=AWSGlue.GetTrigger', '/#X-Amz-Target=AWSGlue.GetTrigger', 'POST'] as const
}

export function getPostXAmzTargetAWSGlueGetTriggerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetTrigger']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTrigger']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetTriggerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTrigger']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetTrigger'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetTrigger<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetTrigger']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTrigger']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetTriggerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetTriggersMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetTriggers',
    '/#X-Amz-Target=AWSGlue.GetTriggers',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetTriggersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetTriggers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTriggers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetTriggersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTriggers']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetTriggers'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetTriggers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetTriggers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTriggers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetTriggersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetUnfilteredPartitionMetadataMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetUnfilteredPartitionMetadata',
    '/#X-Amz-Target=AWSGlue.GetUnfilteredPartitionMetadata',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetUnfilteredPartitionMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSGlue.GetUnfilteredPartitionMetadata']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.GetUnfilteredPartitionMetadata']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetUnfilteredPartitionMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.GetUnfilteredPartitionMetadata']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.GetUnfilteredPartitionMetadata'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetUnfilteredPartitionMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.GetUnfilteredPartitionMetadata']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.GetUnfilteredPartitionMetadata']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetUnfilteredPartitionMetadataMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetUnfilteredPartitionsMetadataMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetUnfilteredPartitionsMetadata',
    '/#X-Amz-Target=AWSGlue.GetUnfilteredPartitionsMetadata',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetUnfilteredPartitionsMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSGlue.GetUnfilteredPartitionsMetadata']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.GetUnfilteredPartitionsMetadata']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetUnfilteredPartitionsMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.GetUnfilteredPartitionsMetadata']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.GetUnfilteredPartitionsMetadata'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetUnfilteredPartitionsMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.GetUnfilteredPartitionsMetadata']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.GetUnfilteredPartitionsMetadata']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetUnfilteredPartitionsMetadataMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetUnfilteredTableMetadataMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetUnfilteredTableMetadata',
    '/#X-Amz-Target=AWSGlue.GetUnfilteredTableMetadata',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetUnfilteredTableMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetUnfilteredTableMetadata']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetUnfilteredTableMetadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetUnfilteredTableMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.GetUnfilteredTableMetadata']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.GetUnfilteredTableMetadata'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetUnfilteredTableMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.GetUnfilteredTableMetadata']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.GetUnfilteredTableMetadata']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetUnfilteredTableMetadataMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetUserDefinedFunctionMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetUserDefinedFunction',
    '/#X-Amz-Target=AWSGlue.GetUserDefinedFunction',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetUserDefinedFunctionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetUserDefinedFunction']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetUserDefinedFunction']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetUserDefinedFunctionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.GetUserDefinedFunction']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.GetUserDefinedFunction'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetUserDefinedFunction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetUserDefinedFunction']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetUserDefinedFunction']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetUserDefinedFunctionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetUserDefinedFunctionsMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetUserDefinedFunctions',
    '/#X-Amz-Target=AWSGlue.GetUserDefinedFunctions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetUserDefinedFunctionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetUserDefinedFunctions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetUserDefinedFunctions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetUserDefinedFunctionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.GetUserDefinedFunctions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.GetUserDefinedFunctions'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetUserDefinedFunctions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.GetUserDefinedFunctions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetUserDefinedFunctions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetUserDefinedFunctionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetWorkflowMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetWorkflow',
    '/#X-Amz-Target=AWSGlue.GetWorkflow',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetWorkflowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetWorkflow']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetWorkflow']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetWorkflowMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetWorkflow']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetWorkflow'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetWorkflow<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetWorkflow']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetWorkflow']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetWorkflowMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetWorkflowRunMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetWorkflowRun',
    '/#X-Amz-Target=AWSGlue.GetWorkflowRun',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetWorkflowRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetWorkflowRun']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetWorkflowRun']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetWorkflowRunMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetWorkflowRun']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetWorkflowRun'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetWorkflowRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetWorkflowRun']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetWorkflowRun']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetWorkflowRunMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetWorkflowRunPropertiesMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetWorkflowRunProperties',
    '/#X-Amz-Target=AWSGlue.GetWorkflowRunProperties',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetWorkflowRunPropertiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetWorkflowRunProperties']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetWorkflowRunProperties']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetWorkflowRunPropertiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.GetWorkflowRunProperties']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.GetWorkflowRunProperties'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetWorkflowRunProperties<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.GetWorkflowRunProperties']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.GetWorkflowRunProperties']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetWorkflowRunPropertiesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueGetWorkflowRunsMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetWorkflowRuns',
    '/#X-Amz-Target=AWSGlue.GetWorkflowRuns',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueGetWorkflowRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetWorkflowRuns']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetWorkflowRuns']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueGetWorkflowRunsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetWorkflowRuns']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.GetWorkflowRuns'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueGetWorkflowRuns<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetWorkflowRuns']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetWorkflowRuns']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueGetWorkflowRunsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueImportCatalogToGlueMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.ImportCatalogToGlue',
    '/#X-Amz-Target=AWSGlue.ImportCatalogToGlue',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueImportCatalogToGlueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ImportCatalogToGlue']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ImportCatalogToGlue']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueImportCatalogToGlueMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ImportCatalogToGlue']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.ImportCatalogToGlue'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueImportCatalogToGlue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ImportCatalogToGlue']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ImportCatalogToGlue']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueImportCatalogToGlueMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueListBlueprintsMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.ListBlueprints',
    '/#X-Amz-Target=AWSGlue.ListBlueprints',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueListBlueprintsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListBlueprints']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListBlueprints']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueListBlueprintsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListBlueprints']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.ListBlueprints'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueListBlueprints<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListBlueprints']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListBlueprints']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueListBlueprintsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueListCrawlersMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.ListCrawlers',
    '/#X-Amz-Target=AWSGlue.ListCrawlers',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueListCrawlersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListCrawlers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListCrawlers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueListCrawlersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListCrawlers']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.ListCrawlers'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueListCrawlers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListCrawlers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListCrawlers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueListCrawlersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueListCrawlsMutationKey() {
  return ['#X-Amz-Target=AWSGlue.ListCrawls', '/#X-Amz-Target=AWSGlue.ListCrawls', 'POST'] as const
}

export function getPostXAmzTargetAWSGlueListCrawlsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListCrawls']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListCrawls']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueListCrawlsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListCrawls']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.ListCrawls'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueListCrawls<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListCrawls']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListCrawls']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueListCrawlsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueListCustomEntityTypesMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.ListCustomEntityTypes',
    '/#X-Amz-Target=AWSGlue.ListCustomEntityTypes',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueListCustomEntityTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListCustomEntityTypes']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListCustomEntityTypes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueListCustomEntityTypesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.ListCustomEntityTypes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.ListCustomEntityTypes'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueListCustomEntityTypes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListCustomEntityTypes']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListCustomEntityTypes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueListCustomEntityTypesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueListDataQualityResultsMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.ListDataQualityResults',
    '/#X-Amz-Target=AWSGlue.ListDataQualityResults',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueListDataQualityResultsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListDataQualityResults']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListDataQualityResults']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueListDataQualityResultsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.ListDataQualityResults']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.ListDataQualityResults'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueListDataQualityResults<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListDataQualityResults']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListDataQualityResults']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueListDataQualityResultsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueListDataQualityRuleRecommendationRunsMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.ListDataQualityRuleRecommendationRuns',
    '/#X-Amz-Target=AWSGlue.ListDataQualityRuleRecommendationRuns',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueListDataQualityRuleRecommendationRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSGlue.ListDataQualityRuleRecommendationRuns']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.ListDataQualityRuleRecommendationRuns']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueListDataQualityRuleRecommendationRunsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.ListDataQualityRuleRecommendationRuns']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.ListDataQualityRuleRecommendationRuns'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueListDataQualityRuleRecommendationRuns<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.ListDataQualityRuleRecommendationRuns']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.ListDataQualityRuleRecommendationRuns']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSGlueListDataQualityRuleRecommendationRunsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueListDataQualityRulesetEvaluationRunsMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.ListDataQualityRulesetEvaluationRuns',
    '/#X-Amz-Target=AWSGlue.ListDataQualityRulesetEvaluationRuns',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueListDataQualityRulesetEvaluationRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSGlue.ListDataQualityRulesetEvaluationRuns']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.ListDataQualityRulesetEvaluationRuns']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueListDataQualityRulesetEvaluationRunsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.ListDataQualityRulesetEvaluationRuns']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.ListDataQualityRulesetEvaluationRuns'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueListDataQualityRulesetEvaluationRuns<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.ListDataQualityRulesetEvaluationRuns']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.ListDataQualityRulesetEvaluationRuns']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSGlueListDataQualityRulesetEvaluationRunsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueListDataQualityRulesetsMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.ListDataQualityRulesets',
    '/#X-Amz-Target=AWSGlue.ListDataQualityRulesets',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueListDataQualityRulesetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListDataQualityRulesets']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListDataQualityRulesets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueListDataQualityRulesetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.ListDataQualityRulesets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.ListDataQualityRulesets'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueListDataQualityRulesets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.ListDataQualityRulesets']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListDataQualityRulesets']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueListDataQualityRulesetsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueListDevEndpointsMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.ListDevEndpoints',
    '/#X-Amz-Target=AWSGlue.ListDevEndpoints',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueListDevEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListDevEndpoints']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListDevEndpoints']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueListDevEndpointsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListDevEndpoints']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.ListDevEndpoints'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueListDevEndpoints<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListDevEndpoints']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListDevEndpoints']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueListDevEndpointsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueListJobsMutationKey() {
  return ['#X-Amz-Target=AWSGlue.ListJobs', '/#X-Amz-Target=AWSGlue.ListJobs', 'POST'] as const
}

export function getPostXAmzTargetAWSGlueListJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListJobs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListJobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueListJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListJobs']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.ListJobs'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueListJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListJobs']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListJobs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueListJobsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueListMLTransformsMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.ListMLTransforms',
    '/#X-Amz-Target=AWSGlue.ListMLTransforms',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueListMLTransformsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListMLTransforms']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListMLTransforms']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueListMLTransformsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListMLTransforms']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.ListMLTransforms'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueListMLTransforms<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListMLTransforms']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListMLTransforms']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueListMLTransformsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueListRegistriesMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.ListRegistries',
    '/#X-Amz-Target=AWSGlue.ListRegistries',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueListRegistriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListRegistries']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListRegistries']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueListRegistriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListRegistries']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.ListRegistries'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueListRegistries<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListRegistries']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListRegistries']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueListRegistriesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueListSchemaVersionsMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.ListSchemaVersions',
    '/#X-Amz-Target=AWSGlue.ListSchemaVersions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueListSchemaVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListSchemaVersions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListSchemaVersions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueListSchemaVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListSchemaVersions']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.ListSchemaVersions'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueListSchemaVersions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListSchemaVersions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListSchemaVersions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueListSchemaVersionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueListSchemasMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.ListSchemas',
    '/#X-Amz-Target=AWSGlue.ListSchemas',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueListSchemasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListSchemas']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListSchemas']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueListSchemasMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListSchemas']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.ListSchemas'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueListSchemas<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListSchemas']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListSchemas']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueListSchemasMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueListSessionsMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.ListSessions',
    '/#X-Amz-Target=AWSGlue.ListSessions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueListSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListSessions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListSessions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueListSessionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListSessions']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.ListSessions'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueListSessions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListSessions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListSessions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueListSessionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueListStatementsMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.ListStatements',
    '/#X-Amz-Target=AWSGlue.ListStatements',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueListStatementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListStatements']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListStatements']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueListStatementsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListStatements']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.ListStatements'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueListStatements<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListStatements']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListStatements']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueListStatementsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueListTriggersMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.ListTriggers',
    '/#X-Amz-Target=AWSGlue.ListTriggers',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueListTriggersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListTriggers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListTriggers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueListTriggersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListTriggers']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.ListTriggers'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueListTriggers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListTriggers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListTriggers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueListTriggersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueListWorkflowsMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.ListWorkflows',
    '/#X-Amz-Target=AWSGlue.ListWorkflows',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueListWorkflowsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListWorkflows']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListWorkflows']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueListWorkflowsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListWorkflows']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.ListWorkflows'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueListWorkflows<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListWorkflows']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListWorkflows']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueListWorkflowsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGluePutDataCatalogEncryptionSettingsMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.PutDataCatalogEncryptionSettings',
    '/#X-Amz-Target=AWSGlue.PutDataCatalogEncryptionSettings',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGluePutDataCatalogEncryptionSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSGlue.PutDataCatalogEncryptionSettings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.PutDataCatalogEncryptionSettings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGluePutDataCatalogEncryptionSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.PutDataCatalogEncryptionSettings']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.PutDataCatalogEncryptionSettings'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGluePutDataCatalogEncryptionSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.PutDataCatalogEncryptionSettings']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.PutDataCatalogEncryptionSettings']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSGluePutDataCatalogEncryptionSettingsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGluePutResourcePolicyMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.PutResourcePolicy',
    '/#X-Amz-Target=AWSGlue.PutResourcePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGluePutResourcePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.PutResourcePolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.PutResourcePolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGluePutResourcePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.PutResourcePolicy']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.PutResourcePolicy'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGluePutResourcePolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.PutResourcePolicy']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.PutResourcePolicy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGluePutResourcePolicyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGluePutSchemaVersionMetadataMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.PutSchemaVersionMetadata',
    '/#X-Amz-Target=AWSGlue.PutSchemaVersionMetadata',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGluePutSchemaVersionMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.PutSchemaVersionMetadata']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.PutSchemaVersionMetadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGluePutSchemaVersionMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.PutSchemaVersionMetadata']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.PutSchemaVersionMetadata'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGluePutSchemaVersionMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.PutSchemaVersionMetadata']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.PutSchemaVersionMetadata']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGluePutSchemaVersionMetadataMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGluePutWorkflowRunPropertiesMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.PutWorkflowRunProperties',
    '/#X-Amz-Target=AWSGlue.PutWorkflowRunProperties',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGluePutWorkflowRunPropertiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.PutWorkflowRunProperties']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.PutWorkflowRunProperties']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGluePutWorkflowRunPropertiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.PutWorkflowRunProperties']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.PutWorkflowRunProperties'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGluePutWorkflowRunProperties<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.PutWorkflowRunProperties']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.PutWorkflowRunProperties']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGluePutWorkflowRunPropertiesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueQuerySchemaVersionMetadataMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.QuerySchemaVersionMetadata',
    '/#X-Amz-Target=AWSGlue.QuerySchemaVersionMetadata',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueQuerySchemaVersionMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.QuerySchemaVersionMetadata']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.QuerySchemaVersionMetadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueQuerySchemaVersionMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.QuerySchemaVersionMetadata']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.QuerySchemaVersionMetadata'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueQuerySchemaVersionMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.QuerySchemaVersionMetadata']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.QuerySchemaVersionMetadata']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueQuerySchemaVersionMetadataMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueRegisterSchemaVersionMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.RegisterSchemaVersion',
    '/#X-Amz-Target=AWSGlue.RegisterSchemaVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueRegisterSchemaVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.RegisterSchemaVersion']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.RegisterSchemaVersion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueRegisterSchemaVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.RegisterSchemaVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.RegisterSchemaVersion'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueRegisterSchemaVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.RegisterSchemaVersion']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.RegisterSchemaVersion']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueRegisterSchemaVersionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueRemoveSchemaVersionMetadataMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.RemoveSchemaVersionMetadata',
    '/#X-Amz-Target=AWSGlue.RemoveSchemaVersionMetadata',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueRemoveSchemaVersionMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSGlue.RemoveSchemaVersionMetadata']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.RemoveSchemaVersionMetadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueRemoveSchemaVersionMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.RemoveSchemaVersionMetadata']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.RemoveSchemaVersionMetadata'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueRemoveSchemaVersionMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.RemoveSchemaVersionMetadata']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.RemoveSchemaVersionMetadata']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueRemoveSchemaVersionMetadataMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueResetJobBookmarkMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.ResetJobBookmark',
    '/#X-Amz-Target=AWSGlue.ResetJobBookmark',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueResetJobBookmarkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ResetJobBookmark']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ResetJobBookmark']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueResetJobBookmarkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ResetJobBookmark']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.ResetJobBookmark'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueResetJobBookmark<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ResetJobBookmark']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ResetJobBookmark']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueResetJobBookmarkMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueResumeWorkflowRunMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.ResumeWorkflowRun',
    '/#X-Amz-Target=AWSGlue.ResumeWorkflowRun',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueResumeWorkflowRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ResumeWorkflowRun']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ResumeWorkflowRun']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueResumeWorkflowRunMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ResumeWorkflowRun']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.ResumeWorkflowRun'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueResumeWorkflowRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ResumeWorkflowRun']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ResumeWorkflowRun']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueResumeWorkflowRunMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueRunStatementMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.RunStatement',
    '/#X-Amz-Target=AWSGlue.RunStatement',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueRunStatementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.RunStatement']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.RunStatement']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueRunStatementMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.RunStatement']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.RunStatement'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueRunStatement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.RunStatement']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.RunStatement']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueRunStatementMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueSearchTablesMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.SearchTables',
    '/#X-Amz-Target=AWSGlue.SearchTables',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueSearchTablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.SearchTables']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.SearchTables']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueSearchTablesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.SearchTables']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.SearchTables'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueSearchTables<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.SearchTables']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.SearchTables']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueSearchTablesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueStartBlueprintRunMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.StartBlueprintRun',
    '/#X-Amz-Target=AWSGlue.StartBlueprintRun',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueStartBlueprintRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StartBlueprintRun']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartBlueprintRun']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueStartBlueprintRunMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartBlueprintRun']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.StartBlueprintRun'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueStartBlueprintRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StartBlueprintRun']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartBlueprintRun']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueStartBlueprintRunMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueStartCrawlerMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.StartCrawler',
    '/#X-Amz-Target=AWSGlue.StartCrawler',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueStartCrawlerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StartCrawler']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartCrawler']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueStartCrawlerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartCrawler']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.StartCrawler'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueStartCrawler<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StartCrawler']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartCrawler']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueStartCrawlerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueStartCrawlerScheduleMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.StartCrawlerSchedule',
    '/#X-Amz-Target=AWSGlue.StartCrawlerSchedule',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueStartCrawlerScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StartCrawlerSchedule']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartCrawlerSchedule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueStartCrawlerScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.StartCrawlerSchedule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.StartCrawlerSchedule'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueStartCrawlerSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StartCrawlerSchedule']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartCrawlerSchedule']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueStartCrawlerScheduleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueStartDataQualityRuleRecommendationRunMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.StartDataQualityRuleRecommendationRun',
    '/#X-Amz-Target=AWSGlue.StartDataQualityRuleRecommendationRun',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueStartDataQualityRuleRecommendationRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSGlue.StartDataQualityRuleRecommendationRun']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.StartDataQualityRuleRecommendationRun']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueStartDataQualityRuleRecommendationRunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.StartDataQualityRuleRecommendationRun']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.StartDataQualityRuleRecommendationRun'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueStartDataQualityRuleRecommendationRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.StartDataQualityRuleRecommendationRun']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.StartDataQualityRuleRecommendationRun']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSGlueStartDataQualityRuleRecommendationRunMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueStartDataQualityRulesetEvaluationRunMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.StartDataQualityRulesetEvaluationRun',
    '/#X-Amz-Target=AWSGlue.StartDataQualityRulesetEvaluationRun',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueStartDataQualityRulesetEvaluationRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSGlue.StartDataQualityRulesetEvaluationRun']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.StartDataQualityRulesetEvaluationRun']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueStartDataQualityRulesetEvaluationRunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.StartDataQualityRulesetEvaluationRun']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.StartDataQualityRulesetEvaluationRun'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueStartDataQualityRulesetEvaluationRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.StartDataQualityRulesetEvaluationRun']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.StartDataQualityRulesetEvaluationRun']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSGlueStartDataQualityRulesetEvaluationRunMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueStartExportLabelsTaskRunMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.StartExportLabelsTaskRun',
    '/#X-Amz-Target=AWSGlue.StartExportLabelsTaskRun',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueStartExportLabelsTaskRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StartExportLabelsTaskRun']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartExportLabelsTaskRun']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueStartExportLabelsTaskRunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.StartExportLabelsTaskRun']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.StartExportLabelsTaskRun'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueStartExportLabelsTaskRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.StartExportLabelsTaskRun']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.StartExportLabelsTaskRun']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueStartExportLabelsTaskRunMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueStartImportLabelsTaskRunMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.StartImportLabelsTaskRun',
    '/#X-Amz-Target=AWSGlue.StartImportLabelsTaskRun',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueStartImportLabelsTaskRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StartImportLabelsTaskRun']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartImportLabelsTaskRun']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueStartImportLabelsTaskRunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.StartImportLabelsTaskRun']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.StartImportLabelsTaskRun'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueStartImportLabelsTaskRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.StartImportLabelsTaskRun']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.StartImportLabelsTaskRun']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueStartImportLabelsTaskRunMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueStartJobRunMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.StartJobRun',
    '/#X-Amz-Target=AWSGlue.StartJobRun',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueStartJobRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StartJobRun']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartJobRun']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueStartJobRunMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartJobRun']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.StartJobRun'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueStartJobRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StartJobRun']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartJobRun']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueStartJobRunMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueStartMLEvaluationTaskRunMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.StartMLEvaluationTaskRun',
    '/#X-Amz-Target=AWSGlue.StartMLEvaluationTaskRun',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueStartMLEvaluationTaskRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StartMLEvaluationTaskRun']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartMLEvaluationTaskRun']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueStartMLEvaluationTaskRunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.StartMLEvaluationTaskRun']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.StartMLEvaluationTaskRun'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueStartMLEvaluationTaskRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.StartMLEvaluationTaskRun']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.StartMLEvaluationTaskRun']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueStartMLEvaluationTaskRunMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueStartMLLabelingSetGenerationTaskRunMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.StartMLLabelingSetGenerationTaskRun',
    '/#X-Amz-Target=AWSGlue.StartMLLabelingSetGenerationTaskRun',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueStartMLLabelingSetGenerationTaskRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSGlue.StartMLLabelingSetGenerationTaskRun']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.StartMLLabelingSetGenerationTaskRun']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueStartMLLabelingSetGenerationTaskRunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.StartMLLabelingSetGenerationTaskRun']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.StartMLLabelingSetGenerationTaskRun'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueStartMLLabelingSetGenerationTaskRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.StartMLLabelingSetGenerationTaskRun']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.StartMLLabelingSetGenerationTaskRun']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSGlueStartMLLabelingSetGenerationTaskRunMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueStartTriggerMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.StartTrigger',
    '/#X-Amz-Target=AWSGlue.StartTrigger',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueStartTriggerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StartTrigger']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartTrigger']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueStartTriggerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartTrigger']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.StartTrigger'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueStartTrigger<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StartTrigger']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartTrigger']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueStartTriggerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueStartWorkflowRunMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.StartWorkflowRun',
    '/#X-Amz-Target=AWSGlue.StartWorkflowRun',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueStartWorkflowRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StartWorkflowRun']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartWorkflowRun']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueStartWorkflowRunMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartWorkflowRun']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.StartWorkflowRun'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueStartWorkflowRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StartWorkflowRun']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartWorkflowRun']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueStartWorkflowRunMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueStopCrawlerMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.StopCrawler',
    '/#X-Amz-Target=AWSGlue.StopCrawler',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueStopCrawlerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StopCrawler']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StopCrawler']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueStopCrawlerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StopCrawler']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.StopCrawler'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueStopCrawler<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StopCrawler']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StopCrawler']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueStopCrawlerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueStopCrawlerScheduleMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.StopCrawlerSchedule',
    '/#X-Amz-Target=AWSGlue.StopCrawlerSchedule',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueStopCrawlerScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StopCrawlerSchedule']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StopCrawlerSchedule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueStopCrawlerScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StopCrawlerSchedule']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.StopCrawlerSchedule'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueStopCrawlerSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StopCrawlerSchedule']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StopCrawlerSchedule']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueStopCrawlerScheduleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueStopSessionMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.StopSession',
    '/#X-Amz-Target=AWSGlue.StopSession',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueStopSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StopSession']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StopSession']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueStopSessionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StopSession']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.StopSession'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueStopSession<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StopSession']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StopSession']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueStopSessionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueStopTriggerMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.StopTrigger',
    '/#X-Amz-Target=AWSGlue.StopTrigger',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueStopTriggerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StopTrigger']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StopTrigger']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueStopTriggerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StopTrigger']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.StopTrigger'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueStopTrigger<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StopTrigger']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StopTrigger']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueStopTriggerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueStopWorkflowRunMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.StopWorkflowRun',
    '/#X-Amz-Target=AWSGlue.StopWorkflowRun',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueStopWorkflowRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StopWorkflowRun']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StopWorkflowRun']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueStopWorkflowRunMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StopWorkflowRun']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.StopWorkflowRun'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueStopWorkflowRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StopWorkflowRun']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StopWorkflowRun']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueStopWorkflowRunMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueTagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.TagResource',
    '/#X-Amz-Target=AWSGlue.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.TagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.TagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.TagResource'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueTagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.TagResource']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.TagResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueTagResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.UntagResource',
    '/#X-Amz-Target=AWSGlue.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UntagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UntagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.UntagResource'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueUntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UntagResource']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UntagResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueUntagResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueUpdateBlueprintMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateBlueprint',
    '/#X-Amz-Target=AWSGlue.UpdateBlueprint',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueUpdateBlueprintMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateBlueprint']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateBlueprint']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueUpdateBlueprintMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateBlueprint']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.UpdateBlueprint'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueUpdateBlueprint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateBlueprint']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateBlueprint']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueUpdateBlueprintMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueUpdateClassifierMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateClassifier',
    '/#X-Amz-Target=AWSGlue.UpdateClassifier',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueUpdateClassifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateClassifier']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateClassifier']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueUpdateClassifierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateClassifier']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.UpdateClassifier'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueUpdateClassifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateClassifier']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateClassifier']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueUpdateClassifierMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueUpdateColumnStatisticsForPartitionMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForPartition',
    '/#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForPartition',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueUpdateColumnStatisticsForPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForPartition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForPartition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueUpdateColumnStatisticsForPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForPartition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForPartition'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueUpdateColumnStatisticsForPartition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForPartition']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForPartition']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSGlueUpdateColumnStatisticsForPartitionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueUpdateColumnStatisticsForTableMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForTable',
    '/#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForTable',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueUpdateColumnStatisticsForTableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForTable']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForTable']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueUpdateColumnStatisticsForTableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForTable']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForTable'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueUpdateColumnStatisticsForTable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForTable']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForTable']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueUpdateColumnStatisticsForTableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueUpdateConnectionMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateConnection',
    '/#X-Amz-Target=AWSGlue.UpdateConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueUpdateConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateConnection']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateConnection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueUpdateConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateConnection']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.UpdateConnection'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueUpdateConnection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateConnection']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateConnection']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueUpdateConnectionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueUpdateCrawlerMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateCrawler',
    '/#X-Amz-Target=AWSGlue.UpdateCrawler',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueUpdateCrawlerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateCrawler']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateCrawler']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueUpdateCrawlerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateCrawler']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.UpdateCrawler'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueUpdateCrawler<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateCrawler']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateCrawler']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueUpdateCrawlerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueUpdateCrawlerScheduleMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateCrawlerSchedule',
    '/#X-Amz-Target=AWSGlue.UpdateCrawlerSchedule',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueUpdateCrawlerScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateCrawlerSchedule']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateCrawlerSchedule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueUpdateCrawlerScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.UpdateCrawlerSchedule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.UpdateCrawlerSchedule'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueUpdateCrawlerSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateCrawlerSchedule']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateCrawlerSchedule']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueUpdateCrawlerScheduleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueUpdateDataQualityRulesetMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateDataQualityRuleset',
    '/#X-Amz-Target=AWSGlue.UpdateDataQualityRuleset',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueUpdateDataQualityRulesetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateDataQualityRuleset']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateDataQualityRuleset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueUpdateDataQualityRulesetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.UpdateDataQualityRuleset']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.UpdateDataQualityRuleset'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueUpdateDataQualityRuleset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.UpdateDataQualityRuleset']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.UpdateDataQualityRuleset']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueUpdateDataQualityRulesetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueUpdateDatabaseMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateDatabase',
    '/#X-Amz-Target=AWSGlue.UpdateDatabase',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueUpdateDatabaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateDatabase']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateDatabase']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueUpdateDatabaseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateDatabase']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.UpdateDatabase'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueUpdateDatabase<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateDatabase']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateDatabase']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueUpdateDatabaseMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueUpdateDevEndpointMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateDevEndpoint',
    '/#X-Amz-Target=AWSGlue.UpdateDevEndpoint',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueUpdateDevEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateDevEndpoint']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateDevEndpoint']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueUpdateDevEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateDevEndpoint']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.UpdateDevEndpoint'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueUpdateDevEndpoint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateDevEndpoint']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateDevEndpoint']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueUpdateDevEndpointMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueUpdateJobMutationKey() {
  return ['#X-Amz-Target=AWSGlue.UpdateJob', '/#X-Amz-Target=AWSGlue.UpdateJob', 'POST'] as const
}

export function getPostXAmzTargetAWSGlueUpdateJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateJob']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueUpdateJobMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateJob']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.UpdateJob'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueUpdateJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateJob']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateJob']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueUpdateJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueUpdateJobFromSourceControlMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateJobFromSourceControl',
    '/#X-Amz-Target=AWSGlue.UpdateJobFromSourceControl',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueUpdateJobFromSourceControlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateJobFromSourceControl']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateJobFromSourceControl']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueUpdateJobFromSourceControlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.UpdateJobFromSourceControl']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.UpdateJobFromSourceControl'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueUpdateJobFromSourceControl<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.UpdateJobFromSourceControl']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.UpdateJobFromSourceControl']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueUpdateJobFromSourceControlMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueUpdateMLTransformMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateMLTransform',
    '/#X-Amz-Target=AWSGlue.UpdateMLTransform',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueUpdateMLTransformMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateMLTransform']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateMLTransform']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueUpdateMLTransformMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateMLTransform']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.UpdateMLTransform'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueUpdateMLTransform<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateMLTransform']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateMLTransform']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueUpdateMLTransformMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueUpdatePartitionMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdatePartition',
    '/#X-Amz-Target=AWSGlue.UpdatePartition',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueUpdatePartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdatePartition']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdatePartition']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueUpdatePartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdatePartition']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.UpdatePartition'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueUpdatePartition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdatePartition']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdatePartition']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueUpdatePartitionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueUpdateRegistryMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateRegistry',
    '/#X-Amz-Target=AWSGlue.UpdateRegistry',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueUpdateRegistryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateRegistry']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateRegistry']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueUpdateRegistryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateRegistry']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.UpdateRegistry'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueUpdateRegistry<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateRegistry']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateRegistry']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueUpdateRegistryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueUpdateSchemaMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateSchema',
    '/#X-Amz-Target=AWSGlue.UpdateSchema',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueUpdateSchemaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateSchema']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateSchema']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueUpdateSchemaMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateSchema']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.UpdateSchema'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueUpdateSchema<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateSchema']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateSchema']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueUpdateSchemaMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueUpdateSourceControlFromJobMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateSourceControlFromJob',
    '/#X-Amz-Target=AWSGlue.UpdateSourceControlFromJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueUpdateSourceControlFromJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateSourceControlFromJob']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateSourceControlFromJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueUpdateSourceControlFromJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.UpdateSourceControlFromJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.UpdateSourceControlFromJob'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueUpdateSourceControlFromJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.UpdateSourceControlFromJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.UpdateSourceControlFromJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueUpdateSourceControlFromJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueUpdateTableMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateTable',
    '/#X-Amz-Target=AWSGlue.UpdateTable',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueUpdateTableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateTable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateTable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueUpdateTableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateTable']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.UpdateTable'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueUpdateTable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateTable']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateTable']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueUpdateTableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueUpdateTriggerMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateTrigger',
    '/#X-Amz-Target=AWSGlue.UpdateTrigger',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueUpdateTriggerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateTrigger']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateTrigger']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueUpdateTriggerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateTrigger']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.UpdateTrigger'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueUpdateTrigger<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateTrigger']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateTrigger']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueUpdateTriggerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueUpdateUserDefinedFunctionMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateUserDefinedFunction',
    '/#X-Amz-Target=AWSGlue.UpdateUserDefinedFunction',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueUpdateUserDefinedFunctionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateUserDefinedFunction']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateUserDefinedFunction']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueUpdateUserDefinedFunctionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSGlue.UpdateUserDefinedFunction']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSGlue.UpdateUserDefinedFunction'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSGlueUpdateUserDefinedFunction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSGlue.UpdateUserDefinedFunction']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSGlue.UpdateUserDefinedFunction']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueUpdateUserDefinedFunctionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAWSGlueUpdateWorkflowMutationKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateWorkflow',
    '/#X-Amz-Target=AWSGlue.UpdateWorkflow',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSGlueUpdateWorkflowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateWorkflow']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateWorkflow']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSGlueUpdateWorkflowMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateWorkflow']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSGlue.UpdateWorkflow'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAWSGlueUpdateWorkflow<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateWorkflow']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateWorkflow']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSGlueUpdateWorkflowMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
