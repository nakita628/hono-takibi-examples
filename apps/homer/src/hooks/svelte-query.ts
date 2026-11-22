import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function createPostAuthSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthSessionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteAuthSessionsSessionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAuthSessionsSessionIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createAuthProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.providers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthProvidersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createAuthOauth2ProviderRedirect<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.auth.oauth2)[':provider']['redirect']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.auth.oauth2)[':provider']['redirect']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAuthOauth2ProviderRedirectQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createAuthOauth2ProviderCallback<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.auth.oauth2)[':provider']['callback']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.auth.oauth2)[':provider']['callback']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAuthOauth2ProviderCallbackQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostAuthOauth2Token<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthOauth2TokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
        TError,
        InferRequestType<typeof client.users.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createMeSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeSettingsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPutMeSettingsCategory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMeSettingsCategoryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteMeSettingsCategory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMeSettingsCategoryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.transactions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTransactionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostTransactionsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTransactionsSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTransactionsMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTransactionsMessagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createMessagesMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':messageId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.messages)[':messageId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMessagesMessageIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createMessagesMessageIdDecoded<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messages)[':messageId']['decoded']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.messages)[':messageId']['decoded']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMessagesMessageIdDecodedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostTransactionsQos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTransactionsQosMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostExports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$post>>>>>,
        TError,
        InferRequestType<typeof client.exports.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostExportsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createExportsExportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':exportId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.exports)[':exportId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getExportsExportIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createExportsExportIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.exports)[':exportId']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.exports)[':exportId']['download']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getExportsExportIdDownloadQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostImportsPcap<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostImportsPcapMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDashboards<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.dashboards.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDashboardsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostDashboards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDashboardsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDashboardsDashboardId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dashboards)[':dashboardId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dashboards)[':dashboardId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDashboardsDashboardIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutDashboardsDashboardId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDashboardsDashboardIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteDashboardsDashboardId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDashboardsDashboardIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMeDashboardsReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMeDashboardsResetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createMappings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mappings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.mappings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mappings.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMappingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMappingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostMappings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMappingsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createMappingsMappingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mappings)[':mappingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mappings)[':mappingId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMappingsMappingIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutMappingsMappingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMappingsMappingIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteMappingsMappingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMappingsMappingIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createMappingsFields<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mappings.fields.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.mappings.fields.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMappingsFieldsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createHepsubs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hepsubs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.hepsubs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hepsubs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHepsubsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHepsubsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostHepsubs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hepsubs.$post>>>>>,
        TError,
        InferRequestType<typeof client.hepsubs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostHepsubsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createHepsubsHepsubId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hepsubs)[':hepsubId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.hepsubs)[':hepsubId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHepsubsHepsubIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutHepsubsHepsubId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutHepsubsHepsubIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteHepsubsHepsubId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteHepsubsHepsubIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createAliases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.aliases.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAliasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAliasesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostAliases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$post>>>>>,
        TError,
        InferRequestType<typeof client.aliases.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAliasesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutAliasesAliasId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAliasesAliasIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteAliasesAliasId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAliasesAliasIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createIpaliases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipaliases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ipaliases.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpaliasesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostIpaliases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIpaliasesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutIpaliasesAliasId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutIpaliasesAliasIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteIpaliasesAliasId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteIpaliasesAliasIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createAdvanced<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.advanced.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.advanced.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.advanced.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAdvancedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdvancedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostAdvanced<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdvancedMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createAdvancedGuid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.advanced)[':guid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.advanced)[':guid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdvancedGuidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutAdvancedGuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAdvancedGuidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteAdvancedGuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAdvancedGuidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createScripts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.scripts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getScriptsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getScriptsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostScripts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.$post>>>>>,
        TError,
        InferRequestType<typeof client.scripts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostScriptsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createScriptsScriptId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.scripts)[':scriptId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.scripts)[':scriptId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getScriptsScriptIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutScriptsScriptId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutScriptsScriptIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteScriptsScriptId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteScriptsScriptIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createOpenapiJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOpenapiJsonQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createAuthTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['auth-tokens']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['auth-tokens']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthTokensQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostAuthTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthTokensMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createAuthTokensTokenId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['auth-tokens'][':tokenId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['auth-tokens'][':tokenId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthTokensTokenIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutAuthTokensTokenId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAuthTokensTokenIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteAuthTokensTokenId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAuthTokensTokenIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createAgentsSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.agents.subscriptions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAgentsSubscriptionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostAgentsSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAgentsSubscriptionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createAgentsSubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agents.subscriptions)[':subscriptionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.agents.subscriptions)[':subscriptionId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAgentsSubscriptionsSubscriptionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutAgentsSubscriptionsSubscriptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAgentsSubscriptionsSubscriptionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteAgentsSubscriptionsSubscriptionId<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAgentsSubscriptionsSubscriptionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createAgentsTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agents.types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.agents.types.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAgentsTypesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createAgentsTypesType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agents.types)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.agents.types)[':type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAgentsTypesTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostAgentsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAgentsSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDbNodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.db.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.db.nodes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDbNodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDbNodesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createModules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modules.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modules.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getModulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getModulesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostStatisticsQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStatisticsQueryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createStatisticsDatabases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.databases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.statistics.databases.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatisticsDatabasesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createStatisticsMeasurements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.statistics.measurements.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.statistics.measurements.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStatisticsMeasurementsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createStatisticsMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.statistics.metrics.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatisticsMetricsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createStatisticsTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.statistics.tags.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatisticsTagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createLogsLokiLabels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.loki.labels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.logs.loki.labels.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLogsLokiLabelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createLogsLokiValues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.loki.values.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.logs.loki.values.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLogsLokiValuesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostLogsLokiQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLogsLokiQueryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createIntegrationsGrafanaStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.integrations.grafana.status.$get>>>
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIntegrationsGrafanaStatusQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createIntegrationsGrafanaFolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.integrations.grafana.folders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.integrations.grafana.folders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIntegrationsGrafanaFoldersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createIntegrationsGrafanaDashboardsUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.integrations.grafana.dashboards)[':uid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.integrations.grafana.dashboards)[':uid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIntegrationsGrafanaDashboardsUidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createStreamHep<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stream.hep.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStreamHepQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
