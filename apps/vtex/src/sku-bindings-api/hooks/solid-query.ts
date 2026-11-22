import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function createCatalogPvtSkusellersSkuId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.catalog.pvt.skusellers)[':skuId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.catalog.pvt.skusellers)[':skuId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCatalogPvtSkusellersSkuIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostSkuBindingPvtSkusellerActivateSellerIdSkuSellerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostSkuBindingPvtSkusellerActivateSellerIdSkuSellerIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createSkuBindingPvtSkusellerAdmin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['sku-binding']['pvt']['skuseller']['admin']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['sku-binding']['pvt']['skuseller']['admin']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getSkuBindingPvtSkusellerAdminQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSkuBindingPvtSkusellerChangenotificationSkuId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSkuBindingPvtSkusellerChangenotificationSkuIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSkuBindingPvtSkusellerInactivateSellerIdSkuSellerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostSkuBindingPvtSkusellerInactivateSellerIdSkuSellerIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSkuBindingPvtSkusellerInsertion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['sku-binding']['pvt']['skuseller']['insertion']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['sku-binding']['pvt']['skuseller']['insertion']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSkuBindingPvtSkusellerInsertionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createSkuBindingPvtSkusellerListBysellerIdSellerId<
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
  args: () => InferRequestType<
    (typeof client)['sku-binding']['pvt']['skuseller']['list']['bysellerId'][':sellerId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getSkuBindingPvtSkusellerListBysellerIdSellerIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createSkuBindingPvtSkusellerPagedSelleridSellerId<
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
  args: () => InferRequestType<
    (typeof client)['sku-binding']['pvt']['skuseller']['paged']['sellerid'][':sellerId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getSkuBindingPvtSkusellerPagedSelleridSellerIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostSkuBindingPvtSkusellerRemoveSellerIdSellerSkuId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSkuBindingPvtSkusellerRemoveSellerIdSellerSkuIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createSkuBindingPvtSkusellerSellerIdSellerSkuId<
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
  args: () => InferRequestType<
    (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getSkuBindingPvtSkusellerSellerIdSellerSkuIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutSkuBindingPvtSkusellerSellerIdSellerSkuId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSkuBindingPvtSkusellerSellerIdSellerSkuIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
