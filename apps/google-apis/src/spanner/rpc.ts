import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function deleteV1Database(
  args: InferRequestType<(typeof client.v1)[':database']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':database'].$delete(args, options))
}

export async function getV1DatabaseDdl(
  args: InferRequestType<(typeof client.v1)[':database']['ddl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':database'].ddl.$get(args, options))
}

export async function patchV1DatabaseDdl(
  args: InferRequestType<(typeof client.v1)[':database']['ddl']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':database'].ddl.$patch(args, options))
}

export async function getV1DatabaseSessions(
  args: InferRequestType<(typeof client.v1)[':database']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':database'].sessions.$get(args, options))
}

export async function postV1DatabaseSessions(
  args: InferRequestType<(typeof client.v1)[':database']['sessions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':database'].sessions.$post(args, options))
}

export async function postV1DatabaseSessionsBatchCreate(
  args: InferRequestType<(typeof client.v1)[':database']['sessions:batchCreate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':database']['sessions:batchCreate'].$post(args, options))
}

export async function getV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$get(args, options))
}

export async function deleteV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$delete(args, options))
}

export async function patchV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$patch(args, options))
}

export async function getV1NameScans(
  args: InferRequestType<(typeof client.v1)[':name']['scans']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].scans.$get(args, options))
}

export async function postV1NameCancel(
  args: InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:cancel'].$post(args, options))
}

export async function getV1Parent(
  args: InferRequestType<(typeof client.v1)[':parent']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].$get(args, options))
}

export async function getV1ParentBackupOperations(
  args: InferRequestType<(typeof client.v1)[':parent']['backupOperations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].backupOperations.$get(args, options))
}

export async function getV1ParentBackups(
  args: InferRequestType<(typeof client.v1)[':parent']['backups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].backups.$get(args, options))
}

export async function postV1ParentBackups(
  args: InferRequestType<(typeof client.v1)[':parent']['backups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].backups.$post(args, options))
}

export async function postV1ParentBackupsCopy(
  args: InferRequestType<(typeof client.v1)[':parent']['backups:copy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent']['backups:copy'].$post(args, options))
}

export async function getV1ParentDatabaseOperations(
  args: InferRequestType<(typeof client.v1)[':parent']['databaseOperations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].databaseOperations.$get(args, options))
}

export async function getV1ParentDatabaseRoles(
  args: InferRequestType<(typeof client.v1)[':parent']['databaseRoles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].databaseRoles.$get(args, options))
}

export async function getV1ParentDatabases(
  args: InferRequestType<(typeof client.v1)[':parent']['databases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].databases.$get(args, options))
}

export async function postV1ParentDatabases(
  args: InferRequestType<(typeof client.v1)[':parent']['databases']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].databases.$post(args, options))
}

export async function postV1ParentDatabasesRestore(
  args: InferRequestType<(typeof client.v1)[':parent']['databases:restore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent']['databases:restore'].$post(args, options))
}

export async function getV1ParentInstanceConfigOperations(
  args: InferRequestType<(typeof client.v1)[':parent']['instanceConfigOperations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].instanceConfigOperations.$get(args, options))
}

export async function getV1ParentInstanceConfigs(
  args: InferRequestType<(typeof client.v1)[':parent']['instanceConfigs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].instanceConfigs.$get(args, options))
}

export async function postV1ParentInstanceConfigs(
  args: InferRequestType<(typeof client.v1)[':parent']['instanceConfigs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].instanceConfigs.$post(args, options))
}

export async function getV1ParentInstances(
  args: InferRequestType<(typeof client.v1)[':parent']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].instances.$get(args, options))
}

export async function postV1ParentInstances(
  args: InferRequestType<(typeof client.v1)[':parent']['instances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].instances.$post(args, options))
}

export async function postV1ResourceGetIamPolicy(
  args: InferRequestType<(typeof client.v1)[':resource:getIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:getIamPolicy'].$post(args, options))
}

export async function postV1ResourceSetIamPolicy(
  args: InferRequestType<(typeof client.v1)[':resource:setIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:setIamPolicy'].$post(args, options))
}

export async function postV1ResourceTestIamPermissions(
  args: InferRequestType<(typeof client.v1)[':resource:testIamPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:testIamPermissions'].$post(args, options))
}

export async function postV1SessionBeginTransaction(
  args: InferRequestType<(typeof client.v1)[':session:beginTransaction']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':session:beginTransaction'].$post(args, options))
}

export async function postV1SessionCommit(
  args: InferRequestType<(typeof client.v1)[':session:commit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':session:commit'].$post(args, options))
}

export async function postV1SessionExecuteBatchDml(
  args: InferRequestType<(typeof client.v1)[':session:executeBatchDml']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':session:executeBatchDml'].$post(args, options))
}

export async function postV1SessionExecuteSql(
  args: InferRequestType<(typeof client.v1)[':session:executeSql']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':session:executeSql'].$post(args, options))
}

export async function postV1SessionExecuteStreamingSql(
  args: InferRequestType<(typeof client.v1)[':session:executeStreamingSql']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':session:executeStreamingSql'].$post(args, options))
}

export async function postV1SessionPartitionQuery(
  args: InferRequestType<(typeof client.v1)[':session:partitionQuery']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':session:partitionQuery'].$post(args, options))
}

export async function postV1SessionPartitionRead(
  args: InferRequestType<(typeof client.v1)[':session:partitionRead']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':session:partitionRead'].$post(args, options))
}

export async function postV1SessionRead(
  args: InferRequestType<(typeof client.v1)[':session:read']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':session:read'].$post(args, options))
}

export async function postV1SessionRollback(
  args: InferRequestType<(typeof client.v1)[':session:rollback']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':session:rollback'].$post(args, options))
}

export async function postV1SessionStreamingRead(
  args: InferRequestType<(typeof client.v1)[':session:streamingRead']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':session:streamingRead'].$post(args, options))
}
