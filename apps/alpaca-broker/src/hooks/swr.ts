import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1betaKey() {
  return ['v1beta'] as const
}

export function getV1beta1Key() {
  return ['v1beta1'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getV2beta1Key() {
  return ['v2beta1'] as const
}

export function getGetV1betaAccountsAccountIdFundingWalletKey(
  args: InferRequestType<(typeof client.v1beta.accounts)[':account_id']['funding_wallet']['$get']>,
) {
  return ['v1beta', '/v1beta/accounts/:account_id/funding_wallet', args] as const
}

export function useGetV1betaAccountsAccountIdFundingWallet<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta.accounts)[':account_id']['funding_wallet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta.accounts)[':account_id']['funding_wallet']['$get']>
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
        ? getGetV1betaAccountsAccountIdFundingWalletKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta.accounts)[':account_id']['funding_wallet']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1beta.accounts[':account_id'].funding_wallet.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaAccountsAccountIdFundingWallet<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta.accounts)[':account_id']['funding_wallet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta.accounts)[':account_id']['funding_wallet']['$get']>
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
        ? getGetV1betaAccountsAccountIdFundingWalletKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta.accounts)[':account_id']['funding_wallet']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1beta.accounts[':account_id'].funding_wallet.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1betaAccountsAccountIdFundingWalletKey() {
  return ['v1beta', '/v1beta/accounts/:account_id/funding_wallet', 'POST'] as const
}

export function usePostV1betaAccountsAccountIdFundingWallet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta.accounts)[':account_id']['funding_wallet']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta.accounts)[':account_id']['funding_wallet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1betaAccountsAccountIdFundingWalletKey()
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
            (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta.accounts[':account_id'].funding_wallet.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1betaAccountsAccountIdFundingWalletFundingDetailsKey(
  args: InferRequestType<
    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['funding_details']['$get']
  >,
) {
  return ['v1beta', '/v1beta/accounts/:account_id/funding_wallet/funding_details', args] as const
}

export function useGetV1betaAccountsAccountIdFundingWalletFundingDetails<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['funding_details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['funding_details']['$get']
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
        ? getGetV1betaAccountsAccountIdFundingWalletFundingDetailsKey(args)
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
                (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['funding_details']['$get']
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
          client.v1beta.accounts[':account_id'].funding_wallet.funding_details.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaAccountsAccountIdFundingWalletFundingDetails<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['funding_details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['funding_details']['$get']
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
        ? getGetV1betaAccountsAccountIdFundingWalletFundingDetailsKey(args)
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
                (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['funding_details']['$get']
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
          client.v1beta.accounts[':account_id'].funding_wallet.funding_details.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1betaAccountsAccountIdFundingWalletRecipientBankKey(
  args: InferRequestType<
    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['recipient_bank']['$get']
  >,
) {
  return ['v1beta', '/v1beta/accounts/:account_id/funding_wallet/recipient_bank', args] as const
}

export function useGetV1betaAccountsAccountIdFundingWalletRecipientBank<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['recipient_bank']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['recipient_bank']['$get']
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
        ? getGetV1betaAccountsAccountIdFundingWalletRecipientBankKey(args)
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
                (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['recipient_bank']['$get']
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
          client.v1beta.accounts[':account_id'].funding_wallet.recipient_bank.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaAccountsAccountIdFundingWalletRecipientBank<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['recipient_bank']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['recipient_bank']['$get']
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
        ? getGetV1betaAccountsAccountIdFundingWalletRecipientBankKey(args)
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
                (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['recipient_bank']['$get']
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
          client.v1beta.accounts[':account_id'].funding_wallet.recipient_bank.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1betaAccountsAccountIdFundingWalletRecipientBankKey() {
  return ['v1beta', '/v1beta/accounts/:account_id/funding_wallet/recipient_bank', 'POST'] as const
}

export function usePostV1betaAccountsAccountIdFundingWalletRecipientBank<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['recipient_bank']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['recipient_bank']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1betaAccountsAccountIdFundingWalletRecipientBankKey()
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
            (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['recipient_bank']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta.accounts[':account_id'].funding_wallet.recipient_bank.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1betaAccountsAccountIdFundingWalletRecipientBankKey() {
  return ['v1beta', '/v1beta/accounts/:account_id/funding_wallet/recipient_bank', 'DELETE'] as const
}

export function useDeleteV1betaAccountsAccountIdFundingWalletRecipientBank<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['recipient_bank']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['recipient_bank']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1betaAccountsAccountIdFundingWalletRecipientBankKey()
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
            (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['recipient_bank']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1beta.accounts[':account_id'].funding_wallet.recipient_bank.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1betaAccountsAccountIdFundingWalletTransfersKey(
  args: InferRequestType<
    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['transfers']['$get']
  >,
) {
  return ['v1beta', '/v1beta/accounts/:account_id/funding_wallet/transfers', args] as const
}

export function useGetV1betaAccountsAccountIdFundingWalletTransfers<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['transfers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['transfers']['$get']
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
        ? getGetV1betaAccountsAccountIdFundingWalletTransfersKey(args)
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
                (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['transfers']['$get']
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
          client.v1beta.accounts[':account_id'].funding_wallet.transfers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaAccountsAccountIdFundingWalletTransfers<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['transfers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['transfers']['$get']
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
        ? getGetV1betaAccountsAccountIdFundingWalletTransfersKey(args)
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
                (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['transfers']['$get']
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
          client.v1beta.accounts[':account_id'].funding_wallet.transfers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1betaAccountsAccountIdFundingWalletTransfersTransferIdKey(
  args: InferRequestType<
    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['transfers'][':transfer_id']['$get']
  >,
) {
  return [
    'v1beta',
    '/v1beta/accounts/:account_id/funding_wallet/transfers/:transfer_id',
    args,
  ] as const
}

export function useGetV1betaAccountsAccountIdFundingWalletTransfersTransferId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['transfers'][':transfer_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['transfers'][':transfer_id']['$get']
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
        ? getGetV1betaAccountsAccountIdFundingWalletTransfersTransferIdKey(args)
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
                (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['transfers'][':transfer_id']['$get']
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
          client.v1beta.accounts[':account_id'].funding_wallet.transfers[':transfer_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaAccountsAccountIdFundingWalletTransfersTransferId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['transfers'][':transfer_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['transfers'][':transfer_id']['$get']
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
        ? getGetV1betaAccountsAccountIdFundingWalletTransfersTransferIdKey(args)
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
                (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['transfers'][':transfer_id']['$get']
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
          client.v1beta.accounts[':account_id'].funding_wallet.transfers[':transfer_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1betaAccountsAccountIdFundingWalletWithdrawalKey() {
  return ['v1beta', '/v1beta/accounts/:account_id/funding_wallet/withdrawal', 'POST'] as const
}

export function usePostV1betaAccountsAccountIdFundingWalletWithdrawal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['withdrawal']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['withdrawal']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1betaAccountsAccountIdFundingWalletWithdrawalKey()
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
            (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['withdrawal']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta.accounts[':account_id'].funding_wallet.withdrawal.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1betaAccountsFundingWalletKey() {
  return ['v1beta', '/v1beta/accounts/funding_wallet', 'POST'] as const
}

export function usePostV1betaAccountsFundingWallet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1beta.accounts.funding_wallet.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1beta.accounts.funding_wallet.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1betaAccountsFundingWalletKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1beta.accounts.funding_wallet.$post> },
      ) => parseResponse(client.v1beta.accounts.funding_wallet.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1betaDemoBankingFundingKey() {
  return ['v1beta', '/v1beta/demo/banking/funding', 'POST'] as const
}

export function usePostV1betaDemoBankingFunding<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.demo.banking.funding.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1beta.demo.banking.funding.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1betaDemoBankingFundingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1beta.demo.banking.funding.$post> },
      ) => parseResponse(client.v1beta.demo.banking.funding.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta1AcatsKey(args: InferRequestType<typeof client.v1beta1.acats.$get>) {
  return ['v1beta1', '/v1beta1/acats', args] as const
}

export function useGetV1beta1Acats<TError = unknown>(
  args: InferRequestType<typeof client.v1beta1.acats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.acats.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1beta1AcatsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.acats.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.acats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1Acats<TError = unknown>(
  args: InferRequestType<typeof client.v1beta1.acats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.acats.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1beta1AcatsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.acats.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.acats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta1AcatsAccountIdKey(
  args: InferRequestType<(typeof client.v1beta1.acats)[':account_id']['$get']>,
) {
  return ['v1beta1', '/v1beta1/acats/:account_id', args] as const
}

export function useGetV1beta1AcatsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1.acats)[':account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1.acats)[':account_id']['$get']>>
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
        ? getGetV1beta1AcatsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1.acats)[':account_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.acats[':account_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1AcatsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1.acats)[':account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1.acats)[':account_id']['$get']>>
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
        ? getGetV1beta1AcatsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1.acats)[':account_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.acats[':account_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1beta1AcatsAccountIdKey() {
  return ['v1beta1', '/v1beta1/acats/:account_id', 'POST'] as const
}

export function usePostV1beta1AcatsAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1.acats)[':account_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1.acats)[':account_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1AcatsAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta1.acats)[':account_id']['$post']> },
      ) => parseResponse(client.v1beta1.acats[':account_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta1AcatsAccountIdAcatsIdKey(
  args: InferRequestType<(typeof client.v1beta1.acats)[':account_id'][':acats_id']['$get']>,
) {
  return ['v1beta1', '/v1beta1/acats/:account_id/:acats_id', args] as const
}

export function useGetV1beta1AcatsAccountIdAcatsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1.acats)[':account_id'][':acats_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1.acats)[':account_id'][':acats_id']['$get']>>
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
        ? getGetV1beta1AcatsAccountIdAcatsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1.acats)[':account_id'][':acats_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta1.acats[':account_id'][':acats_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1AcatsAccountIdAcatsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1.acats)[':account_id'][':acats_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1.acats)[':account_id'][':acats_id']['$get']>>
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
        ? getGetV1beta1AcatsAccountIdAcatsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1.acats)[':account_id'][':acats_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta1.acats[':account_id'][':acats_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta1AcatsAccountIdAcatsIdAssetsKey(
  args: InferRequestType<
    (typeof client.v1beta1.acats)[':account_id'][':acats_id']['assets']['$get']
  >,
) {
  return ['v1beta1', '/v1beta1/acats/:account_id/:acats_id/assets', args] as const
}

export function useGetV1beta1AcatsAccountIdAcatsIdAssets<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta1.acats)[':account_id'][':acats_id']['assets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta1.acats)[':account_id'][':acats_id']['assets']['$get']
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
        ? getGetV1beta1AcatsAccountIdAcatsIdAssetsKey(args)
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
                (typeof client.v1beta1.acats)[':account_id'][':acats_id']['assets']['$get']
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
          client.v1beta1.acats[':account_id'][':acats_id'].assets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1AcatsAccountIdAcatsIdAssets<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta1.acats)[':account_id'][':acats_id']['assets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta1.acats)[':account_id'][':acats_id']['assets']['$get']
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
        ? getGetV1beta1AcatsAccountIdAcatsIdAssetsKey(args)
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
                (typeof client.v1beta1.acats)[':account_id'][':acats_id']['assets']['$get']
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
          client.v1beta1.acats[':account_id'][':acats_id'].assets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta1AcatsContrabrokersKey() {
  return ['v1beta1', '/v1beta1/acats/contrabrokers'] as const
}

export function useGetV1beta1AcatsContrabrokers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.acats.contrabrokers.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1beta1AcatsContrabrokersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.acats.contrabrokers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.acats.contrabrokers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1AcatsContrabrokers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.acats.contrabrokers.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1beta1AcatsContrabrokersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.acats.contrabrokers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.acats.contrabrokers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta1LogosSymbolKey(
  args: InferRequestType<(typeof client.v1beta1.logos)[':symbol']['$get']>,
) {
  return ['v1beta1', '/v1beta1/logos/:symbol', args] as const
}

export function useGetV1beta1LogosSymbol<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1.logos)[':symbol']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1.logos)[':symbol']['$get']>>
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
        ? getGetV1beta1LogosSymbolKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1.logos)[':symbol']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.logos[':symbol'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1LogosSymbol<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1.logos)[':symbol']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1.logos)[':symbol']['$get']>>
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
        ? getGetV1beta1LogosSymbolKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1.logos)[':symbol']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.logos[':symbol'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AccountsKey(args: InferRequestType<typeof client.v1.accounts.$get>) {
  return ['v1', '/v1/accounts', args] as const
}

export function useGetV1Accounts<TError = unknown>(
  args: InferRequestType<typeof client.v1.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Accounts<TError = unknown>(
  args: InferRequestType<typeof client.v1.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountsKey() {
  return ['v1', '/v1/accounts', 'POST'] as const
}

export function usePostV1Accounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.accounts.$post> }) =>
        parseResponse(client.v1.accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsAccountIdKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['$get']>,
) {
  return ['v1', '/v1/accounts/:account_id', args] as const
}

export function useGetV1AccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['$get']>>
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
        ? getGetV1AccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accounts[':account_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['$get']>>
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
        ? getGetV1AccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accounts[':account_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1AccountsAccountIdKey() {
  return ['v1', '/v1/accounts/:account_id', 'PATCH'] as const
}

export function usePatchV1AccountsAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':account_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AccountsAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.accounts)[':account_id']['$patch']> },
      ) => parseResponse(client.v1.accounts[':account_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsAccountIdAchRelationshipsKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['ach_relationships']['$get']>,
) {
  return ['v1', '/v1/accounts/:account_id/ach_relationships', args] as const
}

export function useGetV1AccountsAccountIdAchRelationships<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['ach_relationships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account_id']['ach_relationships']['$get']>
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
        ? getGetV1AccountsAccountIdAchRelationshipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account_id']['ach_relationships']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.accounts[':account_id'].ach_relationships.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountIdAchRelationships<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['ach_relationships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account_id']['ach_relationships']['$get']>
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
        ? getGetV1AccountsAccountIdAchRelationshipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account_id']['ach_relationships']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.accounts[':account_id'].ach_relationships.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountsAccountIdAchRelationshipsKey() {
  return ['v1', '/v1/accounts/:account_id/ach_relationships', 'POST'] as const
}

export function usePostV1AccountsAccountIdAchRelationships<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.accounts)[':account_id']['ach_relationships']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':account_id']['ach_relationships']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsAccountIdAchRelationshipsKey()
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
            (typeof client.v1.accounts)[':account_id']['ach_relationships']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.accounts[':account_id'].ach_relationships.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AccountsAccountIdAchRelationshipsAchRelationshipIdKey() {
  return [
    'v1',
    '/v1/accounts/:account_id/ach_relationships/:ach_relationship_id',
    'DELETE',
  ] as const
}

export function useDeleteV1AccountsAccountIdAchRelationshipsAchRelationshipId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':account_id']['ach_relationships'][':ach_relationship_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.accounts)[':account_id']['ach_relationships'][':ach_relationship_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AccountsAccountIdAchRelationshipsAchRelationshipIdKey()
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
            (typeof client.v1.accounts)[':account_id']['ach_relationships'][':ach_relationship_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.accounts[':account_id'].ach_relationships[':ach_relationship_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1AccountsAccountIdActionsCloseKey() {
  return ['v1', '/v1/accounts/:account_id/actions/close', 'POST'] as const
}

export function usePostV1AccountsAccountIdActionsClose<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account_id']['actions']['close']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':account_id']['actions']['close']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsAccountIdActionsCloseKey()
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
            (typeof client.v1.accounts)[':account_id']['actions']['close']['$post']
          >
        },
      ) => parseResponse(client.v1.accounts[':account_id'].actions.close.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsAccountIdCipKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['cip']['$get']>,
) {
  return ['v1', '/v1/accounts/:account_id/cip', args] as const
}

export function useGetV1AccountsAccountIdCip<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['cip']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['cip']['$get']>>
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
        ? getGetV1AccountsAccountIdCipKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['cip']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accounts[':account_id'].cip.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountIdCip<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['cip']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['cip']['$get']>>
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
        ? getGetV1AccountsAccountIdCipKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['cip']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accounts[':account_id'].cip.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountsAccountIdCipKey() {
  return ['v1', '/v1/accounts/:account_id/cip', 'POST'] as const
}

export function usePostV1AccountsAccountIdCip<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['cip']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':account_id']['cip']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsAccountIdCipKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.accounts)[':account_id']['cip']['$post']> },
      ) => parseResponse(client.v1.accounts[':account_id'].cip.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsAccountIdDocumentsKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['documents']['$get']>,
) {
  return ['v1', '/v1/accounts/:account_id/documents', args] as const
}

export function useGetV1AccountsAccountIdDocuments<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['documents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['documents']['$get']>>
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
        ? getGetV1AccountsAccountIdDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['documents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':account_id'].documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountIdDocuments<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['documents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['documents']['$get']>>
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
        ? getGetV1AccountsAccountIdDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['documents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':account_id'].documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AccountsAccountIdDocumentsDocumentIdDownloadKey(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['documents'][':document_id']['download']['$get']
  >,
) {
  return ['v1', '/v1/accounts/:account_id/documents/:document_id/download', args] as const
}

export function useGetV1AccountsAccountIdDocumentsDocumentIdDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['documents'][':document_id']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':account_id']['documents'][':document_id']['download']['$get']
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
        ? getGetV1AccountsAccountIdDocumentsDocumentIdDownloadKey(args)
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
                (typeof client.v1.accounts)[':account_id']['documents'][':document_id']['download']['$get']
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
          client.v1.accounts[':account_id'].documents[':document_id'].download.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountIdDocumentsDocumentIdDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['documents'][':document_id']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':account_id']['documents'][':document_id']['download']['$get']
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
        ? getGetV1AccountsAccountIdDocumentsDocumentIdDownloadKey(args)
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
                (typeof client.v1.accounts)[':account_id']['documents'][':document_id']['download']['$get']
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
          client.v1.accounts[':account_id'].documents[':document_id'].download.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountsAccountIdDocumentsUploadKey() {
  return ['v1', '/v1/accounts/:account_id/documents/upload', 'POST'] as const
}

export function usePostV1AccountsAccountIdDocumentsUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account_id']['documents']['upload']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':account_id']['documents']['upload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsAccountIdDocumentsUploadKey()
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
            (typeof client.v1.accounts)[':account_id']['documents']['upload']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.accounts[':account_id'].documents.upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsAccountIdDocumentsW8benDocumentIdDownloadKey(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['documents']['w8ben'][':document_id']['download']['$get']
  >,
) {
  return ['v1', '/v1/accounts/:account_id/documents/w8ben/:document_id/download', args] as const
}

export function useGetV1AccountsAccountIdDocumentsW8benDocumentIdDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['documents']['w8ben'][':document_id']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':account_id']['documents']['w8ben'][':document_id']['download']['$get']
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
        ? getGetV1AccountsAccountIdDocumentsW8benDocumentIdDownloadKey(args)
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
                (typeof client.v1.accounts)[':account_id']['documents']['w8ben'][':document_id']['download']['$get']
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
          client.v1.accounts[':account_id'].documents.w8ben[':document_id'].download.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountIdDocumentsW8benDocumentIdDownload<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['documents']['w8ben'][':document_id']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':account_id']['documents']['w8ben'][':document_id']['download']['$get']
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
        ? getGetV1AccountsAccountIdDocumentsW8benDocumentIdDownloadKey(args)
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
                (typeof client.v1.accounts)[':account_id']['documents']['w8ben'][':document_id']['download']['$get']
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
          client.v1.accounts[':account_id'].documents.w8ben[':document_id'].download.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV1AccountsAccountIdOnfidoSdkKey() {
  return ['v1', '/v1/accounts/:account_id/onfido/sdk', 'PATCH'] as const
}

export function usePatchV1AccountsAccountIdOnfidoSdk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['onfido']['sdk']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':account_id']['onfido']['sdk']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AccountsAccountIdOnfidoSdkKey()
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
            (typeof client.v1.accounts)[':account_id']['onfido']['sdk']['$patch']
          >
        },
      ) => parseResponse(client.v1.accounts[':account_id'].onfido.sdk.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsAccountIdOnfidoSdkTokensKey(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['onfido']['sdk']['tokens']['$get']
  >,
) {
  return ['v1', '/v1/accounts/:account_id/onfido/sdk/tokens', args] as const
}

export function useGetV1AccountsAccountIdOnfidoSdkTokens<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['onfido']['sdk']['tokens']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':account_id']['onfido']['sdk']['tokens']['$get']
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
        ? getGetV1AccountsAccountIdOnfidoSdkTokensKey(args)
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
                (typeof client.v1.accounts)[':account_id']['onfido']['sdk']['tokens']['$get']
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
          client.v1.accounts[':account_id'].onfido.sdk.tokens.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountIdOnfidoSdkTokens<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['onfido']['sdk']['tokens']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':account_id']['onfido']['sdk']['tokens']['$get']
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
        ? getGetV1AccountsAccountIdOnfidoSdkTokensKey(args)
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
                (typeof client.v1.accounts)[':account_id']['onfido']['sdk']['tokens']['$get']
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
          client.v1.accounts[':account_id'].onfido.sdk.tokens.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountsAccountIdOptionsApprovalKey() {
  return ['v1', '/v1/accounts/:account_id/options/approval', 'POST'] as const
}

export function usePostV1AccountsAccountIdOptionsApproval<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.accounts)[':account_id']['options']['approval']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':account_id']['options']['approval']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsAccountIdOptionsApprovalKey()
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
            (typeof client.v1.accounts)[':account_id']['options']['approval']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.accounts[':account_id'].options.approval.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsAccountIdRecipientBanksKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['recipient_banks']['$get']>,
) {
  return ['v1', '/v1/accounts/:account_id/recipient_banks', args] as const
}

export function useGetV1AccountsAccountIdRecipientBanks<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['recipient_banks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account_id']['recipient_banks']['$get']>
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
        ? getGetV1AccountsAccountIdRecipientBanksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account_id']['recipient_banks']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':account_id'].recipient_banks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountIdRecipientBanks<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['recipient_banks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account_id']['recipient_banks']['$get']>
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
        ? getGetV1AccountsAccountIdRecipientBanksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account_id']['recipient_banks']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':account_id'].recipient_banks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountsAccountIdRecipientBanksKey() {
  return ['v1', '/v1/accounts/:account_id/recipient_banks', 'POST'] as const
}

export function usePostV1AccountsAccountIdRecipientBanks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.accounts)[':account_id']['recipient_banks']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':account_id']['recipient_banks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsAccountIdRecipientBanksKey()
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
            (typeof client.v1.accounts)[':account_id']['recipient_banks']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.accounts[':account_id'].recipient_banks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AccountsAccountIdRecipientBanksBankIdKey() {
  return ['v1', '/v1/accounts/:account_id/recipient_banks/:bank_id', 'DELETE'] as const
}

export function useDeleteV1AccountsAccountIdRecipientBanksBankId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':account_id']['recipient_banks'][':bank_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.accounts)[':account_id']['recipient_banks'][':bank_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AccountsAccountIdRecipientBanksBankIdKey()
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
            (typeof client.v1.accounts)[':account_id']['recipient_banks'][':bank_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.accounts[':account_id'].recipient_banks[':bank_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1AccountsAccountIdTokenizationCallbackMintKey() {
  return ['v1', '/v1/accounts/:account_id/tokenization/callback/mint', 'POST'] as const
}

export function usePostV1AccountsAccountIdTokenizationCallbackMint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.accounts)[':account_id']['tokenization']['callback']['mint']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.accounts)[':account_id']['tokenization']['callback']['mint']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsAccountIdTokenizationCallbackMintKey()
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
            (typeof client.v1.accounts)[':account_id']['tokenization']['callback']['mint']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.accounts[':account_id'].tokenization.callback.mint.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1AccountsAccountIdTokenizationCallbackRedeemKey() {
  return ['v1', '/v1/accounts/:account_id/tokenization/callback/redeem', 'POST'] as const
}

export function usePostV1AccountsAccountIdTokenizationCallbackRedeem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.accounts)[':account_id']['tokenization']['callback']['redeem']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.accounts)[':account_id']['tokenization']['callback']['redeem']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsAccountIdTokenizationCallbackRedeemKey()
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
            (typeof client.v1.accounts)[':account_id']['tokenization']['callback']['redeem']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.accounts[':account_id'].tokenization.callback.redeem.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1AccountsAccountIdTokenizationMintKey() {
  return ['v1', '/v1/accounts/:account_id/tokenization/mint', 'POST'] as const
}

export function usePostV1AccountsAccountIdTokenizationMint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.accounts)[':account_id']['tokenization']['mint']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':account_id']['tokenization']['mint']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsAccountIdTokenizationMintKey()
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
            (typeof client.v1.accounts)[':account_id']['tokenization']['mint']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.accounts[':account_id'].tokenization.mint.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsAccountIdTokenizationRequestsKey(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['tokenization']['requests']['$get']
  >,
) {
  return ['v1', '/v1/accounts/:account_id/tokenization/requests', args] as const
}

export function useGetV1AccountsAccountIdTokenizationRequests<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['tokenization']['requests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':account_id']['tokenization']['requests']['$get']
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
        ? getGetV1AccountsAccountIdTokenizationRequestsKey(args)
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
                (typeof client.v1.accounts)[':account_id']['tokenization']['requests']['$get']
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
          client.v1.accounts[':account_id'].tokenization.requests.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountIdTokenizationRequests<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['tokenization']['requests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':account_id']['tokenization']['requests']['$get']
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
        ? getGetV1AccountsAccountIdTokenizationRequestsKey(args)
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
                (typeof client.v1.accounts)[':account_id']['tokenization']['requests']['$get']
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
          client.v1.accounts[':account_id'].tokenization.requests.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AccountsAccountIdTokenizationRequestsTokenizationRequestIdKey(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['tokenization']['requests'][':tokenization_request_id']['$get']
  >,
) {
  return [
    'v1',
    '/v1/accounts/:account_id/tokenization/requests/:tokenization_request_id',
    args,
  ] as const
}

export function useGetV1AccountsAccountIdTokenizationRequestsTokenizationRequestId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['tokenization']['requests'][':tokenization_request_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':account_id']['tokenization']['requests'][':tokenization_request_id']['$get']
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
        ? getGetV1AccountsAccountIdTokenizationRequestsTokenizationRequestIdKey(args)
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
                (typeof client.v1.accounts)[':account_id']['tokenization']['requests'][':tokenization_request_id']['$get']
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
          client.v1.accounts[':account_id'].tokenization.requests[':tokenization_request_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountIdTokenizationRequestsTokenizationRequestId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['tokenization']['requests'][':tokenization_request_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':account_id']['tokenization']['requests'][':tokenization_request_id']['$get']
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
        ? getGetV1AccountsAccountIdTokenizationRequestsTokenizationRequestIdKey(args)
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
                (typeof client.v1.accounts)[':account_id']['tokenization']['requests'][':tokenization_request_id']['$get']
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
          client.v1.accounts[':account_id'].tokenization.requests[':tokenization_request_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AccountsAccountIdTokenizationRequestsByClientRequestIdKey(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['tokenization']['requests:by_client_request_id']['$get']
  >,
) {
  return [
    'v1',
    '/v1/accounts/:account_id/tokenization/requests:by_client_request_id',
    args,
  ] as const
}

export function useGetV1AccountsAccountIdTokenizationRequestsByClientRequestId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['tokenization']['requests:by_client_request_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':account_id']['tokenization']['requests:by_client_request_id']['$get']
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
        ? getGetV1AccountsAccountIdTokenizationRequestsByClientRequestIdKey(args)
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
                (typeof client.v1.accounts)[':account_id']['tokenization']['requests:by_client_request_id']['$get']
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
          client.v1.accounts[':account_id'].tokenization['requests:by_client_request_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountIdTokenizationRequestsByClientRequestId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['tokenization']['requests:by_client_request_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':account_id']['tokenization']['requests:by_client_request_id']['$get']
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
        ? getGetV1AccountsAccountIdTokenizationRequestsByClientRequestIdKey(args)
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
                (typeof client.v1.accounts)[':account_id']['tokenization']['requests:by_client_request_id']['$get']
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
          client.v1.accounts[':account_id'].tokenization['requests:by_client_request_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AccountsAccountIdTokenizationRequestsByIssuerRequestIdKey(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['tokenization']['requests:by_issuer_request_id']['$get']
  >,
) {
  return [
    'v1',
    '/v1/accounts/:account_id/tokenization/requests:by_issuer_request_id',
    args,
  ] as const
}

export function useGetV1AccountsAccountIdTokenizationRequestsByIssuerRequestId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['tokenization']['requests:by_issuer_request_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':account_id']['tokenization']['requests:by_issuer_request_id']['$get']
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
        ? getGetV1AccountsAccountIdTokenizationRequestsByIssuerRequestIdKey(args)
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
                (typeof client.v1.accounts)[':account_id']['tokenization']['requests:by_issuer_request_id']['$get']
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
          client.v1.accounts[':account_id'].tokenization['requests:by_issuer_request_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountIdTokenizationRequestsByIssuerRequestId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['tokenization']['requests:by_issuer_request_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':account_id']['tokenization']['requests:by_issuer_request_id']['$get']
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
        ? getGetV1AccountsAccountIdTokenizationRequestsByIssuerRequestIdKey(args)
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
                (typeof client.v1.accounts)[':account_id']['tokenization']['requests:by_issuer_request_id']['$get']
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
          client.v1.accounts[':account_id'].tokenization['requests:by_issuer_request_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AccountsAccountIdTransfersKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['transfers']['$get']>,
) {
  return ['v1', '/v1/accounts/:account_id/transfers', args] as const
}

export function useGetV1AccountsAccountIdTransfers<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['transfers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['transfers']['$get']>>
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
        ? getGetV1AccountsAccountIdTransfersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['transfers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':account_id'].transfers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountIdTransfers<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['transfers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['transfers']['$get']>>
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
        ? getGetV1AccountsAccountIdTransfersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['transfers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':account_id'].transfers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountsAccountIdTransfersKey() {
  return ['v1', '/v1/accounts/:account_id/transfers', 'POST'] as const
}

export function usePostV1AccountsAccountIdTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['transfers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':account_id']['transfers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsAccountIdTransfersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.accounts)[':account_id']['transfers']['$post']>
        },
      ) => parseResponse(client.v1.accounts[':account_id'].transfers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AccountsAccountIdTransfersTransferIdKey() {
  return ['v1', '/v1/accounts/:account_id/transfers/:transfer_id', 'DELETE'] as const
}

export function useDeleteV1AccountsAccountIdTransfersTransferId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.accounts)[':account_id']['transfers'][':transfer_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.accounts)[':account_id']['transfers'][':transfer_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AccountsAccountIdTransfersTransferIdKey()
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
            (typeof client.v1.accounts)[':account_id']['transfers'][':transfer_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.accounts[':account_id'].transfers[':transfer_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsAccountIdWalletsKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['wallets']['$get']>,
) {
  return ['v1', '/v1/accounts/:account_id/wallets', args] as const
}

export function useGetV1AccountsAccountIdWallets<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['wallets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['wallets']['$get']>>
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
        ? getGetV1AccountsAccountIdWalletsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['wallets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':account_id'].wallets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountIdWallets<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['wallets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['wallets']['$get']>>
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
        ? getGetV1AccountsAccountIdWalletsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['wallets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':account_id'].wallets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AccountsAccountIdWalletsTransfersKey(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['wallets']['transfers']['$get']
  >,
) {
  return ['v1', '/v1/accounts/:account_id/wallets/transfers', args] as const
}

export function useGetV1AccountsAccountIdWalletsTransfers<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['wallets']['transfers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account_id']['wallets']['transfers']['$get']>
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
        ? getGetV1AccountsAccountIdWalletsTransfersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account_id']['wallets']['transfers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.accounts[':account_id'].wallets.transfers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountIdWalletsTransfers<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['wallets']['transfers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account_id']['wallets']['transfers']['$get']>
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
        ? getGetV1AccountsAccountIdWalletsTransfersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account_id']['wallets']['transfers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.accounts[':account_id'].wallets.transfers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountsAccountIdWalletsTransfersKey() {
  return ['v1', '/v1/accounts/:account_id/wallets/transfers', 'POST'] as const
}

export function usePostV1AccountsAccountIdWalletsTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.accounts)[':account_id']['wallets']['transfers']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':account_id']['wallets']['transfers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsAccountIdWalletsTransfersKey()
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
            (typeof client.v1.accounts)[':account_id']['wallets']['transfers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.accounts[':account_id'].wallets.transfers.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsAccountIdWalletsTransfersTransferIdKey(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['wallets']['transfers'][':transfer_id']['$get']
  >,
) {
  return ['v1', '/v1/accounts/:account_id/wallets/transfers/:transfer_id', args] as const
}

export function useGetV1AccountsAccountIdWalletsTransfersTransferId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['wallets']['transfers'][':transfer_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':account_id']['wallets']['transfers'][':transfer_id']['$get']
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
        ? getGetV1AccountsAccountIdWalletsTransfersTransferIdKey(args)
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
                (typeof client.v1.accounts)[':account_id']['wallets']['transfers'][':transfer_id']['$get']
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
          client.v1.accounts[':account_id'].wallets.transfers[':transfer_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountIdWalletsTransfersTransferId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['wallets']['transfers'][':transfer_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':account_id']['wallets']['transfers'][':transfer_id']['$get']
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
        ? getGetV1AccountsAccountIdWalletsTransfersTransferIdKey(args)
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
                (typeof client.v1.accounts)[':account_id']['wallets']['transfers'][':transfer_id']['$get']
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
          client.v1.accounts[':account_id'].wallets.transfers[':transfer_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AccountsAccountIdWalletsWhitelistsKey(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['wallets']['whitelists']['$get']
  >,
) {
  return ['v1', '/v1/accounts/:account_id/wallets/whitelists', args] as const
}

export function useGetV1AccountsAccountIdWalletsWhitelists<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['wallets']['whitelists']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':account_id']['wallets']['whitelists']['$get']
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
        ? getGetV1AccountsAccountIdWalletsWhitelistsKey(args)
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
                (typeof client.v1.accounts)[':account_id']['wallets']['whitelists']['$get']
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
          client.v1.accounts[':account_id'].wallets.whitelists.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountIdWalletsWhitelists<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['wallets']['whitelists']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':account_id']['wallets']['whitelists']['$get']
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
        ? getGetV1AccountsAccountIdWalletsWhitelistsKey(args)
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
                (typeof client.v1.accounts)[':account_id']['wallets']['whitelists']['$get']
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
          client.v1.accounts[':account_id'].wallets.whitelists.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountsAccountIdWalletsWhitelistsKey() {
  return ['v1', '/v1/accounts/:account_id/wallets/whitelists', 'POST'] as const
}

export function usePostV1AccountsAccountIdWalletsWhitelists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.accounts)[':account_id']['wallets']['whitelists']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':account_id']['wallets']['whitelists']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsAccountIdWalletsWhitelistsKey()
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
            (typeof client.v1.accounts)[':account_id']['wallets']['whitelists']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.accounts[':account_id'].wallets.whitelists.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdKey() {
  return [
    'v1',
    '/v1/accounts/:account_id/wallets/whitelists/:whitelisted_address_id',
    'DELETE',
  ] as const
}

export function useDeleteV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.accounts)[':account_id']['wallets']['whitelists'][':whitelisted_address_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.accounts)[':account_id']['wallets']['whitelists'][':whitelisted_address_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdKey()
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
            (typeof client.v1.accounts)[':account_id']['wallets']['whitelists'][':whitelisted_address_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.accounts[':account_id'].wallets.whitelists[':whitelisted_address_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdTravelRuleInfoKey() {
  return [
    'v1',
    '/v1/accounts/:account_id/wallets/whitelists/:whitelisted_address_id/travel-rule-info',
    'PATCH',
  ] as const
}

export function usePatchV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdTravelRuleInfo<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.accounts)[':account_id']['wallets']['whitelists'][':whitelisted_address_id']['travel-rule-info']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.accounts)[':account_id']['wallets']['whitelists'][':whitelisted_address_id']['travel-rule-info']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdTravelRuleInfoKey()
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
            (typeof client.v1.accounts)[':account_id']['wallets']['whitelists'][':whitelisted_address_id']['travel-rule-info']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.accounts[':account_id'].wallets.whitelists[':whitelisted_address_id'][
            'travel-rule-info'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsActivitiesKey(
  args: InferRequestType<typeof client.v1.accounts.activities.$get>,
) {
  return ['v1', '/v1/accounts/activities', args] as const
}

export function useGetV1AccountsActivities<TError = unknown>(
  args: InferRequestType<typeof client.v1.accounts.activities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.activities.$get>>>
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
        ? getGetV1AccountsActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.activities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accounts.activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsActivities<TError = unknown>(
  args: InferRequestType<typeof client.v1.accounts.activities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.activities.$get>>>
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
        ? getGetV1AccountsActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.activities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accounts.activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AccountsActivitiesActivityTypeKey(
  args: InferRequestType<(typeof client.v1.accounts.activities)[':activity_type']['$get']>,
) {
  return ['v1', '/v1/accounts/activities/:activity_type', args] as const
}

export function useGetV1AccountsActivitiesActivityType<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts.activities)[':activity_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts.activities)[':activity_type']['$get']>>
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
        ? getGetV1AccountsActivitiesActivityTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts.activities)[':activity_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts.activities[':activity_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsActivitiesActivityType<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts.activities)[':activity_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts.activities)[':activity_type']['$get']>>
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
        ? getGetV1AccountsActivitiesActivityTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts.activities)[':activity_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts.activities[':activity_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AccountsIraExcessContributionsKey() {
  return ['v1', '/v1/accounts/ira_excess_contributions'] as const
}

export function useGetV1AccountsIraExcessContributions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.accounts.ira_excess_contributions.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccountsIraExcessContributionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.accounts.ira_excess_contributions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts.ira_excess_contributions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsIraExcessContributions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.accounts.ira_excess_contributions.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccountsIraExcessContributionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.accounts.ira_excess_contributions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts.ira_excess_contributions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AccountsOptionsApprovalsKey(
  args: InferRequestType<typeof client.v1.accounts.options.approvals.$get>,
) {
  return ['v1', '/v1/accounts/options/approvals', args] as const
}

export function useGetV1AccountsOptionsApprovals<TError = unknown>(
  args: InferRequestType<typeof client.v1.accounts.options.approvals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.accounts.options.approvals.$get>>
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
        ? getGetV1AccountsOptionsApprovalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.accounts.options.approvals.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accounts.options.approvals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsOptionsApprovals<TError = unknown>(
  args: InferRequestType<typeof client.v1.accounts.options.approvals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.accounts.options.approvals.$get>>
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
        ? getGetV1AccountsOptionsApprovalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.accounts.options.approvals.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accounts.options.approvals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AccountsPositionsKey(
  args: InferRequestType<typeof client.v1.accounts.positions.$get>,
) {
  return ['v1', '/v1/accounts/positions', args] as const
}

export function useGetV1AccountsPositions<TError = unknown>(
  args: InferRequestType<typeof client.v1.accounts.positions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.positions.$get>>>
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
        ? getGetV1AccountsPositionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.positions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accounts.positions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsPositions<TError = unknown>(
  args: InferRequestType<typeof client.v1.accounts.positions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.positions.$get>>>
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
        ? getGetV1AccountsPositionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.positions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accounts.positions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AgreementsKey() {
  return ['v1', '/v1/agreements', 'POST'] as const
}

export function usePostV1Agreements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agreements.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.agreements.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AgreementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.agreements.$post> }) =>
        parseResponse(client.v1.agreements.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AssetsKey(args: InferRequestType<typeof client.v1.assets.$get>) {
  return ['v1', '/v1/assets', args] as const
}

export function useGetV1Assets<TError = unknown>(
  args: InferRequestType<typeof client.v1.assets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AssetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assets.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.assets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Assets<TError = unknown>(
  args: InferRequestType<typeof client.v1.assets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AssetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assets.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.assets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AssetsSymbolOrAssetIdKey(
  args: InferRequestType<(typeof client.v1.assets)[':symbol_or_asset_id']['$get']>,
) {
  return ['v1', '/v1/assets/:symbol_or_asset_id', args] as const
}

export function useGetV1AssetsSymbolOrAssetId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.assets)[':symbol_or_asset_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.assets)[':symbol_or_asset_id']['$get']>>
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
        ? getGetV1AssetsSymbolOrAssetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.assets)[':symbol_or_asset_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.assets[':symbol_or_asset_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AssetsSymbolOrAssetId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.assets)[':symbol_or_asset_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.assets)[':symbol_or_asset_id']['$get']>>
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
        ? getGetV1AssetsSymbolOrAssetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.assets)[':symbol_or_asset_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.assets[':symbol_or_asset_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AssetsEntryRequirementsKey(
  args: InferRequestType<(typeof client.v1.assets)['entry-requirements']['$get']>,
) {
  return ['v1', '/v1/assets/entry-requirements', args] as const
}

export function useGetV1AssetsEntryRequirements<TError = unknown>(
  args: InferRequestType<(typeof client.v1.assets)['entry-requirements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.assets)['entry-requirements']['$get']>>
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
        ? getGetV1AssetsEntryRequirementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.assets)['entry-requirements']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.assets['entry-requirements'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AssetsEntryRequirements<TError = unknown>(
  args: InferRequestType<(typeof client.v1.assets)['entry-requirements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.assets)['entry-requirements']['$get']>>
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
        ? getGetV1AssetsEntryRequirementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.assets)['entry-requirements']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.assets['entry-requirements'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AssetsFixedIncomeUsCorporatesKey(
  args: InferRequestType<typeof client.v1.assets.fixed_income.us_corporates.$get>,
) {
  return ['v1', '/v1/assets/fixed_income/us_corporates', args] as const
}

export function useGetV1AssetsFixedIncomeUsCorporates<TError = unknown>(
  args: InferRequestType<typeof client.v1.assets.fixed_income.us_corporates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.assets.fixed_income.us_corporates.$get>>
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
        ? getGetV1AssetsFixedIncomeUsCorporatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.assets.fixed_income.us_corporates.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.assets.fixed_income.us_corporates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AssetsFixedIncomeUsCorporates<TError = unknown>(
  args: InferRequestType<typeof client.v1.assets.fixed_income.us_corporates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.assets.fixed_income.us_corporates.$get>>
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
        ? getGetV1AssetsFixedIncomeUsCorporatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.assets.fixed_income.us_corporates.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.assets.fixed_income.us_corporates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AssetsFixedIncomeUsTreasuriesKey(
  args: InferRequestType<typeof client.v1.assets.fixed_income.us_treasuries.$get>,
) {
  return ['v1', '/v1/assets/fixed_income/us_treasuries', args] as const
}

export function useGetV1AssetsFixedIncomeUsTreasuries<TError = unknown>(
  args: InferRequestType<typeof client.v1.assets.fixed_income.us_treasuries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.assets.fixed_income.us_treasuries.$get>>
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
        ? getGetV1AssetsFixedIncomeUsTreasuriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.assets.fixed_income.us_treasuries.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.assets.fixed_income.us_treasuries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AssetsFixedIncomeUsTreasuries<TError = unknown>(
  args: InferRequestType<typeof client.v1.assets.fixed_income.us_treasuries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.assets.fixed_income.us_treasuries.$get>>
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
        ? getGetV1AssetsFixedIncomeUsTreasuriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.assets.fixed_income.us_treasuries.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.assets.fixed_income.us_treasuries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CalendarKey(args: InferRequestType<typeof client.v1.calendar.$get>) {
  return ['v1', '/v1/calendar', args] as const
}

export function useGetV1Calendar<TError = unknown>(
  args: InferRequestType<typeof client.v1.calendar.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.calendar.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CalendarKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.calendar.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.calendar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Calendar<TError = unknown>(
  args: InferRequestType<typeof client.v1.calendar.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.calendar.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CalendarKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.calendar.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.calendar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CashInterestAprTiersKey() {
  return ['v1', '/v1/cash_interest/apr_tiers'] as const
}

export function useGetV1CashInterestAprTiers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.cash_interest.apr_tiers.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CashInterestAprTiersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.cash_interest.apr_tiers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.cash_interest.apr_tiers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CashInterestAprTiers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.cash_interest.apr_tiers.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1CashInterestAprTiersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.cash_interest.apr_tiers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.cash_interest.apr_tiers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ClockKey() {
  return ['v1', '/v1/clock'] as const
}

export function useGetV1Clock<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clock.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ClockKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clock.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.clock.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Clock<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clock.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ClockKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clock.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.clock.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CorporateActionsAnnouncementsKey(
  args: InferRequestType<typeof client.v1.corporate_actions.announcements.$get>,
) {
  return ['v1', '/v1/corporate_actions/announcements', args] as const
}

export function useGetV1CorporateActionsAnnouncements<TError = unknown>(
  args: InferRequestType<typeof client.v1.corporate_actions.announcements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.corporate_actions.announcements.$get>>
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
        ? getGetV1CorporateActionsAnnouncementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.corporate_actions.announcements.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.corporate_actions.announcements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CorporateActionsAnnouncements<TError = unknown>(
  args: InferRequestType<typeof client.v1.corporate_actions.announcements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.corporate_actions.announcements.$get>>
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
        ? getGetV1CorporateActionsAnnouncementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.corporate_actions.announcements.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.corporate_actions.announcements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CorporateActionsAnnouncementsIdKey(
  args: InferRequestType<(typeof client.v1.corporate_actions.announcements)[':id']['$get']>,
) {
  return ['v1', '/v1/corporate_actions/announcements/:id', args] as const
}

export function useGetV1CorporateActionsAnnouncementsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.corporate_actions.announcements)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.corporate_actions.announcements)[':id']['$get']>>
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
        ? getGetV1CorporateActionsAnnouncementsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.corporate_actions.announcements)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.corporate_actions.announcements[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CorporateActionsAnnouncementsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.corporate_actions.announcements)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.corporate_actions.announcements)[':id']['$get']>>
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
        ? getGetV1CorporateActionsAnnouncementsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.corporate_actions.announcements)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.corporate_actions.announcements[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CountryInfoKey() {
  return ['v1', '/v1/country-info'] as const
}

export function useGetV1CountryInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['country-info']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CountryInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['country-info']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['country-info'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CountryInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['country-info']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CountryInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['country-info']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['country-info'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1EventsAccountsStatusKey(
  args: InferRequestType<typeof client.v1.events.accounts.status.$get>,
) {
  return ['v1', '/v1/events/accounts/status', args] as const
}

export function useGetV1EventsAccountsStatus<TError = unknown>(
  args: InferRequestType<typeof client.v1.events.accounts.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.accounts.status.$get>>>
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
        ? getGetV1EventsAccountsStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.accounts.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.events.accounts.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EventsAccountsStatus<TError = unknown>(
  args: InferRequestType<typeof client.v1.events.accounts.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.accounts.status.$get>>>
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
        ? getGetV1EventsAccountsStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.accounts.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.events.accounts.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1EventsJournalsStatusKey(
  args: InferRequestType<typeof client.v1.events.journals.status.$get>,
) {
  return ['v1', '/v1/events/journals/status', args] as const
}

export function useGetV1EventsJournalsStatus<TError = unknown>(
  args: InferRequestType<typeof client.v1.events.journals.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.journals.status.$get>>>
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
        ? getGetV1EventsJournalsStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.journals.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.events.journals.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EventsJournalsStatus<TError = unknown>(
  args: InferRequestType<typeof client.v1.events.journals.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.journals.status.$get>>>
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
        ? getGetV1EventsJournalsStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.journals.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.events.journals.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1EventsNtaKey(args: InferRequestType<typeof client.v1.events.nta.$get>) {
  return ['v1', '/v1/events/nta', args] as const
}

export function useGetV1EventsNta<TError = unknown>(
  args: InferRequestType<typeof client.v1.events.nta.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.nta.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EventsNtaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.nta.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.events.nta.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EventsNta<TError = unknown>(
  args: InferRequestType<typeof client.v1.events.nta.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.nta.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EventsNtaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.nta.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.events.nta.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1EventsTransfersStatusKey(
  args: InferRequestType<typeof client.v1.events.transfers.status.$get>,
) {
  return ['v1', '/v1/events/transfers/status', args] as const
}

export function useGetV1EventsTransfersStatus<TError = unknown>(
  args: InferRequestType<typeof client.v1.events.transfers.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.transfers.status.$get>>>
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
        ? getGetV1EventsTransfersStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.transfers.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.events.transfers.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EventsTransfersStatus<TError = unknown>(
  args: InferRequestType<typeof client.v1.events.transfers.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.transfers.status.$get>>>
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
        ? getGetV1EventsTransfersStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.transfers.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.events.transfers.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1FpslAnalyticsAccountIdLoansKey(
  args: InferRequestType<(typeof client.v1.fpsl.analytics)[':account_id']['loans']['$get']>,
) {
  return ['v1', '/v1/fpsl/analytics/:account_id/loans', args] as const
}

export function useGetV1FpslAnalyticsAccountIdLoans<TError = unknown>(
  args: InferRequestType<(typeof client.v1.fpsl.analytics)[':account_id']['loans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.fpsl.analytics)[':account_id']['loans']['$get']>>
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
        ? getGetV1FpslAnalyticsAccountIdLoansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.fpsl.analytics)[':account_id']['loans']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.fpsl.analytics[':account_id'].loans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FpslAnalyticsAccountIdLoans<TError = unknown>(
  args: InferRequestType<(typeof client.v1.fpsl.analytics)[':account_id']['loans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.fpsl.analytics)[':account_id']['loans']['$get']>>
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
        ? getGetV1FpslAnalyticsAccountIdLoansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.fpsl.analytics)[':account_id']['loans']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.fpsl.analytics[':account_id'].loans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1FpslLoansKey(args: InferRequestType<typeof client.v1.fpsl.loans.$get>) {
  return ['v1', '/v1/fpsl/loans', args] as const
}

export function useGetV1FpslLoans<TError = unknown>(
  args: InferRequestType<typeof client.v1.fpsl.loans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.fpsl.loans.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1FpslLoansKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.fpsl.loans.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.fpsl.loans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FpslLoans<TError = unknown>(
  args: InferRequestType<typeof client.v1.fpsl.loans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.fpsl.loans.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1FpslLoansKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.fpsl.loans.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.fpsl.loans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1FpslTiersKey() {
  return ['v1', '/v1/fpsl/tiers'] as const
}

export function useGetV1FpslTiers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.fpsl.tiers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1FpslTiersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.fpsl.tiers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.fpsl.tiers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FpslTiers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.fpsl.tiers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1FpslTiersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.fpsl.tiers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.fpsl.tiers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1InstantFundingKey(
  args: InferRequestType<typeof client.v1.instant_funding.$get>,
) {
  return ['v1', '/v1/instant_funding', args] as const
}

export function useGetV1InstantFunding<TError = unknown>(
  args: InferRequestType<typeof client.v1.instant_funding.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.$get>>>>
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
        ? getGetV1InstantFundingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.instant_funding.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InstantFunding<TError = unknown>(
  args: InferRequestType<typeof client.v1.instant_funding.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.$get>>>>
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
        ? getGetV1InstantFundingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.instant_funding.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1InstantFundingKey() {
  return ['v1', '/v1/instant_funding', 'POST'] as const
}

export function usePostV1InstantFunding<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.instant_funding.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InstantFundingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.instant_funding.$post> }) =>
        parseResponse(client.v1.instant_funding.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1InstantFundingInstantFundingIdKey(
  args: InferRequestType<(typeof client.v1.instant_funding)[':instant_funding_id']['$get']>,
) {
  return ['v1', '/v1/instant_funding/:instant_funding_id', args] as const
}

export function useGetV1InstantFundingInstantFundingId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.instant_funding)[':instant_funding_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.instant_funding)[':instant_funding_id']['$get']>>
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
        ? getGetV1InstantFundingInstantFundingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.instant_funding)[':instant_funding_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.instant_funding[':instant_funding_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InstantFundingInstantFundingId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.instant_funding)[':instant_funding_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.instant_funding)[':instant_funding_id']['$get']>>
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
        ? getGetV1InstantFundingInstantFundingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.instant_funding)[':instant_funding_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.instant_funding[':instant_funding_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1InstantFundingInstantFundingIdKey() {
  return ['v1', '/v1/instant_funding/:instant_funding_id', 'DELETE'] as const
}

export function useDeleteV1InstantFundingInstantFundingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.instant_funding)[':instant_funding_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.instant_funding)[':instant_funding_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1InstantFundingInstantFundingIdKey()
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
            (typeof client.v1.instant_funding)[':instant_funding_id']['$delete']
          >
        },
      ) =>
        parseResponse(client.v1.instant_funding[':instant_funding_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1InstantFundingLimitsKey() {
  return ['v1', '/v1/instant_funding/limits'] as const
}

export function useGetV1InstantFundingLimits<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.limits.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1InstantFundingLimitsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.limits.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.instant_funding.limits.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InstantFundingLimits<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.limits.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1InstantFundingLimitsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.limits.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.instant_funding.limits.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1InstantFundingLimitsAccountsKey(
  args: InferRequestType<typeof client.v1.instant_funding.limits.accounts.$get>,
) {
  return ['v1', '/v1/instant_funding/limits/accounts', args] as const
}

export function useGetV1InstantFundingLimitsAccounts<TError = unknown>(
  args: InferRequestType<typeof client.v1.instant_funding.limits.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.instant_funding.limits.accounts.$get>>
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
        ? getGetV1InstantFundingLimitsAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.instant_funding.limits.accounts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.instant_funding.limits.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InstantFundingLimitsAccounts<TError = unknown>(
  args: InferRequestType<typeof client.v1.instant_funding.limits.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.instant_funding.limits.accounts.$get>>
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
        ? getGetV1InstantFundingLimitsAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.instant_funding.limits.accounts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.instant_funding.limits.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1InstantFundingReportsKey(
  args: InferRequestType<typeof client.v1.instant_funding.reports.$get>,
) {
  return ['v1', '/v1/instant_funding/reports', args] as const
}

export function useGetV1InstantFundingReports<TError = unknown>(
  args: InferRequestType<typeof client.v1.instant_funding.reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.reports.$get>>>
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
        ? getGetV1InstantFundingReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.reports.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.instant_funding.reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InstantFundingReports<TError = unknown>(
  args: InferRequestType<typeof client.v1.instant_funding.reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.reports.$get>>>
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
        ? getGetV1InstantFundingReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.reports.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.instant_funding.reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1InstantFundingSettlementsKey(
  args: InferRequestType<typeof client.v1.instant_funding.settlements.$get>,
) {
  return ['v1', '/v1/instant_funding/settlements', args] as const
}

export function useGetV1InstantFundingSettlements<TError = unknown>(
  args: InferRequestType<typeof client.v1.instant_funding.settlements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.instant_funding.settlements.$get>>
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
        ? getGetV1InstantFundingSettlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.instant_funding.settlements.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.instant_funding.settlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InstantFundingSettlements<TError = unknown>(
  args: InferRequestType<typeof client.v1.instant_funding.settlements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.instant_funding.settlements.$get>>
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
        ? getGetV1InstantFundingSettlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.instant_funding.settlements.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.instant_funding.settlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1InstantFundingSettlementsKey() {
  return ['v1', '/v1/instant_funding/settlements', 'POST'] as const
}

export function usePostV1InstantFundingSettlements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.instant_funding.settlements.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.instant_funding.settlements.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InstantFundingSettlementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.instant_funding.settlements.$post> },
      ) => parseResponse(client.v1.instant_funding.settlements.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1InstantFundingSettlementsSettlementIdKey(
  args: InferRequestType<(typeof client.v1.instant_funding.settlements)[':settlement_id']['$get']>,
) {
  return ['v1', '/v1/instant_funding/settlements/:settlement_id', args] as const
}

export function useGetV1InstantFundingSettlementsSettlementId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.instant_funding.settlements)[':settlement_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.instant_funding.settlements)[':settlement_id']['$get']>
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
        ? getGetV1InstantFundingSettlementsSettlementIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.instant_funding.settlements)[':settlement_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.instant_funding.settlements[':settlement_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InstantFundingSettlementsSettlementId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.instant_funding.settlements)[':settlement_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.instant_funding.settlements)[':settlement_id']['$get']>
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
        ? getGetV1InstantFundingSettlementsSettlementIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.instant_funding.settlements)[':settlement_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.instant_funding.settlements[':settlement_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1IposKey(args: InferRequestType<typeof client.v1.ipos.$get>) {
  return ['v1', '/v1/ipos', args] as const
}

export function useGetV1Ipos<TError = unknown>(
  args: InferRequestType<typeof client.v1.ipos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ipos.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1IposKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ipos.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.ipos.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV1Ipos<TError = unknown>(
  args: InferRequestType<typeof client.v1.ipos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ipos.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1IposKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ipos.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.ipos.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetV1IposOfferingReferenceKey(
  args: InferRequestType<(typeof client.v1.ipos)[':offering_reference']['$get']>,
) {
  return ['v1', '/v1/ipos/:offering_reference', args] as const
}

export function useGetV1IposOfferingReference<TError = unknown>(
  args: InferRequestType<(typeof client.v1.ipos)[':offering_reference']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.ipos)[':offering_reference']['$get']>>
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
        ? getGetV1IposOfferingReferenceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.ipos)[':offering_reference']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.ipos[':offering_reference'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IposOfferingReference<TError = unknown>(
  args: InferRequestType<(typeof client.v1.ipos)[':offering_reference']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.ipos)[':offering_reference']['$get']>>
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
        ? getGetV1IposOfferingReferenceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.ipos)[':offering_reference']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.ipos[':offering_reference'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1JitSettlementsKey(
  args: InferRequestType<typeof client.v1.jit.settlements.$get>,
) {
  return ['v1', '/v1/jit/settlements', args] as const
}

export function useGetV1JitSettlements<TError = unknown>(
  args: InferRequestType<typeof client.v1.jit.settlements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jit.settlements.$get>>>>
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
        ? getGetV1JitSettlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jit.settlements.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.jit.settlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1JitSettlements<TError = unknown>(
  args: InferRequestType<typeof client.v1.jit.settlements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jit.settlements.$get>>>>
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
        ? getGetV1JitSettlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jit.settlements.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.jit.settlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1JitSettlementsKey() {
  return ['v1', '/v1/jit/settlements', 'POST'] as const
}

export function usePostV1JitSettlements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jit.settlements.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.jit.settlements.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JitSettlementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.jit.settlements.$post> }) =>
        parseResponse(client.v1.jit.settlements.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1JitSettlementsSettlementIdKey(
  args: InferRequestType<(typeof client.v1.jit.settlements)[':settlement_id']['$get']>,
) {
  return ['v1', '/v1/jit/settlements/:settlement_id', args] as const
}

export function useGetV1JitSettlementsSettlementId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.jit.settlements)[':settlement_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.jit.settlements)[':settlement_id']['$get']>>
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
        ? getGetV1JitSettlementsSettlementIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.jit.settlements)[':settlement_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.jit.settlements[':settlement_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1JitSettlementsSettlementId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.jit.settlements)[':settlement_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.jit.settlements)[':settlement_id']['$get']>>
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
        ? getGetV1JitSettlementsSettlementIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.jit.settlements)[':settlement_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.jit.settlements[':settlement_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1JournalsKey(args: InferRequestType<typeof client.v1.journals.$get>) {
  return ['v1', '/v1/journals', args] as const
}

export function useGetV1Journals<TError = unknown>(
  args: InferRequestType<typeof client.v1.journals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.journals.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1JournalsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.journals.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.journals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Journals<TError = unknown>(
  args: InferRequestType<typeof client.v1.journals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.journals.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1JournalsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.journals.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.journals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1JournalsKey() {
  return ['v1', '/v1/journals', 'POST'] as const
}

export function usePostV1Journals<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.journals.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.journals.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JournalsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.journals.$post> }) =>
        parseResponse(client.v1.journals.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1JournalsJournalIdKey(
  args: InferRequestType<(typeof client.v1.journals)[':journal_id']['$get']>,
) {
  return ['v1', '/v1/journals/:journal_id', args] as const
}

export function useGetV1JournalsJournalId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.journals)[':journal_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.journals)[':journal_id']['$get']>>
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
        ? getGetV1JournalsJournalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.journals)[':journal_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.journals[':journal_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1JournalsJournalId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.journals)[':journal_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.journals)[':journal_id']['$get']>>
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
        ? getGetV1JournalsJournalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.journals)[':journal_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.journals[':journal_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1JournalsJournalIdKey() {
  return ['v1', '/v1/journals/:journal_id', 'DELETE'] as const
}

export function useDeleteV1JournalsJournalId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.journals)[':journal_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.journals)[':journal_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1JournalsJournalIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.journals)[':journal_id']['$delete']> },
      ) => parseResponse(client.v1.journals[':journal_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JournalsBatchKey() {
  return ['v1', '/v1/journals/batch', 'POST'] as const
}

export function usePostV1JournalsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.journals.batch.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.journals.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JournalsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.journals.batch.$post> }) =>
        parseResponse(client.v1.journals.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JournalsReverseBatchKey() {
  return ['v1', '/v1/journals/reverse_batch', 'POST'] as const
}

export function usePostV1JournalsReverseBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.journals.reverse_batch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.journals.reverse_batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JournalsReverseBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.journals.reverse_batch.$post> },
      ) => parseResponse(client.v1.journals.reverse_batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OauthAuthorizeKey() {
  return ['v1', '/v1/oauth/authorize', 'POST'] as const
}

export function usePostV1OauthAuthorize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.authorize.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.oauth.authorize.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OauthAuthorizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.oauth.authorize.$post> }) =>
        parseResponse(client.v1.oauth.authorize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1OauthClientsClientIdKey(
  args: InferRequestType<(typeof client.v1.oauth.clients)[':client_id']['$get']>,
) {
  return ['v1', '/v1/oauth/clients/:client_id', args] as const
}

export function useGetV1OauthClientsClientId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.oauth.clients)[':client_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.oauth.clients)[':client_id']['$get']>>
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
        ? getGetV1OauthClientsClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.oauth.clients)[':client_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.oauth.clients[':client_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OauthClientsClientId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.oauth.clients)[':client_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.oauth.clients)[':client_id']['$get']>>
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
        ? getGetV1OauthClientsClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.oauth.clients)[':client_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.oauth.clients[':client_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1OauthTokenKey() {
  return ['v1', '/v1/oauth/token', 'POST'] as const
}

export function usePostV1OauthToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.token.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.oauth.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OauthTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.oauth.token.$post> }) =>
        parseResponse(client.v1.oauth.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1OptionsContractsKey(
  args: InferRequestType<typeof client.v1.options.contracts.$get>,
) {
  return ['v1', '/v1/options/contracts', args] as const
}

export function useGetV1OptionsContracts<TError = unknown>(
  args: InferRequestType<typeof client.v1.options.contracts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.options.contracts.$get>>>
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
        ? getGetV1OptionsContractsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.options.contracts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.options.contracts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OptionsContracts<TError = unknown>(
  args: InferRequestType<typeof client.v1.options.contracts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.options.contracts.$get>>>
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
        ? getGetV1OptionsContractsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.options.contracts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.options.contracts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1OptionsContractsSymbolOrIdKey(
  args: InferRequestType<(typeof client.v1.options.contracts)[':symbol_or_id']['$get']>,
) {
  return ['v1', '/v1/options/contracts/:symbol_or_id', args] as const
}

export function useGetV1OptionsContractsSymbolOrId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.options.contracts)[':symbol_or_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.options.contracts)[':symbol_or_id']['$get']>>
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
        ? getGetV1OptionsContractsSymbolOrIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.options.contracts)[':symbol_or_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.options.contracts[':symbol_or_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OptionsContractsSymbolOrId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.options.contracts)[':symbol_or_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.options.contracts)[':symbol_or_id']['$get']>>
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
        ? getGetV1OptionsContractsSymbolOrIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.options.contracts)[':symbol_or_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.options.contracts[':symbol_or_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1RebalancingPortfoliosKey(
  args: InferRequestType<typeof client.v1.rebalancing.portfolios.$get>,
) {
  return ['v1', '/v1/rebalancing/portfolios', args] as const
}

export function useGetV1RebalancingPortfolios<TError = unknown>(
  args: InferRequestType<typeof client.v1.rebalancing.portfolios.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.portfolios.$get>>>
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
        ? getGetV1RebalancingPortfoliosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.portfolios.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.rebalancing.portfolios.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RebalancingPortfolios<TError = unknown>(
  args: InferRequestType<typeof client.v1.rebalancing.portfolios.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.portfolios.$get>>>
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
        ? getGetV1RebalancingPortfoliosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.portfolios.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.rebalancing.portfolios.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1RebalancingPortfoliosKey() {
  return ['v1', '/v1/rebalancing/portfolios', 'POST'] as const
}

export function usePostV1RebalancingPortfolios<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.portfolios.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.rebalancing.portfolios.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RebalancingPortfoliosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.rebalancing.portfolios.$post> },
      ) => parseResponse(client.v1.rebalancing.portfolios.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1RebalancingPortfoliosPortfolioIdKey(
  args: InferRequestType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$get']>,
) {
  return ['v1', '/v1/rebalancing/portfolios/:portfolio_id', args] as const
}

export function useGetV1RebalancingPortfoliosPortfolioId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$get']>>
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
        ? getGetV1RebalancingPortfoliosPortfolioIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.rebalancing.portfolios[':portfolio_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RebalancingPortfoliosPortfolioId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$get']>>
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
        ? getGetV1RebalancingPortfoliosPortfolioIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.rebalancing.portfolios[':portfolio_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1RebalancingPortfoliosPortfolioIdKey() {
  return ['v1', '/v1/rebalancing/portfolios/:portfolio_id', 'DELETE'] as const
}

export function useDeleteV1RebalancingPortfoliosPortfolioId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1RebalancingPortfoliosPortfolioIdKey()
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
            (typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.rebalancing.portfolios[':portfolio_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1RebalancingPortfoliosPortfolioIdKey() {
  return ['v1', '/v1/rebalancing/portfolios/:portfolio_id', 'PATCH'] as const
}

export function usePatchV1RebalancingPortfoliosPortfolioId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1RebalancingPortfoliosPortfolioIdKey()
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
            (typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$patch']
          >
        },
      ) =>
        parseResponse(client.v1.rebalancing.portfolios[':portfolio_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1RebalancingRunsKey(
  args: InferRequestType<typeof client.v1.rebalancing.runs.$get>,
) {
  return ['v1', '/v1/rebalancing/runs', args] as const
}

export function useGetV1RebalancingRuns<TError = unknown>(
  args: InferRequestType<typeof client.v1.rebalancing.runs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.runs.$get>>>
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
        ? getGetV1RebalancingRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.runs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.rebalancing.runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RebalancingRuns<TError = unknown>(
  args: InferRequestType<typeof client.v1.rebalancing.runs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.runs.$get>>>
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
        ? getGetV1RebalancingRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.runs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.rebalancing.runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1RebalancingRunsKey() {
  return ['v1', '/v1/rebalancing/runs', 'POST'] as const
}

export function usePostV1RebalancingRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.runs.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.rebalancing.runs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RebalancingRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.rebalancing.runs.$post> }) =>
        parseResponse(client.v1.rebalancing.runs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1RebalancingRunsRunIdKey(
  args: InferRequestType<(typeof client.v1.rebalancing.runs)[':run_id']['$get']>,
) {
  return ['v1', '/v1/rebalancing/runs/:run_id', args] as const
}

export function useGetV1RebalancingRunsRunId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.rebalancing.runs)[':run_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.rebalancing.runs)[':run_id']['$get']>>
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
        ? getGetV1RebalancingRunsRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.rebalancing.runs)[':run_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.rebalancing.runs[':run_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RebalancingRunsRunId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.rebalancing.runs)[':run_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.rebalancing.runs)[':run_id']['$get']>>
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
        ? getGetV1RebalancingRunsRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.rebalancing.runs)[':run_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.rebalancing.runs[':run_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1RebalancingRunsRunIdKey() {
  return ['v1', '/v1/rebalancing/runs/:run_id', 'DELETE'] as const
}

export function useDeleteV1RebalancingRunsRunId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.rebalancing.runs)[':run_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.rebalancing.runs)[':run_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1RebalancingRunsRunIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.rebalancing.runs)[':run_id']['$delete']> },
      ) => parseResponse(client.v1.rebalancing.runs[':run_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1RebalancingSubscriptionsKey(
  args: InferRequestType<typeof client.v1.rebalancing.subscriptions.$get>,
) {
  return ['v1', '/v1/rebalancing/subscriptions', args] as const
}

export function useGetV1RebalancingSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.v1.rebalancing.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.subscriptions.$get>>>
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
        ? getGetV1RebalancingSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.subscriptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.rebalancing.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RebalancingSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.v1.rebalancing.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.subscriptions.$get>>>
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
        ? getGetV1RebalancingSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.subscriptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.rebalancing.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1RebalancingSubscriptionsKey() {
  return ['v1', '/v1/rebalancing/subscriptions', 'POST'] as const
}

export function usePostV1RebalancingSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.subscriptions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.rebalancing.subscriptions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RebalancingSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.rebalancing.subscriptions.$post> },
      ) => parseResponse(client.v1.rebalancing.subscriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1RebalancingSubscriptionsSubscriptionIdKey(
  args: InferRequestType<(typeof client.v1.rebalancing.subscriptions)[':subscription_id']['$get']>,
) {
  return ['v1', '/v1/rebalancing/subscriptions/:subscription_id', args] as const
}

export function useGetV1RebalancingSubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.rebalancing.subscriptions)[':subscription_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.rebalancing.subscriptions)[':subscription_id']['$get']>
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
        ? getGetV1RebalancingSubscriptionsSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.rebalancing.subscriptions)[':subscription_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.rebalancing.subscriptions[':subscription_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RebalancingSubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.rebalancing.subscriptions)[':subscription_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.rebalancing.subscriptions)[':subscription_id']['$get']>
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
        ? getGetV1RebalancingSubscriptionsSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.rebalancing.subscriptions)[':subscription_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.rebalancing.subscriptions[':subscription_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1RebalancingSubscriptionsSubscriptionIdKey() {
  return ['v1', '/v1/rebalancing/subscriptions/:subscription_id', 'DELETE'] as const
}

export function useDeleteV1RebalancingSubscriptionsSubscriptionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.rebalancing.subscriptions)[':subscription_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.rebalancing.subscriptions)[':subscription_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1RebalancingSubscriptionsSubscriptionIdKey()
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
            (typeof client.v1.rebalancing.subscriptions)[':subscription_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.rebalancing.subscriptions[':subscription_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ReportingEodAggregatePositionsKey(
  args: InferRequestType<typeof client.v1.reporting.eod.aggregate_positions.$get>,
) {
  return ['v1', '/v1/reporting/eod/aggregate_positions', args] as const
}

export function useGetV1ReportingEodAggregatePositions<TError = unknown>(
  args: InferRequestType<typeof client.v1.reporting.eod.aggregate_positions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.reporting.eod.aggregate_positions.$get>>
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
        ? getGetV1ReportingEodAggregatePositionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.reporting.eod.aggregate_positions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.reporting.eod.aggregate_positions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ReportingEodAggregatePositions<TError = unknown>(
  args: InferRequestType<typeof client.v1.reporting.eod.aggregate_positions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.reporting.eod.aggregate_positions.$get>>
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
        ? getGetV1ReportingEodAggregatePositionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.reporting.eod.aggregate_positions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.reporting.eod.aggregate_positions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ReportingEodCashInterestKey(
  args: InferRequestType<typeof client.v1.reporting.eod.cash_interest.$get>,
) {
  return ['v1', '/v1/reporting/eod/cash_interest', args] as const
}

export function useGetV1ReportingEodCashInterest<TError = unknown>(
  args: InferRequestType<typeof client.v1.reporting.eod.cash_interest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.reporting.eod.cash_interest.$get>>
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
        ? getGetV1ReportingEodCashInterestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.reporting.eod.cash_interest.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.reporting.eod.cash_interest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ReportingEodCashInterest<TError = unknown>(
  args: InferRequestType<typeof client.v1.reporting.eod.cash_interest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.reporting.eod.cash_interest.$get>>
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
        ? getGetV1ReportingEodCashInterestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.reporting.eod.cash_interest.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.reporting.eod.cash_interest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ReportingEodPositionsKey(
  args: InferRequestType<typeof client.v1.reporting.eod.positions.$get>,
) {
  return ['v1', '/v1/reporting/eod/positions', args] as const
}

export function useGetV1ReportingEodPositions<TError = unknown>(
  args: InferRequestType<typeof client.v1.reporting.eod.positions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.eod.positions.$get>>>
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
        ? getGetV1ReportingEodPositionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.eod.positions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.reporting.eod.positions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ReportingEodPositions<TError = unknown>(
  args: InferRequestType<typeof client.v1.reporting.eod.positions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.eod.positions.$get>>>
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
        ? getGetV1ReportingEodPositionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.eod.positions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.reporting.eod.positions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TestingIncomingWiresKey() {
  return ['v1', '/v1/testing/incoming_wires', 'POST'] as const
}

export function usePostV1TestingIncomingWires<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.testing.incoming_wires.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.testing.incoming_wires.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TestingIncomingWiresKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.testing.incoming_wires.$post> },
      ) => parseResponse(client.v1.testing.incoming_wires.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TradingAccountsAccountIdAccountKey(
  args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['account']['$get']>,
) {
  return ['v1', '/v1/trading/accounts/:account_id/account', args] as const
}

export function useGetV1TradingAccountsAccountIdAccount<TError = unknown>(
  args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['account']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.trading.accounts)[':account_id']['account']['$get']>
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
        ? getGetV1TradingAccountsAccountIdAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.trading.accounts)[':account_id']['account']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.trading.accounts[':account_id'].account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TradingAccountsAccountIdAccount<TError = unknown>(
  args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['account']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.trading.accounts)[':account_id']['account']['$get']>
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
        ? getGetV1TradingAccountsAccountIdAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.trading.accounts)[':account_id']['account']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.trading.accounts[':account_id'].account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1TradingAccountsAccountIdAccountConfigurationsKey() {
  return ['v1', '/v1/trading/accounts/:account_id/account/configurations', 'PATCH'] as const
}

export function usePatchV1TradingAccountsAccountIdAccountConfigurations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.trading.accounts)[':account_id']['account']['configurations']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['account']['configurations']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1TradingAccountsAccountIdAccountConfigurationsKey()
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
            (typeof client.v1.trading.accounts)[':account_id']['account']['configurations']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.trading.accounts[':account_id'].account.configurations.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1TradingAccountsAccountIdAccountPortfolioHistoryKey(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['account']['portfolio']['history']['$get']
  >,
) {
  return ['v1', '/v1/trading/accounts/:account_id/account/portfolio/history', args] as const
}

export function useGetV1TradingAccountsAccountIdAccountPortfolioHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['account']['portfolio']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.trading.accounts)[':account_id']['account']['portfolio']['history']['$get']
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
        ? getGetV1TradingAccountsAccountIdAccountPortfolioHistoryKey(args)
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
                (typeof client.v1.trading.accounts)[':account_id']['account']['portfolio']['history']['$get']
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
          client.v1.trading.accounts[':account_id'].account.portfolio.history.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TradingAccountsAccountIdAccountPortfolioHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['account']['portfolio']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.trading.accounts)[':account_id']['account']['portfolio']['history']['$get']
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
        ? getGetV1TradingAccountsAccountIdAccountPortfolioHistoryKey(args)
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
                (typeof client.v1.trading.accounts)[':account_id']['account']['portfolio']['history']['$get']
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
          client.v1.trading.accounts[':account_id'].account.portfolio.history.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1TradingAccountsAccountIdLimitsKey(
  args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['limits']['$get']>,
) {
  return ['v1', '/v1/trading/accounts/:account_id/limits', args] as const
}

export function useGetV1TradingAccountsAccountIdLimits<TError = unknown>(
  args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['limits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.trading.accounts)[':account_id']['limits']['$get']>
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
        ? getGetV1TradingAccountsAccountIdLimitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.trading.accounts)[':account_id']['limits']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.trading.accounts[':account_id'].limits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TradingAccountsAccountIdLimits<TError = unknown>(
  args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['limits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.trading.accounts)[':account_id']['limits']['$get']>
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
        ? getGetV1TradingAccountsAccountIdLimitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.trading.accounts)[':account_id']['limits']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.trading.accounts[':account_id'].limits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1TradingAccountsAccountIdOrdersKey(
  args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$get']>,
) {
  return ['v1', '/v1/trading/accounts/:account_id/orders', args] as const
}

export function useGetV1TradingAccountsAccountIdOrders<TError = unknown>(
  args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$get']>
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
        ? getGetV1TradingAccountsAccountIdOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.trading.accounts[':account_id'].orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TradingAccountsAccountIdOrders<TError = unknown>(
  args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$get']>
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
        ? getGetV1TradingAccountsAccountIdOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.trading.accounts[':account_id'].orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TradingAccountsAccountIdOrdersKey() {
  return ['v1', '/v1/trading/accounts/:account_id/orders', 'POST'] as const
}

export function usePostV1TradingAccountsAccountIdOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TradingAccountsAccountIdOrdersKey()
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
            (typeof client.v1.trading.accounts)[':account_id']['orders']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.trading.accounts[':account_id'].orders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TradingAccountsAccountIdOrdersKey() {
  return ['v1', '/v1/trading/accounts/:account_id/orders', 'DELETE'] as const
}

export function useDeleteV1TradingAccountsAccountIdOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TradingAccountsAccountIdOrdersKey()
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
            (typeof client.v1.trading.accounts)[':account_id']['orders']['$delete']
          >
        },
      ) =>
        parseResponse(client.v1.trading.accounts[':account_id'].orders.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TradingAccountsAccountIdOrdersOrderIdKey(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['orders'][':order_id']['$get']
  >,
) {
  return ['v1', '/v1/trading/accounts/:account_id/orders/:order_id', args] as const
}

export function useGetV1TradingAccountsAccountIdOrdersOrderId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['orders'][':order_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.trading.accounts)[':account_id']['orders'][':order_id']['$get']
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
        ? getGetV1TradingAccountsAccountIdOrdersOrderIdKey(args)
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
                (typeof client.v1.trading.accounts)[':account_id']['orders'][':order_id']['$get']
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
          client.v1.trading.accounts[':account_id'].orders[':order_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TradingAccountsAccountIdOrdersOrderId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['orders'][':order_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.trading.accounts)[':account_id']['orders'][':order_id']['$get']
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
        ? getGetV1TradingAccountsAccountIdOrdersOrderIdKey(args)
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
                (typeof client.v1.trading.accounts)[':account_id']['orders'][':order_id']['$get']
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
          client.v1.trading.accounts[':account_id'].orders[':order_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1TradingAccountsAccountIdOrdersOrderIdKey() {
  return ['v1', '/v1/trading/accounts/:account_id/orders/:order_id', 'DELETE'] as const
}

export function useDeleteV1TradingAccountsAccountIdOrdersOrderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.trading.accounts)[':account_id']['orders'][':order_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['orders'][':order_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TradingAccountsAccountIdOrdersOrderIdKey()
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
            (typeof client.v1.trading.accounts)[':account_id']['orders'][':order_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.trading.accounts[':account_id'].orders[':order_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1TradingAccountsAccountIdOrdersOrderIdKey() {
  return ['v1', '/v1/trading/accounts/:account_id/orders/:order_id', 'PATCH'] as const
}

export function usePatchV1TradingAccountsAccountIdOrdersOrderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.trading.accounts)[':account_id']['orders'][':order_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['orders'][':order_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1TradingAccountsAccountIdOrdersOrderIdKey()
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
            (typeof client.v1.trading.accounts)[':account_id']['orders'][':order_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.trading.accounts[':account_id'].orders[':order_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TradingAccountsAccountIdOrdersEstimationKey() {
  return ['v1', '/v1/trading/accounts/:account_id/orders/estimation', 'POST'] as const
}

export function usePostV1TradingAccountsAccountIdOrdersEstimation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.trading.accounts)[':account_id']['orders']['estimation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['orders']['estimation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TradingAccountsAccountIdOrdersEstimationKey()
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
            (typeof client.v1.trading.accounts)[':account_id']['orders']['estimation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.trading.accounts[':account_id'].orders.estimation.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1TradingAccountsAccountIdOrdersByClientOrderIdKey(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['orders:by_client_order_id']['$get']
  >,
) {
  return ['v1', '/v1/trading/accounts/:account_id/orders:by_client_order_id', args] as const
}

export function useGetV1TradingAccountsAccountIdOrdersByClientOrderId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['orders:by_client_order_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.trading.accounts)[':account_id']['orders:by_client_order_id']['$get']
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
        ? getGetV1TradingAccountsAccountIdOrdersByClientOrderIdKey(args)
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
                (typeof client.v1.trading.accounts)[':account_id']['orders:by_client_order_id']['$get']
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
          client.v1.trading.accounts[':account_id']['orders:by_client_order_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TradingAccountsAccountIdOrdersByClientOrderId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['orders:by_client_order_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.trading.accounts)[':account_id']['orders:by_client_order_id']['$get']
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
        ? getGetV1TradingAccountsAccountIdOrdersByClientOrderIdKey(args)
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
                (typeof client.v1.trading.accounts)[':account_id']['orders:by_client_order_id']['$get']
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
          client.v1.trading.accounts[':account_id']['orders:by_client_order_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1TradingAccountsAccountIdPositionsKey(
  args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['positions']['$get']>,
) {
  return ['v1', '/v1/trading/accounts/:account_id/positions', args] as const
}

export function useGetV1TradingAccountsAccountIdPositions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['positions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.trading.accounts)[':account_id']['positions']['$get']>
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
        ? getGetV1TradingAccountsAccountIdPositionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.trading.accounts)[':account_id']['positions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.trading.accounts[':account_id'].positions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TradingAccountsAccountIdPositions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['positions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.trading.accounts)[':account_id']['positions']['$get']>
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
        ? getGetV1TradingAccountsAccountIdPositionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.trading.accounts)[':account_id']['positions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.trading.accounts[':account_id'].positions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1TradingAccountsAccountIdPositionsKey() {
  return ['v1', '/v1/trading/accounts/:account_id/positions', 'DELETE'] as const
}

export function useDeleteV1TradingAccountsAccountIdPositions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.trading.accounts)[':account_id']['positions']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['positions']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TradingAccountsAccountIdPositionsKey()
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
            (typeof client.v1.trading.accounts)[':account_id']['positions']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.trading.accounts[':account_id'].positions.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1TradingAccountsAccountIdPositionsSymbolOrAssetIdKey(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_asset_id']['$get']
  >,
) {
  return ['v1', '/v1/trading/accounts/:account_id/positions/:symbol_or_asset_id', args] as const
}

export function useGetV1TradingAccountsAccountIdPositionsSymbolOrAssetId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_asset_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_asset_id']['$get']
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
        ? getGetV1TradingAccountsAccountIdPositionsSymbolOrAssetIdKey(args)
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
                (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_asset_id']['$get']
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
          client.v1.trading.accounts[':account_id'].positions[':symbol_or_asset_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TradingAccountsAccountIdPositionsSymbolOrAssetId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_asset_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_asset_id']['$get']
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
        ? getGetV1TradingAccountsAccountIdPositionsSymbolOrAssetIdKey(args)
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
                (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_asset_id']['$get']
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
          client.v1.trading.accounts[':account_id'].positions[':symbol_or_asset_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1TradingAccountsAccountIdPositionsSymbolOrAssetIdKey() {
  return ['v1', '/v1/trading/accounts/:account_id/positions/:symbol_or_asset_id', 'DELETE'] as const
}

export function useDeleteV1TradingAccountsAccountIdPositionsSymbolOrAssetId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_asset_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_asset_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TradingAccountsAccountIdPositionsSymbolOrAssetIdKey()
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
            (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_asset_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.trading.accounts[':account_id'].positions[':symbol_or_asset_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TradingAccountsAccountIdPositionsSymbolOrContractIdDoNotExerciseKey() {
  return [
    'v1',
    '/v1/trading/accounts/:account_id/positions/:symbol_or_contract_id/do-not-exercise',
    'POST',
  ] as const
}

export function usePostV1TradingAccountsAccountIdPositionsSymbolOrContractIdDoNotExercise<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_contract_id']['do-not-exercise']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_contract_id']['do-not-exercise']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1TradingAccountsAccountIdPositionsSymbolOrContractIdDoNotExerciseKey()
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
            (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_contract_id']['do-not-exercise']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.trading.accounts[':account_id'].positions[':symbol_or_contract_id'][
            'do-not-exercise'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TradingAccountsAccountIdPositionsSymbolOrContractIdExerciseKey() {
  return [
    'v1',
    '/v1/trading/accounts/:account_id/positions/:symbol_or_contract_id/exercise',
    'POST',
  ] as const
}

export function usePostV1TradingAccountsAccountIdPositionsSymbolOrContractIdExercise<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_contract_id']['exercise']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_contract_id']['exercise']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1TradingAccountsAccountIdPositionsSymbolOrContractIdExerciseKey()
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
            (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_contract_id']['exercise']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.trading.accounts[':account_id'].positions[
            ':symbol_or_contract_id'
          ].exercise.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1TradingAccountsAccountIdWatchlistsKey(
  args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['watchlists']['$get']>,
) {
  return ['v1', '/v1/trading/accounts/:account_id/watchlists', args] as const
}

export function useGetV1TradingAccountsAccountIdWatchlists<TError = unknown>(
  args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['watchlists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.trading.accounts)[':account_id']['watchlists']['$get']>
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
        ? getGetV1TradingAccountsAccountIdWatchlistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.trading.accounts)[':account_id']['watchlists']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.trading.accounts[':account_id'].watchlists.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TradingAccountsAccountIdWatchlists<TError = unknown>(
  args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['watchlists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.trading.accounts)[':account_id']['watchlists']['$get']>
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
        ? getGetV1TradingAccountsAccountIdWatchlistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.trading.accounts)[':account_id']['watchlists']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.trading.accounts[':account_id'].watchlists.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1TradingAccountsAccountIdWatchlistsKey() {
  return ['v1', '/v1/trading/accounts/:account_id/watchlists', 'POST'] as const
}

export function usePostV1TradingAccountsAccountIdWatchlists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.trading.accounts)[':account_id']['watchlists']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['watchlists']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TradingAccountsAccountIdWatchlistsKey()
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
            (typeof client.v1.trading.accounts)[':account_id']['watchlists']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.trading.accounts[':account_id'].watchlists.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1TradingAccountsAccountIdWatchlistsWatchlistIdKey(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$get']
  >,
) {
  return ['v1', '/v1/trading/accounts/:account_id/watchlists/:watchlist_id', args] as const
}

export function useGetV1TradingAccountsAccountIdWatchlistsWatchlistId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$get']
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
        ? getGetV1TradingAccountsAccountIdWatchlistsWatchlistIdKey(args)
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
                (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$get']
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
          client.v1.trading.accounts[':account_id'].watchlists[':watchlist_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TradingAccountsAccountIdWatchlistsWatchlistId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$get']
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
        ? getGetV1TradingAccountsAccountIdWatchlistsWatchlistIdKey(args)
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
                (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$get']
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
          client.v1.trading.accounts[':account_id'].watchlists[':watchlist_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1TradingAccountsAccountIdWatchlistsWatchlistIdKey() {
  return ['v1', '/v1/trading/accounts/:account_id/watchlists/:watchlist_id', 'PUT'] as const
}

export function usePutV1TradingAccountsAccountIdWatchlistsWatchlistId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1TradingAccountsAccountIdWatchlistsWatchlistIdKey()
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
            (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.trading.accounts[':account_id'].watchlists[':watchlist_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TradingAccountsAccountIdWatchlistsWatchlistIdKey() {
  return ['v1', '/v1/trading/accounts/:account_id/watchlists/:watchlist_id', 'POST'] as const
}

export function usePostV1TradingAccountsAccountIdWatchlistsWatchlistId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TradingAccountsAccountIdWatchlistsWatchlistIdKey()
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
            (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.trading.accounts[':account_id'].watchlists[':watchlist_id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TradingAccountsAccountIdWatchlistsWatchlistIdKey() {
  return ['v1', '/v1/trading/accounts/:account_id/watchlists/:watchlist_id', 'DELETE'] as const
}

export function useDeleteV1TradingAccountsAccountIdWatchlistsWatchlistId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TradingAccountsAccountIdWatchlistsWatchlistIdKey()
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
            (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.trading.accounts[':account_id'].watchlists[':watchlist_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TradingAccountsAccountIdWatchlistsWatchlistIdSymbolKey() {
  return [
    'v1',
    '/v1/trading/accounts/:account_id/watchlists/:watchlist_id/:symbol',
    'DELETE',
  ] as const
}

export function useDeleteV1TradingAccountsAccountIdWatchlistsWatchlistIdSymbol<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id'][':symbol']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id'][':symbol']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TradingAccountsAccountIdWatchlistsWatchlistIdSymbolKey()
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
            (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id'][':symbol']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.trading.accounts[':account_id'].watchlists[':watchlist_id'][':symbol'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1TransfersJitLedgerIdBalancesKey(
  args: InferRequestType<(typeof client.v1.transfers.jit)[':ledger_id']['balances']['$get']>,
) {
  return ['v1', '/v1/transfers/jit/:ledger_id/balances', args] as const
}

export function useGetV1TransfersJitLedgerIdBalances<TError = unknown>(
  args: InferRequestType<(typeof client.v1.transfers.jit)[':ledger_id']['balances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.transfers.jit)[':ledger_id']['balances']['$get']>>
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
        ? getGetV1TransfersJitLedgerIdBalancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.transfers.jit)[':ledger_id']['balances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.transfers.jit[':ledger_id'].balances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TransfersJitLedgerIdBalances<TError = unknown>(
  args: InferRequestType<(typeof client.v1.transfers.jit)[':ledger_id']['balances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.transfers.jit)[':ledger_id']['balances']['$get']>>
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
        ? getGetV1TransfersJitLedgerIdBalancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.transfers.jit)[':ledger_id']['balances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.transfers.jit[':ledger_id'].balances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1TransfersJitLedgersKey() {
  return ['v1', '/v1/transfers/jit/ledgers'] as const
}

export function useGetV1TransfersJitLedgers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.ledgers.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TransfersJitLedgersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.ledgers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.transfers.jit.ledgers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TransfersJitLedgers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.ledgers.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TransfersJitLedgersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.ledgers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.transfers.jit.ledgers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1TransfersJitLimitsKey() {
  return ['v1', '/v1/transfers/jit/limits'] as const
}

export function useGetV1TransfersJitLimits<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.limits.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TransfersJitLimitsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.limits.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.transfers.jit.limits.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TransfersJitLimits<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.limits.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TransfersJitLimitsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.limits.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.transfers.jit.limits.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1TransfersJitReportsKey(
  args: InferRequestType<typeof client.v1.transfers.jit.reports.$get>,
) {
  return ['v1', '/v1/transfers/jit/reports', args] as const
}

export function useGetV1TransfersJitReports<TError = unknown>(
  args: InferRequestType<typeof client.v1.transfers.jit.reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.reports.$get>>>
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
        ? getGetV1TransfersJitReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.reports.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.transfers.jit.reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TransfersJitReports<TError = unknown>(
  args: InferRequestType<typeof client.v1.transfers.jit.reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.reports.$get>>>
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
        ? getGetV1TransfersJitReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.reports.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.transfers.jit.reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1WalletsFeesEstimateKey(
  args: InferRequestType<typeof client.v1.wallets.fees.estimate.$get>,
) {
  return ['v1', '/v1/wallets/fees/estimate', args] as const
}

export function useGetV1WalletsFeesEstimate<TError = unknown>(
  args: InferRequestType<typeof client.v1.wallets.fees.estimate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.wallets.fees.estimate.$get>>>
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
        ? getGetV1WalletsFeesEstimateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.wallets.fees.estimate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.wallets.fees.estimate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WalletsFeesEstimate<TError = unknown>(
  args: InferRequestType<typeof client.v1.wallets.fees.estimate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.wallets.fees.estimate.$get>>>
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
        ? getGetV1WalletsFeesEstimateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.wallets.fees.estimate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.wallets.fees.estimate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1WalletsTravelRuleVaspsKey(
  args: InferRequestType<(typeof client.v1.wallets)['travel-rule']['vasps']['$get']>,
) {
  return ['v1', '/v1/wallets/travel-rule/vasps', args] as const
}

export function useGetV1WalletsTravelRuleVasps<TError = unknown>(
  args: InferRequestType<(typeof client.v1.wallets)['travel-rule']['vasps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.wallets)['travel-rule']['vasps']['$get']>>
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
        ? getGetV1WalletsTravelRuleVaspsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.wallets)['travel-rule']['vasps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.wallets['travel-rule'].vasps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WalletsTravelRuleVasps<TError = unknown>(
  args: InferRequestType<(typeof client.v1.wallets)['travel-rule']['vasps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.wallets)['travel-rule']['vasps']['$get']>>
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
        ? getGetV1WalletsTravelRuleVaspsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.wallets)['travel-rule']['vasps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.wallets['travel-rule'].vasps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2beta1AccountsAccountIdEventsActivitiesEventIdKey(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':account_id']['events']['activities'][':event_id']['$get']
  >,
) {
  return ['v2beta1', '/v2beta1/accounts/:account_id/events/activities/:event_id', args] as const
}

export function useGetV2beta1AccountsAccountIdEventsActivitiesEventId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':account_id']['events']['activities'][':event_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1.accounts)[':account_id']['events']['activities'][':event_id']['$get']
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
        ? getGetV2beta1AccountsAccountIdEventsActivitiesEventIdKey(args)
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
                (typeof client.v2beta1.accounts)[':account_id']['events']['activities'][':event_id']['$get']
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
          client.v2beta1.accounts[':account_id'].events.activities[':event_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta1AccountsAccountIdEventsActivitiesEventId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':account_id']['events']['activities'][':event_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1.accounts)[':account_id']['events']['activities'][':event_id']['$get']
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
        ? getGetV2beta1AccountsAccountIdEventsActivitiesEventIdKey(args)
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
                (typeof client.v2beta1.accounts)[':account_id']['events']['activities'][':event_id']['$get']
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
          client.v2beta1.accounts[':account_id'].events.activities[':event_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2beta1EventsActivitiesKey(
  args: InferRequestType<typeof client.v2beta1.events.activities.$get>,
) {
  return ['v2beta1', '/v2beta1/events/activities', args] as const
}

export function useGetV2beta1EventsActivities<TError = unknown>(
  args: InferRequestType<typeof client.v2beta1.events.activities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2beta1.events.activities.$get>>>
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
        ? getGetV2beta1EventsActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2beta1.events.activities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2beta1.events.activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta1EventsActivities<TError = unknown>(
  args: InferRequestType<typeof client.v2beta1.events.activities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2beta1.events.activities.$get>>>
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
        ? getGetV2beta1EventsActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2beta1.events.activities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2beta1.events.activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CalendarMarketKey(
  args: InferRequestType<(typeof client.v2.calendar)[':market']['$get']>,
) {
  return ['v2', '/v2/calendar/:market', args] as const
}

export function useGetV2CalendarMarket<TError = unknown>(
  args: InferRequestType<(typeof client.v2.calendar)[':market']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.calendar)[':market']['$get']>>>
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
        ? getGetV2CalendarMarketKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.calendar)[':market']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.calendar[':market'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CalendarMarket<TError = unknown>(
  args: InferRequestType<(typeof client.v2.calendar)[':market']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.calendar)[':market']['$get']>>>
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
        ? getGetV2CalendarMarketKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.calendar)[':market']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.calendar[':market'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ClockKey(args: InferRequestType<typeof client.v2.clock.$get>) {
  return ['v2', '/v2/clock', args] as const
}

export function useGetV2Clock<TError = unknown>(
  args: InferRequestType<typeof client.v2.clock.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clock.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ClockKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clock.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.clock.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV2Clock<TError = unknown>(
  args: InferRequestType<typeof client.v2.clock.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clock.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ClockKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clock.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.clock.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetV2EventsAdminActionsKey(
  args: InferRequestType<(typeof client.v2.events)['admin-actions']['$get']>,
) {
  return ['v2', '/v2/events/admin-actions', args] as const
}

export function useGetV2EventsAdminActions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.events)['admin-actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.events)['admin-actions']['$get']>>
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
        ? getGetV2EventsAdminActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.events)['admin-actions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.events['admin-actions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EventsAdminActions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.events)['admin-actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.events)['admin-actions']['$get']>>
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
        ? getGetV2EventsAdminActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.events)['admin-actions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.events['admin-actions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2EventsFundingStatusKey(
  args: InferRequestType<typeof client.v2.events.funding.status.$get>,
) {
  return ['v2', '/v2/events/funding/status', args] as const
}

export function useGetV2EventsFundingStatus<TError = unknown>(
  args: InferRequestType<typeof client.v2.events.funding.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.funding.status.$get>>>
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
        ? getGetV2EventsFundingStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.funding.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.events.funding.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EventsFundingStatus<TError = unknown>(
  args: InferRequestType<typeof client.v2.events.funding.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.funding.status.$get>>>
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
        ? getGetV2EventsFundingStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.funding.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.events.funding.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2EventsIposKey(args: InferRequestType<typeof client.v2.events.ipos.$get>) {
  return ['v2', '/v2/events/ipos', args] as const
}

export function useGetV2EventsIpos<TError = unknown>(
  args: InferRequestType<typeof client.v2.events.ipos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.ipos.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2EventsIposKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.ipos.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.events.ipos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EventsIpos<TError = unknown>(
  args: InferRequestType<typeof client.v2.events.ipos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.ipos.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2EventsIposKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.ipos.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.events.ipos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2EventsJournalsStatusKey(
  args: InferRequestType<typeof client.v2.events.journals.status.$get>,
) {
  return ['v2', '/v2/events/journals/status', args] as const
}

export function useGetV2EventsJournalsStatus<TError = unknown>(
  args: InferRequestType<typeof client.v2.events.journals.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.journals.status.$get>>>
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
        ? getGetV2EventsJournalsStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.journals.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.events.journals.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EventsJournalsStatus<TError = unknown>(
  args: InferRequestType<typeof client.v2.events.journals.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.journals.status.$get>>>
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
        ? getGetV2EventsJournalsStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.journals.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.events.journals.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2EventsRebalancerKey(
  args: InferRequestType<typeof client.v2.events.rebalancer.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/events/rebalancer', keyArgs] as const
}

export function useGetV2EventsRebalancer<TError = unknown>(
  args: InferRequestType<typeof client.v2.events.rebalancer.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.rebalancer.$get>>>
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
        ? getGetV2EventsRebalancerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.rebalancer.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.events.rebalancer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EventsRebalancer<TError = unknown>(
  args: InferRequestType<typeof client.v2.events.rebalancer.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.rebalancer.$get>>>
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
        ? getGetV2EventsRebalancerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.rebalancer.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.events.rebalancer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2EventsSystemKey(
  args: InferRequestType<typeof client.v2.events.system.$get>,
) {
  return ['v2', '/v2/events/system', args] as const
}

export function useGetV2EventsSystem<TError = unknown>(
  args: InferRequestType<typeof client.v2.events.system.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.system.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2EventsSystemKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.system.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.events.system.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EventsSystem<TError = unknown>(
  args: InferRequestType<typeof client.v2.events.system.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.system.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2EventsSystemKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.system.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.events.system.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2EventsTradesKey(
  args: InferRequestType<typeof client.v2.events.trades.$get>,
) {
  return ['v2', '/v2/events/trades', args] as const
}

export function useGetV2EventsTrades<TError = unknown>(
  args: InferRequestType<typeof client.v2.events.trades.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.trades.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2EventsTradesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.trades.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.events.trades.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EventsTrades<TError = unknown>(
  args: InferRequestType<typeof client.v2.events.trades.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.trades.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2EventsTradesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.trades.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.events.trades.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
