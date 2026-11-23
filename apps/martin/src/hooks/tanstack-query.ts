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
  args: InferRequestType<(typeof client)[':source_ids']['$get']>,
) {
  return [':source_ids', '/:source_ids', args] as const
}

export function getSourceIdsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':source_ids']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)[':source_ids']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':source_ids']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSourceIdsQueryKey>
  >({
    queryKey: getSourceIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':source_ids'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSourceIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':source_ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':source_ids']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':source_ids']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSourceIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSourceIdsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSourceIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':source_ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':source_ids']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':source_ids']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSourceIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSourceIdsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSourceIdsZXYQueryKey(
  args: InferRequestType<(typeof client)[':source_ids'][':z'][':x'][':y']['$get']>,
) {
  return [':source_ids', '/:source_ids/:z/:x/:y', args] as const
}

export function getSourceIdsZXYQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':source_ids'][':z'][':x'][':y']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':source_ids'][':z'][':x'][':y']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSourceIdsZXYQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':source_ids'][':z'][':x'][':y'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)[':source_ids'][':z'][':x'][':y']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSourceIdsZXYQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSourceIdsZXYQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSourceIdsZXY<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':source_ids'][':z'][':x'][':y']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':source_ids'][':z'][':x'][':y']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSourceIdsZXYQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function getCatalogQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalog.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalog.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCatalogQueryKey>
  >({
    queryKey: getCatalogQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.catalog.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCatalog<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalog.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalog.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCatalogQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCatalogQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCatalog<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalog.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalog.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCatalogQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCatalogQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFontFontstackStartEndQueryKey(
  args: InferRequestType<(typeof client.font)[':fontstack'][':start-{end}']['$get']>,
) {
  return ['font', '/font/:fontstack/:start-{end}', args] as const
}

export function getFontFontstackStartEndQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.font)[':fontstack'][':start-{end}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.font)[':fontstack'][':start-{end}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.font)[':fontstack'][':start-{end}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFontFontstackStartEndQueryKey>
  >({
    queryKey: getFontFontstackStartEndQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.font[':fontstack'][':start-{end}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFontFontstackStartEnd<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.font)[':fontstack'][':start-{end}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.font)[':fontstack'][':start-{end}']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.font)[':fontstack'][':start-{end}']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFontFontstackStartEndQueryKey>
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
      ...getFontFontstackStartEndQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFontFontstackStartEnd<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.font)[':fontstack'][':start-{end}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.font)[':fontstack'][':start-{end}']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.font)[':fontstack'][':start-{end}']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFontFontstackStartEndQueryKey>
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
      ...getFontFontstackStartEndQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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

export function getOgcQueryKey() {
  return ['ogc', '/ogc'] as const
}

export function getOgcQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOgcQueryKey>
  >({
    queryKey: getOgcQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ogc.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOgc<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getOgcQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOgcQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOgc<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getOgcQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOgcQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOgcApiQueryKey() {
  return ['ogc', '/ogc/api'] as const
}

export function getOgcApiQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.api.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.api.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOgcApiQueryKey>
  >({
    queryKey: getOgcApiQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ogc.api.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOgcApi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.api.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.api.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getOgcApiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOgcApiQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOgcApi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.api.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.api.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getOgcApiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOgcApiQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOgcCollectionsQueryKey() {
  return ['ogc', '/ogc/collections'] as const
}

export function getOgcCollectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.collections.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.collections.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOgcCollectionsQueryKey>
  >({
    queryKey: getOgcCollectionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ogc.collections.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOgcCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.collections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOgcCollectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOgcCollectionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOgcCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.collections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOgcCollectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOgcCollectionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOgcCollectionsCollectionIdQueryKey(
  args: InferRequestType<(typeof client.ogc.collections)[':collection_id']['$get']>,
) {
  return ['ogc', '/ogc/collections/:collection_id', args] as const
}

export function getOgcCollectionsCollectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ogc.collections)[':collection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ogc.collections)[':collection_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOgcCollectionsCollectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ogc.collections[':collection_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.ogc.collections)[':collection_id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOgcCollectionsCollectionIdQueryKey>
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
      ...getOgcCollectionsCollectionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOgcCollectionsCollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ogc.collections)[':collection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ogc.collections)[':collection_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getOgcCollectionsCollectionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOgcCollectionsCollectionIdMapQueryKey(
  args: InferRequestType<(typeof client.ogc.collections)[':collection_id']['map']['$get']>,
) {
  return ['ogc', '/ogc/collections/:collection_id/map', args] as const
}

export function getOgcCollectionsCollectionIdMapQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ogc.collections)[':collection_id']['map']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ogc.collections)[':collection_id']['map']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOgcCollectionsCollectionIdMapQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ogc.collections[':collection_id'].map.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.ogc.collections)[':collection_id']['map']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getOgcCollectionsCollectionIdMapQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOgcCollectionsCollectionIdMap<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ogc.collections)[':collection_id']['map']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ogc.collections)[':collection_id']['map']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getOgcCollectionsCollectionIdMapQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOgcCollectionsCollectionIdTilesQueryKey(
  args: InferRequestType<(typeof client.ogc.collections)[':collection_id']['tiles']['$get']>,
) {
  return ['ogc', '/ogc/collections/:collection_id/tiles', args] as const
}

export function getOgcCollectionsCollectionIdTilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ogc.collections)[':collection_id']['tiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ogc.collections)[':collection_id']['tiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOgcCollectionsCollectionIdTilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ogc.collections[':collection_id'].tiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.ogc.collections)[':collection_id']['tiles']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOgcCollectionsCollectionIdTilesQueryKey>
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
      ...getOgcCollectionsCollectionIdTilesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOgcCollectionsCollectionIdTiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ogc.collections)[':collection_id']['tiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ogc.collections)[':collection_id']['tiles']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getOgcCollectionsCollectionIdTilesQueryKey>
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
      ...getOgcCollectionsCollectionIdTilesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOgcCollectionsCollectionIdTilesTileMatrixSetIdQueryKey(
  args: InferRequestType<
    (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id']['$get']
  >,
) {
  return ['ogc', '/ogc/collections/:collection_id/tiles/:tile_matrix_set_id', args] as const
}

export function getOgcCollectionsCollectionIdTilesTileMatrixSetIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOgcCollectionsCollectionIdTilesTileMatrixSetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ogc.collections[':collection_id'].tiles[':tile_matrix_set_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOgcCollectionsCollectionIdTilesTileMatrixSetIdQueryKey>
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
      ...getOgcCollectionsCollectionIdTilesTileMatrixSetIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOgcCollectionsCollectionIdTilesTileMatrixSetId<
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
  args: InferRequestType<
    (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getOgcCollectionsCollectionIdTilesTileMatrixSetIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOgcCollectionsCollectionIdTilesTileMatrixSetIdTileMatrixTileRowTileColQueryKey(
  args: InferRequestType<
    (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
  >,
) {
  return [
    'ogc',
    '/ogc/collections/:collection_id/tiles/:tile_matrix_set_id/:tile_matrix/:tile_row/:tile_col',
    args,
  ] as const
}

export function getOgcCollectionsCollectionIdTilesTileMatrixSetIdTileMatrixTileRowTileColQueryOptions<
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
  args: InferRequestType<
    (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getOgcCollectionsCollectionIdTilesTileMatrixSetIdTileMatrixTileRowTileColQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ogc.collections[':collection_id'].tiles[':tile_matrix_set_id'][':tile_matrix'][
          ':tile_row'
        ][':tile_col'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getOgcCollectionsCollectionIdTilesTileMatrixSetIdTileMatrixTileRowTileColQueryKey
        >
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
      ...getOgcCollectionsCollectionIdTilesTileMatrixSetIdTileMatrixTileRowTileColQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOgcCollectionsCollectionIdTilesTileMatrixSetIdTileMatrixTileRowTileCol<
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
  args: InferRequestType<
    (typeof client.ogc.collections)[':collection_id']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getOgcCollectionsCollectionIdTilesTileMatrixSetIdTileMatrixTileRowTileColQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOgcConformanceQueryKey() {
  return ['ogc', '/ogc/conformance'] as const
}

export function getOgcConformanceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.conformance.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.conformance.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOgcConformanceQueryKey>
  >({
    queryKey: getOgcConformanceQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ogc.conformance.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOgcConformance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.conformance.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.conformance.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOgcConformanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOgcConformanceQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOgcConformance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.conformance.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.conformance.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOgcConformanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOgcConformanceQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOgcMapQueryKey(args: InferRequestType<typeof client.ogc.map.$get>) {
  return ['ogc', '/ogc/map', args] as const
}

export function getOgcMapQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.map.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ogc.map.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.map.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOgcMapQueryKey>
  >({
    queryKey: getOgcMapQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ogc.map.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOgcMap<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.map.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ogc.map.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.map.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getOgcMapQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOgcMapQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOgcMap<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.map.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ogc.map.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.map.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getOgcMapQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOgcMapQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOgcMapTilesQueryKey() {
  return ['ogc', '/ogc/map/tiles'] as const
}

export function getOgcMapTilesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.map.tiles.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.map.tiles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOgcMapTilesQueryKey>
  >({
    queryKey: getOgcMapTilesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ogc.map.tiles.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOgcMapTiles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.map.tiles.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.map.tiles.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOgcMapTilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOgcMapTilesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOgcMapTiles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.map.tiles.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.map.tiles.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOgcMapTilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOgcMapTilesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOgcMapTilesTileMatrixSetIdQueryKey(
  args: InferRequestType<(typeof client.ogc.map.tiles)[':tile_matrix_set_id']['$get']>,
) {
  return ['ogc', '/ogc/map/tiles/:tile_matrix_set_id', args] as const
}

export function getOgcMapTilesTileMatrixSetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ogc.map.tiles)[':tile_matrix_set_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ogc.map.tiles)[':tile_matrix_set_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOgcMapTilesTileMatrixSetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ogc.map.tiles[':tile_matrix_set_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.ogc.map.tiles)[':tile_matrix_set_id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOgcMapTilesTileMatrixSetIdQueryKey>
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
      ...getOgcMapTilesTileMatrixSetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOgcMapTilesTileMatrixSetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ogc.map.tiles)[':tile_matrix_set_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ogc.map.tiles)[':tile_matrix_set_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getOgcMapTilesTileMatrixSetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOgcMapTilesTileMatrixSetIdTileMatrixTileRowTileColQueryKey(
  args: InferRequestType<
    (typeof client.ogc.map.tiles)[':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
  >,
) {
  return [
    'ogc',
    '/ogc/map/tiles/:tile_matrix_set_id/:tile_matrix/:tile_row/:tile_col',
    args,
  ] as const
}

export function getOgcMapTilesTileMatrixSetIdTileMatrixTileRowTileColQueryOptions<
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
  args: InferRequestType<
    (typeof client.ogc.map.tiles)[':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOgcMapTilesTileMatrixSetIdTileMatrixTileRowTileColQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ogc.map.tiles[':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.ogc.map.tiles)[':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOgcMapTilesTileMatrixSetIdTileMatrixTileRowTileColQueryKey>
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
      ...getOgcMapTilesTileMatrixSetIdTileMatrixTileRowTileColQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOgcMapTilesTileMatrixSetIdTileMatrixTileRowTileCol<
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
  args: InferRequestType<
    (typeof client.ogc.map.tiles)[':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getOgcMapTilesTileMatrixSetIdTileMatrixTileRowTileColQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOgcStylesQueryKey() {
  return ['ogc', '/ogc/styles'] as const
}

export function getOgcStylesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.styles.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.styles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOgcStylesQueryKey>
  >({
    queryKey: getOgcStylesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ogc.styles.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOgcStyles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.styles.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.styles.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOgcStylesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOgcStylesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOgcStyles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.styles.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.styles.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOgcStylesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOgcStylesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOgcStylesStyleIdQueryKey(
  args: InferRequestType<(typeof client.ogc.styles)[':style_id']['$get']>,
) {
  return ['ogc', '/ogc/styles/:style_id', args] as const
}

export function getOgcStylesStyleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ogc.styles)[':style_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ogc.styles)[':style_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ogc.styles)[':style_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOgcStylesStyleIdQueryKey>
  >({
    queryKey: getOgcStylesStyleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ogc.styles[':style_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOgcStylesStyleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ogc.styles)[':style_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ogc.styles)[':style_id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOgcStylesStyleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOgcStylesStyleIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOgcStylesStyleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ogc.styles)[':style_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ogc.styles)[':style_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ogc.styles)[':style_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOgcStylesStyleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOgcStylesStyleIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOgcStylesStyleIdMapQueryKey(
  args: InferRequestType<(typeof client.ogc.styles)[':style_id']['map']['$get']>,
) {
  return ['ogc', '/ogc/styles/:style_id/map', args] as const
}

export function getOgcStylesStyleIdMapQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ogc.styles)[':style_id']['map']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ogc.styles)[':style_id']['map']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOgcStylesStyleIdMapQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ogc.styles[':style_id'].map.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.ogc.styles)[':style_id']['map']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOgcStylesStyleIdMapQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOgcStylesStyleIdMapQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOgcStylesStyleIdMap<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ogc.styles)[':style_id']['map']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ogc.styles)[':style_id']['map']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOgcStylesStyleIdMapQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOgcStylesStyleIdMapTilesQueryKey(
  args: InferRequestType<(typeof client.ogc.styles)[':style_id']['map']['tiles']['$get']>,
) {
  return ['ogc', '/ogc/styles/:style_id/map/tiles', args] as const
}

export function getOgcStylesStyleIdMapTilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ogc.styles)[':style_id']['map']['tiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ogc.styles)[':style_id']['map']['tiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOgcStylesStyleIdMapTilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ogc.styles[':style_id'].map.tiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.ogc.styles)[':style_id']['map']['tiles']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOgcStylesStyleIdMapTilesQueryKey>
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
      ...getOgcStylesStyleIdMapTilesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOgcStylesStyleIdMapTiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ogc.styles)[':style_id']['map']['tiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ogc.styles)[':style_id']['map']['tiles']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getOgcStylesStyleIdMapTilesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOgcStylesStyleIdMapTilesTileMatrixSetIdQueryKey(
  args: InferRequestType<
    (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id']['$get']
  >,
) {
  return ['ogc', '/ogc/styles/:style_id/map/tiles/:tile_matrix_set_id', args] as const
}

export function getOgcStylesStyleIdMapTilesTileMatrixSetIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOgcStylesStyleIdMapTilesTileMatrixSetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ogc.styles[':style_id'].map.tiles[':tile_matrix_set_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOgcStylesStyleIdMapTilesTileMatrixSetIdQueryKey>
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
      ...getOgcStylesStyleIdMapTilesTileMatrixSetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOgcStylesStyleIdMapTilesTileMatrixSetId<
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
  args: InferRequestType<
    (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getOgcStylesStyleIdMapTilesTileMatrixSetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOgcStylesStyleIdMapTilesTileMatrixSetIdTileMatrixTileRowTileColQueryKey(
  args: InferRequestType<
    (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
  >,
) {
  return [
    'ogc',
    '/ogc/styles/:style_id/map/tiles/:tile_matrix_set_id/:tile_matrix/:tile_row/:tile_col',
    args,
  ] as const
}

export function getOgcStylesStyleIdMapTilesTileMatrixSetIdTileMatrixTileRowTileColQueryOptions<
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
  args: InferRequestType<
    (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOgcStylesStyleIdMapTilesTileMatrixSetIdTileMatrixTileRowTileColQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ogc.styles[':style_id'].map.tiles[':tile_matrix_set_id'][':tile_matrix'][
          ':tile_row'
        ][':tile_col'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getOgcStylesStyleIdMapTilesTileMatrixSetIdTileMatrixTileRowTileColQueryKey
        >
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
      ...getOgcStylesStyleIdMapTilesTileMatrixSetIdTileMatrixTileRowTileColQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOgcStylesStyleIdMapTilesTileMatrixSetIdTileMatrixTileRowTileCol<
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
  args: InferRequestType<
    (typeof client.ogc.styles)[':style_id']['map']['tiles'][':tile_matrix_set_id'][':tile_matrix'][':tile_row'][':tile_col']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<
          typeof getOgcStylesStyleIdMapTilesTileMatrixSetIdTileMatrixTileRowTileColQueryKey
        >
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
      ...getOgcStylesStyleIdMapTilesTileMatrixSetIdTileMatrixTileRowTileColQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOgcTileMatrixSetsQueryKey() {
  return ['ogc', '/ogc/tileMatrixSets'] as const
}

export function getOgcTileMatrixSetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.tileMatrixSets.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.tileMatrixSets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOgcTileMatrixSetsQueryKey>
  >({
    queryKey: getOgcTileMatrixSetsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ogc.tileMatrixSets.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOgcTileMatrixSets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.tileMatrixSets.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ogc.tileMatrixSets.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOgcTileMatrixSetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOgcTileMatrixSetsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOgcTileMatrixSets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ogc.tileMatrixSets.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ogc.tileMatrixSets.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOgcTileMatrixSetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOgcTileMatrixSetsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOgcTileMatrixSetsTileMatrixSetIdQueryKey(
  args: InferRequestType<(typeof client.ogc.tileMatrixSets)[':tile_matrix_set_id']['$get']>,
) {
  return ['ogc', '/ogc/tileMatrixSets/:tile_matrix_set_id', args] as const
}

export function getOgcTileMatrixSetsTileMatrixSetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ogc.tileMatrixSets)[':tile_matrix_set_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ogc.tileMatrixSets)[':tile_matrix_set_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOgcTileMatrixSetsTileMatrixSetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ogc.tileMatrixSets[':tile_matrix_set_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.ogc.tileMatrixSets)[':tile_matrix_set_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getOgcTileMatrixSetsTileMatrixSetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOgcTileMatrixSetsTileMatrixSetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ogc.tileMatrixSets)[':tile_matrix_set_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ogc.tileMatrixSets)[':tile_matrix_set_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getOgcTileMatrixSetsTileMatrixSetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSdfSpriteSourceIdsJsonQueryKey(
  args: InferRequestType<(typeof client.sdf_sprite)[':source_ids.json']['$get']>,
) {
  return ['sdf_sprite', '/sdf_sprite/:source_ids.json', args] as const
}

export function getSdfSpriteSourceIdsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sdf_sprite)[':source_ids.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sdf_sprite)[':source_ids.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSdfSpriteSourceIdsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sdf_sprite[':source_ids.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sdf_sprite)[':source_ids.json']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSdfSpriteSourceIdsJsonQueryKey>
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
      ...getSdfSpriteSourceIdsJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSdfSpriteSourceIdsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sdf_sprite)[':source_ids.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sdf_sprite)[':source_ids.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSdfSpriteSourceIdsJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSdfSpriteSourceIdsPngQueryKey(
  args: InferRequestType<(typeof client.sdf_sprite)[':source_ids.png']['$get']>,
) {
  return ['sdf_sprite', '/sdf_sprite/:source_ids.png', args] as const
}

export function getSdfSpriteSourceIdsPngQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sdf_sprite)[':source_ids.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sdf_sprite)[':source_ids.png']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSdfSpriteSourceIdsPngQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sdf_sprite[':source_ids.png'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sdf_sprite)[':source_ids.png']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSdfSpriteSourceIdsPngQueryKey>
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
      ...getSdfSpriteSourceIdsPngQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSdfSpriteSourceIdsPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sdf_sprite)[':source_ids.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sdf_sprite)[':source_ids.png']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSdfSpriteSourceIdsPngQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpriteSourceIdsJsonQueryKey(
  args: InferRequestType<(typeof client.sprite)[':source_ids.json']['$get']>,
) {
  return ['sprite', '/sprite/:source_ids.json', args] as const
}

export function getSpriteSourceIdsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sprite)[':source_ids.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sprite)[':source_ids.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSpriteSourceIdsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sprite[':source_ids.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpriteSourceIdsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sprite)[':source_ids.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sprite)[':source_ids.json']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSpriteSourceIdsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSpriteSourceIdsJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSpriteSourceIdsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sprite)[':source_ids.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sprite)[':source_ids.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSpriteSourceIdsJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSpriteSourceIdsPngQueryKey(
  args: InferRequestType<(typeof client.sprite)[':source_ids.png']['$get']>,
) {
  return ['sprite', '/sprite/:source_ids.png', args] as const
}

export function getSpriteSourceIdsPngQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sprite)[':source_ids.png']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sprite)[':source_ids.png']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sprite)[':source_ids.png']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpriteSourceIdsPngQueryKey>
  >({
    queryKey: getSpriteSourceIdsPngQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sprite[':source_ids.png'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpriteSourceIdsPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sprite)[':source_ids.png']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sprite)[':source_ids.png']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSpriteSourceIdsPngQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSpriteSourceIdsPngQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSpriteSourceIdsPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sprite)[':source_ids.png']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sprite)[':source_ids.png']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sprite)[':source_ids.png']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpriteSourceIdsPngQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSpriteSourceIdsPngQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStyleStyleIdQueryKey(
  args: InferRequestType<(typeof client.style)[':style_id']['$get']>,
) {
  return ['style', '/style/:style_id', args] as const
}

export function getStyleStyleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.style)[':style_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.style)[':style_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.style)[':style_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStyleStyleIdQueryKey>
  >({
    queryKey: getStyleStyleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.style[':style_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStyleStyleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.style)[':style_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.style)[':style_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.style)[':style_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStyleStyleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStyleStyleIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStyleStyleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.style)[':style_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.style)[':style_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.style)[':style_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStyleStyleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStyleStyleIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStyleStyleIdZXYFormatQueryKey(
  args: InferRequestType<(typeof client.style)[':style_id'][':z'][':x'][':y.{format}']['$get']>,
) {
  return ['style', '/style/:style_id/:z/:x/:y.{format}', args] as const
}

export function getStyleStyleIdZXYFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.style)[':style_id'][':z'][':x'][':y.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.style)[':style_id'][':z'][':x'][':y.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.style)[':style_id'][':z'][':x'][':y.{format}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStyleStyleIdZXYFormatQueryKey>
  >({
    queryKey: getStyleStyleIdZXYFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.style[':style_id'][':z'][':x'][':y.{format}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStyleStyleIdZXYFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.style)[':style_id'][':z'][':x'][':y.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.style)[':style_id'][':z'][':x'][':y.{format}']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.style)[':style_id'][':z'][':x'][':y.{format}']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStyleStyleIdZXYFormatQueryKey>
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
      ...getStyleStyleIdZXYFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStyleStyleIdZXYFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.style)[':style_id'][':z'][':x'][':y.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.style)[':style_id'][':z'][':x'][':y.{format}']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.style)[':style_id'][':z'][':x'][':y.{format}']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStyleStyleIdZXYFormatQueryKey>
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
      ...getStyleStyleIdZXYFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStyleStyleIdStaticCameraSizeFormatQueryKey(
  args: InferRequestType<
    (typeof client.style)[':style_id']['static'][':camera'][':size.{format}']['$get']
  >,
) {
  return ['style', '/style/:style_id/static/:camera/:size.{format}', args] as const
}

export function getStyleStyleIdStaticCameraSizeFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.style)[':style_id']['static'][':camera'][':size.{format}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.style)[':style_id']['static'][':camera'][':size.{format}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.style)[':style_id']['static'][':camera'][':size.{format}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStyleStyleIdStaticCameraSizeFormatQueryKey>
  >({
    queryKey: getStyleStyleIdStaticCameraSizeFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.style[':style_id'].static[':camera'][':size.{format}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStyleStyleIdStaticCameraSizeFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.style)[':style_id']['static'][':camera'][':size.{format}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.style)[':style_id']['static'][':camera'][':size.{format}']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.style)[':style_id']['static'][':camera'][':size.{format}']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStyleStyleIdStaticCameraSizeFormatQueryKey>
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
      ...getStyleStyleIdStaticCameraSizeFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStyleStyleIdStaticCameraSizeFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.style)[':style_id']['static'][':camera'][':size.{format}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.style)[':style_id']['static'][':camera'][':size.{format}']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.style)[':style_id']['static'][':camera'][':size.{format}']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStyleStyleIdStaticCameraSizeFormatQueryKey>
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
      ...getStyleStyleIdStaticCameraSizeFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostStyleStyleIdStaticCameraSizeFormatMutationKey() {
  return ['style', '/style/:style_id/static/:camera/:size.{format}', 'POST'] as const
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
              (typeof client.style)[':style_id']['static'][':camera'][':size.{format}']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.style)[':style_id']['static'][':camera'][':size.{format}']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostStyleStyleIdStaticCameraSizeFormatMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.style)[':style_id']['static'][':camera'][':size.{format}']['$post']
      >,
    ) {
      return parseResponse(
        client.style[':style_id'].static[':camera'][':size.{format}'].$post(args, options),
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
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.style)[':style_id']['static'][':camera'][':size.{format}']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.style)[':style_id']['static'][':camera'][':size.{format}']['$post']
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
