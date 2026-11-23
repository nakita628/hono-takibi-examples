import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetDynamoDB20120810BatchExecuteStatement(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDB_20120810.BatchExecuteStatement']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.BatchExecuteStatement'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810BatchGetItem(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.BatchGetItem']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.BatchGetItem'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810BatchWriteItem(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDB_20120810.BatchWriteItem']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.BatchWriteItem'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810CreateBackup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.CreateBackup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.CreateBackup'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810CreateGlobalTable(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDB_20120810.CreateGlobalTable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.CreateGlobalTable'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810CreateTable(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.CreateTable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.CreateTable'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810DeleteBackup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DeleteBackup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.DeleteBackup'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810DeleteItem(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DeleteItem']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.DeleteItem'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810DeleteTable(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DeleteTable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.DeleteTable'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810DescribeBackup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeBackup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.DescribeBackup'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810DescribeContinuousBackups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeContinuousBackups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.DescribeContinuousBackups'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810DescribeContributorInsights(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeContributorInsights']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.DescribeContributorInsights'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810DescribeEndpoints(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeEndpoints']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.DescribeEndpoints'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810DescribeExport(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeExport']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.DescribeExport'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810DescribeGlobalTable(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTable'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810DescribeGlobalTableSettings(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTableSettings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTableSettings'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810DescribeImport(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeImport']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.DescribeImport'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810DescribeKinesisStreamingDestination(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeKinesisStreamingDestination']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.DescribeKinesisStreamingDestination'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetDynamoDB20120810DescribeLimits(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeLimits']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.DescribeLimits'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810DescribeTable(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeTable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.DescribeTable'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810DescribeTableReplicaAutoScaling(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeTableReplicaAutoScaling']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.DescribeTableReplicaAutoScaling'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810DescribeTimeToLive(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeTimeToLive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.DescribeTimeToLive'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810DisableKinesisStreamingDestination(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDB_20120810.DisableKinesisStreamingDestination']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.DisableKinesisStreamingDestination'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetDynamoDB20120810EnableKinesisStreamingDestination(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDB_20120810.EnableKinesisStreamingDestination']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.EnableKinesisStreamingDestination'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetDynamoDB20120810ExecuteStatement(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDB_20120810.ExecuteStatement']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.ExecuteStatement'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810ExecuteTransaction(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDB_20120810.ExecuteTransaction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.ExecuteTransaction'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810ExportTableToPointInTime(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDB_20120810.ExportTableToPointInTime']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.ExportTableToPointInTime'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810GetItem(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.GetItem']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=DynamoDB_20120810.GetItem'].$post(args, options))
}

export async function postXAmzTargetDynamoDB20120810ImportTable(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ImportTable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.ImportTable'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810ListBackups(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ListBackups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.ListBackups'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810ListContributorInsights(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDB_20120810.ListContributorInsights']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.ListContributorInsights'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810ListExports(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ListExports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.ListExports'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810ListGlobalTables(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDB_20120810.ListGlobalTables']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.ListGlobalTables'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810ListImports(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ListImports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.ListImports'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810ListTables(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ListTables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.ListTables'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810ListTagsOfResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDB_20120810.ListTagsOfResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.ListTagsOfResource'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810PutItem(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.PutItem']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=DynamoDB_20120810.PutItem'].$post(args, options))
}

export async function postXAmzTargetDynamoDB20120810Query(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.Query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=DynamoDB_20120810.Query'].$post(args, options))
}

export async function postXAmzTargetDynamoDB20120810RestoreTableFromBackup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDB_20120810.RestoreTableFromBackup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.RestoreTableFromBackup'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810RestoreTableToPointInTime(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDB_20120810.RestoreTableToPointInTime']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.RestoreTableToPointInTime'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810Scan(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.Scan']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=DynamoDB_20120810.Scan'].$post(args, options))
}

export async function postXAmzTargetDynamoDB20120810TagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810TransactGetItems(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDB_20120810.TransactGetItems']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.TransactGetItems'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810TransactWriteItems(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDB_20120810.TransactWriteItems']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.TransactWriteItems'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810UntagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.UntagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810UpdateContinuousBackups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateContinuousBackups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.UpdateContinuousBackups'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810UpdateContributorInsights(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateContributorInsights']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.UpdateContributorInsights'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810UpdateGlobalTable(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTable'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810UpdateGlobalTableSettings(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTableSettings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTableSettings'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810UpdateItem(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateItem']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.UpdateItem'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810UpdateTable(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateTable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.UpdateTable'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810UpdateTableReplicaAutoScaling(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateTableReplicaAutoScaling']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.UpdateTableReplicaAutoScaling'].$post(args, options),
  )
}

export async function postXAmzTargetDynamoDB20120810UpdateTimeToLive(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateTimeToLive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DynamoDB_20120810.UpdateTimeToLive'].$post(args, options),
  )
}
