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

export function getHealthKey() {
  return ['health'] as const
}

export function getReadyKey() {
  return ['ready'] as const
}

export function getV1Key() {
  return ['v1'] as const
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

export function getReadyQueryKey() {
  return ['ready', '/ready'] as const
}

export function getReadyQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReadyQueryKey>
  >({
    queryKey: getReadyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ready.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useReady<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getReadyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReadyQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReady<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getReadyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReadyQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1ClustersQueryKey() {
  return ['v1', '/v1/clusters'] as const
}

export function getV1ClustersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clusters.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clusters.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ClustersQueryKey>
  >({
    queryKey: getV1ClustersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.clusters.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Clusters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clusters.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clusters.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ClustersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ClustersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Clusters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clusters.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clusters.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ClustersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ClustersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1ClustersClusterDatabasesQueryKey(
  args: InferRequestType<(typeof client.v1.clusters)[':cluster']['databases']['$get']>,
) {
  return ['v1', '/v1/clusters/:cluster/databases', args] as const
}

export function getV1ClustersClusterDatabasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.clusters)[':cluster']['databases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.clusters)[':cluster']['databases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.clusters)[':cluster']['databases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ClustersClusterDatabasesQueryKey>
  >({
    queryKey: getV1ClustersClusterDatabasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.clusters[':cluster'].databases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ClustersClusterDatabases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.clusters)[':cluster']['databases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.clusters)[':cluster']['databases']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.clusters)[':cluster']['databases']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ClustersClusterDatabasesQueryKey>
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
      ...getV1ClustersClusterDatabasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ClustersClusterDatabases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.clusters)[':cluster']['databases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.clusters)[':cluster']['databases']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.clusters)[':cluster']['databases']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ClustersClusterDatabasesQueryKey>
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
      ...getV1ClustersClusterDatabasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1ClustersClusterDatabasesMutationKey() {
  return ['v1', '/v1/clusters/:cluster/databases', 'POST'] as const
}

export function getPostV1ClustersClusterDatabasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.clusters)[':cluster']['databases']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.clusters)[':cluster']['databases']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ClustersClusterDatabasesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.clusters)[':cluster']['databases']['$post']>,
    ) {
      return parseResponse(client.v1.clusters[':cluster'].databases.$post(args, options))
    },
  })
}

export function usePostV1ClustersClusterDatabases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.clusters)[':cluster']['databases']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.clusters)[':cluster']['databases']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ClustersClusterDatabasesMutationOptions<
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

export function getDeleteV1ClustersClusterDatabasesDatabaseMutationKey() {
  return ['v1', '/v1/clusters/:cluster/databases/:database', 'DELETE'] as const
}

export function getDeleteV1ClustersClusterDatabasesDatabaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.clusters)[':cluster']['databases'][':database']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.clusters)[':cluster']['databases'][':database']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ClustersClusterDatabasesDatabaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.clusters)[':cluster']['databases'][':database']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.clusters[':cluster'].databases[':database'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ClustersClusterDatabasesDatabase<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.clusters)[':cluster']['databases'][':database']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.clusters)[':cluster']['databases'][':database']['$delete']
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
  const mutationDefaults = getDeleteV1ClustersClusterDatabasesDatabaseMutationOptions<
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

export function getV1ClustersClusterDatabasesDatabaseTablesQueryKey(
  args: InferRequestType<
    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables']['$get']
  >,
) {
  return ['v1', '/v1/clusters/:cluster/databases/:database/tables', args] as const
}

export function getV1ClustersClusterDatabasesDatabaseTablesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ClustersClusterDatabasesDatabaseTablesQueryKey>
  >({
    queryKey: getV1ClustersClusterDatabasesDatabaseTablesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.clusters[':cluster'].databases[':database'].tables.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ClustersClusterDatabasesDatabaseTables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ClustersClusterDatabasesDatabaseTablesQueryKey>
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
      ...getV1ClustersClusterDatabasesDatabaseTablesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ClustersClusterDatabasesDatabaseTables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ClustersClusterDatabasesDatabaseTablesQueryKey>
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
      ...getV1ClustersClusterDatabasesDatabaseTablesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1ClustersClusterDatabasesDatabaseTablesMutationKey() {
  return ['v1', '/v1/clusters/:cluster/databases/:database/tables', 'POST'] as const
}

export function getPostV1ClustersClusterDatabasesDatabaseTablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ClustersClusterDatabasesDatabaseTablesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.clusters[':cluster'].databases[':database'].tables.$post(args, options),
      )
    },
  })
}

export function usePostV1ClustersClusterDatabasesDatabaseTables<
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
                  (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables']['$post']
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
  const mutationDefaults = getPostV1ClustersClusterDatabasesDatabaseTablesMutationOptions<
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

export function getV1ClustersClusterDatabasesDatabaseTablesTableQueryKey(
  args: InferRequestType<
    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$get']
  >,
) {
  return ['v1', '/v1/clusters/:cluster/databases/:database/tables/:table', args] as const
}

export function getV1ClustersClusterDatabasesDatabaseTablesTableQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ClustersClusterDatabasesDatabaseTablesTableQueryKey>
  >({
    queryKey: getV1ClustersClusterDatabasesDatabaseTablesTableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.clusters[':cluster'].databases[':database'].tables[':table'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ClustersClusterDatabasesDatabaseTablesTable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ClustersClusterDatabasesDatabaseTablesTableQueryKey>
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
      ...getV1ClustersClusterDatabasesDatabaseTablesTableQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ClustersClusterDatabasesDatabaseTablesTable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ClustersClusterDatabasesDatabaseTablesTableQueryKey>
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
      ...getV1ClustersClusterDatabasesDatabaseTablesTableQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1ClustersClusterDatabasesDatabaseTablesTableMutationKey() {
  return ['v1', '/v1/clusters/:cluster/databases/:database/tables/:table', 'DELETE'] as const
}

export function getDeleteV1ClustersClusterDatabasesDatabaseTablesTableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ClustersClusterDatabasesDatabaseTablesTableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.clusters[':cluster'].databases[':database'].tables[':table'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV1ClustersClusterDatabasesDatabaseTablesTable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$delete']
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
  const mutationDefaults = getDeleteV1ClustersClusterDatabasesDatabaseTablesTableMutationOptions<
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

export function getPatchV1ClustersClusterDatabasesDatabaseTablesTableMutationKey() {
  return ['v1', '/v1/clusters/:cluster/databases/:database/tables/:table', 'PATCH'] as const
}

export function getPatchV1ClustersClusterDatabasesDatabaseTablesTableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ClustersClusterDatabasesDatabaseTablesTableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.clusters[':cluster'].databases[':database'].tables[':table'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchV1ClustersClusterDatabasesDatabaseTablesTable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$patch']
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
  const mutationDefaults = getPatchV1ClustersClusterDatabasesDatabaseTablesTableMutationOptions<
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

export function getV1ClustersClusterDatabasesDatabaseTablesTablePartitionsQueryKey(
  args: InferRequestType<
    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions']['$get']
  >,
) {
  return ['v1', '/v1/clusters/:cluster/databases/:database/tables/:table/partitions', args] as const
}

export function getV1ClustersClusterDatabasesDatabaseTablesTablePartitionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ClustersClusterDatabasesDatabaseTablesTablePartitionsQueryKey>
  >({
    queryKey: getV1ClustersClusterDatabasesDatabaseTablesTablePartitionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.clusters[':cluster'].databases[':database'].tables[':table'].partitions.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useV1ClustersClusterDatabasesDatabaseTablesTablePartitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ClustersClusterDatabasesDatabaseTablesTablePartitionsQueryKey>
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
      ...getV1ClustersClusterDatabasesDatabaseTablesTablePartitionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ClustersClusterDatabasesDatabaseTablesTablePartitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ClustersClusterDatabasesDatabaseTablesTablePartitionsQueryKey>
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
      ...getV1ClustersClusterDatabasesDatabaseTablesTablePartitionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1ClustersClusterDatabasesDatabaseTablesTablePartitionsMutationKey() {
  return [
    'v1',
    '/v1/clusters/:cluster/databases/:database/tables/:table/partitions',
    'POST',
  ] as const
}

export function getPostV1ClustersClusterDatabasesDatabaseTablesTablePartitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ClustersClusterDatabasesDatabaseTablesTablePartitionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.clusters[':cluster'].databases[':database'].tables[':table'].partitions.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1ClustersClusterDatabasesDatabaseTablesTablePartitions<
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
                  (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions']['$post']
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
  const mutationDefaults =
    getPostV1ClustersClusterDatabasesDatabaseTablesTablePartitionsMutationOptions<
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

export function getDeleteV1ClustersClusterDatabasesDatabaseTablesTablePartitionsPartitionMutationKey() {
  return [
    'v1',
    '/v1/clusters/:cluster/databases/:database/tables/:table/partitions/:partition',
    'DELETE',
  ] as const
}

export function getDeleteV1ClustersClusterDatabasesDatabaseTablesTablePartitionsPartitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions'][':partition']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions'][':partition']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1ClustersClusterDatabasesDatabaseTablesTablePartitionsPartitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions'][':partition']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.clusters[':cluster'].databases[':database'].tables[':table'].partitions[
          ':partition'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ClustersClusterDatabasesDatabaseTablesTablePartitionsPartition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions'][':partition']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions'][':partition']['$delete']
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
  const mutationDefaults =
    getDeleteV1ClustersClusterDatabasesDatabaseTablesTablePartitionsPartitionMutationOptions<
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

export function getPostV1ClustersClusterDatabasesDatabaseTablesTableRecordsMutationKey() {
  return ['v1', '/v1/clusters/:cluster/databases/:database/tables/:table/records', 'POST'] as const
}

export function getPostV1ClustersClusterDatabasesDatabaseTablesTableRecordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['records']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['records']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ClustersClusterDatabasesDatabaseTablesTableRecordsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['records']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.clusters[':cluster'].databases[':database'].tables[':table'].records.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1ClustersClusterDatabasesDatabaseTablesTableRecords<
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
                  (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['records']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['records']['$post']
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
  const mutationDefaults =
    getPostV1ClustersClusterDatabasesDatabaseTablesTableRecordsMutationOptions<
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

export function getV1OpenapiJsonQueryKey() {
  return ['v1', '/v1/openapi.json'] as const
}

export function getV1OpenapiJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['openapi.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['openapi.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OpenapiJsonQueryKey>
  >({
    queryKey: getV1OpenapiJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['openapi.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1OpenapiJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['openapi.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['openapi.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OpenapiJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1OpenapiJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1OpenapiJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['openapi.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['openapi.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OpenapiJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1OpenapiJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}
