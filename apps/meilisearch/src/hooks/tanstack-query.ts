import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBatchesKey() {
  return ['batches'] as const
}

export function getDumpsKey() {
  return ['dumps'] as const
}

export function getExperimentalFeaturesKey() {
  return ['experimental-features'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getIndexesKey() {
  return ['indexes'] as const
}

export function getKeysKey() {
  return ['keys'] as const
}

export function getLogsKey() {
  return ['logs'] as const
}

export function getMetricsKey() {
  return ['metrics'] as const
}

export function getMultiSearchKey() {
  return ['multi-search'] as const
}

export function getNetworkKey() {
  return ['network'] as const
}

export function getSnapshotsKey() {
  return ['snapshots'] as const
}

export function getStatsKey() {
  return ['stats'] as const
}

export function getSwapIndexesKey() {
  return ['swap-indexes'] as const
}

export function getTasksKey() {
  return ['tasks'] as const
}

export function getVersionKey() {
  return ['version'] as const
}

export function getBatchesQueryKey(args: InferRequestType<typeof client.batches.$get>) {
  return ['batches', '/batches', args] as const
}

export function getBatchesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.batches.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBatchesQueryKey>
  >({
    queryKey: getBatchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.batches.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBatches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.batches.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBatchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBatchesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBatches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.batches.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batches.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBatchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBatchesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBatchesBatchUidQueryKey(
  args: InferRequestType<(typeof client.batches)[':batchUid']['$get']>,
) {
  return ['batches', '/batches/:batchUid', args] as const
}

export function getBatchesBatchUidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':batchUid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.batches)[':batchUid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':batchUid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBatchesBatchUidQueryKey>
  >({
    queryKey: getBatchesBatchUidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.batches[':batchUid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBatchesBatchUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':batchUid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.batches)[':batchUid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':batchUid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBatchesBatchUidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBatchesBatchUidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBatchesBatchUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':batchUid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.batches)[':batchUid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.batches)[':batchUid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBatchesBatchUidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBatchesBatchUidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostDumpsMutationKey() {
  return ['dumps', '/dumps', 'POST'] as const
}

export function getPostDumpsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dumps.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostDumpsMutationKey(),
    async mutationFn() {
      return parseResponse(client.dumps.$post(undefined, options))
    },
  })
}

export function usePostDumps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dumps.$post>>>>>,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDumpsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getExperimentalFeaturesQueryKey() {
  return ['experimental-features', '/experimental-features'] as const
}

export function getExperimentalFeaturesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['experimental-features']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['experimental-features']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExperimentalFeaturesQueryKey>
  >({
    queryKey: getExperimentalFeaturesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['experimental-features'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useExperimentalFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['experimental-features']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['experimental-features']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExperimentalFeaturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getExperimentalFeaturesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseExperimentalFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['experimental-features']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['experimental-features']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExperimentalFeaturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getExperimentalFeaturesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchExperimentalFeaturesMutationKey() {
  return ['experimental-features', '/experimental-features', 'PATCH'] as const
}

export function getPatchExperimentalFeaturesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['experimental-features']['$patch']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPatchExperimentalFeaturesMutationKey(),
    async mutationFn() {
      return parseResponse(client['experimental-features'].$patch(undefined, options))
    },
  })
}

export function usePatchExperimentalFeatures<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['experimental-features']['$patch']>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchExperimentalFeaturesMutationOptions<TError, TOnMutateResult>(
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

export function getHealthQueryKey() {
  return ['health', '/health'] as const
}

export function getHealthQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >({
    queryKey: getHealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHealthQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHealthQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getIndexesQueryKey(args: InferRequestType<typeof client.indexes.$get>) {
  return ['indexes', '/indexes', args] as const
}

export function getIndexesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.indexes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIndexesQueryKey>
  >({
    queryKey: getIndexesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useIndexes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.indexes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getIndexesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIndexesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIndexes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.indexes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getIndexesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIndexesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostIndexesMutationKey() {
  return ['indexes', '/indexes', 'POST'] as const
}

export function getPostIndexesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$post>>>>>,
    TError,
    InferRequestType<typeof client.indexes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIndexesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.indexes.$post>) {
      return parseResponse(client.indexes.$post(args, options))
    },
  })
}

export function usePostIndexes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$post>>>>>,
        TError,
        InferRequestType<typeof client.indexes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIndexesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIndexesIndexUidQueryKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid', args] as const
}

export function getIndexesIndexUidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':indexUid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':indexUid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesIndexUidQueryKey>
  >({
    queryKey: getIndexesIndexUidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes[':indexUid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useIndexesIndexUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':indexUid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':indexUid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIndexesIndexUidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIndexesIndexUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':indexUid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':indexUid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIndexesIndexUidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteIndexesIndexUidMutationKey() {
  return ['indexes', '/indexes/:indexUid', 'DELETE'] as const
}

export function getDeleteIndexesIndexUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':indexUid']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesIndexUidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.indexes)[':indexUid']['$delete']>) {
      return parseResponse(client.indexes[':indexUid'].$delete(args, options))
    },
  })
}

export function useDeleteIndexesIndexUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)[':indexUid']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':indexUid']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesIndexUidMutationOptions<TError, TOnMutateResult>(
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

export function getPatchIndexesIndexUidMutationKey() {
  return ['indexes', '/indexes/:indexUid', 'PATCH'] as const
}

export function getPatchIndexesIndexUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':indexUid']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchIndexesIndexUidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.indexes)[':indexUid']['$patch']>) {
      return parseResponse(client.indexes[':indexUid'].$patch(args, options))
    },
  })
}

export function usePatchIndexesIndexUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)[':indexUid']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':indexUid']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchIndexesIndexUidMutationOptions<TError, TOnMutateResult>(
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

export function getPostIndexesIndexUidDeleteBatchMutationKey() {
  return ['indexes', '/indexes/:indexUid/delete-batch', 'POST'] as const
}

export function getPostIndexesIndexUidDeleteBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['delete-batch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['delete-batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIndexesIndexUidDeleteBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.indexes)[':indexUid']['delete-batch']['$post']>,
    ) {
      return parseResponse(client.indexes[':indexUid']['delete-batch'].$post(args, options))
    },
  })
}

export function usePostIndexesIndexUidDeleteBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)[':indexUid']['delete-batch']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':indexUid']['delete-batch']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIndexesIndexUidDeleteBatchMutationOptions<
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

export function getIndexesIndexUidDocumentsQueryKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['documents']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid/documents', args] as const
}

export function getIndexesIndexUidDocumentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['documents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['documents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['documents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesIndexUidDocumentsQueryKey>
  >({
    queryKey: getIndexesIndexUidDocumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes[':indexUid'].documents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIndexesIndexUidDocuments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['documents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['documents']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)[':indexUid']['documents']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidDocumentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getIndexesIndexUidDocumentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndexesIndexUidDocuments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['documents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['documents']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)[':indexUid']['documents']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidDocumentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getIndexesIndexUidDocumentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutIndexesIndexUidDocumentsMutationKey() {
  return ['indexes', '/indexes/:indexUid/documents', 'PUT'] as const
}

export function getPutIndexesIndexUidDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['documents']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['documents']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIndexesIndexUidDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.indexes)[':indexUid']['documents']['$put']>,
    ) {
      return parseResponse(client.indexes[':indexUid'].documents.$put(args, options))
    },
  })
}

export function usePutIndexesIndexUidDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)[':indexUid']['documents']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':indexUid']['documents']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIndexesIndexUidDocumentsMutationOptions<TError, TOnMutateResult>(
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

export function getPostIndexesIndexUidDocumentsMutationKey() {
  return ['indexes', '/indexes/:indexUid/documents', 'POST'] as const
}

export function getPostIndexesIndexUidDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['documents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['documents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIndexesIndexUidDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.indexes)[':indexUid']['documents']['$post']>,
    ) {
      return parseResponse(client.indexes[':indexUid'].documents.$post(args, options))
    },
  })
}

export function usePostIndexesIndexUidDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)[':indexUid']['documents']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':indexUid']['documents']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIndexesIndexUidDocumentsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteIndexesIndexUidDocumentsMutationKey() {
  return ['indexes', '/indexes/:indexUid/documents', 'DELETE'] as const
}

export function getDeleteIndexesIndexUidDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['documents']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['documents']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesIndexUidDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.indexes)[':indexUid']['documents']['$delete']>,
    ) {
      return parseResponse(client.indexes[':indexUid'].documents.$delete(args, options))
    },
  })
}

export function useDeleteIndexesIndexUidDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)[':indexUid']['documents']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':indexUid']['documents']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesIndexUidDocumentsMutationOptions<
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

export function getPostIndexesIndexUidDocumentsDeleteMutationKey() {
  return ['indexes', '/indexes/:indexUid/documents/delete', 'POST'] as const
}

export function getPostIndexesIndexUidDocumentsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['documents']['delete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['documents']['delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIndexesIndexUidDocumentsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.indexes)[':indexUid']['documents']['delete']['$post']>,
    ) {
      return parseResponse(client.indexes[':indexUid'].documents.delete.$post(args, options))
    },
  })
}

export function usePostIndexesIndexUidDocumentsDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes)[':indexUid']['documents']['delete']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':indexUid']['documents']['delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIndexesIndexUidDocumentsDeleteMutationOptions<
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

export function getPostIndexesIndexUidDocumentsEditMutationKey() {
  return ['indexes', '/indexes/:indexUid/documents/edit', 'POST'] as const
}

export function getPostIndexesIndexUidDocumentsEditMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['documents']['edit']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['documents']['edit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIndexesIndexUidDocumentsEditMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.indexes)[':indexUid']['documents']['edit']['$post']>,
    ) {
      return parseResponse(client.indexes[':indexUid'].documents.edit.$post(args, options))
    },
  })
}

export function usePostIndexesIndexUidDocumentsEdit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes)[':indexUid']['documents']['edit']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':indexUid']['documents']['edit']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIndexesIndexUidDocumentsEditMutationOptions<
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

export function getPostIndexesIndexUidDocumentsFetchMutationKey() {
  return ['indexes', '/indexes/:indexUid/documents/fetch', 'POST'] as const
}

export function getPostIndexesIndexUidDocumentsFetchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['documents']['fetch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['documents']['fetch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIndexesIndexUidDocumentsFetchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.indexes)[':indexUid']['documents']['fetch']['$post']>,
    ) {
      return parseResponse(client.indexes[':indexUid'].documents.fetch.$post(args, options))
    },
  })
}

export function usePostIndexesIndexUidDocumentsFetch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes)[':indexUid']['documents']['fetch']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':indexUid']['documents']['fetch']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIndexesIndexUidDocumentsFetchMutationOptions<
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

export function getIndexesIndexUidDocumentsDocumentIdQueryKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['documents'][':documentId']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid/documents/:documentId', args] as const
}

export function getIndexesIndexUidDocumentsDocumentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.indexes)[':indexUid']['documents'][':documentId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['documents'][':documentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['documents'][':documentId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesIndexUidDocumentsDocumentIdQueryKey>
  >({
    queryKey: getIndexesIndexUidDocumentsDocumentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes[':indexUid'].documents[':documentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIndexesIndexUidDocumentsDocumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.indexes)[':indexUid']['documents'][':documentId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['documents'][':documentId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes)[':indexUid']['documents'][':documentId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidDocumentsDocumentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getIndexesIndexUidDocumentsDocumentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndexesIndexUidDocumentsDocumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.indexes)[':indexUid']['documents'][':documentId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['documents'][':documentId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes)[':indexUid']['documents'][':documentId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidDocumentsDocumentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getIndexesIndexUidDocumentsDocumentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteIndexesIndexUidDocumentsDocumentIdMutationKey() {
  return ['indexes', '/indexes/:indexUid/documents/:documentId', 'DELETE'] as const
}

export function getDeleteIndexesIndexUidDocumentsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['documents'][':documentId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['documents'][':documentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesIndexUidDocumentsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['documents'][':documentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.indexes[':indexUid'].documents[':documentId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteIndexesIndexUidDocumentsDocumentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['documents'][':documentId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.indexes)[':indexUid']['documents'][':documentId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesIndexUidDocumentsDocumentIdMutationOptions<
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

export function getPostIndexesIndexUidFacetSearchMutationKey() {
  return ['indexes', '/indexes/:indexUid/facet-search', 'POST'] as const
}

export function getPostIndexesIndexUidFacetSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['facet-search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['facet-search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIndexesIndexUidFacetSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.indexes)[':indexUid']['facet-search']['$post']>,
    ) {
      return parseResponse(client.indexes[':indexUid']['facet-search'].$post(args, options))
    },
  })
}

export function usePostIndexesIndexUidFacetSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)[':indexUid']['facet-search']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':indexUid']['facet-search']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIndexesIndexUidFacetSearchMutationOptions<
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

export function getIndexesIndexUidSearchQueryKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['search']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid/search', args] as const
}

export function getIndexesIndexUidSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesIndexUidSearchQueryKey>
  >({
    queryKey: getIndexesIndexUidSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes[':indexUid'].search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIndexesIndexUidSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['search']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)[':indexUid']['search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getIndexesIndexUidSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndexesIndexUidSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['search']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)[':indexUid']['search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getIndexesIndexUidSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostIndexesIndexUidSearchMutationKey() {
  return ['indexes', '/indexes/:indexUid/search', 'POST'] as const
}

export function getPostIndexesIndexUidSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIndexesIndexUidSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.indexes)[':indexUid']['search']['$post']>,
    ) {
      return parseResponse(client.indexes[':indexUid'].search.$post(args, options))
    },
  })
}

export function usePostIndexesIndexUidSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)[':indexUid']['search']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':indexUid']['search']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIndexesIndexUidSearchMutationOptions<TError, TOnMutateResult>(
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

export function getIndexesIndexUidSettingsQueryKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid/settings', args] as const
}

export function getIndexesIndexUidSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesIndexUidSettingsQueryKey>
  >({
    queryKey: getIndexesIndexUidSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes[':indexUid'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIndexesIndexUidSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getIndexesIndexUidSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndexesIndexUidSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getIndexesIndexUidSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteIndexesIndexUidSettingsMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings', 'DELETE'] as const
}

export function getDeleteIndexesIndexUidSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesIndexUidSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['$delete']>,
    ) {
      return parseResponse(client.indexes[':indexUid'].settings.$delete(args, options))
    },
  })
}

export function useDeleteIndexesIndexUidSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':indexUid']['settings']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesIndexUidSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getPatchIndexesIndexUidSettingsMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings', 'PATCH'] as const
}

export function getPatchIndexesIndexUidSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchIndexesIndexUidSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['$patch']>,
    ) {
      return parseResponse(client.indexes[':indexUid'].settings.$patch(args, options))
    },
  })
}

export function usePatchIndexesIndexUidSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':indexUid']['settings']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchIndexesIndexUidSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getIndexesIndexUidSettingsChatQueryKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['chat']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid/settings/chat', args] as const
}

export function getIndexesIndexUidSettingsChatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['chat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['chat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['chat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesIndexUidSettingsChatQueryKey>
  >({
    queryKey: getIndexesIndexUidSettingsChatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes[':indexUid'].settings.chat.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIndexesIndexUidSettingsChat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['chat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['chat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['chat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsChatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getIndexesIndexUidSettingsChatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndexesIndexUidSettingsChat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['chat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['chat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['chat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsChatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getIndexesIndexUidSettingsChatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutIndexesIndexUidSettingsChatMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/chat', 'PUT'] as const
}

export function getPutIndexesIndexUidSettingsChatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['chat']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['chat']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIndexesIndexUidSettingsChatMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['chat']['$put']>,
    ) {
      return parseResponse(client.indexes[':indexUid'].settings.chat.$put(args, options))
    },
  })
}

export function usePutIndexesIndexUidSettingsChat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['chat']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':indexUid']['settings']['chat']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIndexesIndexUidSettingsChatMutationOptions<
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

export function getDeleteIndexesIndexUidSettingsChatMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/chat', 'DELETE'] as const
}

export function getDeleteIndexesIndexUidSettingsChatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['chat']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['chat']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesIndexUidSettingsChatMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['chat']['$delete']>,
    ) {
      return parseResponse(client.indexes[':indexUid'].settings.chat.$delete(args, options))
    },
  })
}

export function useDeleteIndexesIndexUidSettingsChat<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes)[':indexUid']['settings']['chat']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':indexUid']['settings']['chat']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesIndexUidSettingsChatMutationOptions<
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

export function getIndexesIndexUidSettingsDictionaryQueryKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['dictionary']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid/settings/dictionary', args] as const
}

export function getIndexesIndexUidSettingsDictionaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['dictionary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['dictionary']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['dictionary']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesIndexUidSettingsDictionaryQueryKey>
  >({
    queryKey: getIndexesIndexUidSettingsDictionaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes[':indexUid'].settings.dictionary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIndexesIndexUidSettingsDictionary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['dictionary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['dictionary']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes)[':indexUid']['settings']['dictionary']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsDictionaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getIndexesIndexUidSettingsDictionaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndexesIndexUidSettingsDictionary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['dictionary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['dictionary']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes)[':indexUid']['settings']['dictionary']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsDictionaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getIndexesIndexUidSettingsDictionaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutIndexesIndexUidSettingsDictionaryMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/dictionary', 'PUT'] as const
}

export function getPutIndexesIndexUidSettingsDictionaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['dictionary']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['dictionary']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIndexesIndexUidSettingsDictionaryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['dictionary']['$put']
      >,
    ) {
      return parseResponse(client.indexes[':indexUid'].settings.dictionary.$put(args, options))
    },
  })
}

export function usePutIndexesIndexUidSettingsDictionary<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes)[':indexUid']['settings']['dictionary']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':indexUid']['settings']['dictionary']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIndexesIndexUidSettingsDictionaryMutationOptions<
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

export function getDeleteIndexesIndexUidSettingsDictionaryMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/dictionary', 'DELETE'] as const
}

export function getDeleteIndexesIndexUidSettingsDictionaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['dictionary']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['dictionary']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesIndexUidSettingsDictionaryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['dictionary']['$delete']
      >,
    ) {
      return parseResponse(client.indexes[':indexUid'].settings.dictionary.$delete(args, options))
    },
  })
}

export function useDeleteIndexesIndexUidSettingsDictionary<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['dictionary']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':indexUid']['settings']['dictionary']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesIndexUidSettingsDictionaryMutationOptions<
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

export function getIndexesIndexUidSettingsDisplayedAttributesQueryKey(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$get']
  >,
) {
  return ['indexes', '/indexes/:indexUid/settings/displayed-attributes', args] as const
}

export function getIndexesIndexUidSettingsDisplayedAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesIndexUidSettingsDisplayedAttributesQueryKey>
  >({
    queryKey: getIndexesIndexUidSettingsDisplayedAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes[':indexUid'].settings['displayed-attributes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIndexesIndexUidSettingsDisplayedAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsDisplayedAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getIndexesIndexUidSettingsDisplayedAttributesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndexesIndexUidSettingsDisplayedAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsDisplayedAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getIndexesIndexUidSettingsDisplayedAttributesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutIndexesIndexUidSettingsDisplayedAttributesMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/displayed-attributes', 'PUT'] as const
}

export function getPutIndexesIndexUidSettingsDisplayedAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutIndexesIndexUidSettingsDisplayedAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$put']
      >,
    ) {
      return parseResponse(
        client.indexes[':indexUid'].settings['displayed-attributes'].$put(args, options),
      )
    },
  })
}

export function usePutIndexesIndexUidSettingsDisplayedAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIndexesIndexUidSettingsDisplayedAttributesMutationOptions<
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

export function getDeleteIndexesIndexUidSettingsDisplayedAttributesMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/displayed-attributes', 'DELETE'] as const
}

export function getDeleteIndexesIndexUidSettingsDisplayedAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesIndexUidSettingsDisplayedAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$delete']
      >,
    ) {
      return parseResponse(
        client.indexes[':indexUid'].settings['displayed-attributes'].$delete(args, options),
      )
    },
  })
}

export function useDeleteIndexesIndexUidSettingsDisplayedAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesIndexUidSettingsDisplayedAttributesMutationOptions<
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

export function getIndexesIndexUidSettingsDistinctAttributeQueryKey(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$get']
  >,
) {
  return ['indexes', '/indexes/:indexUid/settings/distinct-attribute', args] as const
}

export function getIndexesIndexUidSettingsDistinctAttributeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesIndexUidSettingsDistinctAttributeQueryKey>
  >({
    queryKey: getIndexesIndexUidSettingsDistinctAttributeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes[':indexUid'].settings['distinct-attribute'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIndexesIndexUidSettingsDistinctAttribute<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsDistinctAttributeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getIndexesIndexUidSettingsDistinctAttributeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndexesIndexUidSettingsDistinctAttribute<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsDistinctAttributeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getIndexesIndexUidSettingsDistinctAttributeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutIndexesIndexUidSettingsDistinctAttributeMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/distinct-attribute', 'PUT'] as const
}

export function getPutIndexesIndexUidSettingsDistinctAttributeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutIndexesIndexUidSettingsDistinctAttributeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$put']
      >,
    ) {
      return parseResponse(
        client.indexes[':indexUid'].settings['distinct-attribute'].$put(args, options),
      )
    },
  })
}

export function usePutIndexesIndexUidSettingsDistinctAttribute<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIndexesIndexUidSettingsDistinctAttributeMutationOptions<
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

export function getDeleteIndexesIndexUidSettingsDistinctAttributeMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/distinct-attribute', 'DELETE'] as const
}

export function getDeleteIndexesIndexUidSettingsDistinctAttributeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesIndexUidSettingsDistinctAttributeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$delete']
      >,
    ) {
      return parseResponse(
        client.indexes[':indexUid'].settings['distinct-attribute'].$delete(args, options),
      )
    },
  })
}

export function useDeleteIndexesIndexUidSettingsDistinctAttribute<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesIndexUidSettingsDistinctAttributeMutationOptions<
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

export function getIndexesIndexUidSettingsEmbeddersQueryKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['embedders']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid/settings/embedders', args] as const
}

export function getIndexesIndexUidSettingsEmbeddersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['embedders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['embedders']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['embedders']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesIndexUidSettingsEmbeddersQueryKey>
  >({
    queryKey: getIndexesIndexUidSettingsEmbeddersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes[':indexUid'].settings.embedders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIndexesIndexUidSettingsEmbedders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['embedders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['embedders']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes)[':indexUid']['settings']['embedders']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsEmbeddersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getIndexesIndexUidSettingsEmbeddersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndexesIndexUidSettingsEmbedders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['embedders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['embedders']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes)[':indexUid']['settings']['embedders']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsEmbeddersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getIndexesIndexUidSettingsEmbeddersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteIndexesIndexUidSettingsEmbeddersMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/embedders', 'DELETE'] as const
}

export function getDeleteIndexesIndexUidSettingsEmbeddersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['embedders']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['embedders']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesIndexUidSettingsEmbeddersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['embedders']['$delete']
      >,
    ) {
      return parseResponse(client.indexes[':indexUid'].settings.embedders.$delete(args, options))
    },
  })
}

export function useDeleteIndexesIndexUidSettingsEmbedders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes)[':indexUid']['settings']['embedders']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':indexUid']['settings']['embedders']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesIndexUidSettingsEmbeddersMutationOptions<
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

export function getPatchIndexesIndexUidSettingsEmbeddersMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/embedders', 'PATCH'] as const
}

export function getPatchIndexesIndexUidSettingsEmbeddersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['embedders']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['embedders']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchIndexesIndexUidSettingsEmbeddersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['embedders']['$patch']
      >,
    ) {
      return parseResponse(client.indexes[':indexUid'].settings.embedders.$patch(args, options))
    },
  })
}

export function usePatchIndexesIndexUidSettingsEmbedders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes)[':indexUid']['settings']['embedders']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':indexUid']['settings']['embedders']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchIndexesIndexUidSettingsEmbeddersMutationOptions<
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

export function getIndexesIndexUidSettingsFacetSearchQueryKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['facet-search']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid/settings/facet-search', args] as const
}

export function getIndexesIndexUidSettingsFacetSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.indexes)[':indexUid']['settings']['facet-search']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['facet-search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['facet-search']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesIndexUidSettingsFacetSearchQueryKey>
  >({
    queryKey: getIndexesIndexUidSettingsFacetSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes[':indexUid'].settings['facet-search'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIndexesIndexUidSettingsFacetSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.indexes)[':indexUid']['settings']['facet-search']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['facet-search']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes)[':indexUid']['settings']['facet-search']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsFacetSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getIndexesIndexUidSettingsFacetSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndexesIndexUidSettingsFacetSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.indexes)[':indexUid']['settings']['facet-search']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['facet-search']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes)[':indexUid']['settings']['facet-search']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsFacetSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getIndexesIndexUidSettingsFacetSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutIndexesIndexUidSettingsFacetSearchMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/facet-search', 'PUT'] as const
}

export function getPutIndexesIndexUidSettingsFacetSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['facet-search']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['facet-search']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIndexesIndexUidSettingsFacetSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['facet-search']['$put']
      >,
    ) {
      return parseResponse(client.indexes[':indexUid'].settings['facet-search'].$put(args, options))
    },
  })
}

export function usePutIndexesIndexUidSettingsFacetSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes)[':indexUid']['settings']['facet-search']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':indexUid']['settings']['facet-search']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIndexesIndexUidSettingsFacetSearchMutationOptions<
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

export function getDeleteIndexesIndexUidSettingsFacetSearchMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/facet-search', 'DELETE'] as const
}

export function getDeleteIndexesIndexUidSettingsFacetSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['facet-search']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['facet-search']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesIndexUidSettingsFacetSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['facet-search']['$delete']
      >,
    ) {
      return parseResponse(
        client.indexes[':indexUid'].settings['facet-search'].$delete(args, options),
      )
    },
  })
}

export function useDeleteIndexesIndexUidSettingsFacetSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['facet-search']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.indexes)[':indexUid']['settings']['facet-search']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesIndexUidSettingsFacetSearchMutationOptions<
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

export function getIndexesIndexUidSettingsFacetingQueryKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['faceting']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid/settings/faceting', args] as const
}

export function getIndexesIndexUidSettingsFacetingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['faceting']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['faceting']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['faceting']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesIndexUidSettingsFacetingQueryKey>
  >({
    queryKey: getIndexesIndexUidSettingsFacetingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes[':indexUid'].settings.faceting.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIndexesIndexUidSettingsFaceting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['faceting']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['faceting']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes)[':indexUid']['settings']['faceting']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsFacetingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getIndexesIndexUidSettingsFacetingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndexesIndexUidSettingsFaceting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['faceting']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['faceting']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes)[':indexUid']['settings']['faceting']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsFacetingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getIndexesIndexUidSettingsFacetingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteIndexesIndexUidSettingsFacetingMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/faceting', 'DELETE'] as const
}

export function getDeleteIndexesIndexUidSettingsFacetingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['faceting']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['faceting']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesIndexUidSettingsFacetingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['faceting']['$delete']
      >,
    ) {
      return parseResponse(client.indexes[':indexUid'].settings.faceting.$delete(args, options))
    },
  })
}

export function useDeleteIndexesIndexUidSettingsFaceting<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes)[':indexUid']['settings']['faceting']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':indexUid']['settings']['faceting']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesIndexUidSettingsFacetingMutationOptions<
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

export function getPatchIndexesIndexUidSettingsFacetingMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/faceting', 'PATCH'] as const
}

export function getPatchIndexesIndexUidSettingsFacetingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['faceting']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['faceting']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchIndexesIndexUidSettingsFacetingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['faceting']['$patch']
      >,
    ) {
      return parseResponse(client.indexes[':indexUid'].settings.faceting.$patch(args, options))
    },
  })
}

export function usePatchIndexesIndexUidSettingsFaceting<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes)[':indexUid']['settings']['faceting']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':indexUid']['settings']['faceting']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchIndexesIndexUidSettingsFacetingMutationOptions<
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

export function getIndexesIndexUidSettingsFilterableAttributesQueryKey(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$get']
  >,
) {
  return ['indexes', '/indexes/:indexUid/settings/filterable-attributes', args] as const
}

export function getIndexesIndexUidSettingsFilterableAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesIndexUidSettingsFilterableAttributesQueryKey>
  >({
    queryKey: getIndexesIndexUidSettingsFilterableAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes[':indexUid'].settings['filterable-attributes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIndexesIndexUidSettingsFilterableAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsFilterableAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getIndexesIndexUidSettingsFilterableAttributesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndexesIndexUidSettingsFilterableAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsFilterableAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getIndexesIndexUidSettingsFilterableAttributesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutIndexesIndexUidSettingsFilterableAttributesMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/filterable-attributes', 'PUT'] as const
}

export function getPutIndexesIndexUidSettingsFilterableAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutIndexesIndexUidSettingsFilterableAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$put']
      >,
    ) {
      return parseResponse(
        client.indexes[':indexUid'].settings['filterable-attributes'].$put(args, options),
      )
    },
  })
}

export function usePutIndexesIndexUidSettingsFilterableAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIndexesIndexUidSettingsFilterableAttributesMutationOptions<
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

export function getDeleteIndexesIndexUidSettingsFilterableAttributesMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/filterable-attributes', 'DELETE'] as const
}

export function getDeleteIndexesIndexUidSettingsFilterableAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesIndexUidSettingsFilterableAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$delete']
      >,
    ) {
      return parseResponse(
        client.indexes[':indexUid'].settings['filterable-attributes'].$delete(args, options),
      )
    },
  })
}

export function useDeleteIndexesIndexUidSettingsFilterableAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesIndexUidSettingsFilterableAttributesMutationOptions<
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

export function getIndexesIndexUidSettingsLocalizedAttributesQueryKey(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$get']
  >,
) {
  return ['indexes', '/indexes/:indexUid/settings/localized-attributes', args] as const
}

export function getIndexesIndexUidSettingsLocalizedAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesIndexUidSettingsLocalizedAttributesQueryKey>
  >({
    queryKey: getIndexesIndexUidSettingsLocalizedAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes[':indexUid'].settings['localized-attributes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIndexesIndexUidSettingsLocalizedAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsLocalizedAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getIndexesIndexUidSettingsLocalizedAttributesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndexesIndexUidSettingsLocalizedAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsLocalizedAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getIndexesIndexUidSettingsLocalizedAttributesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutIndexesIndexUidSettingsLocalizedAttributesMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/localized-attributes', 'PUT'] as const
}

export function getPutIndexesIndexUidSettingsLocalizedAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutIndexesIndexUidSettingsLocalizedAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$put']
      >,
    ) {
      return parseResponse(
        client.indexes[':indexUid'].settings['localized-attributes'].$put(args, options),
      )
    },
  })
}

export function usePutIndexesIndexUidSettingsLocalizedAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIndexesIndexUidSettingsLocalizedAttributesMutationOptions<
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

export function getDeleteIndexesIndexUidSettingsLocalizedAttributesMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/localized-attributes', 'DELETE'] as const
}

export function getDeleteIndexesIndexUidSettingsLocalizedAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesIndexUidSettingsLocalizedAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$delete']
      >,
    ) {
      return parseResponse(
        client.indexes[':indexUid'].settings['localized-attributes'].$delete(args, options),
      )
    },
  })
}

export function useDeleteIndexesIndexUidSettingsLocalizedAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesIndexUidSettingsLocalizedAttributesMutationOptions<
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

export function getIndexesIndexUidSettingsNonSeparatorTokensQueryKey(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$get']
  >,
) {
  return ['indexes', '/indexes/:indexUid/settings/non-separator-tokens', args] as const
}

export function getIndexesIndexUidSettingsNonSeparatorTokensQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesIndexUidSettingsNonSeparatorTokensQueryKey>
  >({
    queryKey: getIndexesIndexUidSettingsNonSeparatorTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes[':indexUid'].settings['non-separator-tokens'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIndexesIndexUidSettingsNonSeparatorTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsNonSeparatorTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getIndexesIndexUidSettingsNonSeparatorTokensQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndexesIndexUidSettingsNonSeparatorTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsNonSeparatorTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getIndexesIndexUidSettingsNonSeparatorTokensQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutIndexesIndexUidSettingsNonSeparatorTokensMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/non-separator-tokens', 'PUT'] as const
}

export function getPutIndexesIndexUidSettingsNonSeparatorTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutIndexesIndexUidSettingsNonSeparatorTokensMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$put']
      >,
    ) {
      return parseResponse(
        client.indexes[':indexUid'].settings['non-separator-tokens'].$put(args, options),
      )
    },
  })
}

export function usePutIndexesIndexUidSettingsNonSeparatorTokens<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIndexesIndexUidSettingsNonSeparatorTokensMutationOptions<
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

export function getDeleteIndexesIndexUidSettingsNonSeparatorTokensMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/non-separator-tokens', 'DELETE'] as const
}

export function getDeleteIndexesIndexUidSettingsNonSeparatorTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesIndexUidSettingsNonSeparatorTokensMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$delete']
      >,
    ) {
      return parseResponse(
        client.indexes[':indexUid'].settings['non-separator-tokens'].$delete(args, options),
      )
    },
  })
}

export function useDeleteIndexesIndexUidSettingsNonSeparatorTokens<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesIndexUidSettingsNonSeparatorTokensMutationOptions<
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

export function getIndexesIndexUidSettingsPaginationQueryKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['pagination']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid/settings/pagination', args] as const
}

export function getIndexesIndexUidSettingsPaginationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['pagination']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['pagination']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['pagination']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesIndexUidSettingsPaginationQueryKey>
  >({
    queryKey: getIndexesIndexUidSettingsPaginationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes[':indexUid'].settings.pagination.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIndexesIndexUidSettingsPagination<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['pagination']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['pagination']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes)[':indexUid']['settings']['pagination']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsPaginationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getIndexesIndexUidSettingsPaginationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndexesIndexUidSettingsPagination<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['pagination']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['pagination']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes)[':indexUid']['settings']['pagination']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsPaginationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getIndexesIndexUidSettingsPaginationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteIndexesIndexUidSettingsPaginationMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/pagination', 'DELETE'] as const
}

export function getDeleteIndexesIndexUidSettingsPaginationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['pagination']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['pagination']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesIndexUidSettingsPaginationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['pagination']['$delete']
      >,
    ) {
      return parseResponse(client.indexes[':indexUid'].settings.pagination.$delete(args, options))
    },
  })
}

export function useDeleteIndexesIndexUidSettingsPagination<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['pagination']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':indexUid']['settings']['pagination']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesIndexUidSettingsPaginationMutationOptions<
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

export function getPatchIndexesIndexUidSettingsPaginationMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/pagination', 'PATCH'] as const
}

export function getPatchIndexesIndexUidSettingsPaginationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['pagination']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['pagination']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchIndexesIndexUidSettingsPaginationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['pagination']['$patch']
      >,
    ) {
      return parseResponse(client.indexes[':indexUid'].settings.pagination.$patch(args, options))
    },
  })
}

export function usePatchIndexesIndexUidSettingsPagination<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes)[':indexUid']['settings']['pagination']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':indexUid']['settings']['pagination']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchIndexesIndexUidSettingsPaginationMutationOptions<
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

export function getIndexesIndexUidSettingsPrefixSearchQueryKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['prefix-search']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid/settings/prefix-search', args] as const
}

export function getIndexesIndexUidSettingsPrefixSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.indexes)[':indexUid']['settings']['prefix-search']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['prefix-search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['prefix-search']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesIndexUidSettingsPrefixSearchQueryKey>
  >({
    queryKey: getIndexesIndexUidSettingsPrefixSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes[':indexUid'].settings['prefix-search'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIndexesIndexUidSettingsPrefixSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.indexes)[':indexUid']['settings']['prefix-search']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['prefix-search']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['prefix-search']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsPrefixSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getIndexesIndexUidSettingsPrefixSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndexesIndexUidSettingsPrefixSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.indexes)[':indexUid']['settings']['prefix-search']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['prefix-search']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['prefix-search']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsPrefixSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getIndexesIndexUidSettingsPrefixSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutIndexesIndexUidSettingsPrefixSearchMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/prefix-search', 'PUT'] as const
}

export function getPutIndexesIndexUidSettingsPrefixSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['prefix-search']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['prefix-search']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIndexesIndexUidSettingsPrefixSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['prefix-search']['$put']
      >,
    ) {
      return parseResponse(
        client.indexes[':indexUid'].settings['prefix-search'].$put(args, options),
      )
    },
  })
}

export function usePutIndexesIndexUidSettingsPrefixSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['prefix-search']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':indexUid']['settings']['prefix-search']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIndexesIndexUidSettingsPrefixSearchMutationOptions<
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

export function getDeleteIndexesIndexUidSettingsPrefixSearchMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/prefix-search', 'DELETE'] as const
}

export function getDeleteIndexesIndexUidSettingsPrefixSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['prefix-search']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['prefix-search']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesIndexUidSettingsPrefixSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['prefix-search']['$delete']
      >,
    ) {
      return parseResponse(
        client.indexes[':indexUid'].settings['prefix-search'].$delete(args, options),
      )
    },
  })
}

export function useDeleteIndexesIndexUidSettingsPrefixSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['prefix-search']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.indexes)[':indexUid']['settings']['prefix-search']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesIndexUidSettingsPrefixSearchMutationOptions<
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

export function getIndexesIndexUidSettingsProximityPrecisionQueryKey(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$get']
  >,
) {
  return ['indexes', '/indexes/:indexUid/settings/proximity-precision', args] as const
}

export function getIndexesIndexUidSettingsProximityPrecisionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesIndexUidSettingsProximityPrecisionQueryKey>
  >({
    queryKey: getIndexesIndexUidSettingsProximityPrecisionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes[':indexUid'].settings['proximity-precision'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIndexesIndexUidSettingsProximityPrecision<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsProximityPrecisionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getIndexesIndexUidSettingsProximityPrecisionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndexesIndexUidSettingsProximityPrecision<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsProximityPrecisionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getIndexesIndexUidSettingsProximityPrecisionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutIndexesIndexUidSettingsProximityPrecisionMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/proximity-precision', 'PUT'] as const
}

export function getPutIndexesIndexUidSettingsProximityPrecisionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutIndexesIndexUidSettingsProximityPrecisionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$put']
      >,
    ) {
      return parseResponse(
        client.indexes[':indexUid'].settings['proximity-precision'].$put(args, options),
      )
    },
  })
}

export function usePutIndexesIndexUidSettingsProximityPrecision<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIndexesIndexUidSettingsProximityPrecisionMutationOptions<
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

export function getDeleteIndexesIndexUidSettingsProximityPrecisionMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/proximity-precision', 'DELETE'] as const
}

export function getDeleteIndexesIndexUidSettingsProximityPrecisionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesIndexUidSettingsProximityPrecisionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$delete']
      >,
    ) {
      return parseResponse(
        client.indexes[':indexUid'].settings['proximity-precision'].$delete(args, options),
      )
    },
  })
}

export function useDeleteIndexesIndexUidSettingsProximityPrecision<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesIndexUidSettingsProximityPrecisionMutationOptions<
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

export function getIndexesIndexUidSettingsRankingRulesQueryKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid/settings/ranking-rules', args] as const
}

export function getIndexesIndexUidSettingsRankingRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesIndexUidSettingsRankingRulesQueryKey>
  >({
    queryKey: getIndexesIndexUidSettingsRankingRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes[':indexUid'].settings['ranking-rules'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIndexesIndexUidSettingsRankingRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsRankingRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getIndexesIndexUidSettingsRankingRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndexesIndexUidSettingsRankingRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsRankingRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getIndexesIndexUidSettingsRankingRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutIndexesIndexUidSettingsRankingRulesMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/ranking-rules', 'PUT'] as const
}

export function getPutIndexesIndexUidSettingsRankingRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIndexesIndexUidSettingsRankingRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$put']
      >,
    ) {
      return parseResponse(
        client.indexes[':indexUid'].settings['ranking-rules'].$put(args, options),
      )
    },
  })
}

export function usePutIndexesIndexUidSettingsRankingRules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIndexesIndexUidSettingsRankingRulesMutationOptions<
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

export function getDeleteIndexesIndexUidSettingsRankingRulesMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/ranking-rules', 'DELETE'] as const
}

export function getDeleteIndexesIndexUidSettingsRankingRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesIndexUidSettingsRankingRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$delete']
      >,
    ) {
      return parseResponse(
        client.indexes[':indexUid'].settings['ranking-rules'].$delete(args, options),
      )
    },
  })
}

export function useDeleteIndexesIndexUidSettingsRankingRules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesIndexUidSettingsRankingRulesMutationOptions<
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

export function getIndexesIndexUidSettingsSearchCutoffMsQueryKey(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$get']
  >,
) {
  return ['indexes', '/indexes/:indexUid/settings/search-cutoff-ms', args] as const
}

export function getIndexesIndexUidSettingsSearchCutoffMsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesIndexUidSettingsSearchCutoffMsQueryKey>
  >({
    queryKey: getIndexesIndexUidSettingsSearchCutoffMsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes[':indexUid'].settings['search-cutoff-ms'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIndexesIndexUidSettingsSearchCutoffMs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsSearchCutoffMsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getIndexesIndexUidSettingsSearchCutoffMsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndexesIndexUidSettingsSearchCutoffMs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsSearchCutoffMsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getIndexesIndexUidSettingsSearchCutoffMsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutIndexesIndexUidSettingsSearchCutoffMsMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/search-cutoff-ms', 'PUT'] as const
}

export function getPutIndexesIndexUidSettingsSearchCutoffMsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIndexesIndexUidSettingsSearchCutoffMsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$put']
      >,
    ) {
      return parseResponse(
        client.indexes[':indexUid'].settings['search-cutoff-ms'].$put(args, options),
      )
    },
  })
}

export function usePutIndexesIndexUidSettingsSearchCutoffMs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIndexesIndexUidSettingsSearchCutoffMsMutationOptions<
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

export function getDeleteIndexesIndexUidSettingsSearchCutoffMsMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/search-cutoff-ms', 'DELETE'] as const
}

export function getDeleteIndexesIndexUidSettingsSearchCutoffMsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesIndexUidSettingsSearchCutoffMsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$delete']
      >,
    ) {
      return parseResponse(
        client.indexes[':indexUid'].settings['search-cutoff-ms'].$delete(args, options),
      )
    },
  })
}

export function useDeleteIndexesIndexUidSettingsSearchCutoffMs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesIndexUidSettingsSearchCutoffMsMutationOptions<
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

export function getIndexesIndexUidSettingsSearchableAttributesQueryKey(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$get']
  >,
) {
  return ['indexes', '/indexes/:indexUid/settings/searchable-attributes', args] as const
}

export function getIndexesIndexUidSettingsSearchableAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesIndexUidSettingsSearchableAttributesQueryKey>
  >({
    queryKey: getIndexesIndexUidSettingsSearchableAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes[':indexUid'].settings['searchable-attributes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIndexesIndexUidSettingsSearchableAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsSearchableAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getIndexesIndexUidSettingsSearchableAttributesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndexesIndexUidSettingsSearchableAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsSearchableAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getIndexesIndexUidSettingsSearchableAttributesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutIndexesIndexUidSettingsSearchableAttributesMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/searchable-attributes', 'PUT'] as const
}

export function getPutIndexesIndexUidSettingsSearchableAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutIndexesIndexUidSettingsSearchableAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$put']
      >,
    ) {
      return parseResponse(
        client.indexes[':indexUid'].settings['searchable-attributes'].$put(args, options),
      )
    },
  })
}

export function usePutIndexesIndexUidSettingsSearchableAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIndexesIndexUidSettingsSearchableAttributesMutationOptions<
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

export function getDeleteIndexesIndexUidSettingsSearchableAttributesMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/searchable-attributes', 'DELETE'] as const
}

export function getDeleteIndexesIndexUidSettingsSearchableAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesIndexUidSettingsSearchableAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$delete']
      >,
    ) {
      return parseResponse(
        client.indexes[':indexUid'].settings['searchable-attributes'].$delete(args, options),
      )
    },
  })
}

export function useDeleteIndexesIndexUidSettingsSearchableAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesIndexUidSettingsSearchableAttributesMutationOptions<
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

export function getIndexesIndexUidSettingsSeparatorTokensQueryKey(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$get']
  >,
) {
  return ['indexes', '/indexes/:indexUid/settings/separator-tokens', args] as const
}

export function getIndexesIndexUidSettingsSeparatorTokensQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesIndexUidSettingsSeparatorTokensQueryKey>
  >({
    queryKey: getIndexesIndexUidSettingsSeparatorTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes[':indexUid'].settings['separator-tokens'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIndexesIndexUidSettingsSeparatorTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsSeparatorTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getIndexesIndexUidSettingsSeparatorTokensQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndexesIndexUidSettingsSeparatorTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsSeparatorTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getIndexesIndexUidSettingsSeparatorTokensQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutIndexesIndexUidSettingsSeparatorTokensMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/separator-tokens', 'PUT'] as const
}

export function getPutIndexesIndexUidSettingsSeparatorTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIndexesIndexUidSettingsSeparatorTokensMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$put']
      >,
    ) {
      return parseResponse(
        client.indexes[':indexUid'].settings['separator-tokens'].$put(args, options),
      )
    },
  })
}

export function usePutIndexesIndexUidSettingsSeparatorTokens<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIndexesIndexUidSettingsSeparatorTokensMutationOptions<
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

export function getDeleteIndexesIndexUidSettingsSeparatorTokensMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/separator-tokens', 'DELETE'] as const
}

export function getDeleteIndexesIndexUidSettingsSeparatorTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesIndexUidSettingsSeparatorTokensMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$delete']
      >,
    ) {
      return parseResponse(
        client.indexes[':indexUid'].settings['separator-tokens'].$delete(args, options),
      )
    },
  })
}

export function useDeleteIndexesIndexUidSettingsSeparatorTokens<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesIndexUidSettingsSeparatorTokensMutationOptions<
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

export function getIndexesIndexUidSettingsSortableAttributesQueryKey(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$get']
  >,
) {
  return ['indexes', '/indexes/:indexUid/settings/sortable-attributes', args] as const
}

export function getIndexesIndexUidSettingsSortableAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesIndexUidSettingsSortableAttributesQueryKey>
  >({
    queryKey: getIndexesIndexUidSettingsSortableAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes[':indexUid'].settings['sortable-attributes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIndexesIndexUidSettingsSortableAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsSortableAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getIndexesIndexUidSettingsSortableAttributesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndexesIndexUidSettingsSortableAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsSortableAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getIndexesIndexUidSettingsSortableAttributesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutIndexesIndexUidSettingsSortableAttributesMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/sortable-attributes', 'PUT'] as const
}

export function getPutIndexesIndexUidSettingsSortableAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutIndexesIndexUidSettingsSortableAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$put']
      >,
    ) {
      return parseResponse(
        client.indexes[':indexUid'].settings['sortable-attributes'].$put(args, options),
      )
    },
  })
}

export function usePutIndexesIndexUidSettingsSortableAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIndexesIndexUidSettingsSortableAttributesMutationOptions<
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

export function getDeleteIndexesIndexUidSettingsSortableAttributesMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/sortable-attributes', 'DELETE'] as const
}

export function getDeleteIndexesIndexUidSettingsSortableAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesIndexUidSettingsSortableAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$delete']
      >,
    ) {
      return parseResponse(
        client.indexes[':indexUid'].settings['sortable-attributes'].$delete(args, options),
      )
    },
  })
}

export function useDeleteIndexesIndexUidSettingsSortableAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesIndexUidSettingsSortableAttributesMutationOptions<
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

export function getIndexesIndexUidSettingsStopWordsQueryKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['stop-words']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid/settings/stop-words', args] as const
}

export function getIndexesIndexUidSettingsStopWordsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['stop-words']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['stop-words']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['stop-words']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesIndexUidSettingsStopWordsQueryKey>
  >({
    queryKey: getIndexesIndexUidSettingsStopWordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes[':indexUid'].settings['stop-words'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIndexesIndexUidSettingsStopWords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['stop-words']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['stop-words']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes)[':indexUid']['settings']['stop-words']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsStopWordsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getIndexesIndexUidSettingsStopWordsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndexesIndexUidSettingsStopWords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['stop-words']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['stop-words']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes)[':indexUid']['settings']['stop-words']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsStopWordsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getIndexesIndexUidSettingsStopWordsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutIndexesIndexUidSettingsStopWordsMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/stop-words', 'PUT'] as const
}

export function getPutIndexesIndexUidSettingsStopWordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['stop-words']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['stop-words']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIndexesIndexUidSettingsStopWordsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['stop-words']['$put']
      >,
    ) {
      return parseResponse(client.indexes[':indexUid'].settings['stop-words'].$put(args, options))
    },
  })
}

export function usePutIndexesIndexUidSettingsStopWords<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes)[':indexUid']['settings']['stop-words']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':indexUid']['settings']['stop-words']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIndexesIndexUidSettingsStopWordsMutationOptions<
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

export function getDeleteIndexesIndexUidSettingsStopWordsMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/stop-words', 'DELETE'] as const
}

export function getDeleteIndexesIndexUidSettingsStopWordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['stop-words']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['stop-words']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesIndexUidSettingsStopWordsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['stop-words']['$delete']
      >,
    ) {
      return parseResponse(
        client.indexes[':indexUid'].settings['stop-words'].$delete(args, options),
      )
    },
  })
}

export function useDeleteIndexesIndexUidSettingsStopWords<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['stop-words']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':indexUid']['settings']['stop-words']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesIndexUidSettingsStopWordsMutationOptions<
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

export function getIndexesIndexUidSettingsSynonymsQueryKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['synonyms']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid/settings/synonyms', args] as const
}

export function getIndexesIndexUidSettingsSynonymsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['synonyms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['synonyms']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['synonyms']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesIndexUidSettingsSynonymsQueryKey>
  >({
    queryKey: getIndexesIndexUidSettingsSynonymsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes[':indexUid'].settings.synonyms.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIndexesIndexUidSettingsSynonyms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['synonyms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['synonyms']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes)[':indexUid']['settings']['synonyms']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsSynonymsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getIndexesIndexUidSettingsSynonymsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndexesIndexUidSettingsSynonyms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['synonyms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['synonyms']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes)[':indexUid']['settings']['synonyms']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsSynonymsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getIndexesIndexUidSettingsSynonymsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutIndexesIndexUidSettingsSynonymsMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/synonyms', 'PUT'] as const
}

export function getPutIndexesIndexUidSettingsSynonymsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['settings']['synonyms']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['synonyms']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIndexesIndexUidSettingsSynonymsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['synonyms']['$put']>,
    ) {
      return parseResponse(client.indexes[':indexUid'].settings.synonyms.$put(args, options))
    },
  })
}

export function usePutIndexesIndexUidSettingsSynonyms<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes)[':indexUid']['settings']['synonyms']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':indexUid']['settings']['synonyms']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIndexesIndexUidSettingsSynonymsMutationOptions<
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

export function getDeleteIndexesIndexUidSettingsSynonymsMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/synonyms', 'DELETE'] as const
}

export function getDeleteIndexesIndexUidSettingsSynonymsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['synonyms']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['synonyms']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesIndexUidSettingsSynonymsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['synonyms']['$delete']
      >,
    ) {
      return parseResponse(client.indexes[':indexUid'].settings.synonyms.$delete(args, options))
    },
  })
}

export function useDeleteIndexesIndexUidSettingsSynonyms<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes)[':indexUid']['settings']['synonyms']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':indexUid']['settings']['synonyms']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesIndexUidSettingsSynonymsMutationOptions<
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

export function getIndexesIndexUidSettingsTypoToleranceQueryKey(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$get']
  >,
) {
  return ['indexes', '/indexes/:indexUid/settings/typo-tolerance', args] as const
}

export function getIndexesIndexUidSettingsTypoToleranceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesIndexUidSettingsTypoToleranceQueryKey>
  >({
    queryKey: getIndexesIndexUidSettingsTypoToleranceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes[':indexUid'].settings['typo-tolerance'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIndexesIndexUidSettingsTypoTolerance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsTypoToleranceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getIndexesIndexUidSettingsTypoToleranceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndexesIndexUidSettingsTypoTolerance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSettingsTypoToleranceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getIndexesIndexUidSettingsTypoToleranceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteIndexesIndexUidSettingsTypoToleranceMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/typo-tolerance', 'DELETE'] as const
}

export function getDeleteIndexesIndexUidSettingsTypoToleranceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesIndexUidSettingsTypoToleranceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$delete']
      >,
    ) {
      return parseResponse(
        client.indexes[':indexUid'].settings['typo-tolerance'].$delete(args, options),
      )
    },
  })
}

export function useDeleteIndexesIndexUidSettingsTypoTolerance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesIndexUidSettingsTypoToleranceMutationOptions<
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

export function getPatchIndexesIndexUidSettingsTypoToleranceMutationKey() {
  return ['indexes', '/indexes/:indexUid/settings/typo-tolerance', 'PATCH'] as const
}

export function getPatchIndexesIndexUidSettingsTypoToleranceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchIndexesIndexUidSettingsTypoToleranceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$patch']
      >,
    ) {
      return parseResponse(
        client.indexes[':indexUid'].settings['typo-tolerance'].$patch(args, options),
      )
    },
  })
}

export function usePatchIndexesIndexUidSettingsTypoTolerance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchIndexesIndexUidSettingsTypoToleranceMutationOptions<
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

export function getIndexesIndexUidSimilarQueryKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['similar']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid/similar', args] as const
}

export function getIndexesIndexUidSimilarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['similar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['similar']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesIndexUidSimilarQueryKey>
  >({
    queryKey: getIndexesIndexUidSimilarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes[':indexUid'].similar.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIndexesIndexUidSimilar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['similar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['similar']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)[':indexUid']['similar']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSimilarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getIndexesIndexUidSimilarQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndexesIndexUidSimilar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['similar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['similar']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)[':indexUid']['similar']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidSimilarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getIndexesIndexUidSimilarQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostIndexesIndexUidSimilarMutationKey() {
  return ['indexes', '/indexes/:indexUid/similar', 'POST'] as const
}

export function getPostIndexesIndexUidSimilarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['similar']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexUid']['similar']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIndexesIndexUidSimilarMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.indexes)[':indexUid']['similar']['$post']>,
    ) {
      return parseResponse(client.indexes[':indexUid'].similar.$post(args, options))
    },
  })
}

export function usePostIndexesIndexUidSimilar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)[':indexUid']['similar']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':indexUid']['similar']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIndexesIndexUidSimilarMutationOptions<TError, TOnMutateResult>(
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

export function getIndexesIndexUidStatsQueryKey(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['stats']['$get']>,
) {
  return ['indexes', '/indexes/:indexUid/stats', args] as const
}

export function getIndexesIndexUidStatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['stats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':indexUid']['stats']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesIndexUidStatsQueryKey>
  >({
    queryKey: getIndexesIndexUidStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes[':indexUid'].stats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIndexesIndexUidStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['stats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['stats']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)[':indexUid']['stats']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIndexesIndexUidStatsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIndexesIndexUidStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':indexUid']['stats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['stats']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)[':indexUid']['stats']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexUidStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIndexesIndexUidStatsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getKeysQueryKey(args: InferRequestType<typeof client.keys.$get>) {
  return ['keys', '/keys', args] as const
}

export function getKeysQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.keys.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getKeysQueryKey>
  >({
    queryKey: getKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.keys.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useKeys<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.keys.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getKeysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseKeys<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.keys.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getKeysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostKeysMutationKey() {
  return ['keys', '/keys', 'POST'] as const
}

export function getPostKeysMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$post>>>>>,
    TError,
    InferRequestType<typeof client.keys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostKeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.keys.$post>) {
      return parseResponse(client.keys.$post(args, options))
    },
  })
}

export function usePostKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$post>>>>>,
        TError,
        InferRequestType<typeof client.keys.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostKeysMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getKeysUidOrKeyQueryKey(
  args: InferRequestType<(typeof client.keys)[':uidOrKey']['$get']>,
) {
  return ['keys', '/keys/:uidOrKey', args] as const
}

export function getKeysUidOrKeyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':uidOrKey']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.keys)[':uidOrKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':uidOrKey']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKeysUidOrKeyQueryKey>
  >({
    queryKey: getKeysUidOrKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.keys[':uidOrKey'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useKeysUidOrKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':uidOrKey']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.keys)[':uidOrKey']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':uidOrKey']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKeysUidOrKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getKeysUidOrKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseKeysUidOrKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':uidOrKey']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.keys)[':uidOrKey']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':uidOrKey']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKeysUidOrKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getKeysUidOrKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteKeysUidOrKeyMutationKey() {
  return ['keys', '/keys/:uidOrKey', 'DELETE'] as const
}

export function getDeleteKeysUidOrKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':uidOrKey']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.keys)[':uidOrKey']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteKeysUidOrKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.keys)[':uidOrKey']['$delete']>) {
      return parseResponse(client.keys[':uidOrKey'].$delete(args, options))
    },
  })
}

export function useDeleteKeysUidOrKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.keys)[':uidOrKey']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.keys)[':uidOrKey']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteKeysUidOrKeyMutationOptions<TError, TOnMutateResult>(
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

export function getPatchKeysUidOrKeyMutationKey() {
  return ['keys', '/keys/:uidOrKey', 'PATCH'] as const
}

export function getPatchKeysUidOrKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':uidOrKey']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.keys)[':uidOrKey']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchKeysUidOrKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.keys)[':uidOrKey']['$patch']>) {
      return parseResponse(client.keys[':uidOrKey'].$patch(args, options))
    },
  })
}

export function usePatchKeysUidOrKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':uidOrKey']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.keys)[':uidOrKey']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchKeysUidOrKeyMutationOptions<TError, TOnMutateResult>(
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

export function getPostLogsStderrMutationKey() {
  return ['logs', '/logs/stderr', 'POST'] as const
}

export function getPostLogsStderrMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.stderr.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.logs.stderr.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLogsStderrMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.logs.stderr.$post>) {
      return parseResponse(client.logs.stderr.$post(args, options))
    },
  })
}

export function usePostLogsStderr<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.stderr.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.logs.stderr.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLogsStderrMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostLogsStreamMutationKey() {
  return ['logs', '/logs/stream', 'POST'] as const
}

export function getPostLogsStreamMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.stream.$post>>>>>,
    TError,
    InferRequestType<typeof client.logs.stream.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLogsStreamMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.logs.stream.$post>) {
      return parseResponse(client.logs.stream.$post(args, options))
    },
  })
}

export function usePostLogsStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.stream.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.logs.stream.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLogsStreamMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteLogsStreamMutationKey() {
  return ['logs', '/logs/stream', 'DELETE'] as const
}

export function getDeleteLogsStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.stream.$delete>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteLogsStreamMutationKey(),
    async mutationFn() {
      return parseResponse(client.logs.stream.$delete(undefined, options))
    },
  })
}

export function useDeleteLogsStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.stream.$delete>>>>
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLogsStreamMutationOptions<TError, TOnMutateResult>(
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

export function getMetricsQueryKey() {
  return ['metrics', '/metrics'] as const
}

export function getMetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetricsQueryKey>
  >({
    queryKey: getMetricsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMetricsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMetricsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMultiSearchMutationKey() {
  return ['multi-search', '/multi-search', 'POST'] as const
}

export function getPostMultiSearchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['multi-search']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['multi-search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMultiSearchMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['multi-search']['$post']>) {
      return parseResponse(client['multi-search'].$post(args, options))
    },
  })
}

export function usePostMultiSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['multi-search']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['multi-search']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMultiSearchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getNetworkQueryKey() {
  return ['network', '/network'] as const
}

export function getNetworkQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNetworkQueryKey>
  >({
    queryKey: getNetworkQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.network.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNetwork<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNetworkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNetworkQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNetwork<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNetworkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNetworkQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchNetworkMutationKey() {
  return ['network', '/network', 'PATCH'] as const
}

export function getPatchNetworkMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$patch>>>>>,
    TError,
    InferRequestType<typeof client.network.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchNetworkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.network.$patch>) {
      return parseResponse(client.network.$patch(args, options))
    },
  })
}

export function usePatchNetwork<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$patch>>>>
        >,
        TError,
        InferRequestType<typeof client.network.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchNetworkMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSnapshotsMutationKey() {
  return ['snapshots', '/snapshots', 'POST'] as const
}

export function getPostSnapshotsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostSnapshotsMutationKey(),
    async mutationFn() {
      return parseResponse(client.snapshots.$post(undefined, options))
    },
  })
}

export function usePostSnapshots<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSnapshotsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getStatsQueryKey() {
  return ['stats', '/stats'] as const
}

export function getStatsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatsQueryKey>
  >({
    queryKey: getStatsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStats<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStatsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStats<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStatsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSwapIndexesMutationKey() {
  return ['swap-indexes', '/swap-indexes', 'POST'] as const
}

export function getPostSwapIndexesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['swap-indexes']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['swap-indexes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSwapIndexesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['swap-indexes']['$post']>) {
      return parseResponse(client['swap-indexes'].$post(args, options))
    },
  })
}

export function usePostSwapIndexes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['swap-indexes']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['swap-indexes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSwapIndexesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTasksQueryKey(args: InferRequestType<typeof client.tasks.$get>) {
  return ['tasks', '/tasks', args] as const
}

export function getTasksQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tasks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTasksQueryKey>
  >({
    queryKey: getTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTasks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tasks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTasksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTasks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tasks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTasksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteTasksMutationKey() {
  return ['tasks', '/tasks', 'DELETE'] as const
}

export function getDeleteTasksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$delete>>>>>,
    TError,
    InferRequestType<typeof client.tasks.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTasksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tasks.$delete>) {
      return parseResponse(client.tasks.$delete(args, options))
    },
  })
}

export function useDeleteTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$delete>>>>>,
        TError,
        InferRequestType<typeof client.tasks.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTasksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTasksCancelMutationKey() {
  return ['tasks', '/tasks/cancel', 'POST'] as const
}

export function getPostTasksCancelMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.cancel.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.tasks.cancel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksCancelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tasks.cancel.$post>) {
      return parseResponse(client.tasks.cancel.$post(args, options))
    },
  })
}

export function usePostTasksCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.cancel.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.tasks.cancel.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksCancelMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTasksTaskUidQueryKey(
  args: InferRequestType<(typeof client.tasks)[':taskUid']['$get']>,
) {
  return ['tasks', '/tasks/:taskUid', args] as const
}

export function getTasksTaskUidQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskUid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':taskUid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskUid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskUidQueryKey>
  >({
    queryKey: getTasksTaskUidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks[':taskUid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTasksTaskUid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskUid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':taskUid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskUid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksTaskUidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTasksTaskUidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTasksTaskUid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskUid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':taskUid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskUid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksTaskUidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTasksTaskUidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getVersionQueryKey() {
  return ['version', '/version'] as const
}

export function getVersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVersionQueryKey>
  >({
    queryKey: getVersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVersionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVersionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}
