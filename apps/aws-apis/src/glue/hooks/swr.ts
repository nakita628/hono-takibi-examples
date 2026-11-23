import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetAWSGlueBatchCreatePartitionKey() {
  return [
    '#X-Amz-Target=AWSGlue.BatchCreatePartition',
    '/#X-Amz-Target=AWSGlue.BatchCreatePartition',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueBatchCreatePartition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchCreatePartition']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueBatchCreatePartitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.BatchCreatePartition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.BatchCreatePartition'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueBatchDeleteConnectionKey() {
  return [
    '#X-Amz-Target=AWSGlue.BatchDeleteConnection',
    '/#X-Amz-Target=AWSGlue.BatchDeleteConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueBatchDeleteConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchDeleteConnection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueBatchDeleteConnectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.BatchDeleteConnection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.BatchDeleteConnection'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueBatchDeletePartitionKey() {
  return [
    '#X-Amz-Target=AWSGlue.BatchDeletePartition',
    '/#X-Amz-Target=AWSGlue.BatchDeletePartition',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueBatchDeletePartition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchDeletePartition']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueBatchDeletePartitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.BatchDeletePartition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.BatchDeletePartition'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueBatchDeleteTableKey() {
  return [
    '#X-Amz-Target=AWSGlue.BatchDeleteTable',
    '/#X-Amz-Target=AWSGlue.BatchDeleteTable',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueBatchDeleteTable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchDeleteTable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchDeleteTable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueBatchDeleteTableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchDeleteTable']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSGlue.BatchDeleteTable'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueBatchDeleteTableVersionKey() {
  return [
    '#X-Amz-Target=AWSGlue.BatchDeleteTableVersion',
    '/#X-Amz-Target=AWSGlue.BatchDeleteTableVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueBatchDeleteTableVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchDeleteTableVersion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueBatchDeleteTableVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.BatchDeleteTableVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.BatchDeleteTableVersion'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueBatchGetBlueprintsKey() {
  return [
    '#X-Amz-Target=AWSGlue.BatchGetBlueprints',
    '/#X-Amz-Target=AWSGlue.BatchGetBlueprints',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueBatchGetBlueprints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetBlueprints']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetBlueprints']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueBatchGetBlueprintsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.BatchGetBlueprints']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSGlue.BatchGetBlueprints'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueBatchGetCrawlersKey() {
  return [
    '#X-Amz-Target=AWSGlue.BatchGetCrawlers',
    '/#X-Amz-Target=AWSGlue.BatchGetCrawlers',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueBatchGetCrawlers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetCrawlers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetCrawlers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueBatchGetCrawlersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetCrawlers']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSGlue.BatchGetCrawlers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueBatchGetCustomEntityTypesKey() {
  return [
    '#X-Amz-Target=AWSGlue.BatchGetCustomEntityTypes',
    '/#X-Amz-Target=AWSGlue.BatchGetCustomEntityTypes',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueBatchGetCustomEntityTypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetCustomEntityTypes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueBatchGetCustomEntityTypesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.BatchGetCustomEntityTypes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.BatchGetCustomEntityTypes'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueBatchGetDataQualityResultKey() {
  return [
    '#X-Amz-Target=AWSGlue.BatchGetDataQualityResult',
    '/#X-Amz-Target=AWSGlue.BatchGetDataQualityResult',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueBatchGetDataQualityResult<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetDataQualityResult']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueBatchGetDataQualityResultKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.BatchGetDataQualityResult']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.BatchGetDataQualityResult'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueBatchGetDevEndpointsKey() {
  return [
    '#X-Amz-Target=AWSGlue.BatchGetDevEndpoints',
    '/#X-Amz-Target=AWSGlue.BatchGetDevEndpoints',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueBatchGetDevEndpoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetDevEndpoints']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueBatchGetDevEndpointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.BatchGetDevEndpoints']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.BatchGetDevEndpoints'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueBatchGetJobsKey() {
  return [
    '#X-Amz-Target=AWSGlue.BatchGetJobs',
    '/#X-Amz-Target=AWSGlue.BatchGetJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueBatchGetJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetJobs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetJobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueBatchGetJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetJobs']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.BatchGetJobs'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueBatchGetPartitionKey() {
  return [
    '#X-Amz-Target=AWSGlue.BatchGetPartition',
    '/#X-Amz-Target=AWSGlue.BatchGetPartition',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueBatchGetPartition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetPartition']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetPartition']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueBatchGetPartitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetPartition']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSGlue.BatchGetPartition'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueBatchGetTriggersKey() {
  return [
    '#X-Amz-Target=AWSGlue.BatchGetTriggers',
    '/#X-Amz-Target=AWSGlue.BatchGetTriggers',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueBatchGetTriggers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetTriggers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetTriggers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueBatchGetTriggersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetTriggers']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSGlue.BatchGetTriggers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueBatchGetWorkflowsKey() {
  return [
    '#X-Amz-Target=AWSGlue.BatchGetWorkflows',
    '/#X-Amz-Target=AWSGlue.BatchGetWorkflows',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueBatchGetWorkflows<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetWorkflows']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetWorkflows']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueBatchGetWorkflowsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetWorkflows']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSGlue.BatchGetWorkflows'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueBatchStopJobRunKey() {
  return [
    '#X-Amz-Target=AWSGlue.BatchStopJobRun',
    '/#X-Amz-Target=AWSGlue.BatchStopJobRun',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueBatchStopJobRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.BatchStopJobRun']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchStopJobRun']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueBatchStopJobRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchStopJobRun']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.BatchStopJobRun'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueBatchUpdatePartitionKey() {
  return [
    '#X-Amz-Target=AWSGlue.BatchUpdatePartition',
    '/#X-Amz-Target=AWSGlue.BatchUpdatePartition',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueBatchUpdatePartition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchUpdatePartition']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueBatchUpdatePartitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.BatchUpdatePartition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.BatchUpdatePartition'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueCancelDataQualityRuleRecommendationRunKey() {
  return [
    '#X-Amz-Target=AWSGlue.CancelDataQualityRuleRecommendationRun',
    '/#X-Amz-Target=AWSGlue.CancelDataQualityRuleRecommendationRun',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueCancelDataQualityRuleRecommendationRun<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.CancelDataQualityRuleRecommendationRun']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueCancelDataQualityRuleRecommendationRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.CancelDataQualityRuleRecommendationRun']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.CancelDataQualityRuleRecommendationRun'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueCancelDataQualityRulesetEvaluationRunKey() {
  return [
    '#X-Amz-Target=AWSGlue.CancelDataQualityRulesetEvaluationRun',
    '/#X-Amz-Target=AWSGlue.CancelDataQualityRulesetEvaluationRun',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueCancelDataQualityRulesetEvaluationRun<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.CancelDataQualityRulesetEvaluationRun']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueCancelDataQualityRulesetEvaluationRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.CancelDataQualityRulesetEvaluationRun']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.CancelDataQualityRulesetEvaluationRun'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueCancelMLTaskRunKey() {
  return [
    '#X-Amz-Target=AWSGlue.CancelMLTaskRun',
    '/#X-Amz-Target=AWSGlue.CancelMLTaskRun',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueCancelMLTaskRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CancelMLTaskRun']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CancelMLTaskRun']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueCancelMLTaskRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CancelMLTaskRun']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.CancelMLTaskRun'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueCancelStatementKey() {
  return [
    '#X-Amz-Target=AWSGlue.CancelStatement',
    '/#X-Amz-Target=AWSGlue.CancelStatement',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueCancelStatement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CancelStatement']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CancelStatement']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueCancelStatementKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CancelStatement']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.CancelStatement'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueCheckSchemaVersionValidityKey() {
  return [
    '#X-Amz-Target=AWSGlue.CheckSchemaVersionValidity',
    '/#X-Amz-Target=AWSGlue.CheckSchemaVersionValidity',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueCheckSchemaVersionValidity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CheckSchemaVersionValidity']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueCheckSchemaVersionValidityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.CheckSchemaVersionValidity']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.CheckSchemaVersionValidity'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueCreateBlueprintKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateBlueprint',
    '/#X-Amz-Target=AWSGlue.CreateBlueprint',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueCreateBlueprint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateBlueprint']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateBlueprint']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueCreateBlueprintKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateBlueprint']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.CreateBlueprint'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueCreateClassifierKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateClassifier',
    '/#X-Amz-Target=AWSGlue.CreateClassifier',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueCreateClassifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateClassifier']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateClassifier']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueCreateClassifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateClassifier']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSGlue.CreateClassifier'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueCreateConnectionKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateConnection',
    '/#X-Amz-Target=AWSGlue.CreateConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueCreateConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateConnection']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateConnection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueCreateConnectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateConnection']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSGlue.CreateConnection'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueCreateCrawlerKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateCrawler',
    '/#X-Amz-Target=AWSGlue.CreateCrawler',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueCreateCrawler<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateCrawler']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateCrawler']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueCreateCrawlerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateCrawler']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.CreateCrawler'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueCreateCustomEntityTypeKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateCustomEntityType',
    '/#X-Amz-Target=AWSGlue.CreateCustomEntityType',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueCreateCustomEntityType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateCustomEntityType']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueCreateCustomEntityTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.CreateCustomEntityType']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.CreateCustomEntityType'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueCreateDataQualityRulesetKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateDataQualityRuleset',
    '/#X-Amz-Target=AWSGlue.CreateDataQualityRuleset',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueCreateDataQualityRuleset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateDataQualityRuleset']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueCreateDataQualityRulesetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.CreateDataQualityRuleset']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.CreateDataQualityRuleset'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueCreateDatabaseKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateDatabase',
    '/#X-Amz-Target=AWSGlue.CreateDatabase',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueCreateDatabase<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateDatabase']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateDatabase']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueCreateDatabaseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateDatabase']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.CreateDatabase'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueCreateDevEndpointKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateDevEndpoint',
    '/#X-Amz-Target=AWSGlue.CreateDevEndpoint',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueCreateDevEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateDevEndpoint']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateDevEndpoint']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueCreateDevEndpointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateDevEndpoint']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSGlue.CreateDevEndpoint'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueCreateJobKey() {
  return ['#X-Amz-Target=AWSGlue.CreateJob', '/#X-Amz-Target=AWSGlue.CreateJob', 'POST'] as const
}

export function usePostXAmzTargetAWSGlueCreateJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateJob']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueCreateJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateJob']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.CreateJob'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueCreateMLTransformKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateMLTransform',
    '/#X-Amz-Target=AWSGlue.CreateMLTransform',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueCreateMLTransform<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateMLTransform']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateMLTransform']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueCreateMLTransformKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateMLTransform']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSGlue.CreateMLTransform'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueCreatePartitionKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreatePartition',
    '/#X-Amz-Target=AWSGlue.CreatePartition',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueCreatePartition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreatePartition']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreatePartition']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueCreatePartitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreatePartition']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.CreatePartition'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueCreatePartitionIndexKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreatePartitionIndex',
    '/#X-Amz-Target=AWSGlue.CreatePartitionIndex',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueCreatePartitionIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreatePartitionIndex']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueCreatePartitionIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.CreatePartitionIndex']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.CreatePartitionIndex'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueCreateRegistryKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateRegistry',
    '/#X-Amz-Target=AWSGlue.CreateRegistry',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueCreateRegistry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateRegistry']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateRegistry']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueCreateRegistryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateRegistry']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.CreateRegistry'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueCreateSchemaKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateSchema',
    '/#X-Amz-Target=AWSGlue.CreateSchema',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueCreateSchema<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateSchema']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateSchema']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueCreateSchemaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateSchema']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.CreateSchema'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueCreateScriptKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateScript',
    '/#X-Amz-Target=AWSGlue.CreateScript',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueCreateScript<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateScript']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateScript']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueCreateScriptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateScript']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.CreateScript'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueCreateSecurityConfigurationKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateSecurityConfiguration',
    '/#X-Amz-Target=AWSGlue.CreateSecurityConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueCreateSecurityConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateSecurityConfiguration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueCreateSecurityConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.CreateSecurityConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.CreateSecurityConfiguration'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueCreateSessionKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateSession',
    '/#X-Amz-Target=AWSGlue.CreateSession',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueCreateSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateSession']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateSession']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueCreateSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateSession']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.CreateSession'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueCreateTableKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateTable',
    '/#X-Amz-Target=AWSGlue.CreateTable',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueCreateTable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateTable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateTable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueCreateTableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateTable']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.CreateTable'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueCreateTriggerKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateTrigger',
    '/#X-Amz-Target=AWSGlue.CreateTrigger',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueCreateTrigger<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateTrigger']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateTrigger']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueCreateTriggerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateTrigger']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.CreateTrigger'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueCreateUserDefinedFunctionKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateUserDefinedFunction',
    '/#X-Amz-Target=AWSGlue.CreateUserDefinedFunction',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueCreateUserDefinedFunction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateUserDefinedFunction']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueCreateUserDefinedFunctionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.CreateUserDefinedFunction']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.CreateUserDefinedFunction'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueCreateWorkflowKey() {
  return [
    '#X-Amz-Target=AWSGlue.CreateWorkflow',
    '/#X-Amz-Target=AWSGlue.CreateWorkflow',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueCreateWorkflow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.CreateWorkflow']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateWorkflow']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueCreateWorkflowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateWorkflow']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.CreateWorkflow'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueDeleteBlueprintKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteBlueprint',
    '/#X-Amz-Target=AWSGlue.DeleteBlueprint',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueDeleteBlueprint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteBlueprint']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteBlueprint']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueDeleteBlueprintKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteBlueprint']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.DeleteBlueprint'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueDeleteClassifierKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteClassifier',
    '/#X-Amz-Target=AWSGlue.DeleteClassifier',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueDeleteClassifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteClassifier']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteClassifier']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueDeleteClassifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteClassifier']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSGlue.DeleteClassifier'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueDeleteColumnStatisticsForPartitionKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForPartition',
    '/#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForPartition',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueDeleteColumnStatisticsForPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForPartition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueDeleteColumnStatisticsForPartitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForPartition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForPartition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueDeleteColumnStatisticsForTableKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForTable',
    '/#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForTable',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueDeleteColumnStatisticsForTable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForTable']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueDeleteColumnStatisticsForTableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForTable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForTable'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueDeleteConnectionKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteConnection',
    '/#X-Amz-Target=AWSGlue.DeleteConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueDeleteConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteConnection']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteConnection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueDeleteConnectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteConnection']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSGlue.DeleteConnection'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueDeleteCrawlerKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteCrawler',
    '/#X-Amz-Target=AWSGlue.DeleteCrawler',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueDeleteCrawler<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteCrawler']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteCrawler']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueDeleteCrawlerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteCrawler']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.DeleteCrawler'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueDeleteCustomEntityTypeKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteCustomEntityType',
    '/#X-Amz-Target=AWSGlue.DeleteCustomEntityType',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueDeleteCustomEntityType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteCustomEntityType']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueDeleteCustomEntityTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.DeleteCustomEntityType']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.DeleteCustomEntityType'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueDeleteDataQualityRulesetKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteDataQualityRuleset',
    '/#X-Amz-Target=AWSGlue.DeleteDataQualityRuleset',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueDeleteDataQualityRuleset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteDataQualityRuleset']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueDeleteDataQualityRulesetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.DeleteDataQualityRuleset']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.DeleteDataQualityRuleset'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueDeleteDatabaseKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteDatabase',
    '/#X-Amz-Target=AWSGlue.DeleteDatabase',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueDeleteDatabase<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteDatabase']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteDatabase']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueDeleteDatabaseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteDatabase']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.DeleteDatabase'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueDeleteDevEndpointKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteDevEndpoint',
    '/#X-Amz-Target=AWSGlue.DeleteDevEndpoint',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueDeleteDevEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteDevEndpoint']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteDevEndpoint']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueDeleteDevEndpointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteDevEndpoint']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSGlue.DeleteDevEndpoint'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueDeleteJobKey() {
  return ['#X-Amz-Target=AWSGlue.DeleteJob', '/#X-Amz-Target=AWSGlue.DeleteJob', 'POST'] as const
}

export function usePostXAmzTargetAWSGlueDeleteJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteJob']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueDeleteJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteJob']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.DeleteJob'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueDeleteMLTransformKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteMLTransform',
    '/#X-Amz-Target=AWSGlue.DeleteMLTransform',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueDeleteMLTransform<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteMLTransform']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteMLTransform']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueDeleteMLTransformKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteMLTransform']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSGlue.DeleteMLTransform'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueDeletePartitionKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeletePartition',
    '/#X-Amz-Target=AWSGlue.DeletePartition',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueDeletePartition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeletePartition']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeletePartition']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueDeletePartitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeletePartition']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.DeletePartition'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueDeletePartitionIndexKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeletePartitionIndex',
    '/#X-Amz-Target=AWSGlue.DeletePartitionIndex',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueDeletePartitionIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeletePartitionIndex']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueDeletePartitionIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.DeletePartitionIndex']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.DeletePartitionIndex'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueDeleteRegistryKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteRegistry',
    '/#X-Amz-Target=AWSGlue.DeleteRegistry',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueDeleteRegistry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteRegistry']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteRegistry']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueDeleteRegistryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteRegistry']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.DeleteRegistry'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueDeleteResourcePolicyKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteResourcePolicy',
    '/#X-Amz-Target=AWSGlue.DeleteResourcePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueDeleteResourcePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteResourcePolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueDeleteResourcePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.DeleteResourcePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.DeleteResourcePolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueDeleteSchemaKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteSchema',
    '/#X-Amz-Target=AWSGlue.DeleteSchema',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueDeleteSchema<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteSchema']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteSchema']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueDeleteSchemaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteSchema']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.DeleteSchema'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueDeleteSchemaVersionsKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteSchemaVersions',
    '/#X-Amz-Target=AWSGlue.DeleteSchemaVersions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueDeleteSchemaVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteSchemaVersions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueDeleteSchemaVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.DeleteSchemaVersions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.DeleteSchemaVersions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueDeleteSecurityConfigurationKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteSecurityConfiguration',
    '/#X-Amz-Target=AWSGlue.DeleteSecurityConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueDeleteSecurityConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteSecurityConfiguration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueDeleteSecurityConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.DeleteSecurityConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.DeleteSecurityConfiguration'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueDeleteSessionKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteSession',
    '/#X-Amz-Target=AWSGlue.DeleteSession',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueDeleteSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteSession']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteSession']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueDeleteSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteSession']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.DeleteSession'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueDeleteTableKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteTable',
    '/#X-Amz-Target=AWSGlue.DeleteTable',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueDeleteTable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteTable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteTable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueDeleteTableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteTable']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.DeleteTable'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueDeleteTableVersionKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteTableVersion',
    '/#X-Amz-Target=AWSGlue.DeleteTableVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueDeleteTableVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteTableVersion']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteTableVersion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueDeleteTableVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.DeleteTableVersion']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSGlue.DeleteTableVersion'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueDeleteTriggerKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteTrigger',
    '/#X-Amz-Target=AWSGlue.DeleteTrigger',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueDeleteTrigger<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteTrigger']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteTrigger']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueDeleteTriggerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteTrigger']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.DeleteTrigger'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueDeleteUserDefinedFunctionKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteUserDefinedFunction',
    '/#X-Amz-Target=AWSGlue.DeleteUserDefinedFunction',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueDeleteUserDefinedFunction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteUserDefinedFunction']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueDeleteUserDefinedFunctionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.DeleteUserDefinedFunction']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.DeleteUserDefinedFunction'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueDeleteWorkflowKey() {
  return [
    '#X-Amz-Target=AWSGlue.DeleteWorkflow',
    '/#X-Amz-Target=AWSGlue.DeleteWorkflow',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueDeleteWorkflow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteWorkflow']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteWorkflow']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueDeleteWorkflowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteWorkflow']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.DeleteWorkflow'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetBlueprintKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetBlueprint',
    '/#X-Amz-Target=AWSGlue.GetBlueprint',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetBlueprint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetBlueprint']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetBlueprint']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetBlueprintKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetBlueprint']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetBlueprint'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetBlueprintRunKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetBlueprintRun',
    '/#X-Amz-Target=AWSGlue.GetBlueprintRun',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetBlueprintRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetBlueprintRun']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetBlueprintRun']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetBlueprintRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetBlueprintRun']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetBlueprintRun'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetBlueprintRunsKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetBlueprintRuns',
    '/#X-Amz-Target=AWSGlue.GetBlueprintRuns',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetBlueprintRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetBlueprintRuns']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetBlueprintRuns']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetBlueprintRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetBlueprintRuns']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSGlue.GetBlueprintRuns'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetCatalogImportStatusKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetCatalogImportStatus',
    '/#X-Amz-Target=AWSGlue.GetCatalogImportStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetCatalogImportStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetCatalogImportStatus']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetCatalogImportStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.GetCatalogImportStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.GetCatalogImportStatus'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetClassifierKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetClassifier',
    '/#X-Amz-Target=AWSGlue.GetClassifier',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetClassifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetClassifier']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetClassifier']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetClassifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetClassifier']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetClassifier'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetClassifiersKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetClassifiers',
    '/#X-Amz-Target=AWSGlue.GetClassifiers',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetClassifiers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetClassifiers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetClassifiers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetClassifiersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetClassifiers']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetClassifiers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetColumnStatisticsForPartitionKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetColumnStatisticsForPartition',
    '/#X-Amz-Target=AWSGlue.GetColumnStatisticsForPartition',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetColumnStatisticsForPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.GetColumnStatisticsForPartition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetColumnStatisticsForPartitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.GetColumnStatisticsForPartition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.GetColumnStatisticsForPartition'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetColumnStatisticsForTableKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetColumnStatisticsForTable',
    '/#X-Amz-Target=AWSGlue.GetColumnStatisticsForTable',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetColumnStatisticsForTable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetColumnStatisticsForTable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetColumnStatisticsForTableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.GetColumnStatisticsForTable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.GetColumnStatisticsForTable'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetConnectionKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetConnection',
    '/#X-Amz-Target=AWSGlue.GetConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetConnection']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetConnection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetConnectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetConnection']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetConnection'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetConnectionsKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetConnections',
    '/#X-Amz-Target=AWSGlue.GetConnections',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetConnections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetConnections']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetConnections']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetConnectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetConnections']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetConnections'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetCrawlerKey() {
  return ['#X-Amz-Target=AWSGlue.GetCrawler', '/#X-Amz-Target=AWSGlue.GetCrawler', 'POST'] as const
}

export function usePostXAmzTargetAWSGlueGetCrawler<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetCrawler']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetCrawler']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetCrawlerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetCrawler']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetCrawler'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetCrawlerMetricsKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetCrawlerMetrics',
    '/#X-Amz-Target=AWSGlue.GetCrawlerMetrics',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetCrawlerMetrics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetCrawlerMetrics']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetCrawlerMetrics']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetCrawlerMetricsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetCrawlerMetrics']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSGlue.GetCrawlerMetrics'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetCrawlersKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetCrawlers',
    '/#X-Amz-Target=AWSGlue.GetCrawlers',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetCrawlers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetCrawlers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetCrawlers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetCrawlersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetCrawlers']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetCrawlers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetCustomEntityTypeKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetCustomEntityType',
    '/#X-Amz-Target=AWSGlue.GetCustomEntityType',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetCustomEntityType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetCustomEntityType']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetCustomEntityType']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetCustomEntityTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.GetCustomEntityType']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.GetCustomEntityType'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetDataCatalogEncryptionSettingsKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetDataCatalogEncryptionSettings',
    '/#X-Amz-Target=AWSGlue.GetDataCatalogEncryptionSettings',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetDataCatalogEncryptionSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.GetDataCatalogEncryptionSettings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetDataCatalogEncryptionSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.GetDataCatalogEncryptionSettings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.GetDataCatalogEncryptionSettings'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetDataQualityResultKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetDataQualityResult',
    '/#X-Amz-Target=AWSGlue.GetDataQualityResult',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetDataQualityResult<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDataQualityResult']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetDataQualityResultKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.GetDataQualityResult']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.GetDataQualityResult'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetDataQualityRuleRecommendationRunKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetDataQualityRuleRecommendationRun',
    '/#X-Amz-Target=AWSGlue.GetDataQualityRuleRecommendationRun',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetDataQualityRuleRecommendationRun<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.GetDataQualityRuleRecommendationRun']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetDataQualityRuleRecommendationRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.GetDataQualityRuleRecommendationRun']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.GetDataQualityRuleRecommendationRun'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetDataQualityRulesetKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetDataQualityRuleset',
    '/#X-Amz-Target=AWSGlue.GetDataQualityRuleset',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetDataQualityRuleset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDataQualityRuleset']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetDataQualityRulesetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.GetDataQualityRuleset']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.GetDataQualityRuleset'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetDataQualityRulesetEvaluationRunKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetDataQualityRulesetEvaluationRun',
    '/#X-Amz-Target=AWSGlue.GetDataQualityRulesetEvaluationRun',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetDataQualityRulesetEvaluationRun<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.GetDataQualityRulesetEvaluationRun']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetDataQualityRulesetEvaluationRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.GetDataQualityRulesetEvaluationRun']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.GetDataQualityRulesetEvaluationRun'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetDatabaseKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetDatabase',
    '/#X-Amz-Target=AWSGlue.GetDatabase',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetDatabase<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetDatabase']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDatabase']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetDatabaseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDatabase']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetDatabase'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetDatabasesKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetDatabases',
    '/#X-Amz-Target=AWSGlue.GetDatabases',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetDatabases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetDatabases']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDatabases']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetDatabasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDatabases']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetDatabases'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetDataflowGraphKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetDataflowGraph',
    '/#X-Amz-Target=AWSGlue.GetDataflowGraph',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetDataflowGraph<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetDataflowGraph']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDataflowGraph']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetDataflowGraphKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDataflowGraph']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSGlue.GetDataflowGraph'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetDevEndpointKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetDevEndpoint',
    '/#X-Amz-Target=AWSGlue.GetDevEndpoint',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetDevEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetDevEndpoint']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDevEndpoint']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetDevEndpointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDevEndpoint']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetDevEndpoint'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetDevEndpointsKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetDevEndpoints',
    '/#X-Amz-Target=AWSGlue.GetDevEndpoints',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetDevEndpoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetDevEndpoints']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDevEndpoints']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetDevEndpointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDevEndpoints']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetDevEndpoints'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetJobKey() {
  return ['#X-Amz-Target=AWSGlue.GetJob', '/#X-Amz-Target=AWSGlue.GetJob', 'POST'] as const
}

export function usePostXAmzTargetAWSGlueGetJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetJob']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetJob']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetJob'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetJobBookmarkKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetJobBookmark',
    '/#X-Amz-Target=AWSGlue.GetJobBookmark',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetJobBookmark<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobBookmark']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobBookmark']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetJobBookmarkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobBookmark']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetJobBookmark'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetJobRunKey() {
  return ['#X-Amz-Target=AWSGlue.GetJobRun', '/#X-Amz-Target=AWSGlue.GetJobRun', 'POST'] as const
}

export function usePostXAmzTargetAWSGlueGetJobRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobRun']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobRun']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetJobRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobRun']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetJobRun'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetJobRunsKey() {
  return ['#X-Amz-Target=AWSGlue.GetJobRuns', '/#X-Amz-Target=AWSGlue.GetJobRuns', 'POST'] as const
}

export function usePostXAmzTargetAWSGlueGetJobRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobRuns']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobRuns']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetJobRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobRuns']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetJobRuns'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetJobsKey() {
  return ['#X-Amz-Target=AWSGlue.GetJobs', '/#X-Amz-Target=AWSGlue.GetJobs', 'POST'] as const
}

export function usePostXAmzTargetAWSGlueGetJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobs']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetJobs'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetMLTaskRunKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetMLTaskRun',
    '/#X-Amz-Target=AWSGlue.GetMLTaskRun',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetMLTaskRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTaskRun']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTaskRun']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetMLTaskRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTaskRun']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetMLTaskRun'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetMLTaskRunsKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetMLTaskRuns',
    '/#X-Amz-Target=AWSGlue.GetMLTaskRuns',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetMLTaskRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTaskRuns']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTaskRuns']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetMLTaskRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTaskRuns']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetMLTaskRuns'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetMLTransformKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetMLTransform',
    '/#X-Amz-Target=AWSGlue.GetMLTransform',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetMLTransform<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTransform']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTransform']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetMLTransformKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTransform']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetMLTransform'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetMLTransformsKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetMLTransforms',
    '/#X-Amz-Target=AWSGlue.GetMLTransforms',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetMLTransforms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTransforms']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTransforms']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetMLTransformsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTransforms']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetMLTransforms'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetMappingKey() {
  return ['#X-Amz-Target=AWSGlue.GetMapping', '/#X-Amz-Target=AWSGlue.GetMapping', 'POST'] as const
}

export function usePostXAmzTargetAWSGlueGetMapping<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetMapping']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetMapping']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetMappingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetMapping']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetMapping'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetPartitionKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetPartition',
    '/#X-Amz-Target=AWSGlue.GetPartition',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetPartition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetPartition']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetPartition']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetPartitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetPartition']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetPartition'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetPartitionIndexesKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetPartitionIndexes',
    '/#X-Amz-Target=AWSGlue.GetPartitionIndexes',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetPartitionIndexes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetPartitionIndexes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetPartitionIndexes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetPartitionIndexesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.GetPartitionIndexes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.GetPartitionIndexes'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetPartitionsKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetPartitions',
    '/#X-Amz-Target=AWSGlue.GetPartitions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetPartitions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetPartitions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetPartitions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetPartitionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetPartitions']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetPartitions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetPlanKey() {
  return ['#X-Amz-Target=AWSGlue.GetPlan', '/#X-Amz-Target=AWSGlue.GetPlan', 'POST'] as const
}

export function usePostXAmzTargetAWSGlueGetPlan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetPlan']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetPlan']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetPlanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetPlan']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetPlan'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetRegistryKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetRegistry',
    '/#X-Amz-Target=AWSGlue.GetRegistry',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetRegistry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetRegistry']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetRegistry']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetRegistryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetRegistry']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetRegistry'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetResourcePoliciesKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetResourcePolicies',
    '/#X-Amz-Target=AWSGlue.GetResourcePolicies',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetResourcePolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetResourcePolicies']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetResourcePolicies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetResourcePoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.GetResourcePolicies']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.GetResourcePolicies'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetResourcePolicyKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetResourcePolicy',
    '/#X-Amz-Target=AWSGlue.GetResourcePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetResourcePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetResourcePolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetResourcePolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetResourcePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetResourcePolicy']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSGlue.GetResourcePolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetSchemaKey() {
  return ['#X-Amz-Target=AWSGlue.GetSchema', '/#X-Amz-Target=AWSGlue.GetSchema', 'POST'] as const
}

export function usePostXAmzTargetAWSGlueGetSchema<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetSchema']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetSchema']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetSchemaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetSchema']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetSchema'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetSchemaByDefinitionKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetSchemaByDefinition',
    '/#X-Amz-Target=AWSGlue.GetSchemaByDefinition',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetSchemaByDefinition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetSchemaByDefinition']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetSchemaByDefinitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.GetSchemaByDefinition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.GetSchemaByDefinition'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetSchemaVersionKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetSchemaVersion',
    '/#X-Amz-Target=AWSGlue.GetSchemaVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetSchemaVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetSchemaVersion']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetSchemaVersion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetSchemaVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetSchemaVersion']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSGlue.GetSchemaVersion'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetSchemaVersionsDiffKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetSchemaVersionsDiff',
    '/#X-Amz-Target=AWSGlue.GetSchemaVersionsDiff',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetSchemaVersionsDiff<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetSchemaVersionsDiff']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetSchemaVersionsDiffKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.GetSchemaVersionsDiff']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.GetSchemaVersionsDiff'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetSecurityConfigurationKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetSecurityConfiguration',
    '/#X-Amz-Target=AWSGlue.GetSecurityConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetSecurityConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetSecurityConfiguration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetSecurityConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.GetSecurityConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.GetSecurityConfiguration'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetSecurityConfigurationsKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetSecurityConfigurations',
    '/#X-Amz-Target=AWSGlue.GetSecurityConfigurations',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetSecurityConfigurations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetSecurityConfigurations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetSecurityConfigurationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.GetSecurityConfigurations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.GetSecurityConfigurations'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetSessionKey() {
  return ['#X-Amz-Target=AWSGlue.GetSession', '/#X-Amz-Target=AWSGlue.GetSession', 'POST'] as const
}

export function usePostXAmzTargetAWSGlueGetSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetSession']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetSession']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetSession']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetSession'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetStatementKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetStatement',
    '/#X-Amz-Target=AWSGlue.GetStatement',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetStatement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetStatement']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetStatement']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetStatementKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetStatement']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetStatement'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetTableKey() {
  return ['#X-Amz-Target=AWSGlue.GetTable', '/#X-Amz-Target=AWSGlue.GetTable', 'POST'] as const
}

export function usePostXAmzTargetAWSGlueGetTable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetTable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetTableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTable']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetTable'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetTableVersionKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetTableVersion',
    '/#X-Amz-Target=AWSGlue.GetTableVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetTableVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetTableVersion']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTableVersion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetTableVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTableVersion']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetTableVersion'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetTableVersionsKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetTableVersions',
    '/#X-Amz-Target=AWSGlue.GetTableVersions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetTableVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetTableVersions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTableVersions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetTableVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTableVersions']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSGlue.GetTableVersions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetTablesKey() {
  return ['#X-Amz-Target=AWSGlue.GetTables', '/#X-Amz-Target=AWSGlue.GetTables', 'POST'] as const
}

export function usePostXAmzTargetAWSGlueGetTables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetTables']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTables']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetTablesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTables']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetTables'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetTagsKey() {
  return ['#X-Amz-Target=AWSGlue.GetTags', '/#X-Amz-Target=AWSGlue.GetTags', 'POST'] as const
}

export function usePostXAmzTargetAWSGlueGetTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetTags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTags']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetTags'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetTriggerKey() {
  return ['#X-Amz-Target=AWSGlue.GetTrigger', '/#X-Amz-Target=AWSGlue.GetTrigger', 'POST'] as const
}

export function usePostXAmzTargetAWSGlueGetTrigger<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetTrigger']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTrigger']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetTriggerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTrigger']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetTrigger'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetTriggersKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetTriggers',
    '/#X-Amz-Target=AWSGlue.GetTriggers',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetTriggers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetTriggers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTriggers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetTriggersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTriggers']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetTriggers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetUnfilteredPartitionMetadataKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetUnfilteredPartitionMetadata',
    '/#X-Amz-Target=AWSGlue.GetUnfilteredPartitionMetadata',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetUnfilteredPartitionMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.GetUnfilteredPartitionMetadata']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetUnfilteredPartitionMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.GetUnfilteredPartitionMetadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.GetUnfilteredPartitionMetadata'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetUnfilteredPartitionsMetadataKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetUnfilteredPartitionsMetadata',
    '/#X-Amz-Target=AWSGlue.GetUnfilteredPartitionsMetadata',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetUnfilteredPartitionsMetadata<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.GetUnfilteredPartitionsMetadata']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetUnfilteredPartitionsMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.GetUnfilteredPartitionsMetadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.GetUnfilteredPartitionsMetadata'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetUnfilteredTableMetadataKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetUnfilteredTableMetadata',
    '/#X-Amz-Target=AWSGlue.GetUnfilteredTableMetadata',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetUnfilteredTableMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetUnfilteredTableMetadata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetUnfilteredTableMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.GetUnfilteredTableMetadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.GetUnfilteredTableMetadata'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetUserDefinedFunctionKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetUserDefinedFunction',
    '/#X-Amz-Target=AWSGlue.GetUserDefinedFunction',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetUserDefinedFunction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetUserDefinedFunction']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetUserDefinedFunctionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.GetUserDefinedFunction']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.GetUserDefinedFunction'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetUserDefinedFunctionsKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetUserDefinedFunctions',
    '/#X-Amz-Target=AWSGlue.GetUserDefinedFunctions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetUserDefinedFunctions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetUserDefinedFunctions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetUserDefinedFunctionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.GetUserDefinedFunctions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.GetUserDefinedFunctions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetWorkflowKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetWorkflow',
    '/#X-Amz-Target=AWSGlue.GetWorkflow',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetWorkflow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetWorkflow']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetWorkflow']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetWorkflowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetWorkflow']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetWorkflow'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetWorkflowRunKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetWorkflowRun',
    '/#X-Amz-Target=AWSGlue.GetWorkflowRun',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetWorkflowRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetWorkflowRun']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetWorkflowRun']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetWorkflowRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetWorkflowRun']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetWorkflowRun'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetWorkflowRunPropertiesKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetWorkflowRunProperties',
    '/#X-Amz-Target=AWSGlue.GetWorkflowRunProperties',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetWorkflowRunProperties<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetWorkflowRunProperties']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetWorkflowRunPropertiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.GetWorkflowRunProperties']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.GetWorkflowRunProperties'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueGetWorkflowRunsKey() {
  return [
    '#X-Amz-Target=AWSGlue.GetWorkflowRuns',
    '/#X-Amz-Target=AWSGlue.GetWorkflowRuns',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueGetWorkflowRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.GetWorkflowRuns']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetWorkflowRuns']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueGetWorkflowRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetWorkflowRuns']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.GetWorkflowRuns'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueImportCatalogToGlueKey() {
  return [
    '#X-Amz-Target=AWSGlue.ImportCatalogToGlue',
    '/#X-Amz-Target=AWSGlue.ImportCatalogToGlue',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueImportCatalogToGlue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ImportCatalogToGlue']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ImportCatalogToGlue']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueImportCatalogToGlueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.ImportCatalogToGlue']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.ImportCatalogToGlue'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueListBlueprintsKey() {
  return [
    '#X-Amz-Target=AWSGlue.ListBlueprints',
    '/#X-Amz-Target=AWSGlue.ListBlueprints',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueListBlueprints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListBlueprints']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListBlueprints']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueListBlueprintsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListBlueprints']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.ListBlueprints'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueListCrawlersKey() {
  return [
    '#X-Amz-Target=AWSGlue.ListCrawlers',
    '/#X-Amz-Target=AWSGlue.ListCrawlers',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueListCrawlers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListCrawlers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListCrawlers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueListCrawlersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListCrawlers']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.ListCrawlers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueListCrawlsKey() {
  return ['#X-Amz-Target=AWSGlue.ListCrawls', '/#X-Amz-Target=AWSGlue.ListCrawls', 'POST'] as const
}

export function usePostXAmzTargetAWSGlueListCrawls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListCrawls']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListCrawls']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueListCrawlsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListCrawls']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.ListCrawls'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueListCustomEntityTypesKey() {
  return [
    '#X-Amz-Target=AWSGlue.ListCustomEntityTypes',
    '/#X-Amz-Target=AWSGlue.ListCustomEntityTypes',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueListCustomEntityTypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListCustomEntityTypes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueListCustomEntityTypesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.ListCustomEntityTypes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.ListCustomEntityTypes'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueListDataQualityResultsKey() {
  return [
    '#X-Amz-Target=AWSGlue.ListDataQualityResults',
    '/#X-Amz-Target=AWSGlue.ListDataQualityResults',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueListDataQualityResults<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListDataQualityResults']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueListDataQualityResultsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.ListDataQualityResults']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.ListDataQualityResults'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueListDataQualityRuleRecommendationRunsKey() {
  return [
    '#X-Amz-Target=AWSGlue.ListDataQualityRuleRecommendationRuns',
    '/#X-Amz-Target=AWSGlue.ListDataQualityRuleRecommendationRuns',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueListDataQualityRuleRecommendationRuns<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.ListDataQualityRuleRecommendationRuns']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueListDataQualityRuleRecommendationRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.ListDataQualityRuleRecommendationRuns']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.ListDataQualityRuleRecommendationRuns'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueListDataQualityRulesetEvaluationRunsKey() {
  return [
    '#X-Amz-Target=AWSGlue.ListDataQualityRulesetEvaluationRuns',
    '/#X-Amz-Target=AWSGlue.ListDataQualityRulesetEvaluationRuns',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueListDataQualityRulesetEvaluationRuns<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.ListDataQualityRulesetEvaluationRuns']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueListDataQualityRulesetEvaluationRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.ListDataQualityRulesetEvaluationRuns']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.ListDataQualityRulesetEvaluationRuns'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueListDataQualityRulesetsKey() {
  return [
    '#X-Amz-Target=AWSGlue.ListDataQualityRulesets',
    '/#X-Amz-Target=AWSGlue.ListDataQualityRulesets',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueListDataQualityRulesets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListDataQualityRulesets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueListDataQualityRulesetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.ListDataQualityRulesets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.ListDataQualityRulesets'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueListDevEndpointsKey() {
  return [
    '#X-Amz-Target=AWSGlue.ListDevEndpoints',
    '/#X-Amz-Target=AWSGlue.ListDevEndpoints',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueListDevEndpoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListDevEndpoints']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListDevEndpoints']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueListDevEndpointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListDevEndpoints']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSGlue.ListDevEndpoints'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueListJobsKey() {
  return ['#X-Amz-Target=AWSGlue.ListJobs', '/#X-Amz-Target=AWSGlue.ListJobs', 'POST'] as const
}

export function usePostXAmzTargetAWSGlueListJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListJobs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListJobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueListJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListJobs']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.ListJobs'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueListMLTransformsKey() {
  return [
    '#X-Amz-Target=AWSGlue.ListMLTransforms',
    '/#X-Amz-Target=AWSGlue.ListMLTransforms',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueListMLTransforms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListMLTransforms']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListMLTransforms']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueListMLTransformsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListMLTransforms']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSGlue.ListMLTransforms'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueListRegistriesKey() {
  return [
    '#X-Amz-Target=AWSGlue.ListRegistries',
    '/#X-Amz-Target=AWSGlue.ListRegistries',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueListRegistries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListRegistries']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListRegistries']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueListRegistriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListRegistries']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.ListRegistries'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueListSchemaVersionsKey() {
  return [
    '#X-Amz-Target=AWSGlue.ListSchemaVersions',
    '/#X-Amz-Target=AWSGlue.ListSchemaVersions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueListSchemaVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListSchemaVersions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListSchemaVersions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueListSchemaVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.ListSchemaVersions']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSGlue.ListSchemaVersions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueListSchemasKey() {
  return [
    '#X-Amz-Target=AWSGlue.ListSchemas',
    '/#X-Amz-Target=AWSGlue.ListSchemas',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueListSchemas<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListSchemas']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListSchemas']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueListSchemasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListSchemas']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.ListSchemas'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueListSessionsKey() {
  return [
    '#X-Amz-Target=AWSGlue.ListSessions',
    '/#X-Amz-Target=AWSGlue.ListSessions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueListSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListSessions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListSessions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueListSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListSessions']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.ListSessions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueListStatementsKey() {
  return [
    '#X-Amz-Target=AWSGlue.ListStatements',
    '/#X-Amz-Target=AWSGlue.ListStatements',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueListStatements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListStatements']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListStatements']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueListStatementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListStatements']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.ListStatements'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueListTriggersKey() {
  return [
    '#X-Amz-Target=AWSGlue.ListTriggers',
    '/#X-Amz-Target=AWSGlue.ListTriggers',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueListTriggers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListTriggers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListTriggers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueListTriggersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListTriggers']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.ListTriggers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueListWorkflowsKey() {
  return [
    '#X-Amz-Target=AWSGlue.ListWorkflows',
    '/#X-Amz-Target=AWSGlue.ListWorkflows',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueListWorkflows<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ListWorkflows']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListWorkflows']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueListWorkflowsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListWorkflows']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.ListWorkflows'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGluePutDataCatalogEncryptionSettingsKey() {
  return [
    '#X-Amz-Target=AWSGlue.PutDataCatalogEncryptionSettings',
    '/#X-Amz-Target=AWSGlue.PutDataCatalogEncryptionSettings',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGluePutDataCatalogEncryptionSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.PutDataCatalogEncryptionSettings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGluePutDataCatalogEncryptionSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.PutDataCatalogEncryptionSettings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.PutDataCatalogEncryptionSettings'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGluePutResourcePolicyKey() {
  return [
    '#X-Amz-Target=AWSGlue.PutResourcePolicy',
    '/#X-Amz-Target=AWSGlue.PutResourcePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGluePutResourcePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.PutResourcePolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.PutResourcePolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGluePutResourcePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.PutResourcePolicy']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSGlue.PutResourcePolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGluePutSchemaVersionMetadataKey() {
  return [
    '#X-Amz-Target=AWSGlue.PutSchemaVersionMetadata',
    '/#X-Amz-Target=AWSGlue.PutSchemaVersionMetadata',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGluePutSchemaVersionMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.PutSchemaVersionMetadata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGluePutSchemaVersionMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.PutSchemaVersionMetadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.PutSchemaVersionMetadata'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGluePutWorkflowRunPropertiesKey() {
  return [
    '#X-Amz-Target=AWSGlue.PutWorkflowRunProperties',
    '/#X-Amz-Target=AWSGlue.PutWorkflowRunProperties',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGluePutWorkflowRunProperties<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.PutWorkflowRunProperties']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGluePutWorkflowRunPropertiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.PutWorkflowRunProperties']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.PutWorkflowRunProperties'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueQuerySchemaVersionMetadataKey() {
  return [
    '#X-Amz-Target=AWSGlue.QuerySchemaVersionMetadata',
    '/#X-Amz-Target=AWSGlue.QuerySchemaVersionMetadata',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueQuerySchemaVersionMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.QuerySchemaVersionMetadata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueQuerySchemaVersionMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.QuerySchemaVersionMetadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.QuerySchemaVersionMetadata'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueRegisterSchemaVersionKey() {
  return [
    '#X-Amz-Target=AWSGlue.RegisterSchemaVersion',
    '/#X-Amz-Target=AWSGlue.RegisterSchemaVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueRegisterSchemaVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.RegisterSchemaVersion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueRegisterSchemaVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.RegisterSchemaVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.RegisterSchemaVersion'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueRemoveSchemaVersionMetadataKey() {
  return [
    '#X-Amz-Target=AWSGlue.RemoveSchemaVersionMetadata',
    '/#X-Amz-Target=AWSGlue.RemoveSchemaVersionMetadata',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueRemoveSchemaVersionMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.RemoveSchemaVersionMetadata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueRemoveSchemaVersionMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.RemoveSchemaVersionMetadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.RemoveSchemaVersionMetadata'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueResetJobBookmarkKey() {
  return [
    '#X-Amz-Target=AWSGlue.ResetJobBookmark',
    '/#X-Amz-Target=AWSGlue.ResetJobBookmark',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueResetJobBookmark<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ResetJobBookmark']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ResetJobBookmark']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueResetJobBookmarkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ResetJobBookmark']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSGlue.ResetJobBookmark'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueResumeWorkflowRunKey() {
  return [
    '#X-Amz-Target=AWSGlue.ResumeWorkflowRun',
    '/#X-Amz-Target=AWSGlue.ResumeWorkflowRun',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueResumeWorkflowRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.ResumeWorkflowRun']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ResumeWorkflowRun']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueResumeWorkflowRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ResumeWorkflowRun']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSGlue.ResumeWorkflowRun'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueRunStatementKey() {
  return [
    '#X-Amz-Target=AWSGlue.RunStatement',
    '/#X-Amz-Target=AWSGlue.RunStatement',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueRunStatement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.RunStatement']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.RunStatement']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueRunStatementKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.RunStatement']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.RunStatement'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueSearchTablesKey() {
  return [
    '#X-Amz-Target=AWSGlue.SearchTables',
    '/#X-Amz-Target=AWSGlue.SearchTables',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueSearchTables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.SearchTables']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.SearchTables']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueSearchTablesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.SearchTables']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.SearchTables'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueStartBlueprintRunKey() {
  return [
    '#X-Amz-Target=AWSGlue.StartBlueprintRun',
    '/#X-Amz-Target=AWSGlue.StartBlueprintRun',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueStartBlueprintRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StartBlueprintRun']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartBlueprintRun']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueStartBlueprintRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartBlueprintRun']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSGlue.StartBlueprintRun'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueStartCrawlerKey() {
  return [
    '#X-Amz-Target=AWSGlue.StartCrawler',
    '/#X-Amz-Target=AWSGlue.StartCrawler',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueStartCrawler<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StartCrawler']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartCrawler']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueStartCrawlerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartCrawler']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.StartCrawler'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueStartCrawlerScheduleKey() {
  return [
    '#X-Amz-Target=AWSGlue.StartCrawlerSchedule',
    '/#X-Amz-Target=AWSGlue.StartCrawlerSchedule',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueStartCrawlerSchedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartCrawlerSchedule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueStartCrawlerScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.StartCrawlerSchedule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.StartCrawlerSchedule'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueStartDataQualityRuleRecommendationRunKey() {
  return [
    '#X-Amz-Target=AWSGlue.StartDataQualityRuleRecommendationRun',
    '/#X-Amz-Target=AWSGlue.StartDataQualityRuleRecommendationRun',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueStartDataQualityRuleRecommendationRun<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.StartDataQualityRuleRecommendationRun']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueStartDataQualityRuleRecommendationRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.StartDataQualityRuleRecommendationRun']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.StartDataQualityRuleRecommendationRun'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueStartDataQualityRulesetEvaluationRunKey() {
  return [
    '#X-Amz-Target=AWSGlue.StartDataQualityRulesetEvaluationRun',
    '/#X-Amz-Target=AWSGlue.StartDataQualityRulesetEvaluationRun',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueStartDataQualityRulesetEvaluationRun<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.StartDataQualityRulesetEvaluationRun']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueStartDataQualityRulesetEvaluationRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.StartDataQualityRulesetEvaluationRun']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.StartDataQualityRulesetEvaluationRun'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueStartExportLabelsTaskRunKey() {
  return [
    '#X-Amz-Target=AWSGlue.StartExportLabelsTaskRun',
    '/#X-Amz-Target=AWSGlue.StartExportLabelsTaskRun',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueStartExportLabelsTaskRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartExportLabelsTaskRun']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueStartExportLabelsTaskRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.StartExportLabelsTaskRun']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.StartExportLabelsTaskRun'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueStartImportLabelsTaskRunKey() {
  return [
    '#X-Amz-Target=AWSGlue.StartImportLabelsTaskRun',
    '/#X-Amz-Target=AWSGlue.StartImportLabelsTaskRun',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueStartImportLabelsTaskRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartImportLabelsTaskRun']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueStartImportLabelsTaskRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.StartImportLabelsTaskRun']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.StartImportLabelsTaskRun'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueStartJobRunKey() {
  return [
    '#X-Amz-Target=AWSGlue.StartJobRun',
    '/#X-Amz-Target=AWSGlue.StartJobRun',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueStartJobRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StartJobRun']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartJobRun']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueStartJobRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartJobRun']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.StartJobRun'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueStartMLEvaluationTaskRunKey() {
  return [
    '#X-Amz-Target=AWSGlue.StartMLEvaluationTaskRun',
    '/#X-Amz-Target=AWSGlue.StartMLEvaluationTaskRun',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueStartMLEvaluationTaskRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartMLEvaluationTaskRun']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueStartMLEvaluationTaskRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.StartMLEvaluationTaskRun']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.StartMLEvaluationTaskRun'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueStartMLLabelingSetGenerationTaskRunKey() {
  return [
    '#X-Amz-Target=AWSGlue.StartMLLabelingSetGenerationTaskRun',
    '/#X-Amz-Target=AWSGlue.StartMLLabelingSetGenerationTaskRun',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueStartMLLabelingSetGenerationTaskRun<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.StartMLLabelingSetGenerationTaskRun']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueStartMLLabelingSetGenerationTaskRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.StartMLLabelingSetGenerationTaskRun']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.StartMLLabelingSetGenerationTaskRun'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueStartTriggerKey() {
  return [
    '#X-Amz-Target=AWSGlue.StartTrigger',
    '/#X-Amz-Target=AWSGlue.StartTrigger',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueStartTrigger<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StartTrigger']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartTrigger']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueStartTriggerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartTrigger']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.StartTrigger'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueStartWorkflowRunKey() {
  return [
    '#X-Amz-Target=AWSGlue.StartWorkflowRun',
    '/#X-Amz-Target=AWSGlue.StartWorkflowRun',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueStartWorkflowRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StartWorkflowRun']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartWorkflowRun']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueStartWorkflowRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartWorkflowRun']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSGlue.StartWorkflowRun'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueStopCrawlerKey() {
  return [
    '#X-Amz-Target=AWSGlue.StopCrawler',
    '/#X-Amz-Target=AWSGlue.StopCrawler',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueStopCrawler<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StopCrawler']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StopCrawler']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueStopCrawlerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StopCrawler']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.StopCrawler'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueStopCrawlerScheduleKey() {
  return [
    '#X-Amz-Target=AWSGlue.StopCrawlerSchedule',
    '/#X-Amz-Target=AWSGlue.StopCrawlerSchedule',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueStopCrawlerSchedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StopCrawlerSchedule']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StopCrawlerSchedule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueStopCrawlerScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.StopCrawlerSchedule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.StopCrawlerSchedule'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueStopSessionKey() {
  return [
    '#X-Amz-Target=AWSGlue.StopSession',
    '/#X-Amz-Target=AWSGlue.StopSession',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueStopSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StopSession']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StopSession']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueStopSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StopSession']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.StopSession'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueStopTriggerKey() {
  return [
    '#X-Amz-Target=AWSGlue.StopTrigger',
    '/#X-Amz-Target=AWSGlue.StopTrigger',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueStopTrigger<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StopTrigger']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StopTrigger']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueStopTriggerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StopTrigger']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.StopTrigger'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueStopWorkflowRunKey() {
  return [
    '#X-Amz-Target=AWSGlue.StopWorkflowRun',
    '/#X-Amz-Target=AWSGlue.StopWorkflowRun',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueStopWorkflowRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.StopWorkflowRun']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StopWorkflowRun']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueStopWorkflowRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StopWorkflowRun']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.StopWorkflowRun'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueTagResourceKey() {
  return [
    '#X-Amz-Target=AWSGlue.TagResource',
    '/#X-Amz-Target=AWSGlue.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.TagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueTagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.TagResource']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.TagResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueUntagResourceKey() {
  return [
    '#X-Amz-Target=AWSGlue.UntagResource',
    '/#X-Amz-Target=AWSGlue.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UntagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueUntagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UntagResource']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.UntagResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueUpdateBlueprintKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateBlueprint',
    '/#X-Amz-Target=AWSGlue.UpdateBlueprint',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueUpdateBlueprint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateBlueprint']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateBlueprint']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueUpdateBlueprintKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateBlueprint']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.UpdateBlueprint'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueUpdateClassifierKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateClassifier',
    '/#X-Amz-Target=AWSGlue.UpdateClassifier',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueUpdateClassifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateClassifier']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateClassifier']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueUpdateClassifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateClassifier']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSGlue.UpdateClassifier'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueUpdateColumnStatisticsForPartitionKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForPartition',
    '/#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForPartition',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueUpdateColumnStatisticsForPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForPartition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueUpdateColumnStatisticsForPartitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForPartition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForPartition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueUpdateColumnStatisticsForTableKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForTable',
    '/#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForTable',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueUpdateColumnStatisticsForTable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForTable']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueUpdateColumnStatisticsForTableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForTable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForTable'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueUpdateConnectionKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateConnection',
    '/#X-Amz-Target=AWSGlue.UpdateConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueUpdateConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateConnection']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateConnection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueUpdateConnectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateConnection']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSGlue.UpdateConnection'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueUpdateCrawlerKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateCrawler',
    '/#X-Amz-Target=AWSGlue.UpdateCrawler',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueUpdateCrawler<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateCrawler']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateCrawler']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueUpdateCrawlerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateCrawler']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.UpdateCrawler'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueUpdateCrawlerScheduleKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateCrawlerSchedule',
    '/#X-Amz-Target=AWSGlue.UpdateCrawlerSchedule',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueUpdateCrawlerSchedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateCrawlerSchedule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueUpdateCrawlerScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.UpdateCrawlerSchedule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.UpdateCrawlerSchedule'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueUpdateDataQualityRulesetKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateDataQualityRuleset',
    '/#X-Amz-Target=AWSGlue.UpdateDataQualityRuleset',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueUpdateDataQualityRuleset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateDataQualityRuleset']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueUpdateDataQualityRulesetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.UpdateDataQualityRuleset']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.UpdateDataQualityRuleset'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueUpdateDatabaseKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateDatabase',
    '/#X-Amz-Target=AWSGlue.UpdateDatabase',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueUpdateDatabase<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateDatabase']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateDatabase']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueUpdateDatabaseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateDatabase']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.UpdateDatabase'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueUpdateDevEndpointKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateDevEndpoint',
    '/#X-Amz-Target=AWSGlue.UpdateDevEndpoint',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueUpdateDevEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateDevEndpoint']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateDevEndpoint']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueUpdateDevEndpointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateDevEndpoint']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSGlue.UpdateDevEndpoint'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueUpdateJobKey() {
  return ['#X-Amz-Target=AWSGlue.UpdateJob', '/#X-Amz-Target=AWSGlue.UpdateJob', 'POST'] as const
}

export function usePostXAmzTargetAWSGlueUpdateJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateJob']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueUpdateJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateJob']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.UpdateJob'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueUpdateJobFromSourceControlKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateJobFromSourceControl',
    '/#X-Amz-Target=AWSGlue.UpdateJobFromSourceControl',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueUpdateJobFromSourceControl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateJobFromSourceControl']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueUpdateJobFromSourceControlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.UpdateJobFromSourceControl']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.UpdateJobFromSourceControl'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueUpdateMLTransformKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateMLTransform',
    '/#X-Amz-Target=AWSGlue.UpdateMLTransform',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueUpdateMLTransform<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateMLTransform']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateMLTransform']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueUpdateMLTransformKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateMLTransform']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSGlue.UpdateMLTransform'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueUpdatePartitionKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdatePartition',
    '/#X-Amz-Target=AWSGlue.UpdatePartition',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueUpdatePartition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdatePartition']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdatePartition']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueUpdatePartitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdatePartition']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.UpdatePartition'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueUpdateRegistryKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateRegistry',
    '/#X-Amz-Target=AWSGlue.UpdateRegistry',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueUpdateRegistry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateRegistry']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateRegistry']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueUpdateRegistryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateRegistry']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.UpdateRegistry'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueUpdateSchemaKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateSchema',
    '/#X-Amz-Target=AWSGlue.UpdateSchema',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueUpdateSchema<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateSchema']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateSchema']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueUpdateSchemaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateSchema']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.UpdateSchema'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueUpdateSourceControlFromJobKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateSourceControlFromJob',
    '/#X-Amz-Target=AWSGlue.UpdateSourceControlFromJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueUpdateSourceControlFromJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateSourceControlFromJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueUpdateSourceControlFromJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.UpdateSourceControlFromJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.UpdateSourceControlFromJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueUpdateTableKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateTable',
    '/#X-Amz-Target=AWSGlue.UpdateTable',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueUpdateTable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateTable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateTable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueUpdateTableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateTable']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.UpdateTable'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueUpdateTriggerKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateTrigger',
    '/#X-Amz-Target=AWSGlue.UpdateTrigger',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueUpdateTrigger<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateTrigger']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateTrigger']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueUpdateTriggerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateTrigger']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.UpdateTrigger'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueUpdateUserDefinedFunctionKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateUserDefinedFunction',
    '/#X-Amz-Target=AWSGlue.UpdateUserDefinedFunction',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueUpdateUserDefinedFunction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateUserDefinedFunction']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueUpdateUserDefinedFunctionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSGlue.UpdateUserDefinedFunction']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSGlue.UpdateUserDefinedFunction'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSGlueUpdateWorkflowKey() {
  return [
    '#X-Amz-Target=AWSGlue.UpdateWorkflow',
    '/#X-Amz-Target=AWSGlue.UpdateWorkflow',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSGlueUpdateWorkflow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateWorkflow']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateWorkflow']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSGlueUpdateWorkflowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateWorkflow']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSGlue.UpdateWorkflow'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
