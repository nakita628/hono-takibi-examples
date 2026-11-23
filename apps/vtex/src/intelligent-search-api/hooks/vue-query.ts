import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.autocomplete_suggestions.$get>>,
) {
  return ['autocomplete_suggestions', '/autocomplete_suggestions', toValue(args)] as const
}

export function getAutocompleteSuggestionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.autocomplete_suggestions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAutocompleteSuggestionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.autocomplete_suggestions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAutocompleteSuggestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.autocomplete_suggestions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.autocomplete_suggestions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.autocomplete_suggestions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.autocomplete_suggestions.$get>>>
            >
          >,
          ReturnType<typeof getAutocompleteSuggestionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.autocomplete_suggestions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutocompleteSuggestionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAutocompleteSuggestionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.autocomplete_suggestions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBannersFacetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.banners)[':facets']['$get']>>,
) {
  return ['banners', '/banners/:facets', toValue(args)] as const
}

export function getBannersFacetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.banners)[':facets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBannersFacetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.banners[':facets'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBannersFacets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.banners)[':facets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.banners)[':facets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.banners)[':facets']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.banners)[':facets']['$get']>>>
            >
          >,
          ReturnType<typeof getBannersFacetsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.banners)[':facets']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBannersFacetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBannersFacetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.banners[':facets'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCorrectionSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.correction_search.$get>>,
) {
  return ['correction_search', '/correction_search', toValue(args)] as const
}

export function getCorrectionSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.correction_search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCorrectionSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.correction_search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCorrectionSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.correction_search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.correction_search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.correction_search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.correction_search.$get>>>
            >
          >,
          ReturnType<typeof getCorrectionSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.correction_search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCorrectionSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCorrectionSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.correction_search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFacetsFacetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.facets)[':facets']['$get']>>,
) {
  return ['facets', '/facets/:facets', toValue(args)] as const
}

export function getFacetsFacetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.facets)[':facets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFacetsFacetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.facets[':facets'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFacetsFacets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.facets)[':facets']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.facets)[':facets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.facets)[':facets']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.facets)[':facets']['$get']>>>
            >
          >,
          ReturnType<typeof getFacetsFacetsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.facets)[':facets']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFacetsFacetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFacetsFacetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.facets[':facets'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductSearchFacetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.product_search)[':facets']['$get']>>,
) {
  return ['product_search', '/product_search/:facets', toValue(args)] as const
}

export function getProductSearchFacetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.product_search)[':facets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductSearchFacetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.product_search[':facets'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductSearchFacets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.product_search)[':facets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.product_search)[':facets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.product_search)[':facets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.product_search)[':facets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProductSearchFacetsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.product_search)[':facets']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductSearchFacetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductSearchFacetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.product_search[':facets'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchSuggestionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search_suggestions.$get>>,
) {
  return ['search_suggestions', '/search_suggestions', toValue(args)] as const
}

export function getSearchSuggestionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search_suggestions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchSuggestionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search_suggestions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchSuggestions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search_suggestions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search_suggestions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search_suggestions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search_suggestions.$get>>>
            >
          >,
          ReturnType<typeof getSearchSuggestionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search_suggestions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchSuggestionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchSuggestionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search_suggestions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTopSearchesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.top_searches.$get>>,
) {
  return ['top_searches', '/top_searches', toValue(args)] as const
}

export function getTopSearchesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.top_searches.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTopSearchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.top_searches.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTopSearches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top_searches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.top_searches.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top_searches.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top_searches.$get>>>>
          >,
          ReturnType<typeof getTopSearchesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top_searches.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTopSearchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTopSearchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.top_searches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
