import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetRedshiftDataBatchExecuteStatement(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RedshiftData.BatchExecuteStatement']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RedshiftData.BatchExecuteStatement'].$post(args, options),
  )
}

export async function postXAmzTargetRedshiftDataCancelStatement(
  args: InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.CancelStatement']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RedshiftData.CancelStatement'].$post(args, options),
  )
}

export async function postXAmzTargetRedshiftDataDescribeStatement(
  args: InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.DescribeStatement']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RedshiftData.DescribeStatement'].$post(args, options),
  )
}

export async function postXAmzTargetRedshiftDataDescribeTable(
  args: InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.DescribeTable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RedshiftData.DescribeTable'].$post(args, options),
  )
}

export async function postXAmzTargetRedshiftDataExecuteStatement(
  args: InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.ExecuteStatement']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RedshiftData.ExecuteStatement'].$post(args, options),
  )
}

export async function postXAmzTargetRedshiftDataGetStatementResult(
  args: InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.GetStatementResult']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RedshiftData.GetStatementResult'].$post(args, options),
  )
}

export async function postXAmzTargetRedshiftDataListDatabases(
  args: InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.ListDatabases']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RedshiftData.ListDatabases'].$post(args, options),
  )
}

export async function postXAmzTargetRedshiftDataListSchemas(
  args: InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.ListSchemas']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=RedshiftData.ListSchemas'].$post(args, options))
}

export async function postXAmzTargetRedshiftDataListStatements(
  args: InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.ListStatements']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RedshiftData.ListStatements'].$post(args, options),
  )
}

export async function postXAmzTargetRedshiftDataListTables(
  args: InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.ListTables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=RedshiftData.ListTables'].$post(args, options))
}
