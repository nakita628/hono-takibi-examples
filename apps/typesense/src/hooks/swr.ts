import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAliasesKey() {
  return ['aliases'] as const
}

export function getAnalyticsKey() {
  return ['analytics'] as const
}

export function getCollectionsKey() {
  return ['collections'] as const
}

export function getConfigKey() {
  return ['config'] as const
}

export function getConversationsKey() {
  return ['conversations'] as const
}

export function getCurationSetsKey() {
  return ['curation_sets'] as const
}

export function getDebugKey() {
  return ['debug'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getKeysKey() {
  return ['keys'] as const
}

export function getMetricsJsonKey() {
  return ['metrics.json'] as const
}

export function getMultiSearchKey() {
  return ['multi_search'] as const
}

export function getNlSearchModelsKey() {
  return ['nl_search_models'] as const
}

export function getOperationsKey() {
  return ['operations'] as const
}

export function getPresetsKey() {
  return ['presets'] as const
}

export function getStatsJsonKey() {
  return ['stats.json'] as const
}

export function getStemmingKey() {
  return ['stemming'] as const
}

export function getStopwordsKey() {
  return ['stopwords'] as const
}

export function getSynonymSetsKey() {
  return ['synonym_sets'] as const
}

export function getGetCollectionsKey(args: InferRequestType<typeof client.collections.$get>) {
  return ['collections', '/collections', args] as const
}

export function useGetCollections<TError = unknown>(
  args: InferRequestType<typeof client.collections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCollectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollections<TError = unknown>(
  args: InferRequestType<typeof client.collections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCollectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections.$get(args, clientOptions)),
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

export function getPatchCollectionsCollectionNameKey() {
  return ['collections', '/collections/:collectionName', 'PATCH'] as const
}

export function usePatchCollectionsCollectionName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collectionName']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.collections)[':collectionName']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCollectionsCollectionNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.collections)[':collectionName']['$patch']> },
      ) => parseResponse(client.collections[':collectionName'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsCollectionNameDocumentsKey() {
  return ['collections', '/collections/:collectionName/documents', 'POST'] as const
}

export function usePostCollectionsCollectionNameDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collectionName']['documents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.collections)[':collectionName']['documents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsCollectionNameDocumentsKey()
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
            (typeof client.collections)[':collectionName']['documents']['$post']
          >
        },
      ) => parseResponse(client.collections[':collectionName'].documents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCollectionsCollectionNameDocumentsKey() {
  return ['collections', '/collections/:collectionName/documents', 'DELETE'] as const
}

export function useDeleteCollectionsCollectionNameDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.collections)[':collectionName']['documents']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.collections)[':collectionName']['documents']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCollectionsCollectionNameDocumentsKey()
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
            (typeof client.collections)[':collectionName']['documents']['$delete']
          >
        },
      ) =>
        parseResponse(client.collections[':collectionName'].documents.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCollectionsCollectionNameDocumentsKey() {
  return ['collections', '/collections/:collectionName/documents', 'PATCH'] as const
}

export function usePatchCollectionsCollectionNameDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collectionName']['documents']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.collections)[':collectionName']['documents']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCollectionsCollectionNameDocumentsKey()
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
            (typeof client.collections)[':collectionName']['documents']['$patch']
          >
        },
      ) =>
        parseResponse(client.collections[':collectionName'].documents.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCollectionsCollectionNameDocumentsSearchKey(
  args: InferRequestType<
    (typeof client.collections)[':collectionName']['documents']['search']['$get']
  >,
) {
  return ['collections', '/collections/:collectionName/documents/search', args] as const
}

export function useGetCollectionsCollectionNameDocumentsSearch<TError = unknown>(
  args: InferRequestType<
    (typeof client.collections)[':collectionName']['documents']['search']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collections)[':collectionName']['documents']['search']['$get']
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
        ? getGetCollectionsCollectionNameDocumentsSearchKey(args)
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
                (typeof client.collections)[':collectionName']['documents']['search']['$get']
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
          client.collections[':collectionName'].documents.search.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionNameDocumentsSearch<TError = unknown>(
  args: InferRequestType<
    (typeof client.collections)[':collectionName']['documents']['search']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collections)[':collectionName']['documents']['search']['$get']
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
        ? getGetCollectionsCollectionNameDocumentsSearchKey(args)
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
                (typeof client.collections)[':collectionName']['documents']['search']['$get']
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
          client.collections[':collectionName'].documents.search.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSynonymSetsKey() {
  return ['synonym_sets', '/synonym_sets'] as const
}

export function useGetSynonymSets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.synonym_sets.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSynonymSetsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.synonym_sets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.synonym_sets.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSynonymSets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.synonym_sets.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSynonymSetsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.synonym_sets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.synonym_sets.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSynonymSetsSynonymSetNameKey(
  args: InferRequestType<(typeof client.synonym_sets)[':synonymSetName']['$get']>,
) {
  return ['synonym_sets', '/synonym_sets/:synonymSetName', args] as const
}

export function useGetSynonymSetsSynonymSetName<TError = unknown>(
  args: InferRequestType<(typeof client.synonym_sets)[':synonymSetName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.synonym_sets)[':synonymSetName']['$get']>>
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
        ? getGetSynonymSetsSynonymSetNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.synonym_sets)[':synonymSetName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.synonym_sets[':synonymSetName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSynonymSetsSynonymSetName<TError = unknown>(
  args: InferRequestType<(typeof client.synonym_sets)[':synonymSetName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.synonym_sets)[':synonymSetName']['$get']>>
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
        ? getGetSynonymSetsSynonymSetNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.synonym_sets)[':synonymSetName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.synonym_sets[':synonymSetName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSynonymSetsSynonymSetNameKey() {
  return ['synonym_sets', '/synonym_sets/:synonymSetName', 'PUT'] as const
}

export function usePutSynonymSetsSynonymSetName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.synonym_sets)[':synonymSetName']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.synonym_sets)[':synonymSetName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSynonymSetsSynonymSetNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.synonym_sets)[':synonymSetName']['$put']> },
      ) => parseResponse(client.synonym_sets[':synonymSetName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSynonymSetsSynonymSetNameKey() {
  return ['synonym_sets', '/synonym_sets/:synonymSetName', 'DELETE'] as const
}

export function useDeleteSynonymSetsSynonymSetName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.synonym_sets)[':synonymSetName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.synonym_sets)[':synonymSetName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSynonymSetsSynonymSetNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.synonym_sets)[':synonymSetName']['$delete']> },
      ) => parseResponse(client.synonym_sets[':synonymSetName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSynonymSetsSynonymSetNameItemsKey(
  args: InferRequestType<(typeof client.synonym_sets)[':synonymSetName']['items']['$get']>,
) {
  return ['synonym_sets', '/synonym_sets/:synonymSetName/items', args] as const
}

export function useGetSynonymSetsSynonymSetNameItems<TError = unknown>(
  args: InferRequestType<(typeof client.synonym_sets)[':synonymSetName']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.synonym_sets)[':synonymSetName']['items']['$get']>>
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
        ? getGetSynonymSetsSynonymSetNameItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.synonym_sets)[':synonymSetName']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.synonym_sets[':synonymSetName'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSynonymSetsSynonymSetNameItems<TError = unknown>(
  args: InferRequestType<(typeof client.synonym_sets)[':synonymSetName']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.synonym_sets)[':synonymSetName']['items']['$get']>>
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
        ? getGetSynonymSetsSynonymSetNameItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.synonym_sets)[':synonymSetName']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.synonym_sets[':synonymSetName'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSynonymSetsSynonymSetNameItemsItemIdKey(
  args: InferRequestType<
    (typeof client.synonym_sets)[':synonymSetName']['items'][':itemId']['$get']
  >,
) {
  return ['synonym_sets', '/synonym_sets/:synonymSetName/items/:itemId', args] as const
}

export function useGetSynonymSetsSynonymSetNameItemsItemId<TError = unknown>(
  args: InferRequestType<
    (typeof client.synonym_sets)[':synonymSetName']['items'][':itemId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.synonym_sets)[':synonymSetName']['items'][':itemId']['$get']
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
        ? getGetSynonymSetsSynonymSetNameItemsItemIdKey(args)
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
                (typeof client.synonym_sets)[':synonymSetName']['items'][':itemId']['$get']
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
          client.synonym_sets[':synonymSetName'].items[':itemId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSynonymSetsSynonymSetNameItemsItemId<TError = unknown>(
  args: InferRequestType<
    (typeof client.synonym_sets)[':synonymSetName']['items'][':itemId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.synonym_sets)[':synonymSetName']['items'][':itemId']['$get']
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
        ? getGetSynonymSetsSynonymSetNameItemsItemIdKey(args)
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
                (typeof client.synonym_sets)[':synonymSetName']['items'][':itemId']['$get']
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
          client.synonym_sets[':synonymSetName'].items[':itemId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSynonymSetsSynonymSetNameItemsItemIdKey() {
  return ['synonym_sets', '/synonym_sets/:synonymSetName/items/:itemId', 'PUT'] as const
}

export function usePutSynonymSetsSynonymSetNameItemsItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.synonym_sets)[':synonymSetName']['items'][':itemId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.synonym_sets)[':synonymSetName']['items'][':itemId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSynonymSetsSynonymSetNameItemsItemIdKey()
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
            (typeof client.synonym_sets)[':synonymSetName']['items'][':itemId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.synonym_sets[':synonymSetName'].items[':itemId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSynonymSetsSynonymSetNameItemsItemIdKey() {
  return ['synonym_sets', '/synonym_sets/:synonymSetName/items/:itemId', 'DELETE'] as const
}

export function useDeleteSynonymSetsSynonymSetNameItemsItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.synonym_sets)[':synonymSetName']['items'][':itemId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.synonym_sets)[':synonymSetName']['items'][':itemId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSynonymSetsSynonymSetNameItemsItemIdKey()
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
            (typeof client.synonym_sets)[':synonymSetName']['items'][':itemId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.synonym_sets[':synonymSetName'].items[':itemId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCurationSetsKey() {
  return ['curation_sets', '/curation_sets'] as const
}

export function useGetCurationSets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.curation_sets.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCurationSetsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.curation_sets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.curation_sets.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCurationSets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.curation_sets.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCurationSetsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.curation_sets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.curation_sets.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCurationSetsCurationSetNameKey(
  args: InferRequestType<(typeof client.curation_sets)[':curationSetName']['$get']>,
) {
  return ['curation_sets', '/curation_sets/:curationSetName', args] as const
}

export function useGetCurationSetsCurationSetName<TError = unknown>(
  args: InferRequestType<(typeof client.curation_sets)[':curationSetName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.curation_sets)[':curationSetName']['$get']>>
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
        ? getGetCurationSetsCurationSetNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.curation_sets)[':curationSetName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.curation_sets[':curationSetName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCurationSetsCurationSetName<TError = unknown>(
  args: InferRequestType<(typeof client.curation_sets)[':curationSetName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.curation_sets)[':curationSetName']['$get']>>
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
        ? getGetCurationSetsCurationSetNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.curation_sets)[':curationSetName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.curation_sets[':curationSetName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCurationSetsCurationSetNameKey() {
  return ['curation_sets', '/curation_sets/:curationSetName', 'PUT'] as const
}

export function usePutCurationSetsCurationSetName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.curation_sets)[':curationSetName']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.curation_sets)[':curationSetName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCurationSetsCurationSetNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.curation_sets)[':curationSetName']['$put']> },
      ) => parseResponse(client.curation_sets[':curationSetName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCurationSetsCurationSetNameKey() {
  return ['curation_sets', '/curation_sets/:curationSetName', 'DELETE'] as const
}

export function useDeleteCurationSetsCurationSetName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.curation_sets)[':curationSetName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.curation_sets)[':curationSetName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCurationSetsCurationSetNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.curation_sets)[':curationSetName']['$delete']> },
      ) => parseResponse(client.curation_sets[':curationSetName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCurationSetsCurationSetNameItemsKey(
  args: InferRequestType<(typeof client.curation_sets)[':curationSetName']['items']['$get']>,
) {
  return ['curation_sets', '/curation_sets/:curationSetName/items', args] as const
}

export function useGetCurationSetsCurationSetNameItems<TError = unknown>(
  args: InferRequestType<(typeof client.curation_sets)[':curationSetName']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.curation_sets)[':curationSetName']['items']['$get']>>
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
        ? getGetCurationSetsCurationSetNameItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.curation_sets)[':curationSetName']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.curation_sets[':curationSetName'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCurationSetsCurationSetNameItems<TError = unknown>(
  args: InferRequestType<(typeof client.curation_sets)[':curationSetName']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.curation_sets)[':curationSetName']['items']['$get']>>
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
        ? getGetCurationSetsCurationSetNameItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.curation_sets)[':curationSetName']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.curation_sets[':curationSetName'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCurationSetsCurationSetNameItemsItemIdKey(
  args: InferRequestType<
    (typeof client.curation_sets)[':curationSetName']['items'][':itemId']['$get']
  >,
) {
  return ['curation_sets', '/curation_sets/:curationSetName/items/:itemId', args] as const
}

export function useGetCurationSetsCurationSetNameItemsItemId<TError = unknown>(
  args: InferRequestType<
    (typeof client.curation_sets)[':curationSetName']['items'][':itemId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.curation_sets)[':curationSetName']['items'][':itemId']['$get']
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
        ? getGetCurationSetsCurationSetNameItemsItemIdKey(args)
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
                (typeof client.curation_sets)[':curationSetName']['items'][':itemId']['$get']
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
          client.curation_sets[':curationSetName'].items[':itemId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCurationSetsCurationSetNameItemsItemId<TError = unknown>(
  args: InferRequestType<
    (typeof client.curation_sets)[':curationSetName']['items'][':itemId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.curation_sets)[':curationSetName']['items'][':itemId']['$get']
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
        ? getGetCurationSetsCurationSetNameItemsItemIdKey(args)
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
                (typeof client.curation_sets)[':curationSetName']['items'][':itemId']['$get']
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
          client.curation_sets[':curationSetName'].items[':itemId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutCurationSetsCurationSetNameItemsItemIdKey() {
  return ['curation_sets', '/curation_sets/:curationSetName/items/:itemId', 'PUT'] as const
}

export function usePutCurationSetsCurationSetNameItemsItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.curation_sets)[':curationSetName']['items'][':itemId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.curation_sets)[':curationSetName']['items'][':itemId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCurationSetsCurationSetNameItemsItemIdKey()
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
            (typeof client.curation_sets)[':curationSetName']['items'][':itemId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.curation_sets[':curationSetName'].items[':itemId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCurationSetsCurationSetNameItemsItemIdKey() {
  return ['curation_sets', '/curation_sets/:curationSetName/items/:itemId', 'DELETE'] as const
}

export function useDeleteCurationSetsCurationSetNameItemsItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.curation_sets)[':curationSetName']['items'][':itemId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.curation_sets)[':curationSetName']['items'][':itemId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCurationSetsCurationSetNameItemsItemIdKey()
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
            (typeof client.curation_sets)[':curationSetName']['items'][':itemId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.curation_sets[':curationSetName'].items[':itemId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCollectionsCollectionNameDocumentsExportKey(
  args: InferRequestType<
    (typeof client.collections)[':collectionName']['documents']['export']['$get']
  >,
) {
  return ['collections', '/collections/:collectionName/documents/export', args] as const
}

export function useGetCollectionsCollectionNameDocumentsExport<TError = unknown>(
  args: InferRequestType<
    (typeof client.collections)[':collectionName']['documents']['export']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collections)[':collectionName']['documents']['export']['$get']
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
        ? getGetCollectionsCollectionNameDocumentsExportKey(args)
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
                (typeof client.collections)[':collectionName']['documents']['export']['$get']
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
          client.collections[':collectionName'].documents.export.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionNameDocumentsExport<TError = unknown>(
  args: InferRequestType<
    (typeof client.collections)[':collectionName']['documents']['export']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collections)[':collectionName']['documents']['export']['$get']
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
        ? getGetCollectionsCollectionNameDocumentsExportKey(args)
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
                (typeof client.collections)[':collectionName']['documents']['export']['$get']
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
          client.collections[':collectionName'].documents.export.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCollectionsCollectionNameDocumentsImportKey() {
  return ['collections', '/collections/:collectionName/documents/import', 'POST'] as const
}

export function usePostCollectionsCollectionNameDocumentsImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collectionName']['documents']['import']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.collections)[':collectionName']['documents']['import']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsCollectionNameDocumentsImportKey()
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
            (typeof client.collections)[':collectionName']['documents']['import']['$post']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collectionName'].documents.import.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCollectionsCollectionNameDocumentsDocumentIdKey(
  args: InferRequestType<
    (typeof client.collections)[':collectionName']['documents'][':documentId']['$get']
  >,
) {
  return ['collections', '/collections/:collectionName/documents/:documentId', args] as const
}

export function useGetCollectionsCollectionNameDocumentsDocumentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.collections)[':collectionName']['documents'][':documentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collections)[':collectionName']['documents'][':documentId']['$get']
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
        ? getGetCollectionsCollectionNameDocumentsDocumentIdKey(args)
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
                (typeof client.collections)[':collectionName']['documents'][':documentId']['$get']
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
          client.collections[':collectionName'].documents[':documentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsCollectionNameDocumentsDocumentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.collections)[':collectionName']['documents'][':documentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collections)[':collectionName']['documents'][':documentId']['$get']
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
        ? getGetCollectionsCollectionNameDocumentsDocumentIdKey(args)
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
                (typeof client.collections)[':collectionName']['documents'][':documentId']['$get']
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
          client.collections[':collectionName'].documents[':documentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteCollectionsCollectionNameDocumentsDocumentIdKey() {
  return ['collections', '/collections/:collectionName/documents/:documentId', 'DELETE'] as const
}

export function useDeleteCollectionsCollectionNameDocumentsDocumentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collectionName']['documents'][':documentId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.collections)[':collectionName']['documents'][':documentId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCollectionsCollectionNameDocumentsDocumentIdKey()
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
            (typeof client.collections)[':collectionName']['documents'][':documentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collectionName'].documents[':documentId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchCollectionsCollectionNameDocumentsDocumentIdKey() {
  return ['collections', '/collections/:collectionName/documents/:documentId', 'PATCH'] as const
}

export function usePatchCollectionsCollectionNameDocumentsDocumentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collectionName']['documents'][':documentId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.collections)[':collectionName']['documents'][':documentId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCollectionsCollectionNameDocumentsDocumentIdKey()
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
            (typeof client.collections)[':collectionName']['documents'][':documentId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.collections[':collectionName'].documents[':documentId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsModelsKey() {
  return ['conversations', '/conversations/models'] as const
}

export function useGetConversationsModels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.models.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConversationsModelsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.models.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.models.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsModels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.models.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConversationsModelsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.models.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.models.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConversationsModelsKey() {
  return ['conversations', '/conversations/models', 'POST'] as const
}

export function usePostConversationsModels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.models.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.conversations.models.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsModelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.conversations.models.$post> },
      ) => parseResponse(client.conversations.models.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsModelsModelIdKey(
  args: InferRequestType<(typeof client.conversations.models)[':modelId']['$get']>,
) {
  return ['conversations', '/conversations/models/:modelId', args] as const
}

export function useGetConversationsModelsModelId<TError = unknown>(
  args: InferRequestType<(typeof client.conversations.models)[':modelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations.models)[':modelId']['$get']>>
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
        ? getGetConversationsModelsModelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations.models)[':modelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.models[':modelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsModelsModelId<TError = unknown>(
  args: InferRequestType<(typeof client.conversations.models)[':modelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations.models)[':modelId']['$get']>>
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
        ? getGetConversationsModelsModelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations.models)[':modelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.models[':modelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutConversationsModelsModelIdKey() {
  return ['conversations', '/conversations/models/:modelId', 'PUT'] as const
}

export function usePutConversationsModelsModelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations.models)[':modelId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations.models)[':modelId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConversationsModelsModelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.conversations.models)[':modelId']['$put']> },
      ) => parseResponse(client.conversations.models[':modelId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteConversationsModelsModelIdKey() {
  return ['conversations', '/conversations/models/:modelId', 'DELETE'] as const
}

export function useDeleteConversationsModelsModelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations.models)[':modelId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations.models)[':modelId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConversationsModelsModelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.conversations.models)[':modelId']['$delete']> },
      ) => parseResponse(client.conversations.models[':modelId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKeysKey() {
  return ['keys', '/keys'] as const
}

export function useGetKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKeysKey() {
  return ['keys', '/keys', 'POST'] as const
}

export function usePostKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.keys.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.keys.$post> }) =>
        parseResponse(client.keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKeysKeyIdKey(args: InferRequestType<(typeof client.keys)[':keyId']['$get']>) {
  return ['keys', '/keys/:keyId', args] as const
}

export function useGetKeysKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.keys)[':keyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':keyId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKeysKeyIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':keyId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.keys[':keyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKeysKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.keys)[':keyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':keyId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKeysKeyIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':keyId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.keys[':keyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteKeysKeyIdKey() {
  return ['keys', '/keys/:keyId', 'DELETE'] as const
}

export function useDeleteKeysKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':keyId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.keys)[':keyId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKeysKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.keys)[':keyId']['$delete']> },
      ) => parseResponse(client.keys[':keyId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAliasesKey() {
  return ['aliases', '/aliases'] as const
}

export function useGetAliases<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAliasesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aliases.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAliases<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAliasesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aliases.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAliasesAliasNameKey(
  args: InferRequestType<(typeof client.aliases)[':aliasName']['$get']>,
) {
  return ['aliases', '/aliases/:aliasName', args] as const
}

export function useGetAliasesAliasName<TError = unknown>(
  args: InferRequestType<(typeof client.aliases)[':aliasName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.aliases)[':aliasName']['$get']>>>
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
        ? getGetAliasesAliasNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.aliases)[':aliasName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aliases[':aliasName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAliasesAliasName<TError = unknown>(
  args: InferRequestType<(typeof client.aliases)[':aliasName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.aliases)[':aliasName']['$get']>>>
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
        ? getGetAliasesAliasNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.aliases)[':aliasName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aliases[':aliasName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAliasesAliasNameKey() {
  return ['aliases', '/aliases/:aliasName', 'PUT'] as const
}

export function usePutAliasesAliasName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.aliases)[':aliasName']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.aliases)[':aliasName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAliasesAliasNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.aliases)[':aliasName']['$put']> },
      ) => parseResponse(client.aliases[':aliasName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAliasesAliasNameKey() {
  return ['aliases', '/aliases/:aliasName', 'DELETE'] as const
}

export function useDeleteAliasesAliasName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.aliases)[':aliasName']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.aliases)[':aliasName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAliasesAliasNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.aliases)[':aliasName']['$delete']> },
      ) => parseResponse(client.aliases[':aliasName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDebugKey() {
  return ['debug', '/debug'] as const
}

export function useGetDebug<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetDebugKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.debug.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDebug<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetDebugKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.debug.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
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

export function getGetOperationsSchemaChangesKey() {
  return ['operations', '/operations/schema_changes'] as const
}

export function useGetOperationsSchemaChanges<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.operations.schema_changes.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOperationsSchemaChangesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.operations.schema_changes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.operations.schema_changes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOperationsSchemaChanges<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.operations.schema_changes.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOperationsSchemaChangesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.operations.schema_changes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.operations.schema_changes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOperationsSnapshotKey() {
  return ['operations', '/operations/snapshot', 'POST'] as const
}

export function usePostOperationsSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.operations.snapshot.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.operations.snapshot.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOperationsSnapshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.operations.snapshot.$post> }) =>
        parseResponse(client.operations.snapshot.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOperationsVoteKey() {
  return ['operations', '/operations/vote', 'POST'] as const
}

export function usePostOperationsVote<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.operations.vote.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOperationsVoteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.operations.vote.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOperationsCacheClearKey() {
  return ['operations', '/operations/cache/clear', 'POST'] as const
}

export function usePostOperationsCacheClear<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.operations.cache.clear.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOperationsCacheClearKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.operations.cache.clear.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOperationsDbCompactKey() {
  return ['operations', '/operations/db/compact', 'POST'] as const
}

export function usePostOperationsDbCompact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.operations.db.compact.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOperationsDbCompactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.operations.db.compact.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConfigKey() {
  return ['config', '/config', 'POST'] as const
}

export function usePostConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.config.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.config.$post> }) =>
        parseResponse(client.config.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMultiSearchKey() {
  return ['multi_search', '/multi_search', 'POST'] as const
}

export function usePostMultiSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.multi_search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.multi_search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMultiSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.multi_search.$post> }) =>
        parseResponse(client.multi_search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAnalyticsEventsKey(
  args: InferRequestType<typeof client.analytics.events.$get>,
) {
  return ['analytics', '/analytics/events', args] as const
}

export function useGetAnalyticsEvents<TError = unknown>(
  args: InferRequestType<typeof client.analytics.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.events.$get>>>>
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
        ? getGetAnalyticsEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyticsEvents<TError = unknown>(
  args: InferRequestType<typeof client.analytics.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.events.$get>>>>
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
        ? getGetAnalyticsEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAnalyticsEventsKey() {
  return ['analytics', '/analytics/events', 'POST'] as const
}

export function usePostAnalyticsEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.events.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.analytics.events.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnalyticsEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.analytics.events.$post> }) =>
        parseResponse(client.analytics.events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnalyticsFlushKey() {
  return ['analytics', '/analytics/flush', 'POST'] as const
}

export function usePostAnalyticsFlush<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.flush.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnalyticsFlushKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.analytics.flush.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAnalyticsStatusKey() {
  return ['analytics', '/analytics/status'] as const
}

export function useGetAnalyticsStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.status.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAnalyticsStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyticsStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.status.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAnalyticsStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnalyticsRulesKey(
  args: InferRequestType<typeof client.analytics.rules.$get>,
) {
  return ['analytics', '/analytics/rules', args] as const
}

export function useGetAnalyticsRules<TError = unknown>(
  args: InferRequestType<typeof client.analytics.rules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.rules.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAnalyticsRulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.rules.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyticsRules<TError = unknown>(
  args: InferRequestType<typeof client.analytics.rules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.rules.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAnalyticsRulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.rules.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAnalyticsRulesKey() {
  return ['analytics', '/analytics/rules', 'POST'] as const
}

export function usePostAnalyticsRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.rules.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.analytics.rules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnalyticsRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.analytics.rules.$post> }) =>
        parseResponse(client.analytics.rules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAnalyticsRulesRuleNameKey(
  args: InferRequestType<(typeof client.analytics.rules)[':ruleName']['$get']>,
) {
  return ['analytics', '/analytics/rules/:ruleName', args] as const
}

export function useGetAnalyticsRulesRuleName<TError = unknown>(
  args: InferRequestType<(typeof client.analytics.rules)[':ruleName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.rules)[':ruleName']['$get']>>
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
        ? getGetAnalyticsRulesRuleNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.rules)[':ruleName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.rules[':ruleName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyticsRulesRuleName<TError = unknown>(
  args: InferRequestType<(typeof client.analytics.rules)[':ruleName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.rules)[':ruleName']['$get']>>
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
        ? getGetAnalyticsRulesRuleNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.rules)[':ruleName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.rules[':ruleName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAnalyticsRulesRuleNameKey() {
  return ['analytics', '/analytics/rules/:ruleName', 'PUT'] as const
}

export function usePutAnalyticsRulesRuleName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.analytics.rules)[':ruleName']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.analytics.rules)[':ruleName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAnalyticsRulesRuleNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.analytics.rules)[':ruleName']['$put']> },
      ) => parseResponse(client.analytics.rules[':ruleName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAnalyticsRulesRuleNameKey() {
  return ['analytics', '/analytics/rules/:ruleName', 'DELETE'] as const
}

export function useDeleteAnalyticsRulesRuleName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.analytics.rules)[':ruleName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.analytics.rules)[':ruleName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAnalyticsRulesRuleNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.analytics.rules)[':ruleName']['$delete']> },
      ) => parseResponse(client.analytics.rules[':ruleName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMetricsJsonKey() {
  return ['metrics.json', '/metrics.json'] as const
}

export function useGetMetricsJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['metrics.json']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetricsJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['metrics.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['metrics.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['metrics.json']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetricsJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['metrics.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['metrics.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatsJsonKey() {
  return ['stats.json', '/stats.json'] as const
}

export function useGetStatsJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['stats.json']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatsJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['stats.json']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['stats.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['stats.json']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatsJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['stats.json']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['stats.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStopwordsKey() {
  return ['stopwords', '/stopwords'] as const
}

export function useGetStopwords<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stopwords.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStopwordsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stopwords.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stopwords.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStopwords<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stopwords.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStopwordsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stopwords.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stopwords.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStopwordsSetIdKey(
  args: InferRequestType<(typeof client.stopwords)[':setId']['$get']>,
) {
  return ['stopwords', '/stopwords/:setId', args] as const
}

export function useGetStopwordsSetId<TError = unknown>(
  args: InferRequestType<(typeof client.stopwords)[':setId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stopwords)[':setId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetStopwordsSetIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stopwords)[':setId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stopwords[':setId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStopwordsSetId<TError = unknown>(
  args: InferRequestType<(typeof client.stopwords)[':setId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stopwords)[':setId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetStopwordsSetIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stopwords)[':setId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stopwords[':setId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutStopwordsSetIdKey() {
  return ['stopwords', '/stopwords/:setId', 'PUT'] as const
}

export function usePutStopwordsSetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stopwords)[':setId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.stopwords)[':setId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutStopwordsSetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.stopwords)[':setId']['$put']> },
      ) => parseResponse(client.stopwords[':setId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteStopwordsSetIdKey() {
  return ['stopwords', '/stopwords/:setId', 'DELETE'] as const
}

export function useDeleteStopwordsSetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stopwords)[':setId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.stopwords)[':setId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteStopwordsSetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.stopwords)[':setId']['$delete']> },
      ) => parseResponse(client.stopwords[':setId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPresetsKey() {
  return ['presets', '/presets'] as const
}

export function useGetPresets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presets.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPresetsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presets.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.presets.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPresets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presets.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPresetsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presets.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.presets.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPresetsPresetIdKey(
  args: InferRequestType<(typeof client.presets)[':presetId']['$get']>,
) {
  return ['presets', '/presets/:presetId', args] as const
}

export function useGetPresetsPresetId<TError = unknown>(
  args: InferRequestType<(typeof client.presets)[':presetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.presets)[':presetId']['$get']>>>
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
        ? getGetPresetsPresetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.presets)[':presetId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.presets[':presetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPresetsPresetId<TError = unknown>(
  args: InferRequestType<(typeof client.presets)[':presetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.presets)[':presetId']['$get']>>>
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
        ? getGetPresetsPresetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.presets)[':presetId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.presets[':presetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPresetsPresetIdKey() {
  return ['presets', '/presets/:presetId', 'PUT'] as const
}

export function usePutPresetsPresetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.presets)[':presetId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.presets)[':presetId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPresetsPresetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.presets)[':presetId']['$put']> },
      ) => parseResponse(client.presets[':presetId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePresetsPresetIdKey() {
  return ['presets', '/presets/:presetId', 'DELETE'] as const
}

export function useDeletePresetsPresetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.presets)[':presetId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.presets)[':presetId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePresetsPresetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.presets)[':presetId']['$delete']> },
      ) => parseResponse(client.presets[':presetId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStemmingDictionariesKey() {
  return ['stemming', '/stemming/dictionaries'] as const
}

export function useGetStemmingDictionaries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.stemming.dictionaries.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStemmingDictionariesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stemming.dictionaries.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stemming.dictionaries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStemmingDictionaries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.stemming.dictionaries.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStemmingDictionariesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stemming.dictionaries.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stemming.dictionaries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStemmingDictionariesDictionaryIdKey(
  args: InferRequestType<(typeof client.stemming.dictionaries)[':dictionaryId']['$get']>,
) {
  return ['stemming', '/stemming/dictionaries/:dictionaryId', args] as const
}

export function useGetStemmingDictionariesDictionaryId<TError = unknown>(
  args: InferRequestType<(typeof client.stemming.dictionaries)[':dictionaryId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stemming.dictionaries)[':dictionaryId']['$get']>>
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
        ? getGetStemmingDictionariesDictionaryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stemming.dictionaries)[':dictionaryId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.stemming.dictionaries[':dictionaryId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStemmingDictionariesDictionaryId<TError = unknown>(
  args: InferRequestType<(typeof client.stemming.dictionaries)[':dictionaryId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stemming.dictionaries)[':dictionaryId']['$get']>>
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
        ? getGetStemmingDictionariesDictionaryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stemming.dictionaries)[':dictionaryId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.stemming.dictionaries[':dictionaryId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStemmingDictionariesImportKey() {
  return ['stemming', '/stemming/dictionaries/import', 'POST'] as const
}

export function usePostStemmingDictionariesImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.stemming.dictionaries.import.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.stemming.dictionaries.import.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStemmingDictionariesImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.stemming.dictionaries.import.$post> },
      ) => parseResponse(client.stemming.dictionaries.import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNlSearchModelsKey() {
  return ['nl_search_models', '/nl_search_models'] as const
}

export function useGetNlSearchModels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nl_search_models.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNlSearchModelsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nl_search_models.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nl_search_models.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNlSearchModels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nl_search_models.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNlSearchModelsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nl_search_models.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nl_search_models.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNlSearchModelsKey() {
  return ['nl_search_models', '/nl_search_models', 'POST'] as const
}

export function usePostNlSearchModels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nl_search_models.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.nl_search_models.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNlSearchModelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.nl_search_models.$post> }) =>
        parseResponse(client.nl_search_models.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNlSearchModelsModelIdKey(
  args: InferRequestType<(typeof client.nl_search_models)[':modelId']['$get']>,
) {
  return ['nl_search_models', '/nl_search_models/:modelId', args] as const
}

export function useGetNlSearchModelsModelId<TError = unknown>(
  args: InferRequestType<(typeof client.nl_search_models)[':modelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nl_search_models)[':modelId']['$get']>>
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
        ? getGetNlSearchModelsModelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nl_search_models)[':modelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nl_search_models[':modelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNlSearchModelsModelId<TError = unknown>(
  args: InferRequestType<(typeof client.nl_search_models)[':modelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nl_search_models)[':modelId']['$get']>>
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
        ? getGetNlSearchModelsModelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nl_search_models)[':modelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nl_search_models[':modelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNlSearchModelsModelIdKey() {
  return ['nl_search_models', '/nl_search_models/:modelId', 'PUT'] as const
}

export function usePutNlSearchModelsModelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nl_search_models)[':modelId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.nl_search_models)[':modelId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNlSearchModelsModelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.nl_search_models)[':modelId']['$put']> },
      ) => parseResponse(client.nl_search_models[':modelId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteNlSearchModelsModelIdKey() {
  return ['nl_search_models', '/nl_search_models/:modelId', 'DELETE'] as const
}

export function useDeleteNlSearchModelsModelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nl_search_models)[':modelId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.nl_search_models)[':modelId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNlSearchModelsModelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.nl_search_models)[':modelId']['$delete']> },
      ) => parseResponse(client.nl_search_models[':modelId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
