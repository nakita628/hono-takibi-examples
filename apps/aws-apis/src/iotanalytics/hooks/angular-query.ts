import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectPostMessagesBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.batch.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.messages.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMessagesBatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeletePipelinesPipelineNameReprocessingReprocessingId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeletePipelinesPipelineNameReprocessingReprocessingIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getChannelsQueryKey(args: InferRequestType<typeof client.channels.$get>) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels', keyArgs] as const
}

export function getChannelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.channels.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChannelsQueryKey>
  >({
    queryKey: getChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.channels.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChannelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostChannels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.channels.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChannelsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDatasetsQueryKey(args: InferRequestType<typeof client.datasets.$get>) {
  const { header: _, ...keyArgs } = args
  return ['datasets', '/datasets', keyArgs] as const
}

export function getDatasetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.datasets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDatasetsQueryKey>
  >({
    queryKey: getDatasetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datasets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDatasets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.datasets.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDatasetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDatasetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostDatasets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.datasets.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDatasetsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDatasetsDatasetNameContentQueryKey(
  args: InferRequestType<(typeof client.datasets)[':datasetName']['content']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['datasets', '/datasets/:datasetName/content', keyArgs] as const
}

export function getDatasetsDatasetNameContentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datasets)[':datasetName']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datasets)[':datasetName']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDatasetsDatasetNameContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datasets[':datasetName'].content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDatasetsDatasetNameContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datasets)[':datasetName']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.datasets)[':datasetName']['content']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDatasetsDatasetNameContentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostDatasetsDatasetNameContent<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDatasetsDatasetNameContentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDatasetsDatasetNameContent<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDatasetsDatasetNameContentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDatastoresQueryKey(args: InferRequestType<typeof client.datastores.$get>) {
  const { header: _, ...keyArgs } = args
  return ['datastores', '/datastores', keyArgs] as const
}

export function getDatastoresQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datastores.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.datastores.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datastores.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDatastoresQueryKey>
  >({
    queryKey: getDatastoresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datastores.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDatastores<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datastores.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.datastores.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datastores.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDatastoresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDatastoresQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostDatastores<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datastores.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.datastores.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDatastoresMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPipelinesQueryKey(args: InferRequestType<typeof client.pipelines.$get>) {
  const { header: _, ...keyArgs } = args
  return ['pipelines', '/pipelines', keyArgs] as const
}

export function getPipelinesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipelines.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.pipelines.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipelines.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPipelinesQueryKey>
  >({
    queryKey: getPipelinesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pipelines.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPipelines<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipelines.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pipelines.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipelines.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPipelinesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPipelinesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostPipelines<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pipelines.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.pipelines.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPipelinesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getChannelsChannelNameQueryKey(
  args: InferRequestType<(typeof client.channels)[':channelName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels/:channelName', keyArgs] as const
}

export function getChannelsChannelNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channelName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channelName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channelName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelNameQueryKey>
  >({
    queryKey: getChannelsChannelNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channelName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectChannelsChannelName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channelName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.channels)[':channelName']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':channelName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsChannelNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChannelsChannelNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutChannelsChannelName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutChannelsChannelNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteChannelsChannelName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteChannelsChannelNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDatasetsDatasetNameQueryKey(
  args: InferRequestType<(typeof client.datasets)[':datasetName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['datasets', '/datasets/:datasetName', keyArgs] as const
}

export function getDatasetsDatasetNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':datasetName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datasets)[':datasetName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':datasetName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasetsDatasetNameQueryKey>
  >({
    queryKey: getDatasetsDatasetNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datasets[':datasetName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDatasetsDatasetName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':datasetName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.datasets)[':datasetName']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.datasets)[':datasetName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatasetsDatasetNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDatasetsDatasetNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutDatasetsDatasetName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDatasetsDatasetNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDatasetsDatasetName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDatasetsDatasetNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDatastoresDatastoreNameQueryKey(
  args: InferRequestType<(typeof client.datastores)[':datastoreName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['datastores', '/datastores/:datastoreName', keyArgs] as const
}

export function getDatastoresDatastoreNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datastores)[':datastoreName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datastores)[':datastoreName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDatastoresDatastoreNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datastores[':datastoreName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDatastoresDatastoreName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datastores)[':datastoreName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.datastores)[':datastoreName']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDatastoresDatastoreNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutDatastoresDatastoreName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDatastoresDatastoreNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDatastoresDatastoreName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDatastoresDatastoreNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPipelinesPipelineNameQueryKey(
  args: InferRequestType<(typeof client.pipelines)[':pipelineName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['pipelines', '/pipelines/:pipelineName', keyArgs] as const
}

export function getPipelinesPipelineNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pipelines)[':pipelineName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pipelines)[':pipelineName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPipelinesPipelineNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pipelines[':pipelineName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPipelinesPipelineName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pipelines)[':pipelineName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pipelines)[':pipelineName']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPipelinesPipelineNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutPipelinesPipelineName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutPipelinesPipelineNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeletePipelinesPipelineName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePipelinesPipelineNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLoggingQueryKey(args: InferRequestType<typeof client.logging.$get>) {
  const { header: _, ...keyArgs } = args
  return ['logging', '/logging', keyArgs] as const
}

export function getLoggingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.logging.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLoggingQueryKey>
  >({
    queryKey: getLoggingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logging.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLogging<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.logging.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLoggingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLoggingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutLogging<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$put>>>>>,
        TError,
        InferRequestType<typeof client.logging.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutLoggingMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDatasetsDatasetNameContentsQueryKey(
  args: InferRequestType<(typeof client.datasets)[':datasetName']['contents']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['datasets', '/datasets/:datasetName/contents', keyArgs] as const
}

export function getDatasetsDatasetNameContentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datasets)[':datasetName']['contents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datasets)[':datasetName']['contents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDatasetsDatasetNameContentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datasets[':datasetName'].contents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDatasetsDatasetNameContents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datasets)[':datasetName']['contents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.datasets)[':datasetName']['contents']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDatasetsDatasetNameContentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags#resourceArn', '/tags#resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['tags#resourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['tags#resourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsResourceArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostPipelineactivitiesRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.pipelineactivities.run.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.pipelineactivities.run.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPipelineactivitiesRunMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getChannelsChannelNameSampleQueryKey(
  args: InferRequestType<(typeof client.channels)[':channelName']['sample']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels/:channelName/sample', keyArgs] as const
}

export function getChannelsChannelNameSampleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channelName']['sample']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channelName']['sample']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChannelsChannelNameSampleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channelName'].sample.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectChannelsChannelNameSample<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channelName']['sample']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.channels)[':channelName']['sample']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getChannelsChannelNameSampleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostPipelinesPipelineNameReprocessing<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPipelinesPipelineNameReprocessingMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteTagsResourceArnTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
