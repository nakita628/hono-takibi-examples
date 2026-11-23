import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getNotificatorKey() {
  return ['notificator'] as const
}

export function getOfferManagerKey() {
  return ['offer-manager'] as const
}

export function getSellerRegisterKey() {
  return ['seller-register'] as const
}

export function getPostNotificatorSellerIdChangenotificationSkuIdInventoryMutationKey() {
  return [
    'notificator',
    '/notificator/:sellerId/changenotification/:skuId/inventory',
    'POST',
  ] as const
}

export function getPostNotificatorSellerIdChangenotificationSkuIdInventoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.notificator)[':sellerId']['changenotification'][':skuId']['inventory']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.notificator)[':sellerId']['changenotification'][':skuId']['inventory']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNotificatorSellerIdChangenotificationSkuIdInventoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.notificator)[':sellerId']['changenotification'][':skuId']['inventory']['$post']
      >,
    ) {
      return parseResponse(
        client.notificator[':sellerId'].changenotification[':skuId'].inventory.$post(args, options),
      )
    },
  })
}

export function createPostNotificatorSellerIdChangenotificationSkuIdInventory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.notificator)[':sellerId']['changenotification'][':skuId']['inventory']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.notificator)[':sellerId']['changenotification'][':skuId']['inventory']['$post']
        >,
        TOnMutateResult
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
      getPostNotificatorSellerIdChangenotificationSkuIdInventoryMutationOptions<
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

export function getPostNotificatorSellerIdChangenotificationSkuIdPriceMutationKey() {
  return ['notificator', '/notificator/:sellerId/changenotification/:skuId/price', 'POST'] as const
}

export function getPostNotificatorSellerIdChangenotificationSkuIdPriceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.notificator)[':sellerId']['changenotification'][':skuId']['price']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.notificator)[':sellerId']['changenotification'][':skuId']['price']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNotificatorSellerIdChangenotificationSkuIdPriceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.notificator)[':sellerId']['changenotification'][':skuId']['price']['$post']
      >,
    ) {
      return parseResponse(
        client.notificator[':sellerId'].changenotification[':skuId'].price.$post(args, options),
      )
    },
  })
}

export function createPostNotificatorSellerIdChangenotificationSkuIdPrice<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.notificator)[':sellerId']['changenotification'][':skuId']['price']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.notificator)[':sellerId']['changenotification'][':skuId']['price']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNotificatorSellerIdChangenotificationSkuIdPriceMutationOptions<
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

export function getOfferManagerPvtOffersQueryKey(
  args: InferRequestType<(typeof client)['offer-manager']['pvt']['offers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['offer-manager', '/offer-manager/pvt/offers', keyArgs] as const
}

export function getOfferManagerPvtOffersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['offer-manager']['pvt']['offers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['offer-manager']['pvt']['offers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['offer-manager']['pvt']['offers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOfferManagerPvtOffersQueryKey>
  >({
    queryKey: getOfferManagerPvtOffersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['offer-manager'].pvt.offers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOfferManagerPvtOffers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['offer-manager']['pvt']['offers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['offer-manager']['pvt']['offers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['offer-manager']['pvt']['offers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOfferManagerPvtOffersQueryKey>
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
      ...getOfferManagerPvtOffersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOfferManagerPvtProductProductIdQueryKey(
  args: InferRequestType<(typeof client)['offer-manager']['pvt']['product'][':productId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['offer-manager', '/offer-manager/pvt/product/:productId', keyArgs] as const
}

export function getOfferManagerPvtProductProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['offer-manager']['pvt']['product'][':productId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['offer-manager']['pvt']['product'][':productId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['offer-manager']['pvt']['product'][':productId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOfferManagerPvtProductProductIdQueryKey>
  >({
    queryKey: getOfferManagerPvtProductProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['offer-manager'].pvt.product[':productId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOfferManagerPvtProductProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['offer-manager']['pvt']['product'][':productId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['offer-manager']['pvt']['product'][':productId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['offer-manager']['pvt']['product'][':productId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOfferManagerPvtProductProductIdQueryKey>
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
      ...getOfferManagerPvtProductProductIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOfferManagerPvtProductProductIdSkuSkuIdQueryKey(
  args: InferRequestType<
    (typeof client)['offer-manager']['pvt']['product'][':productId']['sku'][':skuId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['offer-manager', '/offer-manager/pvt/product/:productId/sku/:skuId', keyArgs] as const
}

export function getOfferManagerPvtProductProductIdSkuSkuIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['offer-manager']['pvt']['product'][':productId']['sku'][':skuId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['offer-manager']['pvt']['product'][':productId']['sku'][':skuId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['offer-manager']['pvt']['product'][':productId']['sku'][':skuId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOfferManagerPvtProductProductIdSkuSkuIdQueryKey>
  >({
    queryKey: getOfferManagerPvtProductProductIdSkuSkuIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['offer-manager'].pvt.product[':productId'].sku[':skuId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOfferManagerPvtProductProductIdSkuSkuId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['offer-manager']['pvt']['product'][':productId']['sku'][':skuId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['offer-manager']['pvt']['product'][':productId']['sku'][':skuId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['offer-manager']['pvt']['product'][':productId']['sku'][':skuId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOfferManagerPvtProductProductIdSkuSkuIdQueryKey>
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
      ...getOfferManagerPvtProductProductIdSkuSkuIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getSellerRegisterPvtSellerLeadsQueryKey(
  args: InferRequestType<(typeof client)['seller-register']['pvt']['seller-leads']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['seller-register', '/seller-register/pvt/seller-leads', keyArgs] as const
}

export function getSellerRegisterPvtSellerLeadsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['seller-register']['pvt']['seller-leads']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['seller-register']['pvt']['seller-leads']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['seller-register']['pvt']['seller-leads']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSellerRegisterPvtSellerLeadsQueryKey>
  >({
    queryKey: getSellerRegisterPvtSellerLeadsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['seller-register'].pvt['seller-leads'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSellerRegisterPvtSellerLeads<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['seller-register']['pvt']['seller-leads']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['seller-register']['pvt']['seller-leads']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['seller-register']['pvt']['seller-leads']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSellerRegisterPvtSellerLeadsQueryKey>
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
      ...getSellerRegisterPvtSellerLeadsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostSellerRegisterPvtSellerLeadsMutationKey() {
  return ['seller-register', '/seller-register/pvt/seller-leads', 'POST'] as const
}

export function getPostSellerRegisterPvtSellerLeadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['seller-register']['pvt']['seller-leads']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['seller-register']['pvt']['seller-leads']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSellerRegisterPvtSellerLeadsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['seller-register']['pvt']['seller-leads']['$post']>,
    ) {
      return parseResponse(client['seller-register'].pvt['seller-leads'].$post(args, options))
    },
  })
}

export function createPostSellerRegisterPvtSellerLeads<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['seller-register']['pvt']['seller-leads']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['seller-register']['pvt']['seller-leads']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSellerRegisterPvtSellerLeadsMutationOptions<
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

export function getSellerRegisterPvtSellerLeadsSellerLeadIdQueryKey(
  args: InferRequestType<
    (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['seller-register', '/seller-register/pvt/seller-leads/:sellerLeadId', keyArgs] as const
}

export function getSellerRegisterPvtSellerLeadsSellerLeadIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSellerRegisterPvtSellerLeadsSellerLeadIdQueryKey>
  >({
    queryKey: getSellerRegisterPvtSellerLeadsSellerLeadIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['seller-register'].pvt['seller-leads'][':sellerLeadId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSellerRegisterPvtSellerLeadsSellerLeadId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSellerRegisterPvtSellerLeadsSellerLeadIdQueryKey>
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
      ...getSellerRegisterPvtSellerLeadsSellerLeadIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutSellerRegisterPvtSellerLeadsSellerLeadIdMutationKey() {
  return ['seller-register', '/seller-register/pvt/seller-leads/:sellerLeadId', 'PUT'] as const
}

export function getPutSellerRegisterPvtSellerLeadsSellerLeadIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSellerRegisterPvtSellerLeadsSellerLeadIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$put']
      >,
    ) {
      return parseResponse(
        client['seller-register'].pvt['seller-leads'][':sellerLeadId'].$put(args, options),
      )
    },
  })
}

export function createPutSellerRegisterPvtSellerLeadsSellerLeadId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSellerRegisterPvtSellerLeadsSellerLeadIdMutationOptions<
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

export function getDeleteSellerRegisterPvtSellerLeadsSellerLeadIdMutationKey() {
  return ['seller-register', '/seller-register/pvt/seller-leads/:sellerLeadId', 'DELETE'] as const
}

export function getDeleteSellerRegisterPvtSellerLeadsSellerLeadIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSellerRegisterPvtSellerLeadsSellerLeadIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$delete']
      >,
    ) {
      return parseResponse(
        client['seller-register'].pvt['seller-leads'][':sellerLeadId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteSellerRegisterPvtSellerLeadsSellerLeadId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSellerRegisterPvtSellerLeadsSellerLeadIdMutationOptions<
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

export function getPutSellerRegisterPvtSellerLeadsSellerLeadIdSellerMutationKey() {
  return [
    'seller-register',
    '/seller-register/pvt/seller-leads/:sellerLeadId/seller',
    'PUT',
  ] as const
}

export function getPutSellerRegisterPvtSellerLeadsSellerLeadIdSellerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['seller']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['seller']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSellerRegisterPvtSellerLeadsSellerLeadIdSellerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['seller']['$put']
      >,
    ) {
      return parseResponse(
        client['seller-register'].pvt['seller-leads'][':sellerLeadId'].seller.$put(args, options),
      )
    },
  })
}

export function createPutSellerRegisterPvtSellerLeadsSellerLeadIdSeller<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['seller']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['seller']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSellerRegisterPvtSellerLeadsSellerLeadIdSellerMutationOptions<
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

export function getPutSellerRegisterPvtSellerLeadsSellerLeadIdStatusMutationKey() {
  return [
    'seller-register',
    '/seller-register/pvt/seller-leads/:sellerLeadId/status',
    'PUT',
  ] as const
}

export function getPutSellerRegisterPvtSellerLeadsSellerLeadIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSellerRegisterPvtSellerLeadsSellerLeadIdStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['status']['$put']
      >,
    ) {
      return parseResponse(
        client['seller-register'].pvt['seller-leads'][':sellerLeadId'].status.$put(args, options),
      )
    },
  })
}

export function createPutSellerRegisterPvtSellerLeadsSellerLeadIdStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['status']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['status']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSellerRegisterPvtSellerLeadsSellerLeadIdStatusMutationOptions<
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

export function getSellerRegisterPvtSellersQueryKey(
  args: InferRequestType<(typeof client)['seller-register']['pvt']['sellers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['seller-register', '/seller-register/pvt/sellers', keyArgs] as const
}

export function getSellerRegisterPvtSellersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['seller-register']['pvt']['sellers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['seller-register']['pvt']['sellers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['seller-register']['pvt']['sellers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSellerRegisterPvtSellersQueryKey>
  >({
    queryKey: getSellerRegisterPvtSellersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['seller-register'].pvt.sellers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSellerRegisterPvtSellers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['seller-register']['pvt']['sellers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['seller-register']['pvt']['sellers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['seller-register']['pvt']['sellers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSellerRegisterPvtSellersQueryKey>
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
      ...getSellerRegisterPvtSellersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostSellerRegisterPvtSellersMutationKey() {
  return ['seller-register', '/seller-register/pvt/sellers', 'POST'] as const
}

export function getPostSellerRegisterPvtSellersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['seller-register']['pvt']['sellers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['seller-register']['pvt']['sellers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSellerRegisterPvtSellersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['seller-register']['pvt']['sellers']['$post']>,
    ) {
      return parseResponse(client['seller-register'].pvt.sellers.$post(args, options))
    },
  })
}

export function createPostSellerRegisterPvtSellers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['seller-register']['pvt']['sellers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['seller-register']['pvt']['sellers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSellerRegisterPvtSellersMutationOptions<
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

export function getSellerRegisterPvtSellersSellerIdQueryKey(
  args: InferRequestType<(typeof client)['seller-register']['pvt']['sellers'][':sellerId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['seller-register', '/seller-register/pvt/sellers/:sellerId', keyArgs] as const
}

export function getSellerRegisterPvtSellersSellerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['seller-register']['pvt']['sellers'][':sellerId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['seller-register']['pvt']['sellers'][':sellerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['seller-register']['pvt']['sellers'][':sellerId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSellerRegisterPvtSellersSellerIdQueryKey>
  >({
    queryKey: getSellerRegisterPvtSellersSellerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['seller-register'].pvt.sellers[':sellerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSellerRegisterPvtSellersSellerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['seller-register']['pvt']['sellers'][':sellerId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSellerRegisterPvtSellersSellerIdQueryKey>
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
      ...getSellerRegisterPvtSellersSellerIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchSellerRegisterPvtSellersSellerIdMutationKey() {
  return ['seller-register', '/seller-register/pvt/sellers/:sellerId', 'PATCH'] as const
}

export function getPatchSellerRegisterPvtSellersSellerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['seller-register']['pvt']['sellers'][':sellerId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['seller-register']['pvt']['sellers'][':sellerId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSellerRegisterPvtSellersSellerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['$patch']
      >,
    ) {
      return parseResponse(client['seller-register'].pvt.sellers[':sellerId'].$patch(args, options))
    },
  })
}

export function createPatchSellerRegisterPvtSellersSellerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchSellerRegisterPvtSellersSellerIdMutationOptions<
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

export function getSellerRegisterPvtSellersSellerIdCommissionsQueryKey(
  args: InferRequestType<
    (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['seller-register', '/seller-register/pvt/sellers/:sellerId/commissions', keyArgs] as const
}

export function getSellerRegisterPvtSellersSellerIdCommissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSellerRegisterPvtSellersSellerIdCommissionsQueryKey>
  >({
    queryKey: getSellerRegisterPvtSellersSellerIdCommissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['seller-register'].pvt.sellers[':sellerId'].commissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSellerRegisterPvtSellersSellerIdCommissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSellerRegisterPvtSellersSellerIdCommissionsQueryKey>
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
      ...getSellerRegisterPvtSellersSellerIdCommissionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutSellerRegisterPvtSellersSellerIdCommissionsCategoriesMutationKey() {
  return [
    'seller-register',
    '/seller-register/pvt/sellers/:sellerId/commissions/categories',
    'PUT',
  ] as const
}

export function getPutSellerRegisterPvtSellersSellerIdCommissionsCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions']['categories']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions']['categories']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSellerRegisterPvtSellersSellerIdCommissionsCategoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions']['categories']['$put']
      >,
    ) {
      return parseResponse(
        client['seller-register'].pvt.sellers[':sellerId'].commissions.categories.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutSellerRegisterPvtSellersSellerIdCommissionsCategories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions']['categories']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions']['categories']['$put']
        >,
        TOnMutateResult
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
      getPutSellerRegisterPvtSellersSellerIdCommissionsCategoriesMutationOptions<
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

export function getSellerRegisterPvtSellersSellerIdCommissionsCategoryIdQueryKey(
  args: InferRequestType<
    (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'seller-register',
    '/seller-register/pvt/sellers/:sellerId/commissions/:categoryId',
    keyArgs,
  ] as const
}

export function getSellerRegisterPvtSellersSellerIdCommissionsCategoryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSellerRegisterPvtSellersSellerIdCommissionsCategoryIdQueryKey>
  >({
    queryKey: getSellerRegisterPvtSellersSellerIdCommissionsCategoryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['seller-register'].pvt.sellers[':sellerId'].commissions[':categoryId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSellerRegisterPvtSellersSellerIdCommissionsCategoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSellerRegisterPvtSellersSellerIdCommissionsCategoryIdQueryKey>
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
      ...getSellerRegisterPvtSellersSellerIdCommissionsCategoryIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutSellerRegisterPvtSellersSellerIdCommissionsCategoryIdMutationKey() {
  return [
    'seller-register',
    '/seller-register/pvt/sellers/:sellerId/commissions/:categoryId',
    'PUT',
  ] as const
}

export function getPutSellerRegisterPvtSellersSellerIdCommissionsCategoryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSellerRegisterPvtSellersSellerIdCommissionsCategoryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$put']
      >,
    ) {
      return parseResponse(
        client['seller-register'].pvt.sellers[':sellerId'].commissions[':categoryId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutSellerRegisterPvtSellersSellerIdCommissionsCategoryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$put']
        >,
        TOnMutateResult
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
      getPutSellerRegisterPvtSellersSellerIdCommissionsCategoryIdMutationOptions<
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

export function getDeleteSellerRegisterPvtSellersSellerIdCommissionsCategoryIdMutationKey() {
  return [
    'seller-register',
    '/seller-register/pvt/sellers/:sellerId/commissions/:categoryId',
    'DELETE',
  ] as const
}

export function getDeleteSellerRegisterPvtSellersSellerIdCommissionsCategoryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSellerRegisterPvtSellersSellerIdCommissionsCategoryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$delete']
      >,
    ) {
      return parseResponse(
        client['seller-register'].pvt.sellers[':sellerId'].commissions[':categoryId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteSellerRegisterPvtSellersSellerIdCommissionsCategoryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$delete']
        >,
        TOnMutateResult
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
      getDeleteSellerRegisterPvtSellersSellerIdCommissionsCategoryIdMutationOptions<
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

export function getSellerRegisterPvtSellersSellerIdSalesChannelMappingQueryKey(
  args: InferRequestType<
    (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['sales-channel']['mapping']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'seller-register',
    '/seller-register/pvt/sellers/:sellerId/sales-channel/mapping',
    keyArgs,
  ] as const
}

export function getSellerRegisterPvtSellersSellerIdSalesChannelMappingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['sales-channel']['mapping']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['sales-channel']['mapping']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['sales-channel']['mapping']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSellerRegisterPvtSellersSellerIdSalesChannelMappingQueryKey>
  >({
    queryKey: getSellerRegisterPvtSellersSellerIdSalesChannelMappingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['seller-register'].pvt.sellers[':sellerId']['sales-channel'].mapping.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSellerRegisterPvtSellersSellerIdSalesChannelMapping<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['sales-channel']['mapping']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['sales-channel']['mapping']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['sales-channel']['mapping']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSellerRegisterPvtSellersSellerIdSalesChannelMappingQueryKey>
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
      ...getSellerRegisterPvtSellersSellerIdSalesChannelMappingQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutSellerRegisterPvtSellersSellerIdSalesChannelMappingMutationKey() {
  return [
    'seller-register',
    '/seller-register/pvt/sellers/:sellerId/sales-channel/mapping',
    'PUT',
  ] as const
}

export function getPutSellerRegisterPvtSellersSellerIdSalesChannelMappingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['sales-channel']['mapping']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['sales-channel']['mapping']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSellerRegisterPvtSellersSellerIdSalesChannelMappingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['sales-channel']['mapping']['$put']
      >,
    ) {
      return parseResponse(
        client['seller-register'].pvt.sellers[':sellerId']['sales-channel'].mapping.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutSellerRegisterPvtSellersSellerIdSalesChannelMapping<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['sales-channel']['mapping']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['sales-channel']['mapping']['$put']
        >,
        TOnMutateResult
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
      getPutSellerRegisterPvtSellersSellerIdSalesChannelMappingMutationOptions<
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
