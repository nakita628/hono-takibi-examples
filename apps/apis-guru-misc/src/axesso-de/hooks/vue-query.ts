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

export function getAmzKey() {
  return ['amz'] as const
}

export function getAmzAmazonLookupBuyRecommendationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.amz)['amazon-lookup-buy-recommendations']['$get']>
  >,
) {
  return ['amz', '/amz/amazon-lookup-buy-recommendations', toValue(args)] as const
}

export function getAmzAmazonLookupBuyRecommendationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.amz)['amazon-lookup-buy-recommendations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAmzAmazonLookupBuyRecommendationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.amz['amazon-lookup-buy-recommendations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.amz)['amazon-lookup-buy-recommendations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.amz)['amazon-lookup-buy-recommendations']['$get']>
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
                  ReturnType<(typeof client.amz)['amazon-lookup-buy-recommendations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAmzAmazonLookupBuyRecommendationsQueryKey>
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
          Awaited<ReturnType<(typeof client.amz)['amazon-lookup-buy-recommendations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAmzAmazonLookupBuyRecommendationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAmzAmazonLookupBuyRecommendationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.amz['amazon-lookup-buy-recommendations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAmzAmazonLookupProductQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.amz)['amazon-lookup-product']['$get']>>,
) {
  return ['amz', '/amz/amazon-lookup-product', toValue(args)] as const
}

export function getAmzAmazonLookupProductQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.amz)['amazon-lookup-product']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAmzAmazonLookupProductQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.amz['amazon-lookup-product'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.amz)['amazon-lookup-product']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.amz)['amazon-lookup-product']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAmzAmazonLookupProductQueryKey>
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
          Awaited<ReturnType<(typeof client.amz)['amazon-lookup-product']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAmzAmazonLookupProductQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAmzAmazonLookupProductQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.amz['amazon-lookup-product'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAmzAmazonSearchByKeywordQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.amz)['amazon-search-by-keyword']['$get']>>,
) {
  return ['amz', '/amz/amazon-search-by-keyword', toValue(args)] as const
}

export function getAmzAmazonSearchByKeywordQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.amz)['amazon-search-by-keyword']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAmzAmazonSearchByKeywordQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.amz['amazon-search-by-keyword'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.amz)['amazon-search-by-keyword']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.amz)['amazon-search-by-keyword']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAmzAmazonSearchByKeywordQueryKey>
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
          Awaited<ReturnType<(typeof client.amz)['amazon-search-by-keyword']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAmzAmazonSearchByKeywordQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAmzAmazonSearchByKeywordQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.amz['amazon-search-by-keyword'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAmzSortOptionsQueryKey() {
  return ['amz', '/amz/sort-options'] as const
}

export function getAmzSortOptionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAmzSortOptionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.amz['sort-options'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.amz)['sort-options']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.amz)['sort-options']['$get']>>>
            >
          >,
          ReturnType<typeof getAmzSortOptionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.amz)['sort-options']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAmzSortOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAmzSortOptionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.amz['sort-options'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
