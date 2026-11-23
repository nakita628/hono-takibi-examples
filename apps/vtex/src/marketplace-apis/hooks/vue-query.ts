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

export function usePostNotificatorSellerIdChangenotificationSkuIdInventory<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostNotificatorSellerIdChangenotificationSkuIdInventoryMutationOptions<
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

export function usePostNotificatorSellerIdChangenotificationSkuIdPrice<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNotificatorSellerIdChangenotificationSkuIdPriceMutationOptions<
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

export function getOfferManagerPvtOffersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['offer-manager']['pvt']['offers']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['offer-manager', '/offer-manager/pvt/offers', keyArgs] as const
}

export function getOfferManagerPvtOffersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['offer-manager']['pvt']['offers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfferManagerPvtOffersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['offer-manager'].pvt.offers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfferManagerPvtOffers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['offer-manager']['pvt']['offers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['offer-manager']['pvt']['offers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['offer-manager']['pvt']['offers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['offer-manager']['pvt']['offers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOfferManagerPvtOffersQueryKey>
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
          Awaited<ReturnType<(typeof client)['offer-manager']['pvt']['offers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOfferManagerPvtOffersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfferManagerPvtOffersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['offer-manager'].pvt.offers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOfferManagerPvtProductProductIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['offer-manager']['pvt']['product'][':productId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['offer-manager', '/offer-manager/pvt/product/:productId', keyArgs] as const
}

export function getOfferManagerPvtProductProductIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['offer-manager']['pvt']['product'][':productId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfferManagerPvtProductProductIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['offer-manager'].pvt.product[':productId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfferManagerPvtProductProductId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['offer-manager']['pvt']['product'][':productId']['$get']>
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
                    (typeof client)['offer-manager']['pvt']['product'][':productId']['$get']
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
                    (typeof client)['offer-manager']['pvt']['product'][':productId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOfferManagerPvtProductProductIdQueryKey>
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
            ReturnType<(typeof client)['offer-manager']['pvt']['product'][':productId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOfferManagerPvtProductProductIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfferManagerPvtProductProductIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['offer-manager'].pvt.product[':productId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOfferManagerPvtProductProductIdSkuSkuIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['offer-manager']['pvt']['product'][':productId']['sku'][':skuId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['offer-manager', '/offer-manager/pvt/product/:productId/sku/:skuId', keyArgs] as const
}

export function getOfferManagerPvtProductProductIdSkuSkuIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['offer-manager']['pvt']['product'][':productId']['sku'][':skuId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfferManagerPvtProductProductIdSkuSkuIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['offer-manager'].pvt.product[':productId'].sku[':skuId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfferManagerPvtProductProductIdSkuSkuId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['offer-manager']['pvt']['product'][':productId']['sku'][':skuId']['$get']
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
                    (typeof client)['offer-manager']['pvt']['product'][':productId']['sku'][':skuId']['$get']
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
                    (typeof client)['offer-manager']['pvt']['product'][':productId']['sku'][':skuId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOfferManagerPvtProductProductIdSkuSkuIdQueryKey>
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
              (typeof client)['offer-manager']['pvt']['product'][':productId']['sku'][':skuId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOfferManagerPvtProductProductIdSkuSkuIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfferManagerPvtProductProductIdSkuSkuIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['offer-manager'].pvt.product[':productId'].sku[':skuId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSellerRegisterPvtSellerLeadsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['seller-register']['pvt']['seller-leads']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['seller-register', '/seller-register/pvt/seller-leads', keyArgs] as const
}

export function getSellerRegisterPvtSellerLeadsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['seller-register']['pvt']['seller-leads']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSellerRegisterPvtSellerLeadsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['seller-register'].pvt['seller-leads'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSellerRegisterPvtSellerLeads<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['seller-register']['pvt']['seller-leads']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['seller-register']['pvt']['seller-leads']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['seller-register']['pvt']['seller-leads']['$get']>
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
                  ReturnType<(typeof client)['seller-register']['pvt']['seller-leads']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSellerRegisterPvtSellerLeadsQueryKey>
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
          Awaited<ReturnType<(typeof client)['seller-register']['pvt']['seller-leads']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSellerRegisterPvtSellerLeadsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSellerRegisterPvtSellerLeadsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['seller-register'].pvt['seller-leads'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSellerRegisterPvtSellerLeads<
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
                  ReturnType<(typeof client)['seller-register']['pvt']['seller-leads']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['seller-register']['pvt']['seller-leads']['$post']>,
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
  const mutationDefaults = getPostSellerRegisterPvtSellerLeadsMutationOptions<
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

export function getSellerRegisterPvtSellerLeadsSellerLeadIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['seller-register', '/seller-register/pvt/seller-leads/:sellerLeadId', keyArgs] as const
}

export function getSellerRegisterPvtSellerLeadsSellerLeadIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSellerRegisterPvtSellerLeadsSellerLeadIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['seller-register'].pvt['seller-leads'][':sellerLeadId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSellerRegisterPvtSellerLeadsSellerLeadId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$get']
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
                    (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$get']
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
                    (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSellerRegisterPvtSellerLeadsSellerLeadIdQueryKey>
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
              (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSellerRegisterPvtSellerLeadsSellerLeadIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSellerRegisterPvtSellerLeadsSellerLeadIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['seller-register'].pvt['seller-leads'][':sellerLeadId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutSellerRegisterPvtSellerLeadsSellerLeadId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSellerRegisterPvtSellerLeadsSellerLeadIdMutationOptions<
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

export function useDeleteSellerRegisterPvtSellerLeadsSellerLeadId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSellerRegisterPvtSellerLeadsSellerLeadIdMutationOptions<
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

export function usePutSellerRegisterPvtSellerLeadsSellerLeadIdSeller<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSellerRegisterPvtSellerLeadsSellerLeadIdSellerMutationOptions<
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

export function usePutSellerRegisterPvtSellerLeadsSellerLeadIdStatus<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSellerRegisterPvtSellerLeadsSellerLeadIdStatusMutationOptions<
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

export function getSellerRegisterPvtSellersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['seller-register']['pvt']['sellers']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['seller-register', '/seller-register/pvt/sellers', keyArgs] as const
}

export function getSellerRegisterPvtSellersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['seller-register']['pvt']['sellers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSellerRegisterPvtSellersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['seller-register'].pvt.sellers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSellerRegisterPvtSellers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['seller-register']['pvt']['sellers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['seller-register']['pvt']['sellers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['seller-register']['pvt']['sellers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['seller-register']['pvt']['sellers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSellerRegisterPvtSellersQueryKey>
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
          Awaited<ReturnType<(typeof client)['seller-register']['pvt']['sellers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSellerRegisterPvtSellersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSellerRegisterPvtSellersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['seller-register'].pvt.sellers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSellerRegisterPvtSellers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSellerRegisterPvtSellersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSellerRegisterPvtSellersSellerIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['seller-register']['pvt']['sellers'][':sellerId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['seller-register', '/seller-register/pvt/sellers/:sellerId', keyArgs] as const
}

export function getSellerRegisterPvtSellersSellerIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['seller-register']['pvt']['sellers'][':sellerId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSellerRegisterPvtSellersSellerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['seller-register'].pvt.sellers[':sellerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSellerRegisterPvtSellersSellerId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['seller-register']['pvt']['sellers'][':sellerId']['$get']>
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
                    (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['$get']
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
                    (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSellerRegisterPvtSellersSellerIdQueryKey>
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
            ReturnType<(typeof client)['seller-register']['pvt']['sellers'][':sellerId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSellerRegisterPvtSellersSellerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSellerRegisterPvtSellersSellerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['seller-register'].pvt.sellers[':sellerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchSellerRegisterPvtSellersSellerId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSellerRegisterPvtSellersSellerIdMutationOptions<
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

export function getSellerRegisterPvtSellersSellerIdCommissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['seller-register', '/seller-register/pvt/sellers/:sellerId/commissions', keyArgs] as const
}

export function getSellerRegisterPvtSellersSellerIdCommissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSellerRegisterPvtSellersSellerIdCommissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['seller-register'].pvt.sellers[':sellerId'].commissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSellerRegisterPvtSellersSellerIdCommissions<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions']['$get']
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
                    (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions']['$get']
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
                    (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSellerRegisterPvtSellersSellerIdCommissionsQueryKey>
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
              (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSellerRegisterPvtSellersSellerIdCommissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSellerRegisterPvtSellersSellerIdCommissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['seller-register'].pvt.sellers[':sellerId'].commissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutSellerRegisterPvtSellersSellerIdCommissionsCategories<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutSellerRegisterPvtSellersSellerIdCommissionsCategoriesMutationOptions<
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

export function getSellerRegisterPvtSellersSellerIdCommissionsCategoryIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'seller-register',
    '/seller-register/pvt/sellers/:sellerId/commissions/:categoryId',
    keyArgs,
  ] as const
}

export function getSellerRegisterPvtSellersSellerIdCommissionsCategoryIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getSellerRegisterPvtSellersSellerIdCommissionsCategoryIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['seller-register'].pvt.sellers[':sellerId'].commissions[':categoryId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useSellerRegisterPvtSellersSellerIdCommissionsCategoryId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$get']
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
                    (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$get']
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
                    (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSellerRegisterPvtSellersSellerIdCommissionsCategoryIdQueryKey>
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
              (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSellerRegisterPvtSellersSellerIdCommissionsCategoryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSellerRegisterPvtSellersSellerIdCommissionsCategoryIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['seller-register'].pvt.sellers[':sellerId'].commissions[':categoryId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutSellerRegisterPvtSellersSellerIdCommissionsCategoryId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutSellerRegisterPvtSellersSellerIdCommissionsCategoryIdMutationOptions<
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

export function useDeleteSellerRegisterPvtSellersSellerIdCommissionsCategoryId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteSellerRegisterPvtSellersSellerIdCommissionsCategoryIdMutationOptions<
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

export function getSellerRegisterPvtSellersSellerIdSalesChannelMappingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['sales-channel']['mapping']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'seller-register',
    '/seller-register/pvt/sellers/:sellerId/sales-channel/mapping',
    keyArgs,
  ] as const
}

export function getSellerRegisterPvtSellersSellerIdSalesChannelMappingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['sales-channel']['mapping']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSellerRegisterPvtSellersSellerIdSalesChannelMappingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['seller-register'].pvt.sellers[':sellerId']['sales-channel'].mapping.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useSellerRegisterPvtSellersSellerIdSalesChannelMapping<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['sales-channel']['mapping']['$get']
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
                    (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['sales-channel']['mapping']['$get']
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
                    (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['sales-channel']['mapping']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSellerRegisterPvtSellersSellerIdSalesChannelMappingQueryKey>
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
              (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['sales-channel']['mapping']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSellerRegisterPvtSellersSellerIdSalesChannelMappingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSellerRegisterPvtSellersSellerIdSalesChannelMappingQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['seller-register'].pvt.sellers[':sellerId']['sales-channel'].mapping.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutSellerRegisterPvtSellersSellerIdSalesChannelMapping<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSellerRegisterPvtSellersSellerIdSalesChannelMappingMutationOptions<
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
