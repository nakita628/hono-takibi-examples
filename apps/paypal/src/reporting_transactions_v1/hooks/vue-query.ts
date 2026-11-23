import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1ReportingTransactionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reporting.transactions.$get>>,
) {
  return ['v1', '/v1/reporting/transactions', toValue(args)] as const
}

export function getV1ReportingTransactionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reporting.transactions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ReportingTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.reporting.transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ReportingTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.transactions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reporting.transactions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.reporting.transactions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.reporting.transactions.$get>>
              >
            >
          >,
          ReturnType<typeof getV1ReportingTransactionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.transactions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReportingTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ReportingTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.reporting.transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ReportingBalancesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reporting.balances.$get>>,
) {
  return ['v1', '/v1/reporting/balances', toValue(args)] as const
}

export function getV1ReportingBalancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reporting.balances.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ReportingBalancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.reporting.balances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ReportingBalances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.balances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reporting.balances.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.balances.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.balances.$get>>>
            >
          >,
          ReturnType<typeof getV1ReportingBalancesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.balances.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReportingBalancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ReportingBalancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.reporting.balances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
