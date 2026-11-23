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

export function getAboutKey() {
  return ['about'] as const
}

export function getAuthKey() {
  return ['auth'] as const
}

export function getConnectionsKey() {
  return ['connections'] as const
}

export function getDataRetentionSettingsKey() {
  return ['data_retention_settings'] as const
}

export function getDocumentsKey() {
  return ['documents'] as const
}

export function getFormatsKey() {
  return ['formats'] as const
}

export function getInboxesKey() {
  return ['inboxes'] as const
}

export function getIntegrationsKey() {
  return ['integrations'] as const
}

export function getPredictorSettingsKey() {
  return ['predictor_settings'] as const
}

export function getProjectsKey() {
  return ['projects'] as const
}

export function getReportsKey() {
  return ['reports'] as const
}

export function getRolesKey() {
  return ['roles'] as const
}

export function getRuleConfigKey() {
  return ['rule_config'] as const
}

export function getSamplingSettingsKey() {
  return ['sampling_settings'] as const
}

export function getSettingsKey() {
  return ['settings'] as const
}

export function getSsoKey() {
  return ['sso'] as const
}

export function getStatsKey() {
  return ['stats'] as const
}

export function getStyleKey() {
  return ['style'] as const
}

export function getTenantKey() {
  return ['tenant'] as const
}

export function getThresholdSettingsKey() {
  return ['threshold_settings'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getAboutReleaseNotesQueryKey() {
  return ['about', '/about/release_notes'] as const
}

export function getAboutReleaseNotesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.release_notes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.release_notes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAboutReleaseNotesQueryKey>
  >({
    queryKey: getAboutReleaseNotesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.about.release_notes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAboutReleaseNotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.release_notes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.about.release_notes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAboutReleaseNotesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAboutReleaseNotesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getAboutVersionQueryKey() {
  return ['about', '/about/version'] as const
}

export function getAboutVersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAboutVersionQueryKey>
  >({
    queryKey: getAboutVersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.about.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAboutVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.version.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAboutVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAboutVersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostAuthMutationKey() {
  return ['auth', '/auth', 'POST'] as const
}

export function getPostAuthMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$post>>>>>,
    TError,
    InferRequestType<typeof client.auth.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.$post>) {
      return parseResponse(client.auth.$post(args, options))
    },
  })
}

export function createPostAuth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$post>>>>>,
        TError,
        InferRequestType<typeof client.auth.$post>,
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
    const mutationDefaults = getPostAuthMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAuthApiKeyQueryKey(
  args: InferRequestType<(typeof client.auth)['api-key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['auth', '/auth/api-key', keyArgs] as const
}

export function getAuthApiKeyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.auth)['api-key']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.auth)['api-key']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.auth)['api-key']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthApiKeyQueryKey>
  >({
    queryKey: getAuthApiKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.auth['api-key'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAuthApiKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.auth)['api-key']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.auth)['api-key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.auth)['api-key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthApiKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthApiKeyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostAuthApiKeyMutationKey() {
  return ['auth', '/auth/api-key', 'POST'] as const
}

export function getPostAuthApiKeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.auth)['api-key']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.auth)['api-key']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthApiKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.auth)['api-key']['$post']>) {
      return parseResponse(client.auth['api-key'].$post(args, options))
    },
  })
}

export function createPostAuthApiKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.auth)['api-key']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.auth)['api-key']['$post']>,
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
    const mutationDefaults = getPostAuthApiKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAuthApiKeyInboxInboxIdQueryKey(
  args: InferRequestType<(typeof client.auth)['api-key']['inbox'][':inbox_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['auth', '/auth/api-key/inbox/:inbox_id', keyArgs] as const
}

export function getAuthApiKeyInboxInboxIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.auth)['api-key']['inbox'][':inbox_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.auth)['api-key']['inbox'][':inbox_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth)['api-key']['inbox'][':inbox_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthApiKeyInboxInboxIdQueryKey>
  >({
    queryKey: getAuthApiKeyInboxInboxIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.auth['api-key'].inbox[':inbox_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAuthApiKeyInboxInboxId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.auth)['api-key']['inbox'][':inbox_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.auth)['api-key']['inbox'][':inbox_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.auth)['api-key']['inbox'][':inbox_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthApiKeyInboxInboxIdQueryKey>
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
      ...getAuthApiKeyInboxInboxIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostAuthApiKeyInboxInboxIdMutationKey() {
  return ['auth', '/auth/api-key/inbox/:inbox_id', 'POST'] as const
}

export function getPostAuthApiKeyInboxInboxIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth)['api-key']['inbox'][':inbox_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.auth)['api-key']['inbox'][':inbox_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthApiKeyInboxInboxIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.auth)['api-key']['inbox'][':inbox_id']['$post']>,
    ) {
      return parseResponse(client.auth['api-key'].inbox[':inbox_id'].$post(args, options))
    },
  })
}

export function createPostAuthApiKeyInboxInboxId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.auth)['api-key']['inbox'][':inbox_id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.auth)['api-key']['inbox'][':inbox_id']['$post']>,
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
    const mutationDefaults = getPostAuthApiKeyInboxInboxIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAuthApiKeyKeyQueryKey(
  args: InferRequestType<(typeof client.auth)['api-key'][':key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['auth', '/auth/api-key/:key', keyArgs] as const
}

export function getAuthApiKeyKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.auth)['api-key'][':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.auth)['api-key'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.auth)['api-key'][':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthApiKeyKeyQueryKey>
  >({
    queryKey: getAuthApiKeyKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.auth['api-key'][':key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAuthApiKeyKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.auth)['api-key'][':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.auth)['api-key'][':key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.auth)['api-key'][':key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthApiKeyKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthApiKeyKeyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteAuthApiKeyKeyMutationKey() {
  return ['auth', '/auth/api-key/:key', 'DELETE'] as const
}

export function getDeleteAuthApiKeyKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.auth)['api-key'][':key']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.auth)['api-key'][':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuthApiKeyKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.auth)['api-key'][':key']['$delete']>) {
      return parseResponse(client.auth['api-key'][':key'].$delete(args, options))
    },
  })
}

export function createDeleteAuthApiKeyKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.auth)['api-key'][':key']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.auth)['api-key'][':key']['$delete']>,
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
    const mutationDefaults = getDeleteAuthApiKeyKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchAuthApiKeyKeyMutationKey() {
  return ['auth', '/auth/api-key/:key', 'PATCH'] as const
}

export function getPatchAuthApiKeyKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.auth)['api-key'][':key']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.auth)['api-key'][':key']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAuthApiKeyKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.auth)['api-key'][':key']['$patch']>) {
      return parseResponse(client.auth['api-key'][':key'].$patch(args, options))
    },
  })
}

export function createPatchAuthApiKeyKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.auth)['api-key'][':key']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.auth)['api-key'][':key']['$patch']>,
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
    const mutationDefaults = getPatchAuthApiKeyKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAuthEphemeralMutationKey() {
  return ['auth', '/auth/ephemeral', 'POST'] as const
}

export function getPostAuthEphemeralMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.ephemeral.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.auth.ephemeral.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthEphemeralMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.ephemeral.$post>) {
      return parseResponse(client.auth.ephemeral.$post(args, options))
    },
  })
}

export function createPostAuthEphemeral<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.ephemeral.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.auth.ephemeral.$post>,
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
    const mutationDefaults = getPostAuthEphemeralMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAuthGetJWTMutationKey() {
  return ['auth', '/auth/get_JWT', 'POST'] as const
}

export function getPostAuthGetJWTMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.get_JWT.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.auth.get_JWT.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthGetJWTMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.get_JWT.$post>) {
      return parseResponse(client.auth.get_JWT.$post(args, options))
    },
  })
}

export function createPostAuthGetJWT<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.get_JWT.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.auth.get_JWT.$post>,
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
    const mutationDefaults = getPostAuthGetJWTMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAuthResetPasswordMutationKey() {
  return ['auth', '/auth/reset_password', 'POST'] as const
}

export function getPostAuthResetPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.auth.reset_password.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.auth.reset_password.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthResetPasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.reset_password.$post>) {
      return parseResponse(client.auth.reset_password.$post(args, options))
    },
  })
}

export function createPostAuthResetPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.reset_password.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.auth.reset_password.$post>,
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
    const mutationDefaults = getPostAuthResetPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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
    InferRequestType<typeof client.auth.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.token.$post>) {
      return parseResponse(client.auth.token.$post(args, options))
    },
  })
}

export function createPostAuthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.auth.token.$post>,
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
    const mutationDefaults = getPostAuthTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getConnectionsQueryKey(args: InferRequestType<typeof client.connections.$get>) {
  const { header: _, ...keyArgs } = args
  return ['connections', '/connections', keyArgs] as const
}

export function getConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.connections.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConnectionsQueryKey>
  >({
    queryKey: getConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.connections.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConnectionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostConnectionsMutationKey() {
  return ['connections', '/connections', 'POST'] as const
}

export function getPostConnectionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$post>>>>>,
    TError,
    InferRequestType<typeof client.connections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConnectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.connections.$post>) {
      return parseResponse(client.connections.$post(args, options))
    },
  })
}

export function createPostConnections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.connections.$post>,
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
    const mutationDefaults = getPostConnectionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getConnectionsConnectionIdQueryKey(
  args: InferRequestType<(typeof client.connections)[':connection_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['connections', '/connections/:connection_id', keyArgs] as const
}

export function getConnectionsConnectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connections)[':connection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connections)[':connection_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connections)[':connection_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionsConnectionIdQueryKey>
  >({
    queryKey: getConnectionsConnectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connections[':connection_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConnectionsConnectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connections)[':connection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.connections)[':connection_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.connections)[':connection_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionsConnectionIdQueryKey>
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
      ...getConnectionsConnectionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteConnectionsConnectionIdMutationKey() {
  return ['connections', '/connections/:connection_id', 'DELETE'] as const
}

export function getDeleteConnectionsConnectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.connections)[':connection_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.connections)[':connection_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConnectionsConnectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.connections)[':connection_id']['$delete']>,
    ) {
      return parseResponse(client.connections[':connection_id'].$delete(args, options))
    },
  })
}

export function createDeleteConnectionsConnectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connections)[':connection_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.connections)[':connection_id']['$delete']>,
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
    const mutationDefaults = getDeleteConnectionsConnectionIdMutationOptions<
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

export function getPatchConnectionsConnectionIdMutationKey() {
  return ['connections', '/connections/:connection_id', 'PATCH'] as const
}

export function getPatchConnectionsConnectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connections)[':connection_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.connections)[':connection_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchConnectionsConnectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.connections)[':connection_id']['$patch']>,
    ) {
      return parseResponse(client.connections[':connection_id'].$patch(args, options))
    },
  })
}

export function createPatchConnectionsConnectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.connections)[':connection_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.connections)[':connection_id']['$patch']>,
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
    const mutationDefaults = getPatchConnectionsConnectionIdMutationOptions<
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

export function getDataRetentionSettingsQueryKey(
  args: InferRequestType<typeof client.data_retention_settings.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['data_retention_settings', '/data_retention_settings', keyArgs] as const
}

export function getDataRetentionSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.data_retention_settings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.data_retention_settings.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.data_retention_settings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataRetentionSettingsQueryKey>
  >({
    queryKey: getDataRetentionSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data_retention_settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataRetentionSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.data_retention_settings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.data_retention_settings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.data_retention_settings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataRetentionSettingsQueryKey>
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
      ...getDataRetentionSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDataRetentionSettingsLevelIdQueryKey(
  args: InferRequestType<(typeof client.data_retention_settings)[':level'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['data_retention_settings', '/data_retention_settings/:level/:id', keyArgs] as const
}

export function getDataRetentionSettingsLevelIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.data_retention_settings)[':level'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.data_retention_settings)[':level'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.data_retention_settings)[':level'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataRetentionSettingsLevelIdQueryKey>
  >({
    queryKey: getDataRetentionSettingsLevelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data_retention_settings[':level'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataRetentionSettingsLevelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.data_retention_settings)[':level'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.data_retention_settings)[':level'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.data_retention_settings)[':level'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataRetentionSettingsLevelIdQueryKey>
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
      ...getDataRetentionSettingsLevelIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteDataRetentionSettingsLevelIdMutationKey() {
  return ['data_retention_settings', '/data_retention_settings/:level/:id', 'DELETE'] as const
}

export function getDeleteDataRetentionSettingsLevelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.data_retention_settings)[':level'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.data_retention_settings)[':level'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDataRetentionSettingsLevelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.data_retention_settings)[':level'][':id']['$delete']>,
    ) {
      return parseResponse(client.data_retention_settings[':level'][':id'].$delete(args, options))
    },
  })
}

export function createDeleteDataRetentionSettingsLevelId<
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
                  ReturnType<(typeof client.data_retention_settings)[':level'][':id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.data_retention_settings)[':level'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteDataRetentionSettingsLevelIdMutationOptions<
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

export function getPatchDataRetentionSettingsLevelIdMutationKey() {
  return ['data_retention_settings', '/data_retention_settings/:level/:id', 'PATCH'] as const
}

export function getPatchDataRetentionSettingsLevelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.data_retention_settings)[':level'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.data_retention_settings)[':level'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDataRetentionSettingsLevelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.data_retention_settings)[':level'][':id']['$patch']>,
    ) {
      return parseResponse(client.data_retention_settings[':level'][':id'].$patch(args, options))
    },
  })
}

export function createPatchDataRetentionSettingsLevelId<
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
                ReturnType<(typeof client.data_retention_settings)[':level'][':id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.data_retention_settings)[':level'][':id']['$patch']>,
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
    const mutationDefaults = getPatchDataRetentionSettingsLevelIdMutationOptions<
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

export function getPostDocumentsIndexMutationKey() {
  return ['documents', '/documents/', 'POST'] as const
}

export function getPostDocumentsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.documents.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.documents.index.$post>) {
      return parseResponse(client.documents.index.$post(args, options))
    },
  })
}

export function createPostDocumentsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.documents.index.$post>,
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
    const mutationDefaults = getPostDocumentsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDocumentsCustomOutputMutationKey() {
  return ['documents', '/documents/custom_output', 'POST'] as const
}

export function getPostDocumentsCustomOutputMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.documents.custom_output.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.documents.custom_output.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsCustomOutputMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.documents.custom_output.$post>) {
      return parseResponse(client.documents.custom_output.$post(args, options))
    },
  })
}

export function createPostDocumentsCustomOutput<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.documents.custom_output.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.documents.custom_output.$post>,
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
    const mutationDefaults = getPostDocumentsCustomOutputMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDocumentsEnrichMutationKey() {
  return ['documents', '/documents/enrich', 'POST'] as const
}

export function getPostDocumentsEnrichMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.enrich.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.documents.enrich.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsEnrichMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.documents.enrich.$post>) {
      return parseResponse(client.documents.enrich.$post(args, options))
    },
  })
}

export function createPostDocumentsEnrich<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.documents.enrich.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.documents.enrich.$post>,
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
    const mutationDefaults = getPostDocumentsEnrichMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDocumentsFileQueryDataTypeMutationKey() {
  return ['documents', '/documents/file_query/:data_type', 'POST'] as const
}

export function getPostDocumentsFileQueryDataTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.documents.file_query)[':data_type']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.documents.file_query)[':data_type']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsFileQueryDataTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.documents.file_query)[':data_type']['$post']>,
    ) {
      return parseResponse(client.documents.file_query[':data_type'].$post(args, options))
    },
  })
}

export function createPostDocumentsFileQueryDataType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.documents.file_query)[':data_type']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.documents.file_query)[':data_type']['$post']>,
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
    const mutationDefaults = getPostDocumentsFileQueryDataTypeMutationOptions<
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

export function getPostDocumentsQueryQueryTypeMutationKey() {
  return ['documents', '/documents/query/:query_type', 'POST'] as const
}

export function getPostDocumentsQueryQueryTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.documents.query)[':query_type']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.documents.query)[':query_type']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsQueryQueryTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.documents.query)[':query_type']['$post']>,
    ) {
      return parseResponse(client.documents.query[':query_type'].$post(args, options))
    },
  })
}

export function createPostDocumentsQueryQueryType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.documents.query)[':query_type']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.documents.query)[':query_type']['$post']>,
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
    const mutationDefaults = getPostDocumentsQueryQueryTypeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDocumentsDocumentIdQueryKey(
  args: InferRequestType<(typeof client.documents)[':document_id']['$get']>,
) {
  return ['documents', '/documents/:document_id', args] as const
}

export function getDocumentsDocumentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':document_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.documents)[':document_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':document_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDocumentIdQueryKey>
  >({
    queryKey: getDocumentsDocumentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.documents[':document_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDocumentsDocumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':document_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.documents)[':document_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.documents)[':document_id']['$get']>>
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDocumentsDocumentIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteDocumentsDocumentIdMutationKey() {
  return ['documents', '/documents/:document_id', 'DELETE'] as const
}

export function getDeleteDocumentsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.documents)[':document_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.documents)[':document_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDocumentsDocumentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.documents)[':document_id']['$delete']>) {
      return parseResponse(client.documents[':document_id'].$delete(args, options))
    },
  })
}

export function createDeleteDocumentsDocumentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.documents)[':document_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.documents)[':document_id']['$delete']>,
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
    const mutationDefaults = getDeleteDocumentsDocumentIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDocumentsDocumentIdCompareVersionsMutationKey() {
  return ['documents', '/documents/:document_id/compare_versions', 'POST'] as const
}

export function getPostDocumentsDocumentIdCompareVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.documents)[':document_id']['compare_versions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.documents)[':document_id']['compare_versions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsDocumentIdCompareVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.documents)[':document_id']['compare_versions']['$post']
      >,
    ) {
      return parseResponse(client.documents[':document_id'].compare_versions.$post(args, options))
    },
  })
}

export function createPostDocumentsDocumentIdCompareVersions<
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
                ReturnType<(typeof client.documents)[':document_id']['compare_versions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.documents)[':document_id']['compare_versions']['$post']>,
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
    const mutationDefaults = getPostDocumentsDocumentIdCompareVersionsMutationOptions<
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

export function getDocumentsDocumentIdCustomOutputQueryKey(
  args: InferRequestType<(typeof client.documents)[':document_id']['custom_output']['$get']>,
) {
  return ['documents', '/documents/:document_id/custom_output', args] as const
}

export function getDocumentsDocumentIdCustomOutputQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.documents)[':document_id']['custom_output']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.documents)[':document_id']['custom_output']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.documents)[':document_id']['custom_output']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDocumentIdCustomOutputQueryKey>
  >({
    queryKey: getDocumentsDocumentIdCustomOutputQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.documents[':document_id'].custom_output.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDocumentsDocumentIdCustomOutput<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.documents)[':document_id']['custom_output']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.documents)[':document_id']['custom_output']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.documents)[':document_id']['custom_output']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsDocumentIdCustomOutputQueryKey>
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
      ...getDocumentsDocumentIdCustomOutputQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostDocumentsDocumentIdFeedbackMutationKey() {
  return ['documents', '/documents/:document_id/feedback', 'POST'] as const
}

export function getPostDocumentsDocumentIdFeedbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.documents)[':document_id']['feedback']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.documents)[':document_id']['feedback']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsDocumentIdFeedbackMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.documents)[':document_id']['feedback']['$post']>,
    ) {
      return parseResponse(client.documents[':document_id'].feedback.$post(args, options))
    },
  })
}

export function createPostDocumentsDocumentIdFeedback<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.documents)[':document_id']['feedback']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.documents)[':document_id']['feedback']['$post']>,
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
    const mutationDefaults = getPostDocumentsDocumentIdFeedbackMutationOptions<
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

export function getDocumentsDocumentIdLastVersionQueryKey(
  args: InferRequestType<(typeof client.documents)[':document_id']['last_version']['$get']>,
) {
  return ['documents', '/documents/:document_id/last_version', args] as const
}

export function getDocumentsDocumentIdLastVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.documents)[':document_id']['last_version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.documents)[':document_id']['last_version']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.documents)[':document_id']['last_version']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDocumentIdLastVersionQueryKey>
  >({
    queryKey: getDocumentsDocumentIdLastVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.documents[':document_id'].last_version.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDocumentsDocumentIdLastVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.documents)[':document_id']['last_version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.documents)[':document_id']['last_version']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.documents)[':document_id']['last_version']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsDocumentIdLastVersionQueryKey>
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
      ...getDocumentsDocumentIdLastVersionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDocumentsDocumentIdOriginalFileQueryKey(
  args: InferRequestType<(typeof client.documents)[':document_id']['original_file']['$get']>,
) {
  return ['documents', '/documents/:document_id/original_file', args] as const
}

export function getDocumentsDocumentIdOriginalFileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.documents)[':document_id']['original_file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.documents)[':document_id']['original_file']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.documents)[':document_id']['original_file']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDocumentIdOriginalFileQueryKey>
  >({
    queryKey: getDocumentsDocumentIdOriginalFileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.documents[':document_id'].original_file.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDocumentsDocumentIdOriginalFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.documents)[':document_id']['original_file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.documents)[':document_id']['original_file']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.documents)[':document_id']['original_file']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsDocumentIdOriginalFileQueryKey>
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
      ...getDocumentsDocumentIdOriginalFileQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDocumentsDocumentIdPagePageRangeQueryKey(
  args: InferRequestType<(typeof client.documents)[':document_id']['page'][':page_range']['$get']>,
) {
  return ['documents', '/documents/:document_id/page/:page_range', args] as const
}

export function getDocumentsDocumentIdPagePageRangeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.documents)[':document_id']['page'][':page_range']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.documents)[':document_id']['page'][':page_range']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.documents)[':document_id']['page'][':page_range']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDocumentIdPagePageRangeQueryKey>
  >({
    queryKey: getDocumentsDocumentIdPagePageRangeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.documents[':document_id'].page[':page_range'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDocumentsDocumentIdPagePageRange<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.documents)[':document_id']['page'][':page_range']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.documents)[':document_id']['page'][':page_range']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.documents)[':document_id']['page'][':page_range']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsDocumentIdPagePageRangeQueryKey>
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
      ...getDocumentsDocumentIdPagePageRangeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDocumentsDocumentIdPageThumbnailPageRangeQueryKey(
  args: InferRequestType<
    (typeof client.documents)[':document_id']['page_thumbnail'][':page_range']['$get']
  >,
) {
  return ['documents', '/documents/:document_id/page_thumbnail/:page_range', args] as const
}

export function getDocumentsDocumentIdPageThumbnailPageRangeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.documents)[':document_id']['page_thumbnail'][':page_range']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.documents)[':document_id']['page_thumbnail'][':page_range']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.documents)[':document_id']['page_thumbnail'][':page_range']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDocumentIdPageThumbnailPageRangeQueryKey>
  >({
    queryKey: getDocumentsDocumentIdPageThumbnailPageRangeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.documents[':document_id'].page_thumbnail[':page_range'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDocumentsDocumentIdPageThumbnailPageRange<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.documents)[':document_id']['page_thumbnail'][':page_range']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.documents)[':document_id']['page_thumbnail'][':page_range']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.documents)[':document_id']['page_thumbnail'][':page_range']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsDocumentIdPageThumbnailPageRangeQueryKey>
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
      ...getDocumentsDocumentIdPageThumbnailPageRangeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostDocumentsDocumentIdProcessTableAnnotationMutationKey() {
  return ['documents', '/documents/:document_id/process_table_annotation', 'POST'] as const
}

export function getPostDocumentsDocumentIdProcessTableAnnotationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.documents)[':document_id']['process_table_annotation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.documents)[':document_id']['process_table_annotation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsDocumentIdProcessTableAnnotationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.documents)[':document_id']['process_table_annotation']['$post']
      >,
    ) {
      return parseResponse(
        client.documents[':document_id'].process_table_annotation.$post(args, options),
      )
    },
  })
}

export function createPostDocumentsDocumentIdProcessTableAnnotation<
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
                  (typeof client.documents)[':document_id']['process_table_annotation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.documents)[':document_id']['process_table_annotation']['$post']
        >,
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
    const mutationDefaults = getPostDocumentsDocumentIdProcessTableAnnotationMutationOptions<
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

export function getPostDocumentsDocumentIdReprocessMutationKey() {
  return ['documents', '/documents/:document_id/reprocess', 'POST'] as const
}

export function getPostDocumentsDocumentIdReprocessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.documents)[':document_id']['reprocess']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.documents)[':document_id']['reprocess']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsDocumentIdReprocessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.documents)[':document_id']['reprocess']['$post']>,
    ) {
      return parseResponse(client.documents[':document_id'].reprocess.$post(args, options))
    },
  })
}

export function createPostDocumentsDocumentIdReprocess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.documents)[':document_id']['reprocess']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.documents)[':document_id']['reprocess']['$post']>,
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
    const mutationDefaults = getPostDocumentsDocumentIdReprocessMutationOptions<
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

export function getDocumentsDocumentIdReversePageRangeQueryKey(
  args: InferRequestType<
    (typeof client.documents)[':document_id']['reverse'][':page_range']['$get']
  >,
) {
  return ['documents', '/documents/:document_id/reverse/:page_range', args] as const
}

export function getDocumentsDocumentIdReversePageRangeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.documents)[':document_id']['reverse'][':page_range']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.documents)[':document_id']['reverse'][':page_range']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.documents)[':document_id']['reverse'][':page_range']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDocumentIdReversePageRangeQueryKey>
  >({
    queryKey: getDocumentsDocumentIdReversePageRangeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.documents[':document_id'].reverse[':page_range'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDocumentsDocumentIdReversePageRange<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.documents)[':document_id']['reverse'][':page_range']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.documents)[':document_id']['reverse'][':page_range']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.documents)[':document_id']['reverse'][':page_range']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsDocumentIdReversePageRangeQueryKey>
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
      ...getDocumentsDocumentIdReversePageRangeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostDocumentsDocumentIdStatusDataMutationKey() {
  return ['documents', '/documents/:document_id/status_data', 'POST'] as const
}

export function getPostDocumentsDocumentIdStatusDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.documents)[':document_id']['status_data']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.documents)[':document_id']['status_data']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsDocumentIdStatusDataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.documents)[':document_id']['status_data']['$post']>,
    ) {
      return parseResponse(client.documents[':document_id'].status_data.$post(args, options))
    },
  })
}

export function createPostDocumentsDocumentIdStatusData<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.documents)[':document_id']['status_data']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.documents)[':document_id']['status_data']['$post']>,
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
    const mutationDefaults = getPostDocumentsDocumentIdStatusDataMutationOptions<
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

export function getDocumentsDocumentIdTextQueryKey(
  args: InferRequestType<(typeof client.documents)[':document_id']['text']['$get']>,
) {
  return ['documents', '/documents/:document_id/text', args] as const
}

export function getDocumentsDocumentIdTextQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.documents)[':document_id']['text']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.documents)[':document_id']['text']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.documents)[':document_id']['text']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDocumentIdTextQueryKey>
  >({
    queryKey: getDocumentsDocumentIdTextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.documents[':document_id'].text.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDocumentsDocumentIdText<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.documents)[':document_id']['text']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.documents)[':document_id']['text']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.documents)[':document_id']['text']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsDocumentIdTextQueryKey>
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
      ...getDocumentsDocumentIdTextQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDocumentsDocumentIdWorkflowQueryKey(
  args: InferRequestType<(typeof client.documents)[':document_id']['workflow']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['documents', '/documents/:document_id/workflow', keyArgs] as const
}

export function getDocumentsDocumentIdWorkflowQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.documents)[':document_id']['workflow']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.documents)[':document_id']['workflow']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.documents)[':document_id']['workflow']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDocumentIdWorkflowQueryKey>
  >({
    queryKey: getDocumentsDocumentIdWorkflowQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.documents[':document_id'].workflow.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDocumentsDocumentIdWorkflow<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.documents)[':document_id']['workflow']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.documents)[':document_id']['workflow']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.documents)[':document_id']['workflow']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsDocumentIdWorkflowQueryKey>
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
      ...getDocumentsDocumentIdWorkflowQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostDocumentsInboxIdMutationKey() {
  return ['documents', '/documents/:inbox_id', 'POST'] as const
}

export function getPostDocumentsInboxIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':inbox_id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.documents)[':inbox_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsInboxIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.documents)[':inbox_id']['$post']>) {
      return parseResponse(client.documents[':inbox_id'].$post(args, options))
    },
  })
}

export function createPostDocumentsInboxId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.documents)[':inbox_id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.documents)[':inbox_id']['$post']>,
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
    const mutationDefaults = getPostDocumentsInboxIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchDocumentsInboxIdCopyInboxMutationKey() {
  return ['documents', '/documents/:inbox_id/copy_inbox', 'PATCH'] as const
}

export function getPatchDocumentsInboxIdCopyInboxMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.documents)[':inbox_id']['copy_inbox']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.documents)[':inbox_id']['copy_inbox']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDocumentsInboxIdCopyInboxMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.documents)[':inbox_id']['copy_inbox']['$patch']>,
    ) {
      return parseResponse(client.documents[':inbox_id'].copy_inbox.$patch(args, options))
    },
  })
}

export function createPatchDocumentsInboxIdCopyInbox<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.documents)[':inbox_id']['copy_inbox']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.documents)[':inbox_id']['copy_inbox']['$patch']>,
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
    const mutationDefaults = getPatchDocumentsInboxIdCopyInboxMutationOptions<
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

export function getPatchDocumentsInboxIdMoveInboxMutationKey() {
  return ['documents', '/documents/:inbox_id/move_inbox', 'PATCH'] as const
}

export function getPatchDocumentsInboxIdMoveInboxMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.documents)[':inbox_id']['move_inbox']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.documents)[':inbox_id']['move_inbox']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDocumentsInboxIdMoveInboxMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.documents)[':inbox_id']['move_inbox']['$patch']>,
    ) {
      return parseResponse(client.documents[':inbox_id'].move_inbox.$patch(args, options))
    },
  })
}

export function createPatchDocumentsInboxIdMoveInbox<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.documents)[':inbox_id']['move_inbox']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.documents)[':inbox_id']['move_inbox']['$patch']>,
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
    const mutationDefaults = getPatchDocumentsInboxIdMoveInboxMutationOptions<
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

export function getFormatsQueryKey() {
  return ['formats', '/formats'] as const
}

export function getFormatsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formats.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formats.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFormatsQueryKey>
  >({
    queryKey: getFormatsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.formats.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFormats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formats.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFormatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostFormatsMutationKey() {
  return ['formats', '/formats', 'POST'] as const
}

export function getPostFormatsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formats.$post>>>>>,
    TError,
    InferRequestType<typeof client.formats.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFormatsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.formats.$post>) {
      return parseResponse(client.formats.$post(args, options))
    },
  })
}

export function createPostFormats<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formats.$post>>>>>,
        TError,
        InferRequestType<typeof client.formats.$post>,
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
    const mutationDefaults = getPostFormatsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFormatsDocumentTypesQueryKey(
  args: InferRequestType<typeof client.formats.document_types.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['formats', '/formats/document_types', keyArgs] as const
}

export function getFormatsDocumentTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formats.document_types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.formats.document_types.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.formats.document_types.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatsDocumentTypesQueryKey>
  >({
    queryKey: getFormatsDocumentTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.formats.document_types.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatsDocumentTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formats.document_types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.formats.document_types.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.formats.document_types.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatsDocumentTypesQueryKey>
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
      ...getFormatsDocumentTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatsFormatIdQueryKey(
  args: InferRequestType<(typeof client.formats)[':format_id']['$get']>,
) {
  return ['formats', '/formats/:format_id', args] as const
}

export function getFormatsFormatIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.formats)[':format_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.formats)[':format_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.formats)[':format_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatsFormatIdQueryKey>
  >({
    queryKey: getFormatsFormatIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.formats[':format_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFormatsFormatId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.formats)[':format_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.formats)[':format_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.formats)[':format_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatsFormatIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatsFormatIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteFormatsFormatIdMutationKey() {
  return ['formats', '/formats/:format_id', 'DELETE'] as const
}

export function getDeleteFormatsFormatIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.formats)[':format_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.formats)[':format_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFormatsFormatIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.formats)[':format_id']['$delete']>) {
      return parseResponse(client.formats[':format_id'].$delete(args, options))
    },
  })
}

export function createDeleteFormatsFormatId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.formats)[':format_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.formats)[':format_id']['$delete']>,
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
    const mutationDefaults = getDeleteFormatsFormatIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchFormatsFormatIdMutationKey() {
  return ['formats', '/formats/:format_id', 'PATCH'] as const
}

export function getPatchFormatsFormatIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.formats)[':format_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.formats)[':format_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchFormatsFormatIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.formats)[':format_id']['$patch']>) {
      return parseResponse(client.formats[':format_id'].$patch(args, options))
    },
  })
}

export function createPatchFormatsFormatId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.formats)[':format_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.formats)[':format_id']['$patch']>,
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
    const mutationDefaults = getPatchFormatsFormatIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFormatsScopeTagFieldsQueryKey(
  args: InferRequestType<(typeof client.formats)[':scope']['tag_fields']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['formats', '/formats/:scope/tag_fields', keyArgs] as const
}

export function getFormatsScopeTagFieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.formats)[':scope']['tag_fields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.formats)[':scope']['tag_fields']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.formats)[':scope']['tag_fields']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatsScopeTagFieldsQueryKey>
  >({
    queryKey: getFormatsScopeTagFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.formats[':scope'].tag_fields.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatsScopeTagFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.formats)[':scope']['tag_fields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.formats)[':scope']['tag_fields']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.formats)[':scope']['tag_fields']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatsScopeTagFieldsQueryKey>
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
      ...getFormatsScopeTagFieldsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getInboxesQueryKey(args: InferRequestType<typeof client.inboxes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['inboxes', '/inboxes', keyArgs] as const
}

export function getInboxesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inboxes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.inboxes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inboxes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInboxesQueryKey>
  >({
    queryKey: getInboxesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inboxes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInboxes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inboxes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.inboxes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inboxes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getInboxesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInboxesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostInboxesMutationKey() {
  return ['inboxes', '/inboxes', 'POST'] as const
}

export function getPostInboxesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inboxes.$post>>>>>,
    TError,
    InferRequestType<typeof client.inboxes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInboxesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.inboxes.$post>) {
      return parseResponse(client.inboxes.$post(args, options))
    },
  })
}

export function createPostInboxes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inboxes.$post>>>>>,
        TError,
        InferRequestType<typeof client.inboxes.$post>,
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
    const mutationDefaults = getPostInboxesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getInboxesInboxIdQueryKey(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['inboxes', '/inboxes/:inbox_id', keyArgs] as const
}

export function getInboxesInboxIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboxesInboxIdQueryKey>
  >({
    queryKey: getInboxesInboxIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inboxes[':inbox_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInboxesInboxId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.inboxes)[':inbox_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInboxesInboxIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInboxesInboxIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteInboxesInboxIdMutationKey() {
  return ['inboxes', '/inboxes/:inbox_id', 'DELETE'] as const
}

export function getDeleteInboxesInboxIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.inboxes)[':inbox_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInboxesInboxIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.inboxes)[':inbox_id']['$delete']>) {
      return parseResponse(client.inboxes[':inbox_id'].$delete(args, options))
    },
  })
}

export function createDeleteInboxesInboxId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.inboxes)[':inbox_id']['$delete']>,
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
    const mutationDefaults = getDeleteInboxesInboxIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchInboxesInboxIdMutationKey() {
  return ['inboxes', '/inboxes/:inbox_id', 'PATCH'] as const
}

export function getPatchInboxesInboxIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.inboxes)[':inbox_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchInboxesInboxIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.inboxes)[':inbox_id']['$patch']>) {
      return parseResponse(client.inboxes[':inbox_id'].$patch(args, options))
    },
  })
}

export function createPatchInboxesInboxId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.inboxes)[':inbox_id']['$patch']>,
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
    const mutationDefaults = getPatchInboxesInboxIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getInboxesInboxIdDocumentVersionsQueryKey(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['document_versions']['$get']>,
) {
  return ['inboxes', '/inboxes/:inbox_id/document_versions', args] as const
}

export function getInboxesInboxIdDocumentVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['document_versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['document_versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['document_versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboxesInboxIdDocumentVersionsQueryKey>
  >({
    queryKey: getInboxesInboxIdDocumentVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inboxes[':inbox_id'].document_versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInboxesInboxIdDocumentVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['document_versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.inboxes)[':inbox_id']['document_versions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['document_versions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInboxesInboxIdDocumentVersionsQueryKey>
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
      ...getInboxesInboxIdDocumentVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getInboxesInboxIdDocumentsQueryKey(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['documents']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['inboxes', '/inboxes/:inbox_id/documents', keyArgs] as const
}

export function getInboxesInboxIdDocumentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['documents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['documents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['documents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboxesInboxIdDocumentsQueryKey>
  >({
    queryKey: getInboxesInboxIdDocumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inboxes[':inbox_id'].documents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInboxesInboxIdDocuments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['documents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.inboxes)[':inbox_id']['documents']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['documents']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInboxesInboxIdDocumentsQueryKey>
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
      ...getInboxesInboxIdDocumentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteInboxesInboxIdDocumentsMutationKey() {
  return ['inboxes', '/inboxes/:inbox_id/documents', 'DELETE'] as const
}

export function getDeleteInboxesInboxIdDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['documents']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.inboxes)[':inbox_id']['documents']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInboxesInboxIdDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.inboxes)[':inbox_id']['documents']['$delete']>,
    ) {
      return parseResponse(client.inboxes[':inbox_id'].documents.$delete(args, options))
    },
  })
}

export function createDeleteInboxesInboxIdDocuments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['documents']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.inboxes)[':inbox_id']['documents']['$delete']>,
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
    const mutationDefaults = getDeleteInboxesInboxIdDocumentsMutationOptions<
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

export function getInboxesInboxIdPaginatedQueryKey(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['paginated']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['inboxes', '/inboxes/:inbox_id/paginated', keyArgs] as const
}

export function getInboxesInboxIdPaginatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['paginated']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['paginated']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['paginated']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboxesInboxIdPaginatedQueryKey>
  >({
    queryKey: getInboxesInboxIdPaginatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inboxes[':inbox_id'].paginated.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInboxesInboxIdPaginated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['paginated']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.inboxes)[':inbox_id']['paginated']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['paginated']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInboxesInboxIdPaginatedQueryKey>
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
      ...getInboxesInboxIdPaginatedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostInboxesInboxIdReprocessMutationKey() {
  return ['inboxes', '/inboxes/:inbox_id/reprocess', 'POST'] as const
}

export function getPostInboxesInboxIdReprocessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['reprocess']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.inboxes)[':inbox_id']['reprocess']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInboxesInboxIdReprocessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.inboxes)[':inbox_id']['reprocess']['$post']>,
    ) {
      return parseResponse(client.inboxes[':inbox_id'].reprocess.$post(args, options))
    },
  })
}

export function createPostInboxesInboxIdReprocess<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['reprocess']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.inboxes)[':inbox_id']['reprocess']['$post']>,
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
    const mutationDefaults = getPostInboxesInboxIdReprocessMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIntegrationsIndexQueryKey() {
  return ['integrations', '/integrations/'] as const
}

export function getIntegrationsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsIndexQueryKey>
  >({
    queryKey: getIntegrationsIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.integrations.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIntegrationsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.integrations.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIntegrationsIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostIntegrationsIndexMutationKey() {
  return ['integrations', '/integrations/', 'POST'] as const
}

export function getPostIntegrationsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.integrations.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIntegrationsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.integrations.index.$post>) {
      return parseResponse(client.integrations.index.$post(args, options))
    },
  })
}

export function createPostIntegrationsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.integrations.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.integrations.index.$post>,
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
    const mutationDefaults = getPostIntegrationsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIntegrationsIntegrationIdQueryKey(
  args: InferRequestType<(typeof client.integrations)[':integration_id']['$get']>,
) {
  return ['integrations', '/integrations/:integration_id', args] as const
}

export function getIntegrationsIntegrationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.integrations)[':integration_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.integrations)[':integration_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.integrations)[':integration_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsIntegrationIdQueryKey>
  >({
    queryKey: getIntegrationsIntegrationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.integrations[':integration_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIntegrationsIntegrationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.integrations)[':integration_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.integrations)[':integration_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.integrations)[':integration_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsIntegrationIdQueryKey>
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
      ...getIntegrationsIntegrationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteIntegrationsIntegrationIdMutationKey() {
  return ['integrations', '/integrations/:integration_id', 'DELETE'] as const
}

export function getDeleteIntegrationsIntegrationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.integrations)[':integration_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.integrations)[':integration_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIntegrationsIntegrationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.integrations)[':integration_id']['$delete']>,
    ) {
      return parseResponse(client.integrations[':integration_id'].$delete(args, options))
    },
  })
}

export function createDeleteIntegrationsIntegrationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.integrations)[':integration_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.integrations)[':integration_id']['$delete']>,
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
    const mutationDefaults = getDeleteIntegrationsIntegrationIdMutationOptions<
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

export function getPatchIntegrationsIntegrationIdMutationKey() {
  return ['integrations', '/integrations/:integration_id', 'PATCH'] as const
}

export function getPatchIntegrationsIntegrationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.integrations)[':integration_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.integrations)[':integration_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchIntegrationsIntegrationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.integrations)[':integration_id']['$patch']>,
    ) {
      return parseResponse(client.integrations[':integration_id'].$patch(args, options))
    },
  })
}

export function createPatchIntegrationsIntegrationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.integrations)[':integration_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.integrations)[':integration_id']['$patch']>,
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
    const mutationDefaults = getPatchIntegrationsIntegrationIdMutationOptions<
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

export function getIntegrationsIntegrationIdActivateQueryKey(
  args: InferRequestType<(typeof client.integrations)[':integration_id']['activate']['$get']>,
) {
  return ['integrations', '/integrations/:integration_id/activate', args] as const
}

export function getIntegrationsIntegrationIdActivateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.integrations)[':integration_id']['activate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.integrations)[':integration_id']['activate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.integrations)[':integration_id']['activate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsIntegrationIdActivateQueryKey>
  >({
    queryKey: getIntegrationsIntegrationIdActivateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.integrations[':integration_id'].activate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIntegrationsIntegrationIdActivate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.integrations)[':integration_id']['activate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.integrations)[':integration_id']['activate']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.integrations)[':integration_id']['activate']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsIntegrationIdActivateQueryKey>
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
      ...getIntegrationsIntegrationIdActivateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPredictorSettingsQueryKey(
  args: InferRequestType<typeof client.predictor_settings.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['predictor_settings', '/predictor_settings', keyArgs] as const
}

export function getPredictorSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictor_settings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.predictor_settings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictor_settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPredictorSettingsQueryKey>
  >({
    queryKey: getPredictorSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.predictor_settings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPredictorSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictor_settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.predictor_settings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.predictor_settings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPredictorSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPredictorSettingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPredictorSettingsScopeQueryKey(
  args: InferRequestType<(typeof client.predictor_settings)[':scope']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['predictor_settings', '/predictor_settings/:scope', keyArgs] as const
}

export function getPredictorSettingsScopeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.predictor_settings)[':scope']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.predictor_settings)[':scope']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.predictor_settings)[':scope']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPredictorSettingsScopeQueryKey>
  >({
    queryKey: getPredictorSettingsScopeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.predictor_settings[':scope'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPredictorSettingsScope<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.predictor_settings)[':scope']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.predictor_settings)[':scope']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.predictor_settings)[':scope']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPredictorSettingsScopeQueryKey>
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
      ...getPredictorSettingsScopeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeletePredictorSettingsScopeMutationKey() {
  return ['predictor_settings', '/predictor_settings/:scope', 'DELETE'] as const
}

export function getDeletePredictorSettingsScopeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.predictor_settings)[':scope']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.predictor_settings)[':scope']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePredictorSettingsScopeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.predictor_settings)[':scope']['$delete']>,
    ) {
      return parseResponse(client.predictor_settings[':scope'].$delete(args, options))
    },
  })
}

export function createDeletePredictorSettingsScope<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.predictor_settings)[':scope']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.predictor_settings)[':scope']['$delete']>,
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
    const mutationDefaults = getDeletePredictorSettingsScopeMutationOptions<
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

export function getPatchPredictorSettingsScopeMutationKey() {
  return ['predictor_settings', '/predictor_settings/:scope', 'PATCH'] as const
}

export function getPatchPredictorSettingsScopeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.predictor_settings)[':scope']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.predictor_settings)[':scope']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPredictorSettingsScopeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.predictor_settings)[':scope']['$patch']>,
    ) {
      return parseResponse(client.predictor_settings[':scope'].$patch(args, options))
    },
  })
}

export function createPatchPredictorSettingsScope<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.predictor_settings)[':scope']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.predictor_settings)[':scope']['$patch']>,
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
    const mutationDefaults = getPatchPredictorSettingsScopeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsQueryKey() {
  return ['projects', '/projects'] as const
}

export function getProjectsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProjectsQueryKey>
  >({
    queryKey: getProjectsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.projects.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostProjectsMutationKey() {
  return ['projects', '/projects', 'POST'] as const
}

export function getPostProjectsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>>,
    TError,
    InferRequestType<typeof client.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.projects.$post>) {
      return parseResponse(client.projects.$post(args, options))
    },
  })
}

export function createPostProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.projects.$post>,
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
    const mutationDefaults = getPostProjectsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsProjectIdQueryKey(
  args: InferRequestType<(typeof client.projects)[':project_id']['$get']>,
) {
  return ['projects', '/projects/:project_id', args] as const
}

export function getProjectsProjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':project_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':project_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdQueryKey>
  >({
    queryKey: getProjectsProjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':project_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':project_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsProjectIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteProjectsProjectIdMutationKey() {
  return ['projects', '/projects/:project_id', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':project_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.projects)[':project_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':project_id']['$delete']>) {
      return parseResponse(client.projects[':project_id'].$delete(args, options))
    },
  })
}

export function createDeleteProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':project_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.projects)[':project_id']['$delete']>,
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
    const mutationDefaults = getDeleteProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchProjectsProjectIdMutationKey() {
  return ['projects', '/projects/:project_id', 'PATCH'] as const
}

export function getPatchProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':project_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':project_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchProjectsProjectIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':project_id']['$patch']>) {
      return parseResponse(client.projects[':project_id'].$patch(args, options))
    },
  })
}

export function createPatchProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':project_id']['$patch']>,
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
    const mutationDefaults = getPatchProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getReportsQueryKey(args: InferRequestType<typeof client.reports.$get>) {
  const { header: _, ...keyArgs } = args
  return ['reports', '/reports', keyArgs] as const
}

export function getReportsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.reports.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReportsQueryKey>
  >({
    queryKey: getReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reports.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.reports.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostReportsMutationKey() {
  return ['reports', '/reports', 'POST'] as const
}

export function getPostReportsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$post>>>>>,
    TError,
    InferRequestType<typeof client.reports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reports.$post>) {
      return parseResponse(client.reports.$post(args, options))
    },
  })
}

export function createPostReports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$post>>>>>,
        TError,
        InferRequestType<typeof client.reports.$post>,
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
    const mutationDefaults = getPostReportsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostReportsGenerateMutationKey() {
  return ['reports', '/reports/generate', 'POST'] as const
}

export function getPostReportsGenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.generate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.reports.generate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReportsGenerateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reports.generate.$post>) {
      return parseResponse(client.reports.generate.$post(args, options))
    },
  })
}

export function createPostReportsGenerate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.reports.generate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.reports.generate.$post>,
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
    const mutationDefaults = getPostReportsGenerateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getReportsReportIdQueryKey(
  args: InferRequestType<(typeof client.reports)[':report_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['reports', '/reports/:report_id', keyArgs] as const
}

export function getReportsReportIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':report_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reports)[':report_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':report_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsReportIdQueryKey>
  >({
    queryKey: getReportsReportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reports[':report_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createReportsReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':report_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.reports)[':report_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':report_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsReportIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportsReportIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteReportsReportIdMutationKey() {
  return ['reports', '/reports/:report_id', 'DELETE'] as const
}

export function getDeleteReportsReportIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports)[':report_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.reports)[':report_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteReportsReportIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.reports)[':report_id']['$delete']>) {
      return parseResponse(client.reports[':report_id'].$delete(args, options))
    },
  })
}

export function createDeleteReportsReportId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reports)[':report_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.reports)[':report_id']['$delete']>,
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
    const mutationDefaults = getDeleteReportsReportIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchReportsReportIdMutationKey() {
  return ['reports', '/reports/:report_id', 'PATCH'] as const
}

export function getPatchReportsReportIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':report_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.reports)[':report_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchReportsReportIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.reports)[':report_id']['$patch']>) {
      return parseResponse(client.reports[':report_id'].$patch(args, options))
    },
  })
}

export function createPatchReportsReportId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.reports)[':report_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.reports)[':report_id']['$patch']>,
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
    const mutationDefaults = getPatchReportsReportIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostReportsReportIdGenerateMutationKey() {
  return ['reports', '/reports/:report_id/generate', 'POST'] as const
}

export function getPostReportsReportIdGenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reports)[':report_id']['generate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.reports)[':report_id']['generate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostReportsReportIdGenerateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.reports)[':report_id']['generate']['$post']>,
    ) {
      return parseResponse(client.reports[':report_id'].generate.$post(args, options))
    },
  })
}

export function createPostReportsReportIdGenerate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.reports)[':report_id']['generate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.reports)[':report_id']['generate']['$post']>,
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
    const mutationDefaults = getPostReportsReportIdGenerateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRolesQueryKey(args: InferRequestType<typeof client.roles.$get>) {
  const { header: _, ...keyArgs } = args
  return ['roles', '/roles', keyArgs] as const
}

export function getRolesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.roles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRolesQueryKey>
  >({
    queryKey: getRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.roles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRoles<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.roles.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRolesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostRolesMutationKey() {
  return ['roles', '/roles', 'POST'] as const
}

export function getPostRolesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$post>>>>>,
    TError,
    InferRequestType<typeof client.roles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRolesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.roles.$post>) {
      return parseResponse(client.roles.$post(args, options))
    },
  })
}

export function createPostRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$post>>>>>,
        TError,
        InferRequestType<typeof client.roles.$post>,
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
    const mutationDefaults = getPostRolesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRolesRoleIdQueryKey(
  args: InferRequestType<(typeof client.roles)[':role_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['roles', '/roles/:role_id', keyArgs] as const
}

export function getRolesRoleIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':role_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.roles)[':role_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':role_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRolesRoleIdQueryKey>
  >({
    queryKey: getRolesRoleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.roles[':role_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRolesRoleId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':role_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.roles)[':role_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':role_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRolesRoleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRolesRoleIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteRolesRoleIdMutationKey() {
  return ['roles', '/roles/:role_id', 'DELETE'] as const
}

export function getDeleteRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':role_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.roles)[':role_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRolesRoleIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.roles)[':role_id']['$delete']>) {
      return parseResponse(client.roles[':role_id'].$delete(args, options))
    },
  })
}

export function createDeleteRolesRoleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.roles)[':role_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.roles)[':role_id']['$delete']>,
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
    const mutationDefaults = getDeleteRolesRoleIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchRolesRoleIdMutationKey() {
  return ['roles', '/roles/:role_id', 'PATCH'] as const
}

export function getPatchRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':role_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.roles)[':role_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRolesRoleIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.roles)[':role_id']['$patch']>) {
      return parseResponse(client.roles[':role_id'].$patch(args, options))
    },
  })
}

export function createPatchRolesRoleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':role_id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.roles)[':role_id']['$patch']>,
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
    const mutationDefaults = getPatchRolesRoleIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRuleConfigQueryKey(args: InferRequestType<typeof client.rule_config.$get>) {
  const { header: _, ...keyArgs } = args
  return ['rule_config', '/rule_config', keyArgs] as const
}

export function getRuleConfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rule_config.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.rule_config.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rule_config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRuleConfigQueryKey>
  >({
    queryKey: getRuleConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rule_config.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRuleConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rule_config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.rule_config.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rule_config.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRuleConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRuleConfigQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostRuleConfigRuleEntityIndexMutationKey() {
  return ['rule_config', '/rule_config/rule_entity/', 'POST'] as const
}

export function getPostRuleConfigRuleEntityIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.rule_config.rule_entity.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.rule_config.rule_entity.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRuleConfigRuleEntityIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rule_config.rule_entity.index.$post>) {
      return parseResponse(client.rule_config.rule_entity.index.$post(args, options))
    },
  })
}

export function createPostRuleConfigRuleEntityIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.rule_config.rule_entity.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.rule_config.rule_entity.index.$post>,
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
    const mutationDefaults = getPostRuleConfigRuleEntityIndexMutationOptions<
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

export function getPostRuleConfigRuleEntityDocumentIdMutationKey() {
  return ['rule_config', '/rule_config/rule_entity/:document_id', 'POST'] as const
}

export function getPostRuleConfigRuleEntityDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rule_config.rule_entity)[':document_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.rule_config.rule_entity)[':document_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRuleConfigRuleEntityDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.rule_config.rule_entity)[':document_id']['$post']>,
    ) {
      return parseResponse(client.rule_config.rule_entity[':document_id'].$post(args, options))
    },
  })
}

export function createPostRuleConfigRuleEntityDocumentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.rule_config.rule_entity)[':document_id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.rule_config.rule_entity)[':document_id']['$post']>,
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
    const mutationDefaults = getPostRuleConfigRuleEntityDocumentIdMutationOptions<
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

export function getPostRuleConfigWhereToSearchDocumentIdMutationKey() {
  return ['rule_config', '/rule_config/where_to_search/:document_id', 'POST'] as const
}

export function getPostRuleConfigWhereToSearchDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rule_config.where_to_search)[':document_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.rule_config.where_to_search)[':document_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRuleConfigWhereToSearchDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.rule_config.where_to_search)[':document_id']['$post']>,
    ) {
      return parseResponse(client.rule_config.where_to_search[':document_id'].$post(args, options))
    },
  })
}

export function createPostRuleConfigWhereToSearchDocumentId<
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
                ReturnType<(typeof client.rule_config.where_to_search)[':document_id']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.rule_config.where_to_search)[':document_id']['$post']>,
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
    const mutationDefaults = getPostRuleConfigWhereToSearchDocumentIdMutationOptions<
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

export function getRuleConfigScopeQueryKey(
  args: InferRequestType<(typeof client.rule_config)[':scope']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['rule_config', '/rule_config/:scope', keyArgs] as const
}

export function getRuleConfigScopeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rule_config)[':scope']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rule_config)[':scope']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rule_config)[':scope']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRuleConfigScopeQueryKey>
  >({
    queryKey: getRuleConfigScopeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rule_config[':scope'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRuleConfigScope<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rule_config)[':scope']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.rule_config)[':scope']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.rule_config)[':scope']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRuleConfigScopeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRuleConfigScopeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteRuleConfigScopeMutationKey() {
  return ['rule_config', '/rule_config/:scope', 'DELETE'] as const
}

export function getDeleteRuleConfigScopeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rule_config)[':scope']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.rule_config)[':scope']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRuleConfigScopeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.rule_config)[':scope']['$delete']>) {
      return parseResponse(client.rule_config[':scope'].$delete(args, options))
    },
  })
}

export function createDeleteRuleConfigScope<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rule_config)[':scope']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.rule_config)[':scope']['$delete']>,
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
    const mutationDefaults = getDeleteRuleConfigScopeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchRuleConfigScopeMutationKey() {
  return ['rule_config', '/rule_config/:scope', 'PATCH'] as const
}

export function getPatchRuleConfigScopeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rule_config)[':scope']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.rule_config)[':scope']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRuleConfigScopeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.rule_config)[':scope']['$patch']>) {
      return parseResponse(client.rule_config[':scope'].$patch(args, options))
    },
  })
}

export function createPatchRuleConfigScope<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.rule_config)[':scope']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.rule_config)[':scope']['$patch']>,
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
    const mutationDefaults = getPatchRuleConfigScopeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSamplingSettingsQueryKey(
  args: InferRequestType<typeof client.sampling_settings.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['sampling_settings', '/sampling_settings', keyArgs] as const
}

export function getSamplingSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sampling_settings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sampling_settings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sampling_settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSamplingSettingsQueryKey>
  >({
    queryKey: getSamplingSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sampling_settings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSamplingSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sampling_settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sampling_settings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sampling_settings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSamplingSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSamplingSettingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSamplingSettingsScopeQueryKey(
  args: InferRequestType<(typeof client.sampling_settings)[':scope']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sampling_settings', '/sampling_settings/:scope', keyArgs] as const
}

export function getSamplingSettingsScopeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sampling_settings)[':scope']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sampling_settings)[':scope']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sampling_settings)[':scope']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSamplingSettingsScopeQueryKey>
  >({
    queryKey: getSamplingSettingsScopeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sampling_settings[':scope'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSamplingSettingsScope<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sampling_settings)[':scope']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sampling_settings)[':scope']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sampling_settings)[':scope']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSamplingSettingsScopeQueryKey>
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
      ...getSamplingSettingsScopeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteSamplingSettingsScopeMutationKey() {
  return ['sampling_settings', '/sampling_settings/:scope', 'DELETE'] as const
}

export function getDeleteSamplingSettingsScopeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sampling_settings)[':scope']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sampling_settings)[':scope']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSamplingSettingsScopeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sampling_settings)[':scope']['$delete']>,
    ) {
      return parseResponse(client.sampling_settings[':scope'].$delete(args, options))
    },
  })
}

export function createDeleteSamplingSettingsScope<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sampling_settings)[':scope']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.sampling_settings)[':scope']['$delete']>,
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
    const mutationDefaults = getDeleteSamplingSettingsScopeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchSamplingSettingsScopeMutationKey() {
  return ['sampling_settings', '/sampling_settings/:scope', 'PATCH'] as const
}

export function getPatchSamplingSettingsScopeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sampling_settings)[':scope']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sampling_settings)[':scope']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSamplingSettingsScopeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sampling_settings)[':scope']['$patch']>,
    ) {
      return parseResponse(client.sampling_settings[':scope'].$patch(args, options))
    },
  })
}

export function createPatchSamplingSettingsScope<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sampling_settings)[':scope']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sampling_settings)[':scope']['$patch']>,
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
    const mutationDefaults = getPatchSamplingSettingsScopeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSettingsDashboardQueryKey(
  args: InferRequestType<typeof client.settings.dashboard.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['settings', '/settings/dashboard', keyArgs] as const
}

export function getSettingsDashboardQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.dashboard.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.settings.dashboard.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.dashboard.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsDashboardQueryKey>
  >({
    queryKey: getSettingsDashboardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.dashboard.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSettingsDashboard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.dashboard.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.settings.dashboard.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.settings.dashboard.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsDashboardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsDashboardQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchSettingsDashboardMutationKey() {
  return ['settings', '/settings/dashboard', 'PATCH'] as const
}

export function getPatchSettingsDashboardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.dashboard.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.settings.dashboard.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchSettingsDashboardMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.dashboard.$patch>) {
      return parseResponse(client.settings.dashboard.$patch(args, options))
    },
  })
}

export function createPatchSettingsDashboard<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.settings.dashboard.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.settings.dashboard.$patch>,
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
    const mutationDefaults = getPatchSettingsDashboardMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSettingsReviewQueryKey(
  args: InferRequestType<typeof client.settings.review.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['settings', '/settings/review', keyArgs] as const
}

export function getSettingsReviewQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.review.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.settings.review.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.review.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsReviewQueryKey>
  >({
    queryKey: getSettingsReviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.review.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSettingsReview<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.review.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.settings.review.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.review.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsReviewQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsReviewQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchSettingsReviewMutationKey() {
  return ['settings', '/settings/review', 'PATCH'] as const
}

export function getPatchSettingsReviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.review.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.settings.review.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchSettingsReviewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.review.$patch>) {
      return parseResponse(client.settings.review.$patch(args, options))
    },
  })
}

export function createPatchSettingsReview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.settings.review.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.settings.review.$patch>,
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
    const mutationDefaults = getPatchSettingsReviewMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSsoConfigQueryKey(args: InferRequestType<typeof client.sso.config.$get>) {
  const { header: _, ...keyArgs } = args
  return ['sso', '/sso/config', keyArgs] as const
}

export function getSsoConfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.config.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sso.config.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSsoConfigQueryKey>
  >({
    queryKey: getSsoConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sso.config.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSsoConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sso.config.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.config.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSsoConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSsoConfigQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostSsoConfigMutationKey() {
  return ['sso', '/sso/config', 'POST'] as const
}

export function getPostSsoConfigMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.config.$post>>>>>,
    TError,
    InferRequestType<typeof client.sso.config.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSsoConfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sso.config.$post>) {
      return parseResponse(client.sso.config.$post(args, options))
    },
  })
}

export function createPostSsoConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.config.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sso.config.$post>,
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
    const mutationDefaults = getPostSsoConfigMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteSsoConfigSsoConfigIdMutationKey() {
  return ['sso', '/sso/config/:sso_config_id', 'DELETE'] as const
}

export function getDeleteSsoConfigSsoConfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sso.config)[':sso_config_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sso.config)[':sso_config_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSsoConfigSsoConfigIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sso.config)[':sso_config_id']['$delete']>,
    ) {
      return parseResponse(client.sso.config[':sso_config_id'].$delete(args, options))
    },
  })
}

export function createDeleteSsoConfigSsoConfigId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sso.config)[':sso_config_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.sso.config)[':sso_config_id']['$delete']>,
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
    const mutationDefaults = getDeleteSsoConfigSsoConfigIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSsoLoginMutationKey() {
  return ['sso', '/sso/login', 'POST'] as const
}

export function getPostSsoLoginMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.login.$post>>>>>,
    TError,
    InferRequestType<typeof client.sso.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSsoLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sso.login.$post>) {
      return parseResponse(client.sso.login.$post(args, options))
    },
  })
}

export function createPostSsoLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.login.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sso.login.$post>,
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
    const mutationDefaults = getPostSsoLoginMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getStatsUsageQueryKey(args: InferRequestType<typeof client.stats.usage.$get>) {
  return ['stats', '/stats/usage', args] as const
}

export function getStatsUsageQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.usage.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.stats.usage.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.usage.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatsUsageQueryKey>
  >({
    queryKey: getStatsUsageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.usage.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatsUsage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.usage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stats.usage.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.usage.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStatsUsageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatsUsageQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStatsInboxIdQueryKey(
  args: InferRequestType<(typeof client.stats)[':inbox_id']['$get']>,
) {
  return ['stats', '/stats/:inbox_id', args] as const
}

export function getStatsInboxIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stats)[':inbox_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stats)[':inbox_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stats)[':inbox_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsInboxIdQueryKey>
  >({
    queryKey: getStatsInboxIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats[':inbox_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatsInboxId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stats)[':inbox_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stats)[':inbox_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.stats)[':inbox_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsInboxIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatsInboxIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStatsInboxIdAutomationBlockersQueryKey(
  args: InferRequestType<(typeof client.stats)[':inbox_id']['automation_blockers']['$get']>,
) {
  return ['stats', '/stats/:inbox_id/automation_blockers', args] as const
}

export function getStatsInboxIdAutomationBlockersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stats)[':inbox_id']['automation_blockers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stats)[':inbox_id']['automation_blockers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stats)[':inbox_id']['automation_blockers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsInboxIdAutomationBlockersQueryKey>
  >({
    queryKey: getStatsInboxIdAutomationBlockersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats[':inbox_id'].automation_blockers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStatsInboxIdAutomationBlockers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stats)[':inbox_id']['automation_blockers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stats)[':inbox_id']['automation_blockers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.stats)[':inbox_id']['automation_blockers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsInboxIdAutomationBlockersQueryKey>
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
      ...getStatsInboxIdAutomationBlockersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostStatsInboxIdBlueDotsMutationKey() {
  return ['stats', '/stats/:inbox_id/blue_dots', 'POST'] as const
}

export function getPostStatsInboxIdBlueDotsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stats)[':inbox_id']['blue_dots']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.stats)[':inbox_id']['blue_dots']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStatsInboxIdBlueDotsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.stats)[':inbox_id']['blue_dots']['$post']>,
    ) {
      return parseResponse(client.stats[':inbox_id'].blue_dots.$post(args, options))
    },
  })
}

export function createPostStatsInboxIdBlueDots<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.stats)[':inbox_id']['blue_dots']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.stats)[':inbox_id']['blue_dots']['$post']>,
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
    const mutationDefaults = getPostStatsInboxIdBlueDotsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getStatsInboxIdEvaluatedVersionsQueryKey(
  args: InferRequestType<(typeof client.stats)[':inbox_id']['evaluated_versions']['$get']>,
) {
  return ['stats', '/stats/:inbox_id/evaluated_versions', args] as const
}

export function getStatsInboxIdEvaluatedVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stats)[':inbox_id']['evaluated_versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stats)[':inbox_id']['evaluated_versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stats)[':inbox_id']['evaluated_versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsInboxIdEvaluatedVersionsQueryKey>
  >({
    queryKey: getStatsInboxIdEvaluatedVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats[':inbox_id'].evaluated_versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStatsInboxIdEvaluatedVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stats)[':inbox_id']['evaluated_versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stats)[':inbox_id']['evaluated_versions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.stats)[':inbox_id']['evaluated_versions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsInboxIdEvaluatedVersionsQueryKey>
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
      ...getStatsInboxIdEvaluatedVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStatsInboxIdProcessingQueryKey(
  args: InferRequestType<(typeof client.stats)[':inbox_id']['processing']['$get']>,
) {
  return ['stats', '/stats/:inbox_id/processing', args] as const
}

export function getStatsInboxIdProcessingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stats)[':inbox_id']['processing']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stats)[':inbox_id']['processing']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stats)[':inbox_id']['processing']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsInboxIdProcessingQueryKey>
  >({
    queryKey: getStatsInboxIdProcessingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats[':inbox_id'].processing.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStatsInboxIdProcessing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stats)[':inbox_id']['processing']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stats)[':inbox_id']['processing']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.stats)[':inbox_id']['processing']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsInboxIdProcessingQueryKey>
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
      ...getStatsInboxIdProcessingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStatsInboxIdVolumeQueryKey(
  args: InferRequestType<(typeof client.stats)[':inbox_id']['volume']['$get']>,
) {
  return ['stats', '/stats/:inbox_id/volume', args] as const
}

export function getStatsInboxIdVolumeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stats)[':inbox_id']['volume']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stats)[':inbox_id']['volume']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stats)[':inbox_id']['volume']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsInboxIdVolumeQueryKey>
  >({
    queryKey: getStatsInboxIdVolumeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats[':inbox_id'].volume.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStatsInboxIdVolume<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stats)[':inbox_id']['volume']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stats)[':inbox_id']['volume']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.stats)[':inbox_id']['volume']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsInboxIdVolumeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatsInboxIdVolumeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStatsScopeAccuracyQueryKey(
  args: InferRequestType<(typeof client.stats)[':scope']['accuracy']['$get']>,
) {
  return ['stats', '/stats/:scope/accuracy', args] as const
}

export function getStatsScopeAccuracyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stats)[':scope']['accuracy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stats)[':scope']['accuracy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stats)[':scope']['accuracy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsScopeAccuracyQueryKey>
  >({
    queryKey: getStatsScopeAccuracyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats[':scope'].accuracy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStatsScopeAccuracy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stats)[':scope']['accuracy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stats)[':scope']['accuracy']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.stats)[':scope']['accuracy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsScopeAccuracyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatsScopeAccuracyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStatsScopeStpQueryKey(
  args: InferRequestType<(typeof client.stats)[':scope']['stp']['$get']>,
) {
  return ['stats', '/stats/:scope/stp', args] as const
}

export function getStatsScopeStpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stats)[':scope']['stp']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stats)[':scope']['stp']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stats)[':scope']['stp']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsScopeStpQueryKey>
  >({
    queryKey: getStatsScopeStpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats[':scope'].stp.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatsScopeStp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stats)[':scope']['stp']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stats)[':scope']['stp']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.stats)[':scope']['stp']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsScopeStpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatsScopeStpQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStyleCustomCssQueryKey() {
  return ['style', '/style/custom.css'] as const
}

export function getStyleCustomCssQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.style)['custom.css']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.style)['custom.css']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStyleCustomCssQueryKey>
  >({
    queryKey: getStyleCustomCssQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.style['custom.css'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStyleCustomCss<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.style)['custom.css']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.style)['custom.css']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStyleCustomCssQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStyleCustomCssQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostStyleCustomCssMutationKey() {
  return ['style', '/style/custom.css', 'POST'] as const
}

export function getPostStyleCustomCssMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.style)['custom.css']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.style)['custom.css']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStyleCustomCssMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.style)['custom.css']['$post']>) {
      return parseResponse(client.style['custom.css'].$post(args, options))
    },
  })
}

export function createPostStyleCustomCss<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.style)['custom.css']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.style)['custom.css']['$post']>,
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
    const mutationDefaults = getPostStyleCustomCssMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getStyleLogoPngQueryKey() {
  return ['style', '/style/logo.png'] as const
}

export function getStyleLogoPngQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.style)['logo.png']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.style)['logo.png']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStyleLogoPngQueryKey>
  >({
    queryKey: getStyleLogoPngQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.style['logo.png'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStyleLogoPng<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.style)['logo.png']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.style)['logo.png']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStyleLogoPngQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStyleLogoPngQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostStyleLogoPngMutationKey() {
  return ['style', '/style/logo.png', 'POST'] as const
}

export function getPostStyleLogoPngMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.style)['logo.png']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.style)['logo.png']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStyleLogoPngMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.style)['logo.png']['$post']>) {
      return parseResponse(client.style['logo.png'].$post(args, options))
    },
  })
}

export function createPostStyleLogoPng<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.style)['logo.png']['$post']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.style)['logo.png']['$post']>,
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
    const mutationDefaults = getPostStyleLogoPngMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteTenantMutationKey() {
  return ['tenant', '/tenant', 'DELETE'] as const
}

export function getDeleteTenantMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tenant.$delete>>>>>
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteTenantMutationKey(),
    async mutationFn() {
      return parseResponse(client.tenant.$delete(undefined, options))
    },
  })
}

export function createDeleteTenant<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tenant.$delete>>>>
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTenantMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchTenantActivateMutationKey() {
  return ['tenant', '/tenant/activate', 'PATCH'] as const
}

export function getPatchTenantActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tenant.activate.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.tenant.activate.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchTenantActivateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tenant.activate.$patch>) {
      return parseResponse(client.tenant.activate.$patch(args, options))
    },
  })
}

export function createPatchTenantActivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tenant.activate.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.tenant.activate.$patch>,
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
    const mutationDefaults = getPatchTenantActivateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getThresholdSettingsQueryKey(
  args: InferRequestType<typeof client.threshold_settings.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['threshold_settings', '/threshold_settings', keyArgs] as const
}

export function getThresholdSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.threshold_settings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.threshold_settings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.threshold_settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getThresholdSettingsQueryKey>
  >({
    queryKey: getThresholdSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.threshold_settings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createThresholdSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.threshold_settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.threshold_settings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.threshold_settings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getThresholdSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getThresholdSettingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getThresholdSettingsScopeQueryKey(
  args: InferRequestType<(typeof client.threshold_settings)[':scope']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['threshold_settings', '/threshold_settings/:scope', keyArgs] as const
}

export function getThresholdSettingsScopeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.threshold_settings)[':scope']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.threshold_settings)[':scope']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.threshold_settings)[':scope']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThresholdSettingsScopeQueryKey>
  >({
    queryKey: getThresholdSettingsScopeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.threshold_settings[':scope'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createThresholdSettingsScope<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.threshold_settings)[':scope']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.threshold_settings)[':scope']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.threshold_settings)[':scope']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getThresholdSettingsScopeQueryKey>
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
      ...getThresholdSettingsScopeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteThresholdSettingsScopeMutationKey() {
  return ['threshold_settings', '/threshold_settings/:scope', 'DELETE'] as const
}

export function getDeleteThresholdSettingsScopeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.threshold_settings)[':scope']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.threshold_settings)[':scope']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteThresholdSettingsScopeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.threshold_settings)[':scope']['$delete']>,
    ) {
      return parseResponse(client.threshold_settings[':scope'].$delete(args, options))
    },
  })
}

export function createDeleteThresholdSettingsScope<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.threshold_settings)[':scope']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.threshold_settings)[':scope']['$delete']>,
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
    const mutationDefaults = getDeleteThresholdSettingsScopeMutationOptions<
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

export function getPatchThresholdSettingsScopeMutationKey() {
  return ['threshold_settings', '/threshold_settings/:scope', 'PATCH'] as const
}

export function getPatchThresholdSettingsScopeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.threshold_settings)[':scope']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.threshold_settings)[':scope']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchThresholdSettingsScopeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.threshold_settings)[':scope']['$patch']>,
    ) {
      return parseResponse(client.threshold_settings[':scope'].$patch(args, options))
    },
  })
}

export function createPatchThresholdSettingsScope<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.threshold_settings)[':scope']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.threshold_settings)[':scope']['$patch']>,
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
    const mutationDefaults = getPatchThresholdSettingsScopeMutationOptions<TError, TOnMutateResult>(
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
  const { header: _, ...keyArgs } = args
  return ['users', '/users', keyArgs] as const
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

export function getUsersMeQueryKey(args: InferRequestType<typeof client.users.me.$get>) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/me', keyArgs] as const
}

export function getUsersMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.me.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersMeQueryKey>
  >({
    queryKey: getUsersMeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.me.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.me.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersMeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostUsersMeChangePasswordMutationKey() {
  return ['users', '/users/me/change_password', 'POST'] as const
}

export function getPostUsersMeChangePasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users.me.change_password.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.users.me.change_password.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMeChangePasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.me.change_password.$post>) {
      return parseResponse(client.users.me.change_password.$post(args, options))
    },
  })
}

export function createPostUsersMeChangePassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.users.me.change_password.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.users.me.change_password.$post>,
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
    const mutationDefaults = getPostUsersMeChangePasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersUserIdQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:user_id', keyArgs] as const
}

export function getUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdQueryKey>
  >({
    queryKey: getUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
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
  return ['users', '/users/:user_id', 'DELETE'] as const
}

export function getDeleteUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':user_id']['$delete']>) {
      return parseResponse(client.users[':user_id'].$delete(args, options))
    },
  })
}

export function createDeleteUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['$delete']>,
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
  return ['users', '/users/:user_id', 'PATCH'] as const
}

export function getPatchUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':user_id']['$patch']>) {
      return parseResponse(client.users[':user_id'].$patch(args, options))
    },
  })
}

export function createPatchUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['$patch']>,
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
