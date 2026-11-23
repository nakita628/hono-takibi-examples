import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetKinesisAnalytics20150814AddApplicationCloudWatchLoggingOption(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetKinesisAnalytics20150814AddApplicationInput(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInput']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInput'].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20150814AddApplicationInputProcessingConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration'
    ].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20150814AddApplicationOutput(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationOutput']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationOutput'].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20150814AddApplicationReferenceDataSource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationReferenceDataSource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationReferenceDataSource'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetKinesisAnalytics20150814CreateApplication(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.CreateApplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20150814.CreateApplication'].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20150814DeleteApplication(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplication'].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20150814DeleteApplicationCloudWatchLoggingOption(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption'
    ].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20150814DeleteApplicationInputProcessingConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration'
    ].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20150814DeleteApplicationOutput(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationOutput']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationOutput'].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20150814DeleteApplicationReferenceDataSource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetKinesisAnalytics20150814DescribeApplication(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DescribeApplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20150814.DescribeApplication'].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20150814DiscoverInputSchema(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.DiscoverInputSchema']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20150814.DiscoverInputSchema'].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20150814ListApplications(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.ListApplications']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20150814.ListApplications'].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20150814ListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20150814.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20150814StartApplication(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.StartApplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20150814.StartApplication'].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20150814StopApplication(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.StopApplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20150814.StopApplication'].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20150814TagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.TagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20150814.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20150814UntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20150814.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetKinesisAnalytics20150814UpdateApplication(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=KinesisAnalytics_20150814.UpdateApplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=KinesisAnalytics_20150814.UpdateApplication'].$post(args, options),
  )
}
