import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function createApiCatalogSystemPubFacetsCategoryCategoryId<
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
  args: () => InferRequestType<
    (typeof client.api.catalog_system.pub.facets.category)[':categoryId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiCatalogSystemPubFacetsCategoryCategoryIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createApiCatalogSystemPubFacetsSearchTerm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog_system.pub.facets.search)[':term']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.catalog_system.pub.facets.search)[':term']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiCatalogSystemPubFacetsSearchTermQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiCatalogSystemPubProductsCrosssellingAccessoriesProductId<
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
  args: () => InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.accessories)[':productId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiCatalogSystemPubProductsCrosssellingAccessoriesProductIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createApiCatalogSystemPubProductsCrosssellingShowtogetherProductId<
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
  args: () => InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.showtogether)[':productId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiCatalogSystemPubProductsCrosssellingShowtogetherProductIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createApiCatalogSystemPubProductsCrosssellingSimilarsProductId<
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
  args: () => InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.similars)[':productId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiCatalogSystemPubProductsCrosssellingSimilarsProductIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createApiCatalogSystemPubProductsCrosssellingSuggestionsProductId<
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
  args: () => InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.suggestions)[':productId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiCatalogSystemPubProductsCrosssellingSuggestionsProductIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createApiCatalogSystemPubProductsCrosssellingWhoboughtalsoboughtProductId<
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
  args: () => InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.whoboughtalsobought)[':productId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiCatalogSystemPubProductsCrosssellingWhoboughtalsoboughtProductIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiCatalogSystemPubProductsCrosssellingWhosawalsoboughtProductId<
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
  args: () => InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.whosawalsobought)[':productId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiCatalogSystemPubProductsCrosssellingWhosawalsoboughtProductIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiCatalogSystemPubProductsCrosssellingWhosawalsosawProductId<
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
  args: () => InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.whosawalsosaw)[':productId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiCatalogSystemPubProductsCrosssellingWhosawalsosawProductIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiCatalogSystemPubProductsOffersProductId<
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
  args: () => InferRequestType<
    (typeof client.api.catalog_system.pub.products.offers)[':productId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiCatalogSystemPubProductsOffersProductIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createApiCatalogSystemPubProductsOffersProductIdSkuSkuId<
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
  args: () => InferRequestType<
    (typeof client.api.catalog_system.pub.products.offers)[':productId']['sku'][':skuId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiCatalogSystemPubProductsOffersProductIdSkuSkuIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createApiCatalogSystemPubProductsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog_system.pub.products.search.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.catalog_system.pub.products.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiCatalogSystemPubProductsSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiCatalogSystemPubProductsSearchProductTextLinkP<
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
  args: () => InferRequestType<
    (typeof client.api.catalog_system.pub.products.search)[':product-text-link']['p']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiCatalogSystemPubProductsSearchProductTextLinkPQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createApiCatalogSystemPubProductsSearchSearch<
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
  args: () => InferRequestType<
    (typeof client.api.catalog_system.pub.products.search)[':search']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiCatalogSystemPubProductsSearchSearchQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createBuscaautocomplete<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buscaautocomplete.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.buscaautocomplete.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBuscaautocompleteQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
