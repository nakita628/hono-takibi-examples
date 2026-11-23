import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiCatalogSellerPortalBrandsQueryKey(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['brands']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog-seller-portal/brands', keyArgs] as const
}

export function getApiCatalogSellerPortalBrandsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['brands']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['brands']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['brands']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSellerPortalBrandsQueryKey>
  >({
    queryKey: getApiCatalogSellerPortalBrandsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['catalog-seller-portal'].brands.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSellerPortalBrands<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['brands']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['brands']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['brands']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSellerPortalBrandsQueryKey>
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
      ...getApiCatalogSellerPortalBrandsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSellerPortalBrands<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['brands']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['brands']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['brands']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSellerPortalBrandsQueryKey>
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
      ...getApiCatalogSellerPortalBrandsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiCatalogSellerPortalBrandsMutationKey() {
  return ['api', '/api/catalog-seller-portal/brands', 'POST'] as const
}

export function getPostApiCatalogSellerPortalBrandsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['brands']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['catalog-seller-portal']['brands']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogSellerPortalBrandsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['catalog-seller-portal']['brands']['$post']>,
    ) {
      return parseResponse(client.api['catalog-seller-portal'].brands.$post(args, options))
    },
  })
}

export function usePostApiCatalogSellerPortalBrands<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['brands']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['catalog-seller-portal']['brands']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCatalogSellerPortalBrandsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiCatalogSellerPortalBrandsBrandIdQueryKey(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['brands'][':brandId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog-seller-portal/brands/:brandId', keyArgs] as const
}

export function getApiCatalogSellerPortalBrandsBrandIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)['catalog-seller-portal']['brands'][':brandId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['brands'][':brandId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['catalog-seller-portal']['brands'][':brandId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSellerPortalBrandsBrandIdQueryKey>
  >({
    queryKey: getApiCatalogSellerPortalBrandsBrandIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['catalog-seller-portal'].brands[':brandId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSellerPortalBrandsBrandId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)['catalog-seller-portal']['brands'][':brandId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['brands'][':brandId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api)['catalog-seller-portal']['brands'][':brandId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSellerPortalBrandsBrandIdQueryKey>
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
      ...getApiCatalogSellerPortalBrandsBrandIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSellerPortalBrandsBrandId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)['catalog-seller-portal']['brands'][':brandId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['brands'][':brandId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api)['catalog-seller-portal']['brands'][':brandId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSellerPortalBrandsBrandIdQueryKey>
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
      ...getApiCatalogSellerPortalBrandsBrandIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiCatalogSellerPortalBrandsBrandIdMutationKey() {
  return ['api', '/api/catalog-seller-portal/brands/:brandId', 'PUT'] as const
}

export function getPutApiCatalogSellerPortalBrandsBrandIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api)['catalog-seller-portal']['brands'][':brandId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiCatalogSellerPortalBrandsBrandIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['catalog-seller-portal']['brands'][':brandId']['$put']
      >,
    ) {
      return parseResponse(
        client.api['catalog-seller-portal'].brands[':brandId'].$put(args, options),
      )
    },
  })
}

export function usePutApiCatalogSellerPortalBrandsBrandId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api)['catalog-seller-portal']['brands'][':brandId']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api)['catalog-seller-portal']['brands'][':brandId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiCatalogSellerPortalBrandsBrandIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiCatalogSellerPortalCategoryTreeQueryKey(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['category-tree']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog-seller-portal/category-tree', keyArgs] as const
}

export function getApiCatalogSellerPortalCategoryTreeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['category-tree']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['category-tree']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['category-tree']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSellerPortalCategoryTreeQueryKey>
  >({
    queryKey: getApiCatalogSellerPortalCategoryTreeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['catalog-seller-portal']['category-tree'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSellerPortalCategoryTree<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['category-tree']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['category-tree']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['catalog-seller-portal']['category-tree']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSellerPortalCategoryTreeQueryKey>
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
      ...getApiCatalogSellerPortalCategoryTreeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSellerPortalCategoryTree<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['category-tree']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['category-tree']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['catalog-seller-portal']['category-tree']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSellerPortalCategoryTreeQueryKey>
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
      ...getApiCatalogSellerPortalCategoryTreeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiCatalogSellerPortalCategoryTreeMutationKey() {
  return ['api', '/api/catalog-seller-portal/category-tree', 'PUT'] as const
}

export function getPutApiCatalogSellerPortalCategoryTreeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api)['catalog-seller-portal']['category-tree']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiCatalogSellerPortalCategoryTreeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['catalog-seller-portal']['category-tree']['$put']>,
    ) {
      return parseResponse(client.api['catalog-seller-portal']['category-tree'].$put(args, options))
    },
  })
}

export function usePutApiCatalogSellerPortalCategoryTree<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client.api)['catalog-seller-portal']['category-tree']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiCatalogSellerPortalCategoryTreeMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiCatalogSellerPortalCategoryTreeCategoriesMutationKey() {
  return ['api', '/api/catalog-seller-portal/category-tree/categories', 'POST'] as const
}

export function getPostApiCatalogSellerPortalCategoryTreeCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api)['catalog-seller-portal']['category-tree']['categories']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogSellerPortalCategoryTreeCategoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['catalog-seller-portal']['category-tree']['categories']['$post']
      >,
    ) {
      return parseResponse(
        client.api['catalog-seller-portal']['category-tree'].categories.$post(args, options),
      )
    },
  })
}

export function usePostApiCatalogSellerPortalCategoryTreeCategories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.api)['catalog-seller-portal']['category-tree']['categories']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCatalogSellerPortalCategoryTreeCategoriesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiCatalogSellerPortalCategoryTreeCategoriesCategoryIdQueryKey(
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

export function getApiCatalogSellerPortalCategoryTreeCategoriesCategoryIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['category-tree']['categories'][':categoryId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiCatalogSellerPortalCategoryTreeCategoriesCategoryIdQueryKey>
  >({
    queryKey: getApiCatalogSellerPortalCategoryTreeCategoriesCategoryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['catalog-seller-portal']['category-tree'].categories[':categoryId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSellerPortalCategoryTreeCategoriesCategoryId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['category-tree']['categories'][':categoryId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiCatalogSellerPortalCategoryTreeCategoriesCategoryIdQueryKey>
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
      ...getApiCatalogSellerPortalCategoryTreeCategoriesCategoryIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSellerPortalCategoryTreeCategoriesCategoryId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['category-tree']['categories'][':categoryId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiCatalogSellerPortalCategoryTreeCategoriesCategoryIdQueryKey>
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
      ...getApiCatalogSellerPortalCategoryTreeCategoriesCategoryIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiCatalogSellerPortalProductsMutationKey() {
  return ['api', '/api/catalog-seller-portal/products', 'POST'] as const
}

export function getPostApiCatalogSellerPortalProductsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['products']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['catalog-seller-portal']['products']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogSellerPortalProductsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['catalog-seller-portal']['products']['$post']>,
    ) {
      return parseResponse(client.api['catalog-seller-portal'].products.$post(args, options))
    },
  })
}

export function usePostApiCatalogSellerPortalProducts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['catalog-seller-portal']['products']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api)['catalog-seller-portal']['products']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCatalogSellerPortalProductsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiCatalogSellerPortalProductsParamQueryKey(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['products'][':param']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog-seller-portal/products/:param', keyArgs] as const
}

export function getApiCatalogSellerPortalProductsParamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)['catalog-seller-portal']['products'][':param']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['products'][':param']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['catalog-seller-portal']['products'][':param']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSellerPortalProductsParamQueryKey>
  >({
    queryKey: getApiCatalogSellerPortalProductsParamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['catalog-seller-portal'].products[':param'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSellerPortalProductsParam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)['catalog-seller-portal']['products'][':param']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['products'][':param']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api)['catalog-seller-portal']['products'][':param']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSellerPortalProductsParamQueryKey>
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
      ...getApiCatalogSellerPortalProductsParamQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSellerPortalProductsParam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)['catalog-seller-portal']['products'][':param']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['products'][':param']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api)['catalog-seller-portal']['products'][':param']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSellerPortalProductsParamQueryKey>
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
      ...getApiCatalogSellerPortalProductsParamQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSellerPortalProductsProductIdQueryKey(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['products'][':productId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog-seller-portal/products/:productId', keyArgs] as const
}

export function getApiCatalogSellerPortalProductsProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)['catalog-seller-portal']['products'][':productId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['products'][':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiCatalogSellerPortalProductsProductIdQueryKey>
  >({
    queryKey: getApiCatalogSellerPortalProductsProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['catalog-seller-portal'].products[':productId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSellerPortalProductsProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)['catalog-seller-portal']['products'][':productId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['products'][':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiCatalogSellerPortalProductsProductIdQueryKey>
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
      ...getApiCatalogSellerPortalProductsProductIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSellerPortalProductsProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)['catalog-seller-portal']['products'][':productId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['products'][':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiCatalogSellerPortalProductsProductIdQueryKey>
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
      ...getApiCatalogSellerPortalProductsProductIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiCatalogSellerPortalProductsProductIdMutationKey() {
  return ['api', '/api/catalog-seller-portal/products/:productId', 'PUT'] as const
}

export function getPutApiCatalogSellerPortalProductsProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api)['catalog-seller-portal']['products'][':productId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiCatalogSellerPortalProductsProductIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['catalog-seller-portal']['products'][':productId']['$put']
      >,
    ) {
      return parseResponse(
        client.api['catalog-seller-portal'].products[':productId'].$put(args, options),
      )
    },
  })
}

export function usePutApiCatalogSellerPortalProductsProductId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.api)['catalog-seller-portal']['products'][':productId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiCatalogSellerPortalProductsProductIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiCatalogSellerPortalProductsProductIdDescriptionQueryKey(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['products'][':productId']['description']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog-seller-portal/products/:productId/description', keyArgs] as const
}

export function getApiCatalogSellerPortalProductsProductIdDescriptionQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['products'][':productId']['description']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiCatalogSellerPortalProductsProductIdDescriptionQueryKey>
  >({
    queryKey: getApiCatalogSellerPortalProductsProductIdDescriptionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['catalog-seller-portal'].products[':productId'].description.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSellerPortalProductsProductIdDescription<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['products'][':productId']['description']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiCatalogSellerPortalProductsProductIdDescriptionQueryKey>
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
      ...getApiCatalogSellerPortalProductsProductIdDescriptionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSellerPortalProductsProductIdDescription<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['products'][':productId']['description']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiCatalogSellerPortalProductsProductIdDescriptionQueryKey>
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
      ...getApiCatalogSellerPortalProductsProductIdDescriptionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiCatalogSellerPortalProductsProductIdDescriptionMutationKey() {
  return ['api', '/api/catalog-seller-portal/products/:productId/description', 'PUT'] as const
}

export function getPutApiCatalogSellerPortalProductsProductIdDescriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api)['catalog-seller-portal']['products'][':productId']['description']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiCatalogSellerPortalProductsProductIdDescriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['catalog-seller-portal']['products'][':productId']['description']['$put']
      >,
    ) {
      return parseResponse(
        client.api['catalog-seller-portal'].products[':productId'].description.$put(args, options),
      )
    },
  })
}

export function usePutApiCatalogSellerPortalProductsProductIdDescription<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.api)['catalog-seller-portal']['products'][':productId']['description']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiCatalogSellerPortalProductsProductIdDescriptionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiCatalogSellerPortalSkusSearchQueryKey(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['skus']['_search']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog-seller-portal/skus/_search', keyArgs] as const
}

export function getApiCatalogSellerPortalSkusSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['skus']['_search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['skus']['_search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['catalog-seller-portal']['skus']['_search']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSellerPortalSkusSearchQueryKey>
  >({
    queryKey: getApiCatalogSellerPortalSkusSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['catalog-seller-portal'].skus._search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSellerPortalSkusSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['skus']['_search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['skus']['_search']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['catalog-seller-portal']['skus']['_search']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSellerPortalSkusSearchQueryKey>
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
      ...getApiCatalogSellerPortalSkusSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSellerPortalSkusSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['skus']['_search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['skus']['_search']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['catalog-seller-portal']['skus']['_search']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSellerPortalSkusSearchQueryKey>
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
      ...getApiCatalogSellerPortalSkusSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSellerPortalSkusIdsQueryKey(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['skus']['ids']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog-seller-portal/skus/ids', keyArgs] as const
}

export function getApiCatalogSellerPortalSkusIdsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['skus']['ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['skus']['ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['skus']['ids']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSellerPortalSkusIdsQueryKey>
  >({
    queryKey: getApiCatalogSellerPortalSkusIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['catalog-seller-portal'].skus.ids.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSellerPortalSkusIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['skus']['ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['skus']['ids']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['catalog-seller-portal']['skus']['ids']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSellerPortalSkusIdsQueryKey>
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
      ...getApiCatalogSellerPortalSkusIdsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSellerPortalSkusIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['skus']['ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['skus']['ids']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['catalog-seller-portal']['skus']['ids']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSellerPortalSkusIdsQueryKey>
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
      ...getApiCatalogSellerPortalSkusIdsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
