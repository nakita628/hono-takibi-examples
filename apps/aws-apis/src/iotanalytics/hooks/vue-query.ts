import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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

export function getPostMessagesBatchMutationKey() {
  return ['messages', '/messages/batch', 'POST'] as const
}

export function getPostMessagesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.batch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.messages.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messages.batch.$post>) {
      return parseResponse(client.messages.batch.$post(args, options))
    },
  })
}

export function usePostMessagesBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.messages.batch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.messages.batch.$post>,
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
  const mutationDefaults = getPostMessagesBatchMutationOptions<TError, TOnMutateResult>(
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

export function getDeletePipelinesPipelineNameReprocessingReprocessingIdMutationKey() {
  return ['pipelines', '/pipelines/:pipelineName/reprocessing/:reprocessingId', 'DELETE'] as const
}

export function getDeletePipelinesPipelineNameReprocessingReprocessingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.pipelines)[':pipelineName']['reprocessing'][':reprocessingId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeletePipelinesPipelineNameReprocessingReprocessingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.pipelines)[':pipelineName']['reprocessing'][':reprocessingId']['$delete']
      >,
    ) {
      return parseResponse(
        client.pipelines[':pipelineName'].reprocessing[':reprocessingId'].$delete(args, options),
      )
    },
  })
}

export function useDeletePipelinesPipelineNameReprocessingReprocessingId<
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
                Awaited<
                  ReturnType<
                    (typeof client.pipelines)[':pipelineName']['reprocessing'][':reprocessingId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.pipelines)[':pipelineName']['reprocessing'][':reprocessingId']['$delete']
          >,
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
  const mutationDefaults = getDeletePipelinesPipelineNameReprocessingReprocessingIdMutationOptions<
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

export function getChannelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channels.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['channels', '/channels', keyArgs] as const
}

export function getChannelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channels.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channels.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
          >,
          ReturnType<typeof getChannelsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChannelsMutationKey() {
  return ['channels', '/channels', 'POST'] as const
}

export function getPostChannelsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$post>>>>>,
    TError,
    InferRequestType<typeof client.channels.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channels.$post>) {
      return parseResponse(client.channels.$post(args, options))
    },
  })
}

export function usePostChannels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.channels.$post>,
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
  const mutationDefaults = getPostChannelsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDatasetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datasets.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['datasets', '/datasets', keyArgs] as const
}

export function getDatasetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datasets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datasets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDatasets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datasets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$get>>>>
          >,
          ReturnType<typeof getDatasetsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDatasetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datasets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDatasetsMutationKey() {
  return ['datasets', '/datasets', 'POST'] as const
}

export function getPostDatasetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$post>>>>>,
    TError,
    InferRequestType<typeof client.datasets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDatasetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.datasets.$post>) {
      return parseResponse(client.datasets.$post(args, options))
    },
  })
}

export function usePostDatasets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.datasets.$post>,
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
  const mutationDefaults = getPostDatasetsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDatasetsDatasetNameContentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datasets)[':datasetName']['content']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['datasets', '/datasets/:datasetName/content', keyArgs] as const
}

export function getDatasetsDatasetNameContentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datasets)[':datasetName']['content']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasetsDatasetNameContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datasets[':datasetName'].content.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatasetsDatasetNameContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datasets)[':datasetName']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datasets)[':datasetName']['content']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datasets)[':datasetName']['content']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datasets)[':datasetName']['content']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDatasetsDatasetNameContentQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datasets)[':datasetName']['content']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasetsDatasetNameContentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasetsDatasetNameContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datasets[':datasetName'].content.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDatasetsDatasetNameContentMutationKey() {
  return ['datasets', '/datasets/:datasetName/content', 'POST'] as const
}

export function getPostDatasetsDatasetNameContentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datasets)[':datasetName']['content']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.datasets)[':datasetName']['content']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDatasetsDatasetNameContentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.datasets)[':datasetName']['content']['$post']>,
    ) {
      return parseResponse(client.datasets[':datasetName'].content.$post(args, options))
    },
  })
}

export function usePostDatasetsDatasetNameContent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datasets)[':datasetName']['content']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.datasets)[':datasetName']['content']['$post']>,
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
  const mutationDefaults = getPostDatasetsDatasetNameContentMutationOptions<
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

export function getDeleteDatasetsDatasetNameContentMutationKey() {
  return ['datasets', '/datasets/:datasetName/content', 'DELETE'] as const
}

export function getDeleteDatasetsDatasetNameContentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasets)[':datasetName']['content']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.datasets)[':datasetName']['content']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatasetsDatasetNameContentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.datasets)[':datasetName']['content']['$delete']>,
    ) {
      return parseResponse(client.datasets[':datasetName'].content.$delete(args, options))
    },
  })
}

export function useDeleteDatasetsDatasetNameContent<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.datasets)[':datasetName']['content']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.datasets)[':datasetName']['content']['$delete']>,
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
  const mutationDefaults = getDeleteDatasetsDatasetNameContentMutationOptions<
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

export function getDatastoresQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datastores.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['datastores', '/datastores', keyArgs] as const
}

export function getDatastoresQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datastores.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatastoresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datastores.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDatastores<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datastores.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datastores.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datastores.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datastores.$get>>>>
          >,
          ReturnType<typeof getDatastoresQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datastores.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDatastoresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatastoresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datastores.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDatastoresMutationKey() {
  return ['datastores', '/datastores', 'POST'] as const
}

export function getPostDatastoresMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datastores.$post>>>>>,
    TError,
    InferRequestType<typeof client.datastores.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDatastoresMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.datastores.$post>) {
      return parseResponse(client.datastores.$post(args, options))
    },
  })
}

export function usePostDatastores<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datastores.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.datastores.$post>,
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
  const mutationDefaults = getPostDatastoresMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPipelinesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pipelines.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['pipelines', '/pipelines', keyArgs] as const
}

export function getPipelinesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pipelines.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPipelinesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pipelines.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePipelines<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipelines.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pipelines.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipelines.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipelines.$get>>>>
          >,
          ReturnType<typeof getPipelinesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipelines.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPipelinesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPipelinesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pipelines.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPipelinesMutationKey() {
  return ['pipelines', '/pipelines', 'POST'] as const
}

export function getPostPipelinesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipelines.$post>>>>>,
    TError,
    InferRequestType<typeof client.pipelines.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPipelinesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pipelines.$post>) {
      return parseResponse(client.pipelines.$post(args, options))
    },
  })
}

export function usePostPipelines<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipelines.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.pipelines.$post>,
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
  const mutationDefaults = getPostPipelinesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getChannelsChannelNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channels)[':channelName']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['channels', '/channels/:channelName', keyArgs] as const
}

export function getChannelsChannelNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channels)[':channelName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channelName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channelName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channels)[':channelName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channelName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channelName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelsChannelNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channelName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channelName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutChannelsChannelNameMutationKey() {
  return ['channels', '/channels/:channelName', 'PUT'] as const
}

export function getPutChannelsChannelNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channelName']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':channelName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsChannelNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.channels)[':channelName']['$put']>) {
      return parseResponse(client.channels[':channelName'].$put(args, options))
    },
  })
}

export function usePutChannelsChannelName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channelName']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':channelName']['$put']>,
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
  const mutationDefaults = getPutChannelsChannelNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteChannelsChannelNameMutationKey() {
  return ['channels', '/channels/:channelName', 'DELETE'] as const
}

export function getDeleteChannelsChannelNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channelName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':channelName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsChannelNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.channels)[':channelName']['$delete']>) {
      return parseResponse(client.channels[':channelName'].$delete(args, options))
    },
  })
}

export function useDeleteChannelsChannelName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.channels)[':channelName']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.channels)[':channelName']['$delete']>,
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
  const mutationDefaults = getDeleteChannelsChannelNameMutationOptions<TError, TOnMutateResult>(
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

export function getDatasetsDatasetNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datasets)[':datasetName']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['datasets', '/datasets/:datasetName', keyArgs] as const
}

export function getDatasetsDatasetNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datasets)[':datasetName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasetsDatasetNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datasets[':datasetName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatasetsDatasetName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':datasetName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datasets)[':datasetName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datasets)[':datasetName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datasets)[':datasetName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDatasetsDatasetNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':datasetName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasetsDatasetNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasetsDatasetNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datasets[':datasetName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDatasetsDatasetNameMutationKey() {
  return ['datasets', '/datasets/:datasetName', 'PUT'] as const
}

export function getPutDatasetsDatasetNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':datasetName']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.datasets)[':datasetName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDatasetsDatasetNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.datasets)[':datasetName']['$put']>) {
      return parseResponse(client.datasets[':datasetName'].$put(args, options))
    },
  })
}

export function usePutDatasetsDatasetName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datasets)[':datasetName']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.datasets)[':datasetName']['$put']>,
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
  const mutationDefaults = getPutDatasetsDatasetNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDatasetsDatasetNameMutationKey() {
  return ['datasets', '/datasets/:datasetName', 'DELETE'] as const
}

export function getDeleteDatasetsDatasetNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasets)[':datasetName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.datasets)[':datasetName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatasetsDatasetNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.datasets)[':datasetName']['$delete']>) {
      return parseResponse(client.datasets[':datasetName'].$delete(args, options))
    },
  })
}

export function useDeleteDatasetsDatasetName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.datasets)[':datasetName']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.datasets)[':datasetName']['$delete']>,
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
  const mutationDefaults = getDeleteDatasetsDatasetNameMutationOptions<TError, TOnMutateResult>(
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

export function getDatastoresDatastoreNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datastores)[':datastoreName']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['datastores', '/datastores/:datastoreName', keyArgs] as const
}

export function getDatastoresDatastoreNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datastores)[':datastoreName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatastoresDatastoreNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datastores[':datastoreName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatastoresDatastoreName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datastores)[':datastoreName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datastores)[':datastoreName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datastores)[':datastoreName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datastores)[':datastoreName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDatastoresDatastoreNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datastores)[':datastoreName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatastoresDatastoreNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatastoresDatastoreNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datastores[':datastoreName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDatastoresDatastoreNameMutationKey() {
  return ['datastores', '/datastores/:datastoreName', 'PUT'] as const
}

export function getPutDatastoresDatastoreNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datastores)[':datastoreName']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.datastores)[':datastoreName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDatastoresDatastoreNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.datastores)[':datastoreName']['$put']>) {
      return parseResponse(client.datastores[':datastoreName'].$put(args, options))
    },
  })
}

export function usePutDatastoresDatastoreName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datastores)[':datastoreName']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.datastores)[':datastoreName']['$put']>,
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
  const mutationDefaults = getPutDatastoresDatastoreNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDatastoresDatastoreNameMutationKey() {
  return ['datastores', '/datastores/:datastoreName', 'DELETE'] as const
}

export function getDeleteDatastoresDatastoreNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datastores)[':datastoreName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.datastores)[':datastoreName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatastoresDatastoreNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.datastores)[':datastoreName']['$delete']>,
    ) {
      return parseResponse(client.datastores[':datastoreName'].$delete(args, options))
    },
  })
}

export function useDeleteDatastoresDatastoreName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.datastores)[':datastoreName']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.datastores)[':datastoreName']['$delete']>,
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
  const mutationDefaults = getDeleteDatastoresDatastoreNameMutationOptions<TError, TOnMutateResult>(
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

export function getPipelinesPipelineNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pipelines)[':pipelineName']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['pipelines', '/pipelines/:pipelineName', keyArgs] as const
}

export function getPipelinesPipelineNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pipelines)[':pipelineName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPipelinesPipelineNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pipelines[':pipelineName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePipelinesPipelineName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pipelines)[':pipelineName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pipelines)[':pipelineName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pipelines)[':pipelineName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pipelines)[':pipelineName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPipelinesPipelineNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pipelines)[':pipelineName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPipelinesPipelineNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPipelinesPipelineNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pipelines[':pipelineName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPipelinesPipelineNameMutationKey() {
  return ['pipelines', '/pipelines/:pipelineName', 'PUT'] as const
}

export function getPutPipelinesPipelineNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pipelines)[':pipelineName']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.pipelines)[':pipelineName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPipelinesPipelineNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pipelines)[':pipelineName']['$put']>) {
      return parseResponse(client.pipelines[':pipelineName'].$put(args, options))
    },
  })
}

export function usePutPipelinesPipelineName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pipelines)[':pipelineName']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.pipelines)[':pipelineName']['$put']>,
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
  const mutationDefaults = getPutPipelinesPipelineNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeletePipelinesPipelineNameMutationKey() {
  return ['pipelines', '/pipelines/:pipelineName', 'DELETE'] as const
}

export function getDeletePipelinesPipelineNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pipelines)[':pipelineName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.pipelines)[':pipelineName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePipelinesPipelineNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.pipelines)[':pipelineName']['$delete']>,
    ) {
      return parseResponse(client.pipelines[':pipelineName'].$delete(args, options))
    },
  })
}

export function useDeletePipelinesPipelineName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.pipelines)[':pipelineName']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.pipelines)[':pipelineName']['$delete']>,
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
  const mutationDefaults = getDeletePipelinesPipelineNameMutationOptions<TError, TOnMutateResult>(
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

export function getLoggingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logging.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['logging', '/logging', keyArgs] as const
}

export function getLoggingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logging.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLoggingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logging.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLogging<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logging.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>
          >,
          ReturnType<typeof getLoggingQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLoggingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLoggingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logging.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutLoggingMutationKey() {
  return ['logging', '/logging', 'PUT'] as const
}

export function getPutLoggingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$put>>>>>,
    TError,
    InferRequestType<typeof client.logging.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutLoggingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.logging.$put>) {
      return parseResponse(client.logging.$put(args, options))
    },
  })
}

export function usePutLogging<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.logging.$put>,
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
  const mutationDefaults = getPutLoggingMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDatasetsDatasetNameContentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datasets)[':datasetName']['contents']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['datasets', '/datasets/:datasetName/contents', keyArgs] as const
}

export function getDatasetsDatasetNameContentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datasets)[':datasetName']['contents']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasetsDatasetNameContentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datasets[':datasetName'].contents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatasetsDatasetNameContents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datasets)[':datasetName']['contents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datasets)[':datasetName']['contents']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datasets)[':datasetName']['contents']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datasets)[':datasetName']['contents']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDatasetsDatasetNameContentsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datasets)[':datasetName']['contents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasetsDatasetNameContentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasetsDatasetNameContentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datasets[':datasetName'].contents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['tags#resourceArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags#resourceArn', '/tags#resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['tags#resourceArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['tags#resourceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['tags#resourceArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
            >
          >,
          ReturnType<typeof getTagsResourceArnQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['tags#resourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags#resourceArn', '/tags#resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['tags#resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['tags#resourceArn']['$post']>) {
      return parseResponse(client['tags#resourceArn'].$post(args, options))
    },
  })
}

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['tags#resourceArn']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['tags#resourceArn']['$post']>,
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
  const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
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

export function getPostPipelineactivitiesRunMutationKey() {
  return ['pipelineactivities', '/pipelineactivities/run', 'POST'] as const
}

export function getPostPipelineactivitiesRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.pipelineactivities.run.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.pipelineactivities.run.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPipelineactivitiesRunMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pipelineactivities.run.$post>) {
      return parseResponse(client.pipelineactivities.run.$post(args, options))
    },
  })
}

export function usePostPipelineactivitiesRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.pipelineactivities.run.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.pipelineactivities.run.$post>,
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
  const mutationDefaults = getPostPipelineactivitiesRunMutationOptions<TError, TOnMutateResult>(
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

export function getChannelsChannelNameSampleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channelName']['sample']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['channels', '/channels/:channelName/sample', keyArgs] as const
}

export function getChannelsChannelNameSampleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channelName']['sample']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelNameSampleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channelName'].sample.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelNameSample<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channelName']['sample']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channelName']['sample']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channelName']['sample']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channelName']['sample']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelsChannelNameSampleQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channelName']['sample']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelNameSampleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelNameSampleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channelName'].sample.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPipelinesPipelineNameReprocessingMutationKey() {
  return ['pipelines', '/pipelines/:pipelineName/reprocessing', 'POST'] as const
}

export function getPostPipelinesPipelineNameReprocessingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pipelines)[':pipelineName']['reprocessing']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.pipelines)[':pipelineName']['reprocessing']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPipelinesPipelineNameReprocessingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.pipelines)[':pipelineName']['reprocessing']['$post']>,
    ) {
      return parseResponse(client.pipelines[':pipelineName'].reprocessing.$post(args, options))
    },
  })
}

export function usePostPipelinesPipelineNameReprocessing<
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
                Awaited<
                  ReturnType<(typeof client.pipelines)[':pipelineName']['reprocessing']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.pipelines)[':pipelineName']['reprocessing']['$post']>,
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
  const mutationDefaults = getPostPipelinesPipelineNameReprocessingMutationOptions<
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

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags#resourceArn&tagKeys', '/tags#resourceArn&tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['tags#resourceArn&tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['tags#resourceArn&tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['tags#resourceArn&tagKeys']['$delete']>,
    ) {
      return parseResponse(client['tags#resourceArn&tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['tags#resourceArn&tagKeys']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['tags#resourceArn&tagKeys']['$delete']>,
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
  const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<TError, TOnMutateResult>(
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
