import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountHoldersKey() {
  return ['accountHolders'] as const
}

export function getBalanceAccountsKey() {
  return ['balanceAccounts'] as const
}

export function getBalancePlatformsKey() {
  return ['balancePlatforms'] as const
}

export function getCardordersKey() {
  return ['cardorders'] as const
}

export function getGrantAccountsKey() {
  return ['grantAccounts'] as const
}

export function getGrantOffersKey() {
  return ['grantOffers'] as const
}

export function getMandatesKey() {
  return ['mandates'] as const
}

export function getNetworkTokensKey() {
  return ['networkTokens'] as const
}

export function getPaymentInstrumentGroupsKey() {
  return ['paymentInstrumentGroups'] as const
}

export function getPaymentInstrumentsKey() {
  return ['paymentInstruments'] as const
}

export function getPinsKey() {
  return ['pins'] as const
}

export function getPublicKeyKey() {
  return ['publicKey'] as const
}

export function getRegisteredDevicesKey() {
  return ['registeredDevices'] as const
}

export function getScaAssociationsKey() {
  return ['scaAssociations'] as const
}

export function getScaDevicesKey() {
  return ['scaDevices'] as const
}

export function getTransactionRulesKey() {
  return ['transactionRules'] as const
}

export function getTransferRoutesKey() {
  return ['transferRoutes'] as const
}

export function getValidateBankAccountIdentificationKey() {
  return ['validateBankAccountIdentification'] as const
}

export function getPostAccountHoldersKey() {
  return ['accountHolders', '/accountHolders', 'POST'] as const
}

export function usePostAccountHolders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accountHolders.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.accountHolders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountHoldersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.accountHolders.$post> }) =>
        parseResponse(client.accountHolders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountHoldersIdKey(
  args: InferRequestType<(typeof client.accountHolders)[':id']['$get']>,
) {
  return ['accountHolders', '/accountHolders/:id', args] as const
}

export function useGetAccountHoldersId<TError = unknown>(
  args: InferRequestType<(typeof client.accountHolders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accountHolders)[':id']['$get']>>>
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
        ? getGetAccountHoldersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accountHolders)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accountHolders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountHoldersId<TError = unknown>(
  args: InferRequestType<(typeof client.accountHolders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accountHolders)[':id']['$get']>>>
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
        ? getGetAccountHoldersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accountHolders)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accountHolders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchAccountHoldersIdKey() {
  return ['accountHolders', '/accountHolders/:id', 'PATCH'] as const
}

export function usePatchAccountHoldersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accountHolders)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accountHolders)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountHoldersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.accountHolders)[':id']['$patch']> },
      ) => parseResponse(client.accountHolders[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountHoldersIdBalanceAccountsKey(
  args: InferRequestType<(typeof client.accountHolders)[':id']['balanceAccounts']['$get']>,
) {
  return ['accountHolders', '/accountHolders/:id/balanceAccounts', args] as const
}

export function useGetAccountHoldersIdBalanceAccounts<TError = unknown>(
  args: InferRequestType<(typeof client.accountHolders)[':id']['balanceAccounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accountHolders)[':id']['balanceAccounts']['$get']>>
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
        ? getGetAccountHoldersIdBalanceAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accountHolders)[':id']['balanceAccounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accountHolders[':id'].balanceAccounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountHoldersIdBalanceAccounts<TError = unknown>(
  args: InferRequestType<(typeof client.accountHolders)[':id']['balanceAccounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accountHolders)[':id']['balanceAccounts']['$get']>>
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
        ? getGetAccountHoldersIdBalanceAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accountHolders)[':id']['balanceAccounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accountHolders[':id'].balanceAccounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountHoldersIdTaxFormsKey(
  args: InferRequestType<(typeof client.accountHolders)[':id']['taxForms']['$get']>,
) {
  return ['accountHolders', '/accountHolders/:id/taxForms', args] as const
}

export function useGetAccountHoldersIdTaxForms<TError = unknown>(
  args: InferRequestType<(typeof client.accountHolders)[':id']['taxForms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accountHolders)[':id']['taxForms']['$get']>>
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
        ? getGetAccountHoldersIdTaxFormsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accountHolders)[':id']['taxForms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accountHolders[':id'].taxForms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountHoldersIdTaxForms<TError = unknown>(
  args: InferRequestType<(typeof client.accountHolders)[':id']['taxForms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accountHolders)[':id']['taxForms']['$get']>>
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
        ? getGetAccountHoldersIdTaxFormsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accountHolders)[':id']['taxForms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accountHolders[':id'].taxForms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountHoldersIdTransactionRulesKey(
  args: InferRequestType<(typeof client.accountHolders)[':id']['transactionRules']['$get']>,
) {
  return ['accountHolders', '/accountHolders/:id/transactionRules', args] as const
}

export function useGetAccountHoldersIdTransactionRules<TError = unknown>(
  args: InferRequestType<(typeof client.accountHolders)[':id']['transactionRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accountHolders)[':id']['transactionRules']['$get']>>
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
        ? getGetAccountHoldersIdTransactionRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accountHolders)[':id']['transactionRules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accountHolders[':id'].transactionRules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountHoldersIdTransactionRules<TError = unknown>(
  args: InferRequestType<(typeof client.accountHolders)[':id']['transactionRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accountHolders)[':id']['transactionRules']['$get']>>
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
        ? getGetAccountHoldersIdTransactionRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accountHolders)[':id']['transactionRules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accountHolders[':id'].transactionRules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBalanceAccountsKey() {
  return ['balanceAccounts', '/balanceAccounts', 'POST'] as const
}

export function usePostBalanceAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balanceAccounts.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.balanceAccounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBalanceAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.balanceAccounts.$post> }) =>
        parseResponse(client.balanceAccounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBalanceAccountsBalanceAccountIdSweepsKey(
  args: InferRequestType<(typeof client.balanceAccounts)[':balanceAccountId']['sweeps']['$get']>,
) {
  return ['balanceAccounts', '/balanceAccounts/:balanceAccountId/sweeps', args] as const
}

export function useGetBalanceAccountsBalanceAccountIdSweeps<TError = unknown>(
  args: InferRequestType<(typeof client.balanceAccounts)[':balanceAccountId']['sweeps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.balanceAccounts)[':balanceAccountId']['sweeps']['$get']>
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
        ? getGetBalanceAccountsBalanceAccountIdSweepsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.balanceAccounts)[':balanceAccountId']['sweeps']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.balanceAccounts[':balanceAccountId'].sweeps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBalanceAccountsBalanceAccountIdSweeps<TError = unknown>(
  args: InferRequestType<(typeof client.balanceAccounts)[':balanceAccountId']['sweeps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.balanceAccounts)[':balanceAccountId']['sweeps']['$get']>
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
        ? getGetBalanceAccountsBalanceAccountIdSweepsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.balanceAccounts)[':balanceAccountId']['sweeps']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.balanceAccounts[':balanceAccountId'].sweeps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBalanceAccountsBalanceAccountIdSweepsKey() {
  return ['balanceAccounts', '/balanceAccounts/:balanceAccountId/sweeps', 'POST'] as const
}

export function usePostBalanceAccountsBalanceAccountIdSweeps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.balanceAccounts)[':balanceAccountId']['sweeps']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.balanceAccounts)[':balanceAccountId']['sweeps']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBalanceAccountsBalanceAccountIdSweepsKey()
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
            (typeof client.balanceAccounts)[':balanceAccountId']['sweeps']['$post']
          >
        },
      ) =>
        parseResponse(client.balanceAccounts[':balanceAccountId'].sweeps.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBalanceAccountsBalanceAccountIdSweepsSweepIdKey(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$get']
  >,
) {
  return ['balanceAccounts', '/balanceAccounts/:balanceAccountId/sweeps/:sweepId', args] as const
}

export function useGetBalanceAccountsBalanceAccountIdSweepsSweepId<TError = unknown>(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$get']
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
        ? getGetBalanceAccountsBalanceAccountIdSweepsSweepIdKey(args)
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
                (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$get']
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
          client.balanceAccounts[':balanceAccountId'].sweeps[':sweepId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBalanceAccountsBalanceAccountIdSweepsSweepId<TError = unknown>(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$get']
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
        ? getGetBalanceAccountsBalanceAccountIdSweepsSweepIdKey(args)
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
                (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$get']
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
          client.balanceAccounts[':balanceAccountId'].sweeps[':sweepId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteBalanceAccountsBalanceAccountIdSweepsSweepIdKey() {
  return [
    'balanceAccounts',
    '/balanceAccounts/:balanceAccountId/sweeps/:sweepId',
    'DELETE',
  ] as const
}

export function useDeleteBalanceAccountsBalanceAccountIdSweepsSweepId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBalanceAccountsBalanceAccountIdSweepsSweepIdKey()
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
            (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.balanceAccounts[':balanceAccountId'].sweeps[':sweepId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchBalanceAccountsBalanceAccountIdSweepsSweepIdKey() {
  return ['balanceAccounts', '/balanceAccounts/:balanceAccountId/sweeps/:sweepId', 'PATCH'] as const
}

export function usePatchBalanceAccountsBalanceAccountIdSweepsSweepId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBalanceAccountsBalanceAccountIdSweepsSweepIdKey()
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
            (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.balanceAccounts[':balanceAccountId'].sweeps[':sweepId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBalanceAccountsIdKey(
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['$get']>,
) {
  return ['balanceAccounts', '/balanceAccounts/:id', args] as const
}

export function useGetBalanceAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['$get']>>>
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
        ? getGetBalanceAccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.balanceAccounts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBalanceAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['$get']>>>
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
        ? getGetBalanceAccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.balanceAccounts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchBalanceAccountsIdKey() {
  return ['balanceAccounts', '/balanceAccounts/:id', 'PATCH'] as const
}

export function usePatchBalanceAccountsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.balanceAccounts)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBalanceAccountsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.balanceAccounts)[':id']['$patch']> },
      ) => parseResponse(client.balanceAccounts[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBalanceAccountsIdPaymentInstrumentsKey(
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['paymentInstruments']['$get']>,
) {
  return ['balanceAccounts', '/balanceAccounts/:id/paymentInstruments', args] as const
}

export function useGetBalanceAccountsIdPaymentInstruments<TError = unknown>(
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['paymentInstruments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.balanceAccounts)[':id']['paymentInstruments']['$get']>
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
        ? getGetBalanceAccountsIdPaymentInstrumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.balanceAccounts)[':id']['paymentInstruments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.balanceAccounts[':id'].paymentInstruments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBalanceAccountsIdPaymentInstruments<TError = unknown>(
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['paymentInstruments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.balanceAccounts)[':id']['paymentInstruments']['$get']>
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
        ? getGetBalanceAccountsIdPaymentInstrumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.balanceAccounts)[':id']['paymentInstruments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.balanceAccounts[':id'].paymentInstruments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBalanceAccountsIdTransactionRulesKey(
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['transactionRules']['$get']>,
) {
  return ['balanceAccounts', '/balanceAccounts/:id/transactionRules', args] as const
}

export function useGetBalanceAccountsIdTransactionRules<TError = unknown>(
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['transactionRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['transactionRules']['$get']>>
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
        ? getGetBalanceAccountsIdTransactionRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['transactionRules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.balanceAccounts[':id'].transactionRules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBalanceAccountsIdTransactionRules<TError = unknown>(
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['transactionRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['transactionRules']['$get']>>
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
        ? getGetBalanceAccountsIdTransactionRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['transactionRules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.balanceAccounts[':id'].transactionRules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBalancePlatformsIdKey(
  args: InferRequestType<(typeof client.balancePlatforms)[':id']['$get']>,
) {
  return ['balancePlatforms', '/balancePlatforms/:id', args] as const
}

export function useGetBalancePlatformsId<TError = unknown>(
  args: InferRequestType<(typeof client.balancePlatforms)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['$get']>>>
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
        ? getGetBalancePlatformsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.balancePlatforms[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBalancePlatformsId<TError = unknown>(
  args: InferRequestType<(typeof client.balancePlatforms)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['$get']>>>
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
        ? getGetBalancePlatformsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.balancePlatforms[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBalancePlatformsIdAccountHoldersKey(
  args: InferRequestType<(typeof client.balancePlatforms)[':id']['accountHolders']['$get']>,
) {
  return ['balancePlatforms', '/balancePlatforms/:id/accountHolders', args] as const
}

export function useGetBalancePlatformsIdAccountHolders<TError = unknown>(
  args: InferRequestType<(typeof client.balancePlatforms)[':id']['accountHolders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['accountHolders']['$get']>>
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
        ? getGetBalancePlatformsIdAccountHoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['accountHolders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.balancePlatforms[':id'].accountHolders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBalancePlatformsIdAccountHolders<TError = unknown>(
  args: InferRequestType<(typeof client.balancePlatforms)[':id']['accountHolders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['accountHolders']['$get']>>
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
        ? getGetBalancePlatformsIdAccountHoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['accountHolders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.balancePlatforms[':id'].accountHolders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBalancePlatformsIdTransactionRulesKey(
  args: InferRequestType<(typeof client.balancePlatforms)[':id']['transactionRules']['$get']>,
) {
  return ['balancePlatforms', '/balancePlatforms/:id/transactionRules', args] as const
}

export function useGetBalancePlatformsIdTransactionRules<TError = unknown>(
  args: InferRequestType<(typeof client.balancePlatforms)[':id']['transactionRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['transactionRules']['$get']>>
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
        ? getGetBalancePlatformsIdTransactionRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['transactionRules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.balancePlatforms[':id'].transactionRules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBalancePlatformsIdTransactionRules<TError = unknown>(
  args: InferRequestType<(typeof client.balancePlatforms)[':id']['transactionRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['transactionRules']['$get']>>
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
        ? getGetBalancePlatformsIdTransactionRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['transactionRules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.balancePlatforms[':id'].transactionRules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCardordersKey(args: InferRequestType<typeof client.cardorders.$get>) {
  return ['cardorders', '/cardorders', args] as const
}

export function useGetCardorders<TError = unknown>(
  args: InferRequestType<typeof client.cardorders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cardorders.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCardordersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cardorders.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cardorders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardorders<TError = unknown>(
  args: InferRequestType<typeof client.cardorders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cardorders.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCardordersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cardorders.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cardorders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCardordersIdItemsKey(
  args: InferRequestType<(typeof client.cardorders)[':id']['items']['$get']>,
) {
  return ['cardorders', '/cardorders/:id/items', args] as const
}

export function useGetCardordersIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.cardorders)[':id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cardorders)[':id']['items']['$get']>>
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
        ? getGetCardordersIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cardorders)[':id']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cardorders[':id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardordersIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.cardorders)[':id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cardorders)[':id']['items']['$get']>>
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
        ? getGetCardordersIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cardorders)[':id']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cardorders[':id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGrantAccountsIdKey(
  args: InferRequestType<(typeof client.grantAccounts)[':id']['$get']>,
) {
  return ['grantAccounts', '/grantAccounts/:id', args] as const
}

export function useGetGrantAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.grantAccounts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.grantAccounts)[':id']['$get']>>>
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
        ? getGetGrantAccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.grantAccounts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.grantAccounts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGrantAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.grantAccounts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.grantAccounts)[':id']['$get']>>>
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
        ? getGetGrantAccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.grantAccounts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.grantAccounts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGrantOffersKey(args: InferRequestType<typeof client.grantOffers.$get>) {
  return ['grantOffers', '/grantOffers', args] as const
}

export function useGetGrantOffers<TError = unknown>(
  args: InferRequestType<typeof client.grantOffers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grantOffers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGrantOffersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grantOffers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.grantOffers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGrantOffers<TError = unknown>(
  args: InferRequestType<typeof client.grantOffers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grantOffers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGrantOffersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grantOffers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.grantOffers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGrantOffersGrantOfferIdKey(
  args: InferRequestType<(typeof client.grantOffers)[':grantOfferId']['$get']>,
) {
  return ['grantOffers', '/grantOffers/:grantOfferId', args] as const
}

export function useGetGrantOffersGrantOfferId<TError = unknown>(
  args: InferRequestType<(typeof client.grantOffers)[':grantOfferId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.grantOffers)[':grantOfferId']['$get']>>
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
        ? getGetGrantOffersGrantOfferIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.grantOffers)[':grantOfferId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.grantOffers[':grantOfferId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGrantOffersGrantOfferId<TError = unknown>(
  args: InferRequestType<(typeof client.grantOffers)[':grantOfferId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.grantOffers)[':grantOfferId']['$get']>>
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
        ? getGetGrantOffersGrantOfferIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.grantOffers)[':grantOfferId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.grantOffers[':grantOfferId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworkTokensNetworkTokenIdKey(
  args: InferRequestType<(typeof client.networkTokens)[':networkTokenId']['$get']>,
) {
  return ['networkTokens', '/networkTokens/:networkTokenId', args] as const
}

export function useGetNetworkTokensNetworkTokenId<TError = unknown>(
  args: InferRequestType<(typeof client.networkTokens)[':networkTokenId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networkTokens)[':networkTokenId']['$get']>>
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
        ? getGetNetworkTokensNetworkTokenIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networkTokens)[':networkTokenId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networkTokens[':networkTokenId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworkTokensNetworkTokenId<TError = unknown>(
  args: InferRequestType<(typeof client.networkTokens)[':networkTokenId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networkTokens)[':networkTokenId']['$get']>>
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
        ? getGetNetworkTokensNetworkTokenIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.networkTokens)[':networkTokenId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.networkTokens[':networkTokenId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchNetworkTokensNetworkTokenIdKey() {
  return ['networkTokens', '/networkTokens/:networkTokenId', 'PATCH'] as const
}

export function usePatchNetworkTokensNetworkTokenId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networkTokens)[':networkTokenId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.networkTokens)[':networkTokenId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchNetworkTokensNetworkTokenIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.networkTokens)[':networkTokenId']['$patch']> },
      ) => parseResponse(client.networkTokens[':networkTokenId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentInstrumentGroupsKey() {
  return ['paymentInstrumentGroups', '/paymentInstrumentGroups', 'POST'] as const
}

export function usePostPaymentInstrumentGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.paymentInstrumentGroups.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.paymentInstrumentGroups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentInstrumentGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.paymentInstrumentGroups.$post> },
      ) => parseResponse(client.paymentInstrumentGroups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentInstrumentGroupsIdKey(
  args: InferRequestType<(typeof client.paymentInstrumentGroups)[':id']['$get']>,
) {
  return ['paymentInstrumentGroups', '/paymentInstrumentGroups/:id', args] as const
}

export function useGetPaymentInstrumentGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.paymentInstrumentGroups)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.paymentInstrumentGroups)[':id']['$get']>>
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
        ? getGetPaymentInstrumentGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.paymentInstrumentGroups)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.paymentInstrumentGroups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentInstrumentGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.paymentInstrumentGroups)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.paymentInstrumentGroups)[':id']['$get']>>
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
        ? getGetPaymentInstrumentGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.paymentInstrumentGroups)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.paymentInstrumentGroups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPaymentInstrumentGroupsIdTransactionRulesKey(
  args: InferRequestType<
    (typeof client.paymentInstrumentGroups)[':id']['transactionRules']['$get']
  >,
) {
  return ['paymentInstrumentGroups', '/paymentInstrumentGroups/:id/transactionRules', args] as const
}

export function useGetPaymentInstrumentGroupsIdTransactionRules<TError = unknown>(
  args: InferRequestType<
    (typeof client.paymentInstrumentGroups)[':id']['transactionRules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.paymentInstrumentGroups)[':id']['transactionRules']['$get']>
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
        ? getGetPaymentInstrumentGroupsIdTransactionRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.paymentInstrumentGroups)[':id']['transactionRules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.paymentInstrumentGroups[':id'].transactionRules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentInstrumentGroupsIdTransactionRules<TError = unknown>(
  args: InferRequestType<
    (typeof client.paymentInstrumentGroups)[':id']['transactionRules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.paymentInstrumentGroups)[':id']['transactionRules']['$get']>
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
        ? getGetPaymentInstrumentGroupsIdTransactionRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.paymentInstrumentGroups)[':id']['transactionRules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.paymentInstrumentGroups[':id'].transactionRules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostPaymentInstrumentsKey() {
  return ['paymentInstruments', '/paymentInstruments', 'POST'] as const
}

export function usePostPaymentInstruments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentInstruments.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.paymentInstruments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentInstrumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.paymentInstruments.$post> }) =>
        parseResponse(client.paymentInstruments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentInstrumentsRevealKey() {
  return ['paymentInstruments', '/paymentInstruments/reveal', 'POST'] as const
}

export function usePostPaymentInstrumentsReveal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.paymentInstruments.reveal.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.paymentInstruments.reveal.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentInstrumentsRevealKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.paymentInstruments.reveal.$post> },
      ) => parseResponse(client.paymentInstruments.reveal.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentInstrumentsIdKey(
  args: InferRequestType<(typeof client.paymentInstruments)[':id']['$get']>,
) {
  return ['paymentInstruments', '/paymentInstruments/:id', args] as const
}

export function useGetPaymentInstrumentsId<TError = unknown>(
  args: InferRequestType<(typeof client.paymentInstruments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['$get']>>
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
        ? getGetPaymentInstrumentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.paymentInstruments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentInstrumentsId<TError = unknown>(
  args: InferRequestType<(typeof client.paymentInstruments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['$get']>>
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
        ? getGetPaymentInstrumentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.paymentInstruments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchPaymentInstrumentsIdKey() {
  return ['paymentInstruments', '/paymentInstruments/:id', 'PATCH'] as const
}

export function usePatchPaymentInstrumentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.paymentInstruments)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPaymentInstrumentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.paymentInstruments)[':id']['$patch']> },
      ) => parseResponse(client.paymentInstruments[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentInstrumentsIdNetworkTokenActivationDataKey(
  args: InferRequestType<
    (typeof client.paymentInstruments)[':id']['networkTokenActivationData']['$get']
  >,
) {
  return ['paymentInstruments', '/paymentInstruments/:id/networkTokenActivationData', args] as const
}

export function useGetPaymentInstrumentsIdNetworkTokenActivationData<TError = unknown>(
  args: InferRequestType<
    (typeof client.paymentInstruments)[':id']['networkTokenActivationData']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.paymentInstruments)[':id']['networkTokenActivationData']['$get']
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
        ? getGetPaymentInstrumentsIdNetworkTokenActivationDataKey(args)
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
                (typeof client.paymentInstruments)[':id']['networkTokenActivationData']['$get']
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
          client.paymentInstruments[':id'].networkTokenActivationData.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentInstrumentsIdNetworkTokenActivationData<TError = unknown>(
  args: InferRequestType<
    (typeof client.paymentInstruments)[':id']['networkTokenActivationData']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.paymentInstruments)[':id']['networkTokenActivationData']['$get']
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
        ? getGetPaymentInstrumentsIdNetworkTokenActivationDataKey(args)
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
                (typeof client.paymentInstruments)[':id']['networkTokenActivationData']['$get']
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
          client.paymentInstruments[':id'].networkTokenActivationData.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostPaymentInstrumentsIdNetworkTokenActivationDataKey() {
  return [
    'paymentInstruments',
    '/paymentInstruments/:id/networkTokenActivationData',
    'POST',
  ] as const
}

export function usePostPaymentInstrumentsIdNetworkTokenActivationData<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.paymentInstruments)[':id']['networkTokenActivationData']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.paymentInstruments)[':id']['networkTokenActivationData']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentInstrumentsIdNetworkTokenActivationDataKey()
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
            (typeof client.paymentInstruments)[':id']['networkTokenActivationData']['$post']
          >
        },
      ) =>
        parseResponse(
          client.paymentInstruments[':id'].networkTokenActivationData.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentInstrumentsIdNetworkTokensKey(
  args: InferRequestType<(typeof client.paymentInstruments)[':id']['networkTokens']['$get']>,
) {
  return ['paymentInstruments', '/paymentInstruments/:id/networkTokens', args] as const
}

export function useGetPaymentInstrumentsIdNetworkTokens<TError = unknown>(
  args: InferRequestType<(typeof client.paymentInstruments)[':id']['networkTokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['networkTokens']['$get']>>
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
        ? getGetPaymentInstrumentsIdNetworkTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['networkTokens']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.paymentInstruments[':id'].networkTokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentInstrumentsIdNetworkTokens<TError = unknown>(
  args: InferRequestType<(typeof client.paymentInstruments)[':id']['networkTokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['networkTokens']['$get']>>
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
        ? getGetPaymentInstrumentsIdNetworkTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['networkTokens']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.paymentInstruments[':id'].networkTokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPaymentInstrumentsIdRevealKey(
  args: InferRequestType<(typeof client.paymentInstruments)[':id']['reveal']['$get']>,
) {
  return ['paymentInstruments', '/paymentInstruments/:id/reveal', args] as const
}

export function useGetPaymentInstrumentsIdReveal<TError = unknown>(
  args: InferRequestType<(typeof client.paymentInstruments)[':id']['reveal']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['reveal']['$get']>>
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
        ? getGetPaymentInstrumentsIdRevealKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['reveal']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.paymentInstruments[':id'].reveal.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentInstrumentsIdReveal<TError = unknown>(
  args: InferRequestType<(typeof client.paymentInstruments)[':id']['reveal']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['reveal']['$get']>>
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
        ? getGetPaymentInstrumentsIdRevealKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['reveal']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.paymentInstruments[':id'].reveal.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPaymentInstrumentsIdTransactionRulesKey(
  args: InferRequestType<(typeof client.paymentInstruments)[':id']['transactionRules']['$get']>,
) {
  return ['paymentInstruments', '/paymentInstruments/:id/transactionRules', args] as const
}

export function useGetPaymentInstrumentsIdTransactionRules<TError = unknown>(
  args: InferRequestType<(typeof client.paymentInstruments)[':id']['transactionRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.paymentInstruments)[':id']['transactionRules']['$get']>
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
        ? getGetPaymentInstrumentsIdTransactionRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.paymentInstruments)[':id']['transactionRules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.paymentInstruments[':id'].transactionRules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentInstrumentsIdTransactionRules<TError = unknown>(
  args: InferRequestType<(typeof client.paymentInstruments)[':id']['transactionRules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.paymentInstruments)[':id']['transactionRules']['$get']>
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
        ? getGetPaymentInstrumentsIdTransactionRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.paymentInstruments)[':id']['transactionRules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.paymentInstruments[':id'].transactionRules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPinsChangeKey() {
  return ['pins', '/pins/change', 'POST'] as const
}

export function usePostPinsChange<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.change.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.pins.change.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPinsChangeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.pins.change.$post> }) =>
        parseResponse(client.pins.change.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPinsRevealKey() {
  return ['pins', '/pins/reveal', 'POST'] as const
}

export function usePostPinsReveal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.reveal.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.pins.reveal.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPinsRevealKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.pins.reveal.$post> }) =>
        parseResponse(client.pins.reveal.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPublicKeyKey(args: InferRequestType<typeof client.publicKey.$get>) {
  return ['publicKey', '/publicKey', args] as const
}

export function useGetPublicKey<TError = unknown>(
  args: InferRequestType<typeof client.publicKey.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publicKey.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPublicKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publicKey.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.publicKey.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicKey<TError = unknown>(
  args: InferRequestType<typeof client.publicKey.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publicKey.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPublicKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publicKey.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.publicKey.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRegisteredDevicesKey(
  args: InferRequestType<typeof client.registeredDevices.$get>,
) {
  return ['registeredDevices', '/registeredDevices', args] as const
}

export function useGetRegisteredDevices<TError = unknown>(
  args: InferRequestType<typeof client.registeredDevices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registeredDevices.$get>>>>
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
        ? getGetRegisteredDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registeredDevices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.registeredDevices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegisteredDevices<TError = unknown>(
  args: InferRequestType<typeof client.registeredDevices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registeredDevices.$get>>>>
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
        ? getGetRegisteredDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registeredDevices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.registeredDevices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRegisteredDevicesKey() {
  return ['registeredDevices', '/registeredDevices', 'POST'] as const
}

export function usePostRegisteredDevices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registeredDevices.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.registeredDevices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRegisteredDevicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.registeredDevices.$post> }) =>
        parseResponse(client.registeredDevices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRegisteredDevicesDeviceIdAssociationsKey() {
  return ['registeredDevices', '/registeredDevices/:deviceId/associations', 'POST'] as const
}

export function usePostRegisteredDevicesDeviceIdAssociations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.registeredDevices)[':deviceId']['associations']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.registeredDevices)[':deviceId']['associations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRegisteredDevicesDeviceIdAssociationsKey()
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
            (typeof client.registeredDevices)[':deviceId']['associations']['$post']
          >
        },
      ) =>
        parseResponse(client.registeredDevices[':deviceId'].associations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchRegisteredDevicesDeviceIdAssociationsKey() {
  return ['registeredDevices', '/registeredDevices/:deviceId/associations', 'PATCH'] as const
}

export function usePatchRegisteredDevicesDeviceIdAssociations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.registeredDevices)[':deviceId']['associations']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.registeredDevices)[':deviceId']['associations']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRegisteredDevicesDeviceIdAssociationsKey()
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
            (typeof client.registeredDevices)[':deviceId']['associations']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.registeredDevices[':deviceId'].associations.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRegisteredDevicesIdKey() {
  return ['registeredDevices', '/registeredDevices/:id', 'DELETE'] as const
}

export function useDeleteRegisteredDevicesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registeredDevices)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.registeredDevices)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRegisteredDevicesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.registeredDevices)[':id']['$delete']> },
      ) => parseResponse(client.registeredDevices[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchRegisteredDevicesIdKey() {
  return ['registeredDevices', '/registeredDevices/:id', 'PATCH'] as const
}

export function usePatchRegisteredDevicesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.registeredDevices)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.registeredDevices)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRegisteredDevicesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.registeredDevices)[':id']['$patch']> },
      ) => parseResponse(client.registeredDevices[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransactionRulesKey() {
  return ['transactionRules', '/transactionRules', 'POST'] as const
}

export function usePostTransactionRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactionRules.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.transactionRules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransactionRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.transactionRules.$post> }) =>
        parseResponse(client.transactionRules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTransactionRulesTransactionRuleIdKey(
  args: InferRequestType<(typeof client.transactionRules)[':transactionRuleId']['$get']>,
) {
  return ['transactionRules', '/transactionRules/:transactionRuleId', args] as const
}

export function useGetTransactionRulesTransactionRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.transactionRules)[':transactionRuleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transactionRules)[':transactionRuleId']['$get']>>
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
        ? getGetTransactionRulesTransactionRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transactionRules)[':transactionRuleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.transactionRules[':transactionRuleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransactionRulesTransactionRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.transactionRules)[':transactionRuleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transactionRules)[':transactionRuleId']['$get']>>
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
        ? getGetTransactionRulesTransactionRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transactionRules)[':transactionRuleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.transactionRules[':transactionRuleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTransactionRulesTransactionRuleIdKey() {
  return ['transactionRules', '/transactionRules/:transactionRuleId', 'DELETE'] as const
}

export function useDeleteTransactionRulesTransactionRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transactionRules)[':transactionRuleId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.transactionRules)[':transactionRuleId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTransactionRulesTransactionRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.transactionRules)[':transactionRuleId']['$delete']>
        },
      ) => parseResponse(client.transactionRules[':transactionRuleId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTransactionRulesTransactionRuleIdKey() {
  return ['transactionRules', '/transactionRules/:transactionRuleId', 'PATCH'] as const
}

export function usePatchTransactionRulesTransactionRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transactionRules)[':transactionRuleId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.transactionRules)[':transactionRuleId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTransactionRulesTransactionRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.transactionRules)[':transactionRuleId']['$patch']>
        },
      ) => parseResponse(client.transactionRules[':transactionRuleId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferRoutesCalculateKey() {
  return ['transferRoutes', '/transferRoutes/calculate', 'POST'] as const
}

export function usePostTransferRoutesCalculate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transferRoutes.calculate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transferRoutes.calculate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferRoutesCalculateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transferRoutes.calculate.$post> },
      ) => parseResponse(client.transferRoutes.calculate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostValidateBankAccountIdentificationKey() {
  return [
    'validateBankAccountIdentification',
    '/validateBankAccountIdentification',
    'POST',
  ] as const
}

export function usePostValidateBankAccountIdentification<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.validateBankAccountIdentification.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.validateBankAccountIdentification.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostValidateBankAccountIdentificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.validateBankAccountIdentification.$post> },
      ) => parseResponse(client.validateBankAccountIdentification.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountHoldersIdTaxFormSummaryKey(
  args: InferRequestType<(typeof client.accountHolders)[':id']['taxFormSummary']['$get']>,
) {
  return ['accountHolders', '/accountHolders/:id/taxFormSummary', args] as const
}

export function useGetAccountHoldersIdTaxFormSummary<TError = unknown>(
  args: InferRequestType<(typeof client.accountHolders)[':id']['taxFormSummary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accountHolders)[':id']['taxFormSummary']['$get']>>
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
        ? getGetAccountHoldersIdTaxFormSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accountHolders)[':id']['taxFormSummary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accountHolders[':id'].taxFormSummary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountHoldersIdTaxFormSummary<TError = unknown>(
  args: InferRequestType<(typeof client.accountHolders)[':id']['taxFormSummary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accountHolders)[':id']['taxFormSummary']['$get']>>
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
        ? getGetAccountHoldersIdTaxFormSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accountHolders)[':id']['taxFormSummary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accountHolders[':id'].taxFormSummary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBalanceAccountsBalanceAccountIdPayoutSchedulesKey(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules']['$get']
  >,
) {
  return ['balanceAccounts', '/balanceAccounts/:balanceAccountId/payoutSchedules', args] as const
}

export function useGetBalanceAccountsBalanceAccountIdPayoutSchedules<TError = unknown>(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules']['$get']
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
        ? getGetBalanceAccountsBalanceAccountIdPayoutSchedulesKey(args)
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
                (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules']['$get']
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
          client.balanceAccounts[':balanceAccountId'].payoutSchedules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBalanceAccountsBalanceAccountIdPayoutSchedules<TError = unknown>(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules']['$get']
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
        ? getGetBalanceAccountsBalanceAccountIdPayoutSchedulesKey(args)
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
                (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules']['$get']
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
          client.balanceAccounts[':balanceAccountId'].payoutSchedules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostBalanceAccountsBalanceAccountIdPayoutSchedulesKey() {
  return ['balanceAccounts', '/balanceAccounts/:balanceAccountId/payoutSchedules', 'POST'] as const
}

export function usePostBalanceAccountsBalanceAccountIdPayoutSchedules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBalanceAccountsBalanceAccountIdPayoutSchedulesKey()
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
            (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules']['$post']
          >
        },
      ) =>
        parseResponse(
          client.balanceAccounts[':balanceAccountId'].payoutSchedules.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBalanceAccountsBalanceAccountIdPayoutSchedulesIdKey(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['$get']
  >,
) {
  return [
    'balanceAccounts',
    '/balanceAccounts/:balanceAccountId/payoutSchedules/:id',
    args,
  ] as const
}

export function useGetBalanceAccountsBalanceAccountIdPayoutSchedulesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['$get']
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
        ? getGetBalanceAccountsBalanceAccountIdPayoutSchedulesIdKey(args)
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
                (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['$get']
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
          client.balanceAccounts[':balanceAccountId'].payoutSchedules[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBalanceAccountsBalanceAccountIdPayoutSchedulesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['$get']
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
        ? getGetBalanceAccountsBalanceAccountIdPayoutSchedulesIdKey(args)
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
                (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['$get']
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
          client.balanceAccounts[':balanceAccountId'].payoutSchedules[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdKey() {
  return [
    'balanceAccounts',
    '/balanceAccounts/:balanceAccountId/payoutSchedules/:id',
    'DELETE',
  ] as const
}

export function useDeleteBalanceAccountsBalanceAccountIdPayoutSchedulesId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdKey()
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
            (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.balanceAccounts[':balanceAccountId'].payoutSchedules[':id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchBalanceAccountsBalanceAccountIdPayoutSchedulesIdKey() {
  return [
    'balanceAccounts',
    '/balanceAccounts/:balanceAccountId/payoutSchedules/:id',
    'PATCH',
  ] as const
}

export function usePatchBalanceAccountsBalanceAccountIdPayoutSchedulesId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBalanceAccountsBalanceAccountIdPayoutSchedulesIdKey()
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
            (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.balanceAccounts[':balanceAccountId'].payoutSchedules[':id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsKey(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['executions']['$get']
  >,
) {
  return [
    'balanceAccounts',
    '/balanceAccounts/:balanceAccountId/payoutSchedules/:id/executions',
    args,
  ] as const
}

export function useGetBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutions<TError = unknown>(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['executions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['executions']['$get']
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
        ? getGetBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsKey(args)
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
                (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['executions']['$get']
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
          client.balanceAccounts[':balanceAccountId'].payoutSchedules[':id'].executions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['executions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['executions']['$get']
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
        ? getGetBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsKey(args)
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
                (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['executions']['$get']
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
          client.balanceAccounts[':balanceAccountId'].payoutSchedules[':id'].executions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBalanceAccountsBalanceAccountIdRecurringTopUpsKey(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps']['$get']
  >,
) {
  return ['balanceAccounts', '/balanceAccounts/:balanceAccountId/recurringTopUps', args] as const
}

export function useGetBalanceAccountsBalanceAccountIdRecurringTopUps<TError = unknown>(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps']['$get']
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
        ? getGetBalanceAccountsBalanceAccountIdRecurringTopUpsKey(args)
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
                (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps']['$get']
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
          client.balanceAccounts[':balanceAccountId'].recurringTopUps.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBalanceAccountsBalanceAccountIdRecurringTopUps<TError = unknown>(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps']['$get']
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
        ? getGetBalanceAccountsBalanceAccountIdRecurringTopUpsKey(args)
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
                (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps']['$get']
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
          client.balanceAccounts[':balanceAccountId'].recurringTopUps.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostBalanceAccountsBalanceAccountIdRecurringTopUpsKey() {
  return ['balanceAccounts', '/balanceAccounts/:balanceAccountId/recurringTopUps', 'POST'] as const
}

export function usePostBalanceAccountsBalanceAccountIdRecurringTopUps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBalanceAccountsBalanceAccountIdRecurringTopUpsKey()
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
            (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps']['$post']
          >
        },
      ) =>
        parseResponse(
          client.balanceAccounts[':balanceAccountId'].recurringTopUps.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdKey() {
  return [
    'balanceAccounts',
    '/balanceAccounts/:balanceAccountId/recurringTopUps/:topUpId',
    'DELETE',
  ] as const
}

export function useDeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps'][':topUpId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps'][':topUpId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdKey()
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
            (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps'][':topUpId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.balanceAccounts[':balanceAccountId'].recurringTopUps[':topUpId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdKey() {
  return [
    'balanceAccounts',
    '/balanceAccounts/:balanceAccountId/recurringTopUps/:topUpId',
    'PATCH',
  ] as const
}

export function usePatchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps'][':topUpId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps'][':topUpId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdKey()
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
            (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps'][':topUpId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.balanceAccounts[':balanceAccountId'].recurringTopUps[':topUpId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBalanceAccountsBalanceAccountIdSweepsSweepIdExecutionsKey(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['executions']['$get']
  >,
) {
  return [
    'balanceAccounts',
    '/balanceAccounts/:balanceAccountId/sweeps/:sweepId/executions',
    args,
  ] as const
}

export function useGetBalanceAccountsBalanceAccountIdSweepsSweepIdExecutions<TError = unknown>(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['executions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['executions']['$get']
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
        ? getGetBalanceAccountsBalanceAccountIdSweepsSweepIdExecutionsKey(args)
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
                (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['executions']['$get']
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
          client.balanceAccounts[':balanceAccountId'].sweeps[':sweepId'].executions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBalanceAccountsBalanceAccountIdSweepsSweepIdExecutions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['executions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['executions']['$get']
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
        ? getGetBalanceAccountsBalanceAccountIdSweepsSweepIdExecutionsKey(args)
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
                (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['executions']['$get']
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
          client.balanceAccounts[':balanceAccountId'].sweeps[':sweepId'].executions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBalanceAccountsIdTransferLimitsKey(
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['transferLimits']['$get']>,
) {
  return ['balanceAccounts', '/balanceAccounts/:id/transferLimits', args] as const
}

export function useGetBalanceAccountsIdTransferLimits<TError = unknown>(
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['transferLimits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['transferLimits']['$get']>>
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
        ? getGetBalanceAccountsIdTransferLimitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['transferLimits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.balanceAccounts[':id'].transferLimits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBalanceAccountsIdTransferLimits<TError = unknown>(
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['transferLimits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['transferLimits']['$get']>>
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
        ? getGetBalanceAccountsIdTransferLimitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['transferLimits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.balanceAccounts[':id'].transferLimits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBalanceAccountsIdTransferLimitsKey() {
  return ['balanceAccounts', '/balanceAccounts/:id/transferLimits', 'POST'] as const
}

export function usePostBalanceAccountsIdTransferLimits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['transferLimits']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.balanceAccounts)[':id']['transferLimits']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBalanceAccountsIdTransferLimitsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.balanceAccounts)[':id']['transferLimits']['$post']>
        },
      ) => parseResponse(client.balanceAccounts[':id'].transferLimits.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBalanceAccountsIdTransferLimitsApproveKey() {
  return ['balanceAccounts', '/balanceAccounts/:id/transferLimits/approve', 'POST'] as const
}

export function usePostBalanceAccountsIdTransferLimitsApprove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balanceAccounts)[':id']['transferLimits']['approve']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.balanceAccounts)[':id']['transferLimits']['approve']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBalanceAccountsIdTransferLimitsApproveKey()
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
            (typeof client.balanceAccounts)[':id']['transferLimits']['approve']['$post']
          >
        },
      ) =>
        parseResponse(
          client.balanceAccounts[':id'].transferLimits.approve.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBalanceAccountsIdTransferLimitsCurrentKey(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':id']['transferLimits']['current']['$get']
  >,
) {
  return ['balanceAccounts', '/balanceAccounts/:id/transferLimits/current', args] as const
}

export function useGetBalanceAccountsIdTransferLimitsCurrent<TError = unknown>(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':id']['transferLimits']['current']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balanceAccounts)[':id']['transferLimits']['current']['$get']
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
        ? getGetBalanceAccountsIdTransferLimitsCurrentKey(args)
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
                (typeof client.balanceAccounts)[':id']['transferLimits']['current']['$get']
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
          client.balanceAccounts[':id'].transferLimits.current.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBalanceAccountsIdTransferLimitsCurrent<TError = unknown>(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':id']['transferLimits']['current']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balanceAccounts)[':id']['transferLimits']['current']['$get']
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
        ? getGetBalanceAccountsIdTransferLimitsCurrentKey(args)
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
                (typeof client.balanceAccounts)[':id']['transferLimits']['current']['$get']
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
          client.balanceAccounts[':id'].transferLimits.current.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBalanceAccountsIdTransferLimitsTransferLimitIdKey(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':id']['transferLimits'][':transferLimitId']['$get']
  >,
) {
  return ['balanceAccounts', '/balanceAccounts/:id/transferLimits/:transferLimitId', args] as const
}

export function useGetBalanceAccountsIdTransferLimitsTransferLimitId<TError = unknown>(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':id']['transferLimits'][':transferLimitId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balanceAccounts)[':id']['transferLimits'][':transferLimitId']['$get']
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
        ? getGetBalanceAccountsIdTransferLimitsTransferLimitIdKey(args)
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
                (typeof client.balanceAccounts)[':id']['transferLimits'][':transferLimitId']['$get']
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
          client.balanceAccounts[':id'].transferLimits[':transferLimitId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBalanceAccountsIdTransferLimitsTransferLimitId<TError = unknown>(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':id']['transferLimits'][':transferLimitId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balanceAccounts)[':id']['transferLimits'][':transferLimitId']['$get']
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
        ? getGetBalanceAccountsIdTransferLimitsTransferLimitIdKey(args)
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
                (typeof client.balanceAccounts)[':id']['transferLimits'][':transferLimitId']['$get']
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
          client.balanceAccounts[':id'].transferLimits[':transferLimitId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteBalanceAccountsIdTransferLimitsTransferLimitIdKey() {
  return [
    'balanceAccounts',
    '/balanceAccounts/:id/transferLimits/:transferLimitId',
    'DELETE',
  ] as const
}

export function useDeleteBalanceAccountsIdTransferLimitsTransferLimitId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balanceAccounts)[':id']['transferLimits'][':transferLimitId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.balanceAccounts)[':id']['transferLimits'][':transferLimitId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBalanceAccountsIdTransferLimitsTransferLimitIdKey()
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
            (typeof client.balanceAccounts)[':id']['transferLimits'][':transferLimitId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.balanceAccounts[':id'].transferLimits[':transferLimitId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBalancePlatformsBalancePlatformIdPayoutSchedulesKey(
  args: InferRequestType<
    (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules']['$get']
  >,
) {
  return ['balancePlatforms', '/balancePlatforms/:balancePlatformId/payoutSchedules', args] as const
}

export function useGetBalancePlatformsBalancePlatformIdPayoutSchedules<TError = unknown>(
  args: InferRequestType<
    (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules']['$get']
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
        ? getGetBalancePlatformsBalancePlatformIdPayoutSchedulesKey(args)
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
                (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules']['$get']
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
          client.balancePlatforms[':balancePlatformId'].payoutSchedules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBalancePlatformsBalancePlatformIdPayoutSchedules<TError = unknown>(
  args: InferRequestType<
    (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules']['$get']
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
        ? getGetBalancePlatformsBalancePlatformIdPayoutSchedulesKey(args)
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
                (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules']['$get']
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
          client.balancePlatforms[':balancePlatformId'].payoutSchedules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBalancePlatformsBalancePlatformIdPayoutSchedulesIdKey(
  args: InferRequestType<
    (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules'][':id']['$get']
  >,
) {
  return [
    'balancePlatforms',
    '/balancePlatforms/:balancePlatformId/payoutSchedules/:id',
    args,
  ] as const
}

export function useGetBalancePlatformsBalancePlatformIdPayoutSchedulesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules'][':id']['$get']
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
        ? getGetBalancePlatformsBalancePlatformIdPayoutSchedulesIdKey(args)
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
                (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules'][':id']['$get']
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
          client.balancePlatforms[':balancePlatformId'].payoutSchedules[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBalancePlatformsBalancePlatformIdPayoutSchedulesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules'][':id']['$get']
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
        ? getGetBalancePlatformsBalancePlatformIdPayoutSchedulesIdKey(args)
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
                (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules'][':id']['$get']
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
          client.balancePlatforms[':balancePlatformId'].payoutSchedules[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsKey(
  args: InferRequestType<
    (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings']['$get']
  >,
) {
  return [
    'balancePlatforms',
    '/balancePlatforms/:balancePlatformId/webhooks/:webhookId/settings',
    args,
  ] as const
}

export function useGetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings']['$get']
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
        ? getGetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsKey(args)
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
                (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings']['$get']
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
          client.balancePlatforms[':balancePlatformId'].webhooks[':webhookId'].settings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings']['$get']
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
        ? getGetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsKey(args)
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
                (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings']['$get']
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
          client.balancePlatforms[':balancePlatformId'].webhooks[':webhookId'].settings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsKey() {
  return [
    'balancePlatforms',
    '/balancePlatforms/:balancePlatformId/webhooks/:webhookId/settings',
    'POST',
  ] as const
}

export function usePostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsKey()
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
            (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings']['$post']
          >
        },
      ) =>
        parseResponse(
          client.balancePlatforms[':balancePlatformId'].webhooks[':webhookId'].settings.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdKey(
  args: InferRequestType<
    (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings'][':settingId']['$get']
  >,
) {
  return [
    'balancePlatforms',
    '/balancePlatforms/:balancePlatformId/webhooks/:webhookId/settings/:settingId',
    args,
  ] as const
}

export function useGetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings'][':settingId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings'][':settingId']['$get']
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
        ? getGetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdKey(args)
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
                (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings'][':settingId']['$get']
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
          client.balancePlatforms[':balancePlatformId'].webhooks[':webhookId'].settings[
            ':settingId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings'][':settingId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings'][':settingId']['$get']
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
        ? getGetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdKey(args)
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
                (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings'][':settingId']['$get']
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
          client.balancePlatforms[':balancePlatformId'].webhooks[':webhookId'].settings[
            ':settingId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdKey() {
  return [
    'balancePlatforms',
    '/balancePlatforms/:balancePlatformId/webhooks/:webhookId/settings/:settingId',
    'DELETE',
  ] as const
}

export function useDeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings'][':settingId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings'][':settingId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdKey()
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
            (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings'][':settingId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.balancePlatforms[':balancePlatformId'].webhooks[':webhookId'].settings[
            ':settingId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdKey() {
  return [
    'balancePlatforms',
    '/balancePlatforms/:balancePlatformId/webhooks/:webhookId/settings/:settingId',
    'PATCH',
  ] as const
}

export function usePatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings'][':settingId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings'][':settingId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdKey()
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
            (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings'][':settingId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.balancePlatforms[':balancePlatformId'].webhooks[':webhookId'].settings[
            ':settingId'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBalancePlatformsIdTransferLimitsKey(
  args: InferRequestType<(typeof client.balancePlatforms)[':id']['transferLimits']['$get']>,
) {
  return ['balancePlatforms', '/balancePlatforms/:id/transferLimits', args] as const
}

export function useGetBalancePlatformsIdTransferLimits<TError = unknown>(
  args: InferRequestType<(typeof client.balancePlatforms)[':id']['transferLimits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['transferLimits']['$get']>>
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
        ? getGetBalancePlatformsIdTransferLimitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['transferLimits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.balancePlatforms[':id'].transferLimits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBalancePlatformsIdTransferLimits<TError = unknown>(
  args: InferRequestType<(typeof client.balancePlatforms)[':id']['transferLimits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['transferLimits']['$get']>>
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
        ? getGetBalancePlatformsIdTransferLimitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['transferLimits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.balancePlatforms[':id'].transferLimits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBalancePlatformsIdTransferLimitsKey() {
  return ['balancePlatforms', '/balancePlatforms/:id/transferLimits', 'POST'] as const
}

export function usePostBalancePlatformsIdTransferLimits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['transferLimits']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.balancePlatforms)[':id']['transferLimits']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBalancePlatformsIdTransferLimitsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.balancePlatforms)[':id']['transferLimits']['$post']>
        },
      ) => parseResponse(client.balancePlatforms[':id'].transferLimits.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBalancePlatformsIdTransferLimitsTransferLimitIdKey(
  args: InferRequestType<
    (typeof client.balancePlatforms)[':id']['transferLimits'][':transferLimitId']['$get']
  >,
) {
  return [
    'balancePlatforms',
    '/balancePlatforms/:id/transferLimits/:transferLimitId',
    args,
  ] as const
}

export function useGetBalancePlatformsIdTransferLimitsTransferLimitId<TError = unknown>(
  args: InferRequestType<
    (typeof client.balancePlatforms)[':id']['transferLimits'][':transferLimitId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balancePlatforms)[':id']['transferLimits'][':transferLimitId']['$get']
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
        ? getGetBalancePlatformsIdTransferLimitsTransferLimitIdKey(args)
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
                (typeof client.balancePlatforms)[':id']['transferLimits'][':transferLimitId']['$get']
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
          client.balancePlatforms[':id'].transferLimits[':transferLimitId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBalancePlatformsIdTransferLimitsTransferLimitId<TError = unknown>(
  args: InferRequestType<
    (typeof client.balancePlatforms)[':id']['transferLimits'][':transferLimitId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balancePlatforms)[':id']['transferLimits'][':transferLimitId']['$get']
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
        ? getGetBalancePlatformsIdTransferLimitsTransferLimitIdKey(args)
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
                (typeof client.balancePlatforms)[':id']['transferLimits'][':transferLimitId']['$get']
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
          client.balancePlatforms[':id'].transferLimits[':transferLimitId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteBalancePlatformsIdTransferLimitsTransferLimitIdKey() {
  return [
    'balancePlatforms',
    '/balancePlatforms/:id/transferLimits/:transferLimitId',
    'DELETE',
  ] as const
}

export function useDeleteBalancePlatformsIdTransferLimitsTransferLimitId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.balancePlatforms)[':id']['transferLimits'][':transferLimitId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.balancePlatforms)[':id']['transferLimits'][':transferLimitId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBalancePlatformsIdTransferLimitsTransferLimitIdKey()
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
            (typeof client.balancePlatforms)[':id']['transferLimits'][':transferLimitId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.balancePlatforms[':id'].transferLimits[':transferLimitId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMandatesKey(args: InferRequestType<typeof client.mandates.$get>) {
  return ['mandates', '/mandates', args] as const
}

export function useGetMandates<TError = unknown>(
  args: InferRequestType<typeof client.mandates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mandates.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMandatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mandates.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.mandates.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMandates<TError = unknown>(
  args: InferRequestType<typeof client.mandates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mandates.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMandatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mandates.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.mandates.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMandatesMandateIdKey(
  args: InferRequestType<(typeof client.mandates)[':mandateId']['$get']>,
) {
  return ['mandates', '/mandates/:mandateId', args] as const
}

export function useGetMandatesMandateId<TError = unknown>(
  args: InferRequestType<(typeof client.mandates)[':mandateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.mandates)[':mandateId']['$get']>>>
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
        ? getGetMandatesMandateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.mandates)[':mandateId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mandates[':mandateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMandatesMandateId<TError = unknown>(
  args: InferRequestType<(typeof client.mandates)[':mandateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.mandates)[':mandateId']['$get']>>>
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
        ? getGetMandatesMandateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.mandates)[':mandateId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mandates[':mandateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchMandatesMandateIdKey() {
  return ['mandates', '/mandates/:mandateId', 'PATCH'] as const
}

export function usePatchMandatesMandateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.mandates)[':mandateId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mandates)[':mandateId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMandatesMandateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.mandates)[':mandateId']['$patch']> },
      ) => parseResponse(client.mandates[':mandateId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMandatesMandateIdCancelKey() {
  return ['mandates', '/mandates/:mandateId/cancel', 'POST'] as const
}

export function usePostMandatesMandateIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mandates)[':mandateId']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mandates)[':mandateId']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMandatesMandateIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.mandates)[':mandateId']['cancel']['$post']> },
      ) => parseResponse(client.mandates[':mandateId'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersKey(
  args: InferRequestType<
    (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$get']
  >,
) {
  return [
    'paymentInstruments',
    '/paymentInstruments/:paymentInstrumentId/authorisedCardUsers',
    args,
  ] as const
}

export function useGetPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$get']
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
        ? getGetPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersKey(args)
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
                (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$get']
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
          client.paymentInstruments[':paymentInstrumentId'].authorisedCardUsers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$get']
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
        ? getGetPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersKey(args)
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
                (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$get']
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
          client.paymentInstruments[':paymentInstrumentId'].authorisedCardUsers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersKey() {
  return [
    'paymentInstruments',
    '/paymentInstruments/:paymentInstrumentId/authorisedCardUsers',
    'POST',
  ] as const
}

export function usePostPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersKey()
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
            (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.paymentInstruments[':paymentInstrumentId'].authorisedCardUsers.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersKey() {
  return [
    'paymentInstruments',
    '/paymentInstruments/:paymentInstrumentId/authorisedCardUsers',
    'DELETE',
  ] as const
}

export function useDeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersKey()
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
            (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.paymentInstruments[':paymentInstrumentId'].authorisedCardUsers.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersKey() {
  return [
    'paymentInstruments',
    '/paymentInstruments/:paymentInstrumentId/authorisedCardUsers',
    'PATCH',
  ] as const
}

export function usePatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersKey()
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
            (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.paymentInstruments[':paymentInstrumentId'].authorisedCardUsers.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetScaAssociationsKey(
  args: InferRequestType<typeof client.scaAssociations.$get>,
) {
  return ['scaAssociations', '/scaAssociations', args] as const
}

export function useGetScaAssociations<TError = unknown>(
  args: InferRequestType<typeof client.scaAssociations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scaAssociations.$get>>>>
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
        ? getGetScaAssociationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scaAssociations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scaAssociations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScaAssociations<TError = unknown>(
  args: InferRequestType<typeof client.scaAssociations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scaAssociations.$get>>>>
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
        ? getGetScaAssociationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scaAssociations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scaAssociations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteScaAssociationsKey() {
  return ['scaAssociations', '/scaAssociations', 'DELETE'] as const
}

export function useDeleteScaAssociations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scaAssociations.$delete>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.scaAssociations.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteScaAssociationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.scaAssociations.$delete> }) =>
        parseResponse(client.scaAssociations.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchScaAssociationsKey() {
  return ['scaAssociations', '/scaAssociations', 'PATCH'] as const
}

export function usePatchScaAssociations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scaAssociations.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.scaAssociations.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchScaAssociationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.scaAssociations.$patch> }) =>
        parseResponse(client.scaAssociations.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostScaDevicesKey() {
  return ['scaDevices', '/scaDevices', 'POST'] as const
}

export function usePostScaDevices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scaDevices.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.scaDevices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScaDevicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.scaDevices.$post> }) =>
        parseResponse(client.scaDevices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteScaDevicesDeviceIdKey() {
  return ['scaDevices', '/scaDevices/:deviceId', 'DELETE'] as const
}

export function useDeleteScaDevicesDeviceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scaDevices)[':deviceId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.scaDevices)[':deviceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteScaDevicesDeviceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.scaDevices)[':deviceId']['$delete']> },
      ) => parseResponse(client.scaDevices[':deviceId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchScaDevicesDeviceIdKey() {
  return ['scaDevices', '/scaDevices/:deviceId', 'PATCH'] as const
}

export function usePatchScaDevicesDeviceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.scaDevices)[':deviceId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.scaDevices)[':deviceId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchScaDevicesDeviceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.scaDevices)[':deviceId']['$patch']> },
      ) => parseResponse(client.scaDevices[':deviceId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostScaDevicesDeviceIdScaAssociationsKey() {
  return ['scaDevices', '/scaDevices/:deviceId/scaAssociations', 'POST'] as const
}

export function usePostScaDevicesDeviceIdScaAssociations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scaDevices)[':deviceId']['scaAssociations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.scaDevices)[':deviceId']['scaAssociations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScaDevicesDeviceIdScaAssociationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.scaDevices)[':deviceId']['scaAssociations']['$post']>
        },
      ) => parseResponse(client.scaDevices[':deviceId'].scaAssociations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
