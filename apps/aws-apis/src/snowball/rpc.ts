import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAWSIESnowballJobManagementServiceCancelCluster(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CancelCluster']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIESnowballJobManagementService.CancelCluster'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIESnowballJobManagementServiceCancelJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CancelJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIESnowballJobManagementService.CancelJob'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIESnowballJobManagementServiceCreateAddress(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateAddress']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIESnowballJobManagementService.CreateAddress'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIESnowballJobManagementServiceCreateCluster(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateCluster']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIESnowballJobManagementService.CreateCluster'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIESnowballJobManagementServiceCreateJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIESnowballJobManagementService.CreateJob'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIESnowballJobManagementServiceCreateLongTermPricing(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateLongTermPricing']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIESnowballJobManagementService.CreateLongTermPricing'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSIESnowballJobManagementServiceCreateReturnShippingLabel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.CreateReturnShippingLabel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIESnowballJobManagementService.CreateReturnShippingLabel'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSIESnowballJobManagementServiceDescribeAddress(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddress']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddress'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIESnowballJobManagementServiceDescribeAddresses(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddresses']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddresses'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSIESnowballJobManagementServiceDescribeCluster(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeCluster']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeCluster'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIESnowballJobManagementServiceDescribeJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeJob'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIESnowballJobManagementServiceDescribeReturnShippingLabel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeReturnShippingLabel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIESnowballJobManagementService.DescribeReturnShippingLabel'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSIESnowballJobManagementServiceGetJobManifest(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetJobManifest']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIESnowballJobManagementService.GetJobManifest'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIESnowballJobManagementServiceGetJobUnlockCode(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetJobUnlockCode']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIESnowballJobManagementService.GetJobUnlockCode'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIESnowballJobManagementServiceGetSnowballUsage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetSnowballUsage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIESnowballJobManagementService.GetSnowballUsage'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIESnowballJobManagementServiceGetSoftwareUpdates(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.GetSoftwareUpdates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIESnowballJobManagementService.GetSoftwareUpdates'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSIESnowballJobManagementServiceListClusterJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListClusterJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIESnowballJobManagementService.ListClusterJobs'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIESnowballJobManagementServiceListClusters(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListClusters']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIESnowballJobManagementService.ListClusters'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIESnowballJobManagementServiceListCompatibleImages(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListCompatibleImages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIESnowballJobManagementService.ListCompatibleImages'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSIESnowballJobManagementServiceListJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIESnowballJobManagementService.ListJobs'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIESnowballJobManagementServiceListLongTermPricing(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListLongTermPricing']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIESnowballJobManagementService.ListLongTermPricing'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSIESnowballJobManagementServiceListServiceVersions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.ListServiceVersions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIESnowballJobManagementService.ListServiceVersions'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSIESnowballJobManagementServiceUpdateCluster(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateCluster']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateCluster'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIESnowballJobManagementServiceUpdateJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJob'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIESnowballJobManagementServiceUpdateJobShipmentState(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJobShipmentState']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJobShipmentState'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSIESnowballJobManagementServiceUpdateLongTermPricing(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateLongTermPricing']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIESnowballJobManagementService.UpdateLongTermPricing'].$post(
      args,
      options,
    ),
  )
}
