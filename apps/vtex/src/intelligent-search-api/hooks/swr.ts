import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
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

export function getGetAutocompleteSuggestionsKey(
  args: InferRequestType<typeof client.autocomplete_suggestions.$get>,
) {
  return ['autocomplete_suggestions', '/autocomplete_suggestions', args] as const
}

export function useGetAutocompleteSuggestions<TError = unknown>(
  args: InferRequestType<typeof client.autocomplete_suggestions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.autocomplete_suggestions.$get>>>
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
        ? getGetAutocompleteSuggestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.autocomplete_suggestions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.autocomplete_suggestions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutocompleteSuggestions<TError = unknown>(
  args: InferRequestType<typeof client.autocomplete_suggestions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.autocomplete_suggestions.$get>>>
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
        ? getGetAutocompleteSuggestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.autocomplete_suggestions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.autocomplete_suggestions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBannersFacetsKey(
  args: InferRequestType<(typeof client.banners)[':facets']['$get']>,
) {
  return ['banners', '/banners/:facets', args] as const
}

export function useGetBannersFacets<TError = unknown>(
  args: InferRequestType<(typeof client.banners)[':facets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.banners)[':facets']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBannersFacetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.banners)[':facets']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.banners[':facets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBannersFacets<TError = unknown>(
  args: InferRequestType<(typeof client.banners)[':facets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.banners)[':facets']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBannersFacetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.banners)[':facets']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.banners[':facets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCorrectionSearchKey(
  args: InferRequestType<typeof client.correction_search.$get>,
) {
  return ['correction_search', '/correction_search', args] as const
}

export function useGetCorrectionSearch<TError = unknown>(
  args: InferRequestType<typeof client.correction_search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.correction_search.$get>>>>
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
        ? getGetCorrectionSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.correction_search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.correction_search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCorrectionSearch<TError = unknown>(
  args: InferRequestType<typeof client.correction_search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.correction_search.$get>>>>
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
        ? getGetCorrectionSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.correction_search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.correction_search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFacetsFacetsKey(
  args: InferRequestType<(typeof client.facets)[':facets']['$get']>,
) {
  return ['facets', '/facets/:facets', args] as const
}

export function useGetFacetsFacets<TError = unknown>(
  args: InferRequestType<(typeof client.facets)[':facets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.facets)[':facets']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFacetsFacetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.facets)[':facets']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.facets[':facets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFacetsFacets<TError = unknown>(
  args: InferRequestType<(typeof client.facets)[':facets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.facets)[':facets']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFacetsFacetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.facets)[':facets']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.facets[':facets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProductSearchFacetsKey(
  args: InferRequestType<(typeof client.product_search)[':facets']['$get']>,
) {
  return ['product_search', '/product_search/:facets', args] as const
}

export function useGetProductSearchFacets<TError = unknown>(
  args: InferRequestType<(typeof client.product_search)[':facets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.product_search)[':facets']['$get']>>
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
        ? getGetProductSearchFacetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.product_search)[':facets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.product_search[':facets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductSearchFacets<TError = unknown>(
  args: InferRequestType<(typeof client.product_search)[':facets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.product_search)[':facets']['$get']>>
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
        ? getGetProductSearchFacetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.product_search)[':facets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.product_search[':facets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchSuggestionsKey(
  args: InferRequestType<typeof client.search_suggestions.$get>,
) {
  return ['search_suggestions', '/search_suggestions', args] as const
}

export function useGetSearchSuggestions<TError = unknown>(
  args: InferRequestType<typeof client.search_suggestions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search_suggestions.$get>>>>
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
        ? getGetSearchSuggestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search_suggestions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search_suggestions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchSuggestions<TError = unknown>(
  args: InferRequestType<typeof client.search_suggestions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search_suggestions.$get>>>>
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
        ? getGetSearchSuggestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search_suggestions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search_suggestions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTopSearchesKey(args: InferRequestType<typeof client.top_searches.$get>) {
  return ['top_searches', '/top_searches', args] as const
}

export function useGetTopSearches<TError = unknown>(
  args: InferRequestType<typeof client.top_searches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top_searches.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTopSearchesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top_searches.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.top_searches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTopSearches<TError = unknown>(
  args: InferRequestType<typeof client.top_searches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top_searches.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTopSearchesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.top_searches.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.top_searches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
