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

export function getPostAccountHoldersMutationKey() {
  return ['accountHolders', '/accountHolders', 'POST'] as const
}

export function getPostAccountHoldersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accountHolders.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.accountHolders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountHoldersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accountHolders.$post>) {
      return parseResponse(client.accountHolders.$post(args, options))
    },
  })
}

export function usePostAccountHolders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accountHolders.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.accountHolders.$post>,
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
  const mutationDefaults = getPostAccountHoldersMutationOptions<TError, TOnMutateResult>(
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

export function getAccountHoldersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accountHolders)[':id']['$get']>>,
) {
  return ['accountHolders', '/accountHolders/:id', toValue(args)] as const
}

export function getAccountHoldersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accountHolders)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountHoldersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accountHolders[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountHoldersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accountHolders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accountHolders)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accountHolders)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accountHolders)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountHoldersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.accountHolders)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountHoldersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountHoldersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accountHolders[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchAccountHoldersIdMutationKey() {
  return ['accountHolders', '/accountHolders/:id', 'PATCH'] as const
}

export function getPatchAccountHoldersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accountHolders)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.accountHolders)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountHoldersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.accountHolders)[':id']['$patch']>) {
      return parseResponse(client.accountHolders[':id'].$patch(args, options))
    },
  })
}

export function usePatchAccountHoldersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accountHolders)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accountHolders)[':id']['$patch']>,
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
  const mutationDefaults = getPatchAccountHoldersIdMutationOptions<TError, TOnMutateResult>(
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

export function getAccountHoldersIdBalanceAccountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accountHolders)[':id']['balanceAccounts']['$get']>
  >,
) {
  return ['accountHolders', '/accountHolders/:id/balanceAccounts', toValue(args)] as const
}

export function getAccountHoldersIdBalanceAccountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accountHolders)[':id']['balanceAccounts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountHoldersIdBalanceAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accountHolders[':id'].balanceAccounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountHoldersIdBalanceAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accountHolders)[':id']['balanceAccounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accountHolders)[':id']['balanceAccounts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accountHolders)[':id']['balanceAccounts']['$get']>
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
                  ReturnType<(typeof client.accountHolders)[':id']['balanceAccounts']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountHoldersIdBalanceAccountsQueryKey>
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
          Awaited<ReturnType<(typeof client.accountHolders)[':id']['balanceAccounts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountHoldersIdBalanceAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountHoldersIdBalanceAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accountHolders[':id'].balanceAccounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountHoldersIdTaxFormsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accountHolders)[':id']['taxForms']['$get']>
  >,
) {
  return ['accountHolders', '/accountHolders/:id/taxForms', toValue(args)] as const
}

export function getAccountHoldersIdTaxFormsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accountHolders)[':id']['taxForms']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountHoldersIdTaxFormsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accountHolders[':id'].taxForms.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountHoldersIdTaxForms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accountHolders)[':id']['taxForms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accountHolders)[':id']['taxForms']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accountHolders)[':id']['taxForms']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accountHolders)[':id']['taxForms']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountHoldersIdTaxFormsQueryKey>
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
          Awaited<ReturnType<(typeof client.accountHolders)[':id']['taxForms']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountHoldersIdTaxFormsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountHoldersIdTaxFormsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accountHolders[':id'].taxForms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountHoldersIdTransactionRulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accountHolders)[':id']['transactionRules']['$get']>
  >,
) {
  return ['accountHolders', '/accountHolders/:id/transactionRules', toValue(args)] as const
}

export function getAccountHoldersIdTransactionRulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accountHolders)[':id']['transactionRules']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountHoldersIdTransactionRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accountHolders[':id'].transactionRules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountHoldersIdTransactionRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accountHolders)[':id']['transactionRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accountHolders)[':id']['transactionRules']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accountHolders)[':id']['transactionRules']['$get']>
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
                  ReturnType<(typeof client.accountHolders)[':id']['transactionRules']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountHoldersIdTransactionRulesQueryKey>
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
          Awaited<ReturnType<(typeof client.accountHolders)[':id']['transactionRules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountHoldersIdTransactionRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountHoldersIdTransactionRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accountHolders[':id'].transactionRules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBalanceAccountsMutationKey() {
  return ['balanceAccounts', '/balanceAccounts', 'POST'] as const
}

export function getPostBalanceAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balanceAccounts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.balanceAccounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBalanceAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.balanceAccounts.$post>) {
      return parseResponse(client.balanceAccounts.$post(args, options))
    },
  })
}

export function usePostBalanceAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.balanceAccounts.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.balanceAccounts.$post>,
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
  const mutationDefaults = getPostBalanceAccountsMutationOptions<TError, TOnMutateResult>(
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

export function getBalanceAccountsBalanceAccountIdSweepsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.balanceAccounts)[':balanceAccountId']['sweeps']['$get']>
  >,
) {
  return ['balanceAccounts', '/balanceAccounts/:balanceAccountId/sweeps', toValue(args)] as const
}

export function getBalanceAccountsBalanceAccountIdSweepsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.balanceAccounts)[':balanceAccountId']['sweeps']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBalanceAccountsBalanceAccountIdSweepsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.balanceAccounts[':balanceAccountId'].sweeps.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBalanceAccountsBalanceAccountIdSweeps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.balanceAccounts)[':balanceAccountId']['sweeps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.balanceAccounts)[':balanceAccountId']['sweeps']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.balanceAccounts)[':balanceAccountId']['sweeps']['$get']>
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
                  ReturnType<(typeof client.balanceAccounts)[':balanceAccountId']['sweeps']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBalanceAccountsBalanceAccountIdSweepsQueryKey>
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
            ReturnType<(typeof client.balanceAccounts)[':balanceAccountId']['sweeps']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBalanceAccountsBalanceAccountIdSweepsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBalanceAccountsBalanceAccountIdSweepsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.balanceAccounts[':balanceAccountId'].sweeps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBalanceAccountsBalanceAccountIdSweepsMutationKey() {
  return ['balanceAccounts', '/balanceAccounts/:balanceAccountId/sweeps', 'POST'] as const
}

export function getPostBalanceAccountsBalanceAccountIdSweepsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.balanceAccounts)[':balanceAccountId']['sweeps']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBalanceAccountsBalanceAccountIdSweepsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.balanceAccounts)[':balanceAccountId']['sweeps']['$post']
      >,
    ) {
      return parseResponse(client.balanceAccounts[':balanceAccountId'].sweeps.$post(args, options))
    },
  })
}

export function usePostBalanceAccountsBalanceAccountIdSweeps<
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
                    (typeof client.balanceAccounts)[':balanceAccountId']['sweeps']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.balanceAccounts)[':balanceAccountId']['sweeps']['$post']>,
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
  const mutationDefaults = getPostBalanceAccountsBalanceAccountIdSweepsMutationOptions<
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

export function getBalanceAccountsBalanceAccountIdSweepsSweepIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$get']
    >
  >,
) {
  return [
    'balanceAccounts',
    '/balanceAccounts/:balanceAccountId/sweeps/:sweepId',
    toValue(args),
  ] as const
}

export function getBalanceAccountsBalanceAccountIdSweepsSweepIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBalanceAccountsBalanceAccountIdSweepsSweepIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.balanceAccounts[':balanceAccountId'].sweeps[':sweepId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBalanceAccountsBalanceAccountIdSweepsSweepId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$get']
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
                    (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$get']
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
                    (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBalanceAccountsBalanceAccountIdSweepsSweepIdQueryKey>
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
              (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBalanceAccountsBalanceAccountIdSweepsSweepIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBalanceAccountsBalanceAccountIdSweepsSweepIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.balanceAccounts[':balanceAccountId'].sweeps[':sweepId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteBalanceAccountsBalanceAccountIdSweepsSweepIdMutationKey() {
  return [
    'balanceAccounts',
    '/balanceAccounts/:balanceAccountId/sweeps/:sweepId',
    'DELETE',
  ] as const
}

export function getDeleteBalanceAccountsBalanceAccountIdSweepsSweepIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteBalanceAccountsBalanceAccountIdSweepsSweepIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$delete']
      >,
    ) {
      return parseResponse(
        client.balanceAccounts[':balanceAccountId'].sweeps[':sweepId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteBalanceAccountsBalanceAccountIdSweepsSweepId<
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
                      (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$delete']
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
  const mutationDefaults = getDeleteBalanceAccountsBalanceAccountIdSweepsSweepIdMutationOptions<
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

export function getPatchBalanceAccountsBalanceAccountIdSweepsSweepIdMutationKey() {
  return ['balanceAccounts', '/balanceAccounts/:balanceAccountId/sweeps/:sweepId', 'PATCH'] as const
}

export function getPatchBalanceAccountsBalanceAccountIdSweepsSweepIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchBalanceAccountsBalanceAccountIdSweepsSweepIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$patch']
      >,
    ) {
      return parseResponse(
        client.balanceAccounts[':balanceAccountId'].sweeps[':sweepId'].$patch(args, options),
      )
    },
  })
}

export function usePatchBalanceAccountsBalanceAccountIdSweepsSweepId<
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
                    (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$patch']
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
  const mutationDefaults = getPatchBalanceAccountsBalanceAccountIdSweepsSweepIdMutationOptions<
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

export function getBalanceAccountsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.balanceAccounts)[':id']['$get']>>,
) {
  return ['balanceAccounts', '/balanceAccounts/:id', toValue(args)] as const
}

export function getBalanceAccountsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.balanceAccounts)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBalanceAccountsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.balanceAccounts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBalanceAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.balanceAccounts)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBalanceAccountsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBalanceAccountsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBalanceAccountsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.balanceAccounts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchBalanceAccountsIdMutationKey() {
  return ['balanceAccounts', '/balanceAccounts/:id', 'PATCH'] as const
}

export function getPatchBalanceAccountsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.balanceAccounts)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBalanceAccountsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.balanceAccounts)[':id']['$patch']>) {
      return parseResponse(client.balanceAccounts[':id'].$patch(args, options))
    },
  })
}

export function usePatchBalanceAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.balanceAccounts)[':id']['$patch']>,
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
  const mutationDefaults = getPatchBalanceAccountsIdMutationOptions<TError, TOnMutateResult>(
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

export function getBalanceAccountsIdPaymentInstrumentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.balanceAccounts)[':id']['paymentInstruments']['$get']>
  >,
) {
  return ['balanceAccounts', '/balanceAccounts/:id/paymentInstruments', toValue(args)] as const
}

export function getBalanceAccountsIdPaymentInstrumentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.balanceAccounts)[':id']['paymentInstruments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBalanceAccountsIdPaymentInstrumentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.balanceAccounts[':id'].paymentInstruments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBalanceAccountsIdPaymentInstruments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['paymentInstruments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.balanceAccounts)[':id']['paymentInstruments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.balanceAccounts)[':id']['paymentInstruments']['$get']>
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
                  ReturnType<(typeof client.balanceAccounts)[':id']['paymentInstruments']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBalanceAccountsIdPaymentInstrumentsQueryKey>
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
          Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['paymentInstruments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBalanceAccountsIdPaymentInstrumentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBalanceAccountsIdPaymentInstrumentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.balanceAccounts[':id'].paymentInstruments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBalanceAccountsIdTransactionRulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.balanceAccounts)[':id']['transactionRules']['$get']>
  >,
) {
  return ['balanceAccounts', '/balanceAccounts/:id/transactionRules', toValue(args)] as const
}

export function getBalanceAccountsIdTransactionRulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.balanceAccounts)[':id']['transactionRules']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBalanceAccountsIdTransactionRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.balanceAccounts[':id'].transactionRules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBalanceAccountsIdTransactionRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['transactionRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.balanceAccounts)[':id']['transactionRules']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.balanceAccounts)[':id']['transactionRules']['$get']>
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
                  ReturnType<(typeof client.balanceAccounts)[':id']['transactionRules']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBalanceAccountsIdTransactionRulesQueryKey>
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
          Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['transactionRules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBalanceAccountsIdTransactionRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBalanceAccountsIdTransactionRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.balanceAccounts[':id'].transactionRules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBalancePlatformsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.balancePlatforms)[':id']['$get']>>,
) {
  return ['balancePlatforms', '/balancePlatforms/:id', toValue(args)] as const
}

export function getBalancePlatformsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.balancePlatforms)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBalancePlatformsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.balancePlatforms[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBalancePlatformsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.balancePlatforms)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBalancePlatformsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBalancePlatformsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBalancePlatformsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.balancePlatforms[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBalancePlatformsIdAccountHoldersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.balancePlatforms)[':id']['accountHolders']['$get']>
  >,
) {
  return ['balancePlatforms', '/balancePlatforms/:id/accountHolders', toValue(args)] as const
}

export function getBalancePlatformsIdAccountHoldersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.balancePlatforms)[':id']['accountHolders']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBalancePlatformsIdAccountHoldersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.balancePlatforms[':id'].accountHolders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBalancePlatformsIdAccountHolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['accountHolders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.balancePlatforms)[':id']['accountHolders']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.balancePlatforms)[':id']['accountHolders']['$get']>
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
                  ReturnType<(typeof client.balancePlatforms)[':id']['accountHolders']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBalancePlatformsIdAccountHoldersQueryKey>
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
          Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['accountHolders']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBalancePlatformsIdAccountHoldersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBalancePlatformsIdAccountHoldersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.balancePlatforms[':id'].accountHolders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBalancePlatformsIdTransactionRulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.balancePlatforms)[':id']['transactionRules']['$get']>
  >,
) {
  return ['balancePlatforms', '/balancePlatforms/:id/transactionRules', toValue(args)] as const
}

export function getBalancePlatformsIdTransactionRulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.balancePlatforms)[':id']['transactionRules']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBalancePlatformsIdTransactionRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.balancePlatforms[':id'].transactionRules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBalancePlatformsIdTransactionRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['transactionRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.balancePlatforms)[':id']['transactionRules']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.balancePlatforms)[':id']['transactionRules']['$get']>
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
                  ReturnType<(typeof client.balancePlatforms)[':id']['transactionRules']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBalancePlatformsIdTransactionRulesQueryKey>
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
          Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['transactionRules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBalancePlatformsIdTransactionRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBalancePlatformsIdTransactionRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.balancePlatforms[':id'].transactionRules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCardordersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cardorders.$get>>,
) {
  return ['cardorders', '/cardorders', toValue(args)] as const
}

export function getCardordersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cardorders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardordersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cardorders.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCardorders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cardorders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cardorders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cardorders.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cardorders.$get>>>>
          >,
          ReturnType<typeof getCardordersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cardorders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCardordersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardordersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cardorders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCardordersIdItemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cardorders)[':id']['items']['$get']>>,
) {
  return ['cardorders', '/cardorders/:id/items', toValue(args)] as const
}

export function getCardordersIdItemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cardorders)[':id']['items']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardordersIdItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cardorders[':id'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardordersIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cardorders)[':id']['items']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cardorders)[':id']['items']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cardorders)[':id']['items']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cardorders)[':id']['items']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCardordersIdItemsQueryKey>
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
          Awaited<ReturnType<(typeof client.cardorders)[':id']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardordersIdItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardordersIdItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cardorders[':id'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGrantAccountsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.grantAccounts)[':id']['$get']>>,
) {
  return ['grantAccounts', '/grantAccounts/:id', toValue(args)] as const
}

export function getGrantAccountsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.grantAccounts)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGrantAccountsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.grantAccounts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGrantAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.grantAccounts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.grantAccounts)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.grantAccounts)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.grantAccounts)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGrantAccountsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.grantAccounts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGrantAccountsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGrantAccountsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.grantAccounts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGrantOffersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.grantOffers.$get>>,
) {
  return ['grantOffers', '/grantOffers', toValue(args)] as const
}

export function getGrantOffersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.grantOffers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGrantOffersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.grantOffers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGrantOffers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grantOffers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.grantOffers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grantOffers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grantOffers.$get>>>>
          >,
          ReturnType<typeof getGrantOffersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grantOffers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGrantOffersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGrantOffersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.grantOffers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGrantOffersGrantOfferIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.grantOffers)[':grantOfferId']['$get']>>,
) {
  return ['grantOffers', '/grantOffers/:grantOfferId', toValue(args)] as const
}

export function getGrantOffersGrantOfferIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.grantOffers)[':grantOfferId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGrantOffersGrantOfferIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.grantOffers[':grantOfferId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGrantOffersGrantOfferId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.grantOffers)[':grantOfferId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.grantOffers)[':grantOfferId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.grantOffers)[':grantOfferId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.grantOffers)[':grantOfferId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGrantOffersGrantOfferIdQueryKey>
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
          Awaited<ReturnType<(typeof client.grantOffers)[':grantOfferId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGrantOffersGrantOfferIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGrantOffersGrantOfferIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.grantOffers[':grantOfferId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworkTokensNetworkTokenIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networkTokens)[':networkTokenId']['$get']>
  >,
) {
  return ['networkTokens', '/networkTokens/:networkTokenId', toValue(args)] as const
}

export function getNetworkTokensNetworkTokenIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networkTokens)[':networkTokenId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworkTokensNetworkTokenIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networkTokens[':networkTokenId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworkTokensNetworkTokenId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networkTokens)[':networkTokenId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networkTokens)[':networkTokenId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networkTokens)[':networkTokenId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networkTokens)[':networkTokenId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworkTokensNetworkTokenIdQueryKey>
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
          Awaited<ReturnType<(typeof client.networkTokens)[':networkTokenId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkTokensNetworkTokenIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworkTokensNetworkTokenIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networkTokens[':networkTokenId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchNetworkTokensNetworkTokenIdMutationKey() {
  return ['networkTokens', '/networkTokens/:networkTokenId', 'PATCH'] as const
}

export function getPatchNetworkTokensNetworkTokenIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networkTokens)[':networkTokenId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networkTokens)[':networkTokenId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchNetworkTokensNetworkTokenIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networkTokens)[':networkTokenId']['$patch']>,
    ) {
      return parseResponse(client.networkTokens[':networkTokenId'].$patch(args, options))
    },
  })
}

export function usePatchNetworkTokensNetworkTokenId<
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
                Awaited<ReturnType<(typeof client.networkTokens)[':networkTokenId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networkTokens)[':networkTokenId']['$patch']>,
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
  const mutationDefaults = getPatchNetworkTokensNetworkTokenIdMutationOptions<
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

export function getPostPaymentInstrumentGroupsMutationKey() {
  return ['paymentInstrumentGroups', '/paymentInstrumentGroups', 'POST'] as const
}

export function getPostPaymentInstrumentGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.paymentInstrumentGroups.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.paymentInstrumentGroups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentInstrumentGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.paymentInstrumentGroups.$post>) {
      return parseResponse(client.paymentInstrumentGroups.$post(args, options))
    },
  })
}

export function usePostPaymentInstrumentGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.paymentInstrumentGroups.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.paymentInstrumentGroups.$post>,
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
  const mutationDefaults = getPostPaymentInstrumentGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getPaymentInstrumentGroupsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.paymentInstrumentGroups)[':id']['$get']>>,
) {
  return ['paymentInstrumentGroups', '/paymentInstrumentGroups/:id', toValue(args)] as const
}

export function getPaymentInstrumentGroupsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.paymentInstrumentGroups)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentInstrumentGroupsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.paymentInstrumentGroups[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentInstrumentGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.paymentInstrumentGroups)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.paymentInstrumentGroups)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.paymentInstrumentGroups)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.paymentInstrumentGroups)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPaymentInstrumentGroupsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.paymentInstrumentGroups)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentInstrumentGroupsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentInstrumentGroupsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.paymentInstrumentGroups[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPaymentInstrumentGroupsIdTransactionRulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.paymentInstrumentGroups)[':id']['transactionRules']['$get']>
  >,
) {
  return [
    'paymentInstrumentGroups',
    '/paymentInstrumentGroups/:id/transactionRules',
    toValue(args),
  ] as const
}

export function getPaymentInstrumentGroupsIdTransactionRulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.paymentInstrumentGroups)[':id']['transactionRules']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentInstrumentGroupsIdTransactionRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.paymentInstrumentGroups[':id'].transactionRules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentInstrumentGroupsIdTransactionRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.paymentInstrumentGroups)[':id']['transactionRules']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.paymentInstrumentGroups)[':id']['transactionRules']['$get']>
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
                    (typeof client.paymentInstrumentGroups)[':id']['transactionRules']['$get']
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
                    (typeof client.paymentInstrumentGroups)[':id']['transactionRules']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPaymentInstrumentGroupsIdTransactionRulesQueryKey>
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
            ReturnType<(typeof client.paymentInstrumentGroups)[':id']['transactionRules']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentInstrumentGroupsIdTransactionRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentInstrumentGroupsIdTransactionRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.paymentInstrumentGroups[':id'].transactionRules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPaymentInstrumentsMutationKey() {
  return ['paymentInstruments', '/paymentInstruments', 'POST'] as const
}

export function getPostPaymentInstrumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentInstruments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.paymentInstruments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentInstrumentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.paymentInstruments.$post>) {
      return parseResponse(client.paymentInstruments.$post(args, options))
    },
  })
}

export function usePostPaymentInstruments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.paymentInstruments.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.paymentInstruments.$post>,
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
  const mutationDefaults = getPostPaymentInstrumentsMutationOptions<TError, TOnMutateResult>(
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

export function getPostPaymentInstrumentsRevealMutationKey() {
  return ['paymentInstruments', '/paymentInstruments/reveal', 'POST'] as const
}

export function getPostPaymentInstrumentsRevealMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.paymentInstruments.reveal.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.paymentInstruments.reveal.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentInstrumentsRevealMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.paymentInstruments.reveal.$post>) {
      return parseResponse(client.paymentInstruments.reveal.$post(args, options))
    },
  })
}

export function usePostPaymentInstrumentsReveal<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.paymentInstruments.reveal.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.paymentInstruments.reveal.$post>,
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
  const mutationDefaults = getPostPaymentInstrumentsRevealMutationOptions<TError, TOnMutateResult>(
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

export function getPaymentInstrumentsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.paymentInstruments)[':id']['$get']>>,
) {
  return ['paymentInstruments', '/paymentInstruments/:id', toValue(args)] as const
}

export function getPaymentInstrumentsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.paymentInstruments)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentInstrumentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.paymentInstruments[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentInstrumentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.paymentInstruments)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPaymentInstrumentsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentInstrumentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentInstrumentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.paymentInstruments[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchPaymentInstrumentsIdMutationKey() {
  return ['paymentInstruments', '/paymentInstruments/:id', 'PATCH'] as const
}

export function getPatchPaymentInstrumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.paymentInstruments)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPaymentInstrumentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.paymentInstruments)[':id']['$patch']>) {
      return parseResponse(client.paymentInstruments[':id'].$patch(args, options))
    },
  })
}

export function usePatchPaymentInstrumentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.paymentInstruments)[':id']['$patch']>,
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
  const mutationDefaults = getPatchPaymentInstrumentsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPaymentInstrumentsIdNetworkTokenActivationDataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.paymentInstruments)[':id']['networkTokenActivationData']['$get']
    >
  >,
) {
  return [
    'paymentInstruments',
    '/paymentInstruments/:id/networkTokenActivationData',
    toValue(args),
  ] as const
}

export function getPaymentInstrumentsIdNetworkTokenActivationDataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.paymentInstruments)[':id']['networkTokenActivationData']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentInstrumentsIdNetworkTokenActivationDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.paymentInstruments[':id'].networkTokenActivationData.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentInstrumentsIdNetworkTokenActivationData<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.paymentInstruments)[':id']['networkTokenActivationData']['$get']
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
                    (typeof client.paymentInstruments)[':id']['networkTokenActivationData']['$get']
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
                    (typeof client.paymentInstruments)[':id']['networkTokenActivationData']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPaymentInstrumentsIdNetworkTokenActivationDataQueryKey>
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
              (typeof client.paymentInstruments)[':id']['networkTokenActivationData']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentInstrumentsIdNetworkTokenActivationDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentInstrumentsIdNetworkTokenActivationDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.paymentInstruments[':id'].networkTokenActivationData.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPaymentInstrumentsIdNetworkTokenActivationDataMutationKey() {
  return [
    'paymentInstruments',
    '/paymentInstruments/:id/networkTokenActivationData',
    'POST',
  ] as const
}

export function getPostPaymentInstrumentsIdNetworkTokenActivationDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.paymentInstruments)[':id']['networkTokenActivationData']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentInstrumentsIdNetworkTokenActivationDataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.paymentInstruments)[':id']['networkTokenActivationData']['$post']
      >,
    ) {
      return parseResponse(
        client.paymentInstruments[':id'].networkTokenActivationData.$post(args, options),
      )
    },
  })
}

export function usePostPaymentInstrumentsIdNetworkTokenActivationData<
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
                    (typeof client.paymentInstruments)[':id']['networkTokenActivationData']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.paymentInstruments)[':id']['networkTokenActivationData']['$post']
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
  const mutationDefaults = getPostPaymentInstrumentsIdNetworkTokenActivationDataMutationOptions<
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

export function getPaymentInstrumentsIdNetworkTokensQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.paymentInstruments)[':id']['networkTokens']['$get']>
  >,
) {
  return ['paymentInstruments', '/paymentInstruments/:id/networkTokens', toValue(args)] as const
}

export function getPaymentInstrumentsIdNetworkTokensQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.paymentInstruments)[':id']['networkTokens']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentInstrumentsIdNetworkTokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.paymentInstruments[':id'].networkTokens.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentInstrumentsIdNetworkTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['networkTokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.paymentInstruments)[':id']['networkTokens']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.paymentInstruments)[':id']['networkTokens']['$get']>
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
                  ReturnType<(typeof client.paymentInstruments)[':id']['networkTokens']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPaymentInstrumentsIdNetworkTokensQueryKey>
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
          Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['networkTokens']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentInstrumentsIdNetworkTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentInstrumentsIdNetworkTokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.paymentInstruments[':id'].networkTokens.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPaymentInstrumentsIdRevealQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.paymentInstruments)[':id']['reveal']['$get']>
  >,
) {
  return ['paymentInstruments', '/paymentInstruments/:id/reveal', toValue(args)] as const
}

export function getPaymentInstrumentsIdRevealQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.paymentInstruments)[':id']['reveal']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentInstrumentsIdRevealQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.paymentInstruments[':id'].reveal.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentInstrumentsIdReveal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['reveal']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.paymentInstruments)[':id']['reveal']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['reveal']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['reveal']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPaymentInstrumentsIdRevealQueryKey>
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
          Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['reveal']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentInstrumentsIdRevealQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentInstrumentsIdRevealQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.paymentInstruments[':id'].reveal.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPaymentInstrumentsIdTransactionRulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.paymentInstruments)[':id']['transactionRules']['$get']>
  >,
) {
  return ['paymentInstruments', '/paymentInstruments/:id/transactionRules', toValue(args)] as const
}

export function getPaymentInstrumentsIdTransactionRulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.paymentInstruments)[':id']['transactionRules']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentInstrumentsIdTransactionRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.paymentInstruments[':id'].transactionRules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentInstrumentsIdTransactionRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['transactionRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.paymentInstruments)[':id']['transactionRules']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.paymentInstruments)[':id']['transactionRules']['$get']>
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
                  ReturnType<(typeof client.paymentInstruments)[':id']['transactionRules']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPaymentInstrumentsIdTransactionRulesQueryKey>
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
          Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['transactionRules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentInstrumentsIdTransactionRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentInstrumentsIdTransactionRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.paymentInstruments[':id'].transactionRules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPinsChangeMutationKey() {
  return ['pins', '/pins/change', 'POST'] as const
}

export function getPostPinsChangeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.change.$post>>>>>,
    TError,
    InferRequestType<typeof client.pins.change.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPinsChangeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pins.change.$post>) {
      return parseResponse(client.pins.change.$post(args, options))
    },
  })
}

export function usePostPinsChange<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.change.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.pins.change.$post>,
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
  const mutationDefaults = getPostPinsChangeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPinsRevealMutationKey() {
  return ['pins', '/pins/reveal', 'POST'] as const
}

export function getPostPinsRevealMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.reveal.$post>>>>>,
    TError,
    InferRequestType<typeof client.pins.reveal.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPinsRevealMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pins.reveal.$post>) {
      return parseResponse(client.pins.reveal.$post(args, options))
    },
  })
}

export function usePostPinsReveal<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.reveal.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.pins.reveal.$post>,
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
  const mutationDefaults = getPostPinsRevealMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPublicKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.publicKey.$get>>,
) {
  return ['publicKey', '/publicKey', toValue(args)] as const
}

export function getPublicKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.publicKey.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPublicKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.publicKey.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePublicKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publicKey.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.publicKey.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publicKey.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publicKey.$get>>>>
          >,
          ReturnType<typeof getPublicKeyQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publicKey.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPublicKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPublicKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.publicKey.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegisteredDevicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.registeredDevices.$get>>,
) {
  return ['registeredDevices', '/registeredDevices', toValue(args)] as const
}

export function getRegisteredDevicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.registeredDevices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegisteredDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registeredDevices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRegisteredDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registeredDevices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.registeredDevices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.registeredDevices.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.registeredDevices.$get>>>
            >
          >,
          ReturnType<typeof getRegisteredDevicesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registeredDevices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRegisteredDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegisteredDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registeredDevices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRegisteredDevicesMutationKey() {
  return ['registeredDevices', '/registeredDevices', 'POST'] as const
}

export function getPostRegisteredDevicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registeredDevices.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.registeredDevices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRegisteredDevicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.registeredDevices.$post>) {
      return parseResponse(client.registeredDevices.$post(args, options))
    },
  })
}

export function usePostRegisteredDevices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.registeredDevices.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.registeredDevices.$post>,
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
  const mutationDefaults = getPostRegisteredDevicesMutationOptions<TError, TOnMutateResult>(
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

export function getPostRegisteredDevicesDeviceIdAssociationsMutationKey() {
  return ['registeredDevices', '/registeredDevices/:deviceId/associations', 'POST'] as const
}

export function getPostRegisteredDevicesDeviceIdAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.registeredDevices)[':deviceId']['associations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRegisteredDevicesDeviceIdAssociationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.registeredDevices)[':deviceId']['associations']['$post']
      >,
    ) {
      return parseResponse(client.registeredDevices[':deviceId'].associations.$post(args, options))
    },
  })
}

export function usePostRegisteredDevicesDeviceIdAssociations<
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
                    (typeof client.registeredDevices)[':deviceId']['associations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.registeredDevices)[':deviceId']['associations']['$post']>,
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
  const mutationDefaults = getPostRegisteredDevicesDeviceIdAssociationsMutationOptions<
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

export function getPatchRegisteredDevicesDeviceIdAssociationsMutationKey() {
  return ['registeredDevices', '/registeredDevices/:deviceId/associations', 'PATCH'] as const
}

export function getPatchRegisteredDevicesDeviceIdAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.registeredDevices)[':deviceId']['associations']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRegisteredDevicesDeviceIdAssociationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.registeredDevices)[':deviceId']['associations']['$patch']
      >,
    ) {
      return parseResponse(client.registeredDevices[':deviceId'].associations.$patch(args, options))
    },
  })
}

export function usePatchRegisteredDevicesDeviceIdAssociations<
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
                    (typeof client.registeredDevices)[':deviceId']['associations']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.registeredDevices)[':deviceId']['associations']['$patch']
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
  const mutationDefaults = getPatchRegisteredDevicesDeviceIdAssociationsMutationOptions<
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

export function getDeleteRegisteredDevicesIdMutationKey() {
  return ['registeredDevices', '/registeredDevices/:id', 'DELETE'] as const
}

export function getDeleteRegisteredDevicesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registeredDevices)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.registeredDevices)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRegisteredDevicesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.registeredDevices)[':id']['$delete']>) {
      return parseResponse(client.registeredDevices[':id'].$delete(args, options))
    },
  })
}

export function useDeleteRegisteredDevicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.registeredDevices)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.registeredDevices)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteRegisteredDevicesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchRegisteredDevicesIdMutationKey() {
  return ['registeredDevices', '/registeredDevices/:id', 'PATCH'] as const
}

export function getPatchRegisteredDevicesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.registeredDevices)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.registeredDevices)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRegisteredDevicesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.registeredDevices)[':id']['$patch']>) {
      return parseResponse(client.registeredDevices[':id'].$patch(args, options))
    },
  })
}

export function usePatchRegisteredDevicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.registeredDevices)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.registeredDevices)[':id']['$patch']>,
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
  const mutationDefaults = getPatchRegisteredDevicesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransactionRulesMutationKey() {
  return ['transactionRules', '/transactionRules', 'POST'] as const
}

export function getPostTransactionRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactionRules.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.transactionRules.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransactionRulesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transactionRules.$post>) {
      return parseResponse(client.transactionRules.$post(args, options))
    },
  })
}

export function usePostTransactionRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transactionRules.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.transactionRules.$post>,
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
  const mutationDefaults = getPostTransactionRulesMutationOptions<TError, TOnMutateResult>(
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

export function getTransactionRulesTransactionRuleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.transactionRules)[':transactionRuleId']['$get']>
  >,
) {
  return ['transactionRules', '/transactionRules/:transactionRuleId', toValue(args)] as const
}

export function getTransactionRulesTransactionRuleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.transactionRules)[':transactionRuleId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransactionRulesTransactionRuleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transactionRules[':transactionRuleId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTransactionRulesTransactionRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.transactionRules)[':transactionRuleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.transactionRules)[':transactionRuleId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transactionRules)[':transactionRuleId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transactionRules)[':transactionRuleId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTransactionRulesTransactionRuleIdQueryKey>
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
          Awaited<ReturnType<(typeof client.transactionRules)[':transactionRuleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionRulesTransactionRuleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransactionRulesTransactionRuleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transactionRules[':transactionRuleId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteTransactionRulesTransactionRuleIdMutationKey() {
  return ['transactionRules', '/transactionRules/:transactionRuleId', 'DELETE'] as const
}

export function getDeleteTransactionRulesTransactionRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transactionRules)[':transactionRuleId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.transactionRules)[':transactionRuleId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTransactionRulesTransactionRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.transactionRules)[':transactionRuleId']['$delete']>,
    ) {
      return parseResponse(client.transactionRules[':transactionRuleId'].$delete(args, options))
    },
  })
}

export function useDeleteTransactionRulesTransactionRuleId<
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
                  ReturnType<(typeof client.transactionRules)[':transactionRuleId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.transactionRules)[':transactionRuleId']['$delete']>,
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
  const mutationDefaults = getDeleteTransactionRulesTransactionRuleIdMutationOptions<
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

export function getPatchTransactionRulesTransactionRuleIdMutationKey() {
  return ['transactionRules', '/transactionRules/:transactionRuleId', 'PATCH'] as const
}

export function getPatchTransactionRulesTransactionRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transactionRules)[':transactionRuleId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.transactionRules)[':transactionRuleId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTransactionRulesTransactionRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.transactionRules)[':transactionRuleId']['$patch']>,
    ) {
      return parseResponse(client.transactionRules[':transactionRuleId'].$patch(args, options))
    },
  })
}

export function usePatchTransactionRulesTransactionRuleId<
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
                  ReturnType<(typeof client.transactionRules)[':transactionRuleId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.transactionRules)[':transactionRuleId']['$patch']>,
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
  const mutationDefaults = getPatchTransactionRulesTransactionRuleIdMutationOptions<
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

export function getPostTransferRoutesCalculateMutationKey() {
  return ['transferRoutes', '/transferRoutes/calculate', 'POST'] as const
}

export function getPostTransferRoutesCalculateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transferRoutes.calculate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.transferRoutes.calculate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferRoutesCalculateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transferRoutes.calculate.$post>) {
      return parseResponse(client.transferRoutes.calculate.$post(args, options))
    },
  })
}

export function usePostTransferRoutesCalculate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.transferRoutes.calculate.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.transferRoutes.calculate.$post>,
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
  const mutationDefaults = getPostTransferRoutesCalculateMutationOptions<TError, TOnMutateResult>(
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

export function getPostValidateBankAccountIdentificationMutationKey() {
  return [
    'validateBankAccountIdentification',
    '/validateBankAccountIdentification',
    'POST',
  ] as const
}

export function getPostValidateBankAccountIdentificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.validateBankAccountIdentification.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.validateBankAccountIdentification.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostValidateBankAccountIdentificationMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.validateBankAccountIdentification.$post>,
    ) {
      return parseResponse(client.validateBankAccountIdentification.$post(args, options))
    },
  })
}

export function usePostValidateBankAccountIdentification<
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
                Awaited<ReturnType<typeof client.validateBankAccountIdentification.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.validateBankAccountIdentification.$post>,
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
  const mutationDefaults = getPostValidateBankAccountIdentificationMutationOptions<
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

export function getAccountHoldersIdTaxFormSummaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accountHolders)[':id']['taxFormSummary']['$get']>
  >,
) {
  return ['accountHolders', '/accountHolders/:id/taxFormSummary', toValue(args)] as const
}

export function getAccountHoldersIdTaxFormSummaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accountHolders)[':id']['taxFormSummary']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountHoldersIdTaxFormSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accountHolders[':id'].taxFormSummary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountHoldersIdTaxFormSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accountHolders)[':id']['taxFormSummary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accountHolders)[':id']['taxFormSummary']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accountHolders)[':id']['taxFormSummary']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accountHolders)[':id']['taxFormSummary']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountHoldersIdTaxFormSummaryQueryKey>
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
          Awaited<ReturnType<(typeof client.accountHolders)[':id']['taxFormSummary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountHoldersIdTaxFormSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountHoldersIdTaxFormSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accountHolders[':id'].taxFormSummary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBalanceAccountsBalanceAccountIdPayoutSchedulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules']['$get']
    >
  >,
) {
  return [
    'balanceAccounts',
    '/balanceAccounts/:balanceAccountId/payoutSchedules',
    toValue(args),
  ] as const
}

export function getBalanceAccountsBalanceAccountIdPayoutSchedulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBalanceAccountsBalanceAccountIdPayoutSchedulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.balanceAccounts[':balanceAccountId'].payoutSchedules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBalanceAccountsBalanceAccountIdPayoutSchedules<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules']['$get']
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
                    (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules']['$get']
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
                    (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBalanceAccountsBalanceAccountIdPayoutSchedulesQueryKey>
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
              (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBalanceAccountsBalanceAccountIdPayoutSchedulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBalanceAccountsBalanceAccountIdPayoutSchedulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.balanceAccounts[':balanceAccountId'].payoutSchedules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBalanceAccountsBalanceAccountIdPayoutSchedulesMutationKey() {
  return ['balanceAccounts', '/balanceAccounts/:balanceAccountId/payoutSchedules', 'POST'] as const
}

export function getPostBalanceAccountsBalanceAccountIdPayoutSchedulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBalanceAccountsBalanceAccountIdPayoutSchedulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules']['$post']
      >,
    ) {
      return parseResponse(
        client.balanceAccounts[':balanceAccountId'].payoutSchedules.$post(args, options),
      )
    },
  })
}

export function usePostBalanceAccountsBalanceAccountIdPayoutSchedules<
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
                    (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules']['$post']
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
  const mutationDefaults = getPostBalanceAccountsBalanceAccountIdPayoutSchedulesMutationOptions<
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

export function getBalanceAccountsBalanceAccountIdPayoutSchedulesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['$get']
    >
  >,
) {
  return [
    'balanceAccounts',
    '/balanceAccounts/:balanceAccountId/payoutSchedules/:id',
    toValue(args),
  ] as const
}

export function getBalanceAccountsBalanceAccountIdPayoutSchedulesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBalanceAccountsBalanceAccountIdPayoutSchedulesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.balanceAccounts[':balanceAccountId'].payoutSchedules[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBalanceAccountsBalanceAccountIdPayoutSchedulesId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['$get']
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
                    (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['$get']
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
                    (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBalanceAccountsBalanceAccountIdPayoutSchedulesIdQueryKey>
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
              (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBalanceAccountsBalanceAccountIdPayoutSchedulesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBalanceAccountsBalanceAccountIdPayoutSchedulesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.balanceAccounts[':balanceAccountId'].payoutSchedules[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdMutationKey() {
  return [
    'balanceAccounts',
    '/balanceAccounts/:balanceAccountId/payoutSchedules/:id',
    'DELETE',
  ] as const
}

export function getDeleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.balanceAccounts[':balanceAccountId'].payoutSchedules[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteBalanceAccountsBalanceAccountIdPayoutSchedulesId<
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
                      (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['$delete']
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
  const mutationDefaults = getDeleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdMutationOptions<
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

export function getPatchBalanceAccountsBalanceAccountIdPayoutSchedulesIdMutationKey() {
  return [
    'balanceAccounts',
    '/balanceAccounts/:balanceAccountId/payoutSchedules/:id',
    'PATCH',
  ] as const
}

export function getPatchBalanceAccountsBalanceAccountIdPayoutSchedulesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchBalanceAccountsBalanceAccountIdPayoutSchedulesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['$patch']
      >,
    ) {
      return parseResponse(
        client.balanceAccounts[':balanceAccountId'].payoutSchedules[':id'].$patch(args, options),
      )
    },
  })
}

export function usePatchBalanceAccountsBalanceAccountIdPayoutSchedulesId<
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
                    (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['$patch']
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
  const mutationDefaults = getPatchBalanceAccountsBalanceAccountIdPayoutSchedulesIdMutationOptions<
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

export function getBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['executions']['$get']
    >
  >,
) {
  return [
    'balanceAccounts',
    '/balanceAccounts/:balanceAccountId/payoutSchedules/:id/executions',
    toValue(args),
  ] as const
}

export function getBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['executions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.balanceAccounts[':balanceAccountId'].payoutSchedules[':id'].executions.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['executions']['$get']
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
                    (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['executions']['$get']
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
                    (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['executions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsQueryKey>
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
              (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['executions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.balanceAccounts[':balanceAccountId'].payoutSchedules[':id'].executions.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getBalanceAccountsBalanceAccountIdRecurringTopUpsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps']['$get']
    >
  >,
) {
  return [
    'balanceAccounts',
    '/balanceAccounts/:balanceAccountId/recurringTopUps',
    toValue(args),
  ] as const
}

export function getBalanceAccountsBalanceAccountIdRecurringTopUpsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBalanceAccountsBalanceAccountIdRecurringTopUpsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.balanceAccounts[':balanceAccountId'].recurringTopUps.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBalanceAccountsBalanceAccountIdRecurringTopUps<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps']['$get']
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
                    (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps']['$get']
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
                    (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBalanceAccountsBalanceAccountIdRecurringTopUpsQueryKey>
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
              (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBalanceAccountsBalanceAccountIdRecurringTopUpsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBalanceAccountsBalanceAccountIdRecurringTopUpsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.balanceAccounts[':balanceAccountId'].recurringTopUps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBalanceAccountsBalanceAccountIdRecurringTopUpsMutationKey() {
  return ['balanceAccounts', '/balanceAccounts/:balanceAccountId/recurringTopUps', 'POST'] as const
}

export function getPostBalanceAccountsBalanceAccountIdRecurringTopUpsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBalanceAccountsBalanceAccountIdRecurringTopUpsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps']['$post']
      >,
    ) {
      return parseResponse(
        client.balanceAccounts[':balanceAccountId'].recurringTopUps.$post(args, options),
      )
    },
  })
}

export function usePostBalanceAccountsBalanceAccountIdRecurringTopUps<
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
                    (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps']['$post']
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
  const mutationDefaults = getPostBalanceAccountsBalanceAccountIdRecurringTopUpsMutationOptions<
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

export function getDeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdMutationKey() {
  return [
    'balanceAccounts',
    '/balanceAccounts/:balanceAccountId/recurringTopUps/:topUpId',
    'DELETE',
  ] as const
}

export function getDeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps'][':topUpId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps'][':topUpId']['$delete']
      >,
    ) {
      return parseResponse(
        client.balanceAccounts[':balanceAccountId'].recurringTopUps[':topUpId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpId<
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
                      (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps'][':topUpId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps'][':topUpId']['$delete']
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
    getDeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdMutationOptions<
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

export function getPatchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdMutationKey() {
  return [
    'balanceAccounts',
    '/balanceAccounts/:balanceAccountId/recurringTopUps/:topUpId',
    'PATCH',
  ] as const
}

export function getPatchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps'][':topUpId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps'][':topUpId']['$patch']
      >,
    ) {
      return parseResponse(
        client.balanceAccounts[':balanceAccountId'].recurringTopUps[':topUpId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpId<
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
                    (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps'][':topUpId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps'][':topUpId']['$patch']
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
    getPatchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdMutationOptions<
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

export function getBalanceAccountsBalanceAccountIdSweepsSweepIdExecutionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['executions']['$get']
    >
  >,
) {
  return [
    'balanceAccounts',
    '/balanceAccounts/:balanceAccountId/sweeps/:sweepId/executions',
    toValue(args),
  ] as const
}

export function getBalanceAccountsBalanceAccountIdSweepsSweepIdExecutionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['executions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getBalanceAccountsBalanceAccountIdSweepsSweepIdExecutionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.balanceAccounts[':balanceAccountId'].sweeps[':sweepId'].executions.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useBalanceAccountsBalanceAccountIdSweepsSweepIdExecutions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['executions']['$get']
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
                    (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['executions']['$get']
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
                    (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['executions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBalanceAccountsBalanceAccountIdSweepsSweepIdExecutionsQueryKey>
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
              (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['executions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBalanceAccountsBalanceAccountIdSweepsSweepIdExecutionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getBalanceAccountsBalanceAccountIdSweepsSweepIdExecutionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.balanceAccounts[':balanceAccountId'].sweeps[':sweepId'].executions.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getBalanceAccountsIdTransferLimitsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.balanceAccounts)[':id']['transferLimits']['$get']>
  >,
) {
  return ['balanceAccounts', '/balanceAccounts/:id/transferLimits', toValue(args)] as const
}

export function getBalanceAccountsIdTransferLimitsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.balanceAccounts)[':id']['transferLimits']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBalanceAccountsIdTransferLimitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.balanceAccounts[':id'].transferLimits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBalanceAccountsIdTransferLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['transferLimits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.balanceAccounts)[':id']['transferLimits']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.balanceAccounts)[':id']['transferLimits']['$get']>
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
                  ReturnType<(typeof client.balanceAccounts)[':id']['transferLimits']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBalanceAccountsIdTransferLimitsQueryKey>
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
          Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['transferLimits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBalanceAccountsIdTransferLimitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBalanceAccountsIdTransferLimitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.balanceAccounts[':id'].transferLimits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBalanceAccountsIdTransferLimitsMutationKey() {
  return ['balanceAccounts', '/balanceAccounts/:id/transferLimits', 'POST'] as const
}

export function getPostBalanceAccountsIdTransferLimitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['transferLimits']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.balanceAccounts)[':id']['transferLimits']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBalanceAccountsIdTransferLimitsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.balanceAccounts)[':id']['transferLimits']['$post']>,
    ) {
      return parseResponse(client.balanceAccounts[':id'].transferLimits.$post(args, options))
    },
  })
}

export function usePostBalanceAccountsIdTransferLimits<
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
                  ReturnType<(typeof client.balanceAccounts)[':id']['transferLimits']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.balanceAccounts)[':id']['transferLimits']['$post']>,
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
  const mutationDefaults = getPostBalanceAccountsIdTransferLimitsMutationOptions<
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

export function getPostBalanceAccountsIdTransferLimitsApproveMutationKey() {
  return ['balanceAccounts', '/balanceAccounts/:id/transferLimits/approve', 'POST'] as const
}

export function getPostBalanceAccountsIdTransferLimitsApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.balanceAccounts)[':id']['transferLimits']['approve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBalanceAccountsIdTransferLimitsApproveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.balanceAccounts)[':id']['transferLimits']['approve']['$post']
      >,
    ) {
      return parseResponse(
        client.balanceAccounts[':id'].transferLimits.approve.$post(args, options),
      )
    },
  })
}

export function usePostBalanceAccountsIdTransferLimitsApprove<
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
                      (typeof client.balanceAccounts)[':id']['transferLimits']['approve']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.balanceAccounts)[':id']['transferLimits']['approve']['$post']
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
  const mutationDefaults = getPostBalanceAccountsIdTransferLimitsApproveMutationOptions<
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

export function getBalanceAccountsIdTransferLimitsCurrentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.balanceAccounts)[':id']['transferLimits']['current']['$get']>
  >,
) {
  return ['balanceAccounts', '/balanceAccounts/:id/transferLimits/current', toValue(args)] as const
}

export function getBalanceAccountsIdTransferLimitsCurrentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.balanceAccounts)[':id']['transferLimits']['current']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBalanceAccountsIdTransferLimitsCurrentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.balanceAccounts[':id'].transferLimits.current.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBalanceAccountsIdTransferLimitsCurrent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.balanceAccounts)[':id']['transferLimits']['current']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.balanceAccounts)[':id']['transferLimits']['current']['$get']>
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
                    (typeof client.balanceAccounts)[':id']['transferLimits']['current']['$get']
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
                    (typeof client.balanceAccounts)[':id']['transferLimits']['current']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBalanceAccountsIdTransferLimitsCurrentQueryKey>
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
            ReturnType<(typeof client.balanceAccounts)[':id']['transferLimits']['current']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBalanceAccountsIdTransferLimitsCurrentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBalanceAccountsIdTransferLimitsCurrentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.balanceAccounts[':id'].transferLimits.current.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBalanceAccountsIdTransferLimitsTransferLimitIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balanceAccounts)[':id']['transferLimits'][':transferLimitId']['$get']
    >
  >,
) {
  return [
    'balanceAccounts',
    '/balanceAccounts/:id/transferLimits/:transferLimitId',
    toValue(args),
  ] as const
}

export function getBalanceAccountsIdTransferLimitsTransferLimitIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balanceAccounts)[':id']['transferLimits'][':transferLimitId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBalanceAccountsIdTransferLimitsTransferLimitIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.balanceAccounts[':id'].transferLimits[':transferLimitId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBalanceAccountsIdTransferLimitsTransferLimitId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balanceAccounts)[':id']['transferLimits'][':transferLimitId']['$get']
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
                    (typeof client.balanceAccounts)[':id']['transferLimits'][':transferLimitId']['$get']
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
                    (typeof client.balanceAccounts)[':id']['transferLimits'][':transferLimitId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBalanceAccountsIdTransferLimitsTransferLimitIdQueryKey>
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
              (typeof client.balanceAccounts)[':id']['transferLimits'][':transferLimitId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBalanceAccountsIdTransferLimitsTransferLimitIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBalanceAccountsIdTransferLimitsTransferLimitIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.balanceAccounts[':id'].transferLimits[':transferLimitId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteBalanceAccountsIdTransferLimitsTransferLimitIdMutationKey() {
  return [
    'balanceAccounts',
    '/balanceAccounts/:id/transferLimits/:transferLimitId',
    'DELETE',
  ] as const
}

export function getDeleteBalanceAccountsIdTransferLimitsTransferLimitIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.balanceAccounts)[':id']['transferLimits'][':transferLimitId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteBalanceAccountsIdTransferLimitsTransferLimitIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.balanceAccounts)[':id']['transferLimits'][':transferLimitId']['$delete']
      >,
    ) {
      return parseResponse(
        client.balanceAccounts[':id'].transferLimits[':transferLimitId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteBalanceAccountsIdTransferLimitsTransferLimitId<
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
                      (typeof client.balanceAccounts)[':id']['transferLimits'][':transferLimitId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.balanceAccounts)[':id']['transferLimits'][':transferLimitId']['$delete']
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
  const mutationDefaults = getDeleteBalanceAccountsIdTransferLimitsTransferLimitIdMutationOptions<
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

export function getBalancePlatformsBalancePlatformIdPayoutSchedulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules']['$get']
    >
  >,
) {
  return [
    'balancePlatforms',
    '/balancePlatforms/:balancePlatformId/payoutSchedules',
    toValue(args),
  ] as const
}

export function getBalancePlatformsBalancePlatformIdPayoutSchedulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBalancePlatformsBalancePlatformIdPayoutSchedulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.balancePlatforms[':balancePlatformId'].payoutSchedules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBalancePlatformsBalancePlatformIdPayoutSchedules<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules']['$get']
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
                    (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules']['$get']
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
                    (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBalancePlatformsBalancePlatformIdPayoutSchedulesQueryKey>
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
              (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBalancePlatformsBalancePlatformIdPayoutSchedulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBalancePlatformsBalancePlatformIdPayoutSchedulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.balancePlatforms[':balancePlatformId'].payoutSchedules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBalancePlatformsBalancePlatformIdPayoutSchedulesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules'][':id']['$get']
    >
  >,
) {
  return [
    'balancePlatforms',
    '/balancePlatforms/:balancePlatformId/payoutSchedules/:id',
    toValue(args),
  ] as const
}

export function getBalancePlatformsBalancePlatformIdPayoutSchedulesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBalancePlatformsBalancePlatformIdPayoutSchedulesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.balancePlatforms[':balancePlatformId'].payoutSchedules[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBalancePlatformsBalancePlatformIdPayoutSchedulesId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules'][':id']['$get']
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
                    (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules'][':id']['$get']
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
                    (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBalancePlatformsBalancePlatformIdPayoutSchedulesIdQueryKey>
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
              (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBalancePlatformsBalancePlatformIdPayoutSchedulesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBalancePlatformsBalancePlatformIdPayoutSchedulesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.balancePlatforms[':balancePlatformId'].payoutSchedules[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings']['$get']
    >
  >,
) {
  return [
    'balancePlatforms',
    '/balancePlatforms/:balancePlatformId/webhooks/:webhookId/settings',
    toValue(args),
  ] as const
}

export function getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.balancePlatforms[':balancePlatformId'].webhooks[':webhookId'].settings.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings']['$get']
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
                    (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings']['$get']
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
                    (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsQueryKey>
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
              (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.balancePlatforms[':balancePlatformId'].webhooks[':webhookId'].settings.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsMutationKey() {
  return [
    'balancePlatforms',
    '/balancePlatforms/:balancePlatformId/webhooks/:webhookId/settings',
    'POST',
  ] as const
}

export function getPostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings']['$post']
      >,
    ) {
      return parseResponse(
        client.balancePlatforms[':balancePlatformId'].webhooks[':webhookId'].settings.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings<
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
                    (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings']['$post']
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
    getPostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsMutationOptions<
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

export function getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings'][':settingId']['$get']
    >
  >,
) {
  return [
    'balancePlatforms',
    '/balancePlatforms/:balancePlatformId/webhooks/:webhookId/settings/:settingId',
    toValue(args),
  ] as const
}

export function getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings'][':settingId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.balancePlatforms[':balancePlatformId'].webhooks[':webhookId'].settings[
          ':settingId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings'][':settingId']['$get']
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
                    (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings'][':settingId']['$get']
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
                    (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings'][':settingId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdQueryKey
          >
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
              (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings'][':settingId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.balancePlatforms[':balancePlatformId'].webhooks[':webhookId'].settings[
            ':settingId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdMutationKey() {
  return [
    'balancePlatforms',
    '/balancePlatforms/:balancePlatformId/webhooks/:webhookId/settings/:settingId',
    'DELETE',
  ] as const
}

export function getDeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings'][':settingId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings'][':settingId']['$delete']
      >,
    ) {
      return parseResponse(
        client.balancePlatforms[':balancePlatformId'].webhooks[':webhookId'].settings[
          ':settingId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId<
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
                      (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings'][':settingId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings'][':settingId']['$delete']
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
    getDeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdMutationOptions<
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

export function getPatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdMutationKey() {
  return [
    'balancePlatforms',
    '/balancePlatforms/:balancePlatformId/webhooks/:webhookId/settings/:settingId',
    'PATCH',
  ] as const
}

export function getPatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings'][':settingId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings'][':settingId']['$patch']
      >,
    ) {
      return parseResponse(
        client.balancePlatforms[':balancePlatformId'].webhooks[':webhookId'].settings[
          ':settingId'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId<
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
                    (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings'][':settingId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings'][':settingId']['$patch']
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
    getPatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdMutationOptions<
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

export function getBalancePlatformsIdTransferLimitsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.balancePlatforms)[':id']['transferLimits']['$get']>
  >,
) {
  return ['balancePlatforms', '/balancePlatforms/:id/transferLimits', toValue(args)] as const
}

export function getBalancePlatformsIdTransferLimitsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.balancePlatforms)[':id']['transferLimits']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBalancePlatformsIdTransferLimitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.balancePlatforms[':id'].transferLimits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBalancePlatformsIdTransferLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['transferLimits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.balancePlatforms)[':id']['transferLimits']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.balancePlatforms)[':id']['transferLimits']['$get']>
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
                  ReturnType<(typeof client.balancePlatforms)[':id']['transferLimits']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBalancePlatformsIdTransferLimitsQueryKey>
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
          Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['transferLimits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBalancePlatformsIdTransferLimitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBalancePlatformsIdTransferLimitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.balancePlatforms[':id'].transferLimits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBalancePlatformsIdTransferLimitsMutationKey() {
  return ['balancePlatforms', '/balancePlatforms/:id/transferLimits', 'POST'] as const
}

export function getPostBalancePlatformsIdTransferLimitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['transferLimits']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.balancePlatforms)[':id']['transferLimits']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBalancePlatformsIdTransferLimitsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.balancePlatforms)[':id']['transferLimits']['$post']>,
    ) {
      return parseResponse(client.balancePlatforms[':id'].transferLimits.$post(args, options))
    },
  })
}

export function usePostBalancePlatformsIdTransferLimits<
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
                  ReturnType<(typeof client.balancePlatforms)[':id']['transferLimits']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.balancePlatforms)[':id']['transferLimits']['$post']>,
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
  const mutationDefaults = getPostBalancePlatformsIdTransferLimitsMutationOptions<
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

export function getBalancePlatformsIdTransferLimitsTransferLimitIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balancePlatforms)[':id']['transferLimits'][':transferLimitId']['$get']
    >
  >,
) {
  return [
    'balancePlatforms',
    '/balancePlatforms/:id/transferLimits/:transferLimitId',
    toValue(args),
  ] as const
}

export function getBalancePlatformsIdTransferLimitsTransferLimitIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balancePlatforms)[':id']['transferLimits'][':transferLimitId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBalancePlatformsIdTransferLimitsTransferLimitIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.balancePlatforms[':id'].transferLimits[':transferLimitId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBalancePlatformsIdTransferLimitsTransferLimitId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.balancePlatforms)[':id']['transferLimits'][':transferLimitId']['$get']
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
                    (typeof client.balancePlatforms)[':id']['transferLimits'][':transferLimitId']['$get']
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
                    (typeof client.balancePlatforms)[':id']['transferLimits'][':transferLimitId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBalancePlatformsIdTransferLimitsTransferLimitIdQueryKey>
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
              (typeof client.balancePlatforms)[':id']['transferLimits'][':transferLimitId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBalancePlatformsIdTransferLimitsTransferLimitIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBalancePlatformsIdTransferLimitsTransferLimitIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.balancePlatforms[':id'].transferLimits[':transferLimitId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteBalancePlatformsIdTransferLimitsTransferLimitIdMutationKey() {
  return [
    'balancePlatforms',
    '/balancePlatforms/:id/transferLimits/:transferLimitId',
    'DELETE',
  ] as const
}

export function getDeleteBalancePlatformsIdTransferLimitsTransferLimitIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.balancePlatforms)[':id']['transferLimits'][':transferLimitId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteBalancePlatformsIdTransferLimitsTransferLimitIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.balancePlatforms)[':id']['transferLimits'][':transferLimitId']['$delete']
      >,
    ) {
      return parseResponse(
        client.balancePlatforms[':id'].transferLimits[':transferLimitId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteBalancePlatformsIdTransferLimitsTransferLimitId<
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
                      (typeof client.balancePlatforms)[':id']['transferLimits'][':transferLimitId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.balancePlatforms)[':id']['transferLimits'][':transferLimitId']['$delete']
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
  const mutationDefaults = getDeleteBalancePlatformsIdTransferLimitsTransferLimitIdMutationOptions<
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

export function getMandatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mandates.$get>>,
) {
  return ['mandates', '/mandates', toValue(args)] as const
}

export function getMandatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mandates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMandatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mandates.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMandates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mandates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mandates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mandates.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mandates.$get>>>>
          >,
          ReturnType<typeof getMandatesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mandates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMandatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMandatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mandates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMandatesMandateIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mandates)[':mandateId']['$get']>>,
) {
  return ['mandates', '/mandates/:mandateId', toValue(args)] as const
}

export function getMandatesMandateIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mandates)[':mandateId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMandatesMandateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mandates[':mandateId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMandatesMandateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mandates)[':mandateId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mandates)[':mandateId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mandates)[':mandateId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mandates)[':mandateId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMandatesMandateIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.mandates)[':mandateId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMandatesMandateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMandatesMandateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mandates[':mandateId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchMandatesMandateIdMutationKey() {
  return ['mandates', '/mandates/:mandateId', 'PATCH'] as const
}

export function getPatchMandatesMandateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.mandates)[':mandateId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.mandates)[':mandateId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMandatesMandateIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.mandates)[':mandateId']['$patch']>) {
      return parseResponse(client.mandates[':mandateId'].$patch(args, options))
    },
  })
}

export function usePatchMandatesMandateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mandates)[':mandateId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.mandates)[':mandateId']['$patch']>,
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
  const mutationDefaults = getPatchMandatesMandateIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostMandatesMandateIdCancelMutationKey() {
  return ['mandates', '/mandates/:mandateId/cancel', 'POST'] as const
}

export function getPostMandatesMandateIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mandates)[':mandateId']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mandates)[':mandateId']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMandatesMandateIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mandates)[':mandateId']['cancel']['$post']>,
    ) {
      return parseResponse(client.mandates[':mandateId'].cancel.$post(args, options))
    },
  })
}

export function usePostMandatesMandateIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mandates)[':mandateId']['cancel']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.mandates)[':mandateId']['cancel']['$post']>,
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
  const mutationDefaults = getPostMandatesMandateIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$get']
    >
  >,
) {
  return [
    'paymentInstruments',
    '/paymentInstruments/:paymentInstrumentId/authorisedCardUsers',
    toValue(args),
  ] as const
}

export function getPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.paymentInstruments[':paymentInstrumentId'].authorisedCardUsers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$get']
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
                    (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$get']
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
                    (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersQueryKey>
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
              (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.paymentInstruments[':paymentInstrumentId'].authorisedCardUsers.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersMutationKey() {
  return [
    'paymentInstruments',
    '/paymentInstruments/:paymentInstrumentId/authorisedCardUsers',
    'POST',
  ] as const
}

export function getPostPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$post']
      >,
    ) {
      return parseResponse(
        client.paymentInstruments[':paymentInstrumentId'].authorisedCardUsers.$post(args, options),
      )
    },
  })
}

export function usePostPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers<
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
                      (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$post']
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
    getPostPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersMutationOptions<
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

export function getDeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersMutationKey() {
  return [
    'paymentInstruments',
    '/paymentInstruments/:paymentInstrumentId/authorisedCardUsers',
    'DELETE',
  ] as const
}

export function getDeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$delete']
      >,
    ) {
      return parseResponse(
        client.paymentInstruments[':paymentInstrumentId'].authorisedCardUsers.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers<
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
                      (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$delete']
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
    getDeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersMutationOptions<
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

export function getPatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersMutationKey() {
  return [
    'paymentInstruments',
    '/paymentInstruments/:paymentInstrumentId/authorisedCardUsers',
    'PATCH',
  ] as const
}

export function getPatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$patch']
      >,
    ) {
      return parseResponse(
        client.paymentInstruments[':paymentInstrumentId'].authorisedCardUsers.$patch(args, options),
      )
    },
  })
}

export function usePatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers<
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
                      (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$patch']
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
    getPatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersMutationOptions<
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

export function getScaAssociationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scaAssociations.$get>>,
) {
  return ['scaAssociations', '/scaAssociations', toValue(args)] as const
}

export function getScaAssociationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scaAssociations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScaAssociationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scaAssociations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScaAssociations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scaAssociations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scaAssociations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.scaAssociations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.scaAssociations.$get>>>
            >
          >,
          ReturnType<typeof getScaAssociationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scaAssociations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getScaAssociationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScaAssociationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.scaAssociations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteScaAssociationsMutationKey() {
  return ['scaAssociations', '/scaAssociations', 'DELETE'] as const
}

export function getDeleteScaAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scaAssociations.$delete>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.scaAssociations.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteScaAssociationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.scaAssociations.$delete>) {
      return parseResponse(client.scaAssociations.$delete(args, options))
    },
  })
}

export function useDeleteScaAssociations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.scaAssociations.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.scaAssociations.$delete>,
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
  const mutationDefaults = getDeleteScaAssociationsMutationOptions<TError, TOnMutateResult>(
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

export function getPatchScaAssociationsMutationKey() {
  return ['scaAssociations', '/scaAssociations', 'PATCH'] as const
}

export function getPatchScaAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scaAssociations.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.scaAssociations.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchScaAssociationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.scaAssociations.$patch>) {
      return parseResponse(client.scaAssociations.$patch(args, options))
    },
  })
}

export function usePatchScaAssociations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.scaAssociations.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.scaAssociations.$patch>,
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
  const mutationDefaults = getPatchScaAssociationsMutationOptions<TError, TOnMutateResult>(
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

export function getPostScaDevicesMutationKey() {
  return ['scaDevices', '/scaDevices', 'POST'] as const
}

export function getPostScaDevicesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scaDevices.$post>>>>>,
    TError,
    InferRequestType<typeof client.scaDevices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostScaDevicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.scaDevices.$post>) {
      return parseResponse(client.scaDevices.$post(args, options))
    },
  })
}

export function usePostScaDevices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scaDevices.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.scaDevices.$post>,
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
  const mutationDefaults = getPostScaDevicesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteScaDevicesDeviceIdMutationKey() {
  return ['scaDevices', '/scaDevices/:deviceId', 'DELETE'] as const
}

export function getDeleteScaDevicesDeviceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scaDevices)[':deviceId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.scaDevices)[':deviceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteScaDevicesDeviceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.scaDevices)[':deviceId']['$delete']>) {
      return parseResponse(client.scaDevices[':deviceId'].$delete(args, options))
    },
  })
}

export function useDeleteScaDevicesDeviceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.scaDevices)[':deviceId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.scaDevices)[':deviceId']['$delete']>,
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
  const mutationDefaults = getDeleteScaDevicesDeviceIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchScaDevicesDeviceIdMutationKey() {
  return ['scaDevices', '/scaDevices/:deviceId', 'PATCH'] as const
}

export function getPatchScaDevicesDeviceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.scaDevices)[':deviceId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.scaDevices)[':deviceId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchScaDevicesDeviceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.scaDevices)[':deviceId']['$patch']>) {
      return parseResponse(client.scaDevices[':deviceId'].$patch(args, options))
    },
  })
}

export function usePatchScaDevicesDeviceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scaDevices)[':deviceId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.scaDevices)[':deviceId']['$patch']>,
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
  const mutationDefaults = getPatchScaDevicesDeviceIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostScaDevicesDeviceIdScaAssociationsMutationKey() {
  return ['scaDevices', '/scaDevices/:deviceId/scaAssociations', 'POST'] as const
}

export function getPostScaDevicesDeviceIdScaAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scaDevices)[':deviceId']['scaAssociations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.scaDevices)[':deviceId']['scaAssociations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostScaDevicesDeviceIdScaAssociationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.scaDevices)[':deviceId']['scaAssociations']['$post']>,
    ) {
      return parseResponse(client.scaDevices[':deviceId'].scaAssociations.$post(args, options))
    },
  })
}

export function usePostScaDevicesDeviceIdScaAssociations<
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
                  ReturnType<(typeof client.scaDevices)[':deviceId']['scaAssociations']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.scaDevices)[':deviceId']['scaAssociations']['$post']>,
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
  const mutationDefaults = getPostScaDevicesDeviceIdScaAssociationsMutationOptions<
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
