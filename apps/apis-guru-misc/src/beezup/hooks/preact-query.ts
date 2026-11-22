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

export function getOrdersKey() {
  return ['orders'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getPostOrdersV3BatchesChangeOrdersMutationKey() {
  return ['orders', '/orders/v3/batches/changeOrders', 'POST'] as const
}

export function getPostOrdersV3BatchesChangeOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.orders.v3.batches.changeOrders.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.orders.v3.batches.changeOrders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrdersV3BatchesChangeOrdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.orders.v3.batches.changeOrders.$post>) {
      return parseResponse(client.orders.v3.batches.changeOrders.$post(args, options))
    },
  })
}

export function usePostOrdersV3BatchesChangeOrders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.orders.v3.batches.changeOrders.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.orders.v3.batches.changeOrders.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrdersV3BatchesChangeOrdersMutationOptions<
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

export function getPostOrdersV3BatchesChangeOrdersChangeOrderTypeMutationKey() {
  return ['orders', '/orders/v3/batches/changeOrders/:changeOrderType', 'POST'] as const
}

export function getPostOrdersV3BatchesChangeOrdersChangeOrderTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.orders.v3.batches.changeOrders)[':changeOrderType']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrdersV3BatchesChangeOrdersChangeOrderTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.orders.v3.batches.changeOrders)[':changeOrderType']['$post']
      >,
    ) {
      return parseResponse(
        client.orders.v3.batches.changeOrders[':changeOrderType'].$post(args, options),
      )
    },
  })
}

export function usePostOrdersV3BatchesChangeOrdersChangeOrderType<
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
                  (typeof client.orders.v3.batches.changeOrders)[':changeOrderType']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.orders.v3.batches.changeOrders)[':changeOrderType']['$post']
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
  const mutationDefaults = getPostOrdersV3BatchesChangeOrdersChangeOrderTypeMutationOptions<
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

export function getPostOrdersV3BatchesClearMerchantOrderInfosMutationKey() {
  return ['orders', '/orders/v3/batches/clearMerchantOrderInfos', 'POST'] as const
}

export function getPostOrdersV3BatchesClearMerchantOrderInfosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.orders.v3.batches.clearMerchantOrderInfos.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.orders.v3.batches.clearMerchantOrderInfos.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrdersV3BatchesClearMerchantOrderInfosMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.orders.v3.batches.clearMerchantOrderInfos.$post>,
    ) {
      return parseResponse(client.orders.v3.batches.clearMerchantOrderInfos.$post(args, options))
    },
  })
}

export function usePostOrdersV3BatchesClearMerchantOrderInfos<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.orders.v3.batches.clearMerchantOrderInfos.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.orders.v3.batches.clearMerchantOrderInfos.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrdersV3BatchesClearMerchantOrderInfosMutationOptions<
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

export function getPostOrdersV3BatchesSetMerchantOrderInfosMutationKey() {
  return ['orders', '/orders/v3/batches/setMerchantOrderInfos', 'POST'] as const
}

export function getPostOrdersV3BatchesSetMerchantOrderInfosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.orders.v3.batches.setMerchantOrderInfos.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.orders.v3.batches.setMerchantOrderInfos.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrdersV3BatchesSetMerchantOrderInfosMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.orders.v3.batches.setMerchantOrderInfos.$post>,
    ) {
      return parseResponse(client.orders.v3.batches.setMerchantOrderInfos.$post(args, options))
    },
  })
}

export function usePostOrdersV3BatchesSetMerchantOrderInfos<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.orders.v3.batches.setMerchantOrderInfos.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.orders.v3.batches.setMerchantOrderInfos.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrdersV3BatchesSetMerchantOrderInfosMutationOptions<
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

export function getPostOrdersV3HarvestMutationKey() {
  return ['orders', '/orders/v3/harvest', 'POST'] as const
}

export function getPostOrdersV3HarvestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.v3.harvest.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.orders.v3.harvest.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrdersV3HarvestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.orders.v3.harvest.$post>) {
      return parseResponse(client.orders.v3.harvest.$post(args, options))
    },
  })
}

export function usePostOrdersV3Harvest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.orders.v3.harvest.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.orders.v3.harvest.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrdersV3HarvestMutationOptions<TError, TOnMutateResult>(
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

export function getPostOrdersV3ListFullMutationKey() {
  return ['orders', '/orders/v3/list/full', 'POST'] as const
}

export function getPostOrdersV3ListFullMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.v3.list.full.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.orders.v3.list.full.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrdersV3ListFullMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.orders.v3.list.full.$post>) {
      return parseResponse(client.orders.v3.list.full.$post(args, options))
    },
  })
}

export function usePostOrdersV3ListFull<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.orders.v3.list.full.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.orders.v3.list.full.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrdersV3ListFullMutationOptions<TError, TOnMutateResult>(
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

export function getPostOrdersV3ListLightMutationKey() {
  return ['orders', '/orders/v3/list/light', 'POST'] as const
}

export function getPostOrdersV3ListLightMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.orders.v3.list.light.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.orders.v3.list.light.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrdersV3ListLightMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.orders.v3.list.light.$post>) {
      return parseResponse(client.orders.v3.list.light.$post(args, options))
    },
  })
}

export function usePostOrdersV3ListLight<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.orders.v3.list.light.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.orders.v3.list.light.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrdersV3ListLightMutationOptions<TError, TOnMutateResult>(
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

export function getOrdersV3LovOrderManagementReadyMarketplaceBusinessCodeQueryKey(
  args: InferRequestType<
    typeof client.orders.v3.lov.orderManagementReadyMarketplaceBusinessCode.$get
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['orders', '/orders/v3/lov/orderManagementReadyMarketplaceBusinessCode', keyArgs] as const
}

export function getOrdersV3LovOrderManagementReadyMarketplaceBusinessCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<typeof client.orders.v3.lov.orderManagementReadyMarketplaceBusinessCode.$get>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    typeof client.orders.v3.lov.orderManagementReadyMarketplaceBusinessCode.$get
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.orders.v3.lov.orderManagementReadyMarketplaceBusinessCode.$get>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrdersV3LovOrderManagementReadyMarketplaceBusinessCodeQueryKey>
  >({
    queryKey: getOrdersV3LovOrderManagementReadyMarketplaceBusinessCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orders.v3.lov.orderManagementReadyMarketplaceBusinessCode.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrdersV3LovOrderManagementReadyMarketplaceBusinessCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<typeof client.orders.v3.lov.orderManagementReadyMarketplaceBusinessCode.$get>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    typeof client.orders.v3.lov.orderManagementReadyMarketplaceBusinessCode.$get
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrdersV3LovOrderManagementReadyMarketplaceBusinessCodeQueryKey>
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
      ...getOrdersV3LovOrderManagementReadyMarketplaceBusinessCodeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrdersV3LovOrderManagementReadyMarketplaceBusinessCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<typeof client.orders.v3.lov.orderManagementReadyMarketplaceBusinessCode.$get>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    typeof client.orders.v3.lov.orderManagementReadyMarketplaceBusinessCode.$get
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrdersV3LovOrderManagementReadyMarketplaceBusinessCodeQueryKey>
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
      ...getOrdersV3LovOrderManagementReadyMarketplaceBusinessCodeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrdersV3StatusQueryKey(
  args: InferRequestType<typeof client.orders.v3.status.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['orders', '/orders/v3/status', keyArgs] as const
}

export function getOrdersV3StatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.v3.status.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.orders.v3.status.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.v3.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrdersV3StatusQueryKey>
  >({
    queryKey: getOrdersV3StatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orders.v3.status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOrdersV3Status<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.v3.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.orders.v3.status.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.v3.status.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOrdersV3StatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOrdersV3StatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOrdersV3Status<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.v3.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.orders.v3.status.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.v3.status.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOrdersV3StatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOrdersV3StatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostOrdersV3MarketplaceTechnicalCodeAccountIdHarvestMutationKey() {
  return ['orders', '/orders/v3/:marketplaceTechnicalCode/:accountId/harvest', 'POST'] as const
}

export function getPostOrdersV3MarketplaceTechnicalCodeAccountIdHarvestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId']['harvest']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrdersV3MarketplaceTechnicalCodeAccountIdHarvestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId']['harvest']['$post']
      >,
    ) {
      return parseResponse(
        client.orders.v3[':marketplaceTechnicalCode'][':accountId'].harvest.$post(args, options),
      )
    },
  })
}

export function usePostOrdersV3MarketplaceTechnicalCodeAccountIdHarvest<
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
                  (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId']['harvest']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId']['harvest']['$post']
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
  const mutationDefaults = getPostOrdersV3MarketplaceTechnicalCodeAccountIdHarvestMutationOptions<
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

export function getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdQueryKey(
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

export function getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdQueryKey>
  >({
    queryKey: getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orders.v3[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdQueryKey>
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
      ...getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdQueryKey>
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
      ...getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getHeadOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdMutationKey() {
  return [
    'orders',
    '/orders/v3/:marketplaceTechnicalCode/:accountId/:beezUPOrderId',
    'HEAD',
  ] as const
}

export function getHeadOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$head']
    >,
    TOnMutateResult
  >({
    mutationKey: getHeadOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$head']
      >,
    ) {
      return parseResponse(
        client.orders.v3[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'].$head(
          args,
          options,
        ),
      )
    },
  })
}

export function useHeadOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderId<
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
                  (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$head']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$head']
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
    getHeadOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdMutationOptions<
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

export function getPostOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdClearMerchantOrderInfoMutationKey() {
  return [
    'orders',
    '/orders/v3/:marketplaceTechnicalCode/:accountId/:beezUPOrderId/clearMerchantOrderInfo',
    'POST',
  ] as const
}

export function getPostOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdClearMerchantOrderInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['clearMerchantOrderInfo']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdClearMerchantOrderInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['clearMerchantOrderInfo']['$post']
      >,
    ) {
      return parseResponse(
        client.orders.v3[':marketplaceTechnicalCode'][':accountId'][
          ':beezUPOrderId'
        ].clearMerchantOrderInfo.$post(args, options),
      )
    },
  })
}

export function usePostOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdClearMerchantOrderInfo<
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
                  (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['clearMerchantOrderInfo']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['clearMerchantOrderInfo']['$post']
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
    getPostOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdClearMerchantOrderInfoMutationOptions<
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

export function getPostOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHarvestMutationKey() {
  return [
    'orders',
    '/orders/v3/:marketplaceTechnicalCode/:accountId/:beezUPOrderId/harvest',
    'POST',
  ] as const
}

export function getPostOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHarvestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['harvest']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHarvestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['harvest']['$post']
      >,
    ) {
      return parseResponse(
        client.orders.v3[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'].harvest.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHarvest<
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
                  (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['harvest']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['harvest']['$post']
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
    getPostOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHarvestMutationOptions<
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

export function getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryQueryKey(
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

export function getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryQueryKey>
  >({
    queryKey: getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orders.v3[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'].history.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistory<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['history']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryQueryKey>
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
      ...getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistory<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['history']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryQueryKey>
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
      ...getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryOrderChangeExecutionUUIDQueryKey(
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

export function getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryOrderChangeExecutionUUIDQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['history'][':orderChangeExecutionUUID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryOrderChangeExecutionUUIDQueryKey
    >
  >({
    queryKey:
      getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryOrderChangeExecutionUUIDQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.orders.v3[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'].history[
          ':orderChangeExecutionUUID'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryOrderChangeExecutionUUID<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['history'][':orderChangeExecutionUUID']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryOrderChangeExecutionUUIDQueryKey
        >
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
      ...getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryOrderChangeExecutionUUIDQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryOrderChangeExecutionUUID<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['history'][':orderChangeExecutionUUID']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryOrderChangeExecutionUUIDQueryKey
        >
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
      ...getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryOrderChangeExecutionUUIDQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdSetMerchantOrderInfoMutationKey() {
  return [
    'orders',
    '/orders/v3/:marketplaceTechnicalCode/:accountId/:beezUPOrderId/setMerchantOrderInfo',
    'POST',
  ] as const
}

export function getPostOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdSetMerchantOrderInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['setMerchantOrderInfo']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdSetMerchantOrderInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['setMerchantOrderInfo']['$post']
      >,
    ) {
      return parseResponse(
        client.orders.v3[':marketplaceTechnicalCode'][':accountId'][
          ':beezUPOrderId'
        ].setMerchantOrderInfo.$post(args, options),
      )
    },
  })
}

export function usePostOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdSetMerchantOrderInfo<
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
                  (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['setMerchantOrderInfo']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['setMerchantOrderInfo']['$post']
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
    getPostOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdSetMerchantOrderInfoMutationOptions<
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

export function getPostOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdChangeOrderTypeMutationKey() {
  return [
    'orders',
    '/orders/v3/:marketplaceTechnicalCode/:accountId/:beezUPOrderId/:changeOrderType',
    'POST',
  ] as const
}

export function getPostOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdChangeOrderTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'][':changeOrderType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdChangeOrderTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'][':changeOrderType']['$post']
      >,
    ) {
      return parseResponse(
        client.orders.v3[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'][
          ':changeOrderType'
        ].$post(args, options),
      )
    },
  })
}

export function usePostOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdChangeOrderType<
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
                  (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'][':changeOrderType']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'][':changeOrderType']['$post']
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
    getPostOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdChangeOrderTypeMutationOptions<
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

export function getV2PublicChannelsIndexQueryKey(
  args: InferRequestType<typeof client.v2.public.channels.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/public/channels/', keyArgs] as const
}

export function getV2PublicChannelsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.public.channels.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.public.channels.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.public.channels.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PublicChannelsIndexQueryKey>
  >({
    queryKey: getV2PublicChannelsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.public.channels.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2PublicChannelsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.public.channels.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.public.channels.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.public.channels.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PublicChannelsIndexQueryKey>
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
      ...getV2PublicChannelsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2PublicChannelsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.public.channels.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.public.channels.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.public.channels.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PublicChannelsIndexQueryKey>
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
      ...getV2PublicChannelsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2PublicChannelsCountryIsoCodeQueryKey(
  args: InferRequestType<(typeof client.v2.public.channels)[':countryIsoCode']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/public/channels/:countryIsoCode', keyArgs] as const
}

export function getV2PublicChannelsCountryIsoCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.public.channels)[':countryIsoCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.public.channels)[':countryIsoCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.public.channels)[':countryIsoCode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PublicChannelsCountryIsoCodeQueryKey>
  >({
    queryKey: getV2PublicChannelsCountryIsoCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.public.channels[':countryIsoCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2PublicChannelsCountryIsoCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.public.channels)[':countryIsoCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.public.channels)[':countryIsoCode']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.public.channels)[':countryIsoCode']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PublicChannelsCountryIsoCodeQueryKey>
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
      ...getV2PublicChannelsCountryIsoCodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2PublicChannelsCountryIsoCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.public.channels)[':countryIsoCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.public.channels)[':countryIsoCode']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.public.channels)[':countryIsoCode']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PublicChannelsCountryIsoCodeQueryKey>
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
      ...getV2PublicChannelsCountryIsoCodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2PublicLovIndexQueryKey(
  args: InferRequestType<typeof client.v2.public.lov.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/public/lov/', keyArgs] as const
}

export function getV2PublicLovIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.public.lov.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.public.lov.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.public.lov.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2PublicLovIndexQueryKey>
  >({
    queryKey: getV2PublicLovIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.public.lov.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2PublicLovIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.public.lov.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.public.lov.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.public.lov.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PublicLovIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2PublicLovIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2PublicLovIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.public.lov.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.public.lov.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.public.lov.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PublicLovIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2PublicLovIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2PublicLovListNameQueryKey(
  args: InferRequestType<(typeof client.v2.public.lov)[':listName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/public/lov/:listName', keyArgs] as const
}

export function getV2PublicLovListNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.public.lov)[':listName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.public.lov)[':listName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.public.lov)[':listName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PublicLovListNameQueryKey>
  >({
    queryKey: getV2PublicLovListNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.public.lov[':listName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2PublicLovListName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.public.lov)[':listName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.public.lov)[':listName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.public.lov)[':listName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PublicLovListNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2PublicLovListNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2PublicLovListName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.public.lov)[':listName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.public.lov)[':listName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.public.lov)[':listName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PublicLovListNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2PublicLovListNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2PublicSecurityLoginMutationKey() {
  return ['v2', '/v2/public/security/login', 'POST'] as const
}

export function getPostV2PublicSecurityLoginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.public.security.login.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.public.security.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2PublicSecurityLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.public.security.login.$post>) {
      return parseResponse(client.v2.public.security.login.$post(args, options))
    },
  })
}

export function usePostV2PublicSecurityLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.public.security.login.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.public.security.login.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2PublicSecurityLoginMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2PublicSecurityLostpasswordMutationKey() {
  return ['v2', '/v2/public/security/lostpassword', 'POST'] as const
}

export function getPostV2PublicSecurityLostpasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.public.security.lostpassword.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v2.public.security.lostpassword.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2PublicSecurityLostpasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.public.security.lostpassword.$post>) {
      return parseResponse(client.v2.public.security.lostpassword.$post(args, options))
    },
  })
}

export function usePostV2PublicSecurityLostpassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.public.security.lostpassword.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v2.public.security.lostpassword.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2PublicSecurityLostpasswordMutationOptions<
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

export function getPostV2PublicSecurityRegisterMutationKey() {
  return ['v2', '/v2/public/security/register', 'POST'] as const
}

export function getPostV2PublicSecurityRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.public.security.register.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v2.public.security.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2PublicSecurityRegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.public.security.register.$post>) {
      return parseResponse(client.v2.public.security.register.$post(args, options))
    },
  })
}

export function usePostV2PublicSecurityRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.public.security.register.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v2.public.security.register.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2PublicSecurityRegisterMutationOptions<TError, TOnMutateResult>(
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

export function getV2UserAnalyticsIndexQueryKey() {
  return ['v2', '/v2/user/analytics/'] as const
}

export function getV2UserAnalyticsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.analytics.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.analytics.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserAnalyticsIndexQueryKey>
  >({
    queryKey: getV2UserAnalyticsIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.analytics.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserAnalyticsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.analytics.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.analytics.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserAnalyticsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2UserAnalyticsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2UserAnalyticsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.analytics.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.analytics.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserAnalyticsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2UserAnalyticsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2UserAnalyticsReportsBydayMutationKey() {
  return ['v2', '/v2/user/analytics/reports/byday', 'POST'] as const
}

export function getPostV2UserAnalyticsReportsBydayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.analytics.reports.byday.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v2.user.analytics.reports.byday.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserAnalyticsReportsBydayMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.user.analytics.reports.byday.$post>) {
      return parseResponse(client.v2.user.analytics.reports.byday.$post(args, options))
    },
  })
}

export function usePostV2UserAnalyticsReportsByday<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.analytics.reports.byday.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.user.analytics.reports.byday.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2UserAnalyticsReportsBydayMutationOptions<
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

export function getV2UserAnalyticsTrackingStatusQueryKey() {
  return ['v2', '/v2/user/analytics/tracking/status'] as const
}

export function getV2UserAnalyticsTrackingStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.analytics.tracking.status.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.analytics.tracking.status.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserAnalyticsTrackingStatusQueryKey>
  >({
    queryKey: getV2UserAnalyticsTrackingStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.analytics.tracking.status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserAnalyticsTrackingStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.analytics.tracking.status.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.analytics.tracking.status.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserAnalyticsTrackingStatusQueryKey>
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
      ...getV2UserAnalyticsTrackingStatusQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserAnalyticsTrackingStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.analytics.tracking.status.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.analytics.tracking.status.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserAnalyticsTrackingStatusQueryKey>
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
      ...getV2UserAnalyticsTrackingStatusQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2UserAnalyticsStoreIdQueryKey(
  args: InferRequestType<(typeof client.v2.user.analytics)[':storeId']['$get']>,
) {
  return ['v2', '/v2/user/analytics/:storeId', args] as const
}

export function getV2UserAnalyticsStoreIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.analytics)[':storeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.analytics)[':storeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.user.analytics)[':storeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserAnalyticsStoreIdQueryKey>
  >({
    queryKey: getV2UserAnalyticsStoreIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.analytics[':storeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserAnalyticsStoreId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.analytics)[':storeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.analytics)[':storeId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.user.analytics)[':storeId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserAnalyticsStoreIdQueryKey>
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
      ...getV2UserAnalyticsStoreIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserAnalyticsStoreId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.analytics)[':storeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.analytics)[':storeId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.user.analytics)[':storeId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserAnalyticsStoreIdQueryKey>
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
      ...getV2UserAnalyticsStoreIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2UserAnalyticsStoreIdOptimisationsAllActionNameMutationKey() {
  return ['v2', '/v2/user/analytics/:storeId/optimisations/all/:actionName', 'POST'] as const
}

export function getPostV2UserAnalyticsStoreIdOptimisationsAllActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.analytics)[':storeId']['optimisations']['all'][':actionName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserAnalyticsStoreIdOptimisationsAllActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.analytics)[':storeId']['optimisations']['all'][':actionName']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.analytics[':storeId'].optimisations.all[':actionName'].$post(args, options),
      )
    },
  })
}

export function usePostV2UserAnalyticsStoreIdOptimisationsAllActionName<
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
                    (typeof client.v2.user.analytics)[':storeId']['optimisations']['all'][':actionName']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.analytics)[':storeId']['optimisations']['all'][':actionName']['$post']
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
  const mutationDefaults = getPostV2UserAnalyticsStoreIdOptimisationsAllActionNameMutationOptions<
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

export function getPostV2UserAnalyticsStoreIdOptimisationsBycategoryCatalogCategoryIdActionNameMutationKey() {
  return [
    'v2',
    '/v2/user/analytics/:storeId/optimisations/bycategory/:catalogCategoryId/:actionName',
    'POST',
  ] as const
}

export function getPostV2UserAnalyticsStoreIdOptimisationsBycategoryCatalogCategoryIdActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.analytics)[':storeId']['optimisations']['bycategory'][':catalogCategoryId'][':actionName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2UserAnalyticsStoreIdOptimisationsBycategoryCatalogCategoryIdActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.analytics)[':storeId']['optimisations']['bycategory'][':catalogCategoryId'][':actionName']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.analytics[':storeId'].optimisations.bycategory[':catalogCategoryId'][
          ':actionName'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV2UserAnalyticsStoreIdOptimisationsBycategoryCatalogCategoryIdActionName<
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
                    (typeof client.v2.user.analytics)[':storeId']['optimisations']['bycategory'][':catalogCategoryId'][':actionName']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.analytics)[':storeId']['optimisations']['bycategory'][':catalogCategoryId'][':actionName']['$post']
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
    getPostV2UserAnalyticsStoreIdOptimisationsBycategoryCatalogCategoryIdActionNameMutationOptions<
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

export function getPostV2UserAnalyticsStoreIdOptimisationsBychannelChannelIdActionNameMutationKey() {
  return [
    'v2',
    '/v2/user/analytics/:storeId/optimisations/bychannel/:channelId/:actionName',
    'POST',
  ] as const
}

export function getPostV2UserAnalyticsStoreIdOptimisationsBychannelChannelIdActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.analytics)[':storeId']['optimisations']['bychannel'][':channelId'][':actionName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2UserAnalyticsStoreIdOptimisationsBychannelChannelIdActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.analytics)[':storeId']['optimisations']['bychannel'][':channelId'][':actionName']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.analytics[':storeId'].optimisations.bychannel[':channelId'][
          ':actionName'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV2UserAnalyticsStoreIdOptimisationsBychannelChannelIdActionName<
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
                    (typeof client.v2.user.analytics)[':storeId']['optimisations']['bychannel'][':channelId'][':actionName']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.analytics)[':storeId']['optimisations']['bychannel'][':channelId'][':actionName']['$post']
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
    getPostV2UserAnalyticsStoreIdOptimisationsBychannelChannelIdActionNameMutationOptions<
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

export function getPostV2UserAnalyticsStoreIdOptimisationsByproductProductIdActionNameMutationKey() {
  return [
    'v2',
    '/v2/user/analytics/:storeId/optimisations/byproduct/:productId/:actionName',
    'POST',
  ] as const
}

export function getPostV2UserAnalyticsStoreIdOptimisationsByproductProductIdActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.analytics)[':storeId']['optimisations']['byproduct'][':productId'][':actionName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2UserAnalyticsStoreIdOptimisationsByproductProductIdActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.analytics)[':storeId']['optimisations']['byproduct'][':productId'][':actionName']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.analytics[':storeId'].optimisations.byproduct[':productId'][
          ':actionName'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV2UserAnalyticsStoreIdOptimisationsByproductProductIdActionName<
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
                    (typeof client.v2.user.analytics)[':storeId']['optimisations']['byproduct'][':productId'][':actionName']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.analytics)[':storeId']['optimisations']['byproduct'][':productId'][':actionName']['$post']
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
    getPostV2UserAnalyticsStoreIdOptimisationsByproductProductIdActionNameMutationOptions<
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

export function getPostV2UserAnalyticsStoreIdOptimisationsCopyMutationKey() {
  return ['v2', '/v2/user/analytics/:storeId/optimisations/copy', 'POST'] as const
}

export function getPostV2UserAnalyticsStoreIdOptimisationsCopyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.analytics)[':storeId']['optimisations']['copy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserAnalyticsStoreIdOptimisationsCopyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.analytics)[':storeId']['optimisations']['copy']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.analytics[':storeId'].optimisations.copy.$post(args, options),
      )
    },
  })
}

export function usePostV2UserAnalyticsStoreIdOptimisationsCopy<
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
                  (typeof client.v2.user.analytics)[':storeId']['optimisations']['copy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.user.analytics)[':storeId']['optimisations']['copy']['$post']
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
  const mutationDefaults = getPostV2UserAnalyticsStoreIdOptimisationsCopyMutationOptions<
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

export function getPostV2UserAnalyticsStoreIdOptimisationsActionNameMutationKey() {
  return ['v2', '/v2/user/analytics/:storeId/optimisations/:actionName', 'POST'] as const
}

export function getPostV2UserAnalyticsStoreIdOptimisationsActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.analytics)[':storeId']['optimisations'][':actionName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserAnalyticsStoreIdOptimisationsActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.analytics)[':storeId']['optimisations'][':actionName']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.analytics[':storeId'].optimisations[':actionName'].$post(args, options),
      )
    },
  })
}

export function usePostV2UserAnalyticsStoreIdOptimisationsActionName<
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
                    (typeof client.v2.user.analytics)[':storeId']['optimisations'][':actionName']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.analytics)[':storeId']['optimisations'][':actionName']['$post']
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
  const mutationDefaults = getPostV2UserAnalyticsStoreIdOptimisationsActionNameMutationOptions<
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

export function getPostV2UserAnalyticsStoreIdReportsBycategoryMutationKey() {
  return ['v2', '/v2/user/analytics/:storeId/reports/bycategory', 'POST'] as const
}

export function getPostV2UserAnalyticsStoreIdReportsBycategoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.analytics)[':storeId']['reports']['bycategory']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserAnalyticsStoreIdReportsBycategoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.analytics)[':storeId']['reports']['bycategory']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.analytics[':storeId'].reports.bycategory.$post(args, options),
      )
    },
  })
}

export function usePostV2UserAnalyticsStoreIdReportsBycategory<
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
                  (typeof client.v2.user.analytics)[':storeId']['reports']['bycategory']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.user.analytics)[':storeId']['reports']['bycategory']['$post']
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
  const mutationDefaults = getPostV2UserAnalyticsStoreIdReportsBycategoryMutationOptions<
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

export function getPostV2UserAnalyticsStoreIdReportsBychannelMutationKey() {
  return ['v2', '/v2/user/analytics/:storeId/reports/bychannel', 'POST'] as const
}

export function getPostV2UserAnalyticsStoreIdReportsBychannelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.analytics)[':storeId']['reports']['bychannel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserAnalyticsStoreIdReportsBychannelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.analytics)[':storeId']['reports']['bychannel']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.analytics[':storeId'].reports.bychannel.$post(args, options),
      )
    },
  })
}

export function usePostV2UserAnalyticsStoreIdReportsBychannel<
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
                  (typeof client.v2.user.analytics)[':storeId']['reports']['bychannel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.user.analytics)[':storeId']['reports']['bychannel']['$post']
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
  const mutationDefaults = getPostV2UserAnalyticsStoreIdReportsBychannelMutationOptions<
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

export function getPostV2UserAnalyticsStoreIdReportsBydayMutationKey() {
  return ['v2', '/v2/user/analytics/:storeId/reports/byday', 'POST'] as const
}

export function getPostV2UserAnalyticsStoreIdReportsBydayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v2.user.analytics)[':storeId']['reports']['byday']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserAnalyticsStoreIdReportsBydayMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.analytics)[':storeId']['reports']['byday']['$post']
      >,
    ) {
      return parseResponse(client.v2.user.analytics[':storeId'].reports.byday.$post(args, options))
    },
  })
}

export function usePostV2UserAnalyticsStoreIdReportsByday<
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
                  (typeof client.v2.user.analytics)[':storeId']['reports']['byday']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.user.analytics)[':storeId']['reports']['byday']['$post']
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
  const mutationDefaults = getPostV2UserAnalyticsStoreIdReportsBydayMutationOptions<
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

export function getPostV2UserAnalyticsStoreIdReportsByproductMutationKey() {
  return ['v2', '/v2/user/analytics/:storeId/reports/byproduct', 'POST'] as const
}

export function getPostV2UserAnalyticsStoreIdReportsByproductMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.analytics)[':storeId']['reports']['byproduct']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserAnalyticsStoreIdReportsByproductMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.analytics)[':storeId']['reports']['byproduct']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.analytics[':storeId'].reports.byproduct.$post(args, options),
      )
    },
  })
}

export function usePostV2UserAnalyticsStoreIdReportsByproduct<
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
                  (typeof client.v2.user.analytics)[':storeId']['reports']['byproduct']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.user.analytics)[':storeId']['reports']['byproduct']['$post']
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
  const mutationDefaults = getPostV2UserAnalyticsStoreIdReportsByproductMutationOptions<
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

export function getV2UserAnalyticsStoreIdReportsFiltersQueryKey(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['reports']['filters']['$get']
  >,
) {
  return ['v2', '/v2/user/analytics/:storeId/reports/filters', args] as const
}

export function getV2UserAnalyticsStoreIdReportsFiltersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.user.analytics)[':storeId']['reports']['filters']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['reports']['filters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.user.analytics)[':storeId']['reports']['filters']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserAnalyticsStoreIdReportsFiltersQueryKey>
  >({
    queryKey: getV2UserAnalyticsStoreIdReportsFiltersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.analytics[':storeId'].reports.filters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserAnalyticsStoreIdReportsFilters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.user.analytics)[':storeId']['reports']['filters']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['reports']['filters']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserAnalyticsStoreIdReportsFiltersQueryKey>
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
      ...getV2UserAnalyticsStoreIdReportsFiltersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserAnalyticsStoreIdReportsFilters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.user.analytics)[':storeId']['reports']['filters']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['reports']['filters']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserAnalyticsStoreIdReportsFiltersQueryKey>
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
      ...getV2UserAnalyticsStoreIdReportsFiltersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2UserAnalyticsStoreIdReportsFiltersReportFilterIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['reports']['filters'][':reportFilterId']['$get']
  >,
) {
  return ['v2', '/v2/user/analytics/:storeId/reports/filters/:reportFilterId', args] as const
}

export function getV2UserAnalyticsStoreIdReportsFiltersReportFilterIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['reports']['filters'][':reportFilterId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2UserAnalyticsStoreIdReportsFiltersReportFilterIdQueryKey>
  >({
    queryKey: getV2UserAnalyticsStoreIdReportsFiltersReportFilterIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.analytics[':storeId'].reports.filters[':reportFilterId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserAnalyticsStoreIdReportsFiltersReportFilterId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['reports']['filters'][':reportFilterId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserAnalyticsStoreIdReportsFiltersReportFilterIdQueryKey>
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
      ...getV2UserAnalyticsStoreIdReportsFiltersReportFilterIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserAnalyticsStoreIdReportsFiltersReportFilterId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['reports']['filters'][':reportFilterId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserAnalyticsStoreIdReportsFiltersReportFilterIdQueryKey>
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
      ...getV2UserAnalyticsStoreIdReportsFiltersReportFilterIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV2UserAnalyticsStoreIdReportsFiltersReportFilterIdMutationKey() {
  return ['v2', '/v2/user/analytics/:storeId/reports/filters/:reportFilterId', 'PUT'] as const
}

export function getPutV2UserAnalyticsStoreIdReportsFiltersReportFilterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.analytics)[':storeId']['reports']['filters'][':reportFilterId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2UserAnalyticsStoreIdReportsFiltersReportFilterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.analytics)[':storeId']['reports']['filters'][':reportFilterId']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.user.analytics[':storeId'].reports.filters[':reportFilterId'].$put(args, options),
      )
    },
  })
}

export function usePutV2UserAnalyticsStoreIdReportsFiltersReportFilterId<
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
                    (typeof client.v2.user.analytics)[':storeId']['reports']['filters'][':reportFilterId']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.analytics)[':storeId']['reports']['filters'][':reportFilterId']['$put']
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
  const mutationDefaults = getPutV2UserAnalyticsStoreIdReportsFiltersReportFilterIdMutationOptions<
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

export function getDeleteV2UserAnalyticsStoreIdReportsFiltersReportFilterIdMutationKey() {
  return ['v2', '/v2/user/analytics/:storeId/reports/filters/:reportFilterId', 'DELETE'] as const
}

export function getDeleteV2UserAnalyticsStoreIdReportsFiltersReportFilterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.analytics)[':storeId']['reports']['filters'][':reportFilterId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2UserAnalyticsStoreIdReportsFiltersReportFilterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.analytics)[':storeId']['reports']['filters'][':reportFilterId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.user.analytics[':storeId'].reports.filters[':reportFilterId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV2UserAnalyticsStoreIdReportsFiltersReportFilterId<
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
                    (typeof client.v2.user.analytics)[':storeId']['reports']['filters'][':reportFilterId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.analytics)[':storeId']['reports']['filters'][':reportFilterId']['$delete']
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
    getDeleteV2UserAnalyticsStoreIdReportsFiltersReportFilterIdMutationOptions<
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

export function getV2UserAnalyticsStoreIdRulesQueryKey(
  args: InferRequestType<(typeof client.v2.user.analytics)[':storeId']['rules']['$get']>,
) {
  return ['v2', '/v2/user/analytics/:storeId/rules', args] as const
}

export function getV2UserAnalyticsStoreIdRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.analytics)[':storeId']['rules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.analytics)[':storeId']['rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.user.analytics)[':storeId']['rules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserAnalyticsStoreIdRulesQueryKey>
  >({
    queryKey: getV2UserAnalyticsStoreIdRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.analytics[':storeId'].rules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserAnalyticsStoreIdRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.analytics)[':storeId']['rules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.analytics)[':storeId']['rules']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.user.analytics)[':storeId']['rules']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserAnalyticsStoreIdRulesQueryKey>
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
      ...getV2UserAnalyticsStoreIdRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserAnalyticsStoreIdRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.analytics)[':storeId']['rules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.analytics)[':storeId']['rules']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.user.analytics)[':storeId']['rules']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserAnalyticsStoreIdRulesQueryKey>
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
      ...getV2UserAnalyticsStoreIdRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2UserAnalyticsStoreIdRulesMutationKey() {
  return ['v2', '/v2/user/analytics/:storeId/rules', 'POST'] as const
}

export function getPostV2UserAnalyticsStoreIdRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.analytics)[':storeId']['rules']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.user.analytics)[':storeId']['rules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserAnalyticsStoreIdRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.user.analytics)[':storeId']['rules']['$post']>,
    ) {
      return parseResponse(client.v2.user.analytics[':storeId'].rules.$post(args, options))
    },
  })
}

export function usePostV2UserAnalyticsStoreIdRules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.user.analytics)[':storeId']['rules']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.user.analytics)[':storeId']['rules']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2UserAnalyticsStoreIdRulesMutationOptions<
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

export function getV2UserAnalyticsStoreIdRulesExecutionsQueryKey(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['rules']['executions']['$get']
  >,
) {
  return ['v2', '/v2/user/analytics/:storeId/rules/executions', args] as const
}

export function getV2UserAnalyticsStoreIdRulesExecutionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.user.analytics)[':storeId']['rules']['executions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['rules']['executions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.user.analytics)[':storeId']['rules']['executions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserAnalyticsStoreIdRulesExecutionsQueryKey>
  >({
    queryKey: getV2UserAnalyticsStoreIdRulesExecutionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.analytics[':storeId'].rules.executions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserAnalyticsStoreIdRulesExecutions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.user.analytics)[':storeId']['rules']['executions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['rules']['executions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserAnalyticsStoreIdRulesExecutionsQueryKey>
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
      ...getV2UserAnalyticsStoreIdRulesExecutionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserAnalyticsStoreIdRulesExecutions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.user.analytics)[':storeId']['rules']['executions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['rules']['executions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserAnalyticsStoreIdRulesExecutionsQueryKey>
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
      ...getV2UserAnalyticsStoreIdRulesExecutionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2UserAnalyticsStoreIdRulesRunMutationKey() {
  return ['v2', '/v2/user/analytics/:storeId/rules/run', 'POST'] as const
}

export function getPostV2UserAnalyticsStoreIdRulesRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v2.user.analytics)[':storeId']['rules']['run']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserAnalyticsStoreIdRulesRunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.analytics)[':storeId']['rules']['run']['$post']
      >,
    ) {
      return parseResponse(client.v2.user.analytics[':storeId'].rules.run.$post(args, options))
    },
  })
}

export function usePostV2UserAnalyticsStoreIdRulesRun<
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
                  ReturnType<(typeof client.v2.user.analytics)[':storeId']['rules']['run']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.user.analytics)[':storeId']['rules']['run']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2UserAnalyticsStoreIdRulesRunMutationOptions<
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

export function getV2UserAnalyticsStoreIdRulesRuleIdQueryKey(
  args: InferRequestType<(typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$get']>,
) {
  return ['v2', '/v2/user/analytics/:storeId/rules/:ruleId', args] as const
}

export function getV2UserAnalyticsStoreIdRulesRuleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserAnalyticsStoreIdRulesRuleIdQueryKey>
  >({
    queryKey: getV2UserAnalyticsStoreIdRulesRuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.analytics[':storeId'].rules[':ruleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserAnalyticsStoreIdRulesRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserAnalyticsStoreIdRulesRuleIdQueryKey>
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
      ...getV2UserAnalyticsStoreIdRulesRuleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserAnalyticsStoreIdRulesRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserAnalyticsStoreIdRulesRuleIdQueryKey>
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
      ...getV2UserAnalyticsStoreIdRulesRuleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2UserAnalyticsStoreIdRulesRuleIdMutationKey() {
  return ['v2', '/v2/user/analytics/:storeId/rules/:ruleId', 'DELETE'] as const
}

export function getDeleteV2UserAnalyticsStoreIdRulesRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2UserAnalyticsStoreIdRulesRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.user.analytics[':storeId'].rules[':ruleId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2UserAnalyticsStoreIdRulesRuleId<
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
                    (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$delete']
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
  const mutationDefaults = getDeleteV2UserAnalyticsStoreIdRulesRuleIdMutationOptions<
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

export function getPatchV2UserAnalyticsStoreIdRulesRuleIdMutationKey() {
  return ['v2', '/v2/user/analytics/:storeId/rules/:ruleId', 'PATCH'] as const
}

export function getPatchV2UserAnalyticsStoreIdRulesRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2UserAnalyticsStoreIdRulesRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.user.analytics[':storeId'].rules[':ruleId'].$patch(args, options),
      )
    },
  })
}

export function usePatchV2UserAnalyticsStoreIdRulesRuleId<
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
                    (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$patch']
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
  const mutationDefaults = getPatchV2UserAnalyticsStoreIdRulesRuleIdMutationOptions<
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

export function getPostV2UserAnalyticsStoreIdRulesRuleIdDisableMutationKey() {
  return ['v2', '/v2/user/analytics/:storeId/rules/:ruleId/disable', 'POST'] as const
}

export function getPostV2UserAnalyticsStoreIdRulesRuleIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['disable']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserAnalyticsStoreIdRulesRuleIdDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['disable']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.analytics[':storeId'].rules[':ruleId'].disable.$post(args, options),
      )
    },
  })
}

export function usePostV2UserAnalyticsStoreIdRulesRuleIdDisable<
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
                    (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['disable']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['disable']['$post']
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
  const mutationDefaults = getPostV2UserAnalyticsStoreIdRulesRuleIdDisableMutationOptions<
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

export function getPostV2UserAnalyticsStoreIdRulesRuleIdEnableMutationKey() {
  return ['v2', '/v2/user/analytics/:storeId/rules/:ruleId/enable', 'POST'] as const
}

export function getPostV2UserAnalyticsStoreIdRulesRuleIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['enable']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserAnalyticsStoreIdRulesRuleIdEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['enable']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.analytics[':storeId'].rules[':ruleId'].enable.$post(args, options),
      )
    },
  })
}

export function usePostV2UserAnalyticsStoreIdRulesRuleIdEnable<
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
                    (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['enable']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['enable']['$post']
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
  const mutationDefaults = getPostV2UserAnalyticsStoreIdRulesRuleIdEnableMutationOptions<
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

export function getPostV2UserAnalyticsStoreIdRulesRuleIdMovedownMutationKey() {
  return ['v2', '/v2/user/analytics/:storeId/rules/:ruleId/movedown', 'POST'] as const
}

export function getPostV2UserAnalyticsStoreIdRulesRuleIdMovedownMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['movedown']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserAnalyticsStoreIdRulesRuleIdMovedownMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['movedown']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.analytics[':storeId'].rules[':ruleId'].movedown.$post(args, options),
      )
    },
  })
}

export function usePostV2UserAnalyticsStoreIdRulesRuleIdMovedown<
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
                    (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['movedown']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['movedown']['$post']
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
  const mutationDefaults = getPostV2UserAnalyticsStoreIdRulesRuleIdMovedownMutationOptions<
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

export function getPostV2UserAnalyticsStoreIdRulesRuleIdMoveupMutationKey() {
  return ['v2', '/v2/user/analytics/:storeId/rules/:ruleId/moveup', 'POST'] as const
}

export function getPostV2UserAnalyticsStoreIdRulesRuleIdMoveupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['moveup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserAnalyticsStoreIdRulesRuleIdMoveupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['moveup']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.analytics[':storeId'].rules[':ruleId'].moveup.$post(args, options),
      )
    },
  })
}

export function usePostV2UserAnalyticsStoreIdRulesRuleIdMoveup<
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
                    (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['moveup']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['moveup']['$post']
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
  const mutationDefaults = getPostV2UserAnalyticsStoreIdRulesRuleIdMoveupMutationOptions<
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

export function getPostV2UserAnalyticsStoreIdRulesRuleIdRunMutationKey() {
  return ['v2', '/v2/user/analytics/:storeId/rules/:ruleId/run', 'POST'] as const
}

export function getPostV2UserAnalyticsStoreIdRulesRuleIdRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['run']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserAnalyticsStoreIdRulesRuleIdRunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['run']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.analytics[':storeId'].rules[':ruleId'].run.$post(args, options),
      )
    },
  })
}

export function usePostV2UserAnalyticsStoreIdRulesRuleIdRun<
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
                    (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['run']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['run']['$post']
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
  const mutationDefaults = getPostV2UserAnalyticsStoreIdRulesRuleIdRunMutationOptions<
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

export function getV2UserAnalyticsStoreIdTrackingClicksQueryKey(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['tracking']['clicks']['$get']
  >,
) {
  return ['v2', '/v2/user/analytics/:storeId/tracking/clicks', args] as const
}

export function getV2UserAnalyticsStoreIdTrackingClicksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.user.analytics)[':storeId']['tracking']['clicks']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['tracking']['clicks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.user.analytics)[':storeId']['tracking']['clicks']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserAnalyticsStoreIdTrackingClicksQueryKey>
  >({
    queryKey: getV2UserAnalyticsStoreIdTrackingClicksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.analytics[':storeId'].tracking.clicks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserAnalyticsStoreIdTrackingClicks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.user.analytics)[':storeId']['tracking']['clicks']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['tracking']['clicks']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserAnalyticsStoreIdTrackingClicksQueryKey>
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
      ...getV2UserAnalyticsStoreIdTrackingClicksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserAnalyticsStoreIdTrackingClicks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.user.analytics)[':storeId']['tracking']['clicks']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['tracking']['clicks']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserAnalyticsStoreIdTrackingClicksQueryKey>
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
      ...getV2UserAnalyticsStoreIdTrackingClicksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2UserAnalyticsStoreIdTrackingExternalordersQueryKey(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['tracking']['externalorders']['$get']
  >,
) {
  return ['v2', '/v2/user/analytics/:storeId/tracking/externalorders', args] as const
}

export function getV2UserAnalyticsStoreIdTrackingExternalordersQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['tracking']['externalorders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2UserAnalyticsStoreIdTrackingExternalordersQueryKey>
  >({
    queryKey: getV2UserAnalyticsStoreIdTrackingExternalordersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.analytics[':storeId'].tracking.externalorders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserAnalyticsStoreIdTrackingExternalorders<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['tracking']['externalorders']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserAnalyticsStoreIdTrackingExternalordersQueryKey>
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
      ...getV2UserAnalyticsStoreIdTrackingExternalordersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserAnalyticsStoreIdTrackingExternalorders<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['tracking']['externalorders']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserAnalyticsStoreIdTrackingExternalordersQueryKey>
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
      ...getV2UserAnalyticsStoreIdTrackingExternalordersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2UserAnalyticsStoreIdTrackingOrdersQueryKey(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['tracking']['orders']['$get']
  >,
) {
  return ['v2', '/v2/user/analytics/:storeId/tracking/orders', args] as const
}

export function getV2UserAnalyticsStoreIdTrackingOrdersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.user.analytics)[':storeId']['tracking']['orders']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['tracking']['orders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.user.analytics)[':storeId']['tracking']['orders']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserAnalyticsStoreIdTrackingOrdersQueryKey>
  >({
    queryKey: getV2UserAnalyticsStoreIdTrackingOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.analytics[':storeId'].tracking.orders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserAnalyticsStoreIdTrackingOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.user.analytics)[':storeId']['tracking']['orders']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['tracking']['orders']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserAnalyticsStoreIdTrackingOrdersQueryKey>
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
      ...getV2UserAnalyticsStoreIdTrackingOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserAnalyticsStoreIdTrackingOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.user.analytics)[':storeId']['tracking']['orders']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['tracking']['orders']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserAnalyticsStoreIdTrackingOrdersQueryKey>
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
      ...getV2UserAnalyticsStoreIdTrackingOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2UserAnalyticsStoreIdTrackingStatusQueryKey(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['tracking']['status']['$get']
  >,
) {
  return ['v2', '/v2/user/analytics/:storeId/tracking/status', args] as const
}

export function getV2UserAnalyticsStoreIdTrackingStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.user.analytics)[':storeId']['tracking']['status']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['tracking']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.user.analytics)[':storeId']['tracking']['status']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserAnalyticsStoreIdTrackingStatusQueryKey>
  >({
    queryKey: getV2UserAnalyticsStoreIdTrackingStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.analytics[':storeId'].tracking.status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserAnalyticsStoreIdTrackingStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.user.analytics)[':storeId']['tracking']['status']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['tracking']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserAnalyticsStoreIdTrackingStatusQueryKey>
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
      ...getV2UserAnalyticsStoreIdTrackingStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserAnalyticsStoreIdTrackingStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.user.analytics)[':storeId']['tracking']['status']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['tracking']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserAnalyticsStoreIdTrackingStatusQueryKey>
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
      ...getV2UserAnalyticsStoreIdTrackingStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2UserCatalogsIndexQueryKey() {
  return ['v2', '/v2/user/catalogs/'] as const
}

export function getV2UserCatalogsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.catalogs.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.catalogs.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserCatalogsIndexQueryKey>
  >({
    queryKey: getV2UserCatalogsIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.catalogs.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserCatalogsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.catalogs.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.catalogs.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2UserCatalogsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2UserCatalogsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.catalogs.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.catalogs.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2UserCatalogsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2UserCatalogsBeezupColumnsQueryKey() {
  return ['v2', '/v2/user/catalogs/beezupColumns'] as const
}

export function getV2UserCatalogsBeezupColumnsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.catalogs.beezupColumns.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.catalogs.beezupColumns.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserCatalogsBeezupColumnsQueryKey>
  >({
    queryKey: getV2UserCatalogsBeezupColumnsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.catalogs.beezupColumns.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserCatalogsBeezupColumns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.catalogs.beezupColumns.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.catalogs.beezupColumns.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsBeezupColumnsQueryKey>
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
      ...getV2UserCatalogsBeezupColumnsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserCatalogsBeezupColumns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.catalogs.beezupColumns.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.catalogs.beezupColumns.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsBeezupColumnsQueryKey>
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
      ...getV2UserCatalogsBeezupColumnsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2UserCatalogsImportationsQueryKey() {
  return ['v2', '/v2/user/catalogs/importations'] as const
}

export function getV2UserCatalogsImportationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.catalogs.importations.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.catalogs.importations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserCatalogsImportationsQueryKey>
  >({
    queryKey: getV2UserCatalogsImportationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.catalogs.importations.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserCatalogsImportations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.catalogs.importations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.catalogs.importations.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsImportationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2UserCatalogsImportationsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2UserCatalogsImportations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.catalogs.importations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.catalogs.importations.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsImportationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2UserCatalogsImportationsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2UserCatalogsStoreIdQueryKey(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['$get']>,
) {
  return ['v2', '/v2/user/catalogs/:storeId', args] as const
}

export function getV2UserCatalogsStoreIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserCatalogsStoreIdQueryKey>
  >({
    queryKey: getV2UserCatalogsStoreIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserCatalogsStoreId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsStoreIdQueryKey>
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
      ...getV2UserCatalogsStoreIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserCatalogsStoreId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsStoreIdQueryKey>
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
      ...getV2UserCatalogsStoreIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2UserCatalogsStoreIdAutoImportQueryKey(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['autoImport']['$get']>,
) {
  return ['v2', '/v2/user/catalogs/:storeId/autoImport', args] as const
}

export function getV2UserCatalogsStoreIdAutoImportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['autoImport']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['autoImport']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['autoImport']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserCatalogsStoreIdAutoImportQueryKey>
  >({
    queryKey: getV2UserCatalogsStoreIdAutoImportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].autoImport.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserCatalogsStoreIdAutoImport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['autoImport']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['autoImport']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.user.catalogs)[':storeId']['autoImport']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsStoreIdAutoImportQueryKey>
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
      ...getV2UserCatalogsStoreIdAutoImportQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserCatalogsStoreIdAutoImport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['autoImport']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['autoImport']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.user.catalogs)[':storeId']['autoImport']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsStoreIdAutoImportQueryKey>
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
      ...getV2UserCatalogsStoreIdAutoImportQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2UserCatalogsStoreIdAutoImportMutationKey() {
  return ['v2', '/v2/user/catalogs/:storeId/autoImport', 'DELETE'] as const
}

export function getDeleteV2UserCatalogsStoreIdAutoImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['autoImport']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2UserCatalogsStoreIdAutoImportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['autoImport']['$delete']>,
    ) {
      return parseResponse(client.v2.user.catalogs[':storeId'].autoImport.$delete(args, options))
    },
  })
}

export function useDeleteV2UserCatalogsStoreIdAutoImport<
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
                  ReturnType<(typeof client.v2.user.catalogs)[':storeId']['autoImport']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['autoImport']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2UserCatalogsStoreIdAutoImportMutationOptions<
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

export function getPostV2UserCatalogsStoreIdAutoImportActivateMutationKey() {
  return ['v2', '/v2/user/catalogs/:storeId/autoImport/activate', 'POST'] as const
}

export function getPostV2UserCatalogsStoreIdAutoImportActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['autoImport']['activate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserCatalogsStoreIdAutoImportActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.catalogs)[':storeId']['autoImport']['activate']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].autoImport.activate.$post(args, options),
      )
    },
  })
}

export function usePostV2UserCatalogsStoreIdAutoImportActivate<
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
                    (typeof client.v2.user.catalogs)[':storeId']['autoImport']['activate']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.catalogs)[':storeId']['autoImport']['activate']['$post']
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
  const mutationDefaults = getPostV2UserCatalogsStoreIdAutoImportActivateMutationOptions<
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

export function getPostV2UserCatalogsStoreIdAutoImportPauseMutationKey() {
  return ['v2', '/v2/user/catalogs/:storeId/autoImport/pause', 'POST'] as const
}

export function getPostV2UserCatalogsStoreIdAutoImportPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['autoImport']['pause']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserCatalogsStoreIdAutoImportPauseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.catalogs)[':storeId']['autoImport']['pause']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].autoImport.pause.$post(args, options),
      )
    },
  })
}

export function usePostV2UserCatalogsStoreIdAutoImportPause<
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
                    (typeof client.v2.user.catalogs)[':storeId']['autoImport']['pause']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.catalogs)[':storeId']['autoImport']['pause']['$post']
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
  const mutationDefaults = getPostV2UserCatalogsStoreIdAutoImportPauseMutationOptions<
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

export function getPostV2UserCatalogsStoreIdAutoImportResumeMutationKey() {
  return ['v2', '/v2/user/catalogs/:storeId/autoImport/resume', 'POST'] as const
}

export function getPostV2UserCatalogsStoreIdAutoImportResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['autoImport']['resume']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserCatalogsStoreIdAutoImportResumeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.catalogs)[':storeId']['autoImport']['resume']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].autoImport.resume.$post(args, options),
      )
    },
  })
}

export function usePostV2UserCatalogsStoreIdAutoImportResume<
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
                    (typeof client.v2.user.catalogs)[':storeId']['autoImport']['resume']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.catalogs)[':storeId']['autoImport']['resume']['$post']
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
  const mutationDefaults = getPostV2UserCatalogsStoreIdAutoImportResumeMutationOptions<
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

export function getPostV2UserCatalogsStoreIdAutoImportSchedulingIntervalMutationKey() {
  return ['v2', '/v2/user/catalogs/:storeId/autoImport/scheduling/interval', 'POST'] as const
}

export function getPostV2UserCatalogsStoreIdAutoImportSchedulingIntervalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['autoImport']['scheduling']['interval']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserCatalogsStoreIdAutoImportSchedulingIntervalMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.catalogs)[':storeId']['autoImport']['scheduling']['interval']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].autoImport.scheduling.interval.$post(args, options),
      )
    },
  })
}

export function usePostV2UserCatalogsStoreIdAutoImportSchedulingInterval<
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
                    (typeof client.v2.user.catalogs)[':storeId']['autoImport']['scheduling']['interval']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.catalogs)[':storeId']['autoImport']['scheduling']['interval']['$post']
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
  const mutationDefaults = getPostV2UserCatalogsStoreIdAutoImportSchedulingIntervalMutationOptions<
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

export function getPostV2UserCatalogsStoreIdAutoImportSchedulingSchedulesMutationKey() {
  return ['v2', '/v2/user/catalogs/:storeId/autoImport/scheduling/schedules', 'POST'] as const
}

export function getPostV2UserCatalogsStoreIdAutoImportSchedulingSchedulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['autoImport']['scheduling']['schedules']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserCatalogsStoreIdAutoImportSchedulingSchedulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.catalogs)[':storeId']['autoImport']['scheduling']['schedules']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].autoImport.scheduling.schedules.$post(args, options),
      )
    },
  })
}

export function usePostV2UserCatalogsStoreIdAutoImportSchedulingSchedules<
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
                    (typeof client.v2.user.catalogs)[':storeId']['autoImport']['scheduling']['schedules']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.catalogs)[':storeId']['autoImport']['scheduling']['schedules']['$post']
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
  const mutationDefaults = getPostV2UserCatalogsStoreIdAutoImportSchedulingSchedulesMutationOptions<
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

export function getPostV2UserCatalogsStoreIdAutoImportStartMutationKey() {
  return ['v2', '/v2/user/catalogs/:storeId/autoImport/start', 'POST'] as const
}

export function getPostV2UserCatalogsStoreIdAutoImportStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['autoImport']['start']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserCatalogsStoreIdAutoImportStartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.catalogs)[':storeId']['autoImport']['start']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].autoImport.start.$post(args, options),
      )
    },
  })
}

export function usePostV2UserCatalogsStoreIdAutoImportStart<
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
                  (typeof client.v2.user.catalogs)[':storeId']['autoImport']['start']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.user.catalogs)[':storeId']['autoImport']['start']['$post']
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
  const mutationDefaults = getPostV2UserCatalogsStoreIdAutoImportStartMutationOptions<
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

export function getV2UserCatalogsStoreIdCatalogColumnsQueryKey(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['catalogColumns']['$get']>,
) {
  return ['v2', '/v2/user/catalogs/:storeId/catalogColumns', args] as const
}

export function getV2UserCatalogsStoreIdCatalogColumnsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['catalogColumns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['catalogColumns']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.user.catalogs)[':storeId']['catalogColumns']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserCatalogsStoreIdCatalogColumnsQueryKey>
  >({
    queryKey: getV2UserCatalogsStoreIdCatalogColumnsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].catalogColumns.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserCatalogsStoreIdCatalogColumns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['catalogColumns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['catalogColumns']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.user.catalogs)[':storeId']['catalogColumns']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsStoreIdCatalogColumnsQueryKey>
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
      ...getV2UserCatalogsStoreIdCatalogColumnsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserCatalogsStoreIdCatalogColumns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['catalogColumns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['catalogColumns']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.user.catalogs)[':storeId']['catalogColumns']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsStoreIdCatalogColumnsQueryKey>
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
      ...getV2UserCatalogsStoreIdCatalogColumnsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2UserCatalogsStoreIdCatalogColumnsColumnIdRenameMutationKey() {
  return ['v2', '/v2/user/catalogs/:storeId/catalogColumns/:columnId/rename', 'POST'] as const
}

export function getPostV2UserCatalogsStoreIdCatalogColumnsColumnIdRenameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['catalogColumns'][':columnId']['rename']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserCatalogsStoreIdCatalogColumnsColumnIdRenameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.catalogs)[':storeId']['catalogColumns'][':columnId']['rename']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].catalogColumns[':columnId'].rename.$post(args, options),
      )
    },
  })
}

export function usePostV2UserCatalogsStoreIdCatalogColumnsColumnIdRename<
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
                    (typeof client.v2.user.catalogs)[':storeId']['catalogColumns'][':columnId']['rename']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.catalogs)[':storeId']['catalogColumns'][':columnId']['rename']['$post']
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
  const mutationDefaults = getPostV2UserCatalogsStoreIdCatalogColumnsColumnIdRenameMutationOptions<
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

export function getV2UserCatalogsStoreIdCategoriesQueryKey(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['categories']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/catalogs/:storeId/categories', keyArgs] as const
}

export function getV2UserCatalogsStoreIdCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['categories']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['categories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserCatalogsStoreIdCategoriesQueryKey>
  >({
    queryKey: getV2UserCatalogsStoreIdCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].categories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserCatalogsStoreIdCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['categories']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.user.catalogs)[':storeId']['categories']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsStoreIdCategoriesQueryKey>
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
      ...getV2UserCatalogsStoreIdCategoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserCatalogsStoreIdCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['categories']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.user.catalogs)[':storeId']['categories']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsStoreIdCategoriesQueryKey>
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
      ...getV2UserCatalogsStoreIdCategoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2UserCatalogsStoreIdCustomColumnsQueryKey(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['customColumns']['$get']>,
) {
  return ['v2', '/v2/user/catalogs/:storeId/customColumns', args] as const
}

export function getV2UserCatalogsStoreIdCustomColumnsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['customColumns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['customColumns']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['customColumns']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserCatalogsStoreIdCustomColumnsQueryKey>
  >({
    queryKey: getV2UserCatalogsStoreIdCustomColumnsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].customColumns.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserCatalogsStoreIdCustomColumns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['customColumns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['customColumns']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.user.catalogs)[':storeId']['customColumns']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsStoreIdCustomColumnsQueryKey>
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
      ...getV2UserCatalogsStoreIdCustomColumnsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserCatalogsStoreIdCustomColumns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['customColumns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['customColumns']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.user.catalogs)[':storeId']['customColumns']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsStoreIdCustomColumnsQueryKey>
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
      ...getV2UserCatalogsStoreIdCustomColumnsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2UserCatalogsStoreIdCustomColumnsComputeExpressionMutationKey() {
  return ['v2', '/v2/user/catalogs/:storeId/customColumns/computeExpression', 'POST'] as const
}

export function getPostV2UserCatalogsStoreIdCustomColumnsComputeExpressionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['customColumns']['computeExpression']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserCatalogsStoreIdCustomColumnsComputeExpressionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.catalogs)[':storeId']['customColumns']['computeExpression']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].customColumns.computeExpression.$post(args, options),
      )
    },
  })
}

export function usePostV2UserCatalogsStoreIdCustomColumnsComputeExpression<
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
                  (typeof client.v2.user.catalogs)[':storeId']['customColumns']['computeExpression']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.user.catalogs)[':storeId']['customColumns']['computeExpression']['$post']
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
    getPostV2UserCatalogsStoreIdCustomColumnsComputeExpressionMutationOptions<
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

export function getPutV2UserCatalogsStoreIdCustomColumnsColumnIdMutationKey() {
  return ['v2', '/v2/user/catalogs/:storeId/customColumns/:columnId', 'PUT'] as const
}

export function getPutV2UserCatalogsStoreIdCustomColumnsColumnIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2UserCatalogsStoreIdCustomColumnsColumnIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].customColumns[':columnId'].$put(args, options),
      )
    },
  })
}

export function usePutV2UserCatalogsStoreIdCustomColumnsColumnId<
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
                    (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['$put']
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
  const mutationDefaults = getPutV2UserCatalogsStoreIdCustomColumnsColumnIdMutationOptions<
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

export function getDeleteV2UserCatalogsStoreIdCustomColumnsColumnIdMutationKey() {
  return ['v2', '/v2/user/catalogs/:storeId/customColumns/:columnId', 'DELETE'] as const
}

export function getDeleteV2UserCatalogsStoreIdCustomColumnsColumnIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2UserCatalogsStoreIdCustomColumnsColumnIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].customColumns[':columnId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2UserCatalogsStoreIdCustomColumnsColumnId<
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
                    (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['$delete']
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
  const mutationDefaults = getDeleteV2UserCatalogsStoreIdCustomColumnsColumnIdMutationOptions<
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

export function getV2UserCatalogsStoreIdCustomColumnsColumnIdExpressionQueryKey(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['expression']['$get']
  >,
) {
  return ['v2', '/v2/user/catalogs/:storeId/customColumns/:columnId/expression', args] as const
}

export function getV2UserCatalogsStoreIdCustomColumnsColumnIdExpressionQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['expression']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2UserCatalogsStoreIdCustomColumnsColumnIdExpressionQueryKey>
  >({
    queryKey: getV2UserCatalogsStoreIdCustomColumnsColumnIdExpressionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].customColumns[':columnId'].expression.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserCatalogsStoreIdCustomColumnsColumnIdExpression<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['expression']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsStoreIdCustomColumnsColumnIdExpressionQueryKey>
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
      ...getV2UserCatalogsStoreIdCustomColumnsColumnIdExpressionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserCatalogsStoreIdCustomColumnsColumnIdExpression<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['expression']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsStoreIdCustomColumnsColumnIdExpressionQueryKey>
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
      ...getV2UserCatalogsStoreIdCustomColumnsColumnIdExpressionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV2UserCatalogsStoreIdCustomColumnsColumnIdExpressionMutationKey() {
  return ['v2', '/v2/user/catalogs/:storeId/customColumns/:columnId/expression', 'PUT'] as const
}

export function getPutV2UserCatalogsStoreIdCustomColumnsColumnIdExpressionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['expression']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2UserCatalogsStoreIdCustomColumnsColumnIdExpressionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['expression']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].customColumns[':columnId'].expression.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV2UserCatalogsStoreIdCustomColumnsColumnIdExpression<
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
                    (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['expression']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['expression']['$put']
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
    getPutV2UserCatalogsStoreIdCustomColumnsColumnIdExpressionMutationOptions<
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

export function getPostV2UserCatalogsStoreIdCustomColumnsColumnIdRenameMutationKey() {
  return ['v2', '/v2/user/catalogs/:storeId/customColumns/:columnId/rename', 'POST'] as const
}

export function getPostV2UserCatalogsStoreIdCustomColumnsColumnIdRenameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['rename']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserCatalogsStoreIdCustomColumnsColumnIdRenameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['rename']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].customColumns[':columnId'].rename.$post(args, options),
      )
    },
  })
}

export function usePostV2UserCatalogsStoreIdCustomColumnsColumnIdRename<
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
                    (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['rename']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['rename']['$post']
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
  const mutationDefaults = getPostV2UserCatalogsStoreIdCustomColumnsColumnIdRenameMutationOptions<
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

export function getV2UserCatalogsStoreIdImportationsQueryKey(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['importations']['$get']>,
) {
  return ['v2', '/v2/user/catalogs/:storeId/importations', args] as const
}

export function getV2UserCatalogsStoreIdImportationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['importations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['importations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['importations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserCatalogsStoreIdImportationsQueryKey>
  >({
    queryKey: getV2UserCatalogsStoreIdImportationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].importations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserCatalogsStoreIdImportations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['importations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['importations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.user.catalogs)[':storeId']['importations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsStoreIdImportationsQueryKey>
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
      ...getV2UserCatalogsStoreIdImportationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserCatalogsStoreIdImportations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['importations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['importations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.user.catalogs)[':storeId']['importations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsStoreIdImportationsQueryKey>
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
      ...getV2UserCatalogsStoreIdImportationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2UserCatalogsStoreIdImportationsStartMutationKey() {
  return ['v2', '/v2/user/catalogs/:storeId/importations/start', 'POST'] as const
}

export function getPostV2UserCatalogsStoreIdImportationsStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['importations']['start']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserCatalogsStoreIdImportationsStartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.catalogs)[':storeId']['importations']['start']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].importations.start.$post(args, options),
      )
    },
  })
}

export function usePostV2UserCatalogsStoreIdImportationsStart<
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
                  (typeof client.v2.user.catalogs)[':storeId']['importations']['start']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.user.catalogs)[':storeId']['importations']['start']['$post']
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
  const mutationDefaults = getPostV2UserCatalogsStoreIdImportationsStartMutationOptions<
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

export function getV2UserCatalogsStoreIdImportationsExecutionIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['$get']
  >,
) {
  return ['v2', '/v2/user/catalogs/:storeId/importations/:executionId', args] as const
}

export function getV2UserCatalogsStoreIdImportationsExecutionIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2UserCatalogsStoreIdImportationsExecutionIdQueryKey>
  >({
    queryKey: getV2UserCatalogsStoreIdImportationsExecutionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].importations[':executionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserCatalogsStoreIdImportationsExecutionId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsStoreIdImportationsExecutionIdQueryKey>
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
      ...getV2UserCatalogsStoreIdImportationsExecutionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserCatalogsStoreIdImportationsExecutionId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsStoreIdImportationsExecutionIdQueryKey>
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
      ...getV2UserCatalogsStoreIdImportationsExecutionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdCancelMutationKey() {
  return ['v2', '/v2/user/catalogs/:storeId/importations/:executionId/cancel', 'POST'] as const
}

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserCatalogsStoreIdImportationsExecutionIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].importations[':executionId'].cancel.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2UserCatalogsStoreIdImportationsExecutionIdCancel<
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
                    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['cancel']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['cancel']['$post']
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
  const mutationDefaults = getPostV2UserCatalogsStoreIdImportationsExecutionIdCancelMutationOptions<
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

export function getV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsQueryKey(
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

export function getV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsQueryKey>
  >({
    queryKey: getV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].importations[':executionId'].catalogColumns.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumns<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsQueryKey>
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
      ...getV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumns<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsQueryKey>
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
      ...getV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdMutationKey() {
  return [
    'v2',
    '/v2/user/catalogs/:storeId/importations/:executionId/catalogColumns/:columnId',
    'POST',
  ] as const
}

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].importations[':executionId'].catalogColumns[
          ':columnId'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnId<
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
                    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['$post']
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
    getPostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdMutationOptions<
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

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdIgnoreMutationKey() {
  return [
    'v2',
    '/v2/user/catalogs/:storeId/importations/:executionId/catalogColumns/:columnId/ignore',
    'POST',
  ] as const
}

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdIgnoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['ignore']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdIgnoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['ignore']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].importations[':executionId'].catalogColumns[
          ':columnId'
        ].ignore.$post(args, options),
      )
    },
  })
}

export function usePostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdIgnore<
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
                    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['ignore']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['ignore']['$post']
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
    getPostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdIgnoreMutationOptions<
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

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdMapMutationKey() {
  return [
    'v2',
    '/v2/user/catalogs/:storeId/importations/:executionId/catalogColumns/:columnId/map',
    'POST',
  ] as const
}

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdMapMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['map']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdMapMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['map']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].importations[':executionId'].catalogColumns[
          ':columnId'
        ].map.$post(args, options),
      )
    },
  })
}

export function usePostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdMap<
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
                    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['map']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['map']['$post']
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
    getPostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdMapMutationOptions<
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

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdReattendMutationKey() {
  return [
    'v2',
    '/v2/user/catalogs/:storeId/importations/:executionId/catalogColumns/:columnId/reattend',
    'POST',
  ] as const
}

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdReattendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['reattend']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdReattendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['reattend']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].importations[':executionId'].catalogColumns[
          ':columnId'
        ].reattend.$post(args, options),
      )
    },
  })
}

export function usePostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdReattend<
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
                    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['reattend']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['reattend']['$post']
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
    getPostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdReattendMutationOptions<
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

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdUnmapMutationKey() {
  return [
    'v2',
    '/v2/user/catalogs/:storeId/importations/:executionId/catalogColumns/:columnId/unmap',
    'POST',
  ] as const
}

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdUnmapMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['unmap']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdUnmapMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['unmap']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].importations[':executionId'].catalogColumns[
          ':columnId'
        ].unmap.$post(args, options),
      )
    },
  })
}

export function usePostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdUnmap<
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
                    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['unmap']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['unmap']['$post']
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
    getPostV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdUnmapMutationOptions<
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

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdCommitMutationKey() {
  return ['v2', '/v2/user/catalogs/:storeId/importations/:executionId/commit', 'POST'] as const
}

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdCommitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['commit']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserCatalogsStoreIdImportationsExecutionIdCommitMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['commit']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].importations[':executionId'].commit.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2UserCatalogsStoreIdImportationsExecutionIdCommit<
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
                    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['commit']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['commit']['$post']
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
  const mutationDefaults = getPostV2UserCatalogsStoreIdImportationsExecutionIdCommitMutationOptions<
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

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdCommitColumnsMutationKey() {
  return [
    'v2',
    '/v2/user/catalogs/:storeId/importations/:executionId/commitColumns',
    'POST',
  ] as const
}

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdCommitColumnsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['commitColumns']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserCatalogsStoreIdImportationsExecutionIdCommitColumnsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['commitColumns']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].importations[':executionId'].commitColumns.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2UserCatalogsStoreIdImportationsExecutionIdCommitColumns<
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
                    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['commitColumns']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['commitColumns']['$post']
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
    getPostV2UserCatalogsStoreIdImportationsExecutionIdCommitColumnsMutationOptions<
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

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdConfigureRemainingCatalogColumnsMutationKey() {
  return [
    'v2',
    '/v2/user/catalogs/:storeId/importations/:executionId/configureRemainingCatalogColumns',
    'POST',
  ] as const
}

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdConfigureRemainingCatalogColumnsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['configureRemainingCatalogColumns']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2UserCatalogsStoreIdImportationsExecutionIdConfigureRemainingCatalogColumnsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['configureRemainingCatalogColumns']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].importations[
          ':executionId'
        ].configureRemainingCatalogColumns.$post(args, options),
      )
    },
  })
}

export function usePostV2UserCatalogsStoreIdImportationsExecutionIdConfigureRemainingCatalogColumns<
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
                    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['configureRemainingCatalogColumns']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['configureRemainingCatalogColumns']['$post']
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
    getPostV2UserCatalogsStoreIdImportationsExecutionIdConfigureRemainingCatalogColumnsMutationOptions<
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

export function getV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsQueryKey(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns']['$get']
  >,
) {
  return ['v2', '/v2/user/catalogs/:storeId/importations/:executionId/customColumns', args] as const
}

export function getV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsQueryKey>
  >({
    queryKey: getV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].importations[':executionId'].customColumns.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserCatalogsStoreIdImportationsExecutionIdCustomColumns<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsQueryKey>
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
      ...getV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserCatalogsStoreIdImportationsExecutionIdCustomColumns<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsQueryKey>
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
      ...getV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdMutationKey() {
  return [
    'v2',
    '/v2/user/catalogs/:storeId/importations/:executionId/customColumns/:columnId',
    'PUT',
  ] as const
}

export function getPutV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].importations[':executionId'].customColumns[
          ':columnId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnId<
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
                    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['$put']
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
    getPutV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdMutationOptions<
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

export function getDeleteV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdMutationKey() {
  return [
    'v2',
    '/v2/user/catalogs/:storeId/importations/:executionId/customColumns/:columnId',
    'DELETE',
  ] as const
}

export function getDeleteV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].importations[':executionId'].customColumns[
          ':columnId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnId<
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
                    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['$delete']
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
    getDeleteV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdMutationOptions<
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

export function getV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdExpressionQueryKey(
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

export function getV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdExpressionQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['expression']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdExpressionQueryKey
    >
  >({
    queryKey:
      getV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdExpressionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].importations[':executionId'].customColumns[
          ':columnId'
        ].expression.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdExpression<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['expression']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdExpressionQueryKey
        >
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
      ...getV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdExpressionQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdExpression<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['expression']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdExpressionQueryKey
        >
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
      ...getV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdExpressionQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdMapMutationKey() {
  return [
    'v2',
    '/v2/user/catalogs/:storeId/importations/:executionId/customColumns/:columnId/map',
    'POST',
  ] as const
}

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdMapMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['map']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdMapMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['map']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].importations[':executionId'].customColumns[
          ':columnId'
        ].map.$post(args, options),
      )
    },
  })
}

export function usePostV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdMap<
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
                    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['map']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['map']['$post']
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
    getPostV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdMapMutationOptions<
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

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdUnmapMutationKey() {
  return [
    'v2',
    '/v2/user/catalogs/:storeId/importations/:executionId/customColumns/:columnId/unmap',
    'POST',
  ] as const
}

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdUnmapMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['unmap']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdUnmapMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['unmap']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].importations[':executionId'].customColumns[
          ':columnId'
        ].unmap.$post(args, options),
      )
    },
  })
}

export function usePostV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdUnmap<
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
                    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['unmap']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['unmap']['$post']
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
    getPostV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdUnmapMutationOptions<
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

export function getV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexQueryKey(
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

export function getV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['productSamples'][':productSampleIndex']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexQueryKey
    >
  >({
    queryKey:
      getV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].importations[':executionId'].productSamples[
          ':productSampleIndex'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['productSamples'][':productSampleIndex']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexQueryKey
        >
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
      ...getV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['productSamples'][':productSampleIndex']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexQueryKey
        >
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
      ...getV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexCustomColumnsColumnIdQueryKey(
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

export function getV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexCustomColumnsColumnIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['productSamples'][':productSampleIndex']['customColumns'][':columnId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexCustomColumnsColumnIdQueryKey
    >
  >({
    queryKey:
      getV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexCustomColumnsColumnIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].importations[':executionId'].productSamples[
          ':productSampleIndex'
        ].customColumns[':columnId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexCustomColumnsColumnId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['productSamples'][':productSampleIndex']['customColumns'][':columnId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexCustomColumnsColumnIdQueryKey
        >
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
      ...getV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexCustomColumnsColumnIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexCustomColumnsColumnId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['productSamples'][':productSampleIndex']['customColumns'][':columnId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexCustomColumnsColumnIdQueryKey
        >
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
      ...getV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexCustomColumnsColumnIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdProductsListMutationKey() {
  return [
    'v2',
    '/v2/user/catalogs/:storeId/importations/:executionId/products/list',
    'POST',
  ] as const
}

export function getPostV2UserCatalogsStoreIdImportationsExecutionIdProductsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['products']['list']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserCatalogsStoreIdImportationsExecutionIdProductsListMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['products']['list']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].importations[':executionId'].products.list.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2UserCatalogsStoreIdImportationsExecutionIdProductsList<
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
                  (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['products']['list']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['products']['list']['$post']
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
    getPostV2UserCatalogsStoreIdImportationsExecutionIdProductsListMutationOptions<
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

export function getV2UserCatalogsStoreIdImportationsExecutionIdReportQueryKey(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['report']['$get']
  >,
) {
  return ['v2', '/v2/user/catalogs/:storeId/importations/:executionId/report', args] as const
}

export function getV2UserCatalogsStoreIdImportationsExecutionIdReportQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['report']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2UserCatalogsStoreIdImportationsExecutionIdReportQueryKey>
  >({
    queryKey: getV2UserCatalogsStoreIdImportationsExecutionIdReportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].importations[':executionId'].report.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserCatalogsStoreIdImportationsExecutionIdReport<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['report']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsStoreIdImportationsExecutionIdReportQueryKey>
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
      ...getV2UserCatalogsStoreIdImportationsExecutionIdReportQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserCatalogsStoreIdImportationsExecutionIdReport<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['report']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsStoreIdImportationsExecutionIdReportQueryKey>
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
      ...getV2UserCatalogsStoreIdImportationsExecutionIdReportQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2UserCatalogsStoreIdImportationsExecutionIdTechnicalProgressionQueryKey(
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

export function getV2UserCatalogsStoreIdImportationsExecutionIdTechnicalProgressionQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['technicalProgression']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2UserCatalogsStoreIdImportationsExecutionIdTechnicalProgressionQueryKey>
  >({
    queryKey: getV2UserCatalogsStoreIdImportationsExecutionIdTechnicalProgressionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].importations[':executionId'].technicalProgression.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useV2UserCatalogsStoreIdImportationsExecutionIdTechnicalProgression<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['technicalProgression']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getV2UserCatalogsStoreIdImportationsExecutionIdTechnicalProgressionQueryKey
        >
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
      ...getV2UserCatalogsStoreIdImportationsExecutionIdTechnicalProgressionQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserCatalogsStoreIdImportationsExecutionIdTechnicalProgression<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['technicalProgression']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getV2UserCatalogsStoreIdImportationsExecutionIdTechnicalProgressionQueryKey
        >
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
      ...getV2UserCatalogsStoreIdImportationsExecutionIdTechnicalProgressionQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2UserCatalogsStoreIdInputConfigurationQueryKey(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['inputConfiguration']['$get']
  >,
) {
  return ['v2', '/v2/user/catalogs/:storeId/inputConfiguration', args] as const
}

export function getV2UserCatalogsStoreIdInputConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.user.catalogs)[':storeId']['inputConfiguration']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['inputConfiguration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.user.catalogs)[':storeId']['inputConfiguration']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserCatalogsStoreIdInputConfigurationQueryKey>
  >({
    queryKey: getV2UserCatalogsStoreIdInputConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].inputConfiguration.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserCatalogsStoreIdInputConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.user.catalogs)[':storeId']['inputConfiguration']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['inputConfiguration']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.user.catalogs)[':storeId']['inputConfiguration']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsStoreIdInputConfigurationQueryKey>
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
      ...getV2UserCatalogsStoreIdInputConfigurationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserCatalogsStoreIdInputConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.user.catalogs)[':storeId']['inputConfiguration']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['inputConfiguration']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.user.catalogs)[':storeId']['inputConfiguration']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsStoreIdInputConfigurationQueryKey>
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
      ...getV2UserCatalogsStoreIdInputConfigurationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2UserCatalogsStoreIdProductsQueryKey(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['products']['$get']>,
) {
  return ['v2', '/v2/user/catalogs/:storeId/products', args] as const
}

export function getV2UserCatalogsStoreIdProductsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['products']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['products']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['products']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserCatalogsStoreIdProductsQueryKey>
  >({
    queryKey: getV2UserCatalogsStoreIdProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].products.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserCatalogsStoreIdProducts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['products']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['products']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['products']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsStoreIdProductsQueryKey>
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
      ...getV2UserCatalogsStoreIdProductsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserCatalogsStoreIdProducts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['products']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['products']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.user.catalogs)[':storeId']['products']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsStoreIdProductsQueryKey>
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
      ...getV2UserCatalogsStoreIdProductsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2UserCatalogsStoreIdProductsListMutationKey() {
  return ['v2', '/v2/user/catalogs/:storeId/products/list', 'POST'] as const
}

export function getPostV2UserCatalogsStoreIdProductsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['products']['list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserCatalogsStoreIdProductsListMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.catalogs)[':storeId']['products']['list']['$post']
      >,
    ) {
      return parseResponse(client.v2.user.catalogs[':storeId'].products.list.$post(args, options))
    },
  })
}

export function usePostV2UserCatalogsStoreIdProductsList<
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
                  (typeof client.v2.user.catalogs)[':storeId']['products']['list']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['products']['list']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2UserCatalogsStoreIdProductsListMutationOptions<
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

export function getV2UserCatalogsStoreIdProductsRandomQueryKey(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['products']['random']['$get']
  >,
) {
  return ['v2', '/v2/user/catalogs/:storeId/products/random', args] as const
}

export function getV2UserCatalogsStoreIdProductsRandomQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.user.catalogs)[':storeId']['products']['random']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['products']['random']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.user.catalogs)[':storeId']['products']['random']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserCatalogsStoreIdProductsRandomQueryKey>
  >({
    queryKey: getV2UserCatalogsStoreIdProductsRandomQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].products.random.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserCatalogsStoreIdProductsRandom<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.user.catalogs)[':storeId']['products']['random']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['products']['random']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.user.catalogs)[':storeId']['products']['random']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsStoreIdProductsRandomQueryKey>
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
      ...getV2UserCatalogsStoreIdProductsRandomQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserCatalogsStoreIdProductsRandom<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.user.catalogs)[':storeId']['products']['random']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['products']['random']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.user.catalogs)[':storeId']['products']['random']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsStoreIdProductsRandomQueryKey>
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
      ...getV2UserCatalogsStoreIdProductsRandomQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2UserCatalogsStoreIdProductsProductIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['products'][':productId']['$get']
  >,
) {
  return ['v2', '/v2/user/catalogs/:storeId/products/:productId', args] as const
}

export function getV2UserCatalogsStoreIdProductsProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.user.catalogs)[':storeId']['products'][':productId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['products'][':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2UserCatalogsStoreIdProductsProductIdQueryKey>
  >({
    queryKey: getV2UserCatalogsStoreIdProductsProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.catalogs[':storeId'].products[':productId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserCatalogsStoreIdProductsProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.user.catalogs)[':storeId']['products'][':productId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['products'][':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsStoreIdProductsProductIdQueryKey>
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
      ...getV2UserCatalogsStoreIdProductsProductIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserCatalogsStoreIdProductsProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.user.catalogs)[':storeId']['products'][':productId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['products'][':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserCatalogsStoreIdProductsProductIdQueryKey>
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
      ...getV2UserCatalogsStoreIdProductsProductIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2UserChannelCatalogsIndexQueryKey(
  args: InferRequestType<typeof client.v2.user.channelCatalogs.index.$get>,
) {
  return ['v2', '/v2/user/channelCatalogs/', args] as const
}

export function getV2UserChannelCatalogsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.channelCatalogs.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.channelCatalogs.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.channelCatalogs.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserChannelCatalogsIndexQueryKey>
  >({
    queryKey: getV2UserChannelCatalogsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.channelCatalogs.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserChannelCatalogsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.channelCatalogs.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.channelCatalogs.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.channelCatalogs.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserChannelCatalogsIndexQueryKey>
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
      ...getV2UserChannelCatalogsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserChannelCatalogsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.channelCatalogs.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.channelCatalogs.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.channelCatalogs.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserChannelCatalogsIndexQueryKey>
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
      ...getV2UserChannelCatalogsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2UserChannelCatalogsIndexMutationKey() {
  return ['v2', '/v2/user/channelCatalogs/', 'POST'] as const
}

export function getPostV2UserChannelCatalogsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.channelCatalogs.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.user.channelCatalogs.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserChannelCatalogsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.user.channelCatalogs.index.$post>) {
      return parseResponse(client.v2.user.channelCatalogs.index.$post(args, options))
    },
  })
}

export function usePostV2UserChannelCatalogsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.channelCatalogs.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.user.channelCatalogs.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2UserChannelCatalogsIndexMutationOptions<
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

export function getV2UserChannelCatalogsFilterOperatorsQueryKey() {
  return ['v2', '/v2/user/channelCatalogs/filterOperators'] as const
}

export function getV2UserChannelCatalogsFilterOperatorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.channelCatalogs.filterOperators.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.channelCatalogs.filterOperators.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserChannelCatalogsFilterOperatorsQueryKey>
  >({
    queryKey: getV2UserChannelCatalogsFilterOperatorsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.channelCatalogs.filterOperators.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserChannelCatalogsFilterOperators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.channelCatalogs.filterOperators.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.channelCatalogs.filterOperators.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserChannelCatalogsFilterOperatorsQueryKey>
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
      ...getV2UserChannelCatalogsFilterOperatorsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserChannelCatalogsFilterOperators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.channelCatalogs.filterOperators.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.channelCatalogs.filterOperators.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserChannelCatalogsFilterOperatorsQueryKey>
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
      ...getV2UserChannelCatalogsFilterOperatorsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2UserChannelCatalogsProductsMutationKey() {
  return ['v2', '/v2/user/channelCatalogs/products', 'POST'] as const
}

export function getPostV2UserChannelCatalogsProductsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.channelCatalogs.products.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v2.user.channelCatalogs.products.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserChannelCatalogsProductsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.user.channelCatalogs.products.$post>) {
      return parseResponse(client.v2.user.channelCatalogs.products.$post(args, options))
    },
  })
}

export function usePostV2UserChannelCatalogsProducts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.channelCatalogs.products.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.user.channelCatalogs.products.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2UserChannelCatalogsProductsMutationOptions<
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

export function getV2UserChannelCatalogsChannelCatalogIdQueryKey(
  args: InferRequestType<(typeof client.v2.user.channelCatalogs)[':channelCatalogId']['$get']>,
) {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId', args] as const
}

export function getV2UserChannelCatalogsChannelCatalogIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.channelCatalogs)[':channelCatalogId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.channelCatalogs)[':channelCatalogId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.user.channelCatalogs)[':channelCatalogId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserChannelCatalogsChannelCatalogIdQueryKey>
  >({
    queryKey: getV2UserChannelCatalogsChannelCatalogIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.channelCatalogs[':channelCatalogId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserChannelCatalogsChannelCatalogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.channelCatalogs)[':channelCatalogId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.channelCatalogs)[':channelCatalogId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.user.channelCatalogs)[':channelCatalogId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserChannelCatalogsChannelCatalogIdQueryKey>
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
      ...getV2UserChannelCatalogsChannelCatalogIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserChannelCatalogsChannelCatalogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.channelCatalogs)[':channelCatalogId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.channelCatalogs)[':channelCatalogId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.user.channelCatalogs)[':channelCatalogId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserChannelCatalogsChannelCatalogIdQueryKey>
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
      ...getV2UserChannelCatalogsChannelCatalogIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2UserChannelCatalogsChannelCatalogIdMutationKey() {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId', 'DELETE'] as const
}

export function getDeleteV2UserChannelCatalogsChannelCatalogIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v2.user.channelCatalogs)[':channelCatalogId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2UserChannelCatalogsChannelCatalogIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.user.channelCatalogs[':channelCatalogId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2UserChannelCatalogsChannelCatalogId<
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
                    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.user.channelCatalogs)[':channelCatalogId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2UserChannelCatalogsChannelCatalogIdMutationOptions<
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

export function getV2UserChannelCatalogsChannelCatalogIdCategoriesQueryKey(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['$get']
  >,
) {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId/categories', args] as const
}

export function getV2UserChannelCatalogsChannelCatalogIdCategoriesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2UserChannelCatalogsChannelCatalogIdCategoriesQueryKey>
  >({
    queryKey: getV2UserChannelCatalogsChannelCatalogIdCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.channelCatalogs[':channelCatalogId'].categories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserChannelCatalogsChannelCatalogIdCategories<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserChannelCatalogsChannelCatalogIdCategoriesQueryKey>
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
      ...getV2UserChannelCatalogsChannelCatalogIdCategoriesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserChannelCatalogsChannelCatalogIdCategories<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserChannelCatalogsChannelCatalogIdCategoriesQueryKey>
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
      ...getV2UserChannelCatalogsChannelCatalogIdCategoriesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2UserChannelCatalogsChannelCatalogIdCategoriesConfigureMutationKey() {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId/categories/configure', 'POST'] as const
}

export function getPostV2UserChannelCatalogsChannelCatalogIdCategoriesConfigureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['configure']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserChannelCatalogsChannelCatalogIdCategoriesConfigureMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['configure']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.channelCatalogs[':channelCatalogId'].categories.configure.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2UserChannelCatalogsChannelCatalogIdCategoriesConfigure<
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
                    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['configure']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['configure']['$post']
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
    getPostV2UserChannelCatalogsChannelCatalogIdCategoriesConfigureMutationOptions<
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

export function getPostV2UserChannelCatalogsChannelCatalogIdCategoriesDisableMappingMutationKey() {
  return [
    'v2',
    '/v2/user/channelCatalogs/:channelCatalogId/categories/disableMapping',
    'POST',
  ] as const
}

export function getPostV2UserChannelCatalogsChannelCatalogIdCategoriesDisableMappingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['disableMapping']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserChannelCatalogsChannelCatalogIdCategoriesDisableMappingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['disableMapping']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.channelCatalogs[':channelCatalogId'].categories.disableMapping.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2UserChannelCatalogsChannelCatalogIdCategoriesDisableMapping<
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
                    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['disableMapping']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['disableMapping']['$post']
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
    getPostV2UserChannelCatalogsChannelCatalogIdCategoriesDisableMappingMutationOptions<
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

export function getPostV2UserChannelCatalogsChannelCatalogIdCategoriesReenableMappingMutationKey() {
  return [
    'v2',
    '/v2/user/channelCatalogs/:channelCatalogId/categories/reenableMapping',
    'POST',
  ] as const
}

export function getPostV2UserChannelCatalogsChannelCatalogIdCategoriesReenableMappingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['reenableMapping']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserChannelCatalogsChannelCatalogIdCategoriesReenableMappingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['reenableMapping']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.channelCatalogs[':channelCatalogId'].categories.reenableMapping.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2UserChannelCatalogsChannelCatalogIdCategoriesReenableMapping<
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
                    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['reenableMapping']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['reenableMapping']['$post']
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
    getPostV2UserChannelCatalogsChannelCatalogIdCategoriesReenableMappingMutationOptions<
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

export function getPutV2UserChannelCatalogsChannelCatalogIdColumnMappingsMutationKey() {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId/columnMappings', 'PUT'] as const
}

export function getPutV2UserChannelCatalogsChannelCatalogIdColumnMappingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['columnMappings']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2UserChannelCatalogsChannelCatalogIdColumnMappingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['columnMappings']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.user.channelCatalogs[':channelCatalogId'].columnMappings.$put(args, options),
      )
    },
  })
}

export function usePutV2UserChannelCatalogsChannelCatalogIdColumnMappings<
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
                    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['columnMappings']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['columnMappings']['$put']
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
  const mutationDefaults = getPutV2UserChannelCatalogsChannelCatalogIdColumnMappingsMutationOptions<
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

export function getPostV2UserChannelCatalogsChannelCatalogIdDisableMutationKey() {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId/disable', 'POST'] as const
}

export function getPostV2UserChannelCatalogsChannelCatalogIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['disable']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserChannelCatalogsChannelCatalogIdDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['disable']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.channelCatalogs[':channelCatalogId'].disable.$post(args, options),
      )
    },
  })
}

export function usePostV2UserChannelCatalogsChannelCatalogIdDisable<
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
                    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['disable']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['disable']['$post']
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
  const mutationDefaults = getPostV2UserChannelCatalogsChannelCatalogIdDisableMutationOptions<
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

export function getPostV2UserChannelCatalogsChannelCatalogIdEnableMutationKey() {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId/enable', 'POST'] as const
}

export function getPostV2UserChannelCatalogsChannelCatalogIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['enable']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserChannelCatalogsChannelCatalogIdEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['enable']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.channelCatalogs[':channelCatalogId'].enable.$post(args, options),
      )
    },
  })
}

export function usePostV2UserChannelCatalogsChannelCatalogIdEnable<
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
                    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['enable']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['enable']['$post']
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
  const mutationDefaults = getPostV2UserChannelCatalogsChannelCatalogIdEnableMutationOptions<
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

export function getV2UserChannelCatalogsChannelCatalogIdExclusionFiltersQueryKey(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exclusionFilters']['$get']
  >,
) {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId/exclusionFilters', args] as const
}

export function getV2UserChannelCatalogsChannelCatalogIdExclusionFiltersQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exclusionFilters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2UserChannelCatalogsChannelCatalogIdExclusionFiltersQueryKey>
  >({
    queryKey: getV2UserChannelCatalogsChannelCatalogIdExclusionFiltersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.channelCatalogs[':channelCatalogId'].exclusionFilters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserChannelCatalogsChannelCatalogIdExclusionFilters<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exclusionFilters']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserChannelCatalogsChannelCatalogIdExclusionFiltersQueryKey>
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
      ...getV2UserChannelCatalogsChannelCatalogIdExclusionFiltersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserChannelCatalogsChannelCatalogIdExclusionFilters<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exclusionFilters']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserChannelCatalogsChannelCatalogIdExclusionFiltersQueryKey>
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
      ...getV2UserChannelCatalogsChannelCatalogIdExclusionFiltersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV2UserChannelCatalogsChannelCatalogIdExclusionFiltersMutationKey() {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId/exclusionFilters', 'PUT'] as const
}

export function getPutV2UserChannelCatalogsChannelCatalogIdExclusionFiltersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exclusionFilters']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2UserChannelCatalogsChannelCatalogIdExclusionFiltersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exclusionFilters']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.user.channelCatalogs[':channelCatalogId'].exclusionFilters.$put(args, options),
      )
    },
  })
}

export function usePutV2UserChannelCatalogsChannelCatalogIdExclusionFilters<
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
                    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exclusionFilters']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exclusionFilters']['$put']
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
    getPutV2UserChannelCatalogsChannelCatalogIdExclusionFiltersMutationOptions<
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

export function getV2UserChannelCatalogsChannelCatalogIdExportationsCacheQueryKey(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exportations']['cache']['$get']
  >,
) {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId/exportations/cache', args] as const
}

export function getV2UserChannelCatalogsChannelCatalogIdExportationsCacheQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exportations']['cache']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2UserChannelCatalogsChannelCatalogIdExportationsCacheQueryKey>
  >({
    queryKey: getV2UserChannelCatalogsChannelCatalogIdExportationsCacheQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.channelCatalogs[':channelCatalogId'].exportations.cache.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserChannelCatalogsChannelCatalogIdExportationsCache<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exportations']['cache']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserChannelCatalogsChannelCatalogIdExportationsCacheQueryKey>
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
      ...getV2UserChannelCatalogsChannelCatalogIdExportationsCacheQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserChannelCatalogsChannelCatalogIdExportationsCache<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exportations']['cache']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserChannelCatalogsChannelCatalogIdExportationsCacheQueryKey>
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
      ...getV2UserChannelCatalogsChannelCatalogIdExportationsCacheQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2UserChannelCatalogsChannelCatalogIdExportationsCacheClearMutationKey() {
  return [
    'v2',
    '/v2/user/channelCatalogs/:channelCatalogId/exportations/cache/clear',
    'POST',
  ] as const
}

export function getPostV2UserChannelCatalogsChannelCatalogIdExportationsCacheClearMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exportations']['cache']['clear']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserChannelCatalogsChannelCatalogIdExportationsCacheClearMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exportations']['cache']['clear']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.channelCatalogs[':channelCatalogId'].exportations.cache.clear.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2UserChannelCatalogsChannelCatalogIdExportationsCacheClear<
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
                    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exportations']['cache']['clear']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exportations']['cache']['clear']['$post']
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
    getPostV2UserChannelCatalogsChannelCatalogIdExportationsCacheClearMutationOptions<
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

export function getV2UserChannelCatalogsChannelCatalogIdExportationsHistoryQueryKey(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exportations']['history']['$get']
  >,
) {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId/exportations/history', args] as const
}

export function getV2UserChannelCatalogsChannelCatalogIdExportationsHistoryQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exportations']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2UserChannelCatalogsChannelCatalogIdExportationsHistoryQueryKey>
  >({
    queryKey: getV2UserChannelCatalogsChannelCatalogIdExportationsHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.channelCatalogs[':channelCatalogId'].exportations.history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserChannelCatalogsChannelCatalogIdExportationsHistory<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exportations']['history']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserChannelCatalogsChannelCatalogIdExportationsHistoryQueryKey>
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
      ...getV2UserChannelCatalogsChannelCatalogIdExportationsHistoryQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserChannelCatalogsChannelCatalogIdExportationsHistory<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exportations']['history']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserChannelCatalogsChannelCatalogIdExportationsHistoryQueryKey>
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
      ...getV2UserChannelCatalogsChannelCatalogIdExportationsHistoryQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2UserChannelCatalogsChannelCatalogIdProductsMutationKey() {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId/products', 'POST'] as const
}

export function getPostV2UserChannelCatalogsChannelCatalogIdProductsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserChannelCatalogsChannelCatalogIdProductsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.channelCatalogs[':channelCatalogId'].products.$post(args, options),
      )
    },
  })
}

export function usePostV2UserChannelCatalogsChannelCatalogIdProducts<
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
                  (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products']['$post']
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
  const mutationDefaults = getPostV2UserChannelCatalogsChannelCatalogIdProductsMutationOptions<
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

export function getV2UserChannelCatalogsChannelCatalogIdProductsCountersQueryKey(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products']['counters']['$get']
  >,
) {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId/products/counters', args] as const
}

export function getV2UserChannelCatalogsChannelCatalogIdProductsCountersQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products']['counters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2UserChannelCatalogsChannelCatalogIdProductsCountersQueryKey>
  >({
    queryKey: getV2UserChannelCatalogsChannelCatalogIdProductsCountersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.channelCatalogs[':channelCatalogId'].products.counters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserChannelCatalogsChannelCatalogIdProductsCounters<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products']['counters']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserChannelCatalogsChannelCatalogIdProductsCountersQueryKey>
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
      ...getV2UserChannelCatalogsChannelCatalogIdProductsCountersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserChannelCatalogsChannelCatalogIdProductsCounters<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products']['counters']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserChannelCatalogsChannelCatalogIdProductsCountersQueryKey>
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
      ...getV2UserChannelCatalogsChannelCatalogIdProductsCountersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2UserChannelCatalogsChannelCatalogIdProductsExportMutationKey() {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId/products/export', 'POST'] as const
}

export function getPostV2UserChannelCatalogsChannelCatalogIdProductsExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products']['export']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserChannelCatalogsChannelCatalogIdProductsExportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products']['export']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.channelCatalogs[':channelCatalogId'].products.export.$post(args, options),
      )
    },
  })
}

export function usePostV2UserChannelCatalogsChannelCatalogIdProductsExport<
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
                  (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products']['export']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products']['export']['$post']
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
    getPostV2UserChannelCatalogsChannelCatalogIdProductsExportMutationOptions<
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

export function getV2UserChannelCatalogsChannelCatalogIdProductsProductIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['$get']
  >,
) {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId/products/:productId', args] as const
}

export function getV2UserChannelCatalogsChannelCatalogIdProductsProductIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2UserChannelCatalogsChannelCatalogIdProductsProductIdQueryKey>
  >({
    queryKey: getV2UserChannelCatalogsChannelCatalogIdProductsProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.channelCatalogs[':channelCatalogId'].products[':productId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserChannelCatalogsChannelCatalogIdProductsProductId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserChannelCatalogsChannelCatalogIdProductsProductIdQueryKey>
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
      ...getV2UserChannelCatalogsChannelCatalogIdProductsProductIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserChannelCatalogsChannelCatalogIdProductsProductId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserChannelCatalogsChannelCatalogIdProductsProductIdQueryKey>
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
      ...getV2UserChannelCatalogsChannelCatalogIdProductsProductIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2UserChannelCatalogsChannelCatalogIdProductsProductIdDisableMutationKey() {
  return [
    'v2',
    '/v2/user/channelCatalogs/:channelCatalogId/products/:productId/disable',
    'POST',
  ] as const
}

export function getPostV2UserChannelCatalogsChannelCatalogIdProductsProductIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['disable']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserChannelCatalogsChannelCatalogIdProductsProductIdDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['disable']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.channelCatalogs[':channelCatalogId'].products[':productId'].disable.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2UserChannelCatalogsChannelCatalogIdProductsProductIdDisable<
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
                    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['disable']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['disable']['$post']
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
    getPostV2UserChannelCatalogsChannelCatalogIdProductsProductIdDisableMutationOptions<
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

export function getPutV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesMutationKey() {
  return [
    'v2',
    '/v2/user/channelCatalogs/:channelCatalogId/products/:productId/overrides',
    'PUT',
  ] as const
}

export function getPutV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.user.channelCatalogs[':channelCatalogId'].products[':productId'].overrides.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverrides<
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
                    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides']['$put']
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
    getPutV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesMutationOptions<
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

export function getV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopyQueryKey(
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

export function getV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopyQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides']['copy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopyQueryKey
    >
  >({
    queryKey: getV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.channelCatalogs[':channelCatalogId'].products[
          ':productId'
        ].overrides.copy.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopy<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides']['copy']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopyQueryKey
        >
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
      ...getV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopyQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopy<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides']['copy']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopyQueryKey
        >
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
      ...getV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopyQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopyMutationKey() {
  return [
    'v2',
    '/v2/user/channelCatalogs/:channelCatalogId/products/:productId/overrides/copy',
    'POST',
  ] as const
}

export function getPostV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides']['copy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides']['copy']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.channelCatalogs[':channelCatalogId'].products[
          ':productId'
        ].overrides.copy.$post(args, options),
      )
    },
  })
}

export function usePostV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopy<
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
                    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides']['copy']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides']['copy']['$post']
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
    getPostV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopyMutationOptions<
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

export function getDeleteV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesChannelColumnIdMutationKey() {
  return [
    'v2',
    '/v2/user/channelCatalogs/:channelCatalogId/products/:productId/overrides/:channelColumnId',
    'DELETE',
  ] as const
}

export function getDeleteV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesChannelColumnIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides'][':channelColumnId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesChannelColumnIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides'][':channelColumnId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.user.channelCatalogs[':channelCatalogId'].products[':productId'].overrides[
          ':channelColumnId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesChannelColumnId<
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
                    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides'][':channelColumnId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides'][':channelColumnId']['$delete']
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
    getDeleteV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesChannelColumnIdMutationOptions<
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

export function getPostV2UserChannelCatalogsChannelCatalogIdProductsProductIdReenableMutationKey() {
  return [
    'v2',
    '/v2/user/channelCatalogs/:channelCatalogId/products/:productId/reenable',
    'POST',
  ] as const
}

export function getPostV2UserChannelCatalogsChannelCatalogIdProductsProductIdReenableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['reenable']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserChannelCatalogsChannelCatalogIdProductsProductIdReenableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['reenable']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.channelCatalogs[':channelCatalogId'].products[':productId'].reenable.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2UserChannelCatalogsChannelCatalogIdProductsProductIdReenable<
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
                    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['reenable']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['reenable']['$post']
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
    getPostV2UserChannelCatalogsChannelCatalogIdProductsProductIdReenableMutationOptions<
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

export function getPutV2UserChannelCatalogsChannelCatalogIdSettingsCostMutationKey() {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId/settings/cost', 'PUT'] as const
}

export function getPutV2UserChannelCatalogsChannelCatalogIdSettingsCostMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['settings']['cost']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2UserChannelCatalogsChannelCatalogIdSettingsCostMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['settings']['cost']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.user.channelCatalogs[':channelCatalogId'].settings.cost.$put(args, options),
      )
    },
  })
}

export function usePutV2UserChannelCatalogsChannelCatalogIdSettingsCost<
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
                    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['settings']['cost']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['settings']['cost']['$put']
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
  const mutationDefaults = getPutV2UserChannelCatalogsChannelCatalogIdSettingsCostMutationOptions<
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

export function getPutV2UserChannelCatalogsChannelCatalogIdSettingsGeneralMutationKey() {
  return ['v2', '/v2/user/channelCatalogs/:channelCatalogId/settings/general', 'PUT'] as const
}

export function getPutV2UserChannelCatalogsChannelCatalogIdSettingsGeneralMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['settings']['general']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2UserChannelCatalogsChannelCatalogIdSettingsGeneralMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['settings']['general']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.user.channelCatalogs[':channelCatalogId'].settings.general.$put(args, options),
      )
    },
  })
}

export function usePutV2UserChannelCatalogsChannelCatalogIdSettingsGeneral<
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
                    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['settings']['general']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['settings']['general']['$put']
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
    getPutV2UserChannelCatalogsChannelCatalogIdSettingsGeneralMutationOptions<
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

export function getV2UserChannelsIndexQueryKey(
  args: InferRequestType<typeof client.v2.user.channels.index.$get>,
) {
  return ['v2', '/v2/user/channels/', args] as const
}

export function getV2UserChannelsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.channels.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.channels.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.channels.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserChannelsIndexQueryKey>
  >({
    queryKey: getV2UserChannelsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.channels.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserChannelsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.channels.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.channels.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.channels.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserChannelsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2UserChannelsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2UserChannelsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.channels.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.channels.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.channels.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserChannelsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2UserChannelsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2UserChannelsChannelIdQueryKey(
  args: InferRequestType<(typeof client.v2.user.channels)[':channelId']['$get']>,
) {
  return ['v2', '/v2/user/channels/:channelId', args] as const
}

export function getV2UserChannelsChannelIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.channels)[':channelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.channels)[':channelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.user.channels)[':channelId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserChannelsChannelIdQueryKey>
  >({
    queryKey: getV2UserChannelsChannelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.channels[':channelId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserChannelsChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.channels)[':channelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.channels)[':channelId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.user.channels)[':channelId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserChannelsChannelIdQueryKey>
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
      ...getV2UserChannelsChannelIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserChannelsChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.channels)[':channelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.channels)[':channelId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.user.channels)[':channelId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserChannelsChannelIdQueryKey>
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
      ...getV2UserChannelsChannelIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2UserChannelsChannelIdCategoriesQueryKey(
  args: InferRequestType<(typeof client.v2.user.channels)[':channelId']['categories']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/channels/:channelId/categories', keyArgs] as const
}

export function getV2UserChannelsChannelIdCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.channels)[':channelId']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.channels)[':channelId']['categories']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.user.channels)[':channelId']['categories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserChannelsChannelIdCategoriesQueryKey>
  >({
    queryKey: getV2UserChannelsChannelIdCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.channels[':channelId'].categories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserChannelsChannelIdCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.channels)[':channelId']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.channels)[':channelId']['categories']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.user.channels)[':channelId']['categories']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserChannelsChannelIdCategoriesQueryKey>
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
      ...getV2UserChannelsChannelIdCategoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserChannelsChannelIdCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.channels)[':channelId']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.channels)[':channelId']['categories']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.user.channels)[':channelId']['categories']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserChannelsChannelIdCategoriesQueryKey>
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
      ...getV2UserChannelsChannelIdCategoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2UserChannelsChannelIdColumnsMutationKey() {
  return ['v2', '/v2/user/channels/:channelId/columns', 'POST'] as const
}

export function getPostV2UserChannelsChannelIdColumnsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.user.channels)[':channelId']['columns']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.user.channels)[':channelId']['columns']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserChannelsChannelIdColumnsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.user.channels)[':channelId']['columns']['$post']>,
    ) {
      return parseResponse(client.v2.user.channels[':channelId'].columns.$post(args, options))
    },
  })
}

export function usePostV2UserChannelsChannelIdColumns<
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
                ReturnType<(typeof client.v2.user.channels)[':channelId']['columns']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.user.channels)[':channelId']['columns']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2UserChannelsChannelIdColumnsMutationOptions<
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

export function getV2UserCustomerIndexQueryKey(
  args: InferRequestType<typeof client.v2.user.customer.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/customer/', keyArgs] as const
}

export function getV2UserCustomerIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.customer.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserCustomerIndexQueryKey>
  >({
    queryKey: getV2UserCustomerIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.customer.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserCustomerIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.customer.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCustomerIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2UserCustomerIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2UserCustomerIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.customer.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCustomerIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2UserCustomerIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2UserCustomerAccountQueryKey(
  args: InferRequestType<typeof client.v2.user.customer.account.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/customer/account', keyArgs] as const
}

export function getV2UserCustomerAccountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.account.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.customer.account.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.account.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserCustomerAccountQueryKey>
  >({
    queryKey: getV2UserCustomerAccountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.customer.account.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserCustomerAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.account.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.customer.account.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.account.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCustomerAccountQueryKey>
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
      ...getV2UserCustomerAccountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserCustomerAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.account.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.customer.account.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.account.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCustomerAccountQueryKey>
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
      ...getV2UserCustomerAccountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2UserCustomerAccountActivateMutationKey() {
  return ['v2', '/v2/user/customer/account/activate', 'POST'] as const
}

export function getPostV2UserCustomerAccountActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.customer.account.activate.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v2.user.customer.account.activate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserCustomerAccountActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v2.user.customer.account.activate.$post>,
    ) {
      return parseResponse(client.v2.user.customer.account.activate.$post(args, options))
    },
  })
}

export function usePostV2UserCustomerAccountActivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.user.customer.account.activate.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v2.user.customer.account.activate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2UserCustomerAccountActivateMutationOptions<
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

export function getPostV2UserCustomerAccountChangeEmailMutationKey() {
  return ['v2', '/v2/user/customer/account/changeEmail', 'POST'] as const
}

export function getPostV2UserCustomerAccountChangeEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.customer.account.changeEmail.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v2.user.customer.account.changeEmail.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserCustomerAccountChangeEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v2.user.customer.account.changeEmail.$post>,
    ) {
      return parseResponse(client.v2.user.customer.account.changeEmail.$post(args, options))
    },
  })
}

export function usePostV2UserCustomerAccountChangeEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.user.customer.account.changeEmail.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v2.user.customer.account.changeEmail.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2UserCustomerAccountChangeEmailMutationOptions<
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

export function getPostV2UserCustomerAccountChangePasswordMutationKey() {
  return ['v2', '/v2/user/customer/account/changePassword', 'POST'] as const
}

export function getPostV2UserCustomerAccountChangePasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.customer.account.changePassword.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v2.user.customer.account.changePassword.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserCustomerAccountChangePasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v2.user.customer.account.changePassword.$post>,
    ) {
      return parseResponse(client.v2.user.customer.account.changePassword.$post(args, options))
    },
  })
}

export function usePostV2UserCustomerAccountChangePassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.user.customer.account.changePassword.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v2.user.customer.account.changePassword.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2UserCustomerAccountChangePasswordMutationOptions<
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

export function getPutV2UserCustomerAccountCompanyInfoMutationKey() {
  return ['v2', '/v2/user/customer/account/companyInfo', 'PUT'] as const
}

export function getPutV2UserCustomerAccountCompanyInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.customer.account.companyInfo.$put>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v2.user.customer.account.companyInfo.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV2UserCustomerAccountCompanyInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v2.user.customer.account.companyInfo.$put>,
    ) {
      return parseResponse(client.v2.user.customer.account.companyInfo.$put(args, options))
    },
  })
}

export function usePutV2UserCustomerAccountCompanyInfo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.user.customer.account.companyInfo.$put>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v2.user.customer.account.companyInfo.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2UserCustomerAccountCompanyInfoMutationOptions<
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

export function getV2UserCustomerAccountCreditCardInfoQueryKey(
  args: InferRequestType<typeof client.v2.user.customer.account.creditCardInfo.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/customer/account/creditCardInfo', keyArgs] as const
}

export function getV2UserCustomerAccountCreditCardInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.customer.account.creditCardInfo.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.customer.account.creditCardInfo.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.customer.account.creditCardInfo.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserCustomerAccountCreditCardInfoQueryKey>
  >({
    queryKey: getV2UserCustomerAccountCreditCardInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.customer.account.creditCardInfo.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserCustomerAccountCreditCardInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.customer.account.creditCardInfo.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.customer.account.creditCardInfo.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.customer.account.creditCardInfo.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCustomerAccountCreditCardInfoQueryKey>
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
      ...getV2UserCustomerAccountCreditCardInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserCustomerAccountCreditCardInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.customer.account.creditCardInfo.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.customer.account.creditCardInfo.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.customer.account.creditCardInfo.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCustomerAccountCreditCardInfoQueryKey>
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
      ...getV2UserCustomerAccountCreditCardInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV2UserCustomerAccountCreditCardInfoMutationKey() {
  return ['v2', '/v2/user/customer/account/creditCardInfo', 'PUT'] as const
}

export function getPutV2UserCustomerAccountCreditCardInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.customer.account.creditCardInfo.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v2.user.customer.account.creditCardInfo.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV2UserCustomerAccountCreditCardInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v2.user.customer.account.creditCardInfo.$put>,
    ) {
      return parseResponse(client.v2.user.customer.account.creditCardInfo.$put(args, options))
    },
  })
}

export function usePutV2UserCustomerAccountCreditCardInfo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.customer.account.creditCardInfo.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.user.customer.account.creditCardInfo.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2UserCustomerAccountCreditCardInfoMutationOptions<
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

export function getPutV2UserCustomerAccountPersonalInfoMutationKey() {
  return ['v2', '/v2/user/customer/account/personalInfo', 'PUT'] as const
}

export function getPutV2UserCustomerAccountPersonalInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.customer.account.personalInfo.$put>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v2.user.customer.account.personalInfo.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV2UserCustomerAccountPersonalInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v2.user.customer.account.personalInfo.$put>,
    ) {
      return parseResponse(client.v2.user.customer.account.personalInfo.$put(args, options))
    },
  })
}

export function usePutV2UserCustomerAccountPersonalInfo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.user.customer.account.personalInfo.$put>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v2.user.customer.account.personalInfo.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2UserCustomerAccountPersonalInfoMutationOptions<
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

export function getV2UserCustomerAccountProfilePictureInfoQueryKey(
  args: InferRequestType<typeof client.v2.user.customer.account.profilePictureInfo.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/customer/account/profilePictureInfo', keyArgs] as const
}

export function getV2UserCustomerAccountProfilePictureInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.customer.account.profilePictureInfo.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.customer.account.profilePictureInfo.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.customer.account.profilePictureInfo.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserCustomerAccountProfilePictureInfoQueryKey>
  >({
    queryKey: getV2UserCustomerAccountProfilePictureInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.customer.account.profilePictureInfo.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserCustomerAccountProfilePictureInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.customer.account.profilePictureInfo.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.customer.account.profilePictureInfo.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.customer.account.profilePictureInfo.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCustomerAccountProfilePictureInfoQueryKey>
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
      ...getV2UserCustomerAccountProfilePictureInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserCustomerAccountProfilePictureInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.customer.account.profilePictureInfo.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.customer.account.profilePictureInfo.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.customer.account.profilePictureInfo.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCustomerAccountProfilePictureInfoQueryKey>
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
      ...getV2UserCustomerAccountProfilePictureInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV2UserCustomerAccountProfilePictureInfoMutationKey() {
  return ['v2', '/v2/user/customer/account/profilePictureInfo', 'PUT'] as const
}

export function getPutV2UserCustomerAccountProfilePictureInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.customer.account.profilePictureInfo.$put>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v2.user.customer.account.profilePictureInfo.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV2UserCustomerAccountProfilePictureInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v2.user.customer.account.profilePictureInfo.$put>,
    ) {
      return parseResponse(client.v2.user.customer.account.profilePictureInfo.$put(args, options))
    },
  })
}

export function usePutV2UserCustomerAccountProfilePictureInfo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.user.customer.account.profilePictureInfo.$put>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v2.user.customer.account.profilePictureInfo.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2UserCustomerAccountProfilePictureInfoMutationOptions<
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

export function getPostV2UserCustomerAccountResendEmailActivationMutationKey() {
  return ['v2', '/v2/user/customer/account/resendEmailActivation', 'POST'] as const
}

export function getPostV2UserCustomerAccountResendEmailActivationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.customer.account.resendEmailActivation.$post>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserCustomerAccountResendEmailActivationMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.v2.user.customer.account.resendEmailActivation.$post(undefined, options),
      )
    },
  })
}

export function usePostV2UserCustomerAccountResendEmailActivation<
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
                  ReturnType<typeof client.v2.user.customer.account.resendEmailActivation.$post>
                >
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2UserCustomerAccountResendEmailActivationMutationOptions<
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

export function getV2UserCustomerBillingPeriodsQueryKey(
  args: InferRequestType<typeof client.v2.user.customer.billingPeriods.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/customer/billingPeriods', keyArgs] as const
}

export function getV2UserCustomerBillingPeriodsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.billingPeriods.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.customer.billingPeriods.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.customer.billingPeriods.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserCustomerBillingPeriodsQueryKey>
  >({
    queryKey: getV2UserCustomerBillingPeriodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.customer.billingPeriods.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserCustomerBillingPeriods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.billingPeriods.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.customer.billingPeriods.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.customer.billingPeriods.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCustomerBillingPeriodsQueryKey>
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
      ...getV2UserCustomerBillingPeriodsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserCustomerBillingPeriods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.billingPeriods.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.customer.billingPeriods.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.customer.billingPeriods.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCustomerBillingPeriodsQueryKey>
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
      ...getV2UserCustomerBillingPeriodsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2UserCustomerContractsQueryKey(
  args: InferRequestType<typeof client.v2.user.customer.contracts.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/customer/contracts', keyArgs] as const
}

export function getV2UserCustomerContractsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.contracts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.customer.contracts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.contracts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserCustomerContractsQueryKey>
  >({
    queryKey: getV2UserCustomerContractsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.customer.contracts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserCustomerContracts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.contracts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.customer.contracts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.contracts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCustomerContractsQueryKey>
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
      ...getV2UserCustomerContractsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserCustomerContracts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.contracts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.customer.contracts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.contracts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCustomerContractsQueryKey>
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
      ...getV2UserCustomerContractsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2UserCustomerContractsMutationKey() {
  return ['v2', '/v2/user/customer/contracts', 'POST'] as const
}

export function getPostV2UserCustomerContractsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.contracts.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.user.customer.contracts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserCustomerContractsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.user.customer.contracts.$post>) {
      return parseResponse(client.v2.user.customer.contracts.$post(args, options))
    },
  })
}

export function usePostV2UserCustomerContracts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.customer.contracts.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.user.customer.contracts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2UserCustomerContractsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2UserCustomerContractsCurrentDisableAutoRenewalMutationKey() {
  return ['v2', '/v2/user/customer/contracts/current/disableAutoRenewal', 'POST'] as const
}

export function getPostV2UserCustomerContractsCurrentDisableAutoRenewalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<typeof client.v2.user.customer.contracts.current.disableAutoRenewal.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserCustomerContractsCurrentDisableAutoRenewalMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.v2.user.customer.contracts.current.disableAutoRenewal.$post
      >,
    ) {
      return parseResponse(
        client.v2.user.customer.contracts.current.disableAutoRenewal.$post(args, options),
      )
    },
  })
}

export function usePostV2UserCustomerContractsCurrentDisableAutoRenewal<
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
                    typeof client.v2.user.customer.contracts.current.disableAutoRenewal.$post
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v2.user.customer.contracts.current.disableAutoRenewal.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2UserCustomerContractsCurrentDisableAutoRenewalMutationOptions<
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

export function getPostV2UserCustomerContractsCurrentReenableAutoRenewalMutationKey() {
  return ['v2', '/v2/user/customer/contracts/current/reenableAutoRenewal', 'POST'] as const
}

export function getPostV2UserCustomerContractsCurrentReenableAutoRenewalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserCustomerContractsCurrentReenableAutoRenewalMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.v2.user.customer.contracts.current.reenableAutoRenewal.$post(undefined, options),
      )
    },
  })
}

export function usePostV2UserCustomerContractsCurrentReenableAutoRenewal<
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
                    typeof client.v2.user.customer.contracts.current.reenableAutoRenewal.$post
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2UserCustomerContractsCurrentReenableAutoRenewalMutationOptions<
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

export function getDeleteV2UserCustomerContractsNextMutationKey() {
  return ['v2', '/v2/user/customer/contracts/next', 'DELETE'] as const
}

export function getDeleteV2UserCustomerContractsNextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.customer.contracts.next.$delete>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2UserCustomerContractsNextMutationKey(),
    async mutationFn() {
      return parseResponse(client.v2.user.customer.contracts.next.$delete(undefined, options))
    },
  })
}

export function useDeleteV2UserCustomerContractsNext<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.user.customer.contracts.next.$delete>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2UserCustomerContractsNextMutationOptions<
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

export function getV2UserCustomerFriendsUserIdQueryKey(
  args: InferRequestType<(typeof client.v2.user.customer.friends)[':userId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/customer/friends/:userId', keyArgs] as const
}

export function getV2UserCustomerFriendsUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.customer.friends)[':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.customer.friends)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.user.customer.friends)[':userId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserCustomerFriendsUserIdQueryKey>
  >({
    queryKey: getV2UserCustomerFriendsUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.customer.friends[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserCustomerFriendsUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.customer.friends)[':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.customer.friends)[':userId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.user.customer.friends)[':userId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCustomerFriendsUserIdQueryKey>
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
      ...getV2UserCustomerFriendsUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserCustomerFriendsUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.customer.friends)[':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.customer.friends)[':userId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.user.customer.friends)[':userId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCustomerFriendsUserIdQueryKey>
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
      ...getV2UserCustomerFriendsUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2UserCustomerInvoicesQueryKey(
  args: InferRequestType<typeof client.v2.user.customer.invoices.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/customer/invoices', keyArgs] as const
}

export function getV2UserCustomerInvoicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.invoices.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.customer.invoices.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.invoices.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserCustomerInvoicesQueryKey>
  >({
    queryKey: getV2UserCustomerInvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.customer.invoices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserCustomerInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.invoices.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.customer.invoices.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.invoices.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCustomerInvoicesQueryKey>
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
      ...getV2UserCustomerInvoicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserCustomerInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.invoices.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.customer.invoices.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.invoices.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCustomerInvoicesQueryKey>
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
      ...getV2UserCustomerInvoicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2UserCustomerOffersQueryKey(
  args: InferRequestType<typeof client.v2.user.customer.offers.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/customer/offers', keyArgs] as const
}

export function getV2UserCustomerOffersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.offers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.customer.offers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.offers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserCustomerOffersQueryKey>
  >({
    queryKey: getV2UserCustomerOffersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.customer.offers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserCustomerOffers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.offers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.customer.offers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.offers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCustomerOffersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2UserCustomerOffersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2UserCustomerOffers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.offers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.customer.offers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.offers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCustomerOffersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2UserCustomerOffersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2UserCustomerOffersMutationKey() {
  return ['v2', '/v2/user/customer/offers', 'POST'] as const
}

export function getPostV2UserCustomerOffersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.offers.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.user.customer.offers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserCustomerOffersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.user.customer.offers.$post>) {
      return parseResponse(client.v2.user.customer.offers.$post(args, options))
    },
  })
}

export function usePostV2UserCustomerOffers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.offers.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.user.customer.offers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2UserCustomerOffersMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2UserCustomerSecurityLogoutMutationKey() {
  return ['v2', '/v2/user/customer/security/logout', 'POST'] as const
}

export function getPostV2UserCustomerSecurityLogoutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.user.customer.security.logout.$post>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserCustomerSecurityLogoutMutationKey(),
    async mutationFn() {
      return parseResponse(client.v2.user.customer.security.logout.$post(undefined, options))
    },
  })
}

export function usePostV2UserCustomerSecurityLogout<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.user.customer.security.logout.$post>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2UserCustomerSecurityLogoutMutationOptions<
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

export function getV2UserCustomerStoresQueryKey(
  args: InferRequestType<typeof client.v2.user.customer.stores.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/customer/stores', keyArgs] as const
}

export function getV2UserCustomerStoresQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.stores.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.customer.stores.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.stores.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserCustomerStoresQueryKey>
  >({
    queryKey: getV2UserCustomerStoresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.customer.stores.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserCustomerStores<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.stores.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.customer.stores.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.stores.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCustomerStoresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2UserCustomerStoresQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2UserCustomerStores<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.stores.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.customer.stores.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.stores.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCustomerStoresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2UserCustomerStoresQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2UserCustomerStoresMutationKey() {
  return ['v2', '/v2/user/customer/stores', 'POST'] as const
}

export function getPostV2UserCustomerStoresMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.stores.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.user.customer.stores.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserCustomerStoresMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.user.customer.stores.$post>) {
      return parseResponse(client.v2.user.customer.stores.$post(args, options))
    },
  })
}

export function usePostV2UserCustomerStores<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.stores.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.user.customer.stores.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2UserCustomerStoresMutationOptions<TError, TOnMutateResult>(
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

export function getV2UserCustomerStoresStoreIdQueryKey(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/customer/stores/:storeId', keyArgs] as const
}

export function getV2UserCustomerStoresStoreIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserCustomerStoresStoreIdQueryKey>
  >({
    queryKey: getV2UserCustomerStoresStoreIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.customer.stores[':storeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserCustomerStoresStoreId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCustomerStoresStoreIdQueryKey>
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
      ...getV2UserCustomerStoresStoreIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserCustomerStoresStoreId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCustomerStoresStoreIdQueryKey>
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
      ...getV2UserCustomerStoresStoreIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2UserCustomerStoresStoreIdMutationKey() {
  return ['v2', '/v2/user/customer/stores/:storeId', 'DELETE'] as const
}

export function getDeleteV2UserCustomerStoresStoreIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2UserCustomerStoresStoreIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['$delete']>,
    ) {
      return parseResponse(client.v2.user.customer.stores[':storeId'].$delete(args, options))
    },
  })
}

export function useDeleteV2UserCustomerStoresStoreId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2UserCustomerStoresStoreIdMutationOptions<
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

export function getPatchV2UserCustomerStoresStoreIdMutationKey() {
  return ['v2', '/v2/user/customer/stores/:storeId', 'PATCH'] as const
}

export function getPatchV2UserCustomerStoresStoreIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2UserCustomerStoresStoreIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['$patch']>,
    ) {
      return parseResponse(client.v2.user.customer.stores[':storeId'].$patch(args, options))
    },
  })
}

export function usePatchV2UserCustomerStoresStoreId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV2UserCustomerStoresStoreIdMutationOptions<
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

export function getV2UserCustomerStoresStoreIdAlertsQueryKey(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['alerts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/customer/stores/:storeId/alerts', keyArgs] as const
}

export function getV2UserCustomerStoresStoreIdAlertsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['alerts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['alerts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['alerts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserCustomerStoresStoreIdAlertsQueryKey>
  >({
    queryKey: getV2UserCustomerStoresStoreIdAlertsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.customer.stores[':storeId'].alerts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserCustomerStoresStoreIdAlerts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['alerts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['alerts']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['alerts']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCustomerStoresStoreIdAlertsQueryKey>
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
      ...getV2UserCustomerStoresStoreIdAlertsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserCustomerStoresStoreIdAlerts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['alerts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['alerts']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['alerts']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCustomerStoresStoreIdAlertsQueryKey>
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
      ...getV2UserCustomerStoresStoreIdAlertsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2UserCustomerStoresStoreIdAlertsMutationKey() {
  return ['v2', '/v2/user/customer/stores/:storeId/alerts', 'POST'] as const
}

export function getPostV2UserCustomerStoresStoreIdAlertsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['alerts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserCustomerStoresStoreIdAlertsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.customer.stores)[':storeId']['alerts']['$post']
      >,
    ) {
      return parseResponse(client.v2.user.customer.stores[':storeId'].alerts.$post(args, options))
    },
  })
}

export function usePostV2UserCustomerStoresStoreIdAlerts<
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
                  ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['alerts']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['alerts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2UserCustomerStoresStoreIdAlertsMutationOptions<
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

export function getV2UserCustomerStoresStoreIdRightsQueryKey(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['rights']['$get']>,
) {
  return ['v2', '/v2/user/customer/stores/:storeId/rights', args] as const
}

export function getV2UserCustomerStoresStoreIdRightsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['rights']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['rights']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['rights']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserCustomerStoresStoreIdRightsQueryKey>
  >({
    queryKey: getV2UserCustomerStoresStoreIdRightsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.customer.stores[':storeId'].rights.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserCustomerStoresStoreIdRights<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['rights']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['rights']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['rights']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCustomerStoresStoreIdRightsQueryKey>
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
      ...getV2UserCustomerStoresStoreIdRightsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserCustomerStoresStoreIdRights<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['rights']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['rights']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['rights']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCustomerStoresStoreIdRightsQueryKey>
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
      ...getV2UserCustomerStoresStoreIdRightsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2UserCustomerStoresStoreIdSharesQueryKey(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['shares']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/customer/stores/:storeId/shares', keyArgs] as const
}

export function getV2UserCustomerStoresStoreIdSharesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['shares']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['shares']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['shares']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserCustomerStoresStoreIdSharesQueryKey>
  >({
    queryKey: getV2UserCustomerStoresStoreIdSharesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.customer.stores[':storeId'].shares.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserCustomerStoresStoreIdShares<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['shares']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['shares']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['shares']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCustomerStoresStoreIdSharesQueryKey>
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
      ...getV2UserCustomerStoresStoreIdSharesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserCustomerStoresStoreIdShares<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['shares']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['shares']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['shares']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCustomerStoresStoreIdSharesQueryKey>
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
      ...getV2UserCustomerStoresStoreIdSharesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2UserCustomerStoresStoreIdSharesMutationKey() {
  return ['v2', '/v2/user/customer/stores/:storeId/shares', 'POST'] as const
}

export function getPostV2UserCustomerStoresStoreIdSharesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['shares']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserCustomerStoresStoreIdSharesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.customer.stores)[':storeId']['shares']['$post']
      >,
    ) {
      return parseResponse(client.v2.user.customer.stores[':storeId'].shares.$post(args, options))
    },
  })
}

export function usePostV2UserCustomerStoresStoreIdShares<
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
                  ReturnType<(typeof client.v2.user.customer.stores)[':storeId']['shares']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['shares']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2UserCustomerStoresStoreIdSharesMutationOptions<
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

export function getDeleteV2UserCustomerStoresStoreIdSharesUserIdMutationKey() {
  return ['v2', '/v2/user/customer/stores/:storeId/shares/:userId', 'DELETE'] as const
}

export function getDeleteV2UserCustomerStoresStoreIdSharesUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.customer.stores)[':storeId']['shares'][':userId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2UserCustomerStoresStoreIdSharesUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.customer.stores)[':storeId']['shares'][':userId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.user.customer.stores[':storeId'].shares[':userId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2UserCustomerStoresStoreIdSharesUserId<
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
                    (typeof client.v2.user.customer.stores)[':storeId']['shares'][':userId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.customer.stores)[':storeId']['shares'][':userId']['$delete']
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
  const mutationDefaults = getDeleteV2UserCustomerStoresStoreIdSharesUserIdMutationOptions<
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

export function getV2UserCustomerZendeskTokenQueryKey() {
  return ['v2', '/v2/user/customer/zendeskToken'] as const
}

export function getV2UserCustomerZendeskTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.zendeskToken.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.zendeskToken.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserCustomerZendeskTokenQueryKey>
  >({
    queryKey: getV2UserCustomerZendeskTokenQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.customer.zendeskToken.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserCustomerZendeskToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.zendeskToken.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.customer.zendeskToken.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCustomerZendeskTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2UserCustomerZendeskTokenQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2UserCustomerZendeskToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.customer.zendeskToken.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.customer.zendeskToken.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserCustomerZendeskTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2UserCustomerZendeskTokenQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2UserLegacyTrackingChannelCatalogsIndexQueryKey(
  args: InferRequestType<typeof client.v2.user.legacyTracking.channelCatalogs.index.$get>,
) {
  return ['v2', '/v2/user/legacyTracking/channelCatalogs/', args] as const
}

export function getV2UserLegacyTrackingChannelCatalogsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.legacyTracking.channelCatalogs.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.legacyTracking.channelCatalogs.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.legacyTracking.channelCatalogs.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserLegacyTrackingChannelCatalogsIndexQueryKey>
  >({
    queryKey: getV2UserLegacyTrackingChannelCatalogsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.legacyTracking.channelCatalogs.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserLegacyTrackingChannelCatalogsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.legacyTracking.channelCatalogs.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.legacyTracking.channelCatalogs.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.legacyTracking.channelCatalogs.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserLegacyTrackingChannelCatalogsIndexQueryKey>
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
      ...getV2UserLegacyTrackingChannelCatalogsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserLegacyTrackingChannelCatalogsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.legacyTracking.channelCatalogs.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.legacyTracking.channelCatalogs.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.legacyTracking.channelCatalogs.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserLegacyTrackingChannelCatalogsIndexQueryKey>
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
      ...getV2UserLegacyTrackingChannelCatalogsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2UserLegacyTrackingChannelCatalogsChannelCatalogIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.user.legacyTracking.channelCatalogs)[':channelCatalogId']['$get']
  >,
) {
  return ['v2', '/v2/user/legacyTracking/channelCatalogs/:channelCatalogId', args] as const
}

export function getV2UserLegacyTrackingChannelCatalogsChannelCatalogIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.legacyTracking.channelCatalogs)[':channelCatalogId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2UserLegacyTrackingChannelCatalogsChannelCatalogIdQueryKey>
  >({
    queryKey: getV2UserLegacyTrackingChannelCatalogsChannelCatalogIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.legacyTracking.channelCatalogs[':channelCatalogId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserLegacyTrackingChannelCatalogsChannelCatalogId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.legacyTracking.channelCatalogs)[':channelCatalogId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserLegacyTrackingChannelCatalogsChannelCatalogIdQueryKey>
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
      ...getV2UserLegacyTrackingChannelCatalogsChannelCatalogIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserLegacyTrackingChannelCatalogsChannelCatalogId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.legacyTracking.channelCatalogs)[':channelCatalogId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserLegacyTrackingChannelCatalogsChannelCatalogIdQueryKey>
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
      ...getV2UserLegacyTrackingChannelCatalogsChannelCatalogIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2UserLegacyTrackingChannelCatalogsChannelCatalogIdMigrateMutationKey() {
  return [
    'v2',
    '/v2/user/legacyTracking/channelCatalogs/:channelCatalogId/migrate',
    'POST',
  ] as const
}

export function getPostV2UserLegacyTrackingChannelCatalogsChannelCatalogIdMigrateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.legacyTracking.channelCatalogs)[':channelCatalogId']['migrate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserLegacyTrackingChannelCatalogsChannelCatalogIdMigrateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.legacyTracking.channelCatalogs)[':channelCatalogId']['migrate']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.legacyTracking.channelCatalogs[':channelCatalogId'].migrate.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2UserLegacyTrackingChannelCatalogsChannelCatalogIdMigrate<
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
                    (typeof client.v2.user.legacyTracking.channelCatalogs)[':channelCatalogId']['migrate']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.legacyTracking.channelCatalogs)[':channelCatalogId']['migrate']['$post']
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
    getPostV2UserLegacyTrackingChannelCatalogsChannelCatalogIdMigrateMutationOptions<
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

export function getV2UserLovIndexQueryKey() {
  return ['v2', '/v2/user/lov/'] as const
}

export function getV2UserLovIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.lov.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.lov.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserLovIndexQueryKey>
  >({
    queryKey: getV2UserLovIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.lov.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserLovIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.lov.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.lov.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserLovIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2UserLovIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2UserLovIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.lov.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.lov.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserLovIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2UserLovIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2UserLovListNameQueryKey(
  args: InferRequestType<(typeof client.v2.user.lov)[':listName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/lov/:listName', keyArgs] as const
}

export function getV2UserLovListNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.user.lov)[':listName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.lov)[':listName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.user.lov)[':listName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserLovListNameQueryKey>
  >({
    queryKey: getV2UserLovListNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.lov[':listName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserLovListName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.user.lov)[':listName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.lov)[':listName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.user.lov)[':listName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserLovListNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2UserLovListNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2UserLovListName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.user.lov)[':listName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.lov)[':listName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.user.lov)[':listName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserLovListNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2UserLovListNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2UserMarketplacesChannelcatalogsIndexQueryKey(
  args: InferRequestType<typeof client.v2.user.marketplaces.channelcatalogs.index.$get>,
) {
  return ['v2', '/v2/user/marketplaces/channelcatalogs/', args] as const
}

export function getV2UserMarketplacesChannelcatalogsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.marketplaces.channelcatalogs.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.marketplaces.channelcatalogs.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.marketplaces.channelcatalogs.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserMarketplacesChannelcatalogsIndexQueryKey>
  >({
    queryKey: getV2UserMarketplacesChannelcatalogsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.marketplaces.channelcatalogs.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserMarketplacesChannelcatalogsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.marketplaces.channelcatalogs.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.marketplaces.channelcatalogs.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.marketplaces.channelcatalogs.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserMarketplacesChannelcatalogsIndexQueryKey>
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
      ...getV2UserMarketplacesChannelcatalogsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserMarketplacesChannelcatalogsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.marketplaces.channelcatalogs.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.marketplaces.channelcatalogs.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.marketplaces.channelcatalogs.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserMarketplacesChannelcatalogsIndexQueryKey>
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
      ...getV2UserMarketplacesChannelcatalogsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdHistoryQueryKey(
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

export function getV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdHistoryQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.channelcatalogs.publications)[':marketplaceTechnicalCode'][':accountId']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdHistoryQueryKey
    >
  >({
    queryKey:
      getV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdHistoryQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.marketplaces.channelcatalogs.publications[':marketplaceTechnicalCode'][
          ':accountId'
        ].history.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdHistory<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.channelcatalogs.publications)[':marketplaceTechnicalCode'][':accountId']['history']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdHistoryQueryKey
        >
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
      ...getV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdHistoryQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdHistory<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.channelcatalogs.publications)[':marketplaceTechnicalCode'][':accountId']['history']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdHistoryQueryKey
        >
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
      ...getV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdHistoryQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdPublishMutationKey() {
  return [
    'v2',
    '/v2/user/marketplaces/channelcatalogs/publications/:marketplaceTechnicalCode/:accountId/publish',
    'POST',
  ] as const
}

export function getPostV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdPublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.marketplaces.channelcatalogs.publications)[':marketplaceTechnicalCode'][':accountId']['publish']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdPublishMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.marketplaces.channelcatalogs.publications)[':marketplaceTechnicalCode'][':accountId']['publish']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.marketplaces.channelcatalogs.publications[':marketplaceTechnicalCode'][
          ':accountId'
        ].publish.$post(args, options),
      )
    },
  })
}

export function usePostV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdPublish<
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
                  (typeof client.v2.user.marketplaces.channelcatalogs.publications)[':marketplaceTechnicalCode'][':accountId']['publish']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.user.marketplaces.channelcatalogs.publications)[':marketplaceTechnicalCode'][':accountId']['publish']['$post']
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
    getPostV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdPublishMutationOptions<
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

export function getV2UserMarketplacesChannelcatalogsChannelCatalogIdPropertiesQueryKey(
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

export function getV2UserMarketplacesChannelcatalogsChannelCatalogIdPropertiesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.channelcatalogs)[':channelCatalogId']['properties']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2UserMarketplacesChannelcatalogsChannelCatalogIdPropertiesQueryKey>
  >({
    queryKey: getV2UserMarketplacesChannelcatalogsChannelCatalogIdPropertiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.marketplaces.channelcatalogs[':channelCatalogId'].properties.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserMarketplacesChannelcatalogsChannelCatalogIdProperties<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.channelcatalogs)[':channelCatalogId']['properties']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserMarketplacesChannelcatalogsChannelCatalogIdPropertiesQueryKey>
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
      ...getV2UserMarketplacesChannelcatalogsChannelCatalogIdPropertiesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserMarketplacesChannelcatalogsChannelCatalogIdProperties<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.channelcatalogs)[':channelCatalogId']['properties']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserMarketplacesChannelcatalogsChannelCatalogIdPropertiesQueryKey>
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
      ...getV2UserMarketplacesChannelcatalogsChannelCatalogIdPropertiesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2UserMarketplacesChannelcatalogsChannelCatalogIdSettingsQueryKey(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.channelcatalogs)[':channelCatalogId']['settings']['$get']
  >,
) {
  return ['v2', '/v2/user/marketplaces/channelcatalogs/:channelCatalogId/settings', args] as const
}

export function getV2UserMarketplacesChannelcatalogsChannelCatalogIdSettingsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.channelcatalogs)[':channelCatalogId']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2UserMarketplacesChannelcatalogsChannelCatalogIdSettingsQueryKey>
  >({
    queryKey: getV2UserMarketplacesChannelcatalogsChannelCatalogIdSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.marketplaces.channelcatalogs[':channelCatalogId'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserMarketplacesChannelcatalogsChannelCatalogIdSettings<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.channelcatalogs)[':channelCatalogId']['settings']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserMarketplacesChannelcatalogsChannelCatalogIdSettingsQueryKey>
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
      ...getV2UserMarketplacesChannelcatalogsChannelCatalogIdSettingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserMarketplacesChannelcatalogsChannelCatalogIdSettings<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.channelcatalogs)[':channelCatalogId']['settings']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserMarketplacesChannelcatalogsChannelCatalogIdSettingsQueryKey>
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
      ...getV2UserMarketplacesChannelcatalogsChannelCatalogIdSettingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2UserMarketplacesChannelcatalogsChannelCatalogIdSettingsMutationKey() {
  return ['v2', '/v2/user/marketplaces/channelcatalogs/:channelCatalogId/settings', 'POST'] as const
}

export function getPostV2UserMarketplacesChannelcatalogsChannelCatalogIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.marketplaces.channelcatalogs)[':channelCatalogId']['settings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserMarketplacesChannelcatalogsChannelCatalogIdSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.marketplaces.channelcatalogs)[':channelCatalogId']['settings']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.marketplaces.channelcatalogs[':channelCatalogId'].settings.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2UserMarketplacesChannelcatalogsChannelCatalogIdSettings<
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
                    (typeof client.v2.user.marketplaces.channelcatalogs)[':channelCatalogId']['settings']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.marketplaces.channelcatalogs)[':channelCatalogId']['settings']['$post']
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
    getPostV2UserMarketplacesChannelcatalogsChannelCatalogIdSettingsMutationOptions<
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

export function getV2UserMarketplacesOrdersIndexQueryKey(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/marketplaces/orders/', keyArgs] as const
}

export function getV2UserMarketplacesOrdersIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserMarketplacesOrdersIndexQueryKey>
  >({
    queryKey: getV2UserMarketplacesOrdersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.marketplaces.orders.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserMarketplacesOrdersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserMarketplacesOrdersIndexQueryKey>
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
      ...getV2UserMarketplacesOrdersIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserMarketplacesOrdersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserMarketplacesOrdersIndexQueryKey>
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
      ...getV2UserMarketplacesOrdersIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2UserMarketplacesOrdersAutomaticTransitionsQueryKey(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.automaticTransitions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/marketplaces/orders/automaticTransitions', keyArgs] as const
}

export function getV2UserMarketplacesOrdersAutomaticTransitionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.automaticTransitions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.automaticTransitions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.automaticTransitions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserMarketplacesOrdersAutomaticTransitionsQueryKey>
  >({
    queryKey: getV2UserMarketplacesOrdersAutomaticTransitionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.marketplaces.orders.automaticTransitions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserMarketplacesOrdersAutomaticTransitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.automaticTransitions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.automaticTransitions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.v2.user.marketplaces.orders.automaticTransitions.$get>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserMarketplacesOrdersAutomaticTransitionsQueryKey>
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
      ...getV2UserMarketplacesOrdersAutomaticTransitionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserMarketplacesOrdersAutomaticTransitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.automaticTransitions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.automaticTransitions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.v2.user.marketplaces.orders.automaticTransitions.$get>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserMarketplacesOrdersAutomaticTransitionsQueryKey>
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
      ...getV2UserMarketplacesOrdersAutomaticTransitionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2UserMarketplacesOrdersAutomaticTransitionsMutationKey() {
  return ['v2', '/v2/user/marketplaces/orders/automaticTransitions', 'POST'] as const
}

export function getPostV2UserMarketplacesOrdersAutomaticTransitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<typeof client.v2.user.marketplaces.orders.automaticTransitions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserMarketplacesOrdersAutomaticTransitionsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v2.user.marketplaces.orders.automaticTransitions.$post>,
    ) {
      return parseResponse(
        client.v2.user.marketplaces.orders.automaticTransitions.$post(args, options),
      )
    },
  })
}

export function usePostV2UserMarketplacesOrdersAutomaticTransitions<
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
                  ReturnType<typeof client.v2.user.marketplaces.orders.automaticTransitions.$post>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v2.user.marketplaces.orders.automaticTransitions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2UserMarketplacesOrdersAutomaticTransitionsMutationOptions<
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

export function getPostV2UserMarketplacesOrdersBatchesChangeOrdersChangeOrderTypeMutationKey() {
  return [
    'v2',
    '/v2/user/marketplaces/orders/batches/changeOrders/:changeOrderType',
    'POST',
  ] as const
}

export function getPostV2UserMarketplacesOrdersBatchesChangeOrdersChangeOrderTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.marketplaces.orders.batches.changeOrders)[':changeOrderType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserMarketplacesOrdersBatchesChangeOrdersChangeOrderTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.marketplaces.orders.batches.changeOrders)[':changeOrderType']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.marketplaces.orders.batches.changeOrders[':changeOrderType'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2UserMarketplacesOrdersBatchesChangeOrdersChangeOrderType<
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
                  (typeof client.v2.user.marketplaces.orders.batches.changeOrders)[':changeOrderType']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.user.marketplaces.orders.batches.changeOrders)[':changeOrderType']['$post']
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
    getPostV2UserMarketplacesOrdersBatchesChangeOrdersChangeOrderTypeMutationOptions<
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

export function getPostV2UserMarketplacesOrdersBatchesClearMerchantOrderInfosMutationKey() {
  return ['v2', '/v2/user/marketplaces/orders/batches/clearMerchantOrderInfos', 'POST'] as const
}

export function getPostV2UserMarketplacesOrdersBatchesClearMerchantOrderInfosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      typeof client.v2.user.marketplaces.orders.batches.clearMerchantOrderInfos.$post
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserMarketplacesOrdersBatchesClearMerchantOrderInfosMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.v2.user.marketplaces.orders.batches.clearMerchantOrderInfos.$post
      >,
    ) {
      return parseResponse(
        client.v2.user.marketplaces.orders.batches.clearMerchantOrderInfos.$post(args, options),
      )
    },
  })
}

export function usePostV2UserMarketplacesOrdersBatchesClearMerchantOrderInfos<
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
                  typeof client.v2.user.marketplaces.orders.batches.clearMerchantOrderInfos.$post
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          typeof client.v2.user.marketplaces.orders.batches.clearMerchantOrderInfos.$post
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
    getPostV2UserMarketplacesOrdersBatchesClearMerchantOrderInfosMutationOptions<
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

export function getPostV2UserMarketplacesOrdersBatchesSetMerchantOrderInfosMutationKey() {
  return ['v2', '/v2/user/marketplaces/orders/batches/setMerchantOrderInfos', 'POST'] as const
}

export function getPostV2UserMarketplacesOrdersBatchesSetMerchantOrderInfosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<typeof client.v2.user.marketplaces.orders.batches.setMerchantOrderInfos.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserMarketplacesOrdersBatchesSetMerchantOrderInfosMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.v2.user.marketplaces.orders.batches.setMerchantOrderInfos.$post
      >,
    ) {
      return parseResponse(
        client.v2.user.marketplaces.orders.batches.setMerchantOrderInfos.$post(args, options),
      )
    },
  })
}

export function usePostV2UserMarketplacesOrdersBatchesSetMerchantOrderInfos<
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
                  typeof client.v2.user.marketplaces.orders.batches.setMerchantOrderInfos.$post
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          typeof client.v2.user.marketplaces.orders.batches.setMerchantOrderInfos.$post
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
    getPostV2UserMarketplacesOrdersBatchesSetMerchantOrderInfosMutationOptions<
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

export function getV2UserMarketplacesOrdersExportationsQueryKey(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.exportations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/marketplaces/orders/exportations', keyArgs] as const
}

export function getV2UserMarketplacesOrdersExportationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.exportations.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.exportations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.exportations.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserMarketplacesOrdersExportationsQueryKey>
  >({
    queryKey: getV2UserMarketplacesOrdersExportationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.marketplaces.orders.exportations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserMarketplacesOrdersExportations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.exportations.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.exportations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.exportations.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserMarketplacesOrdersExportationsQueryKey>
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
      ...getV2UserMarketplacesOrdersExportationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserMarketplacesOrdersExportations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.exportations.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.exportations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.exportations.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserMarketplacesOrdersExportationsQueryKey>
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
      ...getV2UserMarketplacesOrdersExportationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2UserMarketplacesOrdersExportationsMutationKey() {
  return ['v2', '/v2/user/marketplaces/orders/exportations', 'POST'] as const
}

export function getPostV2UserMarketplacesOrdersExportationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.exportations.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v2.user.marketplaces.orders.exportations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserMarketplacesOrdersExportationsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v2.user.marketplaces.orders.exportations.$post>,
    ) {
      return parseResponse(client.v2.user.marketplaces.orders.exportations.$post(args, options))
    },
  })
}

export function usePostV2UserMarketplacesOrdersExportations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.exportations.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.user.marketplaces.orders.exportations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2UserMarketplacesOrdersExportationsMutationOptions<
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

export function getPostV2UserMarketplacesOrdersHarvestMutationKey() {
  return ['v2', '/v2/user/marketplaces/orders/harvest', 'POST'] as const
}

export function getPostV2UserMarketplacesOrdersHarvestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.harvest.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v2.user.marketplaces.orders.harvest.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserMarketplacesOrdersHarvestMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v2.user.marketplaces.orders.harvest.$post>,
    ) {
      return parseResponse(client.v2.user.marketplaces.orders.harvest.$post(args, options))
    },
  })
}

export function usePostV2UserMarketplacesOrdersHarvest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.harvest.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.user.marketplaces.orders.harvest.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2UserMarketplacesOrdersHarvestMutationOptions<
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

export function getPostV2UserMarketplacesOrdersInvoicesGenerateMutationKey() {
  return ['v2', '/v2/user/marketplaces/orders/invoices/generate', 'POST'] as const
}

export function getPostV2UserMarketplacesOrdersInvoicesGenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.invoices.generate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v2.user.marketplaces.orders.invoices.generate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserMarketplacesOrdersInvoicesGenerateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v2.user.marketplaces.orders.invoices.generate.$post>,
    ) {
      return parseResponse(
        client.v2.user.marketplaces.orders.invoices.generate.$post(args, options),
      )
    },
  })
}

export function usePostV2UserMarketplacesOrdersInvoicesGenerate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.invoices.generate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.user.marketplaces.orders.invoices.generate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2UserMarketplacesOrdersInvoicesGenerateMutationOptions<
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

export function getPostV2UserMarketplacesOrdersInvoicesGetPdfInvoiceMutationKey() {
  return ['v2', '/v2/user/marketplaces/orders/invoices/getPdfInvoice', 'POST'] as const
}

export function getPostV2UserMarketplacesOrdersInvoicesGetPdfInvoiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<typeof client.v2.user.marketplaces.orders.invoices.getPdfInvoice.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserMarketplacesOrdersInvoicesGetPdfInvoiceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.v2.user.marketplaces.orders.invoices.getPdfInvoice.$post
      >,
    ) {
      return parseResponse(
        client.v2.user.marketplaces.orders.invoices.getPdfInvoice.$post(args, options),
      )
    },
  })
}

export function usePostV2UserMarketplacesOrdersInvoicesGetPdfInvoice<
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
                ReturnType<typeof client.v2.user.marketplaces.orders.invoices.getPdfInvoice.$post>
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.user.marketplaces.orders.invoices.getPdfInvoice.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2UserMarketplacesOrdersInvoicesGetPdfInvoiceMutationOptions<
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

export function getV2UserMarketplacesOrdersInvoicesSettingsDesignQueryKey() {
  return ['v2', '/v2/user/marketplaces/orders/invoices/settings/design'] as const
}

export function getV2UserMarketplacesOrdersInvoicesSettingsDesignQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.invoices.settings.design.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.v2.user.marketplaces.orders.invoices.settings.design.$get>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserMarketplacesOrdersInvoicesSettingsDesignQueryKey>
  >({
    queryKey: getV2UserMarketplacesOrdersInvoicesSettingsDesignQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.marketplaces.orders.invoices.settings.design.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserMarketplacesOrdersInvoicesSettingsDesign<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.invoices.settings.design.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.v2.user.marketplaces.orders.invoices.settings.design.$get>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserMarketplacesOrdersInvoicesSettingsDesignQueryKey>
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
      ...getV2UserMarketplacesOrdersInvoicesSettingsDesignQueryOptions<TData, TError>(
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserMarketplacesOrdersInvoicesSettingsDesign<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.invoices.settings.design.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.v2.user.marketplaces.orders.invoices.settings.design.$get>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserMarketplacesOrdersInvoicesSettingsDesignQueryKey>
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
      ...getV2UserMarketplacesOrdersInvoicesSettingsDesignQueryOptions<TData, TError>(
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV2UserMarketplacesOrdersInvoicesSettingsDesignMutationKey() {
  return ['v2', '/v2/user/marketplaces/orders/invoices/settings/design', 'PUT'] as const
}

export function getPutV2UserMarketplacesOrdersInvoicesSettingsDesignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<typeof client.v2.user.marketplaces.orders.invoices.settings.design.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV2UserMarketplacesOrdersInvoicesSettingsDesignMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.v2.user.marketplaces.orders.invoices.settings.design.$put
      >,
    ) {
      return parseResponse(
        client.v2.user.marketplaces.orders.invoices.settings.design.$put(args, options),
      )
    },
  })
}

export function usePutV2UserMarketplacesOrdersInvoicesSettingsDesign<
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
                    typeof client.v2.user.marketplaces.orders.invoices.settings.design.$put
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v2.user.marketplaces.orders.invoices.settings.design.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2UserMarketplacesOrdersInvoicesSettingsDesignMutationOptions<
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

export function getPostV2UserMarketplacesOrdersInvoicesSettingsDesignPreviewMutationKey() {
  return ['v2', '/v2/user/marketplaces/orders/invoices/settings/design/preview', 'POST'] as const
}

export function getPostV2UserMarketplacesOrdersInvoicesSettingsDesignPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      typeof client.v2.user.marketplaces.orders.invoices.settings.design.preview.$post
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserMarketplacesOrdersInvoicesSettingsDesignPreviewMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.v2.user.marketplaces.orders.invoices.settings.design.preview.$post
      >,
    ) {
      return parseResponse(
        client.v2.user.marketplaces.orders.invoices.settings.design.preview.$post(args, options),
      )
    },
  })
}

export function usePostV2UserMarketplacesOrdersInvoicesSettingsDesignPreview<
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
                  typeof client.v2.user.marketplaces.orders.invoices.settings.design.preview.$post
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          typeof client.v2.user.marketplaces.orders.invoices.settings.design.preview.$post
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
    getPostV2UserMarketplacesOrdersInvoicesSettingsDesignPreviewMutationOptions<
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

export function getV2UserMarketplacesOrdersInvoicesSettingsGeneralQueryKey() {
  return ['v2', '/v2/user/marketplaces/orders/invoices/settings/general'] as const
}

export function getV2UserMarketplacesOrdersInvoicesSettingsGeneralQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<typeof client.v2.user.marketplaces.orders.invoices.settings.general.$get>
        >
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.v2.user.marketplaces.orders.invoices.settings.general.$get>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserMarketplacesOrdersInvoicesSettingsGeneralQueryKey>
  >({
    queryKey: getV2UserMarketplacesOrdersInvoicesSettingsGeneralQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.marketplaces.orders.invoices.settings.general.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserMarketplacesOrdersInvoicesSettingsGeneral<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<typeof client.v2.user.marketplaces.orders.invoices.settings.general.$get>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.v2.user.marketplaces.orders.invoices.settings.general.$get>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserMarketplacesOrdersInvoicesSettingsGeneralQueryKey>
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
      ...getV2UserMarketplacesOrdersInvoicesSettingsGeneralQueryOptions<TData, TError>(
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserMarketplacesOrdersInvoicesSettingsGeneral<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<typeof client.v2.user.marketplaces.orders.invoices.settings.general.$get>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.v2.user.marketplaces.orders.invoices.settings.general.$get>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserMarketplacesOrdersInvoicesSettingsGeneralQueryKey>
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
      ...getV2UserMarketplacesOrdersInvoicesSettingsGeneralQueryOptions<TData, TError>(
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV2UserMarketplacesOrdersInvoicesSettingsGeneralMutationKey() {
  return ['v2', '/v2/user/marketplaces/orders/invoices/settings/general', 'PUT'] as const
}

export function getPutV2UserMarketplacesOrdersInvoicesSettingsGeneralMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<typeof client.v2.user.marketplaces.orders.invoices.settings.general.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV2UserMarketplacesOrdersInvoicesSettingsGeneralMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.v2.user.marketplaces.orders.invoices.settings.general.$put
      >,
    ) {
      return parseResponse(
        client.v2.user.marketplaces.orders.invoices.settings.general.$put(args, options),
      )
    },
  })
}

export function usePutV2UserMarketplacesOrdersInvoicesSettingsGeneral<
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
                    typeof client.v2.user.marketplaces.orders.invoices.settings.general.$put
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v2.user.marketplaces.orders.invoices.settings.general.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2UserMarketplacesOrdersInvoicesSettingsGeneralMutationOptions<
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

export function getPostV2UserMarketplacesOrdersInvoicesMarketplaceTechnicalCodeAccountIdBeezUPOrderUUIDGenerateMutationKey() {
  return [
    'v2',
    '/v2/user/marketplaces/orders/invoices/:marketplaceTechnicalCode/:accountId/:beezUPOrderUUID/generate',
    'POST',
  ] as const
}

export function getPostV2UserMarketplacesOrdersInvoicesMarketplaceTechnicalCodeAccountIdBeezUPOrderUUIDGenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.marketplaces.orders.invoices)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderUUID']['generate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2UserMarketplacesOrdersInvoicesMarketplaceTechnicalCodeAccountIdBeezUPOrderUUIDGenerateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.marketplaces.orders.invoices)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderUUID']['generate']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.marketplaces.orders.invoices[':marketplaceTechnicalCode'][':accountId'][
          ':beezUPOrderUUID'
        ].generate.$post(args, options),
      )
    },
  })
}

export function usePostV2UserMarketplacesOrdersInvoicesMarketplaceTechnicalCodeAccountIdBeezUPOrderUUIDGenerate<
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
                  (typeof client.v2.user.marketplaces.orders.invoices)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderUUID']['generate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.user.marketplaces.orders.invoices)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderUUID']['generate']['$post']
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
    getPostV2UserMarketplacesOrdersInvoicesMarketplaceTechnicalCodeAccountIdBeezUPOrderUUIDGenerateMutationOptions<
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

export function getPostV2UserMarketplacesOrdersInvoicesMarketplaceTechnicalCodeAccountIdBeezUPOrderUUIDPreviewMutationKey() {
  return [
    'v2',
    '/v2/user/marketplaces/orders/invoices/:marketplaceTechnicalCode/:accountId/:beezUPOrderUUID/preview',
    'POST',
  ] as const
}

export function getPostV2UserMarketplacesOrdersInvoicesMarketplaceTechnicalCodeAccountIdBeezUPOrderUUIDPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.marketplaces.orders.invoices)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderUUID']['preview']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2UserMarketplacesOrdersInvoicesMarketplaceTechnicalCodeAccountIdBeezUPOrderUUIDPreviewMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.marketplaces.orders.invoices)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderUUID']['preview']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.marketplaces.orders.invoices[':marketplaceTechnicalCode'][':accountId'][
          ':beezUPOrderUUID'
        ].preview.$post(args, options),
      )
    },
  })
}

export function usePostV2UserMarketplacesOrdersInvoicesMarketplaceTechnicalCodeAccountIdBeezUPOrderUUIDPreview<
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
                  (typeof client.v2.user.marketplaces.orders.invoices)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderUUID']['preview']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.user.marketplaces.orders.invoices)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderUUID']['preview']['$post']
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
    getPostV2UserMarketplacesOrdersInvoicesMarketplaceTechnicalCodeAccountIdBeezUPOrderUUIDPreviewMutationOptions<
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

export function getPostV2UserMarketplacesOrdersListFullMutationKey() {
  return ['v2', '/v2/user/marketplaces/orders/list/full', 'POST'] as const
}

export function getPostV2UserMarketplacesOrdersListFullMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.list.full.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v2.user.marketplaces.orders.list.full.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserMarketplacesOrdersListFullMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v2.user.marketplaces.orders.list.full.$post>,
    ) {
      return parseResponse(client.v2.user.marketplaces.orders.list.full.$post(args, options))
    },
  })
}

export function usePostV2UserMarketplacesOrdersListFull<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.list.full.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.user.marketplaces.orders.list.full.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2UserMarketplacesOrdersListFullMutationOptions<
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

export function getPostV2UserMarketplacesOrdersListLightMutationKey() {
  return ['v2', '/v2/user/marketplaces/orders/list/light', 'POST'] as const
}

export function getPostV2UserMarketplacesOrdersListLightMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.list.light.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v2.user.marketplaces.orders.list.light.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserMarketplacesOrdersListLightMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v2.user.marketplaces.orders.list.light.$post>,
    ) {
      return parseResponse(client.v2.user.marketplaces.orders.list.light.$post(args, options))
    },
  })
}

export function usePostV2UserMarketplacesOrdersListLight<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.list.light.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.user.marketplaces.orders.list.light.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2UserMarketplacesOrdersListLightMutationOptions<
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

export function getV2UserMarketplacesOrdersStatusQueryKey(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.status.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/user/marketplaces/orders/status', keyArgs] as const
}

export function getV2UserMarketplacesOrdersStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.status.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.status.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.status.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserMarketplacesOrdersStatusQueryKey>
  >({
    queryKey: getV2UserMarketplacesOrdersStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.marketplaces.orders.status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserMarketplacesOrdersStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.status.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.status.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.status.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserMarketplacesOrdersStatusQueryKey>
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
      ...getV2UserMarketplacesOrdersStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserMarketplacesOrdersStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.status.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.status.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.status.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserMarketplacesOrdersStatusQueryKey>
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
      ...getV2UserMarketplacesOrdersStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2UserMarketplacesOrdersSubscriptionsIndexQueryKey() {
  return ['v2', '/v2/user/marketplaces/orders/subscriptions/'] as const
}

export function getV2UserMarketplacesOrdersSubscriptionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.subscriptions.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.subscriptions.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserMarketplacesOrdersSubscriptionsIndexQueryKey>
  >({
    queryKey: getV2UserMarketplacesOrdersSubscriptionsIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.marketplaces.orders.subscriptions.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserMarketplacesOrdersSubscriptionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.subscriptions.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.v2.user.marketplaces.orders.subscriptions.index.$get>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserMarketplacesOrdersSubscriptionsIndexQueryKey>
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
      ...getV2UserMarketplacesOrdersSubscriptionsIndexQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserMarketplacesOrdersSubscriptionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.user.marketplaces.orders.subscriptions.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.v2.user.marketplaces.orders.subscriptions.index.$get>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserMarketplacesOrdersSubscriptionsIndexQueryKey>
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
      ...getV2UserMarketplacesOrdersSubscriptionsIndexQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2UserMarketplacesOrdersSubscriptionsIdQueryKey(
  args: InferRequestType<(typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$get']>,
) {
  return ['v2', '/v2/user/marketplaces/orders/subscriptions/:id', args] as const
}

export function getV2UserMarketplacesOrdersSubscriptionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserMarketplacesOrdersSubscriptionsIdQueryKey>
  >({
    queryKey: getV2UserMarketplacesOrdersSubscriptionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.marketplaces.orders.subscriptions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserMarketplacesOrdersSubscriptionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserMarketplacesOrdersSubscriptionsIdQueryKey>
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
      ...getV2UserMarketplacesOrdersSubscriptionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserMarketplacesOrdersSubscriptionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserMarketplacesOrdersSubscriptionsIdQueryKey>
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
      ...getV2UserMarketplacesOrdersSubscriptionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2UserMarketplacesOrdersSubscriptionsIdMutationKey() {
  return ['v2', '/v2/user/marketplaces/orders/subscriptions/:id', 'POST'] as const
}

export function getPostV2UserMarketplacesOrdersSubscriptionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserMarketplacesOrdersSubscriptionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.marketplaces.orders.subscriptions[':id'].$post(args, options),
      )
    },
  })
}

export function usePostV2UserMarketplacesOrdersSubscriptionsId<
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
                  (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2UserMarketplacesOrdersSubscriptionsIdMutationOptions<
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

export function getDeleteV2UserMarketplacesOrdersSubscriptionsIdMutationKey() {
  return ['v2', '/v2/user/marketplaces/orders/subscriptions/:id', 'DELETE'] as const
}

export function getDeleteV2UserMarketplacesOrdersSubscriptionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2UserMarketplacesOrdersSubscriptionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.user.marketplaces.orders.subscriptions[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2UserMarketplacesOrdersSubscriptionsId<
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
                  (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$delete']
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
  const mutationDefaults = getDeleteV2UserMarketplacesOrdersSubscriptionsIdMutationOptions<
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

export function getPostV2UserMarketplacesOrdersSubscriptionsIdActivateMutationKey() {
  return ['v2', '/v2/user/marketplaces/orders/subscriptions/:id/activate', 'POST'] as const
}

export function getPostV2UserMarketplacesOrdersSubscriptionsIdActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['activate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserMarketplacesOrdersSubscriptionsIdActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['activate']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.marketplaces.orders.subscriptions[':id'].activate.$post(args, options),
      )
    },
  })
}

export function usePostV2UserMarketplacesOrdersSubscriptionsIdActivate<
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
                  (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['activate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['activate']['$post']
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
  const mutationDefaults = getPostV2UserMarketplacesOrdersSubscriptionsIdActivateMutationOptions<
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

export function getPostV2UserMarketplacesOrdersSubscriptionsIdDeactivateMutationKey() {
  return ['v2', '/v2/user/marketplaces/orders/subscriptions/:id/deactivate', 'POST'] as const
}

export function getPostV2UserMarketplacesOrdersSubscriptionsIdDeactivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['deactivate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserMarketplacesOrdersSubscriptionsIdDeactivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['deactivate']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.marketplaces.orders.subscriptions[':id'].deactivate.$post(args, options),
      )
    },
  })
}

export function usePostV2UserMarketplacesOrdersSubscriptionsIdDeactivate<
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
                  (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['deactivate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['deactivate']['$post']
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
  const mutationDefaults = getPostV2UserMarketplacesOrdersSubscriptionsIdDeactivateMutationOptions<
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

export function getV2UserMarketplacesOrdersSubscriptionsIdReportingQueryKey(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['reporting']['$get']
  >,
) {
  return ['v2', '/v2/user/marketplaces/orders/subscriptions/:id/reporting', args] as const
}

export function getV2UserMarketplacesOrdersSubscriptionsIdReportingQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['reporting']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2UserMarketplacesOrdersSubscriptionsIdReportingQueryKey>
  >({
    queryKey: getV2UserMarketplacesOrdersSubscriptionsIdReportingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.marketplaces.orders.subscriptions[':id'].reporting.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UserMarketplacesOrdersSubscriptionsIdReporting<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['reporting']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserMarketplacesOrdersSubscriptionsIdReportingQueryKey>
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
      ...getV2UserMarketplacesOrdersSubscriptionsIdReportingQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserMarketplacesOrdersSubscriptionsIdReporting<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['reporting']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2UserMarketplacesOrdersSubscriptionsIdReportingQueryKey>
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
      ...getV2UserMarketplacesOrdersSubscriptionsIdReportingQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2UserMarketplacesOrdersSubscriptionsIdRetryMutationKey() {
  return ['v2', '/v2/user/marketplaces/orders/subscriptions/:id/retry', 'POST'] as const
}

export function getPostV2UserMarketplacesOrdersSubscriptionsIdRetryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['retry']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UserMarketplacesOrdersSubscriptionsIdRetryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['retry']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.marketplaces.orders.subscriptions[':id'].retry.$post(args, options),
      )
    },
  })
}

export function usePostV2UserMarketplacesOrdersSubscriptionsIdRetry<
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
                  (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['retry']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['retry']['$post']
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
  const mutationDefaults = getPostV2UserMarketplacesOrdersSubscriptionsIdRetryMutationOptions<
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

export function getV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdQueryKey(
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

export function getV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdQueryKey
    >
  >({
    queryKey:
      getV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.marketplaces.orders[':marketplaceTechnicalCode'][':accountId'][
          ':beezUPOrderId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdQueryKey
        >
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
      ...getV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdQueryKey
        >
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
      ...getV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getHeadV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdMutationKey() {
  return [
    'v2',
    '/v2/user/marketplaces/orders/:marketplaceTechnicalCode/:accountId/:beezUPOrderId',
    'HEAD',
  ] as const
}

export function getHeadV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$head']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getHeadV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$head']
      >,
    ) {
      return parseResponse(
        client.v2.user.marketplaces.orders[':marketplaceTechnicalCode'][':accountId'][
          ':beezUPOrderId'
        ].$head(args, options),
      )
    },
  })
}

export function useHeadV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderId<
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
                  (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$head']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$head']
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
    getHeadV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdMutationOptions<
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

export function getPostV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdClearMerchantOrderInfoMutationKey() {
  return [
    'v2',
    '/v2/user/marketplaces/orders/:marketplaceTechnicalCode/:accountId/:beezUPOrderId/clearMerchantOrderInfo',
    'POST',
  ] as const
}

export function getPostV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdClearMerchantOrderInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['clearMerchantOrderInfo']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdClearMerchantOrderInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['clearMerchantOrderInfo']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.marketplaces.orders[':marketplaceTechnicalCode'][':accountId'][
          ':beezUPOrderId'
        ].clearMerchantOrderInfo.$post(args, options),
      )
    },
  })
}

export function usePostV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdClearMerchantOrderInfo<
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
                    (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['clearMerchantOrderInfo']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['clearMerchantOrderInfo']['$post']
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
    getPostV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdClearMerchantOrderInfoMutationOptions<
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

export function getPostV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHarvestMutationKey() {
  return [
    'v2',
    '/v2/user/marketplaces/orders/:marketplaceTechnicalCode/:accountId/:beezUPOrderId/harvest',
    'POST',
  ] as const
}

export function getPostV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHarvestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['harvest']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHarvestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['harvest']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.marketplaces.orders[':marketplaceTechnicalCode'][':accountId'][
          ':beezUPOrderId'
        ].harvest.$post(args, options),
      )
    },
  })
}

export function usePostV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHarvest<
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
                  (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['harvest']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['harvest']['$post']
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
    getPostV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHarvestMutationOptions<
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

export function getV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryQueryKey(
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

export function getV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryQueryKey
    >
  >({
    queryKey:
      getV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.marketplaces.orders[':marketplaceTechnicalCode'][':accountId'][
          ':beezUPOrderId'
        ].history.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistory<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['history']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryQueryKey
        >
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
      ...getV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistory<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['history']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryQueryKey
        >
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
      ...getV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdSetMerchantOrderInfoMutationKey() {
  return [
    'v2',
    '/v2/user/marketplaces/orders/:marketplaceTechnicalCode/:accountId/:beezUPOrderId/setMerchantOrderInfo',
    'POST',
  ] as const
}

export function getPostV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdSetMerchantOrderInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['setMerchantOrderInfo']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdSetMerchantOrderInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['setMerchantOrderInfo']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.marketplaces.orders[':marketplaceTechnicalCode'][':accountId'][
          ':beezUPOrderId'
        ].setMerchantOrderInfo.$post(args, options),
      )
    },
  })
}

export function usePostV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdSetMerchantOrderInfo<
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
                    (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['setMerchantOrderInfo']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['setMerchantOrderInfo']['$post']
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
    getPostV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdSetMerchantOrderInfoMutationOptions<
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

export function getPostV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdChangeOrderTypeMutationKey() {
  return [
    'v2',
    '/v2/user/marketplaces/orders/:marketplaceTechnicalCode/:accountId/:beezUPOrderId/:changeOrderType',
    'POST',
  ] as const
}

export function getPostV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdChangeOrderTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'][':changeOrderType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdChangeOrderTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'][':changeOrderType']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.user.marketplaces.orders[':marketplaceTechnicalCode'][':accountId'][
          ':beezUPOrderId'
        ][':changeOrderType'].$post(args, options),
      )
    },
  })
}

export function usePostV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdChangeOrderType<
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
                  (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'][':changeOrderType']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'][':changeOrderType']['$post']
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
    getPostV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdChangeOrderTypeMutationOptions<
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
