import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1ReportingTransactionsQueryKey(
  args: InferRequestType<typeof client.v1.reporting.transactions.$get>,
) {
  return ['v1', '/v1/reporting/transactions', args] as const
}

export function getV1ReportingTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.transactions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.reporting.transactions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.transactions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReportingTransactionsQueryKey>
  >({
    queryKey: getV1ReportingTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.reporting.transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ReportingTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.transactions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.reporting.transactions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.transactions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ReportingTransactionsQueryKey>
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
      ...getV1ReportingTransactionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ReportingBalancesQueryKey(
  args: InferRequestType<typeof client.v1.reporting.balances.$get>,
) {
  return ['v1', '/v1/reporting/balances', args] as const
}

export function getV1ReportingBalancesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.balances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.reporting.balances.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.balances.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReportingBalancesQueryKey>
  >({
    queryKey: getV1ReportingBalancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.reporting.balances.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ReportingBalances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.balances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.reporting.balances.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.balances.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ReportingBalancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ReportingBalancesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
