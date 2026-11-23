import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOrdersKey() {
  return ['orders'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getPostOrdersV3BatchesChangeOrdersKey() {
  return ['orders', '/orders/v3/batches/changeOrders', 'POST'] as const
}

export function usePostOrdersV3BatchesChangeOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.orders.v3.batches.changeOrders.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.orders.v3.batches.changeOrders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrdersV3BatchesChangeOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.orders.v3.batches.changeOrders.$post> },
      ) => parseResponse(client.orders.v3.batches.changeOrders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrdersV3BatchesChangeOrdersChangeOrderTypeKey() {
  return ['orders', '/orders/v3/batches/changeOrders/:changeOrderType', 'POST'] as const
}

export function usePostOrdersV3BatchesChangeOrdersChangeOrderType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.orders.v3.batches.changeOrders)[':changeOrderType']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.orders.v3.batches.changeOrders)[':changeOrderType']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrdersV3BatchesChangeOrdersChangeOrderTypeKey()
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
            (typeof client.orders.v3.batches.changeOrders)[':changeOrderType']['$post']
          >
        },
      ) =>
        parseResponse(
          client.orders.v3.batches.changeOrders[':changeOrderType'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrdersV3BatchesClearMerchantOrderInfosKey() {
  return ['orders', '/orders/v3/batches/clearMerchantOrderInfos', 'POST'] as const
}

export function usePostOrdersV3BatchesClearMerchantOrderInfos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.orders.v3.batches.clearMerchantOrderInfos.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.orders.v3.batches.clearMerchantOrderInfos.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrdersV3BatchesClearMerchantOrderInfosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.orders.v3.batches.clearMerchantOrderInfos.$post> },
      ) =>
        parseResponse(client.orders.v3.batches.clearMerchantOrderInfos.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrdersV3BatchesSetMerchantOrderInfosKey() {
  return ['orders', '/orders/v3/batches/setMerchantOrderInfos', 'POST'] as const
}

export function usePostOrdersV3BatchesSetMerchantOrderInfos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.orders.v3.batches.setMerchantOrderInfos.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.orders.v3.batches.setMerchantOrderInfos.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrdersV3BatchesSetMerchantOrderInfosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.orders.v3.batches.setMerchantOrderInfos.$post> },
      ) => parseResponse(client.orders.v3.batches.setMerchantOrderInfos.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrdersV3HarvestKey() {
  return ['orders', '/orders/v3/harvest', 'POST'] as const
}

export function usePostOrdersV3Harvest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.v3.harvest.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.orders.v3.harvest.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrdersV3HarvestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.orders.v3.harvest.$post> }) =>
        parseResponse(client.orders.v3.harvest.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrdersV3ListFullKey() {
  return ['orders', '/orders/v3/list/full', 'POST'] as const
}

export function usePostOrdersV3ListFull<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.v3.list.full.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.orders.v3.list.full.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrdersV3ListFullKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.orders.v3.list.full.$post> }) =>
        parseResponse(client.orders.v3.list.full.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrdersV3ListLightKey() {
  return ['orders', '/orders/v3/list/light', 'POST'] as const
}

export function usePostOrdersV3ListLight<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.orders.v3.list.light.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.orders.v3.list.light.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrdersV3ListLightKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.orders.v3.list.light.$post> },
      ) => parseResponse(client.orders.v3.list.light.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrdersV3LovOrderManagementReadyMarketplaceBusinessCodeKey(
  args: InferRequestType<
    typeof client.orders.v3.lov.orderManagementReadyMarketplaceBusinessCode.$get
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['orders', '/orders/v3/lov/orderManagementReadyMarketplaceBusinessCode', keyArgs] as const
}

export function useGetOrdersV3LovOrderManagementReadyMarketplaceBusinessCode<TError = unknown>(
  args: InferRequestType<
    typeof client.orders.v3.lov.orderManagementReadyMarketplaceBusinessCode.$get
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                typeof client.orders.v3.lov.orderManagementReadyMarketplaceBusinessCode.$get
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
        ? getGetOrdersV3LovOrderManagementReadyMarketplaceBusinessCodeKey(args)
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
                typeof client.orders.v3.lov.orderManagementReadyMarketplaceBusinessCode.$get
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
          client.orders.v3.lov.orderManagementReadyMarketplaceBusinessCode.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrdersV3LovOrderManagementReadyMarketplaceBusinessCode<
  TError = unknown,
>(
  args: InferRequestType<
    typeof client.orders.v3.lov.orderManagementReadyMarketplaceBusinessCode.$get
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                typeof client.orders.v3.lov.orderManagementReadyMarketplaceBusinessCode.$get
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
        ? getGetOrdersV3LovOrderManagementReadyMarketplaceBusinessCodeKey(args)
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
                typeof client.orders.v3.lov.orderManagementReadyMarketplaceBusinessCode.$get
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
          client.orders.v3.lov.orderManagementReadyMarketplaceBusinessCode.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrdersV3StatusKey(
  args: InferRequestType<typeof client.orders.v3.status.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['orders', '/orders/v3/status', keyArgs] as const
}

export function useGetOrdersV3Status<TError = unknown>(
  args: InferRequestType<typeof client.orders.v3.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.v3.status.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrdersV3StatusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.v3.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orders.v3.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrdersV3Status<TError = unknown>(
  args: InferRequestType<typeof client.orders.v3.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.v3.status.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrdersV3StatusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.v3.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orders.v3.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrdersV3MarketplaceTechnicalCodeAccountIdHarvestKey() {
  return ['orders', '/orders/v3/:marketplaceTechnicalCode/:accountId/harvest', 'POST'] as const
}

export function usePostOrdersV3MarketplaceTechnicalCodeAccountIdHarvest<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId']['harvest']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId']['harvest']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrdersV3MarketplaceTechnicalCodeAccountIdHarvestKey()
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
            (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId']['harvest']['$post']
          >
        },
      ) =>
        parseResponse(
          client.orders.v3[':marketplaceTechnicalCode'][':accountId'].harvest.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdKey(
  args: InferRequestType<
    (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'orders',
    '/orders/v3/:marketplaceTechnicalCode/:accountId/:beezUPOrderId',
    keyArgs,
  ] as const
}

export function useGetOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderId<TError = unknown>(
  args: InferRequestType<
    (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$get']
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
        ? getGetOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdKey(args)
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
                (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$get']
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
          client.orders.v3[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$get']
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
        ? getGetOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdKey(args)
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
                (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$get']
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
          client.orders.v3[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getHeadOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdKey() {
  return [
    'orders',
    '/orders/v3/:marketplaceTechnicalCode/:accountId/:beezUPOrderId',
    'HEAD',
  ] as const
}

export function useHeadOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$head']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$head']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdKey()
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
            (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$head']
          >
        },
      ) =>
        parseResponse(
          client.orders.v3[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'].$head(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdClearMerchantOrderInfoKey() {
  return [
    'orders',
    '/orders/v3/:marketplaceTechnicalCode/:accountId/:beezUPOrderId/clearMerchantOrderInfo',
    'POST',
  ] as const
}

export function usePostOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdClearMerchantOrderInfo<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['clearMerchantOrderInfo']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['clearMerchantOrderInfo']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdClearMerchantOrderInfoKey()
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
            (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['clearMerchantOrderInfo']['$post']
          >
        },
      ) =>
        parseResponse(
          client.orders.v3[':marketplaceTechnicalCode'][':accountId'][
            ':beezUPOrderId'
          ].clearMerchantOrderInfo.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHarvestKey() {
  return [
    'orders',
    '/orders/v3/:marketplaceTechnicalCode/:accountId/:beezUPOrderId/harvest',
    'POST',
  ] as const
}

export function usePostOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHarvest<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['harvest']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['harvest']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHarvestKey()
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
            (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['harvest']['$post']
          >
        },
      ) =>
        parseResponse(
          client.orders.v3[':marketplaceTechnicalCode'][':accountId'][
            ':beezUPOrderId'
          ].harvest.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryKey(
  args: InferRequestType<
    (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['history']['$get']
  >,
) {
  return [
    'orders',
    '/orders/v3/:marketplaceTechnicalCode/:accountId/:beezUPOrderId/history',
    args,
  ] as const
}

export function useGetOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistory<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['history']['$get']
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
        ? getGetOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryKey(args)
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
                (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['history']['$get']
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
          client.orders.v3[':marketplaceTechnicalCode'][':accountId'][
            ':beezUPOrderId'
          ].history.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistory<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['history']['$get']
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
        ? getGetOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryKey(args)
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
                (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['history']['$get']
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
          client.orders.v3[':marketplaceTechnicalCode'][':accountId'][
            ':beezUPOrderId'
          ].history.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryOrderChangeExecutionUUIDKey(
  args: InferRequestType<
    (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['history'][':orderChangeExecutionUUID']['$get']
  >,
) {
  return [
    'orders',
    '/orders/v3/:marketplaceTechnicalCode/:accountId/:beezUPOrderId/history/:orderChangeExecutionUUID',
    args,
  ] as const
}

export function useGetOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryOrderChangeExecutionUUID<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['history'][':orderChangeExecutionUUID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['history'][':orderChangeExecutionUUID']['$get']
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
        ? getGetOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryOrderChangeExecutionUUIDKey(
            args,
          )
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
                (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['history'][':orderChangeExecutionUUID']['$get']
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
          client.orders.v3[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'].history[
            ':orderChangeExecutionUUID'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryOrderChangeExecutionUUID<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['history'][':orderChangeExecutionUUID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['history'][':orderChangeExecutionUUID']['$get']
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
        ? getGetOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryOrderChangeExecutionUUIDKey(
            args,
          )
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
                (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['history'][':orderChangeExecutionUUID']['$get']
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
          client.orders.v3[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'].history[
            ':orderChangeExecutionUUID'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdSetMerchantOrderInfoKey() {
  return [
    'orders',
    '/orders/v3/:marketplaceTechnicalCode/:accountId/:beezUPOrderId/setMerchantOrderInfo',
    'POST',
  ] as const
}

export function usePostOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdSetMerchantOrderInfo<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['setMerchantOrderInfo']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['setMerchantOrderInfo']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdSetMerchantOrderInfoKey()
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
            (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['setMerchantOrderInfo']['$post']
          >
        },
      ) =>
        parseResponse(
          client.orders.v3[':marketplaceTechnicalCode'][':accountId'][
            ':beezUPOrderId'
          ].setMerchantOrderInfo.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdChangeOrderTypeKey() {
  return [
    'orders',
    '/orders/v3/:marketplaceTechnicalCode/:accountId/:beezUPOrderId/:changeOrderType',
    'POST',
  ] as const
}

export function usePostOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdChangeOrderType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'][':changeOrderType']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'][':changeOrderType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdChangeOrderTypeKey()
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
            (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'][':changeOrderType']['$post']
          >
        },
      ) =>
        parseResponse(
          client.orders.v3[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'][
            ':changeOrderType'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2PublicChannelsIndexKey(
  args: InferRequestType<typeof client.v2.public.channels.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/public/channels/', keyArgs] as const
}

export function useGetV2PublicChannelsIndex<TError = unknown>(
  args: InferRequestType<typeof client.v2.public.channels.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.public.channels.index.$get>>>
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
        ? getGetV2PublicChannelsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.public.channels.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.public.channels.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PublicChannelsIndex<TError = unknown>(
  args: InferRequestType<typeof client.v2.public.channels.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.public.channels.index.$get>>>
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
        ? getGetV2PublicChannelsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.public.channels.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.public.channels.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2PublicChannelsCountryIsoCodeKey(
  args: InferRequestType<(typeof client.v2.public.channels)[':countryIsoCode']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/public/channels/:countryIsoCode', keyArgs] as const
}

export function useGetV2PublicChannelsCountryIsoCode<TError = unknown>(
  args: InferRequestType<(typeof client.v2.public.channels)[':countryIsoCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.public.channels)[':countryIsoCode']['$get']>>
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
        ? getGetV2PublicChannelsCountryIsoCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.public.channels)[':countryIsoCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.public.channels[':countryIsoCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PublicChannelsCountryIsoCode<TError = unknown>(
  args: InferRequestType<(typeof client.v2.public.channels)[':countryIsoCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.public.channels)[':countryIsoCode']['$get']>>
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
        ? getGetV2PublicChannelsCountryIsoCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.public.channels)[':countryIsoCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.public.channels[':countryIsoCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2PublicLovIndexKey(
  args: InferRequestType<typeof client.v2.public.lov.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/public/lov/', keyArgs] as const
}

export function useGetV2PublicLovIndex<TError = unknown>(
  args: InferRequestType<typeof client.v2.public.lov.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.public.lov.index.$get>>>
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
        ? getGetV2PublicLovIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.public.lov.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.public.lov.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PublicLovIndex<TError = unknown>(
  args: InferRequestType<typeof client.v2.public.lov.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.public.lov.index.$get>>>
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
        ? getGetV2PublicLovIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.public.lov.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.public.lov.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2PublicLovListNameKey(
  args: InferRequestType<(typeof client.v2.public.lov)[':listName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/public/lov/:listName', keyArgs] as const
}

export function useGetV2PublicLovListName<TError = unknown>(
  args: InferRequestType<(typeof client.v2.public.lov)[':listName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.public.lov)[':listName']['$get']>>
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
        ? getGetV2PublicLovListNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.public.lov)[':listName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.public.lov[':listName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PublicLovListName<TError = unknown>(
  args: InferRequestType<(typeof client.v2.public.lov)[':listName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.public.lov)[':listName']['$get']>>
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
        ? getGetV2PublicLovListNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.public.lov)[':listName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.public.lov[':listName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2PublicSecurityLoginKey() {
  return ['v2', '/v2/public/security/login', 'POST'] as const
}

export function usePostV2PublicSecurityLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.public.security.login.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.public.security.login.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PublicSecurityLoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.public.security.login.$post> },
      ) => parseResponse(client.v2.public.security.login.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2PublicSecurityLostpasswordKey() {
  return ['v2', '/v2/public/security/lostpassword', 'POST'] as const
}

export function usePostV2PublicSecurityLostpassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.public.security.lostpassword.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v2.public.security.lostpassword.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PublicSecurityLostpasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.public.security.lostpassword.$post> },
      ) => parseResponse(client.v2.public.security.lostpassword.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2PublicSecurityRegisterKey() {
  return ['v2', '/v2/public/security/register', 'POST'] as const
}

export function usePostV2PublicSecurityRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.public.security.register.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v2.public.security.register.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PublicSecurityRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.public.security.register.$post> },
      ) => parseResponse(client.v2.public.security.register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserAnalyticsIndexKey() {
  return ['v2', '/v2/user/analytics/'] as const
}

export function useGetV2UserAnalyticsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.analytics.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2UserAnalyticsIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.analytics.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.analytics.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserAnalyticsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.analytics.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2UserAnalyticsIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.analytics.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.analytics.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserAnalyticsReportsBydayKey() {
  return ['v2', '/v2/user/analytics/reports/byday', 'POST'] as const
}

export function usePostV2UserAnalyticsReportsByday<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.analytics.reports.byday.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.user.analytics.reports.byday.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserAnalyticsReportsBydayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.user.analytics.reports.byday.$post> },
      ) => parseResponse(client.v2.user.analytics.reports.byday.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserAnalyticsTrackingStatusKey() {
  return ['v2', '/v2/user/analytics/tracking/status'] as const
}

export function useGetV2UserAnalyticsTrackingStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.analytics.tracking.status.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2UserAnalyticsTrackingStatusKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.analytics.tracking.status.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.analytics.tracking.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserAnalyticsTrackingStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.analytics.tracking.status.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2UserAnalyticsTrackingStatusKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.analytics.tracking.status.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.analytics.tracking.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserAnalyticsStoreIdKey(
  args: InferRequestType<(typeof client.v2.user.analytics)[':storeId']['$get']>,
) {
  return ['v2', '/v2/user/analytics/:storeId', args] as const
}

export function useGetV2UserAnalyticsStoreId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.analytics)[':storeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.analytics)[':storeId']['$get']>>
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
        ? getGetV2UserAnalyticsStoreIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.analytics)[':storeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.analytics[':storeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserAnalyticsStoreId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.analytics)[':storeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.analytics)[':storeId']['$get']>>
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
        ? getGetV2UserAnalyticsStoreIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.analytics)[':storeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.analytics[':storeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserAnalyticsStoreIdOptimisationsAllActionNameKey() {
  return ['v2', '/v2/user/analytics/:storeId/optimisations/all/:actionName', 'POST'] as const
}

export function usePostV2UserAnalyticsStoreIdOptimisationsAllActionName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.analytics)[':storeId']['optimisations']['all'][':actionName']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.analytics)[':storeId']['optimisations']['all'][':actionName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserAnalyticsStoreIdOptimisationsAllActionNameKey()
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
            (typeof client.v2.user.analytics)[':storeId']['optimisations']['all'][':actionName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.analytics[':storeId'].optimisations.all[':actionName'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserAnalyticsStoreIdOptimisationsBycategoryCatalogCategoryIdActionNameKey() {
  return [
    'v2',
    '/v2/user/analytics/:storeId/optimisations/bycategory/:catalogCategoryId/:actionName',
    'POST',
  ] as const
}

export function usePostV2UserAnalyticsStoreIdOptimisationsBycategoryCatalogCategoryIdActionName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.analytics)[':storeId']['optimisations']['bycategory'][':catalogCategoryId'][':actionName']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.analytics)[':storeId']['optimisations']['bycategory'][':catalogCategoryId'][':actionName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV2UserAnalyticsStoreIdOptimisationsBycategoryCatalogCategoryIdActionNameKey()
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
            (typeof client.v2.user.analytics)[':storeId']['optimisations']['bycategory'][':catalogCategoryId'][':actionName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.analytics[':storeId'].optimisations.bycategory[':catalogCategoryId'][
            ':actionName'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserAnalyticsStoreIdOptimisationsBychannelChannelIdActionNameKey() {
  return [
    'v2',
    '/v2/user/analytics/:storeId/optimisations/bychannel/:channelId/:actionName',
    'POST',
  ] as const
}

export function usePostV2UserAnalyticsStoreIdOptimisationsBychannelChannelIdActionName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.analytics)[':storeId']['optimisations']['bychannel'][':channelId'][':actionName']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.analytics)[':storeId']['optimisations']['bychannel'][':channelId'][':actionName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV2UserAnalyticsStoreIdOptimisationsBychannelChannelIdActionNameKey()
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
            (typeof client.v2.user.analytics)[':storeId']['optimisations']['bychannel'][':channelId'][':actionName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.analytics[':storeId'].optimisations.bychannel[':channelId'][
            ':actionName'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserAnalyticsStoreIdOptimisationsByproductProductIdActionNameKey() {
  return [
    'v2',
    '/v2/user/analytics/:storeId/optimisations/byproduct/:productId/:actionName',
    'POST',
  ] as const
}

export function usePostV2UserAnalyticsStoreIdOptimisationsByproductProductIdActionName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.analytics)[':storeId']['optimisations']['byproduct'][':productId'][':actionName']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.analytics)[':storeId']['optimisations']['byproduct'][':productId'][':actionName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV2UserAnalyticsStoreIdOptimisationsByproductProductIdActionNameKey()
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
            (typeof client.v2.user.analytics)[':storeId']['optimisations']['byproduct'][':productId'][':actionName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.analytics[':storeId'].optimisations.byproduct[':productId'][
            ':actionName'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserAnalyticsStoreIdOptimisationsCopyKey() {
  return ['v2', '/v2/user/analytics/:storeId/optimisations/copy', 'POST'] as const
}

export function usePostV2UserAnalyticsStoreIdOptimisationsCopy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.user.analytics)[':storeId']['optimisations']['copy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.analytics)[':storeId']['optimisations']['copy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserAnalyticsStoreIdOptimisationsCopyKey()
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
            (typeof client.v2.user.analytics)[':storeId']['optimisations']['copy']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.analytics[':storeId'].optimisations.copy.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserAnalyticsStoreIdOptimisationsActionNameKey() {
  return ['v2', '/v2/user/analytics/:storeId/optimisations/:actionName', 'POST'] as const
}

export function usePostV2UserAnalyticsStoreIdOptimisationsActionName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.analytics)[':storeId']['optimisations'][':actionName']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.analytics)[':storeId']['optimisations'][':actionName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserAnalyticsStoreIdOptimisationsActionNameKey()
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
            (typeof client.v2.user.analytics)[':storeId']['optimisations'][':actionName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.analytics[':storeId'].optimisations[':actionName'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserAnalyticsStoreIdReportsBycategoryKey() {
  return ['v2', '/v2/user/analytics/:storeId/reports/bycategory', 'POST'] as const
}

export function usePostV2UserAnalyticsStoreIdReportsBycategory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.user.analytics)[':storeId']['reports']['bycategory']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.analytics)[':storeId']['reports']['bycategory']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserAnalyticsStoreIdReportsBycategoryKey()
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
            (typeof client.v2.user.analytics)[':storeId']['reports']['bycategory']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.analytics[':storeId'].reports.bycategory.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserAnalyticsStoreIdReportsBychannelKey() {
  return ['v2', '/v2/user/analytics/:storeId/reports/bychannel', 'POST'] as const
}

export function usePostV2UserAnalyticsStoreIdReportsBychannel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.user.analytics)[':storeId']['reports']['bychannel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.user.analytics)[':storeId']['reports']['bychannel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserAnalyticsStoreIdReportsBychannelKey()
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
            (typeof client.v2.user.analytics)[':storeId']['reports']['bychannel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.analytics[':storeId'].reports.bychannel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserAnalyticsStoreIdReportsBydayKey() {
  return ['v2', '/v2/user/analytics/:storeId/reports/byday', 'POST'] as const
}

export function usePostV2UserAnalyticsStoreIdReportsByday<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.user.analytics)[':storeId']['reports']['byday']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.user.analytics)[':storeId']['reports']['byday']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserAnalyticsStoreIdReportsBydayKey()
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
            (typeof client.v2.user.analytics)[':storeId']['reports']['byday']['$post']
          >
        },
      ) =>
        parseResponse(client.v2.user.analytics[':storeId'].reports.byday.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserAnalyticsStoreIdReportsByproductKey() {
  return ['v2', '/v2/user/analytics/:storeId/reports/byproduct', 'POST'] as const
}

export function usePostV2UserAnalyticsStoreIdReportsByproduct<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.user.analytics)[':storeId']['reports']['byproduct']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.user.analytics)[':storeId']['reports']['byproduct']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserAnalyticsStoreIdReportsByproductKey()
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
            (typeof client.v2.user.analytics)[':storeId']['reports']['byproduct']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.analytics[':storeId'].reports.byproduct.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserAnalyticsStoreIdReportsFiltersKey(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['reports']['filters']['$get']
  >,
) {
  return ['v2', '/v2/user/analytics/:storeId/reports/filters', args] as const
}

export function useGetV2UserAnalyticsStoreIdReportsFilters<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['reports']['filters']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.analytics)[':storeId']['reports']['filters']['$get']
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
        ? getGetV2UserAnalyticsStoreIdReportsFiltersKey(args)
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
                (typeof client.v2.user.analytics)[':storeId']['reports']['filters']['$get']
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
          client.v2.user.analytics[':storeId'].reports.filters.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserAnalyticsStoreIdReportsFilters<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['reports']['filters']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.analytics)[':storeId']['reports']['filters']['$get']
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
        ? getGetV2UserAnalyticsStoreIdReportsFiltersKey(args)
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
                (typeof client.v2.user.analytics)[':storeId']['reports']['filters']['$get']
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
          client.v2.user.analytics[':storeId'].reports.filters.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserAnalyticsStoreIdReportsFiltersReportFilterIdKey(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['reports']['filters'][':reportFilterId']['$get']
  >,
) {
  return ['v2', '/v2/user/analytics/:storeId/reports/filters/:reportFilterId', args] as const
}

export function useGetV2UserAnalyticsStoreIdReportsFiltersReportFilterId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['reports']['filters'][':reportFilterId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.analytics)[':storeId']['reports']['filters'][':reportFilterId']['$get']
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
        ? getGetV2UserAnalyticsStoreIdReportsFiltersReportFilterIdKey(args)
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
                (typeof client.v2.user.analytics)[':storeId']['reports']['filters'][':reportFilterId']['$get']
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
          client.v2.user.analytics[':storeId'].reports.filters[':reportFilterId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserAnalyticsStoreIdReportsFiltersReportFilterId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['reports']['filters'][':reportFilterId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.analytics)[':storeId']['reports']['filters'][':reportFilterId']['$get']
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
        ? getGetV2UserAnalyticsStoreIdReportsFiltersReportFilterIdKey(args)
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
                (typeof client.v2.user.analytics)[':storeId']['reports']['filters'][':reportFilterId']['$get']
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
          client.v2.user.analytics[':storeId'].reports.filters[':reportFilterId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2UserAnalyticsStoreIdReportsFiltersReportFilterIdKey() {
  return ['v2', '/v2/user/analytics/:storeId/reports/filters/:reportFilterId', 'PUT'] as const
}

export function usePutV2UserAnalyticsStoreIdReportsFiltersReportFilterId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.analytics)[':storeId']['reports']['filters'][':reportFilterId']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.analytics)[':storeId']['reports']['filters'][':reportFilterId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2UserAnalyticsStoreIdReportsFiltersReportFilterIdKey()
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
            (typeof client.v2.user.analytics)[':storeId']['reports']['filters'][':reportFilterId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.analytics[':storeId'].reports.filters[':reportFilterId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2UserAnalyticsStoreIdReportsFiltersReportFilterIdKey() {
  return ['v2', '/v2/user/analytics/:storeId/reports/filters/:reportFilterId', 'DELETE'] as const
}

export function useDeleteV2UserAnalyticsStoreIdReportsFiltersReportFilterId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.analytics)[':storeId']['reports']['filters'][':reportFilterId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.analytics)[':storeId']['reports']['filters'][':reportFilterId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2UserAnalyticsStoreIdReportsFiltersReportFilterIdKey()
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
            (typeof client.v2.user.analytics)[':storeId']['reports']['filters'][':reportFilterId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.analytics[':storeId'].reports.filters[':reportFilterId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserAnalyticsStoreIdRulesKey(
  args: InferRequestType<(typeof client.v2.user.analytics)[':storeId']['rules']['$get']>,
) {
  return ['v2', '/v2/user/analytics/:storeId/rules', args] as const
}

export function useGetV2UserAnalyticsStoreIdRules<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.analytics)[':storeId']['rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.analytics)[':storeId']['rules']['$get']>>
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
        ? getGetV2UserAnalyticsStoreIdRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.analytics)[':storeId']['rules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.analytics[':storeId'].rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserAnalyticsStoreIdRules<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.analytics)[':storeId']['rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.analytics)[':storeId']['rules']['$get']>>
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
        ? getGetV2UserAnalyticsStoreIdRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.analytics)[':storeId']['rules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.analytics[':storeId'].rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserAnalyticsStoreIdRulesKey() {
  return ['v2', '/v2/user/analytics/:storeId/rules', 'POST'] as const
}

export function usePostV2UserAnalyticsStoreIdRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.analytics)[':storeId']['rules']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.user.analytics)[':storeId']['rules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserAnalyticsStoreIdRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.user.analytics)[':storeId']['rules']['$post']>
        },
      ) => parseResponse(client.v2.user.analytics[':storeId'].rules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserAnalyticsStoreIdRulesExecutionsKey(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['rules']['executions']['$get']
  >,
) {
  return ['v2', '/v2/user/analytics/:storeId/rules/executions', args] as const
}

export function useGetV2UserAnalyticsStoreIdRulesExecutions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['rules']['executions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.analytics)[':storeId']['rules']['executions']['$get']
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
        ? getGetV2UserAnalyticsStoreIdRulesExecutionsKey(args)
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
                (typeof client.v2.user.analytics)[':storeId']['rules']['executions']['$get']
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
          client.v2.user.analytics[':storeId'].rules.executions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserAnalyticsStoreIdRulesExecutions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['rules']['executions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.analytics)[':storeId']['rules']['executions']['$get']
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
        ? getGetV2UserAnalyticsStoreIdRulesExecutionsKey(args)
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
                (typeof client.v2.user.analytics)[':storeId']['rules']['executions']['$get']
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
          client.v2.user.analytics[':storeId'].rules.executions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserAnalyticsStoreIdRulesRunKey() {
  return ['v2', '/v2/user/analytics/:storeId/rules/run', 'POST'] as const
}

export function usePostV2UserAnalyticsStoreIdRulesRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.analytics)[':storeId']['rules']['run']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.user.analytics)[':storeId']['rules']['run']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserAnalyticsStoreIdRulesRunKey()
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
            (typeof client.v2.user.analytics)[':storeId']['rules']['run']['$post']
          >
        },
      ) => parseResponse(client.v2.user.analytics[':storeId'].rules.run.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserAnalyticsStoreIdRulesRuleIdKey(
  args: InferRequestType<(typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$get']>,
) {
  return ['v2', '/v2/user/analytics/:storeId/rules/:ruleId', args] as const
}

export function useGetV2UserAnalyticsStoreIdRulesRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$get']>
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
        ? getGetV2UserAnalyticsStoreIdRulesRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.user.analytics[':storeId'].rules[':ruleId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserAnalyticsStoreIdRulesRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$get']>
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
        ? getGetV2UserAnalyticsStoreIdRulesRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.user.analytics[':storeId'].rules[':ruleId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2UserAnalyticsStoreIdRulesRuleIdKey() {
  return ['v2', '/v2/user/analytics/:storeId/rules/:ruleId', 'DELETE'] as const
}

export function useDeleteV2UserAnalyticsStoreIdRulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2UserAnalyticsStoreIdRulesRuleIdKey()
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
            (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.analytics[':storeId'].rules[':ruleId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV2UserAnalyticsStoreIdRulesRuleIdKey() {
  return ['v2', '/v2/user/analytics/:storeId/rules/:ruleId', 'PATCH'] as const
}

export function usePatchV2UserAnalyticsStoreIdRulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2UserAnalyticsStoreIdRulesRuleIdKey()
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
            (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.analytics[':storeId'].rules[':ruleId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserAnalyticsStoreIdRulesRuleIdDisableKey() {
  return ['v2', '/v2/user/analytics/:storeId/rules/:ruleId/disable', 'POST'] as const
}

export function usePostV2UserAnalyticsStoreIdRulesRuleIdDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['disable']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['disable']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserAnalyticsStoreIdRulesRuleIdDisableKey()
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
            (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['disable']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.analytics[':storeId'].rules[':ruleId'].disable.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserAnalyticsStoreIdRulesRuleIdEnableKey() {
  return ['v2', '/v2/user/analytics/:storeId/rules/:ruleId/enable', 'POST'] as const
}

export function usePostV2UserAnalyticsStoreIdRulesRuleIdEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['enable']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['enable']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserAnalyticsStoreIdRulesRuleIdEnableKey()
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
            (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['enable']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.analytics[':storeId'].rules[':ruleId'].enable.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserAnalyticsStoreIdRulesRuleIdMovedownKey() {
  return ['v2', '/v2/user/analytics/:storeId/rules/:ruleId/movedown', 'POST'] as const
}

export function usePostV2UserAnalyticsStoreIdRulesRuleIdMovedown<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['movedown']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['movedown']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserAnalyticsStoreIdRulesRuleIdMovedownKey()
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
            (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['movedown']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.analytics[':storeId'].rules[':ruleId'].movedown.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserAnalyticsStoreIdRulesRuleIdMoveupKey() {
  return ['v2', '/v2/user/analytics/:storeId/rules/:ruleId/moveup', 'POST'] as const
}

export function usePostV2UserAnalyticsStoreIdRulesRuleIdMoveup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['moveup']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['moveup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserAnalyticsStoreIdRulesRuleIdMoveupKey()
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
            (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['moveup']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.analytics[':storeId'].rules[':ruleId'].moveup.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserAnalyticsStoreIdRulesRuleIdRunKey() {
  return ['v2', '/v2/user/analytics/:storeId/rules/:ruleId/run', 'POST'] as const
}

export function usePostV2UserAnalyticsStoreIdRulesRuleIdRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['run']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['run']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserAnalyticsStoreIdRulesRuleIdRunKey()
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
            (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['run']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.analytics[':storeId'].rules[':ruleId'].run.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserAnalyticsStoreIdTrackingClicksKey(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['tracking']['clicks']['$get']
  >,
) {
  return ['v2', '/v2/user/analytics/:storeId/tracking/clicks', args] as const
}

export function useGetV2UserAnalyticsStoreIdTrackingClicks<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['tracking']['clicks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.analytics)[':storeId']['tracking']['clicks']['$get']
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
        ? getGetV2UserAnalyticsStoreIdTrackingClicksKey(args)
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
                (typeof client.v2.user.analytics)[':storeId']['tracking']['clicks']['$get']
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
          client.v2.user.analytics[':storeId'].tracking.clicks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserAnalyticsStoreIdTrackingClicks<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['tracking']['clicks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.analytics)[':storeId']['tracking']['clicks']['$get']
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
        ? getGetV2UserAnalyticsStoreIdTrackingClicksKey(args)
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
                (typeof client.v2.user.analytics)[':storeId']['tracking']['clicks']['$get']
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
          client.v2.user.analytics[':storeId'].tracking.clicks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserAnalyticsStoreIdTrackingExternalordersKey(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['tracking']['externalorders']['$get']
  >,
) {
  return ['v2', '/v2/user/analytics/:storeId/tracking/externalorders', args] as const
}

export function useGetV2UserAnalyticsStoreIdTrackingExternalorders<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['tracking']['externalorders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.analytics)[':storeId']['tracking']['externalorders']['$get']
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
        ? getGetV2UserAnalyticsStoreIdTrackingExternalordersKey(args)
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
                (typeof client.v2.user.analytics)[':storeId']['tracking']['externalorders']['$get']
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
          client.v2.user.analytics[':storeId'].tracking.externalorders.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserAnalyticsStoreIdTrackingExternalorders<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['tracking']['externalorders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.analytics)[':storeId']['tracking']['externalorders']['$get']
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
        ? getGetV2UserAnalyticsStoreIdTrackingExternalordersKey(args)
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
                (typeof client.v2.user.analytics)[':storeId']['tracking']['externalorders']['$get']
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
          client.v2.user.analytics[':storeId'].tracking.externalorders.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserAnalyticsStoreIdTrackingOrdersKey(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['tracking']['orders']['$get']
  >,
) {
  return ['v2', '/v2/user/analytics/:storeId/tracking/orders', args] as const
}

export function useGetV2UserAnalyticsStoreIdTrackingOrders<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['tracking']['orders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.analytics)[':storeId']['tracking']['orders']['$get']
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
        ? getGetV2UserAnalyticsStoreIdTrackingOrdersKey(args)
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
                (typeof client.v2.user.analytics)[':storeId']['tracking']['orders']['$get']
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
          client.v2.user.analytics[':storeId'].tracking.orders.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserAnalyticsStoreIdTrackingOrders<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['tracking']['orders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.analytics)[':storeId']['tracking']['orders']['$get']
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
        ? getGetV2UserAnalyticsStoreIdTrackingOrdersKey(args)
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
                (typeof client.v2.user.analytics)[':storeId']['tracking']['orders']['$get']
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
          client.v2.user.analytics[':storeId'].tracking.orders.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserAnalyticsStoreIdTrackingStatusKey(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['tracking']['status']['$get']
  >,
) {
  return ['v2', '/v2/user/analytics/:storeId/tracking/status', args] as const
}

export function useGetV2UserAnalyticsStoreIdTrackingStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['tracking']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.analytics)[':storeId']['tracking']['status']['$get']
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
        ? getGetV2UserAnalyticsStoreIdTrackingStatusKey(args)
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
                (typeof client.v2.user.analytics)[':storeId']['tracking']['status']['$get']
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
          client.v2.user.analytics[':storeId'].tracking.status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserAnalyticsStoreIdTrackingStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['tracking']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.analytics)[':storeId']['tracking']['status']['$get']
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
        ? getGetV2UserAnalyticsStoreIdTrackingStatusKey(args)
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
                (typeof client.v2.user.analytics)[':storeId']['tracking']['status']['$get']
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
          client.v2.user.analytics[':storeId'].tracking.status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserCatalogsIndexKey() {
  return ['v2', '/v2/user/catalogs/'] as const
}

export function useGetV2UserCatalogsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.catalogs.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2UserCatalogsIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.catalogs.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.catalogs.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCatalogsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.catalogs.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2UserCatalogsIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.catalogs.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.catalogs.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserCatalogsBeezupColumnsKey() {
  return ['v2', '/v2/user/catalogs/beezupColumns'] as const
}

export function useGetV2UserCatalogsBeezupColumns<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.catalogs.beezupColumns.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2UserCatalogsBeezupColumnsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.catalogs.beezupColumns.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.catalogs.beezupColumns.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCatalogsBeezupColumns<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.catalogs.beezupColumns.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2UserCatalogsBeezupColumnsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.catalogs.beezupColumns.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.catalogs.beezupColumns.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserCatalogsImportationsKey() {
  return ['v2', '/v2/user/catalogs/importations'] as const
}

export function useGetV2UserCatalogsImportations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.catalogs.importations.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2UserCatalogsImportationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.catalogs.importations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.catalogs.importations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCatalogsImportations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.catalogs.importations.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2UserCatalogsImportationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.catalogs.importations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.catalogs.importations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserCatalogsStoreIdKey(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['$get']>,
) {
  return ['v2', '/v2/user/catalogs/:storeId', args] as const
}

export function useGetV2UserCatalogsStoreId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['$get']>>
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
        ? getGetV2UserCatalogsStoreIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.catalogs[':storeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCatalogsStoreId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['$get']>>
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
        ? getGetV2UserCatalogsStoreIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.catalogs[':storeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserCatalogsStoreIdAutoImportKey(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['autoImport']['$get']>,
) {
  return ['v2', '/v2/user/catalogs/:storeId/autoImport', args] as const
}

export function useGetV2UserCatalogsStoreIdAutoImport<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['autoImport']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['autoImport']['$get']>>
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
        ? getGetV2UserCatalogsStoreIdAutoImportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['autoImport']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.catalogs[':storeId'].autoImport.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCatalogsStoreIdAutoImport<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['autoImport']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['autoImport']['$get']>>
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
        ? getGetV2UserCatalogsStoreIdAutoImportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['autoImport']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.catalogs[':storeId'].autoImport.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2UserCatalogsStoreIdAutoImportKey() {
  return ['v2', '/v2/user/catalogs/:storeId/autoImport', 'DELETE'] as const
}

export function useDeleteV2UserCatalogsStoreIdAutoImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.catalogs)[':storeId']['autoImport']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['autoImport']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2UserCatalogsStoreIdAutoImportKey()
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
            (typeof client.v2.user.catalogs)[':storeId']['autoImport']['$delete']
          >
        },
      ) =>
        parseResponse(client.v2.user.catalogs[':storeId'].autoImport.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserCatalogsStoreIdAutoImportActivateKey() {
  return ['v2', '/v2/user/catalogs/:storeId/autoImport/activate', 'POST'] as const
}

export function usePostV2UserCatalogsStoreIdAutoImportActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['autoImport']['activate']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['autoImport']['activate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserCatalogsStoreIdAutoImportActivateKey()
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
            (typeof client.v2.user.catalogs)[':storeId']['autoImport']['activate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.catalogs[':storeId'].autoImport.activate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserCatalogsStoreIdAutoImportPauseKey() {
  return ['v2', '/v2/user/catalogs/:storeId/autoImport/pause', 'POST'] as const
}

export function usePostV2UserCatalogsStoreIdAutoImportPause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['autoImport']['pause']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['autoImport']['pause']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserCatalogsStoreIdAutoImportPauseKey()
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
            (typeof client.v2.user.catalogs)[':storeId']['autoImport']['pause']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.catalogs[':storeId'].autoImport.pause.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserCatalogsStoreIdAutoImportResumeKey() {
  return ['v2', '/v2/user/catalogs/:storeId/autoImport/resume', 'POST'] as const
}

export function usePostV2UserCatalogsStoreIdAutoImportResume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['autoImport']['resume']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['autoImport']['resume']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserCatalogsStoreIdAutoImportResumeKey()
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
            (typeof client.v2.user.catalogs)[':storeId']['autoImport']['resume']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.catalogs[':storeId'].autoImport.resume.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserCatalogsStoreIdAutoImportSchedulingIntervalKey() {
  return ['v2', '/v2/user/catalogs/:storeId/autoImport/scheduling/interval', 'POST'] as const
}

export function usePostV2UserCatalogsStoreIdAutoImportSchedulingInterval<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['autoImport']['scheduling']['interval']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['autoImport']['scheduling']['interval']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserCatalogsStoreIdAutoImportSchedulingIntervalKey()
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
            (typeof client.v2.user.catalogs)[':storeId']['autoImport']['scheduling']['interval']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.catalogs[':storeId'].autoImport.scheduling.interval.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserCatalogsStoreIdAutoImportSchedulingSchedulesKey() {
  return ['v2', '/v2/user/catalogs/:storeId/autoImport/scheduling/schedules', 'POST'] as const
}

export function usePostV2UserCatalogsStoreIdAutoImportSchedulingSchedules<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['autoImport']['scheduling']['schedules']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['autoImport']['scheduling']['schedules']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserCatalogsStoreIdAutoImportSchedulingSchedulesKey()
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
            (typeof client.v2.user.catalogs)[':storeId']['autoImport']['scheduling']['schedules']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.catalogs[':storeId'].autoImport.scheduling.schedules.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserCatalogsStoreIdAutoImportStartKey() {
  return ['v2', '/v2/user/catalogs/:storeId/autoImport/start', 'POST'] as const
}

export function usePostV2UserCatalogsStoreIdAutoImportStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.user.catalogs)[':storeId']['autoImport']['start']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['autoImport']['start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserCatalogsStoreIdAutoImportStartKey()
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
            (typeof client.v2.user.catalogs)[':storeId']['autoImport']['start']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.catalogs[':storeId'].autoImport.start.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserCatalogsStoreIdCatalogColumnsKey(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['catalogColumns']['$get']>,
) {
  return ['v2', '/v2/user/catalogs/:storeId/catalogColumns', args] as const
}

export function useGetV2UserCatalogsStoreIdCatalogColumns<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['catalogColumns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.catalogs)[':storeId']['catalogColumns']['$get']>
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
        ? getGetV2UserCatalogsStoreIdCatalogColumnsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.catalogs)[':storeId']['catalogColumns']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.catalogs[':storeId'].catalogColumns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCatalogsStoreIdCatalogColumns<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['catalogColumns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.catalogs)[':storeId']['catalogColumns']['$get']>
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
        ? getGetV2UserCatalogsStoreIdCatalogColumnsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.catalogs)[':storeId']['catalogColumns']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.catalogs[':storeId'].catalogColumns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserCatalogsStoreIdCatalogColumnsColumnIdRenameKey() {
  return ['v2', '/v2/user/catalogs/:storeId/catalogColumns/:columnId/rename', 'POST'] as const
}

export function usePostV2UserCatalogsStoreIdCatalogColumnsColumnIdRename<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['catalogColumns'][':columnId']['rename']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['catalogColumns'][':columnId']['rename']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserCatalogsStoreIdCatalogColumnsColumnIdRenameKey()
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
            (typeof client.v2.user.catalogs)[':storeId']['catalogColumns'][':columnId']['rename']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.catalogs[':storeId'].catalogColumns[':columnId'].rename.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserCatalogsStoreIdCategoriesKey(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['categories']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/catalogs/:storeId/categories', keyArgs] as const
}

export function useGetV2UserCatalogsStoreIdCategories<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['categories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['categories']['$get']>>
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
        ? getGetV2UserCatalogsStoreIdCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['categories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.catalogs[':storeId'].categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCatalogsStoreIdCategories<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['categories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['categories']['$get']>>
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
        ? getGetV2UserCatalogsStoreIdCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['categories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.catalogs[':storeId'].categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserCatalogsStoreIdCustomColumnsKey(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['customColumns']['$get']>,
) {
  return ['v2', '/v2/user/catalogs/:storeId/customColumns', args] as const
}

export function useGetV2UserCatalogsStoreIdCustomColumns<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['customColumns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.catalogs)[':storeId']['customColumns']['$get']>
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
        ? getGetV2UserCatalogsStoreIdCustomColumnsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.catalogs)[':storeId']['customColumns']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.catalogs[':storeId'].customColumns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCatalogsStoreIdCustomColumns<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['customColumns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.catalogs)[':storeId']['customColumns']['$get']>
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
        ? getGetV2UserCatalogsStoreIdCustomColumnsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.catalogs)[':storeId']['customColumns']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.catalogs[':storeId'].customColumns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserCatalogsStoreIdCustomColumnsComputeExpressionKey() {
  return ['v2', '/v2/user/catalogs/:storeId/customColumns/computeExpression', 'POST'] as const
}

export function usePostV2UserCatalogsStoreIdCustomColumnsComputeExpression<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.user.catalogs)[':storeId']['customColumns']['computeExpression']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['customColumns']['computeExpression']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserCatalogsStoreIdCustomColumnsComputeExpressionKey()
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
            (typeof client.v2.user.catalogs)[':storeId']['customColumns']['computeExpression']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.catalogs[':storeId'].customColumns.computeExpression.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2UserCatalogsStoreIdCustomColumnsColumnIdKey() {
  return ['v2', '/v2/user/catalogs/:storeId/customColumns/:columnId', 'PUT'] as const
}

export function usePutV2UserCatalogsStoreIdCustomColumnsColumnId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2UserCatalogsStoreIdCustomColumnsColumnIdKey()
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
            (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.catalogs[':storeId'].customColumns[':columnId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2UserCatalogsStoreIdCustomColumnsColumnIdKey() {
  return ['v2', '/v2/user/catalogs/:storeId/customColumns/:columnId', 'DELETE'] as const
}

export function useDeleteV2UserCatalogsStoreIdCustomColumnsColumnId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2UserCatalogsStoreIdCustomColumnsColumnIdKey()
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
            (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.catalogs[':storeId'].customColumns[':columnId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserCatalogsStoreIdCustomColumnsColumnIdExpressionKey(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['expression']['$get']
  >,
) {
  return ['v2', '/v2/user/catalogs/:storeId/customColumns/:columnId/expression', args] as const
}

export function useGetV2UserCatalogsStoreIdCustomColumnsColumnIdExpression<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['expression']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['expression']['$get']
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
        ? getGetV2UserCatalogsStoreIdCustomColumnsColumnIdExpressionKey(args)
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
                (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['expression']['$get']
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
          client.v2.user.catalogs[':storeId'].customColumns[':columnId'].expression.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCatalogsStoreIdCustomColumnsColumnIdExpression<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['expression']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['expression']['$get']
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
        ? getGetV2UserCatalogsStoreIdCustomColumnsColumnIdExpressionKey(args)
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
                (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['expression']['$get']
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
          client.v2.user.catalogs[':storeId'].customColumns[':columnId'].expression.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2UserCatalogsStoreIdCustomColumnsColumnIdExpressionKey() {
  return ['v2', '/v2/user/catalogs/:storeId/customColumns/:columnId/expression', 'PUT'] as const
}

export function usePutV2UserCatalogsStoreIdCustomColumnsColumnIdExpression<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['expression']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['expression']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2UserCatalogsStoreIdCustomColumnsColumnIdExpressionKey()
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
            (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['expression']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.catalogs[':storeId'].customColumns[':columnId'].expression.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserCatalogsStoreIdCustomColumnsColumnIdRenameKey() {
  return ['v2', '/v2/user/catalogs/:storeId/customColumns/:columnId/rename', 'POST'] as const
}

export function usePostV2UserCatalogsStoreIdCustomColumnsColumnIdRename<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['rename']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['rename']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserCatalogsStoreIdCustomColumnsColumnIdRenameKey()
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
            (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['rename']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.catalogs[':storeId'].customColumns[':columnId'].rename.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserCatalogsStoreIdImportationsKey(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['importations']['$get']>,
) {
  return ['v2', '/v2/user/catalogs/:storeId/importations', args] as const
}

export function useGetV2UserCatalogsStoreIdImportations<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['importations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.catalogs)[':storeId']['importations']['$get']>
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
        ? getGetV2UserCatalogsStoreIdImportationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.catalogs)[':storeId']['importations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.catalogs[':storeId'].importations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCatalogsStoreIdImportations<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['importations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.catalogs)[':storeId']['importations']['$get']>
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
        ? getGetV2UserCatalogsStoreIdImportationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.catalogs)[':storeId']['importations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.catalogs[':storeId'].importations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserCatalogsStoreIdImportationsStartKey() {
  return ['v2', '/v2/user/catalogs/:storeId/importations/start', 'POST'] as const
}

export function usePostV2UserCatalogsStoreIdImportationsStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.user.catalogs)[':storeId']['importations']['start']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['importations']['start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserCatalogsStoreIdImportationsStartKey()
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
            (typeof client.v2.user.catalogs)[':storeId']['importations']['start']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.catalogs[':storeId'].importations.start.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserCatalogsStoreIdImportationsExecutionIdKey(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['$get']
  >,
) {
  return ['v2', '/v2/user/catalogs/:storeId/importations/:executionId', args] as const
}

export function useGetV2UserCatalogsStoreIdImportationsExecutionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['$get']
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
        ? getGetV2UserCatalogsStoreIdImportationsExecutionIdKey(args)
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
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['$get']
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
          client.v2.user.catalogs[':storeId'].importations[':executionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCatalogsStoreIdImportationsExecutionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['$get']
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
        ? getGetV2UserCatalogsStoreIdImportationsExecutionIdKey(args)
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
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['$get']
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
          client.v2.user.catalogs[':storeId'].importations[':executionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdCancelKey() {
  return ['v2', '/v2/user/catalogs/:storeId/importations/:executionId/cancel', 'POST'] as const
}

export function usePostV2UserCatalogsStoreIdImportationsExecutionIdCancel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['cancel']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserCatalogsStoreIdImportationsExecutionIdCancelKey()
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
            (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.catalogs[':storeId'].importations[':executionId'].cancel.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsKey(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns']['$get']
  >,
) {
  return [
    'v2',
    '/v2/user/catalogs/:storeId/importations/:executionId/catalogColumns',
    args,
  ] as const
}

export function useGetV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumns<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns']['$get']
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
        ? getGetV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsKey(args)
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
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns']['$get']
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
          client.v2.user.catalogs[':storeId'].importations[':executionId'].catalogColumns.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumns<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns']['$get']
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
        ? getGetV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsKey(args)
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
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns']['$get']
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
          client.v2.user.catalogs[':storeId'].importations[':executionId'].catalogColumns.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdKey() {
  return [
    'v2',
    '/v2/user/catalogs/:storeId/importations/:executionId/catalogColumns/:columnId',
    'POST',
  ] as const
}

export function usePostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdKey()
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
            (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.catalogs[':storeId'].importations[':executionId'].catalogColumns[
            ':columnId'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdIgnoreKey() {
  return [
    'v2',
    '/v2/user/catalogs/:storeId/importations/:executionId/catalogColumns/:columnId/ignore',
    'POST',
  ] as const
}

export function usePostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdIgnore<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['ignore']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['ignore']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdIgnoreKey()
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
            (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['ignore']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.catalogs[':storeId'].importations[':executionId'].catalogColumns[
            ':columnId'
          ].ignore.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdMapKey() {
  return [
    'v2',
    '/v2/user/catalogs/:storeId/importations/:executionId/catalogColumns/:columnId/map',
    'POST',
  ] as const
}

export function usePostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdMap<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['map']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['map']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdMapKey()
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
            (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['map']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.catalogs[':storeId'].importations[':executionId'].catalogColumns[
            ':columnId'
          ].map.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdReattendKey() {
  return [
    'v2',
    '/v2/user/catalogs/:storeId/importations/:executionId/catalogColumns/:columnId/reattend',
    'POST',
  ] as const
}

export function usePostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdReattend<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['reattend']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['reattend']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdReattendKey()
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
            (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['reattend']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.catalogs[':storeId'].importations[':executionId'].catalogColumns[
            ':columnId'
          ].reattend.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdUnmapKey() {
  return [
    'v2',
    '/v2/user/catalogs/:storeId/importations/:executionId/catalogColumns/:columnId/unmap',
    'POST',
  ] as const
}

export function usePostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdUnmap<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['unmap']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['unmap']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdUnmapKey()
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
            (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['unmap']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.catalogs[':storeId'].importations[':executionId'].catalogColumns[
            ':columnId'
          ].unmap.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdCommitKey() {
  return ['v2', '/v2/user/catalogs/:storeId/importations/:executionId/commit', 'POST'] as const
}

export function usePostV2UserCatalogsStoreIdImportationsExecutionIdCommit<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['commit']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['commit']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserCatalogsStoreIdImportationsExecutionIdCommitKey()
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
            (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['commit']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.catalogs[':storeId'].importations[':executionId'].commit.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdCommitColumnsKey() {
  return [
    'v2',
    '/v2/user/catalogs/:storeId/importations/:executionId/commitColumns',
    'POST',
  ] as const
}

export function usePostV2UserCatalogsStoreIdImportationsExecutionIdCommitColumns<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['commitColumns']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['commitColumns']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserCatalogsStoreIdImportationsExecutionIdCommitColumnsKey()
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
            (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['commitColumns']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.catalogs[':storeId'].importations[':executionId'].commitColumns.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdConfigureRemainingCatalogColumnsKey() {
  return [
    'v2',
    '/v2/user/catalogs/:storeId/importations/:executionId/configureRemainingCatalogColumns',
    'POST',
  ] as const
}

export function usePostV2UserCatalogsStoreIdImportationsExecutionIdConfigureRemainingCatalogColumns<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['configureRemainingCatalogColumns']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['configureRemainingCatalogColumns']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV2UserCatalogsStoreIdImportationsExecutionIdConfigureRemainingCatalogColumnsKey()
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
            (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['configureRemainingCatalogColumns']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.catalogs[':storeId'].importations[
            ':executionId'
          ].configureRemainingCatalogColumns.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsKey(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns']['$get']
  >,
) {
  return ['v2', '/v2/user/catalogs/:storeId/importations/:executionId/customColumns', args] as const
}

export function useGetV2UserCatalogsStoreIdImportationsExecutionIdCustomColumns<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns']['$get']
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
        ? getGetV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsKey(args)
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
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns']['$get']
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
          client.v2.user.catalogs[':storeId'].importations[':executionId'].customColumns.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCatalogsStoreIdImportationsExecutionIdCustomColumns<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns']['$get']
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
        ? getGetV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsKey(args)
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
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns']['$get']
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
          client.v2.user.catalogs[':storeId'].importations[':executionId'].customColumns.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdKey() {
  return [
    'v2',
    '/v2/user/catalogs/:storeId/importations/:executionId/customColumns/:columnId',
    'PUT',
  ] as const
}

export function usePutV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdKey()
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
            (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.catalogs[':storeId'].importations[':executionId'].customColumns[
            ':columnId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdKey() {
  return [
    'v2',
    '/v2/user/catalogs/:storeId/importations/:executionId/customColumns/:columnId',
    'DELETE',
  ] as const
}

export function useDeleteV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdKey()
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
            (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.catalogs[':storeId'].importations[':executionId'].customColumns[
            ':columnId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdExpressionKey(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['expression']['$get']
  >,
) {
  return [
    'v2',
    '/v2/user/catalogs/:storeId/importations/:executionId/customColumns/:columnId/expression',
    args,
  ] as const
}

export function useGetV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdExpression<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['expression']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['expression']['$get']
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
        ? getGetV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdExpressionKey(args)
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
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['expression']['$get']
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
          client.v2.user.catalogs[':storeId'].importations[':executionId'].customColumns[
            ':columnId'
          ].expression.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdExpression<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['expression']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['expression']['$get']
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
        ? getGetV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdExpressionKey(args)
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
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['expression']['$get']
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
          client.v2.user.catalogs[':storeId'].importations[':executionId'].customColumns[
            ':columnId'
          ].expression.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdMapKey() {
  return [
    'v2',
    '/v2/user/catalogs/:storeId/importations/:executionId/customColumns/:columnId/map',
    'POST',
  ] as const
}

export function usePostV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdMap<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['map']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['map']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdMapKey()
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
            (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['map']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.catalogs[':storeId'].importations[':executionId'].customColumns[
            ':columnId'
          ].map.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdUnmapKey() {
  return [
    'v2',
    '/v2/user/catalogs/:storeId/importations/:executionId/customColumns/:columnId/unmap',
    'POST',
  ] as const
}

export function usePostV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdUnmap<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['unmap']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['unmap']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdUnmapKey()
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
            (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['unmap']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.catalogs[':storeId'].importations[':executionId'].customColumns[
            ':columnId'
          ].unmap.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexKey(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['productSamples'][':productSampleIndex']['$get']
  >,
) {
  return [
    'v2',
    '/v2/user/catalogs/:storeId/importations/:executionId/productSamples/:productSampleIndex',
    args,
  ] as const
}

export function useGetV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['productSamples'][':productSampleIndex']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['productSamples'][':productSampleIndex']['$get']
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
        ? getGetV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexKey(
            args,
          )
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
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['productSamples'][':productSampleIndex']['$get']
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
          client.v2.user.catalogs[':storeId'].importations[':executionId'].productSamples[
            ':productSampleIndex'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['productSamples'][':productSampleIndex']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['productSamples'][':productSampleIndex']['$get']
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
        ? getGetV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexKey(
            args,
          )
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
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['productSamples'][':productSampleIndex']['$get']
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
          client.v2.user.catalogs[':storeId'].importations[':executionId'].productSamples[
            ':productSampleIndex'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexCustomColumnsColumnIdKey(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['productSamples'][':productSampleIndex']['customColumns'][':columnId']['$get']
  >,
) {
  return [
    'v2',
    '/v2/user/catalogs/:storeId/importations/:executionId/productSamples/:productSampleIndex/customColumns/:columnId',
    args,
  ] as const
}

export function useGetV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexCustomColumnsColumnId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['productSamples'][':productSampleIndex']['customColumns'][':columnId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['productSamples'][':productSampleIndex']['customColumns'][':columnId']['$get']
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
        ? getGetV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexCustomColumnsColumnIdKey(
            args,
          )
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
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['productSamples'][':productSampleIndex']['customColumns'][':columnId']['$get']
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
          client.v2.user.catalogs[':storeId'].importations[':executionId'].productSamples[
            ':productSampleIndex'
          ].customColumns[':columnId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexCustomColumnsColumnId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['productSamples'][':productSampleIndex']['customColumns'][':columnId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['productSamples'][':productSampleIndex']['customColumns'][':columnId']['$get']
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
        ? getGetV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexCustomColumnsColumnIdKey(
            args,
          )
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
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['productSamples'][':productSampleIndex']['customColumns'][':columnId']['$get']
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
          client.v2.user.catalogs[':storeId'].importations[':executionId'].productSamples[
            ':productSampleIndex'
          ].customColumns[':columnId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdProductsListKey() {
  return [
    'v2',
    '/v2/user/catalogs/:storeId/importations/:executionId/products/list',
    'POST',
  ] as const
}

export function usePostV2UserCatalogsStoreIdImportationsExecutionIdProductsList<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['products']['list']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['products']['list']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserCatalogsStoreIdImportationsExecutionIdProductsListKey()
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
            (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['products']['list']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.catalogs[':storeId'].importations[':executionId'].products.list.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserCatalogsStoreIdImportationsExecutionIdReportKey(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['report']['$get']
  >,
) {
  return ['v2', '/v2/user/catalogs/:storeId/importations/:executionId/report', args] as const
}

export function useGetV2UserCatalogsStoreIdImportationsExecutionIdReport<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['report']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['report']['$get']
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
        ? getGetV2UserCatalogsStoreIdImportationsExecutionIdReportKey(args)
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
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['report']['$get']
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
          client.v2.user.catalogs[':storeId'].importations[':executionId'].report.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCatalogsStoreIdImportationsExecutionIdReport<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['report']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['report']['$get']
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
        ? getGetV2UserCatalogsStoreIdImportationsExecutionIdReportKey(args)
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
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['report']['$get']
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
          client.v2.user.catalogs[':storeId'].importations[':executionId'].report.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserCatalogsStoreIdImportationsExecutionIdTechnicalProgressionKey(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['technicalProgression']['$get']
  >,
) {
  return [
    'v2',
    '/v2/user/catalogs/:storeId/importations/:executionId/technicalProgression',
    args,
  ] as const
}

export function useGetV2UserCatalogsStoreIdImportationsExecutionIdTechnicalProgression<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['technicalProgression']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['technicalProgression']['$get']
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
        ? getGetV2UserCatalogsStoreIdImportationsExecutionIdTechnicalProgressionKey(args)
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
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['technicalProgression']['$get']
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
          client.v2.user.catalogs[':storeId'].importations[
            ':executionId'
          ].technicalProgression.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCatalogsStoreIdImportationsExecutionIdTechnicalProgression<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['technicalProgression']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['technicalProgression']['$get']
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
        ? getGetV2UserCatalogsStoreIdImportationsExecutionIdTechnicalProgressionKey(args)
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
                (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['technicalProgression']['$get']
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
          client.v2.user.catalogs[':storeId'].importations[
            ':executionId'
          ].technicalProgression.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserCatalogsStoreIdInputConfigurationKey(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['inputConfiguration']['$get']
  >,
) {
  return ['v2', '/v2/user/catalogs/:storeId/inputConfiguration', args] as const
}

export function useGetV2UserCatalogsStoreIdInputConfiguration<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['inputConfiguration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.catalogs)[':storeId']['inputConfiguration']['$get']>
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
        ? getGetV2UserCatalogsStoreIdInputConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.catalogs)[':storeId']['inputConfiguration']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.user.catalogs[':storeId'].inputConfiguration.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCatalogsStoreIdInputConfiguration<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['inputConfiguration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.catalogs)[':storeId']['inputConfiguration']['$get']>
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
        ? getGetV2UserCatalogsStoreIdInputConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.catalogs)[':storeId']['inputConfiguration']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.user.catalogs[':storeId'].inputConfiguration.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserCatalogsStoreIdProductsKey(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['products']['$get']>,
) {
  return ['v2', '/v2/user/catalogs/:storeId/products', args] as const
}

export function useGetV2UserCatalogsStoreIdProducts<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['products']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['products']['$get']>>
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
        ? getGetV2UserCatalogsStoreIdProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['products']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.catalogs[':storeId'].products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCatalogsStoreIdProducts<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['products']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['products']['$get']>>
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
        ? getGetV2UserCatalogsStoreIdProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['products']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.catalogs[':storeId'].products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserCatalogsStoreIdProductsListKey() {
  return ['v2', '/v2/user/catalogs/:storeId/products/list', 'POST'] as const
}

export function usePostV2UserCatalogsStoreIdProductsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.user.catalogs)[':storeId']['products']['list']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['products']['list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserCatalogsStoreIdProductsListKey()
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
            (typeof client.v2.user.catalogs)[':storeId']['products']['list']['$post']
          >
        },
      ) =>
        parseResponse(client.v2.user.catalogs[':storeId'].products.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserCatalogsStoreIdProductsRandomKey(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['products']['random']['$get']
  >,
) {
  return ['v2', '/v2/user/catalogs/:storeId/products/random', args] as const
}

export function useGetV2UserCatalogsStoreIdProductsRandom<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['products']['random']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.catalogs)[':storeId']['products']['random']['$get']>
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
        ? getGetV2UserCatalogsStoreIdProductsRandomKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.catalogs)[':storeId']['products']['random']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.user.catalogs[':storeId'].products.random.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCatalogsStoreIdProductsRandom<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['products']['random']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.catalogs)[':storeId']['products']['random']['$get']>
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
        ? getGetV2UserCatalogsStoreIdProductsRandomKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.catalogs)[':storeId']['products']['random']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.user.catalogs[':storeId'].products.random.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserCatalogsStoreIdProductsProductIdKey(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['products'][':productId']['$get']
  >,
) {
  return ['v2', '/v2/user/catalogs/:storeId/products/:productId', args] as const
}

export function useGetV2UserCatalogsStoreIdProductsProductId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['products'][':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['products'][':productId']['$get']
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
        ? getGetV2UserCatalogsStoreIdProductsProductIdKey(args)
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
                (typeof client.v2.user.catalogs)[':storeId']['products'][':productId']['$get']
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
          client.v2.user.catalogs[':storeId'].products[':productId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCatalogsStoreIdProductsProductId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['products'][':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.catalogs)[':storeId']['products'][':productId']['$get']
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
        ? getGetV2UserCatalogsStoreIdProductsProductIdKey(args)
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
                (typeof client.v2.user.catalogs)[':storeId']['products'][':productId']['$get']
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
          client.v2.user.catalogs[':storeId'].products[':productId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserChannelCatalogsIndexKey(
  args: InferRequestType<typeof client.v2.user.channelCatalogs.index.$get>,
) {
  return ['v2', '/v2/user/channelCatalogs/', args] as const
}

export function useGetV2UserChannelCatalogsIndex<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.channelCatalogs.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.channelCatalogs.index.$get>>
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
        ? getGetV2UserChannelCatalogsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.channelCatalogs.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.channelCatalogs.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserChannelCatalogsIndex<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.channelCatalogs.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.channelCatalogs.index.$get>>
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
        ? getGetV2UserChannelCatalogsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.channelCatalogs.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.channelCatalogs.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserChannelCatalogsIndexKey() {
  return ['v2', '/v2/user/channelCatalogs/', 'POST'] as const
}

export function usePostV2UserChannelCatalogsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.channelCatalogs.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.user.channelCatalogs.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserChannelCatalogsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.user.channelCatalogs.index.$post> },
      ) => parseResponse(client.v2.user.channelCatalogs.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserChannelCatalogsFilterOperatorsKey() {
  return ['v2', '/v2/user/channelCatalogs/filterOperators'] as const
}

export function useGetV2UserChannelCatalogsFilterOperators<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.channelCatalogs.filterOperators.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2UserChannelCatalogsFilterOperatorsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.channelCatalogs.filterOperators.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.user.channelCatalogs.filterOperators.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserChannelCatalogsFilterOperators<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.channelCatalogs.filterOperators.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2UserChannelCatalogsFilterOperatorsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.channelCatalogs.filterOperators.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.user.channelCatalogs.filterOperators.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserChannelCatalogsProductsKey() {
  return ['v2', '/v2/user/channelCatalogs/products', 'POST'] as const
}

export function usePostV2UserChannelCatalogsProducts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.channelCatalogs.products.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.user.channelCatalogs.products.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserChannelCatalogsProductsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.user.channelCatalogs.products.$post> },
      ) => parseResponse(client.v2.user.channelCatalogs.products.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserChannelCatalogsChannelCatalogIdKey(
  args: InferRequestType<(typeof client.v2.user.channelCatalogs)[':channelCatalogId']['$get']>,
) {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId', args] as const
}

export function useGetV2UserChannelCatalogsChannelCatalogId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.channelCatalogs)[':channelCatalogId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.channelCatalogs)[':channelCatalogId']['$get']>
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
        ? getGetV2UserChannelCatalogsChannelCatalogIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.channelCatalogs)[':channelCatalogId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.user.channelCatalogs[':channelCatalogId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserChannelCatalogsChannelCatalogId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.channelCatalogs)[':channelCatalogId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.channelCatalogs)[':channelCatalogId']['$get']>
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
        ? getGetV2UserChannelCatalogsChannelCatalogIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.channelCatalogs)[':channelCatalogId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.user.channelCatalogs[':channelCatalogId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2UserChannelCatalogsChannelCatalogIdKey() {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId', 'DELETE'] as const
}

export function useDeleteV2UserChannelCatalogsChannelCatalogId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.channelCatalogs)[':channelCatalogId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.user.channelCatalogs)[':channelCatalogId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2UserChannelCatalogsChannelCatalogIdKey()
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
            (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.channelCatalogs[':channelCatalogId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserChannelCatalogsChannelCatalogIdCategoriesKey(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['$get']
  >,
) {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId/categories', args] as const
}

export function useGetV2UserChannelCatalogsChannelCatalogIdCategories<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['$get']
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
        ? getGetV2UserChannelCatalogsChannelCatalogIdCategoriesKey(args)
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
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['$get']
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
          client.v2.user.channelCatalogs[':channelCatalogId'].categories.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserChannelCatalogsChannelCatalogIdCategories<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['$get']
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
        ? getGetV2UserChannelCatalogsChannelCatalogIdCategoriesKey(args)
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
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['$get']
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
          client.v2.user.channelCatalogs[':channelCatalogId'].categories.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserChannelCatalogsChannelCatalogIdCategoriesConfigureKey() {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId/categories/configure', 'POST'] as const
}

export function usePostV2UserChannelCatalogsChannelCatalogIdCategoriesConfigure<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['configure']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['configure']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserChannelCatalogsChannelCatalogIdCategoriesConfigureKey()
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
            (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['configure']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.channelCatalogs[':channelCatalogId'].categories.configure.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserChannelCatalogsChannelCatalogIdCategoriesDisableMappingKey() {
  return [
    'v2',
    '/v2/user/channelCatalogs/:channelCatalogId/categories/disableMapping',
    'POST',
  ] as const
}

export function usePostV2UserChannelCatalogsChannelCatalogIdCategoriesDisableMapping<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['disableMapping']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['disableMapping']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV2UserChannelCatalogsChannelCatalogIdCategoriesDisableMappingKey()
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
            (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['disableMapping']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.channelCatalogs[':channelCatalogId'].categories.disableMapping.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserChannelCatalogsChannelCatalogIdCategoriesReenableMappingKey() {
  return [
    'v2',
    '/v2/user/channelCatalogs/:channelCatalogId/categories/reenableMapping',
    'POST',
  ] as const
}

export function usePostV2UserChannelCatalogsChannelCatalogIdCategoriesReenableMapping<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['reenableMapping']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['reenableMapping']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV2UserChannelCatalogsChannelCatalogIdCategoriesReenableMappingKey()
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
            (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['reenableMapping']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.channelCatalogs[':channelCatalogId'].categories.reenableMapping.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2UserChannelCatalogsChannelCatalogIdColumnMappingsKey() {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId/columnMappings', 'PUT'] as const
}

export function usePutV2UserChannelCatalogsChannelCatalogIdColumnMappings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['columnMappings']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['columnMappings']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2UserChannelCatalogsChannelCatalogIdColumnMappingsKey()
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
            (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['columnMappings']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.channelCatalogs[':channelCatalogId'].columnMappings.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserChannelCatalogsChannelCatalogIdDisableKey() {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId/disable', 'POST'] as const
}

export function usePostV2UserChannelCatalogsChannelCatalogIdDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['disable']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['disable']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserChannelCatalogsChannelCatalogIdDisableKey()
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
            (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['disable']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.channelCatalogs[':channelCatalogId'].disable.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserChannelCatalogsChannelCatalogIdEnableKey() {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId/enable', 'POST'] as const
}

export function usePostV2UserChannelCatalogsChannelCatalogIdEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['enable']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['enable']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserChannelCatalogsChannelCatalogIdEnableKey()
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
            (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['enable']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.channelCatalogs[':channelCatalogId'].enable.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserChannelCatalogsChannelCatalogIdExclusionFiltersKey(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exclusionFilters']['$get']
  >,
) {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId/exclusionFilters', args] as const
}

export function useGetV2UserChannelCatalogsChannelCatalogIdExclusionFilters<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exclusionFilters']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exclusionFilters']['$get']
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
        ? getGetV2UserChannelCatalogsChannelCatalogIdExclusionFiltersKey(args)
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
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exclusionFilters']['$get']
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
          client.v2.user.channelCatalogs[':channelCatalogId'].exclusionFilters.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserChannelCatalogsChannelCatalogIdExclusionFilters<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exclusionFilters']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exclusionFilters']['$get']
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
        ? getGetV2UserChannelCatalogsChannelCatalogIdExclusionFiltersKey(args)
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
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exclusionFilters']['$get']
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
          client.v2.user.channelCatalogs[':channelCatalogId'].exclusionFilters.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2UserChannelCatalogsChannelCatalogIdExclusionFiltersKey() {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId/exclusionFilters', 'PUT'] as const
}

export function usePutV2UserChannelCatalogsChannelCatalogIdExclusionFilters<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exclusionFilters']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exclusionFilters']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2UserChannelCatalogsChannelCatalogIdExclusionFiltersKey()
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
            (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exclusionFilters']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.channelCatalogs[':channelCatalogId'].exclusionFilters.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserChannelCatalogsChannelCatalogIdExportationsCacheKey(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exportations']['cache']['$get']
  >,
) {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId/exportations/cache', args] as const
}

export function useGetV2UserChannelCatalogsChannelCatalogIdExportationsCache<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exportations']['cache']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exportations']['cache']['$get']
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
        ? getGetV2UserChannelCatalogsChannelCatalogIdExportationsCacheKey(args)
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
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exportations']['cache']['$get']
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
          client.v2.user.channelCatalogs[':channelCatalogId'].exportations.cache.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserChannelCatalogsChannelCatalogIdExportationsCache<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exportations']['cache']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exportations']['cache']['$get']
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
        ? getGetV2UserChannelCatalogsChannelCatalogIdExportationsCacheKey(args)
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
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exportations']['cache']['$get']
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
          client.v2.user.channelCatalogs[':channelCatalogId'].exportations.cache.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserChannelCatalogsChannelCatalogIdExportationsCacheClearKey() {
  return [
    'v2',
    '/v2/user/channelCatalogs/:channelCatalogId/exportations/cache/clear',
    'POST',
  ] as const
}

export function usePostV2UserChannelCatalogsChannelCatalogIdExportationsCacheClear<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exportations']['cache']['clear']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exportations']['cache']['clear']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV2UserChannelCatalogsChannelCatalogIdExportationsCacheClearKey()
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
            (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exportations']['cache']['clear']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.channelCatalogs[':channelCatalogId'].exportations.cache.clear.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserChannelCatalogsChannelCatalogIdExportationsHistoryKey(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exportations']['history']['$get']
  >,
) {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId/exportations/history', args] as const
}

export function useGetV2UserChannelCatalogsChannelCatalogIdExportationsHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exportations']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exportations']['history']['$get']
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
        ? getGetV2UserChannelCatalogsChannelCatalogIdExportationsHistoryKey(args)
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
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exportations']['history']['$get']
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
          client.v2.user.channelCatalogs[':channelCatalogId'].exportations.history.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserChannelCatalogsChannelCatalogIdExportationsHistory<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exportations']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exportations']['history']['$get']
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
        ? getGetV2UserChannelCatalogsChannelCatalogIdExportationsHistoryKey(args)
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
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exportations']['history']['$get']
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
          client.v2.user.channelCatalogs[':channelCatalogId'].exportations.history.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserChannelCatalogsChannelCatalogIdProductsKey() {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId/products', 'POST'] as const
}

export function usePostV2UserChannelCatalogsChannelCatalogIdProducts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserChannelCatalogsChannelCatalogIdProductsKey()
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
            (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.channelCatalogs[':channelCatalogId'].products.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserChannelCatalogsChannelCatalogIdProductsCountersKey(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products']['counters']['$get']
  >,
) {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId/products/counters', args] as const
}

export function useGetV2UserChannelCatalogsChannelCatalogIdProductsCounters<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products']['counters']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products']['counters']['$get']
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
        ? getGetV2UserChannelCatalogsChannelCatalogIdProductsCountersKey(args)
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
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products']['counters']['$get']
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
          client.v2.user.channelCatalogs[':channelCatalogId'].products.counters.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserChannelCatalogsChannelCatalogIdProductsCounters<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products']['counters']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products']['counters']['$get']
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
        ? getGetV2UserChannelCatalogsChannelCatalogIdProductsCountersKey(args)
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
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products']['counters']['$get']
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
          client.v2.user.channelCatalogs[':channelCatalogId'].products.counters.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserChannelCatalogsChannelCatalogIdProductsExportKey() {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId/products/export', 'POST'] as const
}

export function usePostV2UserChannelCatalogsChannelCatalogIdProductsExport<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products']['export']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products']['export']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserChannelCatalogsChannelCatalogIdProductsExportKey()
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
            (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products']['export']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.channelCatalogs[':channelCatalogId'].products.export.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserChannelCatalogsChannelCatalogIdProductsProductIdKey(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['$get']
  >,
) {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId/products/:productId', args] as const
}

export function useGetV2UserChannelCatalogsChannelCatalogIdProductsProductId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['$get']
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
        ? getGetV2UserChannelCatalogsChannelCatalogIdProductsProductIdKey(args)
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
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['$get']
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
          client.v2.user.channelCatalogs[':channelCatalogId'].products[':productId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserChannelCatalogsChannelCatalogIdProductsProductId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['$get']
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
        ? getGetV2UserChannelCatalogsChannelCatalogIdProductsProductIdKey(args)
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
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['$get']
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
          client.v2.user.channelCatalogs[':channelCatalogId'].products[':productId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserChannelCatalogsChannelCatalogIdProductsProductIdDisableKey() {
  return [
    'v2',
    '/v2/user/channelCatalogs/:channelCatalogId/products/:productId/disable',
    'POST',
  ] as const
}

export function usePostV2UserChannelCatalogsChannelCatalogIdProductsProductIdDisable<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['disable']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['disable']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV2UserChannelCatalogsChannelCatalogIdProductsProductIdDisableKey()
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
            (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['disable']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.channelCatalogs[':channelCatalogId'].products[':productId'].disable.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesKey() {
  return [
    'v2',
    '/v2/user/channelCatalogs/:channelCatalogId/products/:productId/overrides',
    'PUT',
  ] as const
}

export function usePutV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverrides<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesKey()
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
            (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.channelCatalogs[':channelCatalogId'].products[':productId'].overrides.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopyKey(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides']['copy']['$get']
  >,
) {
  return [
    'v2',
    '/v2/user/channelCatalogs/:channelCatalogId/products/:productId/overrides/copy',
    args,
  ] as const
}

export function useGetV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopy<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides']['copy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides']['copy']['$get']
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
        ? getGetV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopyKey(args)
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
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides']['copy']['$get']
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
          client.v2.user.channelCatalogs[':channelCatalogId'].products[
            ':productId'
          ].overrides.copy.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopy<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides']['copy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides']['copy']['$get']
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
        ? getGetV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopyKey(args)
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
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides']['copy']['$get']
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
          client.v2.user.channelCatalogs[':channelCatalogId'].products[
            ':productId'
          ].overrides.copy.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopyKey() {
  return [
    'v2',
    '/v2/user/channelCatalogs/:channelCatalogId/products/:productId/overrides/copy',
    'POST',
  ] as const
}

export function usePostV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides']['copy']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides']['copy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopyKey()
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
            (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides']['copy']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.channelCatalogs[':channelCatalogId'].products[
            ':productId'
          ].overrides.copy.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesChannelColumnIdKey() {
  return [
    'v2',
    '/v2/user/channelCatalogs/:channelCatalogId/products/:productId/overrides/:channelColumnId',
    'DELETE',
  ] as const
}

export function useDeleteV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesChannelColumnId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides'][':channelColumnId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides'][':channelColumnId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesChannelColumnIdKey()
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
            (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides'][':channelColumnId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.channelCatalogs[':channelCatalogId'].products[':productId'].overrides[
            ':channelColumnId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserChannelCatalogsChannelCatalogIdProductsProductIdReenableKey() {
  return [
    'v2',
    '/v2/user/channelCatalogs/:channelCatalogId/products/:productId/reenable',
    'POST',
  ] as const
}

export function usePostV2UserChannelCatalogsChannelCatalogIdProductsProductIdReenable<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['reenable']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['reenable']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV2UserChannelCatalogsChannelCatalogIdProductsProductIdReenableKey()
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
            (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['reenable']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.channelCatalogs[':channelCatalogId'].products[':productId'].reenable.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2UserChannelCatalogsChannelCatalogIdSettingsCostKey() {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId/settings/cost', 'PUT'] as const
}

export function usePutV2UserChannelCatalogsChannelCatalogIdSettingsCost<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['settings']['cost']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['settings']['cost']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2UserChannelCatalogsChannelCatalogIdSettingsCostKey()
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
            (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['settings']['cost']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.channelCatalogs[':channelCatalogId'].settings.cost.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2UserChannelCatalogsChannelCatalogIdSettingsGeneralKey() {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId/settings/general', 'PUT'] as const
}

export function usePutV2UserChannelCatalogsChannelCatalogIdSettingsGeneral<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['settings']['general']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['settings']['general']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2UserChannelCatalogsChannelCatalogIdSettingsGeneralKey()
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
            (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['settings']['general']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.channelCatalogs[':channelCatalogId'].settings.general.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserChannelsIndexKey(
  args: InferRequestType<typeof client.v2.user.channels.index.$get>,
) {
  return ['v2', '/v2/user/channels/', args] as const
}

export function useGetV2UserChannelsIndex<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.channels.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.channels.index.$get>>>
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
        ? getGetV2UserChannelsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.channels.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.channels.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserChannelsIndex<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.channels.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.channels.index.$get>>>
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
        ? getGetV2UserChannelsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.channels.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.channels.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserChannelsChannelIdKey(
  args: InferRequestType<(typeof client.v2.user.channels)[':channelId']['$get']>,
) {
  return ['v2', '/v2/user/channels/:channelId', args] as const
}

export function useGetV2UserChannelsChannelId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.channels)[':channelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.channels)[':channelId']['$get']>>
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
        ? getGetV2UserChannelsChannelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.channels)[':channelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.channels[':channelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserChannelsChannelId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.channels)[':channelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.channels)[':channelId']['$get']>>
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
        ? getGetV2UserChannelsChannelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.channels)[':channelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.channels[':channelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserChannelsChannelIdCategoriesKey(
  args: InferRequestType<(typeof client.v2.user.channels)[':channelId']['categories']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/channels/:channelId/categories', keyArgs] as const
}

export function useGetV2UserChannelsChannelIdCategories<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.channels)[':channelId']['categories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.channels)[':channelId']['categories']['$get']>
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
        ? getGetV2UserChannelsChannelIdCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.channels)[':channelId']['categories']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.channels[':channelId'].categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserChannelsChannelIdCategories<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.channels)[':channelId']['categories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.channels)[':channelId']['categories']['$get']>
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
        ? getGetV2UserChannelsChannelIdCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.channels)[':channelId']['categories']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.channels[':channelId'].categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserChannelsChannelIdColumnsKey() {
  return ['v2', '/v2/user/channels/:channelId/columns', 'POST'] as const
}

export function usePostV2UserChannelsChannelIdColumns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.user.channels)[':channelId']['columns']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.user.channels)[':channelId']['columns']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserChannelsChannelIdColumnsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.user.channels)[':channelId']['columns']['$post']>
        },
      ) => parseResponse(client.v2.user.channels[':channelId'].columns.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserCustomerIndexKey(
  args: InferRequestType<typeof client.v2.user.customer.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/customer/', keyArgs] as const
}

export function useGetV2UserCustomerIndex<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.customer.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.index.$get>>>
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
        ? getGetV2UserCustomerIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.customer.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCustomerIndex<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.customer.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.index.$get>>>
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
        ? getGetV2UserCustomerIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.customer.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserCustomerAccountKey(
  args: InferRequestType<typeof client.v2.user.customer.account.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/customer/account', keyArgs] as const
}

export function useGetV2UserCustomerAccount<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.customer.account.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.account.$get>>>
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
        ? getGetV2UserCustomerAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.account.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.customer.account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCustomerAccount<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.customer.account.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.account.$get>>>
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
        ? getGetV2UserCustomerAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.account.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.customer.account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserCustomerAccountActivateKey() {
  return ['v2', '/v2/user/customer/account/activate', 'POST'] as const
}

export function usePostV2UserCustomerAccountActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.customer.account.activate.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v2.user.customer.account.activate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserCustomerAccountActivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.user.customer.account.activate.$post> },
      ) => parseResponse(client.v2.user.customer.account.activate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserCustomerAccountChangeEmailKey() {
  return ['v2', '/v2/user/customer/account/changeEmail', 'POST'] as const
}

export function usePostV2UserCustomerAccountChangeEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.customer.account.changeEmail.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v2.user.customer.account.changeEmail.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserCustomerAccountChangeEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v2.user.customer.account.changeEmail.$post> },
      ) => parseResponse(client.v2.user.customer.account.changeEmail.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserCustomerAccountChangePasswordKey() {
  return ['v2', '/v2/user/customer/account/changePassword', 'POST'] as const
}

export function usePostV2UserCustomerAccountChangePassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.customer.account.changePassword.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v2.user.customer.account.changePassword.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserCustomerAccountChangePasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v2.user.customer.account.changePassword.$post> },
      ) => parseResponse(client.v2.user.customer.account.changePassword.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2UserCustomerAccountCompanyInfoKey() {
  return ['v2', '/v2/user/customer/account/companyInfo', 'PUT'] as const
}

export function usePutV2UserCustomerAccountCompanyInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.customer.account.companyInfo.$put>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v2.user.customer.account.companyInfo.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2UserCustomerAccountCompanyInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.user.customer.account.companyInfo.$put> },
      ) => parseResponse(client.v2.user.customer.account.companyInfo.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserCustomerAccountCreditCardInfoKey(
  args: InferRequestType<typeof client.v2.user.customer.account.creditCardInfo.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/customer/account/creditCardInfo', keyArgs] as const
}

export function useGetV2UserCustomerAccountCreditCardInfo<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.customer.account.creditCardInfo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.customer.account.creditCardInfo.$get>>
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
        ? getGetV2UserCustomerAccountCreditCardInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.customer.account.creditCardInfo.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.customer.account.creditCardInfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCustomerAccountCreditCardInfo<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.customer.account.creditCardInfo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.customer.account.creditCardInfo.$get>>
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
        ? getGetV2UserCustomerAccountCreditCardInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.customer.account.creditCardInfo.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.customer.account.creditCardInfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2UserCustomerAccountCreditCardInfoKey() {
  return ['v2', '/v2/user/customer/account/creditCardInfo', 'PUT'] as const
}

export function usePutV2UserCustomerAccountCreditCardInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.customer.account.creditCardInfo.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.user.customer.account.creditCardInfo.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2UserCustomerAccountCreditCardInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v2.user.customer.account.creditCardInfo.$put> },
      ) => parseResponse(client.v2.user.customer.account.creditCardInfo.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2UserCustomerAccountPersonalInfoKey() {
  return ['v2', '/v2/user/customer/account/personalInfo', 'PUT'] as const
}

export function usePutV2UserCustomerAccountPersonalInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.customer.account.personalInfo.$put>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v2.user.customer.account.personalInfo.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2UserCustomerAccountPersonalInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v2.user.customer.account.personalInfo.$put> },
      ) => parseResponse(client.v2.user.customer.account.personalInfo.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserCustomerAccountProfilePictureInfoKey(
  args: InferRequestType<typeof client.v2.user.customer.account.profilePictureInfo.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/customer/account/profilePictureInfo', keyArgs] as const
}

export function useGetV2UserCustomerAccountProfilePictureInfo<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.customer.account.profilePictureInfo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.customer.account.profilePictureInfo.$get>>
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
        ? getGetV2UserCustomerAccountProfilePictureInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.customer.account.profilePictureInfo.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.customer.account.profilePictureInfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCustomerAccountProfilePictureInfo<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.customer.account.profilePictureInfo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.customer.account.profilePictureInfo.$get>>
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
        ? getGetV2UserCustomerAccountProfilePictureInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.customer.account.profilePictureInfo.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.customer.account.profilePictureInfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2UserCustomerAccountProfilePictureInfoKey() {
  return ['v2', '/v2/user/customer/account/profilePictureInfo', 'PUT'] as const
}

export function usePutV2UserCustomerAccountProfilePictureInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.customer.account.profilePictureInfo.$put>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v2.user.customer.account.profilePictureInfo.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2UserCustomerAccountProfilePictureInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v2.user.customer.account.profilePictureInfo.$put>
        },
      ) =>
        parseResponse(client.v2.user.customer.account.profilePictureInfo.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserCustomerAccountResendEmailActivationKey() {
  return ['v2', '/v2/user/customer/account/resendEmailActivation', 'POST'] as const
}

export function usePostV2UserCustomerAccountResendEmailActivation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.customer.account.resendEmailActivation.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserCustomerAccountResendEmailActivationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.v2.user.customer.account.resendEmailActivation.$post(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserCustomerBillingPeriodsKey(
  args: InferRequestType<typeof client.v2.user.customer.billingPeriods.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/customer/billingPeriods', keyArgs] as const
}

export function useGetV2UserCustomerBillingPeriods<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.customer.billingPeriods.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.customer.billingPeriods.$get>>
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
        ? getGetV2UserCustomerBillingPeriodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.customer.billingPeriods.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.customer.billingPeriods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCustomerBillingPeriods<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.customer.billingPeriods.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.customer.billingPeriods.$get>>
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
        ? getGetV2UserCustomerBillingPeriodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.customer.billingPeriods.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.customer.billingPeriods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserCustomerContractsKey(
  args: InferRequestType<typeof client.v2.user.customer.contracts.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/customer/contracts', keyArgs] as const
}

export function useGetV2UserCustomerContracts<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.customer.contracts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.contracts.$get>>>
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
        ? getGetV2UserCustomerContractsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.contracts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.customer.contracts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCustomerContracts<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.customer.contracts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.contracts.$get>>>
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
        ? getGetV2UserCustomerContractsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.contracts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.customer.contracts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserCustomerContractsKey() {
  return ['v2', '/v2/user/customer/contracts', 'POST'] as const
}

export function usePostV2UserCustomerContracts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.contracts.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.user.customer.contracts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserCustomerContractsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.user.customer.contracts.$post> },
      ) => parseResponse(client.v2.user.customer.contracts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserCustomerContractsCurrentDisableAutoRenewalKey() {
  return ['v2', '/v2/user/customer/contracts/current/disableAutoRenewal', 'POST'] as const
}

export function usePostV2UserCustomerContractsCurrentDisableAutoRenewal<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.v2.user.customer.contracts.current.disableAutoRenewal.$post>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v2.user.customer.contracts.current.disableAutoRenewal.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserCustomerContractsCurrentDisableAutoRenewalKey()
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
            typeof client.v2.user.customer.contracts.current.disableAutoRenewal.$post
          >
        },
      ) =>
        parseResponse(
          client.v2.user.customer.contracts.current.disableAutoRenewal.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserCustomerContractsCurrentReenableAutoRenewalKey() {
  return ['v2', '/v2/user/customer/contracts/current/reenableAutoRenewal', 'POST'] as const
}

export function usePostV2UserCustomerContractsCurrentReenableAutoRenewal<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.v2.user.customer.contracts.current.reenableAutoRenewal.$post>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserCustomerContractsCurrentReenableAutoRenewalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.v2.user.customer.contracts.current.reenableAutoRenewal.$post(
            undefined,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2UserCustomerContractsNextKey() {
  return ['v2', '/v2/user/customer/contracts/next', 'DELETE'] as const
}

export function useDeleteV2UserCustomerContractsNext<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.customer.contracts.next.$delete>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2UserCustomerContractsNextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.v2.user.customer.contracts.next.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserCustomerFriendsUserIdKey(
  args: InferRequestType<(typeof client.v2.user.customer.friends)[':userId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/customer/friends/:userId', keyArgs] as const
}

export function useGetV2UserCustomerFriendsUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.customer.friends)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.customer.friends)[':userId']['$get']>>
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
        ? getGetV2UserCustomerFriendsUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.customer.friends)[':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.customer.friends[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCustomerFriendsUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.customer.friends)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.customer.friends)[':userId']['$get']>>
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
        ? getGetV2UserCustomerFriendsUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.customer.friends)[':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.customer.friends[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserCustomerInvoicesKey(
  args: InferRequestType<typeof client.v2.user.customer.invoices.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/customer/invoices', keyArgs] as const
}

export function useGetV2UserCustomerInvoices<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.customer.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.invoices.$get>>>
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
        ? getGetV2UserCustomerInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.invoices.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.customer.invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCustomerInvoices<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.customer.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.invoices.$get>>>
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
        ? getGetV2UserCustomerInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.invoices.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.customer.invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserCustomerOffersKey(
  args: InferRequestType<typeof client.v2.user.customer.offers.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/customer/offers', keyArgs] as const
}

export function useGetV2UserCustomerOffers<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.customer.offers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.offers.$get>>>
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
        ? getGetV2UserCustomerOffersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.offers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.customer.offers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCustomerOffers<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.customer.offers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.offers.$get>>>
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
        ? getGetV2UserCustomerOffersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.offers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.customer.offers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserCustomerOffersKey() {
  return ['v2', '/v2/user/customer/offers', 'POST'] as const
}

export function usePostV2UserCustomerOffers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.offers.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.user.customer.offers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserCustomerOffersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.user.customer.offers.$post> },
      ) => parseResponse(client.v2.user.customer.offers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserCustomerSecurityLogoutKey() {
  return ['v2', '/v2/user/customer/security/logout', 'POST'] as const
}

export function usePostV2UserCustomerSecurityLogout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.customer.security.logout.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserCustomerSecurityLogoutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.v2.user.customer.security.logout.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserCustomerStoresKey(
  args: InferRequestType<typeof client.v2.user.customer.stores.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/customer/stores', keyArgs] as const
}

export function useGetV2UserCustomerStores<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.customer.stores.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.stores.$get>>>
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
        ? getGetV2UserCustomerStoresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.stores.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.customer.stores.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCustomerStores<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.customer.stores.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.stores.$get>>>
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
        ? getGetV2UserCustomerStoresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.stores.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.customer.stores.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserCustomerStoresKey() {
  return ['v2', '/v2/user/customer/stores', 'POST'] as const
}

export function usePostV2UserCustomerStores<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.stores.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.user.customer.stores.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserCustomerStoresKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.user.customer.stores.$post> },
      ) => parseResponse(client.v2.user.customer.stores.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserCustomerStoresStoreIdKey(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/customer/stores/:storeId', keyArgs] as const
}

export function useGetV2UserCustomerStoresStoreId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['$get']>>
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
        ? getGetV2UserCustomerStoresStoreIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.customer.stores[':storeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCustomerStoresStoreId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['$get']>>
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
        ? getGetV2UserCustomerStoresStoreIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.customer.stores[':storeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2UserCustomerStoresStoreIdKey() {
  return ['v2', '/v2/user/customer/stores/:storeId', 'DELETE'] as const
}

export function useDeleteV2UserCustomerStoresStoreId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2UserCustomerStoresStoreIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['$delete']>
        },
      ) => parseResponse(client.v2.user.customer.stores[':storeId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2UserCustomerStoresStoreIdKey() {
  return ['v2', '/v2/user/customer/stores/:storeId', 'PATCH'] as const
}

export function usePatchV2UserCustomerStoresStoreId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2UserCustomerStoresStoreIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['$patch']> },
      ) => parseResponse(client.v2.user.customer.stores[':storeId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserCustomerStoresStoreIdAlertsKey(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['alerts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/customer/stores/:storeId/alerts', keyArgs] as const
}

export function useGetV2UserCustomerStoresStoreIdAlerts<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['alerts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['alerts']['$get']>
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
        ? getGetV2UserCustomerStoresStoreIdAlertsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['alerts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.customer.stores[':storeId'].alerts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCustomerStoresStoreIdAlerts<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['alerts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['alerts']['$get']>
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
        ? getGetV2UserCustomerStoresStoreIdAlertsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['alerts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.customer.stores[':storeId'].alerts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserCustomerStoresStoreIdAlertsKey() {
  return ['v2', '/v2/user/customer/stores/:storeId/alerts', 'POST'] as const
}

export function usePostV2UserCustomerStoresStoreIdAlerts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['alerts']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['alerts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserCustomerStoresStoreIdAlertsKey()
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
            (typeof client.v2.user.customer.stores)[':storeId']['alerts']['$post']
          >
        },
      ) =>
        parseResponse(client.v2.user.customer.stores[':storeId'].alerts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserCustomerStoresStoreIdRightsKey(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['rights']['$get']>,
) {
  return ['v2', '/v2/user/customer/stores/:storeId/rights', args] as const
}

export function useGetV2UserCustomerStoresStoreIdRights<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['rights']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['rights']['$get']>
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
        ? getGetV2UserCustomerStoresStoreIdRightsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['rights']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.customer.stores[':storeId'].rights.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCustomerStoresStoreIdRights<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['rights']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['rights']['$get']>
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
        ? getGetV2UserCustomerStoresStoreIdRightsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['rights']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.customer.stores[':storeId'].rights.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserCustomerStoresStoreIdSharesKey(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['shares']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/customer/stores/:storeId/shares', keyArgs] as const
}

export function useGetV2UserCustomerStoresStoreIdShares<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['shares']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['shares']['$get']>
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
        ? getGetV2UserCustomerStoresStoreIdSharesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['shares']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.customer.stores[':storeId'].shares.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCustomerStoresStoreIdShares<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['shares']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['shares']['$get']>
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
        ? getGetV2UserCustomerStoresStoreIdSharesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['shares']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.customer.stores[':storeId'].shares.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserCustomerStoresStoreIdSharesKey() {
  return ['v2', '/v2/user/customer/stores/:storeId/shares', 'POST'] as const
}

export function usePostV2UserCustomerStoresStoreIdShares<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['shares']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['shares']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserCustomerStoresStoreIdSharesKey()
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
            (typeof client.v2.user.customer.stores)[':storeId']['shares']['$post']
          >
        },
      ) =>
        parseResponse(client.v2.user.customer.stores[':storeId'].shares.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2UserCustomerStoresStoreIdSharesUserIdKey() {
  return ['v2', '/v2/user/customer/stores/:storeId/shares/:userId', 'DELETE'] as const
}

export function useDeleteV2UserCustomerStoresStoreIdSharesUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.customer.stores)[':storeId']['shares'][':userId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.customer.stores)[':storeId']['shares'][':userId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2UserCustomerStoresStoreIdSharesUserIdKey()
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
            (typeof client.v2.user.customer.stores)[':storeId']['shares'][':userId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.customer.stores[':storeId'].shares[':userId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserCustomerZendeskTokenKey() {
  return ['v2', '/v2/user/customer/zendeskToken'] as const
}

export function useGetV2UserCustomerZendeskToken<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.zendeskToken.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2UserCustomerZendeskTokenKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.customer.zendeskToken.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.customer.zendeskToken.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserCustomerZendeskToken<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.zendeskToken.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2UserCustomerZendeskTokenKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.customer.zendeskToken.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.customer.zendeskToken.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserLegacyTrackingChannelCatalogsIndexKey(
  args: InferRequestType<typeof client.v2.user.legacyTracking.channelCatalogs.index.$get>,
) {
  return ['v2', '/v2/user/legacyTracking/channelCatalogs/', args] as const
}

export function useGetV2UserLegacyTrackingChannelCatalogsIndex<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.legacyTracking.channelCatalogs.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.legacyTracking.channelCatalogs.index.$get>>
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
        ? getGetV2UserLegacyTrackingChannelCatalogsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.legacyTracking.channelCatalogs.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.user.legacyTracking.channelCatalogs.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserLegacyTrackingChannelCatalogsIndex<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.legacyTracking.channelCatalogs.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.legacyTracking.channelCatalogs.index.$get>>
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
        ? getGetV2UserLegacyTrackingChannelCatalogsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.legacyTracking.channelCatalogs.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.user.legacyTracking.channelCatalogs.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserLegacyTrackingChannelCatalogsChannelCatalogIdKey(
  args: InferRequestType<
    (typeof client.v2.user.legacyTracking.channelCatalogs)[':channelCatalogId']['$get']
  >,
) {
  return ['v2', '/v2/user/legacyTracking/channelCatalogs/:channelCatalogId', args] as const
}

export function useGetV2UserLegacyTrackingChannelCatalogsChannelCatalogId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.legacyTracking.channelCatalogs)[':channelCatalogId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.legacyTracking.channelCatalogs)[':channelCatalogId']['$get']
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
        ? getGetV2UserLegacyTrackingChannelCatalogsChannelCatalogIdKey(args)
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
                (typeof client.v2.user.legacyTracking.channelCatalogs)[':channelCatalogId']['$get']
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
          client.v2.user.legacyTracking.channelCatalogs[':channelCatalogId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserLegacyTrackingChannelCatalogsChannelCatalogId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.user.legacyTracking.channelCatalogs)[':channelCatalogId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.legacyTracking.channelCatalogs)[':channelCatalogId']['$get']
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
        ? getGetV2UserLegacyTrackingChannelCatalogsChannelCatalogIdKey(args)
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
                (typeof client.v2.user.legacyTracking.channelCatalogs)[':channelCatalogId']['$get']
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
          client.v2.user.legacyTracking.channelCatalogs[':channelCatalogId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserLegacyTrackingChannelCatalogsChannelCatalogIdMigrateKey() {
  return [
    'v2',
    '/v2/user/legacyTracking/channelCatalogs/:channelCatalogId/migrate',
    'POST',
  ] as const
}

export function usePostV2UserLegacyTrackingChannelCatalogsChannelCatalogIdMigrate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.legacyTracking.channelCatalogs)[':channelCatalogId']['migrate']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.legacyTracking.channelCatalogs)[':channelCatalogId']['migrate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserLegacyTrackingChannelCatalogsChannelCatalogIdMigrateKey()
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
            (typeof client.v2.user.legacyTracking.channelCatalogs)[':channelCatalogId']['migrate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.legacyTracking.channelCatalogs[':channelCatalogId'].migrate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserLovIndexKey() {
  return ['v2', '/v2/user/lov/'] as const
}

export function useGetV2UserLovIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.lov.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2UserLovIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.lov.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.lov.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserLovIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.lov.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2UserLovIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.lov.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.lov.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserLovListNameKey(
  args: InferRequestType<(typeof client.v2.user.lov)[':listName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/lov/:listName', keyArgs] as const
}

export function useGetV2UserLovListName<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.lov)[':listName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.lov)[':listName']['$get']>>
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
        ? getGetV2UserLovListNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.lov)[':listName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.lov[':listName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserLovListName<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.lov)[':listName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.lov)[':listName']['$get']>>
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
        ? getGetV2UserLovListNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.lov)[':listName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.lov[':listName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserMarketplacesChannelcatalogsIndexKey(
  args: InferRequestType<typeof client.v2.user.marketplaces.channelcatalogs.index.$get>,
) {
  return ['v2', '/v2/user/marketplaces/channelcatalogs/', args] as const
}

export function useGetV2UserMarketplacesChannelcatalogsIndex<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.marketplaces.channelcatalogs.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.marketplaces.channelcatalogs.index.$get>>
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
        ? getGetV2UserMarketplacesChannelcatalogsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.marketplaces.channelcatalogs.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.marketplaces.channelcatalogs.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserMarketplacesChannelcatalogsIndex<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.marketplaces.channelcatalogs.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.marketplaces.channelcatalogs.index.$get>>
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
        ? getGetV2UserMarketplacesChannelcatalogsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.marketplaces.channelcatalogs.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.marketplaces.channelcatalogs.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdHistoryKey(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.channelcatalogs.publications)[':marketplaceTechnicalCode'][':accountId']['history']['$get']
  >,
) {
  return [
    'v2',
    '/v2/user/marketplaces/channelcatalogs/publications/:marketplaceTechnicalCode/:accountId/history',
    args,
  ] as const
}

export function useGetV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdHistory<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.channelcatalogs.publications)[':marketplaceTechnicalCode'][':accountId']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.marketplaces.channelcatalogs.publications)[':marketplaceTechnicalCode'][':accountId']['history']['$get']
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
        ? getGetV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdHistoryKey(
            args,
          )
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
                (typeof client.v2.user.marketplaces.channelcatalogs.publications)[':marketplaceTechnicalCode'][':accountId']['history']['$get']
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
          client.v2.user.marketplaces.channelcatalogs.publications[':marketplaceTechnicalCode'][
            ':accountId'
          ].history.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdHistory<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.channelcatalogs.publications)[':marketplaceTechnicalCode'][':accountId']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.marketplaces.channelcatalogs.publications)[':marketplaceTechnicalCode'][':accountId']['history']['$get']
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
        ? getGetV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdHistoryKey(
            args,
          )
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
                (typeof client.v2.user.marketplaces.channelcatalogs.publications)[':marketplaceTechnicalCode'][':accountId']['history']['$get']
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
          client.v2.user.marketplaces.channelcatalogs.publications[':marketplaceTechnicalCode'][
            ':accountId'
          ].history.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdPublishKey() {
  return [
    'v2',
    '/v2/user/marketplaces/channelcatalogs/publications/:marketplaceTechnicalCode/:accountId/publish',
    'POST',
  ] as const
}

export function usePostV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdPublish<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.user.marketplaces.channelcatalogs.publications)[':marketplaceTechnicalCode'][':accountId']['publish']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.marketplaces.channelcatalogs.publications)[':marketplaceTechnicalCode'][':accountId']['publish']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdPublishKey()
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
            (typeof client.v2.user.marketplaces.channelcatalogs.publications)[':marketplaceTechnicalCode'][':accountId']['publish']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.marketplaces.channelcatalogs.publications[':marketplaceTechnicalCode'][
            ':accountId'
          ].publish.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserMarketplacesChannelcatalogsChannelCatalogIdPropertiesKey(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.channelcatalogs)[':channelCatalogId']['properties']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v2',
    '/v2/user/marketplaces/channelcatalogs/:channelCatalogId/properties',
    keyArgs,
  ] as const
}

export function useGetV2UserMarketplacesChannelcatalogsChannelCatalogIdProperties<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.channelcatalogs)[':channelCatalogId']['properties']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.marketplaces.channelcatalogs)[':channelCatalogId']['properties']['$get']
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
        ? getGetV2UserMarketplacesChannelcatalogsChannelCatalogIdPropertiesKey(args)
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
                (typeof client.v2.user.marketplaces.channelcatalogs)[':channelCatalogId']['properties']['$get']
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
          client.v2.user.marketplaces.channelcatalogs[':channelCatalogId'].properties.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserMarketplacesChannelcatalogsChannelCatalogIdProperties<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.channelcatalogs)[':channelCatalogId']['properties']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.marketplaces.channelcatalogs)[':channelCatalogId']['properties']['$get']
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
        ? getGetV2UserMarketplacesChannelcatalogsChannelCatalogIdPropertiesKey(args)
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
                (typeof client.v2.user.marketplaces.channelcatalogs)[':channelCatalogId']['properties']['$get']
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
          client.v2.user.marketplaces.channelcatalogs[':channelCatalogId'].properties.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserMarketplacesChannelcatalogsChannelCatalogIdSettingsKey(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.channelcatalogs)[':channelCatalogId']['settings']['$get']
  >,
) {
  return ['v2', '/v2/user/marketplaces/channelcatalogs/:channelCatalogId/settings', args] as const
}

export function useGetV2UserMarketplacesChannelcatalogsChannelCatalogIdSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.channelcatalogs)[':channelCatalogId']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.marketplaces.channelcatalogs)[':channelCatalogId']['settings']['$get']
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
        ? getGetV2UserMarketplacesChannelcatalogsChannelCatalogIdSettingsKey(args)
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
                (typeof client.v2.user.marketplaces.channelcatalogs)[':channelCatalogId']['settings']['$get']
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
          client.v2.user.marketplaces.channelcatalogs[':channelCatalogId'].settings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserMarketplacesChannelcatalogsChannelCatalogIdSettings<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.channelcatalogs)[':channelCatalogId']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.marketplaces.channelcatalogs)[':channelCatalogId']['settings']['$get']
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
        ? getGetV2UserMarketplacesChannelcatalogsChannelCatalogIdSettingsKey(args)
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
                (typeof client.v2.user.marketplaces.channelcatalogs)[':channelCatalogId']['settings']['$get']
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
          client.v2.user.marketplaces.channelcatalogs[':channelCatalogId'].settings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserMarketplacesChannelcatalogsChannelCatalogIdSettingsKey() {
  return ['v2', '/v2/user/marketplaces/channelcatalogs/:channelCatalogId/settings', 'POST'] as const
}

export function usePostV2UserMarketplacesChannelcatalogsChannelCatalogIdSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.marketplaces.channelcatalogs)[':channelCatalogId']['settings']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.marketplaces.channelcatalogs)[':channelCatalogId']['settings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserMarketplacesChannelcatalogsChannelCatalogIdSettingsKey()
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
            (typeof client.v2.user.marketplaces.channelcatalogs)[':channelCatalogId']['settings']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.marketplaces.channelcatalogs[':channelCatalogId'].settings.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserMarketplacesOrdersIndexKey(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/marketplaces/orders/', keyArgs] as const
}

export function useGetV2UserMarketplacesOrdersIndex<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.index.$get>>
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
        ? getGetV2UserMarketplacesOrdersIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.marketplaces.orders.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserMarketplacesOrdersIndex<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.index.$get>>
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
        ? getGetV2UserMarketplacesOrdersIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.marketplaces.orders.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserMarketplacesOrdersAutomaticTransitionsKey(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.automaticTransitions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/marketplaces/orders/automaticTransitions', keyArgs] as const
}

export function useGetV2UserMarketplacesOrdersAutomaticTransitions<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.automaticTransitions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.automaticTransitions.$get>>
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
        ? getGetV2UserMarketplacesOrdersAutomaticTransitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.automaticTransitions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.user.marketplaces.orders.automaticTransitions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserMarketplacesOrdersAutomaticTransitions<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.automaticTransitions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.automaticTransitions.$get>>
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
        ? getGetV2UserMarketplacesOrdersAutomaticTransitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.automaticTransitions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.user.marketplaces.orders.automaticTransitions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserMarketplacesOrdersAutomaticTransitionsKey() {
  return ['v2', '/v2/user/marketplaces/orders/automaticTransitions', 'POST'] as const
}

export function usePostV2UserMarketplacesOrdersAutomaticTransitions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.v2.user.marketplaces.orders.automaticTransitions.$post>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v2.user.marketplaces.orders.automaticTransitions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserMarketplacesOrdersAutomaticTransitionsKey()
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
            typeof client.v2.user.marketplaces.orders.automaticTransitions.$post
          >
        },
      ) =>
        parseResponse(
          client.v2.user.marketplaces.orders.automaticTransitions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserMarketplacesOrdersBatchesChangeOrdersChangeOrderTypeKey() {
  return [
    'v2',
    '/v2/user/marketplaces/orders/batches/changeOrders/:changeOrderType',
    'POST',
  ] as const
}

export function usePostV2UserMarketplacesOrdersBatchesChangeOrdersChangeOrderType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.user.marketplaces.orders.batches.changeOrders)[':changeOrderType']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.marketplaces.orders.batches.changeOrders)[':changeOrderType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserMarketplacesOrdersBatchesChangeOrdersChangeOrderTypeKey()
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
            (typeof client.v2.user.marketplaces.orders.batches.changeOrders)[':changeOrderType']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.marketplaces.orders.batches.changeOrders[':changeOrderType'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserMarketplacesOrdersBatchesClearMerchantOrderInfosKey() {
  return ['v2', '/v2/user/marketplaces/orders/batches/clearMerchantOrderInfos', 'POST'] as const
}

export function usePostV2UserMarketplacesOrdersBatchesClearMerchantOrderInfos<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              typeof client.v2.user.marketplaces.orders.batches.clearMerchantOrderInfos.$post
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      typeof client.v2.user.marketplaces.orders.batches.clearMerchantOrderInfos.$post
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserMarketplacesOrdersBatchesClearMerchantOrderInfosKey()
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
            typeof client.v2.user.marketplaces.orders.batches.clearMerchantOrderInfos.$post
          >
        },
      ) =>
        parseResponse(
          client.v2.user.marketplaces.orders.batches.clearMerchantOrderInfos.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserMarketplacesOrdersBatchesSetMerchantOrderInfosKey() {
  return ['v2', '/v2/user/marketplaces/orders/batches/setMerchantOrderInfos', 'POST'] as const
}

export function usePostV2UserMarketplacesOrdersBatchesSetMerchantOrderInfos<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              typeof client.v2.user.marketplaces.orders.batches.setMerchantOrderInfos.$post
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.user.marketplaces.orders.batches.setMerchantOrderInfos.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserMarketplacesOrdersBatchesSetMerchantOrderInfosKey()
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
            typeof client.v2.user.marketplaces.orders.batches.setMerchantOrderInfos.$post
          >
        },
      ) =>
        parseResponse(
          client.v2.user.marketplaces.orders.batches.setMerchantOrderInfos.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserMarketplacesOrdersExportationsKey(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.exportations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/marketplaces/orders/exportations', keyArgs] as const
}

export function useGetV2UserMarketplacesOrdersExportations<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.exportations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.exportations.$get>>
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
        ? getGetV2UserMarketplacesOrdersExportationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.exportations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.marketplaces.orders.exportations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserMarketplacesOrdersExportations<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.exportations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.exportations.$get>>
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
        ? getGetV2UserMarketplacesOrdersExportationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.exportations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.marketplaces.orders.exportations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserMarketplacesOrdersExportationsKey() {
  return ['v2', '/v2/user/marketplaces/orders/exportations', 'POST'] as const
}

export function usePostV2UserMarketplacesOrdersExportations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.exportations.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.user.marketplaces.orders.exportations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserMarketplacesOrdersExportationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v2.user.marketplaces.orders.exportations.$post> },
      ) => parseResponse(client.v2.user.marketplaces.orders.exportations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserMarketplacesOrdersHarvestKey() {
  return ['v2', '/v2/user/marketplaces/orders/harvest', 'POST'] as const
}

export function usePostV2UserMarketplacesOrdersHarvest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.harvest.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.user.marketplaces.orders.harvest.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserMarketplacesOrdersHarvestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.user.marketplaces.orders.harvest.$post> },
      ) => parseResponse(client.v2.user.marketplaces.orders.harvest.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserMarketplacesOrdersInvoicesGenerateKey() {
  return ['v2', '/v2/user/marketplaces/orders/invoices/generate', 'POST'] as const
}

export function usePostV2UserMarketplacesOrdersInvoicesGenerate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.invoices.generate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.user.marketplaces.orders.invoices.generate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserMarketplacesOrdersInvoicesGenerateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v2.user.marketplaces.orders.invoices.generate.$post>
        },
      ) =>
        parseResponse(
          client.v2.user.marketplaces.orders.invoices.generate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserMarketplacesOrdersInvoicesGetPdfInvoiceKey() {
  return ['v2', '/v2/user/marketplaces/orders/invoices/getPdfInvoice', 'POST'] as const
}

export function usePostV2UserMarketplacesOrdersInvoicesGetPdfInvoice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.v2.user.marketplaces.orders.invoices.getPdfInvoice.$post>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.user.marketplaces.orders.invoices.getPdfInvoice.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserMarketplacesOrdersInvoicesGetPdfInvoiceKey()
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
            typeof client.v2.user.marketplaces.orders.invoices.getPdfInvoice.$post
          >
        },
      ) =>
        parseResponse(
          client.v2.user.marketplaces.orders.invoices.getPdfInvoice.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserMarketplacesOrdersInvoicesSettingsDesignKey() {
  return ['v2', '/v2/user/marketplaces/orders/invoices/settings/design'] as const
}

export function useGetV2UserMarketplacesOrdersInvoicesSettingsDesign<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.v2.user.marketplaces.orders.invoices.settings.design.$get>
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2UserMarketplacesOrdersInvoicesSettingsDesignKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.v2.user.marketplaces.orders.invoices.settings.design.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.user.marketplaces.orders.invoices.settings.design.$get(
            undefined,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserMarketplacesOrdersInvoicesSettingsDesign<
  TError = unknown,
>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.v2.user.marketplaces.orders.invoices.settings.design.$get>
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2UserMarketplacesOrdersInvoicesSettingsDesignKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.v2.user.marketplaces.orders.invoices.settings.design.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.user.marketplaces.orders.invoices.settings.design.$get(
            undefined,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2UserMarketplacesOrdersInvoicesSettingsDesignKey() {
  return ['v2', '/v2/user/marketplaces/orders/invoices/settings/design', 'PUT'] as const
}

export function usePutV2UserMarketplacesOrdersInvoicesSettingsDesign<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.v2.user.marketplaces.orders.invoices.settings.design.$put>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v2.user.marketplaces.orders.invoices.settings.design.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2UserMarketplacesOrdersInvoicesSettingsDesignKey()
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
            typeof client.v2.user.marketplaces.orders.invoices.settings.design.$put
          >
        },
      ) =>
        parseResponse(
          client.v2.user.marketplaces.orders.invoices.settings.design.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserMarketplacesOrdersInvoicesSettingsDesignPreviewKey() {
  return ['v2', '/v2/user/marketplaces/orders/invoices/settings/design/preview', 'POST'] as const
}

export function usePostV2UserMarketplacesOrdersInvoicesSettingsDesignPreview<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              typeof client.v2.user.marketplaces.orders.invoices.settings.design.preview.$post
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      typeof client.v2.user.marketplaces.orders.invoices.settings.design.preview.$post
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserMarketplacesOrdersInvoicesSettingsDesignPreviewKey()
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
            typeof client.v2.user.marketplaces.orders.invoices.settings.design.preview.$post
          >
        },
      ) =>
        parseResponse(
          client.v2.user.marketplaces.orders.invoices.settings.design.preview.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserMarketplacesOrdersInvoicesSettingsGeneralKey() {
  return ['v2', '/v2/user/marketplaces/orders/invoices/settings/general'] as const
}

export function useGetV2UserMarketplacesOrdersInvoicesSettingsGeneral<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.v2.user.marketplaces.orders.invoices.settings.general.$get>
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2UserMarketplacesOrdersInvoicesSettingsGeneralKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.v2.user.marketplaces.orders.invoices.settings.general.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.user.marketplaces.orders.invoices.settings.general.$get(
            undefined,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserMarketplacesOrdersInvoicesSettingsGeneral<
  TError = unknown,
>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.v2.user.marketplaces.orders.invoices.settings.general.$get>
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2UserMarketplacesOrdersInvoicesSettingsGeneralKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.v2.user.marketplaces.orders.invoices.settings.general.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.user.marketplaces.orders.invoices.settings.general.$get(
            undefined,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2UserMarketplacesOrdersInvoicesSettingsGeneralKey() {
  return ['v2', '/v2/user/marketplaces/orders/invoices/settings/general', 'PUT'] as const
}

export function usePutV2UserMarketplacesOrdersInvoicesSettingsGeneral<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.v2.user.marketplaces.orders.invoices.settings.general.$put>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v2.user.marketplaces.orders.invoices.settings.general.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2UserMarketplacesOrdersInvoicesSettingsGeneralKey()
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
            typeof client.v2.user.marketplaces.orders.invoices.settings.general.$put
          >
        },
      ) =>
        parseResponse(
          client.v2.user.marketplaces.orders.invoices.settings.general.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserMarketplacesOrdersInvoicesMarketplaceTechnicalCodeAccountIdBeezUPOrderUUIDGenerateKey() {
  return [
    'v2',
    '/v2/user/marketplaces/orders/invoices/:marketplaceTechnicalCode/:accountId/:beezUPOrderUUID/generate',
    'POST',
  ] as const
}

export function usePostV2UserMarketplacesOrdersInvoicesMarketplaceTechnicalCodeAccountIdBeezUPOrderUUIDGenerate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.user.marketplaces.orders.invoices)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderUUID']['generate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.marketplaces.orders.invoices)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderUUID']['generate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV2UserMarketplacesOrdersInvoicesMarketplaceTechnicalCodeAccountIdBeezUPOrderUUIDGenerateKey()
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
            (typeof client.v2.user.marketplaces.orders.invoices)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderUUID']['generate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.marketplaces.orders.invoices[':marketplaceTechnicalCode'][':accountId'][
            ':beezUPOrderUUID'
          ].generate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserMarketplacesOrdersInvoicesMarketplaceTechnicalCodeAccountIdBeezUPOrderUUIDPreviewKey() {
  return [
    'v2',
    '/v2/user/marketplaces/orders/invoices/:marketplaceTechnicalCode/:accountId/:beezUPOrderUUID/preview',
    'POST',
  ] as const
}

export function usePostV2UserMarketplacesOrdersInvoicesMarketplaceTechnicalCodeAccountIdBeezUPOrderUUIDPreview<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.user.marketplaces.orders.invoices)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderUUID']['preview']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.marketplaces.orders.invoices)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderUUID']['preview']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV2UserMarketplacesOrdersInvoicesMarketplaceTechnicalCodeAccountIdBeezUPOrderUUIDPreviewKey()
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
            (typeof client.v2.user.marketplaces.orders.invoices)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderUUID']['preview']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.marketplaces.orders.invoices[':marketplaceTechnicalCode'][':accountId'][
            ':beezUPOrderUUID'
          ].preview.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserMarketplacesOrdersListFullKey() {
  return ['v2', '/v2/user/marketplaces/orders/list/full', 'POST'] as const
}

export function usePostV2UserMarketplacesOrdersListFull<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.list.full.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.user.marketplaces.orders.list.full.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserMarketplacesOrdersListFullKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v2.user.marketplaces.orders.list.full.$post> },
      ) => parseResponse(client.v2.user.marketplaces.orders.list.full.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserMarketplacesOrdersListLightKey() {
  return ['v2', '/v2/user/marketplaces/orders/list/light', 'POST'] as const
}

export function usePostV2UserMarketplacesOrdersListLight<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.list.light.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.user.marketplaces.orders.list.light.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserMarketplacesOrdersListLightKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v2.user.marketplaces.orders.list.light.$post> },
      ) => parseResponse(client.v2.user.marketplaces.orders.list.light.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserMarketplacesOrdersStatusKey(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.status.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/marketplaces/orders/status', keyArgs] as const
}

export function useGetV2UserMarketplacesOrdersStatus<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.status.$get>>
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
        ? getGetV2UserMarketplacesOrdersStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.status.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.marketplaces.orders.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserMarketplacesOrdersStatus<TError = unknown>(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.status.$get>>
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
        ? getGetV2UserMarketplacesOrdersStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.status.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.user.marketplaces.orders.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserMarketplacesOrdersSubscriptionsIndexKey() {
  return ['v2', '/v2/user/marketplaces/orders/subscriptions/'] as const
}

export function useGetV2UserMarketplacesOrdersSubscriptionsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.subscriptions.index.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2UserMarketplacesOrdersSubscriptionsIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.subscriptions.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.user.marketplaces.orders.subscriptions.index.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserMarketplacesOrdersSubscriptionsIndex<
  TError = unknown,
>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.subscriptions.index.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2UserMarketplacesOrdersSubscriptionsIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.subscriptions.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.user.marketplaces.orders.subscriptions.index.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserMarketplacesOrdersSubscriptionsIdKey(
  args: InferRequestType<(typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$get']>,
) {
  return ['v2', '/v2/user/marketplaces/orders/subscriptions/:id', args] as const
}

export function useGetV2UserMarketplacesOrdersSubscriptionsId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$get']>
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
        ? getGetV2UserMarketplacesOrdersSubscriptionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.user.marketplaces.orders.subscriptions[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserMarketplacesOrdersSubscriptionsId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$get']>
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
        ? getGetV2UserMarketplacesOrdersSubscriptionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.user.marketplaces.orders.subscriptions[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserMarketplacesOrdersSubscriptionsIdKey() {
  return ['v2', '/v2/user/marketplaces/orders/subscriptions/:id', 'POST'] as const
}

export function usePostV2UserMarketplacesOrdersSubscriptionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserMarketplacesOrdersSubscriptionsIdKey()
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
            (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.marketplaces.orders.subscriptions[':id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2UserMarketplacesOrdersSubscriptionsIdKey() {
  return ['v2', '/v2/user/marketplaces/orders/subscriptions/:id', 'DELETE'] as const
}

export function useDeleteV2UserMarketplacesOrdersSubscriptionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2UserMarketplacesOrdersSubscriptionsIdKey()
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
            (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.marketplaces.orders.subscriptions[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserMarketplacesOrdersSubscriptionsIdActivateKey() {
  return ['v2', '/v2/user/marketplaces/orders/subscriptions/:id/activate', 'POST'] as const
}

export function usePostV2UserMarketplacesOrdersSubscriptionsIdActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['activate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['activate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserMarketplacesOrdersSubscriptionsIdActivateKey()
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
            (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['activate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.marketplaces.orders.subscriptions[':id'].activate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserMarketplacesOrdersSubscriptionsIdDeactivateKey() {
  return ['v2', '/v2/user/marketplaces/orders/subscriptions/:id/deactivate', 'POST'] as const
}

export function usePostV2UserMarketplacesOrdersSubscriptionsIdDeactivate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['deactivate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['deactivate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserMarketplacesOrdersSubscriptionsIdDeactivateKey()
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
            (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['deactivate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.marketplaces.orders.subscriptions[':id'].deactivate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserMarketplacesOrdersSubscriptionsIdReportingKey(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['reporting']['$get']
  >,
) {
  return ['v2', '/v2/user/marketplaces/orders/subscriptions/:id/reporting', args] as const
}

export function useGetV2UserMarketplacesOrdersSubscriptionsIdReporting<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['reporting']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['reporting']['$get']
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
        ? getGetV2UserMarketplacesOrdersSubscriptionsIdReportingKey(args)
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
                (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['reporting']['$get']
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
          client.v2.user.marketplaces.orders.subscriptions[':id'].reporting.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserMarketplacesOrdersSubscriptionsIdReporting<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['reporting']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['reporting']['$get']
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
        ? getGetV2UserMarketplacesOrdersSubscriptionsIdReportingKey(args)
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
                (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['reporting']['$get']
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
          client.v2.user.marketplaces.orders.subscriptions[':id'].reporting.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserMarketplacesOrdersSubscriptionsIdRetryKey() {
  return ['v2', '/v2/user/marketplaces/orders/subscriptions/:id/retry', 'POST'] as const
}

export function usePostV2UserMarketplacesOrdersSubscriptionsIdRetry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['retry']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['retry']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UserMarketplacesOrdersSubscriptionsIdRetryKey()
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
            (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['retry']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.marketplaces.orders.subscriptions[':id'].retry.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdKey(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v2',
    '/v2/user/marketplaces/orders/:marketplaceTechnicalCode/:accountId/:beezUPOrderId',
    keyArgs,
  ] as const
}

export function useGetV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$get']
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
        ? getGetV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdKey(args)
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
                (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$get']
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
          client.v2.user.marketplaces.orders[':marketplaceTechnicalCode'][':accountId'][
            ':beezUPOrderId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$get']
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
        ? getGetV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdKey(args)
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
                (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$get']
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
          client.v2.user.marketplaces.orders[':marketplaceTechnicalCode'][':accountId'][
            ':beezUPOrderId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getHeadV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdKey() {
  return [
    'v2',
    '/v2/user/marketplaces/orders/:marketplaceTechnicalCode/:accountId/:beezUPOrderId',
    'HEAD',
  ] as const
}

export function useHeadV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$head']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$head']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getHeadV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdKey()
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
            (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$head']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.marketplaces.orders[':marketplaceTechnicalCode'][':accountId'][
            ':beezUPOrderId'
          ].$head(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdClearMerchantOrderInfoKey() {
  return [
    'v2',
    '/v2/user/marketplaces/orders/:marketplaceTechnicalCode/:accountId/:beezUPOrderId/clearMerchantOrderInfo',
    'POST',
  ] as const
}

export function usePostV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdClearMerchantOrderInfo<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['clearMerchantOrderInfo']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['clearMerchantOrderInfo']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdClearMerchantOrderInfoKey()
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
            (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['clearMerchantOrderInfo']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.marketplaces.orders[':marketplaceTechnicalCode'][':accountId'][
            ':beezUPOrderId'
          ].clearMerchantOrderInfo.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHarvestKey() {
  return [
    'v2',
    '/v2/user/marketplaces/orders/:marketplaceTechnicalCode/:accountId/:beezUPOrderId/harvest',
    'POST',
  ] as const
}

export function usePostV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHarvest<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['harvest']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['harvest']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHarvestKey()
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
            (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['harvest']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.marketplaces.orders[':marketplaceTechnicalCode'][':accountId'][
            ':beezUPOrderId'
          ].harvest.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryKey(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['history']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v2',
    '/v2/user/marketplaces/orders/:marketplaceTechnicalCode/:accountId/:beezUPOrderId/history',
    keyArgs,
  ] as const
}

export function useGetV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistory<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['history']['$get']
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
        ? getGetV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryKey(
            args,
          )
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
                (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['history']['$get']
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
          client.v2.user.marketplaces.orders[':marketplaceTechnicalCode'][':accountId'][
            ':beezUPOrderId'
          ].history.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistory<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['history']['$get']
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
        ? getGetV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryKey(
            args,
          )
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
                (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['history']['$get']
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
          client.v2.user.marketplaces.orders[':marketplaceTechnicalCode'][':accountId'][
            ':beezUPOrderId'
          ].history.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdSetMerchantOrderInfoKey() {
  return [
    'v2',
    '/v2/user/marketplaces/orders/:marketplaceTechnicalCode/:accountId/:beezUPOrderId/setMerchantOrderInfo',
    'POST',
  ] as const
}

export function usePostV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdSetMerchantOrderInfo<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['setMerchantOrderInfo']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['setMerchantOrderInfo']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdSetMerchantOrderInfoKey()
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
            (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['setMerchantOrderInfo']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.marketplaces.orders[':marketplaceTechnicalCode'][':accountId'][
            ':beezUPOrderId'
          ].setMerchantOrderInfo.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdChangeOrderTypeKey() {
  return [
    'v2',
    '/v2/user/marketplaces/orders/:marketplaceTechnicalCode/:accountId/:beezUPOrderId/:changeOrderType',
    'POST',
  ] as const
}

export function usePostV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdChangeOrderType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'][':changeOrderType']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'][':changeOrderType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdChangeOrderTypeKey()
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
            (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'][':changeOrderType']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.user.marketplaces.orders[':marketplaceTechnicalCode'][':accountId'][
            ':beezUPOrderId'
          ][':changeOrderType'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
