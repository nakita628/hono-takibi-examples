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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1SettingsPublicQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['settings.public']['$get']>>,
) {
  return ['api', '/api/v1/settings.public', toValue(args)] as const
}

export function getApiV1SettingsPublicQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['settings.public']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SettingsPublicQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['settings.public'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SettingsPublic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['settings.public']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['settings.public']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['settings.public']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['settings.public']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SettingsPublicQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['settings.public']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SettingsPublicQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SettingsPublicQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['settings.public'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SettingsOauthQueryKey() {
  return ['api', '/api/v1/settings.oauth'] as const
}

export function getApiV1SettingsOauthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1SettingsOauthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['settings.oauth'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SettingsOauth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['settings.oauth']['$get']>>>
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
                Awaited<ReturnType<(typeof client.api.v1)['settings.oauth']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['settings.oauth']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SettingsOauthQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['settings.oauth']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SettingsOauthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1SettingsOauthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['settings.oauth'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.settings.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/settings', keyArgs] as const
}

export function getApiV1SettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.settings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Settings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.settings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.$get>>>
            >
          >,
          ReturnType<typeof getApiV1SettingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1SettingsMutationKey() {
  return ['api', '/api/v1/settings', 'POST'] as const
}

export function getPostApiV1SettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.settings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.settings.$post>) {
      return parseResponse(client.api.v1.settings.$post(args, options))
    },
  })
}

export function usePostApiV1Settings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.settings.$post>,
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
  const mutationDefaults = getPostApiV1SettingsMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1SettingsAddCustomOAuthMutationKey() {
  return ['api', '/api/v1/settings.addCustomOAuth', 'POST'] as const
}

export function getPostApiV1SettingsAddCustomOAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['settings.addCustomOAuth']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['settings.addCustomOAuth']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SettingsAddCustomOAuthMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['settings.addCustomOAuth']['$post']>,
    ) {
      return parseResponse(client.api.v1['settings.addCustomOAuth'].$post(args, options))
    },
  })
}

export function usePostApiV1SettingsAddCustomOAuth<
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
                Awaited<ReturnType<(typeof client.api.v1)['settings.addCustomOAuth']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['settings.addCustomOAuth']['$post']>,
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
  const mutationDefaults = getPostApiV1SettingsAddCustomOAuthMutationOptions<
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

export function getPostApiV1SettingsRemoveCustomOAuthMutationKey() {
  return ['api', '/api/v1/settings.removeCustomOAuth', 'POST'] as const
}

export function getPostApiV1SettingsRemoveCustomOAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['settings.removeCustomOAuth']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['settings.removeCustomOAuth']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SettingsRemoveCustomOAuthMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['settings.removeCustomOAuth']['$post']>,
    ) {
      return parseResponse(client.api.v1['settings.removeCustomOAuth'].$post(args, options))
    },
  })
}

export function usePostApiV1SettingsRemoveCustomOAuth<
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
                Awaited<ReturnType<(typeof client.api.v1)['settings.removeCustomOAuth']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['settings.removeCustomOAuth']['$post']>,
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
  const mutationDefaults = getPostApiV1SettingsRemoveCustomOAuthMutationOptions<
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

export function getPostApiV1SettingsRefreshOAuthServicesMutationKey() {
  return ['api', '/api/v1/settings.refreshOAuthServices', 'POST'] as const
}

export function getPostApiV1SettingsRefreshOAuthServicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['settings.refreshOAuthServices']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['settings.refreshOAuthServices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SettingsRefreshOAuthServicesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['settings.refreshOAuthServices']['$post']>,
    ) {
      return parseResponse(client.api.v1['settings.refreshOAuthServices'].$post(args, options))
    },
  })
}

export function usePostApiV1SettingsRefreshOAuthServices<
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
                  ReturnType<(typeof client.api.v1)['settings.refreshOAuthServices']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['settings.refreshOAuthServices']['$post']>,
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
  const mutationDefaults = getPostApiV1SettingsRefreshOAuthServicesMutationOptions<
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

export function getApiV1SettingsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.settings)[':_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/settings/:_id', keyArgs] as const
}

export function getApiV1SettingsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.settings)[':_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SettingsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.settings[':_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SettingsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.settings)[':_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.settings)[':_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.settings)[':_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.settings)[':_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SettingsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.settings)[':_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SettingsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SettingsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.settings[':_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1SettingsIdMutationKey() {
  return ['api', '/api/v1/settings/:_id', 'POST'] as const
}

export function getPostApiV1SettingsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.settings)[':_id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.settings)[':_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SettingsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.settings)[':_id']['$post']>) {
      return parseResponse(client.api.v1.settings[':_id'].$post(args, options))
    },
  })
}

export function usePostApiV1SettingsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.settings)[':_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.settings)[':_id']['$post']>,
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
  const mutationDefaults = getPostApiV1SettingsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1SetupWizardParametersQueryKey() {
  return ['api', '/api/v1/setupWizard.parameters'] as const
}

export function getApiV1SetupWizardParametersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1SetupWizardParametersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['setupWizard.parameters'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SetupWizardParameters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['setupWizard.parameters']['$get']>>
      >
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
                Awaited<ReturnType<(typeof client.api.v1)['setupWizard.parameters']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['setupWizard.parameters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SetupWizardParametersQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['setupWizard.parameters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SetupWizardParametersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1SetupWizardParametersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['setupWizard.parameters'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ServiceConfigurationsQueryKey() {
  return ['api', '/api/v1/service.configurations'] as const
}

export function getApiV1ServiceConfigurationsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ServiceConfigurationsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['service.configurations'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ServiceConfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['service.configurations']['$get']>>
      >
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
                Awaited<ReturnType<(typeof client.api.v1)['service.configurations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['service.configurations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ServiceConfigurationsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['service.configurations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ServiceConfigurationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ServiceConfigurationsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['service.configurations'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1CloudConnectWorkspaceMutationKey() {
  return ['api', '/api/v1/cloud.connectWorkspace', 'POST'] as const
}

export function getPostApiV1CloudConnectWorkspaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['cloud.connectWorkspace']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['cloud.connectWorkspace']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CloudConnectWorkspaceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['cloud.connectWorkspace']['$post']>,
    ) {
      return parseResponse(client.api.v1['cloud.connectWorkspace'].$post(args, options))
    },
  })
}

export function usePostApiV1CloudConnectWorkspace<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['cloud.connectWorkspace']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['cloud.connectWorkspace']['$post']>,
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
  const mutationDefaults = getPostApiV1CloudConnectWorkspaceMutationOptions<
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

export function getPostApiV1CloudManualRegisterMutationKey() {
  return ['api', '/api/v1/cloud.manualRegister', 'POST'] as const
}

export function getPostApiV1CloudManualRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['cloud.manualRegister']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['cloud.manualRegister']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CloudManualRegisterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['cloud.manualRegister']['$post']>,
    ) {
      return parseResponse(client.api.v1['cloud.manualRegister'].$post(args, options))
    },
  })
}

export function usePostApiV1CloudManualRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['cloud.manualRegister']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['cloud.manualRegister']['$post']>,
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
  const mutationDefaults = getPostApiV1CloudManualRegisterMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CloudRegistrationStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['cloud.registrationStatus']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/cloud.registrationStatus', keyArgs] as const
}

export function getApiV1CloudRegistrationStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['cloud.registrationStatus']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CloudRegistrationStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['cloud.registrationStatus'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CloudRegistrationStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['cloud.registrationStatus']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['cloud.registrationStatus']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['cloud.registrationStatus']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['cloud.registrationStatus']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CloudRegistrationStatusQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['cloud.registrationStatus']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CloudRegistrationStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CloudRegistrationStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['cloud.registrationStatus'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CloudWorkspaceRegisterDataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['cloud.workspaceRegisterData']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/cloud.workspaceRegisterData', keyArgs] as const
}

export function getApiV1CloudWorkspaceRegisterDataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['cloud.workspaceRegisterData']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CloudWorkspaceRegisterDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['cloud.workspaceRegisterData'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CloudWorkspaceRegisterData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['cloud.workspaceRegisterData']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['cloud.workspaceRegisterData']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['cloud.workspaceRegisterData']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['cloud.workspaceRegisterData']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CloudWorkspaceRegisterDataQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['cloud.workspaceRegisterData']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CloudWorkspaceRegisterDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CloudWorkspaceRegisterDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['cloud.workspaceRegisterData'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1DnsResolveTxtMutationKey() {
  return ['api', '/api/v1/dns.resolve.txt', 'POST'] as const
}

export function getPostApiV1DnsResolveTxtMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['dns.resolve.txt']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['dns.resolve.txt']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DnsResolveTxtMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['dns.resolve.txt']['$post']>) {
      return parseResponse(client.api.v1['dns.resolve.txt'].$post(args, options))
    },
  })
}

export function usePostApiV1DnsResolveTxt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['dns.resolve.txt']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['dns.resolve.txt']['$post']>,
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
  const mutationDefaults = getPostApiV1DnsResolveTxtMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1DnsResolveSrvMutationKey() {
  return ['api', '/api/v1/dns.resolve.srv', 'POST'] as const
}

export function getPostApiV1DnsResolveSrvMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['dns.resolve.srv']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['dns.resolve.srv']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DnsResolveSrvMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['dns.resolve.srv']['$post']>) {
      return parseResponse(client.api.v1['dns.resolve.srv'].$post(args, options))
    },
  })
}

export function usePostApiV1DnsResolveSrv<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['dns.resolve.srv']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['dns.resolve.srv']['$post']>,
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
  const mutationDefaults = getPostApiV1DnsResolveSrvMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1E2eFetchMyKeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['e2e.fetchMyKeys']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/e2e.fetchMyKeys', keyArgs] as const
}

export function getApiV1E2eFetchMyKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['e2e.fetchMyKeys']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1E2eFetchMyKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['e2e.fetchMyKeys'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1E2eFetchMyKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['e2e.fetchMyKeys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['e2e.fetchMyKeys']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['e2e.fetchMyKeys']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['e2e.fetchMyKeys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1E2eFetchMyKeysQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['e2e.fetchMyKeys']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1E2eFetchMyKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1E2eFetchMyKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['e2e.fetchMyKeys'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1E2eGetUsersOfRoomWithoutKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['e2e.getUsersOfRoomWithoutKey']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/e2e.getUsersOfRoomWithoutKey', keyArgs] as const
}

export function getApiV1E2eGetUsersOfRoomWithoutKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['e2e.getUsersOfRoomWithoutKey']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1E2eGetUsersOfRoomWithoutKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['e2e.getUsersOfRoomWithoutKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1E2eGetUsersOfRoomWithoutKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['e2e.getUsersOfRoomWithoutKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['e2e.getUsersOfRoomWithoutKey']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['e2e.getUsersOfRoomWithoutKey']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['e2e.getUsersOfRoomWithoutKey']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1E2eGetUsersOfRoomWithoutKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['e2e.getUsersOfRoomWithoutKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1E2eGetUsersOfRoomWithoutKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1E2eGetUsersOfRoomWithoutKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['e2e.getUsersOfRoomWithoutKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1E2eSetRoomKeyIDMutationKey() {
  return ['api', '/api/v1/e2e.setRoomKeyID', 'POST'] as const
}

export function getPostApiV1E2eSetRoomKeyIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['e2e.setRoomKeyID']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['e2e.setRoomKeyID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1E2eSetRoomKeyIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['e2e.setRoomKeyID']['$post']>) {
      return parseResponse(client.api.v1['e2e.setRoomKeyID'].$post(args, options))
    },
  })
}

export function usePostApiV1E2eSetRoomKeyID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['e2e.setRoomKeyID']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['e2e.setRoomKeyID']['$post']>,
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
  const mutationDefaults = getPostApiV1E2eSetRoomKeyIDMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1E2eSetUserPublicAndPrivateKeysMutationKey() {
  return ['api', '/api/v1/e2e.setUserPublicAndPrivateKeys', 'POST'] as const
}

export function getPostApiV1E2eSetUserPublicAndPrivateKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['e2e.setUserPublicAndPrivateKeys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['e2e.setUserPublicAndPrivateKeys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1E2eSetUserPublicAndPrivateKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['e2e.setUserPublicAndPrivateKeys']['$post']>,
    ) {
      return parseResponse(client.api.v1['e2e.setUserPublicAndPrivateKeys'].$post(args, options))
    },
  })
}

export function usePostApiV1E2eSetUserPublicAndPrivateKeys<
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
                  ReturnType<(typeof client.api.v1)['e2e.setUserPublicAndPrivateKeys']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['e2e.setUserPublicAndPrivateKeys']['$post']>,
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
  const mutationDefaults = getPostApiV1E2eSetUserPublicAndPrivateKeysMutationOptions<
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

export function getPostApiV1E2eUpdateGroupKeyMutationKey() {
  return ['api', '/api/v1/e2e.updateGroupKey', 'POST'] as const
}

export function getPostApiV1E2eUpdateGroupKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['e2e.updateGroupKey']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['e2e.updateGroupKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1E2eUpdateGroupKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['e2e.updateGroupKey']['$post']>,
    ) {
      return parseResponse(client.api.v1['e2e.updateGroupKey'].$post(args, options))
    },
  })
}

export function usePostApiV1E2eUpdateGroupKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['e2e.updateGroupKey']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['e2e.updateGroupKey']['$post']>,
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
  const mutationDefaults = getPostApiV1E2eUpdateGroupKeyMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1E2eRequestSubscriptionKeysMutationKey() {
  return ['api', '/api/v1/e2e.requestSubscriptionKeys', 'POST'] as const
}

export function getPostApiV1E2eRequestSubscriptionKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['e2e.requestSubscriptionKeys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['e2e.requestSubscriptionKeys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1E2eRequestSubscriptionKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['e2e.requestSubscriptionKeys']['$post']>,
    ) {
      return parseResponse(client.api.v1['e2e.requestSubscriptionKeys'].$post(args, options))
    },
  })
}

export function usePostApiV1E2eRequestSubscriptionKeys<
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
                Awaited<ReturnType<(typeof client.api.v1)['e2e.requestSubscriptionKeys']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['e2e.requestSubscriptionKeys']['$post']>,
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
  const mutationDefaults = getPostApiV1E2eRequestSubscriptionKeysMutationOptions<
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

export function getPostApiV1E2eAcceptSuggestedGroupKeyMutationKey() {
  return ['api', '/api/v1/e2e.acceptSuggestedGroupKey', 'POST'] as const
}

export function getPostApiV1E2eAcceptSuggestedGroupKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['e2e.acceptSuggestedGroupKey']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['e2e.acceptSuggestedGroupKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1E2eAcceptSuggestedGroupKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['e2e.acceptSuggestedGroupKey']['$post']>,
    ) {
      return parseResponse(client.api.v1['e2e.acceptSuggestedGroupKey'].$post(args, options))
    },
  })
}

export function usePostApiV1E2eAcceptSuggestedGroupKey<
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
                Awaited<ReturnType<(typeof client.api.v1)['e2e.acceptSuggestedGroupKey']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['e2e.acceptSuggestedGroupKey']['$post']>,
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
  const mutationDefaults = getPostApiV1E2eAcceptSuggestedGroupKeyMutationOptions<
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

export function getPostApiV1E2eRejectSuggestedGroupKeyMutationKey() {
  return ['api', '/api/v1/e2e.rejectSuggestedGroupKey', 'POST'] as const
}

export function getPostApiV1E2eRejectSuggestedGroupKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['e2e.rejectSuggestedGroupKey']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['e2e.rejectSuggestedGroupKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1E2eRejectSuggestedGroupKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['e2e.rejectSuggestedGroupKey']['$post']>,
    ) {
      return parseResponse(client.api.v1['e2e.rejectSuggestedGroupKey'].$post(args, options))
    },
  })
}

export function usePostApiV1E2eRejectSuggestedGroupKey<
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
                Awaited<ReturnType<(typeof client.api.v1)['e2e.rejectSuggestedGroupKey']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['e2e.rejectSuggestedGroupKey']['$post']>,
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
  const mutationDefaults = getPostApiV1E2eRejectSuggestedGroupKeyMutationOptions<
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

export function getApiV1E2eFetchUsersWaitingForGroupKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['e2e.fetchUsersWaitingForGroupKey']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/e2e.fetchUsersWaitingForGroupKey', keyArgs] as const
}

export function getApiV1E2eFetchUsersWaitingForGroupKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['e2e.fetchUsersWaitingForGroupKey']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1E2eFetchUsersWaitingForGroupKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['e2e.fetchUsersWaitingForGroupKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1E2eFetchUsersWaitingForGroupKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['e2e.fetchUsersWaitingForGroupKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['e2e.fetchUsersWaitingForGroupKey']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1)['e2e.fetchUsersWaitingForGroupKey']['$get']>
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
                  ReturnType<(typeof client.api.v1)['e2e.fetchUsersWaitingForGroupKey']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1E2eFetchUsersWaitingForGroupKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['e2e.fetchUsersWaitingForGroupKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1E2eFetchUsersWaitingForGroupKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1E2eFetchUsersWaitingForGroupKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['e2e.fetchUsersWaitingForGroupKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1E2eProvideUsersSuggestedGroupKeysMutationKey() {
  return ['api', '/api/v1/e2e.provideUsersSuggestedGroupKeys', 'POST'] as const
}

export function getPostApiV1E2eProvideUsersSuggestedGroupKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['e2e.provideUsersSuggestedGroupKeys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['e2e.provideUsersSuggestedGroupKeys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1E2eProvideUsersSuggestedGroupKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['e2e.provideUsersSuggestedGroupKeys']['$post']>,
    ) {
      return parseResponse(client.api.v1['e2e.provideUsersSuggestedGroupKeys'].$post(args, options))
    },
  })
}

export function usePostApiV1E2eProvideUsersSuggestedGroupKeys<
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
                  ReturnType<(typeof client.api.v1)['e2e.provideUsersSuggestedGroupKeys']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['e2e.provideUsersSuggestedGroupKeys']['$post']>,
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
  const mutationDefaults = getPostApiV1E2eProvideUsersSuggestedGroupKeysMutationOptions<
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

export function getPostApiV1E2eResetRoomKeyMutationKey() {
  return ['api', '/api/v1/e2e.resetRoomKey', 'POST'] as const
}

export function getPostApiV1E2eResetRoomKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['e2e.resetRoomKey']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['e2e.resetRoomKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1E2eResetRoomKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['e2e.resetRoomKey']['$post']>) {
      return parseResponse(client.api.v1['e2e.resetRoomKey'].$post(args, options))
    },
  })
}

export function usePostApiV1E2eResetRoomKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['e2e.resetRoomKey']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['e2e.resetRoomKey']['$post']>,
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
  const mutationDefaults = getPostApiV1E2eResetRoomKeyMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1UploadImportFileMutationKey() {
  return ['api', '/api/v1/uploadImportFile', 'POST'] as const
}

export function getPostApiV1UploadImportFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.uploadImportFile.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.uploadImportFile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UploadImportFileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.uploadImportFile.$post>) {
      return parseResponse(client.api.v1.uploadImportFile.$post(args, options))
    },
  })
}

export function usePostApiV1UploadImportFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.uploadImportFile.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.uploadImportFile.$post>,
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
  const mutationDefaults = getPostApiV1UploadImportFileMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1DownloadPublicImportFileMutationKey() {
  return ['api', '/api/v1/downloadPublicImportFile', 'POST'] as const
}

export function getPostApiV1DownloadPublicImportFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.downloadPublicImportFile.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.downloadPublicImportFile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DownloadPublicImportFileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.downloadPublicImportFile.$post>) {
      return parseResponse(client.api.v1.downloadPublicImportFile.$post(args, options))
    },
  })
}

export function usePostApiV1DownloadPublicImportFile<
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
                Awaited<ReturnType<typeof client.api.v1.downloadPublicImportFile.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.downloadPublicImportFile.$post>,
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
  const mutationDefaults = getPostApiV1DownloadPublicImportFileMutationOptions<
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

export function getPostApiV1StartImportMutationKey() {
  return ['api', '/api/v1/startImport', 'POST'] as const
}

export function getPostApiV1StartImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.startImport.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.startImport.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1StartImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.startImport.$post>) {
      return parseResponse(client.api.v1.startImport.$post(args, options))
    },
  })
}

export function usePostApiV1StartImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.startImport.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.startImport.$post>,
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
  const mutationDefaults = getPostApiV1StartImportMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1GetImportFileDataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.getImportFileData.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/getImportFileData', keyArgs] as const
}

export function getApiV1GetImportFileDataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.getImportFileData.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1GetImportFileDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.getImportFileData.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1GetImportFileData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.getImportFileData.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.getImportFileData.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.getImportFileData.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.getImportFileData.$get>>>
            >
          >,
          ReturnType<typeof getApiV1GetImportFileDataQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.getImportFileData.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GetImportFileDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1GetImportFileDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.getImportFileData.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1GetImportProgressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.getImportProgress.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/getImportProgress', keyArgs] as const
}

export function getApiV1GetImportProgressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.getImportProgress.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1GetImportProgressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.getImportProgress.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1GetImportProgress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.getImportProgress.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.getImportProgress.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.getImportProgress.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.getImportProgress.$get>>>
            >
          >,
          ReturnType<typeof getApiV1GetImportProgressQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.getImportProgress.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GetImportProgressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1GetImportProgressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.getImportProgress.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1GetLatestImportOperationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.getLatestImportOperations.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/getLatestImportOperations', keyArgs] as const
}

export function getApiV1GetLatestImportOperationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.getLatestImportOperations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1GetLatestImportOperationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.getLatestImportOperations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1GetLatestImportOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.getLatestImportOperations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.getLatestImportOperations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.getLatestImportOperations.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.getLatestImportOperations.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1GetLatestImportOperationsQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.getLatestImportOperations.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GetLatestImportOperationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1GetLatestImportOperationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.getLatestImportOperations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1DownloadPendingFilesMutationKey() {
  return ['api', '/api/v1/downloadPendingFiles', 'POST'] as const
}

export function getPostApiV1DownloadPendingFilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadPendingFiles.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.downloadPendingFiles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DownloadPendingFilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.downloadPendingFiles.$post>) {
      return parseResponse(client.api.v1.downloadPendingFiles.$post(args, options))
    },
  })
}

export function usePostApiV1DownloadPendingFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.downloadPendingFiles.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.downloadPendingFiles.$post>,
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
  const mutationDefaults = getPostApiV1DownloadPendingFilesMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1DownloadPendingAvatarsMutationKey() {
  return ['api', '/api/v1/downloadPendingAvatars', 'POST'] as const
}

export function getPostApiV1DownloadPendingAvatarsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadPendingAvatars.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.downloadPendingAvatars.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DownloadPendingAvatarsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.downloadPendingAvatars.$post>) {
      return parseResponse(client.api.v1.downloadPendingAvatars.$post(args, options))
    },
  })
}

export function usePostApiV1DownloadPendingAvatars<
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
                Awaited<ReturnType<typeof client.api.v1.downloadPendingAvatars.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.downloadPendingAvatars.$post>,
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
  const mutationDefaults = getPostApiV1DownloadPendingAvatarsMutationOptions<
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

export function getApiV1GetCurrentImportOperationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.getCurrentImportOperation.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/getCurrentImportOperation', keyArgs] as const
}

export function getApiV1GetCurrentImportOperationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.getCurrentImportOperation.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1GetCurrentImportOperationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.getCurrentImportOperation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1GetCurrentImportOperation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.getCurrentImportOperation.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.getCurrentImportOperation.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.getCurrentImportOperation.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.getCurrentImportOperation.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1GetCurrentImportOperationQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.getCurrentImportOperation.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GetCurrentImportOperationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1GetCurrentImportOperationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.getCurrentImportOperation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ImportersListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['importers.list']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/importers.list', keyArgs] as const
}

export function getApiV1ImportersListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['importers.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ImportersListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['importers.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ImportersList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['importers.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['importers.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['importers.list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['importers.list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ImportersListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['importers.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ImportersListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ImportersListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['importers.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ImportNewMutationKey() {
  return ['api', '/api/v1/import.new', 'POST'] as const
}

export function getPostApiV1ImportNewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['import.new']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['import.new']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ImportNewMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['import.new']['$post']>) {
      return parseResponse(client.api.v1['import.new'].$post(args, options))
    },
  })
}

export function usePostApiV1ImportNew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['import.new']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['import.new']['$post']>,
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
  const mutationDefaults = getPostApiV1ImportNewMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ImportAddUsersMutationKey() {
  return ['api', '/api/v1/import.addUsers', 'POST'] as const
}

export function getPostApiV1ImportAddUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['import.addUsers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['import.addUsers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ImportAddUsersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['import.addUsers']['$post']>) {
      return parseResponse(client.api.v1['import.addUsers'].$post(args, options))
    },
  })
}

export function usePostApiV1ImportAddUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['import.addUsers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['import.addUsers']['$post']>,
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
  const mutationDefaults = getPostApiV1ImportAddUsersMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ImportRunMutationKey() {
  return ['api', '/api/v1/import.run', 'POST'] as const
}

export function getPostApiV1ImportRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['import.run']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['import.run']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ImportRunMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['import.run']['$post']>) {
      return parseResponse(client.api.v1['import.run'].$post(args, options))
    },
  })
}

export function usePostApiV1ImportRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['import.run']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['import.run']['$post']>,
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
  const mutationDefaults = getPostApiV1ImportRunMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ImportStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['import.status']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/import.status', keyArgs] as const
}

export function getApiV1ImportStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['import.status']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ImportStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['import.status'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ImportStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['import.status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['import.status']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['import.status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['import.status']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ImportStatusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['import.status']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ImportStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ImportStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['import.status'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ImportClearMutationKey() {
  return ['api', '/api/v1/import.clear', 'POST'] as const
}

export function getPostApiV1ImportClearMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['import.clear']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['import.clear']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ImportClearMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['import.clear']['$post']>) {
      return parseResponse(client.api.v1['import.clear'].$post(args, options))
    },
  })
}

export function usePostApiV1ImportClear<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['import.clear']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['import.clear']['$post']>,
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
  const mutationDefaults = getPostApiV1ImportClearMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1InstancesGetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['instances.get']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/instances.get', keyArgs] as const
}

export function getApiV1InstancesGetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['instances.get']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1InstancesGetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['instances.get'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1InstancesGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['instances.get']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['instances.get']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['instances.get']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['instances.get']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1InstancesGetQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['instances.get']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1InstancesGetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1InstancesGetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['instances.get'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ModerationReportsByUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['moderation.reportsByUsers']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/moderation.reportsByUsers', keyArgs] as const
}

export function getApiV1ModerationReportsByUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['moderation.reportsByUsers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ModerationReportsByUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['moderation.reportsByUsers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ModerationReportsByUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['moderation.reportsByUsers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['moderation.reportsByUsers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['moderation.reportsByUsers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['moderation.reportsByUsers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ModerationReportsByUsersQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['moderation.reportsByUsers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ModerationReportsByUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ModerationReportsByUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['moderation.reportsByUsers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ModerationUserReportedMessagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['moderation.user.reportedMessages']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/moderation.user.reportedMessages', keyArgs] as const
}

export function getApiV1ModerationUserReportedMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['moderation.user.reportedMessages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ModerationUserReportedMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['moderation.user.reportedMessages'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ModerationUserReportedMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['moderation.user.reportedMessages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['moderation.user.reportedMessages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1)['moderation.user.reportedMessages']['$get']>
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
                  ReturnType<(typeof client.api.v1)['moderation.user.reportedMessages']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1ModerationUserReportedMessagesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['moderation.user.reportedMessages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ModerationUserReportedMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ModerationUserReportedMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['moderation.user.reportedMessages'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ModerationReportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['moderation.reports']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/moderation.reports', keyArgs] as const
}

export function getApiV1ModerationReportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['moderation.reports']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ModerationReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['moderation.reports'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ModerationReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['moderation.reports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['moderation.reports']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['moderation.reports']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['moderation.reports']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ModerationReportsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['moderation.reports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ModerationReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ModerationReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['moderation.reports'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ModerationReportInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['moderation.reportInfo']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/moderation.reportInfo', keyArgs] as const
}

export function getApiV1ModerationReportInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['moderation.reportInfo']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ModerationReportInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['moderation.reportInfo'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ModerationReportInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['moderation.reportInfo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['moderation.reportInfo']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['moderation.reportInfo']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['moderation.reportInfo']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ModerationReportInfoQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['moderation.reportInfo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ModerationReportInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ModerationReportInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['moderation.reportInfo'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ModerationDismissReportsMutationKey() {
  return ['api', '/api/v1/moderation.dismissReports', 'POST'] as const
}

export function getPostApiV1ModerationDismissReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['moderation.dismissReports']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['moderation.dismissReports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ModerationDismissReportsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['moderation.dismissReports']['$post']>,
    ) {
      return parseResponse(client.api.v1['moderation.dismissReports'].$post(args, options))
    },
  })
}

export function usePostApiV1ModerationDismissReports<
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
                Awaited<ReturnType<(typeof client.api.v1)['moderation.dismissReports']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['moderation.dismissReports']['$post']>,
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
  const mutationDefaults = getPostApiV1ModerationDismissReportsMutationOptions<
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

export function getPostApiV1ModerationUserDeleteReportedMessagesMutationKey() {
  return ['api', '/api/v1/moderation.user.deleteReportedMessages', 'POST'] as const
}

export function getPostApiV1ModerationUserDeleteReportedMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1)['moderation.user.deleteReportedMessages']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['moderation.user.deleteReportedMessages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ModerationUserDeleteReportedMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['moderation.user.deleteReportedMessages']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['moderation.user.deleteReportedMessages'].$post(args, options),
      )
    },
  })
}

export function usePostApiV1ModerationUserDeleteReportedMessages<
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
                    (typeof client.api.v1)['moderation.user.deleteReportedMessages']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1)['moderation.user.deleteReportedMessages']['$post']
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
  const mutationDefaults = getPostApiV1ModerationUserDeleteReportedMessagesMutationOptions<
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

export function getPostApiV1ModerationDismissUserReportsMutationKey() {
  return ['api', '/api/v1/moderation.dismissUserReports', 'POST'] as const
}

export function getPostApiV1ModerationDismissUserReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['moderation.dismissUserReports']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['moderation.dismissUserReports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ModerationDismissUserReportsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['moderation.dismissUserReports']['$post']>,
    ) {
      return parseResponse(client.api.v1['moderation.dismissUserReports'].$post(args, options))
    },
  })
}

export function usePostApiV1ModerationDismissUserReports<
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
                  ReturnType<(typeof client.api.v1)['moderation.dismissUserReports']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['moderation.dismissUserReports']['$post']>,
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
  const mutationDefaults = getPostApiV1ModerationDismissUserReportsMutationOptions<
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

export function getApiV1ModerationUserReportsByUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['moderation.user.reportsByUserId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/moderation.user.reportsByUserId', keyArgs] as const
}

export function getApiV1ModerationUserReportsByUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['moderation.user.reportsByUserId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ModerationUserReportsByUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['moderation.user.reportsByUserId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ModerationUserReportsByUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['moderation.user.reportsByUserId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['moderation.user.reportsByUserId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1)['moderation.user.reportsByUserId']['$get']>
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
                  ReturnType<(typeof client.api.v1)['moderation.user.reportsByUserId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1ModerationUserReportsByUserIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['moderation.user.reportsByUserId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ModerationUserReportsByUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ModerationUserReportsByUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['moderation.user.reportsByUserId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ModerationUserReportsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['moderation.userReports']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/moderation.userReports', keyArgs] as const
}

export function getApiV1ModerationUserReportsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['moderation.userReports']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ModerationUserReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['moderation.userReports'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ModerationUserReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['moderation.userReports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['moderation.userReports']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['moderation.userReports']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['moderation.userReports']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ModerationUserReportsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['moderation.userReports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ModerationUserReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ModerationUserReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['moderation.userReports'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SessionsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.sessions.list.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/sessions/list', keyArgs] as const
}

export function getApiV1SessionsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.sessions.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SessionsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.sessions.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SessionsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sessions.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.sessions.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sessions.list.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sessions.list.$get>>>
            >
          >,
          ReturnType<typeof getApiV1SessionsListQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sessions.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SessionsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SessionsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.sessions.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SessionsListAllQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.sessions)['list.all']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/sessions/list.all', keyArgs] as const
}

export function getApiV1SessionsListAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.sessions)['list.all']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SessionsListAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.sessions['list.all'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SessionsListAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.sessions)['list.all']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.sessions)['list.all']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.sessions)['list.all']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.sessions)['list.all']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SessionsListAllQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.sessions)['list.all']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SessionsListAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SessionsListAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.sessions['list.all'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SessionsInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.sessions.info.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/sessions/info', keyArgs] as const
}

export function getApiV1SessionsInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.sessions.info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SessionsInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.sessions.info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SessionsInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sessions.info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.sessions.info.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sessions.info.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sessions.info.$get>>>
            >
          >,
          ReturnType<typeof getApiV1SessionsInfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sessions.info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SessionsInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SessionsInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.sessions.info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SessionsInfoAdminQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.sessions)['info.admin']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/sessions/info.admin', keyArgs] as const
}

export function getApiV1SessionsInfoAdminQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.sessions)['info.admin']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SessionsInfoAdminQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.sessions['info.admin'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SessionsInfoAdmin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.sessions)['info.admin']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.sessions)['info.admin']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.sessions)['info.admin']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.sessions)['info.admin']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SessionsInfoAdminQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.sessions)['info.admin']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SessionsInfoAdminQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SessionsInfoAdminQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.sessions['info.admin'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1SessionsLogoutMeMutationKey() {
  return ['api', '/api/v1/sessions/logout.me', 'POST'] as const
}

export function getPostApiV1SessionsLogoutMeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.sessions)['logout.me']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.sessions)['logout.me']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SessionsLogoutMeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.sessions)['logout.me']['$post']>,
    ) {
      return parseResponse(client.api.v1.sessions['logout.me'].$post(args, options))
    },
  })
}

export function usePostApiV1SessionsLogoutMe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.sessions)['logout.me']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.sessions)['logout.me']['$post']>,
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
  const mutationDefaults = getPostApiV1SessionsLogoutMeMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1SessionsLogoutMutationKey() {
  return ['api', '/api/v1/sessions/logout', 'POST'] as const
}

export function getPostApiV1SessionsLogoutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sessions.logout.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.sessions.logout.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SessionsLogoutMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.sessions.logout.$post>) {
      return parseResponse(client.api.v1.sessions.logout.$post(args, options))
    },
  })
}

export function usePostApiV1SessionsLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sessions.logout.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.sessions.logout.$post>,
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
  const mutationDefaults = getPostApiV1SessionsLogoutMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1PwGetPolicyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['pw.getPolicy']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/pw.getPolicy', keyArgs] as const
}

export function getApiV1PwGetPolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['pw.getPolicy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PwGetPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['pw.getPolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PwGetPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['pw.getPolicy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['pw.getPolicy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['pw.getPolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['pw.getPolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1PwGetPolicyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['pw.getPolicy']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PwGetPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PwGetPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['pw.getPolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1VideoConferenceCapabilitiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['video-conference.capabilities']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/video-conference.capabilities', keyArgs] as const
}

export function getApiV1VideoConferenceCapabilitiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['video-conference.capabilities']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VideoConferenceCapabilitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['video-conference.capabilities'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VideoConferenceCapabilities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['video-conference.capabilities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['video-conference.capabilities']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['video-conference.capabilities']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['video-conference.capabilities']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1VideoConferenceCapabilitiesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['video-conference.capabilities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideoConferenceCapabilitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VideoConferenceCapabilitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['video-conference.capabilities'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1VideoConferenceListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['video-conference.list']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/video-conference.list', keyArgs] as const
}

export function getApiV1VideoConferenceListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['video-conference.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VideoConferenceListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['video-conference.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VideoConferenceList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['video-conference.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['video-conference.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['video-conference.list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['video-conference.list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1VideoConferenceListQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['video-conference.list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideoConferenceListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VideoConferenceListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['video-conference.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1VideoConferenceInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['video-conference.info']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/video-conference.info', keyArgs] as const
}

export function getApiV1VideoConferenceInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['video-conference.info']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VideoConferenceInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['video-conference.info'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VideoConferenceInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['video-conference.info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['video-conference.info']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['video-conference.info']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['video-conference.info']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1VideoConferenceInfoQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['video-conference.info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideoConferenceInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VideoConferenceInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['video-conference.info'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1VideoConferenceProvidersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['video-conference.providers']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/video-conference.providers', keyArgs] as const
}

export function getApiV1VideoConferenceProvidersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['video-conference.providers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VideoConferenceProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['video-conference.providers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VideoConferenceProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['video-conference.providers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['video-conference.providers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['video-conference.providers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['video-conference.providers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1VideoConferenceProvidersQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['video-conference.providers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideoConferenceProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VideoConferenceProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['video-conference.providers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1VideoConferenceStartMutationKey() {
  return ['api', '/api/v1/video-conference.start', 'POST'] as const
}

export function getPostApiV1VideoConferenceStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['video-conference.start']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['video-conference.start']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoConferenceStartMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['video-conference.start']['$post']>,
    ) {
      return parseResponse(client.api.v1['video-conference.start'].$post(args, options))
    },
  })
}

export function usePostApiV1VideoConferenceStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['video-conference.start']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['video-conference.start']['$post']>,
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
  const mutationDefaults = getPostApiV1VideoConferenceStartMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1VideoConferenceJoinMutationKey() {
  return ['api', '/api/v1/video-conference.join', 'POST'] as const
}

export function getPostApiV1VideoConferenceJoinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['video-conference.join']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['video-conference.join']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoConferenceJoinMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['video-conference.join']['$post']>,
    ) {
      return parseResponse(client.api.v1['video-conference.join'].$post(args, options))
    },
  })
}

export function usePostApiV1VideoConferenceJoin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['video-conference.join']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['video-conference.join']['$post']>,
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
  const mutationDefaults = getPostApiV1VideoConferenceJoinMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1VideoConferenceCancelMutationKey() {
  return ['api', '/api/v1/video-conference.cancel', 'POST'] as const
}

export function getPostApiV1VideoConferenceCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['video-conference.cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['video-conference.cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoConferenceCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['video-conference.cancel']['$post']>,
    ) {
      return parseResponse(client.api.v1['video-conference.cancel'].$post(args, options))
    },
  })
}

export function usePostApiV1VideoConferenceCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['video-conference.cancel']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['video-conference.cancel']['$post']>,
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
  const mutationDefaults = getPostApiV1VideoConferenceCancelMutationOptions<
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

export function getPostApiV1VideoConferenceDeclineMutationKey() {
  return ['api', '/api/v1/video-conference.decline', 'POST'] as const
}

export function getPostApiV1VideoConferenceDeclineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['video-conference.decline']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['video-conference.decline']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoConferenceDeclineMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['video-conference.decline']['$post']>,
    ) {
      return parseResponse(client.api.v1['video-conference.decline'].$post(args, options))
    },
  })
}

export function usePostApiV1VideoConferenceDecline<
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
                Awaited<ReturnType<(typeof client.api.v1)['video-conference.decline']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['video-conference.decline']['$post']>,
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
  const mutationDefaults = getPostApiV1VideoConferenceDeclineMutationOptions<
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

export function getPostApiV1VideoConferenceLeaveMutationKey() {
  return ['api', '/api/v1/video-conference.leave', 'POST'] as const
}

export function getPostApiV1VideoConferenceLeaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['video-conference.leave']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['video-conference.leave']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoConferenceLeaveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['video-conference.leave']['$post']>,
    ) {
      return parseResponse(client.api.v1['video-conference.leave'].$post(args, options))
    },
  })
}

export function usePostApiV1VideoConferenceLeave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['video-conference.leave']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['video-conference.leave']['$post']>,
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
  const mutationDefaults = getPostApiV1VideoConferenceLeaveMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1VideoConferenceHeartbeatMutationKey() {
  return ['api', '/api/v1/video-conference.heartbeat', 'POST'] as const
}

export function getPostApiV1VideoConferenceHeartbeatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['video-conference.heartbeat']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['video-conference.heartbeat']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoConferenceHeartbeatMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['video-conference.heartbeat']['$post']>,
    ) {
      return parseResponse(client.api.v1['video-conference.heartbeat'].$post(args, options))
    },
  })
}

export function usePostApiV1VideoConferenceHeartbeat<
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
                Awaited<ReturnType<(typeof client.api.v1)['video-conference.heartbeat']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['video-conference.heartbeat']['$post']>,
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
  const mutationDefaults = getPostApiV1VideoConferenceHeartbeatMutationOptions<
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

export function getPostApiV1VideoConferenceRingMutationKey() {
  return ['api', '/api/v1/video-conference.ring', 'POST'] as const
}

export function getPostApiV1VideoConferenceRingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['video-conference.ring']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['video-conference.ring']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoConferenceRingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['video-conference.ring']['$post']>,
    ) {
      return parseResponse(client.api.v1['video-conference.ring'].$post(args, options))
    },
  })
}

export function usePostApiV1VideoConferenceRing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['video-conference.ring']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['video-conference.ring']['$post']>,
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
  const mutationDefaults = getPostApiV1VideoConferenceRingMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1VideoConferenceAddParticipantsMutationKey() {
  return ['api', '/api/v1/video-conference.add-participants', 'POST'] as const
}

export function getPostApiV1VideoConferenceAddParticipantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['video-conference.add-participants']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['video-conference.add-participants']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoConferenceAddParticipantsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['video-conference.add-participants']['$post']>,
    ) {
      return parseResponse(client.api.v1['video-conference.add-participants'].$post(args, options))
    },
  })
}

export function usePostApiV1VideoConferenceAddParticipants<
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
                  ReturnType<(typeof client.api.v1)['video-conference.add-participants']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['video-conference.add-participants']['$post']>,
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
  const mutationDefaults = getPostApiV1VideoConferenceAddParticipantsMutationOptions<
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

export function getPostApiV1VideoConferenceRenameMutationKey() {
  return ['api', '/api/v1/video-conference.rename', 'POST'] as const
}

export function getPostApiV1VideoConferenceRenameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['video-conference.rename']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['video-conference.rename']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoConferenceRenameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['video-conference.rename']['$post']>,
    ) {
      return parseResponse(client.api.v1['video-conference.rename'].$post(args, options))
    },
  })
}

export function usePostApiV1VideoConferenceRename<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['video-conference.rename']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['video-conference.rename']['$post']>,
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
  const mutationDefaults = getPostApiV1VideoConferenceRenameMutationOptions<
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

export function getPostApiV1VideoConferenceShareChatMutationKey() {
  return ['api', '/api/v1/video-conference.share-chat', 'POST'] as const
}

export function getPostApiV1VideoConferenceShareChatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['video-conference.share-chat']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['video-conference.share-chat']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoConferenceShareChatMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['video-conference.share-chat']['$post']>,
    ) {
      return parseResponse(client.api.v1['video-conference.share-chat'].$post(args, options))
    },
  })
}

export function usePostApiV1VideoConferenceShareChat<
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
                Awaited<ReturnType<(typeof client.api.v1)['video-conference.share-chat']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['video-conference.share-chat']['$post']>,
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
  const mutationDefaults = getPostApiV1VideoConferenceShareChatMutationOptions<
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

export function getApiV1VideoConferenceJoinableQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['video-conference.joinable']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/video-conference.joinable', keyArgs] as const
}

export function getApiV1VideoConferenceJoinableQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['video-conference.joinable']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VideoConferenceJoinableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['video-conference.joinable'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VideoConferenceJoinable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['video-conference.joinable']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['video-conference.joinable']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['video-conference.joinable']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['video-conference.joinable']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1VideoConferenceJoinableQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['video-conference.joinable']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VideoConferenceJoinableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VideoConferenceJoinableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['video-conference.joinable'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MediaCallsStateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['media-calls.state']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/media-calls.state', keyArgs] as const
}

export function getApiV1MediaCallsStateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['media-calls.state']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MediaCallsStateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['media-calls.state'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MediaCallsState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['media-calls.state']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['media-calls.state']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['media-calls.state']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['media-calls.state']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1MediaCallsStateQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['media-calls.state']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MediaCallsStateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MediaCallsStateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['media-calls.state'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MediaCallsInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['media-calls.info']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/media-calls.info', keyArgs] as const
}

export function getApiV1MediaCallsInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['media-calls.info']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MediaCallsInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['media-calls.info'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MediaCallsInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['media-calls.info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['media-calls.info']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['media-calls.info']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['media-calls.info']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1MediaCallsInfoQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['media-calls.info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MediaCallsInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MediaCallsInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['media-calls.info'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AuditAuditionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['audit.auditions']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/audit.auditions', keyArgs] as const
}

export function getApiV1AuditAuditionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['audit.auditions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AuditAuditionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['audit.auditions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AuditAuditions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['audit.auditions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['audit.auditions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['audit.auditions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['audit.auditions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1AuditAuditionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['audit.auditions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AuditAuditionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AuditAuditionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['audit.auditions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1AuditMessagesMutationKey() {
  return ['api', '/api/v1/audit.messages', 'POST'] as const
}

export function getPostApiV1AuditMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['audit.messages']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['audit.messages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AuditMessagesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['audit.messages']['$post']>) {
      return parseResponse(client.api.v1['audit.messages'].$post(args, options))
    },
  })
}

export function usePostApiV1AuditMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['audit.messages']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['audit.messages']['$post']>,
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
  const mutationDefaults = getPostApiV1AuditMessagesMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1AuditOmnichannelMessagesMutationKey() {
  return ['api', '/api/v1/audit.omnichannelMessages', 'POST'] as const
}

export function getPostApiV1AuditOmnichannelMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['audit.omnichannelMessages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['audit.omnichannelMessages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AuditOmnichannelMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['audit.omnichannelMessages']['$post']>,
    ) {
      return parseResponse(client.api.v1['audit.omnichannelMessages'].$post(args, options))
    },
  })
}

export function usePostApiV1AuditOmnichannelMessages<
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
                Awaited<ReturnType<(typeof client.api.v1)['audit.omnichannelMessages']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['audit.omnichannelMessages']['$post']>,
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
  const mutationDefaults = getPostApiV1AuditOmnichannelMessagesMutationOptions<
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
