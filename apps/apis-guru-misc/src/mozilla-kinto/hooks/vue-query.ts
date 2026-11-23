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

export function getApiKey() {
  return ['__api__'] as const
}

export function getHeartbeatKey() {
  return ['__heartbeat__'] as const
}

export function getLbheartbeatKey() {
  return ['__lbheartbeat__'] as const
}

export function getUserDataKey() {
  return ['__user_data__'] as const
}

export function getVersionKey() {
  return ['__version__'] as const
}

export function getBatchKey() {
  return ['batch'] as const
}

export function getBucketsKey() {
  return ['buckets'] as const
}

export function getContributeJsonKey() {
  return ['contribute.json'] as const
}

export function getQueryKey() {
  return ['', '/'] as const
}

export function getQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          ReturnType<typeof getQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiQueryKey() {
  return ['__api__', '/__api__'] as const
}

export function getApiQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.__api__.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__api__.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__api__.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__api__.$get>>>>
          >,
          ReturnType<typeof getApiQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__api__.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.__api__.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHeartbeatQueryKey() {
  return ['__heartbeat__', '/__heartbeat__'] as const
}

export function getHeartbeatQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHeartbeatQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.__heartbeat__.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHeartbeat<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__heartbeat__.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__heartbeat__.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__heartbeat__.$get>>>>
          >,
          ReturnType<typeof getHeartbeatQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__heartbeat__.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHeartbeatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHeartbeatQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.__heartbeat__.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLbheartbeatQueryKey() {
  return ['__lbheartbeat__', '/__lbheartbeat__'] as const
}

export function getLbheartbeatQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLbheartbeatQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.__lbheartbeat__.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLbheartbeat<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__lbheartbeat__.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.__lbheartbeat__.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.__lbheartbeat__.$get>>>
            >
          >,
          ReturnType<typeof getLbheartbeatQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__lbheartbeat__.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLbheartbeatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLbheartbeatQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.__lbheartbeat__.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVersionQueryKey() {
  return ['__version__', '/__version__'] as const
}

export function getVersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getVersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.__version__.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__version__.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__version__.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__version__.$get>>>>
          >,
          ReturnType<typeof getVersionQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__version__.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getVersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.__version__.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBatchMutationKey() {
  return ['batch', '/batch', 'POST'] as const
}

export function getPostBatchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$post>>>>>,
    TError,
    InferRequestType<typeof client.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.batch.$post>) {
      return parseResponse(client.batch.$post(args, options))
    },
  })
}

export function usePostBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$post>>>>>,
          TError,
          InferRequestType<typeof client.batch.$post>,
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
  const mutationDefaults = getPostBatchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBucketsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.buckets.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['buckets', '/buckets', keyArgs] as const
}

export function getBucketsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.buckets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBucketsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.buckets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBuckets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.buckets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckets.$get>>>>
          >,
          ReturnType<typeof getBucketsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBucketsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBucketsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.buckets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBucketsMonitorCollectionsChangesRecordsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.buckets.monitor.collections.changes.records.$get>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['buckets', '/buckets/monitor/collections/changes/records', keyArgs] as const
}

export function getBucketsMonitorCollectionsChangesRecordsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.buckets.monitor.collections.changes.records.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBucketsMonitorCollectionsChangesRecordsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.buckets.monitor.collections.changes.records.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBucketsMonitorCollectionsChangesRecords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.buckets.monitor.collections.changes.records.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.buckets.monitor.collections.changes.records.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.buckets.monitor.collections.changes.records.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.buckets.monitor.collections.changes.records.$get>>
              >
            >
          >,
          ReturnType<typeof getBucketsMonitorCollectionsChangesRecordsQueryKey>
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
          Awaited<ReturnType<typeof client.buckets.monitor.collections.changes.records.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketsMonitorCollectionsChangesRecordsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBucketsMonitorCollectionsChangesRecordsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.buckets.monitor.collections.changes.records.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBucketsBidCollectionsCidChangesetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.buckets)[':bid']['collections'][':cid']['changeset']['$get']>
  >,
) {
  return ['buckets', '/buckets/:bid/collections/:cid/changeset', toValue(args)] as const
}

export function getBucketsBidCollectionsCidChangesetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.buckets)[':bid']['collections'][':cid']['changeset']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBucketsBidCollectionsCidChangesetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.buckets[':bid'].collections[':cid'].changeset.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBucketsBidCollectionsCidChangeset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.buckets)[':bid']['collections'][':cid']['changeset']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.buckets)[':bid']['collections'][':cid']['changeset']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.buckets)[':bid']['collections'][':cid']['changeset']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.buckets)[':bid']['collections'][':cid']['changeset']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBucketsBidCollectionsCidChangesetQueryKey>
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
          Awaited<
            ReturnType<(typeof client.buckets)[':bid']['collections'][':cid']['changeset']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketsBidCollectionsCidChangesetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBucketsBidCollectionsCidChangesetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.buckets[':bid'].collections[':cid'].changeset.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBucketsBucketIdCollectionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.buckets)[':bucket_id']['collections']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['buckets', '/buckets/:bucket_id/collections', keyArgs] as const
}

export function getBucketsBucketIdCollectionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.buckets)[':bucket_id']['collections']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBucketsBucketIdCollectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.buckets[':bucket_id'].collections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBucketsBucketIdCollections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.buckets)[':bucket_id']['collections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.buckets)[':bucket_id']['collections']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.buckets)[':bucket_id']['collections']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.buckets)[':bucket_id']['collections']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBucketsBucketIdCollectionsQueryKey>
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
          Awaited<ReturnType<(typeof client.buckets)[':bucket_id']['collections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketsBucketIdCollectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBucketsBucketIdCollectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.buckets[':bucket_id'].collections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBucketsBucketIdCollectionsCollectionIdRecordsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['buckets', '/buckets/:bucket_id/collections/:collection_id/records', keyArgs] as const
}

export function getBucketsBucketIdCollectionsCollectionIdRecordsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBucketsBucketIdCollectionsCollectionIdRecordsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.buckets[':bucket_id'].collections[':collection_id'].records.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBucketsBucketIdCollectionsCollectionIdRecords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBucketsBucketIdCollectionsCollectionIdRecordsQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketsBucketIdCollectionsCollectionIdRecordsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBucketsBucketIdCollectionsCollectionIdRecordsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.buckets[':bucket_id'].collections[':collection_id'].records.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBucketsBucketIdCollectionsCollectionIdRecordsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records'][':id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['buckets', '/buckets/:bucket_id/collections/:collection_id/records/:id', keyArgs] as const
}

export function getBucketsBucketIdCollectionsCollectionIdRecordsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBucketsBucketIdCollectionsCollectionIdRecordsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.buckets[':bucket_id'].collections[':collection_id'].records[':id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useBucketsBucketIdCollectionsCollectionIdRecordsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records'][':id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records'][':id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBucketsBucketIdCollectionsCollectionIdRecordsIdQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketsBucketIdCollectionsCollectionIdRecordsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBucketsBucketIdCollectionsCollectionIdRecordsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.buckets[':bucket_id'].collections[':collection_id'].records[':id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostBucketsBucketIdCollectionsCollectionIdRecordsIdAttachmentMutationKey() {
  return [
    'buckets',
    '/buckets/:bucket_id/collections/:collection_id/records/:id/attachment',
    'POST',
  ] as const
}

export function getPostBucketsBucketIdCollectionsCollectionIdRecordsIdAttachmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records'][':id']['attachment']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records'][':id']['attachment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBucketsBucketIdCollectionsCollectionIdRecordsIdAttachmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records'][':id']['attachment']['$post']
      >,
    ) {
      return parseResponse(
        client.buckets[':bucket_id'].collections[':collection_id'].records[':id'].attachment.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostBucketsBucketIdCollectionsCollectionIdRecordsIdAttachment<
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
                    (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records'][':id']['attachment']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records'][':id']['attachment']['$post']
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
  const mutationDefaults =
    getPostBucketsBucketIdCollectionsCollectionIdRecordsIdAttachmentMutationOptions<
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

export function getDeleteBucketsBucketIdCollectionsCollectionIdRecordsIdAttachmentMutationKey() {
  return [
    'buckets',
    '/buckets/:bucket_id/collections/:collection_id/records/:id/attachment',
    'DELETE',
  ] as const
}

export function getDeleteBucketsBucketIdCollectionsCollectionIdRecordsIdAttachmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records'][':id']['attachment']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records'][':id']['attachment']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteBucketsBucketIdCollectionsCollectionIdRecordsIdAttachmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records'][':id']['attachment']['$delete']
      >,
    ) {
      return parseResponse(
        client.buckets[':bucket_id'].collections[':collection_id'].records[
          ':id'
        ].attachment.$delete(args, options),
      )
    },
  })
}

export function useDeleteBucketsBucketIdCollectionsCollectionIdRecordsIdAttachment<
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
                    (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records'][':id']['attachment']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records'][':id']['attachment']['$delete']
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
  const mutationDefaults =
    getDeleteBucketsBucketIdCollectionsCollectionIdRecordsIdAttachmentMutationOptions<
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

export function getBucketsBucketIdCollectionsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.buckets)[':bucket_id']['collections'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['buckets', '/buckets/:bucket_id/collections/:id', keyArgs] as const
}

export function getBucketsBucketIdCollectionsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.buckets)[':bucket_id']['collections'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBucketsBucketIdCollectionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.buckets[':bucket_id'].collections[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBucketsBucketIdCollectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.buckets)[':bucket_id']['collections'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.buckets)[':bucket_id']['collections'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.buckets)[':bucket_id']['collections'][':id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.buckets)[':bucket_id']['collections'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBucketsBucketIdCollectionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.buckets)[':bucket_id']['collections'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketsBucketIdCollectionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBucketsBucketIdCollectionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.buckets[':bucket_id'].collections[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBucketsBucketIdGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.buckets)[':bucket_id']['groups']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['buckets', '/buckets/:bucket_id/groups', keyArgs] as const
}

export function getBucketsBucketIdGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.buckets)[':bucket_id']['groups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBucketsBucketIdGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.buckets[':bucket_id'].groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBucketsBucketIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.buckets)[':bucket_id']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.buckets)[':bucket_id']['groups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.buckets)[':bucket_id']['groups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.buckets)[':bucket_id']['groups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBucketsBucketIdGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client.buckets)[':bucket_id']['groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketsBucketIdGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBucketsBucketIdGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.buckets[':bucket_id'].groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBucketsBucketIdGroupsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.buckets)[':bucket_id']['groups'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['buckets', '/buckets/:bucket_id/groups/:id', keyArgs] as const
}

export function getBucketsBucketIdGroupsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.buckets)[':bucket_id']['groups'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBucketsBucketIdGroupsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.buckets[':bucket_id'].groups[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBucketsBucketIdGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.buckets)[':bucket_id']['groups'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.buckets)[':bucket_id']['groups'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.buckets)[':bucket_id']['groups'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.buckets)[':bucket_id']['groups'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBucketsBucketIdGroupsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.buckets)[':bucket_id']['groups'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketsBucketIdGroupsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBucketsBucketIdGroupsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.buckets[':bucket_id'].groups[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBucketsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.buckets)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['buckets', '/buckets/:id', keyArgs] as const
}

export function getBucketsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.buckets)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBucketsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.buckets[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBucketsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.buckets)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.buckets)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.buckets)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.buckets)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getBucketsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.buckets)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBucketsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBucketsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.buckets[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContributeJsonQueryKey() {
  return ['contribute.json', '/contribute.json'] as const
}

export function getContributeJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getContributeJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['contribute.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContributeJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['contribute.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['contribute.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['contribute.json']['$get']>>>
            >
          >,
          ReturnType<typeof getContributeJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['contribute.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContributeJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getContributeJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['contribute.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
