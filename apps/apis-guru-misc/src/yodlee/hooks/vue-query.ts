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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.accounts.evaluateAddress.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.accounts.evaluateAddress.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.historicalBalances.$get>>,
) {
  return ['accounts', '/accounts/historicalBalances', toValue(args)] as const
}

export function getAccountsHistoricalBalancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.historicalBalances.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsHistoricalBalancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts.historicalBalances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsHistoricalBalances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.accounts.historicalBalances.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.historicalBalances.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.accounts.historicalBalances.$get>>
              >
            >
          >,
          ReturnType<typeof getAccountsHistoricalBalancesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.accounts.historicalBalances.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsHistoricalBalancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsHistoricalBalancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts.historicalBalances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':accountId']['$get']>>,
) {
  return ['accounts', '/accounts/:accountId', toValue(args)] as const
}

export function getAccountsAccountIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':accountId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].$get(toValue(args), {
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
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':accountId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
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
          client.accounts[':accountId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getAuthApiKeyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAuthApiKeyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.auth.apiKey.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAuthApiKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.apiKey.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.apiKey.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.apiKey.$get>>>>
          >,
          ReturnType<typeof getAuthApiKeyQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.apiKey.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAuthApiKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAuthApiKeyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.auth.apiKey.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.apiKey.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.auth.apiKey.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.$post>>>>
          >,
          TError,
          void,
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.$delete>>>
              >
            >
          | undefined,
          TError,
          void,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.cobrand.config.notifications.events.$get>>,
) {
  return ['cobrand', '/cobrand/config/notifications/events', toValue(args)] as const
}

export function getCobrandConfigNotificationsEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cobrand.config.notifications.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCobrandConfigNotificationsEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cobrand.config.notifications.events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.cobrand.config.notifications.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.cobrand.config.notifications.events.$get>>
              >
            >
          >,
          ReturnType<typeof getCobrandConfigNotificationsEventsQueryKey>
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
          Awaited<ReturnType<typeof client.cobrand.config.notifications.events.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCobrandConfigNotificationsEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCobrandConfigNotificationsEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cobrand.config.notifications.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.cobrand.config.notifications.events)[':eventName']['$put']
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cobrand.login.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.cobrand.login.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getCobrandPublicKeyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCobrandPublicKeyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cobrand.publicKey.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCobrandPublicKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cobrand.publicKey.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cobrand.publicKey.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cobrand.publicKey.$get>>>
            >
          >,
          ReturnType<typeof getCobrandPublicKeyQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cobrand.publicKey.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCobrandPublicKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCobrandPublicKeyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.cobrand.publicKey.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConfigsNotificationsEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.configs.notifications.events.$get>>,
) {
  return ['configs', '/configs/notifications/events', toValue(args)] as const
}

export function getConfigsNotificationsEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.configs.notifications.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConfigsNotificationsEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.configs.notifications.events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConfigsNotificationsEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.configs.notifications.events.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.configs.notifications.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.configs.notifications.events.$get>>
              >
            >
          >,
          ReturnType<typeof getConfigsNotificationsEventsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.configs.notifications.events.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConfigsNotificationsEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConfigsNotificationsEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.configs.notifications.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.configs.notifications.events)[':eventName']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.configs.notifications.events)[':eventName']['$delete']>,
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

export function getConfigsPublicKeyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getConfigsPublicKeyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.configs.publicKey.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConfigsPublicKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configs.publicKey.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.configs.publicKey.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.configs.publicKey.$get>>>
            >
          >,
          ReturnType<typeof getConfigsPublicKeyQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configs.publicKey.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConfigsPublicKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getConfigsPublicKeyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.configs.publicKey.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDataExtractsEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dataExtracts.events.$get>>,
) {
  return ['dataExtracts', '/dataExtracts/events', toValue(args)] as const
}

export function getDataExtractsEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dataExtracts.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataExtractsEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dataExtracts.events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataExtractsEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataExtracts.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dataExtracts.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dataExtracts.events.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dataExtracts.events.$get>>>
            >
          >,
          ReturnType<typeof getDataExtractsEventsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataExtracts.events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDataExtractsEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataExtractsEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dataExtracts.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDataExtractsUserDataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dataExtracts.userData.$get>>,
) {
  return ['dataExtracts', '/dataExtracts/userData', toValue(args)] as const
}

export function getDataExtractsUserDataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dataExtracts.userData.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataExtractsUserDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dataExtracts.userData.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataExtractsUserData<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataExtracts.userData.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dataExtracts.userData.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dataExtracts.userData.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dataExtracts.userData.$get>>>
            >
          >,
          ReturnType<typeof getDataExtractsUserDataQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.dataExtracts.userData.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataExtractsUserDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataExtractsUserDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dataExtracts.userData.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDerivedHoldingSummaryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.derived.holdingSummary.$get>>,
) {
  return ['derived', '/derived/holdingSummary', toValue(args)] as const
}

export function getDerivedHoldingSummaryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.derived.holdingSummary.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDerivedHoldingSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.derived.holdingSummary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDerivedHoldingSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.derived.holdingSummary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.derived.holdingSummary.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.derived.holdingSummary.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.derived.holdingSummary.$get>>>
            >
          >,
          ReturnType<typeof getDerivedHoldingSummaryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.derived.holdingSummary.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDerivedHoldingSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDerivedHoldingSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.derived.holdingSummary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDerivedNetworthQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.derived.networth.$get>>,
) {
  return ['derived', '/derived/networth', toValue(args)] as const
}

export function getDerivedNetworthQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.derived.networth.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDerivedNetworthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.derived.networth.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDerivedNetworth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.derived.networth.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.derived.networth.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.derived.networth.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.derived.networth.$get>>>
            >
          >,
          ReturnType<typeof getDerivedNetworthQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.derived.networth.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDerivedNetworthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDerivedNetworthQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.derived.networth.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDerivedTransactionSummaryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.derived.transactionSummary.$get>>,
) {
  return ['derived', '/derived/transactionSummary', toValue(args)] as const
}

export function getDerivedTransactionSummaryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.derived.transactionSummary.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDerivedTransactionSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.derived.transactionSummary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDerivedTransactionSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.derived.transactionSummary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.derived.transactionSummary.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.derived.transactionSummary.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.derived.transactionSummary.$get>>
              >
            >
          >,
          ReturnType<typeof getDerivedTransactionSummaryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.derived.transactionSummary.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDerivedTransactionSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDerivedTransactionSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.derived.transactionSummary.$get(toValue(args), {
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.documents)[':documentId']['$get']>>,
) {
  return ['documents', '/documents/:documentId', toValue(args)] as const
}

export function getDocumentsDocumentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.documents)[':documentId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDocumentsDocumentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.documents[':documentId'].$get(toValue(args), {
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
      typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':documentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.documents)[':documentId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.documents)[':documentId']['$get']>>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':documentId']['$get']>>>
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
          client.documents[':documentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getHoldingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.holdings.$get>>,
) {
  return ['holdings', '/holdings', toValue(args)] as const
}

export function getHoldingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.holdings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHoldingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.holdings.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHoldings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.holdings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.holdings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.holdings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.holdings.$get>>>>
          >,
          ReturnType<typeof getHoldingsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.holdings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHoldingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHoldingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.holdings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHoldingsAssetClassificationListQueryKey() {
  return ['holdings', '/holdings/assetClassificationList'] as const
}

export function getHoldingsAssetClassificationListQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHoldingsAssetClassificationListQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.holdings.assetClassificationList.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.holdings.assetClassificationList.$get>>
              >
            >
          >,
          ReturnType<typeof getHoldingsAssetClassificationListQueryKey>
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
          Awaited<ReturnType<typeof client.holdings.assetClassificationList.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHoldingsAssetClassificationListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHoldingsAssetClassificationListQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.holdings.assetClassificationList.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHoldingsHoldingTypeListQueryKey() {
  return ['holdings', '/holdings/holdingTypeList'] as const
}

export function getHoldingsHoldingTypeListQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHoldingsHoldingTypeListQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.holdings.holdingTypeList.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.holdings.holdingTypeList.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.holdings.holdingTypeList.$get>>>
            >
          >,
          ReturnType<typeof getHoldingsHoldingTypeListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.holdings.holdingTypeList.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHoldingsHoldingTypeListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHoldingsHoldingTypeListQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.holdings.holdingTypeList.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHoldingsSecuritiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.holdings.securities.$get>>,
) {
  return ['holdings', '/holdings/securities', toValue(args)] as const
}

export function getHoldingsSecuritiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.holdings.securities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHoldingsSecuritiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.holdings.securities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHoldingsSecurities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.holdings.securities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.holdings.securities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.holdings.securities.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.holdings.securities.$get>>>
            >
          >,
          ReturnType<typeof getHoldingsSecuritiesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.holdings.securities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHoldingsSecuritiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHoldingsSecuritiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.holdings.securities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProviderAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.providerAccounts.$get>>,
) {
  return ['providerAccounts', '/providerAccounts', toValue(args)] as const
}

export function getProviderAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.providerAccounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProviderAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.providerAccounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProviderAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providerAccounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.providerAccounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.providerAccounts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.providerAccounts.$get>>>
            >
          >,
          ReturnType<typeof getProviderAccountsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providerAccounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProviderAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProviderAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.providerAccounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.providerAccounts.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.providerAccounts.$put>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.providerAccounts.profile.$get>>,
) {
  return ['providerAccounts', '/providerAccounts/profile', toValue(args)] as const
}

export function getProviderAccountsProfileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.providerAccounts.profile.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProviderAccountsProfileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.providerAccounts.profile.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProviderAccountsProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.providerAccounts.profile.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.providerAccounts.profile.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.providerAccounts.profile.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.providerAccounts.profile.$get>>>
            >
          >,
          ReturnType<typeof getProviderAccountsProfileQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.providerAccounts.profile.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProviderAccountsProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProviderAccountsProfileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.providerAccounts.profile.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProviderAccountsProviderAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providerAccounts)[':providerAccountId']['$get']>
  >,
) {
  return ['providerAccounts', '/providerAccounts/:providerAccountId', toValue(args)] as const
}

export function getProviderAccountsProviderAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providerAccounts)[':providerAccountId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProviderAccountsProviderAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.providerAccounts[':providerAccountId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.providerAccounts)[':providerAccountId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.providerAccounts)[':providerAccountId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProviderAccountsProviderAccountIdQueryKey>
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
          Awaited<ReturnType<(typeof client.providerAccounts)[':providerAccountId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProviderAccountsProviderAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProviderAccountsProviderAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.providerAccounts[':providerAccountId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.providerAccounts)[':providerAccountId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.providerAccounts)[':providerAccountId']['$delete']>,
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getProvidersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.providers.$get>>,
) {
  return ['providers', '/providers', toValue(args)] as const
}

export function getProvidersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.providers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.providers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.providers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>
          >,
          ReturnType<typeof getProvidersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.providers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProvidersCountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.providers.count.$get>>,
) {
  return ['providers', '/providers/count', toValue(args)] as const
}

export function getProvidersCountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.providers.count.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProvidersCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.providers.count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProvidersCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.providers.count.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.providers.count.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.providers.count.$get>>>
            >
          >,
          ReturnType<typeof getProvidersCountQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProvidersCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.providers.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProvidersProviderIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.providers)[':providerId']['$get']>>,
) {
  return ['providers', '/providers/:providerId', toValue(args)] as const
}

export function getProvidersProviderIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.providers)[':providerId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProvidersProviderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.providers[':providerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProvidersProviderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.providers)[':providerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.providers)[':providerId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.providers)[':providerId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProvidersProviderIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.providers)[':providerId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersProviderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProvidersProviderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.providers[':providerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatementsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.statements.$get>>,
) {
  return ['statements', '/statements', toValue(args)] as const
}

export function getStatementsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.statements.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.statements.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.statements.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statements.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statements.$get>>>>
          >,
          ReturnType<typeof getStatementsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statements.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.statements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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

export function getTransactionsCategoriesQueryKey() {
  return ['transactions', '/transactions/categories'] as const
}

export function getTransactionsCategoriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTransactionsCategoriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transactions.categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transactions.categories.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transactions.categories.$get>>>
            >
          >,
          ReturnType<typeof getTransactionsCategoriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.transactions.categories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionsCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTransactionsCategoriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.transactions.categories.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.transactions.categories.$put>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.transactions.categories.$put>,
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getTransactionsCategoriesRulesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTransactionsCategoriesRulesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transactions.categories.rules.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.transactions.categories.rules.$get>>
              >
            >
          >,
          ReturnType<typeof getTransactionsCategoriesRulesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.transactions.categories.rules.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionsCategoriesRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTransactionsCategoriesRulesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.transactions.categories.rules.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getTransactionsCategoriesTxnRulesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTransactionsCategoriesTxnRulesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transactions.categories.txnRules.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.transactions.categories.txnRules.$get>>
              >
            >
          >,
          ReturnType<typeof getTransactionsCategoriesTxnRulesQueryKey>
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
          Awaited<ReturnType<typeof client.transactions.categories.txnRules.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionsCategoriesTxnRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTransactionsCategoriesTxnRulesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.transactions.categories.txnRules.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.transactions.count.$get>>,
) {
  return ['transactions', '/transactions/count', toValue(args)] as const
}

export function getTransactionsCountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transactions.count.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransactionsCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transactions.count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTransactionsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transactions.count.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transactions.count.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transactions.count.$get>>>
            >
          >,
          ReturnType<typeof getTransactionsCountQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionsCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransactionsCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transactions.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getUserQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUserQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUser<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
          ReturnType<typeof getUserQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUserQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.user.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$put>>>>>
          | undefined,
          TError,
          InferRequestType<typeof client.user.$put>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.accessTokens.$get>>,
) {
  return ['user', '/user/accessTokens', toValue(args)] as const
}

export function getUserAccessTokensQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.accessTokens.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserAccessTokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.accessTokens.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserAccessTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.accessTokens.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.accessTokens.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.accessTokens.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.accessTokens.$get>>>
            >
          >,
          ReturnType<typeof getUserAccessTokensQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.accessTokens.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserAccessTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserAccessTokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.accessTokens.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.logout.$post>>>>
            >
          | undefined,
          TError,
          void,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.register.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.user.register.$post>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.samlLogin.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.user.samlLogin.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getVerificationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.verification.$get>>,
) {
  return ['verification', '/verification', toValue(args)] as const
}

export function getVerificationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.verification.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVerificationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.verification.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVerification<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verification.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.verification.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verification.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verification.$get>>>>
          >,
          ReturnType<typeof getVerificationQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verification.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVerificationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVerificationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.verification.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verification.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.verification.$put>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verification.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.verification.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
