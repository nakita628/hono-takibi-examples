import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCollectionsKey() {
  return ['collections'] as const
}

export function getDescribeIndexStatsKey() {
  return ['describe_index_stats'] as const
}

export function getIndexesKey() {
  return ['indexes'] as const
}

export function getQueryKey() {
  return ['query'] as const
}

export function getVectorsKey() {
  return ['vectors'] as const
}

export function getGetCollectionsKey() {
  return ['collections', '/collections'] as const
}

export function useGetCollections<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCollectionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollections<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCollectionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCollectionsKey() {
  return ['collections', '/collections', 'POST'] as const
}

export function usePostCollections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.collections.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.collections.$post> }) =>
        parseResponse(client.collections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCollectionsCollectionNameKey(
  args: InferRequestType<(typeof client.collections)[':collectionName']['$get']>,
) {
  return ['collections', '/collections/:collectionName', args] as const
}

export function useGetCollectionsCollectionName<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collectionName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collectionName']['$get']>>
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
        ? getGetCollectionsCollectionNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collectionName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections[':collectionName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionName<TError = unknown>(
  args: InferRequestType<(typeof client.collections)[':collectionName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collectionName']['$get']>>
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
        ? getGetCollectionsCollectionNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collectionName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections[':collectionName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCollectionsCollectionNameKey() {
  return ['collections', '/collections/:collectionName', 'DELETE'] as const
}

export function useDeleteCollectionsCollectionName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collectionName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.collections)[':collectionName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCollectionsCollectionNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.collections)[':collectionName']['$delete']> },
      ) => parseResponse(client.collections[':collectionName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeIndexStatsKey() {
  return ['describe_index_stats', '/describe_index_stats', 'POST'] as const
}

export function usePostDescribeIndexStats<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.describe_index_stats.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.describe_index_stats.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeIndexStatsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.describe_index_stats.$post> },
      ) => parseResponse(client.describe_index_stats.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesKey() {
  return ['indexes', '/indexes'] as const
}

export function useGetIndexes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIndexesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIndexesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIndexesKey() {
  return ['indexes', '/indexes', 'POST'] as const
}

export function usePostIndexes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.indexes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndexesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.indexes.$post> }) =>
        parseResponse(client.indexes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndexesIndexNameKey(
  args: InferRequestType<(typeof client.indexes)[':indexName']['$get']>,
) {
  return ['indexes', '/indexes/:indexName', args] as const
}

export function useGetIndexesIndexName<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':indexName']['$get']>>>
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
        ? getGetIndexesIndexNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':indexName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes[':indexName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexesIndexName<TError = unknown>(
  args: InferRequestType<(typeof client.indexes)[':indexName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':indexName']['$get']>>>
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
        ? getGetIndexesIndexNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':indexName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexes[':indexName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteIndexesIndexNameKey() {
  return ['indexes', '/indexes/:indexName', 'DELETE'] as const
}

export function useDeleteIndexesIndexName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':indexName']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndexesIndexNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.indexes)[':indexName']['$delete']> },
      ) => parseResponse(client.indexes[':indexName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchIndexesIndexNameKey() {
  return ['indexes', '/indexes/:indexName', 'PATCH'] as const
}

export function usePatchIndexesIndexName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':indexName']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.indexes)[':indexName']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchIndexesIndexNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.indexes)[':indexName']['$patch']> },
      ) => parseResponse(client.indexes[':indexName'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQueryKey() {
  return ['query', '/query', 'POST'] as const
}

export function usePostQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.query.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.query.$post> }) =>
        parseResponse(client.query.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVectorsDeleteKey() {
  return ['vectors', '/vectors/delete', 'POST'] as const
}

export function usePostVectorsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vectors.delete.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.vectors.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVectorsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.vectors.delete.$post> }) =>
        parseResponse(client.vectors.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVectorsFetchKey() {
  return ['vectors', '/vectors/fetch', 'POST'] as const
}

export function usePostVectorsFetch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vectors.fetch.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.vectors.fetch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVectorsFetchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.vectors.fetch.$post> }) =>
        parseResponse(client.vectors.fetch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVectorsUpdateKey() {
  return ['vectors', '/vectors/update', 'POST'] as const
}

export function usePostVectorsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vectors.update.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.vectors.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVectorsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.vectors.update.$post> }) =>
        parseResponse(client.vectors.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVectorsUpsertKey() {
  return ['vectors', '/vectors/upsert', 'POST'] as const
}

export function usePostVectorsUpsert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vectors.upsert.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.vectors.upsert.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVectorsUpsertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.vectors.upsert.$post> }) =>
        parseResponse(client.vectors.upsert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
