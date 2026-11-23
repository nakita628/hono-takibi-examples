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

export function getQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >({
    queryKey: getQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiQueryKey() {
  return ['__api__', '/__api__'] as const
}

export function getApiQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__api__.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__api__.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiQueryKey>
  >({
    queryKey: getApiQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.__api__.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__api__.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__api__.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getHeartbeatQueryKey() {
  return ['__heartbeat__', '/__heartbeat__'] as const
}

export function getHeartbeatQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__heartbeat__.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__heartbeat__.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHeartbeatQueryKey>
  >({
    queryKey: getHeartbeatQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.__heartbeat__.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectHeartbeat<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__heartbeat__.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__heartbeat__.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHeartbeatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHeartbeatQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getLbheartbeatQueryKey() {
  return ['__lbheartbeat__', '/__lbheartbeat__'] as const
}

export function getLbheartbeatQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__lbheartbeat__.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__lbheartbeat__.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLbheartbeatQueryKey>
  >({
    queryKey: getLbheartbeatQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.__lbheartbeat__.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLbheartbeat<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__lbheartbeat__.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__lbheartbeat__.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLbheartbeatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLbheartbeatQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getVersionQueryKey() {
  return ['__version__', '/__version__'] as const
}

export function getVersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__version__.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__version__.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVersionQueryKey>
  >({
    queryKey: getVersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.__version__.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__version__.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__version__.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$post>>>>>,
        TError,
        InferRequestType<typeof client.batch.$post>,
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
    const mutationDefaults = getPostBatchMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBucketsQueryKey(args: InferRequestType<typeof client.buckets.$get>) {
  const { header: _, ...keyArgs } = args
  return ['buckets', '/buckets', keyArgs] as const
}

export function getBucketsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.buckets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBucketsQueryKey>
  >({
    queryKey: getBucketsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.buckets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBuckets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.buckets.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckets.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBucketsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getBucketsMonitorCollectionsChangesRecordsQueryKey(
  args: InferRequestType<typeof client.buckets.monitor.collections.changes.records.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['buckets', '/buckets/monitor/collections/changes/records', keyArgs] as const
}

export function getBucketsMonitorCollectionsChangesRecordsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.buckets.monitor.collections.changes.records.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.buckets.monitor.collections.changes.records.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBucketsMonitorCollectionsChangesRecordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.buckets.monitor.collections.changes.records.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBucketsMonitorCollectionsChangesRecords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.buckets.monitor.collections.changes.records.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.buckets.monitor.collections.changes.records.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getBucketsMonitorCollectionsChangesRecordsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getBucketsBidCollectionsCidChangesetQueryKey(
  args: InferRequestType<
    (typeof client.buckets)[':bid']['collections'][':cid']['changeset']['$get']
  >,
) {
  return ['buckets', '/buckets/:bid/collections/:cid/changeset', args] as const
}

export function getBucketsBidCollectionsCidChangesetQueryOptions<
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
  args: InferRequestType<
    (typeof client.buckets)[':bid']['collections'][':cid']['changeset']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBucketsBidCollectionsCidChangesetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.buckets[':bid'].collections[':cid'].changeset.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBucketsBidCollectionsCidChangeset<
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
  args: () => InferRequestType<
    (typeof client.buckets)[':bid']['collections'][':cid']['changeset']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getBucketsBidCollectionsCidChangesetQueryKey>
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
      ...getBucketsBidCollectionsCidChangesetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getBucketsBucketIdCollectionsQueryKey(
  args: InferRequestType<(typeof client.buckets)[':bucket_id']['collections']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['buckets', '/buckets/:bucket_id/collections', keyArgs] as const
}

export function getBucketsBucketIdCollectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.buckets)[':bucket_id']['collections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.buckets)[':bucket_id']['collections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBucketsBucketIdCollectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.buckets[':bucket_id'].collections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBucketsBucketIdCollections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.buckets)[':bucket_id']['collections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.buckets)[':bucket_id']['collections']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getBucketsBucketIdCollectionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getBucketsBucketIdCollectionsCollectionIdRecordsQueryKey(
  args: InferRequestType<
    (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['buckets', '/buckets/:bucket_id/collections/:collection_id/records', keyArgs] as const
}

export function getBucketsBucketIdCollectionsCollectionIdRecordsQueryOptions<
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
  args: InferRequestType<
    (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBucketsBucketIdCollectionsCollectionIdRecordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.buckets[':bucket_id'].collections[':collection_id'].records.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBucketsBucketIdCollectionsCollectionIdRecords<
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
  args: () => InferRequestType<
    (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getBucketsBucketIdCollectionsCollectionIdRecordsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getBucketsBucketIdCollectionsCollectionIdRecordsIdQueryKey(
  args: InferRequestType<
    (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records'][':id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['buckets', '/buckets/:bucket_id/collections/:collection_id/records/:id', keyArgs] as const
}

export function getBucketsBucketIdCollectionsCollectionIdRecordsIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBucketsBucketIdCollectionsCollectionIdRecordsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.buckets[':bucket_id'].collections[':collection_id'].records[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBucketsBucketIdCollectionsCollectionIdRecordsId<
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
  args: () => InferRequestType<
    (typeof client.buckets)[':bucket_id']['collections'][':collection_id']['records'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getBucketsBucketIdCollectionsCollectionIdRecordsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostBucketsBucketIdCollectionsCollectionIdRecordsIdAttachment<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostBucketsBucketIdCollectionsCollectionIdRecordsIdAttachmentMutationOptions<
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

export function injectDeleteBucketsBucketIdCollectionsCollectionIdRecordsIdAttachment<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteBucketsBucketIdCollectionsCollectionIdRecordsIdAttachmentMutationOptions<
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

export function getBucketsBucketIdCollectionsIdQueryKey(
  args: InferRequestType<(typeof client.buckets)[':bucket_id']['collections'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['buckets', '/buckets/:bucket_id/collections/:id', keyArgs] as const
}

export function getBucketsBucketIdCollectionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.buckets)[':bucket_id']['collections'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.buckets)[':bucket_id']['collections'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBucketsBucketIdCollectionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.buckets[':bucket_id'].collections[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBucketsBucketIdCollectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.buckets)[':bucket_id']['collections'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.buckets)[':bucket_id']['collections'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getBucketsBucketIdCollectionsIdQueryKey>
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
      ...getBucketsBucketIdCollectionsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getBucketsBucketIdGroupsQueryKey(
  args: InferRequestType<(typeof client.buckets)[':bucket_id']['groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['buckets', '/buckets/:bucket_id/groups', keyArgs] as const
}

export function getBucketsBucketIdGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.buckets)[':bucket_id']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.buckets)[':bucket_id']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBucketsBucketIdGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.buckets[':bucket_id'].groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBucketsBucketIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.buckets)[':bucket_id']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.buckets)[':bucket_id']['groups']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getBucketsBucketIdGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getBucketsBucketIdGroupsIdQueryKey(
  args: InferRequestType<(typeof client.buckets)[':bucket_id']['groups'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['buckets', '/buckets/:bucket_id/groups/:id', keyArgs] as const
}

export function getBucketsBucketIdGroupsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.buckets)[':bucket_id']['groups'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.buckets)[':bucket_id']['groups'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBucketsBucketIdGroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.buckets[':bucket_id'].groups[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBucketsBucketIdGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.buckets)[':bucket_id']['groups'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.buckets)[':bucket_id']['groups'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getBucketsBucketIdGroupsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getBucketsIdQueryKey(
  args: InferRequestType<(typeof client.buckets)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['buckets', '/buckets/:id', keyArgs] as const
}

export function getBucketsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.buckets)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.buckets)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.buckets)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBucketsIdQueryKey>
  >({
    queryKey: getBucketsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.buckets[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBucketsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.buckets)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.buckets)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.buckets)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getContributeJsonQueryKey() {
  return ['contribute.json', '/contribute.json'] as const
}

export function getContributeJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['contribute.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['contribute.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContributeJsonQueryKey>
  >({
    queryKey: getContributeJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['contribute.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectContributeJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['contribute.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['contribute.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContributeJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getContributeJsonQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}
