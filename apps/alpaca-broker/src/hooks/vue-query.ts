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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.accounts)[':account_id']['funding_wallet']['$get']>
  >,
) {
  return ['v1beta', '/v1beta/accounts/:account_id/funding_wallet', toValue(args)] as const
}

export function getV1betaAccountsAccountIdFundingWalletQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.accounts)[':account_id']['funding_wallet']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaAccountsAccountIdFundingWalletQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta.accounts[':account_id'].funding_wallet.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaAccountsAccountIdFundingWallet<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.accounts)[':account_id']['funding_wallet']['$get']>
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
                    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['$get']
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
                    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1betaAccountsAccountIdFundingWalletQueryKey>
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
            ReturnType<(typeof client.v1beta.accounts)[':account_id']['funding_wallet']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAccountsAccountIdFundingWalletQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaAccountsAccountIdFundingWalletQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta.accounts[':account_id'].funding_wallet.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1betaAccountsAccountIdFundingWallet<
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
                    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['$post']
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
  const mutationDefaults = getPostV1betaAccountsAccountIdFundingWalletMutationOptions<
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

export function getV1betaAccountsAccountIdFundingWalletFundingDetailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['funding_details']['$get']
    >
  >,
) {
  return [
    'v1beta',
    '/v1beta/accounts/:account_id/funding_wallet/funding_details',
    toValue(args),
  ] as const
}

export function getV1betaAccountsAccountIdFundingWalletFundingDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['funding_details']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaAccountsAccountIdFundingWalletFundingDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta.accounts[':account_id'].funding_wallet.funding_details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaAccountsAccountIdFundingWalletFundingDetails<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['funding_details']['$get']
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
                    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['funding_details']['$get']
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
                    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['funding_details']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1betaAccountsAccountIdFundingWalletFundingDetailsQueryKey>
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
              (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['funding_details']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAccountsAccountIdFundingWalletFundingDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaAccountsAccountIdFundingWalletFundingDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta.accounts[':account_id'].funding_wallet.funding_details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1betaAccountsAccountIdFundingWalletRecipientBankQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['recipient_bank']['$get']
    >
  >,
) {
  return [
    'v1beta',
    '/v1beta/accounts/:account_id/funding_wallet/recipient_bank',
    toValue(args),
  ] as const
}

export function getV1betaAccountsAccountIdFundingWalletRecipientBankQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['recipient_bank']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaAccountsAccountIdFundingWalletRecipientBankQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta.accounts[':account_id'].funding_wallet.recipient_bank.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaAccountsAccountIdFundingWalletRecipientBank<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['recipient_bank']['$get']
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
                    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['recipient_bank']['$get']
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
                    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['recipient_bank']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1betaAccountsAccountIdFundingWalletRecipientBankQueryKey>
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
              (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['recipient_bank']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAccountsAccountIdFundingWalletRecipientBankQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaAccountsAccountIdFundingWalletRecipientBankQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta.accounts[':account_id'].funding_wallet.recipient_bank.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1betaAccountsAccountIdFundingWalletRecipientBank<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1betaAccountsAccountIdFundingWalletRecipientBankMutationOptions<
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

export function useDeleteV1betaAccountsAccountIdFundingWalletRecipientBank<
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
    getDeleteV1betaAccountsAccountIdFundingWalletRecipientBankMutationOptions<
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

export function getV1betaAccountsAccountIdFundingWalletTransfersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['transfers']['$get']
    >
  >,
) {
  return ['v1beta', '/v1beta/accounts/:account_id/funding_wallet/transfers', toValue(args)] as const
}

export function getV1betaAccountsAccountIdFundingWalletTransfersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['transfers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaAccountsAccountIdFundingWalletTransfersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta.accounts[':account_id'].funding_wallet.transfers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaAccountsAccountIdFundingWalletTransfers<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['transfers']['$get']
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
                    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['transfers']['$get']
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
                    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['transfers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1betaAccountsAccountIdFundingWalletTransfersQueryKey>
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
              (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['transfers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAccountsAccountIdFundingWalletTransfersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaAccountsAccountIdFundingWalletTransfersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta.accounts[':account_id'].funding_wallet.transfers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1betaAccountsAccountIdFundingWalletTransfersTransferIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['transfers'][':transfer_id']['$get']
    >
  >,
) {
  return [
    'v1beta',
    '/v1beta/accounts/:account_id/funding_wallet/transfers/:transfer_id',
    toValue(args),
  ] as const
}

export function getV1betaAccountsAccountIdFundingWalletTransfersTransferIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['transfers'][':transfer_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1betaAccountsAccountIdFundingWalletTransfersTransferIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta.accounts[':account_id'].funding_wallet.transfers[':transfer_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1betaAccountsAccountIdFundingWalletTransfersTransferId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['transfers'][':transfer_id']['$get']
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
                    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['transfers'][':transfer_id']['$get']
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
                    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['transfers'][':transfer_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1betaAccountsAccountIdFundingWalletTransfersTransferIdQueryKey>
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
              (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['transfers'][':transfer_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAccountsAccountIdFundingWalletTransfersTransferIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1betaAccountsAccountIdFundingWalletTransfersTransferIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta.accounts[':account_id'].funding_wallet.transfers[':transfer_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1betaAccountsAccountIdFundingWalletWithdrawal<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1betaAccountsAccountIdFundingWalletWithdrawalMutationOptions<
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

export function usePostV1betaAccountsFundingWallet<
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
                Awaited<ReturnType<typeof client.v1beta.accounts.funding_wallet.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1beta.accounts.funding_wallet.$post>,
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
  const mutationDefaults = getPostV1betaAccountsFundingWalletMutationOptions<
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

export function usePostV1betaDemoBankingFunding<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1betaDemoBankingFundingMutationOptions<TError, TOnMutateResult>(
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

export function getV1beta1AcatsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.acats.$get>>,
) {
  return ['v1beta1', '/v1beta1/acats', toValue(args)] as const
}

export function getV1beta1AcatsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.acats.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1AcatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1.acats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1Acats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.acats.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.acats.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.acats.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.acats.$get>>>>
          >,
          ReturnType<typeof getV1beta1AcatsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.acats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1AcatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1AcatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1.acats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta1AcatsAccountIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1.acats)[':account_id']['$get']>>,
) {
  return ['v1beta1', '/v1beta1/acats/:account_id', toValue(args)] as const
}

export function getV1beta1AcatsAccountIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1.acats)[':account_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1AcatsAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1.acats[':account_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1AcatsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1.acats)[':account_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1.acats)[':account_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1.acats)[':account_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1.acats)[':account_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1AcatsAccountIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta1.acats)[':account_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1AcatsAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1AcatsAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1.acats[':account_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1beta1AcatsAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta1AcatsAccountIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1beta1AcatsAccountIdAcatsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1.acats)[':account_id'][':acats_id']['$get']>
  >,
) {
  return ['v1beta1', '/v1beta1/acats/:account_id/:acats_id', toValue(args)] as const
}

export function getV1beta1AcatsAccountIdAcatsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1.acats)[':account_id'][':acats_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1AcatsAccountIdAcatsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1.acats[':account_id'][':acats_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1AcatsAccountIdAcatsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1.acats)[':account_id'][':acats_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1.acats)[':account_id'][':acats_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1beta1.acats)[':account_id'][':acats_id']['$get']>
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
                  ReturnType<(typeof client.v1beta1.acats)[':account_id'][':acats_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1beta1AcatsAccountIdAcatsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta1.acats)[':account_id'][':acats_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1AcatsAccountIdAcatsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1AcatsAccountIdAcatsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1.acats[':account_id'][':acats_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta1AcatsAccountIdAcatsIdAssetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1.acats)[':account_id'][':acats_id']['assets']['$get']>
  >,
) {
  return ['v1beta1', '/v1beta1/acats/:account_id/:acats_id/assets', toValue(args)] as const
}

export function getV1beta1AcatsAccountIdAcatsIdAssetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1.acats)[':account_id'][':acats_id']['assets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1AcatsAccountIdAcatsIdAssetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1.acats[':account_id'][':acats_id'].assets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1AcatsAccountIdAcatsIdAssets<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1.acats)[':account_id'][':acats_id']['assets']['$get']>
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
                    (typeof client.v1beta1.acats)[':account_id'][':acats_id']['assets']['$get']
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
                    (typeof client.v1beta1.acats)[':account_id'][':acats_id']['assets']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1beta1AcatsAccountIdAcatsIdAssetsQueryKey>
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
            ReturnType<(typeof client.v1beta1.acats)[':account_id'][':acats_id']['assets']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1AcatsAccountIdAcatsIdAssetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1AcatsAccountIdAcatsIdAssetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1.acats[':account_id'][':acats_id'].assets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta1AcatsContrabrokersQueryKey() {
  return ['v1beta1', '/v1beta1/acats/contrabrokers'] as const
}

export function getV1beta1AcatsContrabrokersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1beta1AcatsContrabrokersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1.acats.contrabrokers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1AcatsContrabrokers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.acats.contrabrokers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1beta1.acats.contrabrokers.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1beta1.acats.contrabrokers.$get>>
              >
            >
          >,
          ReturnType<typeof getV1beta1AcatsContrabrokersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.acats.contrabrokers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1AcatsContrabrokersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1beta1AcatsContrabrokersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1.acats.contrabrokers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta1LogosSymbolQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1.logos)[':symbol']['$get']>>,
) {
  return ['v1beta1', '/v1beta1/logos/:symbol', toValue(args)] as const
}

export function getV1beta1LogosSymbolQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1.logos)[':symbol']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1LogosSymbolQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1.logos[':symbol'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1LogosSymbol<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1.logos)[':symbol']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1.logos)[':symbol']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1.logos)[':symbol']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1.logos)[':symbol']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1LogosSymbolQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1.logos)[':symbol']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1LogosSymbolQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1LogosSymbolQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1.logos[':symbol'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.accounts.$get>>,
) {
  return ['v1', '/v1/accounts', toValue(args)] as const
}

export function getV1AccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Accounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
          >,
          ReturnType<typeof getV1AccountsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1AccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1Accounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.accounts.$post>,
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
  const mutationDefaults = getPostV1AccountsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1AccountsAccountIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.accounts)[':account_id']['$get']>>,
) {
  return ['v1', '/v1/accounts/:account_id', toValue(args)] as const
}

export function getV1AccountsAccountIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.accounts)[':account_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts[':account_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.accounts)[':account_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AccountsAccountIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountsAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts[':account_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchV1AccountsAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1AccountsAccountIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1AccountsAccountIdAchRelationshipsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_id']['ach_relationships']['$get']>
  >,
) {
  return ['v1', '/v1/accounts/:account_id/ach_relationships', toValue(args)] as const
}

export function getV1AccountsAccountIdAchRelationshipsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_id']['ach_relationships']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsAccountIdAchRelationshipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts[':account_id'].ach_relationships.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountsAccountIdAchRelationships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['ach_relationships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_id']['ach_relationships']['$get']>
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
                    (typeof client.v1.accounts)[':account_id']['ach_relationships']['$get']
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
                    (typeof client.v1.accounts)[':account_id']['ach_relationships']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AccountsAccountIdAchRelationshipsQueryKey>
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
            ReturnType<(typeof client.v1.accounts)[':account_id']['ach_relationships']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdAchRelationshipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountsAccountIdAchRelationshipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts[':account_id'].ach_relationships.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1AccountsAccountIdAchRelationships<
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
                    (typeof client.v1.accounts)[':account_id']['ach_relationships']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.accounts)[':account_id']['ach_relationships']['$post']
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
  const mutationDefaults = getPostV1AccountsAccountIdAchRelationshipsMutationOptions<
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

export function useDeleteV1AccountsAccountIdAchRelationshipsAchRelationshipId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
    getDeleteV1AccountsAccountIdAchRelationshipsAchRelationshipIdMutationOptions<
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

export function usePostV1AccountsAccountIdActionsClose<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AccountsAccountIdActionsCloseMutationOptions<
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

export function getV1AccountsAccountIdCipQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_id']['cip']['$get']>
  >,
) {
  return ['v1', '/v1/accounts/:account_id/cip', toValue(args)] as const
}

export function getV1AccountsAccountIdCipQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_id']['cip']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsAccountIdCipQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts[':account_id'].cip.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountsAccountIdCip<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['cip']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_id']['cip']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['cip']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['cip']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AccountsAccountIdCipQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['cip']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdCipQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountsAccountIdCipQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts[':account_id'].cip.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1AccountsAccountIdCip<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AccountsAccountIdCipMutationOptions<TError, TOnMutateResult>(
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

export function getV1AccountsAccountIdDocumentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_id']['documents']['$get']>
  >,
) {
  return ['v1', '/v1/accounts/:account_id/documents', toValue(args)] as const
}

export function getV1AccountsAccountIdDocumentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_id']['documents']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsAccountIdDocumentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts[':account_id'].documents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountsAccountIdDocuments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['documents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_id']['documents']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['documents']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['documents']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AccountsAccountIdDocumentsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['documents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdDocumentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountsAccountIdDocumentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts[':account_id'].documents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AccountsAccountIdDocumentsDocumentIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.accounts)[':account_id']['documents'][':document_id']['download']['$get']
    >
  >,
) {
  return ['v1', '/v1/accounts/:account_id/documents/:document_id/download', toValue(args)] as const
}

export function getV1AccountsAccountIdDocumentsDocumentIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.accounts)[':account_id']['documents'][':document_id']['download']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsAccountIdDocumentsDocumentIdDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts[':account_id'].documents[':document_id'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountsAccountIdDocumentsDocumentIdDownload<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.accounts)[':account_id']['documents'][':document_id']['download']['$get']
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
                    (typeof client.v1.accounts)[':account_id']['documents'][':document_id']['download']['$get']
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
                    (typeof client.v1.accounts)[':account_id']['documents'][':document_id']['download']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AccountsAccountIdDocumentsDocumentIdDownloadQueryKey>
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
              (typeof client.v1.accounts)[':account_id']['documents'][':document_id']['download']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdDocumentsDocumentIdDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountsAccountIdDocumentsDocumentIdDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts[':account_id'].documents[':document_id'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1AccountsAccountIdDocumentsUpload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AccountsAccountIdDocumentsUploadMutationOptions<
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

export function getV1AccountsAccountIdDocumentsW8benDocumentIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.accounts)[':account_id']['documents']['w8ben'][':document_id']['download']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/accounts/:account_id/documents/w8ben/:document_id/download',
    toValue(args),
  ] as const
}

export function getV1AccountsAccountIdDocumentsW8benDocumentIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.accounts)[':account_id']['documents']['w8ben'][':document_id']['download']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsAccountIdDocumentsW8benDocumentIdDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts[':account_id'].documents.w8ben[':document_id'].download.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1AccountsAccountIdDocumentsW8benDocumentIdDownload<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.accounts)[':account_id']['documents']['w8ben'][':document_id']['download']['$get']
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
                    (typeof client.v1.accounts)[':account_id']['documents']['w8ben'][':document_id']['download']['$get']
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
                    (typeof client.v1.accounts)[':account_id']['documents']['w8ben'][':document_id']['download']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AccountsAccountIdDocumentsW8benDocumentIdDownloadQueryKey>
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
              (typeof client.v1.accounts)[':account_id']['documents']['w8ben'][':document_id']['download']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdDocumentsW8benDocumentIdDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1AccountsAccountIdDocumentsW8benDocumentIdDownloadQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts[':account_id'].documents.w8ben[':document_id'].download.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePatchV1AccountsAccountIdOnfidoSdk<
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
                  ReturnType<(typeof client.v1.accounts)[':account_id']['onfido']['sdk']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.accounts)[':account_id']['onfido']['sdk']['$patch']>,
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
  const mutationDefaults = getPatchV1AccountsAccountIdOnfidoSdkMutationOptions<
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

export function getV1AccountsAccountIdOnfidoSdkTokensQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_id']['onfido']['sdk']['tokens']['$get']>
  >,
) {
  return ['v1', '/v1/accounts/:account_id/onfido/sdk/tokens', toValue(args)] as const
}

export function getV1AccountsAccountIdOnfidoSdkTokensQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_id']['onfido']['sdk']['tokens']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsAccountIdOnfidoSdkTokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts[':account_id'].onfido.sdk.tokens.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountsAccountIdOnfidoSdkTokens<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_id']['onfido']['sdk']['tokens']['$get']>
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
                    (typeof client.v1.accounts)[':account_id']['onfido']['sdk']['tokens']['$get']
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
                    (typeof client.v1.accounts)[':account_id']['onfido']['sdk']['tokens']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AccountsAccountIdOnfidoSdkTokensQueryKey>
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
              (typeof client.v1.accounts)[':account_id']['onfido']['sdk']['tokens']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdOnfidoSdkTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountsAccountIdOnfidoSdkTokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts[':account_id'].onfido.sdk.tokens.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1AccountsAccountIdOptionsApproval<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AccountsAccountIdOptionsApprovalMutationOptions<
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

export function getV1AccountsAccountIdRecipientBanksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_id']['recipient_banks']['$get']>
  >,
) {
  return ['v1', '/v1/accounts/:account_id/recipient_banks', toValue(args)] as const
}

export function getV1AccountsAccountIdRecipientBanksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_id']['recipient_banks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsAccountIdRecipientBanksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts[':account_id'].recipient_banks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountsAccountIdRecipientBanks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['recipient_banks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_id']['recipient_banks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.accounts)[':account_id']['recipient_banks']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AccountsAccountIdRecipientBanksQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['recipient_banks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdRecipientBanksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountsAccountIdRecipientBanksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts[':account_id'].recipient_banks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1AccountsAccountIdRecipientBanks<
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
                  ReturnType<(typeof client.v1.accounts)[':account_id']['recipient_banks']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.accounts)[':account_id']['recipient_banks']['$post']>,
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
  const mutationDefaults = getPostV1AccountsAccountIdRecipientBanksMutationOptions<
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

export function useDeleteV1AccountsAccountIdRecipientBanksBankId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1AccountsAccountIdRecipientBanksBankIdMutationOptions<
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

export function usePostV1AccountsAccountIdTokenizationCallbackMint<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AccountsAccountIdTokenizationCallbackMintMutationOptions<
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

export function usePostV1AccountsAccountIdTokenizationCallbackRedeem<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AccountsAccountIdTokenizationCallbackRedeemMutationOptions<
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

export function usePostV1AccountsAccountIdTokenizationMint<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AccountsAccountIdTokenizationMintMutationOptions<
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

export function getV1AccountsAccountIdTokenizationRequestsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_id']['tokenization']['requests']['$get']>
  >,
) {
  return ['v1', '/v1/accounts/:account_id/tokenization/requests', toValue(args)] as const
}

export function getV1AccountsAccountIdTokenizationRequestsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_id']['tokenization']['requests']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsAccountIdTokenizationRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts[':account_id'].tokenization.requests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountsAccountIdTokenizationRequests<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_id']['tokenization']['requests']['$get']>
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
                    (typeof client.v1.accounts)[':account_id']['tokenization']['requests']['$get']
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
                    (typeof client.v1.accounts)[':account_id']['tokenization']['requests']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AccountsAccountIdTokenizationRequestsQueryKey>
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
              (typeof client.v1.accounts)[':account_id']['tokenization']['requests']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdTokenizationRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountsAccountIdTokenizationRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts[':account_id'].tokenization.requests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AccountsAccountIdTokenizationRequestsTokenizationRequestIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.accounts)[':account_id']['tokenization']['requests'][':tokenization_request_id']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/accounts/:account_id/tokenization/requests/:tokenization_request_id',
    toValue(args),
  ] as const
}

export function getV1AccountsAccountIdTokenizationRequestsTokenizationRequestIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.accounts)[':account_id']['tokenization']['requests'][':tokenization_request_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1AccountsAccountIdTokenizationRequestsTokenizationRequestIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts[':account_id'].tokenization.requests[':tokenization_request_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1AccountsAccountIdTokenizationRequestsTokenizationRequestId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.accounts)[':account_id']['tokenization']['requests'][':tokenization_request_id']['$get']
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
                    (typeof client.v1.accounts)[':account_id']['tokenization']['requests'][':tokenization_request_id']['$get']
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
                    (typeof client.v1.accounts)[':account_id']['tokenization']['requests'][':tokenization_request_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AccountsAccountIdTokenizationRequestsTokenizationRequestIdQueryKey>
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
              (typeof client.v1.accounts)[':account_id']['tokenization']['requests'][':tokenization_request_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdTokenizationRequestsTokenizationRequestIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1AccountsAccountIdTokenizationRequestsTokenizationRequestIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts[':account_id'].tokenization.requests[':tokenization_request_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1AccountsAccountIdTokenizationRequestsByClientRequestIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.accounts)[':account_id']['tokenization']['requests:by_client_request_id']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/accounts/:account_id/tokenization/requests:by_client_request_id',
    toValue(args),
  ] as const
}

export function getV1AccountsAccountIdTokenizationRequestsByClientRequestIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.accounts)[':account_id']['tokenization']['requests:by_client_request_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1AccountsAccountIdTokenizationRequestsByClientRequestIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts[':account_id'].tokenization['requests:by_client_request_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1AccountsAccountIdTokenizationRequestsByClientRequestId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.accounts)[':account_id']['tokenization']['requests:by_client_request_id']['$get']
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
                    (typeof client.v1.accounts)[':account_id']['tokenization']['requests:by_client_request_id']['$get']
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
                    (typeof client.v1.accounts)[':account_id']['tokenization']['requests:by_client_request_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AccountsAccountIdTokenizationRequestsByClientRequestIdQueryKey>
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
              (typeof client.v1.accounts)[':account_id']['tokenization']['requests:by_client_request_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdTokenizationRequestsByClientRequestIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1AccountsAccountIdTokenizationRequestsByClientRequestIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts[':account_id'].tokenization['requests:by_client_request_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1AccountsAccountIdTokenizationRequestsByIssuerRequestIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.accounts)[':account_id']['tokenization']['requests:by_issuer_request_id']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/accounts/:account_id/tokenization/requests:by_issuer_request_id',
    toValue(args),
  ] as const
}

export function getV1AccountsAccountIdTokenizationRequestsByIssuerRequestIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.accounts)[':account_id']['tokenization']['requests:by_issuer_request_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1AccountsAccountIdTokenizationRequestsByIssuerRequestIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts[':account_id'].tokenization['requests:by_issuer_request_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1AccountsAccountIdTokenizationRequestsByIssuerRequestId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.accounts)[':account_id']['tokenization']['requests:by_issuer_request_id']['$get']
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
                    (typeof client.v1.accounts)[':account_id']['tokenization']['requests:by_issuer_request_id']['$get']
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
                    (typeof client.v1.accounts)[':account_id']['tokenization']['requests:by_issuer_request_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AccountsAccountIdTokenizationRequestsByIssuerRequestIdQueryKey>
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
              (typeof client.v1.accounts)[':account_id']['tokenization']['requests:by_issuer_request_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdTokenizationRequestsByIssuerRequestIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1AccountsAccountIdTokenizationRequestsByIssuerRequestIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts[':account_id'].tokenization['requests:by_issuer_request_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1AccountsAccountIdTransfersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_id']['transfers']['$get']>
  >,
) {
  return ['v1', '/v1/accounts/:account_id/transfers', toValue(args)] as const
}

export function getV1AccountsAccountIdTransfersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_id']['transfers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsAccountIdTransfersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts[':account_id'].transfers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountsAccountIdTransfers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['transfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_id']['transfers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['transfers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['transfers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AccountsAccountIdTransfersQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['transfers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdTransfersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountsAccountIdTransfersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts[':account_id'].transfers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1AccountsAccountIdTransfers<
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
                  ReturnType<(typeof client.v1.accounts)[':account_id']['transfers']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.accounts)[':account_id']['transfers']['$post']>,
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
  const mutationDefaults = getPostV1AccountsAccountIdTransfersMutationOptions<
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

export function useDeleteV1AccountsAccountIdTransfersTransferId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1AccountsAccountIdTransfersTransferIdMutationOptions<
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

export function getV1AccountsAccountIdWalletsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_id']['wallets']['$get']>
  >,
) {
  return ['v1', '/v1/accounts/:account_id/wallets', toValue(args)] as const
}

export function getV1AccountsAccountIdWalletsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_id']['wallets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsAccountIdWalletsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts[':account_id'].wallets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountsAccountIdWallets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['wallets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_id']['wallets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['wallets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['wallets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AccountsAccountIdWalletsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.accounts)[':account_id']['wallets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdWalletsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountsAccountIdWalletsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts[':account_id'].wallets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AccountsAccountIdWalletsTransfersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_id']['wallets']['transfers']['$get']>
  >,
) {
  return ['v1', '/v1/accounts/:account_id/wallets/transfers', toValue(args)] as const
}

export function getV1AccountsAccountIdWalletsTransfersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_id']['wallets']['transfers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsAccountIdWalletsTransfersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts[':account_id'].wallets.transfers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountsAccountIdWalletsTransfers<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_id']['wallets']['transfers']['$get']>
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
                    (typeof client.v1.accounts)[':account_id']['wallets']['transfers']['$get']
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
                    (typeof client.v1.accounts)[':account_id']['wallets']['transfers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AccountsAccountIdWalletsTransfersQueryKey>
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
            ReturnType<(typeof client.v1.accounts)[':account_id']['wallets']['transfers']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdWalletsTransfersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountsAccountIdWalletsTransfersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts[':account_id'].wallets.transfers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1AccountsAccountIdWalletsTransfers<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AccountsAccountIdWalletsTransfersMutationOptions<
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

export function getV1AccountsAccountIdWalletsTransfersTransferIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.accounts)[':account_id']['wallets']['transfers'][':transfer_id']['$get']
    >
  >,
) {
  return ['v1', '/v1/accounts/:account_id/wallets/transfers/:transfer_id', toValue(args)] as const
}

export function getV1AccountsAccountIdWalletsTransfersTransferIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.accounts)[':account_id']['wallets']['transfers'][':transfer_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsAccountIdWalletsTransfersTransferIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts[':account_id'].wallets.transfers[':transfer_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountsAccountIdWalletsTransfersTransferId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.accounts)[':account_id']['wallets']['transfers'][':transfer_id']['$get']
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
                    (typeof client.v1.accounts)[':account_id']['wallets']['transfers'][':transfer_id']['$get']
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
                    (typeof client.v1.accounts)[':account_id']['wallets']['transfers'][':transfer_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AccountsAccountIdWalletsTransfersTransferIdQueryKey>
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
              (typeof client.v1.accounts)[':account_id']['wallets']['transfers'][':transfer_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdWalletsTransfersTransferIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountsAccountIdWalletsTransfersTransferIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts[':account_id'].wallets.transfers[':transfer_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AccountsAccountIdWalletsWhitelistsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_id']['wallets']['whitelists']['$get']>
  >,
) {
  return ['v1', '/v1/accounts/:account_id/wallets/whitelists', toValue(args)] as const
}

export function getV1AccountsAccountIdWalletsWhitelistsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_id']['wallets']['whitelists']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsAccountIdWalletsWhitelistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts[':account_id'].wallets.whitelists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountsAccountIdWalletsWhitelists<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account_id']['wallets']['whitelists']['$get']>
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
                    (typeof client.v1.accounts)[':account_id']['wallets']['whitelists']['$get']
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
                    (typeof client.v1.accounts)[':account_id']['wallets']['whitelists']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AccountsAccountIdWalletsWhitelistsQueryKey>
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
            ReturnType<(typeof client.v1.accounts)[':account_id']['wallets']['whitelists']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdWalletsWhitelistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountsAccountIdWalletsWhitelistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts[':account_id'].wallets.whitelists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1AccountsAccountIdWalletsWhitelists<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AccountsAccountIdWalletsWhitelistsMutationOptions<
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

export function useDeleteV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressId<
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
    getDeleteV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdMutationOptions<
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

export function usePatchV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdTravelRuleInfo<
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
    getPatchV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdTravelRuleInfoMutationOptions<
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

export function getV1AccountsActivitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.accounts.activities.$get>>,
) {
  return ['v1', '/v1/accounts/activities', toValue(args)] as const
}

export function getV1AccountsActivitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.accounts.activities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsActivitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts.activities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountsActivities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.activities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.accounts.activities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.activities.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.activities.$get>>>
            >
          >,
          ReturnType<typeof getV1AccountsActivitiesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.activities.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsActivitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountsActivitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts.activities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AccountsActivitiesActivityTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts.activities)[':activity_type']['$get']>
  >,
) {
  return ['v1', '/v1/accounts/activities/:activity_type', toValue(args)] as const
}

export function getV1AccountsActivitiesActivityTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts.activities)[':activity_type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsActivitiesActivityTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts.activities[':activity_type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountsActivitiesActivityType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts.activities)[':activity_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts.activities)[':activity_type']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.accounts.activities)[':activity_type']['$get']>
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
                  ReturnType<(typeof client.v1.accounts.activities)[':activity_type']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AccountsActivitiesActivityTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.accounts.activities)[':activity_type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsActivitiesActivityTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountsActivitiesActivityTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts.activities[':activity_type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AccountsIraExcessContributionsQueryKey() {
  return ['v1', '/v1/accounts/ira_excess_contributions'] as const
}

export function getV1AccountsIraExcessContributionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1AccountsIraExcessContributionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts.ira_excess_contributions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountsIraExcessContributions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.accounts.ira_excess_contributions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.accounts.ira_excess_contributions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.accounts.ira_excess_contributions.$get>>
              >
            >
          >,
          ReturnType<typeof getV1AccountsIraExcessContributionsQueryKey>
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
          Awaited<ReturnType<typeof client.v1.accounts.ira_excess_contributions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsIraExcessContributionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1AccountsIraExcessContributionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts.ira_excess_contributions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AccountsOptionsApprovalsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.accounts.options.approvals.$get>>,
) {
  return ['v1', '/v1/accounts/options/approvals', toValue(args)] as const
}

export function getV1AccountsOptionsApprovalsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.accounts.options.approvals.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsOptionsApprovalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts.options.approvals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountsOptionsApprovals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.options.approvals.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.accounts.options.approvals.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.accounts.options.approvals.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.accounts.options.approvals.$get>>
              >
            >
          >,
          ReturnType<typeof getV1AccountsOptionsApprovalsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.options.approvals.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsOptionsApprovalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountsOptionsApprovalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts.options.approvals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AccountsPositionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.accounts.positions.$get>>,
) {
  return ['v1', '/v1/accounts/positions', toValue(args)] as const
}

export function getV1AccountsPositionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.accounts.positions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsPositionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts.positions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountsPositions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.positions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.accounts.positions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.positions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.positions.$get>>>
            >
          >,
          ReturnType<typeof getV1AccountsPositionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.positions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsPositionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountsPositionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts.positions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1Agreements<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agreements.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.agreements.$post>,
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
  const mutationDefaults = getPostV1AgreementsMutationOptions<TError, TOnMutateResult>(
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

export function getV1AssetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.assets.$get>>,
) {
  return ['v1', '/v1/assets', toValue(args)] as const
}

export function getV1AssetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.assets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AssetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.assets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Assets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.assets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assets.$get>>>>
          >,
          ReturnType<typeof getV1AssetsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1AssetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AssetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.assets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AssetsSymbolOrAssetIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.assets)[':symbol_or_asset_id']['$get']>
  >,
) {
  return ['v1', '/v1/assets/:symbol_or_asset_id', toValue(args)] as const
}

export function getV1AssetsSymbolOrAssetIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.assets)[':symbol_or_asset_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AssetsSymbolOrAssetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.assets[':symbol_or_asset_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AssetsSymbolOrAssetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.assets)[':symbol_or_asset_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.assets)[':symbol_or_asset_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.assets)[':symbol_or_asset_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.assets)[':symbol_or_asset_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AssetsSymbolOrAssetIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.assets)[':symbol_or_asset_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AssetsSymbolOrAssetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AssetsSymbolOrAssetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.assets[':symbol_or_asset_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AssetsEntryRequirementsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.assets)['entry-requirements']['$get']>>,
) {
  return ['v1', '/v1/assets/entry-requirements', toValue(args)] as const
}

export function getV1AssetsEntryRequirementsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.assets)['entry-requirements']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AssetsEntryRequirementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.assets['entry-requirements'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AssetsEntryRequirements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.assets)['entry-requirements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.assets)['entry-requirements']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.assets)['entry-requirements']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.assets)['entry-requirements']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AssetsEntryRequirementsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.assets)['entry-requirements']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AssetsEntryRequirementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AssetsEntryRequirementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.assets['entry-requirements'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AssetsFixedIncomeUsCorporatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.assets.fixed_income.us_corporates.$get>>,
) {
  return ['v1', '/v1/assets/fixed_income/us_corporates', toValue(args)] as const
}

export function getV1AssetsFixedIncomeUsCorporatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.assets.fixed_income.us_corporates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AssetsFixedIncomeUsCorporatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.assets.fixed_income.us_corporates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AssetsFixedIncomeUsCorporates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.assets.fixed_income.us_corporates.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.assets.fixed_income.us_corporates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.assets.fixed_income.us_corporates.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.assets.fixed_income.us_corporates.$get>>
              >
            >
          >,
          ReturnType<typeof getV1AssetsFixedIncomeUsCorporatesQueryKey>
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
          Awaited<ReturnType<typeof client.v1.assets.fixed_income.us_corporates.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AssetsFixedIncomeUsCorporatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AssetsFixedIncomeUsCorporatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.assets.fixed_income.us_corporates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AssetsFixedIncomeUsTreasuriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.assets.fixed_income.us_treasuries.$get>>,
) {
  return ['v1', '/v1/assets/fixed_income/us_treasuries', toValue(args)] as const
}

export function getV1AssetsFixedIncomeUsTreasuriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.assets.fixed_income.us_treasuries.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AssetsFixedIncomeUsTreasuriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.assets.fixed_income.us_treasuries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AssetsFixedIncomeUsTreasuries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.assets.fixed_income.us_treasuries.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.assets.fixed_income.us_treasuries.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.assets.fixed_income.us_treasuries.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.assets.fixed_income.us_treasuries.$get>>
              >
            >
          >,
          ReturnType<typeof getV1AssetsFixedIncomeUsTreasuriesQueryKey>
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
          Awaited<ReturnType<typeof client.v1.assets.fixed_income.us_treasuries.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AssetsFixedIncomeUsTreasuriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AssetsFixedIncomeUsTreasuriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.assets.fixed_income.us_treasuries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1CalendarQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.calendar.$get>>,
) {
  return ['v1', '/v1/calendar', toValue(args)] as const
}

export function getV1CalendarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.calendar.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CalendarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.calendar.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Calendar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.calendar.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.calendar.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.calendar.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.calendar.$get>>>>
          >,
          ReturnType<typeof getV1CalendarQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.calendar.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1CalendarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CalendarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.calendar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1CashInterestAprTiersQueryKey() {
  return ['v1', '/v1/cash_interest/apr_tiers'] as const
}

export function getV1CashInterestAprTiersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1CashInterestAprTiersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.cash_interest.apr_tiers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CashInterestAprTiers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.cash_interest.apr_tiers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.cash_interest.apr_tiers.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.cash_interest.apr_tiers.$get>>
              >
            >
          >,
          ReturnType<typeof getV1CashInterestAprTiersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.cash_interest.apr_tiers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CashInterestAprTiersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1CashInterestAprTiersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.cash_interest.apr_tiers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ClockQueryKey() {
  return ['v1', '/v1/clock'] as const
}

export function getV1ClockQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1ClockQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.clock.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Clock<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clock.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clock.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clock.$get>>>>
          >,
          ReturnType<typeof getV1ClockQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clock.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ClockQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1ClockQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.clock.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1CorporateActionsAnnouncementsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.corporate_actions.announcements.$get>>,
) {
  return ['v1', '/v1/corporate_actions/announcements', toValue(args)] as const
}

export function getV1CorporateActionsAnnouncementsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.corporate_actions.announcements.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CorporateActionsAnnouncementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.corporate_actions.announcements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CorporateActionsAnnouncements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.corporate_actions.announcements.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.corporate_actions.announcements.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.corporate_actions.announcements.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.corporate_actions.announcements.$get>>
              >
            >
          >,
          ReturnType<typeof getV1CorporateActionsAnnouncementsQueryKey>
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
          Awaited<ReturnType<typeof client.v1.corporate_actions.announcements.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CorporateActionsAnnouncementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CorporateActionsAnnouncementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.corporate_actions.announcements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1CorporateActionsAnnouncementsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.corporate_actions.announcements)[':id']['$get']>
  >,
) {
  return ['v1', '/v1/corporate_actions/announcements/:id', toValue(args)] as const
}

export function getV1CorporateActionsAnnouncementsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.corporate_actions.announcements)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CorporateActionsAnnouncementsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.corporate_actions.announcements[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CorporateActionsAnnouncementsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.corporate_actions.announcements)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.corporate_actions.announcements)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.corporate_actions.announcements)[':id']['$get']>
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
                  ReturnType<(typeof client.v1.corporate_actions.announcements)[':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1CorporateActionsAnnouncementsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.corporate_actions.announcements)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CorporateActionsAnnouncementsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CorporateActionsAnnouncementsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.corporate_actions.announcements[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1CountryInfoQueryKey() {
  return ['v1', '/v1/country-info'] as const
}

export function getV1CountryInfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1CountryInfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['country-info'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CountryInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['country-info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['country-info']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['country-info']['$get']>>>
            >
          >,
          ReturnType<typeof getV1CountryInfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['country-info']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CountryInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1CountryInfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['country-info'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1EventsAccountsStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.events.accounts.status.$get>>,
) {
  return ['v1', '/v1/events/accounts/status', toValue(args)] as const
}

export function getV1EventsAccountsStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.events.accounts.status.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EventsAccountsStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.events.accounts.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EventsAccountsStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.accounts.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.events.accounts.status.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.events.accounts.status.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.events.accounts.status.$get>>
              >
            >
          >,
          ReturnType<typeof getV1EventsAccountsStatusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.accounts.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EventsAccountsStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EventsAccountsStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.events.accounts.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1EventsJournalsStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.events.journals.status.$get>>,
) {
  return ['v1', '/v1/events/journals/status', toValue(args)] as const
}

export function getV1EventsJournalsStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.events.journals.status.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EventsJournalsStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.events.journals.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EventsJournalsStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.journals.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.events.journals.status.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.events.journals.status.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.events.journals.status.$get>>
              >
            >
          >,
          ReturnType<typeof getV1EventsJournalsStatusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.journals.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EventsJournalsStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EventsJournalsStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.events.journals.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1EventsNtaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.events.nta.$get>>,
) {
  return ['v1', '/v1/events/nta', toValue(args)] as const
}

export function getV1EventsNtaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.events.nta.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EventsNtaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.events.nta.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EventsNta<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.nta.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.events.nta.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.nta.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.nta.$get>>>>
          >,
          ReturnType<typeof getV1EventsNtaQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.nta.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1EventsNtaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EventsNtaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.events.nta.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1EventsTransfersStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.events.transfers.status.$get>>,
) {
  return ['v1', '/v1/events/transfers/status', toValue(args)] as const
}

export function getV1EventsTransfersStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.events.transfers.status.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EventsTransfersStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.events.transfers.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EventsTransfersStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.transfers.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.events.transfers.status.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.events.transfers.status.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.events.transfers.status.$get>>
              >
            >
          >,
          ReturnType<typeof getV1EventsTransfersStatusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.transfers.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EventsTransfersStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EventsTransfersStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.events.transfers.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FpslAnalyticsAccountIdLoansQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.fpsl.analytics)[':account_id']['loans']['$get']>
  >,
) {
  return ['v1', '/v1/fpsl/analytics/:account_id/loans', toValue(args)] as const
}

export function getV1FpslAnalyticsAccountIdLoansQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.fpsl.analytics)[':account_id']['loans']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FpslAnalyticsAccountIdLoansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.fpsl.analytics[':account_id'].loans.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FpslAnalyticsAccountIdLoans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.fpsl.analytics)[':account_id']['loans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.fpsl.analytics)[':account_id']['loans']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.fpsl.analytics)[':account_id']['loans']['$get']>
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
                  ReturnType<(typeof client.v1.fpsl.analytics)[':account_id']['loans']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1FpslAnalyticsAccountIdLoansQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.fpsl.analytics)[':account_id']['loans']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FpslAnalyticsAccountIdLoansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FpslAnalyticsAccountIdLoansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.fpsl.analytics[':account_id'].loans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FpslLoansQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.fpsl.loans.$get>>,
) {
  return ['v1', '/v1/fpsl/loans', toValue(args)] as const
}

export function getV1FpslLoansQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.fpsl.loans.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FpslLoansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.fpsl.loans.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FpslLoans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.fpsl.loans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.fpsl.loans.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.fpsl.loans.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.fpsl.loans.$get>>>>
          >,
          ReturnType<typeof getV1FpslLoansQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.fpsl.loans.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1FpslLoansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FpslLoansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.fpsl.loans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FpslTiersQueryKey() {
  return ['v1', '/v1/fpsl/tiers'] as const
}

export function getV1FpslTiersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1FpslTiersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.fpsl.tiers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1FpslTiers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.fpsl.tiers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.fpsl.tiers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.fpsl.tiers.$get>>>>
          >,
          ReturnType<typeof getV1FpslTiersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.fpsl.tiers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1FpslTiersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1FpslTiersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.fpsl.tiers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1InstantFundingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.instant_funding.$get>>,
) {
  return ['v1', '/v1/instant_funding', toValue(args)] as const
}

export function getV1InstantFundingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.instant_funding.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1InstantFundingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.instant_funding.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1InstantFunding<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.instant_funding.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.$get>>>
            >
          >,
          ReturnType<typeof getV1InstantFundingQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1InstantFundingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1InstantFundingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.instant_funding.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1InstantFunding<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.instant_funding.$post>,
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
  const mutationDefaults = getPostV1InstantFundingMutationOptions<TError, TOnMutateResult>(
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

export function getV1InstantFundingInstantFundingIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.instant_funding)[':instant_funding_id']['$get']>
  >,
) {
  return ['v1', '/v1/instant_funding/:instant_funding_id', toValue(args)] as const
}

export function getV1InstantFundingInstantFundingIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.instant_funding)[':instant_funding_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1InstantFundingInstantFundingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.instant_funding[':instant_funding_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1InstantFundingInstantFundingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.instant_funding)[':instant_funding_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.instant_funding)[':instant_funding_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.instant_funding)[':instant_funding_id']['$get']>
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
                  ReturnType<(typeof client.v1.instant_funding)[':instant_funding_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1InstantFundingInstantFundingIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.instant_funding)[':instant_funding_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InstantFundingInstantFundingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1InstantFundingInstantFundingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.instant_funding[':instant_funding_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1InstantFundingInstantFundingId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1InstantFundingInstantFundingIdMutationOptions<
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

export function getV1InstantFundingLimitsQueryKey() {
  return ['v1', '/v1/instant_funding/limits'] as const
}

export function getV1InstantFundingLimitsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1InstantFundingLimitsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.instant_funding.limits.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1InstantFundingLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.limits.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.instant_funding.limits.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.instant_funding.limits.$get>>
              >
            >
          >,
          ReturnType<typeof getV1InstantFundingLimitsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.limits.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InstantFundingLimitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1InstantFundingLimitsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.instant_funding.limits.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1InstantFundingLimitsAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.instant_funding.limits.accounts.$get>>,
) {
  return ['v1', '/v1/instant_funding/limits/accounts', toValue(args)] as const
}

export function getV1InstantFundingLimitsAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.instant_funding.limits.accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1InstantFundingLimitsAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.instant_funding.limits.accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1InstantFundingLimitsAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.instant_funding.limits.accounts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.instant_funding.limits.accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.instant_funding.limits.accounts.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.instant_funding.limits.accounts.$get>>
              >
            >
          >,
          ReturnType<typeof getV1InstantFundingLimitsAccountsQueryKey>
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
          Awaited<ReturnType<typeof client.v1.instant_funding.limits.accounts.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InstantFundingLimitsAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1InstantFundingLimitsAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.instant_funding.limits.accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1InstantFundingReportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.instant_funding.reports.$get>>,
) {
  return ['v1', '/v1/instant_funding/reports', toValue(args)] as const
}

export function getV1InstantFundingReportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.instant_funding.reports.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1InstantFundingReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.instant_funding.reports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1InstantFundingReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.reports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.instant_funding.reports.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.instant_funding.reports.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.instant_funding.reports.$get>>
              >
            >
          >,
          ReturnType<typeof getV1InstantFundingReportsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.reports.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InstantFundingReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1InstantFundingReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.instant_funding.reports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1InstantFundingSettlementsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.instant_funding.settlements.$get>>,
) {
  return ['v1', '/v1/instant_funding/settlements', toValue(args)] as const
}

export function getV1InstantFundingSettlementsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.instant_funding.settlements.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1InstantFundingSettlementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.instant_funding.settlements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1InstantFundingSettlements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.settlements.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.instant_funding.settlements.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.instant_funding.settlements.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.instant_funding.settlements.$get>>
              >
            >
          >,
          ReturnType<typeof getV1InstantFundingSettlementsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.instant_funding.settlements.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InstantFundingSettlementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1InstantFundingSettlementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.instant_funding.settlements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1InstantFundingSettlements<
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
                Awaited<ReturnType<typeof client.v1.instant_funding.settlements.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.instant_funding.settlements.$post>,
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
  const mutationDefaults = getPostV1InstantFundingSettlementsMutationOptions<
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

export function getV1InstantFundingSettlementsSettlementIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.instant_funding.settlements)[':settlement_id']['$get']>
  >,
) {
  return ['v1', '/v1/instant_funding/settlements/:settlement_id', toValue(args)] as const
}

export function getV1InstantFundingSettlementsSettlementIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.instant_funding.settlements)[':settlement_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1InstantFundingSettlementsSettlementIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.instant_funding.settlements[':settlement_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1InstantFundingSettlementsSettlementId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.instant_funding.settlements)[':settlement_id']['$get']>
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
                    (typeof client.v1.instant_funding.settlements)[':settlement_id']['$get']
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
                    (typeof client.v1.instant_funding.settlements)[':settlement_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1InstantFundingSettlementsSettlementIdQueryKey>
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
            ReturnType<(typeof client.v1.instant_funding.settlements)[':settlement_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InstantFundingSettlementsSettlementIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1InstantFundingSettlementsSettlementIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.instant_funding.settlements[':settlement_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1IposQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.ipos.$get>>,
) {
  return ['v1', '/v1/ipos', toValue(args)] as const
}

export function getV1IposQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.ipos.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1IposQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.ipos.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Ipos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ipos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.ipos.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ipos.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ipos.$get>>>>
          >,
          ReturnType<typeof getV1IposQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ipos.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1IposQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1IposQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.ipos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1IposOfferingReferenceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.ipos)[':offering_reference']['$get']>>,
) {
  return ['v1', '/v1/ipos/:offering_reference', toValue(args)] as const
}

export function getV1IposOfferingReferenceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.ipos)[':offering_reference']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1IposOfferingReferenceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.ipos[':offering_reference'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1IposOfferingReference<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.ipos)[':offering_reference']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.ipos)[':offering_reference']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.ipos)[':offering_reference']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.ipos)[':offering_reference']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1IposOfferingReferenceQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.ipos)[':offering_reference']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IposOfferingReferenceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1IposOfferingReferenceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.ipos[':offering_reference'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1JitSettlementsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.jit.settlements.$get>>,
) {
  return ['v1', '/v1/jit/settlements', toValue(args)] as const
}

export function getV1JitSettlementsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.jit.settlements.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1JitSettlementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.jit.settlements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1JitSettlements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jit.settlements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.jit.settlements.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.jit.settlements.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.jit.settlements.$get>>>
            >
          >,
          ReturnType<typeof getV1JitSettlementsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jit.settlements.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1JitSettlementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1JitSettlementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.jit.settlements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1JitSettlements<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.jit.settlements.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.jit.settlements.$post>,
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
  const mutationDefaults = getPostV1JitSettlementsMutationOptions<TError, TOnMutateResult>(
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

export function getV1JitSettlementsSettlementIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.jit.settlements)[':settlement_id']['$get']>
  >,
) {
  return ['v1', '/v1/jit/settlements/:settlement_id', toValue(args)] as const
}

export function getV1JitSettlementsSettlementIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.jit.settlements)[':settlement_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1JitSettlementsSettlementIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.jit.settlements[':settlement_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1JitSettlementsSettlementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.jit.settlements)[':settlement_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.jit.settlements)[':settlement_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.jit.settlements)[':settlement_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.jit.settlements)[':settlement_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1JitSettlementsSettlementIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.jit.settlements)[':settlement_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1JitSettlementsSettlementIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1JitSettlementsSettlementIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.jit.settlements[':settlement_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1JournalsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.journals.$get>>,
) {
  return ['v1', '/v1/journals', toValue(args)] as const
}

export function getV1JournalsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.journals.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1JournalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.journals.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Journals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.journals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.journals.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.journals.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.journals.$get>>>>
          >,
          ReturnType<typeof getV1JournalsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.journals.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1JournalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1JournalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.journals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1Journals<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.journals.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.journals.$post>,
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
  const mutationDefaults = getPostV1JournalsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1JournalsJournalIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.journals)[':journal_id']['$get']>>,
) {
  return ['v1', '/v1/journals/:journal_id', toValue(args)] as const
}

export function getV1JournalsJournalIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.journals)[':journal_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1JournalsJournalIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.journals[':journal_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1JournalsJournalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.journals)[':journal_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.journals)[':journal_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.journals)[':journal_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.journals)[':journal_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1JournalsJournalIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.journals)[':journal_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1JournalsJournalIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1JournalsJournalIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.journals[':journal_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1JournalsJournalId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1JournalsJournalIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostV1JournalsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.journals.batch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.journals.batch.$post>,
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
  const mutationDefaults = getPostV1JournalsBatchMutationOptions<TError, TOnMutateResult>(
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

export function usePostV1JournalsReverseBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.journals.reverse_batch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.journals.reverse_batch.$post>,
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
  const mutationDefaults = getPostV1JournalsReverseBatchMutationOptions<TError, TOnMutateResult>(
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

export function usePostV1OauthAuthorize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.authorize.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.oauth.authorize.$post>,
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
  const mutationDefaults = getPostV1OauthAuthorizeMutationOptions<TError, TOnMutateResult>(
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

export function getV1OauthClientsClientIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.oauth.clients)[':client_id']['$get']>>,
) {
  return ['v1', '/v1/oauth/clients/:client_id', toValue(args)] as const
}

export function getV1OauthClientsClientIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.oauth.clients)[':client_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OauthClientsClientIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.oauth.clients[':client_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OauthClientsClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.oauth.clients)[':client_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.oauth.clients)[':client_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.oauth.clients)[':client_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.oauth.clients)[':client_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1OauthClientsClientIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.oauth.clients)[':client_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OauthClientsClientIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OauthClientsClientIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.oauth.clients[':client_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1OauthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.token.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.oauth.token.$post>,
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
  const mutationDefaults = getPostV1OauthTokenMutationOptions<TError, TOnMutateResult>(
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

export function getV1OptionsContractsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.options.contracts.$get>>,
) {
  return ['v1', '/v1/options/contracts', toValue(args)] as const
}

export function getV1OptionsContractsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.options.contracts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OptionsContractsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.options.contracts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OptionsContracts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.options.contracts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.options.contracts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.options.contracts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.options.contracts.$get>>>
            >
          >,
          ReturnType<typeof getV1OptionsContractsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.options.contracts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1OptionsContractsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OptionsContractsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.options.contracts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OptionsContractsSymbolOrIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.options.contracts)[':symbol_or_id']['$get']>
  >,
) {
  return ['v1', '/v1/options/contracts/:symbol_or_id', toValue(args)] as const
}

export function getV1OptionsContractsSymbolOrIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.options.contracts)[':symbol_or_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OptionsContractsSymbolOrIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.options.contracts[':symbol_or_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OptionsContractsSymbolOrId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.options.contracts)[':symbol_or_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.options.contracts)[':symbol_or_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.options.contracts)[':symbol_or_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.options.contracts)[':symbol_or_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1OptionsContractsSymbolOrIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.options.contracts)[':symbol_or_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OptionsContractsSymbolOrIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OptionsContractsSymbolOrIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.options.contracts[':symbol_or_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1RebalancingPortfoliosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.rebalancing.portfolios.$get>>,
) {
  return ['v1', '/v1/rebalancing/portfolios', toValue(args)] as const
}

export function getV1RebalancingPortfoliosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.rebalancing.portfolios.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RebalancingPortfoliosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.rebalancing.portfolios.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1RebalancingPortfolios<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.portfolios.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.rebalancing.portfolios.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.rebalancing.portfolios.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.rebalancing.portfolios.$get>>
              >
            >
          >,
          ReturnType<typeof getV1RebalancingPortfoliosQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.portfolios.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RebalancingPortfoliosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RebalancingPortfoliosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.rebalancing.portfolios.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1RebalancingPortfolios<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.rebalancing.portfolios.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.rebalancing.portfolios.$post>,
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
  const mutationDefaults = getPostV1RebalancingPortfoliosMutationOptions<TError, TOnMutateResult>(
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

export function getV1RebalancingPortfoliosPortfolioIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$get']>
  >,
) {
  return ['v1', '/v1/rebalancing/portfolios/:portfolio_id', toValue(args)] as const
}

export function getV1RebalancingPortfoliosPortfolioIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RebalancingPortfoliosPortfolioIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.rebalancing.portfolios[':portfolio_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1RebalancingPortfoliosPortfolioId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1RebalancingPortfoliosPortfolioIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RebalancingPortfoliosPortfolioIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RebalancingPortfoliosPortfolioIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.rebalancing.portfolios[':portfolio_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1RebalancingPortfoliosPortfolioId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$delete']>,
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
  const mutationDefaults = getDeleteV1RebalancingPortfoliosPortfolioIdMutationOptions<
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

export function usePatchV1RebalancingPortfoliosPortfolioId<
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
                  ReturnType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$patch']>,
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
  const mutationDefaults = getPatchV1RebalancingPortfoliosPortfolioIdMutationOptions<
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

export function getV1RebalancingRunsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.rebalancing.runs.$get>>,
) {
  return ['v1', '/v1/rebalancing/runs', toValue(args)] as const
}

export function getV1RebalancingRunsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.rebalancing.runs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RebalancingRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.rebalancing.runs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1RebalancingRuns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.runs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.rebalancing.runs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.runs.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.runs.$get>>>
            >
          >,
          ReturnType<typeof getV1RebalancingRunsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.runs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1RebalancingRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RebalancingRunsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.rebalancing.runs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1RebalancingRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.runs.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.rebalancing.runs.$post>,
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
  const mutationDefaults = getPostV1RebalancingRunsMutationOptions<TError, TOnMutateResult>(
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

export function getV1RebalancingRunsRunIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.rebalancing.runs)[':run_id']['$get']>>,
) {
  return ['v1', '/v1/rebalancing/runs/:run_id', toValue(args)] as const
}

export function getV1RebalancingRunsRunIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.rebalancing.runs)[':run_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RebalancingRunsRunIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.rebalancing.runs[':run_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1RebalancingRunsRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.rebalancing.runs)[':run_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.rebalancing.runs)[':run_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.rebalancing.runs)[':run_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.rebalancing.runs)[':run_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1RebalancingRunsRunIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.rebalancing.runs)[':run_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RebalancingRunsRunIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RebalancingRunsRunIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.rebalancing.runs[':run_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1RebalancingRunsRunId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1RebalancingRunsRunIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1RebalancingSubscriptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.rebalancing.subscriptions.$get>>,
) {
  return ['v1', '/v1/rebalancing/subscriptions', toValue(args)] as const
}

export function getV1RebalancingSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.rebalancing.subscriptions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RebalancingSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.rebalancing.subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1RebalancingSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.subscriptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.rebalancing.subscriptions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.rebalancing.subscriptions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.rebalancing.subscriptions.$get>>
              >
            >
          >,
          ReturnType<typeof getV1RebalancingSubscriptionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.rebalancing.subscriptions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RebalancingSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RebalancingSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.rebalancing.subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1RebalancingSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1RebalancingSubscriptionsMutationOptions<
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

export function getV1RebalancingSubscriptionsSubscriptionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.rebalancing.subscriptions)[':subscription_id']['$get']>
  >,
) {
  return ['v1', '/v1/rebalancing/subscriptions/:subscription_id', toValue(args)] as const
}

export function getV1RebalancingSubscriptionsSubscriptionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.rebalancing.subscriptions)[':subscription_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RebalancingSubscriptionsSubscriptionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.rebalancing.subscriptions[':subscription_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1RebalancingSubscriptionsSubscriptionId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.rebalancing.subscriptions)[':subscription_id']['$get']>
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
                    (typeof client.v1.rebalancing.subscriptions)[':subscription_id']['$get']
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
                    (typeof client.v1.rebalancing.subscriptions)[':subscription_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1RebalancingSubscriptionsSubscriptionIdQueryKey>
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
            ReturnType<(typeof client.v1.rebalancing.subscriptions)[':subscription_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RebalancingSubscriptionsSubscriptionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RebalancingSubscriptionsSubscriptionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.rebalancing.subscriptions[':subscription_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1RebalancingSubscriptionsSubscriptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1RebalancingSubscriptionsSubscriptionIdMutationOptions<
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

export function getV1ReportingEodAggregatePositionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reporting.eod.aggregate_positions.$get>>,
) {
  return ['v1', '/v1/reporting/eod/aggregate_positions', toValue(args)] as const
}

export function getV1ReportingEodAggregatePositionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reporting.eod.aggregate_positions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ReportingEodAggregatePositionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.reporting.eod.aggregate_positions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ReportingEodAggregatePositions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.reporting.eod.aggregate_positions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reporting.eod.aggregate_positions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.reporting.eod.aggregate_positions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.reporting.eod.aggregate_positions.$get>>
              >
            >
          >,
          ReturnType<typeof getV1ReportingEodAggregatePositionsQueryKey>
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
          Awaited<ReturnType<typeof client.v1.reporting.eod.aggregate_positions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReportingEodAggregatePositionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ReportingEodAggregatePositionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.reporting.eod.aggregate_positions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ReportingEodCashInterestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reporting.eod.cash_interest.$get>>,
) {
  return ['v1', '/v1/reporting/eod/cash_interest', toValue(args)] as const
}

export function getV1ReportingEodCashInterestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reporting.eod.cash_interest.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ReportingEodCashInterestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.reporting.eod.cash_interest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ReportingEodCashInterest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.eod.cash_interest.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reporting.eod.cash_interest.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.reporting.eod.cash_interest.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.reporting.eod.cash_interest.$get>>
              >
            >
          >,
          ReturnType<typeof getV1ReportingEodCashInterestQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.eod.cash_interest.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReportingEodCashInterestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ReportingEodCashInterestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.reporting.eod.cash_interest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ReportingEodPositionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reporting.eod.positions.$get>>,
) {
  return ['v1', '/v1/reporting/eod/positions', toValue(args)] as const
}

export function getV1ReportingEodPositionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reporting.eod.positions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ReportingEodPositionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.reporting.eod.positions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ReportingEodPositions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.eod.positions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reporting.eod.positions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.reporting.eod.positions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.reporting.eod.positions.$get>>
              >
            >
          >,
          ReturnType<typeof getV1ReportingEodPositionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.eod.positions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReportingEodPositionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ReportingEodPositionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.reporting.eod.positions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1TestingIncomingWires<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.testing.incoming_wires.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.testing.incoming_wires.$post>,
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
  const mutationDefaults = getPostV1TestingIncomingWiresMutationOptions<TError, TOnMutateResult>(
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

export function getV1TradingAccountsAccountIdAccountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['account']['$get']>
  >,
) {
  return ['v1', '/v1/trading/accounts/:account_id/account', toValue(args)] as const
}

export function getV1TradingAccountsAccountIdAccountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['account']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TradingAccountsAccountIdAccountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.trading.accounts[':account_id'].account.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TradingAccountsAccountIdAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.trading.accounts)[':account_id']['account']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['account']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.trading.accounts)[':account_id']['account']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1TradingAccountsAccountIdAccountQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.trading.accounts)[':account_id']['account']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TradingAccountsAccountIdAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TradingAccountsAccountIdAccountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.trading.accounts[':account_id'].account.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchV1TradingAccountsAccountIdAccountConfigurations<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1TradingAccountsAccountIdAccountConfigurationsMutationOptions<
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

export function getV1TradingAccountsAccountIdAccountPortfolioHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['account']['portfolio']['history']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/trading/accounts/:account_id/account/portfolio/history',
    toValue(args),
  ] as const
}

export function getV1TradingAccountsAccountIdAccountPortfolioHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['account']['portfolio']['history']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TradingAccountsAccountIdAccountPortfolioHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.trading.accounts[':account_id'].account.portfolio.history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TradingAccountsAccountIdAccountPortfolioHistory<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['account']['portfolio']['history']['$get']
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
                    (typeof client.v1.trading.accounts)[':account_id']['account']['portfolio']['history']['$get']
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
                    (typeof client.v1.trading.accounts)[':account_id']['account']['portfolio']['history']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1TradingAccountsAccountIdAccountPortfolioHistoryQueryKey>
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
              (typeof client.v1.trading.accounts)[':account_id']['account']['portfolio']['history']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TradingAccountsAccountIdAccountPortfolioHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TradingAccountsAccountIdAccountPortfolioHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.trading.accounts[':account_id'].account.portfolio.history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TradingAccountsAccountIdLimitsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['limits']['$get']>
  >,
) {
  return ['v1', '/v1/trading/accounts/:account_id/limits', toValue(args)] as const
}

export function getV1TradingAccountsAccountIdLimitsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['limits']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TradingAccountsAccountIdLimitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.trading.accounts[':account_id'].limits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TradingAccountsAccountIdLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.trading.accounts)[':account_id']['limits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['limits']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.trading.accounts)[':account_id']['limits']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1TradingAccountsAccountIdLimitsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.trading.accounts)[':account_id']['limits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TradingAccountsAccountIdLimitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TradingAccountsAccountIdLimitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.trading.accounts[':account_id'].limits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TradingAccountsAccountIdOrdersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$get']>
  >,
) {
  return ['v1', '/v1/trading/accounts/:account_id/orders', toValue(args)] as const
}

export function getV1TradingAccountsAccountIdOrdersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TradingAccountsAccountIdOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.trading.accounts[':account_id'].orders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TradingAccountsAccountIdOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1TradingAccountsAccountIdOrdersQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TradingAccountsAccountIdOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TradingAccountsAccountIdOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.trading.accounts[':account_id'].orders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1TradingAccountsAccountIdOrders<
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
                  ReturnType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$post']>,
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
  const mutationDefaults = getPostV1TradingAccountsAccountIdOrdersMutationOptions<
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

export function useDeleteV1TradingAccountsAccountIdOrders<
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
                    (typeof client.v1.trading.accounts)[':account_id']['orders']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$delete']>,
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
  const mutationDefaults = getDeleteV1TradingAccountsAccountIdOrdersMutationOptions<
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

export function getV1TradingAccountsAccountIdOrdersOrderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['orders'][':order_id']['$get']
    >
  >,
) {
  return ['v1', '/v1/trading/accounts/:account_id/orders/:order_id', toValue(args)] as const
}

export function getV1TradingAccountsAccountIdOrdersOrderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['orders'][':order_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TradingAccountsAccountIdOrdersOrderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.trading.accounts[':account_id'].orders[':order_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TradingAccountsAccountIdOrdersOrderId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['orders'][':order_id']['$get']
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
                    (typeof client.v1.trading.accounts)[':account_id']['orders'][':order_id']['$get']
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
                    (typeof client.v1.trading.accounts)[':account_id']['orders'][':order_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1TradingAccountsAccountIdOrdersOrderIdQueryKey>
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
              (typeof client.v1.trading.accounts)[':account_id']['orders'][':order_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TradingAccountsAccountIdOrdersOrderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TradingAccountsAccountIdOrdersOrderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.trading.accounts[':account_id'].orders[':order_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1TradingAccountsAccountIdOrdersOrderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1TradingAccountsAccountIdOrdersOrderIdMutationOptions<
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

export function usePatchV1TradingAccountsAccountIdOrdersOrderId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1TradingAccountsAccountIdOrdersOrderIdMutationOptions<
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

export function usePostV1TradingAccountsAccountIdOrdersEstimation<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1TradingAccountsAccountIdOrdersEstimationMutationOptions<
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

export function getV1TradingAccountsAccountIdOrdersByClientOrderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['orders:by_client_order_id']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/trading/accounts/:account_id/orders:by_client_order_id',
    toValue(args),
  ] as const
}

export function getV1TradingAccountsAccountIdOrdersByClientOrderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['orders:by_client_order_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TradingAccountsAccountIdOrdersByClientOrderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.trading.accounts[':account_id']['orders:by_client_order_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TradingAccountsAccountIdOrdersByClientOrderId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['orders:by_client_order_id']['$get']
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
                    (typeof client.v1.trading.accounts)[':account_id']['orders:by_client_order_id']['$get']
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
                    (typeof client.v1.trading.accounts)[':account_id']['orders:by_client_order_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1TradingAccountsAccountIdOrdersByClientOrderIdQueryKey>
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
              (typeof client.v1.trading.accounts)[':account_id']['orders:by_client_order_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TradingAccountsAccountIdOrdersByClientOrderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TradingAccountsAccountIdOrdersByClientOrderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.trading.accounts[':account_id']['orders:by_client_order_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1TradingAccountsAccountIdPositionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['positions']['$get']>
  >,
) {
  return ['v1', '/v1/trading/accounts/:account_id/positions', toValue(args)] as const
}

export function getV1TradingAccountsAccountIdPositionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['positions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TradingAccountsAccountIdPositionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.trading.accounts[':account_id'].positions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TradingAccountsAccountIdPositions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.trading.accounts)[':account_id']['positions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['positions']['$get']>
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
                    (typeof client.v1.trading.accounts)[':account_id']['positions']['$get']
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
                    (typeof client.v1.trading.accounts)[':account_id']['positions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1TradingAccountsAccountIdPositionsQueryKey>
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
            ReturnType<(typeof client.v1.trading.accounts)[':account_id']['positions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TradingAccountsAccountIdPositionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TradingAccountsAccountIdPositionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.trading.accounts[':account_id'].positions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1TradingAccountsAccountIdPositions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1TradingAccountsAccountIdPositionsMutationOptions<
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

export function getV1TradingAccountsAccountIdPositionsSymbolOrAssetIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_asset_id']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/trading/accounts/:account_id/positions/:symbol_or_asset_id',
    toValue(args),
  ] as const
}

export function getV1TradingAccountsAccountIdPositionsSymbolOrAssetIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_asset_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TradingAccountsAccountIdPositionsSymbolOrAssetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.trading.accounts[':account_id'].positions[':symbol_or_asset_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1TradingAccountsAccountIdPositionsSymbolOrAssetId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_asset_id']['$get']
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
                    (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_asset_id']['$get']
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
                    (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_asset_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1TradingAccountsAccountIdPositionsSymbolOrAssetIdQueryKey>
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
              (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_asset_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TradingAccountsAccountIdPositionsSymbolOrAssetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TradingAccountsAccountIdPositionsSymbolOrAssetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.trading.accounts[':account_id'].positions[':symbol_or_asset_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1TradingAccountsAccountIdPositionsSymbolOrAssetId<
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
    getDeleteV1TradingAccountsAccountIdPositionsSymbolOrAssetIdMutationOptions<
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

export function usePostV1TradingAccountsAccountIdPositionsSymbolOrContractIdDoNotExercise<
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
    getPostV1TradingAccountsAccountIdPositionsSymbolOrContractIdDoNotExerciseMutationOptions<
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

export function usePostV1TradingAccountsAccountIdPositionsSymbolOrContractIdExercise<
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
    getPostV1TradingAccountsAccountIdPositionsSymbolOrContractIdExerciseMutationOptions<
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

export function getV1TradingAccountsAccountIdWatchlistsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['watchlists']['$get']>
  >,
) {
  return ['v1', '/v1/trading/accounts/:account_id/watchlists', toValue(args)] as const
}

export function getV1TradingAccountsAccountIdWatchlistsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['watchlists']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TradingAccountsAccountIdWatchlistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.trading.accounts[':account_id'].watchlists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TradingAccountsAccountIdWatchlists<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['watchlists']['$get']>
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
                    (typeof client.v1.trading.accounts)[':account_id']['watchlists']['$get']
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
                    (typeof client.v1.trading.accounts)[':account_id']['watchlists']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1TradingAccountsAccountIdWatchlistsQueryKey>
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
            ReturnType<(typeof client.v1.trading.accounts)[':account_id']['watchlists']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TradingAccountsAccountIdWatchlistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TradingAccountsAccountIdWatchlistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.trading.accounts[':account_id'].watchlists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1TradingAccountsAccountIdWatchlists<
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
                    (typeof client.v1.trading.accounts)[':account_id']['watchlists']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.trading.accounts)[':account_id']['watchlists']['$post']
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
  const mutationDefaults = getPostV1TradingAccountsAccountIdWatchlistsMutationOptions<
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

export function getV1TradingAccountsAccountIdWatchlistsWatchlistIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$get']
    >
  >,
) {
  return ['v1', '/v1/trading/accounts/:account_id/watchlists/:watchlist_id', toValue(args)] as const
}

export function getV1TradingAccountsAccountIdWatchlistsWatchlistIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TradingAccountsAccountIdWatchlistsWatchlistIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.trading.accounts[':account_id'].watchlists[':watchlist_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TradingAccountsAccountIdWatchlistsWatchlistId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$get']
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
                    (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$get']
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
                    (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1TradingAccountsAccountIdWatchlistsWatchlistIdQueryKey>
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
              (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TradingAccountsAccountIdWatchlistsWatchlistIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TradingAccountsAccountIdWatchlistsWatchlistIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.trading.accounts[':account_id'].watchlists[':watchlist_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutV1TradingAccountsAccountIdWatchlistsWatchlistId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1TradingAccountsAccountIdWatchlistsWatchlistIdMutationOptions<
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

export function usePostV1TradingAccountsAccountIdWatchlistsWatchlistId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1TradingAccountsAccountIdWatchlistsWatchlistIdMutationOptions<
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

export function useDeleteV1TradingAccountsAccountIdWatchlistsWatchlistId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1TradingAccountsAccountIdWatchlistsWatchlistIdMutationOptions<
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

export function useDeleteV1TradingAccountsAccountIdWatchlistsWatchlistIdSymbol<
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
    getDeleteV1TradingAccountsAccountIdWatchlistsWatchlistIdSymbolMutationOptions<
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

export function getV1TransfersJitLedgerIdBalancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.transfers.jit)[':ledger_id']['balances']['$get']>
  >,
) {
  return ['v1', '/v1/transfers/jit/:ledger_id/balances', toValue(args)] as const
}

export function getV1TransfersJitLedgerIdBalancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.transfers.jit)[':ledger_id']['balances']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TransfersJitLedgerIdBalancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.transfers.jit[':ledger_id'].balances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TransfersJitLedgerIdBalances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.transfers.jit)[':ledger_id']['balances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.transfers.jit)[':ledger_id']['balances']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.transfers.jit)[':ledger_id']['balances']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1TransfersJitLedgerIdBalancesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.transfers.jit)[':ledger_id']['balances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransfersJitLedgerIdBalancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TransfersJitLedgerIdBalancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.transfers.jit[':ledger_id'].balances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TransfersJitLedgersQueryKey() {
  return ['v1', '/v1/transfers/jit/ledgers'] as const
}

export function getV1TransfersJitLedgersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1TransfersJitLedgersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.transfers.jit.ledgers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TransfersJitLedgers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.ledgers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.ledgers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.ledgers.$get>>>
            >
          >,
          ReturnType<typeof getV1TransfersJitLedgersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.ledgers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransfersJitLedgersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1TransfersJitLedgersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.transfers.jit.ledgers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TransfersJitLimitsQueryKey() {
  return ['v1', '/v1/transfers/jit/limits'] as const
}

export function getV1TransfersJitLimitsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1TransfersJitLimitsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.transfers.jit.limits.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TransfersJitLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.limits.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.limits.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.limits.$get>>>
            >
          >,
          ReturnType<typeof getV1TransfersJitLimitsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.limits.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransfersJitLimitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1TransfersJitLimitsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.transfers.jit.limits.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TransfersJitReportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.transfers.jit.reports.$get>>,
) {
  return ['v1', '/v1/transfers/jit/reports', toValue(args)] as const
}

export function getV1TransfersJitReportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.transfers.jit.reports.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TransfersJitReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.transfers.jit.reports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TransfersJitReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.reports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.transfers.jit.reports.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.reports.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.reports.$get>>>
            >
          >,
          ReturnType<typeof getV1TransfersJitReportsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.jit.reports.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransfersJitReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TransfersJitReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.transfers.jit.reports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WalletsFeesEstimateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.wallets.fees.estimate.$get>>,
) {
  return ['v1', '/v1/wallets/fees/estimate', toValue(args)] as const
}

export function getV1WalletsFeesEstimateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.wallets.fees.estimate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WalletsFeesEstimateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.wallets.fees.estimate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WalletsFeesEstimate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.wallets.fees.estimate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.wallets.fees.estimate.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.wallets.fees.estimate.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.wallets.fees.estimate.$get>>>
            >
          >,
          ReturnType<typeof getV1WalletsFeesEstimateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.wallets.fees.estimate.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WalletsFeesEstimateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WalletsFeesEstimateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.wallets.fees.estimate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WalletsTravelRuleVaspsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.wallets)['travel-rule']['vasps']['$get']>
  >,
) {
  return ['v1', '/v1/wallets/travel-rule/vasps', toValue(args)] as const
}

export function getV1WalletsTravelRuleVaspsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.wallets)['travel-rule']['vasps']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WalletsTravelRuleVaspsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.wallets['travel-rule'].vasps.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WalletsTravelRuleVasps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.wallets)['travel-rule']['vasps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.wallets)['travel-rule']['vasps']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.wallets)['travel-rule']['vasps']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.wallets)['travel-rule']['vasps']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1WalletsTravelRuleVaspsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.wallets)['travel-rule']['vasps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WalletsTravelRuleVaspsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WalletsTravelRuleVaspsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.wallets['travel-rule'].vasps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2beta1AccountsAccountIdEventsActivitiesEventIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1.accounts)[':account_id']['events']['activities'][':event_id']['$get']
    >
  >,
) {
  return [
    'v2beta1',
    '/v2beta1/accounts/:account_id/events/activities/:event_id',
    toValue(args),
  ] as const
}

export function getV2beta1AccountsAccountIdEventsActivitiesEventIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1.accounts)[':account_id']['events']['activities'][':event_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2beta1AccountsAccountIdEventsActivitiesEventIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta1.accounts[':account_id'].events.activities[':event_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2beta1AccountsAccountIdEventsActivitiesEventId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2beta1.accounts)[':account_id']['events']['activities'][':event_id']['$get']
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
                    (typeof client.v2beta1.accounts)[':account_id']['events']['activities'][':event_id']['$get']
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
                    (typeof client.v2beta1.accounts)[':account_id']['events']['activities'][':event_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2beta1AccountsAccountIdEventsActivitiesEventIdQueryKey>
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
              (typeof client.v2beta1.accounts)[':account_id']['events']['activities'][':event_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1AccountsAccountIdEventsActivitiesEventIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2beta1AccountsAccountIdEventsActivitiesEventIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta1.accounts[':account_id'].events.activities[':event_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV2beta1EventsActivitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2beta1.events.activities.$get>>,
) {
  return ['v2beta1', '/v2beta1/events/activities', toValue(args)] as const
}

export function getV2beta1EventsActivitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2beta1.events.activities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2beta1EventsActivitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta1.events.activities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2beta1EventsActivities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2beta1.events.activities.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2beta1.events.activities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2beta1.events.activities.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2beta1.events.activities.$get>>
              >
            >
          >,
          ReturnType<typeof getV2beta1EventsActivitiesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2beta1.events.activities.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1EventsActivitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2beta1EventsActivitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta1.events.activities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CalendarMarketQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.calendar)[':market']['$get']>>,
) {
  return ['v2', '/v2/calendar/:market', toValue(args)] as const
}

export function getV2CalendarMarketQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.calendar)[':market']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CalendarMarketQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.calendar[':market'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CalendarMarket<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.calendar)[':market']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.calendar)[':market']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.calendar)[':market']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.calendar)[':market']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2CalendarMarketQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.calendar)[':market']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CalendarMarketQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CalendarMarketQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.calendar[':market'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ClockQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.clock.$get>>,
) {
  return ['v2', '/v2/clock', toValue(args)] as const
}

export function getV2ClockQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.clock.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ClockQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.clock.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Clock<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clock.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.clock.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clock.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clock.$get>>>>
          >,
          ReturnType<typeof getV2ClockQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clock.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2ClockQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ClockQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.clock.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2EventsAdminActionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.events)['admin-actions']['$get']>>,
) {
  return ['v2', '/v2/events/admin-actions', toValue(args)] as const
}

export function getV2EventsAdminActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.events)['admin-actions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EventsAdminActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.events['admin-actions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EventsAdminActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.events)['admin-actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.events)['admin-actions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.events)['admin-actions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.events)['admin-actions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2EventsAdminActionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.events)['admin-actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EventsAdminActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EventsAdminActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.events['admin-actions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2EventsFundingStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.events.funding.status.$get>>,
) {
  return ['v2', '/v2/events/funding/status', toValue(args)] as const
}

export function getV2EventsFundingStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.events.funding.status.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EventsFundingStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.events.funding.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EventsFundingStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.funding.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.events.funding.status.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.funding.status.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.funding.status.$get>>>
            >
          >,
          ReturnType<typeof getV2EventsFundingStatusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.funding.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EventsFundingStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EventsFundingStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.events.funding.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2EventsIposQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.events.ipos.$get>>,
) {
  return ['v2', '/v2/events/ipos', toValue(args)] as const
}

export function getV2EventsIposQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.events.ipos.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EventsIposQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.events.ipos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EventsIpos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.ipos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.events.ipos.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.ipos.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.ipos.$get>>>>
          >,
          ReturnType<typeof getV2EventsIposQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.ipos.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2EventsIposQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EventsIposQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.events.ipos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2EventsJournalsStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.events.journals.status.$get>>,
) {
  return ['v2', '/v2/events/journals/status', toValue(args)] as const
}

export function getV2EventsJournalsStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.events.journals.status.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EventsJournalsStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.events.journals.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EventsJournalsStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.journals.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.events.journals.status.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.events.journals.status.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.events.journals.status.$get>>
              >
            >
          >,
          ReturnType<typeof getV2EventsJournalsStatusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.journals.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EventsJournalsStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EventsJournalsStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.events.journals.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2EventsRebalancerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.events.rebalancer.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v2', '/v2/events/rebalancer', keyArgs] as const
}

export function getV2EventsRebalancerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.events.rebalancer.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EventsRebalancerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.events.rebalancer.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EventsRebalancer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.rebalancer.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.events.rebalancer.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.rebalancer.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.rebalancer.$get>>>
            >
          >,
          ReturnType<typeof getV2EventsRebalancerQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.rebalancer.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2EventsRebalancerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EventsRebalancerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.events.rebalancer.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2EventsSystemQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.events.system.$get>>,
) {
  return ['v2', '/v2/events/system', toValue(args)] as const
}

export function getV2EventsSystemQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.events.system.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EventsSystemQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.events.system.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EventsSystem<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.system.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.events.system.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.system.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.system.$get>>>
            >
          >,
          ReturnType<typeof getV2EventsSystemQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.system.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2EventsSystemQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EventsSystemQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.events.system.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2EventsTradesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.events.trades.$get>>,
) {
  return ['v2', '/v2/events/trades', toValue(args)] as const
}

export function getV2EventsTradesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.events.trades.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EventsTradesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.events.trades.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EventsTrades<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.trades.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.events.trades.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.trades.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.trades.$get>>>
            >
          >,
          ReturnType<typeof getV2EventsTradesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.events.trades.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2EventsTradesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EventsTradesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.events.trades.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
