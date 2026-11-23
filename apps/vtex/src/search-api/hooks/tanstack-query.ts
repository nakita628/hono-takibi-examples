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

export function getApiKey() {
  return ['api'] as const
}

export function getBuscaautocompleteKey() {
  return ['buscaautocomplete'] as const
}

export function getApiCatalogSystemPubFacetsCategoryCategoryIdQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.facets.category)[':categoryId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pub/facets/category/:categoryId', keyArgs] as const
}

export function getApiCatalogSystemPubFacetsCategoryCategoryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog_system.pub.facets.category)[':categoryId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.facets.category)[':categoryId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pub.facets.category)[':categoryId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPubFacetsCategoryCategoryIdQueryKey>
  >({
    queryKey: getApiCatalogSystemPubFacetsCategoryCategoryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pub.facets.category[':categoryId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPubFacetsCategoryCategoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog_system.pub.facets.category)[':categoryId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.facets.category)[':categoryId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.facets.category)[':categoryId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubFacetsCategoryCategoryIdQueryKey>
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
      ...getApiCatalogSystemPubFacetsCategoryCategoryIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPubFacetsCategoryCategoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog_system.pub.facets.category)[':categoryId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.facets.category)[':categoryId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.facets.category)[':categoryId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubFacetsCategoryCategoryIdQueryKey>
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
      ...getApiCatalogSystemPubFacetsCategoryCategoryIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubFacetsSearchTermQueryKey(
  args: InferRequestType<(typeof client.api.catalog_system.pub.facets.search)[':term']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pub/facets/search/:term', keyArgs] as const
}

export function getApiCatalogSystemPubFacetsSearchTermQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog_system.pub.facets.search)[':term']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog_system.pub.facets.search)[':term']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.catalog_system.pub.facets.search)[':term']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPubFacetsSearchTermQueryKey>
  >({
    queryKey: getApiCatalogSystemPubFacetsSearchTermQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pub.facets.search[':term'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPubFacetsSearchTerm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog_system.pub.facets.search)[':term']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog_system.pub.facets.search)[':term']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.catalog_system.pub.facets.search)[':term']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubFacetsSearchTermQueryKey>
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
      ...getApiCatalogSystemPubFacetsSearchTermQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPubFacetsSearchTerm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog_system.pub.facets.search)[':term']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog_system.pub.facets.search)[':term']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.catalog_system.pub.facets.search)[':term']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubFacetsSearchTermQueryKey>
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
      ...getApiCatalogSystemPubFacetsSearchTermQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubProductsCrosssellingAccessoriesProductIdQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.accessories)[':productId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/catalog_system/pub/products/crossselling/accessories/:productId',
    keyArgs,
  ] as const
}

export function getApiCatalogSystemPubProductsCrosssellingAccessoriesProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.products.crossselling.accessories)[':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.accessories)[':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pub.products.crossselling.accessories)[':productId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPubProductsCrosssellingAccessoriesProductIdQueryKey>
  >({
    queryKey: getApiCatalogSystemPubProductsCrosssellingAccessoriesProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pub.products.crossselling.accessories[':productId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPubProductsCrosssellingAccessoriesProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.products.crossselling.accessories)[':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.accessories)[':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.products.crossselling.accessories)[':productId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubProductsCrosssellingAccessoriesProductIdQueryKey>
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
      ...getApiCatalogSystemPubProductsCrosssellingAccessoriesProductIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPubProductsCrosssellingAccessoriesProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.products.crossselling.accessories)[':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.accessories)[':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.products.crossselling.accessories)[':productId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubProductsCrosssellingAccessoriesProductIdQueryKey>
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
      ...getApiCatalogSystemPubProductsCrosssellingAccessoriesProductIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubProductsCrosssellingShowtogetherProductIdQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.showtogether)[':productId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/catalog_system/pub/products/crossselling/showtogether/:productId',
    keyArgs,
  ] as const
}

export function getApiCatalogSystemPubProductsCrosssellingShowtogetherProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.products.crossselling.showtogether)[':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.showtogether)[':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pub.products.crossselling.showtogether)[':productId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPubProductsCrosssellingShowtogetherProductIdQueryKey>
  >({
    queryKey: getApiCatalogSystemPubProductsCrosssellingShowtogetherProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pub.products.crossselling.showtogether[':productId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPubProductsCrosssellingShowtogetherProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.products.crossselling.showtogether)[':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.showtogether)[':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.products.crossselling.showtogether)[':productId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubProductsCrosssellingShowtogetherProductIdQueryKey>
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
      ...getApiCatalogSystemPubProductsCrosssellingShowtogetherProductIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPubProductsCrosssellingShowtogetherProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.products.crossselling.showtogether)[':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.showtogether)[':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.products.crossselling.showtogether)[':productId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubProductsCrosssellingShowtogetherProductIdQueryKey>
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
      ...getApiCatalogSystemPubProductsCrosssellingShowtogetherProductIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubProductsCrosssellingSimilarsProductIdQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.similars)[':productId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/catalog_system/pub/products/crossselling/similars/:productId',
    keyArgs,
  ] as const
}

export function getApiCatalogSystemPubProductsCrosssellingSimilarsProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.products.crossselling.similars)[':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.similars)[':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pub.products.crossselling.similars)[':productId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPubProductsCrosssellingSimilarsProductIdQueryKey>
  >({
    queryKey: getApiCatalogSystemPubProductsCrosssellingSimilarsProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pub.products.crossselling.similars[':productId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPubProductsCrosssellingSimilarsProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.products.crossselling.similars)[':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.similars)[':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.products.crossselling.similars)[':productId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubProductsCrosssellingSimilarsProductIdQueryKey>
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
      ...getApiCatalogSystemPubProductsCrosssellingSimilarsProductIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPubProductsCrosssellingSimilarsProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.products.crossselling.similars)[':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.similars)[':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.products.crossselling.similars)[':productId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubProductsCrosssellingSimilarsProductIdQueryKey>
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
      ...getApiCatalogSystemPubProductsCrosssellingSimilarsProductIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubProductsCrosssellingSuggestionsProductIdQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.suggestions)[':productId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/catalog_system/pub/products/crossselling/suggestions/:productId',
    keyArgs,
  ] as const
}

export function getApiCatalogSystemPubProductsCrosssellingSuggestionsProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.products.crossselling.suggestions)[':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.suggestions)[':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pub.products.crossselling.suggestions)[':productId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPubProductsCrosssellingSuggestionsProductIdQueryKey>
  >({
    queryKey: getApiCatalogSystemPubProductsCrosssellingSuggestionsProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pub.products.crossselling.suggestions[':productId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPubProductsCrosssellingSuggestionsProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.products.crossselling.suggestions)[':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.suggestions)[':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.products.crossselling.suggestions)[':productId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubProductsCrosssellingSuggestionsProductIdQueryKey>
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
      ...getApiCatalogSystemPubProductsCrosssellingSuggestionsProductIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPubProductsCrosssellingSuggestionsProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.products.crossselling.suggestions)[':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.suggestions)[':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.products.crossselling.suggestions)[':productId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubProductsCrosssellingSuggestionsProductIdQueryKey>
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
      ...getApiCatalogSystemPubProductsCrosssellingSuggestionsProductIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubProductsCrosssellingWhoboughtalsoboughtProductIdQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.whoboughtalsobought)[':productId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/catalog_system/pub/products/crossselling/whoboughtalsobought/:productId',
    keyArgs,
  ] as const
}

export function getApiCatalogSystemPubProductsCrosssellingWhoboughtalsoboughtProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.products.crossselling.whoboughtalsobought)[':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.whoboughtalsobought)[':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pub.products.crossselling.whoboughtalsobought)[':productId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiCatalogSystemPubProductsCrosssellingWhoboughtalsoboughtProductIdQueryKey
    >
  >({
    queryKey: getApiCatalogSystemPubProductsCrosssellingWhoboughtalsoboughtProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pub.products.crossselling.whoboughtalsobought[':productId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useApiCatalogSystemPubProductsCrosssellingWhoboughtalsoboughtProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.products.crossselling.whoboughtalsobought)[':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.whoboughtalsobought)[':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.products.crossselling.whoboughtalsobought)[':productId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiCatalogSystemPubProductsCrosssellingWhoboughtalsoboughtProductIdQueryKey
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
      ...getApiCatalogSystemPubProductsCrosssellingWhoboughtalsoboughtProductIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPubProductsCrosssellingWhoboughtalsoboughtProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.products.crossselling.whoboughtalsobought)[':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.whoboughtalsobought)[':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.products.crossselling.whoboughtalsobought)[':productId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiCatalogSystemPubProductsCrosssellingWhoboughtalsoboughtProductIdQueryKey
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
      ...getApiCatalogSystemPubProductsCrosssellingWhoboughtalsoboughtProductIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubProductsCrosssellingWhosawalsoboughtProductIdQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.whosawalsobought)[':productId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/catalog_system/pub/products/crossselling/whosawalsobought/:productId',
    keyArgs,
  ] as const
}

export function getApiCatalogSystemPubProductsCrosssellingWhosawalsoboughtProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.products.crossselling.whosawalsobought)[':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.whosawalsobought)[':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pub.products.crossselling.whosawalsobought)[':productId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPubProductsCrosssellingWhosawalsoboughtProductIdQueryKey>
  >({
    queryKey: getApiCatalogSystemPubProductsCrosssellingWhosawalsoboughtProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pub.products.crossselling.whosawalsobought[':productId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useApiCatalogSystemPubProductsCrosssellingWhosawalsoboughtProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.products.crossselling.whosawalsobought)[':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.whosawalsobought)[':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.products.crossselling.whosawalsobought)[':productId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiCatalogSystemPubProductsCrosssellingWhosawalsoboughtProductIdQueryKey
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
      ...getApiCatalogSystemPubProductsCrosssellingWhosawalsoboughtProductIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPubProductsCrosssellingWhosawalsoboughtProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.products.crossselling.whosawalsobought)[':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.whosawalsobought)[':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.products.crossselling.whosawalsobought)[':productId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiCatalogSystemPubProductsCrosssellingWhosawalsoboughtProductIdQueryKey
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
      ...getApiCatalogSystemPubProductsCrosssellingWhosawalsoboughtProductIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubProductsCrosssellingWhosawalsosawProductIdQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.whosawalsosaw)[':productId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/catalog_system/pub/products/crossselling/whosawalsosaw/:productId',
    keyArgs,
  ] as const
}

export function getApiCatalogSystemPubProductsCrosssellingWhosawalsosawProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.products.crossselling.whosawalsosaw)[':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.whosawalsosaw)[':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pub.products.crossselling.whosawalsosaw)[':productId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPubProductsCrosssellingWhosawalsosawProductIdQueryKey>
  >({
    queryKey: getApiCatalogSystemPubProductsCrosssellingWhosawalsosawProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pub.products.crossselling.whosawalsosaw[':productId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPubProductsCrosssellingWhosawalsosawProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.products.crossselling.whosawalsosaw)[':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.whosawalsosaw)[':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.products.crossselling.whosawalsosaw)[':productId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubProductsCrosssellingWhosawalsosawProductIdQueryKey>
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
      ...getApiCatalogSystemPubProductsCrosssellingWhosawalsosawProductIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPubProductsCrosssellingWhosawalsosawProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.products.crossselling.whosawalsosaw)[':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.whosawalsosaw)[':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.products.crossselling.whosawalsosaw)[':productId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubProductsCrosssellingWhosawalsosawProductIdQueryKey>
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
      ...getApiCatalogSystemPubProductsCrosssellingWhosawalsosawProductIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubProductsOffersProductIdQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.offers)[':productId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pub/products/offers/:productId', keyArgs] as const
}

export function getApiCatalogSystemPubProductsOffersProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog_system.pub.products.offers)[':productId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.offers)[':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.catalog_system.pub.products.offers)[':productId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPubProductsOffersProductIdQueryKey>
  >({
    queryKey: getApiCatalogSystemPubProductsOffersProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pub.products.offers[':productId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPubProductsOffersProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog_system.pub.products.offers)[':productId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.offers)[':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.products.offers)[':productId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubProductsOffersProductIdQueryKey>
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
      ...getApiCatalogSystemPubProductsOffersProductIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPubProductsOffersProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog_system.pub.products.offers)[':productId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.offers)[':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.products.offers)[':productId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubProductsOffersProductIdQueryKey>
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
      ...getApiCatalogSystemPubProductsOffersProductIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubProductsOffersProductIdSkuSkuIdQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.offers)[':productId']['sku'][':skuId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pub/products/offers/:productId/sku/:skuId', keyArgs] as const
}

export function getApiCatalogSystemPubProductsOffersProductIdSkuSkuIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.products.offers)[':productId']['sku'][':skuId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.offers)[':productId']['sku'][':skuId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pub.products.offers)[':productId']['sku'][':skuId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPubProductsOffersProductIdSkuSkuIdQueryKey>
  >({
    queryKey: getApiCatalogSystemPubProductsOffersProductIdSkuSkuIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pub.products.offers[':productId'].sku[':skuId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPubProductsOffersProductIdSkuSkuId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.products.offers)[':productId']['sku'][':skuId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.offers)[':productId']['sku'][':skuId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.products.offers)[':productId']['sku'][':skuId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubProductsOffersProductIdSkuSkuIdQueryKey>
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
      ...getApiCatalogSystemPubProductsOffersProductIdSkuSkuIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPubProductsOffersProductIdSkuSkuId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.products.offers)[':productId']['sku'][':skuId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.offers)[':productId']['sku'][':skuId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.products.offers)[':productId']['sku'][':skuId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubProductsOffersProductIdSkuSkuIdQueryKey>
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
      ...getApiCatalogSystemPubProductsOffersProductIdSkuSkuIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubProductsSearchQueryKey(
  args: InferRequestType<typeof client.api.catalog_system.pub.products.search.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pub/products/search', keyArgs] as const
}

export function getApiCatalogSystemPubProductsSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog_system.pub.products.search.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog_system.pub.products.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog_system.pub.products.search.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPubProductsSearchQueryKey>
  >({
    queryKey: getApiCatalogSystemPubProductsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pub.products.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPubProductsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog_system.pub.products.search.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog_system.pub.products.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog_system.pub.products.search.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubProductsSearchQueryKey>
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
      ...getApiCatalogSystemPubProductsSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPubProductsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog_system.pub.products.search.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog_system.pub.products.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog_system.pub.products.search.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubProductsSearchQueryKey>
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
      ...getApiCatalogSystemPubProductsSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubProductsSearchProductTextLinkPQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.search)[':product-text-link']['p']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pub/products/search/:product-text-link/p', keyArgs] as const
}

export function getApiCatalogSystemPubProductsSearchProductTextLinkPQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.products.search)[':product-text-link']['p']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.search)[':product-text-link']['p']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pub.products.search)[':product-text-link']['p']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPubProductsSearchProductTextLinkPQueryKey>
  >({
    queryKey: getApiCatalogSystemPubProductsSearchProductTextLinkPQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pub.products.search[':product-text-link'].p.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPubProductsSearchProductTextLinkP<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.products.search)[':product-text-link']['p']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.search)[':product-text-link']['p']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.products.search)[':product-text-link']['p']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubProductsSearchProductTextLinkPQueryKey>
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
      ...getApiCatalogSystemPubProductsSearchProductTextLinkPQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPubProductsSearchProductTextLinkP<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.products.search)[':product-text-link']['p']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.search)[':product-text-link']['p']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.products.search)[':product-text-link']['p']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubProductsSearchProductTextLinkPQueryKey>
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
      ...getApiCatalogSystemPubProductsSearchProductTextLinkPQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubProductsSearchSearchQueryKey(
  args: InferRequestType<(typeof client.api.catalog_system.pub.products.search)[':search']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pub/products/search/:search', keyArgs] as const
}

export function getApiCatalogSystemPubProductsSearchSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog_system.pub.products.search)[':search']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog_system.pub.products.search)[':search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.catalog_system.pub.products.search)[':search']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPubProductsSearchSearchQueryKey>
  >({
    queryKey: getApiCatalogSystemPubProductsSearchSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pub.products.search[':search'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPubProductsSearchSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog_system.pub.products.search)[':search']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog_system.pub.products.search)[':search']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.products.search)[':search']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubProductsSearchSearchQueryKey>
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
      ...getApiCatalogSystemPubProductsSearchSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPubProductsSearchSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog_system.pub.products.search)[':search']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog_system.pub.products.search)[':search']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.products.search)[':search']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubProductsSearchSearchQueryKey>
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
      ...getApiCatalogSystemPubProductsSearchSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBuscaautocompleteQueryKey(
  args: InferRequestType<typeof client.buscaautocomplete.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['buscaautocomplete', '/buscaautocomplete', keyArgs] as const
}

export function getBuscaautocompleteQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buscaautocomplete.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.buscaautocomplete.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buscaautocomplete.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBuscaautocompleteQueryKey>
  >({
    queryKey: getBuscaautocompleteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.buscaautocomplete.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBuscaautocomplete<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buscaautocomplete.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.buscaautocomplete.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.buscaautocomplete.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBuscaautocompleteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBuscaautocompleteQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBuscaautocomplete<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buscaautocomplete.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.buscaautocomplete.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.buscaautocomplete.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBuscaautocompleteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBuscaautocompleteQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
