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
  args: MaybeRefOrGetter<InferRequestType<typeof client.account_numbers.$get>>,
) {
  return ['account_numbers', '/account_numbers', toValue(args)] as const
}

export function getAccountNumbersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account_numbers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountNumbersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account_numbers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account_numbers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account_numbers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account_numbers.$get>>>
            >
          >,
          ReturnType<typeof getAccountNumbersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_numbers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountNumbersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountNumbersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account_numbers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account_numbers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account_numbers.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account_numbers)[':account_number_id']['$get']>
  >,
) {
  return ['account_numbers', '/account_numbers/:account_number_id', toValue(args)] as const
}

export function getAccountNumbersAccountNumberIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account_numbers)[':account_number_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountNumbersAccountNumberIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account_numbers[':account_number_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account_numbers)[':account_number_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account_numbers)[':account_number_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountNumbersAccountNumberIdQueryKey>
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
          Awaited<ReturnType<(typeof client.account_numbers)[':account_number_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountNumbersAccountNumberIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountNumbersAccountNumberIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account_numbers[':account_number_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.account_statements.$get>>,
) {
  return ['account_statements', '/account_statements', toValue(args)] as const
}

export function getAccountStatementsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account_statements.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountStatementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account_statements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountStatements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_statements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account_statements.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account_statements.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account_statements.$get>>>
            >
          >,
          ReturnType<typeof getAccountStatementsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_statements.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountStatementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountStatementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account_statements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountStatementsAccountStatementIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account_statements)[':account_statement_id']['$get']>
  >,
) {
  return ['account_statements', '/account_statements/:account_statement_id', toValue(args)] as const
}

export function getAccountStatementsAccountStatementIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account_statements)[':account_statement_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountStatementsAccountStatementIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account_statements[':account_statement_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account_statements)[':account_statement_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.account_statements)[':account_statement_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountStatementsAccountStatementIdQueryKey>
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
          Awaited<ReturnType<(typeof client.account_statements)[':account_statement_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountStatementsAccountStatementIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountStatementsAccountStatementIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account_statements[':account_statement_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountTransfersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account_transfers.$get>>,
) {
  return ['account_transfers', '/account_transfers', toValue(args)] as const
}

export function getAccountTransfersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account_transfers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountTransfersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account_transfers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountTransfers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_transfers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account_transfers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account_transfers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account_transfers.$get>>>
            >
          >,
          ReturnType<typeof getAccountTransfersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_transfers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountTransfersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountTransfersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account_transfers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account_transfers)[':account_transfer_id']['$get']>
  >,
) {
  return ['account_transfers', '/account_transfers/:account_transfer_id', toValue(args)] as const
}

export function getAccountTransfersAccountTransferIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account_transfers)[':account_transfer_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountTransfersAccountTransferIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account_transfers[':account_transfer_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account_transfers)[':account_transfer_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.account_transfers)[':account_transfer_id']['$get']>
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
                  ReturnType<(typeof client.account_transfers)[':account_transfer_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountTransfersAccountTransferIdQueryKey>
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
          Awaited<ReturnType<(typeof client.account_transfers)[':account_transfer_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountTransfersAccountTransferIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountTransfersAccountTransferIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account_transfers[':account_transfer_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.accounts.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':account_id']['$get']>>,
) {
  return ['accounts', '/accounts/:account_id', toValue(args)] as const
}

export function getAccountsAccountIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':account_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':account_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':account_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':account_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.ach_prenotifications.$get>>,
) {
  return ['ach_prenotifications', '/ach_prenotifications', toValue(args)] as const
}

export function getAchPrenotificationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ach_prenotifications.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAchPrenotificationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ach_prenotifications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAchPrenotifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ach_prenotifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ach_prenotifications.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ach_prenotifications.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ach_prenotifications.$get>>>
            >
          >,
          ReturnType<typeof getAchPrenotificationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ach_prenotifications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAchPrenotificationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAchPrenotificationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ach_prenotifications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ach_prenotifications)[':ach_prenotification_id']['$get']>
  >,
) {
  return [
    'ach_prenotifications',
    '/ach_prenotifications/:ach_prenotification_id',
    toValue(args),
  ] as const
}

export function getAchPrenotificationsAchPrenotificationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ach_prenotifications)[':ach_prenotification_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAchPrenotificationsAchPrenotificationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ach_prenotifications[':ach_prenotification_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ach_prenotifications)[':ach_prenotification_id']['$get']>
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
                    (typeof client.ach_prenotifications)[':ach_prenotification_id']['$get']
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
                    (typeof client.ach_prenotifications)[':ach_prenotification_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAchPrenotificationsAchPrenotificationIdQueryKey>
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
            ReturnType<(typeof client.ach_prenotifications)[':ach_prenotification_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAchPrenotificationsAchPrenotificationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAchPrenotificationsAchPrenotificationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ach_prenotifications[':ach_prenotification_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAchTransfersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ach_transfers.$get>>,
) {
  return ['ach_transfers', '/ach_transfers', toValue(args)] as const
}

export function getAchTransfersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ach_transfers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAchTransfersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ach_transfers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAchTransfers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ach_transfers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ach_transfers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ach_transfers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ach_transfers.$get>>>>
          >,
          ReturnType<typeof getAchTransfersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ach_transfers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAchTransfersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAchTransfersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ach_transfers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ach_transfers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.ach_transfers.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ach_transfers)[':ach_transfer_id']['$get']>
  >,
) {
  return ['ach_transfers', '/ach_transfers/:ach_transfer_id', toValue(args)] as const
}

export function getAchTransfersAchTransferIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ach_transfers)[':ach_transfer_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAchTransfersAchTransferIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ach_transfers[':ach_transfer_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ach_transfers)[':ach_transfer_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ach_transfers)[':ach_transfer_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAchTransfersAchTransferIdQueryKey>
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
          Awaited<ReturnType<(typeof client.ach_transfers)[':ach_transfer_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAchTransfersAchTransferIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAchTransfersAchTransferIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ach_transfers[':ach_transfer_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getCardDisputesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.card_disputes.$get>>,
) {
  return ['card_disputes', '/card_disputes', toValue(args)] as const
}

export function getCardDisputesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.card_disputes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardDisputesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.card_disputes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardDisputes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_disputes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.card_disputes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_disputes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_disputes.$get>>>>
          >,
          ReturnType<typeof getCardDisputesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_disputes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCardDisputesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardDisputesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.card_disputes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_disputes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.card_disputes.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.card_disputes)[':card_dispute_id']['$get']>
  >,
) {
  return ['card_disputes', '/card_disputes/:card_dispute_id', toValue(args)] as const
}

export function getCardDisputesCardDisputeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.card_disputes)[':card_dispute_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardDisputesCardDisputeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.card_disputes[':card_dispute_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.card_disputes)[':card_dispute_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.card_disputes)[':card_dispute_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCardDisputesCardDisputeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.card_disputes)[':card_dispute_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardDisputesCardDisputeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardDisputesCardDisputeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.card_disputes[':card_dispute_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCardProfilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.card_profiles.$get>>,
) {
  return ['card_profiles', '/card_profiles', toValue(args)] as const
}

export function getCardProfilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.card_profiles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardProfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.card_profiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardProfiles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_profiles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.card_profiles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_profiles.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_profiles.$get>>>>
          >,
          ReturnType<typeof getCardProfilesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_profiles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCardProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardProfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.card_profiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_profiles.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.card_profiles.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.card_profiles)[':card_profile_id']['$get']>
  >,
) {
  return ['card_profiles', '/card_profiles/:card_profile_id', toValue(args)] as const
}

export function getCardProfilesCardProfileIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.card_profiles)[':card_profile_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardProfilesCardProfileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.card_profiles[':card_profile_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.card_profiles)[':card_profile_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.card_profiles)[':card_profile_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCardProfilesCardProfileIdQueryKey>
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
          Awaited<ReturnType<(typeof client.card_profiles)[':card_profile_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardProfilesCardProfileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardProfilesCardProfileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.card_profiles[':card_profile_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCardsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cards.$get>>,
) {
  return ['cards', '/cards', toValue(args)] as const
}

export function getCardsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cards.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCards<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cards.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
          ReturnType<typeof getCardsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$post>>>>>,
          TError,
          InferRequestType<typeof client.cards.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':card_id']['$get']>>,
) {
  return ['cards', '/cards/:card_id', toValue(args)] as const
}

export function getCardsCardIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':card_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsCardIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':card_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsCardId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':card_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>
            >
          >,
          ReturnType<typeof getCardsCardIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsCardIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsCardIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':card_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':card_id']['details']['$get']>>,
) {
  return ['cards', '/cards/:card_id/details', toValue(args)] as const
}

export function getCardsCardIdDetailsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':card_id']['details']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsCardIdDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':card_id'].details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':card_id']['details']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':card_id']['details']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCardsCardIdDetailsQueryKey>
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
          Awaited<ReturnType<(typeof client.cards)[':card_id']['details']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsCardIdDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsCardIdDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':card_id'].details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCheckDepositsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.check_deposits.$get>>,
) {
  return ['check_deposits', '/check_deposits', toValue(args)] as const
}

export function getCheckDepositsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.check_deposits.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCheckDepositsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.check_deposits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCheckDeposits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_deposits.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.check_deposits.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_deposits.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_deposits.$get>>>>
          >,
          ReturnType<typeof getCheckDepositsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_deposits.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCheckDepositsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCheckDepositsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.check_deposits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.check_deposits.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.check_deposits.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.check_deposits)[':check_deposit_id']['$get']>
  >,
) {
  return ['check_deposits', '/check_deposits/:check_deposit_id', toValue(args)] as const
}

export function getCheckDepositsCheckDepositIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.check_deposits)[':check_deposit_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCheckDepositsCheckDepositIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.check_deposits[':check_deposit_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.check_deposits)[':check_deposit_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.check_deposits)[':check_deposit_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCheckDepositsCheckDepositIdQueryKey>
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
          Awaited<ReturnType<(typeof client.check_deposits)[':check_deposit_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCheckDepositsCheckDepositIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCheckDepositsCheckDepositIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.check_deposits[':check_deposit_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCheckTransfersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.check_transfers.$get>>,
) {
  return ['check_transfers', '/check_transfers', toValue(args)] as const
}

export function getCheckTransfersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.check_transfers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCheckTransfersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.check_transfers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCheckTransfers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_transfers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.check_transfers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.check_transfers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.check_transfers.$get>>>
            >
          >,
          ReturnType<typeof getCheckTransfersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_transfers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCheckTransfersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCheckTransfersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.check_transfers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.check_transfers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.check_transfers.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.check_transfers)[':check_transfer_id']['$get']>
  >,
) {
  return ['check_transfers', '/check_transfers/:check_transfer_id', toValue(args)] as const
}

export function getCheckTransfersCheckTransferIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.check_transfers)[':check_transfer_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCheckTransfersCheckTransferIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.check_transfers[':check_transfer_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.check_transfers)[':check_transfer_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.check_transfers)[':check_transfer_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCheckTransfersCheckTransferIdQueryKey>
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
          Awaited<ReturnType<(typeof client.check_transfers)[':check_transfer_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCheckTransfersCheckTransferIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCheckTransfersCheckTransferIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.check_transfers[':check_transfer_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.check_transfers)[':check_transfer_id']['approve']['$post']
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.check_transfers)[':check_transfer_id']['cancel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.check_transfers)[':check_transfer_id']['cancel']['$post']
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.declined_transactions.$get>>,
) {
  return ['declined_transactions', '/declined_transactions', toValue(args)] as const
}

export function getDeclinedTransactionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.declined_transactions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeclinedTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.declined_transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeclinedTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.declined_transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.declined_transactions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.declined_transactions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.declined_transactions.$get>>>
            >
          >,
          ReturnType<typeof getDeclinedTransactionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.declined_transactions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeclinedTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeclinedTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.declined_transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeclinedTransactionsDeclinedTransactionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.declined_transactions)[':declined_transaction_id']['$get']>
  >,
) {
  return [
    'declined_transactions',
    '/declined_transactions/:declined_transaction_id',
    toValue(args),
  ] as const
}

export function getDeclinedTransactionsDeclinedTransactionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.declined_transactions)[':declined_transaction_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeclinedTransactionsDeclinedTransactionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.declined_transactions[':declined_transaction_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.declined_transactions)[':declined_transaction_id']['$get']>
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
                    (typeof client.declined_transactions)[':declined_transaction_id']['$get']
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
                    (typeof client.declined_transactions)[':declined_transaction_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDeclinedTransactionsDeclinedTransactionIdQueryKey>
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
            ReturnType<(typeof client.declined_transactions)[':declined_transaction_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeclinedTransactionsDeclinedTransactionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeclinedTransactionsDeclinedTransactionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.declined_transactions[':declined_transaction_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDigitalWalletTokensQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.digital_wallet_tokens.$get>>,
) {
  return ['digital_wallet_tokens', '/digital_wallet_tokens', toValue(args)] as const
}

export function getDigitalWalletTokensQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.digital_wallet_tokens.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDigitalWalletTokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.digital_wallet_tokens.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDigitalWalletTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.digital_wallet_tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.digital_wallet_tokens.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.digital_wallet_tokens.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.digital_wallet_tokens.$get>>>
            >
          >,
          ReturnType<typeof getDigitalWalletTokensQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.digital_wallet_tokens.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDigitalWalletTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDigitalWalletTokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.digital_wallet_tokens.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDigitalWalletTokensDigitalWalletTokenIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.digital_wallet_tokens)[':digital_wallet_token_id']['$get']>
  >,
) {
  return [
    'digital_wallet_tokens',
    '/digital_wallet_tokens/:digital_wallet_token_id',
    toValue(args),
  ] as const
}

export function getDigitalWalletTokensDigitalWalletTokenIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.digital_wallet_tokens)[':digital_wallet_token_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDigitalWalletTokensDigitalWalletTokenIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.digital_wallet_tokens[':digital_wallet_token_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.digital_wallet_tokens)[':digital_wallet_token_id']['$get']>
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
                    (typeof client.digital_wallet_tokens)[':digital_wallet_token_id']['$get']
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
                    (typeof client.digital_wallet_tokens)[':digital_wallet_token_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDigitalWalletTokensDigitalWalletTokenIdQueryKey>
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
            ReturnType<(typeof client.digital_wallet_tokens)[':digital_wallet_token_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDigitalWalletTokensDigitalWalletTokenIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDigitalWalletTokensDigitalWalletTokenIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.digital_wallet_tokens[':digital_wallet_token_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDocumentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.documents.$get>>,
) {
  return ['documents', '/documents', toValue(args)] as const
}

export function getDocumentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.documents.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDocumentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.documents.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDocuments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.documents.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>
          >,
          ReturnType<typeof getDocumentsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDocumentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDocumentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.documents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDocumentsDocumentIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.documents)[':document_id']['$get']>>,
) {
  return ['documents', '/documents/:document_id', toValue(args)] as const
}

export function getDocumentsDocumentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.documents)[':document_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDocumentsDocumentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.documents[':document_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDocumentsDocumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':document_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.documents)[':document_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.documents)[':document_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDocumentsDocumentIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':document_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDocumentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDocumentsDocumentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.documents[':document_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.$get>>,
) {
  return ['entities', '/entities', toValue(args)] as const
}

export function getEntitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEntities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.$get>>>>
          >,
          ReturnType<typeof getEntitiesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEntitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.entities.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)[':entity_id']['$get']>>,
) {
  return ['entities', '/entities/:entity_id', toValue(args)] as const
}

export function getEntitiesEntityIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)[':entity_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntitiesEntityIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entities[':entity_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntitiesEntityId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)[':entity_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entities)[':entity_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)[':entity_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEntitiesEntityIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities)[':entity_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesEntityIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntitiesEntityIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entities[':entity_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
          InferRequestType<
            (typeof client.entities)[':entity_id']['supplemental_documents']['$post']
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.event_subscriptions.$get>>,
) {
  return ['event_subscriptions', '/event_subscriptions', toValue(args)] as const
}

export function getEventSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.event_subscriptions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.event_subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.event_subscriptions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.event_subscriptions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.event_subscriptions.$get>>>
            >
          >,
          ReturnType<typeof getEventSubscriptionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_subscriptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEventSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.event_subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.event_subscriptions)[':event_subscription_id']['$get']>
  >,
) {
  return [
    'event_subscriptions',
    '/event_subscriptions/:event_subscription_id',
    toValue(args),
  ] as const
}

export function getEventSubscriptionsEventSubscriptionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.event_subscriptions)[':event_subscription_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventSubscriptionsEventSubscriptionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.event_subscriptions[':event_subscription_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.event_subscriptions)[':event_subscription_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.event_subscriptions)[':event_subscription_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEventSubscriptionsEventSubscriptionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.event_subscriptions)[':event_subscription_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventSubscriptionsEventSubscriptionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventSubscriptionsEventSubscriptionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.event_subscriptions[':event_subscription_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.event_subscriptions)[':event_subscription_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.event_subscriptions)[':event_subscription_id']['$patch']>,
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

export function getEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
) {
  return ['events', '/events', toValue(args)] as const
}

export function getEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          ReturnType<typeof getEventsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsEventIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':event_id']['$get']>>,
) {
  return ['events', '/events/:event_id', toValue(args)] as const
}

export function getEventsEventIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':event_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsEventIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events[':event_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':event_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
            >
          >,
          ReturnType<typeof getEventsEventIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsEventIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsEventIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events[':event_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExternalAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.external_accounts.$get>>,
) {
  return ['external_accounts', '/external_accounts', toValue(args)] as const
}

export function getExternalAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.external_accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExternalAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.external_accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExternalAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.external_accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.external_accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.external_accounts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.external_accounts.$get>>>
            >
          >,
          ReturnType<typeof getExternalAccountsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.external_accounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getExternalAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExternalAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.external_accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.external_accounts)[':external_account_id']['$get']>
  >,
) {
  return ['external_accounts', '/external_accounts/:external_account_id', toValue(args)] as const
}

export function getExternalAccountsExternalAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.external_accounts)[':external_account_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExternalAccountsExternalAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.external_accounts[':external_account_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.external_accounts)[':external_account_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.external_accounts)[':external_account_id']['$get']>
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
                  ReturnType<(typeof client.external_accounts)[':external_account_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getExternalAccountsExternalAccountIdQueryKey>
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
          Awaited<ReturnType<(typeof client.external_accounts)[':external_account_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExternalAccountsExternalAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExternalAccountsExternalAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.external_accounts[':external_account_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getFilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.files.$get>>,
) {
  return ['files', '/files', toValue(args)] as const
}

export function getFilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.files.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFiles<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.files.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
          ReturnType<typeof getFilesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$post>>>>>,
          TError,
          InferRequestType<typeof client.files.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['$get']>>,
) {
  return ['files', '/files/:file_id', toValue(args)] as const
}

export function getFilesFileIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':file_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilesFileId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
            >
          >,
          ReturnType<typeof getFilesFileIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':file_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGroupsCurrentQueryKey() {
  return ['groups', '/groups/current'] as const
}

export function getGroupsCurrentQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGroupsCurrentQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups.current.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGroupsCurrent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.current.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.current.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.current.$get>>>>
          >,
          ReturnType<typeof getGroupsCurrentQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.current.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsCurrentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGroupsCurrentQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.groups.current.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInboundAchTransferReturnsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inbound_ach_transfer_returns.$get>>,
) {
  return ['inbound_ach_transfer_returns', '/inbound_ach_transfer_returns', toValue(args)] as const
}

export function getInboundAchTransferReturnsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inbound_ach_transfer_returns.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInboundAchTransferReturnsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inbound_ach_transfer_returns.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInboundAchTransferReturns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.inbound_ach_transfer_returns.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inbound_ach_transfer_returns.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.inbound_ach_transfer_returns.$get>>
              >
            >
          >,
          ReturnType<typeof getInboundAchTransferReturnsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.inbound_ach_transfer_returns.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboundAchTransferReturnsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInboundAchTransferReturnsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.inbound_ach_transfer_returns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.inbound_ach_transfer_returns)[':inbound_ach_transfer_return_id']['$get']
    >
  >,
) {
  return [
    'inbound_ach_transfer_returns',
    '/inbound_ach_transfer_returns/:inbound_ach_transfer_return_id',
    toValue(args),
  ] as const
}

export function getInboundAchTransferReturnsInboundAchTransferReturnIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.inbound_ach_transfer_returns)[':inbound_ach_transfer_return_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInboundAchTransferReturnsInboundAchTransferReturnIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inbound_ach_transfer_returns[':inbound_ach_transfer_return_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.inbound_ach_transfer_returns)[':inbound_ach_transfer_return_id']['$get']
    >
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
                    (typeof client.inbound_ach_transfer_returns)[':inbound_ach_transfer_return_id']['$get']
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
                    (typeof client.inbound_ach_transfer_returns)[':inbound_ach_transfer_return_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInboundAchTransferReturnsInboundAchTransferReturnIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getInboundAchTransferReturnsInboundAchTransferReturnIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.inbound_ach_transfer_returns[':inbound_ach_transfer_return_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getInboundWireDrawdownRequestsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inbound_wire_drawdown_requests.$get>>,
) {
  return [
    'inbound_wire_drawdown_requests',
    '/inbound_wire_drawdown_requests',
    toValue(args),
  ] as const
}

export function getInboundWireDrawdownRequestsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inbound_wire_drawdown_requests.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInboundWireDrawdownRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inbound_wire_drawdown_requests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInboundWireDrawdownRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.inbound_wire_drawdown_requests.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inbound_wire_drawdown_requests.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.inbound_wire_drawdown_requests.$get>>
              >
            >
          >,
          ReturnType<typeof getInboundWireDrawdownRequestsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.inbound_wire_drawdown_requests.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboundWireDrawdownRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInboundWireDrawdownRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.inbound_wire_drawdown_requests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInboundWireDrawdownRequestsInboundWireDrawdownRequestIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.inbound_wire_drawdown_requests)[':inbound_wire_drawdown_request_id']['$get']
    >
  >,
) {
  return [
    'inbound_wire_drawdown_requests',
    '/inbound_wire_drawdown_requests/:inbound_wire_drawdown_request_id',
    toValue(args),
  ] as const
}

export function getInboundWireDrawdownRequestsInboundWireDrawdownRequestIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.inbound_wire_drawdown_requests)[':inbound_wire_drawdown_request_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getInboundWireDrawdownRequestsInboundWireDrawdownRequestIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inbound_wire_drawdown_requests[':inbound_wire_drawdown_request_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.inbound_wire_drawdown_requests)[':inbound_wire_drawdown_request_id']['$get']
    >
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
                    (typeof client.inbound_wire_drawdown_requests)[':inbound_wire_drawdown_request_id']['$get']
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
                    (typeof client.inbound_wire_drawdown_requests)[':inbound_wire_drawdown_request_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInboundWireDrawdownRequestsInboundWireDrawdownRequestIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getInboundWireDrawdownRequestsInboundWireDrawdownRequestIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.inbound_wire_drawdown_requests[':inbound_wire_drawdown_request_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getLimitsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.limits.$get>>,
) {
  return ['limits', '/limits', toValue(args)] as const
}

export function getLimitsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.limits.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLimitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.limits.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLimits<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.limits.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.limits.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.limits.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.limits.$get>>>>>,
          ReturnType<typeof getLimitsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.limits.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLimitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLimitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.limits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.limits.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.limits.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.limits)[':limit_id']['$get']>>,
) {
  return ['limits', '/limits/:limit_id', toValue(args)] as const
}

export function getLimitsLimitIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.limits)[':limit_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLimitsLimitIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.limits[':limit_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLimitsLimitId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.limits)[':limit_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.limits)[':limit_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.limits)[':limit_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.limits)[':limit_id']['$get']>>>
            >
          >,
          ReturnType<typeof getLimitsLimitIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.limits)[':limit_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLimitsLimitIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLimitsLimitIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.limits[':limit_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.limits)[':limit_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.limits)[':limit_id']['$patch']>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth_connections.$get>>,
) {
  return ['oauth_connections', '/oauth_connections', toValue(args)] as const
}

export function getOauthConnectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth_connections.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOauthConnectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth_connections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOauthConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth_connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth_connections.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth_connections.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth_connections.$get>>>
            >
          >,
          ReturnType<typeof getOauthConnectionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth_connections.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOauthConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOauthConnectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth_connections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOauthConnectionsOauthConnectionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.oauth_connections)[':oauth_connection_id']['$get']>
  >,
) {
  return ['oauth_connections', '/oauth_connections/:oauth_connection_id', toValue(args)] as const
}

export function getOauthConnectionsOauthConnectionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.oauth_connections)[':oauth_connection_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOauthConnectionsOauthConnectionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth_connections[':oauth_connection_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.oauth_connections)[':oauth_connection_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.oauth_connections)[':oauth_connection_id']['$get']>
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
                  ReturnType<(typeof client.oauth_connections)[':oauth_connection_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOauthConnectionsOauthConnectionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.oauth_connections)[':oauth_connection_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOauthConnectionsOauthConnectionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOauthConnectionsOauthConnectionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth_connections[':oauth_connection_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPendingTransactionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pending_transactions.$get>>,
) {
  return ['pending_transactions', '/pending_transactions', toValue(args)] as const
}

export function getPendingTransactionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pending_transactions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPendingTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pending_transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePendingTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pending_transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pending_transactions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.pending_transactions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.pending_transactions.$get>>>
            >
          >,
          ReturnType<typeof getPendingTransactionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pending_transactions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPendingTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPendingTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pending_transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPendingTransactionsPendingTransactionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pending_transactions)[':pending_transaction_id']['$get']>
  >,
) {
  return [
    'pending_transactions',
    '/pending_transactions/:pending_transaction_id',
    toValue(args),
  ] as const
}

export function getPendingTransactionsPendingTransactionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pending_transactions)[':pending_transaction_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPendingTransactionsPendingTransactionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pending_transactions[':pending_transaction_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pending_transactions)[':pending_transaction_id']['$get']>
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
                    (typeof client.pending_transactions)[':pending_transaction_id']['$get']
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
                    (typeof client.pending_transactions)[':pending_transaction_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPendingTransactionsPendingTransactionIdQueryKey>
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
            ReturnType<(typeof client.pending_transactions)[':pending_transaction_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPendingTransactionsPendingTransactionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPendingTransactionsPendingTransactionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pending_transactions[':pending_transaction_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealTimeDecisionsRealTimeDecisionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.real_time_decisions)[':real_time_decision_id']['$get']>
  >,
) {
  return [
    'real_time_decisions',
    '/real_time_decisions/:real_time_decision_id',
    toValue(args),
  ] as const
}

export function getRealTimeDecisionsRealTimeDecisionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.real_time_decisions)[':real_time_decision_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealTimeDecisionsRealTimeDecisionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.real_time_decisions[':real_time_decision_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.real_time_decisions)[':real_time_decision_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.real_time_decisions)[':real_time_decision_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRealTimeDecisionsRealTimeDecisionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.real_time_decisions)[':real_time_decision_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealTimeDecisionsRealTimeDecisionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealTimeDecisionsRealTimeDecisionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.real_time_decisions[':real_time_decision_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.routing_numbers.$get>>,
) {
  return ['routing_numbers', '/routing_numbers', toValue(args)] as const
}

export function getRoutingNumbersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.routing_numbers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRoutingNumbersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.routing_numbers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRoutingNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing_numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.routing_numbers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.routing_numbers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.routing_numbers.$get>>>
            >
          >,
          ReturnType<typeof getRoutingNumbersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing_numbers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRoutingNumbersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRoutingNumbersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.routing_numbers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.simulations.card_refunds.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.simulations.card_refunds.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getTransactionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transactions.$get>>,
) {
  return ['transactions', '/transactions', toValue(args)] as const
}

export function getTransactionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transactions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transactions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transactions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
          >,
          ReturnType<typeof getTransactionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTransactionsTransactionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transactions)[':transaction_id']['$get']>>,
) {
  return ['transactions', '/transactions/:transaction_id', toValue(args)] as const
}

export function getTransactionsTransactionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transactions)[':transaction_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransactionsTransactionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transactions[':transaction_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transactions)[':transaction_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transactions)[':transaction_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTransactionsTransactionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.transactions)[':transaction_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionsTransactionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransactionsTransactionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transactions[':transaction_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWireDrawdownRequestsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wire_drawdown_requests.$get>>,
) {
  return ['wire_drawdown_requests', '/wire_drawdown_requests', toValue(args)] as const
}

export function getWireDrawdownRequestsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wire_drawdown_requests.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWireDrawdownRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wire_drawdown_requests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWireDrawdownRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wire_drawdown_requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wire_drawdown_requests.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wire_drawdown_requests.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wire_drawdown_requests.$get>>>
            >
          >,
          ReturnType<typeof getWireDrawdownRequestsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.wire_drawdown_requests.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWireDrawdownRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWireDrawdownRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wire_drawdown_requests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wire_drawdown_requests)[':wire_drawdown_request_id']['$get']>
  >,
) {
  return [
    'wire_drawdown_requests',
    '/wire_drawdown_requests/:wire_drawdown_request_id',
    toValue(args),
  ] as const
}

export function getWireDrawdownRequestsWireDrawdownRequestIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wire_drawdown_requests)[':wire_drawdown_request_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWireDrawdownRequestsWireDrawdownRequestIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wire_drawdown_requests[':wire_drawdown_request_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wire_drawdown_requests)[':wire_drawdown_request_id']['$get']>
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
                    (typeof client.wire_drawdown_requests)[':wire_drawdown_request_id']['$get']
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
                    (typeof client.wire_drawdown_requests)[':wire_drawdown_request_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWireDrawdownRequestsWireDrawdownRequestIdQueryKey>
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
            ReturnType<(typeof client.wire_drawdown_requests)[':wire_drawdown_request_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWireDrawdownRequestsWireDrawdownRequestIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWireDrawdownRequestsWireDrawdownRequestIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wire_drawdown_requests[':wire_drawdown_request_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWireTransfersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wire_transfers.$get>>,
) {
  return ['wire_transfers', '/wire_transfers', toValue(args)] as const
}

export function getWireTransfersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wire_transfers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWireTransfersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wire_transfers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWireTransfers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wire_transfers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wire_transfers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wire_transfers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wire_transfers.$get>>>>
          >,
          ReturnType<typeof getWireTransfersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wire_transfers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWireTransfersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWireTransfersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wire_transfers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wire_transfers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.wire_transfers.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wire_transfers)[':wire_transfer_id']['$get']>
  >,
) {
  return ['wire_transfers', '/wire_transfers/:wire_transfer_id', toValue(args)] as const
}

export function getWireTransfersWireTransferIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wire_transfers)[':wire_transfer_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWireTransfersWireTransferIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wire_transfers[':wire_transfer_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wire_transfers)[':wire_transfer_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wire_transfers)[':wire_transfer_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWireTransfersWireTransferIdQueryKey>
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
          Awaited<ReturnType<(typeof client.wire_transfers)[':wire_transfer_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWireTransfersWireTransferIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWireTransfersWireTransferIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wire_transfers[':wire_transfer_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.wire_transfers)[':wire_transfer_id']['approve']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.wire_transfers)[':wire_transfer_id']['approve']['$post']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
