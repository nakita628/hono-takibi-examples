import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
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

export function getApiCatalogSellerPortalBrandsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['catalog-seller-portal']['brands']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog-seller-portal/brands', keyArgs] as const
}

export function getApiCatalogSellerPortalBrandsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['catalog-seller-portal']['brands']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSellerPortalBrandsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['catalog-seller-portal'].brands.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['catalog-seller-portal']['brands']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['brands']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiCatalogSellerPortalBrandsQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['brands']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSellerPortalBrandsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSellerPortalBrandsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['catalog-seller-portal'].brands.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['catalog-seller-portal']['brands'][':brandId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog-seller-portal/brands/:brandId', keyArgs] as const
}

export function getApiCatalogSellerPortalBrandsBrandIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['catalog-seller-portal']['brands'][':brandId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSellerPortalBrandsBrandIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['catalog-seller-portal'].brands[':brandId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['catalog-seller-portal']['brands'][':brandId']['$get']>
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
                    (typeof client.api)['catalog-seller-portal']['brands'][':brandId']['$get']
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
                    (typeof client.api)['catalog-seller-portal']['brands'][':brandId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSellerPortalBrandsBrandIdQueryKey>
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
            ReturnType<(typeof client.api)['catalog-seller-portal']['brands'][':brandId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSellerPortalBrandsBrandIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSellerPortalBrandsBrandIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['catalog-seller-portal'].brands[':brandId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['catalog-seller-portal']['category-tree']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog-seller-portal/category-tree', keyArgs] as const
}

export function getApiCatalogSellerPortalCategoryTreeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['catalog-seller-portal']['category-tree']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSellerPortalCategoryTreeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['catalog-seller-portal']['category-tree'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['catalog-seller-portal']['category-tree']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['catalog-seller-portal']['category-tree']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSellerPortalCategoryTreeQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['category-tree']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSellerPortalCategoryTreeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSellerPortalCategoryTreeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['catalog-seller-portal']['category-tree'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api)['catalog-seller-portal']['category-tree']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['catalog-seller-portal']['category-tree']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)['catalog-seller-portal']['category-tree']['categories'][':categoryId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/catalog-seller-portal/category-tree/categories/:categoryId',
    keyArgs,
  ] as const
}

export function getApiCatalogSellerPortalCategoryTreeCategoriesCategoryIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)['catalog-seller-portal']['category-tree']['categories'][':categoryId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiCatalogSellerPortalCategoryTreeCategoriesCategoryIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['catalog-seller-portal']['category-tree'].categories[':categoryId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)['catalog-seller-portal']['category-tree']['categories'][':categoryId']['$get']
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
                    (typeof client.api)['catalog-seller-portal']['category-tree']['categories'][':categoryId']['$get']
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
                    (typeof client.api)['catalog-seller-portal']['category-tree']['categories'][':categoryId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSellerPortalCategoryTreeCategoriesCategoryIdQueryKey>
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
              (typeof client.api)['catalog-seller-portal']['category-tree']['categories'][':categoryId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSellerPortalCategoryTreeCategoriesCategoryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiCatalogSellerPortalCategoryTreeCategoriesCategoryIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api['catalog-seller-portal']['category-tree'].categories[':categoryId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['catalog-seller-portal']['products'][':param']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog-seller-portal/products/:param', keyArgs] as const
}

export function getApiCatalogSellerPortalProductsParamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['catalog-seller-portal']['products'][':param']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSellerPortalProductsParamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['catalog-seller-portal'].products[':param'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['catalog-seller-portal']['products'][':param']['$get']>
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
                    (typeof client.api)['catalog-seller-portal']['products'][':param']['$get']
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
                    (typeof client.api)['catalog-seller-portal']['products'][':param']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSellerPortalProductsParamQueryKey>
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
            ReturnType<(typeof client.api)['catalog-seller-portal']['products'][':param']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSellerPortalProductsParamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSellerPortalProductsParamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['catalog-seller-portal'].products[':param'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSellerPortalProductsProductIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['catalog-seller-portal']['products'][':productId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog-seller-portal/products/:productId', keyArgs] as const
}

export function getApiCatalogSellerPortalProductsProductIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['catalog-seller-portal']['products'][':productId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSellerPortalProductsProductIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['catalog-seller-portal'].products[':productId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['catalog-seller-portal']['products'][':productId']['$get']>
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
                    (typeof client.api)['catalog-seller-portal']['products'][':productId']['$get']
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
                    (typeof client.api)['catalog-seller-portal']['products'][':productId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSellerPortalProductsProductIdQueryKey>
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
              (typeof client.api)['catalog-seller-portal']['products'][':productId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSellerPortalProductsProductIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSellerPortalProductsProductIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['catalog-seller-portal'].products[':productId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)['catalog-seller-portal']['products'][':productId']['description']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog-seller-portal/products/:productId/description', keyArgs] as const
}

export function getApiCatalogSellerPortalProductsProductIdDescriptionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)['catalog-seller-portal']['products'][':productId']['description']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSellerPortalProductsProductIdDescriptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['catalog-seller-portal'].products[':productId'].description.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)['catalog-seller-portal']['products'][':productId']['description']['$get']
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
                    (typeof client.api)['catalog-seller-portal']['products'][':productId']['description']['$get']
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
                    (typeof client.api)['catalog-seller-portal']['products'][':productId']['description']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSellerPortalProductsProductIdDescriptionQueryKey>
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
              (typeof client.api)['catalog-seller-portal']['products'][':productId']['description']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSellerPortalProductsProductIdDescriptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSellerPortalProductsProductIdDescriptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['catalog-seller-portal'].products[':productId'].description.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['catalog-seller-portal']['skus']['_search']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog-seller-portal/skus/_search', keyArgs] as const
}

export function getApiCatalogSellerPortalSkusSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['catalog-seller-portal']['skus']['_search']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSellerPortalSkusSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['catalog-seller-portal'].skus._search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['catalog-seller-portal']['skus']['_search']['$get']>
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
                    (typeof client.api)['catalog-seller-portal']['skus']['_search']['$get']
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
                    (typeof client.api)['catalog-seller-portal']['skus']['_search']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSellerPortalSkusSearchQueryKey>
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
            ReturnType<(typeof client.api)['catalog-seller-portal']['skus']['_search']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSellerPortalSkusSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSellerPortalSkusSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['catalog-seller-portal'].skus._search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSellerPortalSkusIdsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['catalog-seller-portal']['skus']['ids']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog-seller-portal/skus/ids', keyArgs] as const
}

export function getApiCatalogSellerPortalSkusIdsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['catalog-seller-portal']['skus']['ids']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSellerPortalSkusIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['catalog-seller-portal'].skus.ids.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['catalog-seller-portal']['skus']['ids']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['catalog-seller-portal']['skus']['ids']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSellerPortalSkusIdsQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['catalog-seller-portal']['skus']['ids']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSellerPortalSkusIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSellerPortalSkusIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['catalog-seller-portal'].skus.ids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
