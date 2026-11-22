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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['account-balances']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['account-balances', '/account-balances', keyArgs] as const
}

export function getAccountBalancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['account-balances']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountBalancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['account-balances'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountBalances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['account-balances']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['account-balances']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['account-balances']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['account-balances']['$get']>>>
            >
          >,
          ReturnType<typeof getAccountBalancesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['account-balances']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountBalancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountBalancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['account-balances'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountMovementsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['account-movements']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['account-movements', '/account-movements', keyArgs] as const
}

export function getAccountMovementsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['account-movements']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountMovementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['account-movements'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountMovements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['account-movements']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['account-movements']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['account-movements']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['account-movements']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountMovementsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['account-movements']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountMovementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountMovementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['account-movements'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountTransactionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['account-transactions']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['account-transactions', '/account-transactions', keyArgs] as const
}

export function getAccountTransactionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['account-transactions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['account-transactions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['account-transactions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['account-transactions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['account-transactions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['account-transactions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountTransactionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['account-transactions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['account-transactions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
