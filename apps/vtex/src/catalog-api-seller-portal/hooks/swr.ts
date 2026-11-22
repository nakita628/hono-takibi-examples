import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getGetApiCatalogSellerPortalBrandsKey(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['brands']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog-seller-portal/brands', keyArgs] as const
}

export function useGetApiCatalogSellerPortalBrands<TError = unknown>(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['brands']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['brands']['$get']>>
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
        ? getGetApiCatalogSellerPortalBrandsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['brands']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api['catalog-seller-portal'].brands.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSellerPortalBrands<TError = unknown>(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['brands']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['brands']['$get']>>
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
        ? getGetApiCatalogSellerPortalBrandsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['brands']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api['catalog-seller-portal'].brands.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiCatalogSellerPortalBrandsKey() {
  return ['api', '/api/catalog-seller-portal/brands', 'POST'] as const
}

export function usePostApiCatalogSellerPortalBrands<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['brands']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['catalog-seller-portal']['brands']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogSellerPortalBrandsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api)['catalog-seller-portal']['brands']['$post']>
        },
      ) => parseResponse(client.api['catalog-seller-portal'].brands.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogSellerPortalBrandsBrandIdKey(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['brands'][':brandId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog-seller-portal/brands/:brandId', keyArgs] as const
}

export function useGetApiCatalogSellerPortalBrandsBrandId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['brands'][':brandId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['catalog-seller-portal']['brands'][':brandId']['$get']>
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
        ? getGetApiCatalogSellerPortalBrandsBrandIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['catalog-seller-portal']['brands'][':brandId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api['catalog-seller-portal'].brands[':brandId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSellerPortalBrandsBrandId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['brands'][':brandId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['catalog-seller-portal']['brands'][':brandId']['$get']>
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
        ? getGetApiCatalogSellerPortalBrandsBrandIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['catalog-seller-portal']['brands'][':brandId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api['catalog-seller-portal'].brands[':brandId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiCatalogSellerPortalBrandsBrandIdKey() {
  return ['api', '/api/catalog-seller-portal/brands/:brandId', 'PUT'] as const
}

export function usePutApiCatalogSellerPortalBrandsBrandId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['catalog-seller-portal']['brands'][':brandId']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api)['catalog-seller-portal']['brands'][':brandId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCatalogSellerPortalBrandsBrandIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api)['catalog-seller-portal']['brands'][':brandId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api['catalog-seller-portal'].brands[':brandId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogSellerPortalCategoryTreeKey(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['category-tree']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog-seller-portal/category-tree', keyArgs] as const
}

export function useGetApiCatalogSellerPortalCategoryTree<TError = unknown>(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['category-tree']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['catalog-seller-portal']['category-tree']['$get']>
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
        ? getGetApiCatalogSellerPortalCategoryTreeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['catalog-seller-portal']['category-tree']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api['catalog-seller-portal']['category-tree'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSellerPortalCategoryTree<TError = unknown>(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['category-tree']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['catalog-seller-portal']['category-tree']['$get']>
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
        ? getGetApiCatalogSellerPortalCategoryTreeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['catalog-seller-portal']['category-tree']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api['catalog-seller-portal']['category-tree'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiCatalogSellerPortalCategoryTreeKey() {
  return ['api', '/api/catalog-seller-portal/category-tree', 'PUT'] as const
}

export function usePutApiCatalogSellerPortalCategoryTree<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['catalog-seller-portal']['category-tree']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api)['catalog-seller-portal']['category-tree']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCatalogSellerPortalCategoryTreeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api)['catalog-seller-portal']['category-tree']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api['catalog-seller-portal']['category-tree'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCatalogSellerPortalCategoryTreeCategoriesKey() {
  return ['api', '/api/catalog-seller-portal/category-tree/categories', 'POST'] as const
}

export function usePostApiCatalogSellerPortalCategoryTreeCategories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['catalog-seller-portal']['category-tree']['categories']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api)['catalog-seller-portal']['category-tree']['categories']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogSellerPortalCategoryTreeCategoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api)['catalog-seller-portal']['category-tree']['categories']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api['catalog-seller-portal']['category-tree'].categories.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogSellerPortalCategoryTreeCategoriesCategoryIdKey(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['category-tree']['categories'][':categoryId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/catalog-seller-portal/category-tree/categories/:categoryId',
    keyArgs,
  ] as const
}

export function useGetApiCatalogSellerPortalCategoryTreeCategoriesCategoryId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['category-tree']['categories'][':categoryId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['catalog-seller-portal']['category-tree']['categories'][':categoryId']['$get']
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
        ? getGetApiCatalogSellerPortalCategoryTreeCategoriesCategoryIdKey(args)
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
                (typeof client.api)['catalog-seller-portal']['category-tree']['categories'][':categoryId']['$get']
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
          client.api['catalog-seller-portal']['category-tree'].categories[':categoryId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSellerPortalCategoryTreeCategoriesCategoryId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['category-tree']['categories'][':categoryId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['catalog-seller-portal']['category-tree']['categories'][':categoryId']['$get']
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
        ? getGetApiCatalogSellerPortalCategoryTreeCategoriesCategoryIdKey(args)
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
                (typeof client.api)['catalog-seller-portal']['category-tree']['categories'][':categoryId']['$get']
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
          client.api['catalog-seller-portal']['category-tree'].categories[':categoryId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiCatalogSellerPortalProductsKey() {
  return ['api', '/api/catalog-seller-portal/products', 'POST'] as const
}

export function usePostApiCatalogSellerPortalProducts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['products']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api)['catalog-seller-portal']['products']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogSellerPortalProductsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api)['catalog-seller-portal']['products']['$post']>
        },
      ) => parseResponse(client.api['catalog-seller-portal'].products.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogSellerPortalProductsParamKey(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['products'][':param']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog-seller-portal/products/:param', keyArgs] as const
}

export function useGetApiCatalogSellerPortalProductsParam<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['products'][':param']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['catalog-seller-portal']['products'][':param']['$get']>
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
        ? getGetApiCatalogSellerPortalProductsParamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['catalog-seller-portal']['products'][':param']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api['catalog-seller-portal'].products[':param'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSellerPortalProductsParam<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['products'][':param']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['catalog-seller-portal']['products'][':param']['$get']>
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
        ? getGetApiCatalogSellerPortalProductsParamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['catalog-seller-portal']['products'][':param']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api['catalog-seller-portal'].products[':param'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSellerPortalProductsProductIdKey(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['products'][':productId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog-seller-portal/products/:productId', keyArgs] as const
}

export function useGetApiCatalogSellerPortalProductsProductId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['products'][':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['catalog-seller-portal']['products'][':productId']['$get']
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
        ? getGetApiCatalogSellerPortalProductsProductIdKey(args)
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
                (typeof client.api)['catalog-seller-portal']['products'][':productId']['$get']
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
          client.api['catalog-seller-portal'].products[':productId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSellerPortalProductsProductId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['products'][':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['catalog-seller-portal']['products'][':productId']['$get']
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
        ? getGetApiCatalogSellerPortalProductsProductIdKey(args)
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
                (typeof client.api)['catalog-seller-portal']['products'][':productId']['$get']
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
          client.api['catalog-seller-portal'].products[':productId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiCatalogSellerPortalProductsProductIdKey() {
  return ['api', '/api/catalog-seller-portal/products/:productId', 'PUT'] as const
}

export function usePutApiCatalogSellerPortalProductsProductId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['catalog-seller-portal']['products'][':productId']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api)['catalog-seller-portal']['products'][':productId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCatalogSellerPortalProductsProductIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api)['catalog-seller-portal']['products'][':productId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api['catalog-seller-portal'].products[':productId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogSellerPortalProductsProductIdDescriptionKey(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['products'][':productId']['description']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog-seller-portal/products/:productId/description', keyArgs] as const
}

export function useGetApiCatalogSellerPortalProductsProductIdDescription<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['products'][':productId']['description']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['catalog-seller-portal']['products'][':productId']['description']['$get']
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
        ? getGetApiCatalogSellerPortalProductsProductIdDescriptionKey(args)
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
                (typeof client.api)['catalog-seller-portal']['products'][':productId']['description']['$get']
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
          client.api['catalog-seller-portal'].products[':productId'].description.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSellerPortalProductsProductIdDescription<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['products'][':productId']['description']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['catalog-seller-portal']['products'][':productId']['description']['$get']
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
        ? getGetApiCatalogSellerPortalProductsProductIdDescriptionKey(args)
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
                (typeof client.api)['catalog-seller-portal']['products'][':productId']['description']['$get']
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
          client.api['catalog-seller-portal'].products[':productId'].description.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiCatalogSellerPortalProductsProductIdDescriptionKey() {
  return ['api', '/api/catalog-seller-portal/products/:productId/description', 'PUT'] as const
}

export function usePutApiCatalogSellerPortalProductsProductIdDescription<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['catalog-seller-portal']['products'][':productId']['description']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api)['catalog-seller-portal']['products'][':productId']['description']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCatalogSellerPortalProductsProductIdDescriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api)['catalog-seller-portal']['products'][':productId']['description']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api['catalog-seller-portal'].products[':productId'].description.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogSellerPortalSkusSearchKey(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['skus']['_search']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog-seller-portal/skus/_search', keyArgs] as const
}

export function useGetApiCatalogSellerPortalSkusSearch<TError = unknown>(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['skus']['_search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['catalog-seller-portal']['skus']['_search']['$get']>
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
        ? getGetApiCatalogSellerPortalSkusSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['catalog-seller-portal']['skus']['_search']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api['catalog-seller-portal'].skus._search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSellerPortalSkusSearch<TError = unknown>(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['skus']['_search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['catalog-seller-portal']['skus']['_search']['$get']>
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
        ? getGetApiCatalogSellerPortalSkusSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['catalog-seller-portal']['skus']['_search']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api['catalog-seller-portal'].skus._search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSellerPortalSkusIdsKey(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['skus']['ids']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog-seller-portal/skus/ids', keyArgs] as const
}

export function useGetApiCatalogSellerPortalSkusIds<TError = unknown>(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['skus']['ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['skus']['ids']['$get']>>
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
        ? getGetApiCatalogSellerPortalSkusIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['skus']['ids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api['catalog-seller-portal'].skus.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSellerPortalSkusIds<TError = unknown>(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['skus']['ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['skus']['ids']['$get']>>
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
        ? getGetApiCatalogSellerPortalSkusIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['skus']['ids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api['catalog-seller-portal'].skus.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
