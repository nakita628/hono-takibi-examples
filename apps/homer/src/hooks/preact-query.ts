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

export function getAdvancedKey() {
  return ['advanced'] as const
}

export function getAgentsKey() {
  return ['agents'] as const
}

export function getAliasesKey() {
  return ['aliases'] as const
}

export function getAuthKey() {
  return ['auth'] as const
}

export function getAuthTokensKey() {
  return ['auth-tokens'] as const
}

export function getDashboardsKey() {
  return ['dashboards'] as const
}

export function getDbKey() {
  return ['db'] as const
}

export function getExportsKey() {
  return ['exports'] as const
}

export function getHepsubsKey() {
  return ['hepsubs'] as const
}

export function getImportsKey() {
  return ['imports'] as const
}

export function getIntegrationsKey() {
  return ['integrations'] as const
}

export function getIpaliasesKey() {
  return ['ipaliases'] as const
}

export function getLogsKey() {
  return ['logs'] as const
}

export function getMappingsKey() {
  return ['mappings'] as const
}

export function getMeKey() {
  return ['me'] as const
}

export function getMessagesKey() {
  return ['messages'] as const
}

export function getModulesKey() {
  return ['modules'] as const
}

export function getOpenapiJsonKey() {
  return ['openapi.json'] as const
}

export function getScriptsKey() {
  return ['scripts'] as const
}

export function getStatisticsKey() {
  return ['statistics'] as const
}

export function getStreamKey() {
  return ['stream'] as const
}

export function getTransactionsKey() {
  return ['transactions'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getPostAuthSessionsMutationKey() {
  return ['auth', '/auth/sessions', 'POST'] as const
}

export function getPostAuthSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.sessions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.auth.sessions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthSessionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.sessions.$post>) {
      return parseResponse(client.auth.sessions.$post(args, options))
    },
  })
}

export function usePostAuthSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.sessions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.auth.sessions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthSessionsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAuthSessionsSessionIdMutationKey() {
  return ['auth', '/auth/sessions/:sessionId', 'DELETE'] as const
}

export function getDeleteAuthSessionsSessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.auth.sessions)[':sessionId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.auth.sessions)[':sessionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuthSessionsSessionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.auth.sessions)[':sessionId']['$delete']>,
    ) {
      return parseResponse(client.auth.sessions[':sessionId'].$delete(args, options))
    },
  })
}

export function useDeleteAuthSessionsSessionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.auth.sessions)[':sessionId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.auth.sessions)[':sessionId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAuthSessionsSessionIdMutationOptions<TError, TOnMutateResult>(
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

export function getAuthProvidersQueryKey() {
  return ['auth', '/auth/providers'] as const
}

export function getAuthProvidersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.providers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.providers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthProvidersQueryKey>
  >({
    queryKey: getAuthProvidersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.auth.providers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAuthProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.providers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.providers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAuthProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAuthProvidersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAuthProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.providers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.providers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAuthProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAuthProvidersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAuthOauth2ProviderRedirectQueryKey(
  args: InferRequestType<(typeof client.auth.oauth2)[':provider']['redirect']['$get']>,
) {
  return ['auth', '/auth/oauth2/:provider/redirect', args] as const
}

export function getAuthOauth2ProviderRedirectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.auth.oauth2)[':provider']['redirect']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.auth.oauth2)[':provider']['redirect']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.oauth2)[':provider']['redirect']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthOauth2ProviderRedirectQueryKey>
  >({
    queryKey: getAuthOauth2ProviderRedirectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.auth.oauth2[':provider'].redirect.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAuthOauth2ProviderRedirect<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.auth.oauth2)[':provider']['redirect']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.auth.oauth2)[':provider']['redirect']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.auth.oauth2)[':provider']['redirect']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthOauth2ProviderRedirectQueryKey>
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
      ...getAuthOauth2ProviderRedirectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAuthOauth2ProviderRedirect<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.auth.oauth2)[':provider']['redirect']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.auth.oauth2)[':provider']['redirect']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.auth.oauth2)[':provider']['redirect']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthOauth2ProviderRedirectQueryKey>
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
      ...getAuthOauth2ProviderRedirectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAuthOauth2ProviderCallbackQueryKey(
  args: InferRequestType<(typeof client.auth.oauth2)[':provider']['callback']['$get']>,
) {
  return ['auth', '/auth/oauth2/:provider/callback', args] as const
}

export function getAuthOauth2ProviderCallbackQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.auth.oauth2)[':provider']['callback']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.auth.oauth2)[':provider']['callback']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.oauth2)[':provider']['callback']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthOauth2ProviderCallbackQueryKey>
  >({
    queryKey: getAuthOauth2ProviderCallbackQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.auth.oauth2[':provider'].callback.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAuthOauth2ProviderCallback<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.auth.oauth2)[':provider']['callback']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.auth.oauth2)[':provider']['callback']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.auth.oauth2)[':provider']['callback']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthOauth2ProviderCallbackQueryKey>
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
      ...getAuthOauth2ProviderCallbackQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAuthOauth2ProviderCallback<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.auth.oauth2)[':provider']['callback']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.auth.oauth2)[':provider']['callback']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.auth.oauth2)[':provider']['callback']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthOauth2ProviderCallbackQueryKey>
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
      ...getAuthOauth2ProviderCallbackQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAuthOauth2TokenMutationKey() {
  return ['auth', '/auth/oauth2/token', 'POST'] as const
}

export function getPostAuthOauth2TokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.oauth2.token.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.auth.oauth2.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthOauth2TokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.oauth2.token.$post>) {
      return parseResponse(client.auth.oauth2.token.$post(args, options))
    },
  })
}

export function usePostAuthOauth2Token<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.auth.oauth2.token.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.auth.oauth2.token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthOauth2TokenMutationOptions<TError, TOnMutateResult>(
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

export function getUsersQueryKey(args: InferRequestType<typeof client.users.$get>) {
  return ['users', '/users', args] as const
}

export function getUsersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >({
    queryKey: getUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostUsersMutationKey() {
  return ['users', '/users', 'POST'] as const
}

export function getPostUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
    TError,
    InferRequestType<typeof client.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.$post>) {
      return parseResponse(client.users.$post(args, options))
    },
  })
}

export function usePostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
        TError,
        InferRequestType<typeof client.users.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersUserIdQueryKey(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
) {
  return ['users', '/users/:userId', args] as const
}

export function getUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdQueryKey>
  >({
    queryKey: getUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUserIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUserIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteUsersUserIdMutationKey() {
  return ['users', '/users/:userId', 'DELETE'] as const
}

export function getDeleteUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['$delete']>) {
      return parseResponse(client.users[':userId'].$delete(args, options))
    },
  })
}

export function useDeleteUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.users)[':userId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchUsersUserIdMutationKey() {
  return ['users', '/users/:userId', 'PATCH'] as const
}

export function getPatchUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['$patch']>) {
      return parseResponse(client.users[':userId'].$patch(args, options))
    },
  })
}

export function usePatchUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':userId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchUsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getMeQueryKey() {
  return ['me', '/me'] as const
}

export function getMeQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >({
    queryKey: getMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMeSettingsQueryKey() {
  return ['me', '/me/settings'] as const
}

export function getMeSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.settings.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.settings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeSettingsQueryKey>
  >({
    queryKey: getMeSettingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.me.settings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMeSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.settings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeSettingsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.settings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeSettingsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutMeSettingsCategoryMutationKey() {
  return ['me', '/me/settings/:category', 'PUT'] as const
}

export function getPutMeSettingsCategoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.me.settings)[':category']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.me.settings)[':category']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMeSettingsCategoryMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.me.settings)[':category']['$put']>) {
      return parseResponse(client.me.settings[':category'].$put(args, options))
    },
  })
}

export function usePutMeSettingsCategory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.settings)[':category']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.me.settings)[':category']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMeSettingsCategoryMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteMeSettingsCategoryMutationKey() {
  return ['me', '/me/settings/:category', 'DELETE'] as const
}

export function getDeleteMeSettingsCategoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.settings)[':category']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.me.settings)[':category']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMeSettingsCategoryMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.me.settings)[':category']['$delete']>) {
      return parseResponse(client.me.settings[':category'].$delete(args, options))
    },
  })
}

export function useDeleteMeSettingsCategory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.settings)[':category']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.me.settings)[':category']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMeSettingsCategoryMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransactionsSearchMutationKey() {
  return ['transactions', '/transactions/search', 'POST'] as const
}

export function getPostTransactionsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.transactions.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransactionsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transactions.search.$post>) {
      return parseResponse(client.transactions.search.$post(args, options))
    },
  })
}

export function usePostTransactionsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transactions.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transactions.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransactionsSearchMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransactionsMessagesMutationKey() {
  return ['transactions', '/transactions/messages', 'POST'] as const
}

export function getPostTransactionsMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transactions.messages.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.transactions.messages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransactionsMessagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transactions.messages.$post>) {
      return parseResponse(client.transactions.messages.$post(args, options))
    },
  })
}

export function usePostTransactionsMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transactions.messages.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transactions.messages.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransactionsMessagesMutationOptions<TError, TOnMutateResult>(
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

export function getMessagesMessageIdQueryKey(
  args: InferRequestType<(typeof client.messages)[':messageId']['$get']>,
) {
  return ['messages', '/messages/:messageId', args] as const
}

export function getMessagesMessageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':messageId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messages)[':messageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':messageId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagesMessageIdQueryKey>
  >({
    queryKey: getMessagesMessageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messages[':messageId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMessagesMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':messageId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messages)[':messageId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.messages)[':messageId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagesMessageIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMessagesMessageIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMessagesMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':messageId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messages)[':messageId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.messages)[':messageId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagesMessageIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMessagesMessageIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMessagesMessageIdDecodedQueryKey(
  args: InferRequestType<(typeof client.messages)[':messageId']['decoded']['$get']>,
) {
  return ['messages', '/messages/:messageId/decoded', args] as const
}

export function getMessagesMessageIdDecodedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messages)[':messageId']['decoded']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messages)[':messageId']['decoded']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messages)[':messageId']['decoded']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagesMessageIdDecodedQueryKey>
  >({
    queryKey: getMessagesMessageIdDecodedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messages[':messageId'].decoded.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMessagesMessageIdDecoded<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messages)[':messageId']['decoded']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messages)[':messageId']['decoded']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.messages)[':messageId']['decoded']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagesMessageIdDecodedQueryKey>
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
      ...getMessagesMessageIdDecodedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMessagesMessageIdDecoded<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messages)[':messageId']['decoded']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messages)[':messageId']['decoded']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.messages)[':messageId']['decoded']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagesMessageIdDecodedQueryKey>
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
      ...getMessagesMessageIdDecodedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTransactionsQosMutationKey() {
  return ['transactions', '/transactions/qos', 'POST'] as const
}

export function getPostTransactionsQosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.qos.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.transactions.qos.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransactionsQosMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transactions.qos.$post>) {
      return parseResponse(client.transactions.qos.$post(args, options))
    },
  })
}

export function usePostTransactionsQos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transactions.qos.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transactions.qos.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransactionsQosMutationOptions<TError, TOnMutateResult>(
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

export function getPostExportsMutationKey() {
  return ['exports', '/exports', 'POST'] as const
}

export function getPostExportsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$post>>>>>,
    TError,
    InferRequestType<typeof client.exports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.exports.$post>) {
      return parseResponse(client.exports.$post(args, options))
    },
  })
}

export function usePostExports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$post>>>>>,
        TError,
        InferRequestType<typeof client.exports.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostExportsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getExportsExportIdQueryKey(
  args: InferRequestType<(typeof client.exports)[':exportId']['$get']>,
) {
  return ['exports', '/exports/:exportId', args] as const
}

export function getExportsExportIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':exportId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.exports)[':exportId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':exportId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportsExportIdQueryKey>
  >({
    queryKey: getExportsExportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.exports[':exportId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useExportsExportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':exportId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.exports)[':exportId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':exportId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportsExportIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getExportsExportIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseExportsExportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':exportId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.exports)[':exportId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':exportId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportsExportIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getExportsExportIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getExportsExportIdDownloadQueryKey(
  args: InferRequestType<(typeof client.exports)[':exportId']['download']['$get']>,
) {
  return ['exports', '/exports/:exportId/download', args] as const
}

export function getExportsExportIdDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.exports)[':exportId']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.exports)[':exportId']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.exports)[':exportId']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportsExportIdDownloadQueryKey>
  >({
    queryKey: getExportsExportIdDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.exports[':exportId'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useExportsExportIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.exports)[':exportId']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.exports)[':exportId']['download']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.exports)[':exportId']['download']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportsExportIdDownloadQueryKey>
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
      ...getExportsExportIdDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseExportsExportIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.exports)[':exportId']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.exports)[':exportId']['download']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.exports)[':exportId']['download']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportsExportIdDownloadQueryKey>
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
      ...getExportsExportIdDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostImportsPcapMutationKey() {
  return ['imports', '/imports/pcap', 'POST'] as const
}

export function getPostImportsPcapMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.imports.pcap.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.imports.pcap.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostImportsPcapMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.imports.pcap.$post>) {
      return parseResponse(client.imports.pcap.$post(args, options))
    },
  })
}

export function usePostImportsPcap<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.imports.pcap.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.imports.pcap.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostImportsPcapMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDashboardsQueryKey(args: InferRequestType<typeof client.dashboards.$get>) {
  return ['dashboards', '/dashboards', args] as const
}

export function getDashboardsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.dashboards.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDashboardsQueryKey>
  >({
    queryKey: getDashboardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dashboards.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDashboards<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.dashboards.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDashboardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDashboardsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDashboards<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.dashboards.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDashboardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDashboardsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostDashboardsMutationKey() {
  return ['dashboards', '/dashboards', 'POST'] as const
}

export function getPostDashboardsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.$post>>>>>,
    TError,
    InferRequestType<typeof client.dashboards.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDashboardsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dashboards.$post>) {
      return parseResponse(client.dashboards.$post(args, options))
    },
  })
}

export function usePostDashboards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.dashboards.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDashboardsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDashboardsDashboardIdQueryKey(
  args: InferRequestType<(typeof client.dashboards)[':dashboardId']['$get']>,
) {
  return ['dashboards', '/dashboards/:dashboardId', args] as const
}

export function getDashboardsDashboardIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dashboards)[':dashboardId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dashboards)[':dashboardId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dashboards)[':dashboardId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardsDashboardIdQueryKey>
  >({
    queryKey: getDashboardsDashboardIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dashboards[':dashboardId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDashboardsDashboardId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dashboards)[':dashboardId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dashboards)[':dashboardId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.dashboards)[':dashboardId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDashboardsDashboardIdQueryKey>
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
      ...getDashboardsDashboardIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDashboardsDashboardId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dashboards)[':dashboardId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dashboards)[':dashboardId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.dashboards)[':dashboardId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDashboardsDashboardIdQueryKey>
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
      ...getDashboardsDashboardIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutDashboardsDashboardIdMutationKey() {
  return ['dashboards', '/dashboards/:dashboardId', 'PUT'] as const
}

export function getPutDashboardsDashboardIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dashboards)[':dashboardId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dashboards)[':dashboardId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDashboardsDashboardIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.dashboards)[':dashboardId']['$put']>) {
      return parseResponse(client.dashboards[':dashboardId'].$put(args, options))
    },
  })
}

export function usePutDashboardsDashboardId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.dashboards)[':dashboardId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.dashboards)[':dashboardId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDashboardsDashboardIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDashboardsDashboardIdMutationKey() {
  return ['dashboards', '/dashboards/:dashboardId', 'DELETE'] as const
}

export function getDeleteDashboardsDashboardIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards)[':dashboardId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dashboards)[':dashboardId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDashboardsDashboardIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dashboards)[':dashboardId']['$delete']>,
    ) {
      return parseResponse(client.dashboards[':dashboardId'].$delete(args, options))
    },
  })
}

export function useDeleteDashboardsDashboardId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dashboards)[':dashboardId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.dashboards)[':dashboardId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDashboardsDashboardIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostMeDashboardsResetMutationKey() {
  return ['me', '/me/dashboards/reset', 'POST'] as const
}

export function getPostMeDashboardsResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.dashboards.reset.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostMeDashboardsResetMutationKey(),
    async mutationFn() {
      return parseResponse(client.me.dashboards.reset.$post(undefined, options))
    },
  })
}

export function usePostMeDashboardsReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.me.dashboards.reset.$post>>>
          >
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
  const mutationDefaults = getPostMeDashboardsResetMutationOptions<TError, TOnMutateResult>(
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

export function getMappingsQueryKey(args: InferRequestType<typeof client.mappings.$get>) {
  return ['mappings', '/mappings', args] as const
}

export function getMappingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mappings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.mappings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mappings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMappingsQueryKey>
  >({
    queryKey: getMappingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mappings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMappings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mappings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.mappings.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mappings.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMappingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMappingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMappings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mappings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.mappings.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mappings.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMappingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMappingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMappingsMutationKey() {
  return ['mappings', '/mappings', 'POST'] as const
}

export function getPostMappingsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mappings.$post>>>>>,
    TError,
    InferRequestType<typeof client.mappings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMappingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mappings.$post>) {
      return parseResponse(client.mappings.$post(args, options))
    },
  })
}

export function usePostMappings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mappings.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.mappings.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMappingsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMappingsMappingIdQueryKey(
  args: InferRequestType<(typeof client.mappings)[':mappingId']['$get']>,
) {
  return ['mappings', '/mappings/:mappingId', args] as const
}

export function getMappingsMappingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mappings)[':mappingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mappings)[':mappingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.mappings)[':mappingId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMappingsMappingIdQueryKey>
  >({
    queryKey: getMappingsMappingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mappings[':mappingId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMappingsMappingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mappings)[':mappingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mappings)[':mappingId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mappings)[':mappingId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMappingsMappingIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMappingsMappingIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMappingsMappingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mappings)[':mappingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mappings)[':mappingId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mappings)[':mappingId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMappingsMappingIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMappingsMappingIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutMappingsMappingIdMutationKey() {
  return ['mappings', '/mappings/:mappingId', 'PUT'] as const
}

export function getPutMappingsMappingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.mappings)[':mappingId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.mappings)[':mappingId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMappingsMappingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.mappings)[':mappingId']['$put']>) {
      return parseResponse(client.mappings[':mappingId'].$put(args, options))
    },
  })
}

export function usePutMappingsMappingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mappings)[':mappingId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.mappings)[':mappingId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMappingsMappingIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteMappingsMappingIdMutationKey() {
  return ['mappings', '/mappings/:mappingId', 'DELETE'] as const
}

export function getDeleteMappingsMappingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mappings)[':mappingId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.mappings)[':mappingId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMappingsMappingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.mappings)[':mappingId']['$delete']>) {
      return parseResponse(client.mappings[':mappingId'].$delete(args, options))
    },
  })
}

export function useDeleteMappingsMappingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mappings)[':mappingId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.mappings)[':mappingId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMappingsMappingIdMutationOptions<TError, TOnMutateResult>(
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

export function getMappingsFieldsQueryKey(
  args: InferRequestType<typeof client.mappings.fields.$get>,
) {
  return ['mappings', '/mappings/fields', args] as const
}

export function getMappingsFieldsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mappings.fields.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.mappings.fields.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mappings.fields.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMappingsFieldsQueryKey>
  >({
    queryKey: getMappingsFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mappings.fields.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMappingsFields<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mappings.fields.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.mappings.fields.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mappings.fields.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMappingsFieldsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMappingsFieldsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMappingsFields<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mappings.fields.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.mappings.fields.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mappings.fields.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMappingsFieldsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMappingsFieldsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHepsubsQueryKey(args: InferRequestType<typeof client.hepsubs.$get>) {
  return ['hepsubs', '/hepsubs', args] as const
}

export function getHepsubsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hepsubs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.hepsubs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hepsubs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHepsubsQueryKey>
  >({
    queryKey: getHepsubsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hepsubs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHepsubs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hepsubs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hepsubs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hepsubs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHepsubsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHepsubsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHepsubs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hepsubs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hepsubs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hepsubs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHepsubsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHepsubsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostHepsubsMutationKey() {
  return ['hepsubs', '/hepsubs', 'POST'] as const
}

export function getPostHepsubsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hepsubs.$post>>>>>,
    TError,
    InferRequestType<typeof client.hepsubs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostHepsubsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.hepsubs.$post>) {
      return parseResponse(client.hepsubs.$post(args, options))
    },
  })
}

export function usePostHepsubs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hepsubs.$post>>>>>,
        TError,
        InferRequestType<typeof client.hepsubs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostHepsubsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getHepsubsHepsubIdQueryKey(
  args: InferRequestType<(typeof client.hepsubs)[':hepsubId']['$get']>,
) {
  return ['hepsubs', '/hepsubs/:hepsubId', args] as const
}

export function getHepsubsHepsubIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hepsubs)[':hepsubId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hepsubs)[':hepsubId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.hepsubs)[':hepsubId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHepsubsHepsubIdQueryKey>
  >({
    queryKey: getHepsubsHepsubIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hepsubs[':hepsubId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHepsubsHepsubId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hepsubs)[':hepsubId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hepsubs)[':hepsubId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.hepsubs)[':hepsubId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHepsubsHepsubIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHepsubsHepsubIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHepsubsHepsubId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hepsubs)[':hepsubId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hepsubs)[':hepsubId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.hepsubs)[':hepsubId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHepsubsHepsubIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHepsubsHepsubIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutHepsubsHepsubIdMutationKey() {
  return ['hepsubs', '/hepsubs/:hepsubId', 'PUT'] as const
}

export function getPutHepsubsHepsubIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.hepsubs)[':hepsubId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.hepsubs)[':hepsubId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutHepsubsHepsubIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.hepsubs)[':hepsubId']['$put']>) {
      return parseResponse(client.hepsubs[':hepsubId'].$put(args, options))
    },
  })
}

export function usePutHepsubsHepsubId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.hepsubs)[':hepsubId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.hepsubs)[':hepsubId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutHepsubsHepsubIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteHepsubsHepsubIdMutationKey() {
  return ['hepsubs', '/hepsubs/:hepsubId', 'DELETE'] as const
}

export function getDeleteHepsubsHepsubIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.hepsubs)[':hepsubId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.hepsubs)[':hepsubId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteHepsubsHepsubIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.hepsubs)[':hepsubId']['$delete']>) {
      return parseResponse(client.hepsubs[':hepsubId'].$delete(args, options))
    },
  })
}

export function useDeleteHepsubsHepsubId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hepsubs)[':hepsubId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.hepsubs)[':hepsubId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteHepsubsHepsubIdMutationOptions<TError, TOnMutateResult>(
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

export function getAliasesQueryKey(args: InferRequestType<typeof client.aliases.$get>) {
  return ['aliases', '/aliases', args] as const
}

export function getAliasesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.aliases.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAliasesQueryKey>
  >({
    queryKey: getAliasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.aliases.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAliases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.aliases.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAliasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAliasesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAliases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.aliases.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAliasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAliasesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAliasesMutationKey() {
  return ['aliases', '/aliases', 'POST'] as const
}

export function getPostAliasesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$post>>>>>,
    TError,
    InferRequestType<typeof client.aliases.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAliasesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.aliases.$post>) {
      return parseResponse(client.aliases.$post(args, options))
    },
  })
}

export function usePostAliases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$post>>>>>,
        TError,
        InferRequestType<typeof client.aliases.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAliasesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutAliasesAliasIdMutationKey() {
  return ['aliases', '/aliases/:aliasId', 'PUT'] as const
}

export function getPutAliasesAliasIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.aliases)[':aliasId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.aliases)[':aliasId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAliasesAliasIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.aliases)[':aliasId']['$put']>) {
      return parseResponse(client.aliases[':aliasId'].$put(args, options))
    },
  })
}

export function usePutAliasesAliasId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.aliases)[':aliasId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.aliases)[':aliasId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAliasesAliasIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAliasesAliasIdMutationKey() {
  return ['aliases', '/aliases/:aliasId', 'DELETE'] as const
}

export function getDeleteAliasesAliasIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.aliases)[':aliasId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.aliases)[':aliasId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAliasesAliasIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.aliases)[':aliasId']['$delete']>) {
      return parseResponse(client.aliases[':aliasId'].$delete(args, options))
    },
  })
}

export function useDeleteAliasesAliasId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.aliases)[':aliasId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.aliases)[':aliasId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAliasesAliasIdMutationOptions<TError, TOnMutateResult>(
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

export function getIpaliasesQueryKey(args: InferRequestType<typeof client.ipaliases.$get>) {
  return ['ipaliases', '/ipaliases', args] as const
}

export function getIpaliasesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipaliases.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ipaliases.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipaliases.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIpaliasesQueryKey>
  >({
    queryKey: getIpaliasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ipaliases.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useIpaliases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipaliases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ipaliases.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipaliases.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIpaliasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIpaliasesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIpaliases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipaliases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ipaliases.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipaliases.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIpaliasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIpaliasesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostIpaliasesMutationKey() {
  return ['ipaliases', '/ipaliases', 'POST'] as const
}

export function getPostIpaliasesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipaliases.$post>>>>>,
    TError,
    InferRequestType<typeof client.ipaliases.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIpaliasesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ipaliases.$post>) {
      return parseResponse(client.ipaliases.$post(args, options))
    },
  })
}

export function usePostIpaliases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipaliases.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ipaliases.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIpaliasesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutIpaliasesAliasIdMutationKey() {
  return ['ipaliases', '/ipaliases/:aliasId', 'PUT'] as const
}

export function getPutIpaliasesAliasIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ipaliases)[':aliasId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.ipaliases)[':aliasId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIpaliasesAliasIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ipaliases)[':aliasId']['$put']>) {
      return parseResponse(client.ipaliases[':aliasId'].$put(args, options))
    },
  })
}

export function usePutIpaliasesAliasId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ipaliases)[':aliasId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.ipaliases)[':aliasId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIpaliasesAliasIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteIpaliasesAliasIdMutationKey() {
  return ['ipaliases', '/ipaliases/:aliasId', 'DELETE'] as const
}

export function getDeleteIpaliasesAliasIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipaliases)[':aliasId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.ipaliases)[':aliasId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIpaliasesAliasIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ipaliases)[':aliasId']['$delete']>) {
      return parseResponse(client.ipaliases[':aliasId'].$delete(args, options))
    },
  })
}

export function useDeleteIpaliasesAliasId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipaliases)[':aliasId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.ipaliases)[':aliasId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIpaliasesAliasIdMutationOptions<TError, TOnMutateResult>(
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

export function getAdvancedQueryKey(args: InferRequestType<typeof client.advanced.$get>) {
  return ['advanced', '/advanced', args] as const
}

export function getAdvancedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.advanced.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.advanced.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.advanced.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdvancedQueryKey>
  >({
    queryKey: getAdvancedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.advanced.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAdvanced<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.advanced.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.advanced.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.advanced.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAdvancedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdvancedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdvanced<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.advanced.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.advanced.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.advanced.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAdvancedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdvancedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAdvancedMutationKey() {
  return ['advanced', '/advanced', 'POST'] as const
}

export function getPostAdvancedMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.advanced.$post>>>>>,
    TError,
    InferRequestType<typeof client.advanced.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdvancedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.advanced.$post>) {
      return parseResponse(client.advanced.$post(args, options))
    },
  })
}

export function usePostAdvanced<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.advanced.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.advanced.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdvancedMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdvancedGuidQueryKey(
  args: InferRequestType<(typeof client.advanced)[':guid']['$get']>,
) {
  return ['advanced', '/advanced/:guid', args] as const
}

export function getAdvancedGuidQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.advanced)[':guid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.advanced)[':guid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.advanced)[':guid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdvancedGuidQueryKey>
  >({
    queryKey: getAdvancedGuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.advanced[':guid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAdvancedGuid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.advanced)[':guid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.advanced)[':guid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.advanced)[':guid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdvancedGuidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdvancedGuidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdvancedGuid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.advanced)[':guid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.advanced)[':guid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.advanced)[':guid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdvancedGuidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdvancedGuidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutAdvancedGuidMutationKey() {
  return ['advanced', '/advanced/:guid', 'PUT'] as const
}

export function getPutAdvancedGuidMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.advanced)[':guid']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.advanced)[':guid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdvancedGuidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.advanced)[':guid']['$put']>) {
      return parseResponse(client.advanced[':guid'].$put(args, options))
    },
  })
}

export function usePutAdvancedGuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.advanced)[':guid']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.advanced)[':guid']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAdvancedGuidMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAdvancedGuidMutationKey() {
  return ['advanced', '/advanced/:guid', 'DELETE'] as const
}

export function getDeleteAdvancedGuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.advanced)[':guid']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.advanced)[':guid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdvancedGuidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.advanced)[':guid']['$delete']>) {
      return parseResponse(client.advanced[':guid'].$delete(args, options))
    },
  })
}

export function useDeleteAdvancedGuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.advanced)[':guid']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.advanced)[':guid']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAdvancedGuidMutationOptions<TError, TOnMutateResult>(
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

export function getScriptsQueryKey(args: InferRequestType<typeof client.scripts.$get>) {
  return ['scripts', '/scripts', args] as const
}

export function getScriptsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.scripts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getScriptsQueryKey>
  >({
    queryKey: getScriptsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scripts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useScripts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.scripts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getScriptsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getScriptsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseScripts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.scripts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getScriptsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getScriptsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostScriptsMutationKey() {
  return ['scripts', '/scripts', 'POST'] as const
}

export function getPostScriptsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.$post>>>>>,
    TError,
    InferRequestType<typeof client.scripts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostScriptsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.scripts.$post>) {
      return parseResponse(client.scripts.$post(args, options))
    },
  })
}

export function usePostScripts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.$post>>>>>,
        TError,
        InferRequestType<typeof client.scripts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostScriptsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getScriptsScriptIdQueryKey(
  args: InferRequestType<(typeof client.scripts)[':scriptId']['$get']>,
) {
  return ['scripts', '/scripts/:scriptId', args] as const
}

export function getScriptsScriptIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.scripts)[':scriptId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scripts)[':scriptId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.scripts)[':scriptId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScriptsScriptIdQueryKey>
  >({
    queryKey: getScriptsScriptIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scripts[':scriptId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useScriptsScriptId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.scripts)[':scriptId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scripts)[':scriptId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.scripts)[':scriptId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScriptsScriptIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getScriptsScriptIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseScriptsScriptId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.scripts)[':scriptId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scripts)[':scriptId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.scripts)[':scriptId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScriptsScriptIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getScriptsScriptIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutScriptsScriptIdMutationKey() {
  return ['scripts', '/scripts/:scriptId', 'PUT'] as const
}

export function getPutScriptsScriptIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.scripts)[':scriptId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.scripts)[':scriptId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutScriptsScriptIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.scripts)[':scriptId']['$put']>) {
      return parseResponse(client.scripts[':scriptId'].$put(args, options))
    },
  })
}

export function usePutScriptsScriptId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.scripts)[':scriptId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.scripts)[':scriptId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutScriptsScriptIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteScriptsScriptIdMutationKey() {
  return ['scripts', '/scripts/:scriptId', 'DELETE'] as const
}

export function getDeleteScriptsScriptIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.scripts)[':scriptId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.scripts)[':scriptId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteScriptsScriptIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.scripts)[':scriptId']['$delete']>) {
      return parseResponse(client.scripts[':scriptId'].$delete(args, options))
    },
  })
}

export function useDeleteScriptsScriptId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scripts)[':scriptId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.scripts)[':scriptId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteScriptsScriptIdMutationOptions<TError, TOnMutateResult>(
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

export function getOpenapiJsonQueryKey() {
  return ['openapi.json', '/openapi.json'] as const
}

export function getOpenapiJsonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOpenapiJsonQueryKey>
  >({
    queryKey: getOpenapiJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['openapi.json'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOpenapiJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOpenapiJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOpenapiJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOpenapiJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOpenapiJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOpenapiJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAuthTokensQueryKey(
  args: InferRequestType<(typeof client)['auth-tokens']['$get']>,
) {
  return ['auth-tokens', '/auth-tokens', args] as const
}

export function getAuthTokensQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['auth-tokens']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['auth-tokens']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['auth-tokens']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthTokensQueryKey>
  >({
    queryKey: getAuthTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['auth-tokens'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAuthTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['auth-tokens']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['auth-tokens']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['auth-tokens']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAuthTokensQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAuthTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['auth-tokens']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['auth-tokens']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['auth-tokens']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAuthTokensQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAuthTokensMutationKey() {
  return ['auth-tokens', '/auth-tokens', 'POST'] as const
}

export function getPostAuthTokensMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['auth-tokens']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['auth-tokens']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthTokensMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['auth-tokens']['$post']>) {
      return parseResponse(client['auth-tokens'].$post(args, options))
    },
  })
}

export function usePostAuthTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['auth-tokens']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['auth-tokens']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthTokensMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAuthTokensTokenIdQueryKey(
  args: InferRequestType<(typeof client)['auth-tokens'][':tokenId']['$get']>,
) {
  return ['auth-tokens', '/auth-tokens/:tokenId', args] as const
}

export function getAuthTokensTokenIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['auth-tokens'][':tokenId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['auth-tokens'][':tokenId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['auth-tokens'][':tokenId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthTokensTokenIdQueryKey>
  >({
    queryKey: getAuthTokensTokenIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['auth-tokens'][':tokenId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAuthTokensTokenId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['auth-tokens'][':tokenId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['auth-tokens'][':tokenId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['auth-tokens'][':tokenId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthTokensTokenIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAuthTokensTokenIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAuthTokensTokenId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['auth-tokens'][':tokenId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['auth-tokens'][':tokenId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['auth-tokens'][':tokenId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthTokensTokenIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAuthTokensTokenIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutAuthTokensTokenIdMutationKey() {
  return ['auth-tokens', '/auth-tokens/:tokenId', 'PUT'] as const
}

export function getPutAuthTokensTokenIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['auth-tokens'][':tokenId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['auth-tokens'][':tokenId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAuthTokensTokenIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['auth-tokens'][':tokenId']['$put']>) {
      return parseResponse(client['auth-tokens'][':tokenId'].$put(args, options))
    },
  })
}

export function usePutAuthTokensTokenId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['auth-tokens'][':tokenId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['auth-tokens'][':tokenId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAuthTokensTokenIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAuthTokensTokenIdMutationKey() {
  return ['auth-tokens', '/auth-tokens/:tokenId', 'DELETE'] as const
}

export function getDeleteAuthTokensTokenIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['auth-tokens'][':tokenId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['auth-tokens'][':tokenId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuthTokensTokenIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['auth-tokens'][':tokenId']['$delete']>,
    ) {
      return parseResponse(client['auth-tokens'][':tokenId'].$delete(args, options))
    },
  })
}

export function useDeleteAuthTokensTokenId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['auth-tokens'][':tokenId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['auth-tokens'][':tokenId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAuthTokensTokenIdMutationOptions<TError, TOnMutateResult>(
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

export function getAgentsSubscriptionsQueryKey(
  args: InferRequestType<typeof client.agents.subscriptions.$get>,
) {
  return ['agents', '/agents/subscriptions', args] as const
}

export function getAgentsSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.agents.subscriptions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.subscriptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsSubscriptionsQueryKey>
  >({
    queryKey: getAgentsSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.subscriptions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAgentsSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.agents.subscriptions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.agents.subscriptions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentsSubscriptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAgentsSubscriptionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAgentsSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.agents.subscriptions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.agents.subscriptions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentsSubscriptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAgentsSubscriptionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAgentsSubscriptionsMutationKey() {
  return ['agents', '/agents/subscriptions', 'POST'] as const
}

export function getPostAgentsSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.agents.subscriptions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.agents.subscriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAgentsSubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.agents.subscriptions.$post>) {
      return parseResponse(client.agents.subscriptions.$post(args, options))
    },
  })
}

export function usePostAgentsSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.agents.subscriptions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.agents.subscriptions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAgentsSubscriptionsMutationOptions<TError, TOnMutateResult>(
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

export function getAgentsSubscriptionsSubscriptionIdQueryKey(
  args: InferRequestType<(typeof client.agents.subscriptions)[':subscriptionId']['$get']>,
) {
  return ['agents', '/agents/subscriptions/:subscriptionId', args] as const
}

export function getAgentsSubscriptionsSubscriptionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.subscriptions)[':subscriptionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agents.subscriptions)[':subscriptionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agents.subscriptions)[':subscriptionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsSubscriptionsSubscriptionIdQueryKey>
  >({
    queryKey: getAgentsSubscriptionsSubscriptionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.subscriptions[':subscriptionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAgentsSubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.subscriptions)[':subscriptionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agents.subscriptions)[':subscriptionId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.agents.subscriptions)[':subscriptionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentsSubscriptionsSubscriptionIdQueryKey>
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
      ...getAgentsSubscriptionsSubscriptionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAgentsSubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.subscriptions)[':subscriptionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agents.subscriptions)[':subscriptionId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.agents.subscriptions)[':subscriptionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentsSubscriptionsSubscriptionIdQueryKey>
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
      ...getAgentsSubscriptionsSubscriptionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutAgentsSubscriptionsSubscriptionIdMutationKey() {
  return ['agents', '/agents/subscriptions/:subscriptionId', 'PUT'] as const
}

export function getPutAgentsSubscriptionsSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agents.subscriptions)[':subscriptionId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.agents.subscriptions)[':subscriptionId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAgentsSubscriptionsSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.agents.subscriptions)[':subscriptionId']['$put']>,
    ) {
      return parseResponse(client.agents.subscriptions[':subscriptionId'].$put(args, options))
    },
  })
}

export function usePutAgentsSubscriptionsSubscriptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.agents.subscriptions)[':subscriptionId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.agents.subscriptions)[':subscriptionId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAgentsSubscriptionsSubscriptionIdMutationOptions<
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

export function getDeleteAgentsSubscriptionsSubscriptionIdMutationKey() {
  return ['agents', '/agents/subscriptions/:subscriptionId', 'DELETE'] as const
}

export function getDeleteAgentsSubscriptionsSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agents.subscriptions)[':subscriptionId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.agents.subscriptions)[':subscriptionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAgentsSubscriptionsSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.agents.subscriptions)[':subscriptionId']['$delete']>,
    ) {
      return parseResponse(client.agents.subscriptions[':subscriptionId'].$delete(args, options))
    },
  })
}

export function useDeleteAgentsSubscriptionsSubscriptionId<
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
                  ReturnType<(typeof client.agents.subscriptions)[':subscriptionId']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.agents.subscriptions)[':subscriptionId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAgentsSubscriptionsSubscriptionIdMutationOptions<
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

export function getAgentsTypesQueryKey(args: InferRequestType<typeof client.agents.types.$get>) {
  return ['agents', '/agents/types', args] as const
}

export function getAgentsTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.types.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.agents.types.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.types.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAgentsTypesQueryKey>
  >({
    queryKey: getAgentsTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.types.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAgentsTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.agents.types.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.types.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAgentsTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAgentsTypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAgentsTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.agents.types.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.types.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAgentsTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAgentsTypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAgentsTypesTypeQueryKey(
  args: InferRequestType<(typeof client.agents.types)[':type']['$get']>,
) {
  return ['agents', '/agents/types/:type', args] as const
}

export function getAgentsTypesTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agents.types)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agents.types)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.agents.types)[':type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsTypesTypeQueryKey>
  >({
    queryKey: getAgentsTypesTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agents.types[':type'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAgentsTypesType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agents.types)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agents.types)[':type']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.agents.types)[':type']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentsTypesTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAgentsTypesTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAgentsTypesType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agents.types)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agents.types)[':type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.agents.types)[':type']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentsTypesTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAgentsTypesTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAgentsSearchMutationKey() {
  return ['agents', '/agents/search', 'POST'] as const
}

export function getPostAgentsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.agents.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAgentsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.agents.search.$post>) {
      return parseResponse(client.agents.search.$post(args, options))
    },
  })
}

export function usePostAgentsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.agents.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAgentsSearchMutationOptions<TError, TOnMutateResult>(
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

export function getDbNodesQueryKey() {
  return ['db', '/db/nodes'] as const
}

export function getDbNodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.db.nodes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.db.nodes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDbNodesQueryKey>
  >({
    queryKey: getDbNodesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.db.nodes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDbNodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.db.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.db.nodes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDbNodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDbNodesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDbNodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.db.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.db.nodes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDbNodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDbNodesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getModulesQueryKey() {
  return ['modules', '/modules'] as const
}

export function getModulesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modules.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modules.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getModulesQueryKey>
  >({
    queryKey: getModulesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.modules.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useModules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modules.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modules.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getModulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getModulesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseModules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modules.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modules.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getModulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getModulesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostStatisticsQueryMutationKey() {
  return ['statistics', '/statistics/query', 'POST'] as const
}

export function getPostStatisticsQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.query.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.statistics.query.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStatisticsQueryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.statistics.query.$post>) {
      return parseResponse(client.statistics.query.$post(args, options))
    },
  })
}

export function usePostStatisticsQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.statistics.query.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.statistics.query.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStatisticsQueryMutationOptions<TError, TOnMutateResult>(
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

export function getStatisticsDatabasesQueryKey(
  args: InferRequestType<typeof client.statistics.databases.$get>,
) {
  return ['statistics', '/statistics/databases', args] as const
}

export function getStatisticsDatabasesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.databases.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.statistics.databases.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.databases.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatisticsDatabasesQueryKey>
  >({
    queryKey: getStatisticsDatabasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.statistics.databases.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStatisticsDatabases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.databases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.statistics.databases.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.statistics.databases.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatisticsDatabasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStatisticsDatabasesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStatisticsDatabases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.databases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.statistics.databases.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.statistics.databases.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatisticsDatabasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStatisticsDatabasesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStatisticsMeasurementsQueryKey(
  args: InferRequestType<typeof client.statistics.measurements.$get>,
) {
  return ['statistics', '/statistics/measurements', args] as const
}

export function getStatisticsMeasurementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.statistics.measurements.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.statistics.measurements.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.statistics.measurements.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatisticsMeasurementsQueryKey>
  >({
    queryKey: getStatisticsMeasurementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.statistics.measurements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStatisticsMeasurements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.statistics.measurements.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.statistics.measurements.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.statistics.measurements.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatisticsMeasurementsQueryKey>
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
      ...getStatisticsMeasurementsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStatisticsMeasurements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.statistics.measurements.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.statistics.measurements.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.statistics.measurements.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatisticsMeasurementsQueryKey>
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
      ...getStatisticsMeasurementsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStatisticsMetricsQueryKey(
  args: InferRequestType<typeof client.statistics.metrics.$get>,
) {
  return ['statistics', '/statistics/metrics', args] as const
}

export function getStatisticsMetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.metrics.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.statistics.metrics.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.metrics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatisticsMetricsQueryKey>
  >({
    queryKey: getStatisticsMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.statistics.metrics.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStatisticsMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.statistics.metrics.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.statistics.metrics.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatisticsMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStatisticsMetricsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStatisticsMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.statistics.metrics.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.statistics.metrics.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatisticsMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStatisticsMetricsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStatisticsTagsQueryKey(
  args: InferRequestType<typeof client.statistics.tags.$get>,
) {
  return ['statistics', '/statistics/tags', args] as const
}

export function getStatisticsTagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.tags.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.statistics.tags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.tags.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatisticsTagsQueryKey>
  >({
    queryKey: getStatisticsTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.statistics.tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStatisticsTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.statistics.tags.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.tags.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStatisticsTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStatisticsTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStatisticsTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.statistics.tags.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.tags.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStatisticsTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStatisticsTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLogsLokiLabelsQueryKey(
  args: InferRequestType<typeof client.logs.loki.labels.$get>,
) {
  return ['logs', '/logs/loki/labels', args] as const
}

export function getLogsLokiLabelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.loki.labels.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.logs.loki.labels.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.loki.labels.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLogsLokiLabelsQueryKey>
  >({
    queryKey: getLogsLokiLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logs.loki.labels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLogsLokiLabels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.loki.labels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.logs.loki.labels.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.loki.labels.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLogsLokiLabelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLogsLokiLabelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLogsLokiLabels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.loki.labels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.logs.loki.labels.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.loki.labels.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLogsLokiLabelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLogsLokiLabelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLogsLokiValuesQueryKey(
  args: InferRequestType<typeof client.logs.loki.values.$get>,
) {
  return ['logs', '/logs/loki/values', args] as const
}

export function getLogsLokiValuesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.loki.values.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.logs.loki.values.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.loki.values.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLogsLokiValuesQueryKey>
  >({
    queryKey: getLogsLokiValuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logs.loki.values.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLogsLokiValues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.loki.values.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.logs.loki.values.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.loki.values.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLogsLokiValuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLogsLokiValuesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLogsLokiValues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.loki.values.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.logs.loki.values.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.loki.values.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLogsLokiValuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLogsLokiValuesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostLogsLokiQueryMutationKey() {
  return ['logs', '/logs/loki/query', 'POST'] as const
}

export function getPostLogsLokiQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.loki.query.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.logs.loki.query.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLogsLokiQueryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.logs.loki.query.$post>) {
      return parseResponse(client.logs.loki.query.$post(args, options))
    },
  })
}

export function usePostLogsLokiQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.loki.query.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.logs.loki.query.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLogsLokiQueryMutationOptions<TError, TOnMutateResult>(
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

export function getIntegrationsGrafanaStatusQueryKey() {
  return ['integrations', '/integrations/grafana/status'] as const
}

export function getIntegrationsGrafanaStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.integrations.grafana.status.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.integrations.grafana.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsGrafanaStatusQueryKey>
  >({
    queryKey: getIntegrationsGrafanaStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.integrations.grafana.status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIntegrationsGrafanaStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.integrations.grafana.status.$get>>>
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
              Awaited<ReturnType<typeof client.integrations.grafana.status.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsGrafanaStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIntegrationsGrafanaStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIntegrationsGrafanaStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.integrations.grafana.status.$get>>>
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
              Awaited<ReturnType<typeof client.integrations.grafana.status.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsGrafanaStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIntegrationsGrafanaStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getIntegrationsGrafanaFoldersQueryKey(
  args: InferRequestType<typeof client.integrations.grafana.folders.$get>,
) {
  return ['integrations', '/integrations/grafana/folders', args] as const
}

export function getIntegrationsGrafanaFoldersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.integrations.grafana.folders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.integrations.grafana.folders.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.integrations.grafana.folders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsGrafanaFoldersQueryKey>
  >({
    queryKey: getIntegrationsGrafanaFoldersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.integrations.grafana.folders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIntegrationsGrafanaFolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.integrations.grafana.folders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.integrations.grafana.folders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.integrations.grafana.folders.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsGrafanaFoldersQueryKey>
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
      ...getIntegrationsGrafanaFoldersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIntegrationsGrafanaFolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.integrations.grafana.folders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.integrations.grafana.folders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.integrations.grafana.folders.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsGrafanaFoldersQueryKey>
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
      ...getIntegrationsGrafanaFoldersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getIntegrationsGrafanaDashboardsUidQueryKey(
  args: InferRequestType<(typeof client.integrations.grafana.dashboards)[':uid']['$get']>,
) {
  return ['integrations', '/integrations/grafana/dashboards/:uid', args] as const
}

export function getIntegrationsGrafanaDashboardsUidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.integrations.grafana.dashboards)[':uid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.integrations.grafana.dashboards)[':uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.integrations.grafana.dashboards)[':uid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsGrafanaDashboardsUidQueryKey>
  >({
    queryKey: getIntegrationsGrafanaDashboardsUidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.integrations.grafana.dashboards[':uid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIntegrationsGrafanaDashboardsUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.integrations.grafana.dashboards)[':uid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.integrations.grafana.dashboards)[':uid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.integrations.grafana.dashboards)[':uid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsGrafanaDashboardsUidQueryKey>
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
      ...getIntegrationsGrafanaDashboardsUidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIntegrationsGrafanaDashboardsUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.integrations.grafana.dashboards)[':uid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.integrations.grafana.dashboards)[':uid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.integrations.grafana.dashboards)[':uid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsGrafanaDashboardsUidQueryKey>
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
      ...getIntegrationsGrafanaDashboardsUidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStreamHepQueryKey() {
  return ['stream', '/stream/hep'] as const
}

export function getStreamHepQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stream.hep.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stream.hep.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStreamHepQueryKey>
  >({
    queryKey: getStreamHepQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.stream.hep.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStreamHep<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stream.hep.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stream.hep.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStreamHepQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStreamHepQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStreamHep<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stream.hep.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stream.hep.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStreamHepQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStreamHepQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}
