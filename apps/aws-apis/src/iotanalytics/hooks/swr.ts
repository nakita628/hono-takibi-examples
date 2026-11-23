import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getChannelsKey() {
  return ['channels'] as const
}

export function getDatasetsKey() {
  return ['datasets'] as const
}

export function getDatastoresKey() {
  return ['datastores'] as const
}

export function getLoggingKey() {
  return ['logging'] as const
}

export function getMessagesKey() {
  return ['messages'] as const
}

export function getPipelineactivitiesKey() {
  return ['pipelineactivities'] as const
}

export function getPipelinesKey() {
  return ['pipelines'] as const
}

export function getTagsResourceArnKey() {
  return ['tags#resourceArn'] as const
}

export function getTagsResourceArnTagKeysKey() {
  return ['tags#resourceArn&tagKeys'] as const
}

export function getPostMessagesBatchKey() {
  return ['messages', '/messages/batch', 'POST'] as const
}

export function usePostMessagesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.batch.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.messages.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagesBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.messages.batch.$post> }) =>
        parseResponse(client.messages.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePipelinesPipelineNameReprocessingReprocessingIdKey() {
  return ['pipelines', '/pipelines/:pipelineName/reprocessing/:reprocessingId', 'DELETE'] as const
}

export function useDeletePipelinesPipelineNameReprocessingReprocessingId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.pipelines)[':pipelineName']['reprocessing'][':reprocessingId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.pipelines)[':pipelineName']['reprocessing'][':reprocessingId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePipelinesPipelineNameReprocessingReprocessingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.pipelines)[':pipelineName']['reprocessing'][':reprocessingId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.pipelines[':pipelineName'].reprocessing[':reprocessingId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsKey(args: InferRequestType<typeof client.channels.$get>) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels', keyArgs] as const
}

export function useGetChannels<TError = unknown>(
  args: InferRequestType<typeof client.channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChannelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.channels.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetChannels<TError = unknown>(
  args: InferRequestType<typeof client.channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChannelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.channels.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostChannelsKey() {
  return ['channels', '/channels', 'POST'] as const
}

export function usePostChannels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.channels.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.channels.$post> }) =>
        parseResponse(client.channels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatasetsKey(args: InferRequestType<typeof client.datasets.$get>) {
  const { header: _, ...keyArgs } = args
  return ['datasets', '/datasets', keyArgs] as const
}

export function useGetDatasets<TError = unknown>(
  args: InferRequestType<typeof client.datasets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDatasetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.datasets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetDatasets<TError = unknown>(
  args: InferRequestType<typeof client.datasets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDatasetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.datasets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostDatasetsKey() {
  return ['datasets', '/datasets', 'POST'] as const
}

export function usePostDatasets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.datasets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatasetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.datasets.$post> }) =>
        parseResponse(client.datasets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatasetsDatasetNameContentKey(
  args: InferRequestType<(typeof client.datasets)[':datasetName']['content']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['datasets', '/datasets/:datasetName/content', keyArgs] as const
}

export function useGetDatasetsDatasetNameContent<TError = unknown>(
  args: InferRequestType<(typeof client.datasets)[':datasetName']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasets)[':datasetName']['content']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatasetsDatasetNameContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasets)[':datasetName']['content']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datasets[':datasetName'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatasetsDatasetNameContent<TError = unknown>(
  args: InferRequestType<(typeof client.datasets)[':datasetName']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasets)[':datasetName']['content']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatasetsDatasetNameContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasets)[':datasetName']['content']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datasets[':datasetName'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDatasetsDatasetNameContentKey() {
  return ['datasets', '/datasets/:datasetName/content', 'POST'] as const
}

export function usePostDatasetsDatasetNameContent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datasets)[':datasetName']['content']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.datasets)[':datasetName']['content']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatasetsDatasetNameContentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.datasets)[':datasetName']['content']['$post']> },
      ) => parseResponse(client.datasets[':datasetName'].content.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDatasetsDatasetNameContentKey() {
  return ['datasets', '/datasets/:datasetName/content', 'DELETE'] as const
}

export function useDeleteDatasetsDatasetNameContent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasets)[':datasetName']['content']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.datasets)[':datasetName']['content']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDatasetsDatasetNameContentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.datasets)[':datasetName']['content']['$delete']>
        },
      ) => parseResponse(client.datasets[':datasetName'].content.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatastoresKey(args: InferRequestType<typeof client.datastores.$get>) {
  const { header: _, ...keyArgs } = args
  return ['datastores', '/datastores', keyArgs] as const
}

export function useGetDatastores<TError = unknown>(
  args: InferRequestType<typeof client.datastores.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datastores.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDatastoresKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datastores.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datastores.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatastores<TError = unknown>(
  args: InferRequestType<typeof client.datastores.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datastores.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDatastoresKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datastores.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datastores.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDatastoresKey() {
  return ['datastores', '/datastores', 'POST'] as const
}

export function usePostDatastores<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datastores.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.datastores.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatastoresKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.datastores.$post> }) =>
        parseResponse(client.datastores.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPipelinesKey(args: InferRequestType<typeof client.pipelines.$get>) {
  const { header: _, ...keyArgs } = args
  return ['pipelines', '/pipelines', keyArgs] as const
}

export function useGetPipelines<TError = unknown>(
  args: InferRequestType<typeof client.pipelines.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipelines.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPipelinesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipelines.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pipelines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPipelines<TError = unknown>(
  args: InferRequestType<typeof client.pipelines.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipelines.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPipelinesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipelines.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pipelines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPipelinesKey() {
  return ['pipelines', '/pipelines', 'POST'] as const
}

export function usePostPipelines<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipelines.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.pipelines.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPipelinesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.pipelines.$post> }) =>
        parseResponse(client.pipelines.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelNameKey(
  args: InferRequestType<(typeof client.channels)[':channelName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels/:channelName', keyArgs] as const
}

export function useGetChannelsChannelName<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channelName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channelName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChannelsChannelNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channelName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channelName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelName<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channelName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channelName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChannelsChannelNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channelName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channelName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutChannelsChannelNameKey() {
  return ['channels', '/channels/:channelName', 'PUT'] as const
}

export function usePutChannelsChannelName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channelName']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channelName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChannelsChannelNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.channels)[':channelName']['$put']> },
      ) => parseResponse(client.channels[':channelName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteChannelsChannelNameKey() {
  return ['channels', '/channels/:channelName', 'DELETE'] as const
}

export function useDeleteChannelsChannelName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channelName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channelName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChannelsChannelNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.channels)[':channelName']['$delete']> },
      ) => parseResponse(client.channels[':channelName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatasetsDatasetNameKey(
  args: InferRequestType<(typeof client.datasets)[':datasetName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['datasets', '/datasets/:datasetName', keyArgs] as const
}

export function useGetDatasetsDatasetName<TError = unknown>(
  args: InferRequestType<(typeof client.datasets)[':datasetName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasets)[':datasetName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatasetsDatasetNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasets)[':datasetName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datasets[':datasetName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatasetsDatasetName<TError = unknown>(
  args: InferRequestType<(typeof client.datasets)[':datasetName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasets)[':datasetName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatasetsDatasetNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasets)[':datasetName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datasets[':datasetName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDatasetsDatasetNameKey() {
  return ['datasets', '/datasets/:datasetName', 'PUT'] as const
}

export function usePutDatasetsDatasetName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':datasetName']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.datasets)[':datasetName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDatasetsDatasetNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.datasets)[':datasetName']['$put']> },
      ) => parseResponse(client.datasets[':datasetName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDatasetsDatasetNameKey() {
  return ['datasets', '/datasets/:datasetName', 'DELETE'] as const
}

export function useDeleteDatasetsDatasetName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasets)[':datasetName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.datasets)[':datasetName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDatasetsDatasetNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.datasets)[':datasetName']['$delete']> },
      ) => parseResponse(client.datasets[':datasetName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatastoresDatastoreNameKey(
  args: InferRequestType<(typeof client.datastores)[':datastoreName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['datastores', '/datastores/:datastoreName', keyArgs] as const
}

export function useGetDatastoresDatastoreName<TError = unknown>(
  args: InferRequestType<(typeof client.datastores)[':datastoreName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datastores)[':datastoreName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatastoresDatastoreNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datastores)[':datastoreName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datastores[':datastoreName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatastoresDatastoreName<TError = unknown>(
  args: InferRequestType<(typeof client.datastores)[':datastoreName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datastores)[':datastoreName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatastoresDatastoreNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datastores)[':datastoreName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datastores[':datastoreName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDatastoresDatastoreNameKey() {
  return ['datastores', '/datastores/:datastoreName', 'PUT'] as const
}

export function usePutDatastoresDatastoreName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datastores)[':datastoreName']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.datastores)[':datastoreName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDatastoresDatastoreNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.datastores)[':datastoreName']['$put']> },
      ) => parseResponse(client.datastores[':datastoreName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDatastoresDatastoreNameKey() {
  return ['datastores', '/datastores/:datastoreName', 'DELETE'] as const
}

export function useDeleteDatastoresDatastoreName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datastores)[':datastoreName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.datastores)[':datastoreName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDatastoresDatastoreNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.datastores)[':datastoreName']['$delete']> },
      ) => parseResponse(client.datastores[':datastoreName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPipelinesPipelineNameKey(
  args: InferRequestType<(typeof client.pipelines)[':pipelineName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['pipelines', '/pipelines/:pipelineName', keyArgs] as const
}

export function useGetPipelinesPipelineName<TError = unknown>(
  args: InferRequestType<(typeof client.pipelines)[':pipelineName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pipelines)[':pipelineName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPipelinesPipelineNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pipelines)[':pipelineName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pipelines[':pipelineName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPipelinesPipelineName<TError = unknown>(
  args: InferRequestType<(typeof client.pipelines)[':pipelineName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pipelines)[':pipelineName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPipelinesPipelineNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pipelines)[':pipelineName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pipelines[':pipelineName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPipelinesPipelineNameKey() {
  return ['pipelines', '/pipelines/:pipelineName', 'PUT'] as const
}

export function usePutPipelinesPipelineName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pipelines)[':pipelineName']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pipelines)[':pipelineName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPipelinesPipelineNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pipelines)[':pipelineName']['$put']> },
      ) => parseResponse(client.pipelines[':pipelineName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePipelinesPipelineNameKey() {
  return ['pipelines', '/pipelines/:pipelineName', 'DELETE'] as const
}

export function useDeletePipelinesPipelineName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pipelines)[':pipelineName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.pipelines)[':pipelineName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePipelinesPipelineNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pipelines)[':pipelineName']['$delete']> },
      ) => parseResponse(client.pipelines[':pipelineName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLoggingKey(args: InferRequestType<typeof client.logging.$get>) {
  const { header: _, ...keyArgs } = args
  return ['logging', '/logging', keyArgs] as const
}

export function useGetLogging<TError = unknown>(
  args: InferRequestType<typeof client.logging.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLoggingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.logging.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetLogging<TError = unknown>(
  args: InferRequestType<typeof client.logging.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLoggingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.logging.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutLoggingKey() {
  return ['logging', '/logging', 'PUT'] as const
}

export function usePutLogging<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.logging.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLoggingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.logging.$put> }) =>
        parseResponse(client.logging.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatasetsDatasetNameContentsKey(
  args: InferRequestType<(typeof client.datasets)[':datasetName']['contents']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['datasets', '/datasets/:datasetName/contents', keyArgs] as const
}

export function useGetDatasetsDatasetNameContents<TError = unknown>(
  args: InferRequestType<(typeof client.datasets)[':datasetName']['contents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasets)[':datasetName']['contents']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatasetsDatasetNameContentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasets)[':datasetName']['contents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datasets[':datasetName'].contents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatasetsDatasetNameContents<TError = unknown>(
  args: InferRequestType<(typeof client.datasets)[':datasetName']['contents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasets)[':datasetName']['contents']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatasetsDatasetNameContentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasets)[':datasetName']['contents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datasets[':datasetName'].contents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags#resourceArn', '/tags#resourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['tags#resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['tags#resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags#resourceArn', '/tags#resourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$post']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['tags#resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['tags#resourceArn']['$post']> },
      ) => parseResponse(client['tags#resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPipelineactivitiesRunKey() {
  return ['pipelineactivities', '/pipelineactivities/run', 'POST'] as const
}

export function usePostPipelineactivitiesRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.pipelineactivities.run.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.pipelineactivities.run.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPipelineactivitiesRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.pipelineactivities.run.$post> },
      ) => parseResponse(client.pipelineactivities.run.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelNameSampleKey(
  args: InferRequestType<(typeof client.channels)[':channelName']['sample']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels/:channelName/sample', keyArgs] as const
}

export function useGetChannelsChannelNameSample<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channelName']['sample']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channelName']['sample']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChannelsChannelNameSampleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channelName']['sample']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channelName'].sample.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelNameSample<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channelName']['sample']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channelName']['sample']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChannelsChannelNameSampleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channelName']['sample']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channelName'].sample.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPipelinesPipelineNameReprocessingKey() {
  return ['pipelines', '/pipelines/:pipelineName/reprocessing', 'POST'] as const
}

export function usePostPipelinesPipelineNameReprocessing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pipelines)[':pipelineName']['reprocessing']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pipelines)[':pipelineName']['reprocessing']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPipelinesPipelineNameReprocessingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.pipelines)[':pipelineName']['reprocessing']['$post']>
        },
      ) => parseResponse(client.pipelines[':pipelineName'].reprocessing.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags#resourceArn&tagKeys', '/tags#resourceArn&tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['tags#resourceArn&tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['tags#resourceArn&tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['tags#resourceArn&tagKeys']['$delete']> },
      ) => parseResponse(client['tags#resourceArn&tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
