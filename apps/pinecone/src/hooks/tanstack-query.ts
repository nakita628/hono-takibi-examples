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

export function getBackupsKey() {
  return ['backups'] as const
}

export function getCollectionsKey() {
  return ['collections'] as const
}

export function getIndexesKey() {
  return ['indexes'] as const
}

export function getRestoreJobsKey() {
  return ['restore-jobs'] as const
}

export function getIndexesQueryKey() {
  return ['indexes', '/indexes'] as const
}

export function getIndexesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIndexesQueryKey>
  >({
    queryKey: getIndexesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
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
    { ...getIndexesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIndexes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$get>>>>
  >,
  TError = DefaultError,
>(
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
    { ...getIndexesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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

export function getIndexesIndexNameQueryKey(
  args: InferRequestType<(typeof client.indexes)[':index_name']['$get']>,
) {
  return ['indexes', '/indexes/:index_name', args] as const
}

export function getIndexesIndexNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':index_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':index_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':index_name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesIndexNameQueryKey>
  >({
    queryKey: getIndexesIndexNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes[':index_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIndexesIndexName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':index_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':index_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)[':index_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIndexesIndexNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIndexesIndexName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':index_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':index_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)[':index_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIndexesIndexNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteIndexesIndexNameMutationKey() {
  return ['indexes', '/indexes/:index_name', 'DELETE'] as const
}

export function getDeleteIndexesIndexNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':index_name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':index_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesIndexNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.indexes)[':index_name']['$delete']>) {
      return parseResponse(client.indexes[':index_name'].$delete(args, options))
    },
  })
}

export function useDeleteIndexesIndexName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)[':index_name']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':index_name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesIndexNameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchIndexesIndexNameMutationKey() {
  return ['indexes', '/indexes/:index_name', 'PATCH'] as const
}

export function getPatchIndexesIndexNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':index_name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':index_name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchIndexesIndexNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.indexes)[':index_name']['$patch']>) {
      return parseResponse(client.indexes[':index_name'].$patch(args, options))
    },
  })
}

export function usePatchIndexesIndexName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)[':index_name']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':index_name']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchIndexesIndexNameMutationOptions<TError, TOnMutateResult>(
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

export function getIndexesIndexNameBackupsQueryKey(
  args: InferRequestType<(typeof client.indexes)[':index_name']['backups']['$get']>,
) {
  return ['indexes', '/indexes/:index_name/backups', args] as const
}

export function getIndexesIndexNameBackupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':index_name']['backups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':index_name']['backups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':index_name']['backups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesIndexNameBackupsQueryKey>
  >({
    queryKey: getIndexesIndexNameBackupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes[':index_name'].backups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIndexesIndexNameBackups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':index_name']['backups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':index_name']['backups']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)[':index_name']['backups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexNameBackupsQueryKey>
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
      ...getIndexesIndexNameBackupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndexesIndexNameBackups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes)[':index_name']['backups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':index_name']['backups']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)[':index_name']['backups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexNameBackupsQueryKey>
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
      ...getIndexesIndexNameBackupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostIndexesIndexNameBackupsMutationKey() {
  return ['indexes', '/indexes/:index_name/backups', 'POST'] as const
}

export function getPostIndexesIndexNameBackupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)[':index_name']['backups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':index_name']['backups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIndexesIndexNameBackupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.indexes)[':index_name']['backups']['$post']>,
    ) {
      return parseResponse(client.indexes[':index_name'].backups.$post(args, options))
    },
  })
}

export function usePostIndexesIndexNameBackups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)[':index_name']['backups']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':index_name']['backups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIndexesIndexNameBackupsMutationOptions<TError, TOnMutateResult>(
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

export function getCollectionsQueryKey() {
  return ['collections', '/collections'] as const
}

export function getCollectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCollectionsQueryKey>
  >({
    queryKey: getCollectionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.collections.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCollectionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCollectionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCollectionsMutationKey() {
  return ['collections', '/collections', 'POST'] as const
}

export function getPostCollectionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$post>>>>>,
    TError,
    InferRequestType<typeof client.collections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.collections.$post>) {
      return parseResponse(client.collections.$post(args, options))
    },
  })
}

export function usePostCollections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.collections.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCollectionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostIndexesCreateForModelMutationKey() {
  return ['indexes', '/indexes/create-for-model', 'POST'] as const
}

export function getPostIndexesCreateForModelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes)['create-for-model']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)['create-for-model']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIndexesCreateForModelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.indexes)['create-for-model']['$post']>) {
      return parseResponse(client.indexes['create-for-model'].$post(args, options))
    },
  })
}

export function usePostIndexesCreateForModel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)['create-for-model']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)['create-for-model']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIndexesCreateForModelMutationOptions<TError, TOnMutateResult>(
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

export function getBackupsQueryKey(args: InferRequestType<typeof client.backups.$get>) {
  return ['backups', '/backups', args] as const
}

export function getBackupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.backups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBackupsQueryKey>
  >({
    queryKey: getBackupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.backups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBackups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.backups.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBackupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBackupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBackups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.backups.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBackupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBackupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBackupsBackupIdQueryKey(
  args: InferRequestType<(typeof client.backups)[':backup_id']['$get']>,
) {
  return ['backups', '/backups/:backup_id', args] as const
}

export function getBackupsBackupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.backups)[':backup_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.backups)[':backup_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.backups)[':backup_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBackupsBackupIdQueryKey>
  >({
    queryKey: getBackupsBackupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.backups[':backup_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBackupsBackupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.backups)[':backup_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.backups)[':backup_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.backups)[':backup_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupsBackupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBackupsBackupIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBackupsBackupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.backups)[':backup_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.backups)[':backup_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.backups)[':backup_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupsBackupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBackupsBackupIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteBackupsBackupIdMutationKey() {
  return ['backups', '/backups/:backup_id', 'DELETE'] as const
}

export function getDeleteBackupsBackupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.backups)[':backup_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.backups)[':backup_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBackupsBackupIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.backups)[':backup_id']['$delete']>) {
      return parseResponse(client.backups[':backup_id'].$delete(args, options))
    },
  })
}

export function useDeleteBackupsBackupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.backups)[':backup_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.backups)[':backup_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBackupsBackupIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostBackupsBackupIdCreateIndexMutationKey() {
  return ['backups', '/backups/:backup_id/create-index', 'POST'] as const
}

export function getPostBackupsBackupIdCreateIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.backups)[':backup_id']['create-index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.backups)[':backup_id']['create-index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBackupsBackupIdCreateIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.backups)[':backup_id']['create-index']['$post']>,
    ) {
      return parseResponse(client.backups[':backup_id']['create-index'].$post(args, options))
    },
  })
}

export function usePostBackupsBackupIdCreateIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.backups)[':backup_id']['create-index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.backups)[':backup_id']['create-index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBackupsBackupIdCreateIndexMutationOptions<
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

export function getRestoreJobsQueryKey(
  args: InferRequestType<(typeof client)['restore-jobs']['$get']>,
) {
  return ['restore-jobs', '/restore-jobs', args] as const
}

export function getRestoreJobsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['restore-jobs']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['restore-jobs']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['restore-jobs']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRestoreJobsQueryKey>
  >({
    queryKey: getRestoreJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['restore-jobs'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRestoreJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['restore-jobs']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['restore-jobs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['restore-jobs']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestoreJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRestoreJobsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRestoreJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['restore-jobs']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['restore-jobs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['restore-jobs']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestoreJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRestoreJobsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRestoreJobsJobIdQueryKey(
  args: InferRequestType<(typeof client)['restore-jobs'][':job_id']['$get']>,
) {
  return ['restore-jobs', '/restore-jobs/:job_id', args] as const
}

export function getRestoreJobsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['restore-jobs'][':job_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['restore-jobs'][':job_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['restore-jobs'][':job_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestoreJobsJobIdQueryKey>
  >({
    queryKey: getRestoreJobsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['restore-jobs'][':job_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestoreJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['restore-jobs'][':job_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['restore-jobs'][':job_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['restore-jobs'][':job_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestoreJobsJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRestoreJobsJobIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRestoreJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['restore-jobs'][':job_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['restore-jobs'][':job_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['restore-jobs'][':job_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestoreJobsJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRestoreJobsJobIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCollectionsCollectionNameQueryKey(
  args: InferRequestType<(typeof client.collections)[':collection_name']['$get']>,
) {
  return ['collections', '/collections/:collection_name', args] as const
}

export function getCollectionsCollectionNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collections)[':collection_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionNameQueryKey>
  >({
    queryKey: getCollectionsCollectionNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collection_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCollectionsCollectionName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collections)[':collection_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.collections)[':collection_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsCollectionNameQueryKey>
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
      ...getCollectionsCollectionNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCollectionsCollectionName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collections)[':collection_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.collections)[':collection_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsCollectionNameQueryKey>
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
      ...getCollectionsCollectionNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteCollectionsCollectionNameMutationKey() {
  return ['collections', '/collections/:collection_name', 'DELETE'] as const
}

export function getDeleteCollectionsCollectionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections)[':collection_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCollectionsCollectionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.collections)[':collection_name']['$delete']>,
    ) {
      return parseResponse(client.collections[':collection_name'].$delete(args, options))
    },
  })
}

export function useDeleteCollectionsCollectionName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.collections)[':collection_name']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.collections)[':collection_name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCollectionsCollectionNameMutationOptions<
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
