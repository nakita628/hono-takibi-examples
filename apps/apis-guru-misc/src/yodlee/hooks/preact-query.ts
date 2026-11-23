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

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getAuthKey() {
  return ['auth'] as const
}

export function getCobrandKey() {
  return ['cobrand'] as const
}

export function getConfigsKey() {
  return ['configs'] as const
}

export function getDataExtractsKey() {
  return ['dataExtracts'] as const
}

export function getDerivedKey() {
  return ['derived'] as const
}

export function getDocumentsKey() {
  return ['documents'] as const
}

export function getHoldingsKey() {
  return ['holdings'] as const
}

export function getProviderAccountsKey() {
  return ['providerAccounts'] as const
}

export function getProvidersKey() {
  return ['providers'] as const
}

export function getStatementsKey() {
  return ['statements'] as const
}

export function getTransactionsKey() {
  return ['transactions'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getVerificationKey() {
  return ['verification'] as const
}

export function getVerifyAccountKey() {
  return ['verifyAccount'] as const
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

export function getPostAccountsEvaluateAddressMutationKey() {
  return ['accounts', '/accounts/evaluateAddress', 'POST'] as const
}

export function getPostAccountsEvaluateAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.accounts.evaluateAddress.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.accounts.evaluateAddress.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsEvaluateAddressMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounts.evaluateAddress.$post>) {
      return parseResponse(client.accounts.evaluateAddress.$post(args, options))
    },
  })
}

export function usePostAccountsEvaluateAddress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.accounts.evaluateAddress.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.accounts.evaluateAddress.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountsEvaluateAddressMutationOptions<TError, TOnMutateResult>(
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

export function getAccountsHistoricalBalancesQueryKey(
  args: InferRequestType<typeof client.accounts.historicalBalances.$get>,
) {
  return ['accounts', '/accounts/historicalBalances', args] as const
}

export function getAccountsHistoricalBalancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.accounts.historicalBalances.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.accounts.historicalBalances.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.accounts.historicalBalances.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsHistoricalBalancesQueryKey>
  >({
    queryKey: getAccountsHistoricalBalancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts.historicalBalances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountsHistoricalBalances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.accounts.historicalBalances.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.accounts.historicalBalances.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.accounts.historicalBalances.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsHistoricalBalancesQueryKey>
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
      ...getAccountsHistoricalBalancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsHistoricalBalances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.accounts.historicalBalances.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.accounts.historicalBalances.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.accounts.historicalBalances.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsHistoricalBalancesQueryKey>
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
      ...getAccountsHistoricalBalancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAccountsAccountIdQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
) {
  return ['accounts', '/accounts/:accountId', args] as const
}

export function getAccountsAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdQueryKey>
  >({
    queryKey: getAccountsAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].$get(args, {
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
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>
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
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>
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

export function getPutAccountsAccountIdMutationKey() {
  return ['accounts', '/accounts/:accountId', 'PUT'] as const
}

export function getPutAccountsAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAccountIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.accounts)[':accountId']['$put']>) {
      return parseResponse(client.accounts[':accountId'].$put(args, options))
    },
  })
}

export function usePutAccountsAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.accounts)[':accountId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountsAccountIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAccountsAccountIdMutationKey() {
  return ['accounts', '/accounts/:accountId', 'DELETE'] as const
}

export function getDeleteAccountsAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAccountIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.accounts)[':accountId']['$delete']>) {
      return parseResponse(client.accounts[':accountId'].$delete(args, options))
    },
  })
}

export function useDeleteAccountsAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.accounts)[':accountId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountsAccountIdMutationOptions<TError, TOnMutateResult>(
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

export function getAuthApiKeyQueryKey() {
  return ['auth', '/auth/apiKey'] as const
}

export function getAuthApiKeyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.apiKey.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.apiKey.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAuthApiKeyQueryKey>
  >({
    queryKey: getAuthApiKeyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.auth.apiKey.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAuthApiKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.apiKey.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.apiKey.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAuthApiKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAuthApiKeyQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAuthApiKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.apiKey.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.apiKey.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAuthApiKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAuthApiKeyQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAuthApiKeyMutationKey() {
  return ['auth', '/auth/apiKey', 'POST'] as const
}

export function getPostAuthApiKeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.apiKey.$post>>>>>,
    TError,
    InferRequestType<typeof client.auth.apiKey.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthApiKeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.apiKey.$post>) {
      return parseResponse(client.auth.apiKey.$post(args, options))
    },
  })
}

export function usePostAuthApiKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.apiKey.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.auth.apiKey.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthApiKeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAuthApiKeyKeyMutationKey() {
  return ['auth', '/auth/apiKey/:key', 'DELETE'] as const
}

export function getDeleteAuthApiKeyKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.auth.apiKey)[':key']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.auth.apiKey)[':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuthApiKeyKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.auth.apiKey)[':key']['$delete']>) {
      return parseResponse(client.auth.apiKey[':key'].$delete(args, options))
    },
  })
}

export function useDeleteAuthApiKeyKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.auth.apiKey)[':key']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.auth.apiKey)[':key']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAuthApiKeyKeyMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthTokenMutationKey() {
  return ['auth', '/auth/token', 'POST'] as const
}

export function getPostAuthTokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAuthTokenMutationKey(),
    async mutationFn() {
      return parseResponse(client.auth.token.$post(undefined, options))
    },
  })
}

export function usePostAuthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAuthTokenMutationKey() {
  return ['auth', '/auth/token', 'DELETE'] as const
}

export function getDeleteAuthTokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.$delete>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuthTokenMutationKey(),
    async mutationFn() {
      return parseResponse(client.auth.token.$delete(undefined, options))
    },
  })
}

export function useDeleteAuthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.$delete>>>>
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAuthTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCobrandConfigNotificationsEventsQueryKey(
  args: InferRequestType<typeof client.cobrand.config.notifications.events.$get>,
) {
  return ['cobrand', '/cobrand/config/notifications/events', args] as const
}

export function getCobrandConfigNotificationsEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.cobrand.config.notifications.events.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.cobrand.config.notifications.events.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cobrand.config.notifications.events.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCobrandConfigNotificationsEventsQueryKey>
  >({
    queryKey: getCobrandConfigNotificationsEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cobrand.config.notifications.events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCobrandConfigNotificationsEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.cobrand.config.notifications.events.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.cobrand.config.notifications.events.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.cobrand.config.notifications.events.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCobrandConfigNotificationsEventsQueryKey>
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
      ...getCobrandConfigNotificationsEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCobrandConfigNotificationsEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.cobrand.config.notifications.events.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.cobrand.config.notifications.events.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.cobrand.config.notifications.events.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCobrandConfigNotificationsEventsQueryKey>
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
      ...getCobrandConfigNotificationsEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutCobrandConfigNotificationsEventsEventNameMutationKey() {
  return ['cobrand', '/cobrand/config/notifications/events/:eventName', 'PUT'] as const
}

export function getPutCobrandConfigNotificationsEventsEventNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cobrand.config.notifications.events)[':eventName']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.cobrand.config.notifications.events)[':eventName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCobrandConfigNotificationsEventsEventNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cobrand.config.notifications.events)[':eventName']['$put']
      >,
    ) {
      return parseResponse(
        client.cobrand.config.notifications.events[':eventName'].$put(args, options),
      )
    },
  })
}

export function usePutCobrandConfigNotificationsEventsEventName<
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
                    (typeof client.cobrand.config.notifications.events)[':eventName']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.cobrand.config.notifications.events)[':eventName']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCobrandConfigNotificationsEventsEventNameMutationOptions<
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

export function getPostCobrandConfigNotificationsEventsEventNameMutationKey() {
  return ['cobrand', '/cobrand/config/notifications/events/:eventName', 'POST'] as const
}

export function getPostCobrandConfigNotificationsEventsEventNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cobrand.config.notifications.events)[':eventName']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cobrand.config.notifications.events)[':eventName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCobrandConfigNotificationsEventsEventNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cobrand.config.notifications.events)[':eventName']['$post']
      >,
    ) {
      return parseResponse(
        client.cobrand.config.notifications.events[':eventName'].$post(args, options),
      )
    },
  })
}

export function usePostCobrandConfigNotificationsEventsEventName<
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
                  (typeof client.cobrand.config.notifications.events)[':eventName']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.cobrand.config.notifications.events)[':eventName']['$post']
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
  const mutationDefaults = getPostCobrandConfigNotificationsEventsEventNameMutationOptions<
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

export function getDeleteCobrandConfigNotificationsEventsEventNameMutationKey() {
  return ['cobrand', '/cobrand/config/notifications/events/:eventName', 'DELETE'] as const
}

export function getDeleteCobrandConfigNotificationsEventsEventNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cobrand.config.notifications.events)[':eventName']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.cobrand.config.notifications.events)[':eventName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCobrandConfigNotificationsEventsEventNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cobrand.config.notifications.events)[':eventName']['$delete']
      >,
    ) {
      return parseResponse(
        client.cobrand.config.notifications.events[':eventName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCobrandConfigNotificationsEventsEventName<
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
                    (typeof client.cobrand.config.notifications.events)[':eventName']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.cobrand.config.notifications.events)[':eventName']['$delete']
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
  const mutationDefaults = getDeleteCobrandConfigNotificationsEventsEventNameMutationOptions<
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

export function getPostCobrandLoginMutationKey() {
  return ['cobrand', '/cobrand/login', 'POST'] as const
}

export function getPostCobrandLoginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cobrand.login.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.cobrand.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCobrandLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cobrand.login.$post>) {
      return parseResponse(client.cobrand.login.$post(args, options))
    },
  })
}

export function usePostCobrandLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cobrand.login.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.cobrand.login.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCobrandLoginMutationOptions<TError, TOnMutateResult>(
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

export function getPostCobrandLogoutMutationKey() {
  return ['cobrand', '/cobrand/logout', 'POST'] as const
}

export function getPostCobrandLogoutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cobrand.logout.$post>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostCobrandLogoutMutationKey(),
    async mutationFn() {
      return parseResponse(client.cobrand.logout.$post(undefined, options))
    },
  })
}

export function usePostCobrandLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cobrand.logout.$post>>>
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCobrandLogoutMutationOptions<TError, TOnMutateResult>(
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

export function getCobrandPublicKeyQueryKey() {
  return ['cobrand', '/cobrand/publicKey'] as const
}

export function getCobrandPublicKeyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cobrand.publicKey.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cobrand.publicKey.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCobrandPublicKeyQueryKey>
  >({
    queryKey: getCobrandPublicKeyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.cobrand.publicKey.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCobrandPublicKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cobrand.publicKey.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cobrand.publicKey.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCobrandPublicKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCobrandPublicKeyQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCobrandPublicKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cobrand.publicKey.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cobrand.publicKey.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCobrandPublicKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCobrandPublicKeyQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getConfigsNotificationsEventsQueryKey(
  args: InferRequestType<typeof client.configs.notifications.events.$get>,
) {
  return ['configs', '/configs/notifications/events', args] as const
}

export function getConfigsNotificationsEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.configs.notifications.events.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.configs.notifications.events.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.configs.notifications.events.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConfigsNotificationsEventsQueryKey>
  >({
    queryKey: getConfigsNotificationsEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.configs.notifications.events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConfigsNotificationsEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.configs.notifications.events.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.configs.notifications.events.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.configs.notifications.events.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConfigsNotificationsEventsQueryKey>
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
      ...getConfigsNotificationsEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConfigsNotificationsEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.configs.notifications.events.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.configs.notifications.events.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.configs.notifications.events.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConfigsNotificationsEventsQueryKey>
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
      ...getConfigsNotificationsEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutConfigsNotificationsEventsEventNameMutationKey() {
  return ['configs', '/configs/notifications/events/:eventName', 'PUT'] as const
}

export function getPutConfigsNotificationsEventsEventNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.configs.notifications.events)[':eventName']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.configs.notifications.events)[':eventName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConfigsNotificationsEventsEventNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.configs.notifications.events)[':eventName']['$put']>,
    ) {
      return parseResponse(client.configs.notifications.events[':eventName'].$put(args, options))
    },
  })
}

export function usePutConfigsNotificationsEventsEventName<
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
                  ReturnType<(typeof client.configs.notifications.events)[':eventName']['$put']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.configs.notifications.events)[':eventName']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutConfigsNotificationsEventsEventNameMutationOptions<
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

export function getPostConfigsNotificationsEventsEventNameMutationKey() {
  return ['configs', '/configs/notifications/events/:eventName', 'POST'] as const
}

export function getPostConfigsNotificationsEventsEventNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.configs.notifications.events)[':eventName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.configs.notifications.events)[':eventName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConfigsNotificationsEventsEventNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.configs.notifications.events)[':eventName']['$post']>,
    ) {
      return parseResponse(client.configs.notifications.events[':eventName'].$post(args, options))
    },
  })
}

export function usePostConfigsNotificationsEventsEventName<
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
                ReturnType<(typeof client.configs.notifications.events)[':eventName']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.configs.notifications.events)[':eventName']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConfigsNotificationsEventsEventNameMutationOptions<
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

export function getDeleteConfigsNotificationsEventsEventNameMutationKey() {
  return ['configs', '/configs/notifications/events/:eventName', 'DELETE'] as const
}

export function getDeleteConfigsNotificationsEventsEventNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.configs.notifications.events)[':eventName']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.configs.notifications.events)[':eventName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConfigsNotificationsEventsEventNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.configs.notifications.events)[':eventName']['$delete']>,
    ) {
      return parseResponse(client.configs.notifications.events[':eventName'].$delete(args, options))
    },
  })
}

export function useDeleteConfigsNotificationsEventsEventName<
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
                  ReturnType<(typeof client.configs.notifications.events)[':eventName']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.configs.notifications.events)[':eventName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteConfigsNotificationsEventsEventNameMutationOptions<
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

export function getConfigsPublicKeyQueryKey() {
  return ['configs', '/configs/publicKey'] as const
}

export function getConfigsPublicKeyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configs.publicKey.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configs.publicKey.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConfigsPublicKeyQueryKey>
  >({
    queryKey: getConfigsPublicKeyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.configs.publicKey.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConfigsPublicKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configs.publicKey.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.configs.publicKey.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConfigsPublicKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getConfigsPublicKeyQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseConfigsPublicKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configs.publicKey.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.configs.publicKey.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConfigsPublicKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getConfigsPublicKeyQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDataExtractsEventsQueryKey(
  args: InferRequestType<typeof client.dataExtracts.events.$get>,
) {
  return ['dataExtracts', '/dataExtracts/events', args] as const
}

export function getDataExtractsEventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataExtracts.events.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.dataExtracts.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataExtracts.events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDataExtractsEventsQueryKey>
  >({
    queryKey: getDataExtractsEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dataExtracts.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDataExtractsEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataExtracts.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.dataExtracts.events.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dataExtracts.events.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataExtractsEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDataExtractsEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDataExtractsEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataExtracts.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.dataExtracts.events.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dataExtracts.events.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataExtractsEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDataExtractsEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDataExtractsUserDataQueryKey(
  args: InferRequestType<typeof client.dataExtracts.userData.$get>,
) {
  return ['dataExtracts', '/dataExtracts/userData', args] as const
}

export function getDataExtractsUserDataQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataExtracts.userData.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.dataExtracts.userData.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.dataExtracts.userData.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataExtractsUserDataQueryKey>
  >({
    queryKey: getDataExtractsUserDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dataExtracts.userData.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDataExtractsUserData<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataExtracts.userData.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.dataExtracts.userData.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dataExtracts.userData.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataExtractsUserDataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDataExtractsUserDataQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDataExtractsUserData<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataExtracts.userData.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.dataExtracts.userData.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dataExtracts.userData.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataExtractsUserDataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDataExtractsUserDataQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDerivedHoldingSummaryQueryKey(
  args: InferRequestType<typeof client.derived.holdingSummary.$get>,
) {
  return ['derived', '/derived/holdingSummary', args] as const
}

export function getDerivedHoldingSummaryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.derived.holdingSummary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.derived.holdingSummary.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.derived.holdingSummary.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDerivedHoldingSummaryQueryKey>
  >({
    queryKey: getDerivedHoldingSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.derived.holdingSummary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDerivedHoldingSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.derived.holdingSummary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.derived.holdingSummary.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.derived.holdingSummary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDerivedHoldingSummaryQueryKey>
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
      ...getDerivedHoldingSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDerivedHoldingSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.derived.holdingSummary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.derived.holdingSummary.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.derived.holdingSummary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDerivedHoldingSummaryQueryKey>
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
      ...getDerivedHoldingSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDerivedNetworthQueryKey(
  args: InferRequestType<typeof client.derived.networth.$get>,
) {
  return ['derived', '/derived/networth', args] as const
}

export function getDerivedNetworthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.derived.networth.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.derived.networth.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.derived.networth.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDerivedNetworthQueryKey>
  >({
    queryKey: getDerivedNetworthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.derived.networth.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDerivedNetworth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.derived.networth.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.derived.networth.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.derived.networth.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDerivedNetworthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDerivedNetworthQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDerivedNetworth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.derived.networth.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.derived.networth.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.derived.networth.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDerivedNetworthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDerivedNetworthQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDerivedTransactionSummaryQueryKey(
  args: InferRequestType<typeof client.derived.transactionSummary.$get>,
) {
  return ['derived', '/derived/transactionSummary', args] as const
}

export function getDerivedTransactionSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.derived.transactionSummary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.derived.transactionSummary.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.derived.transactionSummary.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDerivedTransactionSummaryQueryKey>
  >({
    queryKey: getDerivedTransactionSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.derived.transactionSummary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDerivedTransactionSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.derived.transactionSummary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.derived.transactionSummary.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.derived.transactionSummary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDerivedTransactionSummaryQueryKey>
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
      ...getDerivedTransactionSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDerivedTransactionSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.derived.transactionSummary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.derived.transactionSummary.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.derived.transactionSummary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDerivedTransactionSummaryQueryKey>
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
      ...getDerivedTransactionSummaryQueryOptions<TData, TError>(args, clientOptions),
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
  args: InferRequestType<(typeof client.documents)[':documentId']['$get']>,
) {
  return ['documents', '/documents/:documentId', args] as const
}

export function getDocumentsDocumentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':documentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.documents)[':documentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':documentId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDocumentIdQueryKey>
  >({
    queryKey: getDocumentsDocumentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.documents[':documentId'].$get(args, {
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
      typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':documentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.documents)[':documentId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.documents)[':documentId']['$get']>>
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
      typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':documentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.documents)[':documentId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.documents)[':documentId']['$get']>>
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

export function getDeleteDocumentsDocumentIdMutationKey() {
  return ['documents', '/documents/:documentId', 'DELETE'] as const
}

export function getDeleteDocumentsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':documentId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.documents)[':documentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDocumentsDocumentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.documents)[':documentId']['$delete']>) {
      return parseResponse(client.documents[':documentId'].$delete(args, options))
    },
  })
}

export function useDeleteDocumentsDocumentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.documents)[':documentId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.documents)[':documentId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDocumentsDocumentIdMutationOptions<TError, TOnMutateResult>(
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

export function getHoldingsQueryKey(args: InferRequestType<typeof client.holdings.$get>) {
  return ['holdings', '/holdings', args] as const
}

export function getHoldingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.holdings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.holdings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.holdings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHoldingsQueryKey>
  >({
    queryKey: getHoldingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.holdings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHoldings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.holdings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.holdings.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.holdings.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHoldingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHoldingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHoldings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.holdings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.holdings.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.holdings.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHoldingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHoldingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHoldingsAssetClassificationListQueryKey() {
  return ['holdings', '/holdings/assetClassificationList'] as const
}

export function getHoldingsAssetClassificationListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.holdings.assetClassificationList.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.holdings.assetClassificationList.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHoldingsAssetClassificationListQueryKey>
  >({
    queryKey: getHoldingsAssetClassificationListQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.holdings.assetClassificationList.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useHoldingsAssetClassificationList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.holdings.assetClassificationList.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.holdings.assetClassificationList.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHoldingsAssetClassificationListQueryKey>
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
      ...getHoldingsAssetClassificationListQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHoldingsAssetClassificationList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.holdings.assetClassificationList.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.holdings.assetClassificationList.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHoldingsAssetClassificationListQueryKey>
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
      ...getHoldingsAssetClassificationListQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getHoldingsHoldingTypeListQueryKey() {
  return ['holdings', '/holdings/holdingTypeList'] as const
}

export function getHoldingsHoldingTypeListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.holdings.holdingTypeList.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.holdings.holdingTypeList.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHoldingsHoldingTypeListQueryKey>
  >({
    queryKey: getHoldingsHoldingTypeListQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.holdings.holdingTypeList.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useHoldingsHoldingTypeList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.holdings.holdingTypeList.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.holdings.holdingTypeList.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHoldingsHoldingTypeListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHoldingsHoldingTypeListQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHoldingsHoldingTypeList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.holdings.holdingTypeList.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.holdings.holdingTypeList.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHoldingsHoldingTypeListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHoldingsHoldingTypeListQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHoldingsSecuritiesQueryKey(
  args: InferRequestType<typeof client.holdings.securities.$get>,
) {
  return ['holdings', '/holdings/securities', args] as const
}

export function getHoldingsSecuritiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.holdings.securities.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.holdings.securities.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.holdings.securities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHoldingsSecuritiesQueryKey>
  >({
    queryKey: getHoldingsSecuritiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.holdings.securities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHoldingsSecurities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.holdings.securities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.holdings.securities.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.holdings.securities.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHoldingsSecuritiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHoldingsSecuritiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHoldingsSecurities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.holdings.securities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.holdings.securities.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.holdings.securities.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHoldingsSecuritiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHoldingsSecuritiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProviderAccountsQueryKey(
  args: InferRequestType<typeof client.providerAccounts.$get>,
) {
  return ['providerAccounts', '/providerAccounts', args] as const
}

export function getProviderAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providerAccounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.providerAccounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providerAccounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProviderAccountsQueryKey>
  >({
    queryKey: getProviderAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.providerAccounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProviderAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providerAccounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.providerAccounts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providerAccounts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProviderAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProviderAccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProviderAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providerAccounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.providerAccounts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providerAccounts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProviderAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProviderAccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutProviderAccountsMutationKey() {
  return ['providerAccounts', '/providerAccounts', 'PUT'] as const
}

export function getPutProviderAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providerAccounts.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.providerAccounts.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutProviderAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.providerAccounts.$put>) {
      return parseResponse(client.providerAccounts.$put(args, options))
    },
  })
}

export function usePutProviderAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providerAccounts.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.providerAccounts.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutProviderAccountsMutationOptions<TError, TOnMutateResult>(
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

export function getProviderAccountsProfileQueryKey(
  args: InferRequestType<typeof client.providerAccounts.profile.$get>,
) {
  return ['providerAccounts', '/providerAccounts/profile', args] as const
}

export function getProviderAccountsProfileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.providerAccounts.profile.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.providerAccounts.profile.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.providerAccounts.profile.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProviderAccountsProfileQueryKey>
  >({
    queryKey: getProviderAccountsProfileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.providerAccounts.profile.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProviderAccountsProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.providerAccounts.profile.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.providerAccounts.profile.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.providerAccounts.profile.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProviderAccountsProfileQueryKey>
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
      ...getProviderAccountsProfileQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProviderAccountsProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.providerAccounts.profile.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.providerAccounts.profile.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.providerAccounts.profile.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProviderAccountsProfileQueryKey>
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
      ...getProviderAccountsProfileQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getProviderAccountsProviderAccountIdQueryKey(
  args: InferRequestType<(typeof client.providerAccounts)[':providerAccountId']['$get']>,
) {
  return ['providerAccounts', '/providerAccounts/:providerAccountId', args] as const
}

export function getProviderAccountsProviderAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providerAccounts)[':providerAccountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.providerAccounts)[':providerAccountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.providerAccounts)[':providerAccountId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProviderAccountsProviderAccountIdQueryKey>
  >({
    queryKey: getProviderAccountsProviderAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.providerAccounts[':providerAccountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProviderAccountsProviderAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providerAccounts)[':providerAccountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.providerAccounts)[':providerAccountId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.providerAccounts)[':providerAccountId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProviderAccountsProviderAccountIdQueryKey>
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
      ...getProviderAccountsProviderAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProviderAccountsProviderAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providerAccounts)[':providerAccountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.providerAccounts)[':providerAccountId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.providerAccounts)[':providerAccountId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProviderAccountsProviderAccountIdQueryKey>
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
      ...getProviderAccountsProviderAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteProviderAccountsProviderAccountIdMutationKey() {
  return ['providerAccounts', '/providerAccounts/:providerAccountId', 'DELETE'] as const
}

export function getDeleteProviderAccountsProviderAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.providerAccounts)[':providerAccountId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.providerAccounts)[':providerAccountId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProviderAccountsProviderAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.providerAccounts)[':providerAccountId']['$delete']>,
    ) {
      return parseResponse(client.providerAccounts[':providerAccountId'].$delete(args, options))
    },
  })
}

export function useDeleteProviderAccountsProviderAccountId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.providerAccounts)[':providerAccountId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.providerAccounts)[':providerAccountId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProviderAccountsProviderAccountIdMutationOptions<
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

export function getPutProviderAccountsProviderAccountIdPreferencesMutationKey() {
  return ['providerAccounts', '/providerAccounts/:providerAccountId/preferences', 'PUT'] as const
}

export function getPutProviderAccountsProviderAccountIdPreferencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.providerAccounts)[':providerAccountId']['preferences']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.providerAccounts)[':providerAccountId']['preferences']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProviderAccountsProviderAccountIdPreferencesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.providerAccounts)[':providerAccountId']['preferences']['$put']
      >,
    ) {
      return parseResponse(
        client.providerAccounts[':providerAccountId'].preferences.$put(args, options),
      )
    },
  })
}

export function usePutProviderAccountsProviderAccountIdPreferences<
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
                    (typeof client.providerAccounts)[':providerAccountId']['preferences']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.providerAccounts)[':providerAccountId']['preferences']['$put']
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
  const mutationDefaults = getPutProviderAccountsProviderAccountIdPreferencesMutationOptions<
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

export function getProvidersQueryKey(args: InferRequestType<typeof client.providers.$get>) {
  return ['providers', '/providers', args] as const
}

export function getProvidersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.providers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProvidersQueryKey>
  >({
    queryKey: getProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.providers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.providers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProvidersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.providers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProvidersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProvidersCountQueryKey(
  args: InferRequestType<typeof client.providers.count.$get>,
) {
  return ['providers', '/providers/count', args] as const
}

export function getProvidersCountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.count.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.providers.count.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersCountQueryKey>
  >({
    queryKey: getProvidersCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.providers.count.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProvidersCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.providers.count.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.count.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProvidersCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProvidersCountQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProvidersCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.providers.count.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.count.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProvidersCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProvidersCountQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProvidersProviderIdQueryKey(
  args: InferRequestType<(typeof client.providers)[':providerId']['$get']>,
) {
  return ['providers', '/providers/:providerId', args] as const
}

export function getProvidersProviderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.providers)[':providerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.providers)[':providerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.providers)[':providerId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersProviderIdQueryKey>
  >({
    queryKey: getProvidersProviderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.providers[':providerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProvidersProviderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.providers)[':providerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.providers)[':providerId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.providers)[':providerId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProvidersProviderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProvidersProviderIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProvidersProviderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.providers)[':providerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.providers)[':providerId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.providers)[':providerId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProvidersProviderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProvidersProviderIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStatementsQueryKey(args: InferRequestType<typeof client.statements.$get>) {
  return ['statements', '/statements', args] as const
}

export function getStatementsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statements.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.statements.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statements.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatementsQueryKey>
  >({
    queryKey: getStatementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.statements.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStatements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.statements.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statements.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStatementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStatementsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStatements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.statements.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statements.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStatementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStatementsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function getTransactionsCategoriesQueryKey() {
  return ['transactions', '/transactions/categories'] as const
}

export function getTransactionsCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.transactions.categories.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transactions.categories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionsCategoriesQueryKey>
  >({
    queryKey: getTransactionsCategoriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.transactions.categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTransactionsCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.transactions.categories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transactions.categories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTransactionsCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTransactionsCategoriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTransactionsCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.transactions.categories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transactions.categories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTransactionsCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTransactionsCategoriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutTransactionsCategoriesMutationKey() {
  return ['transactions', '/transactions/categories', 'PUT'] as const
}

export function getPutTransactionsCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.transactions.categories.$put>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.transactions.categories.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutTransactionsCategoriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transactions.categories.$put>) {
      return parseResponse(client.transactions.categories.$put(args, options))
    },
  })
}

export function usePutTransactionsCategories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transactions.categories.$put>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.transactions.categories.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTransactionsCategoriesMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransactionsCategoriesMutationKey() {
  return ['transactions', '/transactions/categories', 'POST'] as const
}

export function getPostTransactionsCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transactions.categories.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.transactions.categories.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransactionsCategoriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transactions.categories.$post>) {
      return parseResponse(client.transactions.categories.$post(args, options))
    },
  })
}

export function usePostTransactionsCategories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transactions.categories.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transactions.categories.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransactionsCategoriesMutationOptions<TError, TOnMutateResult>(
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

export function getTransactionsCategoriesRulesQueryKey() {
  return ['transactions', '/transactions/categories/rules'] as const
}

export function getTransactionsCategoriesRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.transactions.categories.rules.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transactions.categories.rules.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionsCategoriesRulesQueryKey>
  >({
    queryKey: getTransactionsCategoriesRulesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.transactions.categories.rules.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTransactionsCategoriesRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.transactions.categories.rules.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.transactions.categories.rules.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTransactionsCategoriesRulesQueryKey>
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
      ...getTransactionsCategoriesRulesQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTransactionsCategoriesRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.transactions.categories.rules.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.transactions.categories.rules.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTransactionsCategoriesRulesQueryKey>
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
      ...getTransactionsCategoriesRulesQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTransactionsCategoriesRulesMutationKey() {
  return ['transactions', '/transactions/categories/rules', 'POST'] as const
}

export function getPostTransactionsCategoriesRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.transactions.categories.rules.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.transactions.categories.rules.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransactionsCategoriesRulesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transactions.categories.rules.$post>) {
      return parseResponse(client.transactions.categories.rules.$post(args, options))
    },
  })
}

export function usePostTransactionsCategoriesRules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.transactions.categories.rules.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.transactions.categories.rules.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransactionsCategoriesRulesMutationOptions<
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

export function getPutTransactionsCategoriesRulesRuleIdMutationKey() {
  return ['transactions', '/transactions/categories/rules/:ruleId', 'PUT'] as const
}

export function getPutTransactionsCategoriesRulesRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transactions.categories.rules)[':ruleId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.transactions.categories.rules)[':ruleId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTransactionsCategoriesRulesRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.transactions.categories.rules)[':ruleId']['$put']>,
    ) {
      return parseResponse(client.transactions.categories.rules[':ruleId'].$put(args, options))
    },
  })
}

export function usePutTransactionsCategoriesRulesRuleId<
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
                  ReturnType<(typeof client.transactions.categories.rules)[':ruleId']['$put']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.transactions.categories.rules)[':ruleId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTransactionsCategoriesRulesRuleIdMutationOptions<
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

export function getPostTransactionsCategoriesRulesRuleIdMutationKey() {
  return ['transactions', '/transactions/categories/rules/:ruleId', 'POST'] as const
}

export function getPostTransactionsCategoriesRulesRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transactions.categories.rules)[':ruleId']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.transactions.categories.rules)[':ruleId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTransactionsCategoriesRulesRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.transactions.categories.rules)[':ruleId']['$post']>,
    ) {
      return parseResponse(client.transactions.categories.rules[':ruleId'].$post(args, options))
    },
  })
}

export function usePostTransactionsCategoriesRulesRuleId<
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
                  ReturnType<(typeof client.transactions.categories.rules)[':ruleId']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.transactions.categories.rules)[':ruleId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransactionsCategoriesRulesRuleIdMutationOptions<
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

export function getDeleteTransactionsCategoriesRulesRuleIdMutationKey() {
  return ['transactions', '/transactions/categories/rules/:ruleId', 'DELETE'] as const
}

export function getDeleteTransactionsCategoriesRulesRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transactions.categories.rules)[':ruleId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.transactions.categories.rules)[':ruleId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTransactionsCategoriesRulesRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.transactions.categories.rules)[':ruleId']['$delete']>,
    ) {
      return parseResponse(client.transactions.categories.rules[':ruleId'].$delete(args, options))
    },
  })
}

export function useDeleteTransactionsCategoriesRulesRuleId<
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
                  ReturnType<(typeof client.transactions.categories.rules)[':ruleId']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.transactions.categories.rules)[':ruleId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTransactionsCategoriesRulesRuleIdMutationOptions<
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

export function getTransactionsCategoriesTxnRulesQueryKey() {
  return ['transactions', '/transactions/categories/txnRules'] as const
}

export function getTransactionsCategoriesTxnRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.transactions.categories.txnRules.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.transactions.categories.txnRules.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionsCategoriesTxnRulesQueryKey>
  >({
    queryKey: getTransactionsCategoriesTxnRulesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.transactions.categories.txnRules.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTransactionsCategoriesTxnRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.transactions.categories.txnRules.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.transactions.categories.txnRules.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTransactionsCategoriesTxnRulesQueryKey>
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
      ...getTransactionsCategoriesTxnRulesQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTransactionsCategoriesTxnRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.transactions.categories.txnRules.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.transactions.categories.txnRules.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTransactionsCategoriesTxnRulesQueryKey>
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
      ...getTransactionsCategoriesTxnRulesQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteTransactionsCategoriesCategoryIdMutationKey() {
  return ['transactions', '/transactions/categories/:categoryId', 'DELETE'] as const
}

export function getDeleteTransactionsCategoriesCategoryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transactions.categories)[':categoryId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.transactions.categories)[':categoryId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTransactionsCategoriesCategoryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.transactions.categories)[':categoryId']['$delete']>,
    ) {
      return parseResponse(client.transactions.categories[':categoryId'].$delete(args, options))
    },
  })
}

export function useDeleteTransactionsCategoriesCategoryId<
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
                  ReturnType<(typeof client.transactions.categories)[':categoryId']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.transactions.categories)[':categoryId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTransactionsCategoriesCategoryIdMutationOptions<
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

export function getTransactionsCountQueryKey(
  args: InferRequestType<typeof client.transactions.count.$get>,
) {
  return ['transactions', '/transactions/count', args] as const
}

export function getTransactionsCountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.count.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.transactions.count.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionsCountQueryKey>
  >({
    queryKey: getTransactionsCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.transactions.count.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTransactionsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.transactions.count.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transactions.count.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTransactionsCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTransactionsCountQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTransactionsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.transactions.count.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transactions.count.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTransactionsCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTransactionsCountQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutTransactionsTransactionIdMutationKey() {
  return ['transactions', '/transactions/:transactionId', 'PUT'] as const
}

export function getPutTransactionsTransactionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transactions)[':transactionId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.transactions)[':transactionId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTransactionsTransactionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.transactions)[':transactionId']['$put']>,
    ) {
      return parseResponse(client.transactions[':transactionId'].$put(args, options))
    },
  })
}

export function usePutTransactionsTransactionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transactions)[':transactionId']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.transactions)[':transactionId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTransactionsTransactionIdMutationOptions<TError, TOnMutateResult>(
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

export function getUserQueryKey() {
  return ['user', '/user'] as const
}

export function getUserQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserQueryKey>
  >({
    queryKey: getUserQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.user.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUser<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUserQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUser<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUserQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutUserMutationKey() {
  return ['user', '/user', 'PUT'] as const
}

export function getPutUserMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$put>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.user.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutUserMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.$put>) {
      return parseResponse(client.user.$put(args, options))
    },
  })
}

export function usePutUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$put>>>>>
        | undefined,
        TError,
        InferRequestType<typeof client.user.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUserMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserAccessTokensQueryKey(
  args: InferRequestType<typeof client.user.accessTokens.$get>,
) {
  return ['user', '/user/accessTokens', args] as const
}

export function getUserAccessTokensQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.accessTokens.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.user.accessTokens.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.accessTokens.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserAccessTokensQueryKey>
  >({
    queryKey: getUserAccessTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.accessTokens.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUserAccessTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.accessTokens.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user.accessTokens.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user.accessTokens.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserAccessTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUserAccessTokensQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUserAccessTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.accessTokens.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.user.accessTokens.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user.accessTokens.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserAccessTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUserAccessTokensQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostUserLogoutMutationKey() {
  return ['user', '/user/logout', 'POST'] as const
}

export function getPostUserLogoutMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.logout.$post>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostUserLogoutMutationKey(),
    async mutationFn() {
      return parseResponse(client.user.logout.$post(undefined, options))
    },
  })
}

export function usePostUserLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.logout.$post>>>>
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserLogoutMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUserRegisterMutationKey() {
  return ['user', '/user/register', 'POST'] as const
}

export function getPostUserRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.register.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.user.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserRegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.register.$post>) {
      return parseResponse(client.user.register.$post(args, options))
    },
  })
}

export function usePostUserRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.register.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.user.register.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserRegisterMutationOptions<TError, TOnMutateResult>(
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

export function getPostUserSamlLoginMutationKey() {
  return ['user', '/user/samlLogin', 'POST'] as const
}

export function getPostUserSamlLoginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.samlLogin.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.user.samlLogin.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserSamlLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.samlLogin.$post>) {
      return parseResponse(client.user.samlLogin.$post(args, options))
    },
  })
}

export function usePostUserSamlLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.samlLogin.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.user.samlLogin.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserSamlLoginMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUserUnregisterMutationKey() {
  return ['user', '/user/unregister', 'DELETE'] as const
}

export function getDeleteUserUnregisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.unregister.$delete>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserUnregisterMutationKey(),
    async mutationFn() {
      return parseResponse(client.user.unregister.$delete(undefined, options))
    },
  })
}

export function useDeleteUserUnregister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.unregister.$delete>>>
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUserUnregisterMutationOptions<TError, TOnMutateResult>(
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

export function getVerificationQueryKey(args: InferRequestType<typeof client.verification.$get>) {
  return ['verification', '/verification', args] as const
}

export function getVerificationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verification.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.verification.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verification.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVerificationQueryKey>
  >({
    queryKey: getVerificationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.verification.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVerification<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verification.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.verification.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verification.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVerificationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVerificationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVerification<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verification.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.verification.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verification.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVerificationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVerificationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutVerificationMutationKey() {
  return ['verification', '/verification', 'PUT'] as const
}

export function getPutVerificationMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verification.$put>>>>>,
    TError,
    InferRequestType<typeof client.verification.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutVerificationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.verification.$put>) {
      return parseResponse(client.verification.$put(args, options))
    },
  })
}

export function usePutVerification<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verification.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.verification.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutVerificationMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostVerificationMutationKey() {
  return ['verification', '/verification', 'POST'] as const
}

export function getPostVerificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verification.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.verification.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVerificationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.verification.$post>) {
      return parseResponse(client.verification.$post(args, options))
    },
  })
}

export function usePostVerification<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verification.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.verification.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVerificationMutationOptions<TError, TOnMutateResult>(
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

export function getPostVerifyAccountProviderAccountIdMutationKey() {
  return ['verifyAccount', '/verifyAccount/:providerAccountId', 'POST'] as const
}

export function getPostVerifyAccountProviderAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.verifyAccount)[':providerAccountId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.verifyAccount)[':providerAccountId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVerifyAccountProviderAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.verifyAccount)[':providerAccountId']['$post']>,
    ) {
      return parseResponse(client.verifyAccount[':providerAccountId'].$post(args, options))
    },
  })
}

export function usePostVerifyAccountProviderAccountId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.verifyAccount)[':providerAccountId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.verifyAccount)[':providerAccountId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVerifyAccountProviderAccountIdMutationOptions<
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
