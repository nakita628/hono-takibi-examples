import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostAccountsEvaluateAddressKey() {
  return ['accounts', '/accounts/evaluateAddress', 'POST'] as const
}

export function usePostAccountsEvaluateAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.accounts.evaluateAddress.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.accounts.evaluateAddress.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsEvaluateAddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.accounts.evaluateAddress.$post> },
      ) => parseResponse(client.accounts.evaluateAddress.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsHistoricalBalancesKey(
  args: InferRequestType<typeof client.accounts.historicalBalances.$get>,
) {
  return ['accounts', '/accounts/historicalBalances', args] as const
}

export function useGetAccountsHistoricalBalances<TError = unknown>(
  args: InferRequestType<typeof client.accounts.historicalBalances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.accounts.historicalBalances.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsHistoricalBalancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.accounts.historicalBalances.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts.historicalBalances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsHistoricalBalances<TError = unknown>(
  args: InferRequestType<typeof client.accounts.historicalBalances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.accounts.historicalBalances.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsHistoricalBalancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.accounts.historicalBalances.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts.historicalBalances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAccountIdKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
) {
  return ['accounts', '/accounts/:accountId', args] as const
}

export function useGetAccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
        >
      >,
      TError
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
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
        >
      >,
      TError
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
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':accountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsAccountIdKey() {
  return ['accounts', '/accounts/:accountId', 'PUT'] as const
}

export function usePutAccountsAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.accounts)[':accountId']['$put']> },
      ) => parseResponse(client.accounts[':accountId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAccountIdKey() {
  return ['accounts', '/accounts/:accountId', 'DELETE'] as const
}

export function useDeleteAccountsAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':accountId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.accounts)[':accountId']['$delete']> },
      ) => parseResponse(client.accounts[':accountId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuthApiKeyKey() {
  return ['auth', '/auth/apiKey'] as const
}

export function useGetAuthApiKey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.apiKey.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthApiKeyKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.apiKey.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.apiKey.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthApiKey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.apiKey.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthApiKeyKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.apiKey.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.apiKey.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAuthApiKeyKey() {
  return ['auth', '/auth/apiKey', 'POST'] as const
}

export function usePostAuthApiKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.apiKey.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.auth.apiKey.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthApiKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.auth.apiKey.$post> }) =>
        parseResponse(client.auth.apiKey.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAuthApiKeyKeyKey() {
  return ['auth', '/auth/apiKey/:key', 'DELETE'] as const
}

export function useDeleteAuthApiKeyKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.auth.apiKey)[':key']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.auth.apiKey)[':key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAuthApiKeyKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.auth.apiKey)[':key']['$delete']> },
      ) => parseResponse(client.auth.apiKey[':key'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthTokenKey() {
  return ['auth', '/auth/token', 'POST'] as const
}

export function usePostAuthToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.auth.token.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAuthTokenKey() {
  return ['auth', '/auth/token', 'DELETE'] as const
}

export function useDeleteAuthToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.$delete>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAuthTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.auth.token.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCobrandConfigNotificationsEventsKey(
  args: InferRequestType<typeof client.cobrand.config.notifications.events.$get>,
) {
  return ['cobrand', '/cobrand/config/notifications/events', args] as const
}

export function useGetCobrandConfigNotificationsEvents<TError = unknown>(
  args: InferRequestType<typeof client.cobrand.config.notifications.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.cobrand.config.notifications.events.$get>>
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
        ? getGetCobrandConfigNotificationsEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.cobrand.config.notifications.events.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cobrand.config.notifications.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCobrandConfigNotificationsEvents<TError = unknown>(
  args: InferRequestType<typeof client.cobrand.config.notifications.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.cobrand.config.notifications.events.$get>>
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
        ? getGetCobrandConfigNotificationsEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.cobrand.config.notifications.events.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cobrand.config.notifications.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCobrandConfigNotificationsEventsEventNameKey() {
  return ['cobrand', '/cobrand/config/notifications/events/:eventName', 'PUT'] as const
}

export function usePutCobrandConfigNotificationsEventsEventName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.cobrand.config.notifications.events)[':eventName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCobrandConfigNotificationsEventsEventNameKey()
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
            (typeof client.cobrand.config.notifications.events)[':eventName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.cobrand.config.notifications.events[':eventName'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCobrandConfigNotificationsEventsEventNameKey() {
  return ['cobrand', '/cobrand/config/notifications/events/:eventName', 'POST'] as const
}

export function usePostCobrandConfigNotificationsEventsEventName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.cobrand.config.notifications.events)[':eventName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCobrandConfigNotificationsEventsEventNameKey()
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
            (typeof client.cobrand.config.notifications.events)[':eventName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cobrand.config.notifications.events[':eventName'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCobrandConfigNotificationsEventsEventNameKey() {
  return ['cobrand', '/cobrand/config/notifications/events/:eventName', 'DELETE'] as const
}

export function useDeleteCobrandConfigNotificationsEventsEventName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.cobrand.config.notifications.events)[':eventName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCobrandConfigNotificationsEventsEventNameKey()
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
            (typeof client.cobrand.config.notifications.events)[':eventName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.cobrand.config.notifications.events[':eventName'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCobrandLoginKey() {
  return ['cobrand', '/cobrand/login', 'POST'] as const
}

export function usePostCobrandLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cobrand.login.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.cobrand.login.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCobrandLoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cobrand.login.$post> }) =>
        parseResponse(client.cobrand.login.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCobrandLogoutKey() {
  return ['cobrand', '/cobrand/logout', 'POST'] as const
}

export function usePostCobrandLogout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cobrand.logout.$post>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCobrandLogoutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.cobrand.logout.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCobrandPublicKeyKey() {
  return ['cobrand', '/cobrand/publicKey'] as const
}

export function useGetCobrandPublicKey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cobrand.publicKey.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCobrandPublicKeyKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cobrand.publicKey.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cobrand.publicKey.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCobrandPublicKey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cobrand.publicKey.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCobrandPublicKeyKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cobrand.publicKey.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cobrand.publicKey.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConfigsNotificationsEventsKey(
  args: InferRequestType<typeof client.configs.notifications.events.$get>,
) {
  return ['configs', '/configs/notifications/events', args] as const
}

export function useGetConfigsNotificationsEvents<TError = unknown>(
  args: InferRequestType<typeof client.configs.notifications.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.configs.notifications.events.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConfigsNotificationsEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.configs.notifications.events.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.configs.notifications.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConfigsNotificationsEvents<TError = unknown>(
  args: InferRequestType<typeof client.configs.notifications.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.configs.notifications.events.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConfigsNotificationsEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.configs.notifications.events.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.configs.notifications.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutConfigsNotificationsEventsEventNameKey() {
  return ['configs', '/configs/notifications/events/:eventName', 'PUT'] as const
}

export function usePutConfigsNotificationsEventsEventName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.configs.notifications.events)[':eventName']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.configs.notifications.events)[':eventName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConfigsNotificationsEventsEventNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.configs.notifications.events)[':eventName']['$put']>
        },
      ) =>
        parseResponse(client.configs.notifications.events[':eventName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConfigsNotificationsEventsEventNameKey() {
  return ['configs', '/configs/notifications/events/:eventName', 'POST'] as const
}

export function usePostConfigsNotificationsEventsEventName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.configs.notifications.events)[':eventName']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.configs.notifications.events)[':eventName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConfigsNotificationsEventsEventNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.configs.notifications.events)[':eventName']['$post']>
        },
      ) =>
        parseResponse(client.configs.notifications.events[':eventName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteConfigsNotificationsEventsEventNameKey() {
  return ['configs', '/configs/notifications/events/:eventName', 'DELETE'] as const
}

export function useDeleteConfigsNotificationsEventsEventName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.configs.notifications.events)[':eventName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConfigsNotificationsEventsEventNameKey()
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
            (typeof client.configs.notifications.events)[':eventName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.configs.notifications.events[':eventName'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetConfigsPublicKeyKey() {
  return ['configs', '/configs/publicKey'] as const
}

export function useGetConfigsPublicKey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configs.publicKey.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigsPublicKeyKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configs.publicKey.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.configs.publicKey.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConfigsPublicKey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configs.publicKey.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigsPublicKeyKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configs.publicKey.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.configs.publicKey.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDataExtractsEventsKey(
  args: InferRequestType<typeof client.dataExtracts.events.$get>,
) {
  return ['dataExtracts', '/dataExtracts/events', args] as const
}

export function useGetDataExtractsEvents<TError = unknown>(
  args: InferRequestType<typeof client.dataExtracts.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dataExtracts.events.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDataExtractsEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dataExtracts.events.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dataExtracts.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataExtractsEvents<TError = unknown>(
  args: InferRequestType<typeof client.dataExtracts.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dataExtracts.events.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDataExtractsEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dataExtracts.events.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dataExtracts.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDataExtractsUserDataKey(
  args: InferRequestType<typeof client.dataExtracts.userData.$get>,
) {
  return ['dataExtracts', '/dataExtracts/userData', args] as const
}

export function useGetDataExtractsUserData<TError = unknown>(
  args: InferRequestType<typeof client.dataExtracts.userData.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dataExtracts.userData.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDataExtractsUserDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dataExtracts.userData.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dataExtracts.userData.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataExtractsUserData<TError = unknown>(
  args: InferRequestType<typeof client.dataExtracts.userData.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dataExtracts.userData.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDataExtractsUserDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dataExtracts.userData.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dataExtracts.userData.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDerivedHoldingSummaryKey(
  args: InferRequestType<typeof client.derived.holdingSummary.$get>,
) {
  return ['derived', '/derived/holdingSummary', args] as const
}

export function useGetDerivedHoldingSummary<TError = unknown>(
  args: InferRequestType<typeof client.derived.holdingSummary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.derived.holdingSummary.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDerivedHoldingSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.derived.holdingSummary.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.derived.holdingSummary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDerivedHoldingSummary<TError = unknown>(
  args: InferRequestType<typeof client.derived.holdingSummary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.derived.holdingSummary.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDerivedHoldingSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.derived.holdingSummary.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.derived.holdingSummary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDerivedNetworthKey(
  args: InferRequestType<typeof client.derived.networth.$get>,
) {
  return ['derived', '/derived/networth', args] as const
}

export function useGetDerivedNetworth<TError = unknown>(
  args: InferRequestType<typeof client.derived.networth.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.derived.networth.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDerivedNetworthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.derived.networth.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.derived.networth.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDerivedNetworth<TError = unknown>(
  args: InferRequestType<typeof client.derived.networth.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.derived.networth.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDerivedNetworthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.derived.networth.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.derived.networth.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDerivedTransactionSummaryKey(
  args: InferRequestType<typeof client.derived.transactionSummary.$get>,
) {
  return ['derived', '/derived/transactionSummary', args] as const
}

export function useGetDerivedTransactionSummary<TError = unknown>(
  args: InferRequestType<typeof client.derived.transactionSummary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.derived.transactionSummary.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDerivedTransactionSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.derived.transactionSummary.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.derived.transactionSummary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDerivedTransactionSummary<TError = unknown>(
  args: InferRequestType<typeof client.derived.transactionSummary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.derived.transactionSummary.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDerivedTransactionSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.derived.transactionSummary.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.derived.transactionSummary.$get(args, clientOptions)),
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
  args: InferRequestType<(typeof client.documents)[':documentId']['$get']>,
) {
  return ['documents', '/documents/:documentId', args] as const
}

export function useGetDocumentsDocumentId<TError = unknown>(
  args: InferRequestType<(typeof client.documents)[':documentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':documentId']['$get']>>
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
            Awaited<ReturnType<(typeof client.documents)[':documentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents[':documentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocumentsDocumentId<TError = unknown>(
  args: InferRequestType<(typeof client.documents)[':documentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':documentId']['$get']>>
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
            Awaited<ReturnType<(typeof client.documents)[':documentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents[':documentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDocumentsDocumentIdKey() {
  return ['documents', '/documents/:documentId', 'DELETE'] as const
}

export function useDeleteDocumentsDocumentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':documentId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.documents)[':documentId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDocumentsDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.documents)[':documentId']['$delete']> },
      ) => parseResponse(client.documents[':documentId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHoldingsKey(args: InferRequestType<typeof client.holdings.$get>) {
  return ['holdings', '/holdings', args] as const
}

export function useGetHoldings<TError = unknown>(
  args: InferRequestType<typeof client.holdings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.holdings.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHoldingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.holdings.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.holdings.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetHoldings<TError = unknown>(
  args: InferRequestType<typeof client.holdings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.holdings.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHoldingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.holdings.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.holdings.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetHoldingsAssetClassificationListKey() {
  return ['holdings', '/holdings/assetClassificationList'] as const
}

export function useGetHoldingsAssetClassificationList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.holdings.assetClassificationList.$get>>
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
        ? getGetHoldingsAssetClassificationListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.holdings.assetClassificationList.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.holdings.assetClassificationList.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHoldingsAssetClassificationList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.holdings.assetClassificationList.$get>>
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
        ? getGetHoldingsAssetClassificationListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.holdings.assetClassificationList.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.holdings.assetClassificationList.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHoldingsHoldingTypeListKey() {
  return ['holdings', '/holdings/holdingTypeList'] as const
}

export function useGetHoldingsHoldingTypeList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.holdings.holdingTypeList.$get>>>
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
        ? getGetHoldingsHoldingTypeListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.holdings.holdingTypeList.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.holdings.holdingTypeList.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHoldingsHoldingTypeList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.holdings.holdingTypeList.$get>>>
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
        ? getGetHoldingsHoldingTypeListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.holdings.holdingTypeList.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.holdings.holdingTypeList.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHoldingsSecuritiesKey(
  args: InferRequestType<typeof client.holdings.securities.$get>,
) {
  return ['holdings', '/holdings/securities', args] as const
}

export function useGetHoldingsSecurities<TError = unknown>(
  args: InferRequestType<typeof client.holdings.securities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.holdings.securities.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHoldingsSecuritiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.holdings.securities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.holdings.securities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHoldingsSecurities<TError = unknown>(
  args: InferRequestType<typeof client.holdings.securities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.holdings.securities.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHoldingsSecuritiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.holdings.securities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.holdings.securities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProviderAccountsKey(
  args: InferRequestType<typeof client.providerAccounts.$get>,
) {
  return ['providerAccounts', '/providerAccounts', args] as const
}

export function useGetProviderAccounts<TError = unknown>(
  args: InferRequestType<typeof client.providerAccounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providerAccounts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProviderAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providerAccounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.providerAccounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProviderAccounts<TError = unknown>(
  args: InferRequestType<typeof client.providerAccounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providerAccounts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProviderAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providerAccounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.providerAccounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutProviderAccountsKey() {
  return ['providerAccounts', '/providerAccounts', 'PUT'] as const
}

export function usePutProviderAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providerAccounts.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.providerAccounts.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProviderAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.providerAccounts.$put> }) =>
        parseResponse(client.providerAccounts.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProviderAccountsProfileKey(
  args: InferRequestType<typeof client.providerAccounts.profile.$get>,
) {
  return ['providerAccounts', '/providerAccounts/profile', args] as const
}

export function useGetProviderAccountsProfile<TError = unknown>(
  args: InferRequestType<typeof client.providerAccounts.profile.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.providerAccounts.profile.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProviderAccountsProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.providerAccounts.profile.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.providerAccounts.profile.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProviderAccountsProfile<TError = unknown>(
  args: InferRequestType<typeof client.providerAccounts.profile.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.providerAccounts.profile.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProviderAccountsProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.providerAccounts.profile.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.providerAccounts.profile.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProviderAccountsProviderAccountIdKey(
  args: InferRequestType<(typeof client.providerAccounts)[':providerAccountId']['$get']>,
) {
  return ['providerAccounts', '/providerAccounts/:providerAccountId', args] as const
}

export function useGetProviderAccountsProviderAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.providerAccounts)[':providerAccountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providerAccounts)[':providerAccountId']['$get']>>
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
        ? getGetProviderAccountsProviderAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providerAccounts)[':providerAccountId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.providerAccounts[':providerAccountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProviderAccountsProviderAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.providerAccounts)[':providerAccountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providerAccounts)[':providerAccountId']['$get']>>
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
        ? getGetProviderAccountsProviderAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providerAccounts)[':providerAccountId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.providerAccounts[':providerAccountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteProviderAccountsProviderAccountIdKey() {
  return ['providerAccounts', '/providerAccounts/:providerAccountId', 'DELETE'] as const
}

export function useDeleteProviderAccountsProviderAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.providerAccounts)[':providerAccountId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.providerAccounts)[':providerAccountId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProviderAccountsProviderAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.providerAccounts)[':providerAccountId']['$delete']>
        },
      ) => parseResponse(client.providerAccounts[':providerAccountId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutProviderAccountsProviderAccountIdPreferencesKey() {
  return ['providerAccounts', '/providerAccounts/:providerAccountId/preferences', 'PUT'] as const
}

export function usePutProviderAccountsProviderAccountIdPreferences<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.providerAccounts)[':providerAccountId']['preferences']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProviderAccountsProviderAccountIdPreferencesKey()
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
            (typeof client.providerAccounts)[':providerAccountId']['preferences']['$put']
          >
        },
      ) =>
        parseResponse(
          client.providerAccounts[':providerAccountId'].preferences.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProvidersKey(args: InferRequestType<typeof client.providers.$get>) {
  return ['providers', '/providers', args] as const
}

export function useGetProviders<TError = unknown>(
  args: InferRequestType<typeof client.providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProvidersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProviders<TError = unknown>(
  args: InferRequestType<typeof client.providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProvidersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProvidersCountKey(
  args: InferRequestType<typeof client.providers.count.$get>,
) {
  return ['providers', '/providers/count', args] as const
}

export function useGetProvidersCount<TError = unknown>(
  args: InferRequestType<typeof client.providers.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.count.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProvidersCountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.count.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.providers.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProvidersCount<TError = unknown>(
  args: InferRequestType<typeof client.providers.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.count.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProvidersCountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.count.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.providers.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProvidersProviderIdKey(
  args: InferRequestType<(typeof client.providers)[':providerId']['$get']>,
) {
  return ['providers', '/providers/:providerId', args] as const
}

export function useGetProvidersProviderId<TError = unknown>(
  args: InferRequestType<(typeof client.providers)[':providerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers)[':providerId']['$get']>>
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
        ? getGetProvidersProviderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers)[':providerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.providers[':providerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProvidersProviderId<TError = unknown>(
  args: InferRequestType<(typeof client.providers)[':providerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers)[':providerId']['$get']>>
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
        ? getGetProvidersProviderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers)[':providerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.providers[':providerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatementsKey(args: InferRequestType<typeof client.statements.$get>) {
  return ['statements', '/statements', args] as const
}

export function useGetStatements<TError = unknown>(
  args: InferRequestType<typeof client.statements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statements.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatementsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statements.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.statements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatements<TError = unknown>(
  args: InferRequestType<typeof client.statements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statements.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatementsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statements.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.statements.$get(args, clientOptions)),
      restSwrOptions,
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

export function getGetTransactionsCategoriesKey() {
  return ['transactions', '/transactions/categories'] as const
}

export function useGetTransactionsCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transactions.categories.$get>>>
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
        ? getGetTransactionsCategoriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.transactions.categories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transactions.categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransactionsCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transactions.categories.$get>>>
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
        ? getGetTransactionsCategoriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.transactions.categories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transactions.categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTransactionsCategoriesKey() {
  return ['transactions', '/transactions/categories', 'PUT'] as const
}

export function usePutTransactionsCategories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.transactions.categories.$put>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.transactions.categories.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTransactionsCategoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transactions.categories.$put> },
      ) => parseResponse(client.transactions.categories.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransactionsCategoriesKey() {
  return ['transactions', '/transactions/categories', 'POST'] as const
}

export function usePostTransactionsCategories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transactions.categories.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transactions.categories.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransactionsCategoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transactions.categories.$post> },
      ) => parseResponse(client.transactions.categories.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTransactionsCategoriesRulesKey() {
  return ['transactions', '/transactions/categories/rules'] as const
}

export function useGetTransactionsCategoriesRules<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transactions.categories.rules.$get>>>
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
        ? getGetTransactionsCategoriesRulesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.transactions.categories.rules.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.transactions.categories.rules.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransactionsCategoriesRules<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transactions.categories.rules.$get>>>
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
        ? getGetTransactionsCategoriesRulesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.transactions.categories.rules.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.transactions.categories.rules.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTransactionsCategoriesRulesKey() {
  return ['transactions', '/transactions/categories/rules', 'POST'] as const
}

export function usePostTransactionsCategoriesRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.transactions.categories.rules.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.transactions.categories.rules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransactionsCategoriesRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transactions.categories.rules.$post> },
      ) => parseResponse(client.transactions.categories.rules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutTransactionsCategoriesRulesRuleIdKey() {
  return ['transactions', '/transactions/categories/rules/:ruleId', 'PUT'] as const
}

export function usePutTransactionsCategoriesRulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transactions.categories.rules)[':ruleId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.transactions.categories.rules)[':ruleId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTransactionsCategoriesRulesRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.transactions.categories.rules)[':ruleId']['$put']>
        },
      ) => parseResponse(client.transactions.categories.rules[':ruleId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransactionsCategoriesRulesRuleIdKey() {
  return ['transactions', '/transactions/categories/rules/:ruleId', 'POST'] as const
}

export function usePostTransactionsCategoriesRulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transactions.categories.rules)[':ruleId']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.transactions.categories.rules)[':ruleId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransactionsCategoriesRulesRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.transactions.categories.rules)[':ruleId']['$post']>
        },
      ) => parseResponse(client.transactions.categories.rules[':ruleId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTransactionsCategoriesRulesRuleIdKey() {
  return ['transactions', '/transactions/categories/rules/:ruleId', 'DELETE'] as const
}

export function useDeleteTransactionsCategoriesRulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transactions.categories.rules)[':ruleId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.transactions.categories.rules)[':ruleId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTransactionsCategoriesRulesRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.transactions.categories.rules)[':ruleId']['$delete']>
        },
      ) =>
        parseResponse(client.transactions.categories.rules[':ruleId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTransactionsCategoriesTxnRulesKey() {
  return ['transactions', '/transactions/categories/txnRules'] as const
}

export function useGetTransactionsCategoriesTxnRules<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.transactions.categories.txnRules.$get>>
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
        ? getGetTransactionsCategoriesTxnRulesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.transactions.categories.txnRules.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.transactions.categories.txnRules.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransactionsCategoriesTxnRules<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.transactions.categories.txnRules.$get>>
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
        ? getGetTransactionsCategoriesTxnRulesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.transactions.categories.txnRules.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.transactions.categories.txnRules.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTransactionsCategoriesCategoryIdKey() {
  return ['transactions', '/transactions/categories/:categoryId', 'DELETE'] as const
}

export function useDeleteTransactionsCategoriesCategoryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transactions.categories)[':categoryId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.transactions.categories)[':categoryId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTransactionsCategoriesCategoryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.transactions.categories)[':categoryId']['$delete']>
        },
      ) => parseResponse(client.transactions.categories[':categoryId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTransactionsCountKey(
  args: InferRequestType<typeof client.transactions.count.$get>,
) {
  return ['transactions', '/transactions/count', args] as const
}

export function useGetTransactionsCount<TError = unknown>(
  args: InferRequestType<typeof client.transactions.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.count.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTransactionsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.count.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transactions.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransactionsCount<TError = unknown>(
  args: InferRequestType<typeof client.transactions.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.count.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTransactionsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.count.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transactions.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTransactionsTransactionIdKey() {
  return ['transactions', '/transactions/:transactionId', 'PUT'] as const
}

export function usePutTransactionsTransactionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transactions)[':transactionId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.transactions)[':transactionId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTransactionsTransactionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.transactions)[':transactionId']['$put']> },
      ) => parseResponse(client.transactions[':transactionId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserKey() {
  return ['user', '/user'] as const
}

export function useGetUser<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetUserKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUser<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetUserKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserKey() {
  return ['user', '/user', 'PUT'] as const
}

export function usePutUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$put>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.user.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user.$put> }) =>
        parseResponse(client.user.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserAccessTokensKey(
  args: InferRequestType<typeof client.user.accessTokens.$get>,
) {
  return ['user', '/user/accessTokens', args] as const
}

export function useGetUserAccessTokens<TError = unknown>(
  args: InferRequestType<typeof client.user.accessTokens.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.accessTokens.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserAccessTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.accessTokens.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.accessTokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserAccessTokens<TError = unknown>(
  args: InferRequestType<typeof client.user.accessTokens.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.accessTokens.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserAccessTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.accessTokens.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.accessTokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserLogoutKey() {
  return ['user', '/user/logout', 'POST'] as const
}

export function usePostUserLogout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.logout.$post>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserLogoutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.user.logout.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserRegisterKey() {
  return ['user', '/user/register', 'POST'] as const
}

export function usePostUserRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.register.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.user.register.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user.register.$post> }) =>
        parseResponse(client.user.register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserSamlLoginKey() {
  return ['user', '/user/samlLogin', 'POST'] as const
}

export function usePostUserSamlLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.samlLogin.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.user.samlLogin.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserSamlLoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user.samlLogin.$post> }) =>
        parseResponse(client.user.samlLogin.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUserUnregisterKey() {
  return ['user', '/user/unregister', 'DELETE'] as const
}

export function useDeleteUserUnregister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.unregister.$delete>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserUnregisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.user.unregister.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVerificationKey(args: InferRequestType<typeof client.verification.$get>) {
  return ['verification', '/verification', args] as const
}

export function useGetVerification<TError = unknown>(
  args: InferRequestType<typeof client.verification.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verification.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVerificationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verification.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.verification.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVerification<TError = unknown>(
  args: InferRequestType<typeof client.verification.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verification.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVerificationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verification.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.verification.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutVerificationKey() {
  return ['verification', '/verification', 'PUT'] as const
}

export function usePutVerification<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verification.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.verification.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVerificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.verification.$put> }) =>
        parseResponse(client.verification.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVerificationKey() {
  return ['verification', '/verification', 'POST'] as const
}

export function usePostVerification<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verification.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.verification.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVerificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.verification.$post> }) =>
        parseResponse(client.verification.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVerifyAccountProviderAccountIdKey() {
  return ['verifyAccount', '/verifyAccount/:providerAccountId', 'POST'] as const
}

export function usePostVerifyAccountProviderAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.verifyAccount)[':providerAccountId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.verifyAccount)[':providerAccountId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVerifyAccountProviderAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.verifyAccount)[':providerAccountId']['$post']> },
      ) => parseResponse(client.verifyAccount[':providerAccountId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
