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

export function getAboutReleaseNotesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAboutReleaseNotesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.about.release_notes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAboutReleaseNotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.release_notes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.about.release_notes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.about.release_notes.$get>>>
            >
          >,
          ReturnType<typeof getAboutReleaseNotesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.release_notes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAboutReleaseNotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAboutReleaseNotesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.about.release_notes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAboutVersionQueryKey() {
  return ['about', '/about/version'] as const
}

export function getAboutVersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAboutVersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.about.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAboutVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.version.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.version.$get>>>>
          >,
          ReturnType<typeof getAboutVersionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAboutVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAboutVersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.about.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAuth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$post>>>>>,
          TError,
          InferRequestType<typeof client.auth.$post>,
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
  const mutationDefaults = getPostAuthMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAuthApiKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.auth)['api-key']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['auth', '/auth/api-key', keyArgs] as const
}

export function getAuthApiKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.auth)['api-key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthApiKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.auth['api-key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuthApiKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.auth)['api-key']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.auth)['api-key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.auth)['api-key']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.auth)['api-key']['$get']>>>
            >
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
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.auth)['api-key']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthApiKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthApiKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.auth['api-key'].$get(toValue(args), {
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

export function usePostAuthApiKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.auth)['api-key']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.auth)['api-key']['$post']>,
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

export function getAuthApiKeyInboxInboxIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.auth)['api-key']['inbox'][':inbox_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['auth', '/auth/api-key/inbox/:inbox_id', keyArgs] as const
}

export function getAuthApiKeyInboxInboxIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.auth)['api-key']['inbox'][':inbox_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthApiKeyInboxInboxIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.auth['api-key'].inbox[':inbox_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuthApiKeyInboxInboxId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.auth)['api-key']['inbox'][':inbox_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.auth)['api-key']['inbox'][':inbox_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.auth)['api-key']['inbox'][':inbox_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.auth)['api-key']['inbox'][':inbox_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAuthApiKeyInboxInboxIdQueryKey>
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
          Awaited<ReturnType<(typeof client.auth)['api-key']['inbox'][':inbox_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthApiKeyInboxInboxIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthApiKeyInboxInboxIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.auth['api-key'].inbox[':inbox_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAuthApiKeyInboxInboxId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthApiKeyInboxInboxIdMutationOptions<TError, TOnMutateResult>(
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

export function getAuthApiKeyKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.auth)['api-key'][':key']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['auth', '/auth/api-key/:key', keyArgs] as const
}

export function getAuthApiKeyKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.auth)['api-key'][':key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthApiKeyKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.auth['api-key'][':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuthApiKeyKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.auth)['api-key'][':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.auth)['api-key'][':key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.auth)['api-key'][':key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.auth)['api-key'][':key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAuthApiKeyKeyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.auth)['api-key'][':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthApiKeyKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthApiKeyKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.auth['api-key'][':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteAuthApiKeyKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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

export function usePatchAuthApiKeyKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAuthApiKeyKeyMutationOptions<TError, TOnMutateResult>(
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

export function usePostAuthEphemeral<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.ephemeral.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.auth.ephemeral.$post>,
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
  const mutationDefaults = getPostAuthEphemeralMutationOptions<TError, TOnMutateResult>(
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

export function usePostAuthGetJWT<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.get_JWT.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.auth.get_JWT.$post>,
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
  const mutationDefaults = getPostAuthGetJWTMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAuthResetPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthResetPasswordMutationOptions<TError, TOnMutateResult>(
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
    InferRequestType<typeof client.auth.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.token.$post>) {
      return parseResponse(client.auth.token.$post(args, options))
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
          InferRequestType<typeof client.auth.token.$post>,
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

export function getConnectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connections.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['connections', '/connections', keyArgs] as const
}

export function getConnectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connections.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connections.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connections.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
          >,
          ReturnType<typeof getConnectionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostConnections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.connections.$post>,
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
  const mutationDefaults = getPostConnectionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getConnectionsConnectionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.connections)[':connection_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['connections', '/connections/:connection_id', keyArgs] as const
}

export function getConnectionsConnectionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.connections)[':connection_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectionsConnectionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connections[':connection_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConnectionsConnectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connections)[':connection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.connections)[':connection_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connections)[':connection_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connections)[':connection_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConnectionsConnectionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.connections)[':connection_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionsConnectionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectionsConnectionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connections[':connection_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteConnectionsConnectionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteConnectionsConnectionIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchConnectionsConnectionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchConnectionsConnectionIdMutationOptions<TError, TOnMutateResult>(
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

export function getDataRetentionSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data_retention_settings.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['data_retention_settings', '/data_retention_settings', keyArgs] as const
}

export function getDataRetentionSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data_retention_settings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataRetentionSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data_retention_settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataRetentionSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.data_retention_settings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data_retention_settings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.data_retention_settings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.data_retention_settings.$get>>>
            >
          >,
          ReturnType<typeof getDataRetentionSettingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.data_retention_settings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataRetentionSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataRetentionSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.data_retention_settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDataRetentionSettingsLevelIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.data_retention_settings)[':level'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['data_retention_settings', '/data_retention_settings/:level/:id', keyArgs] as const
}

export function getDataRetentionSettingsLevelIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.data_retention_settings)[':level'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataRetentionSettingsLevelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data_retention_settings[':level'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataRetentionSettingsLevelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.data_retention_settings)[':level'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.data_retention_settings)[':level'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.data_retention_settings)[':level'][':id']['$get']>
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
                  ReturnType<(typeof client.data_retention_settings)[':level'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDataRetentionSettingsLevelIdQueryKey>
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
          Awaited<ReturnType<(typeof client.data_retention_settings)[':level'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataRetentionSettingsLevelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataRetentionSettingsLevelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.data_retention_settings[':level'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteDataRetentionSettingsLevelId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDataRetentionSettingsLevelIdMutationOptions<
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

export function usePatchDataRetentionSettingsLevelId<
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
                  ReturnType<(typeof client.data_retention_settings)[':level'][':id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.data_retention_settings)[':level'][':id']['$patch']>,
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
  const mutationDefaults = getPatchDataRetentionSettingsLevelIdMutationOptions<
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

export function usePostDocumentsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.documents.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.documents.index.$post>,
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
  const mutationDefaults = getPostDocumentsIndexMutationOptions<TError, TOnMutateResult>(
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

export function usePostDocumentsCustomOutput<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.documents.custom_output.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.documents.custom_output.$post>,
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
  const mutationDefaults = getPostDocumentsCustomOutputMutationOptions<TError, TOnMutateResult>(
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

export function usePostDocumentsEnrich<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.documents.enrich.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.documents.enrich.$post>,
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
  const mutationDefaults = getPostDocumentsEnrichMutationOptions<TError, TOnMutateResult>(
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

export function usePostDocumentsFileQueryDataType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDocumentsFileQueryDataTypeMutationOptions<
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

export function usePostDocumentsQueryQueryType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDocumentsQueryQueryTypeMutationOptions<TError, TOnMutateResult>(
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

export function getDocumentsDocumentIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.documents)[':document_id']['$get']>>,
) {
  return ['documents', '/documents/:document_id', toValue(args)] as const
}

export function getDocumentsDocumentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.documents)[':document_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDocumentsDocumentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.documents[':document_id'].$get(toValue(args), {
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
      typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':document_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.documents)[':document_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.documents)[':document_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.documents)[':document_id']['$get']>>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':document_id']['$get']>>>
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
          client.documents[':document_id'].$get(toValue(args), {
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

export function useDeleteDocumentsDocumentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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

export function usePostDocumentsDocumentIdCompareVersions<
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
                  ReturnType<(typeof client.documents)[':document_id']['compare_versions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.documents)[':document_id']['compare_versions']['$post']>,
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
  const mutationDefaults = getPostDocumentsDocumentIdCompareVersionsMutationOptions<
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

export function getDocumentsDocumentIdCustomOutputQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.documents)[':document_id']['custom_output']['$get']>
  >,
) {
  return ['documents', '/documents/:document_id/custom_output', toValue(args)] as const
}

export function getDocumentsDocumentIdCustomOutputQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.documents)[':document_id']['custom_output']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDocumentsDocumentIdCustomOutputQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.documents[':document_id'].custom_output.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDocumentsDocumentIdCustomOutput<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.documents)[':document_id']['custom_output']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.documents)[':document_id']['custom_output']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.documents)[':document_id']['custom_output']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDocumentsDocumentIdCustomOutputQueryKey>
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
          Awaited<ReturnType<(typeof client.documents)[':document_id']['custom_output']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDocumentIdCustomOutputQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDocumentsDocumentIdCustomOutputQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.documents[':document_id'].custom_output.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDocumentsDocumentIdFeedback<
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
                Awaited<ReturnType<(typeof client.documents)[':document_id']['feedback']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.documents)[':document_id']['feedback']['$post']>,
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
  const mutationDefaults = getPostDocumentsDocumentIdFeedbackMutationOptions<
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

export function getDocumentsDocumentIdLastVersionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.documents)[':document_id']['last_version']['$get']>
  >,
) {
  return ['documents', '/documents/:document_id/last_version', toValue(args)] as const
}

export function getDocumentsDocumentIdLastVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.documents)[':document_id']['last_version']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDocumentsDocumentIdLastVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.documents[':document_id'].last_version.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDocumentsDocumentIdLastVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.documents)[':document_id']['last_version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.documents)[':document_id']['last_version']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.documents)[':document_id']['last_version']['$get']>
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
                  ReturnType<(typeof client.documents)[':document_id']['last_version']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDocumentsDocumentIdLastVersionQueryKey>
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
          Awaited<ReturnType<(typeof client.documents)[':document_id']['last_version']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDocumentIdLastVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDocumentsDocumentIdLastVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.documents[':document_id'].last_version.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDocumentsDocumentIdOriginalFileQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.documents)[':document_id']['original_file']['$get']>
  >,
) {
  return ['documents', '/documents/:document_id/original_file', toValue(args)] as const
}

export function getDocumentsDocumentIdOriginalFileQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.documents)[':document_id']['original_file']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDocumentsDocumentIdOriginalFileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.documents[':document_id'].original_file.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDocumentsDocumentIdOriginalFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.documents)[':document_id']['original_file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.documents)[':document_id']['original_file']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.documents)[':document_id']['original_file']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDocumentsDocumentIdOriginalFileQueryKey>
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
          Awaited<ReturnType<(typeof client.documents)[':document_id']['original_file']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDocumentIdOriginalFileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDocumentsDocumentIdOriginalFileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.documents[':document_id'].original_file.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDocumentsDocumentIdPagePageRangeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.documents)[':document_id']['page'][':page_range']['$get']>
  >,
) {
  return ['documents', '/documents/:document_id/page/:page_range', toValue(args)] as const
}

export function getDocumentsDocumentIdPagePageRangeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.documents)[':document_id']['page'][':page_range']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDocumentsDocumentIdPagePageRangeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.documents[':document_id'].page[':page_range'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDocumentsDocumentIdPagePageRange<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.documents)[':document_id']['page'][':page_range']['$get']>
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
                    (typeof client.documents)[':document_id']['page'][':page_range']['$get']
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
                    (typeof client.documents)[':document_id']['page'][':page_range']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDocumentsDocumentIdPagePageRangeQueryKey>
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
            ReturnType<(typeof client.documents)[':document_id']['page'][':page_range']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDocumentIdPagePageRangeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDocumentsDocumentIdPagePageRangeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.documents[':document_id'].page[':page_range'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDocumentsDocumentIdPageThumbnailPageRangeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.documents)[':document_id']['page_thumbnail'][':page_range']['$get']
    >
  >,
) {
  return ['documents', '/documents/:document_id/page_thumbnail/:page_range', toValue(args)] as const
}

export function getDocumentsDocumentIdPageThumbnailPageRangeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.documents)[':document_id']['page_thumbnail'][':page_range']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDocumentsDocumentIdPageThumbnailPageRangeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.documents[':document_id'].page_thumbnail[':page_range'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDocumentsDocumentIdPageThumbnailPageRange<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.documents)[':document_id']['page_thumbnail'][':page_range']['$get']
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
                    (typeof client.documents)[':document_id']['page_thumbnail'][':page_range']['$get']
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
                    (typeof client.documents)[':document_id']['page_thumbnail'][':page_range']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDocumentsDocumentIdPageThumbnailPageRangeQueryKey>
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
              (typeof client.documents)[':document_id']['page_thumbnail'][':page_range']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDocumentIdPageThumbnailPageRangeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDocumentsDocumentIdPageThumbnailPageRangeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.documents[':document_id'].page_thumbnail[':page_range'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDocumentsDocumentIdProcessTableAnnotation<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDocumentsDocumentIdProcessTableAnnotationMutationOptions<
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

export function usePostDocumentsDocumentIdReprocess<
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
                Awaited<ReturnType<(typeof client.documents)[':document_id']['reprocess']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.documents)[':document_id']['reprocess']['$post']>,
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
  const mutationDefaults = getPostDocumentsDocumentIdReprocessMutationOptions<
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

export function getDocumentsDocumentIdReversePageRangeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.documents)[':document_id']['reverse'][':page_range']['$get']>
  >,
) {
  return ['documents', '/documents/:document_id/reverse/:page_range', toValue(args)] as const
}

export function getDocumentsDocumentIdReversePageRangeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.documents)[':document_id']['reverse'][':page_range']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDocumentsDocumentIdReversePageRangeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.documents[':document_id'].reverse[':page_range'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDocumentsDocumentIdReversePageRange<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.documents)[':document_id']['reverse'][':page_range']['$get']>
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
                    (typeof client.documents)[':document_id']['reverse'][':page_range']['$get']
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
                    (typeof client.documents)[':document_id']['reverse'][':page_range']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDocumentsDocumentIdReversePageRangeQueryKey>
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
            ReturnType<(typeof client.documents)[':document_id']['reverse'][':page_range']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDocumentIdReversePageRangeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDocumentsDocumentIdReversePageRangeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.documents[':document_id'].reverse[':page_range'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDocumentsDocumentIdStatusData<
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
                  ReturnType<(typeof client.documents)[':document_id']['status_data']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.documents)[':document_id']['status_data']['$post']>,
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
  const mutationDefaults = getPostDocumentsDocumentIdStatusDataMutationOptions<
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

export function getDocumentsDocumentIdTextQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.documents)[':document_id']['text']['$get']>
  >,
) {
  return ['documents', '/documents/:document_id/text', toValue(args)] as const
}

export function getDocumentsDocumentIdTextQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.documents)[':document_id']['text']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDocumentsDocumentIdTextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.documents[':document_id'].text.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDocumentsDocumentIdText<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.documents)[':document_id']['text']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.documents)[':document_id']['text']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.documents)[':document_id']['text']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.documents)[':document_id']['text']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDocumentsDocumentIdTextQueryKey>
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
          Awaited<ReturnType<(typeof client.documents)[':document_id']['text']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDocumentIdTextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDocumentsDocumentIdTextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.documents[':document_id'].text.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDocumentsDocumentIdWorkflowQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.documents)[':document_id']['workflow']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['documents', '/documents/:document_id/workflow', keyArgs] as const
}

export function getDocumentsDocumentIdWorkflowQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.documents)[':document_id']['workflow']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDocumentsDocumentIdWorkflowQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.documents[':document_id'].workflow.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDocumentsDocumentIdWorkflow<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.documents)[':document_id']['workflow']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.documents)[':document_id']['workflow']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.documents)[':document_id']['workflow']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.documents)[':document_id']['workflow']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDocumentsDocumentIdWorkflowQueryKey>
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
          Awaited<ReturnType<(typeof client.documents)[':document_id']['workflow']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDocumentIdWorkflowQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDocumentsDocumentIdWorkflowQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.documents[':document_id'].workflow.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDocumentsInboxId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDocumentsInboxIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchDocumentsInboxIdCopyInbox<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDocumentsInboxIdCopyInboxMutationOptions<
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

export function usePatchDocumentsInboxIdMoveInbox<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDocumentsInboxIdMoveInboxMutationOptions<
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

export function getFormatsQueryKey() {
  return ['formats', '/formats'] as const
}

export function getFormatsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getFormatsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.formats.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFormats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formats.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formats.$get>>>>
          >,
          ReturnType<typeof getFormatsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formats.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFormatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getFormatsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.formats.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostFormats<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formats.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.formats.$post>,
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
  const mutationDefaults = getPostFormatsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFormatsDocumentTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.formats.document_types.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['formats', '/formats/document_types', keyArgs] as const
}

export function getFormatsDocumentTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.formats.document_types.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatsDocumentTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.formats.document_types.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatsDocumentTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formats.document_types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.formats.document_types.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.formats.document_types.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.formats.document_types.$get>>>
            >
          >,
          ReturnType<typeof getFormatsDocumentTypesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.formats.document_types.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatsDocumentTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatsDocumentTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.formats.document_types.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatsFormatIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.formats)[':format_id']['$get']>>,
) {
  return ['formats', '/formats/:format_id', toValue(args)] as const
}

export function getFormatsFormatIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.formats)[':format_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatsFormatIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.formats[':format_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatsFormatId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.formats)[':format_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.formats)[':format_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.formats)[':format_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.formats)[':format_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatsFormatIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.formats)[':format_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatsFormatIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatsFormatIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.formats[':format_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteFormatsFormatId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFormatsFormatIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchFormatsFormatId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchFormatsFormatIdMutationOptions<TError, TOnMutateResult>(
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

export function getFormatsScopeTagFieldsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.formats)[':scope']['tag_fields']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['formats', '/formats/:scope/tag_fields', keyArgs] as const
}

export function getFormatsScopeTagFieldsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.formats)[':scope']['tag_fields']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatsScopeTagFieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.formats[':scope'].tag_fields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatsScopeTagFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.formats)[':scope']['tag_fields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.formats)[':scope']['tag_fields']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.formats)[':scope']['tag_fields']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.formats)[':scope']['tag_fields']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatsScopeTagFieldsQueryKey>
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
          Awaited<ReturnType<(typeof client.formats)[':scope']['tag_fields']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatsScopeTagFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatsScopeTagFieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.formats[':scope'].tag_fields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInboxesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inboxes.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['inboxes', '/inboxes', keyArgs] as const
}

export function getInboxesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inboxes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInboxesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inboxes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInboxes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inboxes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inboxes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inboxes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inboxes.$get>>>>
          >,
          ReturnType<typeof getInboxesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inboxes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInboxesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInboxesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.inboxes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostInboxes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inboxes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.inboxes.$post>,
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
  const mutationDefaults = getPostInboxesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInboxesInboxIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.inboxes)[':inbox_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['inboxes', '/inboxes/:inbox_id', keyArgs] as const
}

export function getInboxesInboxIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.inboxes)[':inbox_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInboxesInboxIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inboxes[':inbox_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInboxesInboxId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.inboxes)[':inbox_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInboxesInboxIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboxesInboxIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInboxesInboxIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.inboxes[':inbox_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteInboxesInboxId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteInboxesInboxIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchInboxesInboxId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchInboxesInboxIdMutationOptions<TError, TOnMutateResult>(
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

export function getInboxesInboxIdDocumentVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.inboxes)[':inbox_id']['document_versions']['$get']>
  >,
) {
  return ['inboxes', '/inboxes/:inbox_id/document_versions', toValue(args)] as const
}

export function getInboxesInboxIdDocumentVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.inboxes)[':inbox_id']['document_versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInboxesInboxIdDocumentVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inboxes[':inbox_id'].document_versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInboxesInboxIdDocumentVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['document_versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.inboxes)[':inbox_id']['document_versions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.inboxes)[':inbox_id']['document_versions']['$get']>
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
                  ReturnType<(typeof client.inboxes)[':inbox_id']['document_versions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getInboxesInboxIdDocumentVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['document_versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboxesInboxIdDocumentVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInboxesInboxIdDocumentVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.inboxes[':inbox_id'].document_versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInboxesInboxIdDocumentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.inboxes)[':inbox_id']['documents']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['inboxes', '/inboxes/:inbox_id/documents', keyArgs] as const
}

export function getInboxesInboxIdDocumentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.inboxes)[':inbox_id']['documents']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInboxesInboxIdDocumentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inboxes[':inbox_id'].documents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInboxesInboxIdDocuments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['documents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.inboxes)[':inbox_id']['documents']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['documents']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['documents']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInboxesInboxIdDocumentsQueryKey>
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
          Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['documents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboxesInboxIdDocumentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInboxesInboxIdDocumentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.inboxes[':inbox_id'].documents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteInboxesInboxIdDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteInboxesInboxIdDocumentsMutationOptions<TError, TOnMutateResult>(
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

export function getInboxesInboxIdPaginatedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.inboxes)[':inbox_id']['paginated']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['inboxes', '/inboxes/:inbox_id/paginated', keyArgs] as const
}

export function getInboxesInboxIdPaginatedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.inboxes)[':inbox_id']['paginated']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInboxesInboxIdPaginatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inboxes[':inbox_id'].paginated.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInboxesInboxIdPaginated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['paginated']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.inboxes)[':inbox_id']['paginated']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['paginated']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['paginated']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInboxesInboxIdPaginatedQueryKey>
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
          Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['paginated']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboxesInboxIdPaginatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInboxesInboxIdPaginatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.inboxes[':inbox_id'].paginated.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostInboxesInboxIdReprocess<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInboxesInboxIdReprocessMutationOptions<TError, TOnMutateResult>(
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

export function getIntegrationsIndexQueryKey() {
  return ['integrations', '/integrations/'] as const
}

export function getIntegrationsIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIntegrationsIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.integrations.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIntegrationsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.integrations.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.integrations.index.$get>>>
            >
          >,
          ReturnType<typeof getIntegrationsIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIntegrationsIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.integrations.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostIntegrationsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.integrations.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.integrations.index.$post>,
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
  const mutationDefaults = getPostIntegrationsIndexMutationOptions<TError, TOnMutateResult>(
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

export function getIntegrationsIntegrationIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.integrations)[':integration_id']['$get']>>,
) {
  return ['integrations', '/integrations/:integration_id', toValue(args)] as const
}

export function getIntegrationsIntegrationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.integrations)[':integration_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIntegrationsIntegrationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.integrations[':integration_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIntegrationsIntegrationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.integrations)[':integration_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.integrations)[':integration_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.integrations)[':integration_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.integrations)[':integration_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIntegrationsIntegrationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.integrations)[':integration_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsIntegrationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIntegrationsIntegrationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.integrations[':integration_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteIntegrationsIntegrationId<
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
                  Awaited<ReturnType<(typeof client.integrations)[':integration_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.integrations)[':integration_id']['$delete']>,
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
  const mutationDefaults = getDeleteIntegrationsIntegrationIdMutationOptions<
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

export function usePatchIntegrationsIntegrationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchIntegrationsIntegrationIdMutationOptions<
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

export function getIntegrationsIntegrationIdActivateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.integrations)[':integration_id']['activate']['$get']>
  >,
) {
  return ['integrations', '/integrations/:integration_id/activate', toValue(args)] as const
}

export function getIntegrationsIntegrationIdActivateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.integrations)[':integration_id']['activate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIntegrationsIntegrationIdActivateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.integrations[':integration_id'].activate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIntegrationsIntegrationIdActivate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.integrations)[':integration_id']['activate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.integrations)[':integration_id']['activate']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.integrations)[':integration_id']['activate']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getIntegrationsIntegrationIdActivateQueryKey>
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
          Awaited<ReturnType<(typeof client.integrations)[':integration_id']['activate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsIntegrationIdActivateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIntegrationsIntegrationIdActivateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.integrations[':integration_id'].activate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPredictorSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.predictor_settings.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['predictor_settings', '/predictor_settings', keyArgs] as const
}

export function getPredictorSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.predictor_settings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPredictorSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.predictor_settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePredictorSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictor_settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.predictor_settings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.predictor_settings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.predictor_settings.$get>>>
            >
          >,
          ReturnType<typeof getPredictorSettingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictor_settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPredictorSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPredictorSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.predictor_settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPredictorSettingsScopeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.predictor_settings)[':scope']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['predictor_settings', '/predictor_settings/:scope', keyArgs] as const
}

export function getPredictorSettingsScopeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.predictor_settings)[':scope']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPredictorSettingsScopeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.predictor_settings[':scope'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePredictorSettingsScope<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.predictor_settings)[':scope']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.predictor_settings)[':scope']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.predictor_settings)[':scope']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.predictor_settings)[':scope']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPredictorSettingsScopeQueryKey>
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
          Awaited<ReturnType<(typeof client.predictor_settings)[':scope']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPredictorSettingsScopeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPredictorSettingsScopeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.predictor_settings[':scope'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeletePredictorSettingsScope<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePredictorSettingsScopeMutationOptions<TError, TOnMutateResult>(
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

export function usePatchPredictorSettingsScope<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPredictorSettingsScopeMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsQueryKey() {
  return ['projects', '/projects'] as const
}

export function getProjectsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getProjectsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
          >,
          ReturnType<typeof getProjectsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getProjectsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.projects.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.projects.$post>,
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
  const mutationDefaults = getPostProjectsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProjectsProjectIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':project_id']['$get']>>,
) {
  return ['projects', '/projects/:project_id', toValue(args)] as const
}

export function getProjectsProjectIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':project_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':project_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':project_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':project_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':project_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':project_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':project_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':project_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
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

export function getReportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reports.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['reports', '/reports', keyArgs] as const
}

export function getReportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reports.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reports.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reports.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>
          >,
          ReturnType<typeof getReportsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostReports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.reports.$post>,
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
  const mutationDefaults = getPostReportsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostReportsGenerate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reports.generate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.reports.generate.$post>,
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
  const mutationDefaults = getPostReportsGenerateMutationOptions<TError, TOnMutateResult>(
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

export function getReportsReportIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reports)[':report_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['reports', '/reports/:report_id', keyArgs] as const
}

export function getReportsReportIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reports)[':report_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportsReportIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reports[':report_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportsReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':report_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reports)[':report_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reports)[':report_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reports)[':report_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReportsReportIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':report_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsReportIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportsReportIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reports[':report_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteReportsReportId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteReportsReportIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchReportsReportId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchReportsReportIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostReportsReportIdGenerate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostReportsReportIdGenerateMutationOptions<TError, TOnMutateResult>(
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

export function getRolesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.roles.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['roles', '/roles', keyArgs] as const
}

export function getRolesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.roles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.roles.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRoles<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.roles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
          ReturnType<typeof getRolesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$post>>>>>,
          TError,
          InferRequestType<typeof client.roles.$post>,
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
  const mutationDefaults = getPostRolesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRolesRoleIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.roles)[':role_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['roles', '/roles/:role_id', keyArgs] as const
}

export function getRolesRoleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.roles)[':role_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRolesRoleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.roles[':role_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRolesRoleId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':role_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.roles)[':role_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':role_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':role_id']['$get']>>>
            >
          >,
          ReturnType<typeof getRolesRoleIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':role_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRolesRoleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRolesRoleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.roles[':role_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteRolesRoleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRolesRoleIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchRolesRoleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':role_id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.roles)[':role_id']['$patch']>,
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
  const mutationDefaults = getPatchRolesRoleIdMutationOptions<TError, TOnMutateResult>(
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

export function getRuleConfigQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rule_config.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['rule_config', '/rule_config', keyArgs] as const
}

export function getRuleConfigQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rule_config.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRuleConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rule_config.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRuleConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rule_config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rule_config.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rule_config.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rule_config.$get>>>>
          >,
          ReturnType<typeof getRuleConfigQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rule_config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRuleConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRuleConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rule_config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRuleConfigRuleEntityIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRuleConfigRuleEntityIndexMutationOptions<TError, TOnMutateResult>(
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

export function usePostRuleConfigRuleEntityDocumentId<
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
                  ReturnType<(typeof client.rule_config.rule_entity)[':document_id']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.rule_config.rule_entity)[':document_id']['$post']>,
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
  const mutationDefaults = getPostRuleConfigRuleEntityDocumentIdMutationOptions<
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

export function usePostRuleConfigWhereToSearchDocumentId<
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
                  ReturnType<(typeof client.rule_config.where_to_search)[':document_id']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.rule_config.where_to_search)[':document_id']['$post']>,
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
  const mutationDefaults = getPostRuleConfigWhereToSearchDocumentIdMutationOptions<
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

export function getRuleConfigScopeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rule_config)[':scope']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['rule_config', '/rule_config/:scope', keyArgs] as const
}

export function getRuleConfigScopeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rule_config)[':scope']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRuleConfigScopeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rule_config[':scope'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRuleConfigScope<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rule_config)[':scope']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rule_config)[':scope']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rule_config)[':scope']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rule_config)[':scope']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRuleConfigScopeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.rule_config)[':scope']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRuleConfigScopeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRuleConfigScopeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rule_config[':scope'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteRuleConfigScope<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRuleConfigScopeMutationOptions<TError, TOnMutateResult>(
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

export function usePatchRuleConfigScope<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchRuleConfigScopeMutationOptions<TError, TOnMutateResult>(
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

export function getSamplingSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sampling_settings.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sampling_settings', '/sampling_settings', keyArgs] as const
}

export function getSamplingSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sampling_settings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSamplingSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sampling_settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSamplingSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sampling_settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sampling_settings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sampling_settings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sampling_settings.$get>>>
            >
          >,
          ReturnType<typeof getSamplingSettingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sampling_settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSamplingSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSamplingSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sampling_settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSamplingSettingsScopeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sampling_settings)[':scope']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sampling_settings', '/sampling_settings/:scope', keyArgs] as const
}

export function getSamplingSettingsScopeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sampling_settings)[':scope']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSamplingSettingsScopeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sampling_settings[':scope'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSamplingSettingsScope<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sampling_settings)[':scope']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sampling_settings)[':scope']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sampling_settings)[':scope']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sampling_settings)[':scope']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSamplingSettingsScopeQueryKey>
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
          Awaited<ReturnType<(typeof client.sampling_settings)[':scope']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSamplingSettingsScopeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSamplingSettingsScopeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sampling_settings[':scope'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteSamplingSettingsScope<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSamplingSettingsScopeMutationOptions<TError, TOnMutateResult>(
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

export function usePatchSamplingSettingsScope<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSamplingSettingsScopeMutationOptions<TError, TOnMutateResult>(
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

export function getSettingsDashboardQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.settings.dashboard.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['settings', '/settings/dashboard', keyArgs] as const
}

export function getSettingsDashboardQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.settings.dashboard.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSettingsDashboardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.dashboard.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSettingsDashboard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.dashboard.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.settings.dashboard.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.dashboard.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.dashboard.$get>>>
            >
          >,
          ReturnType<typeof getSettingsDashboardQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.dashboard.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsDashboardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSettingsDashboardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.dashboard.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchSettingsDashboard<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.dashboard.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.settings.dashboard.$patch>,
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
  const mutationDefaults = getPatchSettingsDashboardMutationOptions<TError, TOnMutateResult>(
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

export function getSettingsReviewQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.settings.review.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['settings', '/settings/review', keyArgs] as const
}

export function getSettingsReviewQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.settings.review.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSettingsReviewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.review.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSettingsReview<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.review.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.settings.review.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.review.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.review.$get>>>
            >
          >,
          ReturnType<typeof getSettingsReviewQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.review.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsReviewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSettingsReviewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.review.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchSettingsReview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.review.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.settings.review.$patch>,
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
  const mutationDefaults = getPatchSettingsReviewMutationOptions<TError, TOnMutateResult>(
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

export function getSsoConfigQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sso.config.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sso', '/sso/config', keyArgs] as const
}

export function getSsoConfigQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sso.config.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSsoConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sso.config.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSsoConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sso.config.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.config.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.config.$get>>>>
          >,
          ReturnType<typeof getSsoConfigQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSsoConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSsoConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sso.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSsoConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.config.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sso.config.$post>,
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
  const mutationDefaults = getPostSsoConfigMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteSsoConfigSsoConfigId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSsoConfigSsoConfigIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostSsoLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sso.login.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sso.login.$post>,
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
  const mutationDefaults = getPostSsoLoginMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getStatsUsageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.usage.$get>>,
) {
  return ['stats', '/stats/usage', toValue(args)] as const
}

export function getStatsUsageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.usage.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsUsageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.usage.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatsUsage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.usage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.usage.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.usage.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.usage.$get>>>>
          >,
          ReturnType<typeof getStatsUsageQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.usage.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatsUsageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsUsageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.usage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsInboxIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stats)[':inbox_id']['$get']>>,
) {
  return ['stats', '/stats/:inbox_id', toValue(args)] as const
}

export function getStatsInboxIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stats)[':inbox_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsInboxIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats[':inbox_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatsInboxId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stats)[':inbox_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stats)[':inbox_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.stats)[':inbox_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.stats)[':inbox_id']['$get']>>>
            >
          >,
          ReturnType<typeof getStatsInboxIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.stats)[':inbox_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsInboxIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsInboxIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats[':inbox_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsInboxIdAutomationBlockersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stats)[':inbox_id']['automation_blockers']['$get']>
  >,
) {
  return ['stats', '/stats/:inbox_id/automation_blockers', toValue(args)] as const
}

export function getStatsInboxIdAutomationBlockersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stats)[':inbox_id']['automation_blockers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsInboxIdAutomationBlockersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats[':inbox_id'].automation_blockers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatsInboxIdAutomationBlockers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stats)[':inbox_id']['automation_blockers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stats)[':inbox_id']['automation_blockers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.stats)[':inbox_id']['automation_blockers']['$get']>
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
                  ReturnType<(typeof client.stats)[':inbox_id']['automation_blockers']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getStatsInboxIdAutomationBlockersQueryKey>
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
          Awaited<ReturnType<(typeof client.stats)[':inbox_id']['automation_blockers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsInboxIdAutomationBlockersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsInboxIdAutomationBlockersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats[':inbox_id'].automation_blockers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostStatsInboxIdBlueDots<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStatsInboxIdBlueDotsMutationOptions<TError, TOnMutateResult>(
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

export function getStatsInboxIdEvaluatedVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stats)[':inbox_id']['evaluated_versions']['$get']>
  >,
) {
  return ['stats', '/stats/:inbox_id/evaluated_versions', toValue(args)] as const
}

export function getStatsInboxIdEvaluatedVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stats)[':inbox_id']['evaluated_versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsInboxIdEvaluatedVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats[':inbox_id'].evaluated_versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatsInboxIdEvaluatedVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stats)[':inbox_id']['evaluated_versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stats)[':inbox_id']['evaluated_versions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.stats)[':inbox_id']['evaluated_versions']['$get']>
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
                  ReturnType<(typeof client.stats)[':inbox_id']['evaluated_versions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getStatsInboxIdEvaluatedVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.stats)[':inbox_id']['evaluated_versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsInboxIdEvaluatedVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsInboxIdEvaluatedVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats[':inbox_id'].evaluated_versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsInboxIdProcessingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stats)[':inbox_id']['processing']['$get']>
  >,
) {
  return ['stats', '/stats/:inbox_id/processing', toValue(args)] as const
}

export function getStatsInboxIdProcessingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stats)[':inbox_id']['processing']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsInboxIdProcessingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats[':inbox_id'].processing.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatsInboxIdProcessing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stats)[':inbox_id']['processing']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stats)[':inbox_id']['processing']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stats)[':inbox_id']['processing']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stats)[':inbox_id']['processing']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStatsInboxIdProcessingQueryKey>
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
          Awaited<ReturnType<(typeof client.stats)[':inbox_id']['processing']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsInboxIdProcessingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsInboxIdProcessingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats[':inbox_id'].processing.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsInboxIdVolumeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stats)[':inbox_id']['volume']['$get']>>,
) {
  return ['stats', '/stats/:inbox_id/volume', toValue(args)] as const
}

export function getStatsInboxIdVolumeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stats)[':inbox_id']['volume']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsInboxIdVolumeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats[':inbox_id'].volume.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatsInboxIdVolume<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stats)[':inbox_id']['volume']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stats)[':inbox_id']['volume']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stats)[':inbox_id']['volume']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stats)[':inbox_id']['volume']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStatsInboxIdVolumeQueryKey>
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
          Awaited<ReturnType<(typeof client.stats)[':inbox_id']['volume']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsInboxIdVolumeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsInboxIdVolumeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats[':inbox_id'].volume.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsScopeAccuracyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stats)[':scope']['accuracy']['$get']>>,
) {
  return ['stats', '/stats/:scope/accuracy', toValue(args)] as const
}

export function getStatsScopeAccuracyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stats)[':scope']['accuracy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsScopeAccuracyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats[':scope'].accuracy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatsScopeAccuracy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stats)[':scope']['accuracy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stats)[':scope']['accuracy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stats)[':scope']['accuracy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stats)[':scope']['accuracy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStatsScopeAccuracyQueryKey>
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
          Awaited<ReturnType<(typeof client.stats)[':scope']['accuracy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsScopeAccuracyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsScopeAccuracyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats[':scope'].accuracy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsScopeStpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stats)[':scope']['stp']['$get']>>,
) {
  return ['stats', '/stats/:scope/stp', toValue(args)] as const
}

export function getStatsScopeStpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stats)[':scope']['stp']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsScopeStpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats[':scope'].stp.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatsScopeStp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stats)[':scope']['stp']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stats)[':scope']['stp']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stats)[':scope']['stp']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stats)[':scope']['stp']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStatsScopeStpQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.stats)[':scope']['stp']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsScopeStpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsScopeStpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats[':scope'].stp.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStyleCustomCssQueryKey() {
  return ['style', '/style/custom.css'] as const
}

export function getStyleCustomCssQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStyleCustomCssQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.style['custom.css'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStyleCustomCss<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.style)['custom.css']['$get']>>>
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
              typeof parseResponse<Awaited<ReturnType<(typeof client.style)['custom.css']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.style)['custom.css']['$get']>>>
            >
          >,
          ReturnType<typeof getStyleCustomCssQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.style)['custom.css']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStyleCustomCssQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStyleCustomCssQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.style['custom.css'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostStyleCustomCss<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStyleCustomCssMutationOptions<TError, TOnMutateResult>(
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

export function getStyleLogoPngQueryKey() {
  return ['style', '/style/logo.png'] as const
}

export function getStyleLogoPngQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStyleLogoPngQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.style['logo.png'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStyleLogoPng<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.style)['logo.png']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.style)['logo.png']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.style)['logo.png']['$get']>>>
            >
          >,
          ReturnType<typeof getStyleLogoPngQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.style)['logo.png']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStyleLogoPngQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStyleLogoPngQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.style['logo.png'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostStyleLogoPng<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.style)['logo.png']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.style)['logo.png']['$post']>,
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
  const mutationDefaults = getPostStyleLogoPngMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteTenant<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tenant.$delete>>>>
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
  const mutationDefaults = getDeleteTenantMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchTenantActivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tenant.activate.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.tenant.activate.$patch>,
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
  const mutationDefaults = getPatchTenantActivateMutationOptions<TError, TOnMutateResult>(
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

export function getThresholdSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.threshold_settings.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['threshold_settings', '/threshold_settings', keyArgs] as const
}

export function getThresholdSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.threshold_settings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThresholdSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.threshold_settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThresholdSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.threshold_settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.threshold_settings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.threshold_settings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.threshold_settings.$get>>>
            >
          >,
          ReturnType<typeof getThresholdSettingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.threshold_settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getThresholdSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThresholdSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.threshold_settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getThresholdSettingsScopeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.threshold_settings)[':scope']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['threshold_settings', '/threshold_settings/:scope', keyArgs] as const
}

export function getThresholdSettingsScopeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.threshold_settings)[':scope']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThresholdSettingsScopeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.threshold_settings[':scope'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThresholdSettingsScope<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.threshold_settings)[':scope']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.threshold_settings)[':scope']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.threshold_settings)[':scope']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.threshold_settings)[':scope']['$get']>>
              >
            >
          >,
          ReturnType<typeof getThresholdSettingsScopeQueryKey>
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
          Awaited<ReturnType<(typeof client.threshold_settings)[':scope']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThresholdSettingsScopeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThresholdSettingsScopeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.threshold_settings[':scope'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteThresholdSettingsScope<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteThresholdSettingsScopeMutationOptions<TError, TOnMutateResult>(
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

export function usePatchThresholdSettingsScope<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchThresholdSettingsScopeMutationOptions<TError, TOnMutateResult>(
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
  const { header: _, ...keyArgs } = toValue(args)
  return ['users', '/users', keyArgs] as const
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

export function getUsersMeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.me.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['users', '/users/me', keyArgs] as const
}

export function getUsersMeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.me.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersMeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.me.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.me.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
          >,
          ReturnType<typeof getUsersMeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersMeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.me.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUsersMeChangePassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersMeChangePasswordMutationOptions<TError, TOnMutateResult>(
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

export function getUsersUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['users', '/users/:user_id', keyArgs] as const
}

export function getUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
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
          client.users[':user_id'].$get(toValue(args), {
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

export function useDeleteUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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

export function usePatchUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['$patch']>,
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
