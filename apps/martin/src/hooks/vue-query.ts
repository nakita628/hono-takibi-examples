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

export function getCacheKey() {
  return ['cache'] as const
}

export function getCatalogKey() {
  return ['catalog'] as const
}

export function getFontKey() {
  return ['font'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getOgcKey() {
  return ['ogc'] as const
}

export function getSdfSpriteKey() {
  return ['sdf_sprite'] as const
}

export function getSpriteKey() {
  return ['sprite'] as const
}

export function getStyleKey() {
  return ['style'] as const
}

export function getSourceIdsKey() {
  return ['{source_ids}'] as const
}

export function getSourceIdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':source_ids']['$get']>>,
) {
  return [':source_ids', '/:source_ids', toValue(args)] as const
}

export function getSourceIdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':source_ids']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSourceIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':source_ids'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSourceIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':source_ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':source_ids']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':source_ids']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':source_ids']['$get']>>>
            >
          >,
          ReturnType<typeof getSourceIdsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':source_ids']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSourceIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSourceIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':source_ids'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSourceIdsZXYQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':source_ids'][':z'][':x'][':y']['$get']>
  >,
) {
  return [':source_ids', '/:source_ids/:z/:x/:y', toValue(args)] as const
}

export function getSourceIdsZXYQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':source_ids'][':z'][':x'][':y']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSourceIdsZXYQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':source_ids'][':z'][':x'][':y'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSourceIdsZXY<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':source_ids'][':z'][':x'][':y']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':source_ids'][':z'][':x'][':y']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':source_ids'][':z'][':x'][':y']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':source_ids'][':z'][':x'][':y']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSourceIdsZXYQueryKey>
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
          Awaited<ReturnType<(typeof client)[':source_ids'][':z'][':x'][':y']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSourceIdsZXYQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSourceIdsZXYQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':source_ids'][':z'][':x'][':y'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCacheSourceIdMutationKey() {
  return ['cache', '/cache/:source_id', 'DELETE'] as const
}

export function getDeleteCacheSourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':source_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.cache)[':source_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCacheSourceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cache)[':source_id']['$delete']>) {
      return parseResponse(client.cache[':source_id'].$delete(args, options))
    },
  })
}

export function useDeleteCacheSourceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cache)[':source_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cache)[':source_id']['$delete']>,
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
  const mutationDefaults = getDeleteCacheSourceIdMutationOptions<TError, TOnMutateResult>(
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

export function getCatalogQueryKey() {
  return ['catalog', '/catalog'] as const
}

export function getCatalogQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCatalogQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.catalog.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCatalog<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalog.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalog.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalog.$get>>>>
          >,
          ReturnType<typeof getCatalogQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalog.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCatalogQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCatalogQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.catalog.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFontFontstackStartEndQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.font)[':fontstack'][':start-:end']['$get']>
  >,
) {
  return ['font', '/font/:fontstack/:start-:end', toValue(args)] as const
}

export function getFontFontstackStartEndQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.font)[':fontstack'][':start-:end']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFontFontstackStartEndQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.font[':fontstack'][':start-:end'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFontFontstackStartEnd<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.font)[':fontstack'][':start-:end']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.font)[':fontstack'][':start-:end']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.font)[':fontstack'][':start-:end']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.font)[':fontstack'][':start-:end']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFontFontstackStartEndQueryKey>
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
          Awaited<ReturnType<(typeof client.font)[':fontstack'][':start-:end']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFontFontstackStartEndQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFontFontstackStartEndQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.font[':fontstack'][':start-:end'].$get(toValue(args), {
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

export function getOgcQueryKey() {
  return ['ogc', '/ogc'] as const
}

export function getOgcQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOgcQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ogc.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOgc<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.$get>>>>>,
          ReturnType<typeof getOgcQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOgcQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOgcQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ogc.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOgcApiQueryKey() {
  return ['ogc', '/ogc/api'] as const
}

export function getOgcApiQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOgcApiQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ogc.api.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOgcApi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.api.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.api.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.api.$get>>>>
          >,
          ReturnType<typeof getOgcApiQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.api.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOgcApiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOgcApiQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ogc.api.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOgcCollectionsQueryKey() {
  return ['ogc', '/ogc/collections'] as const
}

export function getOgcCollectionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOgcCollectionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ogc.collections.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOgcCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ogc.collections.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ogc.collections.$get>>>
            >
          >,
          ReturnType<typeof getOgcCollectionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.collections.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOgcCollectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOgcCollectionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ogc.collections.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOgcCollectionsCollectionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ogc.collections)[':collection_id']['$get']>
  >,
) {
  return ['ogc', '/ogc/collections/:collection_id', toValue(args)] as const
}

export function getOgcCollectionsCollectionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ogc.collections)[':collection_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOgcCollectionsCollectionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ogc.collections[':collection_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOgcCollectionsCollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ogc.collections)[':collection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ogc.collections)[':collection_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ogc.collections)[':collection_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ogc.collections)[':collection_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOgcCollectionsCollectionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.ogc.collections)[':collection_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOgcCollectionsCollectionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOgcCollectionsCollectionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ogc.collections[':collection_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOgcCollectionsCollectionIdMapQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ogc.collections)[':collection_id']['map']['$get']>
  >,
) {
  return ['ogc', '/ogc/collections/:collection_id/map', toValue(args)] as const
}

export function getOgcCollectionsCollectionIdMapQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ogc.collections)[':collection_id']['map']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOgcCollectionsCollectionIdMapQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ogc.collections[':collection_id'].map.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOgcCollectionsCollectionIdMap<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ogc.collections)[':collection_id']['map']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ogc.collections)[':collection_id']['map']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ogc.collections)[':collection_id']['map']['$get']>
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
                  ReturnType<(typeof client.ogc.collections)[':collection_id']['map']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOgcCollectionsCollectionIdMapQueryKey>
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
          Awaited<ReturnType<(typeof client.ogc.collections)[':collection_id']['map']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOgcCollectionsCollectionIdMapQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOgcCollectionsCollectionIdMapQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ogc.collections[':collection_id'].map.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOgcCollectionsCollectionIdTilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ogc.collections)[':collection_id']['tiles']['$get']>
  >,
) {
  return ['ogc', '/ogc/collections/:collection_id/tiles', toValue(args)] as const
}

export function getOgcCollectionsCollectionIdTilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ogc.collections)[':collection_id']['tiles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOgcCollectionsCollectionIdTilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ogc.collections[':collection_id'].tiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOgcCollectionsCollectionIdTiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ogc.collections)[':collection_id']['tiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ogc.collections)[':collection_id']['tiles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ogc.collections)[':collection_id']['tiles']['$get']>
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
                  ReturnType<(typeof client.ogc.collections)[':collection_id']['tiles']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOgcCollectionsCollectionIdTilesQueryKey>
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
          Awaited<ReturnType<(typeof client.ogc.collections)[':collection_id']['tiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOgcCollectionsCollectionIdTilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOgcCollectionsCollectionIdTilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ogc.collections[':collection_id'].tiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOgcCollectionsCollectionIdTilesTileMatrixSetIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id']['$get']
    >
  >,
) {
  return [
    'ogc',
    '/ogc/collections/:collection_id/tiles/:tile_matrix_set_id',
    toValue(args),
  ] as const
}

export function getOgcCollectionsCollectionIdTilesTileMatrixSetIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOgcCollectionsCollectionIdTilesTileMatrixSetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ogc.collections[':collection_id'].tiles[':tile_matrix_set_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOgcCollectionsCollectionIdTilesTileMatrixSetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id']['$get']
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
                    (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id']['$get']
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
                    (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOgcCollectionsCollectionIdTilesTileMatrixSetIdQueryKey>
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
              (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOgcCollectionsCollectionIdTilesTileMatrixSetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOgcCollectionsCollectionIdTilesTileMatrixSetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ogc.collections[':collection_id'].tiles[':tile_matrix_set_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOgcCollectionsCollectionIdTilesTileMatrixSetIdTileMatrixTileRowTileColQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
    >
  >,
) {
  return [
    'ogc',
    '/ogc/collections/:collection_id/tiles/:tile_matrix_set_id/:tile_matrix/:tile_row/:tile_col',
    toValue(args),
  ] as const
}

export function getOgcCollectionsCollectionIdTilesTileMatrixSetIdTileMatrixTileRowTileColQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOgcCollectionsCollectionIdTilesTileMatrixSetIdTileMatrixTileRowTileColQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ogc.collections[':collection_id'].tiles[':tile_matrix_set_id'][':tile_matrix'][
          ':tile_row'
        ][':tile_col'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOgcCollectionsCollectionIdTilesTileMatrixSetIdTileMatrixTileRowTileCol<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
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
                    (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
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
                    (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOgcCollectionsCollectionIdTilesTileMatrixSetIdTileMatrixTileRowTileColQueryKey
          >
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
              (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getOgcCollectionsCollectionIdTilesTileMatrixSetIdTileMatrixTileRowTileColQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOgcCollectionsCollectionIdTilesTileMatrixSetIdTileMatrixTileRowTileColQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.ogc.collections[':collection_id'].tiles[':tile_matrix_set_id'][':tile_matrix'][
            ':tile_row'
          ][':tile_col'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOgcConformanceQueryKey() {
  return ['ogc', '/ogc/conformance'] as const
}

export function getOgcConformanceQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOgcConformanceQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ogc.conformance.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOgcConformance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.conformance.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ogc.conformance.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ogc.conformance.$get>>>
            >
          >,
          ReturnType<typeof getOgcConformanceQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.conformance.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOgcConformanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOgcConformanceQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ogc.conformance.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOgcMapQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ogc.map.$get>>,
) {
  return ['ogc', '/ogc/map', toValue(args)] as const
}

export function getOgcMapQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ogc.map.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOgcMapQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ogc.map.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOgcMap<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.map.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ogc.map.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.map.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.map.$get>>>>
          >,
          ReturnType<typeof getOgcMapQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.map.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOgcMapQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOgcMapQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ogc.map.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOgcMapTilesQueryKey() {
  return ['ogc', '/ogc/map/tiles'] as const
}

export function getOgcMapTilesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOgcMapTilesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ogc.map.tiles.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOgcMapTiles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.map.tiles.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.map.tiles.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.map.tiles.$get>>>>
          >,
          ReturnType<typeof getOgcMapTilesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.map.tiles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOgcMapTilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOgcMapTilesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ogc.map.tiles.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOgcMapTilesTileMatrixSetIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ogc.map.tiles)[':tile_matrix_set_id']['$get']>
  >,
) {
  return ['ogc', '/ogc/map/tiles/:tile_matrix_set_id', toValue(args)] as const
}

export function getOgcMapTilesTileMatrixSetIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ogc.map.tiles)[':tile_matrix_set_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOgcMapTilesTileMatrixSetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ogc.map.tiles[':tile_matrix_set_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOgcMapTilesTileMatrixSetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ogc.map.tiles)[':tile_matrix_set_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ogc.map.tiles)[':tile_matrix_set_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ogc.map.tiles)[':tile_matrix_set_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ogc.map.tiles)[':tile_matrix_set_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOgcMapTilesTileMatrixSetIdQueryKey>
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
          Awaited<ReturnType<(typeof client.ogc.map.tiles)[':tile_matrix_set_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOgcMapTilesTileMatrixSetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOgcMapTilesTileMatrixSetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ogc.map.tiles[':tile_matrix_set_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOgcMapTilesTileMatrixSetIdTileMatrixTileRowTileColQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ogc.map.tiles)[':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
    >
  >,
) {
  return [
    'ogc',
    '/ogc/map/tiles/:tile_matrix_set_id/:tile_matrix/:tile_row/:tile_col',
    toValue(args),
  ] as const
}

export function getOgcMapTilesTileMatrixSetIdTileMatrixTileRowTileColQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ogc.map.tiles)[':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOgcMapTilesTileMatrixSetIdTileMatrixTileRowTileColQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ogc.map.tiles[':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOgcMapTilesTileMatrixSetIdTileMatrixTileRowTileCol<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ogc.map.tiles)[':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ogc.map.tiles)[':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
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
                    (typeof client.ogc.map.tiles)[':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
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
                    (typeof client.ogc.map.tiles)[':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOgcMapTilesTileMatrixSetIdTileMatrixTileRowTileColQueryKey>
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
              (typeof client.ogc.map.tiles)[':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOgcMapTilesTileMatrixSetIdTileMatrixTileRowTileColQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOgcMapTilesTileMatrixSetIdTileMatrixTileRowTileColQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ogc.map.tiles[':tile_matrix_set_id'][':tile_matrix'][':tile_row'][
            ':tile_col'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getOgcStylesQueryKey() {
  return ['ogc', '/ogc/styles'] as const
}

export function getOgcStylesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOgcStylesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ogc.styles.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOgcStyles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.styles.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.styles.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.styles.$get>>>>
          >,
          ReturnType<typeof getOgcStylesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.styles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOgcStylesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOgcStylesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ogc.styles.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOgcStylesStyleIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ogc.styles)[':style_id']['$get']>>,
) {
  return ['ogc', '/ogc/styles/:style_id', toValue(args)] as const
}

export function getOgcStylesStyleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ogc.styles)[':style_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOgcStylesStyleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ogc.styles[':style_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOgcStylesStyleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ogc.styles)[':style_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ogc.styles)[':style_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ogc.styles)[':style_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ogc.styles)[':style_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOgcStylesStyleIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.ogc.styles)[':style_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOgcStylesStyleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOgcStylesStyleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ogc.styles[':style_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOgcStylesStyleIdMapQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ogc.styles)[':style_id']['map']['$get']>>,
) {
  return ['ogc', '/ogc/styles/:style_id/map', toValue(args)] as const
}

export function getOgcStylesStyleIdMapQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ogc.styles)[':style_id']['map']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOgcStylesStyleIdMapQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ogc.styles[':style_id'].map.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOgcStylesStyleIdMap<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ogc.styles)[':style_id']['map']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ogc.styles)[':style_id']['map']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ogc.styles)[':style_id']['map']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ogc.styles)[':style_id']['map']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOgcStylesStyleIdMapQueryKey>
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
          Awaited<ReturnType<(typeof client.ogc.styles)[':style_id']['map']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOgcStylesStyleIdMapQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOgcStylesStyleIdMapQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ogc.styles[':style_id'].map.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOgcStylesStyleIdMapTilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ogc.styles)[':style_id']['map']['tiles']['$get']>
  >,
) {
  return ['ogc', '/ogc/styles/:style_id/map/tiles', toValue(args)] as const
}

export function getOgcStylesStyleIdMapTilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ogc.styles)[':style_id']['map']['tiles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOgcStylesStyleIdMapTilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ogc.styles[':style_id'].map.tiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOgcStylesStyleIdMapTiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ogc.styles)[':style_id']['map']['tiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ogc.styles)[':style_id']['map']['tiles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ogc.styles)[':style_id']['map']['tiles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ogc.styles)[':style_id']['map']['tiles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOgcStylesStyleIdMapTilesQueryKey>
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
          Awaited<ReturnType<(typeof client.ogc.styles)[':style_id']['map']['tiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOgcStylesStyleIdMapTilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOgcStylesStyleIdMapTilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ogc.styles[':style_id'].map.tiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOgcStylesStyleIdMapTilesTileMatrixSetIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id']['$get']
    >
  >,
) {
  return ['ogc', '/ogc/styles/:style_id/map/tiles/:tile_matrix_set_id', toValue(args)] as const
}

export function getOgcStylesStyleIdMapTilesTileMatrixSetIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOgcStylesStyleIdMapTilesTileMatrixSetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ogc.styles[':style_id'].map.tiles[':tile_matrix_set_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOgcStylesStyleIdMapTilesTileMatrixSetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id']['$get']
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
                    (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id']['$get']
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
                    (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOgcStylesStyleIdMapTilesTileMatrixSetIdQueryKey>
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
              (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOgcStylesStyleIdMapTilesTileMatrixSetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOgcStylesStyleIdMapTilesTileMatrixSetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ogc.styles[':style_id'].map.tiles[':tile_matrix_set_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOgcStylesStyleIdMapTilesTileMatrixSetIdTileMatrixTileRowTileColQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
    >
  >,
) {
  return [
    'ogc',
    '/ogc/styles/:style_id/map/tiles/:tile_matrix_set_id/:tile_matrix/:tile_row/:tile_col',
    toValue(args),
  ] as const
}

export function getOgcStylesStyleIdMapTilesTileMatrixSetIdTileMatrixTileRowTileColQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOgcStylesStyleIdMapTilesTileMatrixSetIdTileMatrixTileRowTileColQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ogc.styles[':style_id'].map.tiles[':tile_matrix_set_id'][':tile_matrix'][
          ':tile_row'
        ][':tile_col'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOgcStylesStyleIdMapTilesTileMatrixSetIdTileMatrixTileRowTileCol<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
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
                    (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
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
                    (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOgcStylesStyleIdMapTilesTileMatrixSetIdTileMatrixTileRowTileColQueryKey
          >
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
              (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOgcStylesStyleIdMapTilesTileMatrixSetIdTileMatrixTileRowTileColQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOgcStylesStyleIdMapTilesTileMatrixSetIdTileMatrixTileRowTileColQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.ogc.styles[':style_id'].map.tiles[':tile_matrix_set_id'][':tile_matrix'][
            ':tile_row'
          ][':tile_col'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOgcTileMatrixSetsQueryKey() {
  return ['ogc', '/ogc/tileMatrixSets'] as const
}

export function getOgcTileMatrixSetsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOgcTileMatrixSetsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ogc.tileMatrixSets.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOgcTileMatrixSets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.tileMatrixSets.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ogc.tileMatrixSets.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ogc.tileMatrixSets.$get>>>
            >
          >,
          ReturnType<typeof getOgcTileMatrixSetsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.tileMatrixSets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOgcTileMatrixSetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOgcTileMatrixSetsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ogc.tileMatrixSets.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOgcTileMatrixSetsTileMatrixSetIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ogc.tileMatrixSets)[':tile_matrix_set_id']['$get']>
  >,
) {
  return ['ogc', '/ogc/tileMatrixSets/:tile_matrix_set_id', toValue(args)] as const
}

export function getOgcTileMatrixSetsTileMatrixSetIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ogc.tileMatrixSets)[':tile_matrix_set_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOgcTileMatrixSetsTileMatrixSetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ogc.tileMatrixSets[':tile_matrix_set_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOgcTileMatrixSetsTileMatrixSetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ogc.tileMatrixSets)[':tile_matrix_set_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ogc.tileMatrixSets)[':tile_matrix_set_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ogc.tileMatrixSets)[':tile_matrix_set_id']['$get']>
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
                  ReturnType<(typeof client.ogc.tileMatrixSets)[':tile_matrix_set_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOgcTileMatrixSetsTileMatrixSetIdQueryKey>
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
          Awaited<ReturnType<(typeof client.ogc.tileMatrixSets)[':tile_matrix_set_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOgcTileMatrixSetsTileMatrixSetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOgcTileMatrixSetsTileMatrixSetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ogc.tileMatrixSets[':tile_matrix_set_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSdfSpriteSourceIdsJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sdf_sprite)[':source_ids.json']['$get']>>,
) {
  return ['sdf_sprite', '/sdf_sprite/:source_ids.json', toValue(args)] as const
}

export function getSdfSpriteSourceIdsJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sdf_sprite)[':source_ids.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSdfSpriteSourceIdsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sdf_sprite[':source_ids.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSdfSpriteSourceIdsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sdf_sprite)[':source_ids.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sdf_sprite)[':source_ids.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sdf_sprite)[':source_ids.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sdf_sprite)[':source_ids.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSdfSpriteSourceIdsJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.sdf_sprite)[':source_ids.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSdfSpriteSourceIdsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSdfSpriteSourceIdsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sdf_sprite[':source_ids.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSdfSpriteSourceIdsPngQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sdf_sprite)[':source_ids.png']['$get']>>,
) {
  return ['sdf_sprite', '/sdf_sprite/:source_ids.png', toValue(args)] as const
}

export function getSdfSpriteSourceIdsPngQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sdf_sprite)[':source_ids.png']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSdfSpriteSourceIdsPngQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sdf_sprite[':source_ids.png'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSdfSpriteSourceIdsPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sdf_sprite)[':source_ids.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sdf_sprite)[':source_ids.png']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sdf_sprite)[':source_ids.png']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sdf_sprite)[':source_ids.png']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSdfSpriteSourceIdsPngQueryKey>
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
          Awaited<ReturnType<(typeof client.sdf_sprite)[':source_ids.png']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSdfSpriteSourceIdsPngQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSdfSpriteSourceIdsPngQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sdf_sprite[':source_ids.png'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpriteSourceIdsJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sprite)[':source_ids.json']['$get']>>,
) {
  return ['sprite', '/sprite/:source_ids.json', toValue(args)] as const
}

export function getSpriteSourceIdsJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sprite)[':source_ids.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpriteSourceIdsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sprite[':source_ids.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpriteSourceIdsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sprite)[':source_ids.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sprite)[':source_ids.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sprite)[':source_ids.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sprite)[':source_ids.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpriteSourceIdsJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.sprite)[':source_ids.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpriteSourceIdsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpriteSourceIdsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sprite[':source_ids.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpriteSourceIdsPngQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sprite)[':source_ids.png']['$get']>>,
) {
  return ['sprite', '/sprite/:source_ids.png', toValue(args)] as const
}

export function getSpriteSourceIdsPngQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sprite)[':source_ids.png']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpriteSourceIdsPngQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sprite[':source_ids.png'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpriteSourceIdsPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sprite)[':source_ids.png']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sprite)[':source_ids.png']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sprite)[':source_ids.png']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sprite)[':source_ids.png']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpriteSourceIdsPngQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.sprite)[':source_ids.png']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpriteSourceIdsPngQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpriteSourceIdsPngQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sprite[':source_ids.png'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStyleStyleIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.style)[':style_id']['$get']>>,
) {
  return ['style', '/style/:style_id', toValue(args)] as const
}

export function getStyleStyleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.style)[':style_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStyleStyleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.style[':style_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStyleStyleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.style)[':style_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.style)[':style_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.style)[':style_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.style)[':style_id']['$get']>>>
            >
          >,
          ReturnType<typeof getStyleStyleIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.style)[':style_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStyleStyleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStyleStyleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.style[':style_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStyleStyleIdZXYFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.style)[':style_id'][':z'][':x'][':y.:format']['$get']>
  >,
) {
  return ['style', '/style/:style_id/:z/:x/:y.:format', toValue(args)] as const
}

export function getStyleStyleIdZXYFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.style)[':style_id'][':z'][':x'][':y.:format']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStyleStyleIdZXYFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.style[':style_id'][':z'][':x'][':y.:format'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStyleStyleIdZXYFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.style)[':style_id'][':z'][':x'][':y.:format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.style)[':style_id'][':z'][':x'][':y.:format']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.style)[':style_id'][':z'][':x'][':y.:format']['$get']>
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
                  ReturnType<(typeof client.style)[':style_id'][':z'][':x'][':y.:format']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getStyleStyleIdZXYFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.style)[':style_id'][':z'][':x'][':y.:format']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStyleStyleIdZXYFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStyleStyleIdZXYFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.style[':style_id'][':z'][':x'][':y.:format'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStyleStyleIdStaticCameraSizeFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.style)[':style_id']['static'][':camera'][':size.:format']['$get']
    >
  >,
) {
  return ['style', '/style/:style_id/static/:camera/:size.:format', toValue(args)] as const
}

export function getStyleStyleIdStaticCameraSizeFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.style)[':style_id']['static'][':camera'][':size.:format']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStyleStyleIdStaticCameraSizeFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.style[':style_id'].static[':camera'][':size.:format'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStyleStyleIdStaticCameraSizeFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.style)[':style_id']['static'][':camera'][':size.:format']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.style)[':style_id']['static'][':camera'][':size.:format']['$get']
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
                    (typeof client.style)[':style_id']['static'][':camera'][':size.:format']['$get']
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
                    (typeof client.style)[':style_id']['static'][':camera'][':size.:format']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getStyleStyleIdStaticCameraSizeFormatQueryKey>
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
              (typeof client.style)[':style_id']['static'][':camera'][':size.:format']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStyleStyleIdStaticCameraSizeFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStyleStyleIdStaticCameraSizeFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.style[':style_id'].static[':camera'][':size.:format'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostStyleStyleIdStaticCameraSizeFormatMutationKey() {
  return ['style', '/style/:style_id/static/:camera/:size.:format', 'POST'] as const
}

export function getPostStyleStyleIdStaticCameraSizeFormatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.style)[':style_id']['static'][':camera'][':size.:format']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.style)[':style_id']['static'][':camera'][':size.:format']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostStyleStyleIdStaticCameraSizeFormatMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.style)[':style_id']['static'][':camera'][':size.:format']['$post']
      >,
    ) {
      return parseResponse(
        client.style[':style_id'].static[':camera'][':size.:format'].$post(args, options),
      )
    },
  })
}

export function usePostStyleStyleIdStaticCameraSizeFormat<
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
                    (typeof client.style)[':style_id']['static'][':camera'][':size.:format']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.style)[':style_id']['static'][':camera'][':size.:format']['$post']
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
  const mutationDefaults = getPostStyleStyleIdStaticCameraSizeFormatMutationOptions<
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
