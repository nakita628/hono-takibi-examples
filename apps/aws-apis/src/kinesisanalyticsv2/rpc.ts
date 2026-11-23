import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetKinesisAnalytics20180523AddApplicationCloudWatchLoggingOption(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetKinesisAnalytics20180523AddApplicationInput(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInput']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInput'].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20180523AddApplicationInputProcessingConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration'
    ].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20180523AddApplicationOutput(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationOutput']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationOutput'].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20180523AddApplicationReferenceDataSource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationReferenceDataSource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationReferenceDataSource'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetKinesisAnalytics20180523AddApplicationVpcConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationVpcConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationVpcConfiguration'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetKinesisAnalytics20180523CreateApplication(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplication'].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20180523CreateApplicationPresignedUrl(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationPresignedUrl']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationPresignedUrl'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetKinesisAnalytics20180523CreateApplicationSnapshot(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationSnapshot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationSnapshot'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetKinesisAnalytics20180523DeleteApplication(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplication'].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20180523DeleteApplicationCloudWatchLoggingOption(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption'
    ].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20180523DeleteApplicationInputProcessingConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration'
    ].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20180523DeleteApplicationOutput(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationOutput']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationOutput'].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20180523DeleteApplicationReferenceDataSource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetKinesisAnalytics20180523DeleteApplicationSnapshot(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationSnapshot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationSnapshot'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetKinesisAnalytics20180523DeleteApplicationVpcConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetKinesisAnalytics20180523DescribeApplication(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplication'].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20180523DescribeApplicationSnapshot(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationSnapshot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationSnapshot'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetKinesisAnalytics20180523DescribeApplicationVersion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationVersion'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetKinesisAnalytics20180523DiscoverInputSchema(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.DiscoverInputSchema']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20180523.DiscoverInputSchema'].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20180523ListApplicationSnapshots(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationSnapshots']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationSnapshots'].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20180523ListApplicationVersions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationVersions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationVersions'].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20180523ListApplications(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.ListApplications']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20180523.ListApplications'].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20180523ListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20180523.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20180523RollbackApplication(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.RollbackApplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20180523.RollbackApplication'].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20180523StartApplication(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.StartApplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20180523.StartApplication'].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20180523StopApplication(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.StopApplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20180523.StopApplication'].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20180523TagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.TagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20180523.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20180523UntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20180523.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20180523UpdateApplication(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplication'].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20180523UpdateApplicationMaintenanceConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration'
    ].$post(args, options),
  )
}
