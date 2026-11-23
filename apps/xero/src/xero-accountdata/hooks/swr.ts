import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
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

export function getGetAccountBalancesKey(
  args: InferRequestType<(typeof client)['account-balances']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['account-balances', '/account-balances', keyArgs] as const
}

export function useGetAccountBalances<TError = unknown>(
  args: InferRequestType<(typeof client)['account-balances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['account-balances']['$get']>>>
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
        ? getGetAccountBalancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['account-balances']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['account-balances'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountBalances<TError = unknown>(
  args: InferRequestType<(typeof client)['account-balances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['account-balances']['$get']>>>
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
        ? getGetAccountBalancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['account-balances']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['account-balances'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountMovementsKey(
  args: InferRequestType<(typeof client)['account-movements']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['account-movements', '/account-movements', keyArgs] as const
}

export function useGetAccountMovements<TError = unknown>(
  args: InferRequestType<(typeof client)['account-movements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['account-movements']['$get']>>>
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
        ? getGetAccountMovementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['account-movements']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['account-movements'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountMovements<TError = unknown>(
  args: InferRequestType<(typeof client)['account-movements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['account-movements']['$get']>>>
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
        ? getGetAccountMovementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['account-movements']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['account-movements'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountTransactionsKey(
  args: InferRequestType<(typeof client)['account-transactions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['account-transactions', '/account-transactions', keyArgs] as const
}

export function useGetAccountTransactions<TError = unknown>(
  args: InferRequestType<(typeof client)['account-transactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['account-transactions']['$get']>>>
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
        ? getGetAccountTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['account-transactions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['account-transactions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountTransactions<TError = unknown>(
  args: InferRequestType<(typeof client)['account-transactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['account-transactions']['$get']>>>
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
        ? getGetAccountTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['account-transactions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['account-transactions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
