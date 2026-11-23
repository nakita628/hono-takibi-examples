import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCatalogKey() {
  return ['catalog'] as const
}

export function getSkuBindingKey() {
  return ['sku-binding'] as const
}

export function getGetCatalogPvtSkusellersSkuIdKey(
  args: InferRequestType<(typeof client.catalog.pvt.skusellers)[':skuId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['catalog', '/catalog/pvt/skusellers/:skuId', keyArgs] as const
}

export function useGetCatalogPvtSkusellersSkuId<TError = unknown>(
  args: InferRequestType<(typeof client.catalog.pvt.skusellers)[':skuId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalog.pvt.skusellers)[':skuId']['$get']>>
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
        ? getGetCatalogPvtSkusellersSkuIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalog.pvt.skusellers)[':skuId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalog.pvt.skusellers[':skuId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalogPvtSkusellersSkuId<TError = unknown>(
  args: InferRequestType<(typeof client.catalog.pvt.skusellers)[':skuId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalog.pvt.skusellers)[':skuId']['$get']>>
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
        ? getGetCatalogPvtSkusellersSkuIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalog.pvt.skusellers)[':skuId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalog.pvt.skusellers[':skuId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSkuBindingPvtSkusellerActivateSellerIdSkuSellerIdKey() {
  return [
    'sku-binding',
    '/sku-binding/pvt/skuseller/activate/:sellerId/:skuSellerId',
    'POST',
  ] as const
}

export function usePostSkuBindingPvtSkusellerActivateSellerIdSkuSellerId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['sku-binding']['pvt']['skuseller']['activate'][':sellerId'][':skuSellerId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSkuBindingPvtSkusellerActivateSellerIdSkuSellerIdKey()
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
            (typeof client)['sku-binding']['pvt']['skuseller']['activate'][':sellerId'][':skuSellerId']['$post']
          >
        },
      ) =>
        parseResponse(
          client['sku-binding'].pvt.skuseller.activate[':sellerId'][':skuSellerId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSkuBindingPvtSkusellerAdminKey(
  args: InferRequestType<(typeof client)['sku-binding']['pvt']['skuseller']['admin']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sku-binding', '/sku-binding/pvt/skuseller/admin', keyArgs] as const
}

export function useGetSkuBindingPvtSkusellerAdmin<TError = unknown>(
  args: InferRequestType<(typeof client)['sku-binding']['pvt']['skuseller']['admin']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sku-binding']['pvt']['skuseller']['admin']['$get']>>
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
        ? getGetSkuBindingPvtSkusellerAdminKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sku-binding']['pvt']['skuseller']['admin']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['sku-binding'].pvt.skuseller.admin.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSkuBindingPvtSkusellerAdmin<TError = unknown>(
  args: InferRequestType<(typeof client)['sku-binding']['pvt']['skuseller']['admin']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sku-binding']['pvt']['skuseller']['admin']['$get']>>
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
        ? getGetSkuBindingPvtSkusellerAdminKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sku-binding']['pvt']['skuseller']['admin']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['sku-binding'].pvt.skuseller.admin.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuIdKey() {
  return [
    'sku-binding',
    '/sku-binding/pvt/skuseller/changenotification/:sellerId/:sellerSkuId',
    'POST',
  ] as const
}

export function usePostSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['sku-binding']['pvt']['skuseller']['changenotification'][':sellerId'][':sellerSkuId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuIdKey()
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
            (typeof client)['sku-binding']['pvt']['skuseller']['changenotification'][':sellerId'][':sellerSkuId']['$post']
          >
        },
      ) =>
        parseResponse(
          client['sku-binding'].pvt.skuseller.changenotification[':sellerId'][':sellerSkuId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSkuBindingPvtSkusellerChangenotificationSkuIdKey() {
  return ['sku-binding', '/sku-binding/pvt/skuseller/changenotification/:skuId', 'POST'] as const
}

export function usePostSkuBindingPvtSkusellerChangenotificationSkuId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['sku-binding']['pvt']['skuseller']['changenotification'][':skuId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSkuBindingPvtSkusellerChangenotificationSkuIdKey()
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
            (typeof client)['sku-binding']['pvt']['skuseller']['changenotification'][':skuId']['$post']
          >
        },
      ) =>
        parseResponse(
          client['sku-binding'].pvt.skuseller.changenotification[':skuId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSkuBindingPvtSkusellerInactivateSellerIdSkuSellerIdKey() {
  return [
    'sku-binding',
    '/sku-binding/pvt/skuseller/inactivate/:sellerId/:skuSellerId',
    'POST',
  ] as const
}

export function usePostSkuBindingPvtSkusellerInactivateSellerIdSkuSellerId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['sku-binding']['pvt']['skuseller']['inactivate'][':sellerId'][':skuSellerId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSkuBindingPvtSkusellerInactivateSellerIdSkuSellerIdKey()
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
            (typeof client)['sku-binding']['pvt']['skuseller']['inactivate'][':sellerId'][':skuSellerId']['$post']
          >
        },
      ) =>
        parseResponse(
          client['sku-binding'].pvt.skuseller.inactivate[':sellerId'][':skuSellerId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSkuBindingPvtSkusellerInsertionKey() {
  return ['sku-binding', '/sku-binding/pvt/skuseller/insertion', 'POST'] as const
}

export function usePostSkuBindingPvtSkusellerInsertion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['sku-binding']['pvt']['skuseller']['insertion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSkuBindingPvtSkusellerInsertionKey()
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
            (typeof client)['sku-binding']['pvt']['skuseller']['insertion']['$post']
          >
        },
      ) => parseResponse(client['sku-binding'].pvt.skuseller.insertion.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSkuBindingPvtSkusellerListBysellerIdSellerIdKey(
  args: InferRequestType<
    (typeof client)['sku-binding']['pvt']['skuseller']['list']['bysellerId'][':sellerId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['sku-binding', '/sku-binding/pvt/skuseller/list/bysellerId/:sellerId', keyArgs] as const
}

export function useGetSkuBindingPvtSkusellerListBysellerIdSellerId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['sku-binding']['pvt']['skuseller']['list']['bysellerId'][':sellerId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSkuBindingPvtSkusellerListBysellerIdSellerIdKey(args)
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
                (typeof client)['sku-binding']['pvt']['skuseller']['list']['bysellerId'][':sellerId']['$get']
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
          client['sku-binding'].pvt.skuseller.list.bysellerId[':sellerId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSkuBindingPvtSkusellerListBysellerIdSellerId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['sku-binding']['pvt']['skuseller']['list']['bysellerId'][':sellerId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSkuBindingPvtSkusellerListBysellerIdSellerIdKey(args)
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
                (typeof client)['sku-binding']['pvt']['skuseller']['list']['bysellerId'][':sellerId']['$get']
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
          client['sku-binding'].pvt.skuseller.list.bysellerId[':sellerId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSkuBindingPvtSkusellerPagedSelleridSellerIdKey(
  args: InferRequestType<
    (typeof client)['sku-binding']['pvt']['skuseller']['paged']['sellerid'][':sellerId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['sku-binding', '/sku-binding/pvt/skuseller/paged/sellerid/:sellerId', keyArgs] as const
}

export function useGetSkuBindingPvtSkusellerPagedSelleridSellerId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['sku-binding']['pvt']['skuseller']['paged']['sellerid'][':sellerId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSkuBindingPvtSkusellerPagedSelleridSellerIdKey(args)
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
                (typeof client)['sku-binding']['pvt']['skuseller']['paged']['sellerid'][':sellerId']['$get']
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
          client['sku-binding'].pvt.skuseller.paged.sellerid[':sellerId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSkuBindingPvtSkusellerPagedSelleridSellerId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['sku-binding']['pvt']['skuseller']['paged']['sellerid'][':sellerId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSkuBindingPvtSkusellerPagedSelleridSellerIdKey(args)
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
                (typeof client)['sku-binding']['pvt']['skuseller']['paged']['sellerid'][':sellerId']['$get']
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
          client['sku-binding'].pvt.skuseller.paged.sellerid[':sellerId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSkuBindingPvtSkusellerRemoveSellerIdSellerSkuIdKey() {
  return [
    'sku-binding',
    '/sku-binding/pvt/skuseller/remove/:sellerId/:sellerSkuId',
    'POST',
  ] as const
}

export function usePostSkuBindingPvtSkusellerRemoveSellerIdSellerSkuId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['sku-binding']['pvt']['skuseller']['remove'][':sellerId'][':sellerSkuId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSkuBindingPvtSkusellerRemoveSellerIdSellerSkuIdKey()
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
            (typeof client)['sku-binding']['pvt']['skuseller']['remove'][':sellerId'][':sellerSkuId']['$post']
          >
        },
      ) =>
        parseResponse(
          client['sku-binding'].pvt.skuseller.remove[':sellerId'][':sellerSkuId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSkuBindingPvtSkusellerSellerIdSellerSkuIdKey(
  args: InferRequestType<
    (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['sku-binding', '/sku-binding/pvt/skuseller/:sellerId/:sellerSkuId', keyArgs] as const
}

export function useGetSkuBindingPvtSkusellerSellerIdSellerSkuId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSkuBindingPvtSkusellerSellerIdSellerSkuIdKey(args)
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
                (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$get']
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
          client['sku-binding'].pvt.skuseller[':sellerId'][':sellerSkuId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSkuBindingPvtSkusellerSellerIdSellerSkuId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSkuBindingPvtSkusellerSellerIdSellerSkuIdKey(args)
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
                (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$get']
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
          client['sku-binding'].pvt.skuseller[':sellerId'][':sellerSkuId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSkuBindingPvtSkusellerSellerIdSellerSkuIdKey() {
  return ['sku-binding', '/sku-binding/pvt/skuseller/:sellerId/:sellerSkuId', 'PUT'] as const
}

export function usePutSkuBindingPvtSkusellerSellerIdSellerSkuId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSkuBindingPvtSkusellerSellerIdSellerSkuIdKey()
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
            (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['sku-binding'].pvt.skuseller[':sellerId'][':sellerSkuId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
