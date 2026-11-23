import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCatalogKey() {
  return ['catalog'] as const
}

export function getSkuBindingKey() {
  return ['sku-binding'] as const
}

export function getCatalogPvtSkusellersSkuIdQueryKey(
  args: InferRequestType<(typeof client.catalog.pvt.skusellers)[':skuId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['catalog', '/catalog/pvt/skusellers/:skuId', keyArgs] as const
}

export function getCatalogPvtSkusellersSkuIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.catalog.pvt.skusellers)[':skuId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.catalog.pvt.skusellers)[':skuId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.catalog.pvt.skusellers)[':skuId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogPvtSkusellersSkuIdQueryKey>
  >({
    queryKey: getCatalogPvtSkusellersSkuIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catalog.pvt.skusellers[':skuId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCatalogPvtSkusellersSkuId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.catalog.pvt.skusellers)[':skuId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.catalog.pvt.skusellers)[':skuId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.catalog.pvt.skusellers)[':skuId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCatalogPvtSkusellersSkuIdQueryKey>
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
      ...getCatalogPvtSkusellersSkuIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCatalogPvtSkusellersSkuId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.catalog.pvt.skusellers)[':skuId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.catalog.pvt.skusellers)[':skuId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.catalog.pvt.skusellers)[':skuId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCatalogPvtSkusellersSkuIdQueryKey>
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
      ...getCatalogPvtSkusellersSkuIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSkuBindingPvtSkusellerActivateSellerIdSkuSellerIdMutationKey() {
  return [
    'sku-binding',
    '/sku-binding/pvt/skuseller/activate/:sellerId/:skuSellerId',
    'POST',
  ] as const
}

export function getPostSkuBindingPvtSkusellerActivateSellerIdSkuSellerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['sku-binding']['pvt']['skuseller']['activate'][':sellerId'][':skuSellerId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['sku-binding']['pvt']['skuseller']['activate'][':sellerId'][':skuSellerId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSkuBindingPvtSkusellerActivateSellerIdSkuSellerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sku-binding']['pvt']['skuseller']['activate'][':sellerId'][':skuSellerId']['$post']
      >,
    ) {
      return parseResponse(
        client['sku-binding'].pvt.skuseller.activate[':sellerId'][':skuSellerId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSkuBindingPvtSkusellerActivateSellerIdSkuSellerId<
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
                  (typeof client)['sku-binding']['pvt']['skuseller']['activate'][':sellerId'][':skuSellerId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['sku-binding']['pvt']['skuseller']['activate'][':sellerId'][':skuSellerId']['$post']
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
  const mutationDefaults = getPostSkuBindingPvtSkusellerActivateSellerIdSkuSellerIdMutationOptions<
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

export function getSkuBindingPvtSkusellerAdminQueryKey(
  args: InferRequestType<(typeof client)['sku-binding']['pvt']['skuseller']['admin']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sku-binding', '/sku-binding/pvt/skuseller/admin', keyArgs] as const
}

export function getSkuBindingPvtSkusellerAdminQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['sku-binding']['pvt']['skuseller']['admin']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['sku-binding']['pvt']['skuseller']['admin']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['sku-binding']['pvt']['skuseller']['admin']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSkuBindingPvtSkusellerAdminQueryKey>
  >({
    queryKey: getSkuBindingPvtSkusellerAdminQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['sku-binding'].pvt.skuseller.admin.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSkuBindingPvtSkusellerAdmin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['sku-binding']['pvt']['skuseller']['admin']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['sku-binding']['pvt']['skuseller']['admin']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['sku-binding']['pvt']['skuseller']['admin']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSkuBindingPvtSkusellerAdminQueryKey>
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
      ...getSkuBindingPvtSkusellerAdminQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSkuBindingPvtSkusellerAdmin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['sku-binding']['pvt']['skuseller']['admin']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['sku-binding']['pvt']['skuseller']['admin']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['sku-binding']['pvt']['skuseller']['admin']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSkuBindingPvtSkusellerAdminQueryKey>
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
      ...getSkuBindingPvtSkusellerAdminQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuIdMutationKey() {
  return [
    'sku-binding',
    '/sku-binding/pvt/skuseller/changenotification/:sellerId/:sellerSkuId',
    'POST',
  ] as const
}

export function getPostSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['sku-binding']['pvt']['skuseller']['changenotification'][':sellerId'][':sellerSkuId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['sku-binding']['pvt']['skuseller']['changenotification'][':sellerId'][':sellerSkuId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sku-binding']['pvt']['skuseller']['changenotification'][':sellerId'][':sellerSkuId']['$post']
      >,
    ) {
      return parseResponse(
        client['sku-binding'].pvt.skuseller.changenotification[':sellerId'][':sellerSkuId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuId<
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
                  (typeof client)['sku-binding']['pvt']['skuseller']['changenotification'][':sellerId'][':sellerSkuId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['sku-binding']['pvt']['skuseller']['changenotification'][':sellerId'][':sellerSkuId']['$post']
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
  const mutationDefaults =
    getPostSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuIdMutationOptions<
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

export function getPostSkuBindingPvtSkusellerChangenotificationSkuIdMutationKey() {
  return ['sku-binding', '/sku-binding/pvt/skuseller/changenotification/:skuId', 'POST'] as const
}

export function getPostSkuBindingPvtSkusellerChangenotificationSkuIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['sku-binding']['pvt']['skuseller']['changenotification'][':skuId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['sku-binding']['pvt']['skuseller']['changenotification'][':skuId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSkuBindingPvtSkusellerChangenotificationSkuIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sku-binding']['pvt']['skuseller']['changenotification'][':skuId']['$post']
      >,
    ) {
      return parseResponse(
        client['sku-binding'].pvt.skuseller.changenotification[':skuId'].$post(args, options),
      )
    },
  })
}

export function usePostSkuBindingPvtSkusellerChangenotificationSkuId<
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
                  (typeof client)['sku-binding']['pvt']['skuseller']['changenotification'][':skuId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['sku-binding']['pvt']['skuseller']['changenotification'][':skuId']['$post']
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
  const mutationDefaults = getPostSkuBindingPvtSkusellerChangenotificationSkuIdMutationOptions<
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

export function getPostSkuBindingPvtSkusellerInactivateSellerIdSkuSellerIdMutationKey() {
  return [
    'sku-binding',
    '/sku-binding/pvt/skuseller/inactivate/:sellerId/:skuSellerId',
    'POST',
  ] as const
}

export function getPostSkuBindingPvtSkusellerInactivateSellerIdSkuSellerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['sku-binding']['pvt']['skuseller']['inactivate'][':sellerId'][':skuSellerId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['sku-binding']['pvt']['skuseller']['inactivate'][':sellerId'][':skuSellerId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSkuBindingPvtSkusellerInactivateSellerIdSkuSellerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sku-binding']['pvt']['skuseller']['inactivate'][':sellerId'][':skuSellerId']['$post']
      >,
    ) {
      return parseResponse(
        client['sku-binding'].pvt.skuseller.inactivate[':sellerId'][':skuSellerId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSkuBindingPvtSkusellerInactivateSellerIdSkuSellerId<
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
                  (typeof client)['sku-binding']['pvt']['skuseller']['inactivate'][':sellerId'][':skuSellerId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['sku-binding']['pvt']['skuseller']['inactivate'][':sellerId'][':skuSellerId']['$post']
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
  const mutationDefaults =
    getPostSkuBindingPvtSkusellerInactivateSellerIdSkuSellerIdMutationOptions<
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

export function getPostSkuBindingPvtSkusellerInsertionMutationKey() {
  return ['sku-binding', '/sku-binding/pvt/skuseller/insertion', 'POST'] as const
}

export function getPostSkuBindingPvtSkusellerInsertionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['sku-binding']['pvt']['skuseller']['insertion']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['sku-binding']['pvt']['skuseller']['insertion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSkuBindingPvtSkusellerInsertionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sku-binding']['pvt']['skuseller']['insertion']['$post']
      >,
    ) {
      return parseResponse(client['sku-binding'].pvt.skuseller.insertion.$post(args, options))
    },
  })
}

export function usePostSkuBindingPvtSkusellerInsertion<
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
                ReturnType<(typeof client)['sku-binding']['pvt']['skuseller']['insertion']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['sku-binding']['pvt']['skuseller']['insertion']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSkuBindingPvtSkusellerInsertionMutationOptions<
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

export function getSkuBindingPvtSkusellerListBysellerIdSellerIdQueryKey(
  args: InferRequestType<
    (typeof client)['sku-binding']['pvt']['skuseller']['list']['bysellerId'][':sellerId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['sku-binding', '/sku-binding/pvt/skuseller/list/bysellerId/:sellerId', keyArgs] as const
}

export function getSkuBindingPvtSkusellerListBysellerIdSellerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['sku-binding']['pvt']['skuseller']['list']['bysellerId'][':sellerId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['sku-binding']['pvt']['skuseller']['list']['bysellerId'][':sellerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['sku-binding']['pvt']['skuseller']['list']['bysellerId'][':sellerId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSkuBindingPvtSkusellerListBysellerIdSellerIdQueryKey>
  >({
    queryKey: getSkuBindingPvtSkusellerListBysellerIdSellerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['sku-binding'].pvt.skuseller.list.bysellerId[':sellerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSkuBindingPvtSkusellerListBysellerIdSellerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['sku-binding']['pvt']['skuseller']['list']['bysellerId'][':sellerId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['sku-binding']['pvt']['skuseller']['list']['bysellerId'][':sellerId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['sku-binding']['pvt']['skuseller']['list']['bysellerId'][':sellerId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSkuBindingPvtSkusellerListBysellerIdSellerIdQueryKey>
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
      ...getSkuBindingPvtSkusellerListBysellerIdSellerIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSkuBindingPvtSkusellerListBysellerIdSellerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['sku-binding']['pvt']['skuseller']['list']['bysellerId'][':sellerId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['sku-binding']['pvt']['skuseller']['list']['bysellerId'][':sellerId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['sku-binding']['pvt']['skuseller']['list']['bysellerId'][':sellerId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSkuBindingPvtSkusellerListBysellerIdSellerIdQueryKey>
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
      ...getSkuBindingPvtSkusellerListBysellerIdSellerIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSkuBindingPvtSkusellerPagedSelleridSellerIdQueryKey(
  args: InferRequestType<
    (typeof client)['sku-binding']['pvt']['skuseller']['paged']['sellerid'][':sellerId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['sku-binding', '/sku-binding/pvt/skuseller/paged/sellerid/:sellerId', keyArgs] as const
}

export function getSkuBindingPvtSkusellerPagedSelleridSellerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['sku-binding']['pvt']['skuseller']['paged']['sellerid'][':sellerId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['sku-binding']['pvt']['skuseller']['paged']['sellerid'][':sellerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['sku-binding']['pvt']['skuseller']['paged']['sellerid'][':sellerId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSkuBindingPvtSkusellerPagedSelleridSellerIdQueryKey>
  >({
    queryKey: getSkuBindingPvtSkusellerPagedSelleridSellerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['sku-binding'].pvt.skuseller.paged.sellerid[':sellerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSkuBindingPvtSkusellerPagedSelleridSellerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['sku-binding']['pvt']['skuseller']['paged']['sellerid'][':sellerId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['sku-binding']['pvt']['skuseller']['paged']['sellerid'][':sellerId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['sku-binding']['pvt']['skuseller']['paged']['sellerid'][':sellerId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSkuBindingPvtSkusellerPagedSelleridSellerIdQueryKey>
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
      ...getSkuBindingPvtSkusellerPagedSelleridSellerIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSkuBindingPvtSkusellerPagedSelleridSellerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['sku-binding']['pvt']['skuseller']['paged']['sellerid'][':sellerId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['sku-binding']['pvt']['skuseller']['paged']['sellerid'][':sellerId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['sku-binding']['pvt']['skuseller']['paged']['sellerid'][':sellerId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSkuBindingPvtSkusellerPagedSelleridSellerIdQueryKey>
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
      ...getSkuBindingPvtSkusellerPagedSelleridSellerIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSkuBindingPvtSkusellerRemoveSellerIdSellerSkuIdMutationKey() {
  return [
    'sku-binding',
    '/sku-binding/pvt/skuseller/remove/:sellerId/:sellerSkuId',
    'POST',
  ] as const
}

export function getPostSkuBindingPvtSkusellerRemoveSellerIdSellerSkuIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['sku-binding']['pvt']['skuseller']['remove'][':sellerId'][':sellerSkuId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['sku-binding']['pvt']['skuseller']['remove'][':sellerId'][':sellerSkuId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSkuBindingPvtSkusellerRemoveSellerIdSellerSkuIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sku-binding']['pvt']['skuseller']['remove'][':sellerId'][':sellerSkuId']['$post']
      >,
    ) {
      return parseResponse(
        client['sku-binding'].pvt.skuseller.remove[':sellerId'][':sellerSkuId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSkuBindingPvtSkusellerRemoveSellerIdSellerSkuId<
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
                  (typeof client)['sku-binding']['pvt']['skuseller']['remove'][':sellerId'][':sellerSkuId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['sku-binding']['pvt']['skuseller']['remove'][':sellerId'][':sellerSkuId']['$post']
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
  const mutationDefaults = getPostSkuBindingPvtSkusellerRemoveSellerIdSellerSkuIdMutationOptions<
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

export function getSkuBindingPvtSkusellerSellerIdSellerSkuIdQueryKey(
  args: InferRequestType<
    (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['sku-binding', '/sku-binding/pvt/skuseller/:sellerId/:sellerSkuId', keyArgs] as const
}

export function getSkuBindingPvtSkusellerSellerIdSellerSkuIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSkuBindingPvtSkusellerSellerIdSellerSkuIdQueryKey>
  >({
    queryKey: getSkuBindingPvtSkusellerSellerIdSellerSkuIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['sku-binding'].pvt.skuseller[':sellerId'][':sellerSkuId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSkuBindingPvtSkusellerSellerIdSellerSkuId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSkuBindingPvtSkusellerSellerIdSellerSkuIdQueryKey>
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
      ...getSkuBindingPvtSkusellerSellerIdSellerSkuIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSkuBindingPvtSkusellerSellerIdSellerSkuId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSkuBindingPvtSkusellerSellerIdSellerSkuIdQueryKey>
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
      ...getSkuBindingPvtSkusellerSellerIdSellerSkuIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutSkuBindingPvtSkusellerSellerIdSellerSkuIdMutationKey() {
  return ['sku-binding', '/sku-binding/pvt/skuseller/:sellerId/:sellerSkuId', 'PUT'] as const
}

export function getPutSkuBindingPvtSkusellerSellerIdSellerSkuIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSkuBindingPvtSkusellerSellerIdSellerSkuIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$put']
      >,
    ) {
      return parseResponse(
        client['sku-binding'].pvt.skuseller[':sellerId'][':sellerSkuId'].$put(args, options),
      )
    },
  })
}

export function usePutSkuBindingPvtSkusellerSellerIdSellerSkuId<
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
                    (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$put']
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
  const mutationDefaults = getPutSkuBindingPvtSkusellerSellerIdSellerSkuIdMutationOptions<
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
