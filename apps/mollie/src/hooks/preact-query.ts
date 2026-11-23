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

export function getOauth2Key() {
  return ['oauth2'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getPostOauth2TokensMutationKey() {
  return ['oauth2', '/oauth2/tokens', 'POST'] as const
}

export function getPostOauth2TokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.tokens.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth2.tokens.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauth2TokensMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth2.tokens.$post>) {
      return parseResponse(client.oauth2.tokens.$post(args, options))
    },
  })
}

export function usePostOauth2Tokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.tokens.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.oauth2.tokens.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOauth2TokensMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteOauth2TokensMutationKey() {
  return ['oauth2', '/oauth2/tokens', 'DELETE'] as const
}

export function getDeleteOauth2TokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.tokens.$delete>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.oauth2.tokens.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOauth2TokensMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth2.tokens.$delete>) {
      return parseResponse(client.oauth2.tokens.$delete(args, options))
    },
  })
}

export function useDeleteOauth2Tokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.tokens.$delete>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.oauth2.tokens.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOauth2TokensMutationOptions<TError, TOnMutateResult>(
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

export function getV2BalancesQueryKey(args: InferRequestType<typeof client.v2.balances.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/balances', keyArgs] as const
}

export function getV2BalancesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.balances.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.balances.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.balances.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2BalancesQueryKey>
  >({
    queryKey: getV2BalancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.balances.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Balances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.balances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.balances.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.balances.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2BalancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2BalancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Balances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.balances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.balances.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.balances.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2BalancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2BalancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2BalancesBalanceIdQueryKey(
  args: InferRequestType<(typeof client.v2.balances)[':balanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/balances/:balanceId', keyArgs] as const
}

export function getV2BalancesBalanceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.balances)[':balanceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.balances)[':balanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.balances)[':balanceId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BalancesBalanceIdQueryKey>
  >({
    queryKey: getV2BalancesBalanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.balances[':balanceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2BalancesBalanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.balances)[':balanceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.balances)[':balanceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.balances)[':balanceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BalancesBalanceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2BalancesBalanceIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2BalancesBalanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.balances)[':balanceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.balances)[':balanceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.balances)[':balanceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BalancesBalanceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2BalancesBalanceIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2BalancesPrimaryQueryKey(
  args: InferRequestType<typeof client.v2.balances.primary.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/balances/primary', keyArgs] as const
}

export function getV2BalancesPrimaryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.balances.primary.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.balances.primary.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.balances.primary.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2BalancesPrimaryQueryKey>
  >({
    queryKey: getV2BalancesPrimaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.balances.primary.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2BalancesPrimary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.balances.primary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.balances.primary.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.balances.primary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BalancesPrimaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2BalancesPrimaryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2BalancesPrimary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.balances.primary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.balances.primary.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.balances.primary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BalancesPrimaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2BalancesPrimaryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2BalancesBalanceIdReportQueryKey(
  args: InferRequestType<(typeof client.v2.balances)[':balanceId']['report']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/balances/:balanceId/report', keyArgs] as const
}

export function getV2BalancesBalanceIdReportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.balances)[':balanceId']['report']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.balances)[':balanceId']['report']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.balances)[':balanceId']['report']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BalancesBalanceIdReportQueryKey>
  >({
    queryKey: getV2BalancesBalanceIdReportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.balances[':balanceId'].report.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2BalancesBalanceIdReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.balances)[':balanceId']['report']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.balances)[':balanceId']['report']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.balances)[':balanceId']['report']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BalancesBalanceIdReportQueryKey>
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
      ...getV2BalancesBalanceIdReportQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2BalancesBalanceIdReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.balances)[':balanceId']['report']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.balances)[':balanceId']['report']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.balances)[':balanceId']['report']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BalancesBalanceIdReportQueryKey>
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
      ...getV2BalancesBalanceIdReportQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2BalancesBalanceIdTransactionsQueryKey(
  args: InferRequestType<(typeof client.v2.balances)[':balanceId']['transactions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/balances/:balanceId/transactions', keyArgs] as const
}

export function getV2BalancesBalanceIdTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.balances)[':balanceId']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.balances)[':balanceId']['transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.balances)[':balanceId']['transactions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BalancesBalanceIdTransactionsQueryKey>
  >({
    queryKey: getV2BalancesBalanceIdTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.balances[':balanceId'].transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2BalancesBalanceIdTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.balances)[':balanceId']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.balances)[':balanceId']['transactions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.balances)[':balanceId']['transactions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BalancesBalanceIdTransactionsQueryKey>
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
      ...getV2BalancesBalanceIdTransactionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2BalancesBalanceIdTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.balances)[':balanceId']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.balances)[':balanceId']['transactions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.balances)[':balanceId']['transactions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BalancesBalanceIdTransactionsQueryKey>
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
      ...getV2BalancesBalanceIdTransactionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2ReportsMutationKey() {
  return ['v2', '/v2/reports', 'POST'] as const
}

export function getPostV2ReportsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reports.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.reports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ReportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.reports.$post>) {
      return parseResponse(client.v2.reports.$post(args, options))
    },
  })
}

export function usePostV2Reports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reports.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.reports.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2ReportsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2ReportsReportIdQueryKey(
  args: InferRequestType<(typeof client.v2.reports)[':reportId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/reports/:reportId', keyArgs] as const
}

export function getV2ReportsReportIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.reports)[':reportId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.reports)[':reportId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.reports)[':reportId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ReportsReportIdQueryKey>
  >({
    queryKey: getV2ReportsReportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.reports[':reportId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2ReportsReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.reports)[':reportId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.reports)[':reportId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.reports)[':reportId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ReportsReportIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2ReportsReportIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2ReportsReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.reports)[':reportId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.reports)[':reportId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.reports)[':reportId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ReportsReportIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2ReportsReportIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2SettlementsQueryKey(
  args: InferRequestType<typeof client.v2.settlements.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/settlements', keyArgs] as const
}

export function getV2SettlementsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.settlements.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.settlements.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.settlements.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2SettlementsQueryKey>
  >({
    queryKey: getV2SettlementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.settlements.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Settlements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.settlements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.settlements.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.settlements.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2SettlementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2SettlementsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Settlements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.settlements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.settlements.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.settlements.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2SettlementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2SettlementsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2SettlementsSettlementIdQueryKey(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/settlements/:settlementId', keyArgs] as const
}

export function getV2SettlementsSettlementIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SettlementsSettlementIdQueryKey>
  >({
    queryKey: getV2SettlementsSettlementIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.settlements[':settlementId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2SettlementsSettlementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SettlementsSettlementIdQueryKey>
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
      ...getV2SettlementsSettlementIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2SettlementsSettlementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SettlementsSettlementIdQueryKey>
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
      ...getV2SettlementsSettlementIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2SettlementsOpenQueryKey(
  args: InferRequestType<typeof client.v2.settlements.open.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/settlements/open', keyArgs] as const
}

export function getV2SettlementsOpenQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.settlements.open.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.settlements.open.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.settlements.open.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2SettlementsOpenQueryKey>
  >({
    queryKey: getV2SettlementsOpenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.settlements.open.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2SettlementsOpen<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.settlements.open.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.settlements.open.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.settlements.open.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SettlementsOpenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2SettlementsOpenQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2SettlementsOpen<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.settlements.open.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.settlements.open.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.settlements.open.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SettlementsOpenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2SettlementsOpenQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2SettlementsNextQueryKey(
  args: InferRequestType<typeof client.v2.settlements.next.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/settlements/next', keyArgs] as const
}

export function getV2SettlementsNextQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.settlements.next.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.settlements.next.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.settlements.next.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2SettlementsNextQueryKey>
  >({
    queryKey: getV2SettlementsNextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.settlements.next.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2SettlementsNext<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.settlements.next.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.settlements.next.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.settlements.next.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SettlementsNextQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2SettlementsNextQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2SettlementsNext<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.settlements.next.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.settlements.next.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.settlements.next.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SettlementsNextQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2SettlementsNextQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2SettlementsSettlementIdPaymentsQueryKey(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['payments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/settlements/:settlementId/payments', keyArgs] as const
}

export function getV2SettlementsSettlementIdPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['payments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['payments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['payments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SettlementsSettlementIdPaymentsQueryKey>
  >({
    queryKey: getV2SettlementsSettlementIdPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.settlements[':settlementId'].payments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2SettlementsSettlementIdPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['payments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['payments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.settlements)[':settlementId']['payments']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SettlementsSettlementIdPaymentsQueryKey>
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
      ...getV2SettlementsSettlementIdPaymentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2SettlementsSettlementIdPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['payments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['payments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.settlements)[':settlementId']['payments']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SettlementsSettlementIdPaymentsQueryKey>
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
      ...getV2SettlementsSettlementIdPaymentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2SettlementsSettlementIdCapturesQueryKey(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['captures']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/settlements/:settlementId/captures', keyArgs] as const
}

export function getV2SettlementsSettlementIdCapturesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['captures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['captures']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['captures']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SettlementsSettlementIdCapturesQueryKey>
  >({
    queryKey: getV2SettlementsSettlementIdCapturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.settlements[':settlementId'].captures.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2SettlementsSettlementIdCaptures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['captures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['captures']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.settlements)[':settlementId']['captures']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SettlementsSettlementIdCapturesQueryKey>
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
      ...getV2SettlementsSettlementIdCapturesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2SettlementsSettlementIdCaptures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['captures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['captures']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.settlements)[':settlementId']['captures']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SettlementsSettlementIdCapturesQueryKey>
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
      ...getV2SettlementsSettlementIdCapturesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2SettlementsSettlementIdRefundsQueryKey(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['refunds']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/settlements/:settlementId/refunds', keyArgs] as const
}

export function getV2SettlementsSettlementIdRefundsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['refunds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['refunds']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['refunds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SettlementsSettlementIdRefundsQueryKey>
  >({
    queryKey: getV2SettlementsSettlementIdRefundsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.settlements[':settlementId'].refunds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2SettlementsSettlementIdRefunds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['refunds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['refunds']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.settlements)[':settlementId']['refunds']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SettlementsSettlementIdRefundsQueryKey>
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
      ...getV2SettlementsSettlementIdRefundsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2SettlementsSettlementIdRefunds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['refunds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['refunds']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.settlements)[':settlementId']['refunds']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SettlementsSettlementIdRefundsQueryKey>
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
      ...getV2SettlementsSettlementIdRefundsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2SettlementsSettlementIdChargebacksQueryKey(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['chargebacks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/settlements/:settlementId/chargebacks', keyArgs] as const
}

export function getV2SettlementsSettlementIdChargebacksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['chargebacks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['chargebacks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.settlements)[':settlementId']['chargebacks']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SettlementsSettlementIdChargebacksQueryKey>
  >({
    queryKey: getV2SettlementsSettlementIdChargebacksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.settlements[':settlementId'].chargebacks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2SettlementsSettlementIdChargebacks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['chargebacks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['chargebacks']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.settlements)[':settlementId']['chargebacks']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SettlementsSettlementIdChargebacksQueryKey>
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
      ...getV2SettlementsSettlementIdChargebacksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2SettlementsSettlementIdChargebacks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['chargebacks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['chargebacks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.settlements)[':settlementId']['chargebacks']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SettlementsSettlementIdChargebacksQueryKey>
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
      ...getV2SettlementsSettlementIdChargebacksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2InvoicesQueryKey(args: InferRequestType<typeof client.v2.invoices.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/invoices', keyArgs] as const
}

export function getV2InvoicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.invoices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2InvoicesQueryKey>
  >({
    queryKey: getV2InvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.invoices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Invoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.invoices.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2InvoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2InvoicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Invoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.invoices.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2InvoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2InvoicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2InvoicesInvoiceIdQueryKey(
  args: InferRequestType<(typeof client.v2.invoices)[':invoiceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/invoices/:invoiceId', keyArgs] as const
}

export function getV2InvoicesInvoiceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.invoices)[':invoiceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.invoices)[':invoiceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.invoices)[':invoiceId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2InvoicesInvoiceIdQueryKey>
  >({
    queryKey: getV2InvoicesInvoiceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.invoices[':invoiceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2InvoicesInvoiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.invoices)[':invoiceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.invoices)[':invoiceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.invoices)[':invoiceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2InvoicesInvoiceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2InvoicesInvoiceIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2InvoicesInvoiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.invoices)[':invoiceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.invoices)[':invoiceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.invoices)[':invoiceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2InvoicesInvoiceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2InvoicesInvoiceIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2PermissionsQueryKey(
  args: InferRequestType<typeof client.v2.permissions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/permissions', keyArgs] as const
}

export function getV2PermissionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.permissions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.permissions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.permissions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2PermissionsQueryKey>
  >({
    queryKey: getV2PermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.permissions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Permissions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.permissions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.permissions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.permissions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2PermissionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2PermissionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Permissions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.permissions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.permissions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.permissions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2PermissionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2PermissionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2PermissionsPermissionIdQueryKey(
  args: InferRequestType<(typeof client.v2.permissions)[':permissionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/permissions/:permissionId', keyArgs] as const
}

export function getV2PermissionsPermissionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.permissions)[':permissionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.permissions)[':permissionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.permissions)[':permissionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PermissionsPermissionIdQueryKey>
  >({
    queryKey: getV2PermissionsPermissionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.permissions[':permissionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2PermissionsPermissionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.permissions)[':permissionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.permissions)[':permissionId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.permissions)[':permissionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PermissionsPermissionIdQueryKey>
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
      ...getV2PermissionsPermissionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2PermissionsPermissionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.permissions)[':permissionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.permissions)[':permissionId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.permissions)[':permissionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PermissionsPermissionIdQueryKey>
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
      ...getV2PermissionsPermissionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2OrganizationsOrganizationIdQueryKey(
  args: InferRequestType<(typeof client.v2.organizations)[':organizationId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/organizations/:organizationId', keyArgs] as const
}

export function getV2OrganizationsOrganizationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.organizations)[':organizationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.organizations)[':organizationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.organizations)[':organizationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2OrganizationsOrganizationIdQueryKey>
  >({
    queryKey: getV2OrganizationsOrganizationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.organizations[':organizationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2OrganizationsOrganizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.organizations)[':organizationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.organizations)[':organizationId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.organizations)[':organizationId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2OrganizationsOrganizationIdQueryKey>
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
      ...getV2OrganizationsOrganizationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2OrganizationsOrganizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.organizations)[':organizationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.organizations)[':organizationId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.organizations)[':organizationId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2OrganizationsOrganizationIdQueryKey>
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
      ...getV2OrganizationsOrganizationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2OrganizationsMeQueryKey(
  args: InferRequestType<typeof client.v2.organizations.me.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/organizations/me', keyArgs] as const
}

export function getV2OrganizationsMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.organizations.me.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.organizations.me.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.organizations.me.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2OrganizationsMeQueryKey>
  >({
    queryKey: getV2OrganizationsMeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.organizations.me.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2OrganizationsMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.organizations.me.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.organizations.me.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.organizations.me.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2OrganizationsMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2OrganizationsMeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2OrganizationsMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.organizations.me.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.organizations.me.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.organizations.me.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2OrganizationsMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2OrganizationsMeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2OrganizationsMePartnerQueryKey(
  args: InferRequestType<typeof client.v2.organizations.me.partner.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/organizations/me/partner', keyArgs] as const
}

export function getV2OrganizationsMePartnerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.organizations.me.partner.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.organizations.me.partner.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.organizations.me.partner.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2OrganizationsMePartnerQueryKey>
  >({
    queryKey: getV2OrganizationsMePartnerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.organizations.me.partner.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2OrganizationsMePartner<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.organizations.me.partner.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.organizations.me.partner.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.organizations.me.partner.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2OrganizationsMePartnerQueryKey>
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
      ...getV2OrganizationsMePartnerQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2OrganizationsMePartner<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.organizations.me.partner.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.organizations.me.partner.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.organizations.me.partner.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2OrganizationsMePartnerQueryKey>
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
      ...getV2OrganizationsMePartnerQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2ProfilesQueryKey(args: InferRequestType<typeof client.v2.profiles.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/profiles', keyArgs] as const
}

export function getV2ProfilesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.profiles.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.profiles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.profiles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2ProfilesQueryKey>
  >({
    queryKey: getV2ProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.profiles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Profiles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.profiles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.profiles.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.profiles.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2ProfilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2ProfilesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Profiles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.profiles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.profiles.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.profiles.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2ProfilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2ProfilesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2ProfilesMutationKey() {
  return ['v2', '/v2/profiles', 'POST'] as const
}

export function getPostV2ProfilesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.profiles.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.profiles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ProfilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.profiles.$post>) {
      return parseResponse(client.v2.profiles.$post(args, options))
    },
  })
}

export function usePostV2Profiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.profiles.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.profiles.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2ProfilesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2ProfilesProfileIdQueryKey(
  args: InferRequestType<(typeof client.v2.profiles)[':profileId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/profiles/:profileId', keyArgs] as const
}

export function getV2ProfilesProfileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.profiles)[':profileId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.profiles)[':profileId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.profiles)[':profileId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProfilesProfileIdQueryKey>
  >({
    queryKey: getV2ProfilesProfileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.profiles[':profileId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2ProfilesProfileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.profiles)[':profileId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.profiles)[':profileId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.profiles)[':profileId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ProfilesProfileIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2ProfilesProfileIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2ProfilesProfileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.profiles)[':profileId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.profiles)[':profileId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.profiles)[':profileId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ProfilesProfileIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2ProfilesProfileIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV2ProfilesProfileIdMutationKey() {
  return ['v2', '/v2/profiles/:profileId', 'DELETE'] as const
}

export function getDeleteV2ProfilesProfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.profiles)[':profileId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.profiles)[':profileId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ProfilesProfileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.profiles)[':profileId']['$delete']>) {
      return parseResponse(client.v2.profiles[':profileId'].$delete(args, options))
    },
  })
}

export function useDeleteV2ProfilesProfileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.profiles)[':profileId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.profiles)[':profileId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2ProfilesProfileIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV2ProfilesProfileIdMutationKey() {
  return ['v2', '/v2/profiles/:profileId', 'PATCH'] as const
}

export function getPatchV2ProfilesProfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.profiles)[':profileId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.profiles)[':profileId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2ProfilesProfileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.profiles)[':profileId']['$patch']>) {
      return parseResponse(client.v2.profiles[':profileId'].$patch(args, options))
    },
  })
}

export function usePatchV2ProfilesProfileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.profiles)[':profileId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.profiles)[':profileId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV2ProfilesProfileIdMutationOptions<TError, TOnMutateResult>(
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

export function getV2ProfilesMeQueryKey(args: InferRequestType<typeof client.v2.profiles.me.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/profiles/me', keyArgs] as const
}

export function getV2ProfilesMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.profiles.me.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.profiles.me.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.profiles.me.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProfilesMeQueryKey>
  >({
    queryKey: getV2ProfilesMeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.profiles.me.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2ProfilesMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.profiles.me.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.profiles.me.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.profiles.me.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2ProfilesMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2ProfilesMeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2ProfilesMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.profiles.me.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.profiles.me.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.profiles.me.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2ProfilesMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2ProfilesMeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2OnboardingMeQueryKey(
  args: InferRequestType<typeof client.v2.onboarding.me.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/onboarding/me', keyArgs] as const
}

export function getV2OnboardingMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.onboarding.me.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.onboarding.me.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.onboarding.me.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2OnboardingMeQueryKey>
  >({
    queryKey: getV2OnboardingMeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.onboarding.me.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2OnboardingMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.onboarding.me.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.onboarding.me.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.onboarding.me.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2OnboardingMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2OnboardingMeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2OnboardingMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.onboarding.me.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.onboarding.me.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.onboarding.me.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2OnboardingMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2OnboardingMeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2OnboardingMeMutationKey() {
  return ['v2', '/v2/onboarding/me', 'POST'] as const
}

export function getPostV2OnboardingMeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.onboarding.me.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v2.onboarding.me.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2OnboardingMeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.onboarding.me.$post>) {
      return parseResponse(client.v2.onboarding.me.$post(args, options))
    },
  })
}

export function usePostV2OnboardingMe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.onboarding.me.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v2.onboarding.me.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2OnboardingMeMutationOptions<TError, TOnMutateResult>(
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

export function getV2CapabilitiesQueryKey(
  args: InferRequestType<typeof client.v2.capabilities.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/capabilities', keyArgs] as const
}

export function getV2CapabilitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.capabilities.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.capabilities.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.capabilities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2CapabilitiesQueryKey>
  >({
    queryKey: getV2CapabilitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.capabilities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Capabilities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.capabilities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.capabilities.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.capabilities.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2CapabilitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2CapabilitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Capabilities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.capabilities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.capabilities.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.capabilities.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2CapabilitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2CapabilitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2ClientsQueryKey(args: InferRequestType<typeof client.v2.clients.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/clients', keyArgs] as const
}

export function getV2ClientsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clients.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.clients.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clients.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2ClientsQueryKey>
  >({
    queryKey: getV2ClientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.clients.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Clients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.clients.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clients.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2ClientsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2ClientsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Clients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.clients.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clients.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2ClientsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2ClientsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2ClientsOrganizationIdQueryKey(
  args: InferRequestType<(typeof client.v2.clients)[':organizationId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/clients/:organizationId', keyArgs] as const
}

export function getV2ClientsOrganizationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.clients)[':organizationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.clients)[':organizationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.clients)[':organizationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ClientsOrganizationIdQueryKey>
  >({
    queryKey: getV2ClientsOrganizationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.clients[':organizationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2ClientsOrganizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.clients)[':organizationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.clients)[':organizationId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.clients)[':organizationId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ClientsOrganizationIdQueryKey>
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
      ...getV2ClientsOrganizationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2ClientsOrganizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.clients)[':organizationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.clients)[':organizationId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.clients)[':organizationId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ClientsOrganizationIdQueryKey>
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
      ...getV2ClientsOrganizationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2ClientLinksMutationKey() {
  return ['v2', '/v2/client-links', 'POST'] as const
}

export function getPostV2ClientLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['client-links']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['client-links']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ClientLinksMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['client-links']['$post']>) {
      return parseResponse(client.v2['client-links'].$post(args, options))
    },
  })
}

export function usePostV2ClientLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['client-links']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['client-links']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2ClientLinksMutationOptions<TError, TOnMutateResult>(
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

export function getV2WebhooksQueryKey(args: InferRequestType<typeof client.v2.webhooks.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/webhooks', keyArgs] as const
}

export function getV2WebhooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.webhooks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2WebhooksQueryKey>
  >({
    queryKey: getV2WebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.webhooks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Webhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.webhooks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2WebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2WebhooksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Webhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.webhooks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2WebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2WebhooksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2WebhooksMutationKey() {
  return ['v2', '/v2/webhooks', 'POST'] as const
}

export function getPostV2WebhooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2WebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.webhooks.$post>) {
      return parseResponse(client.v2.webhooks.$post(args, options))
    },
  })
}

export function usePostV2Webhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.webhooks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2WebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2WebhooksWebhookIdQueryKey(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/webhooks/:webhookId', keyArgs] as const
}

export function getV2WebhooksWebhookIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2WebhooksWebhookIdQueryKey>
  >({
    queryKey: getV2WebhooksWebhookIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.webhooks[':webhookId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2WebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2WebhooksWebhookIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2WebhooksWebhookIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2WebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2WebhooksWebhookIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2WebhooksWebhookIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV2WebhooksWebhookIdMutationKey() {
  return ['v2', '/v2/webhooks/:webhookId', 'DELETE'] as const
}

export function getDeleteV2WebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2WebhooksWebhookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$delete']>) {
      return parseResponse(client.v2.webhooks[':webhookId'].$delete(args, options))
    },
  })
}

export function useDeleteV2WebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2WebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV2WebhooksWebhookIdMutationKey() {
  return ['v2', '/v2/webhooks/:webhookId', 'PATCH'] as const
}

export function getPatchV2WebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2WebhooksWebhookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$patch']>) {
      return parseResponse(client.v2.webhooks[':webhookId'].$patch(args, options))
    },
  })
}

export function usePatchV2WebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV2WebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2WebhooksWebhookIdPingMutationKey() {
  return ['v2', '/v2/webhooks/:webhookId/ping', 'POST'] as const
}

export function getPostV2WebhooksWebhookIdPingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['ping']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.webhooks)[':webhookId']['ping']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2WebhooksWebhookIdPingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['ping']['$post']>,
    ) {
      return parseResponse(client.v2.webhooks[':webhookId'].ping.$post(args, options))
    },
  })
}

export function usePostV2WebhooksWebhookIdPing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['ping']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.webhooks)[':webhookId']['ping']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2WebhooksWebhookIdPingMutationOptions<TError, TOnMutateResult>(
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

export function getV2EventsWebhookEventIdQueryKey(
  args: InferRequestType<(typeof client.v2.events)[':webhookEventId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/events/:webhookEventId', keyArgs] as const
}

export function getV2EventsWebhookEventIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.events)[':webhookEventId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.events)[':webhookEventId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.events)[':webhookEventId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EventsWebhookEventIdQueryKey>
  >({
    queryKey: getV2EventsWebhookEventIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.events[':webhookEventId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2EventsWebhookEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.events)[':webhookEventId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.events)[':webhookEventId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.events)[':webhookEventId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EventsWebhookEventIdQueryKey>
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
      ...getV2EventsWebhookEventIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2EventsWebhookEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.events)[':webhookEventId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.events)[':webhookEventId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.events)[':webhookEventId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EventsWebhookEventIdQueryKey>
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
      ...getV2EventsWebhookEventIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2ConnectBalanceTransfersQueryKey(
  args: InferRequestType<(typeof client.v2.connect)['balance-transfers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/connect/balance-transfers', keyArgs] as const
}

export function getV2ConnectBalanceTransfersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.connect)['balance-transfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.connect)['balance-transfers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.connect)['balance-transfers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ConnectBalanceTransfersQueryKey>
  >({
    queryKey: getV2ConnectBalanceTransfersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.connect['balance-transfers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2ConnectBalanceTransfers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.connect)['balance-transfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.connect)['balance-transfers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.connect)['balance-transfers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ConnectBalanceTransfersQueryKey>
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
      ...getV2ConnectBalanceTransfersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2ConnectBalanceTransfers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.connect)['balance-transfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.connect)['balance-transfers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.connect)['balance-transfers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ConnectBalanceTransfersQueryKey>
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
      ...getV2ConnectBalanceTransfersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2ConnectBalanceTransfersMutationKey() {
  return ['v2', '/v2/connect/balance-transfers', 'POST'] as const
}

export function getPostV2ConnectBalanceTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.connect)['balance-transfers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.connect)['balance-transfers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ConnectBalanceTransfersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.connect)['balance-transfers']['$post']>,
    ) {
      return parseResponse(client.v2.connect['balance-transfers'].$post(args, options))
    },
  })
}

export function usePostV2ConnectBalanceTransfers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.connect)['balance-transfers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.connect)['balance-transfers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2ConnectBalanceTransfersMutationOptions<TError, TOnMutateResult>(
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

export function getV2ConnectBalanceTransfersBalanceTransferIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.connect)['balance-transfers'][':balanceTransferId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/connect/balance-transfers/:balanceTransferId', keyArgs] as const
}

export function getV2ConnectBalanceTransfersBalanceTransferIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.connect)['balance-transfers'][':balanceTransferId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.connect)['balance-transfers'][':balanceTransferId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.connect)['balance-transfers'][':balanceTransferId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ConnectBalanceTransfersBalanceTransferIdQueryKey>
  >({
    queryKey: getV2ConnectBalanceTransfersBalanceTransferIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.connect['balance-transfers'][':balanceTransferId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2ConnectBalanceTransfersBalanceTransferId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.connect)['balance-transfers'][':balanceTransferId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.connect)['balance-transfers'][':balanceTransferId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.connect)['balance-transfers'][':balanceTransferId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ConnectBalanceTransfersBalanceTransferIdQueryKey>
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
      ...getV2ConnectBalanceTransfersBalanceTransferIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2ConnectBalanceTransfersBalanceTransferId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.connect)['balance-transfers'][':balanceTransferId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.connect)['balance-transfers'][':balanceTransferId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.connect)['balance-transfers'][':balanceTransferId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ConnectBalanceTransfersBalanceTransferIdQueryKey>
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
      ...getV2ConnectBalanceTransfersBalanceTransferIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2PaymentsQueryKey(args: InferRequestType<typeof client.v2.payments.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payments', keyArgs] as const
}

export function getV2PaymentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.payments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2PaymentsQueryKey>
  >({
    queryKey: getV2PaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.payments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Payments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.payments.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2PaymentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Payments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.payments.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2PaymentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2PaymentsMutationKey() {
  return ['v2', '/v2/payments', 'POST'] as const
}

export function getPostV2PaymentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.payments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2PaymentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.payments.$post>) {
      return parseResponse(client.v2.payments.$post(args, options))
    },
  })
}

export function usePostV2Payments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.payments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2PaymentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2PaymentsPaymentIdQueryKey(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payments/:paymentId', keyArgs] as const
}

export function getV2PaymentsPaymentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentsPaymentIdQueryKey>
  >({
    queryKey: getV2PaymentsPaymentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.payments[':paymentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2PaymentsPaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentsPaymentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2PaymentsPaymentIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2PaymentsPaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentsPaymentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2PaymentsPaymentIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV2PaymentsPaymentIdMutationKey() {
  return ['v2', '/v2/payments/:paymentId', 'DELETE'] as const
}

export function getDeleteV2PaymentsPaymentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.payments)[':paymentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2PaymentsPaymentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.payments)[':paymentId']['$delete']>) {
      return parseResponse(client.v2.payments[':paymentId'].$delete(args, options))
    },
  })
}

export function useDeleteV2PaymentsPaymentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.payments)[':paymentId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2PaymentsPaymentIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV2PaymentsPaymentIdMutationKey() {
  return ['v2', '/v2/payments/:paymentId', 'PATCH'] as const
}

export function getPatchV2PaymentsPaymentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.payments)[':paymentId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2PaymentsPaymentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.payments)[':paymentId']['$patch']>) {
      return parseResponse(client.v2.payments[':paymentId'].$patch(args, options))
    },
  })
}

export function usePatchV2PaymentsPaymentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.payments)[':paymentId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV2PaymentsPaymentIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2PaymentsPaymentIdReleaseAuthorizationMutationKey() {
  return ['v2', '/v2/payments/:paymentId/release-authorization', 'POST'] as const
}

export function getPostV2PaymentsPaymentIdReleaseAuthorizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.payments)[':paymentId']['release-authorization']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.payments)[':paymentId']['release-authorization']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2PaymentsPaymentIdReleaseAuthorizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.payments)[':paymentId']['release-authorization']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.payments[':paymentId']['release-authorization'].$post(args, options),
      )
    },
  })
}

export function usePostV2PaymentsPaymentIdReleaseAuthorization<
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
                  (typeof client.v2.payments)[':paymentId']['release-authorization']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.payments)[':paymentId']['release-authorization']['$post']
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
  const mutationDefaults = getPostV2PaymentsPaymentIdReleaseAuthorizationMutationOptions<
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

export function getV2UnmatchedCreditTransfersQueryKey(
  args: InferRequestType<(typeof client.v2)['unmatched-credit-transfers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/unmatched-credit-transfers', keyArgs] as const
}

export function getV2UnmatchedCreditTransfersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['unmatched-credit-transfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['unmatched-credit-transfers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['unmatched-credit-transfers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UnmatchedCreditTransfersQueryKey>
  >({
    queryKey: getV2UnmatchedCreditTransfersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['unmatched-credit-transfers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UnmatchedCreditTransfers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['unmatched-credit-transfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['unmatched-credit-transfers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['unmatched-credit-transfers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UnmatchedCreditTransfersQueryKey>
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
      ...getV2UnmatchedCreditTransfersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UnmatchedCreditTransfers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['unmatched-credit-transfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['unmatched-credit-transfers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['unmatched-credit-transfers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UnmatchedCreditTransfersQueryKey>
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
      ...getV2UnmatchedCreditTransfersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2UnmatchedCreditTransfersUnmatchedCreditTransferIdQueryKey(
  args: InferRequestType<
    (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/unmatched-credit-transfers/:unmatchedCreditTransferId', keyArgs] as const
}

export function getV2UnmatchedCreditTransfersUnmatchedCreditTransferIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UnmatchedCreditTransfersUnmatchedCreditTransferIdQueryKey>
  >({
    queryKey: getV2UnmatchedCreditTransfersUnmatchedCreditTransferIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['unmatched-credit-transfers'][':unmatchedCreditTransferId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2UnmatchedCreditTransfersUnmatchedCreditTransferId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UnmatchedCreditTransfersUnmatchedCreditTransferIdQueryKey>
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
      ...getV2UnmatchedCreditTransfersUnmatchedCreditTransferIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2UnmatchedCreditTransfersUnmatchedCreditTransferId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UnmatchedCreditTransfersUnmatchedCreditTransferIdQueryKey>
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
      ...getV2UnmatchedCreditTransfersUnmatchedCreditTransferIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2UnmatchedCreditTransfersUnmatchedCreditTransferIdMatchMutationKey() {
  return ['v2', '/v2/unmatched-credit-transfers/:unmatchedCreditTransferId/match', 'POST'] as const
}

export function getPostV2UnmatchedCreditTransfersUnmatchedCreditTransferIdMatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['match']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['match']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UnmatchedCreditTransfersUnmatchedCreditTransferIdMatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['match']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['unmatched-credit-transfers'][':unmatchedCreditTransferId'].match.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2UnmatchedCreditTransfersUnmatchedCreditTransferIdMatch<
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
                  (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['match']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['match']['$post']
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
    getPostV2UnmatchedCreditTransfersUnmatchedCreditTransferIdMatchMutationOptions<
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

export function getPostV2UnmatchedCreditTransfersUnmatchedCreditTransferIdReturnMutationKey() {
  return ['v2', '/v2/unmatched-credit-transfers/:unmatchedCreditTransferId/return', 'POST'] as const
}

export function getPostV2UnmatchedCreditTransfersUnmatchedCreditTransferIdReturnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['return']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['return']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2UnmatchedCreditTransfersUnmatchedCreditTransferIdReturnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['return']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['unmatched-credit-transfers'][':unmatchedCreditTransferId'].return.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2UnmatchedCreditTransfersUnmatchedCreditTransferIdReturn<
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
                  (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['return']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['return']['$post']
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
    getPostV2UnmatchedCreditTransfersUnmatchedCreditTransferIdReturnMutationOptions<
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

export function getPostV2SessionsMutationKey() {
  return ['v2', '/v2/sessions', 'POST'] as const
}

export function getPostV2SessionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sessions.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.sessions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SessionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.sessions.$post>) {
      return parseResponse(client.v2.sessions.$post(args, options))
    },
  })
}

export function usePostV2Sessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sessions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.sessions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2SessionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2SessionsSessionIdQueryKey(
  args: InferRequestType<(typeof client.v2.sessions)[':sessionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/sessions/:sessionId', keyArgs] as const
}

export function getV2SessionsSessionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.sessions)[':sessionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.sessions)[':sessionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.sessions)[':sessionId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SessionsSessionIdQueryKey>
  >({
    queryKey: getV2SessionsSessionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.sessions[':sessionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2SessionsSessionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.sessions)[':sessionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.sessions)[':sessionId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.sessions)[':sessionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SessionsSessionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2SessionsSessionIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2SessionsSessionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.sessions)[':sessionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.sessions)[':sessionId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.sessions)[':sessionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SessionsSessionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2SessionsSessionIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2MethodsQueryKey(args: InferRequestType<typeof client.v2.methods.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/methods', keyArgs] as const
}

export function getV2MethodsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.methods.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.methods.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.methods.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2MethodsQueryKey>
  >({
    queryKey: getV2MethodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.methods.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Methods<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.methods.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.methods.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.methods.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2MethodsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2MethodsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Methods<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.methods.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.methods.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.methods.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2MethodsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2MethodsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2MethodsAllQueryKey(args: InferRequestType<typeof client.v2.methods.all.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/methods/all', keyArgs] as const
}

export function getV2MethodsAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.methods.all.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.methods.all.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.methods.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2MethodsAllQueryKey>
  >({
    queryKey: getV2MethodsAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.methods.all.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2MethodsAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.methods.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.methods.all.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.methods.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2MethodsAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2MethodsAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2MethodsAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.methods.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.methods.all.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.methods.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2MethodsAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2MethodsAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2MethodsMethodIdQueryKey(
  args: InferRequestType<(typeof client.v2.methods)[':methodId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/methods/:methodId', keyArgs] as const
}

export function getV2MethodsMethodIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.methods)[':methodId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.methods)[':methodId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.methods)[':methodId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MethodsMethodIdQueryKey>
  >({
    queryKey: getV2MethodsMethodIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.methods[':methodId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2MethodsMethodId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.methods)[':methodId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.methods)[':methodId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.methods)[':methodId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2MethodsMethodIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2MethodsMethodIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2MethodsMethodId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.methods)[':methodId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.methods)[':methodId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.methods)[':methodId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2MethodsMethodIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2MethodsMethodIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2ProfilesProfileIdMethodsMethodIdMutationKey() {
  return ['v2', '/v2/profiles/:profileId/methods/:methodId', 'POST'] as const
}

export function getPostV2ProfilesProfileIdMethodsMethodIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.profiles)[':profileId']['methods'][':methodId']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.profiles)[':profileId']['methods'][':methodId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ProfilesProfileIdMethodsMethodIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.profiles)[':profileId']['methods'][':methodId']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.profiles[':profileId'].methods[':methodId'].$post(args, options),
      )
    },
  })
}

export function usePostV2ProfilesProfileIdMethodsMethodId<
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
                  (typeof client.v2.profiles)[':profileId']['methods'][':methodId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.profiles)[':profileId']['methods'][':methodId']['$post']
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
  const mutationDefaults = getPostV2ProfilesProfileIdMethodsMethodIdMutationOptions<
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

export function getDeleteV2ProfilesProfileIdMethodsMethodIdMutationKey() {
  return ['v2', '/v2/profiles/:profileId/methods/:methodId', 'DELETE'] as const
}

export function getDeleteV2ProfilesProfileIdMethodsMethodIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.profiles)[':profileId']['methods'][':methodId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.profiles)[':profileId']['methods'][':methodId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ProfilesProfileIdMethodsMethodIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.profiles)[':profileId']['methods'][':methodId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.profiles[':profileId'].methods[':methodId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2ProfilesProfileIdMethodsMethodId<
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
                    (typeof client.v2.profiles)[':profileId']['methods'][':methodId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.profiles)[':profileId']['methods'][':methodId']['$delete']
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
  const mutationDefaults = getDeleteV2ProfilesProfileIdMethodsMethodIdMutationOptions<
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

export function getPostV2ProfilesProfileIdMethodsMethodIdIssuersIssuerIdMutationKey() {
  return ['v2', '/v2/profiles/:profileId/methods/:methodId/issuers/:issuerId', 'POST'] as const
}

export function getPostV2ProfilesProfileIdMethodsMethodIdIssuersIssuerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.profiles)[':profileId']['methods'][':methodId']['issuers'][':issuerId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.profiles)[':profileId']['methods'][':methodId']['issuers'][':issuerId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2ProfilesProfileIdMethodsMethodIdIssuersIssuerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.profiles)[':profileId']['methods'][':methodId']['issuers'][':issuerId']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.profiles[':profileId'].methods[':methodId'].issuers[':issuerId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2ProfilesProfileIdMethodsMethodIdIssuersIssuerId<
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
                  (typeof client.v2.profiles)[':profileId']['methods'][':methodId']['issuers'][':issuerId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.profiles)[':profileId']['methods'][':methodId']['issuers'][':issuerId']['$post']
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
  const mutationDefaults = getPostV2ProfilesProfileIdMethodsMethodIdIssuersIssuerIdMutationOptions<
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

export function getDeleteV2ProfilesProfileIdMethodsMethodIdIssuersIssuerIdMutationKey() {
  return ['v2', '/v2/profiles/:profileId/methods/:methodId/issuers/:issuerId', 'DELETE'] as const
}

export function getDeleteV2ProfilesProfileIdMethodsMethodIdIssuersIssuerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.profiles)[':profileId']['methods'][':methodId']['issuers'][':issuerId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.profiles)[':profileId']['methods'][':methodId']['issuers'][':issuerId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ProfilesProfileIdMethodsMethodIdIssuersIssuerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.profiles)[':profileId']['methods'][':methodId']['issuers'][':issuerId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.profiles[':profileId'].methods[':methodId'].issuers[':issuerId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV2ProfilesProfileIdMethodsMethodIdIssuersIssuerId<
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
                    (typeof client.v2.profiles)[':profileId']['methods'][':methodId']['issuers'][':issuerId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.profiles)[':profileId']['methods'][':methodId']['issuers'][':issuerId']['$delete']
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
    getDeleteV2ProfilesProfileIdMethodsMethodIdIssuersIssuerIdMutationOptions<
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

export function getV2PaymentsPaymentIdRefundsQueryKey(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['refunds']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payments/:paymentId/refunds', keyArgs] as const
}

export function getV2PaymentsPaymentIdRefundsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['refunds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['refunds']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['refunds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentsPaymentIdRefundsQueryKey>
  >({
    queryKey: getV2PaymentsPaymentIdRefundsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.payments[':paymentId'].refunds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2PaymentsPaymentIdRefunds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['refunds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['refunds']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['refunds']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentsPaymentIdRefundsQueryKey>
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
      ...getV2PaymentsPaymentIdRefundsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2PaymentsPaymentIdRefunds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['refunds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['refunds']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['refunds']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentsPaymentIdRefundsQueryKey>
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
      ...getV2PaymentsPaymentIdRefundsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2PaymentsPaymentIdRefundsMutationKey() {
  return ['v2', '/v2/payments/:paymentId/refunds', 'POST'] as const
}

export function getPostV2PaymentsPaymentIdRefundsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['refunds']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.payments)[':paymentId']['refunds']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2PaymentsPaymentIdRefundsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.payments)[':paymentId']['refunds']['$post']>,
    ) {
      return parseResponse(client.v2.payments[':paymentId'].refunds.$post(args, options))
    },
  })
}

export function usePostV2PaymentsPaymentIdRefunds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['refunds']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.payments)[':paymentId']['refunds']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2PaymentsPaymentIdRefundsMutationOptions<
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

export function getV2PaymentsPaymentIdRefundsRefundIdQueryKey(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['refunds'][':refundId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payments/:paymentId/refunds/:refundId', keyArgs] as const
}

export function getV2PaymentsPaymentIdRefundsRefundIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.payments)[':paymentId']['refunds'][':refundId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['refunds'][':refundId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.payments)[':paymentId']['refunds'][':refundId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentsPaymentIdRefundsRefundIdQueryKey>
  >({
    queryKey: getV2PaymentsPaymentIdRefundsRefundIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.payments[':paymentId'].refunds[':refundId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2PaymentsPaymentIdRefundsRefundId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.payments)[':paymentId']['refunds'][':refundId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['refunds'][':refundId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.payments)[':paymentId']['refunds'][':refundId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentsPaymentIdRefundsRefundIdQueryKey>
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
      ...getV2PaymentsPaymentIdRefundsRefundIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2PaymentsPaymentIdRefundsRefundId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.payments)[':paymentId']['refunds'][':refundId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['refunds'][':refundId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.payments)[':paymentId']['refunds'][':refundId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentsPaymentIdRefundsRefundIdQueryKey>
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
      ...getV2PaymentsPaymentIdRefundsRefundIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2PaymentsPaymentIdRefundsRefundIdMutationKey() {
  return ['v2', '/v2/payments/:paymentId/refunds/:refundId', 'DELETE'] as const
}

export function getDeleteV2PaymentsPaymentIdRefundsRefundIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.payments)[':paymentId']['refunds'][':refundId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.payments)[':paymentId']['refunds'][':refundId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2PaymentsPaymentIdRefundsRefundIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.payments)[':paymentId']['refunds'][':refundId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.payments[':paymentId'].refunds[':refundId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2PaymentsPaymentIdRefundsRefundId<
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
                    (typeof client.v2.payments)[':paymentId']['refunds'][':refundId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.payments)[':paymentId']['refunds'][':refundId']['$delete']
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
  const mutationDefaults = getDeleteV2PaymentsPaymentIdRefundsRefundIdMutationOptions<
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

export function getV2RefundsQueryKey(args: InferRequestType<typeof client.v2.refunds.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/refunds', keyArgs] as const
}

export function getV2RefundsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.refunds.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.refunds.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.refunds.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2RefundsQueryKey>
  >({
    queryKey: getV2RefundsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.refunds.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Refunds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.refunds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.refunds.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.refunds.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2RefundsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2RefundsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Refunds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.refunds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.refunds.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.refunds.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2RefundsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2RefundsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2PaymentsPaymentIdChargebacksQueryKey(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['chargebacks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payments/:paymentId/chargebacks', keyArgs] as const
}

export function getV2PaymentsPaymentIdChargebacksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['chargebacks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['chargebacks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['chargebacks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentsPaymentIdChargebacksQueryKey>
  >({
    queryKey: getV2PaymentsPaymentIdChargebacksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.payments[':paymentId'].chargebacks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2PaymentsPaymentIdChargebacks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['chargebacks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['chargebacks']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['chargebacks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentsPaymentIdChargebacksQueryKey>
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
      ...getV2PaymentsPaymentIdChargebacksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2PaymentsPaymentIdChargebacks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['chargebacks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['chargebacks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['chargebacks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentsPaymentIdChargebacksQueryKey>
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
      ...getV2PaymentsPaymentIdChargebacksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2PaymentsPaymentIdChargebacksChargebackIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.payments)[':paymentId']['chargebacks'][':chargebackId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payments/:paymentId/chargebacks/:chargebackId', keyArgs] as const
}

export function getV2PaymentsPaymentIdChargebacksChargebackIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.payments)[':paymentId']['chargebacks'][':chargebackId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.payments)[':paymentId']['chargebacks'][':chargebackId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.payments)[':paymentId']['chargebacks'][':chargebackId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentsPaymentIdChargebacksChargebackIdQueryKey>
  >({
    queryKey: getV2PaymentsPaymentIdChargebacksChargebackIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.payments[':paymentId'].chargebacks[':chargebackId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2PaymentsPaymentIdChargebacksChargebackId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.payments)[':paymentId']['chargebacks'][':chargebackId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.payments)[':paymentId']['chargebacks'][':chargebackId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.payments)[':paymentId']['chargebacks'][':chargebackId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentsPaymentIdChargebacksChargebackIdQueryKey>
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
      ...getV2PaymentsPaymentIdChargebacksChargebackIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2PaymentsPaymentIdChargebacksChargebackId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.payments)[':paymentId']['chargebacks'][':chargebackId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.payments)[':paymentId']['chargebacks'][':chargebackId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.payments)[':paymentId']['chargebacks'][':chargebackId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentsPaymentIdChargebacksChargebackIdQueryKey>
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
      ...getV2PaymentsPaymentIdChargebacksChargebackIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2ChargebacksQueryKey(
  args: InferRequestType<typeof client.v2.chargebacks.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/chargebacks', keyArgs] as const
}

export function getV2ChargebacksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.chargebacks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.chargebacks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.chargebacks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2ChargebacksQueryKey>
  >({
    queryKey: getV2ChargebacksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.chargebacks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Chargebacks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.chargebacks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.chargebacks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.chargebacks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2ChargebacksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2ChargebacksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Chargebacks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.chargebacks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.chargebacks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.chargebacks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2ChargebacksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2ChargebacksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2PaymentsPaymentIdCapturesQueryKey(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['captures']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payments/:paymentId/captures', keyArgs] as const
}

export function getV2PaymentsPaymentIdCapturesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['captures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['captures']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['captures']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentsPaymentIdCapturesQueryKey>
  >({
    queryKey: getV2PaymentsPaymentIdCapturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.payments[':paymentId'].captures.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2PaymentsPaymentIdCaptures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['captures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['captures']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['captures']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentsPaymentIdCapturesQueryKey>
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
      ...getV2PaymentsPaymentIdCapturesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2PaymentsPaymentIdCaptures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['captures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['captures']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['captures']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentsPaymentIdCapturesQueryKey>
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
      ...getV2PaymentsPaymentIdCapturesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2PaymentsPaymentIdCapturesMutationKey() {
  return ['v2', '/v2/payments/:paymentId/captures', 'POST'] as const
}

export function getPostV2PaymentsPaymentIdCapturesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['captures']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.payments)[':paymentId']['captures']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2PaymentsPaymentIdCapturesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.payments)[':paymentId']['captures']['$post']>,
    ) {
      return parseResponse(client.v2.payments[':paymentId'].captures.$post(args, options))
    },
  })
}

export function usePostV2PaymentsPaymentIdCaptures<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['captures']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.payments)[':paymentId']['captures']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2PaymentsPaymentIdCapturesMutationOptions<
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

export function getV2PaymentsPaymentIdCapturesCaptureIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.payments)[':paymentId']['captures'][':captureId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payments/:paymentId/captures/:captureId', keyArgs] as const
}

export function getV2PaymentsPaymentIdCapturesCaptureIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.payments)[':paymentId']['captures'][':captureId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.payments)[':paymentId']['captures'][':captureId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.payments)[':paymentId']['captures'][':captureId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentsPaymentIdCapturesCaptureIdQueryKey>
  >({
    queryKey: getV2PaymentsPaymentIdCapturesCaptureIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.payments[':paymentId'].captures[':captureId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2PaymentsPaymentIdCapturesCaptureId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.payments)[':paymentId']['captures'][':captureId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.payments)[':paymentId']['captures'][':captureId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.payments)[':paymentId']['captures'][':captureId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentsPaymentIdCapturesCaptureIdQueryKey>
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
      ...getV2PaymentsPaymentIdCapturesCaptureIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2PaymentsPaymentIdCapturesCaptureId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.payments)[':paymentId']['captures'][':captureId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.payments)[':paymentId']['captures'][':captureId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.payments)[':paymentId']['captures'][':captureId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentsPaymentIdCapturesCaptureIdQueryKey>
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
      ...getV2PaymentsPaymentIdCapturesCaptureIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2WalletsApplepaySessionsMutationKey() {
  return ['v2', '/v2/wallets/applepay/sessions', 'POST'] as const
}

export function getPostV2WalletsApplepaySessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.applepay.sessions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.wallets.applepay.sessions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2WalletsApplepaySessionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.wallets.applepay.sessions.$post>) {
      return parseResponse(client.v2.wallets.applepay.sessions.$post(args, options))
    },
  })
}

export function usePostV2WalletsApplepaySessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.wallets.applepay.sessions.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.wallets.applepay.sessions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2WalletsApplepaySessionsMutationOptions<TError, TOnMutateResult>(
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

export function getV2PaymentLinksQueryKey(
  args: InferRequestType<(typeof client.v2)['payment-links']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payment-links', keyArgs] as const
}

export function getV2PaymentLinksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-links']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['payment-links']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-links']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentLinksQueryKey>
  >({
    queryKey: getV2PaymentLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['payment-links'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2PaymentLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-links']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['payment-links']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-links']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentLinksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2PaymentLinksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2PaymentLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-links']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['payment-links']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-links']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentLinksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2PaymentLinksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2PaymentLinksMutationKey() {
  return ['v2', '/v2/payment-links', 'POST'] as const
}

export function getPostV2PaymentLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-links']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['payment-links']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2PaymentLinksMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['payment-links']['$post']>) {
      return parseResponse(client.v2['payment-links'].$post(args, options))
    },
  })
}

export function usePostV2PaymentLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-links']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['payment-links']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2PaymentLinksMutationOptions<TError, TOnMutateResult>(
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

export function getV2PaymentLinksPaymentLinkIdQueryKey(
  args: InferRequestType<(typeof client.v2)['payment-links'][':paymentLinkId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payment-links/:paymentLinkId', keyArgs] as const
}

export function getV2PaymentLinksPaymentLinkIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['payment-links'][':paymentLinkId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['payment-links'][':paymentLinkId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['payment-links'][':paymentLinkId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentLinksPaymentLinkIdQueryKey>
  >({
    queryKey: getV2PaymentLinksPaymentLinkIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['payment-links'][':paymentLinkId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2PaymentLinksPaymentLinkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['payment-links'][':paymentLinkId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['payment-links'][':paymentLinkId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['payment-links'][':paymentLinkId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentLinksPaymentLinkIdQueryKey>
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
      ...getV2PaymentLinksPaymentLinkIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2PaymentLinksPaymentLinkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['payment-links'][':paymentLinkId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['payment-links'][':paymentLinkId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['payment-links'][':paymentLinkId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentLinksPaymentLinkIdQueryKey>
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
      ...getV2PaymentLinksPaymentLinkIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2PaymentLinksPaymentLinkIdMutationKey() {
  return ['v2', '/v2/payment-links/:paymentLinkId', 'DELETE'] as const
}

export function getDeleteV2PaymentLinksPaymentLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['payment-links'][':paymentLinkId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2)['payment-links'][':paymentLinkId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2PaymentLinksPaymentLinkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['payment-links'][':paymentLinkId']['$delete']>,
    ) {
      return parseResponse(client.v2['payment-links'][':paymentLinkId'].$delete(args, options))
    },
  })
}

export function useDeleteV2PaymentLinksPaymentLinkId<
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
                  ReturnType<(typeof client.v2)['payment-links'][':paymentLinkId']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2)['payment-links'][':paymentLinkId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2PaymentLinksPaymentLinkIdMutationOptions<
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

export function getPatchV2PaymentLinksPaymentLinkIdMutationKey() {
  return ['v2', '/v2/payment-links/:paymentLinkId', 'PATCH'] as const
}

export function getPatchV2PaymentLinksPaymentLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['payment-links'][':paymentLinkId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['payment-links'][':paymentLinkId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2PaymentLinksPaymentLinkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['payment-links'][':paymentLinkId']['$patch']>,
    ) {
      return parseResponse(client.v2['payment-links'][':paymentLinkId'].$patch(args, options))
    },
  })
}

export function usePatchV2PaymentLinksPaymentLinkId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['payment-links'][':paymentLinkId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['payment-links'][':paymentLinkId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV2PaymentLinksPaymentLinkIdMutationOptions<
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

export function getV2PaymentLinksPaymentLinkIdPaymentsQueryKey(
  args: InferRequestType<(typeof client.v2)['payment-links'][':paymentLinkId']['payments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payment-links/:paymentLinkId/payments', keyArgs] as const
}

export function getV2PaymentLinksPaymentLinkIdPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2)['payment-links'][':paymentLinkId']['payments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['payment-links'][':paymentLinkId']['payments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2)['payment-links'][':paymentLinkId']['payments']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentLinksPaymentLinkIdPaymentsQueryKey>
  >({
    queryKey: getV2PaymentLinksPaymentLinkIdPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['payment-links'][':paymentLinkId'].payments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2PaymentLinksPaymentLinkIdPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2)['payment-links'][':paymentLinkId']['payments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['payment-links'][':paymentLinkId']['payments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['payment-links'][':paymentLinkId']['payments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentLinksPaymentLinkIdPaymentsQueryKey>
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
      ...getV2PaymentLinksPaymentLinkIdPaymentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2PaymentLinksPaymentLinkIdPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2)['payment-links'][':paymentLinkId']['payments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['payment-links'][':paymentLinkId']['payments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['payment-links'][':paymentLinkId']['payments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentLinksPaymentLinkIdPaymentsQueryKey>
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
      ...getV2PaymentLinksPaymentLinkIdPaymentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2TerminalsQueryKey(args: InferRequestType<typeof client.v2.terminals.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/terminals', keyArgs] as const
}

export function getV2TerminalsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.terminals.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.terminals.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.terminals.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2TerminalsQueryKey>
  >({
    queryKey: getV2TerminalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.terminals.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Terminals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.terminals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.terminals.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.terminals.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2TerminalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2TerminalsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Terminals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.terminals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.terminals.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.terminals.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2TerminalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2TerminalsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2TerminalsTerminalIdQueryKey(
  args: InferRequestType<(typeof client.v2.terminals)[':terminalId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/terminals/:terminalId', keyArgs] as const
}

export function getV2TerminalsTerminalIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.terminals)[':terminalId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.terminals)[':terminalId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.terminals)[':terminalId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TerminalsTerminalIdQueryKey>
  >({
    queryKey: getV2TerminalsTerminalIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.terminals[':terminalId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2TerminalsTerminalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.terminals)[':terminalId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.terminals)[':terminalId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.terminals)[':terminalId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TerminalsTerminalIdQueryKey>
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
      ...getV2TerminalsTerminalIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2TerminalsTerminalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.terminals)[':terminalId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.terminals)[':terminalId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.terminals)[':terminalId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TerminalsTerminalIdQueryKey>
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
      ...getV2TerminalsTerminalIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2TerminalsPairingCodesQueryKey(
  args: InferRequestType<(typeof client.v2.terminals)['pairing-codes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/terminals/pairing-codes', keyArgs] as const
}

export function getV2TerminalsPairingCodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.terminals)['pairing-codes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.terminals)['pairing-codes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.terminals)['pairing-codes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TerminalsPairingCodesQueryKey>
  >({
    queryKey: getV2TerminalsPairingCodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.terminals['pairing-codes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2TerminalsPairingCodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.terminals)['pairing-codes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.terminals)['pairing-codes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.terminals)['pairing-codes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TerminalsPairingCodesQueryKey>
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
      ...getV2TerminalsPairingCodesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2TerminalsPairingCodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.terminals)['pairing-codes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.terminals)['pairing-codes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.terminals)['pairing-codes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TerminalsPairingCodesQueryKey>
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
      ...getV2TerminalsPairingCodesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2TerminalsPairingCodesMutationKey() {
  return ['v2', '/v2/terminals/pairing-codes', 'POST'] as const
}

export function getPostV2TerminalsPairingCodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.terminals)['pairing-codes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.terminals)['pairing-codes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TerminalsPairingCodesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.terminals)['pairing-codes']['$post']>,
    ) {
      return parseResponse(client.v2.terminals['pairing-codes'].$post(args, options))
    },
  })
}

export function usePostV2TerminalsPairingCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.terminals)['pairing-codes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.terminals)['pairing-codes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2TerminalsPairingCodesMutationOptions<TError, TOnMutateResult>(
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

export function getV2TerminalsPairingCodesPairingCodeIdQueryKey(
  args: InferRequestType<(typeof client.v2.terminals)['pairing-codes'][':pairingCodeId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/terminals/pairing-codes/:pairingCodeId', keyArgs] as const
}

export function getV2TerminalsPairingCodesPairingCodeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.terminals)['pairing-codes'][':pairingCodeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.terminals)['pairing-codes'][':pairingCodeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.terminals)['pairing-codes'][':pairingCodeId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TerminalsPairingCodesPairingCodeIdQueryKey>
  >({
    queryKey: getV2TerminalsPairingCodesPairingCodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.terminals['pairing-codes'][':pairingCodeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2TerminalsPairingCodesPairingCodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.terminals)['pairing-codes'][':pairingCodeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.terminals)['pairing-codes'][':pairingCodeId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.terminals)['pairing-codes'][':pairingCodeId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TerminalsPairingCodesPairingCodeIdQueryKey>
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
      ...getV2TerminalsPairingCodesPairingCodeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2TerminalsPairingCodesPairingCodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.terminals)['pairing-codes'][':pairingCodeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.terminals)['pairing-codes'][':pairingCodeId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.terminals)['pairing-codes'][':pairingCodeId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TerminalsPairingCodesPairingCodeIdQueryKey>
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
      ...getV2TerminalsPairingCodesPairingCodeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2TerminalsPairingCodesPairingCodeIdMutationKey() {
  return ['v2', '/v2/terminals/pairing-codes/:pairingCodeId', 'DELETE'] as const
}

export function getDeleteV2TerminalsPairingCodesPairingCodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.terminals)['pairing-codes'][':pairingCodeId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.terminals)['pairing-codes'][':pairingCodeId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2TerminalsPairingCodesPairingCodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.terminals)['pairing-codes'][':pairingCodeId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.terminals['pairing-codes'][':pairingCodeId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2TerminalsPairingCodesPairingCodeId<
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
                  (typeof client.v2.terminals)['pairing-codes'][':pairingCodeId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.terminals)['pairing-codes'][':pairingCodeId']['$delete']
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
  const mutationDefaults = getDeleteV2TerminalsPairingCodesPairingCodeIdMutationOptions<
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

export function getV2PaymentsPaymentIdRoutesQueryKey(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['routes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payments/:paymentId/routes', keyArgs] as const
}

export function getV2PaymentsPaymentIdRoutesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['routes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['routes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['routes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentsPaymentIdRoutesQueryKey>
  >({
    queryKey: getV2PaymentsPaymentIdRoutesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.payments[':paymentId'].routes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2PaymentsPaymentIdRoutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['routes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['routes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['routes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentsPaymentIdRoutesQueryKey>
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
      ...getV2PaymentsPaymentIdRoutesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2PaymentsPaymentIdRoutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['routes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['routes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['routes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentsPaymentIdRoutesQueryKey>
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
      ...getV2PaymentsPaymentIdRoutesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2PaymentsPaymentIdRoutesMutationKey() {
  return ['v2', '/v2/payments/:paymentId/routes', 'POST'] as const
}

export function getPostV2PaymentsPaymentIdRoutesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['routes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.payments)[':paymentId']['routes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2PaymentsPaymentIdRoutesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.payments)[':paymentId']['routes']['$post']>,
    ) {
      return parseResponse(client.v2.payments[':paymentId'].routes.$post(args, options))
    },
  })
}

export function usePostV2PaymentsPaymentIdRoutes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['routes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.payments)[':paymentId']['routes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2PaymentsPaymentIdRoutesMutationOptions<TError, TOnMutateResult>(
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

export function getV2PaymentsPaymentIdRoutesRouteIdQueryKey(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['routes'][':routeId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payments/:paymentId/routes/:routeId', keyArgs] as const
}

export function getV2PaymentsPaymentIdRoutesRouteIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['routes'][':routeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['routes'][':routeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.payments)[':paymentId']['routes'][':routeId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentsPaymentIdRoutesRouteIdQueryKey>
  >({
    queryKey: getV2PaymentsPaymentIdRoutesRouteIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.payments[':paymentId'].routes[':routeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2PaymentsPaymentIdRoutesRouteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['routes'][':routeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['routes'][':routeId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.payments)[':paymentId']['routes'][':routeId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentsPaymentIdRoutesRouteIdQueryKey>
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
      ...getV2PaymentsPaymentIdRoutesRouteIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2PaymentsPaymentIdRoutesRouteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['routes'][':routeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['routes'][':routeId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.payments)[':paymentId']['routes'][':routeId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PaymentsPaymentIdRoutesRouteIdQueryKey>
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
      ...getV2PaymentsPaymentIdRoutesRouteIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2CustomersQueryKey(args: InferRequestType<typeof client.v2.customers.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/customers', keyArgs] as const
}

export function getV2CustomersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.customers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2CustomersQueryKey>
  >({
    queryKey: getV2CustomersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Customers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.customers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2CustomersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Customers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.customers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2CustomersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2CustomersMutationKey() {
  return ['v2', '/v2/customers', 'POST'] as const
}

export function getPostV2CustomersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.customers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CustomersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.customers.$post>) {
      return parseResponse(client.v2.customers.$post(args, options))
    },
  })
}

export function usePostV2Customers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.customers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2CustomersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2CustomersCustomerIdQueryKey(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/customers/:customerId', keyArgs] as const
}

export function getV2CustomersCustomerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersCustomerIdQueryKey>
  >({
    queryKey: getV2CustomersCustomerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customers[':customerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2CustomersCustomerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersCustomerIdQueryKey>
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
      ...getV2CustomersCustomerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2CustomersCustomerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersCustomerIdQueryKey>
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
      ...getV2CustomersCustomerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2CustomersCustomerIdMutationKey() {
  return ['v2', '/v2/customers/:customerId', 'DELETE'] as const
}

export function getDeleteV2CustomersCustomerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.customers)[':customerId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2CustomersCustomerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.customers)[':customerId']['$delete']>,
    ) {
      return parseResponse(client.v2.customers[':customerId'].$delete(args, options))
    },
  })
}

export function useDeleteV2CustomersCustomerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.customers)[':customerId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2CustomersCustomerIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV2CustomersCustomerIdMutationKey() {
  return ['v2', '/v2/customers/:customerId', 'PATCH'] as const
}

export function getPatchV2CustomersCustomerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.customers)[':customerId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2CustomersCustomerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.customers)[':customerId']['$patch']>,
    ) {
      return parseResponse(client.v2.customers[':customerId'].$patch(args, options))
    },
  })
}

export function usePatchV2CustomersCustomerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.customers)[':customerId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV2CustomersCustomerIdMutationOptions<TError, TOnMutateResult>(
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

export function getV2CustomersCustomerIdPaymentsQueryKey(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['payments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/customers/:customerId/payments', keyArgs] as const
}

export function getV2CustomersCustomerIdPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['payments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['payments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['payments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersCustomerIdPaymentsQueryKey>
  >({
    queryKey: getV2CustomersCustomerIdPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customers[':customerId'].payments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2CustomersCustomerIdPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['payments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['payments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['payments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersCustomerIdPaymentsQueryKey>
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
      ...getV2CustomersCustomerIdPaymentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2CustomersCustomerIdPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['payments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['payments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['payments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersCustomerIdPaymentsQueryKey>
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
      ...getV2CustomersCustomerIdPaymentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2CustomersCustomerIdPaymentsMutationKey() {
  return ['v2', '/v2/customers/:customerId/payments', 'POST'] as const
}

export function getPostV2CustomersCustomerIdPaymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['payments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.customers)[':customerId']['payments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CustomersCustomerIdPaymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.customers)[':customerId']['payments']['$post']>,
    ) {
      return parseResponse(client.v2.customers[':customerId'].payments.$post(args, options))
    },
  })
}

export function usePostV2CustomersCustomerIdPayments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['payments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.customers)[':customerId']['payments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2CustomersCustomerIdPaymentsMutationOptions<
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

export function getV2CustomersCustomerIdMandatesQueryKey(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['mandates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/customers/:customerId/mandates', keyArgs] as const
}

export function getV2CustomersCustomerIdMandatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['mandates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['mandates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['mandates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersCustomerIdMandatesQueryKey>
  >({
    queryKey: getV2CustomersCustomerIdMandatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customers[':customerId'].mandates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2CustomersCustomerIdMandates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['mandates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['mandates']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['mandates']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersCustomerIdMandatesQueryKey>
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
      ...getV2CustomersCustomerIdMandatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2CustomersCustomerIdMandates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['mandates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['mandates']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['mandates']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersCustomerIdMandatesQueryKey>
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
      ...getV2CustomersCustomerIdMandatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2CustomersCustomerIdMandatesMutationKey() {
  return ['v2', '/v2/customers/:customerId/mandates', 'POST'] as const
}

export function getPostV2CustomersCustomerIdMandatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['mandates']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.customers)[':customerId']['mandates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CustomersCustomerIdMandatesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.customers)[':customerId']['mandates']['$post']>,
    ) {
      return parseResponse(client.v2.customers[':customerId'].mandates.$post(args, options))
    },
  })
}

export function usePostV2CustomersCustomerIdMandates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['mandates']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.customers)[':customerId']['mandates']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2CustomersCustomerIdMandatesMutationOptions<
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

export function getV2CustomersCustomerIdMandatesMandateIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['mandates'][':mandateId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/customers/:customerId/mandates/:mandateId', keyArgs] as const
}

export function getV2CustomersCustomerIdMandatesMandateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.customers)[':customerId']['mandates'][':mandateId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['mandates'][':mandateId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.customers)[':customerId']['mandates'][':mandateId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersCustomerIdMandatesMandateIdQueryKey>
  >({
    queryKey: getV2CustomersCustomerIdMandatesMandateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customers[':customerId'].mandates[':mandateId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2CustomersCustomerIdMandatesMandateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.customers)[':customerId']['mandates'][':mandateId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['mandates'][':mandateId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.customers)[':customerId']['mandates'][':mandateId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersCustomerIdMandatesMandateIdQueryKey>
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
      ...getV2CustomersCustomerIdMandatesMandateIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2CustomersCustomerIdMandatesMandateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.customers)[':customerId']['mandates'][':mandateId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['mandates'][':mandateId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.customers)[':customerId']['mandates'][':mandateId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersCustomerIdMandatesMandateIdQueryKey>
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
      ...getV2CustomersCustomerIdMandatesMandateIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2CustomersCustomerIdMandatesMandateIdMutationKey() {
  return ['v2', '/v2/customers/:customerId/mandates/:mandateId', 'DELETE'] as const
}

export function getDeleteV2CustomersCustomerIdMandatesMandateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['mandates'][':mandateId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['mandates'][':mandateId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2CustomersCustomerIdMandatesMandateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.customers)[':customerId']['mandates'][':mandateId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.customers[':customerId'].mandates[':mandateId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2CustomersCustomerIdMandatesMandateId<
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
                    (typeof client.v2.customers)[':customerId']['mandates'][':mandateId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.customers)[':customerId']['mandates'][':mandateId']['$delete']
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
  const mutationDefaults = getDeleteV2CustomersCustomerIdMandatesMandateIdMutationOptions<
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

export function getV2CustomersCustomerIdSubscriptionsQueryKey(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['subscriptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/customers/:customerId/subscriptions', keyArgs] as const
}

export function getV2CustomersCustomerIdSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['subscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['subscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['subscriptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersCustomerIdSubscriptionsQueryKey>
  >({
    queryKey: getV2CustomersCustomerIdSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customers[':customerId'].subscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2CustomersCustomerIdSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['subscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['subscriptions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.customers)[':customerId']['subscriptions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersCustomerIdSubscriptionsQueryKey>
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
      ...getV2CustomersCustomerIdSubscriptionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2CustomersCustomerIdSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['subscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['subscriptions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.customers)[':customerId']['subscriptions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersCustomerIdSubscriptionsQueryKey>
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
      ...getV2CustomersCustomerIdSubscriptionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2CustomersCustomerIdSubscriptionsMutationKey() {
  return ['v2', '/v2/customers/:customerId/subscriptions', 'POST'] as const
}

export function getPostV2CustomersCustomerIdSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['subscriptions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.customers)[':customerId']['subscriptions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CustomersCustomerIdSubscriptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.customers)[':customerId']['subscriptions']['$post']>,
    ) {
      return parseResponse(client.v2.customers[':customerId'].subscriptions.$post(args, options))
    },
  })
}

export function usePostV2CustomersCustomerIdSubscriptions<
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
                ReturnType<(typeof client.v2.customers)[':customerId']['subscriptions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.customers)[':customerId']['subscriptions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2CustomersCustomerIdSubscriptionsMutationOptions<
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

export function getV2CustomersCustomerIdSubscriptionsSubscriptionIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/customers/:customerId/subscriptions/:subscriptionId', keyArgs] as const
}

export function getV2CustomersCustomerIdSubscriptionsSubscriptionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersCustomerIdSubscriptionsSubscriptionIdQueryKey>
  >({
    queryKey: getV2CustomersCustomerIdSubscriptionsSubscriptionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customers[':customerId'].subscriptions[':subscriptionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2CustomersCustomerIdSubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersCustomerIdSubscriptionsSubscriptionIdQueryKey>
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
      ...getV2CustomersCustomerIdSubscriptionsSubscriptionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2CustomersCustomerIdSubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersCustomerIdSubscriptionsSubscriptionIdQueryKey>
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
      ...getV2CustomersCustomerIdSubscriptionsSubscriptionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2CustomersCustomerIdSubscriptionsSubscriptionIdMutationKey() {
  return ['v2', '/v2/customers/:customerId/subscriptions/:subscriptionId', 'DELETE'] as const
}

export function getDeleteV2CustomersCustomerIdSubscriptionsSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2CustomersCustomerIdSubscriptionsSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.customers[':customerId'].subscriptions[':subscriptionId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2CustomersCustomerIdSubscriptionsSubscriptionId<
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
                  (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$delete']
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
  const mutationDefaults = getDeleteV2CustomersCustomerIdSubscriptionsSubscriptionIdMutationOptions<
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

export function getPatchV2CustomersCustomerIdSubscriptionsSubscriptionIdMutationKey() {
  return ['v2', '/v2/customers/:customerId/subscriptions/:subscriptionId', 'PATCH'] as const
}

export function getPatchV2CustomersCustomerIdSubscriptionsSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV2CustomersCustomerIdSubscriptionsSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.customers[':customerId'].subscriptions[':subscriptionId'].$patch(args, options),
      )
    },
  })
}

export function usePatchV2CustomersCustomerIdSubscriptionsSubscriptionId<
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
                  (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$patch']
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
  const mutationDefaults = getPatchV2CustomersCustomerIdSubscriptionsSubscriptionIdMutationOptions<
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

export function getV2SubscriptionsQueryKey(
  args: InferRequestType<typeof client.v2.subscriptions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/subscriptions', keyArgs] as const
}

export function getV2SubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.subscriptions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.subscriptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2SubscriptionsQueryKey>
  >({
    queryKey: getV2SubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.subscriptions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Subscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.subscriptions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.subscriptions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2SubscriptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2SubscriptionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Subscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.subscriptions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.subscriptions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2SubscriptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2SubscriptionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2CustomersCustomerIdSubscriptionsSubscriptionIdPaymentsQueryKey(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['payments']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v2',
    '/v2/customers/:customerId/subscriptions/:subscriptionId/payments',
    keyArgs,
  ] as const
}

export function getV2CustomersCustomerIdSubscriptionsSubscriptionIdPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['payments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['payments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['payments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersCustomerIdSubscriptionsSubscriptionIdPaymentsQueryKey>
  >({
    queryKey: getV2CustomersCustomerIdSubscriptionsSubscriptionIdPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customers[':customerId'].subscriptions[':subscriptionId'].payments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2CustomersCustomerIdSubscriptionsSubscriptionIdPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['payments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['payments']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['payments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersCustomerIdSubscriptionsSubscriptionIdPaymentsQueryKey>
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
      ...getV2CustomersCustomerIdSubscriptionsSubscriptionIdPaymentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2CustomersCustomerIdSubscriptionsSubscriptionIdPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['payments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['payments']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['payments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersCustomerIdSubscriptionsSubscriptionIdPaymentsQueryKey>
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
      ...getV2CustomersCustomerIdSubscriptionsSubscriptionIdPaymentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2SalesInvoicesQueryKey(
  args: InferRequestType<(typeof client.v2)['sales-invoices']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/sales-invoices', keyArgs] as const
}

export function getV2SalesInvoicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['sales-invoices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['sales-invoices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['sales-invoices']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SalesInvoicesQueryKey>
  >({
    queryKey: getV2SalesInvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['sales-invoices'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2SalesInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['sales-invoices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['sales-invoices']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['sales-invoices']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SalesInvoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2SalesInvoicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2SalesInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['sales-invoices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['sales-invoices']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['sales-invoices']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SalesInvoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2SalesInvoicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2SalesInvoicesMutationKey() {
  return ['v2', '/v2/sales-invoices', 'POST'] as const
}

export function getPostV2SalesInvoicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['sales-invoices']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['sales-invoices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SalesInvoicesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['sales-invoices']['$post']>) {
      return parseResponse(client.v2['sales-invoices'].$post(args, options))
    },
  })
}

export function usePostV2SalesInvoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['sales-invoices']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['sales-invoices']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2SalesInvoicesMutationOptions<TError, TOnMutateResult>(
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

export function getV2SalesInvoicesSalesInvoiceIdQueryKey(
  args: InferRequestType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/sales-invoices/:salesInvoiceId', keyArgs] as const
}

export function getV2SalesInvoicesSalesInvoiceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SalesInvoicesSalesInvoiceIdQueryKey>
  >({
    queryKey: getV2SalesInvoicesSalesInvoiceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['sales-invoices'][':salesInvoiceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2SalesInvoicesSalesInvoiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SalesInvoicesSalesInvoiceIdQueryKey>
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
      ...getV2SalesInvoicesSalesInvoiceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2SalesInvoicesSalesInvoiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SalesInvoicesSalesInvoiceIdQueryKey>
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
      ...getV2SalesInvoicesSalesInvoiceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2SalesInvoicesSalesInvoiceIdMutationKey() {
  return ['v2', '/v2/sales-invoices/:salesInvoiceId', 'DELETE'] as const
}

export function getDeleteV2SalesInvoicesSalesInvoiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2SalesInvoicesSalesInvoiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$delete']>,
    ) {
      return parseResponse(client.v2['sales-invoices'][':salesInvoiceId'].$delete(args, options))
    },
  })
}

export function useDeleteV2SalesInvoicesSalesInvoiceId<
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
                  ReturnType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2SalesInvoicesSalesInvoiceIdMutationOptions<
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

export function getPatchV2SalesInvoicesSalesInvoiceIdMutationKey() {
  return ['v2', '/v2/sales-invoices/:salesInvoiceId', 'PATCH'] as const
}

export function getPatchV2SalesInvoicesSalesInvoiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2SalesInvoicesSalesInvoiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$patch']>,
    ) {
      return parseResponse(client.v2['sales-invoices'][':salesInvoiceId'].$patch(args, options))
    },
  })
}

export function usePatchV2SalesInvoicesSalesInvoiceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV2SalesInvoicesSalesInvoiceIdMutationOptions<
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

export function getV2BusinessAccountsAccountsQueryKey(
  args: InferRequestType<(typeof client.v2)['business-accounts']['accounts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/business-accounts/accounts', keyArgs] as const
}

export function getV2BusinessAccountsAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['business-accounts']['accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['business-accounts']['accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['business-accounts']['accounts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BusinessAccountsAccountsQueryKey>
  >({
    queryKey: getV2BusinessAccountsAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['business-accounts'].accounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2BusinessAccountsAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['business-accounts']['accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['business-accounts']['accounts']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['business-accounts']['accounts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BusinessAccountsAccountsQueryKey>
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
      ...getV2BusinessAccountsAccountsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2BusinessAccountsAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['business-accounts']['accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['business-accounts']['accounts']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['business-accounts']['accounts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BusinessAccountsAccountsQueryKey>
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
      ...getV2BusinessAccountsAccountsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2BusinessAccountsAccountsMutationKey() {
  return ['v2', '/v2/business-accounts/accounts', 'POST'] as const
}

export function getPostV2BusinessAccountsAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['business-accounts']['accounts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['business-accounts']['accounts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BusinessAccountsAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['business-accounts']['accounts']['$post']>,
    ) {
      return parseResponse(client.v2['business-accounts'].accounts.$post(args, options))
    },
  })
}

export function usePostV2BusinessAccountsAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['business-accounts']['accounts']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['business-accounts']['accounts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BusinessAccountsAccountsMutationOptions<
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

export function getV2BusinessAccountsAccountsBusinessAccountIdQueryKey(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/business-accounts/accounts/:businessAccountId', keyArgs] as const
}

export function getV2BusinessAccountsAccountsBusinessAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BusinessAccountsAccountsBusinessAccountIdQueryKey>
  >({
    queryKey: getV2BusinessAccountsAccountsBusinessAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['business-accounts'].accounts[':businessAccountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2BusinessAccountsAccountsBusinessAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BusinessAccountsAccountsBusinessAccountIdQueryKey>
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
      ...getV2BusinessAccountsAccountsBusinessAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2BusinessAccountsAccountsBusinessAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BusinessAccountsAccountsBusinessAccountIdQueryKey>
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
      ...getV2BusinessAccountsAccountsBusinessAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2BusinessAccountsAccountsBusinessAccountIdTransactionsQueryKey(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/business-accounts/accounts/:businessAccountId/transactions', keyArgs] as const
}

export function getV2BusinessAccountsAccountsBusinessAccountIdTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BusinessAccountsAccountsBusinessAccountIdTransactionsQueryKey>
  >({
    queryKey: getV2BusinessAccountsAccountsBusinessAccountIdTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['business-accounts'].accounts[':businessAccountId'].transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2BusinessAccountsAccountsBusinessAccountIdTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BusinessAccountsAccountsBusinessAccountIdTransactionsQueryKey>
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
      ...getV2BusinessAccountsAccountsBusinessAccountIdTransactionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2BusinessAccountsAccountsBusinessAccountIdTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BusinessAccountsAccountsBusinessAccountIdTransactionsQueryKey>
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
      ...getV2BusinessAccountsAccountsBusinessAccountIdTransactionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2BusinessAccountsAccountsBusinessAccountIdTransactionsTransactionIdQueryKey(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions'][':transactionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v2',
    '/v2/business-accounts/accounts/:businessAccountId/transactions/:transactionId',
    keyArgs,
  ] as const
}

export function getV2BusinessAccountsAccountsBusinessAccountIdTransactionsTransactionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions'][':transactionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions'][':transactionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions'][':transactionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV2BusinessAccountsAccountsBusinessAccountIdTransactionsTransactionIdQueryKey
    >
  >({
    queryKey: getV2BusinessAccountsAccountsBusinessAccountIdTransactionsTransactionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['business-accounts'].accounts[':businessAccountId'].transactions[
          ':transactionId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2BusinessAccountsAccountsBusinessAccountIdTransactionsTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions'][':transactionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions'][':transactionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions'][':transactionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV2BusinessAccountsAccountsBusinessAccountIdTransactionsTransactionIdQueryKey
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
      ...getV2BusinessAccountsAccountsBusinessAccountIdTransactionsTransactionIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2BusinessAccountsAccountsBusinessAccountIdTransactionsTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions'][':transactionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions'][':transactionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions'][':transactionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV2BusinessAccountsAccountsBusinessAccountIdTransactionsTransactionIdQueryKey
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
      ...getV2BusinessAccountsAccountsBusinessAccountIdTransactionsTransactionIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2BusinessAccountsTransfersMutationKey() {
  return ['v2', '/v2/business-accounts/transfers', 'POST'] as const
}

export function getPostV2BusinessAccountsTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['business-accounts']['transfers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['business-accounts']['transfers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BusinessAccountsTransfersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['business-accounts']['transfers']['$post']>,
    ) {
      return parseResponse(client.v2['business-accounts'].transfers.$post(args, options))
    },
  })
}

export function usePostV2BusinessAccountsTransfers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['business-accounts']['transfers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['business-accounts']['transfers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BusinessAccountsTransfersMutationOptions<
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

export function getV2BusinessAccountsTransfersBusinessAccountsTransferIdQueryKey(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['transfers'][':businessAccountsTransferId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/business-accounts/transfers/:businessAccountsTransferId', keyArgs] as const
}

export function getV2BusinessAccountsTransfersBusinessAccountsTransferIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['business-accounts']['transfers'][':businessAccountsTransferId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['transfers'][':businessAccountsTransferId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['business-accounts']['transfers'][':businessAccountsTransferId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BusinessAccountsTransfersBusinessAccountsTransferIdQueryKey>
  >({
    queryKey: getV2BusinessAccountsTransfersBusinessAccountsTransferIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['business-accounts'].transfers[':businessAccountsTransferId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2BusinessAccountsTransfersBusinessAccountsTransferId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['business-accounts']['transfers'][':businessAccountsTransferId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['transfers'][':businessAccountsTransferId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['business-accounts']['transfers'][':businessAccountsTransferId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BusinessAccountsTransfersBusinessAccountsTransferIdQueryKey>
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
      ...getV2BusinessAccountsTransfersBusinessAccountsTransferIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2BusinessAccountsTransfersBusinessAccountsTransferId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['business-accounts']['transfers'][':businessAccountsTransferId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['transfers'][':businessAccountsTransferId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['business-accounts']['transfers'][':businessAccountsTransferId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BusinessAccountsTransfersBusinessAccountsTransferIdQueryKey>
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
      ...getV2BusinessAccountsTransfersBusinessAccountsTransferIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2BusinessAccountsPayeeVerificationsMutationKey() {
  return ['v2', '/v2/business-accounts/payee-verifications', 'POST'] as const
}

export function getPostV2BusinessAccountsPayeeVerificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2)['business-accounts']['payee-verifications']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['business-accounts']['payee-verifications']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BusinessAccountsPayeeVerificationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['business-accounts']['payee-verifications']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['business-accounts']['payee-verifications'].$post(args, options),
      )
    },
  })
}

export function usePostV2BusinessAccountsPayeeVerifications<
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
                ReturnType<(typeof client.v2)['business-accounts']['payee-verifications']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['business-accounts']['payee-verifications']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BusinessAccountsPayeeVerificationsMutationOptions<
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

export function getV2BusinessAccountsDraftTransfersQueryKey(
  args: InferRequestType<(typeof client.v2)['business-accounts']['draft-transfers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/business-accounts/draft-transfers', keyArgs] as const
}

export function getV2BusinessAccountsDraftTransfersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['business-accounts']['draft-transfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['business-accounts']['draft-transfers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['business-accounts']['draft-transfers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BusinessAccountsDraftTransfersQueryKey>
  >({
    queryKey: getV2BusinessAccountsDraftTransfersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['business-accounts']['draft-transfers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2BusinessAccountsDraftTransfers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['business-accounts']['draft-transfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['business-accounts']['draft-transfers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2)['business-accounts']['draft-transfers']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BusinessAccountsDraftTransfersQueryKey>
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
      ...getV2BusinessAccountsDraftTransfersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2BusinessAccountsDraftTransfers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['business-accounts']['draft-transfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['business-accounts']['draft-transfers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2)['business-accounts']['draft-transfers']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BusinessAccountsDraftTransfersQueryKey>
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
      ...getV2BusinessAccountsDraftTransfersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2BusinessAccountsDraftTransfersMutationKey() {
  return ['v2', '/v2/business-accounts/draft-transfers', 'POST'] as const
}

export function getPostV2BusinessAccountsDraftTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['business-accounts']['draft-transfers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['business-accounts']['draft-transfers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BusinessAccountsDraftTransfersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['business-accounts']['draft-transfers']['$post']>,
    ) {
      return parseResponse(client.v2['business-accounts']['draft-transfers'].$post(args, options))
    },
  })
}

export function usePostV2BusinessAccountsDraftTransfers<
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
                ReturnType<(typeof client.v2)['business-accounts']['draft-transfers']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['business-accounts']['draft-transfers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BusinessAccountsDraftTransfersMutationOptions<
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

export function getV2BusinessAccountsDraftTransfersDraftTransferIdQueryKey(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['draft-transfers'][':draftTransferId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/business-accounts/draft-transfers/:draftTransferId', keyArgs] as const
}

export function getV2BusinessAccountsDraftTransfersDraftTransferIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['business-accounts']['draft-transfers'][':draftTransferId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['draft-transfers'][':draftTransferId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['business-accounts']['draft-transfers'][':draftTransferId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BusinessAccountsDraftTransfersDraftTransferIdQueryKey>
  >({
    queryKey: getV2BusinessAccountsDraftTransfersDraftTransferIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['business-accounts']['draft-transfers'][':draftTransferId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2BusinessAccountsDraftTransfersDraftTransferId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['business-accounts']['draft-transfers'][':draftTransferId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['draft-transfers'][':draftTransferId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['business-accounts']['draft-transfers'][':draftTransferId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BusinessAccountsDraftTransfersDraftTransferIdQueryKey>
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
      ...getV2BusinessAccountsDraftTransfersDraftTransferIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2BusinessAccountsDraftTransfersDraftTransferId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2)['business-accounts']['draft-transfers'][':draftTransferId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['draft-transfers'][':draftTransferId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2)['business-accounts']['draft-transfers'][':draftTransferId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BusinessAccountsDraftTransfersDraftTransferIdQueryKey>
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
      ...getV2BusinessAccountsDraftTransfersDraftTransferIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2BusinessAccountsDraftTransfersDraftTransferIdMutationKey() {
  return ['v2', '/v2/business-accounts/draft-transfers/:draftTransferId', 'DELETE'] as const
}

export function getDeleteV2BusinessAccountsDraftTransfersDraftTransferIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['business-accounts']['draft-transfers'][':draftTransferId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['business-accounts']['draft-transfers'][':draftTransferId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2BusinessAccountsDraftTransfersDraftTransferIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['business-accounts']['draft-transfers'][':draftTransferId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2['business-accounts']['draft-transfers'][':draftTransferId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV2BusinessAccountsDraftTransfersDraftTransferId<
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
                  (typeof client.v2)['business-accounts']['draft-transfers'][':draftTransferId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['business-accounts']['draft-transfers'][':draftTransferId']['$delete']
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
  const mutationDefaults = getDeleteV2BusinessAccountsDraftTransfersDraftTransferIdMutationOptions<
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

export function getV2PayoutsQueryKey(args: InferRequestType<typeof client.v2.payouts.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payouts', keyArgs] as const
}

export function getV2PayoutsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payouts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.payouts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payouts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2PayoutsQueryKey>
  >({
    queryKey: getV2PayoutsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.payouts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Payouts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payouts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.payouts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payouts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2PayoutsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2PayoutsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Payouts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payouts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.payouts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payouts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2PayoutsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2PayoutsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2PayoutsMutationKey() {
  return ['v2', '/v2/payouts', 'POST'] as const
}

export function getPostV2PayoutsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payouts.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.payouts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2PayoutsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.payouts.$post>) {
      return parseResponse(client.v2.payouts.$post(args, options))
    },
  })
}

export function usePostV2Payouts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payouts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.payouts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2PayoutsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2PayoutsPayoutIdQueryKey(
  args: InferRequestType<(typeof client.v2.payouts)[':payoutId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payouts/:payoutId', keyArgs] as const
}

export function getV2PayoutsPayoutIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.payouts)[':payoutId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.payouts)[':payoutId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.payouts)[':payoutId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PayoutsPayoutIdQueryKey>
  >({
    queryKey: getV2PayoutsPayoutIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.payouts[':payoutId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2PayoutsPayoutId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.payouts)[':payoutId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.payouts)[':payoutId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.payouts)[':payoutId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PayoutsPayoutIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2PayoutsPayoutIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2PayoutsPayoutId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.payouts)[':payoutId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.payouts)[':payoutId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.payouts)[':payoutId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PayoutsPayoutIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2PayoutsPayoutIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV2PayoutsPayoutIdMutationKey() {
  return ['v2', '/v2/payouts/:payoutId', 'DELETE'] as const
}

export function getDeleteV2PayoutsPayoutIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.payouts)[':payoutId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.payouts)[':payoutId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2PayoutsPayoutIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.payouts)[':payoutId']['$delete']>) {
      return parseResponse(client.v2.payouts[':payoutId'].$delete(args, options))
    },
  })
}

export function useDeleteV2PayoutsPayoutId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.payouts)[':payoutId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.payouts)[':payoutId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2PayoutsPayoutIdMutationOptions<TError, TOnMutateResult>(
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
