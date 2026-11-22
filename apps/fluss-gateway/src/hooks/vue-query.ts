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

export function getHealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
          ReturnType<typeof getHealthQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReadyQueryKey() {
  return ['ready', '/ready'] as const
}

export function getReadyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getReadyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ready.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useReady<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
          ReturnType<typeof getReadyQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReadyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getReadyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ready.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ClustersQueryKey() {
  return ['v1', '/v1/clusters'] as const
}

export function getV1ClustersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1ClustersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.clusters.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Clusters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clusters.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clusters.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clusters.$get>>>>
          >,
          ReturnType<typeof getV1ClustersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clusters.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ClustersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1ClustersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.clusters.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ClustersClusterDatabasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.clusters)[':cluster']['databases']['$get']>
  >,
) {
  return ['v1', '/v1/clusters/:cluster/databases', toValue(args)] as const
}

export function getV1ClustersClusterDatabasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.clusters)[':cluster']['databases']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ClustersClusterDatabasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.clusters[':cluster'].databases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.clusters)[':cluster']['databases']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.clusters)[':cluster']['databases']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ClustersClusterDatabasesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.clusters)[':cluster']['databases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ClustersClusterDatabasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ClustersClusterDatabasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.clusters[':cluster'].databases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables']['$get']
    >
  >,
) {
  return ['v1', '/v1/clusters/:cluster/databases/:database/tables', toValue(args)] as const
}

export function getV1ClustersClusterDatabasesDatabaseTablesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ClustersClusterDatabasesDatabaseTablesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.clusters[':cluster'].databases[':database'].tables.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables']['$get']
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
                    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables']['$get']
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
                    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ClustersClusterDatabasesDatabaseTablesQueryKey>
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
              (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ClustersClusterDatabasesDatabaseTablesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ClustersClusterDatabasesDatabaseTablesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.clusters[':cluster'].databases[':database'].tables.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$get']
    >
  >,
) {
  return ['v1', '/v1/clusters/:cluster/databases/:database/tables/:table', toValue(args)] as const
}

export function getV1ClustersClusterDatabasesDatabaseTablesTableQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ClustersClusterDatabasesDatabaseTablesTableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.clusters[':cluster'].databases[':database'].tables[':table'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$get']
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
                    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$get']
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
                    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ClustersClusterDatabasesDatabaseTablesTableQueryKey>
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
              (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ClustersClusterDatabasesDatabaseTablesTableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ClustersClusterDatabasesDatabaseTablesTableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.clusters[':cluster'].databases[':database'].tables[':table'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/clusters/:cluster/databases/:database/tables/:table/partitions',
    toValue(args),
  ] as const
}

export function getV1ClustersClusterDatabasesDatabaseTablesTablePartitionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1ClustersClusterDatabasesDatabaseTablesTablePartitionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.clusters[':cluster'].databases[':database'].tables[':table'].partitions.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions']['$get']
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
                    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions']['$get']
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
                    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ClustersClusterDatabasesDatabaseTablesTablePartitionsQueryKey>
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
              (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ClustersClusterDatabasesDatabaseTablesTablePartitionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1ClustersClusterDatabasesDatabaseTablesTablePartitionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.clusters[':cluster'].databases[':database'].tables[':table'].partitions.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
      Extract<
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
      Extract<
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

export function getV1OpenapiJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1OpenapiJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['openapi.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['openapi.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['openapi.json']['$get']>>>
            >
          >,
          ReturnType<typeof getV1OpenapiJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['openapi.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OpenapiJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1OpenapiJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['openapi.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
