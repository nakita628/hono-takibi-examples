import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAmazonAthenaBatchGetNamedQuery(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.BatchGetNamedQuery']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.BatchGetNamedQuery'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaBatchGetPreparedStatement(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonAthena.BatchGetPreparedStatement']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.BatchGetPreparedStatement'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaBatchGetQueryExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonAthena.BatchGetQueryExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.BatchGetQueryExecution'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaCancelCapacityReservation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonAthena.CancelCapacityReservation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.CancelCapacityReservation'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaCreateCapacityReservation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonAthena.CreateCapacityReservation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.CreateCapacityReservation'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaCreateDataCatalog(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.CreateDataCatalog']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.CreateDataCatalog'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaCreateNamedQuery(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.CreateNamedQuery']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.CreateNamedQuery'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaCreateNotebook(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.CreateNotebook']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.CreateNotebook'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaCreatePreparedStatement(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonAthena.CreatePreparedStatement']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.CreatePreparedStatement'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaCreatePresignedNotebookUrl(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonAthena.CreatePresignedNotebookUrl']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.CreatePresignedNotebookUrl'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaCreateWorkGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.CreateWorkGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.CreateWorkGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaDeleteCapacityReservation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonAthena.DeleteCapacityReservation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.DeleteCapacityReservation'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaDeleteDataCatalog(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.DeleteDataCatalog']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.DeleteDataCatalog'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaDeleteNamedQuery(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.DeleteNamedQuery']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.DeleteNamedQuery'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaDeleteNotebook(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.DeleteNotebook']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.DeleteNotebook'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaDeletePreparedStatement(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonAthena.DeletePreparedStatement']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.DeletePreparedStatement'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaDeleteWorkGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.DeleteWorkGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.DeleteWorkGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaExportNotebook(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ExportNotebook']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.ExportNotebook'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaGetCalculationExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonAthena.GetCalculationExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.GetCalculationExecution'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaGetCalculationExecutionCode(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonAthena.GetCalculationExecutionCode']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.GetCalculationExecutionCode'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaGetCalculationExecutionStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonAthena.GetCalculationExecutionStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.GetCalculationExecutionStatus'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaGetCapacityAssignmentConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonAthena.GetCapacityAssignmentConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.GetCapacityAssignmentConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaGetCapacityReservation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonAthena.GetCapacityReservation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.GetCapacityReservation'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaGetDataCatalog(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetDataCatalog']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.GetDataCatalog'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaGetDatabase(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetDatabase']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonAthena.GetDatabase'].$post(args, options))
}

export async function postXAmzTargetAmazonAthenaGetNamedQuery(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetNamedQuery']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.GetNamedQuery'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaGetNotebookMetadata(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonAthena.GetNotebookMetadata']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.GetNotebookMetadata'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaGetPreparedStatement(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonAthena.GetPreparedStatement']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.GetPreparedStatement'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaGetQueryExecution(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetQueryExecution']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.GetQueryExecution'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaGetQueryResults(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetQueryResults']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.GetQueryResults'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaGetQueryRuntimeStatistics(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonAthena.GetQueryRuntimeStatistics']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.GetQueryRuntimeStatistics'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaGetSession(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetSession']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonAthena.GetSession'].$post(args, options))
}

export async function postXAmzTargetAmazonAthenaGetSessionStatus(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetSessionStatus']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.GetSessionStatus'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaGetTableMetadata(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetTableMetadata']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.GetTableMetadata'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaGetWorkGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetWorkGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonAthena.GetWorkGroup'].$post(args, options))
}

export async function postXAmzTargetAmazonAthenaImportNotebook(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ImportNotebook']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.ImportNotebook'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaListApplicationDPUSizes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonAthena.ListApplicationDPUSizes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.ListApplicationDPUSizes'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaListCalculationExecutions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonAthena.ListCalculationExecutions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.ListCalculationExecutions'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaListCapacityReservations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonAthena.ListCapacityReservations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.ListCapacityReservations'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaListDataCatalogs(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListDataCatalogs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.ListDataCatalogs'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaListDatabases(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListDatabases']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.ListDatabases'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaListEngineVersions(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListEngineVersions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.ListEngineVersions'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaListExecutors(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListExecutors']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.ListExecutors'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaListNamedQueries(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListNamedQueries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.ListNamedQueries'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaListNotebookMetadata(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonAthena.ListNotebookMetadata']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.ListNotebookMetadata'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaListNotebookSessions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonAthena.ListNotebookSessions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.ListNotebookSessions'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaListPreparedStatements(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonAthena.ListPreparedStatements']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.ListPreparedStatements'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaListQueryExecutions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonAthena.ListQueryExecutions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.ListQueryExecutions'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaListSessions(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListSessions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonAthena.ListSessions'].$post(args, options))
}

export async function postXAmzTargetAmazonAthenaListTableMetadata(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListTableMetadata']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.ListTableMetadata'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonAthena.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaListWorkGroups(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListWorkGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.ListWorkGroups'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaPutCapacityAssignmentConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonAthena.PutCapacityAssignmentConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.PutCapacityAssignmentConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaStartCalculationExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonAthena.StartCalculationExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.StartCalculationExecution'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaStartQueryExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonAthena.StartQueryExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.StartQueryExecution'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaStartSession(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.StartSession']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonAthena.StartSession'].$post(args, options))
}

export async function postXAmzTargetAmazonAthenaStopCalculationExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonAthena.StopCalculationExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.StopCalculationExecution'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaStopQueryExecution(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.StopQueryExecution']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.StopQueryExecution'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaTagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonAthena.TagResource'].$post(args, options))
}

export async function postXAmzTargetAmazonAthenaTerminateSession(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.TerminateSession']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.TerminateSession'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaUntagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.UntagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaUpdateCapacityReservation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonAthena.UpdateCapacityReservation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.UpdateCapacityReservation'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaUpdateDataCatalog(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.UpdateDataCatalog']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.UpdateDataCatalog'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaUpdateNamedQuery(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.UpdateNamedQuery']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.UpdateNamedQuery'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaUpdateNotebook(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.UpdateNotebook']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.UpdateNotebook'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaUpdateNotebookMetadata(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonAthena.UpdateNotebookMetadata']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.UpdateNotebookMetadata'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaUpdatePreparedStatement(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonAthena.UpdatePreparedStatement']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.UpdatePreparedStatement'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonAthenaUpdateWorkGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.UpdateWorkGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonAthena.UpdateWorkGroup'].$post(args, options),
  )
}
