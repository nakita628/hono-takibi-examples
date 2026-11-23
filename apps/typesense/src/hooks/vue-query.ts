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

export function getCollectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.collections.$get>>,
) {
  return ['collections', '/collections', toValue(args)] as const
}

export function getCollectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.collections.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.collections.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
          >,
          ReturnType<typeof getCollectionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCollectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.collections.$post>,
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

export function getCollectionsCollectionNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.collections)[':collectionName']['$get']>>,
) {
  return ['collections', '/collections/:collectionName', toValue(args)] as const
}

export function getCollectionsCollectionNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.collections)[':collectionName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionsCollectionNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections[':collectionName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCollectionsCollectionName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collectionName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.collections)[':collectionName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.collections)[':collectionName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.collections)[':collectionName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCollectionsCollectionNameQueryKey>
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
          Awaited<ReturnType<(typeof client.collections)[':collectionName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionsCollectionNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collections[':collectionName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCollectionsCollectionNameMutationKey() {
  return ['collections', '/collections/:collectionName', 'DELETE'] as const
}

export function getDeleteCollectionsCollectionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collectionName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections)[':collectionName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCollectionsCollectionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.collections)[':collectionName']['$delete']>,
    ) {
      return parseResponse(client.collections[':collectionName'].$delete(args, options))
    },
  })
}

export function useDeleteCollectionsCollectionName<
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
                Awaited<ReturnType<(typeof client.collections)[':collectionName']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.collections)[':collectionName']['$delete']>,
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

export function getPatchCollectionsCollectionNameMutationKey() {
  return ['collections', '/collections/:collectionName', 'PATCH'] as const
}

export function getPatchCollectionsCollectionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collectionName']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections)[':collectionName']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCollectionsCollectionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.collections)[':collectionName']['$patch']>,
    ) {
      return parseResponse(client.collections[':collectionName'].$patch(args, options))
    },
  })
}

export function usePatchCollectionsCollectionName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.collections)[':collectionName']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.collections)[':collectionName']['$patch']>,
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
  const mutationDefaults = getPatchCollectionsCollectionNameMutationOptions<
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

export function getPostCollectionsCollectionNameDocumentsMutationKey() {
  return ['collections', '/collections/:collectionName/documents', 'POST'] as const
}

export function getPostCollectionsCollectionNameDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collectionName']['documents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections)[':collectionName']['documents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsCollectionNameDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.collections)[':collectionName']['documents']['$post']>,
    ) {
      return parseResponse(client.collections[':collectionName'].documents.$post(args, options))
    },
  })
}

export function usePostCollectionsCollectionNameDocuments<
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
                  ReturnType<(typeof client.collections)[':collectionName']['documents']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.collections)[':collectionName']['documents']['$post']>,
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
  const mutationDefaults = getPostCollectionsCollectionNameDocumentsMutationOptions<
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

export function getDeleteCollectionsCollectionNameDocumentsMutationKey() {
  return ['collections', '/collections/:collectionName/documents', 'DELETE'] as const
}

export function getDeleteCollectionsCollectionNameDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.collections)[':collectionName']['documents']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCollectionsCollectionNameDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collectionName']['documents']['$delete']
      >,
    ) {
      return parseResponse(client.collections[':collectionName'].documents.$delete(args, options))
    },
  })
}

export function useDeleteCollectionsCollectionNameDocuments<
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
                  ReturnType<(typeof client.collections)[':collectionName']['documents']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.collections)[':collectionName']['documents']['$delete']>,
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
  const mutationDefaults = getDeleteCollectionsCollectionNameDocumentsMutationOptions<
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

export function getPatchCollectionsCollectionNameDocumentsMutationKey() {
  return ['collections', '/collections/:collectionName/documents', 'PATCH'] as const
}

export function getPatchCollectionsCollectionNameDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collectionName']['documents']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections)[':collectionName']['documents']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCollectionsCollectionNameDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.collections)[':collectionName']['documents']['$patch']>,
    ) {
      return parseResponse(client.collections[':collectionName'].documents.$patch(args, options))
    },
  })
}

export function usePatchCollectionsCollectionNameDocuments<
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
                  ReturnType<(typeof client.collections)[':collectionName']['documents']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.collections)[':collectionName']['documents']['$patch']>,
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
  const mutationDefaults = getPatchCollectionsCollectionNameDocumentsMutationOptions<
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

export function getCollectionsCollectionNameDocumentsSearchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collectionName']['documents']['search']['$get']>
  >,
) {
  return ['collections', '/collections/:collectionName/documents/search', toValue(args)] as const
}

export function getCollectionsCollectionNameDocumentsSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collectionName']['documents']['search']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionsCollectionNameDocumentsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections[':collectionName'].documents.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCollectionsCollectionNameDocumentsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.collections)[':collectionName']['documents']['search']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collectionName']['documents']['search']['$get']>
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
                    (typeof client.collections)[':collectionName']['documents']['search']['$get']
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
                    (typeof client.collections)[':collectionName']['documents']['search']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCollectionsCollectionNameDocumentsSearchQueryKey>
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
              (typeof client.collections)[':collectionName']['documents']['search']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionNameDocumentsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionsCollectionNameDocumentsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collections[':collectionName'].documents.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSynonymSetsQueryKey() {
  return ['synonym_sets', '/synonym_sets'] as const
}

export function getSynonymSetsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSynonymSetsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.synonym_sets.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSynonymSets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.synonym_sets.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.synonym_sets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.synonym_sets.$get>>>>
          >,
          ReturnType<typeof getSynonymSetsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.synonym_sets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSynonymSetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSynonymSetsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.synonym_sets.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSynonymSetsSynonymSetNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.synonym_sets)[':synonymSetName']['$get']>>,
) {
  return ['synonym_sets', '/synonym_sets/:synonymSetName', toValue(args)] as const
}

export function getSynonymSetsSynonymSetNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.synonym_sets)[':synonymSetName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSynonymSetsSynonymSetNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.synonym_sets[':synonymSetName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSynonymSetsSynonymSetName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.synonym_sets)[':synonymSetName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.synonym_sets)[':synonymSetName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.synonym_sets)[':synonymSetName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.synonym_sets)[':synonymSetName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSynonymSetsSynonymSetNameQueryKey>
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
          Awaited<ReturnType<(typeof client.synonym_sets)[':synonymSetName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSynonymSetsSynonymSetNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSynonymSetsSynonymSetNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.synonym_sets[':synonymSetName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSynonymSetsSynonymSetNameMutationKey() {
  return ['synonym_sets', '/synonym_sets/:synonymSetName', 'PUT'] as const
}

export function getPutSynonymSetsSynonymSetNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.synonym_sets)[':synonymSetName']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.synonym_sets)[':synonymSetName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSynonymSetsSynonymSetNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.synonym_sets)[':synonymSetName']['$put']>,
    ) {
      return parseResponse(client.synonym_sets[':synonymSetName'].$put(args, options))
    },
  })
}

export function usePutSynonymSetsSynonymSetName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.synonym_sets)[':synonymSetName']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.synonym_sets)[':synonymSetName']['$put']>,
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
  const mutationDefaults = getPutSynonymSetsSynonymSetNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSynonymSetsSynonymSetNameMutationKey() {
  return ['synonym_sets', '/synonym_sets/:synonymSetName', 'DELETE'] as const
}

export function getDeleteSynonymSetsSynonymSetNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.synonym_sets)[':synonymSetName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.synonym_sets)[':synonymSetName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSynonymSetsSynonymSetNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.synonym_sets)[':synonymSetName']['$delete']>,
    ) {
      return parseResponse(client.synonym_sets[':synonymSetName'].$delete(args, options))
    },
  })
}

export function useDeleteSynonymSetsSynonymSetName<
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
                Awaited<ReturnType<(typeof client.synonym_sets)[':synonymSetName']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.synonym_sets)[':synonymSetName']['$delete']>,
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
  const mutationDefaults = getDeleteSynonymSetsSynonymSetNameMutationOptions<
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

export function getSynonymSetsSynonymSetNameItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.synonym_sets)[':synonymSetName']['items']['$get']>
  >,
) {
  return ['synonym_sets', '/synonym_sets/:synonymSetName/items', toValue(args)] as const
}

export function getSynonymSetsSynonymSetNameItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.synonym_sets)[':synonymSetName']['items']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSynonymSetsSynonymSetNameItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.synonym_sets[':synonymSetName'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSynonymSetsSynonymSetNameItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.synonym_sets)[':synonymSetName']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.synonym_sets)[':synonymSetName']['items']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.synonym_sets)[':synonymSetName']['items']['$get']>
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
                  ReturnType<(typeof client.synonym_sets)[':synonymSetName']['items']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSynonymSetsSynonymSetNameItemsQueryKey>
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
          Awaited<ReturnType<(typeof client.synonym_sets)[':synonymSetName']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSynonymSetsSynonymSetNameItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSynonymSetsSynonymSetNameItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.synonym_sets[':synonymSetName'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSynonymSetsSynonymSetNameItemsItemIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.synonym_sets)[':synonymSetName']['items'][':itemId']['$get']>
  >,
) {
  return ['synonym_sets', '/synonym_sets/:synonymSetName/items/:itemId', toValue(args)] as const
}

export function getSynonymSetsSynonymSetNameItemsItemIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.synonym_sets)[':synonymSetName']['items'][':itemId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSynonymSetsSynonymSetNameItemsItemIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.synonym_sets[':synonymSetName'].items[':itemId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSynonymSetsSynonymSetNameItemsItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.synonym_sets)[':synonymSetName']['items'][':itemId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.synonym_sets)[':synonymSetName']['items'][':itemId']['$get']>
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
                    (typeof client.synonym_sets)[':synonymSetName']['items'][':itemId']['$get']
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
                    (typeof client.synonym_sets)[':synonymSetName']['items'][':itemId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSynonymSetsSynonymSetNameItemsItemIdQueryKey>
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
            ReturnType<(typeof client.synonym_sets)[':synonymSetName']['items'][':itemId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSynonymSetsSynonymSetNameItemsItemIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSynonymSetsSynonymSetNameItemsItemIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.synonym_sets[':synonymSetName'].items[':itemId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSynonymSetsSynonymSetNameItemsItemIdMutationKey() {
  return ['synonym_sets', '/synonym_sets/:synonymSetName/items/:itemId', 'PUT'] as const
}

export function getPutSynonymSetsSynonymSetNameItemsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.synonym_sets)[':synonymSetName']['items'][':itemId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSynonymSetsSynonymSetNameItemsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.synonym_sets)[':synonymSetName']['items'][':itemId']['$put']
      >,
    ) {
      return parseResponse(
        client.synonym_sets[':synonymSetName'].items[':itemId'].$put(args, options),
      )
    },
  })
}

export function usePutSynonymSetsSynonymSetNameItemsItemId<
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
                    (typeof client.synonym_sets)[':synonymSetName']['items'][':itemId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.synonym_sets)[':synonymSetName']['items'][':itemId']['$put']
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
  const mutationDefaults = getPutSynonymSetsSynonymSetNameItemsItemIdMutationOptions<
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

export function getDeleteSynonymSetsSynonymSetNameItemsItemIdMutationKey() {
  return ['synonym_sets', '/synonym_sets/:synonymSetName/items/:itemId', 'DELETE'] as const
}

export function getDeleteSynonymSetsSynonymSetNameItemsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.synonym_sets)[':synonymSetName']['items'][':itemId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSynonymSetsSynonymSetNameItemsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.synonym_sets)[':synonymSetName']['items'][':itemId']['$delete']
      >,
    ) {
      return parseResponse(
        client.synonym_sets[':synonymSetName'].items[':itemId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSynonymSetsSynonymSetNameItemsItemId<
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
                    (typeof client.synonym_sets)[':synonymSetName']['items'][':itemId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.synonym_sets)[':synonymSetName']['items'][':itemId']['$delete']
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
  const mutationDefaults = getDeleteSynonymSetsSynonymSetNameItemsItemIdMutationOptions<
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

export function getCurationSetsQueryKey() {
  return ['curation_sets', '/curation_sets'] as const
}

export function getCurationSetsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCurationSetsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.curation_sets.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCurationSets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.curation_sets.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.curation_sets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.curation_sets.$get>>>>
          >,
          ReturnType<typeof getCurationSetsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.curation_sets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCurationSetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCurationSetsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.curation_sets.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCurationSetsCurationSetNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.curation_sets)[':curationSetName']['$get']>
  >,
) {
  return ['curation_sets', '/curation_sets/:curationSetName', toValue(args)] as const
}

export function getCurationSetsCurationSetNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.curation_sets)[':curationSetName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCurationSetsCurationSetNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.curation_sets[':curationSetName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCurationSetsCurationSetName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.curation_sets)[':curationSetName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.curation_sets)[':curationSetName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.curation_sets)[':curationSetName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.curation_sets)[':curationSetName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCurationSetsCurationSetNameQueryKey>
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
          Awaited<ReturnType<(typeof client.curation_sets)[':curationSetName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCurationSetsCurationSetNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCurationSetsCurationSetNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.curation_sets[':curationSetName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCurationSetsCurationSetNameMutationKey() {
  return ['curation_sets', '/curation_sets/:curationSetName', 'PUT'] as const
}

export function getPutCurationSetsCurationSetNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.curation_sets)[':curationSetName']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.curation_sets)[':curationSetName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCurationSetsCurationSetNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.curation_sets)[':curationSetName']['$put']>,
    ) {
      return parseResponse(client.curation_sets[':curationSetName'].$put(args, options))
    },
  })
}

export function usePutCurationSetsCurationSetName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.curation_sets)[':curationSetName']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.curation_sets)[':curationSetName']['$put']>,
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
  const mutationDefaults = getPutCurationSetsCurationSetNameMutationOptions<
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

export function getDeleteCurationSetsCurationSetNameMutationKey() {
  return ['curation_sets', '/curation_sets/:curationSetName', 'DELETE'] as const
}

export function getDeleteCurationSetsCurationSetNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.curation_sets)[':curationSetName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.curation_sets)[':curationSetName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCurationSetsCurationSetNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.curation_sets)[':curationSetName']['$delete']>,
    ) {
      return parseResponse(client.curation_sets[':curationSetName'].$delete(args, options))
    },
  })
}

export function useDeleteCurationSetsCurationSetName<
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
                Awaited<ReturnType<(typeof client.curation_sets)[':curationSetName']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.curation_sets)[':curationSetName']['$delete']>,
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
  const mutationDefaults = getDeleteCurationSetsCurationSetNameMutationOptions<
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

export function getCurationSetsCurationSetNameItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.curation_sets)[':curationSetName']['items']['$get']>
  >,
) {
  return ['curation_sets', '/curation_sets/:curationSetName/items', toValue(args)] as const
}

export function getCurationSetsCurationSetNameItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.curation_sets)[':curationSetName']['items']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCurationSetsCurationSetNameItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.curation_sets[':curationSetName'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCurationSetsCurationSetNameItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.curation_sets)[':curationSetName']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.curation_sets)[':curationSetName']['items']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.curation_sets)[':curationSetName']['items']['$get']>
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
                  ReturnType<(typeof client.curation_sets)[':curationSetName']['items']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCurationSetsCurationSetNameItemsQueryKey>
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
          Awaited<ReturnType<(typeof client.curation_sets)[':curationSetName']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCurationSetsCurationSetNameItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCurationSetsCurationSetNameItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.curation_sets[':curationSetName'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCurationSetsCurationSetNameItemsItemIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.curation_sets)[':curationSetName']['items'][':itemId']['$get']>
  >,
) {
  return ['curation_sets', '/curation_sets/:curationSetName/items/:itemId', toValue(args)] as const
}

export function getCurationSetsCurationSetNameItemsItemIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.curation_sets)[':curationSetName']['items'][':itemId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCurationSetsCurationSetNameItemsItemIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.curation_sets[':curationSetName'].items[':itemId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCurationSetsCurationSetNameItemsItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.curation_sets)[':curationSetName']['items'][':itemId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.curation_sets)[':curationSetName']['items'][':itemId']['$get']>
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
                    (typeof client.curation_sets)[':curationSetName']['items'][':itemId']['$get']
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
                    (typeof client.curation_sets)[':curationSetName']['items'][':itemId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCurationSetsCurationSetNameItemsItemIdQueryKey>
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
              (typeof client.curation_sets)[':curationSetName']['items'][':itemId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCurationSetsCurationSetNameItemsItemIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCurationSetsCurationSetNameItemsItemIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.curation_sets[':curationSetName'].items[':itemId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCurationSetsCurationSetNameItemsItemIdMutationKey() {
  return ['curation_sets', '/curation_sets/:curationSetName/items/:itemId', 'PUT'] as const
}

export function getPutCurationSetsCurationSetNameItemsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.curation_sets)[':curationSetName']['items'][':itemId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCurationSetsCurationSetNameItemsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.curation_sets)[':curationSetName']['items'][':itemId']['$put']
      >,
    ) {
      return parseResponse(
        client.curation_sets[':curationSetName'].items[':itemId'].$put(args, options),
      )
    },
  })
}

export function usePutCurationSetsCurationSetNameItemsItemId<
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
                    (typeof client.curation_sets)[':curationSetName']['items'][':itemId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.curation_sets)[':curationSetName']['items'][':itemId']['$put']
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
  const mutationDefaults = getPutCurationSetsCurationSetNameItemsItemIdMutationOptions<
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

export function getDeleteCurationSetsCurationSetNameItemsItemIdMutationKey() {
  return ['curation_sets', '/curation_sets/:curationSetName/items/:itemId', 'DELETE'] as const
}

export function getDeleteCurationSetsCurationSetNameItemsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.curation_sets)[':curationSetName']['items'][':itemId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCurationSetsCurationSetNameItemsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.curation_sets)[':curationSetName']['items'][':itemId']['$delete']
      >,
    ) {
      return parseResponse(
        client.curation_sets[':curationSetName'].items[':itemId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCurationSetsCurationSetNameItemsItemId<
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
                    (typeof client.curation_sets)[':curationSetName']['items'][':itemId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.curation_sets)[':curationSetName']['items'][':itemId']['$delete']
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
  const mutationDefaults = getDeleteCurationSetsCurationSetNameItemsItemIdMutationOptions<
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

export function getCollectionsCollectionNameDocumentsExportQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collectionName']['documents']['export']['$get']>
  >,
) {
  return ['collections', '/collections/:collectionName/documents/export', toValue(args)] as const
}

export function getCollectionsCollectionNameDocumentsExportQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collectionName']['documents']['export']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionsCollectionNameDocumentsExportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections[':collectionName'].documents.export.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCollectionsCollectionNameDocumentsExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.collections)[':collectionName']['documents']['export']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collectionName']['documents']['export']['$get']>
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
                    (typeof client.collections)[':collectionName']['documents']['export']['$get']
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
                    (typeof client.collections)[':collectionName']['documents']['export']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCollectionsCollectionNameDocumentsExportQueryKey>
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
              (typeof client.collections)[':collectionName']['documents']['export']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionNameDocumentsExportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionsCollectionNameDocumentsExportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collections[':collectionName'].documents.export.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCollectionsCollectionNameDocumentsImportMutationKey() {
  return ['collections', '/collections/:collectionName/documents/import', 'POST'] as const
}

export function getPostCollectionsCollectionNameDocumentsImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.collections)[':collectionName']['documents']['import']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsCollectionNameDocumentsImportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collectionName']['documents']['import']['$post']
      >,
    ) {
      return parseResponse(
        client.collections[':collectionName'].documents.import.$post(args, options),
      )
    },
  })
}

export function usePostCollectionsCollectionNameDocumentsImport<
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
                    (typeof client.collections)[':collectionName']['documents']['import']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.collections)[':collectionName']['documents']['import']['$post']
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
  const mutationDefaults = getPostCollectionsCollectionNameDocumentsImportMutationOptions<
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

export function getCollectionsCollectionNameDocumentsDocumentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collectionName']['documents'][':documentId']['$get']
    >
  >,
) {
  return [
    'collections',
    '/collections/:collectionName/documents/:documentId',
    toValue(args),
  ] as const
}

export function getCollectionsCollectionNameDocumentsDocumentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collectionName']['documents'][':documentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionsCollectionNameDocumentsDocumentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections[':collectionName'].documents[':documentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCollectionsCollectionNameDocumentsDocumentId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collectionName']['documents'][':documentId']['$get']
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
                    (typeof client.collections)[':collectionName']['documents'][':documentId']['$get']
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
                    (typeof client.collections)[':collectionName']['documents'][':documentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCollectionsCollectionNameDocumentsDocumentIdQueryKey>
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
              (typeof client.collections)[':collectionName']['documents'][':documentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionNameDocumentsDocumentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionsCollectionNameDocumentsDocumentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collections[':collectionName'].documents[':documentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCollectionsCollectionNameDocumentsDocumentIdMutationKey() {
  return ['collections', '/collections/:collectionName/documents/:documentId', 'DELETE'] as const
}

export function getDeleteCollectionsCollectionNameDocumentsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.collections)[':collectionName']['documents'][':documentId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCollectionsCollectionNameDocumentsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collectionName']['documents'][':documentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.collections[':collectionName'].documents[':documentId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCollectionsCollectionNameDocumentsDocumentId<
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
                    (typeof client.collections)[':collectionName']['documents'][':documentId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.collections)[':collectionName']['documents'][':documentId']['$delete']
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
  const mutationDefaults = getDeleteCollectionsCollectionNameDocumentsDocumentIdMutationOptions<
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

export function getPatchCollectionsCollectionNameDocumentsDocumentIdMutationKey() {
  return ['collections', '/collections/:collectionName/documents/:documentId', 'PATCH'] as const
}

export function getPatchCollectionsCollectionNameDocumentsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.collections)[':collectionName']['documents'][':documentId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchCollectionsCollectionNameDocumentsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collectionName']['documents'][':documentId']['$patch']
      >,
    ) {
      return parseResponse(
        client.collections[':collectionName'].documents[':documentId'].$patch(args, options),
      )
    },
  })
}

export function usePatchCollectionsCollectionNameDocumentsDocumentId<
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
                    (typeof client.collections)[':collectionName']['documents'][':documentId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.collections)[':collectionName']['documents'][':documentId']['$patch']
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
  const mutationDefaults = getPatchCollectionsCollectionNameDocumentsDocumentIdMutationOptions<
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

export function getConversationsModelsQueryKey() {
  return ['conversations', '/conversations/models'] as const
}

export function getConversationsModelsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getConversationsModelsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations.models.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsModels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.models.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conversations.models.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conversations.models.$get>>>
            >
          >,
          ReturnType<typeof getConversationsModelsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.models.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getConversationsModelsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations.models.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConversationsModelsMutationKey() {
  return ['conversations', '/conversations/models', 'POST'] as const
}

export function getPostConversationsModelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.models.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.conversations.models.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsModelsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.conversations.models.$post>) {
      return parseResponse(client.conversations.models.$post(args, options))
    },
  })
}

export function usePostConversationsModels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conversations.models.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.conversations.models.$post>,
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
  const mutationDefaults = getPostConversationsModelsMutationOptions<TError, TOnMutateResult>(
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

export function getConversationsModelsModelIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations.models)[':modelId']['$get']>
  >,
) {
  return ['conversations', '/conversations/models/:modelId', toValue(args)] as const
}

export function getConversationsModelsModelIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations.models)[':modelId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsModelsModelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations.models[':modelId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsModelsModelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations.models)[':modelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations.models)[':modelId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations.models)[':modelId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations.models)[':modelId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConversationsModelsModelIdQueryKey>
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
          Awaited<ReturnType<(typeof client.conversations.models)[':modelId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsModelsModelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsModelsModelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations.models[':modelId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutConversationsModelsModelIdMutationKey() {
  return ['conversations', '/conversations/models/:modelId', 'PUT'] as const
}

export function getPutConversationsModelsModelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations.models)[':modelId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations.models)[':modelId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConversationsModelsModelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations.models)[':modelId']['$put']>,
    ) {
      return parseResponse(client.conversations.models[':modelId'].$put(args, options))
    },
  })
}

export function usePutConversationsModelsModelId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations.models)[':modelId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations.models)[':modelId']['$put']>,
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
  const mutationDefaults = getPutConversationsModelsModelIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteConversationsModelsModelIdMutationKey() {
  return ['conversations', '/conversations/models/:modelId', 'DELETE'] as const
}

export function getDeleteConversationsModelsModelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations.models)[':modelId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations.models)[':modelId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConversationsModelsModelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations.models)[':modelId']['$delete']>,
    ) {
      return parseResponse(client.conversations.models[':modelId'].$delete(args, options))
    },
  })
}

export function useDeleteConversationsModelsModelId<
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
                Awaited<ReturnType<(typeof client.conversations.models)[':modelId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations.models)[':modelId']['$delete']>,
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
  const mutationDefaults = getDeleteConversationsModelsModelIdMutationOptions<
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

export function getKeysQueryKey() {
  return ['keys', '/keys'] as const
}

export function getKeysQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getKeysQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.keys.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useKeys<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
          ReturnType<typeof getKeysQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getKeysQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.keys.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$post>>>>>,
          TError,
          InferRequestType<typeof client.keys.$post>,
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

export function getKeysKeyIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.keys)[':keyId']['$get']>>,
) {
  return ['keys', '/keys/:keyId', toValue(args)] as const
}

export function getKeysKeyIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.keys)[':keyId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKeysKeyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.keys[':keyId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKeysKeyId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':keyId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.keys)[':keyId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':keyId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':keyId']['$get']>>>
            >
          >,
          ReturnType<typeof getKeysKeyIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':keyId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKeysKeyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKeysKeyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.keys[':keyId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteKeysKeyIdMutationKey() {
  return ['keys', '/keys/:keyId', 'DELETE'] as const
}

export function getDeleteKeysKeyIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':keyId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.keys)[':keyId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteKeysKeyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.keys)[':keyId']['$delete']>) {
      return parseResponse(client.keys[':keyId'].$delete(args, options))
    },
  })
}

export function useDeleteKeysKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':keyId']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.keys)[':keyId']['$delete']>,
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
  const mutationDefaults = getDeleteKeysKeyIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAliasesQueryKey() {
  return ['aliases', '/aliases'] as const
}

export function getAliasesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAliasesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aliases.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAliases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>
          >,
          ReturnType<typeof getAliasesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAliasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAliasesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.aliases.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAliasesAliasNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.aliases)[':aliasName']['$get']>>,
) {
  return ['aliases', '/aliases/:aliasName', toValue(args)] as const
}

export function getAliasesAliasNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.aliases)[':aliasName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAliasesAliasNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aliases[':aliasName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAliasesAliasName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.aliases)[':aliasName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.aliases)[':aliasName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.aliases)[':aliasName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.aliases)[':aliasName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAliasesAliasNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.aliases)[':aliasName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAliasesAliasNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAliasesAliasNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.aliases[':aliasName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAliasesAliasNameMutationKey() {
  return ['aliases', '/aliases/:aliasName', 'PUT'] as const
}

export function getPutAliasesAliasNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.aliases)[':aliasName']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.aliases)[':aliasName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAliasesAliasNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.aliases)[':aliasName']['$put']>) {
      return parseResponse(client.aliases[':aliasName'].$put(args, options))
    },
  })
}

export function usePutAliasesAliasName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.aliases)[':aliasName']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.aliases)[':aliasName']['$put']>,
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
  const mutationDefaults = getPutAliasesAliasNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAliasesAliasNameMutationKey() {
  return ['aliases', '/aliases/:aliasName', 'DELETE'] as const
}

export function getDeleteAliasesAliasNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.aliases)[':aliasName']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.aliases)[':aliasName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAliasesAliasNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.aliases)[':aliasName']['$delete']>) {
      return parseResponse(client.aliases[':aliasName'].$delete(args, options))
    },
  })
}

export function useDeleteAliasesAliasName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.aliases)[':aliasName']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.aliases)[':aliasName']['$delete']>,
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
  const mutationDefaults = getDeleteAliasesAliasNameMutationOptions<TError, TOnMutateResult>(
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

export function getDebugQueryKey() {
  return ['debug', '/debug'] as const
}

export function getDebugQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDebugQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.debug.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDebug<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.$get>>>>>,
          ReturnType<typeof getDebugQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDebugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDebugQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.debug.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function getOperationsSchemaChangesQueryKey() {
  return ['operations', '/operations/schema_changes'] as const
}

export function getOperationsSchemaChangesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOperationsSchemaChangesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.operations.schema_changes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOperationsSchemaChanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.operations.schema_changes.$get>>>
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
              typeof parseResponse<
                Awaited<ReturnType<typeof client.operations.schema_changes.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.operations.schema_changes.$get>>
              >
            >
          >,
          ReturnType<typeof getOperationsSchemaChangesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.operations.schema_changes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOperationsSchemaChangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOperationsSchemaChangesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.operations.schema_changes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOperationsSnapshotMutationKey() {
  return ['operations', '/operations/snapshot', 'POST'] as const
}

export function getPostOperationsSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.operations.snapshot.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.operations.snapshot.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOperationsSnapshotMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.operations.snapshot.$post>) {
      return parseResponse(client.operations.snapshot.$post(args, options))
    },
  })
}

export function usePostOperationsSnapshot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.operations.snapshot.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.operations.snapshot.$post>,
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
  const mutationDefaults = getPostOperationsSnapshotMutationOptions<TError, TOnMutateResult>(
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

export function getPostOperationsVoteMutationKey() {
  return ['operations', '/operations/vote', 'POST'] as const
}

export function getPostOperationsVoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.operations.vote.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostOperationsVoteMutationKey(),
    async mutationFn() {
      return parseResponse(client.operations.vote.$post(undefined, options))
    },
  })
}

export function usePostOperationsVote<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.operations.vote.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostOperationsVoteMutationOptions<TError, TOnMutateResult>(
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

export function getPostOperationsCacheClearMutationKey() {
  return ['operations', '/operations/cache/clear', 'POST'] as const
}

export function getPostOperationsCacheClearMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.operations.cache.clear.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostOperationsCacheClearMutationKey(),
    async mutationFn() {
      return parseResponse(client.operations.cache.clear.$post(undefined, options))
    },
  })
}

export function usePostOperationsCacheClear<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.operations.cache.clear.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostOperationsCacheClearMutationOptions<TError, TOnMutateResult>(
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

export function getPostOperationsDbCompactMutationKey() {
  return ['operations', '/operations/db/compact', 'POST'] as const
}

export function getPostOperationsDbCompactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.operations.db.compact.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostOperationsDbCompactMutationKey(),
    async mutationFn() {
      return parseResponse(client.operations.db.compact.$post(undefined, options))
    },
  })
}

export function usePostOperationsDbCompact<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.operations.db.compact.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostOperationsDbCompactMutationOptions<TError, TOnMutateResult>(
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

export function getPostConfigMutationKey() {
  return ['config', '/config', 'POST'] as const
}

export function getPostConfigMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$post>>>>>,
    TError,
    InferRequestType<typeof client.config.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.config.$post>) {
      return parseResponse(client.config.$post(args, options))
    },
  })
}

export function usePostConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.config.$post>,
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
  const mutationDefaults = getPostConfigMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMultiSearchMutationKey() {
  return ['multi_search', '/multi_search', 'POST'] as const
}

export function getPostMultiSearchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.multi_search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.multi_search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMultiSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.multi_search.$post>) {
      return parseResponse(client.multi_search.$post(args, options))
    },
  })
}

export function usePostMultiSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.multi_search.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.multi_search.$post>,
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

export function getAnalyticsEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.events.$get>>,
) {
  return ['analytics', '/analytics/events', toValue(args)] as const
}

export function getAnalyticsEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalyticsEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analytics.events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalyticsEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.events.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.events.$get>>>
            >
          >,
          ReturnType<typeof getAnalyticsEventsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalyticsEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analytics.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAnalyticsEventsMutationKey() {
  return ['analytics', '/analytics/events', 'POST'] as const
}

export function getPostAnalyticsEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.events.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.analytics.events.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnalyticsEventsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.analytics.events.$post>) {
      return parseResponse(client.analytics.events.$post(args, options))
    },
  })
}

export function usePostAnalyticsEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.events.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.analytics.events.$post>,
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
  const mutationDefaults = getPostAnalyticsEventsMutationOptions<TError, TOnMutateResult>(
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

export function getPostAnalyticsFlushMutationKey() {
  return ['analytics', '/analytics/flush', 'POST'] as const
}

export function getPostAnalyticsFlushMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.flush.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAnalyticsFlushMutationKey(),
    async mutationFn() {
      return parseResponse(client.analytics.flush.$post(undefined, options))
    },
  })
}

export function usePostAnalyticsFlush<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.flush.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostAnalyticsFlushMutationOptions<TError, TOnMutateResult>(
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

export function getAnalyticsStatusQueryKey() {
  return ['analytics', '/analytics/status'] as const
}

export function getAnalyticsStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAnalyticsStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analytics.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAnalyticsStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.status.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.status.$get>>>
            >
          >,
          ReturnType<typeof getAnalyticsStatusQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAnalyticsStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.analytics.status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalyticsRulesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.rules.$get>>,
) {
  return ['analytics', '/analytics/rules', toValue(args)] as const
}

export function getAnalyticsRulesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.rules.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalyticsRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analytics.rules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalyticsRules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.rules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.rules.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.rules.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.rules.$get>>>
            >
          >,
          ReturnType<typeof getAnalyticsRulesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.rules.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalyticsRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analytics.rules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAnalyticsRulesMutationKey() {
  return ['analytics', '/analytics/rules', 'POST'] as const
}

export function getPostAnalyticsRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.rules.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.analytics.rules.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnalyticsRulesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.analytics.rules.$post>) {
      return parseResponse(client.analytics.rules.$post(args, options))
    },
  })
}

export function usePostAnalyticsRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.rules.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.analytics.rules.$post>,
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
  const mutationDefaults = getPostAnalyticsRulesMutationOptions<TError, TOnMutateResult>(
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

export function getAnalyticsRulesRuleNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.analytics.rules)[':ruleName']['$get']>>,
) {
  return ['analytics', '/analytics/rules/:ruleName', toValue(args)] as const
}

export function getAnalyticsRulesRuleNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.analytics.rules)[':ruleName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalyticsRulesRuleNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analytics.rules[':ruleName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalyticsRulesRuleName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analytics.rules)[':ruleName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.analytics.rules)[':ruleName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.analytics.rules)[':ruleName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.analytics.rules)[':ruleName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnalyticsRulesRuleNameQueryKey>
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
          Awaited<ReturnType<(typeof client.analytics.rules)[':ruleName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsRulesRuleNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalyticsRulesRuleNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analytics.rules[':ruleName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAnalyticsRulesRuleNameMutationKey() {
  return ['analytics', '/analytics/rules/:ruleName', 'PUT'] as const
}

export function getPutAnalyticsRulesRuleNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.analytics.rules)[':ruleName']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.analytics.rules)[':ruleName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAnalyticsRulesRuleNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.analytics.rules)[':ruleName']['$put']>) {
      return parseResponse(client.analytics.rules[':ruleName'].$put(args, options))
    },
  })
}

export function usePutAnalyticsRulesRuleName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.analytics.rules)[':ruleName']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.analytics.rules)[':ruleName']['$put']>,
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
  const mutationDefaults = getPutAnalyticsRulesRuleNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAnalyticsRulesRuleNameMutationKey() {
  return ['analytics', '/analytics/rules/:ruleName', 'DELETE'] as const
}

export function getDeleteAnalyticsRulesRuleNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.analytics.rules)[':ruleName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.analytics.rules)[':ruleName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAnalyticsRulesRuleNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.analytics.rules)[':ruleName']['$delete']>,
    ) {
      return parseResponse(client.analytics.rules[':ruleName'].$delete(args, options))
    },
  })
}

export function useDeleteAnalyticsRulesRuleName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.analytics.rules)[':ruleName']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.analytics.rules)[':ruleName']['$delete']>,
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
  const mutationDefaults = getDeleteAnalyticsRulesRuleNameMutationOptions<TError, TOnMutateResult>(
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

export function getMetricsJsonQueryKey() {
  return ['metrics.json', '/metrics.json'] as const
}

export function getMetricsJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMetricsJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['metrics.json'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMetricsJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['metrics.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['metrics.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['metrics.json']['$get']>>>
            >
          >,
          ReturnType<typeof getMetricsJsonQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['metrics.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMetricsJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['metrics.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsJsonQueryKey() {
  return ['stats.json', '/stats.json'] as const
}

export function getStatsJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatsJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['stats.json'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatsJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['stats.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['stats.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['stats.json']['$get']>>>
            >
          >,
          ReturnType<typeof getStatsJsonQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['stats.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatsJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['stats.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStopwordsQueryKey() {
  return ['stopwords', '/stopwords'] as const
}

export function getStopwordsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStopwordsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stopwords.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStopwords<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stopwords.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stopwords.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stopwords.$get>>>>
          >,
          ReturnType<typeof getStopwordsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stopwords.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStopwordsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStopwordsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.stopwords.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStopwordsSetIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stopwords)[':setId']['$get']>>,
) {
  return ['stopwords', '/stopwords/:setId', toValue(args)] as const
}

export function getStopwordsSetIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stopwords)[':setId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStopwordsSetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stopwords[':setId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStopwordsSetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stopwords)[':setId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stopwords)[':setId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.stopwords)[':setId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.stopwords)[':setId']['$get']>>>
            >
          >,
          ReturnType<typeof getStopwordsSetIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.stopwords)[':setId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStopwordsSetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStopwordsSetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stopwords[':setId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutStopwordsSetIdMutationKey() {
  return ['stopwords', '/stopwords/:setId', 'PUT'] as const
}

export function getPutStopwordsSetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stopwords)[':setId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.stopwords)[':setId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutStopwordsSetIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.stopwords)[':setId']['$put']>) {
      return parseResponse(client.stopwords[':setId'].$put(args, options))
    },
  })
}

export function usePutStopwordsSetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.stopwords)[':setId']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.stopwords)[':setId']['$put']>,
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
  const mutationDefaults = getPutStopwordsSetIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteStopwordsSetIdMutationKey() {
  return ['stopwords', '/stopwords/:setId', 'DELETE'] as const
}

export function getDeleteStopwordsSetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stopwords)[':setId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.stopwords)[':setId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteStopwordsSetIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.stopwords)[':setId']['$delete']>) {
      return parseResponse(client.stopwords[':setId'].$delete(args, options))
    },
  })
}

export function useDeleteStopwordsSetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stopwords)[':setId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.stopwords)[':setId']['$delete']>,
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
  const mutationDefaults = getDeleteStopwordsSetIdMutationOptions<TError, TOnMutateResult>(
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

export function getPresetsQueryKey() {
  return ['presets', '/presets'] as const
}

export function getPresetsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPresetsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.presets.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePresets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presets.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presets.$get>>>>
          >,
          ReturnType<typeof getPresetsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPresetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPresetsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.presets.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPresetsPresetIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.presets)[':presetId']['$get']>>,
) {
  return ['presets', '/presets/:presetId', toValue(args)] as const
}

export function getPresetsPresetIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.presets)[':presetId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPresetsPresetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.presets[':presetId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePresetsPresetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.presets)[':presetId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.presets)[':presetId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.presets)[':presetId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.presets)[':presetId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPresetsPresetIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.presets)[':presetId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPresetsPresetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPresetsPresetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.presets[':presetId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPresetsPresetIdMutationKey() {
  return ['presets', '/presets/:presetId', 'PUT'] as const
}

export function getPutPresetsPresetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.presets)[':presetId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.presets)[':presetId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPresetsPresetIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.presets)[':presetId']['$put']>) {
      return parseResponse(client.presets[':presetId'].$put(args, options))
    },
  })
}

export function usePutPresetsPresetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.presets)[':presetId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.presets)[':presetId']['$put']>,
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
  const mutationDefaults = getPutPresetsPresetIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeletePresetsPresetIdMutationKey() {
  return ['presets', '/presets/:presetId', 'DELETE'] as const
}

export function getDeletePresetsPresetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.presets)[':presetId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.presets)[':presetId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePresetsPresetIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.presets)[':presetId']['$delete']>) {
      return parseResponse(client.presets[':presetId'].$delete(args, options))
    },
  })
}

export function useDeletePresetsPresetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.presets)[':presetId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.presets)[':presetId']['$delete']>,
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
  const mutationDefaults = getDeletePresetsPresetIdMutationOptions<TError, TOnMutateResult>(
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

export function getStemmingDictionariesQueryKey() {
  return ['stemming', '/stemming/dictionaries'] as const
}

export function getStemmingDictionariesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStemmingDictionariesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stemming.dictionaries.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStemmingDictionaries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stemming.dictionaries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stemming.dictionaries.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stemming.dictionaries.$get>>>
            >
          >,
          ReturnType<typeof getStemmingDictionariesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.stemming.dictionaries.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStemmingDictionariesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStemmingDictionariesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.stemming.dictionaries.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStemmingDictionariesDictionaryIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stemming.dictionaries)[':dictionaryId']['$get']>
  >,
) {
  return ['stemming', '/stemming/dictionaries/:dictionaryId', toValue(args)] as const
}

export function getStemmingDictionariesDictionaryIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stemming.dictionaries)[':dictionaryId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStemmingDictionariesDictionaryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stemming.dictionaries[':dictionaryId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStemmingDictionariesDictionaryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stemming.dictionaries)[':dictionaryId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stemming.dictionaries)[':dictionaryId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stemming.dictionaries)[':dictionaryId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stemming.dictionaries)[':dictionaryId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStemmingDictionariesDictionaryIdQueryKey>
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
          Awaited<ReturnType<(typeof client.stemming.dictionaries)[':dictionaryId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStemmingDictionariesDictionaryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStemmingDictionariesDictionaryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stemming.dictionaries[':dictionaryId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostStemmingDictionariesImportMutationKey() {
  return ['stemming', '/stemming/dictionaries/import', 'POST'] as const
}

export function getPostStemmingDictionariesImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.stemming.dictionaries.import.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.stemming.dictionaries.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStemmingDictionariesImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.stemming.dictionaries.import.$post>) {
      return parseResponse(client.stemming.dictionaries.import.$post(args, options))
    },
  })
}

export function usePostStemmingDictionariesImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.stemming.dictionaries.import.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.stemming.dictionaries.import.$post>,
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
  const mutationDefaults = getPostStemmingDictionariesImportMutationOptions<
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

export function getNlSearchModelsQueryKey() {
  return ['nl_search_models', '/nl_search_models'] as const
}

export function getNlSearchModelsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNlSearchModelsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nl_search_models.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNlSearchModels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nl_search_models.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.nl_search_models.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.nl_search_models.$get>>>
            >
          >,
          ReturnType<typeof getNlSearchModelsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nl_search_models.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNlSearchModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNlSearchModelsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.nl_search_models.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNlSearchModelsMutationKey() {
  return ['nl_search_models', '/nl_search_models', 'POST'] as const
}

export function getPostNlSearchModelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nl_search_models.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.nl_search_models.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNlSearchModelsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.nl_search_models.$post>) {
      return parseResponse(client.nl_search_models.$post(args, options))
    },
  })
}

export function usePostNlSearchModels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.nl_search_models.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.nl_search_models.$post>,
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
  const mutationDefaults = getPostNlSearchModelsMutationOptions<TError, TOnMutateResult>(
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

export function getNlSearchModelsModelIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nl_search_models)[':modelId']['$get']>>,
) {
  return ['nl_search_models', '/nl_search_models/:modelId', toValue(args)] as const
}

export function getNlSearchModelsModelIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nl_search_models)[':modelId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNlSearchModelsModelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nl_search_models[':modelId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNlSearchModelsModelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nl_search_models)[':modelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nl_search_models)[':modelId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nl_search_models)[':modelId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nl_search_models)[':modelId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNlSearchModelsModelIdQueryKey>
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
          Awaited<ReturnType<(typeof client.nl_search_models)[':modelId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNlSearchModelsModelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNlSearchModelsModelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nl_search_models[':modelId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNlSearchModelsModelIdMutationKey() {
  return ['nl_search_models', '/nl_search_models/:modelId', 'PUT'] as const
}

export function getPutNlSearchModelsModelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nl_search_models)[':modelId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.nl_search_models)[':modelId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNlSearchModelsModelIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.nl_search_models)[':modelId']['$put']>) {
      return parseResponse(client.nl_search_models[':modelId'].$put(args, options))
    },
  })
}

export function usePutNlSearchModelsModelId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nl_search_models)[':modelId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.nl_search_models)[':modelId']['$put']>,
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
  const mutationDefaults = getPutNlSearchModelsModelIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteNlSearchModelsModelIdMutationKey() {
  return ['nl_search_models', '/nl_search_models/:modelId', 'DELETE'] as const
}

export function getDeleteNlSearchModelsModelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nl_search_models)[':modelId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.nl_search_models)[':modelId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNlSearchModelsModelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.nl_search_models)[':modelId']['$delete']>,
    ) {
      return parseResponse(client.nl_search_models[':modelId'].$delete(args, options))
    },
  })
}

export function useDeleteNlSearchModelsModelId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nl_search_models)[':modelId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.nl_search_models)[':modelId']['$delete']>,
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
  const mutationDefaults = getDeleteNlSearchModelsModelIdMutationOptions<TError, TOnMutateResult>(
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
