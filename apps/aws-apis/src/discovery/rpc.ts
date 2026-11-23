import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAWSPoseidonServiceV20151101AssociateConfigurationItemsToApplication(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication'
    ].$post(args, options),
  )
}

export async function postXAmzTargetAWSPoseidonServiceV20151101BatchDeleteImportData(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.BatchDeleteImportData']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.BatchDeleteImportData'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSPoseidonServiceV20151101CreateApplication(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateApplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateApplication'].$post(args, options),
  )
}

export async function postXAmzTargetAWSPoseidonServiceV20151101CreateTags(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateTags']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateTags'].$post(args, options),
  )
}

export async function postXAmzTargetAWSPoseidonServiceV20151101DeleteApplications(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteApplications']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteApplications'].$post(args, options),
  )
}

export async function postXAmzTargetAWSPoseidonServiceV20151101DeleteTags(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteTags']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteTags'].$post(args, options),
  )
}

export async function postXAmzTargetAWSPoseidonServiceV20151101DescribeAgents(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeAgents']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeAgents'].$post(args, options),
  )
}

export async function postXAmzTargetAWSPoseidonServiceV20151101DescribeConfigurations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeConfigurations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeConfigurations'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSPoseidonServiceV20151101DescribeContinuousExports(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeContinuousExports']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeContinuousExports'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSPoseidonServiceV20151101DescribeExportConfigurations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportConfigurations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportConfigurations'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSPoseidonServiceV20151101DescribeExportTasks(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportTasks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportTasks'].$post(args, options),
  )
}

export async function postXAmzTargetAWSPoseidonServiceV20151101DescribeImportTasks(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeImportTasks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeImportTasks'].$post(args, options),
  )
}

export async function postXAmzTargetAWSPoseidonServiceV20151101DescribeTags(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeTags']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeTags'].$post(args, options),
  )
}

export async function postXAmzTargetAWSPoseidonServiceV20151101DisassociateConfigurationItemsFromApplication(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication'
    ].$post(args, options),
  )
}

export async function postXAmzTargetAWSPoseidonServiceV20151101ExportConfigurations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ExportConfigurations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ExportConfigurations'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSPoseidonServiceV20151101GetDiscoverySummary(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.GetDiscoverySummary']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.GetDiscoverySummary'].$post(args, options),
  )
}

export async function postXAmzTargetAWSPoseidonServiceV20151101ListConfigurations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListConfigurations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListConfigurations'].$post(args, options),
  )
}

export async function postXAmzTargetAWSPoseidonServiceV20151101ListServerNeighbors(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListServerNeighbors']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListServerNeighbors'].$post(args, options),
  )
}

export async function postXAmzTargetAWSPoseidonServiceV20151101StartContinuousExport(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartContinuousExport']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartContinuousExport'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSPoseidonServiceV20151101StartDataCollectionByAgentIds(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSPoseidonServiceV20151101StartExportTask(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartExportTask']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartExportTask'].$post(args, options),
  )
}

export async function postXAmzTargetAWSPoseidonServiceV20151101StartImportTask(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartImportTask']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartImportTask'].$post(args, options),
  )
}

export async function postXAmzTargetAWSPoseidonServiceV20151101StopContinuousExport(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopContinuousExport']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopContinuousExport'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSPoseidonServiceV20151101StopDataCollectionByAgentIds(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSPoseidonServiceV20151101UpdateApplication(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.UpdateApplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.UpdateApplication'].$post(args, options),
  )
}
