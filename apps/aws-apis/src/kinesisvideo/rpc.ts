import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCreateSignalingChannel(
  args: InferRequestType<typeof client.createSignalingChannel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createSignalingChannel.$post(args, options))
}

export async function postCreateStream(
  args: InferRequestType<typeof client.createStream.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createStream.$post(args, options))
}

export async function postDeleteSignalingChannel(
  args: InferRequestType<typeof client.deleteSignalingChannel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deleteSignalingChannel.$post(args, options))
}

export async function postDeleteStream(
  args: InferRequestType<typeof client.deleteStream.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deleteStream.$post(args, options))
}

export async function postDescribeEdgeConfiguration(
  args: InferRequestType<typeof client.describeEdgeConfiguration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.describeEdgeConfiguration.$post(args, options))
}

export async function postDescribeImageGenerationConfiguration(
  args: InferRequestType<typeof client.describeImageGenerationConfiguration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.describeImageGenerationConfiguration.$post(args, options))
}

export async function postDescribeMappedResourceConfiguration(
  args: InferRequestType<typeof client.describeMappedResourceConfiguration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.describeMappedResourceConfiguration.$post(args, options))
}

export async function postDescribeMediaStorageConfiguration(
  args: InferRequestType<typeof client.describeMediaStorageConfiguration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.describeMediaStorageConfiguration.$post(args, options))
}

export async function postDescribeNotificationConfiguration(
  args: InferRequestType<typeof client.describeNotificationConfiguration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.describeNotificationConfiguration.$post(args, options))
}

export async function postDescribeSignalingChannel(
  args: InferRequestType<typeof client.describeSignalingChannel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.describeSignalingChannel.$post(args, options))
}

export async function postDescribeStream(
  args: InferRequestType<typeof client.describeStream.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.describeStream.$post(args, options))
}

export async function postGetDataEndpoint(
  args: InferRequestType<typeof client.getDataEndpoint.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getDataEndpoint.$post(args, options))
}

export async function postGetSignalingChannelEndpoint(
  args: InferRequestType<typeof client.getSignalingChannelEndpoint.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getSignalingChannelEndpoint.$post(args, options))
}

export async function postListSignalingChannels(
  args: InferRequestType<typeof client.listSignalingChannels.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listSignalingChannels.$post(args, options))
}

export async function postListStreams(
  args: InferRequestType<typeof client.listStreams.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listStreams.$post(args, options))
}

export async function postListTagsForResource(
  args: InferRequestType<typeof client.ListTagsForResource.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListTagsForResource.$post(args, options))
}

export async function postListTagsForStream(
  args: InferRequestType<typeof client.listTagsForStream.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listTagsForStream.$post(args, options))
}

export async function postStartEdgeConfigurationUpdate(
  args: InferRequestType<typeof client.startEdgeConfigurationUpdate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.startEdgeConfigurationUpdate.$post(args, options))
}

export async function postTagResource(
  args: InferRequestType<typeof client.TagResource.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.TagResource.$post(args, options))
}

export async function postTagStream(
  args: InferRequestType<typeof client.tagStream.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagStream.$post(args, options))
}

export async function postUntagResource(
  args: InferRequestType<typeof client.UntagResource.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UntagResource.$post(args, options))
}

export async function postUntagStream(
  args: InferRequestType<typeof client.untagStream.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.untagStream.$post(args, options))
}

export async function postUpdateDataRetention(
  args: InferRequestType<typeof client.updateDataRetention.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.updateDataRetention.$post(args, options))
}

export async function postUpdateImageGenerationConfiguration(
  args: InferRequestType<typeof client.updateImageGenerationConfiguration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.updateImageGenerationConfiguration.$post(args, options))
}

export async function postUpdateMediaStorageConfiguration(
  args: InferRequestType<typeof client.updateMediaStorageConfiguration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.updateMediaStorageConfiguration.$post(args, options))
}

export async function postUpdateNotificationConfiguration(
  args: InferRequestType<typeof client.updateNotificationConfiguration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.updateNotificationConfiguration.$post(args, options))
}

export async function postUpdateSignalingChannel(
  args: InferRequestType<typeof client.updateSignalingChannel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.updateSignalingChannel.$post(args, options))
}

export async function postUpdateStream(
  args: InferRequestType<typeof client.updateStream.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.updateStream.$post(args, options))
}
