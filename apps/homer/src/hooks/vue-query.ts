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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.sessions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.auth.sessions.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getAuthProvidersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAuthProvidersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.auth.providers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAuthProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.providers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.providers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.providers.$get>>>>
          >,
          ReturnType<typeof getAuthProvidersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.providers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAuthProvidersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.auth.providers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAuthOauth2ProviderRedirectQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.auth.oauth2)[':provider']['redirect']['$get']>
  >,
) {
  return ['auth', '/auth/oauth2/:provider/redirect', toValue(args)] as const
}

export function getAuthOauth2ProviderRedirectQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.auth.oauth2)[':provider']['redirect']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthOauth2ProviderRedirectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.auth.oauth2[':provider'].redirect.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.auth.oauth2)[':provider']['redirect']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.auth.oauth2)[':provider']['redirect']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAuthOauth2ProviderRedirectQueryKey>
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
          Awaited<ReturnType<(typeof client.auth.oauth2)[':provider']['redirect']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthOauth2ProviderRedirectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthOauth2ProviderRedirectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.auth.oauth2[':provider'].redirect.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAuthOauth2ProviderCallbackQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.auth.oauth2)[':provider']['callback']['$get']>
  >,
) {
  return ['auth', '/auth/oauth2/:provider/callback', toValue(args)] as const
}

export function getAuthOauth2ProviderCallbackQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.auth.oauth2)[':provider']['callback']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthOauth2ProviderCallbackQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.auth.oauth2[':provider'].callback.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.auth.oauth2)[':provider']['callback']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.auth.oauth2)[':provider']['callback']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAuthOauth2ProviderCallbackQueryKey>
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
          Awaited<ReturnType<(typeof client.auth.oauth2)[':provider']['callback']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthOauth2ProviderCallbackQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthOauth2ProviderCallbackQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.auth.oauth2[':provider'].callback.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
) {
  return ['users', '/users', toValue(args)] as const
}

export function getUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          ReturnType<typeof getUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
          TError,
          InferRequestType<typeof client.users.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['$get']>>,
) {
  return ['users', '/users/:userId', toValue(args)] as const
}

export function getUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersUserIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.users)[':userId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':userId']['$delete']>,
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          ReturnType<typeof getMeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.me.$get(undefined, { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getMeSettingsQueryKey() {
  return ['me', '/me/settings'] as const
}

export function getMeSettingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMeSettingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.settings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMeSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.settings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.settings.$get>>>>
          >,
          ReturnType<typeof getMeSettingsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.settings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMeSettingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.me.settings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.messages)[':messageId']['$get']>>,
) {
  return ['messages', '/messages/:messageId', toValue(args)] as const
}

export function getMessagesMessageIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.messages)[':messageId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMessagesMessageIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.messages[':messageId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMessagesMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':messageId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.messages)[':messageId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messages)[':messageId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMessagesMessageIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':messageId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagesMessageIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMessagesMessageIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.messages[':messageId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMessagesMessageIdDecodedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messages)[':messageId']['decoded']['$get']>
  >,
) {
  return ['messages', '/messages/:messageId/decoded', toValue(args)] as const
}

export function getMessagesMessageIdDecodedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messages)[':messageId']['decoded']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMessagesMessageIdDecodedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.messages[':messageId'].decoded.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messages)[':messageId']['decoded']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messages)[':messageId']['decoded']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMessagesMessageIdDecodedQueryKey>
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
          Awaited<ReturnType<(typeof client.messages)[':messageId']['decoded']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagesMessageIdDecodedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMessagesMessageIdDecodedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.messages[':messageId'].decoded.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.exports.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.exports)[':exportId']['$get']>>,
) {
  return ['exports', '/exports/:exportId', toValue(args)] as const
}

export function getExportsExportIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.exports)[':exportId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportsExportIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.exports[':exportId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExportsExportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':exportId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.exports)[':exportId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.exports)[':exportId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.exports)[':exportId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExportsExportIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':exportId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportsExportIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportsExportIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.exports[':exportId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExportsExportIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.exports)[':exportId']['download']['$get']>
  >,
) {
  return ['exports', '/exports/:exportId/download', toValue(args)] as const
}

export function getExportsExportIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.exports)[':exportId']['download']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportsExportIdDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.exports[':exportId'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.exports)[':exportId']['download']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.exports)[':exportId']['download']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExportsExportIdDownloadQueryKey>
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
          Awaited<ReturnType<(typeof client.exports)[':exportId']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportsExportIdDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportsExportIdDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.exports[':exportId'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.imports.pcap.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.imports.pcap.$post>,
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

export function getDashboardsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dashboards.$get>>,
) {
  return ['dashboards', '/dashboards', toValue(args)] as const
}

export function getDashboardsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dashboards.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDashboardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dashboards.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDashboards<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dashboards.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.$get>>>>
          >,
          ReturnType<typeof getDashboardsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDashboardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDashboardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dashboards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.dashboards.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dashboards)[':dashboardId']['$get']>>,
) {
  return ['dashboards', '/dashboards/:dashboardId', toValue(args)] as const
}

export function getDashboardsDashboardIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dashboards)[':dashboardId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDashboardsDashboardIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dashboards[':dashboardId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDashboardsDashboardId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dashboards)[':dashboardId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dashboards)[':dashboardId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dashboards)[':dashboardId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDashboardsDashboardIdQueryKey>
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
          Awaited<ReturnType<(typeof client.dashboards)[':dashboardId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardsDashboardIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDashboardsDashboardIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dashboards[':dashboardId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getMappingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mappings.$get>>,
) {
  return ['mappings', '/mappings', toValue(args)] as const
}

export function getMappingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mappings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMappingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mappings.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMappings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mappings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mappings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mappings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mappings.$get>>>>
          >,
          ReturnType<typeof getMappingsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mappings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMappingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMappingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mappings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mappings.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.mappings.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mappings)[':mappingId']['$get']>>,
) {
  return ['mappings', '/mappings/:mappingId', toValue(args)] as const
}

export function getMappingsMappingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mappings)[':mappingId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMappingsMappingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mappings[':mappingId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMappingsMappingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mappings)[':mappingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mappings)[':mappingId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mappings)[':mappingId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMappingsMappingIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.mappings)[':mappingId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMappingsMappingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMappingsMappingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mappings[':mappingId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.mappings.fields.$get>>,
) {
  return ['mappings', '/mappings/fields', toValue(args)] as const
}

export function getMappingsFieldsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mappings.fields.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMappingsFieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mappings.fields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMappingsFields<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mappings.fields.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mappings.fields.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mappings.fields.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mappings.fields.$get>>>
            >
          >,
          ReturnType<typeof getMappingsFieldsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mappings.fields.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMappingsFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMappingsFieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mappings.fields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHepsubsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hepsubs.$get>>,
) {
  return ['hepsubs', '/hepsubs', toValue(args)] as const
}

export function getHepsubsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hepsubs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHepsubsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hepsubs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHepsubs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hepsubs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hepsubs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hepsubs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hepsubs.$get>>>>
          >,
          ReturnType<typeof getHepsubsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hepsubs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHepsubsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHepsubsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hepsubs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hepsubs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.hepsubs.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hepsubs)[':hepsubId']['$get']>>,
) {
  return ['hepsubs', '/hepsubs/:hepsubId', toValue(args)] as const
}

export function getHepsubsHepsubIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hepsubs)[':hepsubId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHepsubsHepsubIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hepsubs[':hepsubId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHepsubsHepsubId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hepsubs)[':hepsubId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hepsubs)[':hepsubId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hepsubs)[':hepsubId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hepsubs)[':hepsubId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHepsubsHepsubIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.hepsubs)[':hepsubId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHepsubsHepsubIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHepsubsHepsubIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hepsubs[':hepsubId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hepsubs)[':hepsubId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.hepsubs)[':hepsubId']['$put']>,
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getAliasesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aliases.$get>>,
) {
  return ['aliases', '/aliases', toValue(args)] as const
}

export function getAliasesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aliases.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAliasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aliases.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAliases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aliases.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>
          >,
          ReturnType<typeof getAliasesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAliasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAliasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.aliases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.aliases.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getIpaliasesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ipaliases.$get>>,
) {
  return ['ipaliases', '/ipaliases', toValue(args)] as const
}

export function getIpaliasesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ipaliases.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpaliasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ipaliases.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIpaliases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipaliases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ipaliases.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipaliases.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipaliases.$get>>>>
          >,
          ReturnType<typeof getIpaliasesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipaliases.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIpaliasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpaliasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ipaliases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipaliases.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.ipaliases.$post>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipaliases)[':aliasId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ipaliases)[':aliasId']['$put']>,
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getAdvancedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.advanced.$get>>,
) {
  return ['advanced', '/advanced', toValue(args)] as const
}

export function getAdvancedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.advanced.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdvancedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.advanced.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAdvanced<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.advanced.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.advanced.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.advanced.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.advanced.$get>>>>
          >,
          ReturnType<typeof getAdvancedQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.advanced.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdvancedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdvancedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.advanced.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.advanced.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.advanced.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.advanced)[':guid']['$get']>>,
) {
  return ['advanced', '/advanced/:guid', toValue(args)] as const
}

export function getAdvancedGuidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.advanced)[':guid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdvancedGuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.advanced[':guid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdvancedGuid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.advanced)[':guid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.advanced)[':guid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.advanced)[':guid']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.advanced)[':guid']['$get']>>>
            >
          >,
          ReturnType<typeof getAdvancedGuidQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.advanced)[':guid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdvancedGuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdvancedGuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.advanced[':guid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getScriptsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scripts.$get>>,
) {
  return ['scripts', '/scripts', toValue(args)] as const
}

export function getScriptsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scripts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScriptsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scripts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useScripts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scripts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.$get>>>>
          >,
          ReturnType<typeof getScriptsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getScriptsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScriptsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.scripts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.scripts.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.scripts)[':scriptId']['$get']>>,
) {
  return ['scripts', '/scripts/:scriptId', toValue(args)] as const
}

export function getScriptsScriptIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.scripts)[':scriptId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScriptsScriptIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scripts[':scriptId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScriptsScriptId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.scripts)[':scriptId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.scripts)[':scriptId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scripts)[':scriptId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scripts)[':scriptId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getScriptsScriptIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.scripts)[':scriptId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScriptsScriptIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScriptsScriptIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.scripts[':scriptId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scripts)[':scriptId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.scripts)[':scriptId']['$put']>,
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getOpenapiJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOpenapiJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['openapi.json'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOpenapiJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>
            >
          >,
          ReturnType<typeof getOpenapiJsonQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOpenapiJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOpenapiJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['openapi.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAuthTokensQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['auth-tokens']['$get']>>,
) {
  return ['auth-tokens', '/auth-tokens', toValue(args)] as const
}

export function getAuthTokensQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['auth-tokens']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthTokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['auth-tokens'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuthTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['auth-tokens']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['auth-tokens']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['auth-tokens']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['auth-tokens']['$get']>>>
            >
          >,
          ReturnType<typeof getAuthTokensQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['auth-tokens']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthTokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['auth-tokens'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['auth-tokens'][':tokenId']['$get']>>,
) {
  return ['auth-tokens', '/auth-tokens/:tokenId', toValue(args)] as const
}

export function getAuthTokensTokenIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['auth-tokens'][':tokenId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthTokensTokenIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['auth-tokens'][':tokenId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuthTokensTokenId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['auth-tokens'][':tokenId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['auth-tokens'][':tokenId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['auth-tokens'][':tokenId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAuthTokensTokenIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['auth-tokens'][':tokenId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthTokensTokenIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthTokensTokenIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['auth-tokens'][':tokenId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.agents.subscriptions.$get>>,
) {
  return ['agents', '/agents/subscriptions', toValue(args)] as const
}

export function getAgentsSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agents.subscriptions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentsSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agents.subscriptions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.agents.subscriptions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.agents.subscriptions.$get>>>
            >
          >,
          ReturnType<typeof getAgentsSubscriptionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.subscriptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.subscriptions)[':subscriptionId']['$get']>
  >,
) {
  return ['agents', '/agents/subscriptions/:subscriptionId', toValue(args)] as const
}

export function getAgentsSubscriptionsSubscriptionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.subscriptions)[':subscriptionId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsSubscriptionsSubscriptionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.subscriptions[':subscriptionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agents.subscriptions)[':subscriptionId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agents.subscriptions)[':subscriptionId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAgentsSubscriptionsSubscriptionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.agents.subscriptions)[':subscriptionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsSubscriptionsSubscriptionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsSubscriptionsSubscriptionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.subscriptions[':subscriptionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getAgentsTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agents.types.$get>>,
) {
  return ['agents', '/agents/types', toValue(args)] as const
}

export function getAgentsTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agents.types.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.types.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAgentsTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agents.types.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.types.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.types.$get>>>>
          >,
          ReturnType<typeof getAgentsTypesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.types.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAgentsTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.types.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAgentsTypesTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agents.types)[':type']['$get']>>,
) {
  return ['agents', '/agents/types/:type', toValue(args)] as const
}

export function getAgentsTypesTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agents.types)[':type']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentsTypesTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agents.types[':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentsTypesType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agents.types)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agents.types)[':type']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agents.types)[':type']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agents.types)[':type']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAgentsTypesTypeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.agents.types)[':type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentsTypesTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentsTypesTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agents.types[':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.search.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.agents.search.$post>,
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

export function getDbNodesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDbNodesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.db.nodes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDbNodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.db.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.db.nodes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.db.nodes.$get>>>>
          >,
          ReturnType<typeof getDbNodesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.db.nodes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDbNodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDbNodesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.db.nodes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getModulesQueryKey() {
  return ['modules', '/modules'] as const
}

export function getModulesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getModulesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.modules.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useModules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modules.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modules.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modules.$get>>>>
          >,
          ReturnType<typeof getModulesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modules.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getModulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getModulesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.modules.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.statistics.databases.$get>>,
) {
  return ['statistics', '/statistics/databases', toValue(args)] as const
}

export function getStatisticsDatabasesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.statistics.databases.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatisticsDatabasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.statistics.databases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatisticsDatabases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.databases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.statistics.databases.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.statistics.databases.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.statistics.databases.$get>>>
            >
          >,
          ReturnType<typeof getStatisticsDatabasesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.databases.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatisticsDatabasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatisticsDatabasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.statistics.databases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatisticsMeasurementsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.statistics.measurements.$get>>,
) {
  return ['statistics', '/statistics/measurements', toValue(args)] as const
}

export function getStatisticsMeasurementsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.statistics.measurements.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatisticsMeasurementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.statistics.measurements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatisticsMeasurements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.statistics.measurements.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.statistics.measurements.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.statistics.measurements.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.statistics.measurements.$get>>>
            >
          >,
          ReturnType<typeof getStatisticsMeasurementsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.statistics.measurements.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatisticsMeasurementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatisticsMeasurementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.statistics.measurements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatisticsMetricsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.statistics.metrics.$get>>,
) {
  return ['statistics', '/statistics/metrics', toValue(args)] as const
}

export function getStatisticsMetricsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.statistics.metrics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatisticsMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.statistics.metrics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatisticsMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.statistics.metrics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.statistics.metrics.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.statistics.metrics.$get>>>
            >
          >,
          ReturnType<typeof getStatisticsMetricsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.metrics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatisticsMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatisticsMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.statistics.metrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatisticsTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.statistics.tags.$get>>,
) {
  return ['statistics', '/statistics/tags', toValue(args)] as const
}

export function getStatisticsTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.statistics.tags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatisticsTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.statistics.tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatisticsTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.statistics.tags.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.statistics.tags.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.statistics.tags.$get>>>
            >
          >,
          ReturnType<typeof getStatisticsTagsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.tags.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatisticsTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatisticsTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.statistics.tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLogsLokiLabelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.loki.labels.$get>>,
) {
  return ['logs', '/logs/loki/labels', toValue(args)] as const
}

export function getLogsLokiLabelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.loki.labels.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogsLokiLabelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logs.loki.labels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLogsLokiLabels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.loki.labels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.loki.labels.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.logs.loki.labels.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.logs.loki.labels.$get>>>
            >
          >,
          ReturnType<typeof getLogsLokiLabelsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.loki.labels.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLogsLokiLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogsLokiLabelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logs.loki.labels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLogsLokiValuesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.loki.values.$get>>,
) {
  return ['logs', '/logs/loki/values', toValue(args)] as const
}

export function getLogsLokiValuesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.loki.values.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogsLokiValuesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logs.loki.values.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLogsLokiValues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.loki.values.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.loki.values.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.logs.loki.values.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.logs.loki.values.$get>>>
            >
          >,
          ReturnType<typeof getLogsLokiValuesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.loki.values.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLogsLokiValuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogsLokiValuesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logs.loki.values.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.logs.loki.query.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.logs.loki.query.$post>,
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

export function getIntegrationsGrafanaStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIntegrationsGrafanaStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.integrations.grafana.status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.integrations.grafana.status.$get>>
              >
            >
          >,
          ReturnType<typeof getIntegrationsGrafanaStatusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.integrations.grafana.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsGrafanaStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIntegrationsGrafanaStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.integrations.grafana.status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIntegrationsGrafanaFoldersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.integrations.grafana.folders.$get>>,
) {
  return ['integrations', '/integrations/grafana/folders', toValue(args)] as const
}

export function getIntegrationsGrafanaFoldersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.integrations.grafana.folders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIntegrationsGrafanaFoldersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.integrations.grafana.folders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIntegrationsGrafanaFolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.integrations.grafana.folders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.integrations.grafana.folders.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.integrations.grafana.folders.$get>>
              >
            >
          >,
          ReturnType<typeof getIntegrationsGrafanaFoldersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.integrations.grafana.folders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsGrafanaFoldersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIntegrationsGrafanaFoldersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.integrations.grafana.folders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIntegrationsGrafanaDashboardsUidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.integrations.grafana.dashboards)[':uid']['$get']>
  >,
) {
  return ['integrations', '/integrations/grafana/dashboards/:uid', toValue(args)] as const
}

export function getIntegrationsGrafanaDashboardsUidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.integrations.grafana.dashboards)[':uid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIntegrationsGrafanaDashboardsUidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.integrations.grafana.dashboards[':uid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.integrations.grafana.dashboards)[':uid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.integrations.grafana.dashboards)[':uid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIntegrationsGrafanaDashboardsUidQueryKey>
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
          Awaited<ReturnType<(typeof client.integrations.grafana.dashboards)[':uid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsGrafanaDashboardsUidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIntegrationsGrafanaDashboardsUidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.integrations.grafana.dashboards[':uid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStreamHepQueryKey() {
  return ['stream', '/stream/hep'] as const
}

export function getStreamHepQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStreamHepQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stream.hep.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStreamHep<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stream.hep.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stream.hep.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stream.hep.$get>>>>
          >,
          ReturnType<typeof getStreamHepQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stream.hep.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStreamHepQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStreamHepQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.stream.hep.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
