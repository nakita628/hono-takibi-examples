import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accountHolders.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.accountHolders.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.accountHolders)[':id']['$get']>,
) {
  return ['accountHolders', '/accountHolders/:id', args] as const
}

export function getAccountHoldersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accountHolders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accountHolders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accountHolders)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountHoldersIdQueryKey>
  >({
    queryKey: getAccountHoldersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accountHolders[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccountHoldersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accountHolders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accountHolders)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.accountHolders)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountHoldersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountHoldersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountHoldersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accountHolders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accountHolders)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.accountHolders)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountHoldersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountHoldersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.accountHolders)[':id']['balanceAccounts']['$get']>,
) {
  return ['accountHolders', '/accountHolders/:id/balanceAccounts', args] as const
}

export function getAccountHoldersIdBalanceAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accountHolders)[':id']['balanceAccounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accountHolders)[':id']['balanceAccounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountHoldersIdBalanceAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accountHolders[':id'].balanceAccounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.accountHolders)[':id']['balanceAccounts']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getAccountHoldersIdBalanceAccountsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountHoldersIdBalanceAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accountHolders)[':id']['balanceAccounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accountHolders)[':id']['balanceAccounts']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAccountHoldersIdBalanceAccountsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAccountHoldersIdTaxFormsQueryKey(
  args: InferRequestType<(typeof client.accountHolders)[':id']['taxForms']['$get']>,
) {
  return ['accountHolders', '/accountHolders/:id/taxForms', args] as const
}

export function getAccountHoldersIdTaxFormsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accountHolders)[':id']['taxForms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accountHolders)[':id']['taxForms']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountHoldersIdTaxFormsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accountHolders[':id'].taxForms.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.accountHolders)[':id']['taxForms']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAccountHoldersIdTaxFormsQueryKey>
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
      ...getAccountHoldersIdTaxFormsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountHoldersIdTaxForms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accountHolders)[':id']['taxForms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accountHolders)[':id']['taxForms']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAccountHoldersIdTaxFormsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAccountHoldersIdTransactionRulesQueryKey(
  args: InferRequestType<(typeof client.accountHolders)[':id']['transactionRules']['$get']>,
) {
  return ['accountHolders', '/accountHolders/:id/transactionRules', args] as const
}

export function getAccountHoldersIdTransactionRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accountHolders)[':id']['transactionRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accountHolders)[':id']['transactionRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountHoldersIdTransactionRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accountHolders[':id'].transactionRules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.accountHolders)[':id']['transactionRules']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getAccountHoldersIdTransactionRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountHoldersIdTransactionRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accountHolders)[':id']['transactionRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accountHolders)[':id']['transactionRules']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAccountHoldersIdTransactionRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balanceAccounts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.balanceAccounts.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.balanceAccounts)[':balanceAccountId']['sweeps']['$get']>,
) {
  return ['balanceAccounts', '/balanceAccounts/:balanceAccountId/sweeps', args] as const
}

export function getBalanceAccountsBalanceAccountIdSweepsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.balanceAccounts)[':balanceAccountId']['sweeps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.balanceAccounts)[':balanceAccountId']['sweeps']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBalanceAccountsBalanceAccountIdSweepsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.balanceAccounts[':balanceAccountId'].sweeps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.balanceAccounts)[':balanceAccountId']['sweeps']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBalanceAccountsBalanceAccountIdSweepsQueryKey>
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
      ...getBalanceAccountsBalanceAccountIdSweepsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBalanceAccountsBalanceAccountIdSweeps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.balanceAccounts)[':balanceAccountId']['sweeps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.balanceAccounts)[':balanceAccountId']['sweeps']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBalanceAccountsBalanceAccountIdSweepsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$get']
  >,
) {
  return ['balanceAccounts', '/balanceAccounts/:balanceAccountId/sweeps/:sweepId', args] as const
}

export function getBalanceAccountsBalanceAccountIdSweepsSweepIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBalanceAccountsBalanceAccountIdSweepsSweepIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.balanceAccounts[':balanceAccountId'].sweeps[':sweepId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBalanceAccountsBalanceAccountIdSweepsSweepIdQueryKey>
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
      ...getBalanceAccountsBalanceAccountIdSweepsSweepIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBalanceAccountsBalanceAccountIdSweepsSweepId<
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
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBalanceAccountsBalanceAccountIdSweepsSweepIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['$get']>,
) {
  return ['balanceAccounts', '/balanceAccounts/:id', args] as const
}

export function getBalanceAccountsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBalanceAccountsIdQueryKey>
  >({
    queryKey: getBalanceAccountsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.balanceAccounts[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBalanceAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBalanceAccountsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBalanceAccountsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBalanceAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBalanceAccountsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBalanceAccountsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['paymentInstruments']['$get']>,
) {
  return ['balanceAccounts', '/balanceAccounts/:id/paymentInstruments', args] as const
}

export function getBalanceAccountsIdPaymentInstrumentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['paymentInstruments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['paymentInstruments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBalanceAccountsIdPaymentInstrumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.balanceAccounts[':id'].paymentInstruments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['paymentInstruments']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBalanceAccountsIdPaymentInstrumentsQueryKey>
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
      ...getBalanceAccountsIdPaymentInstrumentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBalanceAccountsIdPaymentInstruments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['paymentInstruments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['paymentInstruments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getBalanceAccountsIdPaymentInstrumentsQueryKey>
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
      ...getBalanceAccountsIdPaymentInstrumentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBalanceAccountsIdTransactionRulesQueryKey(
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['transactionRules']['$get']>,
) {
  return ['balanceAccounts', '/balanceAccounts/:id/transactionRules', args] as const
}

export function getBalanceAccountsIdTransactionRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['transactionRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['transactionRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBalanceAccountsIdTransactionRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.balanceAccounts[':id'].transactionRules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['transactionRules']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBalanceAccountsIdTransactionRulesQueryKey>
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
      ...getBalanceAccountsIdTransactionRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBalanceAccountsIdTransactionRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['transactionRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['transactionRules']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getBalanceAccountsIdTransactionRulesQueryKey>
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
      ...getBalanceAccountsIdTransactionRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBalancePlatformsIdQueryKey(
  args: InferRequestType<(typeof client.balancePlatforms)[':id']['$get']>,
) {
  return ['balancePlatforms', '/balancePlatforms/:id', args] as const
}

export function getBalancePlatformsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.balancePlatforms)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBalancePlatformsIdQueryKey>
  >({
    queryKey: getBalancePlatformsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.balancePlatforms[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBalancePlatformsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.balancePlatforms)[':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBalancePlatformsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBalancePlatformsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBalancePlatformsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.balancePlatforms)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBalancePlatformsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBalancePlatformsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBalancePlatformsIdAccountHoldersQueryKey(
  args: InferRequestType<(typeof client.balancePlatforms)[':id']['accountHolders']['$get']>,
) {
  return ['balancePlatforms', '/balancePlatforms/:id/accountHolders', args] as const
}

export function getBalancePlatformsIdAccountHoldersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['accountHolders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.balancePlatforms)[':id']['accountHolders']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBalancePlatformsIdAccountHoldersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.balancePlatforms[':id'].accountHolders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.balancePlatforms)[':id']['accountHolders']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getBalancePlatformsIdAccountHoldersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBalancePlatformsIdAccountHolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['accountHolders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.balancePlatforms)[':id']['accountHolders']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBalancePlatformsIdAccountHoldersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBalancePlatformsIdTransactionRulesQueryKey(
  args: InferRequestType<(typeof client.balancePlatforms)[':id']['transactionRules']['$get']>,
) {
  return ['balancePlatforms', '/balancePlatforms/:id/transactionRules', args] as const
}

export function getBalancePlatformsIdTransactionRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['transactionRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.balancePlatforms)[':id']['transactionRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBalancePlatformsIdTransactionRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.balancePlatforms[':id'].transactionRules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.balancePlatforms)[':id']['transactionRules']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBalancePlatformsIdTransactionRulesQueryKey>
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
      ...getBalancePlatformsIdTransactionRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBalancePlatformsIdTransactionRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['transactionRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.balancePlatforms)[':id']['transactionRules']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getBalancePlatformsIdTransactionRulesQueryKey>
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
      ...getBalancePlatformsIdTransactionRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCardordersQueryKey(args: InferRequestType<typeof client.cardorders.$get>) {
  return ['cardorders', '/cardorders', args] as const
}

export function getCardordersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cardorders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.cardorders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cardorders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCardordersQueryKey>
  >({
    queryKey: getCardordersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cardorders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCardorders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cardorders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.cardorders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cardorders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCardordersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCardordersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCardorders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cardorders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.cardorders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cardorders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCardordersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCardordersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCardordersIdItemsQueryKey(
  args: InferRequestType<(typeof client.cardorders)[':id']['items']['$get']>,
) {
  return ['cardorders', '/cardorders/:id/items', args] as const
}

export function getCardordersIdItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cardorders)[':id']['items']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cardorders)[':id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCardordersIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cardorders[':id'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCardordersIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cardorders)[':id']['items']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cardorders)[':id']['items']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getCardordersIdItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCardordersIdItemsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCardordersIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cardorders)[':id']['items']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cardorders)[':id']['items']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCardordersIdItemsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGrantAccountsIdQueryKey(
  args: InferRequestType<(typeof client.grantAccounts)[':id']['$get']>,
) {
  return ['grantAccounts', '/grantAccounts/:id', args] as const
}

export function getGrantAccountsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.grantAccounts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.grantAccounts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.grantAccounts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGrantAccountsIdQueryKey>
  >({
    queryKey: getGrantAccountsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.grantAccounts[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGrantAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.grantAccounts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.grantAccounts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.grantAccounts)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGrantAccountsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGrantAccountsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGrantAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.grantAccounts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.grantAccounts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.grantAccounts)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGrantAccountsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGrantAccountsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGrantOffersQueryKey(args: InferRequestType<typeof client.grantOffers.$get>) {
  return ['grantOffers', '/grantOffers', args] as const
}

export function getGrantOffersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grantOffers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.grantOffers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grantOffers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGrantOffersQueryKey>
  >({
    queryKey: getGrantOffersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.grantOffers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGrantOffers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grantOffers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.grantOffers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grantOffers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGrantOffersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGrantOffersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGrantOffers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grantOffers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.grantOffers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grantOffers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGrantOffersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGrantOffersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGrantOffersGrantOfferIdQueryKey(
  args: InferRequestType<(typeof client.grantOffers)[':grantOfferId']['$get']>,
) {
  return ['grantOffers', '/grantOffers/:grantOfferId', args] as const
}

export function getGrantOffersGrantOfferIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.grantOffers)[':grantOfferId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.grantOffers)[':grantOfferId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGrantOffersGrantOfferIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.grantOffers[':grantOfferId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.grantOffers)[':grantOfferId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getGrantOffersGrantOfferIdQueryKey>
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
      ...getGrantOffersGrantOfferIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGrantOffersGrantOfferId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.grantOffers)[':grantOfferId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.grantOffers)[':grantOfferId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getGrantOffersGrantOfferIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getNetworkTokensNetworkTokenIdQueryKey(
  args: InferRequestType<(typeof client.networkTokens)[':networkTokenId']['$get']>,
) {
  return ['networkTokens', '/networkTokens/:networkTokenId', args] as const
}

export function getNetworkTokensNetworkTokenIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networkTokens)[':networkTokenId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networkTokens)[':networkTokenId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNetworkTokensNetworkTokenIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networkTokens[':networkTokenId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.networkTokens)[':networkTokenId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getNetworkTokensNetworkTokenIdQueryKey>
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
      ...getNetworkTokensNetworkTokenIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNetworkTokensNetworkTokenId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networkTokens)[':networkTokenId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networkTokens)[':networkTokenId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNetworkTokensNetworkTokenIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.paymentInstrumentGroups)[':id']['$get']>,
) {
  return ['paymentInstrumentGroups', '/paymentInstrumentGroups/:id', args] as const
}

export function getPaymentInstrumentGroupsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.paymentInstrumentGroups)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.paymentInstrumentGroups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPaymentInstrumentGroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.paymentInstrumentGroups[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.paymentInstrumentGroups)[':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPaymentInstrumentGroupsIdQueryKey>
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
      ...getPaymentInstrumentGroupsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePaymentInstrumentGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.paymentInstrumentGroups)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.paymentInstrumentGroups)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPaymentInstrumentGroupsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPaymentInstrumentGroupsIdTransactionRulesQueryKey(
  args: InferRequestType<
    (typeof client.paymentInstrumentGroups)[':id']['transactionRules']['$get']
  >,
) {
  return ['paymentInstrumentGroups', '/paymentInstrumentGroups/:id/transactionRules', args] as const
}

export function getPaymentInstrumentGroupsIdTransactionRulesQueryOptions<
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
  args: InferRequestType<
    (typeof client.paymentInstrumentGroups)[':id']['transactionRules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPaymentInstrumentGroupsIdTransactionRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.paymentInstrumentGroups[':id'].transactionRules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.paymentInstrumentGroups)[':id']['transactionRules']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPaymentInstrumentGroupsIdTransactionRulesQueryKey>
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
      ...getPaymentInstrumentGroupsIdTransactionRulesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePaymentInstrumentGroupsIdTransactionRules<
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
  args: InferRequestType<
    (typeof client.paymentInstrumentGroups)[':id']['transactionRules']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getPaymentInstrumentGroupsIdTransactionRulesQueryKey>
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
      ...getPaymentInstrumentGroupsIdTransactionRulesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.paymentInstruments.reveal.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.paymentInstruments.reveal.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.paymentInstruments)[':id']['$get']>,
) {
  return ['paymentInstruments', '/paymentInstruments/:id', args] as const
}

export function getPaymentInstrumentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.paymentInstruments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentInstrumentsIdQueryKey>
  >({
    queryKey: getPaymentInstrumentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.paymentInstruments[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePaymentInstrumentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.paymentInstruments)[':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPaymentInstrumentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPaymentInstrumentsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePaymentInstrumentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.paymentInstruments)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentInstrumentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPaymentInstrumentsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<
    (typeof client.paymentInstruments)[':id']['networkTokenActivationData']['$get']
  >,
) {
  return ['paymentInstruments', '/paymentInstruments/:id/networkTokenActivationData', args] as const
}

export function getPaymentInstrumentsIdNetworkTokenActivationDataQueryOptions<
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
  args: InferRequestType<
    (typeof client.paymentInstruments)[':id']['networkTokenActivationData']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPaymentInstrumentsIdNetworkTokenActivationDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.paymentInstruments[':id'].networkTokenActivationData.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.paymentInstruments)[':id']['networkTokenActivationData']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPaymentInstrumentsIdNetworkTokenActivationDataQueryKey>
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
      ...getPaymentInstrumentsIdNetworkTokenActivationDataQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePaymentInstrumentsIdNetworkTokenActivationData<
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
  args: InferRequestType<
    (typeof client.paymentInstruments)[':id']['networkTokenActivationData']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPaymentInstrumentsIdNetworkTokenActivationDataQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.paymentInstruments)[':id']['networkTokens']['$get']>,
) {
  return ['paymentInstruments', '/paymentInstruments/:id/networkTokens', args] as const
}

export function getPaymentInstrumentsIdNetworkTokensQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['networkTokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.paymentInstruments)[':id']['networkTokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPaymentInstrumentsIdNetworkTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.paymentInstruments[':id'].networkTokens.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.paymentInstruments)[':id']['networkTokens']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPaymentInstrumentsIdNetworkTokensQueryKey>
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
      ...getPaymentInstrumentsIdNetworkTokensQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePaymentInstrumentsIdNetworkTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['networkTokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.paymentInstruments)[':id']['networkTokens']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getPaymentInstrumentsIdNetworkTokensQueryKey>
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
      ...getPaymentInstrumentsIdNetworkTokensQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPaymentInstrumentsIdRevealQueryKey(
  args: InferRequestType<(typeof client.paymentInstruments)[':id']['reveal']['$get']>,
) {
  return ['paymentInstruments', '/paymentInstruments/:id/reveal', args] as const
}

export function getPaymentInstrumentsIdRevealQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['reveal']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.paymentInstruments)[':id']['reveal']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPaymentInstrumentsIdRevealQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.paymentInstruments[':id'].reveal.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.paymentInstruments)[':id']['reveal']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPaymentInstrumentsIdRevealQueryKey>
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
      ...getPaymentInstrumentsIdRevealQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePaymentInstrumentsIdReveal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['reveal']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.paymentInstruments)[':id']['reveal']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPaymentInstrumentsIdRevealQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPaymentInstrumentsIdTransactionRulesQueryKey(
  args: InferRequestType<(typeof client.paymentInstruments)[':id']['transactionRules']['$get']>,
) {
  return ['paymentInstruments', '/paymentInstruments/:id/transactionRules', args] as const
}

export function getPaymentInstrumentsIdTransactionRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['transactionRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.paymentInstruments)[':id']['transactionRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPaymentInstrumentsIdTransactionRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.paymentInstruments[':id'].transactionRules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.paymentInstruments)[':id']['transactionRules']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPaymentInstrumentsIdTransactionRulesQueryKey>
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
      ...getPaymentInstrumentsIdTransactionRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePaymentInstrumentsIdTransactionRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.paymentInstruments)[':id']['transactionRules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.paymentInstruments)[':id']['transactionRules']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getPaymentInstrumentsIdTransactionRulesQueryKey>
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
      ...getPaymentInstrumentsIdTransactionRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.change.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.pins.change.$post>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.reveal.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.pins.reveal.$post>,
        TOnMutateResult
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

export function getPublicKeyQueryKey(args: InferRequestType<typeof client.publicKey.$get>) {
  return ['publicKey', '/publicKey', args] as const
}

export function getPublicKeyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publicKey.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.publicKey.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publicKey.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPublicKeyQueryKey>
  >({
    queryKey: getPublicKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.publicKey.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePublicKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publicKey.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.publicKey.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publicKey.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPublicKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPublicKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePublicKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publicKey.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.publicKey.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publicKey.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPublicKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPublicKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRegisteredDevicesQueryKey(
  args: InferRequestType<typeof client.registeredDevices.$get>,
) {
  return ['registeredDevices', '/registeredDevices', args] as const
}

export function getRegisteredDevicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registeredDevices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.registeredDevices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registeredDevices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRegisteredDevicesQueryKey>
  >({
    queryKey: getRegisteredDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registeredDevices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRegisteredDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registeredDevices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.registeredDevices.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.registeredDevices.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegisteredDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRegisteredDevicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRegisteredDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registeredDevices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.registeredDevices.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.registeredDevices.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegisteredDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRegisteredDevicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.transactionRules)[':transactionRuleId']['$get']>,
) {
  return ['transactionRules', '/transactionRules/:transactionRuleId', args] as const
}

export function getTransactionRulesTransactionRuleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.transactionRules)[':transactionRuleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.transactionRules)[':transactionRuleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTransactionRulesTransactionRuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.transactionRules[':transactionRuleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.transactionRules)[':transactionRuleId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getTransactionRulesTransactionRuleIdQueryKey>
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
      ...getTransactionRulesTransactionRuleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTransactionRulesTransactionRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.transactionRules)[':transactionRuleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.transactionRules)[':transactionRuleId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getTransactionRulesTransactionRuleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
      UseMutationOptions<
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
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transferRoutes.calculate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transferRoutes.calculate.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.accountHolders)[':id']['taxFormSummary']['$get']>,
) {
  return ['accountHolders', '/accountHolders/:id/taxFormSummary', args] as const
}

export function getAccountHoldersIdTaxFormSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accountHolders)[':id']['taxFormSummary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accountHolders)[':id']['taxFormSummary']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountHoldersIdTaxFormSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accountHolders[':id'].taxFormSummary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.accountHolders)[':id']['taxFormSummary']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAccountHoldersIdTaxFormSummaryQueryKey>
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
      ...getAccountHoldersIdTaxFormSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountHoldersIdTaxFormSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accountHolders)[':id']['taxFormSummary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accountHolders)[':id']['taxFormSummary']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAccountHoldersIdTaxFormSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBalanceAccountsBalanceAccountIdPayoutSchedulesQueryKey(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules']['$get']
  >,
) {
  return ['balanceAccounts', '/balanceAccounts/:balanceAccountId/payoutSchedules', args] as const
}

export function getBalanceAccountsBalanceAccountIdPayoutSchedulesQueryOptions<
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
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBalanceAccountsBalanceAccountIdPayoutSchedulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.balanceAccounts[':balanceAccountId'].payoutSchedules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBalanceAccountsBalanceAccountIdPayoutSchedulesQueryKey>
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
      ...getBalanceAccountsBalanceAccountIdPayoutSchedulesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBalanceAccountsBalanceAccountIdPayoutSchedules<
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
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBalanceAccountsBalanceAccountIdPayoutSchedulesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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

export function getBalanceAccountsBalanceAccountIdPayoutSchedulesIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBalanceAccountsBalanceAccountIdPayoutSchedulesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.balanceAccounts[':balanceAccountId'].payoutSchedules[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBalanceAccountsBalanceAccountIdPayoutSchedulesIdQueryKey>
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
      ...getBalanceAccountsBalanceAccountIdPayoutSchedulesIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBalanceAccountsBalanceAccountIdPayoutSchedulesId<
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
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBalanceAccountsBalanceAccountIdPayoutSchedulesIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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

export function getBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['executions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.balanceAccounts[':balanceAccountId'].payoutSchedules[':id'].executions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['executions']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsQueryKey>
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
      ...getBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutions<
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
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['payoutSchedules'][':id']['executions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBalanceAccountsBalanceAccountIdRecurringTopUpsQueryKey(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps']['$get']
  >,
) {
  return ['balanceAccounts', '/balanceAccounts/:balanceAccountId/recurringTopUps', args] as const
}

export function getBalanceAccountsBalanceAccountIdRecurringTopUpsQueryOptions<
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
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBalanceAccountsBalanceAccountIdRecurringTopUpsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.balanceAccounts[':balanceAccountId'].recurringTopUps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBalanceAccountsBalanceAccountIdRecurringTopUpsQueryKey>
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
      ...getBalanceAccountsBalanceAccountIdRecurringTopUpsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBalanceAccountsBalanceAccountIdRecurringTopUps<
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
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['recurringTopUps']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBalanceAccountsBalanceAccountIdRecurringTopUpsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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

export function getBalanceAccountsBalanceAccountIdSweepsSweepIdExecutionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['executions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBalanceAccountsBalanceAccountIdSweepsSweepIdExecutionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.balanceAccounts[':balanceAccountId'].sweeps[':sweepId'].executions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['executions']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBalanceAccountsBalanceAccountIdSweepsSweepIdExecutionsQueryKey>
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
      ...getBalanceAccountsBalanceAccountIdSweepsSweepIdExecutionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBalanceAccountsBalanceAccountIdSweepsSweepIdExecutions<
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
  args: InferRequestType<
    (typeof client.balanceAccounts)[':balanceAccountId']['sweeps'][':sweepId']['executions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBalanceAccountsBalanceAccountIdSweepsSweepIdExecutionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBalanceAccountsIdTransferLimitsQueryKey(
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['transferLimits']['$get']>,
) {
  return ['balanceAccounts', '/balanceAccounts/:id/transferLimits', args] as const
}

export function getBalanceAccountsIdTransferLimitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['transferLimits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['transferLimits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBalanceAccountsIdTransferLimitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.balanceAccounts[':id'].transferLimits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['transferLimits']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getBalanceAccountsIdTransferLimitsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBalanceAccountsIdTransferLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.balanceAccounts)[':id']['transferLimits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.balanceAccounts)[':id']['transferLimits']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBalanceAccountsIdTransferLimitsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<
    (typeof client.balanceAccounts)[':id']['transferLimits']['current']['$get']
  >,
) {
  return ['balanceAccounts', '/balanceAccounts/:id/transferLimits/current', args] as const
}

export function getBalanceAccountsIdTransferLimitsCurrentQueryOptions<
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
  args: InferRequestType<
    (typeof client.balanceAccounts)[':id']['transferLimits']['current']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBalanceAccountsIdTransferLimitsCurrentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.balanceAccounts[':id'].transferLimits.current.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.balanceAccounts)[':id']['transferLimits']['current']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBalanceAccountsIdTransferLimitsCurrentQueryKey>
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
      ...getBalanceAccountsIdTransferLimitsCurrentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBalanceAccountsIdTransferLimitsCurrent<
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
  args: InferRequestType<
    (typeof client.balanceAccounts)[':id']['transferLimits']['current']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getBalanceAccountsIdTransferLimitsCurrentQueryKey>
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
      ...getBalanceAccountsIdTransferLimitsCurrentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBalanceAccountsIdTransferLimitsTransferLimitIdQueryKey(
  args: InferRequestType<
    (typeof client.balanceAccounts)[':id']['transferLimits'][':transferLimitId']['$get']
  >,
) {
  return ['balanceAccounts', '/balanceAccounts/:id/transferLimits/:transferLimitId', args] as const
}

export function getBalanceAccountsIdTransferLimitsTransferLimitIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.balanceAccounts)[':id']['transferLimits'][':transferLimitId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBalanceAccountsIdTransferLimitsTransferLimitIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.balanceAccounts[':id'].transferLimits[':transferLimitId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.balanceAccounts)[':id']['transferLimits'][':transferLimitId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBalanceAccountsIdTransferLimitsTransferLimitIdQueryKey>
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
      ...getBalanceAccountsIdTransferLimitsTransferLimitIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBalanceAccountsIdTransferLimitsTransferLimitId<
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
  args: InferRequestType<
    (typeof client.balanceAccounts)[':id']['transferLimits'][':transferLimitId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBalanceAccountsIdTransferLimitsTransferLimitIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules']['$get']
  >,
) {
  return ['balancePlatforms', '/balancePlatforms/:balancePlatformId/payoutSchedules', args] as const
}

export function getBalancePlatformsBalancePlatformIdPayoutSchedulesQueryOptions<
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
  args: InferRequestType<
    (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBalancePlatformsBalancePlatformIdPayoutSchedulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.balancePlatforms[':balancePlatformId'].payoutSchedules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBalancePlatformsBalancePlatformIdPayoutSchedulesQueryKey>
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
      ...getBalancePlatformsBalancePlatformIdPayoutSchedulesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBalancePlatformsBalancePlatformIdPayoutSchedules<
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
  args: InferRequestType<
    (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBalancePlatformsBalancePlatformIdPayoutSchedulesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBalancePlatformsBalancePlatformIdPayoutSchedulesIdQueryKey(
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

export function getBalancePlatformsBalancePlatformIdPayoutSchedulesIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBalancePlatformsBalancePlatformIdPayoutSchedulesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.balancePlatforms[':balancePlatformId'].payoutSchedules[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules'][':id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBalancePlatformsBalancePlatformIdPayoutSchedulesIdQueryKey>
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
      ...getBalancePlatformsBalancePlatformIdPayoutSchedulesIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBalancePlatformsBalancePlatformIdPayoutSchedulesId<
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
  args: InferRequestType<
    (typeof client.balancePlatforms)[':balancePlatformId']['payoutSchedules'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBalancePlatformsBalancePlatformIdPayoutSchedulesIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsQueryKey(
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

export function getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsQueryOptions<
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
  args: InferRequestType<
    (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.balancePlatforms[':balancePlatformId'].webhooks[':webhookId'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsQueryKey>
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
      ...getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings<
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
  args: InferRequestType<
    (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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

export function getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings'][':settingId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.balancePlatforms[':balancePlatformId'].webhooks[':webhookId'].settings[
          ':settingId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings'][':settingId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdQueryKey
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
      ...getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId<
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
  args: InferRequestType<
    (typeof client.balancePlatforms)[':balancePlatformId']['webhooks'][':webhookId']['settings'][':settingId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.balancePlatforms)[':id']['transferLimits']['$get']>,
) {
  return ['balancePlatforms', '/balancePlatforms/:id/transferLimits', args] as const
}

export function getBalancePlatformsIdTransferLimitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['transferLimits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.balancePlatforms)[':id']['transferLimits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBalancePlatformsIdTransferLimitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.balancePlatforms[':id'].transferLimits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.balancePlatforms)[':id']['transferLimits']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getBalancePlatformsIdTransferLimitsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBalancePlatformsIdTransferLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.balancePlatforms)[':id']['transferLimits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.balancePlatforms)[':id']['transferLimits']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBalancePlatformsIdTransferLimitsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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

export function getBalancePlatformsIdTransferLimitsTransferLimitIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.balancePlatforms)[':id']['transferLimits'][':transferLimitId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBalancePlatformsIdTransferLimitsTransferLimitIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.balancePlatforms[':id'].transferLimits[':transferLimitId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.balancePlatforms)[':id']['transferLimits'][':transferLimitId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBalancePlatformsIdTransferLimitsTransferLimitIdQueryKey>
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
      ...getBalancePlatformsIdTransferLimitsTransferLimitIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBalancePlatformsIdTransferLimitsTransferLimitId<
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
  args: InferRequestType<
    (typeof client.balancePlatforms)[':id']['transferLimits'][':transferLimitId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBalancePlatformsIdTransferLimitsTransferLimitIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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

export function getMandatesQueryKey(args: InferRequestType<typeof client.mandates.$get>) {
  return ['mandates', '/mandates', args] as const
}

export function getMandatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mandates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.mandates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mandates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMandatesQueryKey>
  >({
    queryKey: getMandatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mandates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMandates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mandates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.mandates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mandates.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMandatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMandatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMandates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mandates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.mandates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mandates.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMandatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMandatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMandatesMandateIdQueryKey(
  args: InferRequestType<(typeof client.mandates)[':mandateId']['$get']>,
) {
  return ['mandates', '/mandates/:mandateId', args] as const
}

export function getMandatesMandateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mandates)[':mandateId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mandates)[':mandateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.mandates)[':mandateId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMandatesMandateIdQueryKey>
  >({
    queryKey: getMandatesMandateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mandates[':mandateId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMandatesMandateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mandates)[':mandateId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mandates)[':mandateId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getMandatesMandateIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMandatesMandateIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMandatesMandateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mandates)[':mandateId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mandates)[':mandateId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mandates)[':mandateId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMandatesMandateIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMandatesMandateIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function getPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersQueryOptions<
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
  args: InferRequestType<
    (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.paymentInstruments[':paymentInstrumentId'].authorisedCardUsers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersQueryKey>
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
      ...getPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers<
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
  args: InferRequestType<
    (typeof client.paymentInstruments)[':paymentInstrumentId']['authorisedCardUsers']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<typeof client.scaAssociations.$get>,
) {
  return ['scaAssociations', '/scaAssociations', args] as const
}

export function getScaAssociationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scaAssociations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.scaAssociations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scaAssociations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getScaAssociationsQueryKey>
  >({
    queryKey: getScaAssociationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scaAssociations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useScaAssociations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scaAssociations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.scaAssociations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scaAssociations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getScaAssociationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getScaAssociationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseScaAssociations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scaAssociations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.scaAssociations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scaAssociations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getScaAssociationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getScaAssociationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scaDevices.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.scaDevices.$post>,
        TOnMutateResult
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
