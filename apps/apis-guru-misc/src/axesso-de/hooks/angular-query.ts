import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectAmzAmazonLookupBuyRecommendations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.amz)['amazon-lookup-buy-recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.amz)['amazon-lookup-buy-recommendations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAmzAmazonLookupBuyRecommendationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectAmzAmazonLookupProduct<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.amz)['amazon-lookup-product']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.amz)['amazon-lookup-product']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAmzAmazonLookupProductQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectAmzAmazonSearchByKeyword<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.amz)['amazon-search-by-keyword']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.amz)['amazon-search-by-keyword']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAmzAmazonSearchByKeywordQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectAmzSortOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.amz)['sort-options']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAmzSortOptionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}
