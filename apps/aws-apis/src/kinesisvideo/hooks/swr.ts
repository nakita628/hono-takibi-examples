import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getListTagsForResourceKey() {
  return ['ListTagsForResource'] as const
}

export function getTagResourceKey() {
  return ['TagResource'] as const
}

export function getUntagResourceKey() {
  return ['UntagResource'] as const
}

export function getCreateSignalingChannelKey() {
  return ['createSignalingChannel'] as const
}

export function getCreateStreamKey() {
  return ['createStream'] as const
}

export function getDeleteSignalingChannelKey() {
  return ['deleteSignalingChannel'] as const
}

export function getDeleteStreamKey() {
  return ['deleteStream'] as const
}

export function getDescribeEdgeConfigurationKey() {
  return ['describeEdgeConfiguration'] as const
}

export function getDescribeImageGenerationConfigurationKey() {
  return ['describeImageGenerationConfiguration'] as const
}

export function getDescribeMappedResourceConfigurationKey() {
  return ['describeMappedResourceConfiguration'] as const
}

export function getDescribeMediaStorageConfigurationKey() {
  return ['describeMediaStorageConfiguration'] as const
}

export function getDescribeNotificationConfigurationKey() {
  return ['describeNotificationConfiguration'] as const
}

export function getDescribeSignalingChannelKey() {
  return ['describeSignalingChannel'] as const
}

export function getDescribeStreamKey() {
  return ['describeStream'] as const
}

export function getGetDataEndpointKey() {
  return ['getDataEndpoint'] as const
}

export function getGetSignalingChannelEndpointKey() {
  return ['getSignalingChannelEndpoint'] as const
}

export function getListSignalingChannelsKey() {
  return ['listSignalingChannels'] as const
}

export function getListStreamsKey() {
  return ['listStreams'] as const
}

export function getListTagsForStreamKey() {
  return ['listTagsForStream'] as const
}

export function getStartEdgeConfigurationUpdateKey() {
  return ['startEdgeConfigurationUpdate'] as const
}

export function getTagStreamKey() {
  return ['tagStream'] as const
}

export function getUntagStreamKey() {
  return ['untagStream'] as const
}

export function getUpdateDataRetentionKey() {
  return ['updateDataRetention'] as const
}

export function getUpdateImageGenerationConfigurationKey() {
  return ['updateImageGenerationConfiguration'] as const
}

export function getUpdateMediaStorageConfigurationKey() {
  return ['updateMediaStorageConfiguration'] as const
}

export function getUpdateNotificationConfigurationKey() {
  return ['updateNotificationConfiguration'] as const
}

export function getUpdateSignalingChannelKey() {
  return ['updateSignalingChannel'] as const
}

export function getUpdateStreamKey() {
  return ['updateStream'] as const
}

export function getPostCreateSignalingChannelKey() {
  return ['createSignalingChannel', '/createSignalingChannel', 'POST'] as const
}

export function usePostCreateSignalingChannel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.createSignalingChannel.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.createSignalingChannel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateSignalingChannelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.createSignalingChannel.$post> },
      ) => parseResponse(client.createSignalingChannel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateStreamKey() {
  return ['createStream', '/createStream', 'POST'] as const
}

export function usePostCreateStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createStream.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.createStream.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.createStream.$post> }) =>
        parseResponse(client.createStream.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteSignalingChannelKey() {
  return ['deleteSignalingChannel', '/deleteSignalingChannel', 'POST'] as const
}

export function usePostDeleteSignalingChannel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.deleteSignalingChannel.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.deleteSignalingChannel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteSignalingChannelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.deleteSignalingChannel.$post> },
      ) => parseResponse(client.deleteSignalingChannel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteStreamKey() {
  return ['deleteStream', '/deleteStream', 'POST'] as const
}

export function usePostDeleteStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteStream.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.deleteStream.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.deleteStream.$post> }) =>
        parseResponse(client.deleteStream.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeEdgeConfigurationKey() {
  return ['describeEdgeConfiguration', '/describeEdgeConfiguration', 'POST'] as const
}

export function usePostDescribeEdgeConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.describeEdgeConfiguration.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.describeEdgeConfiguration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeEdgeConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.describeEdgeConfiguration.$post> },
      ) => parseResponse(client.describeEdgeConfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeImageGenerationConfigurationKey() {
  return [
    'describeImageGenerationConfiguration',
    '/describeImageGenerationConfiguration',
    'POST',
  ] as const
}

export function usePostDescribeImageGenerationConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.describeImageGenerationConfiguration.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.describeImageGenerationConfiguration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeImageGenerationConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.describeImageGenerationConfiguration.$post> },
      ) => parseResponse(client.describeImageGenerationConfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeMappedResourceConfigurationKey() {
  return [
    'describeMappedResourceConfiguration',
    '/describeMappedResourceConfiguration',
    'POST',
  ] as const
}

export function usePostDescribeMappedResourceConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.describeMappedResourceConfiguration.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.describeMappedResourceConfiguration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeMappedResourceConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.describeMappedResourceConfiguration.$post> },
      ) => parseResponse(client.describeMappedResourceConfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeMediaStorageConfigurationKey() {
  return [
    'describeMediaStorageConfiguration',
    '/describeMediaStorageConfiguration',
    'POST',
  ] as const
}

export function usePostDescribeMediaStorageConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.describeMediaStorageConfiguration.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.describeMediaStorageConfiguration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeMediaStorageConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.describeMediaStorageConfiguration.$post> },
      ) => parseResponse(client.describeMediaStorageConfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeNotificationConfigurationKey() {
  return [
    'describeNotificationConfiguration',
    '/describeNotificationConfiguration',
    'POST',
  ] as const
}

export function usePostDescribeNotificationConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.describeNotificationConfiguration.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.describeNotificationConfiguration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeNotificationConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.describeNotificationConfiguration.$post> },
      ) => parseResponse(client.describeNotificationConfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeSignalingChannelKey() {
  return ['describeSignalingChannel', '/describeSignalingChannel', 'POST'] as const
}

export function usePostDescribeSignalingChannel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.describeSignalingChannel.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.describeSignalingChannel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeSignalingChannelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.describeSignalingChannel.$post> },
      ) => parseResponse(client.describeSignalingChannel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeStreamKey() {
  return ['describeStream', '/describeStream', 'POST'] as const
}

export function usePostDescribeStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.describeStream.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.describeStream.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.describeStream.$post> }) =>
        parseResponse(client.describeStream.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetDataEndpointKey() {
  return ['getDataEndpoint', '/getDataEndpoint', 'POST'] as const
}

export function usePostGetDataEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDataEndpoint.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.getDataEndpoint.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetDataEndpointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getDataEndpoint.$post> }) =>
        parseResponse(client.getDataEndpoint.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetSignalingChannelEndpointKey() {
  return ['getSignalingChannelEndpoint', '/getSignalingChannelEndpoint', 'POST'] as const
}

export function usePostGetSignalingChannelEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getSignalingChannelEndpoint.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.getSignalingChannelEndpoint.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetSignalingChannelEndpointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.getSignalingChannelEndpoint.$post> },
      ) => parseResponse(client.getSignalingChannelEndpoint.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListSignalingChannelsKey() {
  return ['listSignalingChannels', '/listSignalingChannels', 'POST'] as const
}

export function usePostListSignalingChannels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.listSignalingChannels.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.listSignalingChannels.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListSignalingChannelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.listSignalingChannels.$post> },
      ) => parseResponse(client.listSignalingChannels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListStreamsKey() {
  return ['listStreams', '/listStreams', 'POST'] as const
}

export function usePostListStreams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listStreams.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.listStreams.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListStreamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listStreams.$post> }) =>
        parseResponse(client.listStreams.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListTagsForResourceKey() {
  return ['ListTagsForResource', '/ListTagsForResource', 'POST'] as const
}

export function usePostListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListTagsForResource.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListTagsForResource.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListTagsForResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ListTagsForResource.$post> }) =>
        parseResponse(client.ListTagsForResource.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListTagsForStreamKey() {
  return ['listTagsForStream', '/listTagsForStream', 'POST'] as const
}

export function usePostListTagsForStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listTagsForStream.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.listTagsForStream.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListTagsForStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listTagsForStream.$post> }) =>
        parseResponse(client.listTagsForStream.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStartEdgeConfigurationUpdateKey() {
  return ['startEdgeConfigurationUpdate', '/startEdgeConfigurationUpdate', 'POST'] as const
}

export function usePostStartEdgeConfigurationUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.startEdgeConfigurationUpdate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.startEdgeConfigurationUpdate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStartEdgeConfigurationUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.startEdgeConfigurationUpdate.$post> },
      ) => parseResponse(client.startEdgeConfigurationUpdate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTagResourceKey() {
  return ['TagResource', '/TagResource', 'POST'] as const
}

export function usePostTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TagResource.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.TagResource.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.TagResource.$post> }) =>
        parseResponse(client.TagResource.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTagStreamKey() {
  return ['tagStream', '/tagStream', 'POST'] as const
}

export function usePostTagStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tagStream.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tagStream.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tagStream.$post> }) =>
        parseResponse(client.tagStream.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUntagResourceKey() {
  return ['UntagResource', '/UntagResource', 'POST'] as const
}

export function usePostUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UntagResource.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.UntagResource.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUntagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.UntagResource.$post> }) =>
        parseResponse(client.UntagResource.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUntagStreamKey() {
  return ['untagStream', '/untagStream', 'POST'] as const
}

export function usePostUntagStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.untagStream.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.untagStream.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUntagStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.untagStream.$post> }) =>
        parseResponse(client.untagStream.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateDataRetentionKey() {
  return ['updateDataRetention', '/updateDataRetention', 'POST'] as const
}

export function usePostUpdateDataRetention<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.updateDataRetention.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.updateDataRetention.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateDataRetentionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.updateDataRetention.$post> }) =>
        parseResponse(client.updateDataRetention.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateImageGenerationConfigurationKey() {
  return [
    'updateImageGenerationConfiguration',
    '/updateImageGenerationConfiguration',
    'POST',
  ] as const
}

export function usePostUpdateImageGenerationConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.updateImageGenerationConfiguration.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.updateImageGenerationConfiguration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateImageGenerationConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.updateImageGenerationConfiguration.$post> },
      ) => parseResponse(client.updateImageGenerationConfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateMediaStorageConfigurationKey() {
  return ['updateMediaStorageConfiguration', '/updateMediaStorageConfiguration', 'POST'] as const
}

export function usePostUpdateMediaStorageConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.updateMediaStorageConfiguration.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.updateMediaStorageConfiguration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateMediaStorageConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.updateMediaStorageConfiguration.$post> },
      ) => parseResponse(client.updateMediaStorageConfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateNotificationConfigurationKey() {
  return ['updateNotificationConfiguration', '/updateNotificationConfiguration', 'POST'] as const
}

export function usePostUpdateNotificationConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.updateNotificationConfiguration.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.updateNotificationConfiguration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateNotificationConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.updateNotificationConfiguration.$post> },
      ) => parseResponse(client.updateNotificationConfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateSignalingChannelKey() {
  return ['updateSignalingChannel', '/updateSignalingChannel', 'POST'] as const
}

export function usePostUpdateSignalingChannel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.updateSignalingChannel.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.updateSignalingChannel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateSignalingChannelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.updateSignalingChannel.$post> },
      ) => parseResponse(client.updateSignalingChannel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateStreamKey() {
  return ['updateStream', '/updateStream', 'POST'] as const
}

export function usePostUpdateStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.updateStream.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.updateStream.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.updateStream.$post> }) =>
        parseResponse(client.updateStream.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
