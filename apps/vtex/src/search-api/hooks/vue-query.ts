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

export function getApiKey() {
  return ['api'] as const
}

export function getBuscaautocompleteKey() {
  return ['buscaautocomplete'] as const
}

export function getApiCatalogSystemPubFacetsCategoryCategoryIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog_system.pub.facets.category)[':categoryId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pub/facets/category/:categoryId', keyArgs] as const
}

export function getApiCatalogSystemPubFacetsCategoryCategoryIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog_system.pub.facets.category)[':categoryId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPubFacetsCategoryCategoryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pub.facets.category[':categoryId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog_system.pub.facets.category)[':categoryId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiCatalogSystemPubFacetsCategoryCategoryIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSystemPubFacetsCategoryCategoryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pub.facets.category[':categoryId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubFacetsSearchTermQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog_system.pub.facets.search)[':term']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pub/facets/search/:term', keyArgs] as const
}

export function getApiCatalogSystemPubFacetsSearchTermQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog_system.pub.facets.search)[':term']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPubFacetsSearchTermQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pub.facets.search[':term'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog_system.pub.facets.search)[':term']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.catalog_system.pub.facets.search)[':term']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPubFacetsSearchTermQueryKey>
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
          Awaited<ReturnType<(typeof client.api.catalog_system.pub.facets.search)[':term']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPubFacetsSearchTermQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSystemPubFacetsSearchTermQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pub.facets.search[':term'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubProductsCrosssellingAccessoriesProductIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.products.crossselling.accessories)[':productId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/catalog_system/pub/products/crossselling/accessories/:productId',
    keyArgs,
  ] as const
}

export function getApiCatalogSystemPubProductsCrosssellingAccessoriesProductIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.products.crossselling.accessories)[':productId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiCatalogSystemPubProductsCrosssellingAccessoriesProductIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pub.products.crossselling.accessories[':productId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.products.crossselling.accessories)[':productId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiCatalogSystemPubProductsCrosssellingAccessoriesProductIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiCatalogSystemPubProductsCrosssellingAccessoriesProductIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pub.products.crossselling.accessories[':productId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubProductsCrosssellingShowtogetherProductIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.products.crossselling.showtogether)[':productId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/catalog_system/pub/products/crossselling/showtogether/:productId',
    keyArgs,
  ] as const
}

export function getApiCatalogSystemPubProductsCrosssellingShowtogetherProductIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.products.crossselling.showtogether)[':productId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiCatalogSystemPubProductsCrosssellingShowtogetherProductIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pub.products.crossselling.showtogether[':productId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.products.crossselling.showtogether)[':productId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiCatalogSystemPubProductsCrosssellingShowtogetherProductIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiCatalogSystemPubProductsCrosssellingShowtogetherProductIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pub.products.crossselling.showtogether[':productId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubProductsCrosssellingSimilarsProductIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.products.crossselling.similars)[':productId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/catalog_system/pub/products/crossselling/similars/:productId',
    keyArgs,
  ] as const
}

export function getApiCatalogSystemPubProductsCrosssellingSimilarsProductIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.products.crossselling.similars)[':productId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiCatalogSystemPubProductsCrosssellingSimilarsProductIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pub.products.crossselling.similars[':productId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.products.crossselling.similars)[':productId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiCatalogSystemPubProductsCrosssellingSimilarsProductIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiCatalogSystemPubProductsCrosssellingSimilarsProductIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pub.products.crossselling.similars[':productId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubProductsCrosssellingSuggestionsProductIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.products.crossselling.suggestions)[':productId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/catalog_system/pub/products/crossselling/suggestions/:productId',
    keyArgs,
  ] as const
}

export function getApiCatalogSystemPubProductsCrosssellingSuggestionsProductIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.products.crossselling.suggestions)[':productId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiCatalogSystemPubProductsCrosssellingSuggestionsProductIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pub.products.crossselling.suggestions[':productId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.products.crossselling.suggestions)[':productId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiCatalogSystemPubProductsCrosssellingSuggestionsProductIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiCatalogSystemPubProductsCrosssellingSuggestionsProductIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pub.products.crossselling.suggestions[':productId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubProductsCrosssellingWhoboughtalsoboughtProductIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.products.crossselling.whoboughtalsobought)[':productId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/catalog_system/pub/products/crossselling/whoboughtalsobought/:productId',
    keyArgs,
  ] as const
}

export function getApiCatalogSystemPubProductsCrosssellingWhoboughtalsoboughtProductIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.products.crossselling.whoboughtalsobought)[':productId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiCatalogSystemPubProductsCrosssellingWhoboughtalsoboughtProductIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pub.products.crossselling.whoboughtalsobought[':productId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.products.crossselling.whoboughtalsobought)[':productId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getApiCatalogSystemPubProductsCrosssellingWhoboughtalsoboughtProductIdQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiCatalogSystemPubProductsCrosssellingWhoboughtalsoboughtProductIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pub.products.crossselling.whoboughtalsobought[
            ':productId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubProductsCrosssellingWhosawalsoboughtProductIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.products.crossselling.whosawalsobought)[':productId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/catalog_system/pub/products/crossselling/whosawalsobought/:productId',
    keyArgs,
  ] as const
}

export function getApiCatalogSystemPubProductsCrosssellingWhosawalsoboughtProductIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.products.crossselling.whosawalsobought)[':productId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiCatalogSystemPubProductsCrosssellingWhosawalsoboughtProductIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pub.products.crossselling.whosawalsobought[':productId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.products.crossselling.whosawalsobought)[':productId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getApiCatalogSystemPubProductsCrosssellingWhosawalsoboughtProductIdQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiCatalogSystemPubProductsCrosssellingWhosawalsoboughtProductIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pub.products.crossselling.whosawalsobought[':productId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubProductsCrosssellingWhosawalsosawProductIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.products.crossselling.whosawalsosaw)[':productId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/catalog_system/pub/products/crossselling/whosawalsosaw/:productId',
    keyArgs,
  ] as const
}

export function getApiCatalogSystemPubProductsCrosssellingWhosawalsosawProductIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.products.crossselling.whosawalsosaw)[':productId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiCatalogSystemPubProductsCrosssellingWhosawalsosawProductIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pub.products.crossselling.whosawalsosaw[':productId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.products.crossselling.whosawalsosaw)[':productId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getApiCatalogSystemPubProductsCrosssellingWhosawalsosawProductIdQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiCatalogSystemPubProductsCrosssellingWhosawalsosawProductIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pub.products.crossselling.whosawalsosaw[':productId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubProductsOffersProductIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog_system.pub.products.offers)[':productId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pub/products/offers/:productId', keyArgs] as const
}

export function getApiCatalogSystemPubProductsOffersProductIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog_system.pub.products.offers)[':productId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPubProductsOffersProductIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pub.products.offers[':productId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog_system.pub.products.offers)[':productId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiCatalogSystemPubProductsOffersProductIdQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.catalog_system.pub.products.offers)[':productId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPubProductsOffersProductIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSystemPubProductsOffersProductIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pub.products.offers[':productId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubProductsOffersProductIdSkuSkuIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.products.offers)[':productId']['sku'][':skuId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pub/products/offers/:productId/sku/:skuId', keyArgs] as const
}

export function getApiCatalogSystemPubProductsOffersProductIdSkuSkuIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.products.offers)[':productId']['sku'][':skuId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPubProductsOffersProductIdSkuSkuIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pub.products.offers[':productId'].sku[':skuId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.products.offers)[':productId']['sku'][':skuId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiCatalogSystemPubProductsOffersProductIdSkuSkuIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSystemPubProductsOffersProductIdSkuSkuIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pub.products.offers[':productId'].sku[':skuId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubProductsSearchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.catalog_system.pub.products.search.$get>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pub/products/search', keyArgs] as const
}

export function getApiCatalogSystemPubProductsSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.catalog_system.pub.products.search.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPubProductsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pub.products.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.catalog_system.pub.products.search.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.catalog_system.pub.products.search.$get>>
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPubProductsSearchQueryKey>
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
          Awaited<ReturnType<typeof client.api.catalog_system.pub.products.search.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPubProductsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSystemPubProductsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pub.products.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubProductsSearchProductTextLinkPQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.products.search)[':product-text-link']['p']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pub/products/search/:product-text-link/p', keyArgs] as const
}

export function getApiCatalogSystemPubProductsSearchProductTextLinkPQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.products.search)[':product-text-link']['p']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPubProductsSearchProductTextLinkPQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pub.products.search[':product-text-link'].p.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.products.search)[':product-text-link']['p']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiCatalogSystemPubProductsSearchProductTextLinkPQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSystemPubProductsSearchProductTextLinkPQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pub.products.search[':product-text-link'].p.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubProductsSearchSearchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog_system.pub.products.search)[':search']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pub/products/search/:search', keyArgs] as const
}

export function getApiCatalogSystemPubProductsSearchSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog_system.pub.products.search)[':search']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPubProductsSearchSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pub.products.search[':search'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog_system.pub.products.search)[':search']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiCatalogSystemPubProductsSearchSearchQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.catalog_system.pub.products.search)[':search']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPubProductsSearchSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSystemPubProductsSearchSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pub.products.search[':search'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBuscaautocompleteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.buscaautocomplete.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['buscaautocomplete', '/buscaautocomplete', keyArgs] as const
}

export function getBuscaautocompleteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.buscaautocomplete.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBuscaautocompleteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.buscaautocomplete.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBuscaautocomplete<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buscaautocomplete.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.buscaautocomplete.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.buscaautocomplete.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.buscaautocomplete.$get>>>
            >
          >,
          ReturnType<typeof getBuscaautocompleteQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buscaautocomplete.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBuscaautocompleteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBuscaautocompleteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.buscaautocomplete.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
