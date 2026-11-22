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

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getMarketdataKey() {
  return ['marketdata'] as const
}

export function getOauthKey() {
  return ['oauth'] as const
}

export function getSecdefKey() {
  return ['secdef'] as const
}

export function getAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.$get>>,
) {
  return ['accounts', '/accounts', toValue(args)] as const
}

export function getAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
          >,
          ReturnType<typeof getAccountsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountsAccountOrderImpactMutationKey() {
  return ['accounts', '/accounts/:account/order_impact', 'POST'] as const
}

export function getPostAccountsAccountOrderImpactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':account']['order_impact']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.accounts)[':account']['order_impact']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountOrderImpactMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':account']['order_impact']['$post']>,
    ) {
      return parseResponse(client.accounts[':account'].order_impact.$post(args, options))
    },
  })
}

export function usePostAccountsAccountOrderImpact<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.accounts)[':account']['order_impact']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.accounts)[':account']['order_impact']['$post']>,
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
  const mutationDefaults = getPostAccountsAccountOrderImpactMutationOptions<
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

export function getAccountsAccountOrdersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':account']['orders']['$get']>>,
) {
  return ['accounts', '/accounts/:account/orders', toValue(args)] as const
}

export function getAccountsAccountOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':account']['orders']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':account'].orders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':account']['orders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':account']['orders']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':account']['orders']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':account']['orders']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountOrdersQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':account']['orders']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':account'].orders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountsAccountOrdersMutationKey() {
  return ['accounts', '/accounts/:account/orders', 'POST'] as const
}

export function getPostAccountsAccountOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':account']['orders']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.accounts)[':account']['orders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountOrdersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':account']['orders']['$post']>,
    ) {
      return parseResponse(client.accounts[':account'].orders.$post(args, options))
    },
  })
}

export function usePostAccountsAccountOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.accounts)[':account']['orders']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.accounts)[':account']['orders']['$post']>,
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
  const mutationDefaults = getPostAccountsAccountOrdersMutationOptions<TError, TOnMutateResult>(
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

export function getAccountsAccountOrdersCustomerOrderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':account']['orders'][':CustomerOrderId']['$get']>
  >,
) {
  return ['accounts', '/accounts/:account/orders/:CustomerOrderId', toValue(args)] as const
}

export function getAccountsAccountOrdersCustomerOrderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':account']['orders'][':CustomerOrderId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountOrdersCustomerOrderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':account'].orders[':CustomerOrderId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountOrdersCustomerOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':account']['orders'][':CustomerOrderId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':account']['orders'][':CustomerOrderId']['$get']>
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
                    (typeof client.accounts)[':account']['orders'][':CustomerOrderId']['$get']
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
                    (typeof client.accounts)[':account']['orders'][':CustomerOrderId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAccountOrdersCustomerOrderIdQueryKey>
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
            ReturnType<(typeof client.accounts)[':account']['orders'][':CustomerOrderId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountOrdersCustomerOrderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountOrdersCustomerOrderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':account'].orders[':CustomerOrderId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountsAccountOrdersCustomerOrderIdMutationKey() {
  return ['accounts', '/accounts/:account/orders/:CustomerOrderId', 'PUT'] as const
}

export function getPutAccountsAccountOrdersCustomerOrderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':account']['orders'][':CustomerOrderId']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.accounts)[':account']['orders'][':CustomerOrderId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAccountOrdersCustomerOrderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':account']['orders'][':CustomerOrderId']['$put']
      >,
    ) {
      return parseResponse(
        client.accounts[':account'].orders[':CustomerOrderId'].$put(args, options),
      )
    },
  })
}

export function usePutAccountsAccountOrdersCustomerOrderId<
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
                      (typeof client.accounts)[':account']['orders'][':CustomerOrderId']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.accounts)[':account']['orders'][':CustomerOrderId']['$put']
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
  const mutationDefaults = getPutAccountsAccountOrdersCustomerOrderIdMutationOptions<
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

export function getDeleteAccountsAccountOrdersCustomerOrderIdMutationKey() {
  return ['accounts', '/accounts/:account/orders/:CustomerOrderId', 'DELETE'] as const
}

export function getDeleteAccountsAccountOrdersCustomerOrderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':account']['orders'][':CustomerOrderId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.accounts)[':account']['orders'][':CustomerOrderId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAccountOrdersCustomerOrderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':account']['orders'][':CustomerOrderId']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounts[':account'].orders[':CustomerOrderId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAccountsAccountOrdersCustomerOrderId<
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
                      (typeof client.accounts)[':account']['orders'][':CustomerOrderId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.accounts)[':account']['orders'][':CustomerOrderId']['$delete']
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
  const mutationDefaults = getDeleteAccountsAccountOrdersCustomerOrderIdMutationOptions<
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

export function getAccountsAccountPositionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':account']['positions']['$get']>
  >,
) {
  return ['accounts', '/accounts/:account/positions', toValue(args)] as const
}

export function getAccountsAccountPositionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':account']['positions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountPositionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':account'].positions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountPositions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':account']['positions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':account']['positions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':account']['positions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':account']['positions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountPositionsQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':account']['positions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountPositionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountPositionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':account'].positions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountSummaryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':account']['summary']['$get']>>,
) {
  return ['accounts', '/accounts/:account/summary', toValue(args)] as const
}

export function getAccountsAccountSummaryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':account']['summary']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':account'].summary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':account']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':account']['summary']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':account']['summary']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':account']['summary']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountSummaryQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':account']['summary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':account'].summary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountTradesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':account']['trades']['$get']>>,
) {
  return ['accounts', '/accounts/:account/trades', toValue(args)] as const
}

export function getAccountsAccountTradesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':account']['trades']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountTradesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':account'].trades.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountTrades<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':account']['trades']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':account']['trades']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':account']['trades']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':account']['trades']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountTradesQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':account']['trades']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountTradesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountTradesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':account'].trades.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMarketdataExchangeComponentsQueryKey() {
  return ['marketdata', '/marketdata/exchange_components'] as const
}

export function getMarketdataExchangeComponentsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMarketdataExchangeComponentsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketdata.exchange_components.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketdataExchangeComponents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.marketdata.exchange_components.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.marketdata.exchange_components.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.marketdata.exchange_components.$get>>
              >
            >
          >,
          ReturnType<typeof getMarketdataExchangeComponentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.marketdata.exchange_components.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketdataExchangeComponentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMarketdataExchangeComponentsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.marketdata.exchange_components.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMarketdataSnapshotQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.marketdata.snapshot.$get>>,
) {
  return ['marketdata', '/marketdata/snapshot', toValue(args)] as const
}

export function getMarketdataSnapshotQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.marketdata.snapshot.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketdataSnapshotQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketdata.snapshot.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketdataSnapshot<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketdata.snapshot.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.marketdata.snapshot.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.marketdata.snapshot.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.marketdata.snapshot.$get>>>
            >
          >,
          ReturnType<typeof getMarketdataSnapshotQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketdata.snapshot.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMarketdataSnapshotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketdataSnapshotQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketdata.snapshot.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOauthAccessTokenMutationKey() {
  return ['oauth', '/oauth/access_token', 'POST'] as const
}

export function getPostOauthAccessTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth.access_token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthAccessTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.access_token.$post>) {
      return parseResponse(client.oauth.access_token.$post(args, options))
    },
  })
}

export function usePostOauthAccessToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.oauth.access_token.$post>,
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
  const mutationDefaults = getPostOauthAccessTokenMutationOptions<TError, TOnMutateResult>(
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

export function getPostOauthLiveSessionTokenMutationKey() {
  return ['oauth', '/oauth/live_session_token', 'POST'] as const
}

export function getPostOauthLiveSessionTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.oauth.live_session_token.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.oauth.live_session_token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthLiveSessionTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.live_session_token.$post>) {
      return parseResponse(client.oauth.live_session_token.$post(args, options))
    },
  })
}

export function usePostOauthLiveSessionToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.oauth.live_session_token.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.oauth.live_session_token.$post>,
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
  const mutationDefaults = getPostOauthLiveSessionTokenMutationOptions<TError, TOnMutateResult>(
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

export function getPostOauthRequestTokenMutationKey() {
  return ['oauth', '/oauth/request_token', 'POST'] as const
}

export function getPostOauthRequestTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.request_token.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth.request_token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthRequestTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.request_token.$post>) {
      return parseResponse(client.oauth.request_token.$post(args, options))
    },
  })
}

export function usePostOauthRequestToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth.request_token.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.oauth.request_token.$post>,
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
  const mutationDefaults = getPostOauthRequestTokenMutationOptions<TError, TOnMutateResult>(
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

export function getSecdefQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.secdef.$get>>,
) {
  return ['secdef', '/secdef', toValue(args)] as const
}

export function getSecdefQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.secdef.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSecdefQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.secdef.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSecdef<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secdef.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.secdef.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secdef.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secdef.$get>>>>>,
          ReturnType<typeof getSecdefQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secdef.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSecdefQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSecdefQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.secdef.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
