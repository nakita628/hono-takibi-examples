import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountBalancesKey() {
  return ['account-balances'] as const
}

export function getAccountMovementsKey() {
  return ['account-movements'] as const
}

export function getAccountTransactionsKey() {
  return ['account-transactions'] as const
}

export function getAccountBalancesQueryKey(
  args: InferRequestType<(typeof client)['account-balances']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['account-balances', '/account-balances', keyArgs] as const
}

export function getAccountBalancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['account-balances']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['account-balances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['account-balances']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountBalancesQueryKey>
  >({
    queryKey: getAccountBalancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['account-balances'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccountBalances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['account-balances']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['account-balances']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['account-balances']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountBalancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountBalancesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAccountMovementsQueryKey(
  args: InferRequestType<(typeof client)['account-movements']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['account-movements', '/account-movements', keyArgs] as const
}

export function getAccountMovementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['account-movements']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['account-movements']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['account-movements']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountMovementsQueryKey>
  >({
    queryKey: getAccountMovementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['account-movements'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccountMovements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['account-movements']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['account-movements']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['account-movements']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountMovementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountMovementsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAccountTransactionsQueryKey(
  args: InferRequestType<(typeof client)['account-transactions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['account-transactions', '/account-transactions', keyArgs] as const
}

export function getAccountTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['account-transactions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['account-transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['account-transactions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountTransactionsQueryKey>
  >({
    queryKey: getAccountTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['account-transactions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['account-transactions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['account-transactions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['account-transactions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountTransactionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountTransactionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
