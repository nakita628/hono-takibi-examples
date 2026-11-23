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

export function getAccountNumbersKey() {
  return ['account_numbers'] as const
}

export function getAccountStatementsKey() {
  return ['account_statements'] as const
}

export function getAccountTransfersKey() {
  return ['account_transfers'] as const
}

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getAchPrenotificationsKey() {
  return ['ach_prenotifications'] as const
}

export function getAchTransfersKey() {
  return ['ach_transfers'] as const
}

export function getCardDisputesKey() {
  return ['card_disputes'] as const
}

export function getCardProfilesKey() {
  return ['card_profiles'] as const
}

export function getCardsKey() {
  return ['cards'] as const
}

export function getCheckDepositsKey() {
  return ['check_deposits'] as const
}

export function getCheckTransfersKey() {
  return ['check_transfers'] as const
}

export function getDeclinedTransactionsKey() {
  return ['declined_transactions'] as const
}

export function getDigitalWalletTokensKey() {
  return ['digital_wallet_tokens'] as const
}

export function getDocumentsKey() {
  return ['documents'] as const
}

export function getEntitiesKey() {
  return ['entities'] as const
}

export function getEventSubscriptionsKey() {
  return ['event_subscriptions'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getExternalAccountsKey() {
  return ['external_accounts'] as const
}

export function getFilesKey() {
  return ['files'] as const
}

export function getGroupsKey() {
  return ['groups'] as const
}

export function getInboundAchTransferReturnsKey() {
  return ['inbound_ach_transfer_returns'] as const
}

export function getInboundWireDrawdownRequestsKey() {
  return ['inbound_wire_drawdown_requests'] as const
}

export function getLimitsKey() {
  return ['limits'] as const
}

export function getOauthConnectionsKey() {
  return ['oauth_connections'] as const
}

export function getPendingTransactionsKey() {
  return ['pending_transactions'] as const
}

export function getRealTimeDecisionsKey() {
  return ['real_time_decisions'] as const
}

export function getRoutingNumbersKey() {
  return ['routing_numbers'] as const
}

export function getSimulationsKey() {
  return ['simulations'] as const
}

export function getTransactionsKey() {
  return ['transactions'] as const
}

export function getWireDrawdownRequestsKey() {
  return ['wire_drawdown_requests'] as const
}

export function getWireTransfersKey() {
  return ['wire_transfers'] as const
}

export function getAccountNumbersQueryKey(
  args: InferRequestType<typeof client.account_numbers.$get>,
) {
  return ['account_numbers', '/account_numbers', args] as const
}

export function getAccountNumbersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_numbers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.account_numbers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_numbers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountNumbersQueryKey>
  >({
    queryKey: getAccountNumbersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account_numbers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccountNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account_numbers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_numbers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountNumbersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account_numbers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_numbers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountNumbersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAccountNumbersMutationKey() {
  return ['account_numbers', '/account_numbers', 'POST'] as const
}

export function getPostAccountNumbersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_numbers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.account_numbers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountNumbersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account_numbers.$post>) {
      return parseResponse(client.account_numbers.$post(args, options))
    },
  })
}

export function usePostAccountNumbers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_numbers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.account_numbers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountNumbersMutationOptions<TError, TOnMutateResult>(
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

export function getAccountNumbersAccountNumberIdQueryKey(
  args: InferRequestType<(typeof client.account_numbers)[':account_number_id']['$get']>,
) {
  return ['account_numbers', '/account_numbers/:account_number_id', args] as const
}

export function getAccountNumbersAccountNumberIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account_numbers)[':account_number_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account_numbers)[':account_number_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account_numbers)[':account_number_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountNumbersAccountNumberIdQueryKey>
  >({
    queryKey: getAccountNumbersAccountNumberIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account_numbers[':account_number_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountNumbersAccountNumberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account_numbers)[':account_number_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account_numbers)[':account_number_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account_numbers)[':account_number_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountNumbersAccountNumberIdQueryKey>
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
      ...getAccountNumbersAccountNumberIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountNumbersAccountNumberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account_numbers)[':account_number_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account_numbers)[':account_number_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account_numbers)[':account_number_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountNumbersAccountNumberIdQueryKey>
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
      ...getAccountNumbersAccountNumberIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchAccountNumbersAccountNumberIdMutationKey() {
  return ['account_numbers', '/account_numbers/:account_number_id', 'PATCH'] as const
}

export function getPatchAccountNumbersAccountNumberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account_numbers)[':account_number_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account_numbers)[':account_number_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountNumbersAccountNumberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account_numbers)[':account_number_id']['$patch']>,
    ) {
      return parseResponse(client.account_numbers[':account_number_id'].$patch(args, options))
    },
  })
}

export function usePatchAccountNumbersAccountNumberId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account_numbers)[':account_number_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account_numbers)[':account_number_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAccountNumbersAccountNumberIdMutationOptions<
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

export function getAccountStatementsQueryKey(
  args: InferRequestType<typeof client.account_statements.$get>,
) {
  return ['account_statements', '/account_statements', args] as const
}

export function getAccountStatementsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_statements.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.account_statements.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_statements.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountStatementsQueryKey>
  >({
    queryKey: getAccountStatementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account_statements.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccountStatements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_statements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account_statements.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account_statements.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountStatementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountStatementsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountStatements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_statements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account_statements.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account_statements.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountStatementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountStatementsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAccountStatementsAccountStatementIdQueryKey(
  args: InferRequestType<(typeof client.account_statements)[':account_statement_id']['$get']>,
) {
  return ['account_statements', '/account_statements/:account_statement_id', args] as const
}

export function getAccountStatementsAccountStatementIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account_statements)[':account_statement_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account_statements)[':account_statement_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account_statements)[':account_statement_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountStatementsAccountStatementIdQueryKey>
  >({
    queryKey: getAccountStatementsAccountStatementIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account_statements[':account_statement_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountStatementsAccountStatementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account_statements)[':account_statement_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account_statements)[':account_statement_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.account_statements)[':account_statement_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountStatementsAccountStatementIdQueryKey>
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
      ...getAccountStatementsAccountStatementIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountStatementsAccountStatementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account_statements)[':account_statement_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account_statements)[':account_statement_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.account_statements)[':account_statement_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountStatementsAccountStatementIdQueryKey>
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
      ...getAccountStatementsAccountStatementIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAccountTransfersQueryKey(
  args: InferRequestType<typeof client.account_transfers.$get>,
) {
  return ['account_transfers', '/account_transfers', args] as const
}

export function getAccountTransfersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_transfers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.account_transfers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_transfers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountTransfersQueryKey>
  >({
    queryKey: getAccountTransfersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account_transfers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccountTransfers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_transfers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account_transfers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account_transfers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountTransfersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountTransfersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountTransfers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_transfers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account_transfers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account_transfers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountTransfersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountTransfersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAccountTransfersMutationKey() {
  return ['account_transfers', '/account_transfers', 'POST'] as const
}

export function getPostAccountTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_transfers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.account_transfers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountTransfersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account_transfers.$post>) {
      return parseResponse(client.account_transfers.$post(args, options))
    },
  })
}

export function usePostAccountTransfers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account_transfers.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.account_transfers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountTransfersMutationOptions<TError, TOnMutateResult>(
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

export function getAccountTransfersAccountTransferIdQueryKey(
  args: InferRequestType<(typeof client.account_transfers)[':account_transfer_id']['$get']>,
) {
  return ['account_transfers', '/account_transfers/:account_transfer_id', args] as const
}

export function getAccountTransfersAccountTransferIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account_transfers)[':account_transfer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account_transfers)[':account_transfer_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account_transfers)[':account_transfer_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountTransfersAccountTransferIdQueryKey>
  >({
    queryKey: getAccountTransfersAccountTransferIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account_transfers[':account_transfer_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountTransfersAccountTransferId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account_transfers)[':account_transfer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account_transfers)[':account_transfer_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account_transfers)[':account_transfer_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountTransfersAccountTransferIdQueryKey>
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
      ...getAccountTransfersAccountTransferIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountTransfersAccountTransferId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account_transfers)[':account_transfer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account_transfers)[':account_transfer_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account_transfers)[':account_transfer_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountTransfersAccountTransferIdQueryKey>
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
      ...getAccountTransfersAccountTransferIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAccountTransfersAccountTransferIdApproveMutationKey() {
  return ['account_transfers', '/account_transfers/:account_transfer_id/approve', 'POST'] as const
}

export function getPostAccountTransfersAccountTransferIdApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.account_transfers)[':account_transfer_id']['approve']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account_transfers)[':account_transfer_id']['approve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountTransfersAccountTransferIdApproveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account_transfers)[':account_transfer_id']['approve']['$post']
      >,
    ) {
      return parseResponse(
        client.account_transfers[':account_transfer_id'].approve.$post(args, options),
      )
    },
  })
}

export function usePostAccountTransfersAccountTransferIdApprove<
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
                  (typeof client.account_transfers)[':account_transfer_id']['approve']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.account_transfers)[':account_transfer_id']['approve']['$post']
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
  const mutationDefaults = getPostAccountTransfersAccountTransferIdApproveMutationOptions<
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

export function getPostAccountTransfersAccountTransferIdCancelMutationKey() {
  return ['account_transfers', '/account_transfers/:account_transfer_id/cancel', 'POST'] as const
}

export function getPostAccountTransfersAccountTransferIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account_transfers)[':account_transfer_id']['cancel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account_transfers)[':account_transfer_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountTransfersAccountTransferIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account_transfers)[':account_transfer_id']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.account_transfers[':account_transfer_id'].cancel.$post(args, options),
      )
    },
  })
}

export function usePostAccountTransfersAccountTransferIdCancel<
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
                  (typeof client.account_transfers)[':account_transfer_id']['cancel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.account_transfers)[':account_transfer_id']['cancel']['$post']
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
  const mutationDefaults = getPostAccountTransfersAccountTransferIdCancelMutationOptions<
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

export function useAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAccountsMutationKey() {
  return ['accounts', '/accounts', 'POST'] as const
}

export function getPostAccountsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$post>>>>>,
    TError,
    InferRequestType<typeof client.accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounts.$post>) {
      return parseResponse(client.accounts.$post(args, options))
    },
  })
}

export function usePostAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.accounts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountsAccountIdQueryKey(
  args: InferRequestType<(typeof client.accounts)[':account_id']['$get']>,
) {
  return ['accounts', '/accounts/:account_id', args] as const
}

export function getAccountsAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdQueryKey>
  >({
    queryKey: getAccountsAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':account_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountsAccountIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountsAccountIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchAccountsAccountIdMutationKey() {
  return ['accounts', '/accounts/:account_id', 'PATCH'] as const
}

export function getPatchAccountsAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':account_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountsAccountIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.accounts)[':account_id']['$patch']>) {
      return parseResponse(client.accounts[':account_id'].$patch(args, options))
    },
  })
}

export function usePatchAccountsAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':account_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounts)[':account_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAccountsAccountIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountsAccountIdCloseMutationKey() {
  return ['accounts', '/accounts/:account_id/close', 'POST'] as const
}

export function getPostAccountsAccountIdCloseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':account_id']['close']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':account_id']['close']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdCloseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':account_id']['close']['$post']>,
    ) {
      return parseResponse(client.accounts[':account_id'].close.$post(args, options))
    },
  })
}

export function usePostAccountsAccountIdClose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':account_id']['close']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounts)[':account_id']['close']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountsAccountIdCloseMutationOptions<TError, TOnMutateResult>(
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

export function getAchPrenotificationsQueryKey(
  args: InferRequestType<typeof client.ach_prenotifications.$get>,
) {
  return ['ach_prenotifications', '/ach_prenotifications', args] as const
}

export function getAchPrenotificationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ach_prenotifications.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ach_prenotifications.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ach_prenotifications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAchPrenotificationsQueryKey>
  >({
    queryKey: getAchPrenotificationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ach_prenotifications.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAchPrenotifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ach_prenotifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ach_prenotifications.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ach_prenotifications.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAchPrenotificationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAchPrenotificationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAchPrenotifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ach_prenotifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ach_prenotifications.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ach_prenotifications.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAchPrenotificationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAchPrenotificationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAchPrenotificationsMutationKey() {
  return ['ach_prenotifications', '/ach_prenotifications', 'POST'] as const
}

export function getPostAchPrenotificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ach_prenotifications.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.ach_prenotifications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAchPrenotificationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ach_prenotifications.$post>) {
      return parseResponse(client.ach_prenotifications.$post(args, options))
    },
  })
}

export function usePostAchPrenotifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ach_prenotifications.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ach_prenotifications.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAchPrenotificationsMutationOptions<TError, TOnMutateResult>(
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

export function getAchPrenotificationsAchPrenotificationIdQueryKey(
  args: InferRequestType<(typeof client.ach_prenotifications)[':ach_prenotification_id']['$get']>,
) {
  return ['ach_prenotifications', '/ach_prenotifications/:ach_prenotification_id', args] as const
}

export function getAchPrenotificationsAchPrenotificationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ach_prenotifications)[':ach_prenotification_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ach_prenotifications)[':ach_prenotification_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ach_prenotifications)[':ach_prenotification_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAchPrenotificationsAchPrenotificationIdQueryKey>
  >({
    queryKey: getAchPrenotificationsAchPrenotificationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ach_prenotifications[':ach_prenotification_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAchPrenotificationsAchPrenotificationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ach_prenotifications)[':ach_prenotification_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ach_prenotifications)[':ach_prenotification_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ach_prenotifications)[':ach_prenotification_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAchPrenotificationsAchPrenotificationIdQueryKey>
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
      ...getAchPrenotificationsAchPrenotificationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAchPrenotificationsAchPrenotificationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ach_prenotifications)[':ach_prenotification_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ach_prenotifications)[':ach_prenotification_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ach_prenotifications)[':ach_prenotification_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAchPrenotificationsAchPrenotificationIdQueryKey>
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
      ...getAchPrenotificationsAchPrenotificationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAchTransfersQueryKey(args: InferRequestType<typeof client.ach_transfers.$get>) {
  return ['ach_transfers', '/ach_transfers', args] as const
}

export function getAchTransfersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ach_transfers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ach_transfers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ach_transfers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAchTransfersQueryKey>
  >({
    queryKey: getAchTransfersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ach_transfers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAchTransfers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ach_transfers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ach_transfers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ach_transfers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAchTransfersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAchTransfersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAchTransfers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ach_transfers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ach_transfers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ach_transfers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAchTransfersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAchTransfersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAchTransfersMutationKey() {
  return ['ach_transfers', '/ach_transfers', 'POST'] as const
}

export function getPostAchTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ach_transfers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ach_transfers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAchTransfersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ach_transfers.$post>) {
      return parseResponse(client.ach_transfers.$post(args, options))
    },
  })
}

export function usePostAchTransfers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ach_transfers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ach_transfers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAchTransfersMutationOptions<TError, TOnMutateResult>(
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

export function getAchTransfersAchTransferIdQueryKey(
  args: InferRequestType<(typeof client.ach_transfers)[':ach_transfer_id']['$get']>,
) {
  return ['ach_transfers', '/ach_transfers/:ach_transfer_id', args] as const
}

export function getAchTransfersAchTransferIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ach_transfers)[':ach_transfer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ach_transfers)[':ach_transfer_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ach_transfers)[':ach_transfer_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAchTransfersAchTransferIdQueryKey>
  >({
    queryKey: getAchTransfersAchTransferIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ach_transfers[':ach_transfer_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAchTransfersAchTransferId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ach_transfers)[':ach_transfer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ach_transfers)[':ach_transfer_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ach_transfers)[':ach_transfer_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAchTransfersAchTransferIdQueryKey>
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
      ...getAchTransfersAchTransferIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAchTransfersAchTransferId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ach_transfers)[':ach_transfer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ach_transfers)[':ach_transfer_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ach_transfers)[':ach_transfer_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAchTransfersAchTransferIdQueryKey>
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
      ...getAchTransfersAchTransferIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAchTransfersAchTransferIdApproveMutationKey() {
  return ['ach_transfers', '/ach_transfers/:ach_transfer_id/approve', 'POST'] as const
}

export function getPostAchTransfersAchTransferIdApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ach_transfers)[':ach_transfer_id']['approve']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ach_transfers)[':ach_transfer_id']['approve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAchTransfersAchTransferIdApproveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ach_transfers)[':ach_transfer_id']['approve']['$post']>,
    ) {
      return parseResponse(client.ach_transfers[':ach_transfer_id'].approve.$post(args, options))
    },
  })
}

export function usePostAchTransfersAchTransferIdApprove<
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
                ReturnType<(typeof client.ach_transfers)[':ach_transfer_id']['approve']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ach_transfers)[':ach_transfer_id']['approve']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAchTransfersAchTransferIdApproveMutationOptions<
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

export function getPostAchTransfersAchTransferIdCancelMutationKey() {
  return ['ach_transfers', '/ach_transfers/:ach_transfer_id/cancel', 'POST'] as const
}

export function getPostAchTransfersAchTransferIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ach_transfers)[':ach_transfer_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ach_transfers)[':ach_transfer_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAchTransfersAchTransferIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ach_transfers)[':ach_transfer_id']['cancel']['$post']>,
    ) {
      return parseResponse(client.ach_transfers[':ach_transfer_id'].cancel.$post(args, options))
    },
  })
}

export function usePostAchTransfersAchTransferIdCancel<
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
                ReturnType<(typeof client.ach_transfers)[':ach_transfer_id']['cancel']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ach_transfers)[':ach_transfer_id']['cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAchTransfersAchTransferIdCancelMutationOptions<
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

export function getCardDisputesQueryKey(args: InferRequestType<typeof client.card_disputes.$get>) {
  return ['card_disputes', '/card_disputes', args] as const
}

export function getCardDisputesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_disputes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.card_disputes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_disputes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCardDisputesQueryKey>
  >({
    queryKey: getCardDisputesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.card_disputes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCardDisputes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_disputes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.card_disputes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_disputes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCardDisputesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCardDisputesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCardDisputes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_disputes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.card_disputes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_disputes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCardDisputesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCardDisputesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCardDisputesMutationKey() {
  return ['card_disputes', '/card_disputes', 'POST'] as const
}

export function getPostCardDisputesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_disputes.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.card_disputes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCardDisputesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.card_disputes.$post>) {
      return parseResponse(client.card_disputes.$post(args, options))
    },
  })
}

export function usePostCardDisputes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_disputes.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.card_disputes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCardDisputesMutationOptions<TError, TOnMutateResult>(
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

export function getCardDisputesCardDisputeIdQueryKey(
  args: InferRequestType<(typeof client.card_disputes)[':card_dispute_id']['$get']>,
) {
  return ['card_disputes', '/card_disputes/:card_dispute_id', args] as const
}

export function getCardDisputesCardDisputeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.card_disputes)[':card_dispute_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.card_disputes)[':card_dispute_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.card_disputes)[':card_dispute_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardDisputesCardDisputeIdQueryKey>
  >({
    queryKey: getCardDisputesCardDisputeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.card_disputes[':card_dispute_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCardDisputesCardDisputeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.card_disputes)[':card_dispute_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.card_disputes)[':card_dispute_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.card_disputes)[':card_dispute_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardDisputesCardDisputeIdQueryKey>
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
      ...getCardDisputesCardDisputeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCardDisputesCardDisputeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.card_disputes)[':card_dispute_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.card_disputes)[':card_dispute_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.card_disputes)[':card_dispute_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardDisputesCardDisputeIdQueryKey>
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
      ...getCardDisputesCardDisputeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCardProfilesQueryKey(args: InferRequestType<typeof client.card_profiles.$get>) {
  return ['card_profiles', '/card_profiles', args] as const
}

export function getCardProfilesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_profiles.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.card_profiles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_profiles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCardProfilesQueryKey>
  >({
    queryKey: getCardProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.card_profiles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCardProfiles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_profiles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.card_profiles.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_profiles.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCardProfilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCardProfilesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCardProfiles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_profiles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.card_profiles.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_profiles.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCardProfilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCardProfilesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCardProfilesMutationKey() {
  return ['card_profiles', '/card_profiles', 'POST'] as const
}

export function getPostCardProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_profiles.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.card_profiles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCardProfilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.card_profiles.$post>) {
      return parseResponse(client.card_profiles.$post(args, options))
    },
  })
}

export function usePostCardProfiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_profiles.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.card_profiles.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCardProfilesMutationOptions<TError, TOnMutateResult>(
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

export function getCardProfilesCardProfileIdQueryKey(
  args: InferRequestType<(typeof client.card_profiles)[':card_profile_id']['$get']>,
) {
  return ['card_profiles', '/card_profiles/:card_profile_id', args] as const
}

export function getCardProfilesCardProfileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.card_profiles)[':card_profile_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.card_profiles)[':card_profile_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.card_profiles)[':card_profile_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardProfilesCardProfileIdQueryKey>
  >({
    queryKey: getCardProfilesCardProfileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.card_profiles[':card_profile_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCardProfilesCardProfileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.card_profiles)[':card_profile_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.card_profiles)[':card_profile_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.card_profiles)[':card_profile_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardProfilesCardProfileIdQueryKey>
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
      ...getCardProfilesCardProfileIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCardProfilesCardProfileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.card_profiles)[':card_profile_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.card_profiles)[':card_profile_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.card_profiles)[':card_profile_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardProfilesCardProfileIdQueryKey>
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
      ...getCardProfilesCardProfileIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCardsQueryKey(args: InferRequestType<typeof client.cards.$get>) {
  return ['cards', '/cards', args] as const
}

export function getCardsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.cards.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCardsQueryKey>
  >({
    queryKey: getCardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCards<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.cards.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCardsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCards<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.cards.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCardsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCardsMutationKey() {
  return ['cards', '/cards', 'POST'] as const
}

export function getPostCardsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$post>>>>>,
    TError,
    InferRequestType<typeof client.cards.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cards.$post>) {
      return parseResponse(client.cards.$post(args, options))
    },
  })
}

export function usePostCards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$post>>>>>,
        TError,
        InferRequestType<typeof client.cards.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCardsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCardsCardIdQueryKey(
  args: InferRequestType<(typeof client.cards)[':card_id']['$get']>,
) {
  return ['cards', '/cards/:card_id', args] as const
}

export function getCardsCardIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':card_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsCardIdQueryKey>
  >({
    queryKey: getCardsCardIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':card_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCardsCardId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':card_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsCardIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCardsCardIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCardsCardId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':card_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsCardIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCardsCardIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchCardsCardIdMutationKey() {
  return ['cards', '/cards/:card_id', 'PATCH'] as const
}

export function getPatchCardsCardIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':card_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCardsCardIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':card_id']['$patch']>) {
      return parseResponse(client.cards[':card_id'].$patch(args, options))
    },
  })
}

export function usePatchCardsCardId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.cards)[':card_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCardsCardIdMutationOptions<TError, TOnMutateResult>(
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

export function getCardsCardIdDetailsQueryKey(
  args: InferRequestType<(typeof client.cards)[':card_id']['details']['$get']>,
) {
  return ['cards', '/cards/:card_id/details', args] as const
}

export function getCardsCardIdDetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':card_id']['details']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':card_id']['details']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':card_id']['details']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsCardIdDetailsQueryKey>
  >({
    queryKey: getCardsCardIdDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':card_id'].details.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCardsCardIdDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':card_id']['details']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':card_id']['details']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':card_id']['details']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsCardIdDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCardsCardIdDetailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCardsCardIdDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':card_id']['details']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':card_id']['details']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':card_id']['details']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsCardIdDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCardsCardIdDetailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCheckDepositsQueryKey(
  args: InferRequestType<typeof client.check_deposits.$get>,
) {
  return ['check_deposits', '/check_deposits', args] as const
}

export function getCheckDepositsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_deposits.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.check_deposits.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_deposits.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCheckDepositsQueryKey>
  >({
    queryKey: getCheckDepositsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.check_deposits.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCheckDeposits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_deposits.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.check_deposits.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_deposits.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCheckDepositsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCheckDepositsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCheckDeposits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_deposits.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.check_deposits.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_deposits.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCheckDepositsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCheckDepositsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCheckDepositsMutationKey() {
  return ['check_deposits', '/check_deposits', 'POST'] as const
}

export function getPostCheckDepositsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_deposits.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.check_deposits.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCheckDepositsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.check_deposits.$post>) {
      return parseResponse(client.check_deposits.$post(args, options))
    },
  })
}

export function usePostCheckDeposits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_deposits.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.check_deposits.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCheckDepositsMutationOptions<TError, TOnMutateResult>(
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

export function getCheckDepositsCheckDepositIdQueryKey(
  args: InferRequestType<(typeof client.check_deposits)[':check_deposit_id']['$get']>,
) {
  return ['check_deposits', '/check_deposits/:check_deposit_id', args] as const
}

export function getCheckDepositsCheckDepositIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.check_deposits)[':check_deposit_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.check_deposits)[':check_deposit_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.check_deposits)[':check_deposit_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCheckDepositsCheckDepositIdQueryKey>
  >({
    queryKey: getCheckDepositsCheckDepositIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.check_deposits[':check_deposit_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCheckDepositsCheckDepositId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.check_deposits)[':check_deposit_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.check_deposits)[':check_deposit_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.check_deposits)[':check_deposit_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCheckDepositsCheckDepositIdQueryKey>
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
      ...getCheckDepositsCheckDepositIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCheckDepositsCheckDepositId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.check_deposits)[':check_deposit_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.check_deposits)[':check_deposit_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.check_deposits)[':check_deposit_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCheckDepositsCheckDepositIdQueryKey>
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
      ...getCheckDepositsCheckDepositIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCheckTransfersQueryKey(
  args: InferRequestType<typeof client.check_transfers.$get>,
) {
  return ['check_transfers', '/check_transfers', args] as const
}

export function getCheckTransfersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_transfers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.check_transfers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_transfers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCheckTransfersQueryKey>
  >({
    queryKey: getCheckTransfersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.check_transfers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCheckTransfers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_transfers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.check_transfers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_transfers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCheckTransfersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCheckTransfersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCheckTransfers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_transfers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.check_transfers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_transfers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCheckTransfersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCheckTransfersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCheckTransfersMutationKey() {
  return ['check_transfers', '/check_transfers', 'POST'] as const
}

export function getPostCheckTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_transfers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.check_transfers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCheckTransfersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.check_transfers.$post>) {
      return parseResponse(client.check_transfers.$post(args, options))
    },
  })
}

export function usePostCheckTransfers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_transfers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.check_transfers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCheckTransfersMutationOptions<TError, TOnMutateResult>(
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

export function getCheckTransfersCheckTransferIdQueryKey(
  args: InferRequestType<(typeof client.check_transfers)[':check_transfer_id']['$get']>,
) {
  return ['check_transfers', '/check_transfers/:check_transfer_id', args] as const
}

export function getCheckTransfersCheckTransferIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.check_transfers)[':check_transfer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.check_transfers)[':check_transfer_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.check_transfers)[':check_transfer_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCheckTransfersCheckTransferIdQueryKey>
  >({
    queryKey: getCheckTransfersCheckTransferIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.check_transfers[':check_transfer_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCheckTransfersCheckTransferId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.check_transfers)[':check_transfer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.check_transfers)[':check_transfer_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.check_transfers)[':check_transfer_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCheckTransfersCheckTransferIdQueryKey>
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
      ...getCheckTransfersCheckTransferIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCheckTransfersCheckTransferId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.check_transfers)[':check_transfer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.check_transfers)[':check_transfer_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.check_transfers)[':check_transfer_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCheckTransfersCheckTransferIdQueryKey>
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
      ...getCheckTransfersCheckTransferIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCheckTransfersCheckTransferIdApproveMutationKey() {
  return ['check_transfers', '/check_transfers/:check_transfer_id/approve', 'POST'] as const
}

export function getPostCheckTransfersCheckTransferIdApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.check_transfers)[':check_transfer_id']['approve']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.check_transfers)[':check_transfer_id']['approve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCheckTransfersCheckTransferIdApproveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.check_transfers)[':check_transfer_id']['approve']['$post']
      >,
    ) {
      return parseResponse(
        client.check_transfers[':check_transfer_id'].approve.$post(args, options),
      )
    },
  })
}

export function usePostCheckTransfersCheckTransferIdApprove<
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
                  (typeof client.check_transfers)[':check_transfer_id']['approve']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.check_transfers)[':check_transfer_id']['approve']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCheckTransfersCheckTransferIdApproveMutationOptions<
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

export function getPostCheckTransfersCheckTransferIdCancelMutationKey() {
  return ['check_transfers', '/check_transfers/:check_transfer_id/cancel', 'POST'] as const
}

export function getPostCheckTransfersCheckTransferIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.check_transfers)[':check_transfer_id']['cancel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.check_transfers)[':check_transfer_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCheckTransfersCheckTransferIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.check_transfers)[':check_transfer_id']['cancel']['$post']
      >,
    ) {
      return parseResponse(client.check_transfers[':check_transfer_id'].cancel.$post(args, options))
    },
  })
}

export function usePostCheckTransfersCheckTransferIdCancel<
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
                ReturnType<(typeof client.check_transfers)[':check_transfer_id']['cancel']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.check_transfers)[':check_transfer_id']['cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCheckTransfersCheckTransferIdCancelMutationOptions<
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

export function getPostCheckTransfersCheckTransferIdStopPaymentMutationKey() {
  return ['check_transfers', '/check_transfers/:check_transfer_id/stop_payment', 'POST'] as const
}

export function getPostCheckTransfersCheckTransferIdStopPaymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.check_transfers)[':check_transfer_id']['stop_payment']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.check_transfers)[':check_transfer_id']['stop_payment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCheckTransfersCheckTransferIdStopPaymentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.check_transfers)[':check_transfer_id']['stop_payment']['$post']
      >,
    ) {
      return parseResponse(
        client.check_transfers[':check_transfer_id'].stop_payment.$post(args, options),
      )
    },
  })
}

export function usePostCheckTransfersCheckTransferIdStopPayment<
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
                  (typeof client.check_transfers)[':check_transfer_id']['stop_payment']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.check_transfers)[':check_transfer_id']['stop_payment']['$post']
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
  const mutationDefaults = getPostCheckTransfersCheckTransferIdStopPaymentMutationOptions<
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

export function getDeclinedTransactionsQueryKey(
  args: InferRequestType<typeof client.declined_transactions.$get>,
) {
  return ['declined_transactions', '/declined_transactions', args] as const
}

export function getDeclinedTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.declined_transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.declined_transactions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.declined_transactions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeclinedTransactionsQueryKey>
  >({
    queryKey: getDeclinedTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.declined_transactions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDeclinedTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.declined_transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.declined_transactions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.declined_transactions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeclinedTransactionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDeclinedTransactionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDeclinedTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.declined_transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.declined_transactions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.declined_transactions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeclinedTransactionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDeclinedTransactionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeclinedTransactionsDeclinedTransactionIdQueryKey(
  args: InferRequestType<(typeof client.declined_transactions)[':declined_transaction_id']['$get']>,
) {
  return ['declined_transactions', '/declined_transactions/:declined_transaction_id', args] as const
}

export function getDeclinedTransactionsDeclinedTransactionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.declined_transactions)[':declined_transaction_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.declined_transactions)[':declined_transaction_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.declined_transactions)[':declined_transaction_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeclinedTransactionsDeclinedTransactionIdQueryKey>
  >({
    queryKey: getDeclinedTransactionsDeclinedTransactionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.declined_transactions[':declined_transaction_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDeclinedTransactionsDeclinedTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.declined_transactions)[':declined_transaction_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.declined_transactions)[':declined_transaction_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.declined_transactions)[':declined_transaction_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeclinedTransactionsDeclinedTransactionIdQueryKey>
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
      ...getDeclinedTransactionsDeclinedTransactionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDeclinedTransactionsDeclinedTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.declined_transactions)[':declined_transaction_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.declined_transactions)[':declined_transaction_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.declined_transactions)[':declined_transaction_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeclinedTransactionsDeclinedTransactionIdQueryKey>
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
      ...getDeclinedTransactionsDeclinedTransactionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDigitalWalletTokensQueryKey(
  args: InferRequestType<typeof client.digital_wallet_tokens.$get>,
) {
  return ['digital_wallet_tokens', '/digital_wallet_tokens', args] as const
}

export function getDigitalWalletTokensQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.digital_wallet_tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.digital_wallet_tokens.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.digital_wallet_tokens.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDigitalWalletTokensQueryKey>
  >({
    queryKey: getDigitalWalletTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.digital_wallet_tokens.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDigitalWalletTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.digital_wallet_tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.digital_wallet_tokens.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.digital_wallet_tokens.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDigitalWalletTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDigitalWalletTokensQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDigitalWalletTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.digital_wallet_tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.digital_wallet_tokens.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.digital_wallet_tokens.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDigitalWalletTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDigitalWalletTokensQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDigitalWalletTokensDigitalWalletTokenIdQueryKey(
  args: InferRequestType<(typeof client.digital_wallet_tokens)[':digital_wallet_token_id']['$get']>,
) {
  return ['digital_wallet_tokens', '/digital_wallet_tokens/:digital_wallet_token_id', args] as const
}

export function getDigitalWalletTokensDigitalWalletTokenIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.digital_wallet_tokens)[':digital_wallet_token_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.digital_wallet_tokens)[':digital_wallet_token_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.digital_wallet_tokens)[':digital_wallet_token_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDigitalWalletTokensDigitalWalletTokenIdQueryKey>
  >({
    queryKey: getDigitalWalletTokensDigitalWalletTokenIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.digital_wallet_tokens[':digital_wallet_token_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDigitalWalletTokensDigitalWalletTokenId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.digital_wallet_tokens)[':digital_wallet_token_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.digital_wallet_tokens)[':digital_wallet_token_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.digital_wallet_tokens)[':digital_wallet_token_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDigitalWalletTokensDigitalWalletTokenIdQueryKey>
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
      ...getDigitalWalletTokensDigitalWalletTokenIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDigitalWalletTokensDigitalWalletTokenId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.digital_wallet_tokens)[':digital_wallet_token_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.digital_wallet_tokens)[':digital_wallet_token_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.digital_wallet_tokens)[':digital_wallet_token_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDigitalWalletTokensDigitalWalletTokenIdQueryKey>
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
      ...getDigitalWalletTokensDigitalWalletTokenIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDocumentsQueryKey(args: InferRequestType<typeof client.documents.$get>) {
  return ['documents', '/documents', args] as const
}

export function getDocumentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.documents.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDocumentsQueryKey>
  >({
    queryKey: getDocumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.documents.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDocuments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.documents.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDocumentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDocuments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.documents.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDocumentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDocumentsDocumentIdQueryKey(
  args: InferRequestType<(typeof client.documents)[':document_id']['$get']>,
) {
  return ['documents', '/documents/:document_id', args] as const
}

export function getDocumentsDocumentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':document_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.documents)[':document_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':document_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDocumentIdQueryKey>
  >({
    queryKey: getDocumentsDocumentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.documents[':document_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDocumentsDocumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':document_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.documents)[':document_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.documents)[':document_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsDocumentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDocumentsDocumentIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDocumentsDocumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':document_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.documents)[':document_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.documents)[':document_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsDocumentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDocumentsDocumentIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEntitiesQueryKey(args: InferRequestType<typeof client.entities.$get>) {
  return ['entities', '/entities', args] as const
}

export function getEntitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.entities.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEntitiesQueryKey>
  >({
    queryKey: getEntitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEntities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.entities.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEntitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEntitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEntities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.entities.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEntitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEntitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostEntitiesMutationKey() {
  return ['entities', '/entities', 'POST'] as const
}

export function getPostEntitiesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.$post>>>>>,
    TError,
    InferRequestType<typeof client.entities.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEntitiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.entities.$post>) {
      return parseResponse(client.entities.$post(args, options))
    },
  })
}

export function usePostEntities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.entities.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEntitiesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEntitiesEntityIdQueryKey(
  args: InferRequestType<(typeof client.entities)[':entity_id']['$get']>,
) {
  return ['entities', '/entities/:entity_id', args] as const
}

export function getEntitiesEntityIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)[':entity_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities)[':entity_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities)[':entity_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesEntityIdQueryKey>
  >({
    queryKey: getEntitiesEntityIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities[':entity_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEntitiesEntityId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)[':entity_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities)[':entity_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.entities)[':entity_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEntitiesEntityIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEntitiesEntityIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEntitiesEntityId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)[':entity_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities)[':entity_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.entities)[':entity_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEntitiesEntityIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEntitiesEntityIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostEntitiesEntityIdSupplementalDocumentsMutationKey() {
  return ['entities', '/entities/:entity_id/supplemental_documents', 'POST'] as const
}

export function getPostEntitiesEntityIdSupplementalDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.entities)[':entity_id']['supplemental_documents']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.entities)[':entity_id']['supplemental_documents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEntitiesEntityIdSupplementalDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.entities)[':entity_id']['supplemental_documents']['$post']
      >,
    ) {
      return parseResponse(
        client.entities[':entity_id'].supplemental_documents.$post(args, options),
      )
    },
  })
}

export function usePostEntitiesEntityIdSupplementalDocuments<
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
                  (typeof client.entities)[':entity_id']['supplemental_documents']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.entities)[':entity_id']['supplemental_documents']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEntitiesEntityIdSupplementalDocumentsMutationOptions<
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

export function getEventSubscriptionsQueryKey(
  args: InferRequestType<typeof client.event_subscriptions.$get>,
) {
  return ['event_subscriptions', '/event_subscriptions', args] as const
}

export function getEventSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.event_subscriptions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_subscriptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEventSubscriptionsQueryKey>
  >({
    queryKey: getEventSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.event_subscriptions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEventSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.event_subscriptions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.event_subscriptions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventSubscriptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEventSubscriptionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEventSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.event_subscriptions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.event_subscriptions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventSubscriptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEventSubscriptionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostEventSubscriptionsMutationKey() {
  return ['event_subscriptions', '/event_subscriptions', 'POST'] as const
}

export function getPostEventSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_subscriptions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.event_subscriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEventSubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.event_subscriptions.$post>) {
      return parseResponse(client.event_subscriptions.$post(args, options))
    },
  })
}

export function usePostEventSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.event_subscriptions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.event_subscriptions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEventSubscriptionsMutationOptions<TError, TOnMutateResult>(
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

export function getEventSubscriptionsEventSubscriptionIdQueryKey(
  args: InferRequestType<(typeof client.event_subscriptions)[':event_subscription_id']['$get']>,
) {
  return ['event_subscriptions', '/event_subscriptions/:event_subscription_id', args] as const
}

export function getEventSubscriptionsEventSubscriptionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event_subscriptions)[':event_subscription_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event_subscriptions)[':event_subscription_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.event_subscriptions)[':event_subscription_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventSubscriptionsEventSubscriptionIdQueryKey>
  >({
    queryKey: getEventSubscriptionsEventSubscriptionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.event_subscriptions[':event_subscription_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEventSubscriptionsEventSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event_subscriptions)[':event_subscription_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event_subscriptions)[':event_subscription_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.event_subscriptions)[':event_subscription_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventSubscriptionsEventSubscriptionIdQueryKey>
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
      ...getEventSubscriptionsEventSubscriptionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEventSubscriptionsEventSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.event_subscriptions)[':event_subscription_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.event_subscriptions)[':event_subscription_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.event_subscriptions)[':event_subscription_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventSubscriptionsEventSubscriptionIdQueryKey>
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
      ...getEventSubscriptionsEventSubscriptionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchEventSubscriptionsEventSubscriptionIdMutationKey() {
  return ['event_subscriptions', '/event_subscriptions/:event_subscription_id', 'PATCH'] as const
}

export function getPatchEventSubscriptionsEventSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.event_subscriptions)[':event_subscription_id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.event_subscriptions)[':event_subscription_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchEventSubscriptionsEventSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.event_subscriptions)[':event_subscription_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.event_subscriptions[':event_subscription_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchEventSubscriptionsEventSubscriptionId<
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
                ReturnType<(typeof client.event_subscriptions)[':event_subscription_id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.event_subscriptions)[':event_subscription_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchEventSubscriptionsEventSubscriptionIdMutationOptions<
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

export function getEventsQueryKey(args: InferRequestType<typeof client.events.$get>) {
  return ['events', '/events', args] as const
}

export function getEventsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsQueryKey>
  >({
    queryKey: getEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.events.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.events.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEventsEventIdQueryKey(
  args: InferRequestType<(typeof client.events)[':event_id']['$get']>,
) {
  return ['events', '/events/:event_id', args] as const
}

export function getEventsEventIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)[':event_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsEventIdQueryKey>
  >({
    queryKey: getEventsEventIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events[':event_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEventsEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)[':event_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsEventIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEventsEventIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEventsEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)[':event_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsEventIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEventsEventIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getExternalAccountsQueryKey(
  args: InferRequestType<typeof client.external_accounts.$get>,
) {
  return ['external_accounts', '/external_accounts', args] as const
}

export function getExternalAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.external_accounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.external_accounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.external_accounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getExternalAccountsQueryKey>
  >({
    queryKey: getExternalAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.external_accounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useExternalAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.external_accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.external_accounts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.external_accounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExternalAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getExternalAccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseExternalAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.external_accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.external_accounts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.external_accounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExternalAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getExternalAccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostExternalAccountsMutationKey() {
  return ['external_accounts', '/external_accounts', 'POST'] as const
}

export function getPostExternalAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.external_accounts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.external_accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExternalAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.external_accounts.$post>) {
      return parseResponse(client.external_accounts.$post(args, options))
    },
  })
}

export function usePostExternalAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.external_accounts.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.external_accounts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostExternalAccountsMutationOptions<TError, TOnMutateResult>(
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

export function getExternalAccountsExternalAccountIdQueryKey(
  args: InferRequestType<(typeof client.external_accounts)[':external_account_id']['$get']>,
) {
  return ['external_accounts', '/external_accounts/:external_account_id', args] as const
}

export function getExternalAccountsExternalAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.external_accounts)[':external_account_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.external_accounts)[':external_account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.external_accounts)[':external_account_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExternalAccountsExternalAccountIdQueryKey>
  >({
    queryKey: getExternalAccountsExternalAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.external_accounts[':external_account_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useExternalAccountsExternalAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.external_accounts)[':external_account_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.external_accounts)[':external_account_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.external_accounts)[':external_account_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExternalAccountsExternalAccountIdQueryKey>
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
      ...getExternalAccountsExternalAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseExternalAccountsExternalAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.external_accounts)[':external_account_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.external_accounts)[':external_account_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.external_accounts)[':external_account_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExternalAccountsExternalAccountIdQueryKey>
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
      ...getExternalAccountsExternalAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchExternalAccountsExternalAccountIdMutationKey() {
  return ['external_accounts', '/external_accounts/:external_account_id', 'PATCH'] as const
}

export function getPatchExternalAccountsExternalAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.external_accounts)[':external_account_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.external_accounts)[':external_account_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchExternalAccountsExternalAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.external_accounts)[':external_account_id']['$patch']>,
    ) {
      return parseResponse(client.external_accounts[':external_account_id'].$patch(args, options))
    },
  })
}

export function usePatchExternalAccountsExternalAccountId<
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
                ReturnType<(typeof client.external_accounts)[':external_account_id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.external_accounts)[':external_account_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchExternalAccountsExternalAccountIdMutationOptions<
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

export function getFilesQueryKey(args: InferRequestType<typeof client.files.$get>) {
  return ['files', '/files', args] as const
}

export function getFilesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.files.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFilesQueryKey>
  >({
    queryKey: getFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFiles<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.files.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFilesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFiles<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.files.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFilesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostFilesMutationKey() {
  return ['files', '/files', 'POST'] as const
}

export function getPostFilesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$post>>>>>,
    TError,
    InferRequestType<typeof client.files.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.files.$post>) {
      return parseResponse(client.files.$post(args, options))
    },
  })
}

export function usePostFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$post>>>>>,
        TError,
        InferRequestType<typeof client.files.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFilesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFilesFileIdQueryKey(
  args: InferRequestType<(typeof client.files)[':file_id']['$get']>,
) {
  return ['files', '/files/:file_id', args] as const
}

export function getFilesFileIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdQueryKey>
  >({
    queryKey: getFilesFileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':file_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFilesFileId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFilesFileIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFilesFileId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFilesFileIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGroupsCurrentQueryKey() {
  return ['groups', '/groups/current'] as const
}

export function getGroupsCurrentQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.current.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.current.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsCurrentQueryKey>
  >({
    queryKey: getGroupsCurrentQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.groups.current.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGroupsCurrent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.current.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.current.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsCurrentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupsCurrentQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroupsCurrent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.current.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.current.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsCurrentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupsCurrentQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getInboundAchTransferReturnsQueryKey(
  args: InferRequestType<typeof client.inbound_ach_transfer_returns.$get>,
) {
  return ['inbound_ach_transfer_returns', '/inbound_ach_transfer_returns', args] as const
}

export function getInboundAchTransferReturnsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.inbound_ach_transfer_returns.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.inbound_ach_transfer_returns.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.inbound_ach_transfer_returns.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboundAchTransferReturnsQueryKey>
  >({
    queryKey: getInboundAchTransferReturnsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inbound_ach_transfer_returns.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInboundAchTransferReturns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.inbound_ach_transfer_returns.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.inbound_ach_transfer_returns.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.inbound_ach_transfer_returns.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInboundAchTransferReturnsQueryKey>
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
      ...getInboundAchTransferReturnsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInboundAchTransferReturns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.inbound_ach_transfer_returns.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.inbound_ach_transfer_returns.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.inbound_ach_transfer_returns.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInboundAchTransferReturnsQueryKey>
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
      ...getInboundAchTransferReturnsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostInboundAchTransferReturnsMutationKey() {
  return ['inbound_ach_transfer_returns', '/inbound_ach_transfer_returns', 'POST'] as const
}

export function getPostInboundAchTransferReturnsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.inbound_ach_transfer_returns.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.inbound_ach_transfer_returns.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInboundAchTransferReturnsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.inbound_ach_transfer_returns.$post>) {
      return parseResponse(client.inbound_ach_transfer_returns.$post(args, options))
    },
  })
}

export function usePostInboundAchTransferReturns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.inbound_ach_transfer_returns.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.inbound_ach_transfer_returns.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInboundAchTransferReturnsMutationOptions<TError, TOnMutateResult>(
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

export function getInboundAchTransferReturnsInboundAchTransferReturnIdQueryKey(
  args: InferRequestType<
    (typeof client.inbound_ach_transfer_returns)[':inbound_ach_transfer_return_id']['$get']
  >,
) {
  return [
    'inbound_ach_transfer_returns',
    '/inbound_ach_transfer_returns/:inbound_ach_transfer_return_id',
    args,
  ] as const
}

export function getInboundAchTransferReturnsInboundAchTransferReturnIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.inbound_ach_transfer_returns)[':inbound_ach_transfer_return_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.inbound_ach_transfer_returns)[':inbound_ach_transfer_return_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.inbound_ach_transfer_returns)[':inbound_ach_transfer_return_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboundAchTransferReturnsInboundAchTransferReturnIdQueryKey>
  >({
    queryKey: getInboundAchTransferReturnsInboundAchTransferReturnIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inbound_ach_transfer_returns[':inbound_ach_transfer_return_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInboundAchTransferReturnsInboundAchTransferReturnId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.inbound_ach_transfer_returns)[':inbound_ach_transfer_return_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.inbound_ach_transfer_returns)[':inbound_ach_transfer_return_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.inbound_ach_transfer_returns)[':inbound_ach_transfer_return_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInboundAchTransferReturnsInboundAchTransferReturnIdQueryKey>
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
      ...getInboundAchTransferReturnsInboundAchTransferReturnIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInboundAchTransferReturnsInboundAchTransferReturnId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.inbound_ach_transfer_returns)[':inbound_ach_transfer_return_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.inbound_ach_transfer_returns)[':inbound_ach_transfer_return_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.inbound_ach_transfer_returns)[':inbound_ach_transfer_return_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInboundAchTransferReturnsInboundAchTransferReturnIdQueryKey>
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
      ...getInboundAchTransferReturnsInboundAchTransferReturnIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInboundWireDrawdownRequestsQueryKey(
  args: InferRequestType<typeof client.inbound_wire_drawdown_requests.$get>,
) {
  return ['inbound_wire_drawdown_requests', '/inbound_wire_drawdown_requests', args] as const
}

export function getInboundWireDrawdownRequestsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.inbound_wire_drawdown_requests.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.inbound_wire_drawdown_requests.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.inbound_wire_drawdown_requests.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboundWireDrawdownRequestsQueryKey>
  >({
    queryKey: getInboundWireDrawdownRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inbound_wire_drawdown_requests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInboundWireDrawdownRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.inbound_wire_drawdown_requests.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.inbound_wire_drawdown_requests.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.inbound_wire_drawdown_requests.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInboundWireDrawdownRequestsQueryKey>
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
      ...getInboundWireDrawdownRequestsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInboundWireDrawdownRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.inbound_wire_drawdown_requests.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.inbound_wire_drawdown_requests.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.inbound_wire_drawdown_requests.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInboundWireDrawdownRequestsQueryKey>
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
      ...getInboundWireDrawdownRequestsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInboundWireDrawdownRequestsInboundWireDrawdownRequestIdQueryKey(
  args: InferRequestType<
    (typeof client.inbound_wire_drawdown_requests)[':inbound_wire_drawdown_request_id']['$get']
  >,
) {
  return [
    'inbound_wire_drawdown_requests',
    '/inbound_wire_drawdown_requests/:inbound_wire_drawdown_request_id',
    args,
  ] as const
}

export function getInboundWireDrawdownRequestsInboundWireDrawdownRequestIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.inbound_wire_drawdown_requests)[':inbound_wire_drawdown_request_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.inbound_wire_drawdown_requests)[':inbound_wire_drawdown_request_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.inbound_wire_drawdown_requests)[':inbound_wire_drawdown_request_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboundWireDrawdownRequestsInboundWireDrawdownRequestIdQueryKey>
  >({
    queryKey: getInboundWireDrawdownRequestsInboundWireDrawdownRequestIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inbound_wire_drawdown_requests[':inbound_wire_drawdown_request_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInboundWireDrawdownRequestsInboundWireDrawdownRequestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.inbound_wire_drawdown_requests)[':inbound_wire_drawdown_request_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.inbound_wire_drawdown_requests)[':inbound_wire_drawdown_request_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.inbound_wire_drawdown_requests)[':inbound_wire_drawdown_request_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInboundWireDrawdownRequestsInboundWireDrawdownRequestIdQueryKey>
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
      ...getInboundWireDrawdownRequestsInboundWireDrawdownRequestIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInboundWireDrawdownRequestsInboundWireDrawdownRequestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.inbound_wire_drawdown_requests)[':inbound_wire_drawdown_request_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.inbound_wire_drawdown_requests)[':inbound_wire_drawdown_request_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.inbound_wire_drawdown_requests)[':inbound_wire_drawdown_request_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInboundWireDrawdownRequestsInboundWireDrawdownRequestIdQueryKey>
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
      ...getInboundWireDrawdownRequestsInboundWireDrawdownRequestIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLimitsQueryKey(args: InferRequestType<typeof client.limits.$get>) {
  return ['limits', '/limits', args] as const
}

export function getLimitsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.limits.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.limits.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.limits.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLimitsQueryKey>
  >({
    queryKey: getLimitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.limits.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLimits<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.limits.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.limits.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.limits.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLimitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLimitsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLimits<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.limits.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.limits.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.limits.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLimitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLimitsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostLimitsMutationKey() {
  return ['limits', '/limits', 'POST'] as const
}

export function getPostLimitsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.limits.$post>>>>>,
    TError,
    InferRequestType<typeof client.limits.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLimitsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.limits.$post>) {
      return parseResponse(client.limits.$post(args, options))
    },
  })
}

export function usePostLimits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.limits.$post>>>>>,
        TError,
        InferRequestType<typeof client.limits.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLimitsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLimitsLimitIdQueryKey(
  args: InferRequestType<(typeof client.limits)[':limit_id']['$get']>,
) {
  return ['limits', '/limits/:limit_id', args] as const
}

export function getLimitsLimitIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.limits)[':limit_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.limits)[':limit_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.limits)[':limit_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLimitsLimitIdQueryKey>
  >({
    queryKey: getLimitsLimitIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.limits[':limit_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLimitsLimitId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.limits)[':limit_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.limits)[':limit_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.limits)[':limit_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLimitsLimitIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLimitsLimitIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLimitsLimitId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.limits)[':limit_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.limits)[':limit_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.limits)[':limit_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLimitsLimitIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLimitsLimitIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchLimitsLimitIdMutationKey() {
  return ['limits', '/limits/:limit_id', 'PATCH'] as const
}

export function getPatchLimitsLimitIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.limits)[':limit_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.limits)[':limit_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchLimitsLimitIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.limits)[':limit_id']['$patch']>) {
      return parseResponse(client.limits[':limit_id'].$patch(args, options))
    },
  })
}

export function usePatchLimitsLimitId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.limits)[':limit_id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.limits)[':limit_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchLimitsLimitIdMutationOptions<TError, TOnMutateResult>(
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

export function getOauthConnectionsQueryKey(
  args: InferRequestType<typeof client.oauth_connections.$get>,
) {
  return ['oauth_connections', '/oauth_connections', args] as const
}

export function getOauthConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth_connections.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.oauth_connections.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth_connections.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOauthConnectionsQueryKey>
  >({
    queryKey: getOauthConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.oauth_connections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOauthConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth_connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.oauth_connections.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth_connections.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOauthConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOauthConnectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOauthConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth_connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.oauth_connections.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth_connections.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOauthConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOauthConnectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOauthConnectionsOauthConnectionIdQueryKey(
  args: InferRequestType<(typeof client.oauth_connections)[':oauth_connection_id']['$get']>,
) {
  return ['oauth_connections', '/oauth_connections/:oauth_connection_id', args] as const
}

export function getOauthConnectionsOauthConnectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.oauth_connections)[':oauth_connection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.oauth_connections)[':oauth_connection_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth_connections)[':oauth_connection_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOauthConnectionsOauthConnectionIdQueryKey>
  >({
    queryKey: getOauthConnectionsOauthConnectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.oauth_connections[':oauth_connection_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOauthConnectionsOauthConnectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.oauth_connections)[':oauth_connection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.oauth_connections)[':oauth_connection_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.oauth_connections)[':oauth_connection_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOauthConnectionsOauthConnectionIdQueryKey>
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
      ...getOauthConnectionsOauthConnectionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOauthConnectionsOauthConnectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.oauth_connections)[':oauth_connection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.oauth_connections)[':oauth_connection_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.oauth_connections)[':oauth_connection_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOauthConnectionsOauthConnectionIdQueryKey>
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
      ...getOauthConnectionsOauthConnectionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPendingTransactionsQueryKey(
  args: InferRequestType<typeof client.pending_transactions.$get>,
) {
  return ['pending_transactions', '/pending_transactions', args] as const
}

export function getPendingTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pending_transactions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.pending_transactions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pending_transactions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPendingTransactionsQueryKey>
  >({
    queryKey: getPendingTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pending_transactions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePendingTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pending_transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pending_transactions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.pending_transactions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPendingTransactionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPendingTransactionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePendingTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pending_transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pending_transactions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.pending_transactions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPendingTransactionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPendingTransactionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPendingTransactionsPendingTransactionIdQueryKey(
  args: InferRequestType<(typeof client.pending_transactions)[':pending_transaction_id']['$get']>,
) {
  return ['pending_transactions', '/pending_transactions/:pending_transaction_id', args] as const
}

export function getPendingTransactionsPendingTransactionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pending_transactions)[':pending_transaction_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pending_transactions)[':pending_transaction_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.pending_transactions)[':pending_transaction_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPendingTransactionsPendingTransactionIdQueryKey>
  >({
    queryKey: getPendingTransactionsPendingTransactionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pending_transactions[':pending_transaction_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePendingTransactionsPendingTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pending_transactions)[':pending_transaction_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pending_transactions)[':pending_transaction_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.pending_transactions)[':pending_transaction_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPendingTransactionsPendingTransactionIdQueryKey>
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
      ...getPendingTransactionsPendingTransactionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePendingTransactionsPendingTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pending_transactions)[':pending_transaction_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pending_transactions)[':pending_transaction_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.pending_transactions)[':pending_transaction_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPendingTransactionsPendingTransactionIdQueryKey>
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
      ...getPendingTransactionsPendingTransactionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRealTimeDecisionsRealTimeDecisionIdQueryKey(
  args: InferRequestType<(typeof client.real_time_decisions)[':real_time_decision_id']['$get']>,
) {
  return ['real_time_decisions', '/real_time_decisions/:real_time_decision_id', args] as const
}

export function getRealTimeDecisionsRealTimeDecisionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.real_time_decisions)[':real_time_decision_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.real_time_decisions)[':real_time_decision_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.real_time_decisions)[':real_time_decision_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealTimeDecisionsRealTimeDecisionIdQueryKey>
  >({
    queryKey: getRealTimeDecisionsRealTimeDecisionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.real_time_decisions[':real_time_decision_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRealTimeDecisionsRealTimeDecisionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.real_time_decisions)[':real_time_decision_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.real_time_decisions)[':real_time_decision_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.real_time_decisions)[':real_time_decision_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealTimeDecisionsRealTimeDecisionIdQueryKey>
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
      ...getRealTimeDecisionsRealTimeDecisionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRealTimeDecisionsRealTimeDecisionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.real_time_decisions)[':real_time_decision_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.real_time_decisions)[':real_time_decision_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.real_time_decisions)[':real_time_decision_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealTimeDecisionsRealTimeDecisionIdQueryKey>
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
      ...getRealTimeDecisionsRealTimeDecisionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostRealTimeDecisionsRealTimeDecisionIdActionMutationKey() {
  return [
    'real_time_decisions',
    '/real_time_decisions/:real_time_decision_id/action',
    'POST',
  ] as const
}

export function getPostRealTimeDecisionsRealTimeDecisionIdActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.real_time_decisions)[':real_time_decision_id']['action']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.real_time_decisions)[':real_time_decision_id']['action']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRealTimeDecisionsRealTimeDecisionIdActionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.real_time_decisions)[':real_time_decision_id']['action']['$post']
      >,
    ) {
      return parseResponse(
        client.real_time_decisions[':real_time_decision_id'].action.$post(args, options),
      )
    },
  })
}

export function usePostRealTimeDecisionsRealTimeDecisionIdAction<
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
                  (typeof client.real_time_decisions)[':real_time_decision_id']['action']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.real_time_decisions)[':real_time_decision_id']['action']['$post']
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
  const mutationDefaults = getPostRealTimeDecisionsRealTimeDecisionIdActionMutationOptions<
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

export function getRoutingNumbersQueryKey(
  args: InferRequestType<typeof client.routing_numbers.$get>,
) {
  return ['routing_numbers', '/routing_numbers', args] as const
}

export function getRoutingNumbersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing_numbers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.routing_numbers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing_numbers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRoutingNumbersQueryKey>
  >({
    queryKey: getRoutingNumbersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.routing_numbers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRoutingNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing_numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.routing_numbers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing_numbers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRoutingNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRoutingNumbersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRoutingNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing_numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.routing_numbers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing_numbers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRoutingNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRoutingNumbersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSimulationsAccountStatementsMutationKey() {
  return ['simulations', '/simulations/account_statements', 'POST'] as const
}

export function getPostSimulationsAccountStatementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.simulations.account_statements.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.simulations.account_statements.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSimulationsAccountStatementsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.simulations.account_statements.$post>) {
      return parseResponse(client.simulations.account_statements.$post(args, options))
    },
  })
}

export function usePostSimulationsAccountStatements<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.simulations.account_statements.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.simulations.account_statements.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSimulationsAccountStatementsMutationOptions<
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

export function getPostSimulationsAccountTransfersAccountTransferIdCompleteMutationKey() {
  return [
    'simulations',
    '/simulations/account_transfers/:account_transfer_id/complete',
    'POST',
  ] as const
}

export function getPostSimulationsAccountTransfersAccountTransferIdCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.simulations.account_transfers)[':account_transfer_id']['complete']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.simulations.account_transfers)[':account_transfer_id']['complete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSimulationsAccountTransfersAccountTransferIdCompleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.simulations.account_transfers)[':account_transfer_id']['complete']['$post']
      >,
    ) {
      return parseResponse(
        client.simulations.account_transfers[':account_transfer_id'].complete.$post(args, options),
      )
    },
  })
}

export function usePostSimulationsAccountTransfersAccountTransferIdComplete<
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
                  (typeof client.simulations.account_transfers)[':account_transfer_id']['complete']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.simulations.account_transfers)[':account_transfer_id']['complete']['$post']
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
    getPostSimulationsAccountTransfersAccountTransferIdCompleteMutationOptions<
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

export function getPostSimulationsAchTransfersAchTransferIdReturnMutationKey() {
  return ['simulations', '/simulations/ach_transfers/:ach_transfer_id/return', 'POST'] as const
}

export function getPostSimulationsAchTransfersAchTransferIdReturnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.simulations.ach_transfers)[':ach_transfer_id']['return']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.simulations.ach_transfers)[':ach_transfer_id']['return']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSimulationsAchTransfersAchTransferIdReturnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.simulations.ach_transfers)[':ach_transfer_id']['return']['$post']
      >,
    ) {
      return parseResponse(
        client.simulations.ach_transfers[':ach_transfer_id'].return.$post(args, options),
      )
    },
  })
}

export function usePostSimulationsAchTransfersAchTransferIdReturn<
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
                  (typeof client.simulations.ach_transfers)[':ach_transfer_id']['return']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.simulations.ach_transfers)[':ach_transfer_id']['return']['$post']
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
  const mutationDefaults = getPostSimulationsAchTransfersAchTransferIdReturnMutationOptions<
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

export function getPostSimulationsAchTransfersAchTransferIdSubmitMutationKey() {
  return ['simulations', '/simulations/ach_transfers/:ach_transfer_id/submit', 'POST'] as const
}

export function getPostSimulationsAchTransfersAchTransferIdSubmitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.simulations.ach_transfers)[':ach_transfer_id']['submit']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.simulations.ach_transfers)[':ach_transfer_id']['submit']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSimulationsAchTransfersAchTransferIdSubmitMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.simulations.ach_transfers)[':ach_transfer_id']['submit']['$post']
      >,
    ) {
      return parseResponse(
        client.simulations.ach_transfers[':ach_transfer_id'].submit.$post(args, options),
      )
    },
  })
}

export function usePostSimulationsAchTransfersAchTransferIdSubmit<
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
                  (typeof client.simulations.ach_transfers)[':ach_transfer_id']['submit']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.simulations.ach_transfers)[':ach_transfer_id']['submit']['$post']
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
  const mutationDefaults = getPostSimulationsAchTransfersAchTransferIdSubmitMutationOptions<
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

export function getPostSimulationsCardAuthorizationsMutationKey() {
  return ['simulations', '/simulations/card_authorizations', 'POST'] as const
}

export function getPostSimulationsCardAuthorizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.simulations.card_authorizations.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.simulations.card_authorizations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSimulationsCardAuthorizationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.simulations.card_authorizations.$post>) {
      return parseResponse(client.simulations.card_authorizations.$post(args, options))
    },
  })
}

export function usePostSimulationsCardAuthorizations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.simulations.card_authorizations.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.simulations.card_authorizations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSimulationsCardAuthorizationsMutationOptions<
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

export function getPostSimulationsCardDisputesCardDisputeIdActionMutationKey() {
  return ['simulations', '/simulations/card_disputes/:card_dispute_id/action', 'POST'] as const
}

export function getPostSimulationsCardDisputesCardDisputeIdActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.simulations.card_disputes)[':card_dispute_id']['action']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.simulations.card_disputes)[':card_dispute_id']['action']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSimulationsCardDisputesCardDisputeIdActionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.simulations.card_disputes)[':card_dispute_id']['action']['$post']
      >,
    ) {
      return parseResponse(
        client.simulations.card_disputes[':card_dispute_id'].action.$post(args, options),
      )
    },
  })
}

export function usePostSimulationsCardDisputesCardDisputeIdAction<
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
                  (typeof client.simulations.card_disputes)[':card_dispute_id']['action']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.simulations.card_disputes)[':card_dispute_id']['action']['$post']
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
  const mutationDefaults = getPostSimulationsCardDisputesCardDisputeIdActionMutationOptions<
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

export function getPostSimulationsCardRefundsMutationKey() {
  return ['simulations', '/simulations/card_refunds', 'POST'] as const
}

export function getPostSimulationsCardRefundsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.simulations.card_refunds.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.simulations.card_refunds.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSimulationsCardRefundsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.simulations.card_refunds.$post>) {
      return parseResponse(client.simulations.card_refunds.$post(args, options))
    },
  })
}

export function usePostSimulationsCardRefunds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.simulations.card_refunds.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.simulations.card_refunds.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSimulationsCardRefundsMutationOptions<TError, TOnMutateResult>(
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

export function getPostSimulationsCardSettlementsMutationKey() {
  return ['simulations', '/simulations/card_settlements', 'POST'] as const
}

export function getPostSimulationsCardSettlementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.simulations.card_settlements.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.simulations.card_settlements.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSimulationsCardSettlementsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.simulations.card_settlements.$post>) {
      return parseResponse(client.simulations.card_settlements.$post(args, options))
    },
  })
}

export function usePostSimulationsCardSettlements<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.simulations.card_settlements.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.simulations.card_settlements.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSimulationsCardSettlementsMutationOptions<
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

export function getPostSimulationsCheckDepositsCheckDepositIdRejectMutationKey() {
  return ['simulations', '/simulations/check_deposits/:check_deposit_id/reject', 'POST'] as const
}

export function getPostSimulationsCheckDepositsCheckDepositIdRejectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.simulations.check_deposits)[':check_deposit_id']['reject']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.simulations.check_deposits)[':check_deposit_id']['reject']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSimulationsCheckDepositsCheckDepositIdRejectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.simulations.check_deposits)[':check_deposit_id']['reject']['$post']
      >,
    ) {
      return parseResponse(
        client.simulations.check_deposits[':check_deposit_id'].reject.$post(args, options),
      )
    },
  })
}

export function usePostSimulationsCheckDepositsCheckDepositIdReject<
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
                  (typeof client.simulations.check_deposits)[':check_deposit_id']['reject']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.simulations.check_deposits)[':check_deposit_id']['reject']['$post']
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
  const mutationDefaults = getPostSimulationsCheckDepositsCheckDepositIdRejectMutationOptions<
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

export function getPostSimulationsCheckDepositsCheckDepositIdReturnMutationKey() {
  return ['simulations', '/simulations/check_deposits/:check_deposit_id/return', 'POST'] as const
}

export function getPostSimulationsCheckDepositsCheckDepositIdReturnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.simulations.check_deposits)[':check_deposit_id']['return']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.simulations.check_deposits)[':check_deposit_id']['return']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSimulationsCheckDepositsCheckDepositIdReturnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.simulations.check_deposits)[':check_deposit_id']['return']['$post']
      >,
    ) {
      return parseResponse(
        client.simulations.check_deposits[':check_deposit_id'].return.$post(args, options),
      )
    },
  })
}

export function usePostSimulationsCheckDepositsCheckDepositIdReturn<
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
                  (typeof client.simulations.check_deposits)[':check_deposit_id']['return']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.simulations.check_deposits)[':check_deposit_id']['return']['$post']
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
  const mutationDefaults = getPostSimulationsCheckDepositsCheckDepositIdReturnMutationOptions<
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

export function getPostSimulationsCheckDepositsCheckDepositIdSubmitMutationKey() {
  return ['simulations', '/simulations/check_deposits/:check_deposit_id/submit', 'POST'] as const
}

export function getPostSimulationsCheckDepositsCheckDepositIdSubmitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.simulations.check_deposits)[':check_deposit_id']['submit']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.simulations.check_deposits)[':check_deposit_id']['submit']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSimulationsCheckDepositsCheckDepositIdSubmitMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.simulations.check_deposits)[':check_deposit_id']['submit']['$post']
      >,
    ) {
      return parseResponse(
        client.simulations.check_deposits[':check_deposit_id'].submit.$post(args, options),
      )
    },
  })
}

export function usePostSimulationsCheckDepositsCheckDepositIdSubmit<
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
                  (typeof client.simulations.check_deposits)[':check_deposit_id']['submit']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.simulations.check_deposits)[':check_deposit_id']['submit']['$post']
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
  const mutationDefaults = getPostSimulationsCheckDepositsCheckDepositIdSubmitMutationOptions<
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

export function getPostSimulationsCheckTransfersCheckTransferIdDepositMutationKey() {
  return ['simulations', '/simulations/check_transfers/:check_transfer_id/deposit', 'POST'] as const
}

export function getPostSimulationsCheckTransfersCheckTransferIdDepositMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.simulations.check_transfers)[':check_transfer_id']['deposit']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.simulations.check_transfers)[':check_transfer_id']['deposit']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSimulationsCheckTransfersCheckTransferIdDepositMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.simulations.check_transfers)[':check_transfer_id']['deposit']['$post']
      >,
    ) {
      return parseResponse(
        client.simulations.check_transfers[':check_transfer_id'].deposit.$post(args, options),
      )
    },
  })
}

export function usePostSimulationsCheckTransfersCheckTransferIdDeposit<
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
                  (typeof client.simulations.check_transfers)[':check_transfer_id']['deposit']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.simulations.check_transfers)[':check_transfer_id']['deposit']['$post']
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
  const mutationDefaults = getPostSimulationsCheckTransfersCheckTransferIdDepositMutationOptions<
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

export function getPostSimulationsCheckTransfersCheckTransferIdMailMutationKey() {
  return ['simulations', '/simulations/check_transfers/:check_transfer_id/mail', 'POST'] as const
}

export function getPostSimulationsCheckTransfersCheckTransferIdMailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.simulations.check_transfers)[':check_transfer_id']['mail']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.simulations.check_transfers)[':check_transfer_id']['mail']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSimulationsCheckTransfersCheckTransferIdMailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.simulations.check_transfers)[':check_transfer_id']['mail']['$post']
      >,
    ) {
      return parseResponse(
        client.simulations.check_transfers[':check_transfer_id'].mail.$post(args, options),
      )
    },
  })
}

export function usePostSimulationsCheckTransfersCheckTransferIdMail<
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
                  (typeof client.simulations.check_transfers)[':check_transfer_id']['mail']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.simulations.check_transfers)[':check_transfer_id']['mail']['$post']
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
  const mutationDefaults = getPostSimulationsCheckTransfersCheckTransferIdMailMutationOptions<
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

export function getPostSimulationsDigitalWalletTokenRequestsMutationKey() {
  return ['simulations', '/simulations/digital_wallet_token_requests', 'POST'] as const
}

export function getPostSimulationsDigitalWalletTokenRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.simulations.digital_wallet_token_requests.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.simulations.digital_wallet_token_requests.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSimulationsDigitalWalletTokenRequestsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.simulations.digital_wallet_token_requests.$post>,
    ) {
      return parseResponse(client.simulations.digital_wallet_token_requests.$post(args, options))
    },
  })
}

export function usePostSimulationsDigitalWalletTokenRequests<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.simulations.digital_wallet_token_requests.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.simulations.digital_wallet_token_requests.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSimulationsDigitalWalletTokenRequestsMutationOptions<
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

export function getPostSimulationsDocumentsMutationKey() {
  return ['simulations', '/simulations/documents', 'POST'] as const
}

export function getPostSimulationsDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.simulations.documents.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.simulations.documents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSimulationsDocumentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.simulations.documents.$post>) {
      return parseResponse(client.simulations.documents.$post(args, options))
    },
  })
}

export function usePostSimulationsDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.simulations.documents.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.simulations.documents.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSimulationsDocumentsMutationOptions<TError, TOnMutateResult>(
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

export function getPostSimulationsInboundAchTransfersMutationKey() {
  return ['simulations', '/simulations/inbound_ach_transfers', 'POST'] as const
}

export function getPostSimulationsInboundAchTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.simulations.inbound_ach_transfers.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.simulations.inbound_ach_transfers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSimulationsInboundAchTransfersMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.simulations.inbound_ach_transfers.$post>,
    ) {
      return parseResponse(client.simulations.inbound_ach_transfers.$post(args, options))
    },
  })
}

export function usePostSimulationsInboundAchTransfers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.simulations.inbound_ach_transfers.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.simulations.inbound_ach_transfers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSimulationsInboundAchTransfersMutationOptions<
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

export function getPostSimulationsInboundRealTimePaymentsTransfersMutationKey() {
  return ['simulations', '/simulations/inbound_real_time_payments_transfers', 'POST'] as const
}

export function getPostSimulationsInboundRealTimePaymentsTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.simulations.inbound_real_time_payments_transfers.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.simulations.inbound_real_time_payments_transfers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSimulationsInboundRealTimePaymentsTransfersMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.simulations.inbound_real_time_payments_transfers.$post>,
    ) {
      return parseResponse(
        client.simulations.inbound_real_time_payments_transfers.$post(args, options),
      )
    },
  })
}

export function usePostSimulationsInboundRealTimePaymentsTransfers<
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
                ReturnType<typeof client.simulations.inbound_real_time_payments_transfers.$post>
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.simulations.inbound_real_time_payments_transfers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSimulationsInboundRealTimePaymentsTransfersMutationOptions<
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

export function getPostSimulationsInboundWireDrawdownRequestsMutationKey() {
  return ['simulations', '/simulations/inbound_wire_drawdown_requests', 'POST'] as const
}

export function getPostSimulationsInboundWireDrawdownRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.simulations.inbound_wire_drawdown_requests.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.simulations.inbound_wire_drawdown_requests.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSimulationsInboundWireDrawdownRequestsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.simulations.inbound_wire_drawdown_requests.$post>,
    ) {
      return parseResponse(client.simulations.inbound_wire_drawdown_requests.$post(args, options))
    },
  })
}

export function usePostSimulationsInboundWireDrawdownRequests<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.simulations.inbound_wire_drawdown_requests.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.simulations.inbound_wire_drawdown_requests.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSimulationsInboundWireDrawdownRequestsMutationOptions<
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

export function getPostSimulationsInboundWireTransfersMutationKey() {
  return ['simulations', '/simulations/inbound_wire_transfers', 'POST'] as const
}

export function getPostSimulationsInboundWireTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.simulations.inbound_wire_transfers.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.simulations.inbound_wire_transfers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSimulationsInboundWireTransfersMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.simulations.inbound_wire_transfers.$post>,
    ) {
      return parseResponse(client.simulations.inbound_wire_transfers.$post(args, options))
    },
  })
}

export function usePostSimulationsInboundWireTransfers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.simulations.inbound_wire_transfers.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.simulations.inbound_wire_transfers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSimulationsInboundWireTransfersMutationOptions<
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

export function getPostSimulationsWireTransfersWireTransferIdReverseMutationKey() {
  return ['simulations', '/simulations/wire_transfers/:wire_transfer_id/reverse', 'POST'] as const
}

export function getPostSimulationsWireTransfersWireTransferIdReverseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.simulations.wire_transfers)[':wire_transfer_id']['reverse']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.simulations.wire_transfers)[':wire_transfer_id']['reverse']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSimulationsWireTransfersWireTransferIdReverseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.simulations.wire_transfers)[':wire_transfer_id']['reverse']['$post']
      >,
    ) {
      return parseResponse(
        client.simulations.wire_transfers[':wire_transfer_id'].reverse.$post(args, options),
      )
    },
  })
}

export function usePostSimulationsWireTransfersWireTransferIdReverse<
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
                  (typeof client.simulations.wire_transfers)[':wire_transfer_id']['reverse']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.simulations.wire_transfers)[':wire_transfer_id']['reverse']['$post']
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
  const mutationDefaults = getPostSimulationsWireTransfersWireTransferIdReverseMutationOptions<
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

export function getPostSimulationsWireTransfersWireTransferIdSubmitMutationKey() {
  return ['simulations', '/simulations/wire_transfers/:wire_transfer_id/submit', 'POST'] as const
}

export function getPostSimulationsWireTransfersWireTransferIdSubmitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.simulations.wire_transfers)[':wire_transfer_id']['submit']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.simulations.wire_transfers)[':wire_transfer_id']['submit']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSimulationsWireTransfersWireTransferIdSubmitMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.simulations.wire_transfers)[':wire_transfer_id']['submit']['$post']
      >,
    ) {
      return parseResponse(
        client.simulations.wire_transfers[':wire_transfer_id'].submit.$post(args, options),
      )
    },
  })
}

export function usePostSimulationsWireTransfersWireTransferIdSubmit<
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
                  (typeof client.simulations.wire_transfers)[':wire_transfer_id']['submit']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.simulations.wire_transfers)[':wire_transfer_id']['submit']['$post']
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
  const mutationDefaults = getPostSimulationsWireTransfersWireTransferIdSubmitMutationOptions<
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

export function getTransactionsQueryKey(args: InferRequestType<typeof client.transactions.$get>) {
  return ['transactions', '/transactions', args] as const
}

export function getTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.transactions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTransactionsQueryKey>
  >({
    queryKey: getTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.transactions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.transactions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTransactionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTransactionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.transactions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTransactionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTransactionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTransactionsTransactionIdQueryKey(
  args: InferRequestType<(typeof client.transactions)[':transaction_id']['$get']>,
) {
  return ['transactions', '/transactions/:transaction_id', args] as const
}

export function getTransactionsTransactionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.transactions)[':transaction_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.transactions)[':transaction_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transactions)[':transaction_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionsTransactionIdQueryKey>
  >({
    queryKey: getTransactionsTransactionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.transactions[':transaction_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTransactionsTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.transactions)[':transaction_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.transactions)[':transaction_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.transactions)[':transaction_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTransactionsTransactionIdQueryKey>
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
      ...getTransactionsTransactionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTransactionsTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.transactions)[':transaction_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.transactions)[':transaction_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.transactions)[':transaction_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTransactionsTransactionIdQueryKey>
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
      ...getTransactionsTransactionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getWireDrawdownRequestsQueryKey(
  args: InferRequestType<typeof client.wire_drawdown_requests.$get>,
) {
  return ['wire_drawdown_requests', '/wire_drawdown_requests', args] as const
}

export function getWireDrawdownRequestsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wire_drawdown_requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wire_drawdown_requests.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wire_drawdown_requests.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWireDrawdownRequestsQueryKey>
  >({
    queryKey: getWireDrawdownRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wire_drawdown_requests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWireDrawdownRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wire_drawdown_requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wire_drawdown_requests.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.wire_drawdown_requests.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWireDrawdownRequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWireDrawdownRequestsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWireDrawdownRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wire_drawdown_requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wire_drawdown_requests.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.wire_drawdown_requests.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWireDrawdownRequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWireDrawdownRequestsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostWireDrawdownRequestsMutationKey() {
  return ['wire_drawdown_requests', '/wire_drawdown_requests', 'POST'] as const
}

export function getPostWireDrawdownRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wire_drawdown_requests.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.wire_drawdown_requests.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWireDrawdownRequestsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.wire_drawdown_requests.$post>) {
      return parseResponse(client.wire_drawdown_requests.$post(args, options))
    },
  })
}

export function usePostWireDrawdownRequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.wire_drawdown_requests.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.wire_drawdown_requests.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWireDrawdownRequestsMutationOptions<TError, TOnMutateResult>(
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

export function getWireDrawdownRequestsWireDrawdownRequestIdQueryKey(
  args: InferRequestType<
    (typeof client.wire_drawdown_requests)[':wire_drawdown_request_id']['$get']
  >,
) {
  return [
    'wire_drawdown_requests',
    '/wire_drawdown_requests/:wire_drawdown_request_id',
    args,
  ] as const
}

export function getWireDrawdownRequestsWireDrawdownRequestIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.wire_drawdown_requests)[':wire_drawdown_request_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.wire_drawdown_requests)[':wire_drawdown_request_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.wire_drawdown_requests)[':wire_drawdown_request_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWireDrawdownRequestsWireDrawdownRequestIdQueryKey>
  >({
    queryKey: getWireDrawdownRequestsWireDrawdownRequestIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wire_drawdown_requests[':wire_drawdown_request_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWireDrawdownRequestsWireDrawdownRequestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.wire_drawdown_requests)[':wire_drawdown_request_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.wire_drawdown_requests)[':wire_drawdown_request_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.wire_drawdown_requests)[':wire_drawdown_request_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWireDrawdownRequestsWireDrawdownRequestIdQueryKey>
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
      ...getWireDrawdownRequestsWireDrawdownRequestIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWireDrawdownRequestsWireDrawdownRequestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.wire_drawdown_requests)[':wire_drawdown_request_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.wire_drawdown_requests)[':wire_drawdown_request_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.wire_drawdown_requests)[':wire_drawdown_request_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWireDrawdownRequestsWireDrawdownRequestIdQueryKey>
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
      ...getWireDrawdownRequestsWireDrawdownRequestIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getWireTransfersQueryKey(
  args: InferRequestType<typeof client.wire_transfers.$get>,
) {
  return ['wire_transfers', '/wire_transfers', args] as const
}

export function getWireTransfersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wire_transfers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.wire_transfers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wire_transfers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWireTransfersQueryKey>
  >({
    queryKey: getWireTransfersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wire_transfers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useWireTransfers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wire_transfers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wire_transfers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wire_transfers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWireTransfersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWireTransfersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWireTransfers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wire_transfers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wire_transfers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wire_transfers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWireTransfersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWireTransfersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostWireTransfersMutationKey() {
  return ['wire_transfers', '/wire_transfers', 'POST'] as const
}

export function getPostWireTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wire_transfers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.wire_transfers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWireTransfersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.wire_transfers.$post>) {
      return parseResponse(client.wire_transfers.$post(args, options))
    },
  })
}

export function usePostWireTransfers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wire_transfers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.wire_transfers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWireTransfersMutationOptions<TError, TOnMutateResult>(
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

export function getWireTransfersWireTransferIdQueryKey(
  args: InferRequestType<(typeof client.wire_transfers)[':wire_transfer_id']['$get']>,
) {
  return ['wire_transfers', '/wire_transfers/:wire_transfer_id', args] as const
}

export function getWireTransfersWireTransferIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wire_transfers)[':wire_transfer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wire_transfers)[':wire_transfer_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wire_transfers)[':wire_transfer_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWireTransfersWireTransferIdQueryKey>
  >({
    queryKey: getWireTransfersWireTransferIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wire_transfers[':wire_transfer_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWireTransfersWireTransferId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wire_transfers)[':wire_transfer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wire_transfers)[':wire_transfer_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.wire_transfers)[':wire_transfer_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWireTransfersWireTransferIdQueryKey>
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
      ...getWireTransfersWireTransferIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWireTransfersWireTransferId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wire_transfers)[':wire_transfer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wire_transfers)[':wire_transfer_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.wire_transfers)[':wire_transfer_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWireTransfersWireTransferIdQueryKey>
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
      ...getWireTransfersWireTransferIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostWireTransfersWireTransferIdApproveMutationKey() {
  return ['wire_transfers', '/wire_transfers/:wire_transfer_id/approve', 'POST'] as const
}

export function getPostWireTransfersWireTransferIdApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.wire_transfers)[':wire_transfer_id']['approve']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wire_transfers)[':wire_transfer_id']['approve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWireTransfersWireTransferIdApproveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wire_transfers)[':wire_transfer_id']['approve']['$post']
      >,
    ) {
      return parseResponse(client.wire_transfers[':wire_transfer_id'].approve.$post(args, options))
    },
  })
}

export function usePostWireTransfersWireTransferIdApprove<
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
                ReturnType<(typeof client.wire_transfers)[':wire_transfer_id']['approve']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.wire_transfers)[':wire_transfer_id']['approve']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWireTransfersWireTransferIdApproveMutationOptions<
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

export function getPostWireTransfersWireTransferIdCancelMutationKey() {
  return ['wire_transfers', '/wire_transfers/:wire_transfer_id/cancel', 'POST'] as const
}

export function getPostWireTransfersWireTransferIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.wire_transfers)[':wire_transfer_id']['cancel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wire_transfers)[':wire_transfer_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWireTransfersWireTransferIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wire_transfers)[':wire_transfer_id']['cancel']['$post']
      >,
    ) {
      return parseResponse(client.wire_transfers[':wire_transfer_id'].cancel.$post(args, options))
    },
  })
}

export function usePostWireTransfersWireTransferIdCancel<
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
                ReturnType<(typeof client.wire_transfers)[':wire_transfer_id']['cancel']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.wire_transfers)[':wire_transfer_id']['cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWireTransfersWireTransferIdCancelMutationOptions<
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
