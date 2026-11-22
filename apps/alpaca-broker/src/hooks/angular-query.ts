import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getV1betaAccountsAccountIdFundingWalletQueryKey(
  args: InferRequestType<(typeof client.v1beta.accounts)[':account_id']['funding_wallet']['$get']>,
) {
  return ['v1beta', '/v1beta/accounts/:account_id/funding_wallet', args] as const
}

export function getV1betaAccountsAccountIdFundingWalletQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1beta.accounts)[':account_id']['funding_wallet']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta.accounts)[':account_id']['funding_wallet']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta.accounts)[':account_id']['funding_wallet']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAccountsAccountIdFundingWalletQueryKey>
  >({
    queryKey: getV1betaAccountsAccountIdFundingWalletQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta.accounts[':account_id'].funding_wallet.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1betaAccountsAccountIdFundingWallet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1beta.accounts)[':account_id']['funding_wallet']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1beta.accounts)[':account_id']['funding_wallet']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1betaAccountsAccountIdFundingWalletQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1betaAccountsAccountIdFundingWalletQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1betaAccountsAccountIdFundingWalletMutationKey() {
  return ['v1beta', '/v1beta/accounts/:account_id/funding_wallet', 'POST'] as const
}

export function getPostV1betaAccountsAccountIdFundingWalletMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1beta.accounts)[':account_id']['funding_wallet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaAccountsAccountIdFundingWalletMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta.accounts[':account_id'].funding_wallet.$post(args, options),
      )
    },
  })
}

export function injectPostV1betaAccountsAccountIdFundingWallet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta.accounts)[':account_id']['funding_wallet']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1betaAccountsAccountIdFundingWalletMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1betaAccountsAccountIdFundingWalletFundingDetailsQueryKey(
  args: InferRequestType<
    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['funding_details']['$get']
  >,
) {
  return ['v1beta', '/v1beta/accounts/:account_id/funding_wallet/funding_details', args] as const
}

export function getV1betaAccountsAccountIdFundingWalletFundingDetailsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['funding_details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1betaAccountsAccountIdFundingWalletFundingDetailsQueryKey>
  >({
    queryKey: getV1betaAccountsAccountIdFundingWalletFundingDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta.accounts[':account_id'].funding_wallet.funding_details.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1betaAccountsAccountIdFundingWalletFundingDetails<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['funding_details']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1betaAccountsAccountIdFundingWalletFundingDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1betaAccountsAccountIdFundingWalletFundingDetailsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1betaAccountsAccountIdFundingWalletRecipientBankQueryKey(
  args: InferRequestType<
    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['recipient_bank']['$get']
  >,
) {
  return ['v1beta', '/v1beta/accounts/:account_id/funding_wallet/recipient_bank', args] as const
}

export function getV1betaAccountsAccountIdFundingWalletRecipientBankQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['recipient_bank']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1betaAccountsAccountIdFundingWalletRecipientBankQueryKey>
  >({
    queryKey: getV1betaAccountsAccountIdFundingWalletRecipientBankQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta.accounts[':account_id'].funding_wallet.recipient_bank.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1betaAccountsAccountIdFundingWalletRecipientBank<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['recipient_bank']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1betaAccountsAccountIdFundingWalletRecipientBankQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1betaAccountsAccountIdFundingWalletRecipientBankQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1betaAccountsAccountIdFundingWalletRecipientBankMutationKey() {
  return ['v1beta', '/v1beta/accounts/:account_id/funding_wallet/recipient_bank', 'POST'] as const
}

export function getPostV1betaAccountsAccountIdFundingWalletRecipientBankMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['recipient_bank']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaAccountsAccountIdFundingWalletRecipientBankMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['recipient_bank']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta.accounts[':account_id'].funding_wallet.recipient_bank.$post(args, options),
      )
    },
  })
}

export function injectPostV1betaAccountsAccountIdFundingWalletRecipientBank<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['recipient_bank']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1betaAccountsAccountIdFundingWalletRecipientBankMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV1betaAccountsAccountIdFundingWalletRecipientBankMutationKey() {
  return ['v1beta', '/v1beta/accounts/:account_id/funding_wallet/recipient_bank', 'DELETE'] as const
}

export function getDeleteV1betaAccountsAccountIdFundingWalletRecipientBankMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['recipient_bank']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1betaAccountsAccountIdFundingWalletRecipientBankMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['recipient_bank']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1beta.accounts[':account_id'].funding_wallet.recipient_bank.$delete(args, options),
      )
    },
  })
}

export function injectDeleteV1betaAccountsAccountIdFundingWalletRecipientBank<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['recipient_bank']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV1betaAccountsAccountIdFundingWalletRecipientBankMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1betaAccountsAccountIdFundingWalletTransfersQueryKey(
  args: InferRequestType<
    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['transfers']['$get']
  >,
) {
  return ['v1beta', '/v1beta/accounts/:account_id/funding_wallet/transfers', args] as const
}

export function getV1betaAccountsAccountIdFundingWalletTransfersQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['transfers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1betaAccountsAccountIdFundingWalletTransfersQueryKey>
  >({
    queryKey: getV1betaAccountsAccountIdFundingWalletTransfersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta.accounts[':account_id'].funding_wallet.transfers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1betaAccountsAccountIdFundingWalletTransfers<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['transfers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1betaAccountsAccountIdFundingWalletTransfersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1betaAccountsAccountIdFundingWalletTransfersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1betaAccountsAccountIdFundingWalletTransfersTransferIdQueryKey(
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

export function getV1betaAccountsAccountIdFundingWalletTransfersTransferIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['transfers'][':transfer_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1betaAccountsAccountIdFundingWalletTransfersTransferIdQueryKey>
  >({
    queryKey: getV1betaAccountsAccountIdFundingWalletTransfersTransferIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta.accounts[':account_id'].funding_wallet.transfers[':transfer_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1betaAccountsAccountIdFundingWalletTransfersTransferId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['transfers'][':transfer_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1betaAccountsAccountIdFundingWalletTransfersTransferIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1betaAccountsAccountIdFundingWalletTransfersTransferIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1betaAccountsAccountIdFundingWalletWithdrawalMutationKey() {
  return ['v1beta', '/v1beta/accounts/:account_id/funding_wallet/withdrawal', 'POST'] as const
}

export function getPostV1betaAccountsAccountIdFundingWalletWithdrawalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['withdrawal']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaAccountsAccountIdFundingWalletWithdrawalMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['withdrawal']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta.accounts[':account_id'].funding_wallet.withdrawal.$post(args, options),
      )
    },
  })
}

export function injectPostV1betaAccountsAccountIdFundingWalletWithdrawal<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['withdrawal']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1betaAccountsAccountIdFundingWalletWithdrawalMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1betaAccountsFundingWalletMutationKey() {
  return ['v1beta', '/v1beta/accounts/funding_wallet', 'POST'] as const
}

export function getPostV1betaAccountsFundingWalletMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1beta.accounts.funding_wallet.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1beta.accounts.funding_wallet.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaAccountsFundingWalletMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1beta.accounts.funding_wallet.$post>) {
      return parseResponse(client.v1beta.accounts.funding_wallet.$post(args, options))
    },
  })
}

export function injectPostV1betaAccountsFundingWallet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1beta.accounts.funding_wallet.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1beta.accounts.funding_wallet.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1betaAccountsFundingWalletMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1betaDemoBankingFundingMutationKey() {
  return ['v1beta', '/v1beta/demo/banking/funding', 'POST'] as const
}

export function getPostV1betaDemoBankingFundingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.demo.banking.funding.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1beta.demo.banking.funding.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaDemoBankingFundingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1beta.demo.banking.funding.$post>) {
      return parseResponse(client.v1beta.demo.banking.funding.$post(args, options))
    },
  })
}

export function injectPostV1betaDemoBankingFunding<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1beta.demo.banking.funding.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1beta.demo.banking.funding.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1betaDemoBankingFundingMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1beta1AcatsQueryKey(args: InferRequestType<typeof client.v1beta1.acats.$get>) {
  return ['v1beta1', '/v1beta1/acats', args] as const
}

export function getV1beta1AcatsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.acats.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1beta1.acats.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.acats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1AcatsQueryKey>
  >({
    queryKey: getV1beta1AcatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.acats.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1beta1Acats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.acats.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1beta1.acats.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.acats.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1AcatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1beta1AcatsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1beta1AcatsAccountIdQueryKey(
  args: InferRequestType<(typeof client.v1beta1.acats)[':account_id']['$get']>,
) {
  return ['v1beta1', '/v1beta1/acats/:account_id', args] as const
}

export function getV1beta1AcatsAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1.acats)[':account_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1.acats)[':account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1.acats)[':account_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1AcatsAccountIdQueryKey>
  >({
    queryKey: getV1beta1AcatsAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.acats[':account_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1AcatsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1.acats)[':account_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta1.acats)[':account_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1.acats)[':account_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1AcatsAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1beta1AcatsAccountIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1beta1AcatsAccountIdMutationKey() {
  return ['v1beta1', '/v1beta1/acats/:account_id', 'POST'] as const
}

export function getPostV1beta1AcatsAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1.acats)[':account_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1.acats)[':account_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1AcatsAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1.acats)[':account_id']['$post']>,
    ) {
      return parseResponse(client.v1beta1.acats[':account_id'].$post(args, options))
    },
  })
}

export function injectPostV1beta1AcatsAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1.acats)[':account_id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1.acats)[':account_id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1beta1AcatsAccountIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1beta1AcatsAccountIdAcatsIdQueryKey(
  args: InferRequestType<(typeof client.v1beta1.acats)[':account_id'][':acats_id']['$get']>,
) {
  return ['v1beta1', '/v1beta1/acats/:account_id/:acats_id', args] as const
}

export function getV1beta1AcatsAccountIdAcatsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1.acats)[':account_id'][':acats_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1.acats)[':account_id'][':acats_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1.acats)[':account_id'][':acats_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1AcatsAccountIdAcatsIdQueryKey>
  >({
    queryKey: getV1beta1AcatsAccountIdAcatsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.acats[':account_id'][':acats_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1AcatsAccountIdAcatsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1.acats)[':account_id'][':acats_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta1.acats)[':account_id'][':acats_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1.acats)[':account_id'][':acats_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1AcatsAccountIdAcatsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1beta1AcatsAccountIdAcatsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1beta1AcatsAccountIdAcatsIdAssetsQueryKey(
  args: InferRequestType<
    (typeof client.v1beta1.acats)[':account_id'][':acats_id']['assets']['$get']
  >,
) {
  return ['v1beta1', '/v1beta1/acats/:account_id/:acats_id/assets', args] as const
}

export function getV1beta1AcatsAccountIdAcatsIdAssetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1beta1.acats)[':account_id'][':acats_id']['assets']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta1.acats)[':account_id'][':acats_id']['assets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta1.acats)[':account_id'][':acats_id']['assets']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1AcatsAccountIdAcatsIdAssetsQueryKey>
  >({
    queryKey: getV1beta1AcatsAccountIdAcatsIdAssetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.acats[':account_id'][':acats_id'].assets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1AcatsAccountIdAcatsIdAssets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1beta1.acats)[':account_id'][':acats_id']['assets']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta1.acats)[':account_id'][':acats_id']['assets']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1beta1AcatsAccountIdAcatsIdAssetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1beta1AcatsAccountIdAcatsIdAssetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1beta1AcatsContrabrokersQueryKey() {
  return ['v1beta1', '/v1beta1/acats/contrabrokers'] as const
}

export function getV1beta1AcatsContrabrokersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.acats.contrabrokers.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.acats.contrabrokers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1AcatsContrabrokersQueryKey>
  >({
    queryKey: getV1beta1AcatsContrabrokersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.acats.contrabrokers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1AcatsContrabrokers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.acats.contrabrokers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1beta1.acats.contrabrokers.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1AcatsContrabrokersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1beta1AcatsContrabrokersQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV1beta1LogosSymbolQueryKey(
  args: InferRequestType<(typeof client.v1beta1.logos)[':symbol']['$get']>,
) {
  return ['v1beta1', '/v1beta1/logos/:symbol', args] as const
}

export function getV1beta1LogosSymbolQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1.logos)[':symbol']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1.logos)[':symbol']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1.logos)[':symbol']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1LogosSymbolQueryKey>
  >({
    queryKey: getV1beta1LogosSymbolQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.logos[':symbol'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1LogosSymbol<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1.logos)[':symbol']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta1.logos)[':symbol']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1.logos)[':symbol']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1LogosSymbolQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1beta1LogosSymbolQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1AccountsQueryKey(args: InferRequestType<typeof client.v1.accounts.$get>) {
  return ['v1', '/v1/accounts', args] as const
}

export function getV1AccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.accounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1AccountsQueryKey>
  >({
    queryKey: getV1AccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Accounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.accounts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1AccountsMutationKey() {
  return ['v1', '/v1/accounts', 'POST'] as const
}

export function getPostV1AccountsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.accounts.$post>) {
      return parseResponse(client.v1.accounts.$post(args, options))
    },
  })
}

export function injectPostV1Accounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.accounts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AccountsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1AccountsAccountIdQueryKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['$get']>,
) {
  return ['v1', '/v1/accounts/:account_id', args] as const
}

export function getV1AccountsAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdQueryKey>
  >({
    queryKey: getV1AccountsAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':account_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.accounts)[':account_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AccountsAccountIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPatchV1AccountsAccountIdMutationKey() {
  return ['v1', '/v1/accounts/:account_id', 'PATCH'] as const
}

export function getPatchV1AccountsAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.accounts)[':account_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AccountsAccountIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.accounts)[':account_id']['$patch']>) {
      return parseResponse(client.v1.accounts[':account_id'].$patch(args, options))
    },
  })
}

export function injectPatchV1AccountsAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.accounts)[':account_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1AccountsAccountIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1AccountsAccountIdAchRelationshipsQueryKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['ach_relationships']['$get']>,
) {
  return ['v1', '/v1/accounts/:account_id/ach_relationships', args] as const
}

export function getV1AccountsAccountIdAchRelationshipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['ach_relationships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['ach_relationships']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.accounts)[':account_id']['ach_relationships']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdAchRelationshipsQueryKey>
  >({
    queryKey: getV1AccountsAccountIdAchRelationshipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':account_id'].ach_relationships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AccountsAccountIdAchRelationships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['ach_relationships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.accounts)[':account_id']['ach_relationships']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.accounts)[':account_id']['ach_relationships']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdAchRelationshipsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AccountsAccountIdAchRelationshipsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1AccountsAccountIdAchRelationshipsMutationKey() {
  return ['v1', '/v1/accounts/:account_id/ach_relationships', 'POST'] as const
}

export function getPostV1AccountsAccountIdAchRelationshipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.accounts)[':account_id']['ach_relationships']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountsAccountIdAchRelationshipsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.accounts)[':account_id']['ach_relationships']['$post']
      >,
    ) {
      return parseResponse(client.v1.accounts[':account_id'].ach_relationships.$post(args, options))
    },
  })
}

export function injectPostV1AccountsAccountIdAchRelationships<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.v1.accounts)[':account_id']['ach_relationships']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AccountsAccountIdAchRelationshipsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV1AccountsAccountIdAchRelationshipsAchRelationshipIdMutationKey() {
  return [
    'v1',
    '/v1/accounts/:account_id/ach_relationships/:ach_relationship_id',
    'DELETE',
  ] as const
}

export function getDeleteV1AccountsAccountIdAchRelationshipsAchRelationshipIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.accounts)[':account_id']['ach_relationships'][':ach_relationship_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AccountsAccountIdAchRelationshipsAchRelationshipIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.accounts)[':account_id']['ach_relationships'][':ach_relationship_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.accounts[':account_id'].ach_relationships[':ach_relationship_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteV1AccountsAccountIdAchRelationshipsAchRelationshipId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v1.accounts)[':account_id']['ach_relationships'][':ach_relationship_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV1AccountsAccountIdAchRelationshipsAchRelationshipIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1AccountsAccountIdActionsCloseMutationKey() {
  return ['v1', '/v1/accounts/:account_id/actions/close', 'POST'] as const
}

export function getPostV1AccountsAccountIdActionsCloseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.accounts)[':account_id']['actions']['close']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountsAccountIdActionsCloseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.accounts)[':account_id']['actions']['close']['$post']
      >,
    ) {
      return parseResponse(client.v1.accounts[':account_id'].actions.close.$post(args, options))
    },
  })
}

export function injectPostV1AccountsAccountIdActionsClose<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.accounts)[':account_id']['actions']['close']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.accounts)[':account_id']['actions']['close']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AccountsAccountIdActionsCloseMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1AccountsAccountIdCipQueryKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['cip']['$get']>,
) {
  return ['v1', '/v1/accounts/:account_id/cip', args] as const
}

export function getV1AccountsAccountIdCipQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['cip']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['cip']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['cip']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdCipQueryKey>
  >({
    queryKey: getV1AccountsAccountIdCipQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':account_id'].cip.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AccountsAccountIdCip<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['cip']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.accounts)[':account_id']['cip']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['cip']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdCipQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AccountsAccountIdCipQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1AccountsAccountIdCipMutationKey() {
  return ['v1', '/v1/accounts/:account_id/cip', 'POST'] as const
}

export function getPostV1AccountsAccountIdCipMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['cip']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.accounts)[':account_id']['cip']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountsAccountIdCipMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.accounts)[':account_id']['cip']['$post']>,
    ) {
      return parseResponse(client.v1.accounts[':account_id'].cip.$post(args, options))
    },
  })
}

export function injectPostV1AccountsAccountIdCip<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['cip']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.accounts)[':account_id']['cip']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AccountsAccountIdCipMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1AccountsAccountIdDocumentsQueryKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['documents']['$get']>,
) {
  return ['v1', '/v1/accounts/:account_id/documents', args] as const
}

export function getV1AccountsAccountIdDocumentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['documents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['documents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['documents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdDocumentsQueryKey>
  >({
    queryKey: getV1AccountsAccountIdDocumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':account_id'].documents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AccountsAccountIdDocuments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['documents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.accounts)[':account_id']['documents']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['documents']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdDocumentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AccountsAccountIdDocumentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1AccountsAccountIdDocumentsDocumentIdDownloadQueryKey(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['documents'][':document_id']['download']['$get']
  >,
) {
  return ['v1', '/v1/accounts/:account_id/documents/:document_id/download', args] as const
}

export function getV1AccountsAccountIdDocumentsDocumentIdDownloadQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['documents'][':document_id']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdDocumentsDocumentIdDownloadQueryKey>
  >({
    queryKey: getV1AccountsAccountIdDocumentsDocumentIdDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':account_id'].documents[':document_id'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AccountsAccountIdDocumentsDocumentIdDownload<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.accounts)[':account_id']['documents'][':document_id']['download']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdDocumentsDocumentIdDownloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AccountsAccountIdDocumentsDocumentIdDownloadQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1AccountsAccountIdDocumentsUploadMutationKey() {
  return ['v1', '/v1/accounts/:account_id/documents/upload', 'POST'] as const
}

export function getPostV1AccountsAccountIdDocumentsUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.accounts)[':account_id']['documents']['upload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountsAccountIdDocumentsUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.accounts)[':account_id']['documents']['upload']['$post']
      >,
    ) {
      return parseResponse(client.v1.accounts[':account_id'].documents.upload.$post(args, options))
    },
  })
}

export function injectPostV1AccountsAccountIdDocumentsUpload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.accounts)[':account_id']['documents']['upload']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.accounts)[':account_id']['documents']['upload']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AccountsAccountIdDocumentsUploadMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1AccountsAccountIdDocumentsW8benDocumentIdDownloadQueryKey(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['documents']['w8ben'][':document_id']['download']['$get']
  >,
) {
  return ['v1', '/v1/accounts/:account_id/documents/w8ben/:document_id/download', args] as const
}

export function getV1AccountsAccountIdDocumentsW8benDocumentIdDownloadQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['documents']['w8ben'][':document_id']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdDocumentsW8benDocumentIdDownloadQueryKey>
  >({
    queryKey: getV1AccountsAccountIdDocumentsW8benDocumentIdDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':account_id'].documents.w8ben[':document_id'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AccountsAccountIdDocumentsW8benDocumentIdDownload<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.accounts)[':account_id']['documents']['w8ben'][':document_id']['download']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdDocumentsW8benDocumentIdDownloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AccountsAccountIdDocumentsW8benDocumentIdDownloadQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPatchV1AccountsAccountIdOnfidoSdkMutationKey() {
  return ['v1', '/v1/accounts/:account_id/onfido/sdk', 'PATCH'] as const
}

export function getPatchV1AccountsAccountIdOnfidoSdkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['onfido']['sdk']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.accounts)[':account_id']['onfido']['sdk']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AccountsAccountIdOnfidoSdkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.accounts)[':account_id']['onfido']['sdk']['$patch']>,
    ) {
      return parseResponse(client.v1.accounts[':account_id'].onfido.sdk.$patch(args, options))
    },
  })
}

export function injectPatchV1AccountsAccountIdOnfidoSdk<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.accounts)[':account_id']['onfido']['sdk']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.accounts)[':account_id']['onfido']['sdk']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1AccountsAccountIdOnfidoSdkMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1AccountsAccountIdOnfidoSdkTokensQueryKey(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['onfido']['sdk']['tokens']['$get']
  >,
) {
  return ['v1', '/v1/accounts/:account_id/onfido/sdk/tokens', args] as const
}

export function getV1AccountsAccountIdOnfidoSdkTokensQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.accounts)[':account_id']['onfido']['sdk']['tokens']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['onfido']['sdk']['tokens']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdOnfidoSdkTokensQueryKey>
  >({
    queryKey: getV1AccountsAccountIdOnfidoSdkTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':account_id'].onfido.sdk.tokens.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AccountsAccountIdOnfidoSdkTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.accounts)[':account_id']['onfido']['sdk']['tokens']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.accounts)[':account_id']['onfido']['sdk']['tokens']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdOnfidoSdkTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AccountsAccountIdOnfidoSdkTokensQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1AccountsAccountIdOptionsApprovalMutationKey() {
  return ['v1', '/v1/accounts/:account_id/options/approval', 'POST'] as const
}

export function getPostV1AccountsAccountIdOptionsApprovalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.accounts)[':account_id']['options']['approval']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountsAccountIdOptionsApprovalMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.accounts)[':account_id']['options']['approval']['$post']
      >,
    ) {
      return parseResponse(client.v1.accounts[':account_id'].options.approval.$post(args, options))
    },
  })
}

export function injectPostV1AccountsAccountIdOptionsApproval<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.accounts)[':account_id']['options']['approval']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.accounts)[':account_id']['options']['approval']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AccountsAccountIdOptionsApprovalMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1AccountsAccountIdRecipientBanksQueryKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['recipient_banks']['$get']>,
) {
  return ['v1', '/v1/accounts/:account_id/recipient_banks', args] as const
}

export function getV1AccountsAccountIdRecipientBanksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['recipient_banks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['recipient_banks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['recipient_banks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdRecipientBanksQueryKey>
  >({
    queryKey: getV1AccountsAccountIdRecipientBanksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':account_id'].recipient_banks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AccountsAccountIdRecipientBanks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['recipient_banks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.accounts)[':account_id']['recipient_banks']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.accounts)[':account_id']['recipient_banks']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdRecipientBanksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AccountsAccountIdRecipientBanksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1AccountsAccountIdRecipientBanksMutationKey() {
  return ['v1', '/v1/accounts/:account_id/recipient_banks', 'POST'] as const
}

export function getPostV1AccountsAccountIdRecipientBanksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.accounts)[':account_id']['recipient_banks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountsAccountIdRecipientBanksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.accounts)[':account_id']['recipient_banks']['$post']
      >,
    ) {
      return parseResponse(client.v1.accounts[':account_id'].recipient_banks.$post(args, options))
    },
  })
}

export function injectPostV1AccountsAccountIdRecipientBanks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.v1.accounts)[':account_id']['recipient_banks']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AccountsAccountIdRecipientBanksMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV1AccountsAccountIdRecipientBanksBankIdMutationKey() {
  return ['v1', '/v1/accounts/:account_id/recipient_banks/:bank_id', 'DELETE'] as const
}

export function getDeleteV1AccountsAccountIdRecipientBanksBankIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.accounts)[':account_id']['recipient_banks'][':bank_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AccountsAccountIdRecipientBanksBankIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.accounts)[':account_id']['recipient_banks'][':bank_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.accounts[':account_id'].recipient_banks[':bank_id'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteV1AccountsAccountIdRecipientBanksBankId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v1.accounts)[':account_id']['recipient_banks'][':bank_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1AccountsAccountIdRecipientBanksBankIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1AccountsAccountIdTokenizationCallbackMintMutationKey() {
  return ['v1', '/v1/accounts/:account_id/tokenization/callback/mint', 'POST'] as const
}

export function getPostV1AccountsAccountIdTokenizationCallbackMintMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.accounts)[':account_id']['tokenization']['callback']['mint']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountsAccountIdTokenizationCallbackMintMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.accounts)[':account_id']['tokenization']['callback']['mint']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.accounts[':account_id'].tokenization.callback.mint.$post(args, options),
      )
    },
  })
}

export function injectPostV1AccountsAccountIdTokenizationCallbackMint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v1.accounts)[':account_id']['tokenization']['callback']['mint']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AccountsAccountIdTokenizationCallbackMintMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1AccountsAccountIdTokenizationCallbackRedeemMutationKey() {
  return ['v1', '/v1/accounts/:account_id/tokenization/callback/redeem', 'POST'] as const
}

export function getPostV1AccountsAccountIdTokenizationCallbackRedeemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.accounts)[':account_id']['tokenization']['callback']['redeem']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountsAccountIdTokenizationCallbackRedeemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.accounts)[':account_id']['tokenization']['callback']['redeem']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.accounts[':account_id'].tokenization.callback.redeem.$post(args, options),
      )
    },
  })
}

export function injectPostV1AccountsAccountIdTokenizationCallbackRedeem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v1.accounts)[':account_id']['tokenization']['callback']['redeem']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AccountsAccountIdTokenizationCallbackRedeemMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1AccountsAccountIdTokenizationMintMutationKey() {
  return ['v1', '/v1/accounts/:account_id/tokenization/mint', 'POST'] as const
}

export function getPostV1AccountsAccountIdTokenizationMintMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.accounts)[':account_id']['tokenization']['mint']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountsAccountIdTokenizationMintMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.accounts)[':account_id']['tokenization']['mint']['$post']
      >,
    ) {
      return parseResponse(client.v1.accounts[':account_id'].tokenization.mint.$post(args, options))
    },
  })
}

export function injectPostV1AccountsAccountIdTokenizationMint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.accounts)[':account_id']['tokenization']['mint']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.accounts)[':account_id']['tokenization']['mint']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AccountsAccountIdTokenizationMintMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1AccountsAccountIdTokenizationRequestsQueryKey(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['tokenization']['requests']['$get']
  >,
) {
  return ['v1', '/v1/accounts/:account_id/tokenization/requests', args] as const
}

export function getV1AccountsAccountIdTokenizationRequestsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.accounts)[':account_id']['tokenization']['requests']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['tokenization']['requests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdTokenizationRequestsQueryKey>
  >({
    queryKey: getV1AccountsAccountIdTokenizationRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':account_id'].tokenization.requests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AccountsAccountIdTokenizationRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.accounts)[':account_id']['tokenization']['requests']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.accounts)[':account_id']['tokenization']['requests']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdTokenizationRequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AccountsAccountIdTokenizationRequestsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1AccountsAccountIdTokenizationRequestsTokenizationRequestIdQueryKey(
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

export function getV1AccountsAccountIdTokenizationRequestsTokenizationRequestIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['tokenization']['requests'][':tokenization_request_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdTokenizationRequestsTokenizationRequestIdQueryKey>
  >({
    queryKey: getV1AccountsAccountIdTokenizationRequestsTokenizationRequestIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':account_id'].tokenization.requests[':tokenization_request_id'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectV1AccountsAccountIdTokenizationRequestsTokenizationRequestId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.accounts)[':account_id']['tokenization']['requests'][':tokenization_request_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdTokenizationRequestsTokenizationRequestIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AccountsAccountIdTokenizationRequestsTokenizationRequestIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1AccountsAccountIdTokenizationRequestsByClientRequestIdQueryKey(
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

export function getV1AccountsAccountIdTokenizationRequestsByClientRequestIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['tokenization']['requests:by_client_request_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdTokenizationRequestsByClientRequestIdQueryKey>
  >({
    queryKey: getV1AccountsAccountIdTokenizationRequestsByClientRequestIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':account_id'].tokenization['requests:by_client_request_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AccountsAccountIdTokenizationRequestsByClientRequestId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.accounts)[':account_id']['tokenization']['requests:by_client_request_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdTokenizationRequestsByClientRequestIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AccountsAccountIdTokenizationRequestsByClientRequestIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1AccountsAccountIdTokenizationRequestsByIssuerRequestIdQueryKey(
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

export function getV1AccountsAccountIdTokenizationRequestsByIssuerRequestIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['tokenization']['requests:by_issuer_request_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdTokenizationRequestsByIssuerRequestIdQueryKey>
  >({
    queryKey: getV1AccountsAccountIdTokenizationRequestsByIssuerRequestIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':account_id'].tokenization['requests:by_issuer_request_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AccountsAccountIdTokenizationRequestsByIssuerRequestId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.accounts)[':account_id']['tokenization']['requests:by_issuer_request_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdTokenizationRequestsByIssuerRequestIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AccountsAccountIdTokenizationRequestsByIssuerRequestIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1AccountsAccountIdTransfersQueryKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['transfers']['$get']>,
) {
  return ['v1', '/v1/accounts/:account_id/transfers', args] as const
}

export function getV1AccountsAccountIdTransfersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['transfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['transfers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['transfers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdTransfersQueryKey>
  >({
    queryKey: getV1AccountsAccountIdTransfersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':account_id'].transfers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AccountsAccountIdTransfers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['transfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.accounts)[':account_id']['transfers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['transfers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdTransfersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AccountsAccountIdTransfersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1AccountsAccountIdTransfersMutationKey() {
  return ['v1', '/v1/accounts/:account_id/transfers', 'POST'] as const
}

export function getPostV1AccountsAccountIdTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['transfers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.accounts)[':account_id']['transfers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountsAccountIdTransfersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.accounts)[':account_id']['transfers']['$post']>,
    ) {
      return parseResponse(client.v1.accounts[':account_id'].transfers.$post(args, options))
    },
  })
}

export function injectPostV1AccountsAccountIdTransfers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['transfers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.accounts)[':account_id']['transfers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AccountsAccountIdTransfersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV1AccountsAccountIdTransfersTransferIdMutationKey() {
  return ['v1', '/v1/accounts/:account_id/transfers/:transfer_id', 'DELETE'] as const
}

export function getDeleteV1AccountsAccountIdTransfersTransferIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.accounts)[':account_id']['transfers'][':transfer_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AccountsAccountIdTransfersTransferIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.accounts)[':account_id']['transfers'][':transfer_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.accounts[':account_id'].transfers[':transfer_id'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteV1AccountsAccountIdTransfersTransferId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v1.accounts)[':account_id']['transfers'][':transfer_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1AccountsAccountIdTransfersTransferIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1AccountsAccountIdWalletsQueryKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['wallets']['$get']>,
) {
  return ['v1', '/v1/accounts/:account_id/wallets', args] as const
}

export function getV1AccountsAccountIdWalletsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['wallets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['wallets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['wallets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdWalletsQueryKey>
  >({
    queryKey: getV1AccountsAccountIdWalletsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':account_id'].wallets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AccountsAccountIdWallets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['wallets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.accounts)[':account_id']['wallets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['wallets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdWalletsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AccountsAccountIdWalletsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1AccountsAccountIdWalletsTransfersQueryKey(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['wallets']['transfers']['$get']
  >,
) {
  return ['v1', '/v1/accounts/:account_id/wallets/transfers', args] as const
}

export function getV1AccountsAccountIdWalletsTransfersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.accounts)[':account_id']['wallets']['transfers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['wallets']['transfers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.accounts)[':account_id']['wallets']['transfers']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdWalletsTransfersQueryKey>
  >({
    queryKey: getV1AccountsAccountIdWalletsTransfersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':account_id'].wallets.transfers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AccountsAccountIdWalletsTransfers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.accounts)[':account_id']['wallets']['transfers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.accounts)[':account_id']['wallets']['transfers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.accounts)[':account_id']['wallets']['transfers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdWalletsTransfersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AccountsAccountIdWalletsTransfersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1AccountsAccountIdWalletsTransfersMutationKey() {
  return ['v1', '/v1/accounts/:account_id/wallets/transfers', 'POST'] as const
}

export function getPostV1AccountsAccountIdWalletsTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.accounts)[':account_id']['wallets']['transfers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountsAccountIdWalletsTransfersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.accounts)[':account_id']['wallets']['transfers']['$post']
      >,
    ) {
      return parseResponse(client.v1.accounts[':account_id'].wallets.transfers.$post(args, options))
    },
  })
}

export function injectPostV1AccountsAccountIdWalletsTransfers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.accounts)[':account_id']['wallets']['transfers']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.accounts)[':account_id']['wallets']['transfers']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AccountsAccountIdWalletsTransfersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1AccountsAccountIdWalletsTransfersTransferIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['wallets']['transfers'][':transfer_id']['$get']
  >,
) {
  return ['v1', '/v1/accounts/:account_id/wallets/transfers/:transfer_id', args] as const
}

export function getV1AccountsAccountIdWalletsTransfersTransferIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['wallets']['transfers'][':transfer_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdWalletsTransfersTransferIdQueryKey>
  >({
    queryKey: getV1AccountsAccountIdWalletsTransfersTransferIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':account_id'].wallets.transfers[':transfer_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AccountsAccountIdWalletsTransfersTransferId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.accounts)[':account_id']['wallets']['transfers'][':transfer_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdWalletsTransfersTransferIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AccountsAccountIdWalletsTransfersTransferIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1AccountsAccountIdWalletsWhitelistsQueryKey(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['wallets']['whitelists']['$get']
  >,
) {
  return ['v1', '/v1/accounts/:account_id/wallets/whitelists', args] as const
}

export function getV1AccountsAccountIdWalletsWhitelistsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.accounts)[':account_id']['wallets']['whitelists']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['wallets']['whitelists']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.accounts)[':account_id']['wallets']['whitelists']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdWalletsWhitelistsQueryKey>
  >({
    queryKey: getV1AccountsAccountIdWalletsWhitelistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':account_id'].wallets.whitelists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AccountsAccountIdWalletsWhitelists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.accounts)[':account_id']['wallets']['whitelists']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.accounts)[':account_id']['wallets']['whitelists']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1AccountsAccountIdWalletsWhitelistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AccountsAccountIdWalletsWhitelistsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1AccountsAccountIdWalletsWhitelistsMutationKey() {
  return ['v1', '/v1/accounts/:account_id/wallets/whitelists', 'POST'] as const
}

export function getPostV1AccountsAccountIdWalletsWhitelistsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.accounts)[':account_id']['wallets']['whitelists']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountsAccountIdWalletsWhitelistsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.accounts)[':account_id']['wallets']['whitelists']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.accounts[':account_id'].wallets.whitelists.$post(args, options),
      )
    },
  })
}

export function injectPostV1AccountsAccountIdWalletsWhitelists<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.accounts)[':account_id']['wallets']['whitelists']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.accounts)[':account_id']['wallets']['whitelists']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AccountsAccountIdWalletsWhitelistsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdMutationKey() {
  return [
    'v1',
    '/v1/accounts/:account_id/wallets/whitelists/:whitelisted_address_id',
    'DELETE',
  ] as const
}

export function getDeleteV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.accounts)[':account_id']['wallets']['whitelists'][':whitelisted_address_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.accounts)[':account_id']['wallets']['whitelists'][':whitelisted_address_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.accounts[':account_id'].wallets.whitelists[':whitelisted_address_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v1.accounts)[':account_id']['wallets']['whitelists'][':whitelisted_address_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdTravelRuleInfoMutationKey() {
  return [
    'v1',
    '/v1/accounts/:account_id/wallets/whitelists/:whitelisted_address_id/travel-rule-info',
    'PATCH',
  ] as const
}

export function getPatchV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdTravelRuleInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.accounts)[':account_id']['wallets']['whitelists'][':whitelisted_address_id']['travel-rule-info']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdTravelRuleInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.accounts)[':account_id']['wallets']['whitelists'][':whitelisted_address_id']['travel-rule-info']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.accounts[':account_id'].wallets.whitelists[':whitelisted_address_id'][
          'travel-rule-info'
        ].$patch(args, options),
      )
    },
  })
}

export function injectPatchV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdTravelRuleInfo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v1.accounts)[':account_id']['wallets']['whitelists'][':whitelisted_address_id']['travel-rule-info']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdTravelRuleInfoMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1AccountsActivitiesQueryKey(
  args: InferRequestType<typeof client.v1.accounts.activities.$get>,
) {
  return ['v1', '/v1/accounts/activities', args] as const
}

export function getV1AccountsActivitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.activities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.accounts.activities.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.activities.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsActivitiesQueryKey>
  >({
    queryKey: getV1AccountsActivitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts.activities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AccountsActivities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.activities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.accounts.activities.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.activities.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsActivitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AccountsActivitiesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1AccountsActivitiesActivityTypeQueryKey(
  args: InferRequestType<(typeof client.v1.accounts.activities)[':activity_type']['$get']>,
) {
  return ['v1', '/v1/accounts/activities/:activity_type', args] as const
}

export function getV1AccountsActivitiesActivityTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts.activities)[':activity_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts.activities)[':activity_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts.activities)[':activity_type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsActivitiesActivityTypeQueryKey>
  >({
    queryKey: getV1AccountsActivitiesActivityTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts.activities[':activity_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AccountsActivitiesActivityType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts.activities)[':activity_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.accounts.activities)[':activity_type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.accounts.activities)[':activity_type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsActivitiesActivityTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AccountsActivitiesActivityTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1AccountsIraExcessContributionsQueryKey() {
  return ['v1', '/v1/accounts/ira_excess_contributions'] as const
}

export function getV1AccountsIraExcessContributionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.accounts.ira_excess_contributions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.accounts.ira_excess_contributions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsIraExcessContributionsQueryKey>
  >({
    queryKey: getV1AccountsIraExcessContributionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts.ira_excess_contributions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AccountsIraExcessContributions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.accounts.ira_excess_contributions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.accounts.ira_excess_contributions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsIraExcessContributionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AccountsIraExcessContributionsQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1AccountsOptionsApprovalsQueryKey(
  args: InferRequestType<typeof client.v1.accounts.options.approvals.$get>,
) {
  return ['v1', '/v1/accounts/options/approvals', args] as const
}

export function getV1AccountsOptionsApprovalsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.options.approvals.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.accounts.options.approvals.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.options.approvals.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsOptionsApprovalsQueryKey>
  >({
    queryKey: getV1AccountsOptionsApprovalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts.options.approvals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AccountsOptionsApprovals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.options.approvals.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.accounts.options.approvals.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.accounts.options.approvals.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsOptionsApprovalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AccountsOptionsApprovalsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1AccountsPositionsQueryKey(
  args: InferRequestType<typeof client.v1.accounts.positions.$get>,
) {
  return ['v1', '/v1/accounts/positions', args] as const
}

export function getV1AccountsPositionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.positions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.accounts.positions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.positions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsPositionsQueryKey>
  >({
    queryKey: getV1AccountsPositionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts.positions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1AccountsPositions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.positions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.accounts.positions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.positions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsPositionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AccountsPositionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1AgreementsMutationKey() {
  return ['v1', '/v1/agreements', 'POST'] as const
}

export function getPostV1AgreementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agreements.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.agreements.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AgreementsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.agreements.$post>) {
      return parseResponse(client.v1.agreements.$post(args, options))
    },
  })
}

export function injectPostV1Agreements<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agreements.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.agreements.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AgreementsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1AssetsQueryKey(args: InferRequestType<typeof client.v1.assets.$get>) {
  return ['v1', '/v1/assets', args] as const
}

export function getV1AssetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.assets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1AssetsQueryKey>
  >({
    queryKey: getV1AssetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.assets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Assets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.assets.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1AssetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AssetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1AssetsSymbolOrAssetIdQueryKey(
  args: InferRequestType<(typeof client.v1.assets)[':symbol_or_asset_id']['$get']>,
) {
  return ['v1', '/v1/assets/:symbol_or_asset_id', args] as const
}

export function getV1AssetsSymbolOrAssetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.assets)[':symbol_or_asset_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.assets)[':symbol_or_asset_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.assets)[':symbol_or_asset_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AssetsSymbolOrAssetIdQueryKey>
  >({
    queryKey: getV1AssetsSymbolOrAssetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.assets[':symbol_or_asset_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AssetsSymbolOrAssetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.assets)[':symbol_or_asset_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.assets)[':symbol_or_asset_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.assets)[':symbol_or_asset_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AssetsSymbolOrAssetIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AssetsSymbolOrAssetIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1AssetsEntryRequirementsQueryKey(
  args: InferRequestType<(typeof client.v1.assets)['entry-requirements']['$get']>,
) {
  return ['v1', '/v1/assets/entry-requirements', args] as const
}

export function getV1AssetsEntryRequirementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.assets)['entry-requirements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.assets)['entry-requirements']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.assets)['entry-requirements']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AssetsEntryRequirementsQueryKey>
  >({
    queryKey: getV1AssetsEntryRequirementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.assets['entry-requirements'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AssetsEntryRequirements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.assets)['entry-requirements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.assets)['entry-requirements']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.assets)['entry-requirements']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AssetsEntryRequirementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AssetsEntryRequirementsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1AssetsFixedIncomeUsCorporatesQueryKey(
  args: InferRequestType<typeof client.v1.assets.fixed_income.us_corporates.$get>,
) {
  return ['v1', '/v1/assets/fixed_income/us_corporates', args] as const
}

export function getV1AssetsFixedIncomeUsCorporatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.assets.fixed_income.us_corporates.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.assets.fixed_income.us_corporates.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.assets.fixed_income.us_corporates.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AssetsFixedIncomeUsCorporatesQueryKey>
  >({
    queryKey: getV1AssetsFixedIncomeUsCorporatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.assets.fixed_income.us_corporates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AssetsFixedIncomeUsCorporates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.assets.fixed_income.us_corporates.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.assets.fixed_income.us_corporates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.assets.fixed_income.us_corporates.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AssetsFixedIncomeUsCorporatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AssetsFixedIncomeUsCorporatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1AssetsFixedIncomeUsTreasuriesQueryKey(
  args: InferRequestType<typeof client.v1.assets.fixed_income.us_treasuries.$get>,
) {
  return ['v1', '/v1/assets/fixed_income/us_treasuries', args] as const
}

export function getV1AssetsFixedIncomeUsTreasuriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.assets.fixed_income.us_treasuries.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.assets.fixed_income.us_treasuries.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.assets.fixed_income.us_treasuries.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AssetsFixedIncomeUsTreasuriesQueryKey>
  >({
    queryKey: getV1AssetsFixedIncomeUsTreasuriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.assets.fixed_income.us_treasuries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AssetsFixedIncomeUsTreasuries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.assets.fixed_income.us_treasuries.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.assets.fixed_income.us_treasuries.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.assets.fixed_income.us_treasuries.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AssetsFixedIncomeUsTreasuriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AssetsFixedIncomeUsTreasuriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1CalendarQueryKey(args: InferRequestType<typeof client.v1.calendar.$get>) {
  return ['v1', '/v1/calendar', args] as const
}

export function getV1CalendarQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.calendar.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.calendar.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.calendar.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1CalendarQueryKey>
  >({
    queryKey: getV1CalendarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.calendar.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Calendar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.calendar.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.calendar.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.calendar.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1CalendarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CalendarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1CashInterestAprTiersQueryKey() {
  return ['v1', '/v1/cash_interest/apr_tiers'] as const
}

export function getV1CashInterestAprTiersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.cash_interest.apr_tiers.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.cash_interest.apr_tiers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CashInterestAprTiersQueryKey>
  >({
    queryKey: getV1CashInterestAprTiersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.cash_interest.apr_tiers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1CashInterestAprTiers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.cash_interest.apr_tiers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.cash_interest.apr_tiers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CashInterestAprTiersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CashInterestAprTiersQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV1ClockQueryKey() {
  return ['v1', '/v1/clock'] as const
}

export function getV1ClockQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clock.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clock.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ClockQueryKey>
  >({
    queryKey: getV1ClockQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.clock.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Clock<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clock.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clock.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1ClockQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ClockQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV1CorporateActionsAnnouncementsQueryKey(
  args: InferRequestType<typeof client.v1.corporate_actions.announcements.$get>,
) {
  return ['v1', '/v1/corporate_actions/announcements', args] as const
}

export function getV1CorporateActionsAnnouncementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.corporate_actions.announcements.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.corporate_actions.announcements.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.corporate_actions.announcements.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CorporateActionsAnnouncementsQueryKey>
  >({
    queryKey: getV1CorporateActionsAnnouncementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.corporate_actions.announcements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1CorporateActionsAnnouncements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.corporate_actions.announcements.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.corporate_actions.announcements.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.corporate_actions.announcements.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CorporateActionsAnnouncementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CorporateActionsAnnouncementsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1CorporateActionsAnnouncementsIdQueryKey(
  args: InferRequestType<(typeof client.v1.corporate_actions.announcements)[':id']['$get']>,
) {
  return ['v1', '/v1/corporate_actions/announcements/:id', args] as const
}

export function getV1CorporateActionsAnnouncementsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.corporate_actions.announcements)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.corporate_actions.announcements)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.corporate_actions.announcements)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CorporateActionsAnnouncementsIdQueryKey>
  >({
    queryKey: getV1CorporateActionsAnnouncementsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.corporate_actions.announcements[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1CorporateActionsAnnouncementsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.corporate_actions.announcements)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.corporate_actions.announcements)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.corporate_actions.announcements)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CorporateActionsAnnouncementsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CorporateActionsAnnouncementsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1CountryInfoQueryKey() {
  return ['v1', '/v1/country-info'] as const
}

export function getV1CountryInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['country-info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['country-info']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CountryInfoQueryKey>
  >({
    queryKey: getV1CountryInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['country-info'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1CountryInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['country-info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['country-info']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CountryInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CountryInfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV1EventsAccountsStatusQueryKey(
  args: InferRequestType<typeof client.v1.events.accounts.status.$get>,
) {
  return ['v1', '/v1/events/accounts/status', args] as const
}

export function getV1EventsAccountsStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.accounts.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.events.accounts.status.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.accounts.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EventsAccountsStatusQueryKey>
  >({
    queryKey: getV1EventsAccountsStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.events.accounts.status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1EventsAccountsStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.accounts.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.events.accounts.status.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.accounts.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EventsAccountsStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1EventsAccountsStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1EventsJournalsStatusQueryKey(
  args: InferRequestType<typeof client.v1.events.journals.status.$get>,
) {
  return ['v1', '/v1/events/journals/status', args] as const
}

export function getV1EventsJournalsStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.journals.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.events.journals.status.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.journals.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EventsJournalsStatusQueryKey>
  >({
    queryKey: getV1EventsJournalsStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.events.journals.status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1EventsJournalsStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.journals.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.events.journals.status.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.journals.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EventsJournalsStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1EventsJournalsStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1EventsNtaQueryKey(args: InferRequestType<typeof client.v1.events.nta.$get>) {
  return ['v1', '/v1/events/nta', args] as const
}

export function getV1EventsNtaQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.nta.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.events.nta.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.nta.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1EventsNtaQueryKey>
  >({
    queryKey: getV1EventsNtaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.events.nta.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1EventsNta<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.nta.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.events.nta.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.nta.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1EventsNtaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1EventsNtaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1EventsTransfersStatusQueryKey(
  args: InferRequestType<typeof client.v1.events.transfers.status.$get>,
) {
  return ['v1', '/v1/events/transfers/status', args] as const
}

export function getV1EventsTransfersStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.transfers.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.events.transfers.status.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.transfers.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EventsTransfersStatusQueryKey>
  >({
    queryKey: getV1EventsTransfersStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.events.transfers.status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1EventsTransfersStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.transfers.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.events.transfers.status.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.transfers.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EventsTransfersStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1EventsTransfersStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1FpslAnalyticsAccountIdLoansQueryKey(
  args: InferRequestType<(typeof client.v1.fpsl.analytics)[':account_id']['loans']['$get']>,
) {
  return ['v1', '/v1/fpsl/analytics/:account_id/loans', args] as const
}

export function getV1FpslAnalyticsAccountIdLoansQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.fpsl.analytics)[':account_id']['loans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.fpsl.analytics)[':account_id']['loans']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.fpsl.analytics)[':account_id']['loans']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FpslAnalyticsAccountIdLoansQueryKey>
  >({
    queryKey: getV1FpslAnalyticsAccountIdLoansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.fpsl.analytics[':account_id'].loans.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1FpslAnalyticsAccountIdLoans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.fpsl.analytics)[':account_id']['loans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.fpsl.analytics)[':account_id']['loans']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.fpsl.analytics)[':account_id']['loans']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1FpslAnalyticsAccountIdLoansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1FpslAnalyticsAccountIdLoansQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1FpslLoansQueryKey(args: InferRequestType<typeof client.v1.fpsl.loans.$get>) {
  return ['v1', '/v1/fpsl/loans', args] as const
}

export function getV1FpslLoansQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.fpsl.loans.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.fpsl.loans.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.fpsl.loans.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1FpslLoansQueryKey>
  >({
    queryKey: getV1FpslLoansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.fpsl.loans.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1FpslLoans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.fpsl.loans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.fpsl.loans.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.fpsl.loans.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1FpslLoansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1FpslLoansQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1FpslTiersQueryKey() {
  return ['v1', '/v1/fpsl/tiers'] as const
}

export function getV1FpslTiersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.fpsl.tiers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.fpsl.tiers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1FpslTiersQueryKey>
  >({
    queryKey: getV1FpslTiersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.fpsl.tiers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1FpslTiers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.fpsl.tiers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.fpsl.tiers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1FpslTiersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1FpslTiersQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV1InstantFundingQueryKey(
  args: InferRequestType<typeof client.v1.instant_funding.$get>,
) {
  return ['v1', '/v1/instant_funding', args] as const
}

export function getV1InstantFundingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.instant_funding.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1InstantFundingQueryKey>
  >({
    queryKey: getV1InstantFundingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.instant_funding.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1InstantFunding<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.instant_funding.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1InstantFundingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1InstantFundingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1InstantFundingMutationKey() {
  return ['v1', '/v1/instant_funding', 'POST'] as const
}

export function getPostV1InstantFundingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.instant_funding.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1InstantFundingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.instant_funding.$post>) {
      return parseResponse(client.v1.instant_funding.$post(args, options))
    },
  })
}

export function injectPostV1InstantFunding<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.instant_funding.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1InstantFundingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1InstantFundingInstantFundingIdQueryKey(
  args: InferRequestType<(typeof client.v1.instant_funding)[':instant_funding_id']['$get']>,
) {
  return ['v1', '/v1/instant_funding/:instant_funding_id', args] as const
}

export function getV1InstantFundingInstantFundingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.instant_funding)[':instant_funding_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.instant_funding)[':instant_funding_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.instant_funding)[':instant_funding_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InstantFundingInstantFundingIdQueryKey>
  >({
    queryKey: getV1InstantFundingInstantFundingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.instant_funding[':instant_funding_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1InstantFundingInstantFundingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.instant_funding)[':instant_funding_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.instant_funding)[':instant_funding_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.instant_funding)[':instant_funding_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1InstantFundingInstantFundingIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1InstantFundingInstantFundingIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV1InstantFundingInstantFundingIdMutationKey() {
  return ['v1', '/v1/instant_funding/:instant_funding_id', 'DELETE'] as const
}

export function getDeleteV1InstantFundingInstantFundingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.instant_funding)[':instant_funding_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1InstantFundingInstantFundingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.instant_funding)[':instant_funding_id']['$delete']>,
    ) {
      return parseResponse(client.v1.instant_funding[':instant_funding_id'].$delete(args, options))
    },
  })
}

export function injectDeleteV1InstantFundingInstantFundingId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.v1.instant_funding)[':instant_funding_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1InstantFundingInstantFundingIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1InstantFundingLimitsQueryKey() {
  return ['v1', '/v1/instant_funding/limits'] as const
}

export function getV1InstantFundingLimitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.limits.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.limits.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InstantFundingLimitsQueryKey>
  >({
    queryKey: getV1InstantFundingLimitsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.instant_funding.limits.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1InstantFundingLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.limits.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.limits.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1InstantFundingLimitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1InstantFundingLimitsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV1InstantFundingLimitsAccountsQueryKey(
  args: InferRequestType<typeof client.v1.instant_funding.limits.accounts.$get>,
) {
  return ['v1', '/v1/instant_funding/limits/accounts', args] as const
}

export function getV1InstantFundingLimitsAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.instant_funding.limits.accounts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.instant_funding.limits.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.instant_funding.limits.accounts.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InstantFundingLimitsAccountsQueryKey>
  >({
    queryKey: getV1InstantFundingLimitsAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.instant_funding.limits.accounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1InstantFundingLimitsAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.instant_funding.limits.accounts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.instant_funding.limits.accounts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.instant_funding.limits.accounts.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1InstantFundingLimitsAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1InstantFundingLimitsAccountsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1InstantFundingReportsQueryKey(
  args: InferRequestType<typeof client.v1.instant_funding.reports.$get>,
) {
  return ['v1', '/v1/instant_funding/reports', args] as const
}

export function getV1InstantFundingReportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.reports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.instant_funding.reports.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.reports.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InstantFundingReportsQueryKey>
  >({
    queryKey: getV1InstantFundingReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.instant_funding.reports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1InstantFundingReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.reports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.instant_funding.reports.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.reports.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1InstantFundingReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1InstantFundingReportsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1InstantFundingSettlementsQueryKey(
  args: InferRequestType<typeof client.v1.instant_funding.settlements.$get>,
) {
  return ['v1', '/v1/instant_funding/settlements', args] as const
}

export function getV1InstantFundingSettlementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.settlements.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.instant_funding.settlements.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.settlements.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InstantFundingSettlementsQueryKey>
  >({
    queryKey: getV1InstantFundingSettlementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.instant_funding.settlements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1InstantFundingSettlements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.settlements.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.instant_funding.settlements.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.instant_funding.settlements.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1InstantFundingSettlementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1InstantFundingSettlementsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1InstantFundingSettlementsMutationKey() {
  return ['v1', '/v1/instant_funding/settlements', 'POST'] as const
}

export function getPostV1InstantFundingSettlementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.instant_funding.settlements.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.instant_funding.settlements.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1InstantFundingSettlementsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.instant_funding.settlements.$post>) {
      return parseResponse(client.v1.instant_funding.settlements.$post(args, options))
    },
  })
}

export function injectPostV1InstantFundingSettlements<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.instant_funding.settlements.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.instant_funding.settlements.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1InstantFundingSettlementsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1InstantFundingSettlementsSettlementIdQueryKey(
  args: InferRequestType<(typeof client.v1.instant_funding.settlements)[':settlement_id']['$get']>,
) {
  return ['v1', '/v1/instant_funding/settlements/:settlement_id', args] as const
}

export function getV1InstantFundingSettlementsSettlementIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.instant_funding.settlements)[':settlement_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.instant_funding.settlements)[':settlement_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.instant_funding.settlements)[':settlement_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InstantFundingSettlementsSettlementIdQueryKey>
  >({
    queryKey: getV1InstantFundingSettlementsSettlementIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.instant_funding.settlements[':settlement_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1InstantFundingSettlementsSettlementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.instant_funding.settlements)[':settlement_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.instant_funding.settlements)[':settlement_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.instant_funding.settlements)[':settlement_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1InstantFundingSettlementsSettlementIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1InstantFundingSettlementsSettlementIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1IposQueryKey(args: InferRequestType<typeof client.v1.ipos.$get>) {
  return ['v1', '/v1/ipos', args] as const
}

export function getV1IposQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ipos.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.ipos.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ipos.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1IposQueryKey>
  >({
    queryKey: getV1IposQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.ipos.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Ipos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ipos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.ipos.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ipos.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1IposQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1IposQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1IposOfferingReferenceQueryKey(
  args: InferRequestType<(typeof client.v1.ipos)[':offering_reference']['$get']>,
) {
  return ['v1', '/v1/ipos/:offering_reference', args] as const
}

export function getV1IposOfferingReferenceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.ipos)[':offering_reference']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.ipos)[':offering_reference']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.ipos)[':offering_reference']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IposOfferingReferenceQueryKey>
  >({
    queryKey: getV1IposOfferingReferenceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.ipos[':offering_reference'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1IposOfferingReference<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.ipos)[':offering_reference']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.ipos)[':offering_reference']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.ipos)[':offering_reference']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1IposOfferingReferenceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1IposOfferingReferenceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1JitSettlementsQueryKey(
  args: InferRequestType<typeof client.v1.jit.settlements.$get>,
) {
  return ['v1', '/v1/jit/settlements', args] as const
}

export function getV1JitSettlementsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jit.settlements.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.jit.settlements.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jit.settlements.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1JitSettlementsQueryKey>
  >({
    queryKey: getV1JitSettlementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.jit.settlements.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1JitSettlements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jit.settlements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.jit.settlements.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.jit.settlements.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1JitSettlementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1JitSettlementsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1JitSettlementsMutationKey() {
  return ['v1', '/v1/jit/settlements', 'POST'] as const
}

export function getPostV1JitSettlementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jit.settlements.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.jit.settlements.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JitSettlementsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jit.settlements.$post>) {
      return parseResponse(client.v1.jit.settlements.$post(args, options))
    },
  })
}

export function injectPostV1JitSettlements<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.jit.settlements.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.jit.settlements.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1JitSettlementsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1JitSettlementsSettlementIdQueryKey(
  args: InferRequestType<(typeof client.v1.jit.settlements)[':settlement_id']['$get']>,
) {
  return ['v1', '/v1/jit/settlements/:settlement_id', args] as const
}

export function getV1JitSettlementsSettlementIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.jit.settlements)[':settlement_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.jit.settlements)[':settlement_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.jit.settlements)[':settlement_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1JitSettlementsSettlementIdQueryKey>
  >({
    queryKey: getV1JitSettlementsSettlementIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.jit.settlements[':settlement_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1JitSettlementsSettlementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.jit.settlements)[':settlement_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.jit.settlements)[':settlement_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.jit.settlements)[':settlement_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1JitSettlementsSettlementIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1JitSettlementsSettlementIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1JournalsQueryKey(args: InferRequestType<typeof client.v1.journals.$get>) {
  return ['v1', '/v1/journals', args] as const
}

export function getV1JournalsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.journals.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.journals.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.journals.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1JournalsQueryKey>
  >({
    queryKey: getV1JournalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.journals.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Journals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.journals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.journals.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.journals.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1JournalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1JournalsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1JournalsMutationKey() {
  return ['v1', '/v1/journals', 'POST'] as const
}

export function getPostV1JournalsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.journals.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.journals.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JournalsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.journals.$post>) {
      return parseResponse(client.v1.journals.$post(args, options))
    },
  })
}

export function injectPostV1Journals<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.journals.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.journals.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1JournalsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1JournalsJournalIdQueryKey(
  args: InferRequestType<(typeof client.v1.journals)[':journal_id']['$get']>,
) {
  return ['v1', '/v1/journals/:journal_id', args] as const
}

export function getV1JournalsJournalIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.journals)[':journal_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.journals)[':journal_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.journals)[':journal_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1JournalsJournalIdQueryKey>
  >({
    queryKey: getV1JournalsJournalIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.journals[':journal_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1JournalsJournalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.journals)[':journal_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.journals)[':journal_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.journals)[':journal_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1JournalsJournalIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1JournalsJournalIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteV1JournalsJournalIdMutationKey() {
  return ['v1', '/v1/journals/:journal_id', 'DELETE'] as const
}

export function getDeleteV1JournalsJournalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.journals)[':journal_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.journals)[':journal_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1JournalsJournalIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.journals)[':journal_id']['$delete']>,
    ) {
      return parseResponse(client.v1.journals[':journal_id'].$delete(args, options))
    },
  })
}

export function injectDeleteV1JournalsJournalId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.journals)[':journal_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.journals)[':journal_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1JournalsJournalIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1JournalsBatchMutationKey() {
  return ['v1', '/v1/journals/batch', 'POST'] as const
}

export function getPostV1JournalsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.journals.batch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.journals.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JournalsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.journals.batch.$post>) {
      return parseResponse(client.v1.journals.batch.$post(args, options))
    },
  })
}

export function injectPostV1JournalsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.journals.batch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.journals.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1JournalsBatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1JournalsReverseBatchMutationKey() {
  return ['v1', '/v1/journals/reverse_batch', 'POST'] as const
}

export function getPostV1JournalsReverseBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.journals.reverse_batch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.journals.reverse_batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JournalsReverseBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.journals.reverse_batch.$post>) {
      return parseResponse(client.v1.journals.reverse_batch.$post(args, options))
    },
  })
}

export function injectPostV1JournalsReverseBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.journals.reverse_batch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.journals.reverse_batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1JournalsReverseBatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1OauthAuthorizeMutationKey() {
  return ['v1', '/v1/oauth/authorize', 'POST'] as const
}

export function getPostV1OauthAuthorizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.authorize.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.oauth.authorize.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OauthAuthorizeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.oauth.authorize.$post>) {
      return parseResponse(client.v1.oauth.authorize.$post(args, options))
    },
  })
}

export function injectPostV1OauthAuthorize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.authorize.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.oauth.authorize.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OauthAuthorizeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1OauthClientsClientIdQueryKey(
  args: InferRequestType<(typeof client.v1.oauth.clients)[':client_id']['$get']>,
) {
  return ['v1', '/v1/oauth/clients/:client_id', args] as const
}

export function getV1OauthClientsClientIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.oauth.clients)[':client_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.oauth.clients)[':client_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.oauth.clients)[':client_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OauthClientsClientIdQueryKey>
  >({
    queryKey: getV1OauthClientsClientIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.oauth.clients[':client_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1OauthClientsClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.oauth.clients)[':client_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.oauth.clients)[':client_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.oauth.clients)[':client_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OauthClientsClientIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1OauthClientsClientIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1OauthTokenMutationKey() {
  return ['v1', '/v1/oauth/token', 'POST'] as const
}

export function getPostV1OauthTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.token.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.oauth.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OauthTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.oauth.token.$post>) {
      return parseResponse(client.v1.oauth.token.$post(args, options))
    },
  })
}

export function injectPostV1OauthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.token.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.oauth.token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OauthTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1OptionsContractsQueryKey(
  args: InferRequestType<typeof client.v1.options.contracts.$get>,
) {
  return ['v1', '/v1/options/contracts', args] as const
}

export function getV1OptionsContractsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.options.contracts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.options.contracts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.options.contracts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1OptionsContractsQueryKey>
  >({
    queryKey: getV1OptionsContractsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.options.contracts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1OptionsContracts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.options.contracts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.options.contracts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.options.contracts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OptionsContractsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1OptionsContractsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1OptionsContractsSymbolOrIdQueryKey(
  args: InferRequestType<(typeof client.v1.options.contracts)[':symbol_or_id']['$get']>,
) {
  return ['v1', '/v1/options/contracts/:symbol_or_id', args] as const
}

export function getV1OptionsContractsSymbolOrIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.options.contracts)[':symbol_or_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.options.contracts)[':symbol_or_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.options.contracts)[':symbol_or_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OptionsContractsSymbolOrIdQueryKey>
  >({
    queryKey: getV1OptionsContractsSymbolOrIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.options.contracts[':symbol_or_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1OptionsContractsSymbolOrId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.options.contracts)[':symbol_or_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.options.contracts)[':symbol_or_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.options.contracts)[':symbol_or_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OptionsContractsSymbolOrIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1OptionsContractsSymbolOrIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1RebalancingPortfoliosQueryKey(
  args: InferRequestType<typeof client.v1.rebalancing.portfolios.$get>,
) {
  return ['v1', '/v1/rebalancing/portfolios', args] as const
}

export function getV1RebalancingPortfoliosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.portfolios.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.rebalancing.portfolios.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.portfolios.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RebalancingPortfoliosQueryKey>
  >({
    queryKey: getV1RebalancingPortfoliosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.rebalancing.portfolios.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1RebalancingPortfolios<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.portfolios.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.rebalancing.portfolios.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.portfolios.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1RebalancingPortfoliosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1RebalancingPortfoliosQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1RebalancingPortfoliosMutationKey() {
  return ['v1', '/v1/rebalancing/portfolios', 'POST'] as const
}

export function getPostV1RebalancingPortfoliosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.portfolios.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.rebalancing.portfolios.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RebalancingPortfoliosMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.rebalancing.portfolios.$post>) {
      return parseResponse(client.v1.rebalancing.portfolios.$post(args, options))
    },
  })
}

export function injectPostV1RebalancingPortfolios<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.portfolios.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.rebalancing.portfolios.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1RebalancingPortfoliosMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1RebalancingPortfoliosPortfolioIdQueryKey(
  args: InferRequestType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$get']>,
) {
  return ['v1', '/v1/rebalancing/portfolios/:portfolio_id', args] as const
}

export function getV1RebalancingPortfoliosPortfolioIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RebalancingPortfoliosPortfolioIdQueryKey>
  >({
    queryKey: getV1RebalancingPortfoliosPortfolioIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.rebalancing.portfolios[':portfolio_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1RebalancingPortfoliosPortfolioId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1RebalancingPortfoliosPortfolioIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1RebalancingPortfoliosPortfolioIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV1RebalancingPortfoliosPortfolioIdMutationKey() {
  return ['v1', '/v1/rebalancing/portfolios/:portfolio_id', 'DELETE'] as const
}

export function getDeleteV1RebalancingPortfoliosPortfolioIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1RebalancingPortfoliosPortfolioIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$delete']>,
    ) {
      return parseResponse(client.v1.rebalancing.portfolios[':portfolio_id'].$delete(args, options))
    },
  })
}

export function injectDeleteV1RebalancingPortfoliosPortfolioId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1RebalancingPortfoliosPortfolioIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchV1RebalancingPortfoliosPortfolioIdMutationKey() {
  return ['v1', '/v1/rebalancing/portfolios/:portfolio_id', 'PATCH'] as const
}

export function getPatchV1RebalancingPortfoliosPortfolioIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1RebalancingPortfoliosPortfolioIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$patch']>,
    ) {
      return parseResponse(client.v1.rebalancing.portfolios[':portfolio_id'].$patch(args, options))
    },
  })
}

export function injectPatchV1RebalancingPortfoliosPortfolioId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1RebalancingPortfoliosPortfolioIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1RebalancingRunsQueryKey(
  args: InferRequestType<typeof client.v1.rebalancing.runs.$get>,
) {
  return ['v1', '/v1/rebalancing/runs', args] as const
}

export function getV1RebalancingRunsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.runs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.rebalancing.runs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.runs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1RebalancingRunsQueryKey>
  >({
    queryKey: getV1RebalancingRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.rebalancing.runs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1RebalancingRuns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.runs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.rebalancing.runs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.runs.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1RebalancingRunsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1RebalancingRunsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1RebalancingRunsMutationKey() {
  return ['v1', '/v1/rebalancing/runs', 'POST'] as const
}

export function getPostV1RebalancingRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.runs.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.rebalancing.runs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RebalancingRunsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.rebalancing.runs.$post>) {
      return parseResponse(client.v1.rebalancing.runs.$post(args, options))
    },
  })
}

export function injectPostV1RebalancingRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.runs.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.rebalancing.runs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1RebalancingRunsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1RebalancingRunsRunIdQueryKey(
  args: InferRequestType<(typeof client.v1.rebalancing.runs)[':run_id']['$get']>,
) {
  return ['v1', '/v1/rebalancing/runs/:run_id', args] as const
}

export function getV1RebalancingRunsRunIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.rebalancing.runs)[':run_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.rebalancing.runs)[':run_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.rebalancing.runs)[':run_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RebalancingRunsRunIdQueryKey>
  >({
    queryKey: getV1RebalancingRunsRunIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.rebalancing.runs[':run_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1RebalancingRunsRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.rebalancing.runs)[':run_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.rebalancing.runs)[':run_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.rebalancing.runs)[':run_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1RebalancingRunsRunIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1RebalancingRunsRunIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV1RebalancingRunsRunIdMutationKey() {
  return ['v1', '/v1/rebalancing/runs/:run_id', 'DELETE'] as const
}

export function getDeleteV1RebalancingRunsRunIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.rebalancing.runs)[':run_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.rebalancing.runs)[':run_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1RebalancingRunsRunIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.rebalancing.runs)[':run_id']['$delete']>,
    ) {
      return parseResponse(client.v1.rebalancing.runs[':run_id'].$delete(args, options))
    },
  })
}

export function injectDeleteV1RebalancingRunsRunId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.rebalancing.runs)[':run_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.rebalancing.runs)[':run_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1RebalancingRunsRunIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1RebalancingSubscriptionsQueryKey(
  args: InferRequestType<typeof client.v1.rebalancing.subscriptions.$get>,
) {
  return ['v1', '/v1/rebalancing/subscriptions', args] as const
}

export function getV1RebalancingSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.subscriptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.rebalancing.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.subscriptions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RebalancingSubscriptionsQueryKey>
  >({
    queryKey: getV1RebalancingSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.rebalancing.subscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1RebalancingSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.subscriptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.rebalancing.subscriptions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.rebalancing.subscriptions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1RebalancingSubscriptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1RebalancingSubscriptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1RebalancingSubscriptionsMutationKey() {
  return ['v1', '/v1/rebalancing/subscriptions', 'POST'] as const
}

export function getPostV1RebalancingSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.subscriptions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.rebalancing.subscriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RebalancingSubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.rebalancing.subscriptions.$post>) {
      return parseResponse(client.v1.rebalancing.subscriptions.$post(args, options))
    },
  })
}

export function injectPostV1RebalancingSubscriptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.rebalancing.subscriptions.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.rebalancing.subscriptions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1RebalancingSubscriptionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1RebalancingSubscriptionsSubscriptionIdQueryKey(
  args: InferRequestType<(typeof client.v1.rebalancing.subscriptions)[':subscription_id']['$get']>,
) {
  return ['v1', '/v1/rebalancing/subscriptions/:subscription_id', args] as const
}

export function getV1RebalancingSubscriptionsSubscriptionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.rebalancing.subscriptions)[':subscription_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.rebalancing.subscriptions)[':subscription_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.rebalancing.subscriptions)[':subscription_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RebalancingSubscriptionsSubscriptionIdQueryKey>
  >({
    queryKey: getV1RebalancingSubscriptionsSubscriptionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.rebalancing.subscriptions[':subscription_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1RebalancingSubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.rebalancing.subscriptions)[':subscription_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.rebalancing.subscriptions)[':subscription_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.rebalancing.subscriptions)[':subscription_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1RebalancingSubscriptionsSubscriptionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1RebalancingSubscriptionsSubscriptionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV1RebalancingSubscriptionsSubscriptionIdMutationKey() {
  return ['v1', '/v1/rebalancing/subscriptions/:subscription_id', 'DELETE'] as const
}

export function getDeleteV1RebalancingSubscriptionsSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.rebalancing.subscriptions)[':subscription_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1RebalancingSubscriptionsSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.rebalancing.subscriptions)[':subscription_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.rebalancing.subscriptions[':subscription_id'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteV1RebalancingSubscriptionsSubscriptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v1.rebalancing.subscriptions)[':subscription_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1RebalancingSubscriptionsSubscriptionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ReportingEodAggregatePositionsQueryKey(
  args: InferRequestType<typeof client.v1.reporting.eod.aggregate_positions.$get>,
) {
  return ['v1', '/v1/reporting/eod/aggregate_positions', args] as const
}

export function getV1ReportingEodAggregatePositionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.reporting.eod.aggregate_positions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.reporting.eod.aggregate_positions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.reporting.eod.aggregate_positions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReportingEodAggregatePositionsQueryKey>
  >({
    queryKey: getV1ReportingEodAggregatePositionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.reporting.eod.aggregate_positions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ReportingEodAggregatePositions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.reporting.eod.aggregate_positions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.reporting.eod.aggregate_positions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.reporting.eod.aggregate_positions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ReportingEodAggregatePositionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ReportingEodAggregatePositionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1ReportingEodCashInterestQueryKey(
  args: InferRequestType<typeof client.v1.reporting.eod.cash_interest.$get>,
) {
  return ['v1', '/v1/reporting/eod/cash_interest', args] as const
}

export function getV1ReportingEodCashInterestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.eod.cash_interest.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.reporting.eod.cash_interest.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.eod.cash_interest.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReportingEodCashInterestQueryKey>
  >({
    queryKey: getV1ReportingEodCashInterestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.reporting.eod.cash_interest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ReportingEodCashInterest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.eod.cash_interest.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.reporting.eod.cash_interest.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.reporting.eod.cash_interest.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ReportingEodCashInterestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ReportingEodCashInterestQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1ReportingEodPositionsQueryKey(
  args: InferRequestType<typeof client.v1.reporting.eod.positions.$get>,
) {
  return ['v1', '/v1/reporting/eod/positions', args] as const
}

export function getV1ReportingEodPositionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.eod.positions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.reporting.eod.positions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.eod.positions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReportingEodPositionsQueryKey>
  >({
    queryKey: getV1ReportingEodPositionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.reporting.eod.positions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ReportingEodPositions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.eod.positions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.reporting.eod.positions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.eod.positions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ReportingEodPositionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ReportingEodPositionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1TestingIncomingWiresMutationKey() {
  return ['v1', '/v1/testing/incoming_wires', 'POST'] as const
}

export function getPostV1TestingIncomingWiresMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.testing.incoming_wires.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.testing.incoming_wires.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TestingIncomingWiresMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.testing.incoming_wires.$post>) {
      return parseResponse(client.v1.testing.incoming_wires.$post(args, options))
    },
  })
}

export function injectPostV1TestingIncomingWires<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.testing.incoming_wires.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.testing.incoming_wires.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TestingIncomingWiresMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1TradingAccountsAccountIdAccountQueryKey(
  args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['account']['$get']>,
) {
  return ['v1', '/v1/trading/accounts/:account_id/account', args] as const
}

export function getV1TradingAccountsAccountIdAccountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.trading.accounts)[':account_id']['account']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['account']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.trading.accounts)[':account_id']['account']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TradingAccountsAccountIdAccountQueryKey>
  >({
    queryKey: getV1TradingAccountsAccountIdAccountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.trading.accounts[':account_id'].account.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1TradingAccountsAccountIdAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.trading.accounts)[':account_id']['account']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['account']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.trading.accounts)[':account_id']['account']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TradingAccountsAccountIdAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1TradingAccountsAccountIdAccountQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPatchV1TradingAccountsAccountIdAccountConfigurationsMutationKey() {
  return ['v1', '/v1/trading/accounts/:account_id/account/configurations', 'PATCH'] as const
}

export function getPatchV1TradingAccountsAccountIdAccountConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['account']['configurations']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1TradingAccountsAccountIdAccountConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.trading.accounts)[':account_id']['account']['configurations']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.trading.accounts[':account_id'].account.configurations.$patch(args, options),
      )
    },
  })
}

export function injectPatchV1TradingAccountsAccountIdAccountConfigurations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v1.trading.accounts)[':account_id']['account']['configurations']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1TradingAccountsAccountIdAccountConfigurationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1TradingAccountsAccountIdAccountPortfolioHistoryQueryKey(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['account']['portfolio']['history']['$get']
  >,
) {
  return ['v1', '/v1/trading/accounts/:account_id/account/portfolio/history', args] as const
}

export function getV1TradingAccountsAccountIdAccountPortfolioHistoryQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['account']['portfolio']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1TradingAccountsAccountIdAccountPortfolioHistoryQueryKey>
  >({
    queryKey: getV1TradingAccountsAccountIdAccountPortfolioHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.trading.accounts[':account_id'].account.portfolio.history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1TradingAccountsAccountIdAccountPortfolioHistory<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['account']['portfolio']['history']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1TradingAccountsAccountIdAccountPortfolioHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1TradingAccountsAccountIdAccountPortfolioHistoryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1TradingAccountsAccountIdLimitsQueryKey(
  args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['limits']['$get']>,
) {
  return ['v1', '/v1/trading/accounts/:account_id/limits', args] as const
}

export function getV1TradingAccountsAccountIdLimitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.trading.accounts)[':account_id']['limits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['limits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.trading.accounts)[':account_id']['limits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TradingAccountsAccountIdLimitsQueryKey>
  >({
    queryKey: getV1TradingAccountsAccountIdLimitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.trading.accounts[':account_id'].limits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1TradingAccountsAccountIdLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.trading.accounts)[':account_id']['limits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['limits']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.trading.accounts)[':account_id']['limits']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TradingAccountsAccountIdLimitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1TradingAccountsAccountIdLimitsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1TradingAccountsAccountIdOrdersQueryKey(
  args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$get']>,
) {
  return ['v1', '/v1/trading/accounts/:account_id/orders', args] as const
}

export function getV1TradingAccountsAccountIdOrdersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TradingAccountsAccountIdOrdersQueryKey>
  >({
    queryKey: getV1TradingAccountsAccountIdOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.trading.accounts[':account_id'].orders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1TradingAccountsAccountIdOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['orders']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TradingAccountsAccountIdOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1TradingAccountsAccountIdOrdersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1TradingAccountsAccountIdOrdersMutationKey() {
  return ['v1', '/v1/trading/accounts/:account_id/orders', 'POST'] as const
}

export function getPostV1TradingAccountsAccountIdOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TradingAccountsAccountIdOrdersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$post']>,
    ) {
      return parseResponse(client.v1.trading.accounts[':account_id'].orders.$post(args, options))
    },
  })
}

export function injectPostV1TradingAccountsAccountIdOrders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TradingAccountsAccountIdOrdersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV1TradingAccountsAccountIdOrdersMutationKey() {
  return ['v1', '/v1/trading/accounts/:account_id/orders', 'DELETE'] as const
}

export function getDeleteV1TradingAccountsAccountIdOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TradingAccountsAccountIdOrdersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.trading.accounts)[':account_id']['orders']['$delete']
      >,
    ) {
      return parseResponse(client.v1.trading.accounts[':account_id'].orders.$delete(args, options))
    },
  })
}

export function injectDeleteV1TradingAccountsAccountIdOrders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1TradingAccountsAccountIdOrdersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1TradingAccountsAccountIdOrdersOrderIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['orders'][':order_id']['$get']
  >,
) {
  return ['v1', '/v1/trading/accounts/:account_id/orders/:order_id', args] as const
}

export function getV1TradingAccountsAccountIdOrdersOrderIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['orders'][':order_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1TradingAccountsAccountIdOrdersOrderIdQueryKey>
  >({
    queryKey: getV1TradingAccountsAccountIdOrdersOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.trading.accounts[':account_id'].orders[':order_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1TradingAccountsAccountIdOrdersOrderId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['orders'][':order_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1TradingAccountsAccountIdOrdersOrderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1TradingAccountsAccountIdOrdersOrderIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV1TradingAccountsAccountIdOrdersOrderIdMutationKey() {
  return ['v1', '/v1/trading/accounts/:account_id/orders/:order_id', 'DELETE'] as const
}

export function getDeleteV1TradingAccountsAccountIdOrdersOrderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['orders'][':order_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TradingAccountsAccountIdOrdersOrderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.trading.accounts)[':account_id']['orders'][':order_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.trading.accounts[':account_id'].orders[':order_id'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteV1TradingAccountsAccountIdOrdersOrderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v1.trading.accounts)[':account_id']['orders'][':order_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1TradingAccountsAccountIdOrdersOrderIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchV1TradingAccountsAccountIdOrdersOrderIdMutationKey() {
  return ['v1', '/v1/trading/accounts/:account_id/orders/:order_id', 'PATCH'] as const
}

export function getPatchV1TradingAccountsAccountIdOrdersOrderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['orders'][':order_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1TradingAccountsAccountIdOrdersOrderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.trading.accounts)[':account_id']['orders'][':order_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.trading.accounts[':account_id'].orders[':order_id'].$patch(args, options),
      )
    },
  })
}

export function injectPatchV1TradingAccountsAccountIdOrdersOrderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v1.trading.accounts)[':account_id']['orders'][':order_id']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1TradingAccountsAccountIdOrdersOrderIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1TradingAccountsAccountIdOrdersEstimationMutationKey() {
  return ['v1', '/v1/trading/accounts/:account_id/orders/estimation', 'POST'] as const
}

export function getPostV1TradingAccountsAccountIdOrdersEstimationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['orders']['estimation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1TradingAccountsAccountIdOrdersEstimationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.trading.accounts)[':account_id']['orders']['estimation']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.trading.accounts[':account_id'].orders.estimation.$post(args, options),
      )
    },
  })
}

export function injectPostV1TradingAccountsAccountIdOrdersEstimation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v1.trading.accounts)[':account_id']['orders']['estimation']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TradingAccountsAccountIdOrdersEstimationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1TradingAccountsAccountIdOrdersByClientOrderIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['orders:by_client_order_id']['$get']
  >,
) {
  return ['v1', '/v1/trading/accounts/:account_id/orders:by_client_order_id', args] as const
}

export function getV1TradingAccountsAccountIdOrdersByClientOrderIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['orders:by_client_order_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1TradingAccountsAccountIdOrdersByClientOrderIdQueryKey>
  >({
    queryKey: getV1TradingAccountsAccountIdOrdersByClientOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.trading.accounts[':account_id']['orders:by_client_order_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1TradingAccountsAccountIdOrdersByClientOrderId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['orders:by_client_order_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1TradingAccountsAccountIdOrdersByClientOrderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1TradingAccountsAccountIdOrdersByClientOrderIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1TradingAccountsAccountIdPositionsQueryKey(
  args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['positions']['$get']>,
) {
  return ['v1', '/v1/trading/accounts/:account_id/positions', args] as const
}

export function getV1TradingAccountsAccountIdPositionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.trading.accounts)[':account_id']['positions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['positions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.trading.accounts)[':account_id']['positions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TradingAccountsAccountIdPositionsQueryKey>
  >({
    queryKey: getV1TradingAccountsAccountIdPositionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.trading.accounts[':account_id'].positions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1TradingAccountsAccountIdPositions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.trading.accounts)[':account_id']['positions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['positions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.trading.accounts)[':account_id']['positions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TradingAccountsAccountIdPositionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1TradingAccountsAccountIdPositionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV1TradingAccountsAccountIdPositionsMutationKey() {
  return ['v1', '/v1/trading/accounts/:account_id/positions', 'DELETE'] as const
}

export function getDeleteV1TradingAccountsAccountIdPositionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['positions']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TradingAccountsAccountIdPositionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.trading.accounts)[':account_id']['positions']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.trading.accounts[':account_id'].positions.$delete(args, options),
      )
    },
  })
}

export function injectDeleteV1TradingAccountsAccountIdPositions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.trading.accounts)[':account_id']['positions']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.trading.accounts)[':account_id']['positions']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1TradingAccountsAccountIdPositionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1TradingAccountsAccountIdPositionsSymbolOrAssetIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_asset_id']['$get']
  >,
) {
  return ['v1', '/v1/trading/accounts/:account_id/positions/:symbol_or_asset_id', args] as const
}

export function getV1TradingAccountsAccountIdPositionsSymbolOrAssetIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_asset_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1TradingAccountsAccountIdPositionsSymbolOrAssetIdQueryKey>
  >({
    queryKey: getV1TradingAccountsAccountIdPositionsSymbolOrAssetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.trading.accounts[':account_id'].positions[':symbol_or_asset_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1TradingAccountsAccountIdPositionsSymbolOrAssetId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_asset_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1TradingAccountsAccountIdPositionsSymbolOrAssetIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1TradingAccountsAccountIdPositionsSymbolOrAssetIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV1TradingAccountsAccountIdPositionsSymbolOrAssetIdMutationKey() {
  return ['v1', '/v1/trading/accounts/:account_id/positions/:symbol_or_asset_id', 'DELETE'] as const
}

export function getDeleteV1TradingAccountsAccountIdPositionsSymbolOrAssetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_asset_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TradingAccountsAccountIdPositionsSymbolOrAssetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_asset_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.trading.accounts[':account_id'].positions[':symbol_or_asset_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteV1TradingAccountsAccountIdPositionsSymbolOrAssetId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_asset_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV1TradingAccountsAccountIdPositionsSymbolOrAssetIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1TradingAccountsAccountIdPositionsSymbolOrContractIdDoNotExerciseMutationKey() {
  return [
    'v1',
    '/v1/trading/accounts/:account_id/positions/:symbol_or_contract_id/do-not-exercise',
    'POST',
  ] as const
}

export function getPostV1TradingAccountsAccountIdPositionsSymbolOrContractIdDoNotExerciseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_contract_id']['do-not-exercise']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1TradingAccountsAccountIdPositionsSymbolOrContractIdDoNotExerciseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_contract_id']['do-not-exercise']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.trading.accounts[':account_id'].positions[':symbol_or_contract_id'][
          'do-not-exercise'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostV1TradingAccountsAccountIdPositionsSymbolOrContractIdDoNotExercise<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_contract_id']['do-not-exercise']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1TradingAccountsAccountIdPositionsSymbolOrContractIdDoNotExerciseMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1TradingAccountsAccountIdPositionsSymbolOrContractIdExerciseMutationKey() {
  return [
    'v1',
    '/v1/trading/accounts/:account_id/positions/:symbol_or_contract_id/exercise',
    'POST',
  ] as const
}

export function getPostV1TradingAccountsAccountIdPositionsSymbolOrContractIdExerciseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_contract_id']['exercise']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1TradingAccountsAccountIdPositionsSymbolOrContractIdExerciseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_contract_id']['exercise']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.trading.accounts[':account_id'].positions[
          ':symbol_or_contract_id'
        ].exercise.$post(args, options),
      )
    },
  })
}

export function injectPostV1TradingAccountsAccountIdPositionsSymbolOrContractIdExercise<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_contract_id']['exercise']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1TradingAccountsAccountIdPositionsSymbolOrContractIdExerciseMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1TradingAccountsAccountIdWatchlistsQueryKey(
  args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['watchlists']['$get']>,
) {
  return ['v1', '/v1/trading/accounts/:account_id/watchlists', args] as const
}

export function getV1TradingAccountsAccountIdWatchlistsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.trading.accounts)[':account_id']['watchlists']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['watchlists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.trading.accounts)[':account_id']['watchlists']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TradingAccountsAccountIdWatchlistsQueryKey>
  >({
    queryKey: getV1TradingAccountsAccountIdWatchlistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.trading.accounts[':account_id'].watchlists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1TradingAccountsAccountIdWatchlists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.trading.accounts)[':account_id']['watchlists']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['watchlists']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.trading.accounts)[':account_id']['watchlists']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TradingAccountsAccountIdWatchlistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1TradingAccountsAccountIdWatchlistsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1TradingAccountsAccountIdWatchlistsMutationKey() {
  return ['v1', '/v1/trading/accounts/:account_id/watchlists', 'POST'] as const
}

export function getPostV1TradingAccountsAccountIdWatchlistsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['watchlists']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TradingAccountsAccountIdWatchlistsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.trading.accounts)[':account_id']['watchlists']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.trading.accounts[':account_id'].watchlists.$post(args, options),
      )
    },
  })
}

export function injectPostV1TradingAccountsAccountIdWatchlists<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.trading.accounts)[':account_id']['watchlists']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['watchlists']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TradingAccountsAccountIdWatchlistsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1TradingAccountsAccountIdWatchlistsWatchlistIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$get']
  >,
) {
  return ['v1', '/v1/trading/accounts/:account_id/watchlists/:watchlist_id', args] as const
}

export function getV1TradingAccountsAccountIdWatchlistsWatchlistIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1TradingAccountsAccountIdWatchlistsWatchlistIdQueryKey>
  >({
    queryKey: getV1TradingAccountsAccountIdWatchlistsWatchlistIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.trading.accounts[':account_id'].watchlists[':watchlist_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1TradingAccountsAccountIdWatchlistsWatchlistId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1TradingAccountsAccountIdWatchlistsWatchlistIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1TradingAccountsAccountIdWatchlistsWatchlistIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutV1TradingAccountsAccountIdWatchlistsWatchlistIdMutationKey() {
  return ['v1', '/v1/trading/accounts/:account_id/watchlists/:watchlist_id', 'PUT'] as const
}

export function getPutV1TradingAccountsAccountIdWatchlistsWatchlistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1TradingAccountsAccountIdWatchlistsWatchlistIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.trading.accounts[':account_id'].watchlists[':watchlist_id'].$put(args, options),
      )
    },
  })
}

export function injectPutV1TradingAccountsAccountIdWatchlistsWatchlistId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1TradingAccountsAccountIdWatchlistsWatchlistIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1TradingAccountsAccountIdWatchlistsWatchlistIdMutationKey() {
  return ['v1', '/v1/trading/accounts/:account_id/watchlists/:watchlist_id', 'POST'] as const
}

export function getPostV1TradingAccountsAccountIdWatchlistsWatchlistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1TradingAccountsAccountIdWatchlistsWatchlistIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.trading.accounts[':account_id'].watchlists[':watchlist_id'].$post(args, options),
      )
    },
  })
}

export function injectPostV1TradingAccountsAccountIdWatchlistsWatchlistId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TradingAccountsAccountIdWatchlistsWatchlistIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV1TradingAccountsAccountIdWatchlistsWatchlistIdMutationKey() {
  return ['v1', '/v1/trading/accounts/:account_id/watchlists/:watchlist_id', 'DELETE'] as const
}

export function getDeleteV1TradingAccountsAccountIdWatchlistsWatchlistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TradingAccountsAccountIdWatchlistsWatchlistIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.trading.accounts[':account_id'].watchlists[':watchlist_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteV1TradingAccountsAccountIdWatchlistsWatchlistId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV1TradingAccountsAccountIdWatchlistsWatchlistIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV1TradingAccountsAccountIdWatchlistsWatchlistIdSymbolMutationKey() {
  return [
    'v1',
    '/v1/trading/accounts/:account_id/watchlists/:watchlist_id/:symbol',
    'DELETE',
  ] as const
}

export function getDeleteV1TradingAccountsAccountIdWatchlistsWatchlistIdSymbolMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id'][':symbol']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TradingAccountsAccountIdWatchlistsWatchlistIdSymbolMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id'][':symbol']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.trading.accounts[':account_id'].watchlists[':watchlist_id'][':symbol'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteV1TradingAccountsAccountIdWatchlistsWatchlistIdSymbol<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id'][':symbol']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV1TradingAccountsAccountIdWatchlistsWatchlistIdSymbolMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1TransfersJitLedgerIdBalancesQueryKey(
  args: InferRequestType<(typeof client.v1.transfers.jit)[':ledger_id']['balances']['$get']>,
) {
  return ['v1', '/v1/transfers/jit/:ledger_id/balances', args] as const
}

export function getV1TransfersJitLedgerIdBalancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.transfers.jit)[':ledger_id']['balances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.transfers.jit)[':ledger_id']['balances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.transfers.jit)[':ledger_id']['balances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransfersJitLedgerIdBalancesQueryKey>
  >({
    queryKey: getV1TransfersJitLedgerIdBalancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.transfers.jit[':ledger_id'].balances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1TransfersJitLedgerIdBalances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.transfers.jit)[':ledger_id']['balances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.transfers.jit)[':ledger_id']['balances']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.transfers.jit)[':ledger_id']['balances']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TransfersJitLedgerIdBalancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1TransfersJitLedgerIdBalancesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1TransfersJitLedgersQueryKey() {
  return ['v1', '/v1/transfers/jit/ledgers'] as const
}

export function getV1TransfersJitLedgersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.ledgers.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.ledgers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransfersJitLedgersQueryKey>
  >({
    queryKey: getV1TransfersJitLedgersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.transfers.jit.ledgers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1TransfersJitLedgers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.ledgers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.ledgers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TransfersJitLedgersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TransfersJitLedgersQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV1TransfersJitLimitsQueryKey() {
  return ['v1', '/v1/transfers/jit/limits'] as const
}

export function getV1TransfersJitLimitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.limits.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.limits.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransfersJitLimitsQueryKey>
  >({
    queryKey: getV1TransfersJitLimitsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.transfers.jit.limits.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1TransfersJitLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.limits.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.limits.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TransfersJitLimitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TransfersJitLimitsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV1TransfersJitReportsQueryKey(
  args: InferRequestType<typeof client.v1.transfers.jit.reports.$get>,
) {
  return ['v1', '/v1/transfers/jit/reports', args] as const
}

export function getV1TransfersJitReportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.reports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.transfers.jit.reports.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.reports.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransfersJitReportsQueryKey>
  >({
    queryKey: getV1TransfersJitReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.transfers.jit.reports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1TransfersJitReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.reports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.transfers.jit.reports.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.reports.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TransfersJitReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1TransfersJitReportsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1WalletsFeesEstimateQueryKey(
  args: InferRequestType<typeof client.v1.wallets.fees.estimate.$get>,
) {
  return ['v1', '/v1/wallets/fees/estimate', args] as const
}

export function getV1WalletsFeesEstimateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.wallets.fees.estimate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.wallets.fees.estimate.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.wallets.fees.estimate.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WalletsFeesEstimateQueryKey>
  >({
    queryKey: getV1WalletsFeesEstimateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.wallets.fees.estimate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1WalletsFeesEstimate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.wallets.fees.estimate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.wallets.fees.estimate.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.wallets.fees.estimate.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1WalletsFeesEstimateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WalletsFeesEstimateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1WalletsTravelRuleVaspsQueryKey(
  args: InferRequestType<(typeof client.v1.wallets)['travel-rule']['vasps']['$get']>,
) {
  return ['v1', '/v1/wallets/travel-rule/vasps', args] as const
}

export function getV1WalletsTravelRuleVaspsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.wallets)['travel-rule']['vasps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.wallets)['travel-rule']['vasps']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.wallets)['travel-rule']['vasps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WalletsTravelRuleVaspsQueryKey>
  >({
    queryKey: getV1WalletsTravelRuleVaspsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.wallets['travel-rule'].vasps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1WalletsTravelRuleVasps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.wallets)['travel-rule']['vasps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.wallets)['travel-rule']['vasps']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.wallets)['travel-rule']['vasps']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1WalletsTravelRuleVaspsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WalletsTravelRuleVaspsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2beta1AccountsAccountIdEventsActivitiesEventIdQueryKey(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':account_id']['events']['activities'][':event_id']['$get']
  >,
) {
  return ['v2beta1', '/v2beta1/accounts/:account_id/events/activities/:event_id', args] as const
}

export function getV2beta1AccountsAccountIdEventsActivitiesEventIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':account_id']['events']['activities'][':event_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2beta1AccountsAccountIdEventsActivitiesEventIdQueryKey>
  >({
    queryKey: getV2beta1AccountsAccountIdEventsActivitiesEventIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta1.accounts[':account_id'].events.activities[':event_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2beta1AccountsAccountIdEventsActivitiesEventId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2beta1.accounts)[':account_id']['events']['activities'][':event_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV2beta1AccountsAccountIdEventsActivitiesEventIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2beta1AccountsAccountIdEventsActivitiesEventIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2beta1EventsActivitiesQueryKey(
  args: InferRequestType<typeof client.v2beta1.events.activities.$get>,
) {
  return ['v2beta1', '/v2beta1/events/activities', args] as const
}

export function getV2beta1EventsActivitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2beta1.events.activities.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2beta1.events.activities.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2beta1.events.activities.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1EventsActivitiesQueryKey>
  >({
    queryKey: getV2beta1EventsActivitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta1.events.activities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2beta1EventsActivities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2beta1.events.activities.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2beta1.events.activities.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2beta1.events.activities.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1EventsActivitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2beta1EventsActivitiesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2CalendarMarketQueryKey(
  args: InferRequestType<(typeof client.v2.calendar)[':market']['$get']>,
) {
  return ['v2', '/v2/calendar/:market', args] as const
}

export function getV2CalendarMarketQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.calendar)[':market']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.calendar)[':market']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.calendar)[':market']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CalendarMarketQueryKey>
  >({
    queryKey: getV2CalendarMarketQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.calendar[':market'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CalendarMarket<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.calendar)[':market']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.calendar)[':market']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.calendar)[':market']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CalendarMarketQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2CalendarMarketQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV2ClockQueryKey(args: InferRequestType<typeof client.v2.clock.$get>) {
  return ['v2', '/v2/clock', args] as const
}

export function getV2ClockQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clock.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.clock.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clock.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2ClockQueryKey>
  >({
    queryKey: getV2ClockQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.clock.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Clock<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clock.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.clock.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clock.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV2ClockQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ClockQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV2EventsAdminActionsQueryKey(
  args: InferRequestType<(typeof client.v2.events)['admin-actions']['$get']>,
) {
  return ['v2', '/v2/events/admin-actions', args] as const
}

export function getV2EventsAdminActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.events)['admin-actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.events)['admin-actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.events)['admin-actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EventsAdminActionsQueryKey>
  >({
    queryKey: getV2EventsAdminActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.events['admin-actions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2EventsAdminActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.events)['admin-actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.events)['admin-actions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.events)['admin-actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EventsAdminActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2EventsAdminActionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2EventsFundingStatusQueryKey(
  args: InferRequestType<typeof client.v2.events.funding.status.$get>,
) {
  return ['v2', '/v2/events/funding/status', args] as const
}

export function getV2EventsFundingStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.funding.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.events.funding.status.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.funding.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EventsFundingStatusQueryKey>
  >({
    queryKey: getV2EventsFundingStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.events.funding.status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2EventsFundingStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.funding.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.events.funding.status.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.funding.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EventsFundingStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2EventsFundingStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2EventsIposQueryKey(args: InferRequestType<typeof client.v2.events.ipos.$get>) {
  return ['v2', '/v2/events/ipos', args] as const
}

export function getV2EventsIposQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.ipos.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.events.ipos.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.ipos.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2EventsIposQueryKey>
  >({
    queryKey: getV2EventsIposQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.events.ipos.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2EventsIpos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.ipos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.events.ipos.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.ipos.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2EventsIposQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2EventsIposQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV2EventsJournalsStatusQueryKey(
  args: InferRequestType<typeof client.v2.events.journals.status.$get>,
) {
  return ['v2', '/v2/events/journals/status', args] as const
}

export function getV2EventsJournalsStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.journals.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.events.journals.status.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.journals.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EventsJournalsStatusQueryKey>
  >({
    queryKey: getV2EventsJournalsStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.events.journals.status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2EventsJournalsStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.journals.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.events.journals.status.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.journals.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EventsJournalsStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2EventsJournalsStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2EventsRebalancerQueryKey(
  args: InferRequestType<typeof client.v2.events.rebalancer.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/events/rebalancer', keyArgs] as const
}

export function getV2EventsRebalancerQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.rebalancer.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.events.rebalancer.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.rebalancer.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2EventsRebalancerQueryKey>
  >({
    queryKey: getV2EventsRebalancerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.events.rebalancer.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2EventsRebalancer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.rebalancer.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.events.rebalancer.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.rebalancer.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EventsRebalancerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2EventsRebalancerQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV2EventsSystemQueryKey(
  args: InferRequestType<typeof client.v2.events.system.$get>,
) {
  return ['v2', '/v2/events/system', args] as const
}

export function getV2EventsSystemQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.system.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.events.system.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.system.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2EventsSystemQueryKey>
  >({
    queryKey: getV2EventsSystemQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.events.system.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2EventsSystem<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.system.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.events.system.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.system.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2EventsSystemQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2EventsSystemQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV2EventsTradesQueryKey(
  args: InferRequestType<typeof client.v2.events.trades.$get>,
) {
  return ['v2', '/v2/events/trades', args] as const
}

export function getV2EventsTradesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.trades.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.events.trades.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.trades.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2EventsTradesQueryKey>
  >({
    queryKey: getV2EventsTradesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.events.trades.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2EventsTrades<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.trades.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.events.trades.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.trades.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2EventsTradesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2EventsTradesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
