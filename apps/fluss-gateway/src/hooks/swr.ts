import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetHealthKey() {
  return ['health', '/health'] as const
}

export function useGetHealth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReadyKey() {
  return ['ready', '/ready'] as const
}

export function useGetReady<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetReadyKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ready.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReady<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetReadyKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ready.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ClustersKey() {
  return ['v1', '/v1/clusters'] as const
}

export function useGetV1Clusters<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clusters.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ClustersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clusters.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.clusters.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Clusters<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clusters.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ClustersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clusters.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.clusters.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ClustersClusterDatabasesKey(
  args: InferRequestType<(typeof client.v1.clusters)[':cluster']['databases']['$get']>,
) {
  return ['v1', '/v1/clusters/:cluster/databases', args] as const
}

export function useGetV1ClustersClusterDatabases<TError = unknown>(
  args: InferRequestType<(typeof client.v1.clusters)[':cluster']['databases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.clusters)[':cluster']['databases']['$get']>>
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
        ? getGetV1ClustersClusterDatabasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.clusters)[':cluster']['databases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.clusters[':cluster'].databases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ClustersClusterDatabases<TError = unknown>(
  args: InferRequestType<(typeof client.v1.clusters)[':cluster']['databases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.clusters)[':cluster']['databases']['$get']>>
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
        ? getGetV1ClustersClusterDatabasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.clusters)[':cluster']['databases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.clusters[':cluster'].databases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ClustersClusterDatabasesKey() {
  return ['v1', '/v1/clusters/:cluster/databases', 'POST'] as const
}

export function usePostV1ClustersClusterDatabases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.clusters)[':cluster']['databases']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.clusters)[':cluster']['databases']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ClustersClusterDatabasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.clusters)[':cluster']['databases']['$post']> },
      ) => parseResponse(client.v1.clusters[':cluster'].databases.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ClustersClusterDatabasesDatabaseKey() {
  return ['v1', '/v1/clusters/:cluster/databases/:database', 'DELETE'] as const
}

export function useDeleteV1ClustersClusterDatabasesDatabase<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.clusters)[':cluster']['databases'][':database']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ClustersClusterDatabasesDatabaseKey()
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
            (typeof client.v1.clusters)[':cluster']['databases'][':database']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.clusters[':cluster'].databases[':database'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ClustersClusterDatabasesDatabaseTablesKey(
  args: InferRequestType<
    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables']['$get']
  >,
) {
  return ['v1', '/v1/clusters/:cluster/databases/:database/tables', args] as const
}

export function useGetV1ClustersClusterDatabasesDatabaseTables<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ClustersClusterDatabasesDatabaseTablesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.clusters[':cluster'].databases[':database'].tables.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ClustersClusterDatabasesDatabaseTables<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ClustersClusterDatabasesDatabaseTablesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.clusters[':cluster'].databases[':database'].tables.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ClustersClusterDatabasesDatabaseTablesKey() {
  return ['v1', '/v1/clusters/:cluster/databases/:database/tables', 'POST'] as const
}

export function usePostV1ClustersClusterDatabasesDatabaseTables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ClustersClusterDatabasesDatabaseTablesKey()
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
            (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.clusters[':cluster'].databases[':database'].tables.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ClustersClusterDatabasesDatabaseTablesTableKey(
  args: InferRequestType<
    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$get']
  >,
) {
  return ['v1', '/v1/clusters/:cluster/databases/:database/tables/:table', args] as const
}

export function useGetV1ClustersClusterDatabasesDatabaseTablesTable<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ClustersClusterDatabasesDatabaseTablesTableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.clusters[':cluster'].databases[':database'].tables[':table'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ClustersClusterDatabasesDatabaseTablesTable<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ClustersClusterDatabasesDatabaseTablesTableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.clusters[':cluster'].databases[':database'].tables[':table'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ClustersClusterDatabasesDatabaseTablesTableKey() {
  return ['v1', '/v1/clusters/:cluster/databases/:database/tables/:table', 'DELETE'] as const
}

export function useDeleteV1ClustersClusterDatabasesDatabaseTablesTable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ClustersClusterDatabasesDatabaseTablesTableKey()
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
            (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.clusters[':cluster'].databases[':database'].tables[':table'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ClustersClusterDatabasesDatabaseTablesTableKey() {
  return ['v1', '/v1/clusters/:cluster/databases/:database/tables/:table', 'PATCH'] as const
}

export function usePatchV1ClustersClusterDatabasesDatabaseTablesTable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ClustersClusterDatabasesDatabaseTablesTableKey()
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
            (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.clusters[':cluster'].databases[':database'].tables[':table'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ClustersClusterDatabasesDatabaseTablesTablePartitionsKey(
  args: InferRequestType<
    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions']['$get']
  >,
) {
  return ['v1', '/v1/clusters/:cluster/databases/:database/tables/:table/partitions', args] as const
}

export function useGetV1ClustersClusterDatabasesDatabaseTablesTablePartitions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ClustersClusterDatabasesDatabaseTablesTablePartitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.clusters[':cluster'].databases[':database'].tables[':table'].partitions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ClustersClusterDatabasesDatabaseTablesTablePartitions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ClustersClusterDatabasesDatabaseTablesTablePartitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.clusters[':cluster'].databases[':database'].tables[':table'].partitions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ClustersClusterDatabasesDatabaseTablesTablePartitionsKey() {
  return [
    'v1',
    '/v1/clusters/:cluster/databases/:database/tables/:table/partitions',
    'POST',
  ] as const
}

export function usePostV1ClustersClusterDatabasesDatabaseTablesTablePartitions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ClustersClusterDatabasesDatabaseTablesTablePartitionsKey()
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
            (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.clusters[':cluster'].databases[':database'].tables[':table'].partitions.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ClustersClusterDatabasesDatabaseTablesTablePartitionsPartitionKey() {
  return [
    'v1',
    '/v1/clusters/:cluster/databases/:database/tables/:table/partitions/:partition',
    'DELETE',
  ] as const
}

export function useDeleteV1ClustersClusterDatabasesDatabaseTablesTablePartitionsPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions'][':partition']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1ClustersClusterDatabasesDatabaseTablesTablePartitionsPartitionKey()
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
            (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions'][':partition']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.clusters[':cluster'].databases[':database'].tables[':table'].partitions[
            ':partition'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ClustersClusterDatabasesDatabaseTablesTableRecordsKey() {
  return ['v1', '/v1/clusters/:cluster/databases/:database/tables/:table/records', 'POST'] as const
}

export function usePostV1ClustersClusterDatabasesDatabaseTablesTableRecords<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['records']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ClustersClusterDatabasesDatabaseTablesTableRecordsKey()
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
            (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['records']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.clusters[':cluster'].databases[':database'].tables[':table'].records.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OpenapiJsonKey() {
  return ['v1', '/v1/openapi.json'] as const
}

export function useGetV1OpenapiJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['openapi.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OpenapiJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['openapi.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['openapi.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OpenapiJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['openapi.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OpenapiJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['openapi.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['openapi.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
