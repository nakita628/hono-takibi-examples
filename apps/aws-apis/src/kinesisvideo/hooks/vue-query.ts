import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
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

export function getPostCreateSignalingChannelMutationKey() {
  return ['createSignalingChannel', '/createSignalingChannel', 'POST'] as const
}

export function getPostCreateSignalingChannelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.createSignalingChannel.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.createSignalingChannel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateSignalingChannelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createSignalingChannel.$post>) {
      return parseResponse(client.createSignalingChannel.$post(args, options))
    },
  })
}

export function usePostCreateSignalingChannel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.createSignalingChannel.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.createSignalingChannel.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreateSignalingChannelMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCreateStreamMutationKey() {
  return ['createStream', '/createStream', 'POST'] as const
}

export function getPostCreateStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createStream.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.createStream.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateStreamMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createStream.$post>) {
      return parseResponse(client.createStream.$post(args, options))
    },
  })
}

export function usePostCreateStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createStream.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.createStream.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreateStreamMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDeleteSignalingChannelMutationKey() {
  return ['deleteSignalingChannel', '/deleteSignalingChannel', 'POST'] as const
}

export function getPostDeleteSignalingChannelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.deleteSignalingChannel.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.deleteSignalingChannel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteSignalingChannelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deleteSignalingChannel.$post>) {
      return parseResponse(client.deleteSignalingChannel.$post(args, options))
    },
  })
}

export function usePostDeleteSignalingChannel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.deleteSignalingChannel.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.deleteSignalingChannel.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeleteSignalingChannelMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDeleteStreamMutationKey() {
  return ['deleteStream', '/deleteStream', 'POST'] as const
}

export function getPostDeleteStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteStream.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.deleteStream.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteStreamMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deleteStream.$post>) {
      return parseResponse(client.deleteStream.$post(args, options))
    },
  })
}

export function usePostDeleteStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteStream.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.deleteStream.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeleteStreamMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDescribeEdgeConfigurationMutationKey() {
  return ['describeEdgeConfiguration', '/describeEdgeConfiguration', 'POST'] as const
}

export function getPostDescribeEdgeConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.describeEdgeConfiguration.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.describeEdgeConfiguration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeEdgeConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.describeEdgeConfiguration.$post>) {
      return parseResponse(client.describeEdgeConfiguration.$post(args, options))
    },
  })
}

export function usePostDescribeEdgeConfiguration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.describeEdgeConfiguration.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.describeEdgeConfiguration.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDescribeEdgeConfigurationMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDescribeImageGenerationConfigurationMutationKey() {
  return [
    'describeImageGenerationConfiguration',
    '/describeImageGenerationConfiguration',
    'POST',
  ] as const
}

export function getPostDescribeImageGenerationConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.describeImageGenerationConfiguration.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.describeImageGenerationConfiguration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeImageGenerationConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.describeImageGenerationConfiguration.$post>,
    ) {
      return parseResponse(client.describeImageGenerationConfiguration.$post(args, options))
    },
  })
}

export function usePostDescribeImageGenerationConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.describeImageGenerationConfiguration.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.describeImageGenerationConfiguration.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDescribeImageGenerationConfigurationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDescribeMappedResourceConfigurationMutationKey() {
  return [
    'describeMappedResourceConfiguration',
    '/describeMappedResourceConfiguration',
    'POST',
  ] as const
}

export function getPostDescribeMappedResourceConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.describeMappedResourceConfiguration.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.describeMappedResourceConfiguration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeMappedResourceConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.describeMappedResourceConfiguration.$post>,
    ) {
      return parseResponse(client.describeMappedResourceConfiguration.$post(args, options))
    },
  })
}

export function usePostDescribeMappedResourceConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.describeMappedResourceConfiguration.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.describeMappedResourceConfiguration.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDescribeMappedResourceConfigurationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDescribeMediaStorageConfigurationMutationKey() {
  return [
    'describeMediaStorageConfiguration',
    '/describeMediaStorageConfiguration',
    'POST',
  ] as const
}

export function getPostDescribeMediaStorageConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.describeMediaStorageConfiguration.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.describeMediaStorageConfiguration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeMediaStorageConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.describeMediaStorageConfiguration.$post>,
    ) {
      return parseResponse(client.describeMediaStorageConfiguration.$post(args, options))
    },
  })
}

export function usePostDescribeMediaStorageConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.describeMediaStorageConfiguration.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.describeMediaStorageConfiguration.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDescribeMediaStorageConfigurationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDescribeNotificationConfigurationMutationKey() {
  return [
    'describeNotificationConfiguration',
    '/describeNotificationConfiguration',
    'POST',
  ] as const
}

export function getPostDescribeNotificationConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.describeNotificationConfiguration.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.describeNotificationConfiguration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeNotificationConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.describeNotificationConfiguration.$post>,
    ) {
      return parseResponse(client.describeNotificationConfiguration.$post(args, options))
    },
  })
}

export function usePostDescribeNotificationConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.describeNotificationConfiguration.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.describeNotificationConfiguration.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDescribeNotificationConfigurationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDescribeSignalingChannelMutationKey() {
  return ['describeSignalingChannel', '/describeSignalingChannel', 'POST'] as const
}

export function getPostDescribeSignalingChannelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.describeSignalingChannel.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.describeSignalingChannel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeSignalingChannelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.describeSignalingChannel.$post>) {
      return parseResponse(client.describeSignalingChannel.$post(args, options))
    },
  })
}

export function usePostDescribeSignalingChannel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.describeSignalingChannel.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.describeSignalingChannel.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDescribeSignalingChannelMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDescribeStreamMutationKey() {
  return ['describeStream', '/describeStream', 'POST'] as const
}

export function getPostDescribeStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.describeStream.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.describeStream.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeStreamMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.describeStream.$post>) {
      return parseResponse(client.describeStream.$post(args, options))
    },
  })
}

export function usePostDescribeStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.describeStream.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.describeStream.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDescribeStreamMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetDataEndpointMutationKey() {
  return ['getDataEndpoint', '/getDataEndpoint', 'POST'] as const
}

export function getPostGetDataEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDataEndpoint.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.getDataEndpoint.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetDataEndpointMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getDataEndpoint.$post>) {
      return parseResponse(client.getDataEndpoint.$post(args, options))
    },
  })
}

export function usePostGetDataEndpoint<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getDataEndpoint.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.getDataEndpoint.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetDataEndpointMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetSignalingChannelEndpointMutationKey() {
  return ['getSignalingChannelEndpoint', '/getSignalingChannelEndpoint', 'POST'] as const
}

export function getPostGetSignalingChannelEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getSignalingChannelEndpoint.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.getSignalingChannelEndpoint.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetSignalingChannelEndpointMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getSignalingChannelEndpoint.$post>) {
      return parseResponse(client.getSignalingChannelEndpoint.$post(args, options))
    },
  })
}

export function usePostGetSignalingChannelEndpoint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.getSignalingChannelEndpoint.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.getSignalingChannelEndpoint.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetSignalingChannelEndpointMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListSignalingChannelsMutationKey() {
  return ['listSignalingChannels', '/listSignalingChannels', 'POST'] as const
}

export function getPostListSignalingChannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.listSignalingChannels.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.listSignalingChannels.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListSignalingChannelsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listSignalingChannels.$post>) {
      return parseResponse(client.listSignalingChannels.$post(args, options))
    },
  })
}

export function usePostListSignalingChannels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listSignalingChannels.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.listSignalingChannels.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListSignalingChannelsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListStreamsMutationKey() {
  return ['listStreams', '/listStreams', 'POST'] as const
}

export function getPostListStreamsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listStreams.$post>>>>>,
    TError,
    InferRequestType<typeof client.listStreams.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListStreamsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listStreams.$post>) {
      return parseResponse(client.listStreams.$post(args, options))
    },
  })
}

export function usePostListStreams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listStreams.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.listStreams.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListStreamsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListTagsForResourceMutationKey() {
  return ['ListTagsForResource', '/ListTagsForResource', 'POST'] as const
}

export function getPostListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListTagsForResource.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ListTagsForResource.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListTagsForResourceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListTagsForResource.$post>) {
      return parseResponse(client.ListTagsForResource.$post(args, options))
    },
  })
}

export function usePostListTagsForResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ListTagsForResource.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.ListTagsForResource.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListTagsForResourceMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListTagsForStreamMutationKey() {
  return ['listTagsForStream', '/listTagsForStream', 'POST'] as const
}

export function getPostListTagsForStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listTagsForStream.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.listTagsForStream.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListTagsForStreamMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listTagsForStream.$post>) {
      return parseResponse(client.listTagsForStream.$post(args, options))
    },
  })
}

export function usePostListTagsForStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listTagsForStream.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.listTagsForStream.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListTagsForStreamMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostStartEdgeConfigurationUpdateMutationKey() {
  return ['startEdgeConfigurationUpdate', '/startEdgeConfigurationUpdate', 'POST'] as const
}

export function getPostStartEdgeConfigurationUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.startEdgeConfigurationUpdate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.startEdgeConfigurationUpdate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStartEdgeConfigurationUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.startEdgeConfigurationUpdate.$post>) {
      return parseResponse(client.startEdgeConfigurationUpdate.$post(args, options))
    },
  })
}

export function usePostStartEdgeConfigurationUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.startEdgeConfigurationUpdate.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.startEdgeConfigurationUpdate.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStartEdgeConfigurationUpdateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTagResourceMutationKey() {
  return ['TagResource', '/TagResource', 'POST'] as const
}

export function getPostTagResourceMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TagResource.$post>>>>>,
    TError,
    InferRequestType<typeof client.TagResource.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTagResourceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.TagResource.$post>) {
      return parseResponse(client.TagResource.$post(args, options))
    },
  })
}

export function usePostTagResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TagResource.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.TagResource.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagResourceMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTagStreamMutationKey() {
  return ['tagStream', '/tagStream', 'POST'] as const
}

export function getPostTagStreamMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tagStream.$post>>>>>,
    TError,
    InferRequestType<typeof client.tagStream.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTagStreamMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tagStream.$post>) {
      return parseResponse(client.tagStream.$post(args, options))
    },
  })
}

export function usePostTagStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tagStream.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.tagStream.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagStreamMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUntagResourceMutationKey() {
  return ['UntagResource', '/UntagResource', 'POST'] as const
}

export function getPostUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UntagResource.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.UntagResource.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUntagResourceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.UntagResource.$post>) {
      return parseResponse(client.UntagResource.$post(args, options))
    },
  })
}

export function usePostUntagResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UntagResource.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.UntagResource.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUntagResourceMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUntagStreamMutationKey() {
  return ['untagStream', '/untagStream', 'POST'] as const
}

export function getPostUntagStreamMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.untagStream.$post>>>>>,
    TError,
    InferRequestType<typeof client.untagStream.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUntagStreamMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.untagStream.$post>) {
      return parseResponse(client.untagStream.$post(args, options))
    },
  })
}

export function usePostUntagStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.untagStream.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.untagStream.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUntagStreamMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUpdateDataRetentionMutationKey() {
  return ['updateDataRetention', '/updateDataRetention', 'POST'] as const
}

export function getPostUpdateDataRetentionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.updateDataRetention.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.updateDataRetention.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateDataRetentionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.updateDataRetention.$post>) {
      return parseResponse(client.updateDataRetention.$post(args, options))
    },
  })
}

export function usePostUpdateDataRetention<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.updateDataRetention.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.updateDataRetention.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUpdateDataRetentionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUpdateImageGenerationConfigurationMutationKey() {
  return [
    'updateImageGenerationConfiguration',
    '/updateImageGenerationConfiguration',
    'POST',
  ] as const
}

export function getPostUpdateImageGenerationConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.updateImageGenerationConfiguration.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.updateImageGenerationConfiguration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateImageGenerationConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.updateImageGenerationConfiguration.$post>,
    ) {
      return parseResponse(client.updateImageGenerationConfiguration.$post(args, options))
    },
  })
}

export function usePostUpdateImageGenerationConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.updateImageGenerationConfiguration.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.updateImageGenerationConfiguration.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUpdateImageGenerationConfigurationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUpdateMediaStorageConfigurationMutationKey() {
  return ['updateMediaStorageConfiguration', '/updateMediaStorageConfiguration', 'POST'] as const
}

export function getPostUpdateMediaStorageConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.updateMediaStorageConfiguration.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.updateMediaStorageConfiguration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateMediaStorageConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.updateMediaStorageConfiguration.$post>) {
      return parseResponse(client.updateMediaStorageConfiguration.$post(args, options))
    },
  })
}

export function usePostUpdateMediaStorageConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.updateMediaStorageConfiguration.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.updateMediaStorageConfiguration.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUpdateMediaStorageConfigurationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUpdateNotificationConfigurationMutationKey() {
  return ['updateNotificationConfiguration', '/updateNotificationConfiguration', 'POST'] as const
}

export function getPostUpdateNotificationConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.updateNotificationConfiguration.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.updateNotificationConfiguration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateNotificationConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.updateNotificationConfiguration.$post>) {
      return parseResponse(client.updateNotificationConfiguration.$post(args, options))
    },
  })
}

export function usePostUpdateNotificationConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.updateNotificationConfiguration.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.updateNotificationConfiguration.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUpdateNotificationConfigurationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUpdateSignalingChannelMutationKey() {
  return ['updateSignalingChannel', '/updateSignalingChannel', 'POST'] as const
}

export function getPostUpdateSignalingChannelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.updateSignalingChannel.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.updateSignalingChannel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateSignalingChannelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.updateSignalingChannel.$post>) {
      return parseResponse(client.updateSignalingChannel.$post(args, options))
    },
  })
}

export function usePostUpdateSignalingChannel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.updateSignalingChannel.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.updateSignalingChannel.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUpdateSignalingChannelMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUpdateStreamMutationKey() {
  return ['updateStream', '/updateStream', 'POST'] as const
}

export function getPostUpdateStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.updateStream.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.updateStream.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateStreamMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.updateStream.$post>) {
      return parseResponse(client.updateStream.$post(args, options))
    },
  })
}

export function usePostUpdateStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.updateStream.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.updateStream.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUpdateStreamMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
