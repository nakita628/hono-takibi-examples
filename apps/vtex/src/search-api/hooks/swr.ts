import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getBuscaautocompleteKey() {
  return ['buscaautocomplete'] as const
}

export function getGetApiCatalogSystemPubFacetsCategoryCategoryIdKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.facets.category)[':categoryId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pub/facets/category/:categoryId', keyArgs] as const
}

export function useGetApiCatalogSystemPubFacetsCategoryCategoryId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.facets.category)[':categoryId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubFacetsCategoryCategoryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog_system.pub.facets.category[':categoryId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPubFacetsCategoryCategoryId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.facets.category)[':categoryId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubFacetsCategoryCategoryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog_system.pub.facets.category[':categoryId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPubFacetsSearchTermKey(
  args: InferRequestType<(typeof client.api.catalog_system.pub.facets.search)[':term']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pub/facets/search/:term', keyArgs] as const
}

export function useGetApiCatalogSystemPubFacetsSearchTerm<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog_system.pub.facets.search)[':term']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog_system.pub.facets.search)[':term']['$get']>
            >
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
        ? getGetApiCatalogSystemPubFacetsSearchTermKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog_system.pub.facets.search)[':term']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog_system.pub.facets.search[':term'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPubFacetsSearchTerm<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog_system.pub.facets.search)[':term']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog_system.pub.facets.search)[':term']['$get']>
            >
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
        ? getGetApiCatalogSystemPubFacetsSearchTermKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog_system.pub.facets.search)[':term']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog_system.pub.facets.search[':term'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPubProductsCrosssellingAccessoriesProductIdKey(
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

export function useGetApiCatalogSystemPubProductsCrosssellingAccessoriesProductId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.accessories)[':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubProductsCrosssellingAccessoriesProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog_system.pub.products.crossselling.accessories[':productId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPubProductsCrosssellingAccessoriesProductId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.accessories)[':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubProductsCrosssellingAccessoriesProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog_system.pub.products.crossselling.accessories[':productId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPubProductsCrosssellingShowtogetherProductIdKey(
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

export function useGetApiCatalogSystemPubProductsCrosssellingShowtogetherProductId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.showtogether)[':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubProductsCrosssellingShowtogetherProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog_system.pub.products.crossselling.showtogether[':productId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPubProductsCrosssellingShowtogetherProductId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.showtogether)[':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubProductsCrosssellingShowtogetherProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog_system.pub.products.crossselling.showtogether[':productId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPubProductsCrosssellingSimilarsProductIdKey(
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

export function useGetApiCatalogSystemPubProductsCrosssellingSimilarsProductId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.similars)[':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubProductsCrosssellingSimilarsProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog_system.pub.products.crossselling.similars[':productId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPubProductsCrosssellingSimilarsProductId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.similars)[':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubProductsCrosssellingSimilarsProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog_system.pub.products.crossselling.similars[':productId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPubProductsCrosssellingSuggestionsProductIdKey(
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

export function useGetApiCatalogSystemPubProductsCrosssellingSuggestionsProductId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.suggestions)[':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubProductsCrosssellingSuggestionsProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog_system.pub.products.crossselling.suggestions[':productId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPubProductsCrosssellingSuggestionsProductId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.suggestions)[':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubProductsCrosssellingSuggestionsProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog_system.pub.products.crossselling.suggestions[':productId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPubProductsCrosssellingWhoboughtalsoboughtProductIdKey(
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

export function useGetApiCatalogSystemPubProductsCrosssellingWhoboughtalsoboughtProductId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.whoboughtalsobought)[':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubProductsCrosssellingWhoboughtalsoboughtProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog_system.pub.products.crossselling.whoboughtalsobought[
            ':productId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPubProductsCrosssellingWhoboughtalsoboughtProductId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.whoboughtalsobought)[':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubProductsCrosssellingWhoboughtalsoboughtProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog_system.pub.products.crossselling.whoboughtalsobought[
            ':productId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPubProductsCrosssellingWhosawalsoboughtProductIdKey(
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

export function useGetApiCatalogSystemPubProductsCrosssellingWhosawalsoboughtProductId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.whosawalsobought)[':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubProductsCrosssellingWhosawalsoboughtProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog_system.pub.products.crossselling.whosawalsobought[':productId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPubProductsCrosssellingWhosawalsoboughtProductId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.whosawalsobought)[':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubProductsCrosssellingWhosawalsoboughtProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog_system.pub.products.crossselling.whosawalsobought[':productId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPubProductsCrosssellingWhosawalsosawProductIdKey(
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

export function useGetApiCatalogSystemPubProductsCrosssellingWhosawalsosawProductId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.whosawalsosaw)[':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubProductsCrosssellingWhosawalsosawProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog_system.pub.products.crossselling.whosawalsosaw[':productId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPubProductsCrosssellingWhosawalsosawProductId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.whosawalsosaw)[':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubProductsCrosssellingWhosawalsosawProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog_system.pub.products.crossselling.whosawalsosaw[':productId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPubProductsOffersProductIdKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.offers)[':productId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pub/products/offers/:productId', keyArgs] as const
}

export function useGetApiCatalogSystemPubProductsOffersProductId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.offers)[':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubProductsOffersProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog_system.pub.products.offers[':productId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPubProductsOffersProductId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.offers)[':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubProductsOffersProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog_system.pub.products.offers[':productId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPubProductsOffersProductIdSkuSkuIdKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.offers)[':productId']['sku'][':skuId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pub/products/offers/:productId/sku/:skuId', keyArgs] as const
}

export function useGetApiCatalogSystemPubProductsOffersProductIdSkuSkuId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.offers)[':productId']['sku'][':skuId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubProductsOffersProductIdSkuSkuIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog_system.pub.products.offers[':productId'].sku[':skuId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPubProductsOffersProductIdSkuSkuId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.offers)[':productId']['sku'][':skuId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubProductsOffersProductIdSkuSkuIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog_system.pub.products.offers[':productId'].sku[':skuId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPubProductsSearchKey(
  args: InferRequestType<typeof client.api.catalog_system.pub.products.search.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pub/products/search', keyArgs] as const
}

export function useGetApiCatalogSystemPubProductsSearch<TError = unknown>(
  args: InferRequestType<typeof client.api.catalog_system.pub.products.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog_system.pub.products.search.$get>>
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
        ? getGetApiCatalogSystemPubProductsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog_system.pub.products.search.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog_system.pub.products.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPubProductsSearch<TError = unknown>(
  args: InferRequestType<typeof client.api.catalog_system.pub.products.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog_system.pub.products.search.$get>>
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
        ? getGetApiCatalogSystemPubProductsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog_system.pub.products.search.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog_system.pub.products.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPubProductsSearchProductTextLinkPKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.search)[':product-text-link']['p']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pub/products/search/:product-text-link/p', keyArgs] as const
}

export function useGetApiCatalogSystemPubProductsSearchProductTextLinkP<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.search)[':product-text-link']['p']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubProductsSearchProductTextLinkPKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog_system.pub.products.search[':product-text-link'].p.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPubProductsSearchProductTextLinkP<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.search)[':product-text-link']['p']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubProductsSearchProductTextLinkPKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog_system.pub.products.search[':product-text-link'].p.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPubProductsSearchSearchKey(
  args: InferRequestType<(typeof client.api.catalog_system.pub.products.search)[':search']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pub/products/search/:search', keyArgs] as const
}

export function useGetApiCatalogSystemPubProductsSearchSearch<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog_system.pub.products.search)[':search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog_system.pub.products.search)[':search']['$get']>
            >
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
        ? getGetApiCatalogSystemPubProductsSearchSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog_system.pub.products.search)[':search']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog_system.pub.products.search[':search'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPubProductsSearchSearch<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog_system.pub.products.search)[':search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog_system.pub.products.search)[':search']['$get']>
            >
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
        ? getGetApiCatalogSystemPubProductsSearchSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog_system.pub.products.search)[':search']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog_system.pub.products.search[':search'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBuscaautocompleteKey(
  args: InferRequestType<typeof client.buscaautocomplete.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['buscaautocomplete', '/buscaautocomplete', keyArgs] as const
}

export function useGetBuscaautocomplete<TError = unknown>(
  args: InferRequestType<typeof client.buscaautocomplete.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buscaautocomplete.$get>>>>
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
        ? getGetBuscaautocompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buscaautocomplete.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.buscaautocomplete.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBuscaautocomplete<TError = unknown>(
  args: InferRequestType<typeof client.buscaautocomplete.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buscaautocomplete.$get>>>>
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
        ? getGetBuscaautocompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buscaautocomplete.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.buscaautocomplete.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
