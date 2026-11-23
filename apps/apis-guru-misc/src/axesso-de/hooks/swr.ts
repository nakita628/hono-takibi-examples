import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAmzKey() {
  return ['amz'] as const
}

export function getGetAmzAmazonLookupBuyRecommendationsKey(
  args: InferRequestType<(typeof client.amz)['amazon-lookup-buy-recommendations']['$get']>,
) {
  return ['amz', '/amz/amazon-lookup-buy-recommendations', args] as const
}

export function useGetAmzAmazonLookupBuyRecommendations<TError = unknown>(
  args: InferRequestType<(typeof client.amz)['amazon-lookup-buy-recommendations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.amz)['amazon-lookup-buy-recommendations']['$get']>>
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
        ? getGetAmzAmazonLookupBuyRecommendationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.amz)['amazon-lookup-buy-recommendations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.amz['amazon-lookup-buy-recommendations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAmzAmazonLookupBuyRecommendations<TError = unknown>(
  args: InferRequestType<(typeof client.amz)['amazon-lookup-buy-recommendations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.amz)['amazon-lookup-buy-recommendations']['$get']>>
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
        ? getGetAmzAmazonLookupBuyRecommendationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.amz)['amazon-lookup-buy-recommendations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.amz['amazon-lookup-buy-recommendations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAmzAmazonLookupProductKey(
  args: InferRequestType<(typeof client.amz)['amazon-lookup-product']['$get']>,
) {
  return ['amz', '/amz/amazon-lookup-product', args] as const
}

export function useGetAmzAmazonLookupProduct<TError = unknown>(
  args: InferRequestType<(typeof client.amz)['amazon-lookup-product']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.amz)['amazon-lookup-product']['$get']>>
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
        ? getGetAmzAmazonLookupProductKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.amz)['amazon-lookup-product']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.amz['amazon-lookup-product'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAmzAmazonLookupProduct<TError = unknown>(
  args: InferRequestType<(typeof client.amz)['amazon-lookup-product']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.amz)['amazon-lookup-product']['$get']>>
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
        ? getGetAmzAmazonLookupProductKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.amz)['amazon-lookup-product']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.amz['amazon-lookup-product'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAmzAmazonSearchByKeywordKey(
  args: InferRequestType<(typeof client.amz)['amazon-search-by-keyword']['$get']>,
) {
  return ['amz', '/amz/amazon-search-by-keyword', args] as const
}

export function useGetAmzAmazonSearchByKeyword<TError = unknown>(
  args: InferRequestType<(typeof client.amz)['amazon-search-by-keyword']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.amz)['amazon-search-by-keyword']['$get']>>
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
        ? getGetAmzAmazonSearchByKeywordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.amz)['amazon-search-by-keyword']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.amz['amazon-search-by-keyword'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAmzAmazonSearchByKeyword<TError = unknown>(
  args: InferRequestType<(typeof client.amz)['amazon-search-by-keyword']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.amz)['amazon-search-by-keyword']['$get']>>
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
        ? getGetAmzAmazonSearchByKeywordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.amz)['amazon-search-by-keyword']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.amz['amazon-search-by-keyword'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAmzSortOptionsKey() {
  return ['amz', '/amz/sort-options'] as const
}

export function useGetAmzSortOptions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.amz)['sort-options']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAmzSortOptionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.amz)['sort-options']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.amz['sort-options'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAmzSortOptions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.amz)['sort-options']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAmzSortOptionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.amz)['sort-options']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.amz['sort-options'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
