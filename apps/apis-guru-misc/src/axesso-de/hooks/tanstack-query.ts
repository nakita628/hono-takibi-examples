import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAmzKey() {
  return ['amz'] as const
}

export function getAmzAmazonLookupBuyRecommendationsQueryKey(
  args: InferRequestType<(typeof client.amz)['amazon-lookup-buy-recommendations']['$get']>,
) {
  return ['amz', '/amz/amazon-lookup-buy-recommendations', args] as const
}

export function getAmzAmazonLookupBuyRecommendationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.amz)['amazon-lookup-buy-recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.amz)['amazon-lookup-buy-recommendations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.amz)['amazon-lookup-buy-recommendations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAmzAmazonLookupBuyRecommendationsQueryKey>
  >({
    queryKey: getAmzAmazonLookupBuyRecommendationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.amz['amazon-lookup-buy-recommendations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAmzAmazonLookupBuyRecommendations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.amz)['amazon-lookup-buy-recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.amz)['amazon-lookup-buy-recommendations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.amz)['amazon-lookup-buy-recommendations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAmzAmazonLookupBuyRecommendationsQueryKey>
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
      ...getAmzAmazonLookupBuyRecommendationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAmzAmazonLookupBuyRecommendations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.amz)['amazon-lookup-buy-recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.amz)['amazon-lookup-buy-recommendations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.amz)['amazon-lookup-buy-recommendations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAmzAmazonLookupBuyRecommendationsQueryKey>
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
      ...getAmzAmazonLookupBuyRecommendationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAmzAmazonLookupProductQueryKey(
  args: InferRequestType<(typeof client.amz)['amazon-lookup-product']['$get']>,
) {
  return ['amz', '/amz/amazon-lookup-product', args] as const
}

export function getAmzAmazonLookupProductQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.amz)['amazon-lookup-product']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.amz)['amazon-lookup-product']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.amz)['amazon-lookup-product']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAmzAmazonLookupProductQueryKey>
  >({
    queryKey: getAmzAmazonLookupProductQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.amz['amazon-lookup-product'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAmzAmazonLookupProduct<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.amz)['amazon-lookup-product']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.amz)['amazon-lookup-product']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.amz)['amazon-lookup-product']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAmzAmazonLookupProductQueryKey>
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
      ...getAmzAmazonLookupProductQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAmzAmazonLookupProduct<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.amz)['amazon-lookup-product']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.amz)['amazon-lookup-product']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.amz)['amazon-lookup-product']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAmzAmazonLookupProductQueryKey>
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
      ...getAmzAmazonLookupProductQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAmzAmazonSearchByKeywordQueryKey(
  args: InferRequestType<(typeof client.amz)['amazon-search-by-keyword']['$get']>,
) {
  return ['amz', '/amz/amazon-search-by-keyword', args] as const
}

export function getAmzAmazonSearchByKeywordQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.amz)['amazon-search-by-keyword']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.amz)['amazon-search-by-keyword']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.amz)['amazon-search-by-keyword']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAmzAmazonSearchByKeywordQueryKey>
  >({
    queryKey: getAmzAmazonSearchByKeywordQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.amz['amazon-search-by-keyword'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAmzAmazonSearchByKeyword<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.amz)['amazon-search-by-keyword']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.amz)['amazon-search-by-keyword']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.amz)['amazon-search-by-keyword']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAmzAmazonSearchByKeywordQueryKey>
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
      ...getAmzAmazonSearchByKeywordQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAmzAmazonSearchByKeyword<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.amz)['amazon-search-by-keyword']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.amz)['amazon-search-by-keyword']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.amz)['amazon-search-by-keyword']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAmzAmazonSearchByKeywordQueryKey>
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
      ...getAmzAmazonSearchByKeywordQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAmzSortOptionsQueryKey() {
  return ['amz', '/amz/sort-options'] as const
}

export function getAmzSortOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.amz)['sort-options']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.amz)['sort-options']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAmzSortOptionsQueryKey>
  >({
    queryKey: getAmzSortOptionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.amz['sort-options'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAmzSortOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.amz)['sort-options']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.amz)['sort-options']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAmzSortOptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAmzSortOptionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAmzSortOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.amz)['sort-options']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.amz)['sort-options']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAmzSortOptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAmzSortOptionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}
