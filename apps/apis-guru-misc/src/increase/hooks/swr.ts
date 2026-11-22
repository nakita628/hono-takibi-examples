import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetAccountNumbersKey(
  args: InferRequestType<typeof client.account_numbers.$get>,
) {
  return ['account_numbers', '/account_numbers', args] as const
}

export function useGetAccountNumbers<TError = unknown>(
  args: InferRequestType<typeof client.account_numbers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_numbers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountNumbersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_numbers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account_numbers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountNumbers<TError = unknown>(
  args: InferRequestType<typeof client.account_numbers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_numbers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountNumbersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_numbers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account_numbers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountNumbersKey() {
  return ['account_numbers', '/account_numbers', 'POST'] as const
}

export function usePostAccountNumbers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_numbers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account_numbers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountNumbersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account_numbers.$post> }) =>
        parseResponse(client.account_numbers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountNumbersAccountNumberIdKey(
  args: InferRequestType<(typeof client.account_numbers)[':account_number_id']['$get']>,
) {
  return ['account_numbers', '/account_numbers/:account_number_id', args] as const
}

export function useGetAccountNumbersAccountNumberId<TError = unknown>(
  args: InferRequestType<(typeof client.account_numbers)[':account_number_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account_numbers)[':account_number_id']['$get']>>
          >
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
        ? getGetAccountNumbersAccountNumberIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account_numbers)[':account_number_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account_numbers[':account_number_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountNumbersAccountNumberId<TError = unknown>(
  args: InferRequestType<(typeof client.account_numbers)[':account_number_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account_numbers)[':account_number_id']['$get']>>
          >
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
        ? getGetAccountNumbersAccountNumberIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account_numbers)[':account_number_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account_numbers[':account_number_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchAccountNumbersAccountNumberIdKey() {
  return ['account_numbers', '/account_numbers/:account_number_id', 'PATCH'] as const
}

export function usePatchAccountNumbersAccountNumberId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account_numbers)[':account_number_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account_numbers)[':account_number_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountNumbersAccountNumberIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.account_numbers)[':account_number_id']['$patch']>
        },
      ) => parseResponse(client.account_numbers[':account_number_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountStatementsKey(
  args: InferRequestType<typeof client.account_statements.$get>,
) {
  return ['account_statements', '/account_statements', args] as const
}

export function useGetAccountStatements<TError = unknown>(
  args: InferRequestType<typeof client.account_statements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_statements.$get>>>>
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
        ? getGetAccountStatementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_statements.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account_statements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountStatements<TError = unknown>(
  args: InferRequestType<typeof client.account_statements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_statements.$get>>>>
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
        ? getGetAccountStatementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_statements.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account_statements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountStatementsAccountStatementIdKey(
  args: InferRequestType<(typeof client.account_statements)[':account_statement_id']['$get']>,
) {
  return ['account_statements', '/account_statements/:account_statement_id', args] as const
}

export function useGetAccountStatementsAccountStatementId<TError = unknown>(
  args: InferRequestType<(typeof client.account_statements)[':account_statement_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account_statements)[':account_statement_id']['$get']>>
          >
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
        ? getGetAccountStatementsAccountStatementIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account_statements)[':account_statement_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account_statements[':account_statement_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountStatementsAccountStatementId<TError = unknown>(
  args: InferRequestType<(typeof client.account_statements)[':account_statement_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account_statements)[':account_statement_id']['$get']>>
          >
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
        ? getGetAccountStatementsAccountStatementIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account_statements)[':account_statement_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account_statements[':account_statement_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountTransfersKey(
  args: InferRequestType<typeof client.account_transfers.$get>,
) {
  return ['account_transfers', '/account_transfers', args] as const
}

export function useGetAccountTransfers<TError = unknown>(
  args: InferRequestType<typeof client.account_transfers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_transfers.$get>>>>
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
        ? getGetAccountTransfersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_transfers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account_transfers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountTransfers<TError = unknown>(
  args: InferRequestType<typeof client.account_transfers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_transfers.$get>>>>
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
        ? getGetAccountTransfersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_transfers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account_transfers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountTransfersKey() {
  return ['account_transfers', '/account_transfers', 'POST'] as const
}

export function usePostAccountTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_transfers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account_transfers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountTransfersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account_transfers.$post> }) =>
        parseResponse(client.account_transfers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountTransfersAccountTransferIdKey(
  args: InferRequestType<(typeof client.account_transfers)[':account_transfer_id']['$get']>,
) {
  return ['account_transfers', '/account_transfers/:account_transfer_id', args] as const
}

export function useGetAccountTransfersAccountTransferId<TError = unknown>(
  args: InferRequestType<(typeof client.account_transfers)[':account_transfer_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account_transfers)[':account_transfer_id']['$get']>>
          >
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
        ? getGetAccountTransfersAccountTransferIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account_transfers)[':account_transfer_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account_transfers[':account_transfer_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountTransfersAccountTransferId<TError = unknown>(
  args: InferRequestType<(typeof client.account_transfers)[':account_transfer_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account_transfers)[':account_transfer_id']['$get']>>
          >
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
        ? getGetAccountTransfersAccountTransferIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account_transfers)[':account_transfer_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account_transfers[':account_transfer_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountTransfersAccountTransferIdApproveKey() {
  return ['account_transfers', '/account_transfers/:account_transfer_id/approve', 'POST'] as const
}

export function usePostAccountTransfersAccountTransferIdApprove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.account_transfers)[':account_transfer_id']['approve']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountTransfersAccountTransferIdApproveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account_transfers)[':account_transfer_id']['approve']['$post']
          >
        },
      ) =>
        parseResponse(
          client.account_transfers[':account_transfer_id'].approve.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountTransfersAccountTransferIdCancelKey() {
  return ['account_transfers', '/account_transfers/:account_transfer_id/cancel', 'POST'] as const
}

export function usePostAccountTransfersAccountTransferIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.account_transfers)[':account_transfer_id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountTransfersAccountTransferIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.account_transfers)[':account_transfer_id']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.account_transfers[':account_transfer_id'].cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsKey(args: InferRequestType<typeof client.accounts.$get>) {
  return ['accounts', '/accounts', args] as const
}

export function useGetAccounts<TError = unknown>(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.accounts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAccounts<TError = unknown>(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.accounts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostAccountsKey() {
  return ['accounts', '/accounts', 'POST'] as const
}

export function usePostAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.accounts.$post> }) =>
        parseResponse(client.accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAccountIdKey(
  args: InferRequestType<(typeof client.accounts)[':account_id']['$get']>,
) {
  return ['accounts', '/accounts/:account_id', args] as const
}

export function useGetAccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
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
        ? getGetAccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':account_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
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
        ? getGetAccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':account_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchAccountsAccountIdKey() {
  return ['accounts', '/accounts/:account_id', 'PATCH'] as const
}

export function usePatchAccountsAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':account_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountsAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.accounts)[':account_id']['$patch']> },
      ) => parseResponse(client.accounts[':account_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAccountIdCloseKey() {
  return ['accounts', '/accounts/:account_id/close', 'POST'] as const
}

export function usePostAccountsAccountIdClose<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':account_id']['close']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':account_id']['close']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdCloseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.accounts)[':account_id']['close']['$post']> },
      ) => parseResponse(client.accounts[':account_id'].close.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAchPrenotificationsKey(
  args: InferRequestType<typeof client.ach_prenotifications.$get>,
) {
  return ['ach_prenotifications', '/ach_prenotifications', args] as const
}

export function useGetAchPrenotifications<TError = unknown>(
  args: InferRequestType<typeof client.ach_prenotifications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ach_prenotifications.$get>>>
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
        ? getGetAchPrenotificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ach_prenotifications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ach_prenotifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAchPrenotifications<TError = unknown>(
  args: InferRequestType<typeof client.ach_prenotifications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ach_prenotifications.$get>>>
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
        ? getGetAchPrenotificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ach_prenotifications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ach_prenotifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAchPrenotificationsKey() {
  return ['ach_prenotifications', '/ach_prenotifications', 'POST'] as const
}

export function usePostAchPrenotifications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ach_prenotifications.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ach_prenotifications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAchPrenotificationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ach_prenotifications.$post> },
      ) => parseResponse(client.ach_prenotifications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAchPrenotificationsAchPrenotificationIdKey(
  args: InferRequestType<(typeof client.ach_prenotifications)[':ach_prenotification_id']['$get']>,
) {
  return ['ach_prenotifications', '/ach_prenotifications/:ach_prenotification_id', args] as const
}

export function useGetAchPrenotificationsAchPrenotificationId<TError = unknown>(
  args: InferRequestType<(typeof client.ach_prenotifications)[':ach_prenotification_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ach_prenotifications)[':ach_prenotification_id']['$get']>
            >
          >
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
        ? getGetAchPrenotificationsAchPrenotificationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ach_prenotifications)[':ach_prenotification_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ach_prenotifications[':ach_prenotification_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAchPrenotificationsAchPrenotificationId<TError = unknown>(
  args: InferRequestType<(typeof client.ach_prenotifications)[':ach_prenotification_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ach_prenotifications)[':ach_prenotification_id']['$get']>
            >
          >
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
        ? getGetAchPrenotificationsAchPrenotificationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ach_prenotifications)[':ach_prenotification_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ach_prenotifications[':ach_prenotification_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAchTransfersKey(args: InferRequestType<typeof client.ach_transfers.$get>) {
  return ['ach_transfers', '/ach_transfers', args] as const
}

export function useGetAchTransfers<TError = unknown>(
  args: InferRequestType<typeof client.ach_transfers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ach_transfers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAchTransfersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ach_transfers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ach_transfers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAchTransfers<TError = unknown>(
  args: InferRequestType<typeof client.ach_transfers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ach_transfers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAchTransfersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ach_transfers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ach_transfers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAchTransfersKey() {
  return ['ach_transfers', '/ach_transfers', 'POST'] as const
}

export function usePostAchTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ach_transfers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ach_transfers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAchTransfersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ach_transfers.$post> }) =>
        parseResponse(client.ach_transfers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAchTransfersAchTransferIdKey(
  args: InferRequestType<(typeof client.ach_transfers)[':ach_transfer_id']['$get']>,
) {
  return ['ach_transfers', '/ach_transfers/:ach_transfer_id', args] as const
}

export function useGetAchTransfersAchTransferId<TError = unknown>(
  args: InferRequestType<(typeof client.ach_transfers)[':ach_transfer_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ach_transfers)[':ach_transfer_id']['$get']>>
          >
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
        ? getGetAchTransfersAchTransferIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ach_transfers)[':ach_transfer_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ach_transfers[':ach_transfer_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAchTransfersAchTransferId<TError = unknown>(
  args: InferRequestType<(typeof client.ach_transfers)[':ach_transfer_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ach_transfers)[':ach_transfer_id']['$get']>>
          >
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
        ? getGetAchTransfersAchTransferIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ach_transfers)[':ach_transfer_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ach_transfers[':ach_transfer_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAchTransfersAchTransferIdApproveKey() {
  return ['ach_transfers', '/ach_transfers/:ach_transfer_id/approve', 'POST'] as const
}

export function usePostAchTransfersAchTransferIdApprove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ach_transfers)[':ach_transfer_id']['approve']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ach_transfers)[':ach_transfer_id']['approve']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAchTransfersAchTransferIdApproveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ach_transfers)[':ach_transfer_id']['approve']['$post']
          >
        },
      ) =>
        parseResponse(client.ach_transfers[':ach_transfer_id'].approve.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAchTransfersAchTransferIdCancelKey() {
  return ['ach_transfers', '/ach_transfers/:ach_transfer_id/cancel', 'POST'] as const
}

export function usePostAchTransfersAchTransferIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ach_transfers)[':ach_transfer_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ach_transfers)[':ach_transfer_id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAchTransfersAchTransferIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ach_transfers)[':ach_transfer_id']['cancel']['$post']
          >
        },
      ) => parseResponse(client.ach_transfers[':ach_transfer_id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCardDisputesKey(args: InferRequestType<typeof client.card_disputes.$get>) {
  return ['card_disputes', '/card_disputes', args] as const
}

export function useGetCardDisputes<TError = unknown>(
  args: InferRequestType<typeof client.card_disputes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_disputes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCardDisputesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_disputes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.card_disputes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardDisputes<TError = unknown>(
  args: InferRequestType<typeof client.card_disputes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_disputes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCardDisputesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_disputes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.card_disputes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCardDisputesKey() {
  return ['card_disputes', '/card_disputes', 'POST'] as const
}

export function usePostCardDisputes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_disputes.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.card_disputes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardDisputesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.card_disputes.$post> }) =>
        parseResponse(client.card_disputes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCardDisputesCardDisputeIdKey(
  args: InferRequestType<(typeof client.card_disputes)[':card_dispute_id']['$get']>,
) {
  return ['card_disputes', '/card_disputes/:card_dispute_id', args] as const
}

export function useGetCardDisputesCardDisputeId<TError = unknown>(
  args: InferRequestType<(typeof client.card_disputes)[':card_dispute_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.card_disputes)[':card_dispute_id']['$get']>>
          >
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
        ? getGetCardDisputesCardDisputeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.card_disputes)[':card_dispute_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.card_disputes[':card_dispute_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardDisputesCardDisputeId<TError = unknown>(
  args: InferRequestType<(typeof client.card_disputes)[':card_dispute_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.card_disputes)[':card_dispute_id']['$get']>>
          >
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
        ? getGetCardDisputesCardDisputeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.card_disputes)[':card_dispute_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.card_disputes[':card_dispute_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCardProfilesKey(args: InferRequestType<typeof client.card_profiles.$get>) {
  return ['card_profiles', '/card_profiles', args] as const
}

export function useGetCardProfiles<TError = unknown>(
  args: InferRequestType<typeof client.card_profiles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_profiles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCardProfilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_profiles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.card_profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardProfiles<TError = unknown>(
  args: InferRequestType<typeof client.card_profiles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_profiles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCardProfilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_profiles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.card_profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCardProfilesKey() {
  return ['card_profiles', '/card_profiles', 'POST'] as const
}

export function usePostCardProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_profiles.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.card_profiles.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardProfilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.card_profiles.$post> }) =>
        parseResponse(client.card_profiles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCardProfilesCardProfileIdKey(
  args: InferRequestType<(typeof client.card_profiles)[':card_profile_id']['$get']>,
) {
  return ['card_profiles', '/card_profiles/:card_profile_id', args] as const
}

export function useGetCardProfilesCardProfileId<TError = unknown>(
  args: InferRequestType<(typeof client.card_profiles)[':card_profile_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.card_profiles)[':card_profile_id']['$get']>>
          >
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
        ? getGetCardProfilesCardProfileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.card_profiles)[':card_profile_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.card_profiles[':card_profile_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardProfilesCardProfileId<TError = unknown>(
  args: InferRequestType<(typeof client.card_profiles)[':card_profile_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.card_profiles)[':card_profile_id']['$get']>>
          >
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
        ? getGetCardProfilesCardProfileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.card_profiles)[':card_profile_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.card_profiles[':card_profile_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCardsKey(args: InferRequestType<typeof client.cards.$get>) {
  return ['cards', '/cards', args] as const
}

export function useGetCards<TError = unknown>(
  args: InferRequestType<typeof client.cards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.cards.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetCards<TError = unknown>(
  args: InferRequestType<typeof client.cards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.cards.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostCardsKey() {
  return ['cards', '/cards', 'POST'] as const
}

export function usePostCards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.cards.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cards.$post> }) =>
        parseResponse(client.cards.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCardsCardIdKey(
  args: InferRequestType<(typeof client.cards)[':card_id']['$get']>,
) {
  return ['cards', '/cards/:card_id', args] as const
}

export function useGetCardsCardId<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':card_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCardsCardIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':card_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsCardId<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':card_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCardsCardIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':card_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchCardsCardIdKey() {
  return ['cards', '/cards/:card_id', 'PATCH'] as const
}

export function usePatchCardsCardId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':card_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCardsCardIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':card_id']['$patch']> },
      ) => parseResponse(client.cards[':card_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCardsCardIdDetailsKey(
  args: InferRequestType<(typeof client.cards)[':card_id']['details']['$get']>,
) {
  return ['cards', '/cards/:card_id/details', args] as const
}

export function useGetCardsCardIdDetails<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':card_id']['details']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':card_id']['details']['$get']>>
          >
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
        ? getGetCardsCardIdDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':card_id']['details']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':card_id'].details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsCardIdDetails<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':card_id']['details']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':card_id']['details']['$get']>>
          >
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
        ? getGetCardsCardIdDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':card_id']['details']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':card_id'].details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCheckDepositsKey(args: InferRequestType<typeof client.check_deposits.$get>) {
  return ['check_deposits', '/check_deposits', args] as const
}

export function useGetCheckDeposits<TError = unknown>(
  args: InferRequestType<typeof client.check_deposits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_deposits.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCheckDepositsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_deposits.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.check_deposits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCheckDeposits<TError = unknown>(
  args: InferRequestType<typeof client.check_deposits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_deposits.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCheckDepositsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_deposits.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.check_deposits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCheckDepositsKey() {
  return ['check_deposits', '/check_deposits', 'POST'] as const
}

export function usePostCheckDeposits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_deposits.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.check_deposits.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCheckDepositsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.check_deposits.$post> }) =>
        parseResponse(client.check_deposits.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCheckDepositsCheckDepositIdKey(
  args: InferRequestType<(typeof client.check_deposits)[':check_deposit_id']['$get']>,
) {
  return ['check_deposits', '/check_deposits/:check_deposit_id', args] as const
}

export function useGetCheckDepositsCheckDepositId<TError = unknown>(
  args: InferRequestType<(typeof client.check_deposits)[':check_deposit_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.check_deposits)[':check_deposit_id']['$get']>>
          >
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
        ? getGetCheckDepositsCheckDepositIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.check_deposits)[':check_deposit_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.check_deposits[':check_deposit_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCheckDepositsCheckDepositId<TError = unknown>(
  args: InferRequestType<(typeof client.check_deposits)[':check_deposit_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.check_deposits)[':check_deposit_id']['$get']>>
          >
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
        ? getGetCheckDepositsCheckDepositIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.check_deposits)[':check_deposit_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.check_deposits[':check_deposit_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCheckTransfersKey(
  args: InferRequestType<typeof client.check_transfers.$get>,
) {
  return ['check_transfers', '/check_transfers', args] as const
}

export function useGetCheckTransfers<TError = unknown>(
  args: InferRequestType<typeof client.check_transfers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_transfers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCheckTransfersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_transfers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.check_transfers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCheckTransfers<TError = unknown>(
  args: InferRequestType<typeof client.check_transfers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_transfers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCheckTransfersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_transfers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.check_transfers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCheckTransfersKey() {
  return ['check_transfers', '/check_transfers', 'POST'] as const
}

export function usePostCheckTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_transfers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.check_transfers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCheckTransfersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.check_transfers.$post> }) =>
        parseResponse(client.check_transfers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCheckTransfersCheckTransferIdKey(
  args: InferRequestType<(typeof client.check_transfers)[':check_transfer_id']['$get']>,
) {
  return ['check_transfers', '/check_transfers/:check_transfer_id', args] as const
}

export function useGetCheckTransfersCheckTransferId<TError = unknown>(
  args: InferRequestType<(typeof client.check_transfers)[':check_transfer_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.check_transfers)[':check_transfer_id']['$get']>>
          >
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
        ? getGetCheckTransfersCheckTransferIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.check_transfers)[':check_transfer_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.check_transfers[':check_transfer_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCheckTransfersCheckTransferId<TError = unknown>(
  args: InferRequestType<(typeof client.check_transfers)[':check_transfer_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.check_transfers)[':check_transfer_id']['$get']>>
          >
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
        ? getGetCheckTransfersCheckTransferIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.check_transfers)[':check_transfer_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.check_transfers[':check_transfer_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCheckTransfersCheckTransferIdApproveKey() {
  return ['check_transfers', '/check_transfers/:check_transfer_id/approve', 'POST'] as const
}

export function usePostCheckTransfersCheckTransferIdApprove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.check_transfers)[':check_transfer_id']['approve']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCheckTransfersCheckTransferIdApproveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.check_transfers)[':check_transfer_id']['approve']['$post']
          >
        },
      ) =>
        parseResponse(
          client.check_transfers[':check_transfer_id'].approve.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCheckTransfersCheckTransferIdCancelKey() {
  return ['check_transfers', '/check_transfers/:check_transfer_id/cancel', 'POST'] as const
}

export function usePostCheckTransfersCheckTransferIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.check_transfers)[':check_transfer_id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCheckTransfersCheckTransferIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.check_transfers)[':check_transfer_id']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.check_transfers[':check_transfer_id'].cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCheckTransfersCheckTransferIdStopPaymentKey() {
  return ['check_transfers', '/check_transfers/:check_transfer_id/stop_payment', 'POST'] as const
}

export function usePostCheckTransfersCheckTransferIdStopPayment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.check_transfers)[':check_transfer_id']['stop_payment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCheckTransfersCheckTransferIdStopPaymentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.check_transfers)[':check_transfer_id']['stop_payment']['$post']
          >
        },
      ) =>
        parseResponse(
          client.check_transfers[':check_transfer_id'].stop_payment.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDeclinedTransactionsKey(
  args: InferRequestType<typeof client.declined_transactions.$get>,
) {
  return ['declined_transactions', '/declined_transactions', args] as const
}

export function useGetDeclinedTransactions<TError = unknown>(
  args: InferRequestType<typeof client.declined_transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.declined_transactions.$get>>>
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
        ? getGetDeclinedTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.declined_transactions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.declined_transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeclinedTransactions<TError = unknown>(
  args: InferRequestType<typeof client.declined_transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.declined_transactions.$get>>>
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
        ? getGetDeclinedTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.declined_transactions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.declined_transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDeclinedTransactionsDeclinedTransactionIdKey(
  args: InferRequestType<(typeof client.declined_transactions)[':declined_transaction_id']['$get']>,
) {
  return ['declined_transactions', '/declined_transactions/:declined_transaction_id', args] as const
}

export function useGetDeclinedTransactionsDeclinedTransactionId<TError = unknown>(
  args: InferRequestType<(typeof client.declined_transactions)[':declined_transaction_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.declined_transactions)[':declined_transaction_id']['$get']>
            >
          >
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
        ? getGetDeclinedTransactionsDeclinedTransactionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.declined_transactions)[':declined_transaction_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.declined_transactions[':declined_transaction_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeclinedTransactionsDeclinedTransactionId<TError = unknown>(
  args: InferRequestType<(typeof client.declined_transactions)[':declined_transaction_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.declined_transactions)[':declined_transaction_id']['$get']>
            >
          >
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
        ? getGetDeclinedTransactionsDeclinedTransactionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.declined_transactions)[':declined_transaction_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.declined_transactions[':declined_transaction_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDigitalWalletTokensKey(
  args: InferRequestType<typeof client.digital_wallet_tokens.$get>,
) {
  return ['digital_wallet_tokens', '/digital_wallet_tokens', args] as const
}

export function useGetDigitalWalletTokens<TError = unknown>(
  args: InferRequestType<typeof client.digital_wallet_tokens.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.digital_wallet_tokens.$get>>>
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
        ? getGetDigitalWalletTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.digital_wallet_tokens.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.digital_wallet_tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDigitalWalletTokens<TError = unknown>(
  args: InferRequestType<typeof client.digital_wallet_tokens.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.digital_wallet_tokens.$get>>>
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
        ? getGetDigitalWalletTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.digital_wallet_tokens.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.digital_wallet_tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDigitalWalletTokensDigitalWalletTokenIdKey(
  args: InferRequestType<(typeof client.digital_wallet_tokens)[':digital_wallet_token_id']['$get']>,
) {
  return ['digital_wallet_tokens', '/digital_wallet_tokens/:digital_wallet_token_id', args] as const
}

export function useGetDigitalWalletTokensDigitalWalletTokenId<TError = unknown>(
  args: InferRequestType<(typeof client.digital_wallet_tokens)[':digital_wallet_token_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.digital_wallet_tokens)[':digital_wallet_token_id']['$get']>
            >
          >
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
        ? getGetDigitalWalletTokensDigitalWalletTokenIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.digital_wallet_tokens)[':digital_wallet_token_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.digital_wallet_tokens[':digital_wallet_token_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDigitalWalletTokensDigitalWalletTokenId<TError = unknown>(
  args: InferRequestType<(typeof client.digital_wallet_tokens)[':digital_wallet_token_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.digital_wallet_tokens)[':digital_wallet_token_id']['$get']>
            >
          >
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
        ? getGetDigitalWalletTokensDigitalWalletTokenIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.digital_wallet_tokens)[':digital_wallet_token_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.digital_wallet_tokens[':digital_wallet_token_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDocumentsKey(args: InferRequestType<typeof client.documents.$get>) {
  return ['documents', '/documents', args] as const
}

export function useGetDocuments<TError = unknown>(
  args: InferRequestType<typeof client.documents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDocumentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocuments<TError = unknown>(
  args: InferRequestType<typeof client.documents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDocumentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDocumentsDocumentIdKey(
  args: InferRequestType<(typeof client.documents)[':document_id']['$get']>,
) {
  return ['documents', '/documents/:document_id', args] as const
}

export function useGetDocumentsDocumentId<TError = unknown>(
  args: InferRequestType<(typeof client.documents)[':document_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':document_id']['$get']>>
          >
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
        ? getGetDocumentsDocumentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':document_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents[':document_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocumentsDocumentId<TError = unknown>(
  args: InferRequestType<(typeof client.documents)[':document_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':document_id']['$get']>>
          >
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
        ? getGetDocumentsDocumentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':document_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents[':document_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesKey(args: InferRequestType<typeof client.entities.$get>) {
  return ['entities', '/entities', args] as const
}

export function useGetEntities<TError = unknown>(
  args: InferRequestType<typeof client.entities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEntitiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.entities.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetEntities<TError = unknown>(
  args: InferRequestType<typeof client.entities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEntitiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.entities.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostEntitiesKey() {
  return ['entities', '/entities', 'POST'] as const
}

export function usePostEntities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.entities.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEntitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.entities.$post> }) =>
        parseResponse(client.entities.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEntitiesEntityIdKey(
  args: InferRequestType<(typeof client.entities)[':entity_id']['$get']>,
) {
  return ['entities', '/entities/:entity_id', args] as const
}

export function useGetEntitiesEntityId<TError = unknown>(
  args: InferRequestType<(typeof client.entities)[':entity_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities)[':entity_id']['$get']>>>
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
        ? getGetEntitiesEntityIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities)[':entity_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities[':entity_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesEntityId<TError = unknown>(
  args: InferRequestType<(typeof client.entities)[':entity_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities)[':entity_id']['$get']>>>
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
        ? getGetEntitiesEntityIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities)[':entity_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities[':entity_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEntitiesEntityIdSupplementalDocumentsKey() {
  return ['entities', '/entities/:entity_id/supplemental_documents', 'POST'] as const
}

export function usePostEntitiesEntityIdSupplementalDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.entities)[':entity_id']['supplemental_documents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEntitiesEntityIdSupplementalDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.entities)[':entity_id']['supplemental_documents']['$post']
          >
        },
      ) =>
        parseResponse(
          client.entities[':entity_id'].supplemental_documents.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEventSubscriptionsKey(
  args: InferRequestType<typeof client.event_subscriptions.$get>,
) {
  return ['event_subscriptions', '/event_subscriptions', args] as const
}

export function useGetEventSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.event_subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.event_subscriptions.$get>>>
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
        ? getGetEventSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.event_subscriptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event_subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.event_subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.event_subscriptions.$get>>>
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
        ? getGetEventSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.event_subscriptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event_subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEventSubscriptionsKey() {
  return ['event_subscriptions', '/event_subscriptions', 'POST'] as const
}

export function usePostEventSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_subscriptions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.event_subscriptions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.event_subscriptions.$post> }) =>
        parseResponse(client.event_subscriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEventSubscriptionsEventSubscriptionIdKey(
  args: InferRequestType<(typeof client.event_subscriptions)[':event_subscription_id']['$get']>,
) {
  return ['event_subscriptions', '/event_subscriptions/:event_subscription_id', args] as const
}

export function useGetEventSubscriptionsEventSubscriptionId<TError = unknown>(
  args: InferRequestType<(typeof client.event_subscriptions)[':event_subscription_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.event_subscriptions)[':event_subscription_id']['$get']>
            >
          >
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
        ? getGetEventSubscriptionsEventSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.event_subscriptions)[':event_subscription_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.event_subscriptions[':event_subscription_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventSubscriptionsEventSubscriptionId<TError = unknown>(
  args: InferRequestType<(typeof client.event_subscriptions)[':event_subscription_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.event_subscriptions)[':event_subscription_id']['$get']>
            >
          >
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
        ? getGetEventSubscriptionsEventSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.event_subscriptions)[':event_subscription_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.event_subscriptions[':event_subscription_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchEventSubscriptionsEventSubscriptionIdKey() {
  return ['event_subscriptions', '/event_subscriptions/:event_subscription_id', 'PATCH'] as const
}

export function usePatchEventSubscriptionsEventSubscriptionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.event_subscriptions)[':event_subscription_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEventSubscriptionsEventSubscriptionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.event_subscriptions)[':event_subscription_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.event_subscriptions[':event_subscription_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEventsKey(args: InferRequestType<typeof client.events.$get>) {
  return ['events', '/events', args] as const
}

export function useGetEvents<TError = unknown>(
  args: InferRequestType<typeof client.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.events.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetEvents<TError = unknown>(
  args: InferRequestType<typeof client.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.events.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetEventsEventIdKey(
  args: InferRequestType<(typeof client.events)[':event_id']['$get']>,
) {
  return ['events', '/events/:event_id', args] as const
}

export function useGetEventsEventId<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':event_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetEventsEventIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events[':event_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsEventId<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':event_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetEventsEventIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events[':event_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExternalAccountsKey(
  args: InferRequestType<typeof client.external_accounts.$get>,
) {
  return ['external_accounts', '/external_accounts', args] as const
}

export function useGetExternalAccounts<TError = unknown>(
  args: InferRequestType<typeof client.external_accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.external_accounts.$get>>>>
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
        ? getGetExternalAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.external_accounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.external_accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExternalAccounts<TError = unknown>(
  args: InferRequestType<typeof client.external_accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.external_accounts.$get>>>>
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
        ? getGetExternalAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.external_accounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.external_accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostExternalAccountsKey() {
  return ['external_accounts', '/external_accounts', 'POST'] as const
}

export function usePostExternalAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.external_accounts.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.external_accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExternalAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.external_accounts.$post> }) =>
        parseResponse(client.external_accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExternalAccountsExternalAccountIdKey(
  args: InferRequestType<(typeof client.external_accounts)[':external_account_id']['$get']>,
) {
  return ['external_accounts', '/external_accounts/:external_account_id', args] as const
}

export function useGetExternalAccountsExternalAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.external_accounts)[':external_account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.external_accounts)[':external_account_id']['$get']>>
          >
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
        ? getGetExternalAccountsExternalAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.external_accounts)[':external_account_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.external_accounts[':external_account_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExternalAccountsExternalAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.external_accounts)[':external_account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.external_accounts)[':external_account_id']['$get']>>
          >
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
        ? getGetExternalAccountsExternalAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.external_accounts)[':external_account_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.external_accounts[':external_account_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchExternalAccountsExternalAccountIdKey() {
  return ['external_accounts', '/external_accounts/:external_account_id', 'PATCH'] as const
}

export function usePatchExternalAccountsExternalAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.external_accounts)[':external_account_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.external_accounts)[':external_account_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchExternalAccountsExternalAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.external_accounts)[':external_account_id']['$patch']>
        },
      ) =>
        parseResponse(client.external_accounts[':external_account_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFilesKey(args: InferRequestType<typeof client.files.$get>) {
  return ['files', '/files', args] as const
}

export function useGetFiles<TError = unknown>(
  args: InferRequestType<typeof client.files.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.files.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetFiles<TError = unknown>(
  args: InferRequestType<typeof client.files.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.files.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostFilesKey() {
  return ['files', '/files', 'POST'] as const
}

export function usePostFiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.files.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.files.$post> }) =>
        parseResponse(client.files.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFilesFileIdKey(
  args: InferRequestType<(typeof client.files)[':file_id']['$get']>,
) {
  return ['files', '/files/:file_id', args] as const
}

export function useGetFilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFilesFileIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':file_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':file_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFilesFileIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':file_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGroupsCurrentKey() {
  return ['groups', '/groups/current'] as const
}

export function useGetGroupsCurrent<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.current.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsCurrentKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.current.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.current.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsCurrent<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.current.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsCurrentKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.current.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.current.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInboundAchTransferReturnsKey(
  args: InferRequestType<typeof client.inbound_ach_transfer_returns.$get>,
) {
  return ['inbound_ach_transfer_returns', '/inbound_ach_transfer_returns', args] as const
}

export function useGetInboundAchTransferReturns<TError = unknown>(
  args: InferRequestType<typeof client.inbound_ach_transfer_returns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.inbound_ach_transfer_returns.$get>>>
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
        ? getGetInboundAchTransferReturnsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.inbound_ach_transfer_returns.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inbound_ach_transfer_returns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInboundAchTransferReturns<TError = unknown>(
  args: InferRequestType<typeof client.inbound_ach_transfer_returns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.inbound_ach_transfer_returns.$get>>>
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
        ? getGetInboundAchTransferReturnsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.inbound_ach_transfer_returns.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inbound_ach_transfer_returns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInboundAchTransferReturnsKey() {
  return ['inbound_ach_transfer_returns', '/inbound_ach_transfer_returns', 'POST'] as const
}

export function usePostInboundAchTransferReturns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.inbound_ach_transfer_returns.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.inbound_ach_transfer_returns.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInboundAchTransferReturnsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.inbound_ach_transfer_returns.$post> },
      ) => parseResponse(client.inbound_ach_transfer_returns.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInboundAchTransferReturnsInboundAchTransferReturnIdKey(
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

export function useGetInboundAchTransferReturnsInboundAchTransferReturnId<TError = unknown>(
  args: InferRequestType<
    (typeof client.inbound_ach_transfer_returns)[':inbound_ach_transfer_return_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInboundAchTransferReturnsInboundAchTransferReturnIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.inbound_ach_transfer_returns[':inbound_ach_transfer_return_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInboundAchTransferReturnsInboundAchTransferReturnId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.inbound_ach_transfer_returns)[':inbound_ach_transfer_return_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInboundAchTransferReturnsInboundAchTransferReturnIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.inbound_ach_transfer_returns[':inbound_ach_transfer_return_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetInboundWireDrawdownRequestsKey(
  args: InferRequestType<typeof client.inbound_wire_drawdown_requests.$get>,
) {
  return ['inbound_wire_drawdown_requests', '/inbound_wire_drawdown_requests', args] as const
}

export function useGetInboundWireDrawdownRequests<TError = unknown>(
  args: InferRequestType<typeof client.inbound_wire_drawdown_requests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.inbound_wire_drawdown_requests.$get>>
          >
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
        ? getGetInboundWireDrawdownRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.inbound_wire_drawdown_requests.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inbound_wire_drawdown_requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInboundWireDrawdownRequests<TError = unknown>(
  args: InferRequestType<typeof client.inbound_wire_drawdown_requests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.inbound_wire_drawdown_requests.$get>>
          >
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
        ? getGetInboundWireDrawdownRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.inbound_wire_drawdown_requests.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inbound_wire_drawdown_requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInboundWireDrawdownRequestsInboundWireDrawdownRequestIdKey(
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

export function useGetInboundWireDrawdownRequestsInboundWireDrawdownRequestId<TError = unknown>(
  args: InferRequestType<
    (typeof client.inbound_wire_drawdown_requests)[':inbound_wire_drawdown_request_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInboundWireDrawdownRequestsInboundWireDrawdownRequestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.inbound_wire_drawdown_requests[':inbound_wire_drawdown_request_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInboundWireDrawdownRequestsInboundWireDrawdownRequestId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.inbound_wire_drawdown_requests)[':inbound_wire_drawdown_request_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInboundWireDrawdownRequestsInboundWireDrawdownRequestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.inbound_wire_drawdown_requests[':inbound_wire_drawdown_request_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLimitsKey(args: InferRequestType<typeof client.limits.$get>) {
  return ['limits', '/limits', args] as const
}

export function useGetLimits<TError = unknown>(
  args: InferRequestType<typeof client.limits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.limits.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLimitsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.limits.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.limits.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetLimits<TError = unknown>(
  args: InferRequestType<typeof client.limits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.limits.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLimitsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.limits.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.limits.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostLimitsKey() {
  return ['limits', '/limits', 'POST'] as const
}

export function usePostLimits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.limits.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.limits.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLimitsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.limits.$post> }) =>
        parseResponse(client.limits.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLimitsLimitIdKey(
  args: InferRequestType<(typeof client.limits)[':limit_id']['$get']>,
) {
  return ['limits', '/limits/:limit_id', args] as const
}

export function useGetLimitsLimitId<TError = unknown>(
  args: InferRequestType<(typeof client.limits)[':limit_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.limits)[':limit_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetLimitsLimitIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.limits)[':limit_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.limits[':limit_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLimitsLimitId<TError = unknown>(
  args: InferRequestType<(typeof client.limits)[':limit_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.limits)[':limit_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetLimitsLimitIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.limits)[':limit_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.limits[':limit_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchLimitsLimitIdKey() {
  return ['limits', '/limits/:limit_id', 'PATCH'] as const
}

export function usePatchLimitsLimitId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.limits)[':limit_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.limits)[':limit_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchLimitsLimitIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.limits)[':limit_id']['$patch']> },
      ) => parseResponse(client.limits[':limit_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOauthConnectionsKey(
  args: InferRequestType<typeof client.oauth_connections.$get>,
) {
  return ['oauth_connections', '/oauth_connections', args] as const
}

export function useGetOauthConnections<TError = unknown>(
  args: InferRequestType<typeof client.oauth_connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth_connections.$get>>>>
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
        ? getGetOauthConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth_connections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth_connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauthConnections<TError = unknown>(
  args: InferRequestType<typeof client.oauth_connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth_connections.$get>>>>
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
        ? getGetOauthConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth_connections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth_connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOauthConnectionsOauthConnectionIdKey(
  args: InferRequestType<(typeof client.oauth_connections)[':oauth_connection_id']['$get']>,
) {
  return ['oauth_connections', '/oauth_connections/:oauth_connection_id', args] as const
}

export function useGetOauthConnectionsOauthConnectionId<TError = unknown>(
  args: InferRequestType<(typeof client.oauth_connections)[':oauth_connection_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth_connections)[':oauth_connection_id']['$get']>>
          >
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
        ? getGetOauthConnectionsOauthConnectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth_connections)[':oauth_connection_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.oauth_connections[':oauth_connection_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauthConnectionsOauthConnectionId<TError = unknown>(
  args: InferRequestType<(typeof client.oauth_connections)[':oauth_connection_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth_connections)[':oauth_connection_id']['$get']>>
          >
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
        ? getGetOauthConnectionsOauthConnectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth_connections)[':oauth_connection_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.oauth_connections[':oauth_connection_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPendingTransactionsKey(
  args: InferRequestType<typeof client.pending_transactions.$get>,
) {
  return ['pending_transactions', '/pending_transactions', args] as const
}

export function useGetPendingTransactions<TError = unknown>(
  args: InferRequestType<typeof client.pending_transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.pending_transactions.$get>>>
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
        ? getGetPendingTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.pending_transactions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pending_transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPendingTransactions<TError = unknown>(
  args: InferRequestType<typeof client.pending_transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.pending_transactions.$get>>>
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
        ? getGetPendingTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.pending_transactions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pending_transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPendingTransactionsPendingTransactionIdKey(
  args: InferRequestType<(typeof client.pending_transactions)[':pending_transaction_id']['$get']>,
) {
  return ['pending_transactions', '/pending_transactions/:pending_transaction_id', args] as const
}

export function useGetPendingTransactionsPendingTransactionId<TError = unknown>(
  args: InferRequestType<(typeof client.pending_transactions)[':pending_transaction_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.pending_transactions)[':pending_transaction_id']['$get']>
            >
          >
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
        ? getGetPendingTransactionsPendingTransactionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.pending_transactions)[':pending_transaction_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.pending_transactions[':pending_transaction_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPendingTransactionsPendingTransactionId<TError = unknown>(
  args: InferRequestType<(typeof client.pending_transactions)[':pending_transaction_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.pending_transactions)[':pending_transaction_id']['$get']>
            >
          >
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
        ? getGetPendingTransactionsPendingTransactionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.pending_transactions)[':pending_transaction_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.pending_transactions[':pending_transaction_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRealTimeDecisionsRealTimeDecisionIdKey(
  args: InferRequestType<(typeof client.real_time_decisions)[':real_time_decision_id']['$get']>,
) {
  return ['real_time_decisions', '/real_time_decisions/:real_time_decision_id', args] as const
}

export function useGetRealTimeDecisionsRealTimeDecisionId<TError = unknown>(
  args: InferRequestType<(typeof client.real_time_decisions)[':real_time_decision_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.real_time_decisions)[':real_time_decision_id']['$get']>
            >
          >
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
        ? getGetRealTimeDecisionsRealTimeDecisionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.real_time_decisions)[':real_time_decision_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.real_time_decisions[':real_time_decision_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRealTimeDecisionsRealTimeDecisionId<TError = unknown>(
  args: InferRequestType<(typeof client.real_time_decisions)[':real_time_decision_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.real_time_decisions)[':real_time_decision_id']['$get']>
            >
          >
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
        ? getGetRealTimeDecisionsRealTimeDecisionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.real_time_decisions)[':real_time_decision_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.real_time_decisions[':real_time_decision_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRealTimeDecisionsRealTimeDecisionIdActionKey() {
  return [
    'real_time_decisions',
    '/real_time_decisions/:real_time_decision_id/action',
    'POST',
  ] as const
}

export function usePostRealTimeDecisionsRealTimeDecisionIdAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.real_time_decisions)[':real_time_decision_id']['action']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealTimeDecisionsRealTimeDecisionIdActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.real_time_decisions)[':real_time_decision_id']['action']['$post']
          >
        },
      ) =>
        parseResponse(
          client.real_time_decisions[':real_time_decision_id'].action.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRoutingNumbersKey(
  args: InferRequestType<typeof client.routing_numbers.$get>,
) {
  return ['routing_numbers', '/routing_numbers', args] as const
}

export function useGetRoutingNumbers<TError = unknown>(
  args: InferRequestType<typeof client.routing_numbers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing_numbers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoutingNumbersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing_numbers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.routing_numbers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoutingNumbers<TError = unknown>(
  args: InferRequestType<typeof client.routing_numbers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing_numbers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoutingNumbersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing_numbers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.routing_numbers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSimulationsAccountStatementsKey() {
  return ['simulations', '/simulations/account_statements', 'POST'] as const
}

export function usePostSimulationsAccountStatements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.simulations.account_statements.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.simulations.account_statements.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimulationsAccountStatementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.simulations.account_statements.$post> },
      ) => parseResponse(client.simulations.account_statements.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSimulationsAccountTransfersAccountTransferIdCompleteKey() {
  return [
    'simulations',
    '/simulations/account_transfers/:account_transfer_id/complete',
    'POST',
  ] as const
}

export function usePostSimulationsAccountTransfersAccountTransferIdComplete<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.simulations.account_transfers)[':account_transfer_id']['complete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimulationsAccountTransfersAccountTransferIdCompleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.simulations.account_transfers)[':account_transfer_id']['complete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.simulations.account_transfers[':account_transfer_id'].complete.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSimulationsAchTransfersAchTransferIdReturnKey() {
  return ['simulations', '/simulations/ach_transfers/:ach_transfer_id/return', 'POST'] as const
}

export function usePostSimulationsAchTransfersAchTransferIdReturn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.simulations.ach_transfers)[':ach_transfer_id']['return']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimulationsAchTransfersAchTransferIdReturnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.simulations.ach_transfers)[':ach_transfer_id']['return']['$post']
          >
        },
      ) =>
        parseResponse(
          client.simulations.ach_transfers[':ach_transfer_id'].return.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSimulationsAchTransfersAchTransferIdSubmitKey() {
  return ['simulations', '/simulations/ach_transfers/:ach_transfer_id/submit', 'POST'] as const
}

export function usePostSimulationsAchTransfersAchTransferIdSubmit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.simulations.ach_transfers)[':ach_transfer_id']['submit']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimulationsAchTransfersAchTransferIdSubmitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.simulations.ach_transfers)[':ach_transfer_id']['submit']['$post']
          >
        },
      ) =>
        parseResponse(
          client.simulations.ach_transfers[':ach_transfer_id'].submit.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSimulationsCardAuthorizationsKey() {
  return ['simulations', '/simulations/card_authorizations', 'POST'] as const
}

export function usePostSimulationsCardAuthorizations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.simulations.card_authorizations.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.simulations.card_authorizations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimulationsCardAuthorizationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.simulations.card_authorizations.$post> },
      ) => parseResponse(client.simulations.card_authorizations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSimulationsCardDisputesCardDisputeIdActionKey() {
  return ['simulations', '/simulations/card_disputes/:card_dispute_id/action', 'POST'] as const
}

export function usePostSimulationsCardDisputesCardDisputeIdAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.simulations.card_disputes)[':card_dispute_id']['action']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimulationsCardDisputesCardDisputeIdActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.simulations.card_disputes)[':card_dispute_id']['action']['$post']
          >
        },
      ) =>
        parseResponse(
          client.simulations.card_disputes[':card_dispute_id'].action.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSimulationsCardRefundsKey() {
  return ['simulations', '/simulations/card_refunds', 'POST'] as const
}

export function usePostSimulationsCardRefunds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.simulations.card_refunds.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.simulations.card_refunds.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimulationsCardRefundsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.simulations.card_refunds.$post> },
      ) => parseResponse(client.simulations.card_refunds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSimulationsCardSettlementsKey() {
  return ['simulations', '/simulations/card_settlements', 'POST'] as const
}

export function usePostSimulationsCardSettlements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.simulations.card_settlements.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.simulations.card_settlements.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimulationsCardSettlementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.simulations.card_settlements.$post> },
      ) => parseResponse(client.simulations.card_settlements.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSimulationsCheckDepositsCheckDepositIdRejectKey() {
  return ['simulations', '/simulations/check_deposits/:check_deposit_id/reject', 'POST'] as const
}

export function usePostSimulationsCheckDepositsCheckDepositIdReject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.simulations.check_deposits)[':check_deposit_id']['reject']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimulationsCheckDepositsCheckDepositIdRejectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.simulations.check_deposits)[':check_deposit_id']['reject']['$post']
          >
        },
      ) =>
        parseResponse(
          client.simulations.check_deposits[':check_deposit_id'].reject.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSimulationsCheckDepositsCheckDepositIdReturnKey() {
  return ['simulations', '/simulations/check_deposits/:check_deposit_id/return', 'POST'] as const
}

export function usePostSimulationsCheckDepositsCheckDepositIdReturn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.simulations.check_deposits)[':check_deposit_id']['return']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimulationsCheckDepositsCheckDepositIdReturnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.simulations.check_deposits)[':check_deposit_id']['return']['$post']
          >
        },
      ) =>
        parseResponse(
          client.simulations.check_deposits[':check_deposit_id'].return.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSimulationsCheckDepositsCheckDepositIdSubmitKey() {
  return ['simulations', '/simulations/check_deposits/:check_deposit_id/submit', 'POST'] as const
}

export function usePostSimulationsCheckDepositsCheckDepositIdSubmit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.simulations.check_deposits)[':check_deposit_id']['submit']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimulationsCheckDepositsCheckDepositIdSubmitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.simulations.check_deposits)[':check_deposit_id']['submit']['$post']
          >
        },
      ) =>
        parseResponse(
          client.simulations.check_deposits[':check_deposit_id'].submit.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSimulationsCheckTransfersCheckTransferIdDepositKey() {
  return ['simulations', '/simulations/check_transfers/:check_transfer_id/deposit', 'POST'] as const
}

export function usePostSimulationsCheckTransfersCheckTransferIdDeposit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.simulations.check_transfers)[':check_transfer_id']['deposit']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimulationsCheckTransfersCheckTransferIdDepositKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.simulations.check_transfers)[':check_transfer_id']['deposit']['$post']
          >
        },
      ) =>
        parseResponse(
          client.simulations.check_transfers[':check_transfer_id'].deposit.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSimulationsCheckTransfersCheckTransferIdMailKey() {
  return ['simulations', '/simulations/check_transfers/:check_transfer_id/mail', 'POST'] as const
}

export function usePostSimulationsCheckTransfersCheckTransferIdMail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.simulations.check_transfers)[':check_transfer_id']['mail']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimulationsCheckTransfersCheckTransferIdMailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.simulations.check_transfers)[':check_transfer_id']['mail']['$post']
          >
        },
      ) =>
        parseResponse(
          client.simulations.check_transfers[':check_transfer_id'].mail.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSimulationsDigitalWalletTokenRequestsKey() {
  return ['simulations', '/simulations/digital_wallet_token_requests', 'POST'] as const
}

export function usePostSimulationsDigitalWalletTokenRequests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.simulations.digital_wallet_token_requests.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.simulations.digital_wallet_token_requests.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimulationsDigitalWalletTokenRequestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.simulations.digital_wallet_token_requests.$post> },
      ) =>
        parseResponse(client.simulations.digital_wallet_token_requests.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSimulationsDocumentsKey() {
  return ['simulations', '/simulations/documents', 'POST'] as const
}

export function usePostSimulationsDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.simulations.documents.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.simulations.documents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimulationsDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.simulations.documents.$post> },
      ) => parseResponse(client.simulations.documents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSimulationsInboundAchTransfersKey() {
  return ['simulations', '/simulations/inbound_ach_transfers', 'POST'] as const
}

export function usePostSimulationsInboundAchTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.simulations.inbound_ach_transfers.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.simulations.inbound_ach_transfers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimulationsInboundAchTransfersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.simulations.inbound_ach_transfers.$post> },
      ) => parseResponse(client.simulations.inbound_ach_transfers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSimulationsInboundRealTimePaymentsTransfersKey() {
  return ['simulations', '/simulations/inbound_real_time_payments_transfers', 'POST'] as const
}

export function usePostSimulationsInboundRealTimePaymentsTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.simulations.inbound_real_time_payments_transfers.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.simulations.inbound_real_time_payments_transfers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimulationsInboundRealTimePaymentsTransfersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            typeof client.simulations.inbound_real_time_payments_transfers.$post
          >
        },
      ) =>
        parseResponse(
          client.simulations.inbound_real_time_payments_transfers.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSimulationsInboundWireDrawdownRequestsKey() {
  return ['simulations', '/simulations/inbound_wire_drawdown_requests', 'POST'] as const
}

export function usePostSimulationsInboundWireDrawdownRequests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.simulations.inbound_wire_drawdown_requests.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.simulations.inbound_wire_drawdown_requests.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimulationsInboundWireDrawdownRequestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.simulations.inbound_wire_drawdown_requests.$post>
        },
      ) =>
        parseResponse(client.simulations.inbound_wire_drawdown_requests.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSimulationsInboundWireTransfersKey() {
  return ['simulations', '/simulations/inbound_wire_transfers', 'POST'] as const
}

export function usePostSimulationsInboundWireTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.simulations.inbound_wire_transfers.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.simulations.inbound_wire_transfers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimulationsInboundWireTransfersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.simulations.inbound_wire_transfers.$post> },
      ) => parseResponse(client.simulations.inbound_wire_transfers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSimulationsWireTransfersWireTransferIdReverseKey() {
  return ['simulations', '/simulations/wire_transfers/:wire_transfer_id/reverse', 'POST'] as const
}

export function usePostSimulationsWireTransfersWireTransferIdReverse<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.simulations.wire_transfers)[':wire_transfer_id']['reverse']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimulationsWireTransfersWireTransferIdReverseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.simulations.wire_transfers)[':wire_transfer_id']['reverse']['$post']
          >
        },
      ) =>
        parseResponse(
          client.simulations.wire_transfers[':wire_transfer_id'].reverse.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSimulationsWireTransfersWireTransferIdSubmitKey() {
  return ['simulations', '/simulations/wire_transfers/:wire_transfer_id/submit', 'POST'] as const
}

export function usePostSimulationsWireTransfersWireTransferIdSubmit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.simulations.wire_transfers)[':wire_transfer_id']['submit']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimulationsWireTransfersWireTransferIdSubmitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.simulations.wire_transfers)[':wire_transfer_id']['submit']['$post']
          >
        },
      ) =>
        parseResponse(
          client.simulations.wire_transfers[':wire_transfer_id'].submit.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTransactionsKey(args: InferRequestType<typeof client.transactions.$get>) {
  return ['transactions', '/transactions', args] as const
}

export function useGetTransactions<TError = unknown>(
  args: InferRequestType<typeof client.transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTransactionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransactions<TError = unknown>(
  args: InferRequestType<typeof client.transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTransactionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTransactionsTransactionIdKey(
  args: InferRequestType<(typeof client.transactions)[':transaction_id']['$get']>,
) {
  return ['transactions', '/transactions/:transaction_id', args] as const
}

export function useGetTransactionsTransactionId<TError = unknown>(
  args: InferRequestType<(typeof client.transactions)[':transaction_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transactions)[':transaction_id']['$get']>>
          >
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
        ? getGetTransactionsTransactionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transactions)[':transaction_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transactions[':transaction_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransactionsTransactionId<TError = unknown>(
  args: InferRequestType<(typeof client.transactions)[':transaction_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transactions)[':transaction_id']['$get']>>
          >
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
        ? getGetTransactionsTransactionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transactions)[':transaction_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transactions[':transaction_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWireDrawdownRequestsKey(
  args: InferRequestType<typeof client.wire_drawdown_requests.$get>,
) {
  return ['wire_drawdown_requests', '/wire_drawdown_requests', args] as const
}

export function useGetWireDrawdownRequests<TError = unknown>(
  args: InferRequestType<typeof client.wire_drawdown_requests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wire_drawdown_requests.$get>>>
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
        ? getGetWireDrawdownRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wire_drawdown_requests.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wire_drawdown_requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWireDrawdownRequests<TError = unknown>(
  args: InferRequestType<typeof client.wire_drawdown_requests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wire_drawdown_requests.$get>>>
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
        ? getGetWireDrawdownRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wire_drawdown_requests.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wire_drawdown_requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWireDrawdownRequestsKey() {
  return ['wire_drawdown_requests', '/wire_drawdown_requests', 'POST'] as const
}

export function usePostWireDrawdownRequests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wire_drawdown_requests.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.wire_drawdown_requests.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWireDrawdownRequestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.wire_drawdown_requests.$post> },
      ) => parseResponse(client.wire_drawdown_requests.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWireDrawdownRequestsWireDrawdownRequestIdKey(
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

export function useGetWireDrawdownRequestsWireDrawdownRequestId<TError = unknown>(
  args: InferRequestType<
    (typeof client.wire_drawdown_requests)[':wire_drawdown_request_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWireDrawdownRequestsWireDrawdownRequestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.wire_drawdown_requests[':wire_drawdown_request_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWireDrawdownRequestsWireDrawdownRequestId<TError = unknown>(
  args: InferRequestType<
    (typeof client.wire_drawdown_requests)[':wire_drawdown_request_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWireDrawdownRequestsWireDrawdownRequestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.wire_drawdown_requests[':wire_drawdown_request_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWireTransfersKey(args: InferRequestType<typeof client.wire_transfers.$get>) {
  return ['wire_transfers', '/wire_transfers', args] as const
}

export function useGetWireTransfers<TError = unknown>(
  args: InferRequestType<typeof client.wire_transfers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wire_transfers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWireTransfersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wire_transfers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wire_transfers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWireTransfers<TError = unknown>(
  args: InferRequestType<typeof client.wire_transfers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wire_transfers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWireTransfersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wire_transfers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wire_transfers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWireTransfersKey() {
  return ['wire_transfers', '/wire_transfers', 'POST'] as const
}

export function usePostWireTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wire_transfers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.wire_transfers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWireTransfersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.wire_transfers.$post> }) =>
        parseResponse(client.wire_transfers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWireTransfersWireTransferIdKey(
  args: InferRequestType<(typeof client.wire_transfers)[':wire_transfer_id']['$get']>,
) {
  return ['wire_transfers', '/wire_transfers/:wire_transfer_id', args] as const
}

export function useGetWireTransfersWireTransferId<TError = unknown>(
  args: InferRequestType<(typeof client.wire_transfers)[':wire_transfer_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wire_transfers)[':wire_transfer_id']['$get']>>
          >
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
        ? getGetWireTransfersWireTransferIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wire_transfers)[':wire_transfer_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wire_transfers[':wire_transfer_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWireTransfersWireTransferId<TError = unknown>(
  args: InferRequestType<(typeof client.wire_transfers)[':wire_transfer_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wire_transfers)[':wire_transfer_id']['$get']>>
          >
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
        ? getGetWireTransfersWireTransferIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wire_transfers)[':wire_transfer_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wire_transfers[':wire_transfer_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWireTransfersWireTransferIdApproveKey() {
  return ['wire_transfers', '/wire_transfers/:wire_transfer_id/approve', 'POST'] as const
}

export function usePostWireTransfersWireTransferIdApprove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.wire_transfers)[':wire_transfer_id']['approve']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWireTransfersWireTransferIdApproveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.wire_transfers)[':wire_transfer_id']['approve']['$post']
          >
        },
      ) =>
        parseResponse(client.wire_transfers[':wire_transfer_id'].approve.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWireTransfersWireTransferIdCancelKey() {
  return ['wire_transfers', '/wire_transfers/:wire_transfer_id/cancel', 'POST'] as const
}

export function usePostWireTransfersWireTransferIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.wire_transfers)[':wire_transfer_id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWireTransfersWireTransferIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.wire_transfers)[':wire_transfer_id']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(client.wire_transfers[':wire_transfer_id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
