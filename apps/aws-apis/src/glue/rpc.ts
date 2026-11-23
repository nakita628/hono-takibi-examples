import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAWSGlueBatchCreatePartition(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchCreatePartition']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.BatchCreatePartition'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueBatchDeleteConnection(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchDeleteConnection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.BatchDeleteConnection'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueBatchDeletePartition(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchDeletePartition']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.BatchDeletePartition'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueBatchDeleteTable(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchDeleteTable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.BatchDeleteTable'].$post(args, options))
}

export async function postXAmzTargetAWSGlueBatchDeleteTableVersion(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchDeleteTableVersion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.BatchDeleteTableVersion'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueBatchGetBlueprints(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetBlueprints']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.BatchGetBlueprints'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueBatchGetCrawlers(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetCrawlers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.BatchGetCrawlers'].$post(args, options))
}

export async function postXAmzTargetAWSGlueBatchGetCustomEntityTypes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.BatchGetCustomEntityTypes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.BatchGetCustomEntityTypes'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueBatchGetDataQualityResult(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.BatchGetDataQualityResult']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.BatchGetDataQualityResult'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueBatchGetDevEndpoints(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetDevEndpoints']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.BatchGetDevEndpoints'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueBatchGetJobs(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetJobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.BatchGetJobs'].$post(args, options))
}

export async function postXAmzTargetAWSGlueBatchGetPartition(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetPartition']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.BatchGetPartition'].$post(args, options))
}

export async function postXAmzTargetAWSGlueBatchGetTriggers(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetTriggers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.BatchGetTriggers'].$post(args, options))
}

export async function postXAmzTargetAWSGlueBatchGetWorkflows(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchGetWorkflows']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.BatchGetWorkflows'].$post(args, options))
}

export async function postXAmzTargetAWSGlueBatchStopJobRun(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchStopJobRun']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.BatchStopJobRun'].$post(args, options))
}

export async function postXAmzTargetAWSGlueBatchUpdatePartition(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.BatchUpdatePartition']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.BatchUpdatePartition'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueCancelDataQualityRuleRecommendationRun(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.CancelDataQualityRuleRecommendationRun']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.CancelDataQualityRuleRecommendationRun'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueCancelDataQualityRulesetEvaluationRun(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.CancelDataQualityRulesetEvaluationRun']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.CancelDataQualityRulesetEvaluationRun'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueCancelMLTaskRun(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CancelMLTaskRun']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.CancelMLTaskRun'].$post(args, options))
}

export async function postXAmzTargetAWSGlueCancelStatement(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CancelStatement']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.CancelStatement'].$post(args, options))
}

export async function postXAmzTargetAWSGlueCheckSchemaVersionValidity(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.CheckSchemaVersionValidity']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.CheckSchemaVersionValidity'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueCreateBlueprint(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateBlueprint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.CreateBlueprint'].$post(args, options))
}

export async function postXAmzTargetAWSGlueCreateClassifier(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateClassifier']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.CreateClassifier'].$post(args, options))
}

export async function postXAmzTargetAWSGlueCreateConnection(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateConnection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.CreateConnection'].$post(args, options))
}

export async function postXAmzTargetAWSGlueCreateCrawler(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateCrawler']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.CreateCrawler'].$post(args, options))
}

export async function postXAmzTargetAWSGlueCreateCustomEntityType(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateCustomEntityType']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.CreateCustomEntityType'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueCreateDataQualityRuleset(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.CreateDataQualityRuleset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.CreateDataQualityRuleset'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueCreateDatabase(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateDatabase']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.CreateDatabase'].$post(args, options))
}

export async function postXAmzTargetAWSGlueCreateDevEndpoint(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateDevEndpoint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.CreateDevEndpoint'].$post(args, options))
}

export async function postXAmzTargetAWSGlueCreateJob(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.CreateJob'].$post(args, options))
}

export async function postXAmzTargetAWSGlueCreateMLTransform(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateMLTransform']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.CreateMLTransform'].$post(args, options))
}

export async function postXAmzTargetAWSGlueCreatePartition(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreatePartition']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.CreatePartition'].$post(args, options))
}

export async function postXAmzTargetAWSGlueCreatePartitionIndex(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreatePartitionIndex']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.CreatePartitionIndex'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueCreateRegistry(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateRegistry']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.CreateRegistry'].$post(args, options))
}

export async function postXAmzTargetAWSGlueCreateSchema(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateSchema']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.CreateSchema'].$post(args, options))
}

export async function postXAmzTargetAWSGlueCreateScript(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateScript']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.CreateScript'].$post(args, options))
}

export async function postXAmzTargetAWSGlueCreateSecurityConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.CreateSecurityConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.CreateSecurityConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueCreateSession(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateSession']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.CreateSession'].$post(args, options))
}

export async function postXAmzTargetAWSGlueCreateTable(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateTable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.CreateTable'].$post(args, options))
}

export async function postXAmzTargetAWSGlueCreateTrigger(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateTrigger']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.CreateTrigger'].$post(args, options))
}

export async function postXAmzTargetAWSGlueCreateUserDefinedFunction(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.CreateUserDefinedFunction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.CreateUserDefinedFunction'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueCreateWorkflow(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.CreateWorkflow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.CreateWorkflow'].$post(args, options))
}

export async function postXAmzTargetAWSGlueDeleteBlueprint(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteBlueprint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.DeleteBlueprint'].$post(args, options))
}

export async function postXAmzTargetAWSGlueDeleteClassifier(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteClassifier']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.DeleteClassifier'].$post(args, options))
}

export async function postXAmzTargetAWSGlueDeleteColumnStatisticsForPartition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForPartition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForPartition'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueDeleteColumnStatisticsForTable(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForTable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForTable'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueDeleteConnection(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteConnection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.DeleteConnection'].$post(args, options))
}

export async function postXAmzTargetAWSGlueDeleteCrawler(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteCrawler']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.DeleteCrawler'].$post(args, options))
}

export async function postXAmzTargetAWSGlueDeleteCustomEntityType(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteCustomEntityType']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.DeleteCustomEntityType'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueDeleteDataQualityRuleset(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.DeleteDataQualityRuleset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.DeleteDataQualityRuleset'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueDeleteDatabase(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteDatabase']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.DeleteDatabase'].$post(args, options))
}

export async function postXAmzTargetAWSGlueDeleteDevEndpoint(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteDevEndpoint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.DeleteDevEndpoint'].$post(args, options))
}

export async function postXAmzTargetAWSGlueDeleteJob(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.DeleteJob'].$post(args, options))
}

export async function postXAmzTargetAWSGlueDeleteMLTransform(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteMLTransform']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.DeleteMLTransform'].$post(args, options))
}

export async function postXAmzTargetAWSGlueDeletePartition(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeletePartition']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.DeletePartition'].$post(args, options))
}

export async function postXAmzTargetAWSGlueDeletePartitionIndex(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeletePartitionIndex']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.DeletePartitionIndex'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueDeleteRegistry(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteRegistry']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.DeleteRegistry'].$post(args, options))
}

export async function postXAmzTargetAWSGlueDeleteResourcePolicy(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteResourcePolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.DeleteResourcePolicy'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueDeleteSchema(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteSchema']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.DeleteSchema'].$post(args, options))
}

export async function postXAmzTargetAWSGlueDeleteSchemaVersions(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteSchemaVersions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.DeleteSchemaVersions'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueDeleteSecurityConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.DeleteSecurityConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.DeleteSecurityConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueDeleteSession(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteSession']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.DeleteSession'].$post(args, options))
}

export async function postXAmzTargetAWSGlueDeleteTable(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteTable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.DeleteTable'].$post(args, options))
}

export async function postXAmzTargetAWSGlueDeleteTableVersion(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteTableVersion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.DeleteTableVersion'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueDeleteTrigger(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteTrigger']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.DeleteTrigger'].$post(args, options))
}

export async function postXAmzTargetAWSGlueDeleteUserDefinedFunction(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.DeleteUserDefinedFunction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.DeleteUserDefinedFunction'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueDeleteWorkflow(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.DeleteWorkflow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.DeleteWorkflow'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetBlueprint(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetBlueprint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetBlueprint'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetBlueprintRun(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetBlueprintRun']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetBlueprintRun'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetBlueprintRuns(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetBlueprintRuns']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetBlueprintRuns'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetCatalogImportStatus(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetCatalogImportStatus']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.GetCatalogImportStatus'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueGetClassifier(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetClassifier']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetClassifier'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetClassifiers(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetClassifiers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetClassifiers'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetColumnStatisticsForPartition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.GetColumnStatisticsForPartition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.GetColumnStatisticsForPartition'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueGetColumnStatisticsForTable(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.GetColumnStatisticsForTable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.GetColumnStatisticsForTable'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueGetConnection(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetConnection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetConnection'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetConnections(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetConnections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetConnections'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetCrawler(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetCrawler']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetCrawler'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetCrawlerMetrics(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetCrawlerMetrics']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetCrawlerMetrics'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetCrawlers(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetCrawlers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetCrawlers'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetCustomEntityType(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetCustomEntityType']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.GetCustomEntityType'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueGetDataCatalogEncryptionSettings(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.GetDataCatalogEncryptionSettings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.GetDataCatalogEncryptionSettings'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueGetDataQualityResult(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDataQualityResult']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.GetDataQualityResult'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueGetDataQualityRuleRecommendationRun(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.GetDataQualityRuleRecommendationRun']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.GetDataQualityRuleRecommendationRun'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueGetDataQualityRuleset(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDataQualityRuleset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.GetDataQualityRuleset'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueGetDataQualityRulesetEvaluationRun(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.GetDataQualityRulesetEvaluationRun']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.GetDataQualityRulesetEvaluationRun'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueGetDatabase(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDatabase']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetDatabase'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetDatabases(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDatabases']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetDatabases'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetDataflowGraph(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDataflowGraph']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetDataflowGraph'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetDevEndpoint(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDevEndpoint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetDevEndpoint'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetDevEndpoints(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetDevEndpoints']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetDevEndpoints'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetJob(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetJob'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetJobBookmark(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobBookmark']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetJobBookmark'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetJobRun(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobRun']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetJobRun'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetJobRuns(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobRuns']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetJobRuns'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetJobs(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetJobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetJobs'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetMLTaskRun(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTaskRun']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetMLTaskRun'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetMLTaskRuns(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTaskRuns']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetMLTaskRuns'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetMLTransform(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTransform']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetMLTransform'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetMLTransforms(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetMLTransforms']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetMLTransforms'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetMapping(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetMapping']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetMapping'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetPartition(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetPartition']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetPartition'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetPartitionIndexes(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetPartitionIndexes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.GetPartitionIndexes'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueGetPartitions(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetPartitions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetPartitions'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetPlan(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetPlan']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetPlan'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetRegistry(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetRegistry']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetRegistry'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetResourcePolicies(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetResourcePolicies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.GetResourcePolicies'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueGetResourcePolicy(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetResourcePolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetResourcePolicy'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetSchema(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetSchema']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetSchema'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetSchemaByDefinition(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetSchemaByDefinition']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.GetSchemaByDefinition'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueGetSchemaVersion(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetSchemaVersion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetSchemaVersion'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetSchemaVersionsDiff(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetSchemaVersionsDiff']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.GetSchemaVersionsDiff'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueGetSecurityConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.GetSecurityConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.GetSecurityConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueGetSecurityConfigurations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.GetSecurityConfigurations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.GetSecurityConfigurations'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueGetSession(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetSession']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetSession'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetStatement(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetStatement']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetStatement'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetTable(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetTable'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetTableVersion(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTableVersion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetTableVersion'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetTableVersions(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTableVersions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetTableVersions'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetTables(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetTables'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetTags(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetTags'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetTrigger(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTrigger']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetTrigger'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetTriggers(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetTriggers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetTriggers'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetUnfilteredPartitionMetadata(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.GetUnfilteredPartitionMetadata']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.GetUnfilteredPartitionMetadata'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueGetUnfilteredPartitionsMetadata(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.GetUnfilteredPartitionsMetadata']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.GetUnfilteredPartitionsMetadata'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueGetUnfilteredTableMetadata(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.GetUnfilteredTableMetadata']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.GetUnfilteredTableMetadata'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueGetUserDefinedFunction(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetUserDefinedFunction']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.GetUserDefinedFunction'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueGetUserDefinedFunctions(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetUserDefinedFunctions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.GetUserDefinedFunctions'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueGetWorkflow(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetWorkflow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetWorkflow'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetWorkflowRun(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetWorkflowRun']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetWorkflowRun'].$post(args, options))
}

export async function postXAmzTargetAWSGlueGetWorkflowRunProperties(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.GetWorkflowRunProperties']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.GetWorkflowRunProperties'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueGetWorkflowRuns(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.GetWorkflowRuns']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.GetWorkflowRuns'].$post(args, options))
}

export async function postXAmzTargetAWSGlueImportCatalogToGlue(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ImportCatalogToGlue']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.ImportCatalogToGlue'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueListBlueprints(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListBlueprints']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.ListBlueprints'].$post(args, options))
}

export async function postXAmzTargetAWSGlueListCrawlers(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListCrawlers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.ListCrawlers'].$post(args, options))
}

export async function postXAmzTargetAWSGlueListCrawls(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListCrawls']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.ListCrawls'].$post(args, options))
}

export async function postXAmzTargetAWSGlueListCustomEntityTypes(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListCustomEntityTypes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.ListCustomEntityTypes'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueListDataQualityResults(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListDataQualityResults']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.ListDataQualityResults'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueListDataQualityRuleRecommendationRuns(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.ListDataQualityRuleRecommendationRuns']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.ListDataQualityRuleRecommendationRuns'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueListDataQualityRulesetEvaluationRuns(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.ListDataQualityRulesetEvaluationRuns']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.ListDataQualityRulesetEvaluationRuns'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueListDataQualityRulesets(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListDataQualityRulesets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.ListDataQualityRulesets'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueListDevEndpoints(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListDevEndpoints']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.ListDevEndpoints'].$post(args, options))
}

export async function postXAmzTargetAWSGlueListJobs(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListJobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.ListJobs'].$post(args, options))
}

export async function postXAmzTargetAWSGlueListMLTransforms(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListMLTransforms']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.ListMLTransforms'].$post(args, options))
}

export async function postXAmzTargetAWSGlueListRegistries(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListRegistries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.ListRegistries'].$post(args, options))
}

export async function postXAmzTargetAWSGlueListSchemaVersions(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListSchemaVersions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.ListSchemaVersions'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueListSchemas(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListSchemas']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.ListSchemas'].$post(args, options))
}

export async function postXAmzTargetAWSGlueListSessions(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListSessions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.ListSessions'].$post(args, options))
}

export async function postXAmzTargetAWSGlueListStatements(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListStatements']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.ListStatements'].$post(args, options))
}

export async function postXAmzTargetAWSGlueListTriggers(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListTriggers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.ListTriggers'].$post(args, options))
}

export async function postXAmzTargetAWSGlueListWorkflows(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ListWorkflows']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.ListWorkflows'].$post(args, options))
}

export async function postXAmzTargetAWSGluePutDataCatalogEncryptionSettings(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.PutDataCatalogEncryptionSettings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.PutDataCatalogEncryptionSettings'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGluePutResourcePolicy(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.PutResourcePolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.PutResourcePolicy'].$post(args, options))
}

export async function postXAmzTargetAWSGluePutSchemaVersionMetadata(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.PutSchemaVersionMetadata']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.PutSchemaVersionMetadata'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGluePutWorkflowRunProperties(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.PutWorkflowRunProperties']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.PutWorkflowRunProperties'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueQuerySchemaVersionMetadata(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.QuerySchemaVersionMetadata']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.QuerySchemaVersionMetadata'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueRegisterSchemaVersion(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.RegisterSchemaVersion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.RegisterSchemaVersion'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueRemoveSchemaVersionMetadata(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.RemoveSchemaVersionMetadata']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.RemoveSchemaVersionMetadata'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueResetJobBookmark(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ResetJobBookmark']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.ResetJobBookmark'].$post(args, options))
}

export async function postXAmzTargetAWSGlueResumeWorkflowRun(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.ResumeWorkflowRun']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.ResumeWorkflowRun'].$post(args, options))
}

export async function postXAmzTargetAWSGlueRunStatement(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.RunStatement']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.RunStatement'].$post(args, options))
}

export async function postXAmzTargetAWSGlueSearchTables(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.SearchTables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.SearchTables'].$post(args, options))
}

export async function postXAmzTargetAWSGlueStartBlueprintRun(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartBlueprintRun']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.StartBlueprintRun'].$post(args, options))
}

export async function postXAmzTargetAWSGlueStartCrawler(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartCrawler']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.StartCrawler'].$post(args, options))
}

export async function postXAmzTargetAWSGlueStartCrawlerSchedule(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartCrawlerSchedule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.StartCrawlerSchedule'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueStartDataQualityRuleRecommendationRun(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.StartDataQualityRuleRecommendationRun']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.StartDataQualityRuleRecommendationRun'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueStartDataQualityRulesetEvaluationRun(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.StartDataQualityRulesetEvaluationRun']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.StartDataQualityRulesetEvaluationRun'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueStartExportLabelsTaskRun(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.StartExportLabelsTaskRun']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.StartExportLabelsTaskRun'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueStartImportLabelsTaskRun(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.StartImportLabelsTaskRun']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.StartImportLabelsTaskRun'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueStartJobRun(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartJobRun']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.StartJobRun'].$post(args, options))
}

export async function postXAmzTargetAWSGlueStartMLEvaluationTaskRun(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.StartMLEvaluationTaskRun']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.StartMLEvaluationTaskRun'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueStartMLLabelingSetGenerationTaskRun(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.StartMLLabelingSetGenerationTaskRun']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.StartMLLabelingSetGenerationTaskRun'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueStartTrigger(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartTrigger']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.StartTrigger'].$post(args, options))
}

export async function postXAmzTargetAWSGlueStartWorkflowRun(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StartWorkflowRun']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.StartWorkflowRun'].$post(args, options))
}

export async function postXAmzTargetAWSGlueStopCrawler(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StopCrawler']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.StopCrawler'].$post(args, options))
}

export async function postXAmzTargetAWSGlueStopCrawlerSchedule(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StopCrawlerSchedule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.StopCrawlerSchedule'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueStopSession(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StopSession']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.StopSession'].$post(args, options))
}

export async function postXAmzTargetAWSGlueStopTrigger(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StopTrigger']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.StopTrigger'].$post(args, options))
}

export async function postXAmzTargetAWSGlueStopWorkflowRun(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.StopWorkflowRun']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.StopWorkflowRun'].$post(args, options))
}

export async function postXAmzTargetAWSGlueTagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.TagResource'].$post(args, options))
}

export async function postXAmzTargetAWSGlueUntagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UntagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.UntagResource'].$post(args, options))
}

export async function postXAmzTargetAWSGlueUpdateBlueprint(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateBlueprint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.UpdateBlueprint'].$post(args, options))
}

export async function postXAmzTargetAWSGlueUpdateClassifier(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateClassifier']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.UpdateClassifier'].$post(args, options))
}

export async function postXAmzTargetAWSGlueUpdateColumnStatisticsForPartition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForPartition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForPartition'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueUpdateColumnStatisticsForTable(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForTable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForTable'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueUpdateConnection(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateConnection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.UpdateConnection'].$post(args, options))
}

export async function postXAmzTargetAWSGlueUpdateCrawler(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateCrawler']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.UpdateCrawler'].$post(args, options))
}

export async function postXAmzTargetAWSGlueUpdateCrawlerSchedule(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateCrawlerSchedule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.UpdateCrawlerSchedule'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueUpdateDataQualityRuleset(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.UpdateDataQualityRuleset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.UpdateDataQualityRuleset'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueUpdateDatabase(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateDatabase']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.UpdateDatabase'].$post(args, options))
}

export async function postXAmzTargetAWSGlueUpdateDevEndpoint(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateDevEndpoint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.UpdateDevEndpoint'].$post(args, options))
}

export async function postXAmzTargetAWSGlueUpdateJob(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.UpdateJob'].$post(args, options))
}

export async function postXAmzTargetAWSGlueUpdateJobFromSourceControl(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.UpdateJobFromSourceControl']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.UpdateJobFromSourceControl'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueUpdateMLTransform(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateMLTransform']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.UpdateMLTransform'].$post(args, options))
}

export async function postXAmzTargetAWSGlueUpdatePartition(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdatePartition']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.UpdatePartition'].$post(args, options))
}

export async function postXAmzTargetAWSGlueUpdateRegistry(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateRegistry']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.UpdateRegistry'].$post(args, options))
}

export async function postXAmzTargetAWSGlueUpdateSchema(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateSchema']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.UpdateSchema'].$post(args, options))
}

export async function postXAmzTargetAWSGlueUpdateSourceControlFromJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.UpdateSourceControlFromJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.UpdateSourceControlFromJob'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueUpdateTable(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateTable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.UpdateTable'].$post(args, options))
}

export async function postXAmzTargetAWSGlueUpdateTrigger(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateTrigger']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.UpdateTrigger'].$post(args, options))
}

export async function postXAmzTargetAWSGlueUpdateUserDefinedFunction(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSGlue.UpdateUserDefinedFunction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSGlue.UpdateUserDefinedFunction'].$post(args, options),
  )
}

export async function postXAmzTargetAWSGlueUpdateWorkflow(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSGlue.UpdateWorkflow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSGlue.UpdateWorkflow'].$post(args, options))
}
