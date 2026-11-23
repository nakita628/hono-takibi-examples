import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getAccountsQueryKey(args: InferRequestType<typeof client.accounts.$get>) {
  return ['accounts', '/accounts', args] as const
}

export function getAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.accounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountsQueryKey>
  >({
    queryKey: getAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.accounts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostAccountsAccountOrderImpact<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountsAccountOrderImpactMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAccountsAccountOrdersQueryKey(
  args: InferRequestType<(typeof client.accounts)[':account']['orders']['$get']>,
) {
  return ['accounts', '/accounts/:account/orders', args] as const
}

export function getAccountsAccountOrdersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':account']['orders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':account']['orders']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAccountOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':account'].orders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountsAccountOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':account']['orders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':account']['orders']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountsAccountOrdersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAccountsAccountOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountsAccountOrdersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAccountsAccountOrdersCustomerOrderIdQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':account']['orders'][':CustomerOrderId']['$get']
  >,
) {
  return ['accounts', '/accounts/:account/orders/:CustomerOrderId', args] as const
}

export function getAccountsAccountOrdersCustomerOrderIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':account']['orders'][':CustomerOrderId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAccountOrdersCustomerOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':account'].orders[':CustomerOrderId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountsAccountOrdersCustomerOrderId<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':account']['orders'][':CustomerOrderId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getAccountsAccountOrdersCustomerOrderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountsAccountOrdersCustomerOrderIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutAccountsAccountOrdersCustomerOrderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountsAccountOrdersCustomerOrderIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteAccountsAccountOrdersCustomerOrderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountsAccountOrdersCustomerOrderIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAccountsAccountPositionsQueryKey(
  args: InferRequestType<(typeof client.accounts)[':account']['positions']['$get']>,
) {
  return ['accounts', '/accounts/:account/positions', args] as const
}

export function getAccountsAccountPositionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':account']['positions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':account']['positions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAccountPositionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':account'].positions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountsAccountPositions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':account']['positions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':account']['positions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountsAccountPositionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAccountsAccountSummaryQueryKey(
  args: InferRequestType<(typeof client.accounts)[':account']['summary']['$get']>,
) {
  return ['accounts', '/accounts/:account/summary', args] as const
}

export function getAccountsAccountSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':account']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':account']['summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAccountSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':account'].summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountsAccountSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':account']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':account']['summary']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountsAccountSummaryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAccountsAccountTradesQueryKey(
  args: InferRequestType<(typeof client.accounts)[':account']['trades']['$get']>,
) {
  return ['accounts', '/accounts/:account/trades', args] as const
}

export function getAccountsAccountTradesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':account']['trades']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':account']['trades']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAccountTradesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':account'].trades.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountsAccountTrades<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':account']['trades']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':account']['trades']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountsAccountTradesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMarketdataExchangeComponentsQueryKey() {
  return ['marketdata', '/marketdata/exchange_components'] as const
}

export function getMarketdataExchangeComponentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.marketdata.exchange_components.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.marketdata.exchange_components.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketdataExchangeComponentsQueryKey>
  >({
    queryKey: getMarketdataExchangeComponentsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.marketdata.exchange_components.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMarketdataExchangeComponents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.marketdata.exchange_components.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.marketdata.exchange_components.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMarketdataExchangeComponentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMarketdataExchangeComponentsQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMarketdataSnapshotQueryKey(
  args: InferRequestType<typeof client.marketdata.snapshot.$get>,
) {
  return ['marketdata', '/marketdata/snapshot', args] as const
}

export function getMarketdataSnapshotQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketdata.snapshot.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.marketdata.snapshot.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketdata.snapshot.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMarketdataSnapshotQueryKey>
  >({
    queryKey: getMarketdataSnapshotQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketdata.snapshot.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMarketdataSnapshot<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.marketdata.snapshot.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.marketdata.snapshot.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.marketdata.snapshot.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMarketdataSnapshotQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMarketdataSnapshotQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostOauthAccessToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.oauth.access_token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOauthAccessTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostOauthLiveSessionToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth.live_session_token.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.oauth.live_session_token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOauthLiveSessionTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostOauthRequestToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth.request_token.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.oauth.request_token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOauthRequestTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSecdefQueryKey(args: InferRequestType<typeof client.secdef.$get>) {
  return ['secdef', '/secdef', args] as const
}

export function getSecdefQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secdef.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.secdef.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secdef.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSecdefQueryKey>
  >({
    queryKey: getSecdefQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.secdef.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSecdef<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secdef.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.secdef.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secdef.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSecdefQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSecdefQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
