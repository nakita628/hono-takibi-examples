import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAutocompleteSuggestionsKey() {
  return ['autocomplete_suggestions'] as const
}

export function getBannersKey() {
  return ['banners'] as const
}

export function getCorrectionSearchKey() {
  return ['correction_search'] as const
}

export function getFacetsKey() {
  return ['facets'] as const
}

export function getProductSearchKey() {
  return ['product_search'] as const
}

export function getSearchSuggestionsKey() {
  return ['search_suggestions'] as const
}

export function getTopSearchesKey() {
  return ['top_searches'] as const
}

export function getAutocompleteSuggestionsQueryKey(
  args: InferRequestType<typeof client.autocomplete_suggestions.$get>,
) {
  return ['autocomplete_suggestions', '/autocomplete_suggestions', args] as const
}

export function getAutocompleteSuggestionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.autocomplete_suggestions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.autocomplete_suggestions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.autocomplete_suggestions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutocompleteSuggestionsQueryKey>
  >({
    queryKey: getAutocompleteSuggestionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.autocomplete_suggestions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAutocompleteSuggestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.autocomplete_suggestions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.autocomplete_suggestions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.autocomplete_suggestions.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAutocompleteSuggestionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAutocompleteSuggestionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getBannersFacetsQueryKey(
  args: InferRequestType<(typeof client.banners)[':facets']['$get']>,
) {
  return ['banners', '/banners/:facets', args] as const
}

export function getBannersFacetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.banners)[':facets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.banners)[':facets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.banners)[':facets']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBannersFacetsQueryKey>
  >({
    queryKey: getBannersFacetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.banners[':facets'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBannersFacets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.banners)[':facets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.banners)[':facets']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.banners)[':facets']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBannersFacetsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBannersFacetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCorrectionSearchQueryKey(
  args: InferRequestType<typeof client.correction_search.$get>,
) {
  return ['correction_search', '/correction_search', args] as const
}

export function getCorrectionSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.correction_search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.correction_search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.correction_search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCorrectionSearchQueryKey>
  >({
    queryKey: getCorrectionSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.correction_search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCorrectionSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.correction_search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.correction_search.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.correction_search.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCorrectionSearchQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCorrectionSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFacetsFacetsQueryKey(
  args: InferRequestType<(typeof client.facets)[':facets']['$get']>,
) {
  return ['facets', '/facets/:facets', args] as const
}

export function getFacetsFacetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.facets)[':facets']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.facets)[':facets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.facets)[':facets']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFacetsFacetsQueryKey>
  >({
    queryKey: getFacetsFacetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.facets[':facets'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFacetsFacets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.facets)[':facets']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.facets)[':facets']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.facets)[':facets']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFacetsFacetsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFacetsFacetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getProductSearchFacetsQueryKey(
  args: InferRequestType<(typeof client.product_search)[':facets']['$get']>,
) {
  return ['product_search', '/product_search/:facets', args] as const
}

export function getProductSearchFacetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.product_search)[':facets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.product_search)[':facets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.product_search)[':facets']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductSearchFacetsQueryKey>
  >({
    queryKey: getProductSearchFacetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.product_search[':facets'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProductSearchFacets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.product_search)[':facets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.product_search)[':facets']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.product_search)[':facets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProductSearchFacetsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProductSearchFacetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSearchSuggestionsQueryKey(
  args: InferRequestType<typeof client.search_suggestions.$get>,
) {
  return ['search_suggestions', '/search_suggestions', args] as const
}

export function getSearchSuggestionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search_suggestions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search_suggestions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search_suggestions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchSuggestionsQueryKey>
  >({
    queryKey: getSearchSuggestionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search_suggestions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSearchSuggestions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search_suggestions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search_suggestions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search_suggestions.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSearchSuggestionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchSuggestionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTopSearchesQueryKey(args: InferRequestType<typeof client.top_searches.$get>) {
  return ['top_searches', '/top_searches', args] as const
}

export function getTopSearchesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top_searches.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.top_searches.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top_searches.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTopSearchesQueryKey>
  >({
    queryKey: getTopSearchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.top_searches.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTopSearches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top_searches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.top_searches.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top_searches.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getTopSearchesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTopSearchesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
