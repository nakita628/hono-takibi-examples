import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostNotificatorSellerIdChangenotificationSkuIdInventoryKey() {
  return [
    'notificator',
    '/notificator/:sellerId/changenotification/:skuId/inventory',
    'POST',
  ] as const
}

export function usePostNotificatorSellerIdChangenotificationSkuIdInventory<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.notificator)[':sellerId']['changenotification'][':skuId']['inventory']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotificatorSellerIdChangenotificationSkuIdInventoryKey()
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
            (typeof client.notificator)[':sellerId']['changenotification'][':skuId']['inventory']['$post']
          >
        },
      ) =>
        parseResponse(
          client.notificator[':sellerId'].changenotification[':skuId'].inventory.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNotificatorSellerIdChangenotificationSkuIdPriceKey() {
  return ['notificator', '/notificator/:sellerId/changenotification/:skuId/price', 'POST'] as const
}

export function usePostNotificatorSellerIdChangenotificationSkuIdPrice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.notificator)[':sellerId']['changenotification'][':skuId']['price']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotificatorSellerIdChangenotificationSkuIdPriceKey()
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
            (typeof client.notificator)[':sellerId']['changenotification'][':skuId']['price']['$post']
          >
        },
      ) =>
        parseResponse(
          client.notificator[':sellerId'].changenotification[':skuId'].price.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOfferManagerPvtOffersKey(
  args: InferRequestType<(typeof client)['offer-manager']['pvt']['offers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['offer-manager', '/offer-manager/pvt/offers', keyArgs] as const
}

export function useGetOfferManagerPvtOffers<TError = unknown>(
  args: InferRequestType<(typeof client)['offer-manager']['pvt']['offers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['offer-manager']['pvt']['offers']['$get']>>
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
        ? getGetOfferManagerPvtOffersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['offer-manager']['pvt']['offers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['offer-manager'].pvt.offers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferManagerPvtOffers<TError = unknown>(
  args: InferRequestType<(typeof client)['offer-manager']['pvt']['offers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['offer-manager']['pvt']['offers']['$get']>>
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
        ? getGetOfferManagerPvtOffersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['offer-manager']['pvt']['offers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['offer-manager'].pvt.offers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOfferManagerPvtProductProductIdKey(
  args: InferRequestType<(typeof client)['offer-manager']['pvt']['product'][':productId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['offer-manager', '/offer-manager/pvt/product/:productId', keyArgs] as const
}

export function useGetOfferManagerPvtProductProductId<TError = unknown>(
  args: InferRequestType<(typeof client)['offer-manager']['pvt']['product'][':productId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['offer-manager']['pvt']['product'][':productId']['$get']>
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
        ? getGetOfferManagerPvtProductProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['offer-manager']['pvt']['product'][':productId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['offer-manager'].pvt.product[':productId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferManagerPvtProductProductId<TError = unknown>(
  args: InferRequestType<(typeof client)['offer-manager']['pvt']['product'][':productId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['offer-manager']['pvt']['product'][':productId']['$get']>
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
        ? getGetOfferManagerPvtProductProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['offer-manager']['pvt']['product'][':productId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['offer-manager'].pvt.product[':productId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOfferManagerPvtProductProductIdSkuSkuIdKey(
  args: InferRequestType<
    (typeof client)['offer-manager']['pvt']['product'][':productId']['sku'][':skuId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['offer-manager', '/offer-manager/pvt/product/:productId/sku/:skuId', keyArgs] as const
}

export function useGetOfferManagerPvtProductProductIdSkuSkuId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['offer-manager']['pvt']['product'][':productId']['sku'][':skuId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOfferManagerPvtProductProductIdSkuSkuIdKey(args)
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
                (typeof client)['offer-manager']['pvt']['product'][':productId']['sku'][':skuId']['$get']
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
          client['offer-manager'].pvt.product[':productId'].sku[':skuId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferManagerPvtProductProductIdSkuSkuId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['offer-manager']['pvt']['product'][':productId']['sku'][':skuId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOfferManagerPvtProductProductIdSkuSkuIdKey(args)
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
                (typeof client)['offer-manager']['pvt']['product'][':productId']['sku'][':skuId']['$get']
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
          client['offer-manager'].pvt.product[':productId'].sku[':skuId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSellerRegisterPvtSellerLeadsKey(
  args: InferRequestType<(typeof client)['seller-register']['pvt']['seller-leads']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['seller-register', '/seller-register/pvt/seller-leads', keyArgs] as const
}

export function useGetSellerRegisterPvtSellerLeads<TError = unknown>(
  args: InferRequestType<(typeof client)['seller-register']['pvt']['seller-leads']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['seller-register']['pvt']['seller-leads']['$get']>>
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
        ? getGetSellerRegisterPvtSellerLeadsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['seller-register']['pvt']['seller-leads']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['seller-register'].pvt['seller-leads'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSellerRegisterPvtSellerLeads<TError = unknown>(
  args: InferRequestType<(typeof client)['seller-register']['pvt']['seller-leads']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['seller-register']['pvt']['seller-leads']['$get']>>
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
        ? getGetSellerRegisterPvtSellerLeadsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['seller-register']['pvt']['seller-leads']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['seller-register'].pvt['seller-leads'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSellerRegisterPvtSellerLeadsKey() {
  return ['seller-register', '/seller-register/pvt/seller-leads', 'POST'] as const
}

export function usePostSellerRegisterPvtSellerLeads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['seller-register']['pvt']['seller-leads']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['seller-register']['pvt']['seller-leads']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSellerRegisterPvtSellerLeadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['seller-register']['pvt']['seller-leads']['$post']>
        },
      ) => parseResponse(client['seller-register'].pvt['seller-leads'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSellerRegisterPvtSellerLeadsSellerLeadIdKey(
  args: InferRequestType<
    (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['seller-register', '/seller-register/pvt/seller-leads/:sellerLeadId', keyArgs] as const
}

export function useGetSellerRegisterPvtSellerLeadsSellerLeadId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSellerRegisterPvtSellerLeadsSellerLeadIdKey(args)
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
                (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$get']
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
          client['seller-register'].pvt['seller-leads'][':sellerLeadId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSellerRegisterPvtSellerLeadsSellerLeadId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSellerRegisterPvtSellerLeadsSellerLeadIdKey(args)
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
                (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$get']
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
          client['seller-register'].pvt['seller-leads'][':sellerLeadId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSellerRegisterPvtSellerLeadsSellerLeadIdKey() {
  return ['seller-register', '/seller-register/pvt/seller-leads/:sellerLeadId', 'PUT'] as const
}

export function usePutSellerRegisterPvtSellerLeadsSellerLeadId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSellerRegisterPvtSellerLeadsSellerLeadIdKey()
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
            (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['seller-register'].pvt['seller-leads'][':sellerLeadId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSellerRegisterPvtSellerLeadsSellerLeadIdKey() {
  return ['seller-register', '/seller-register/pvt/seller-leads/:sellerLeadId', 'DELETE'] as const
}

export function useDeleteSellerRegisterPvtSellerLeadsSellerLeadId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSellerRegisterPvtSellerLeadsSellerLeadIdKey()
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
            (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['seller-register'].pvt['seller-leads'][':sellerLeadId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutSellerRegisterPvtSellerLeadsSellerLeadIdSellerKey() {
  return [
    'seller-register',
    '/seller-register/pvt/seller-leads/:sellerLeadId/seller',
    'PUT',
  ] as const
}

export function usePutSellerRegisterPvtSellerLeadsSellerLeadIdSeller<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['seller']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSellerRegisterPvtSellerLeadsSellerLeadIdSellerKey()
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
            (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['seller']['$put']
          >
        },
      ) =>
        parseResponse(
          client['seller-register'].pvt['seller-leads'][':sellerLeadId'].seller.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutSellerRegisterPvtSellerLeadsSellerLeadIdStatusKey() {
  return [
    'seller-register',
    '/seller-register/pvt/seller-leads/:sellerLeadId/status',
    'PUT',
  ] as const
}

export function usePutSellerRegisterPvtSellerLeadsSellerLeadIdStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSellerRegisterPvtSellerLeadsSellerLeadIdStatusKey()
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
            (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client['seller-register'].pvt['seller-leads'][':sellerLeadId'].status.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSellerRegisterPvtSellersKey(
  args: InferRequestType<(typeof client)['seller-register']['pvt']['sellers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['seller-register', '/seller-register/pvt/sellers', keyArgs] as const
}

export function useGetSellerRegisterPvtSellers<TError = unknown>(
  args: InferRequestType<(typeof client)['seller-register']['pvt']['sellers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['seller-register']['pvt']['sellers']['$get']>>
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
        ? getGetSellerRegisterPvtSellersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['seller-register']['pvt']['sellers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['seller-register'].pvt.sellers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSellerRegisterPvtSellers<TError = unknown>(
  args: InferRequestType<(typeof client)['seller-register']['pvt']['sellers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['seller-register']['pvt']['sellers']['$get']>>
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
        ? getGetSellerRegisterPvtSellersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['seller-register']['pvt']['sellers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['seller-register'].pvt.sellers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSellerRegisterPvtSellersKey() {
  return ['seller-register', '/seller-register/pvt/sellers', 'POST'] as const
}

export function usePostSellerRegisterPvtSellers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['seller-register']['pvt']['sellers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['seller-register']['pvt']['sellers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSellerRegisterPvtSellersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['seller-register']['pvt']['sellers']['$post']> },
      ) => parseResponse(client['seller-register'].pvt.sellers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSellerRegisterPvtSellersSellerIdKey(
  args: InferRequestType<(typeof client)['seller-register']['pvt']['sellers'][':sellerId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['seller-register', '/seller-register/pvt/sellers/:sellerId', keyArgs] as const
}

export function useGetSellerRegisterPvtSellersSellerId<TError = unknown>(
  args: InferRequestType<(typeof client)['seller-register']['pvt']['sellers'][':sellerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['seller-register']['pvt']['sellers'][':sellerId']['$get']>
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
        ? getGetSellerRegisterPvtSellersSellerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['seller-register']['pvt']['sellers'][':sellerId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['seller-register'].pvt.sellers[':sellerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSellerRegisterPvtSellersSellerId<TError = unknown>(
  args: InferRequestType<(typeof client)['seller-register']['pvt']['sellers'][':sellerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['seller-register']['pvt']['sellers'][':sellerId']['$get']>
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
        ? getGetSellerRegisterPvtSellersSellerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['seller-register']['pvt']['sellers'][':sellerId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['seller-register'].pvt.sellers[':sellerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchSellerRegisterPvtSellersSellerIdKey() {
  return ['seller-register', '/seller-register/pvt/sellers/:sellerId', 'PATCH'] as const
}

export function usePatchSellerRegisterPvtSellersSellerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['seller-register']['pvt']['sellers'][':sellerId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSellerRegisterPvtSellersSellerIdKey()
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
            (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['seller-register'].pvt.sellers[':sellerId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSellerRegisterPvtSellersSellerIdCommissionsKey(
  args: InferRequestType<
    (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['seller-register', '/seller-register/pvt/sellers/:sellerId/commissions', keyArgs] as const
}

export function useGetSellerRegisterPvtSellersSellerIdCommissions<TError = unknown>(
  args: InferRequestType<
    (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSellerRegisterPvtSellersSellerIdCommissionsKey(args)
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
                (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions']['$get']
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
          client['seller-register'].pvt.sellers[':sellerId'].commissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSellerRegisterPvtSellersSellerIdCommissions<TError = unknown>(
  args: InferRequestType<
    (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSellerRegisterPvtSellersSellerIdCommissionsKey(args)
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
                (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions']['$get']
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
          client['seller-register'].pvt.sellers[':sellerId'].commissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSellerRegisterPvtSellersSellerIdCommissionsCategoriesKey() {
  return [
    'seller-register',
    '/seller-register/pvt/sellers/:sellerId/commissions/categories',
    'PUT',
  ] as const
}

export function usePutSellerRegisterPvtSellersSellerIdCommissionsCategories<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions']['categories']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSellerRegisterPvtSellersSellerIdCommissionsCategoriesKey()
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
            (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions']['categories']['$put']
          >
        },
      ) =>
        parseResponse(
          client['seller-register'].pvt.sellers[':sellerId'].commissions.categories.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSellerRegisterPvtSellersSellerIdCommissionsCategoryIdKey(
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

export function useGetSellerRegisterPvtSellersSellerIdCommissionsCategoryId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSellerRegisterPvtSellersSellerIdCommissionsCategoryIdKey(args)
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
                (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$get']
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
          client['seller-register'].pvt.sellers[':sellerId'].commissions[':categoryId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSellerRegisterPvtSellersSellerIdCommissionsCategoryId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSellerRegisterPvtSellersSellerIdCommissionsCategoryIdKey(args)
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
                (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$get']
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
          client['seller-register'].pvt.sellers[':sellerId'].commissions[':categoryId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSellerRegisterPvtSellersSellerIdCommissionsCategoryIdKey() {
  return [
    'seller-register',
    '/seller-register/pvt/sellers/:sellerId/commissions/:categoryId',
    'PUT',
  ] as const
}

export function usePutSellerRegisterPvtSellersSellerIdCommissionsCategoryId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSellerRegisterPvtSellersSellerIdCommissionsCategoryIdKey()
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
            (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['seller-register'].pvt.sellers[':sellerId'].commissions[':categoryId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSellerRegisterPvtSellersSellerIdCommissionsCategoryIdKey() {
  return [
    'seller-register',
    '/seller-register/pvt/sellers/:sellerId/commissions/:categoryId',
    'DELETE',
  ] as const
}

export function useDeleteSellerRegisterPvtSellersSellerIdCommissionsCategoryId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSellerRegisterPvtSellersSellerIdCommissionsCategoryIdKey()
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
            (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['seller-register'].pvt.sellers[':sellerId'].commissions[':categoryId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSellerRegisterPvtSellersSellerIdSalesChannelMappingKey(
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

export function useGetSellerRegisterPvtSellersSellerIdSalesChannelMapping<TError = unknown>(
  args: InferRequestType<
    (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['sales-channel']['mapping']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSellerRegisterPvtSellersSellerIdSalesChannelMappingKey(args)
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
                (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['sales-channel']['mapping']['$get']
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
          client['seller-register'].pvt.sellers[':sellerId']['sales-channel'].mapping.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSellerRegisterPvtSellersSellerIdSalesChannelMapping<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['sales-channel']['mapping']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSellerRegisterPvtSellersSellerIdSalesChannelMappingKey(args)
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
                (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['sales-channel']['mapping']['$get']
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
          client['seller-register'].pvt.sellers[':sellerId']['sales-channel'].mapping.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSellerRegisterPvtSellersSellerIdSalesChannelMappingKey() {
  return [
    'seller-register',
    '/seller-register/pvt/sellers/:sellerId/sales-channel/mapping',
    'PUT',
  ] as const
}

export function usePutSellerRegisterPvtSellersSellerIdSalesChannelMapping<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['sales-channel']['mapping']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSellerRegisterPvtSellersSellerIdSalesChannelMappingKey()
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
            (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['sales-channel']['mapping']['$put']
          >
        },
      ) =>
        parseResponse(
          client['seller-register'].pvt.sellers[':sellerId']['sales-channel'].mapping.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
