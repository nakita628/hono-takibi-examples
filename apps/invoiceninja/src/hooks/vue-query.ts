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

export function getPostApiV1LoginMutationKey() {
  return ['api', '/api/v1/login', 'POST'] as const
}

export function getPostApiV1LoginMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.login.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.login.$post>) {
      return parseResponse(client.api.v1.login.$post(args, options))
    },
  })
}

export function usePostApiV1Login<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.login.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.login.$post>,
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
  const mutationDefaults = getPostApiV1LoginMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1ActivitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.activities.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/activities', keyArgs] as const
}

export function getApiV1ActivitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.activities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ActivitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.activities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Activities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.activities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.activities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.activities.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.activities.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ActivitiesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.activities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ActivitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ActivitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.activities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ActivitiesDownloadEntityActivityIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.activities.download_entity)[':activity_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/activities/download_entity/:activity_id', keyArgs] as const
}

export function getApiV1ActivitiesDownloadEntityActivityIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.activities.download_entity)[':activity_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ActivitiesDownloadEntityActivityIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.activities.download_entity[':activity_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ActivitiesDownloadEntityActivityId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.activities.download_entity)[':activity_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.activities.download_entity)[':activity_id']['$get']>
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
                    (typeof client.api.v1.activities.download_entity)[':activity_id']['$get']
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
                    (typeof client.api.v1.activities.download_entity)[':activity_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1ActivitiesDownloadEntityActivityIdQueryKey>
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
            ReturnType<(typeof client.api.v1.activities.download_entity)[':activity_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ActivitiesDownloadEntityActivityIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ActivitiesDownloadEntityActivityIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.activities.download_entity[':activity_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ActivitiesEntityMutationKey() {
  return ['api', '/api/v1/activities/entity', 'POST'] as const
}

export function getPostApiV1ActivitiesEntityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.activities.entity.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.activities.entity.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ActivitiesEntityMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.activities.entity.$post>) {
      return parseResponse(client.api.v1.activities.entity.$post(args, options))
    },
  })
}

export function usePostApiV1ActivitiesEntity<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.activities.entity.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.activities.entity.$post>,
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
  const mutationDefaults = getPostApiV1ActivitiesEntityMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ActivitiesNotesMutationKey() {
  return ['api', '/api/v1/activities/notes', 'POST'] as const
}

export function getPostApiV1ActivitiesNotesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.activities.notes.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.activities.notes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ActivitiesNotesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.activities.notes.$post>) {
      return parseResponse(client.api.v1.activities.notes.$post(args, options))
    },
  })
}

export function usePostApiV1ActivitiesNotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.activities.notes.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.activities.notes.$post>,
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
  const mutationDefaults = getPostApiV1ActivitiesNotesMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1PasskeysLoginOptionsMutationKey() {
  return ['api', '/api/v1/passkeys/login/options', 'POST'] as const
}

export function getPostApiV1PasskeysLoginOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.passkeys.login.options.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.passkeys.login.options.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PasskeysLoginOptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.passkeys.login.options.$post>) {
      return parseResponse(client.api.v1.passkeys.login.options.$post(args, options))
    },
  })
}

export function usePostApiV1PasskeysLoginOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.passkeys.login.options.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.passkeys.login.options.$post>,
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
  const mutationDefaults = getPostApiV1PasskeysLoginOptionsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1SettingsPasskeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.settings.passkeys.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/settings/passkeys', keyArgs] as const
}

export function getApiV1SettingsPasskeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.settings.passkeys.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SettingsPasskeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.settings.passkeys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SettingsPasskeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.passkeys.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.settings.passkeys.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.passkeys.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.passkeys.$get>>>
            >
          >,
          ReturnType<typeof getApiV1SettingsPasskeysQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.passkeys.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SettingsPasskeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SettingsPasskeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.settings.passkeys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1SettingsPasskeysMutationKey() {
  return ['api', '/api/v1/settings/passkeys', 'POST'] as const
}

export function getPostApiV1SettingsPasskeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.passkeys.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.settings.passkeys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SettingsPasskeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.settings.passkeys.$post>) {
      return parseResponse(client.api.v1.settings.passkeys.$post(args, options))
    },
  })
}

export function usePostApiV1SettingsPasskeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.settings.passkeys.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.settings.passkeys.$post>,
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
  const mutationDefaults = getPostApiV1SettingsPasskeysMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1SettingsPasskeysOptionsMutationKey() {
  return ['api', '/api/v1/settings/passkeys/options', 'POST'] as const
}

export function getPostApiV1SettingsPasskeysOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.settings.passkeys.options.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.settings.passkeys.options.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SettingsPasskeysOptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.settings.passkeys.options.$post>) {
      return parseResponse(client.api.v1.settings.passkeys.options.$post(args, options))
    },
  })
}

export function usePostApiV1SettingsPasskeysOptions<
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
                Awaited<ReturnType<typeof client.api.v1.settings.passkeys.options.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.settings.passkeys.options.$post>,
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
  const mutationDefaults = getPostApiV1SettingsPasskeysOptionsMutationOptions<
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

export function getDeleteApiV1SettingsPasskeysPasskeyMutationKey() {
  return ['api', '/api/v1/settings/passkeys/:passkey', 'DELETE'] as const
}

export function getDeleteApiV1SettingsPasskeysPasskeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.settings.passkeys)[':passkey']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.settings.passkeys)[':passkey']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1SettingsPasskeysPasskeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.settings.passkeys)[':passkey']['$delete']>,
    ) {
      return parseResponse(client.api.v1.settings.passkeys[':passkey'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1SettingsPasskeysPasskey<
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
                Awaited<ReturnType<(typeof client.api.v1.settings.passkeys)[':passkey']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.settings.passkeys)[':passkey']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1SettingsPasskeysPasskeyMutationOptions<
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

export function getPostApiV1RefreshMutationKey() {
  return ['api', '/api/v1/refresh', 'POST'] as const
}

export function getPostApiV1RefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.refresh.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.refresh.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RefreshMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.refresh.$post>) {
      return parseResponse(client.api.v1.refresh.$post(args, options))
    },
  })
}

export function usePostApiV1Refresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.refresh.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.refresh.$post>,
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
  const mutationDefaults = getPostApiV1RefreshMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1YodleeRefreshMutationKey() {
  return ['api', '/api/v1/yodlee/refresh', 'POST'] as const
}

export function getPostApiV1YodleeRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.yodlee.refresh.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.yodlee.refresh.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1YodleeRefreshMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.yodlee.refresh.$post>) {
      return parseResponse(client.api.v1.yodlee.refresh.$post(args, options))
    },
  })
}

export function usePostApiV1YodleeRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.yodlee.refresh.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.yodlee.refresh.$post>,
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
  const mutationDefaults = getPostApiV1YodleeRefreshMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1BankIntegrationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.bank_integrations.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/bank_integrations', keyArgs] as const
}

export function getApiV1BankIntegrationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.bank_integrations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BankIntegrationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.bank_integrations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BankIntegrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bank_integrations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.bank_integrations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bank_integrations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bank_integrations.$get>>>
            >
          >,
          ReturnType<typeof getApiV1BankIntegrationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bank_integrations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BankIntegrationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BankIntegrationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.bank_integrations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1BankIntegrationsMutationKey() {
  return ['api', '/api/v1/bank_integrations', 'POST'] as const
}

export function getPostApiV1BankIntegrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bank_integrations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.bank_integrations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1BankIntegrationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.bank_integrations.$post>) {
      return parseResponse(client.api.v1.bank_integrations.$post(args, options))
    },
  })
}

export function usePostApiV1BankIntegrations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.bank_integrations.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.bank_integrations.$post>,
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
  const mutationDefaults = getPostApiV1BankIntegrationsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1BankIntegrationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.bank_integrations)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/bank_integrations/:id', keyArgs] as const
}

export function getApiV1BankIntegrationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.bank_integrations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BankIntegrationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.bank_integrations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BankIntegrationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.bank_integrations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.bank_integrations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.bank_integrations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.bank_integrations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1BankIntegrationsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.bank_integrations)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BankIntegrationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BankIntegrationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.bank_integrations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1BankIntegrationsIdMutationKey() {
  return ['api', '/api/v1/bank_integrations/:id', 'PUT'] as const
}

export function getPutApiV1BankIntegrationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.bank_integrations)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.bank_integrations)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1BankIntegrationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.bank_integrations)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v1.bank_integrations[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1BankIntegrationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.bank_integrations)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.bank_integrations)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1BankIntegrationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1BankIntegrationsIdMutationKey() {
  return ['api', '/api/v1/bank_integrations/:id', 'DELETE'] as const
}

export function getDeleteApiV1BankIntegrationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.bank_integrations)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.bank_integrations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1BankIntegrationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.bank_integrations)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.bank_integrations[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1BankIntegrationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.bank_integrations)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.bank_integrations)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1BankIntegrationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1BankIntegrationsIdEditQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.bank_integrations)[':id']['edit']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/bank_integrations/:id/edit', keyArgs] as const
}

export function getApiV1BankIntegrationsIdEditQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.bank_integrations)[':id']['edit']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BankIntegrationsIdEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.bank_integrations[':id'].edit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BankIntegrationsIdEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.bank_integrations)[':id']['edit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.bank_integrations)[':id']['edit']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.bank_integrations)[':id']['edit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.bank_integrations)[':id']['edit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1BankIntegrationsIdEditQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.bank_integrations)[':id']['edit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BankIntegrationsIdEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BankIntegrationsIdEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.bank_integrations[':id'].edit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BankIntegrationsCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.bank_integrations.create.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/bank_integrations/create', keyArgs] as const
}

export function getApiV1BankIntegrationsCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.bank_integrations.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BankIntegrationsCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.bank_integrations.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BankIntegrationsCreate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bank_integrations.create.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.bank_integrations.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.bank_integrations.create.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.bank_integrations.create.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1BankIntegrationsCreateQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.bank_integrations.create.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BankIntegrationsCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BankIntegrationsCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.bank_integrations.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1BankIntegrationsBulkMutationKey() {
  return ['api', '/api/v1/bank_integrations/bulk', 'POST'] as const
}

export function getPostApiV1BankIntegrationsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bank_integrations.bulk.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.bank_integrations.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1BankIntegrationsBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.bank_integrations.bulk.$post>) {
      return parseResponse(client.api.v1.bank_integrations.bulk.$post(args, options))
    },
  })
}

export function usePostApiV1BankIntegrationsBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.bank_integrations.bulk.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.bank_integrations.bulk.$post>,
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
  const mutationDefaults = getPostApiV1BankIntegrationsBulkMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1BankIntegrationsRefreshAccountsMutationKey() {
  return ['api', '/api/v1/bank_integrations/refresh_accounts', 'POST'] as const
}

export function getPostApiV1BankIntegrationsRefreshAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.bank_integrations.refresh_accounts.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.bank_integrations.refresh_accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1BankIntegrationsRefreshAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.bank_integrations.refresh_accounts.$post>,
    ) {
      return parseResponse(client.api.v1.bank_integrations.refresh_accounts.$post(args, options))
    },
  })
}

export function usePostApiV1BankIntegrationsRefreshAccounts<
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
                Awaited<ReturnType<typeof client.api.v1.bank_integrations.refresh_accounts.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.bank_integrations.refresh_accounts.$post>,
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
  const mutationDefaults = getPostApiV1BankIntegrationsRefreshAccountsMutationOptions<
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

export function getPostApiV1BankIntegrationsRemoveAccountAccountIdMutationKey() {
  return ['api', '/api/v1/bank_integrations/remove_account/account_id', 'POST'] as const
}

export function getPostApiV1BankIntegrationsRemoveAccountAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.api.v1.bank_integrations.remove_account.account_id.$post>
          >
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.bank_integrations.remove_account.account_id.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1BankIntegrationsRemoveAccountAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.api.v1.bank_integrations.remove_account.account_id.$post
      >,
    ) {
      return parseResponse(
        client.api.v1.bank_integrations.remove_account.account_id.$post(args, options),
      )
    },
  })
}

export function usePostApiV1BankIntegrationsRemoveAccountAccountId<
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
                  ReturnType<typeof client.api.v1.bank_integrations.remove_account.account_id.$post>
                >
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.bank_integrations.remove_account.account_id.$post>,
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
  const mutationDefaults = getPostApiV1BankIntegrationsRemoveAccountAccountIdMutationOptions<
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

export function getPostApiV1BankIntegrationsGetTransactionsAccountIdMutationKey() {
  return ['api', '/api/v1/bank_integrations/get_transactions/account_id', 'POST'] as const
}

export function getPostApiV1BankIntegrationsGetTransactionsAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.api.v1.bank_integrations.get_transactions.account_id.$post>
          >
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.bank_integrations.get_transactions.account_id.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1BankIntegrationsGetTransactionsAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.api.v1.bank_integrations.get_transactions.account_id.$post
      >,
    ) {
      return parseResponse(
        client.api.v1.bank_integrations.get_transactions.account_id.$post(args, options),
      )
    },
  })
}

export function usePostApiV1BankIntegrationsGetTransactionsAccountId<
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
                    typeof client.api.v1.bank_integrations.get_transactions.account_id.$post
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            typeof client.api.v1.bank_integrations.get_transactions.account_id.$post
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
  const mutationDefaults = getPostApiV1BankIntegrationsGetTransactionsAccountIdMutationOptions<
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

export function getApiV1BankTransactionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.bank_transactions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/bank_transactions', keyArgs] as const
}

export function getApiV1BankTransactionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.bank_transactions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BankTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.bank_transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BankTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bank_transactions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.bank_transactions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bank_transactions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bank_transactions.$get>>>
            >
          >,
          ReturnType<typeof getApiV1BankTransactionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bank_transactions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BankTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BankTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.bank_transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1BankTransactionsMutationKey() {
  return ['api', '/api/v1/bank_transactions', 'POST'] as const
}

export function getPostApiV1BankTransactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bank_transactions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.bank_transactions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1BankTransactionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.bank_transactions.$post>) {
      return parseResponse(client.api.v1.bank_transactions.$post(args, options))
    },
  })
}

export function usePostApiV1BankTransactions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.bank_transactions.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.bank_transactions.$post>,
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
  const mutationDefaults = getPostApiV1BankTransactionsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1BankTransactionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.bank_transactions)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/bank_transactions/:id', keyArgs] as const
}

export function getApiV1BankTransactionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.bank_transactions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BankTransactionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.bank_transactions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BankTransactionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.bank_transactions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.bank_transactions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.bank_transactions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.bank_transactions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1BankTransactionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.bank_transactions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BankTransactionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BankTransactionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.bank_transactions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1BankTransactionsIdMutationKey() {
  return ['api', '/api/v1/bank_transactions/:id', 'PUT'] as const
}

export function getPutApiV1BankTransactionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.bank_transactions)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.bank_transactions)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1BankTransactionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.bank_transactions)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v1.bank_transactions[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1BankTransactionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.bank_transactions)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.bank_transactions)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1BankTransactionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1BankTransactionsIdMutationKey() {
  return ['api', '/api/v1/bank_transactions/:id', 'DELETE'] as const
}

export function getDeleteApiV1BankTransactionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.bank_transactions)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.bank_transactions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1BankTransactionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.bank_transactions)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.bank_transactions[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1BankTransactionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.bank_transactions)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.bank_transactions)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1BankTransactionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1BankTransactionsIdEditQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.bank_transactions)[':id']['edit']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/bank_transactions/:id/edit', keyArgs] as const
}

export function getApiV1BankTransactionsIdEditQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.bank_transactions)[':id']['edit']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BankTransactionsIdEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.bank_transactions[':id'].edit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BankTransactionsIdEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.bank_transactions)[':id']['edit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.bank_transactions)[':id']['edit']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.bank_transactions)[':id']['edit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.bank_transactions)[':id']['edit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1BankTransactionsIdEditQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.bank_transactions)[':id']['edit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BankTransactionsIdEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BankTransactionsIdEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.bank_transactions[':id'].edit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BankTransactionsCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.bank_transactions.create.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/bank_transactions/create', keyArgs] as const
}

export function getApiV1BankTransactionsCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.bank_transactions.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BankTransactionsCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.bank_transactions.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BankTransactionsCreate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bank_transactions.create.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.bank_transactions.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.bank_transactions.create.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.bank_transactions.create.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1BankTransactionsCreateQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.bank_transactions.create.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BankTransactionsCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BankTransactionsCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.bank_transactions.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1BankTransactionsBulkMutationKey() {
  return ['api', '/api/v1/bank_transactions/bulk', 'POST'] as const
}

export function getPostApiV1BankTransactionsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bank_transactions.bulk.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.bank_transactions.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1BankTransactionsBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.bank_transactions.bulk.$post>) {
      return parseResponse(client.api.v1.bank_transactions.bulk.$post(args, options))
    },
  })
}

export function usePostApiV1BankTransactionsBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.bank_transactions.bulk.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.bank_transactions.bulk.$post>,
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
  const mutationDefaults = getPostApiV1BankTransactionsBulkMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1BankTransactionsMatchMutationKey() {
  return ['api', '/api/v1/bank_transactions/match', 'POST'] as const
}

export function getPostApiV1BankTransactionsMatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.bank_transactions.match.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.bank_transactions.match.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1BankTransactionsMatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.bank_transactions.match.$post>) {
      return parseResponse(client.api.v1.bank_transactions.match.$post(args, options))
    },
  })
}

export function usePostApiV1BankTransactionsMatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.bank_transactions.match.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.bank_transactions.match.$post>,
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
  const mutationDefaults = getPostApiV1BankTransactionsMatchMutationOptions<
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

export function getApiV1BankTransactionRulesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.bank_transaction_rules.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/bank_transaction_rules', keyArgs] as const
}

export function getApiV1BankTransactionRulesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.bank_transaction_rules.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BankTransactionRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.bank_transaction_rules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BankTransactionRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bank_transaction_rules.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.bank_transaction_rules.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.bank_transaction_rules.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.bank_transaction_rules.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1BankTransactionRulesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bank_transaction_rules.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BankTransactionRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BankTransactionRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.bank_transaction_rules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1BankTransactionRulesMutationKey() {
  return ['api', '/api/v1/bank_transaction_rules', 'POST'] as const
}

export function getPostApiV1BankTransactionRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bank_transaction_rules.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.bank_transaction_rules.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1BankTransactionRulesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.bank_transaction_rules.$post>) {
      return parseResponse(client.api.v1.bank_transaction_rules.$post(args, options))
    },
  })
}

export function usePostApiV1BankTransactionRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.bank_transaction_rules.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.bank_transaction_rules.$post>,
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
  const mutationDefaults = getPostApiV1BankTransactionRulesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1BankTransactionRulesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.bank_transaction_rules)[':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/bank_transaction_rules/:id', keyArgs] as const
}

export function getApiV1BankTransactionRulesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.bank_transaction_rules)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BankTransactionRulesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.bank_transaction_rules[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BankTransactionRulesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.bank_transaction_rules)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.bank_transaction_rules)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.bank_transaction_rules)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.bank_transaction_rules)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1BankTransactionRulesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.bank_transaction_rules)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BankTransactionRulesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BankTransactionRulesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.bank_transaction_rules[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1BankTransactionRulesIdMutationKey() {
  return ['api', '/api/v1/bank_transaction_rules/:id', 'PUT'] as const
}

export function getPutApiV1BankTransactionRulesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.bank_transaction_rules)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.bank_transaction_rules)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1BankTransactionRulesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.bank_transaction_rules)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v1.bank_transaction_rules[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1BankTransactionRulesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.bank_transaction_rules)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.bank_transaction_rules)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1BankTransactionRulesIdMutationOptions<
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

export function getDeleteApiV1BankTransactionRulesIdMutationKey() {
  return ['api', '/api/v1/bank_transaction_rules/:id', 'DELETE'] as const
}

export function getDeleteApiV1BankTransactionRulesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.bank_transaction_rules)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.bank_transaction_rules)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1BankTransactionRulesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.bank_transaction_rules)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.bank_transaction_rules[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1BankTransactionRulesId<
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
                Awaited<ReturnType<(typeof client.api.v1.bank_transaction_rules)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.bank_transaction_rules)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1BankTransactionRulesIdMutationOptions<
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

export function getApiV1BankTransactionRulesIdEditQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.bank_transaction_rules)[':id']['edit']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/bank_transaction_rules/:id/edit', keyArgs] as const
}

export function getApiV1BankTransactionRulesIdEditQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.bank_transaction_rules)[':id']['edit']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BankTransactionRulesIdEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.bank_transaction_rules[':id'].edit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BankTransactionRulesIdEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.bank_transaction_rules)[':id']['edit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.bank_transaction_rules)[':id']['edit']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.bank_transaction_rules)[':id']['edit']['$get']>
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
                  ReturnType<(typeof client.api.v1.bank_transaction_rules)[':id']['edit']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1BankTransactionRulesIdEditQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.bank_transaction_rules)[':id']['edit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BankTransactionRulesIdEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BankTransactionRulesIdEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.bank_transaction_rules[':id'].edit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BankTransactionRulesCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.bank_transaction_rules.create.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/bank_transaction_rules/create', keyArgs] as const
}

export function getApiV1BankTransactionRulesCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.bank_transaction_rules.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BankTransactionRulesCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.bank_transaction_rules.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BankTransactionRulesCreate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.bank_transaction_rules.create.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.bank_transaction_rules.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.bank_transaction_rules.create.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.bank_transaction_rules.create.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1BankTransactionRulesCreateQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.bank_transaction_rules.create.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BankTransactionRulesCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BankTransactionRulesCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.bank_transaction_rules.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1BankTransactionRulesBulkMutationKey() {
  return ['api', '/api/v1/bank_transaction_rules/bulk', 'POST'] as const
}

export function getPostApiV1BankTransactionRulesBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.bank_transaction_rules.bulk.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.bank_transaction_rules.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1BankTransactionRulesBulkMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.bank_transaction_rules.bulk.$post>,
    ) {
      return parseResponse(client.api.v1.bank_transaction_rules.bulk.$post(args, options))
    },
  })
}

export function usePostApiV1BankTransactionRulesBulk<
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
                Awaited<ReturnType<typeof client.api.v1.bank_transaction_rules.bulk.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.bank_transaction_rules.bulk.$post>,
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
  const mutationDefaults = getPostApiV1BankTransactionRulesBulkMutationOptions<
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

export function getPostApiV1ChartsTotalsMutationKey() {
  return ['api', '/api/v1/charts/totals', 'POST'] as const
}

export function getPostApiV1ChartsTotalsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.charts.totals.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.charts.totals.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChartsTotalsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.charts.totals.$post>) {
      return parseResponse(client.api.v1.charts.totals.$post(args, options))
    },
  })
}

export function usePostApiV1ChartsTotals<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.charts.totals.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.charts.totals.$post>,
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
  const mutationDefaults = getPostApiV1ChartsTotalsMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ChartsTotalsV2MutationKey() {
  return ['api', '/api/v1/charts/totals_v2', 'POST'] as const
}

export function getPostApiV1ChartsTotalsV2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.charts.totals_v2.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.charts.totals_v2.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChartsTotalsV2MutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.charts.totals_v2.$post>) {
      return parseResponse(client.api.v1.charts.totals_v2.$post(args, options))
    },
  })
}

export function usePostApiV1ChartsTotalsV2<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.charts.totals_v2.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.charts.totals_v2.$post>,
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
  const mutationDefaults = getPostApiV1ChartsTotalsV2MutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ChartsChartSummaryV2MutationKey() {
  return ['api', '/api/v1/charts/chart_summary_v2', 'POST'] as const
}

export function getPostApiV1ChartsChartSummaryV2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.charts.chart_summary_v2.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.charts.chart_summary_v2.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChartsChartSummaryV2MutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.charts.chart_summary_v2.$post>) {
      return parseResponse(client.api.v1.charts.chart_summary_v2.$post(args, options))
    },
  })
}

export function usePostApiV1ChartsChartSummaryV2<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.charts.chart_summary_v2.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.charts.chart_summary_v2.$post>,
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
  const mutationDefaults = getPostApiV1ChartsChartSummaryV2MutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ChartsCalculatedFieldsMutationKey() {
  return ['api', '/api/v1/charts/calculated_fields', 'POST'] as const
}

export function getPostApiV1ChartsCalculatedFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.charts.calculated_fields.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.charts.calculated_fields.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChartsCalculatedFieldsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.charts.calculated_fields.$post>) {
      return parseResponse(client.api.v1.charts.calculated_fields.$post(args, options))
    },
  })
}

export function usePostApiV1ChartsCalculatedFields<
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
                Awaited<ReturnType<typeof client.api.v1.charts.calculated_fields.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.charts.calculated_fields.$post>,
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
  const mutationDefaults = getPostApiV1ChartsCalculatedFieldsMutationOptions<
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

export function getApiV1ClientGatewayTokensQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.client_gateway_tokens.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/client_gateway_tokens', keyArgs] as const
}

export function getApiV1ClientGatewayTokensQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.client_gateway_tokens.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ClientGatewayTokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.client_gateway_tokens.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ClientGatewayTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.client_gateway_tokens.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.client_gateway_tokens.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.client_gateway_tokens.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.client_gateway_tokens.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1ClientGatewayTokensQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.client_gateway_tokens.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ClientGatewayTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ClientGatewayTokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.client_gateway_tokens.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ClientGatewayTokensMutationKey() {
  return ['api', '/api/v1/client_gateway_tokens', 'POST'] as const
}

export function getPostApiV1ClientGatewayTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.client_gateway_tokens.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.client_gateway_tokens.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ClientGatewayTokensMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.client_gateway_tokens.$post>) {
      return parseResponse(client.api.v1.client_gateway_tokens.$post(args, options))
    },
  })
}

export function usePostApiV1ClientGatewayTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.client_gateway_tokens.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.client_gateway_tokens.$post>,
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
  const mutationDefaults = getPostApiV1ClientGatewayTokensMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ClientGatewayTokensIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.client_gateway_tokens)[':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/client_gateway_tokens/:id', keyArgs] as const
}

export function getApiV1ClientGatewayTokensIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.client_gateway_tokens)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ClientGatewayTokensIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.client_gateway_tokens[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ClientGatewayTokensId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.client_gateway_tokens)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.client_gateway_tokens)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.client_gateway_tokens)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.client_gateway_tokens)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ClientGatewayTokensIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.client_gateway_tokens)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ClientGatewayTokensIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ClientGatewayTokensIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.client_gateway_tokens[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1ClientGatewayTokensIdMutationKey() {
  return ['api', '/api/v1/client_gateway_tokens/:id', 'PUT'] as const
}

export function getPutApiV1ClientGatewayTokensIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.client_gateway_tokens)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.client_gateway_tokens)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ClientGatewayTokensIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.client_gateway_tokens)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v1.client_gateway_tokens[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1ClientGatewayTokensId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.client_gateway_tokens)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.client_gateway_tokens)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1ClientGatewayTokensIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1ClientGatewayTokensIdMutationKey() {
  return ['api', '/api/v1/client_gateway_tokens/:id', 'DELETE'] as const
}

export function getDeleteApiV1ClientGatewayTokensIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.client_gateway_tokens)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.client_gateway_tokens)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ClientGatewayTokensIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.client_gateway_tokens)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.client_gateway_tokens[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1ClientGatewayTokensId<
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
                Awaited<ReturnType<(typeof client.api.v1.client_gateway_tokens)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.client_gateway_tokens)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1ClientGatewayTokensIdMutationOptions<
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

export function getApiV1ClientGatewayTokensIdEditQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.client_gateway_tokens)[':id']['edit']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/client_gateway_tokens/:id/edit', keyArgs] as const
}

export function getApiV1ClientGatewayTokensIdEditQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.client_gateway_tokens)[':id']['edit']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ClientGatewayTokensIdEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.client_gateway_tokens[':id'].edit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ClientGatewayTokensIdEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.client_gateway_tokens)[':id']['edit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.client_gateway_tokens)[':id']['edit']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.client_gateway_tokens)[':id']['edit']['$get']>
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
                  ReturnType<(typeof client.api.v1.client_gateway_tokens)[':id']['edit']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1ClientGatewayTokensIdEditQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.client_gateway_tokens)[':id']['edit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ClientGatewayTokensIdEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ClientGatewayTokensIdEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.client_gateway_tokens[':id'].edit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ClientGatewayTokensCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.client_gateway_tokens.create.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/client_gateway_tokens/create', keyArgs] as const
}

export function getApiV1ClientGatewayTokensCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.client_gateway_tokens.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ClientGatewayTokensCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.client_gateway_tokens.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ClientGatewayTokensCreate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.client_gateway_tokens.create.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.client_gateway_tokens.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.client_gateway_tokens.create.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.client_gateway_tokens.create.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1ClientGatewayTokensCreateQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.client_gateway_tokens.create.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ClientGatewayTokensCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ClientGatewayTokensCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.client_gateway_tokens.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CompaniesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.companies.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/companies', keyArgs] as const
}

export function getApiV1CompaniesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.companies.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CompaniesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.companies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Companies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.companies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.companies.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.companies.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.companies.$get>>>
            >
          >,
          ReturnType<typeof getApiV1CompaniesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.companies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompaniesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CompaniesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.companies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1CompaniesMutationKey() {
  return ['api', '/api/v1/companies', 'POST'] as const
}

export function getPostApiV1CompaniesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.companies.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.companies.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CompaniesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.companies.$post>) {
      return parseResponse(client.api.v1.companies.$post(args, options))
    },
  })
}

export function usePostApiV1Companies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.companies.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.companies.$post>,
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
  const mutationDefaults = getPostApiV1CompaniesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CompaniesCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.companies.create.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/companies/create', keyArgs] as const
}

export function getApiV1CompaniesCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.companies.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CompaniesCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.companies.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CompaniesCreate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.companies.create.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.companies.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.companies.create.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.companies.create.$get>>>
            >
          >,
          ReturnType<typeof getApiV1CompaniesCreateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.companies.create.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompaniesCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CompaniesCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.companies.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CompaniesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.companies)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/companies/:id', keyArgs] as const
}

export function getApiV1CompaniesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.companies)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CompaniesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.companies[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CompaniesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.companies)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.companies)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.companies)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.companies)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CompaniesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.companies)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompaniesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CompaniesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.companies[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1CompaniesIdMutationKey() {
  return ['api', '/api/v1/companies/:id', 'PUT'] as const
}

export function getPutApiV1CompaniesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.companies)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.companies)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1CompaniesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.companies)[':id']['$put']>) {
      return parseResponse(client.api.v1.companies[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1CompaniesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.companies)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.companies)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1CompaniesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1CompaniesIdMutationKey() {
  return ['api', '/api/v1/companies/:id', 'DELETE'] as const
}

export function getDeleteApiV1CompaniesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.companies)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.companies)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1CompaniesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.companies)[':id']['$delete']>) {
      return parseResponse(client.api.v1.companies[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1CompaniesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.companies)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.companies)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1CompaniesIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CompaniesIdEditQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.companies)[':id']['edit']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/companies/:id/edit', keyArgs] as const
}

export function getApiV1CompaniesIdEditQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.companies)[':id']['edit']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CompaniesIdEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.companies[':id'].edit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CompaniesIdEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.companies)[':id']['edit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.companies)[':id']['edit']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.companies)[':id']['edit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.companies)[':id']['edit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CompaniesIdEditQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.companies)[':id']['edit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompaniesIdEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CompaniesIdEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.companies[':id'].edit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1CompaniesIdUploadMutationKey() {
  return ['api', '/api/v1/companies/:id/upload', 'POST'] as const
}

export function getPostApiV1CompaniesIdUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.companies)[':id']['upload']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.companies)[':id']['upload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CompaniesIdUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.companies)[':id']['upload']['$post']>,
    ) {
      return parseResponse(client.api.v1.companies[':id'].upload.$post(args, options))
    },
  })
}

export function usePostApiV1CompaniesIdUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.companies)[':id']['upload']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.companies)[':id']['upload']['$post']>,
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
  const mutationDefaults = getPostApiV1CompaniesIdUploadMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1CompaniesCompanyDefaultMutationKey() {
  return ['api', '/api/v1/companies/:company/default', 'POST'] as const
}

export function getPostApiV1CompaniesCompanyDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.companies)[':company']['default']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.companies)[':company']['default']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CompaniesCompanyDefaultMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.companies)[':company']['default']['$post']>,
    ) {
      return parseResponse(client.api.v1.companies[':company'].default.$post(args, options))
    },
  })
}

export function usePostApiV1CompaniesCompanyDefault<
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
                  ReturnType<(typeof client.api.v1.companies)[':company']['default']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.companies)[':company']['default']['$post']>,
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
  const mutationDefaults = getPostApiV1CompaniesCompanyDefaultMutationOptions<
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

export function getPostApiV1CompaniesCurrentMutationKey() {
  return ['api', '/api/v1/companies/current', 'POST'] as const
}

export function getPostApiV1CompaniesCurrentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.companies.current.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.companies.current.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CompaniesCurrentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.companies.current.$post>) {
      return parseResponse(client.api.v1.companies.current.$post(args, options))
    },
  })
}

export function usePostApiV1CompaniesCurrent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.companies.current.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.companies.current.$post>,
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
  const mutationDefaults = getPostApiV1CompaniesCurrentMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CompanyGatewaysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.company_gateways.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/company_gateways', keyArgs] as const
}

export function getApiV1CompanyGatewaysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.company_gateways.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CompanyGatewaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.company_gateways.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CompanyGateways<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company_gateways.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.company_gateways.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company_gateways.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company_gateways.$get>>>
            >
          >,
          ReturnType<typeof getApiV1CompanyGatewaysQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company_gateways.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanyGatewaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CompanyGatewaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.company_gateways.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1CompanyGatewaysMutationKey() {
  return ['api', '/api/v1/company_gateways', 'POST'] as const
}

export function getPostApiV1CompanyGatewaysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company_gateways.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.company_gateways.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CompanyGatewaysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.company_gateways.$post>) {
      return parseResponse(client.api.v1.company_gateways.$post(args, options))
    },
  })
}

export function usePostApiV1CompanyGateways<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company_gateways.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.company_gateways.$post>,
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
  const mutationDefaults = getPostApiV1CompanyGatewaysMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CompanyGatewaysCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.company_gateways.create.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/company_gateways/create', keyArgs] as const
}

export function getApiV1CompanyGatewaysCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.company_gateways.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CompanyGatewaysCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.company_gateways.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CompanyGatewaysCreate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company_gateways.create.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.company_gateways.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.company_gateways.create.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.company_gateways.create.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1CompanyGatewaysCreateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company_gateways.create.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanyGatewaysCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CompanyGatewaysCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.company_gateways.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CompanyGatewaysIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.company_gateways)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/company_gateways/:id', keyArgs] as const
}

export function getApiV1CompanyGatewaysIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.company_gateways)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CompanyGatewaysIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.company_gateways[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CompanyGatewaysId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.company_gateways)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.company_gateways)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.company_gateways)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.company_gateways)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CompanyGatewaysIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.company_gateways)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanyGatewaysIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CompanyGatewaysIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.company_gateways[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1CompanyGatewaysIdMutationKey() {
  return ['api', '/api/v1/company_gateways/:id', 'PUT'] as const
}

export function getPutApiV1CompanyGatewaysIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.company_gateways)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.company_gateways)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1CompanyGatewaysIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.company_gateways)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v1.company_gateways[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1CompanyGatewaysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.company_gateways)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.company_gateways)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1CompanyGatewaysIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1CompanyGatewaysIdMutationKey() {
  return ['api', '/api/v1/company_gateways/:id', 'DELETE'] as const
}

export function getDeleteApiV1CompanyGatewaysIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.company_gateways)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.company_gateways)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1CompanyGatewaysIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.company_gateways)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.company_gateways[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1CompanyGatewaysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.company_gateways)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.company_gateways)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1CompanyGatewaysIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CompanyGatewaysIdEditQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company_gateways)[':id']['edit']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/company_gateways/:id/edit', keyArgs] as const
}

export function getApiV1CompanyGatewaysIdEditQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company_gateways)[':id']['edit']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CompanyGatewaysIdEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.company_gateways[':id'].edit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CompanyGatewaysIdEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.company_gateways)[':id']['edit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company_gateways)[':id']['edit']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.company_gateways)[':id']['edit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.company_gateways)[':id']['edit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CompanyGatewaysIdEditQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.company_gateways)[':id']['edit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanyGatewaysIdEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CompanyGatewaysIdEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.company_gateways[':id'].edit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1CompanyGatewaysBulkMutationKey() {
  return ['api', '/api/v1/company_gateways/bulk', 'POST'] as const
}

export function getPostApiV1CompanyGatewaysBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company_gateways.bulk.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.company_gateways.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CompanyGatewaysBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.company_gateways.bulk.$post>) {
      return parseResponse(client.api.v1.company_gateways.bulk.$post(args, options))
    },
  })
}

export function usePostApiV1CompanyGatewaysBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.company_gateways.bulk.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.company_gateways.bulk.$post>,
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
  const mutationDefaults = getPostApiV1CompanyGatewaysBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CompanyLedgerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.company_ledger.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/company_ledger', keyArgs] as const
}

export function getApiV1CompanyLedgerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.company_ledger.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CompanyLedgerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.company_ledger.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CompanyLedger<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company_ledger.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.company_ledger.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company_ledger.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company_ledger.$get>>>
            >
          >,
          ReturnType<typeof getApiV1CompanyLedgerQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company_ledger.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanyLedgerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CompanyLedgerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.company_ledger.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1CompanyUsersMutationKey() {
  return ['api', '/api/v1/company_users', 'POST'] as const
}

export function getPostApiV1CompanyUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company_users.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.company_users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CompanyUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.company_users.$post>) {
      return parseResponse(client.api.v1.company_users.$post(args, options))
    },
  })
}

export function usePostApiV1CompanyUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.company_users.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.company_users.$post>,
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
  const mutationDefaults = getPostApiV1CompanyUsersMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ConnectedAccountMutationKey() {
  return ['api', '/api/v1/connected_account', 'POST'] as const
}

export function getPostApiV1ConnectedAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.connected_account.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.connected_account.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ConnectedAccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.connected_account.$post>) {
      return parseResponse(client.api.v1.connected_account.$post(args, options))
    },
  })
}

export function usePostApiV1ConnectedAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.connected_account.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.connected_account.$post>,
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
  const mutationDefaults = getPostApiV1ConnectedAccountMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1DesignsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.designs.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/designs', keyArgs] as const
}

export function getApiV1DesignsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.designs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DesignsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.designs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Designs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.designs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.designs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.designs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.designs.$get>>>>
          >,
          ReturnType<typeof getApiV1DesignsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.designs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DesignsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DesignsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.designs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1DesignsMutationKey() {
  return ['api', '/api/v1/designs', 'POST'] as const
}

export function getPostApiV1DesignsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.designs.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.designs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DesignsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.designs.$post>) {
      return parseResponse(client.api.v1.designs.$post(args, options))
    },
  })
}

export function usePostApiV1Designs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.designs.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.designs.$post>,
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
  const mutationDefaults = getPostApiV1DesignsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1DesignsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.designs)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/designs/:id', keyArgs] as const
}

export function getApiV1DesignsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.designs)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DesignsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.designs[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DesignsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.designs)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.designs)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.designs)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.designs)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1DesignsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.designs)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DesignsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DesignsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.designs[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1DesignsIdMutationKey() {
  return ['api', '/api/v1/designs/:id', 'PUT'] as const
}

export function getPutApiV1DesignsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.designs)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.designs)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1DesignsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.designs)[':id']['$put']>) {
      return parseResponse(client.api.v1.designs[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1DesignsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.designs)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.designs)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1DesignsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1DesignsIdMutationKey() {
  return ['api', '/api/v1/designs/:id', 'DELETE'] as const
}

export function getDeleteApiV1DesignsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.designs)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.designs)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1DesignsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.designs)[':id']['$delete']>) {
      return parseResponse(client.api.v1.designs[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1DesignsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.designs)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.designs)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1DesignsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1DesignsIdEditQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.designs)[':id']['edit']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/designs/:id/edit', keyArgs] as const
}

export function getApiV1DesignsIdEditQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.designs)[':id']['edit']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DesignsIdEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.designs[':id'].edit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DesignsIdEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.designs)[':id']['edit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.designs)[':id']['edit']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.designs)[':id']['edit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.designs)[':id']['edit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1DesignsIdEditQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.designs)[':id']['edit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DesignsIdEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DesignsIdEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.designs[':id'].edit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DesignsCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.designs.create.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/designs/create', keyArgs] as const
}

export function getApiV1DesignsCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.designs.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DesignsCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.designs.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DesignsCreate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.designs.create.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.designs.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.designs.create.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.designs.create.$get>>>
            >
          >,
          ReturnType<typeof getApiV1DesignsCreateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.designs.create.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DesignsCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DesignsCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.designs.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1DesignsBulkMutationKey() {
  return ['api', '/api/v1/designs/bulk', 'POST'] as const
}

export function getPostApiV1DesignsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.designs.bulk.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.designs.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DesignsBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.designs.bulk.$post>) {
      return parseResponse(client.api.v1.designs.bulk.$post(args, options))
    },
  })
}

export function usePostApiV1DesignsBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.designs.bulk.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.designs.bulk.$post>,
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
  const mutationDefaults = getPostApiV1DesignsBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1DocumentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.documents.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/documents', keyArgs] as const
}

export function getApiV1DocumentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.documents.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DocumentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.documents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Documents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.documents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.documents.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.documents.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.documents.$get>>>
            >
          >,
          ReturnType<typeof getApiV1DocumentsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.documents.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DocumentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DocumentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.documents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1EmailsMutationKey() {
  return ['api', '/api/v1/emails', 'POST'] as const
}

export function getPostApiV1EmailsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.emails.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.emails.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1EmailsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.emails.$post>) {
      return parseResponse(client.api.v1.emails.$post(args, options))
    },
  })
}

export function usePostApiV1Emails<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.emails.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.emails.$post>,
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
  const mutationDefaults = getPostApiV1EmailsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1ExpenseCategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.expense_categories.$get>>,
) {
  return ['api', '/api/v1/expense_categories', toValue(args)] as const
}

export function getApiV1ExpenseCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.expense_categories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ExpenseCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.expense_categories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ExpenseCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.expense_categories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.expense_categories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.expense_categories.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.expense_categories.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1ExpenseCategoriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.expense_categories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ExpenseCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ExpenseCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.expense_categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ExpenseCategoriesMutationKey() {
  return ['api', '/api/v1/expense_categories', 'POST'] as const
}

export function getPostApiV1ExpenseCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.expense_categories.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.expense_categories.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ExpenseCategoriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.expense_categories.$post>) {
      return parseResponse(client.api.v1.expense_categories.$post(args, options))
    },
  })
}

export function usePostApiV1ExpenseCategories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.expense_categories.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.expense_categories.$post>,
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
  const mutationDefaults = getPostApiV1ExpenseCategoriesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ExpenseCategoriesCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.expense_categories.create.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/expense_categories/create', keyArgs] as const
}

export function getApiV1ExpenseCategoriesCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.expense_categories.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ExpenseCategoriesCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.expense_categories.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ExpenseCategoriesCreate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.expense_categories.create.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.expense_categories.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.expense_categories.create.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.expense_categories.create.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1ExpenseCategoriesCreateQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.expense_categories.create.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ExpenseCategoriesCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ExpenseCategoriesCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.expense_categories.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ExpenseCategoriesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.expense_categories)[':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/expense_categories/:id', keyArgs] as const
}

export function getApiV1ExpenseCategoriesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.expense_categories)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ExpenseCategoriesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.expense_categories[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ExpenseCategoriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.expense_categories)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.expense_categories)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.expense_categories)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.expense_categories)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ExpenseCategoriesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.expense_categories)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ExpenseCategoriesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ExpenseCategoriesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.expense_categories[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1ExpenseCategoriesIdMutationKey() {
  return ['api', '/api/v1/expense_categories/:id', 'PUT'] as const
}

export function getPutApiV1ExpenseCategoriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.expense_categories)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.expense_categories)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ExpenseCategoriesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.expense_categories)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v1.expense_categories[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1ExpenseCategoriesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.expense_categories)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.expense_categories)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1ExpenseCategoriesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1ExpenseCategoriesIdMutationKey() {
  return ['api', '/api/v1/expense_categories/:id', 'DELETE'] as const
}

export function getDeleteApiV1ExpenseCategoriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.expense_categories)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.expense_categories)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ExpenseCategoriesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.expense_categories)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.expense_categories[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1ExpenseCategoriesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.expense_categories)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.expense_categories)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1ExpenseCategoriesIdMutationOptions<
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

export function getApiV1ExpenseCategoriesIdEditQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.expense_categories)[':id']['edit']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/expense_categories/:id/edit', keyArgs] as const
}

export function getApiV1ExpenseCategoriesIdEditQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.expense_categories)[':id']['edit']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ExpenseCategoriesIdEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.expense_categories[':id'].edit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ExpenseCategoriesIdEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.expense_categories)[':id']['edit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.expense_categories)[':id']['edit']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.expense_categories)[':id']['edit']['$get']>
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
                  ReturnType<(typeof client.api.v1.expense_categories)[':id']['edit']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1ExpenseCategoriesIdEditQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.expense_categories)[':id']['edit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ExpenseCategoriesIdEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ExpenseCategoriesIdEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.expense_categories[':id'].edit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ExpenseCategoriesBulkMutationKey() {
  return ['api', '/api/v1/expense_categories/bulk', 'POST'] as const
}

export function getPostApiV1ExpenseCategoriesBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.expense_categories.bulk.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.expense_categories.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ExpenseCategoriesBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.expense_categories.bulk.$post>) {
      return parseResponse(client.api.v1.expense_categories.bulk.$post(args, options))
    },
  })
}

export function usePostApiV1ExpenseCategoriesBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.expense_categories.bulk.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.expense_categories.bulk.$post>,
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
  const mutationDefaults = getPostApiV1ExpenseCategoriesBulkMutationOptions<
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

export function getApiV1ExpensesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.expenses.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/expenses', keyArgs] as const
}

export function getApiV1ExpensesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.expenses.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ExpensesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.expenses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Expenses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.expenses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.expenses.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.expenses.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.expenses.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ExpensesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.expenses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ExpensesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ExpensesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.expenses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ExpensesMutationKey() {
  return ['api', '/api/v1/expenses', 'POST'] as const
}

export function getPostApiV1ExpensesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.expenses.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.expenses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ExpensesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.expenses.$post>) {
      return parseResponse(client.api.v1.expenses.$post(args, options))
    },
  })
}

export function usePostApiV1Expenses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.expenses.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.expenses.$post>,
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
  const mutationDefaults = getPostApiV1ExpensesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ExpensesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.expenses)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/expenses/:id', keyArgs] as const
}

export function getApiV1ExpensesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.expenses)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ExpensesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.expenses[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ExpensesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.expenses)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.expenses)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.expenses)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.expenses)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ExpensesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.expenses)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ExpensesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ExpensesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.expenses[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1ExpensesIdMutationKey() {
  return ['api', '/api/v1/expenses/:id', 'PUT'] as const
}

export function getPutApiV1ExpensesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.expenses)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.expenses)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ExpensesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.expenses)[':id']['$put']>) {
      return parseResponse(client.api.v1.expenses[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1ExpensesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.expenses)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.expenses)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1ExpensesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1ExpensesIdMutationKey() {
  return ['api', '/api/v1/expenses/:id', 'DELETE'] as const
}

export function getDeleteApiV1ExpensesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.expenses)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.expenses)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ExpensesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.expenses)[':id']['$delete']>) {
      return parseResponse(client.api.v1.expenses[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1ExpensesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.expenses)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.expenses)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1ExpensesIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ExpensesIdEditQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.expenses)[':id']['edit']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/expenses/:id/edit', keyArgs] as const
}

export function getApiV1ExpensesIdEditQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.expenses)[':id']['edit']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ExpensesIdEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.expenses[':id'].edit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ExpensesIdEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.expenses)[':id']['edit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.expenses)[':id']['edit']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.expenses)[':id']['edit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.expenses)[':id']['edit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ExpensesIdEditQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.expenses)[':id']['edit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ExpensesIdEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ExpensesIdEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.expenses[':id'].edit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ExpensesCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.expenses.create.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/expenses/create', keyArgs] as const
}

export function getApiV1ExpensesCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.expenses.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ExpensesCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.expenses.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ExpensesCreate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.expenses.create.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.expenses.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.expenses.create.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.expenses.create.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ExpensesCreateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.expenses.create.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ExpensesCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ExpensesCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.expenses.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ExpensesBulkMutationKey() {
  return ['api', '/api/v1/expenses/bulk', 'POST'] as const
}

export function getPostApiV1ExpensesBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.expenses.bulk.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.expenses.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ExpensesBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.expenses.bulk.$post>) {
      return parseResponse(client.api.v1.expenses.bulk.$post(args, options))
    },
  })
}

export function usePostApiV1ExpensesBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.expenses.bulk.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.expenses.bulk.$post>,
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
  const mutationDefaults = getPostApiV1ExpensesBulkMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ExpensesIdUploadMutationKey() {
  return ['api', '/api/v1/expenses/:id/upload', 'POST'] as const
}

export function getPostApiV1ExpensesIdUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.expenses)[':id']['upload']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.expenses)[':id']['upload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ExpensesIdUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.expenses)[':id']['upload']['$post']>,
    ) {
      return parseResponse(client.api.v1.expenses[':id'].upload.$post(args, options))
    },
  })
}

export function usePostApiV1ExpensesIdUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.expenses)[':id']['upload']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.expenses)[':id']['upload']['$post']>,
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
  const mutationDefaults = getPostApiV1ExpensesIdUploadMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ExportMutationKey() {
  return ['api', '/api/v1/export', 'POST'] as const
}

export function getPostApiV1ExportMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.export.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.export.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ExportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.export.$post>) {
      return parseResponse(client.api.v1.export.$post(args, options))
    },
  })
}

export function usePostApiV1Export<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.export.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.export.$post>,
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
  const mutationDefaults = getPostApiV1ExportMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1GroupSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.group_settings.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/group_settings', keyArgs] as const
}

export function getApiV1GroupSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.group_settings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1GroupSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.group_settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1GroupSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.group_settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.group_settings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.group_settings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.group_settings.$get>>>
            >
          >,
          ReturnType<typeof getApiV1GroupSettingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.group_settings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroupSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1GroupSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.group_settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1GroupSettingsMutationKey() {
  return ['api', '/api/v1/group_settings', 'POST'] as const
}

export function getPostApiV1GroupSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.group_settings.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.group_settings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.group_settings.$post>) {
      return parseResponse(client.api.v1.group_settings.$post(args, options))
    },
  })
}

export function usePostApiV1GroupSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.group_settings.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.group_settings.$post>,
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
  const mutationDefaults = getPostApiV1GroupSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1GroupSettingsCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.group_settings.create.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/group_settings/create', keyArgs] as const
}

export function getApiV1GroupSettingsCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.group_settings.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1GroupSettingsCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.group_settings.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1GroupSettingsCreate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.group_settings.create.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.group_settings.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.group_settings.create.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.group_settings.create.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1GroupSettingsCreateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.group_settings.create.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroupSettingsCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1GroupSettingsCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.group_settings.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1GroupSettingsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.group_settings)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/group_settings/:id', keyArgs] as const
}

export function getApiV1GroupSettingsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.group_settings)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1GroupSettingsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.group_settings[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1GroupSettingsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.group_settings)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.group_settings)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.group_settings)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.group_settings)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1GroupSettingsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.group_settings)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroupSettingsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1GroupSettingsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.group_settings[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1GroupSettingsIdMutationKey() {
  return ['api', '/api/v1/group_settings/:id', 'PUT'] as const
}

export function getPutApiV1GroupSettingsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.group_settings)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.group_settings)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1GroupSettingsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.group_settings)[':id']['$put']>) {
      return parseResponse(client.api.v1.group_settings[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1GroupSettingsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.group_settings)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.group_settings)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1GroupSettingsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1GroupSettingsIdMutationKey() {
  return ['api', '/api/v1/group_settings/:id', 'DELETE'] as const
}

export function getDeleteApiV1GroupSettingsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.group_settings)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.group_settings)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1GroupSettingsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.group_settings)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.group_settings[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1GroupSettingsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.group_settings)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.group_settings)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1GroupSettingsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1GroupSettingsIdEditQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.group_settings)[':id']['edit']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/group_settings/:id/edit', keyArgs] as const
}

export function getApiV1GroupSettingsIdEditQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.group_settings)[':id']['edit']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1GroupSettingsIdEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.group_settings[':id'].edit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1GroupSettingsIdEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.group_settings)[':id']['edit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.group_settings)[':id']['edit']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.group_settings)[':id']['edit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.group_settings)[':id']['edit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1GroupSettingsIdEditQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.group_settings)[':id']['edit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroupSettingsIdEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1GroupSettingsIdEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.group_settings[':id'].edit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1GroupSettingsBulkMutationKey() {
  return ['api', '/api/v1/group_settings/bulk', 'POST'] as const
}

export function getPostApiV1GroupSettingsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.group_settings.bulk.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.group_settings.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupSettingsBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.group_settings.bulk.$post>) {
      return parseResponse(client.api.v1.group_settings.bulk.$post(args, options))
    },
  })
}

export function usePostApiV1GroupSettingsBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.group_settings.bulk.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.group_settings.bulk.$post>,
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
  const mutationDefaults = getPostApiV1GroupSettingsBulkMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1GroupSettingsIdUploadMutationKey() {
  return ['api', '/api/v1/group_settings/:id/upload', 'POST'] as const
}

export function getPostApiV1GroupSettingsIdUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.group_settings)[':id']['upload']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.group_settings)[':id']['upload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupSettingsIdUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.group_settings)[':id']['upload']['$post']>,
    ) {
      return parseResponse(client.api.v1.group_settings[':id'].upload.$post(args, options))
    },
  })
}

export function usePostApiV1GroupSettingsIdUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.group_settings)[':id']['upload']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.group_settings)[':id']['upload']['$post']>,
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
  const mutationDefaults = getPostApiV1GroupSettingsIdUploadMutationOptions<
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

export function getPostApiV1PreimportMutationKey() {
  return ['api', '/api/v1/preimport', 'POST'] as const
}

export function getPostApiV1PreimportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.preimport.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.preimport.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PreimportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.preimport.$post>) {
      return parseResponse(client.api.v1.preimport.$post(args, options))
    },
  })
}

export function usePostApiV1Preimport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.preimport.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.preimport.$post>,
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
  const mutationDefaults = getPostApiV1PreimportMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ImportMutationKey() {
  return ['api', '/api/v1/import', 'POST'] as const
}

export function getPostApiV1ImportMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.import.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.import.$post>) {
      return parseResponse(client.api.v1.import.$post(args, options))
    },
  })
}

export function usePostApiV1Import<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.import.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.import.$post>,
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
  const mutationDefaults = getPostApiV1ImportMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1ImportJsonMutationKey() {
  return ['api', '/api/v1/import_json', 'POST'] as const
}

export function getPostApiV1ImportJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.import_json.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.import_json.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ImportJsonMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.import_json.$post>) {
      return parseResponse(client.api.v1.import_json.$post(args, options))
    },
  })
}

export function usePostApiV1ImportJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.import_json.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.import_json.$post>,
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
  const mutationDefaults = getPostApiV1ImportJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1AppleConfirmPurchaseMutationKey() {
  return ['api', '/api/v1/apple/confirm_purchase', 'POST'] as const
}

export function getPostApiV1AppleConfirmPurchaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apple.confirm_purchase.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.apple.confirm_purchase.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AppleConfirmPurchaseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.apple.confirm_purchase.$post>) {
      return parseResponse(client.api.v1.apple.confirm_purchase.$post(args, options))
    },
  })
}

export function usePostApiV1AppleConfirmPurchase<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.apple.confirm_purchase.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.apple.confirm_purchase.$post>,
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
  const mutationDefaults = getPostApiV1AppleConfirmPurchaseMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1AppleProcessWebhookMutationKey() {
  return ['api', '/api/v1/apple/process_webhook', 'POST'] as const
}

export function getPostApiV1AppleProcessWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apple.process_webhook.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.apple.process_webhook.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AppleProcessWebhookMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.apple.process_webhook.$post>) {
      return parseResponse(client.api.v1.apple.process_webhook.$post(args, options))
    },
  })
}

export function usePostApiV1AppleProcessWebhook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.apple.process_webhook.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.apple.process_webhook.$post>,
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
  const mutationDefaults = getPostApiV1AppleProcessWebhookMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ClaimLicenseQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.claim_license.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/claim_license', keyArgs] as const
}

export function getApiV1ClaimLicenseQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.claim_license.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ClaimLicenseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.claim_license.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ClaimLicense<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.claim_license.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.claim_license.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.claim_license.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.claim_license.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ClaimLicenseQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.claim_license.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ClaimLicenseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ClaimLicenseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.claim_license.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1LogoutMutationKey() {
  return ['api', '/api/v1/logout', 'POST'] as const
}

export function getPostApiV1LogoutMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.logout.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.logout.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LogoutMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.logout.$post>) {
      return parseResponse(client.api.v1.logout.$post(args, options))
    },
  })
}

export function usePostApiV1Logout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.logout.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.logout.$post>,
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
  const mutationDefaults = getPostApiV1LogoutMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1MigrationPurgeCompanyMutationKey() {
  return ['api', '/api/v1/migration/purge/:company', 'POST'] as const
}

export function getPostApiV1MigrationPurgeCompanyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.migration.purge)[':company']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.migration.purge)[':company']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1MigrationPurgeCompanyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.migration.purge)[':company']['$post']>,
    ) {
      return parseResponse(client.api.v1.migration.purge[':company'].$post(args, options))
    },
  })
}

export function usePostApiV1MigrationPurgeCompany<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.migration.purge)[':company']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.migration.purge)[':company']['$post']>,
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
  const mutationDefaults = getPostApiV1MigrationPurgeCompanyMutationOptions<
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

export function getPostApiV1MigrationPurgeSaveSettingsCompanyMutationKey() {
  return ['api', '/api/v1/migration/purge_save_settings/:company', 'POST'] as const
}

export function getPostApiV1MigrationPurgeSaveSettingsCompanyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.migration.purge_save_settings)[':company']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.migration.purge_save_settings)[':company']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1MigrationPurgeSaveSettingsCompanyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.migration.purge_save_settings)[':company']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.migration.purge_save_settings[':company'].$post(args, options),
      )
    },
  })
}

export function usePostApiV1MigrationPurgeSaveSettingsCompany<
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
                    (typeof client.api.v1.migration.purge_save_settings)[':company']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.migration.purge_save_settings)[':company']['$post']
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
  const mutationDefaults = getPostApiV1MigrationPurgeSaveSettingsCompanyMutationOptions<
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

export function getPostApiV1MigrationStartMutationKey() {
  return ['api', '/api/v1/migration/start', 'POST'] as const
}

export function getPostApiV1MigrationStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.migration.start.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.migration.start.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1MigrationStartMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.migration.start.$post>) {
      return parseResponse(client.api.v1.migration.start.$post(args, options))
    },
  })
}

export function usePostApiV1MigrationStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.migration.start.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.migration.start.$post>,
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
  const mutationDefaults = getPostApiV1MigrationStartMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1OneTimeTokenMutationKey() {
  return ['api', '/api/v1/one_time_token', 'POST'] as const
}

export function getPostApiV1OneTimeTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.one_time_token.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.one_time_token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1OneTimeTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.one_time_token.$post>) {
      return parseResponse(client.api.v1.one_time_token.$post(args, options))
    },
  })
}

export function usePostApiV1OneTimeToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.one_time_token.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.one_time_token.$post>,
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
  const mutationDefaults = getPostApiV1OneTimeTokenMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1PaymentTermsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.payment_terms.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/payment_terms', keyArgs] as const
}

export function getApiV1PaymentTermsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.payment_terms.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PaymentTermsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.payment_terms.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PaymentTerms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payment_terms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.payment_terms.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payment_terms.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payment_terms.$get>>>
            >
          >,
          ReturnType<typeof getApiV1PaymentTermsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payment_terms.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PaymentTermsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PaymentTermsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.payment_terms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1PaymentTermsMutationKey() {
  return ['api', '/api/v1/payment_terms', 'POST'] as const
}

export function getPostApiV1PaymentTermsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payment_terms.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.payment_terms.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PaymentTermsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.payment_terms.$post>) {
      return parseResponse(client.api.v1.payment_terms.$post(args, options))
    },
  })
}

export function usePostApiV1PaymentTerms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payment_terms.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.payment_terms.$post>,
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
  const mutationDefaults = getPostApiV1PaymentTermsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1PaymentTermsCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.payment_terms.create.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/payment_terms/create', keyArgs] as const
}

export function getApiV1PaymentTermsCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.payment_terms.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PaymentTermsCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.payment_terms.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PaymentTermsCreate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payment_terms.create.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.payment_terms.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.payment_terms.create.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.payment_terms.create.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1PaymentTermsCreateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payment_terms.create.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PaymentTermsCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PaymentTermsCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.payment_terms.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1PaymentTermsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.payment_terms)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/payment_terms/:id', keyArgs] as const
}

export function getApiV1PaymentTermsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.payment_terms)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PaymentTermsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.payment_terms[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PaymentTermsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.payment_terms)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.payment_terms)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.payment_terms)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.payment_terms)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1PaymentTermsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.payment_terms)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PaymentTermsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PaymentTermsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.payment_terms[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1PaymentTermsIdMutationKey() {
  return ['api', '/api/v1/payment_terms/:id', 'PUT'] as const
}

export function getPutApiV1PaymentTermsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.payment_terms)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.payment_terms)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1PaymentTermsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.payment_terms)[':id']['$put']>) {
      return parseResponse(client.api.v1.payment_terms[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1PaymentTermsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.payment_terms)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.payment_terms)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1PaymentTermsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1PaymentTermsIdMutationKey() {
  return ['api', '/api/v1/payment_terms/:id', 'DELETE'] as const
}

export function getDeleteApiV1PaymentTermsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.payment_terms)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.payment_terms)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1PaymentTermsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.payment_terms)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.payment_terms[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1PaymentTermsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.payment_terms)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.payment_terms)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1PaymentTermsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1PaymentTermsIdEditQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.payment_terms)[':id']['edit']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/payment_terms/:id/edit', keyArgs] as const
}

export function getApiV1PaymentTermsIdEditQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.payment_terms)[':id']['edit']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PaymentTermsIdEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.payment_terms[':id'].edit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PaymentTermsIdEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.payment_terms)[':id']['edit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.payment_terms)[':id']['edit']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.payment_terms)[':id']['edit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.payment_terms)[':id']['edit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1PaymentTermsIdEditQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.payment_terms)[':id']['edit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PaymentTermsIdEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PaymentTermsIdEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.payment_terms[':id'].edit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1PaymentTermsBulkMutationKey() {
  return ['api', '/api/v1/payment_terms/bulk', 'POST'] as const
}

export function getPostApiV1PaymentTermsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payment_terms.bulk.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.payment_terms.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PaymentTermsBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.payment_terms.bulk.$post>) {
      return parseResponse(client.api.v1.payment_terms.bulk.$post(args, options))
    },
  })
}

export function usePostApiV1PaymentTermsBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.payment_terms.bulk.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.payment_terms.bulk.$post>,
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
  const mutationDefaults = getPostApiV1PaymentTermsBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1PingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.ping.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/ping', keyArgs] as const
}

export function getApiV1PingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.ping.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.ping.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Ping<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.ping.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.ping.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.ping.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.ping.$get>>>>
          >,
          ReturnType<typeof getApiV1PingQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.ping.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1PingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.ping.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1HealthCheckQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.health_check.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/health_check', keyArgs] as const
}

export function getApiV1HealthCheckQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.health_check.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1HealthCheckQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.health_check.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1HealthCheck<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health_check.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.health_check.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health_check.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health_check.$get>>>
            >
          >,
          ReturnType<typeof getApiV1HealthCheckQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health_check.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1HealthCheckQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1HealthCheckQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.health_check.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LastErrorQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.last_error.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/last_error', keyArgs] as const
}

export function getApiV1LastErrorQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.last_error.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LastErrorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.last_error.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LastError<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.last_error.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.last_error.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.last_error.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.last_error.$get>>>
            >
          >,
          ReturnType<typeof getApiV1LastErrorQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.last_error.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LastErrorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LastErrorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.last_error.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1PostmarkWebhookMutationKey() {
  return ['api', '/api/v1/postmark_webhook', 'POST'] as const
}

export function getPostApiV1PostmarkWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.postmark_webhook.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.postmark_webhook.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PostmarkWebhookMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.postmark_webhook.$post>) {
      return parseResponse(client.api.v1.postmark_webhook.$post(args, options))
    },
  })
}

export function usePostApiV1PostmarkWebhook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.postmark_webhook.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.postmark_webhook.$post>,
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
  const mutationDefaults = getPostApiV1PostmarkWebhookMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1PreviewMutationKey() {
  return ['api', '/api/v1/preview', 'POST'] as const
}

export function getPostApiV1PreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.preview.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.preview.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PreviewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.preview.$post>) {
      return parseResponse(client.api.v1.preview.$post(args, options))
    },
  })
}

export function usePostApiV1Preview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.preview.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.preview.$post>,
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
  const mutationDefaults = getPostApiV1PreviewMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1PreviewPurchaseOrderMutationKey() {
  return ['api', '/api/v1/preview/purchase_order', 'POST'] as const
}

export function getPostApiV1PreviewPurchaseOrderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.preview.purchase_order.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.preview.purchase_order.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PreviewPurchaseOrderMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.preview.purchase_order.$post>) {
      return parseResponse(client.api.v1.preview.purchase_order.$post(args, options))
    },
  })
}

export function usePostApiV1PreviewPurchaseOrder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.preview.purchase_order.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.preview.purchase_order.$post>,
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
  const mutationDefaults = getPostApiV1PreviewPurchaseOrderMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1RecurringExpensesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.recurring_expenses.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/recurring_expenses', keyArgs] as const
}

export function getApiV1RecurringExpensesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.recurring_expenses.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RecurringExpensesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.recurring_expenses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RecurringExpenses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recurring_expenses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.recurring_expenses.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.recurring_expenses.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.recurring_expenses.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1RecurringExpensesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recurring_expenses.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RecurringExpensesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RecurringExpensesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.recurring_expenses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1RecurringExpensesMutationKey() {
  return ['api', '/api/v1/recurring_expenses', 'POST'] as const
}

export function getPostApiV1RecurringExpensesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recurring_expenses.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.recurring_expenses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RecurringExpensesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.recurring_expenses.$post>) {
      return parseResponse(client.api.v1.recurring_expenses.$post(args, options))
    },
  })
}

export function usePostApiV1RecurringExpenses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.recurring_expenses.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.recurring_expenses.$post>,
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
  const mutationDefaults = getPostApiV1RecurringExpensesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1RecurringExpensesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.recurring_expenses)[':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/recurring_expenses/:id', keyArgs] as const
}

export function getApiV1RecurringExpensesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.recurring_expenses)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RecurringExpensesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.recurring_expenses[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RecurringExpensesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.recurring_expenses)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.recurring_expenses)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.recurring_expenses)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.recurring_expenses)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1RecurringExpensesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.recurring_expenses)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RecurringExpensesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RecurringExpensesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.recurring_expenses[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1RecurringExpensesIdMutationKey() {
  return ['api', '/api/v1/recurring_expenses/:id', 'PUT'] as const
}

export function getPutApiV1RecurringExpensesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.recurring_expenses)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.recurring_expenses)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1RecurringExpensesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.recurring_expenses)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v1.recurring_expenses[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1RecurringExpensesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.recurring_expenses)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.recurring_expenses)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1RecurringExpensesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1RecurringExpensesIdMutationKey() {
  return ['api', '/api/v1/recurring_expenses/:id', 'DELETE'] as const
}

export function getDeleteApiV1RecurringExpensesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.recurring_expenses)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.recurring_expenses)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1RecurringExpensesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.recurring_expenses)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.recurring_expenses[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1RecurringExpensesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.recurring_expenses)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.recurring_expenses)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1RecurringExpensesIdMutationOptions<
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

export function getApiV1RecurringExpensesIdEditQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.recurring_expenses)[':id']['edit']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/recurring_expenses/:id/edit', keyArgs] as const
}

export function getApiV1RecurringExpensesIdEditQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.recurring_expenses)[':id']['edit']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RecurringExpensesIdEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.recurring_expenses[':id'].edit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RecurringExpensesIdEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.recurring_expenses)[':id']['edit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.recurring_expenses)[':id']['edit']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.recurring_expenses)[':id']['edit']['$get']>
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
                  ReturnType<(typeof client.api.v1.recurring_expenses)[':id']['edit']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1RecurringExpensesIdEditQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.recurring_expenses)[':id']['edit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RecurringExpensesIdEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RecurringExpensesIdEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.recurring_expenses[':id'].edit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1RecurringExpensesCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.recurring_expenses.create.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/recurring_expenses/create', keyArgs] as const
}

export function getApiV1RecurringExpensesCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.recurring_expenses.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RecurringExpensesCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.recurring_expenses.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RecurringExpensesCreate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recurring_expenses.create.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.recurring_expenses.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.recurring_expenses.create.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.recurring_expenses.create.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1RecurringExpensesCreateQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.recurring_expenses.create.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RecurringExpensesCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RecurringExpensesCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.recurring_expenses.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1RecurringExpensesBulkMutationKey() {
  return ['api', '/api/v1/recurring_expenses/bulk', 'POST'] as const
}

export function getPostApiV1RecurringExpensesBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.recurring_expenses.bulk.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.recurring_expenses.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RecurringExpensesBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.recurring_expenses.bulk.$post>) {
      return parseResponse(client.api.v1.recurring_expenses.bulk.$post(args, options))
    },
  })
}

export function usePostApiV1RecurringExpensesBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.recurring_expenses.bulk.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.recurring_expenses.bulk.$post>,
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
  const mutationDefaults = getPostApiV1RecurringExpensesBulkMutationOptions<
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

export function getPostApiV1RecurringExpensesIdUploadMutationKey() {
  return ['api', '/api/v1/recurring_expenses/:id/upload', 'POST'] as const
}

export function getPostApiV1RecurringExpensesIdUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.recurring_expenses)[':id']['upload']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.recurring_expenses)[':id']['upload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RecurringExpensesIdUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.recurring_expenses)[':id']['upload']['$post']>,
    ) {
      return parseResponse(client.api.v1.recurring_expenses[':id'].upload.$post(args, options))
    },
  })
}

export function usePostApiV1RecurringExpensesIdUpload<
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
                  ReturnType<(typeof client.api.v1.recurring_expenses)[':id']['upload']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.recurring_expenses)[':id']['upload']['$post']>,
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
  const mutationDefaults = getPostApiV1RecurringExpensesIdUploadMutationOptions<
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

export function getApiV1RecurringQuotesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.recurring_quotes.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/recurring_quotes', keyArgs] as const
}

export function getApiV1RecurringQuotesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.recurring_quotes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RecurringQuotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.recurring_quotes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RecurringQuotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recurring_quotes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.recurring_quotes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recurring_quotes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recurring_quotes.$get>>>
            >
          >,
          ReturnType<typeof getApiV1RecurringQuotesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recurring_quotes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RecurringQuotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RecurringQuotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.recurring_quotes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1RecurringQuotesMutationKey() {
  return ['api', '/api/v1/recurring_quotes', 'POST'] as const
}

export function getPostApiV1RecurringQuotesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recurring_quotes.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.recurring_quotes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RecurringQuotesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.recurring_quotes.$post>) {
      return parseResponse(client.api.v1.recurring_quotes.$post(args, options))
    },
  })
}

export function usePostApiV1RecurringQuotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recurring_quotes.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.recurring_quotes.$post>,
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
  const mutationDefaults = getPostApiV1RecurringQuotesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1RecurringQuotesCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.recurring_quotes.create.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/recurring_quotes/create', keyArgs] as const
}

export function getApiV1RecurringQuotesCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.recurring_quotes.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RecurringQuotesCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.recurring_quotes.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RecurringQuotesCreate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recurring_quotes.create.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.recurring_quotes.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.recurring_quotes.create.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.recurring_quotes.create.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1RecurringQuotesCreateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recurring_quotes.create.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RecurringQuotesCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RecurringQuotesCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.recurring_quotes.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1RecurringQuotesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.recurring_quotes)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/recurring_quotes/:id', keyArgs] as const
}

export function getApiV1RecurringQuotesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.recurring_quotes)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RecurringQuotesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.recurring_quotes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RecurringQuotesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.recurring_quotes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.recurring_quotes)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.recurring_quotes)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.recurring_quotes)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1RecurringQuotesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.recurring_quotes)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RecurringQuotesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RecurringQuotesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.recurring_quotes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1RecurringQuotesIdMutationKey() {
  return ['api', '/api/v1/recurring_quotes/:id', 'PUT'] as const
}

export function getPutApiV1RecurringQuotesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.recurring_quotes)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.recurring_quotes)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1RecurringQuotesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.recurring_quotes)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v1.recurring_quotes[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1RecurringQuotesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.recurring_quotes)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.recurring_quotes)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1RecurringQuotesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1RecurringQuotesIdMutationKey() {
  return ['api', '/api/v1/recurring_quotes/:id', 'DELETE'] as const
}

export function getDeleteApiV1RecurringQuotesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.recurring_quotes)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.recurring_quotes)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1RecurringQuotesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.recurring_quotes)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.recurring_quotes[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1RecurringQuotesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.recurring_quotes)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.recurring_quotes)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1RecurringQuotesIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1RecurringQuotesIdEditQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.recurring_quotes)[':id']['edit']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/recurring_quotes/:id/edit', keyArgs] as const
}

export function getApiV1RecurringQuotesIdEditQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.recurring_quotes)[':id']['edit']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RecurringQuotesIdEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.recurring_quotes[':id'].edit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RecurringQuotesIdEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.recurring_quotes)[':id']['edit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.recurring_quotes)[':id']['edit']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.recurring_quotes)[':id']['edit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.recurring_quotes)[':id']['edit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1RecurringQuotesIdEditQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.recurring_quotes)[':id']['edit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RecurringQuotesIdEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RecurringQuotesIdEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.recurring_quotes[':id'].edit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1RecurringQuotesBulkMutationKey() {
  return ['api', '/api/v1/recurring_quotes/bulk', 'POST'] as const
}

export function getPostApiV1RecurringQuotesBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recurring_quotes.bulk.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.recurring_quotes.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RecurringQuotesBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.recurring_quotes.bulk.$post>) {
      return parseResponse(client.api.v1.recurring_quotes.bulk.$post(args, options))
    },
  })
}

export function usePostApiV1RecurringQuotesBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.recurring_quotes.bulk.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.recurring_quotes.bulk.$post>,
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
  const mutationDefaults = getPostApiV1RecurringQuotesBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1RecurringQuotesIdActionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.recurring_quotes)[':id'][':action']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/recurring_quotes/:id/:action', keyArgs] as const
}

export function getApiV1RecurringQuotesIdActionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.recurring_quotes)[':id'][':action']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RecurringQuotesIdActionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.recurring_quotes[':id'][':action'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RecurringQuotesIdAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.recurring_quotes)[':id'][':action']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.recurring_quotes)[':id'][':action']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.recurring_quotes)[':id'][':action']['$get']>
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
                  ReturnType<(typeof client.api.v1.recurring_quotes)[':id'][':action']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1RecurringQuotesIdActionQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.recurring_quotes)[':id'][':action']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RecurringQuotesIdActionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RecurringQuotesIdActionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.recurring_quotes[':id'][':action'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ReportsContactsMutationKey() {
  return ['api', '/api/v1/reports/contacts', 'POST'] as const
}

export function getPostApiV1ReportsContactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.contacts.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.reports.contacts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReportsContactsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.reports.contacts.$post>) {
      return parseResponse(client.api.v1.reports.contacts.$post(args, options))
    },
  })
}

export function usePostApiV1ReportsContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.contacts.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.reports.contacts.$post>,
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
  const mutationDefaults = getPostApiV1ReportsContactsMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ReportsClientsMutationKey() {
  return ['api', '/api/v1/reports/clients', 'POST'] as const
}

export function getPostApiV1ReportsClientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.clients.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.reports.clients.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReportsClientsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.reports.clients.$post>) {
      return parseResponse(client.api.v1.reports.clients.$post(args, options))
    },
  })
}

export function usePostApiV1ReportsClients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.clients.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.reports.clients.$post>,
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
  const mutationDefaults = getPostApiV1ReportsClientsMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ReportsCreditsMutationKey() {
  return ['api', '/api/v1/reports/credits', 'POST'] as const
}

export function getPostApiV1ReportsCreditsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.credits.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.reports.credits.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReportsCreditsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.reports.credits.$post>) {
      return parseResponse(client.api.v1.reports.credits.$post(args, options))
    },
  })
}

export function usePostApiV1ReportsCredits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.credits.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.reports.credits.$post>,
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
  const mutationDefaults = getPostApiV1ReportsCreditsMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ReportsDocumentsMutationKey() {
  return ['api', '/api/v1/reports/documents', 'POST'] as const
}

export function getPostApiV1ReportsDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.documents.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.reports.documents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReportsDocumentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.reports.documents.$post>) {
      return parseResponse(client.api.v1.reports.documents.$post(args, options))
    },
  })
}

export function usePostApiV1ReportsDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.reports.documents.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.reports.documents.$post>,
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
  const mutationDefaults = getPostApiV1ReportsDocumentsMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ReportsExpensesMutationKey() {
  return ['api', '/api/v1/reports/expenses', 'POST'] as const
}

export function getPostApiV1ReportsExpensesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.expenses.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.reports.expenses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReportsExpensesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.reports.expenses.$post>) {
      return parseResponse(client.api.v1.reports.expenses.$post(args, options))
    },
  })
}

export function usePostApiV1ReportsExpenses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.expenses.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.reports.expenses.$post>,
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
  const mutationDefaults = getPostApiV1ReportsExpensesMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ReportsInvoiceItemsMutationKey() {
  return ['api', '/api/v1/reports/invoice_items', 'POST'] as const
}

export function getPostApiV1ReportsInvoiceItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.invoice_items.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.reports.invoice_items.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReportsInvoiceItemsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.reports.invoice_items.$post>) {
      return parseResponse(client.api.v1.reports.invoice_items.$post(args, options))
    },
  })
}

export function usePostApiV1ReportsInvoiceItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.reports.invoice_items.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.reports.invoice_items.$post>,
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
  const mutationDefaults = getPostApiV1ReportsInvoiceItemsMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ReportsInvoicesMutationKey() {
  return ['api', '/api/v1/reports/invoices', 'POST'] as const
}

export function getPostApiV1ReportsInvoicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.invoices.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.reports.invoices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReportsInvoicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.reports.invoices.$post>) {
      return parseResponse(client.api.v1.reports.invoices.$post(args, options))
    },
  })
}

export function usePostApiV1ReportsInvoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.invoices.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.reports.invoices.$post>,
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
  const mutationDefaults = getPostApiV1ReportsInvoicesMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ReportsPaymentsMutationKey() {
  return ['api', '/api/v1/reports/payments', 'POST'] as const
}

export function getPostApiV1ReportsPaymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.payments.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.reports.payments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReportsPaymentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.reports.payments.$post>) {
      return parseResponse(client.api.v1.reports.payments.$post(args, options))
    },
  })
}

export function usePostApiV1ReportsPayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.payments.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.reports.payments.$post>,
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
  const mutationDefaults = getPostApiV1ReportsPaymentsMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ReportsProductsMutationKey() {
  return ['api', '/api/v1/reports/products', 'POST'] as const
}

export function getPostApiV1ReportsProductsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.products.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.reports.products.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReportsProductsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.reports.products.$post>) {
      return parseResponse(client.api.v1.reports.products.$post(args, options))
    },
  })
}

export function usePostApiV1ReportsProducts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.products.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.reports.products.$post>,
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
  const mutationDefaults = getPostApiV1ReportsProductsMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ReportsProductSalesMutationKey() {
  return ['api', '/api/v1/reports/product_sales', 'POST'] as const
}

export function getPostApiV1ReportsProductSalesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.product_sales.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.reports.product_sales.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReportsProductSalesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.reports.product_sales.$post>) {
      return parseResponse(client.api.v1.reports.product_sales.$post(args, options))
    },
  })
}

export function usePostApiV1ReportsProductSales<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.reports.product_sales.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.reports.product_sales.$post>,
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
  const mutationDefaults = getPostApiV1ReportsProductSalesMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ReportsProfitlossMutationKey() {
  return ['api', '/api/v1/reports/profitloss', 'POST'] as const
}

export function getPostApiV1ReportsProfitlossMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.profitloss.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.reports.profitloss.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReportsProfitlossMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.reports.profitloss.$post>) {
      return parseResponse(client.api.v1.reports.profitloss.$post(args, options))
    },
  })
}

export function usePostApiV1ReportsProfitloss<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.reports.profitloss.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.reports.profitloss.$post>,
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
  const mutationDefaults = getPostApiV1ReportsProfitlossMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ReportsQuoteItemsMutationKey() {
  return ['api', '/api/v1/reports/quote_items', 'POST'] as const
}

export function getPostApiV1ReportsQuoteItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.quote_items.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.reports.quote_items.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReportsQuoteItemsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.reports.quote_items.$post>) {
      return parseResponse(client.api.v1.reports.quote_items.$post(args, options))
    },
  })
}

export function usePostApiV1ReportsQuoteItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.reports.quote_items.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.reports.quote_items.$post>,
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
  const mutationDefaults = getPostApiV1ReportsQuoteItemsMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ReportsQuotesMutationKey() {
  return ['api', '/api/v1/reports/quotes', 'POST'] as const
}

export function getPostApiV1ReportsQuotesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.quotes.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.reports.quotes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReportsQuotesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.reports.quotes.$post>) {
      return parseResponse(client.api.v1.reports.quotes.$post(args, options))
    },
  })
}

export function usePostApiV1ReportsQuotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.quotes.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.reports.quotes.$post>,
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
  const mutationDefaults = getPostApiV1ReportsQuotesMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ReportsRecurringInvoicesMutationKey() {
  return ['api', '/api/v1/reports/recurring_invoices', 'POST'] as const
}

export function getPostApiV1ReportsRecurringInvoicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.reports.recurring_invoices.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.reports.recurring_invoices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReportsRecurringInvoicesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.reports.recurring_invoices.$post>,
    ) {
      return parseResponse(client.api.v1.reports.recurring_invoices.$post(args, options))
    },
  })
}

export function usePostApiV1ReportsRecurringInvoices<
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
                Awaited<ReturnType<typeof client.api.v1.reports.recurring_invoices.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.reports.recurring_invoices.$post>,
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
  const mutationDefaults = getPostApiV1ReportsRecurringInvoicesMutationOptions<
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

export function getPostApiV1ReportsTasksMutationKey() {
  return ['api', '/api/v1/reports/tasks', 'POST'] as const
}

export function getPostApiV1ReportsTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.tasks.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.reports.tasks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReportsTasksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.reports.tasks.$post>) {
      return parseResponse(client.api.v1.reports.tasks.$post(args, options))
    },
  })
}

export function usePostApiV1ReportsTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.tasks.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.reports.tasks.$post>,
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
  const mutationDefaults = getPostApiV1ReportsTasksMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ReportsActivitiesMutationKey() {
  return ['api', '/api/v1/reports/activities', 'POST'] as const
}

export function getPostApiV1ReportsActivitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.activities.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.reports.activities.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReportsActivitiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.reports.activities.$post>) {
      return parseResponse(client.api.v1.reports.activities.$post(args, options))
    },
  })
}

export function usePostApiV1ReportsActivities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.reports.activities.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.reports.activities.$post>,
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
  const mutationDefaults = getPostApiV1ReportsActivitiesMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ReportsClientContactsMutationKey() {
  return ['api', '/api/v1/reports/client_contacts', 'POST'] as const
}

export function getPostApiV1ReportsClientContactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.reports.client_contacts.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.reports.client_contacts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReportsClientContactsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.reports.client_contacts.$post>) {
      return parseResponse(client.api.v1.reports.client_contacts.$post(args, options))
    },
  })
}

export function usePostApiV1ReportsClientContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.reports.client_contacts.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.reports.client_contacts.$post>,
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
  const mutationDefaults = getPostApiV1ReportsClientContactsMutationOptions<
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

export function getPostApiV1ReportsArDetailReportMutationKey() {
  return ['api', '/api/v1/reports/ar_detail_report', 'POST'] as const
}

export function getPostApiV1ReportsArDetailReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.reports.ar_detail_report.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.reports.ar_detail_report.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReportsArDetailReportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.reports.ar_detail_report.$post>) {
      return parseResponse(client.api.v1.reports.ar_detail_report.$post(args, options))
    },
  })
}

export function usePostApiV1ReportsArDetailReport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.reports.ar_detail_report.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.reports.ar_detail_report.$post>,
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
  const mutationDefaults = getPostApiV1ReportsArDetailReportMutationOptions<
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

export function getPostApiV1ReportsArSummaryReportMutationKey() {
  return ['api', '/api/v1/reports/ar_summary_report', 'POST'] as const
}

export function getPostApiV1ReportsArSummaryReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.reports.ar_summary_report.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.reports.ar_summary_report.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReportsArSummaryReportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.reports.ar_summary_report.$post>) {
      return parseResponse(client.api.v1.reports.ar_summary_report.$post(args, options))
    },
  })
}

export function usePostApiV1ReportsArSummaryReport<
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
                Awaited<ReturnType<typeof client.api.v1.reports.ar_summary_report.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.reports.ar_summary_report.$post>,
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
  const mutationDefaults = getPostApiV1ReportsArSummaryReportMutationOptions<
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

export function getPostApiV1ReportsClientBalanceReportMutationKey() {
  return ['api', '/api/v1/reports/client_balance_report', 'POST'] as const
}

export function getPostApiV1ReportsClientBalanceReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.reports.client_balance_report.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.reports.client_balance_report.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReportsClientBalanceReportMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.reports.client_balance_report.$post>,
    ) {
      return parseResponse(client.api.v1.reports.client_balance_report.$post(args, options))
    },
  })
}

export function usePostApiV1ReportsClientBalanceReport<
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
                Awaited<ReturnType<typeof client.api.v1.reports.client_balance_report.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.reports.client_balance_report.$post>,
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
  const mutationDefaults = getPostApiV1ReportsClientBalanceReportMutationOptions<
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

export function getPostApiV1ReportsClientSalesReportMutationKey() {
  return ['api', '/api/v1/reports/client_sales_report', 'POST'] as const
}

export function getPostApiV1ReportsClientSalesReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.reports.client_sales_report.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.reports.client_sales_report.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReportsClientSalesReportMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.reports.client_sales_report.$post>,
    ) {
      return parseResponse(client.api.v1.reports.client_sales_report.$post(args, options))
    },
  })
}

export function usePostApiV1ReportsClientSalesReport<
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
                Awaited<ReturnType<typeof client.api.v1.reports.client_sales_report.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.reports.client_sales_report.$post>,
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
  const mutationDefaults = getPostApiV1ReportsClientSalesReportMutationOptions<
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

export function getPostApiV1ReportsTaxSummaryReportMutationKey() {
  return ['api', '/api/v1/reports/tax_summary_report', 'POST'] as const
}

export function getPostApiV1ReportsTaxSummaryReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.reports.tax_summary_report.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.reports.tax_summary_report.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReportsTaxSummaryReportMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.reports.tax_summary_report.$post>,
    ) {
      return parseResponse(client.api.v1.reports.tax_summary_report.$post(args, options))
    },
  })
}

export function usePostApiV1ReportsTaxSummaryReport<
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
                Awaited<ReturnType<typeof client.api.v1.reports.tax_summary_report.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.reports.tax_summary_report.$post>,
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
  const mutationDefaults = getPostApiV1ReportsTaxSummaryReportMutationOptions<
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

export function getPostApiV1ReportsTaxPeriodReportMutationKey() {
  return ['api', '/api/v1/reports/tax_period_report', 'POST'] as const
}

export function getPostApiV1ReportsTaxPeriodReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.reports.tax_period_report.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.reports.tax_period_report.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReportsTaxPeriodReportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.reports.tax_period_report.$post>) {
      return parseResponse(client.api.v1.reports.tax_period_report.$post(args, options))
    },
  })
}

export function usePostApiV1ReportsTaxPeriodReport<
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
                Awaited<ReturnType<typeof client.api.v1.reports.tax_period_report.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.reports.tax_period_report.$post>,
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
  const mutationDefaults = getPostApiV1ReportsTaxPeriodReportMutationOptions<
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

export function getPostApiV1ReportsUserSalesReportMutationKey() {
  return ['api', '/api/v1/reports/user_sales_report', 'POST'] as const
}

export function getPostApiV1ReportsUserSalesReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.reports.user_sales_report.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.reports.user_sales_report.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReportsUserSalesReportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.reports.user_sales_report.$post>) {
      return parseResponse(client.api.v1.reports.user_sales_report.$post(args, options))
    },
  })
}

export function usePostApiV1ReportsUserSalesReport<
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
                Awaited<ReturnType<typeof client.api.v1.reports.user_sales_report.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.reports.user_sales_report.$post>,
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
  const mutationDefaults = getPostApiV1ReportsUserSalesReportMutationOptions<
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

export function getPostApiV1ReportsProjectsMutationKey() {
  return ['api', '/api/v1/reports/projects', 'POST'] as const
}

export function getPostApiV1ReportsProjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.projects.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.reports.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReportsProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.reports.projects.$post>) {
      return parseResponse(client.api.v1.reports.projects.$post(args, options))
    },
  })
}

export function usePostApiV1ReportsProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.projects.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.reports.projects.$post>,
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
  const mutationDefaults = getPostApiV1ReportsProjectsMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ReportsPreviewHashMutationKey() {
  return ['api', '/api/v1/reports/preview/:hash', 'POST'] as const
}

export function getPostApiV1ReportsPreviewHashMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.reports.preview)[':hash']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.reports.preview)[':hash']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReportsPreviewHashMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.reports.preview)[':hash']['$post']>,
    ) {
      return parseResponse(client.api.v1.reports.preview[':hash'].$post(args, options))
    },
  })
}

export function usePostApiV1ReportsPreviewHash<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.reports.preview)[':hash']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.reports.preview)[':hash']['$post']>,
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
  const mutationDefaults = getPostApiV1ReportsPreviewHashMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ExportsPreviewHashMutationKey() {
  return ['api', '/api/v1/exports/preview/:hash', 'POST'] as const
}

export function getPostApiV1ExportsPreviewHashMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.exports.preview)[':hash']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.exports.preview)[':hash']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ExportsPreviewHashMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.exports.preview)[':hash']['$post']>,
    ) {
      return parseResponse(client.api.v1.exports.preview[':hash'].$post(args, options))
    },
  })
}

export function usePostApiV1ExportsPreviewHash<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.exports.preview)[':hash']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.exports.preview)[':hash']['$post']>,
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
  const mutationDefaults = getPostApiV1ExportsPreviewHashMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1SelfUpdateMutationKey() {
  return ['api', '/api/v1/self-update', 'POST'] as const
}

export function getPostApiV1SelfUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['self-update']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['self-update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SelfUpdateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['self-update']['$post']>) {
      return parseResponse(client.api.v1['self-update'].$post(args, options))
    },
  })
}

export function usePostApiV1SelfUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['self-update']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['self-update']['$post']>,
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
  const mutationDefaults = getPostApiV1SelfUpdateMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1SelfUpdateCheckVersionMutationKey() {
  return ['api', '/api/v1/self-update/check_version', 'POST'] as const
}

export function getPostApiV1SelfUpdateCheckVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['self-update']['check_version']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['self-update']['check_version']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SelfUpdateCheckVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['self-update']['check_version']['$post']>,
    ) {
      return parseResponse(client.api.v1['self-update'].check_version.$post(args, options))
    },
  })
}

export function usePostApiV1SelfUpdateCheckVersion<
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
                Awaited<ReturnType<(typeof client.api.v1)['self-update']['check_version']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['self-update']['check_version']['$post']>,
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
  const mutationDefaults = getPostApiV1SelfUpdateCheckVersionMutationOptions<
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

export function getApiV1StaticsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.statics.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/statics', keyArgs] as const
}

export function getApiV1StaticsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.statics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1StaticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.statics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Statics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.statics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.statics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.statics.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.statics.$get>>>>
          >,
          ReturnType<typeof getApiV1StaticsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.statics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1StaticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1StaticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.statics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SubscriptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.subscriptions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/subscriptions', keyArgs] as const
}

export function getApiV1SubscriptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.subscriptions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Subscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.subscriptions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subscriptions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subscriptions.$get>>>
            >
          >,
          ReturnType<typeof getApiV1SubscriptionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subscriptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1SubscriptionsMutationKey() {
  return ['api', '/api/v1/subscriptions', 'POST'] as const
}

export function getPostApiV1SubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subscriptions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.subscriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.subscriptions.$post>) {
      return parseResponse(client.api.v1.subscriptions.$post(args, options))
    },
  })
}

export function usePostApiV1Subscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subscriptions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.subscriptions.$post>,
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
  const mutationDefaults = getPostApiV1SubscriptionsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1SubscriptionsCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.subscriptions.create.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/subscriptions/create', keyArgs] as const
}

export function getApiV1SubscriptionsCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.subscriptions.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SubscriptionsCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.subscriptions.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SubscriptionsCreate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subscriptions.create.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.subscriptions.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.subscriptions.create.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.subscriptions.create.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1SubscriptionsCreateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subscriptions.create.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SubscriptionsCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SubscriptionsCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.subscriptions.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SubscriptionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.subscriptions)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/subscriptions/:id', keyArgs] as const
}

export function getApiV1SubscriptionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.subscriptions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SubscriptionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.subscriptions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SubscriptionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.subscriptions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SubscriptionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SubscriptionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SubscriptionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.subscriptions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1SubscriptionsIdMutationKey() {
  return ['api', '/api/v1/subscriptions/:id', 'PUT'] as const
}

export function getPutApiV1SubscriptionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.subscriptions)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1SubscriptionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.subscriptions)[':id']['$put']>) {
      return parseResponse(client.api.v1.subscriptions[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1SubscriptionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.subscriptions)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1SubscriptionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1SubscriptionsIdMutationKey() {
  return ['api', '/api/v1/subscriptions/:id', 'DELETE'] as const
}

export function getDeleteApiV1SubscriptionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.subscriptions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1SubscriptionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.subscriptions)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.subscriptions[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1SubscriptionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.subscriptions)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1SubscriptionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1SubscriptionsIdEditQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.subscriptions)[':id']['edit']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/subscriptions/:id/edit', keyArgs] as const
}

export function getApiV1SubscriptionsIdEditQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.subscriptions)[':id']['edit']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SubscriptionsIdEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.subscriptions[':id'].edit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SubscriptionsIdEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':id']['edit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.subscriptions)[':id']['edit']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':id']['edit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':id']['edit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SubscriptionsIdEditQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':id']['edit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SubscriptionsIdEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SubscriptionsIdEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.subscriptions[':id'].edit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1SubscriptionsBulkMutationKey() {
  return ['api', '/api/v1/subscriptions/bulk', 'POST'] as const
}

export function getPostApiV1SubscriptionsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subscriptions.bulk.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.subscriptions.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SubscriptionsBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.subscriptions.bulk.$post>) {
      return parseResponse(client.api.v1.subscriptions.bulk.$post(args, options))
    },
  })
}

export function usePostApiV1SubscriptionsBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.subscriptions.bulk.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.subscriptions.bulk.$post>,
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
  const mutationDefaults = getPostApiV1SubscriptionsBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1SchedulerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.scheduler.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/scheduler', keyArgs] as const
}

export function getApiV1SchedulerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.scheduler.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SchedulerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.scheduler.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Scheduler<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.scheduler.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.scheduler.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.scheduler.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.scheduler.$get>>>
            >
          >,
          ReturnType<typeof getApiV1SchedulerQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.scheduler.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SchedulerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SchedulerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.scheduler.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1SupportMessagesSendMutationKey() {
  return ['api', '/api/v1/support/messages/send', 'POST'] as const
}

export function getPostApiV1SupportMessagesSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.support.messages.send.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.support.messages.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SupportMessagesSendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.support.messages.send.$post>) {
      return parseResponse(client.api.v1.support.messages.send.$post(args, options))
    },
  })
}

export function usePostApiV1SupportMessagesSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.support.messages.send.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.support.messages.send.$post>,
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
  const mutationDefaults = getPostApiV1SupportMessagesSendMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1SystemLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.system_logs.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/system_logs', keyArgs] as const
}

export function getApiV1SystemLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.system_logs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SystemLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.system_logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SystemLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system_logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.system_logs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system_logs.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system_logs.$get>>>
            >
          >,
          ReturnType<typeof getApiV1SystemLogsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system_logs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SystemLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SystemLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.system_logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SystemLogsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.system_logs)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/system_logs/:id', keyArgs] as const
}

export function getApiV1SystemLogsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.system_logs)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SystemLogsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.system_logs[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SystemLogsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.system_logs)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.system_logs)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.system_logs)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.system_logs)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SystemLogsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.system_logs)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SystemLogsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SystemLogsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.system_logs[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1TaskSchedulersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.task_schedulers.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/task_schedulers', keyArgs] as const
}

export function getApiV1TaskSchedulersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.task_schedulers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TaskSchedulersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.task_schedulers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TaskSchedulers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_schedulers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.task_schedulers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_schedulers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_schedulers.$get>>>
            >
          >,
          ReturnType<typeof getApiV1TaskSchedulersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_schedulers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TaskSchedulersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TaskSchedulersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.task_schedulers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1TaskSchedulersMutationKey() {
  return ['api', '/api/v1/task_schedulers', 'POST'] as const
}

export function getPostApiV1TaskSchedulersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_schedulers.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.task_schedulers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TaskSchedulersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.task_schedulers.$post>) {
      return parseResponse(client.api.v1.task_schedulers.$post(args, options))
    },
  })
}

export function usePostApiV1TaskSchedulers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_schedulers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.task_schedulers.$post>,
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
  const mutationDefaults = getPostApiV1TaskSchedulersMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1TaskSchedulersCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.task_schedulers.create.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/task_schedulers/create', keyArgs] as const
}

export function getApiV1TaskSchedulersCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.task_schedulers.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TaskSchedulersCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.task_schedulers.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TaskSchedulersCreate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_schedulers.create.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.task_schedulers.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.task_schedulers.create.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.task_schedulers.create.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1TaskSchedulersCreateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_schedulers.create.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TaskSchedulersCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TaskSchedulersCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.task_schedulers.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1TaskSchedulersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.task_schedulers)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/task_schedulers/:id', keyArgs] as const
}

export function getApiV1TaskSchedulersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.task_schedulers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TaskSchedulersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.task_schedulers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TaskSchedulersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.task_schedulers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.task_schedulers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.task_schedulers)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.task_schedulers)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1TaskSchedulersIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.task_schedulers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TaskSchedulersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TaskSchedulersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.task_schedulers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1TaskSchedulersIdMutationKey() {
  return ['api', '/api/v1/task_schedulers/:id', 'PUT'] as const
}

export function getPutApiV1TaskSchedulersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.task_schedulers)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.task_schedulers)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1TaskSchedulersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.task_schedulers)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v1.task_schedulers[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1TaskSchedulersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.task_schedulers)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.task_schedulers)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1TaskSchedulersIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1TaskSchedulersIdMutationKey() {
  return ['api', '/api/v1/task_schedulers/:id', 'DELETE'] as const
}

export function getDeleteApiV1TaskSchedulersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.task_schedulers)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.task_schedulers)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1TaskSchedulersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.task_schedulers)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.task_schedulers[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1TaskSchedulersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.task_schedulers)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.task_schedulers)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1TaskSchedulersIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1TaskSchedulersBulkMutationKey() {
  return ['api', '/api/v1/task_schedulers/bulk', 'POST'] as const
}

export function getPostApiV1TaskSchedulersBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_schedulers.bulk.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.task_schedulers.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TaskSchedulersBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.task_schedulers.bulk.$post>) {
      return parseResponse(client.api.v1.task_schedulers.bulk.$post(args, options))
    },
  })
}

export function usePostApiV1TaskSchedulersBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.task_schedulers.bulk.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.task_schedulers.bulk.$post>,
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
  const mutationDefaults = getPostApiV1TaskSchedulersBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1TaskStatusesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.task_statuses.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/task_statuses', keyArgs] as const
}

export function getApiV1TaskStatusesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.task_statuses.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TaskStatusesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.task_statuses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TaskStatuses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_statuses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.task_statuses.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_statuses.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_statuses.$get>>>
            >
          >,
          ReturnType<typeof getApiV1TaskStatusesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_statuses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TaskStatusesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TaskStatusesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.task_statuses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1TaskStatusesMutationKey() {
  return ['api', '/api/v1/task_statuses', 'POST'] as const
}

export function getPostApiV1TaskStatusesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_statuses.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.task_statuses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TaskStatusesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.task_statuses.$post>) {
      return parseResponse(client.api.v1.task_statuses.$post(args, options))
    },
  })
}

export function usePostApiV1TaskStatuses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_statuses.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.task_statuses.$post>,
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
  const mutationDefaults = getPostApiV1TaskStatusesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1TaskStatusesCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.task_statuses.create.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/task_statuses/create', keyArgs] as const
}

export function getApiV1TaskStatusesCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.task_statuses.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TaskStatusesCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.task_statuses.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TaskStatusesCreate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_statuses.create.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.task_statuses.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.task_statuses.create.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.task_statuses.create.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1TaskStatusesCreateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_statuses.create.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TaskStatusesCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TaskStatusesCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.task_statuses.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1TaskStatusesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.task_statuses)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/task_statuses/:id', keyArgs] as const
}

export function getApiV1TaskStatusesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.task_statuses)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TaskStatusesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.task_statuses[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TaskStatusesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.task_statuses)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.task_statuses)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.task_statuses)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.task_statuses)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1TaskStatusesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.task_statuses)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TaskStatusesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TaskStatusesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.task_statuses[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1TaskStatusesIdMutationKey() {
  return ['api', '/api/v1/task_statuses/:id', 'PUT'] as const
}

export function getPutApiV1TaskStatusesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.task_statuses)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.task_statuses)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1TaskStatusesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.task_statuses)[':id']['$put']>) {
      return parseResponse(client.api.v1.task_statuses[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1TaskStatusesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.task_statuses)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.task_statuses)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1TaskStatusesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1TaskStatusesIdMutationKey() {
  return ['api', '/api/v1/task_statuses/:id', 'DELETE'] as const
}

export function getDeleteApiV1TaskStatusesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.task_statuses)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.task_statuses)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1TaskStatusesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.task_statuses)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.task_statuses[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1TaskStatusesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.task_statuses)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.task_statuses)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1TaskStatusesIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1TaskStatusesIdEditQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.task_statuses)[':id']['edit']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/task_statuses/:id/edit', keyArgs] as const
}

export function getApiV1TaskStatusesIdEditQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.task_statuses)[':id']['edit']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TaskStatusesIdEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.task_statuses[':id'].edit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TaskStatusesIdEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.task_statuses)[':id']['edit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.task_statuses)[':id']['edit']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.task_statuses)[':id']['edit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.task_statuses)[':id']['edit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1TaskStatusesIdEditQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.task_statuses)[':id']['edit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TaskStatusesIdEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TaskStatusesIdEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.task_statuses[':id'].edit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1TaskStatusesBulkMutationKey() {
  return ['api', '/api/v1/task_statuses/bulk', 'POST'] as const
}

export function getPostApiV1TaskStatusesBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.task_statuses.bulk.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.task_statuses.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TaskStatusesBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.task_statuses.bulk.$post>) {
      return parseResponse(client.api.v1.task_statuses.bulk.$post(args, options))
    },
  })
}

export function usePostApiV1TaskStatusesBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.task_statuses.bulk.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.task_statuses.bulk.$post>,
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
  const mutationDefaults = getPostApiV1TaskStatusesBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1TaxRatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tax_rates.$get>>,
) {
  return ['api', '/api/v1/tax_rates', toValue(args)] as const
}

export function getApiV1TaxRatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tax_rates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TaxRatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tax_rates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TaxRates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tax_rates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tax_rates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tax_rates.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tax_rates.$get>>>
            >
          >,
          ReturnType<typeof getApiV1TaxRatesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tax_rates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TaxRatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TaxRatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tax_rates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1TaxRatesCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tax_rates.create.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/tax_rates/create', keyArgs] as const
}

export function getApiV1TaxRatesCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tax_rates.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TaxRatesCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tax_rates.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TaxRatesCreate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tax_rates.create.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tax_rates.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tax_rates.create.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tax_rates.create.$get>>>
            >
          >,
          ReturnType<typeof getApiV1TaxRatesCreateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tax_rates.create.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TaxRatesCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TaxRatesCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tax_rates.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1TaxRatesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tax_rates)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/tax_rates/:id', keyArgs] as const
}

export function getApiV1TaxRatesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tax_rates)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TaxRatesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tax_rates[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TaxRatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tax_rates)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tax_rates)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.tax_rates)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.tax_rates)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1TaxRatesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tax_rates)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TaxRatesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TaxRatesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tax_rates[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1TaxRatesIdMutationKey() {
  return ['api', '/api/v1/tax_rates/:id', 'PUT'] as const
}

export function getPutApiV1TaxRatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tax_rates)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.tax_rates)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1TaxRatesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.tax_rates)[':id']['$put']>) {
      return parseResponse(client.api.v1.tax_rates[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1TaxRatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.tax_rates)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.tax_rates)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1TaxRatesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1TaxRatesIdMutationKey() {
  return ['api', '/api/v1/tax_rates/:id', 'DELETE'] as const
}

export function getDeleteApiV1TaxRatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.tax_rates)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.tax_rates)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1TaxRatesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.tax_rates)[':id']['$delete']>) {
      return parseResponse(client.api.v1.tax_rates[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1TaxRatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.tax_rates)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.tax_rates)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1TaxRatesIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1TaxRatesIdEditQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tax_rates)[':id']['edit']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/tax_rates/:id/edit', keyArgs] as const
}

export function getApiV1TaxRatesIdEditQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tax_rates)[':id']['edit']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TaxRatesIdEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tax_rates[':id'].edit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TaxRatesIdEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.tax_rates)[':id']['edit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tax_rates)[':id']['edit']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.tax_rates)[':id']['edit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.tax_rates)[':id']['edit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1TaxRatesIdEditQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.tax_rates)[':id']['edit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TaxRatesIdEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TaxRatesIdEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tax_rates[':id'].edit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1TaxRatesBulkMutationKey() {
  return ['api', '/api/v1/tax_rates/bulk', 'POST'] as const
}

export function getPostApiV1TaxRatesBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tax_rates.bulk.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.tax_rates.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TaxRatesBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.tax_rates.bulk.$post>) {
      return parseResponse(client.api.v1.tax_rates.bulk.$post(args, options))
    },
  })
}

export function usePostApiV1TaxRatesBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tax_rates.bulk.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.tax_rates.bulk.$post>,
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
  const mutationDefaults = getPostApiV1TaxRatesBulkMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1TemplatesMutationKey() {
  return ['api', '/api/v1/templates', 'POST'] as const
}

export function getPostApiV1TemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.templates.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.templates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TemplatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.templates.$post>) {
      return parseResponse(client.api.v1.templates.$post(args, options))
    },
  })
}

export function usePostApiV1Templates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.templates.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.templates.$post>,
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
  const mutationDefaults = getPostApiV1TemplatesMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1TemplatesPreviewHashMutationKey() {
  return ['api', '/api/v1/templates/preview/:hash', 'POST'] as const
}

export function getPostApiV1TemplatesPreviewHashMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.templates.preview)[':hash']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.templates.preview)[':hash']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TemplatesPreviewHashMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.templates.preview)[':hash']['$post']>,
    ) {
      return parseResponse(client.api.v1.templates.preview[':hash'].$post(args, options))
    },
  })
}

export function usePostApiV1TemplatesPreviewHash<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.templates.preview)[':hash']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.templates.preview)[':hash']['$post']>,
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
  const mutationDefaults = getPostApiV1TemplatesPreviewHashMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1SearchMutationKey() {
  return ['api', '/api/v1/search', 'POST'] as const
}

export function getPostApiV1SearchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.search.$post>) {
      return parseResponse(client.api.v1.search.$post(args, options))
    },
  })
}

export function usePostApiV1Search<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.search.$post>,
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
  const mutationDefaults = getPostApiV1SearchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1TokensQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tokens.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/tokens', keyArgs] as const
}

export function getApiV1TokensQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tokens.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tokens.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Tokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tokens.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tokens.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tokens.$get>>>>
          >,
          ReturnType<typeof getApiV1TokensQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tokens.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tokens.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1TokensMutationKey() {
  return ['api', '/api/v1/tokens', 'POST'] as const
}

export function getPostApiV1TokensMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tokens.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.tokens.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TokensMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.tokens.$post>) {
      return parseResponse(client.api.v1.tokens.$post(args, options))
    },
  })
}

export function usePostApiV1Tokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tokens.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.tokens.$post>,
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
  const mutationDefaults = getPostApiV1TokensMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1TokensIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tokens)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/tokens/:id', keyArgs] as const
}

export function getApiV1TokensIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tokens)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TokensIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tokens[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TokensId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tokens)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tokens)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.tokens)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.tokens)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1TokensIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tokens)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TokensIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TokensIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tokens[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1TokensIdMutationKey() {
  return ['api', '/api/v1/tokens/:id', 'PUT'] as const
}

export function getPutApiV1TokensIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tokens)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.tokens)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1TokensIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.tokens)[':id']['$put']>) {
      return parseResponse(client.api.v1.tokens[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1TokensId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.tokens)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.tokens)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1TokensIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1TokensIdMutationKey() {
  return ['api', '/api/v1/tokens/:id', 'DELETE'] as const
}

export function getDeleteApiV1TokensIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tokens)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.tokens)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1TokensIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.tokens)[':id']['$delete']>) {
      return parseResponse(client.api.v1.tokens[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1TokensId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.tokens)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.tokens)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1TokensIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1TokensIdEditQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tokens)[':id']['edit']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/tokens/:id/edit', keyArgs] as const
}

export function getApiV1TokensIdEditQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tokens)[':id']['edit']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TokensIdEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tokens[':id'].edit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TokensIdEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.tokens)[':id']['edit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tokens)[':id']['edit']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.tokens)[':id']['edit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.tokens)[':id']['edit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1TokensIdEditQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.tokens)[':id']['edit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TokensIdEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TokensIdEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tokens[':id'].edit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1TokensCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tokens.create.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/tokens/create', keyArgs] as const
}

export function getApiV1TokensCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tokens.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TokensCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tokens.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TokensCreate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tokens.create.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tokens.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tokens.create.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tokens.create.$get>>>
            >
          >,
          ReturnType<typeof getApiV1TokensCreateQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tokens.create.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TokensCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TokensCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tokens.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1TokensBulkMutationKey() {
  return ['api', '/api/v1/tokens/bulk', 'POST'] as const
}

export function getPostApiV1TokensBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tokens.bulk.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.tokens.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TokensBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.tokens.bulk.$post>) {
      return parseResponse(client.api.v1.tokens.bulk.$post(args, options))
    },
  })
}

export function usePostApiV1TokensBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tokens.bulk.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.tokens.bulk.$post>,
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
  const mutationDefaults = getPostApiV1TokensBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1UsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/users', keyArgs] as const
}

export function getApiV1UsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
          >,
          ReturnType<typeof getApiV1UsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1UsersMutationKey() {
  return ['api', '/api/v1/users', 'POST'] as const
}

export function getPostApiV1UsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.users.$post>) {
      return parseResponse(client.api.v1.users.$post(args, options))
    },
  })
}

export function usePostApiV1Users<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.users.$post>,
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
  const mutationDefaults = getPostApiV1UsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1UsersCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.create.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/users/create', keyArgs] as const
}

export function getApiV1UsersCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.users.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersCreate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.create.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.create.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.create.$get>>>
            >
          >,
          ReturnType<typeof getApiV1UsersCreateQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.create.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.users.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1UsersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.users)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/users/:id', keyArgs] as const
}

export function getApiV1UsersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.users)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.users[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.users)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV1UsersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.users[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1UsersIdMutationKey() {
  return ['api', '/api/v1/users/:id', 'PUT'] as const
}

export function getPutApiV1UsersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.users)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1UsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.users)[':id']['$put']>) {
      return parseResponse(client.api.v1.users[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1UsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.users)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1UsersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiV1UsersIdMutationKey() {
  return ['api', '/api/v1/users/:id', 'DELETE'] as const
}

export function getDeleteApiV1UsersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.users)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1UsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.users)[':id']['$delete']>) {
      return parseResponse(client.api.v1.users[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1UsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.users)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.users)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1UsersIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1UsersIdEditQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.users)[':id']['edit']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/users/:id/edit', keyArgs] as const
}

export function getApiV1UsersIdEditQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.users)[':id']['edit']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersIdEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.users[':id'].edit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersIdEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':id']['edit']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.users)[':id']['edit']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.users)[':id']['edit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.users)[':id']['edit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1UsersIdEditQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.users)[':id']['edit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersIdEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersIdEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.users[':id'].edit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1UsersBulkMutationKey() {
  return ['api', '/api/v1/users/bulk', 'POST'] as const
}

export function getPostApiV1UsersBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.bulk.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.users.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.users.bulk.$post>) {
      return parseResponse(client.api.v1.users.bulk.$post(args, options))
    },
  })
}

export function usePostApiV1UsersBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.bulk.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.users.bulk.$post>,
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
  const mutationDefaults = getPostApiV1UsersBulkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1UsersUserDetachFromCompanyMutationKey() {
  return ['api', '/api/v1/users/:user/detach_from_company', 'DELETE'] as const
}

export function getDeleteApiV1UsersUserDetachFromCompanyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.users)[':user']['detach_from_company']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.users)[':user']['detach_from_company']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1UsersUserDetachFromCompanyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.users)[':user']['detach_from_company']['$delete']
      >,
    ) {
      return parseResponse(client.api.v1.users[':user'].detach_from_company.$delete(args, options))
    },
  })
}

export function useDeleteApiV1UsersUserDetachFromCompany<
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
                    (typeof client.api.v1.users)[':user']['detach_from_company']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.users)[':user']['detach_from_company']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1UsersUserDetachFromCompanyMutationOptions<
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

export function getPostApiV1UsersUserInviteMutationKey() {
  return ['api', '/api/v1/users/:user/invite', 'POST'] as const
}

export function getPostApiV1UsersUserInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.users)[':user']['invite']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.users)[':user']['invite']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersUserInviteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.users)[':user']['invite']['$post']>,
    ) {
      return parseResponse(client.api.v1.users[':user'].invite.$post(args, options))
    },
  })
}

export function usePostApiV1UsersUserInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.users)[':user']['invite']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.users)[':user']['invite']['$post']>,
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
  const mutationDefaults = getPostApiV1UsersUserInviteMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1UsersUserReconfirmMutationKey() {
  return ['api', '/api/v1/users/:user/reconfirm', 'POST'] as const
}

export function getPostApiV1UsersUserReconfirmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.users)[':user']['reconfirm']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.users)[':user']['reconfirm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersUserReconfirmMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.users)[':user']['reconfirm']['$post']>,
    ) {
      return parseResponse(client.api.v1.users[':user'].reconfirm.$post(args, options))
    },
  })
}

export function usePostApiV1UsersUserReconfirm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.users)[':user']['reconfirm']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.users)[':user']['reconfirm']['$post']>,
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
  const mutationDefaults = getPostApiV1UsersUserReconfirmMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1WebcronQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.webcron.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/webcron', keyArgs] as const
}

export function getApiV1WebcronQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.webcron.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WebcronQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.webcron.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Webcron<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webcron.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.webcron.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webcron.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webcron.$get>>>>
          >,
          ReturnType<typeof getApiV1WebcronQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webcron.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WebcronQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WebcronQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.webcron.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WebhooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.webhooks.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/webhooks', keyArgs] as const
}

export function getApiV1WebhooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.webhooks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.webhooks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Webhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.webhooks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webhooks.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webhooks.$get>>>
            >
          >,
          ReturnType<typeof getApiV1WebhooksQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webhooks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1WebhooksMutationKey() {
  return ['api', '/api/v1/webhooks', 'POST'] as const
}

export function getPostApiV1WebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webhooks.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1WebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.webhooks.$post>) {
      return parseResponse(client.api.v1.webhooks.$post(args, options))
    },
  })
}

export function usePostApiV1Webhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webhooks.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.webhooks.$post>,
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
  const mutationDefaults = getPostApiV1WebhooksMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1WebhooksIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.webhooks)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/webhooks/:id', keyArgs] as const
}

export function getApiV1WebhooksIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.webhooks)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WebhooksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.webhooks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WebhooksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.webhooks)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.webhooks)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.webhooks)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.webhooks)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1WebhooksIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.webhooks)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WebhooksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WebhooksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.webhooks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1WebhooksIdMutationKey() {
  return ['api', '/api/v1/webhooks/:id', 'PUT'] as const
}

export function getPutApiV1WebhooksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.webhooks)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.webhooks)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1WebhooksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.webhooks)[':id']['$put']>) {
      return parseResponse(client.api.v1.webhooks[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1WebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.webhooks)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.webhooks)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1WebhooksIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1WebhooksIdMutationKey() {
  return ['api', '/api/v1/webhooks/:id', 'DELETE'] as const
}

export function getDeleteApiV1WebhooksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.webhooks)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.webhooks)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1WebhooksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.webhooks)[':id']['$delete']>) {
      return parseResponse(client.api.v1.webhooks[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1WebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.webhooks)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.webhooks)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1WebhooksIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1WebhooksIdEditQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.webhooks)[':id']['edit']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/webhooks/:id/edit', keyArgs] as const
}

export function getApiV1WebhooksIdEditQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.webhooks)[':id']['edit']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WebhooksIdEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.webhooks[':id'].edit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WebhooksIdEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.webhooks)[':id']['edit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.webhooks)[':id']['edit']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.webhooks)[':id']['edit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.webhooks)[':id']['edit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1WebhooksIdEditQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.webhooks)[':id']['edit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WebhooksIdEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WebhooksIdEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.webhooks[':id'].edit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WebhooksCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.webhooks.create.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/webhooks/create', keyArgs] as const
}

export function getApiV1WebhooksCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.webhooks.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WebhooksCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.webhooks.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WebhooksCreate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webhooks.create.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.webhooks.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webhooks.create.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webhooks.create.$get>>>
            >
          >,
          ReturnType<typeof getApiV1WebhooksCreateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webhooks.create.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WebhooksCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WebhooksCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.webhooks.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1WebhooksBulkMutationKey() {
  return ['api', '/api/v1/webhooks/bulk', 'POST'] as const
}

export function getPostApiV1WebhooksBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webhooks.bulk.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.webhooks.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1WebhooksBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.webhooks.bulk.$post>) {
      return parseResponse(client.api.v1.webhooks.bulk.$post(args, options))
    },
  })
}

export function usePostApiV1WebhooksBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webhooks.bulk.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.webhooks.bulk.$post>,
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
  const mutationDefaults = getPostApiV1WebhooksBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CreditsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.credits.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/credits', keyArgs] as const
}

export function getApiV1CreditsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.credits.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CreditsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.credits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Credits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.credits.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.credits.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.credits.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.credits.$get>>>>
          >,
          ReturnType<typeof getApiV1CreditsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.credits.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CreditsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CreditsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.credits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1CreditsMutationKey() {
  return ['api', '/api/v1/credits', 'POST'] as const
}

export function getPostApiV1CreditsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.credits.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.credits.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CreditsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.credits.$post>) {
      return parseResponse(client.api.v1.credits.$post(args, options))
    },
  })
}

export function usePostApiV1Credits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.credits.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.credits.$post>,
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
  const mutationDefaults = getPostApiV1CreditsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CreditsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.credits)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/credits/:id', keyArgs] as const
}

export function getApiV1CreditsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.credits)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CreditsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.credits[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CreditsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.credits)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.credits)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.credits)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.credits)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CreditsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.credits)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CreditsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CreditsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.credits[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1CreditsIdMutationKey() {
  return ['api', '/api/v1/credits/:id', 'PUT'] as const
}

export function getPutApiV1CreditsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.credits)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.credits)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1CreditsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.credits)[':id']['$put']>) {
      return parseResponse(client.api.v1.credits[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1CreditsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.credits)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.credits)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1CreditsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1CreditsIdMutationKey() {
  return ['api', '/api/v1/credits/:id', 'DELETE'] as const
}

export function getDeleteApiV1CreditsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.credits)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.credits)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1CreditsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.credits)[':id']['$delete']>) {
      return parseResponse(client.api.v1.credits[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1CreditsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.credits)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.credits)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1CreditsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CreditsIdEditQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.credits)[':id']['edit']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/credits/:id/edit', keyArgs] as const
}

export function getApiV1CreditsIdEditQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.credits)[':id']['edit']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CreditsIdEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.credits[':id'].edit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CreditsIdEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.credits)[':id']['edit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.credits)[':id']['edit']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.credits)[':id']['edit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.credits)[':id']['edit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CreditsIdEditQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.credits)[':id']['edit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CreditsIdEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CreditsIdEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.credits[':id'].edit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CreditsCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.credits.create.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/credits/create', keyArgs] as const
}

export function getApiV1CreditsCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.credits.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CreditsCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.credits.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CreditsCreate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.credits.create.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.credits.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.credits.create.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.credits.create.$get>>>
            >
          >,
          ReturnType<typeof getApiV1CreditsCreateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.credits.create.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CreditsCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CreditsCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.credits.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1CreditsBulkMutationKey() {
  return ['api', '/api/v1/credits/bulk', 'POST'] as const
}

export function getPostApiV1CreditsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.credits.bulk.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.credits.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CreditsBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.credits.bulk.$post>) {
      return parseResponse(client.api.v1.credits.bulk.$post(args, options))
    },
  })
}

export function usePostApiV1CreditsBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.credits.bulk.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.credits.bulk.$post>,
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
  const mutationDefaults = getPostApiV1CreditsBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CreditInvitationKeyDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.credit)[':invitation_key']['download']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/credit/:invitation_key/download', keyArgs] as const
}

export function getApiV1CreditInvitationKeyDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.credit)[':invitation_key']['download']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CreditInvitationKeyDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.credit[':invitation_key'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CreditInvitationKeyDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.credit)[':invitation_key']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.credit)[':invitation_key']['download']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.credit)[':invitation_key']['download']['$get']>
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
                  ReturnType<(typeof client.api.v1.credit)[':invitation_key']['download']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1CreditInvitationKeyDownloadQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.credit)[':invitation_key']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CreditInvitationKeyDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CreditInvitationKeyDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.credit[':invitation_key'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1CreditsIdUploadMutationKey() {
  return ['api', '/api/v1/credits/:id/upload', 'POST'] as const
}

export function getPostApiV1CreditsIdUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.credits)[':id']['upload']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.credits)[':id']['upload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CreditsIdUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.credits)[':id']['upload']['$post']>,
    ) {
      return parseResponse(client.api.v1.credits[':id'].upload.$post(args, options))
    },
  })
}

export function usePostApiV1CreditsIdUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.credits)[':id']['upload']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.credits)[':id']['upload']['$post']>,
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
  const mutationDefaults = getPostApiV1CreditsIdUploadMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1TagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tags.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/tags', keyArgs] as const
}

export function getApiV1TagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tags.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Tags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tags.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.$get>>>>
          >,
          ReturnType<typeof getApiV1TagsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1TagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1TagsMutationKey() {
  return ['api', '/api/v1/tags', 'POST'] as const
}

export function getPostApiV1TagsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.v1.tags.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.tags.$post>) {
      return parseResponse(client.api.v1.tags.$post(args, options))
    },
  })
}

export function usePostApiV1Tags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.tags.$post>,
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
  const mutationDefaults = getPostApiV1TagsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1TagsCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tags.create.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/tags/create', keyArgs] as const
}

export function getApiV1TagsCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tags.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TagsCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tags.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TagsCreate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.create.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tags.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.create.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.create.$get>>>
            >
          >,
          ReturnType<typeof getApiV1TagsCreateQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.create.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TagsCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TagsCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tags.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1TagsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tags)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/tags/:id', keyArgs] as const
}

export function getApiV1TagsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tags)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TagsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tags[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TagsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tags)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tags)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tags)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tags)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV1TagsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tags)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TagsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TagsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tags[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1TagsIdMutationKey() {
  return ['api', '/api/v1/tags/:id', 'PUT'] as const
}

export function getPutApiV1TagsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tags)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.tags)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1TagsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.tags)[':id']['$put']>) {
      return parseResponse(client.api.v1.tags[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1TagsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tags)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.tags)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1TagsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiV1TagsIdMutationKey() {
  return ['api', '/api/v1/tags/:id', 'DELETE'] as const
}

export function getDeleteApiV1TagsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tags)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.tags)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1TagsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.tags)[':id']['$delete']>) {
      return parseResponse(client.api.v1.tags[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1TagsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.tags)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.tags)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1TagsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1TagsIdEditQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tags)[':id']['edit']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/tags/:id/edit', keyArgs] as const
}

export function getApiV1TagsIdEditQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tags)[':id']['edit']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TagsIdEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tags[':id'].edit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TagsIdEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tags)[':id']['edit']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tags)[':id']['edit']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.tags)[':id']['edit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.tags)[':id']['edit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1TagsIdEditQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.tags)[':id']['edit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TagsIdEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TagsIdEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tags[':id'].edit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1TagsBulkMutationKey() {
  return ['api', '/api/v1/tags/bulk', 'POST'] as const
}

export function getPostApiV1TagsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.bulk.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.tags.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TagsBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.tags.bulk.$post>) {
      return parseResponse(client.api.v1.tags.bulk.$post(args, options))
    },
  })
}

export function usePostApiV1TagsBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.bulk.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.tags.bulk.$post>,
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
  const mutationDefaults = getPostApiV1TagsBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1LocationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.locations.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/locations', keyArgs] as const
}

export function getApiV1LocationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.locations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.locations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Locations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.locations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.locations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.locations.$get>>>
            >
          >,
          ReturnType<typeof getApiV1LocationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.locations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.locations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1LocationsMutationKey() {
  return ['api', '/api/v1/locations', 'POST'] as const
}

export function getPostApiV1LocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.locations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.locations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LocationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.locations.$post>) {
      return parseResponse(client.api.v1.locations.$post(args, options))
    },
  })
}

export function usePostApiV1Locations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.locations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.locations.$post>,
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
  const mutationDefaults = getPostApiV1LocationsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1LocationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.locations)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/locations/:id', keyArgs] as const
}

export function getApiV1LocationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.locations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LocationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.locations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LocationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.locations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.locations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.locations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.locations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1LocationsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.locations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LocationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LocationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.locations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1LocationsIdMutationKey() {
  return ['api', '/api/v1/locations/:id', 'PUT'] as const
}

export function getPutApiV1LocationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.locations)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.locations)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1LocationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.locations)[':id']['$put']>) {
      return parseResponse(client.api.v1.locations[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1LocationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.locations)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.locations)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1LocationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1LocationsIdMutationKey() {
  return ['api', '/api/v1/locations/:id', 'DELETE'] as const
}

export function getDeleteApiV1LocationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.locations)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.locations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1LocationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.locations)[':id']['$delete']>) {
      return parseResponse(client.api.v1.locations[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1LocationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.locations)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.locations)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1LocationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1LocationsCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.locations.create.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/locations/create', keyArgs] as const
}

export function getApiV1LocationsCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.locations.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LocationsCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.locations.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LocationsCreate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.locations.create.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.locations.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.locations.create.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.locations.create.$get>>>
            >
          >,
          ReturnType<typeof getApiV1LocationsCreateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.locations.create.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LocationsCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LocationsCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.locations.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1LocationsBulkMutationKey() {
  return ['api', '/api/v1/locations/bulk', 'POST'] as const
}

export function getPostApiV1LocationsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.locations.bulk.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.locations.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LocationsBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.locations.bulk.$post>) {
      return parseResponse(client.api.v1.locations.bulk.$post(args, options))
    },
  })
}

export function usePostApiV1LocationsBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.locations.bulk.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.locations.bulk.$post>,
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
  const mutationDefaults = getPostApiV1LocationsBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1RecurringInvoicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.recurring_invoices.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/recurring_invoices', keyArgs] as const
}

export function getApiV1RecurringInvoicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.recurring_invoices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RecurringInvoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.recurring_invoices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RecurringInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recurring_invoices.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.recurring_invoices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.recurring_invoices.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.recurring_invoices.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1RecurringInvoicesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recurring_invoices.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RecurringInvoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RecurringInvoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.recurring_invoices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1RecurringInvoicesMutationKey() {
  return ['api', '/api/v1/recurring_invoices', 'POST'] as const
}

export function getPostApiV1RecurringInvoicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recurring_invoices.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.recurring_invoices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RecurringInvoicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.recurring_invoices.$post>) {
      return parseResponse(client.api.v1.recurring_invoices.$post(args, options))
    },
  })
}

export function usePostApiV1RecurringInvoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.recurring_invoices.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.recurring_invoices.$post>,
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
  const mutationDefaults = getPostApiV1RecurringInvoicesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1RecurringInvoicesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.recurring_invoices)[':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/recurring_invoices/:id', keyArgs] as const
}

export function getApiV1RecurringInvoicesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.recurring_invoices)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RecurringInvoicesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.recurring_invoices[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RecurringInvoicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.recurring_invoices)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.recurring_invoices)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.recurring_invoices)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.recurring_invoices)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1RecurringInvoicesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.recurring_invoices)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RecurringInvoicesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RecurringInvoicesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.recurring_invoices[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1RecurringInvoicesIdMutationKey() {
  return ['api', '/api/v1/recurring_invoices/:id', 'PUT'] as const
}

export function getPutApiV1RecurringInvoicesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.recurring_invoices)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.recurring_invoices)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1RecurringInvoicesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.recurring_invoices)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v1.recurring_invoices[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1RecurringInvoicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.recurring_invoices)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.recurring_invoices)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1RecurringInvoicesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1RecurringInvoicesIdMutationKey() {
  return ['api', '/api/v1/recurring_invoices/:id', 'DELETE'] as const
}

export function getDeleteApiV1RecurringInvoicesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.recurring_invoices)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.recurring_invoices)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1RecurringInvoicesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.recurring_invoices)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.recurring_invoices[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1RecurringInvoicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.recurring_invoices)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.recurring_invoices)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1RecurringInvoicesIdMutationOptions<
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

export function getApiV1RecurringInvoicesIdEditQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.recurring_invoices)[':id']['edit']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/recurring_invoices/:id/edit', keyArgs] as const
}

export function getApiV1RecurringInvoicesIdEditQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.recurring_invoices)[':id']['edit']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RecurringInvoicesIdEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.recurring_invoices[':id'].edit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RecurringInvoicesIdEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.recurring_invoices)[':id']['edit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.recurring_invoices)[':id']['edit']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.recurring_invoices)[':id']['edit']['$get']>
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
                  ReturnType<(typeof client.api.v1.recurring_invoices)[':id']['edit']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1RecurringInvoicesIdEditQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.recurring_invoices)[':id']['edit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RecurringInvoicesIdEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RecurringInvoicesIdEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.recurring_invoices[':id'].edit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1RecurringInvoicesCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.recurring_invoices.create.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/recurring_invoices/create', keyArgs] as const
}

export function getApiV1RecurringInvoicesCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.recurring_invoices.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RecurringInvoicesCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.recurring_invoices.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RecurringInvoicesCreate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.recurring_invoices.create.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.recurring_invoices.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.recurring_invoices.create.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.recurring_invoices.create.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1RecurringInvoicesCreateQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.recurring_invoices.create.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RecurringInvoicesCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RecurringInvoicesCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.recurring_invoices.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1RecurringInvoicesBulkMutationKey() {
  return ['api', '/api/v1/recurring_invoices/bulk', 'POST'] as const
}

export function getPostApiV1RecurringInvoicesBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.recurring_invoices.bulk.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.recurring_invoices.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RecurringInvoicesBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.recurring_invoices.bulk.$post>) {
      return parseResponse(client.api.v1.recurring_invoices.bulk.$post(args, options))
    },
  })
}

export function usePostApiV1RecurringInvoicesBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.recurring_invoices.bulk.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.recurring_invoices.bulk.$post>,
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
  const mutationDefaults = getPostApiV1RecurringInvoicesBulkMutationOptions<
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

export function getApiV1RecurringInvoicesIdActionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.recurring_invoices)[':id'][':action']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/recurring_invoices/:id/:action', keyArgs] as const
}

export function getApiV1RecurringInvoicesIdActionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.recurring_invoices)[':id'][':action']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RecurringInvoicesIdActionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.recurring_invoices[':id'][':action'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RecurringInvoicesIdAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.recurring_invoices)[':id'][':action']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.recurring_invoices)[':id'][':action']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.recurring_invoices)[':id'][':action']['$get']>
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
                  ReturnType<(typeof client.api.v1.recurring_invoices)[':id'][':action']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1RecurringInvoicesIdActionQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.recurring_invoices)[':id'][':action']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RecurringInvoicesIdActionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RecurringInvoicesIdActionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.recurring_invoices[':id'][':action'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1RecurringInvoiceInvitationKeyDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.recurring_invoice)[':invitation_key']['download']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/recurring_invoice/:invitation_key/download', keyArgs] as const
}

export function getApiV1RecurringInvoiceInvitationKeyDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.recurring_invoice)[':invitation_key']['download']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RecurringInvoiceInvitationKeyDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.recurring_invoice[':invitation_key'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RecurringInvoiceInvitationKeyDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.recurring_invoice)[':invitation_key']['download']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.recurring_invoice)[':invitation_key']['download']['$get']
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
                    (typeof client.api.v1.recurring_invoice)[':invitation_key']['download']['$get']
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
                    (typeof client.api.v1.recurring_invoice)[':invitation_key']['download']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1RecurringInvoiceInvitationKeyDownloadQueryKey>
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
              (typeof client.api.v1.recurring_invoice)[':invitation_key']['download']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RecurringInvoiceInvitationKeyDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RecurringInvoiceInvitationKeyDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.recurring_invoice[':invitation_key'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1RecurringInvoicesIdUploadMutationKey() {
  return ['api', '/api/v1/recurring_invoices/:id/upload', 'POST'] as const
}

export function getPostApiV1RecurringInvoicesIdUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.recurring_invoices)[':id']['upload']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.recurring_invoices)[':id']['upload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RecurringInvoicesIdUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.recurring_invoices)[':id']['upload']['$post']>,
    ) {
      return parseResponse(client.api.v1.recurring_invoices[':id'].upload.$post(args, options))
    },
  })
}

export function usePostApiV1RecurringInvoicesIdUpload<
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
                  ReturnType<(typeof client.api.v1.recurring_invoices)[':id']['upload']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.recurring_invoices)[':id']['upload']['$post']>,
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
  const mutationDefaults = getPostApiV1RecurringInvoicesIdUploadMutationOptions<
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

export function getApiV1TasksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tasks.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/tasks', keyArgs] as const
}

export function getApiV1TasksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tasks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tasks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Tasks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tasks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tasks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tasks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tasks.$get>>>>
          >,
          ReturnType<typeof getApiV1TasksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tasks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1TasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tasks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1TasksMutationKey() {
  return ['api', '/api/v1/tasks', 'POST'] as const
}

export function getPostApiV1TasksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tasks.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.tasks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TasksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.tasks.$post>) {
      return parseResponse(client.api.v1.tasks.$post(args, options))
    },
  })
}

export function usePostApiV1Tasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tasks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.tasks.$post>,
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
  const mutationDefaults = getPostApiV1TasksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1TasksIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tasks)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/tasks/:id', keyArgs] as const
}

export function getApiV1TasksIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tasks)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TasksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tasks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TasksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tasks)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tasks)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tasks)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tasks)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV1TasksIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tasks)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TasksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TasksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tasks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1TasksIdMutationKey() {
  return ['api', '/api/v1/tasks/:id', 'PUT'] as const
}

export function getPutApiV1TasksIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tasks)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.tasks)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1TasksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.tasks)[':id']['$put']>) {
      return parseResponse(client.api.v1.tasks[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1TasksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tasks)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.tasks)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1TasksIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiV1TasksIdMutationKey() {
  return ['api', '/api/v1/tasks/:id', 'DELETE'] as const
}

export function getDeleteApiV1TasksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tasks)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.tasks)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1TasksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.tasks)[':id']['$delete']>) {
      return parseResponse(client.api.v1.tasks[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1TasksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.tasks)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.tasks)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1TasksIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1TasksIdEditQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tasks)[':id']['edit']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/tasks/:id/edit', keyArgs] as const
}

export function getApiV1TasksIdEditQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tasks)[':id']['edit']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TasksIdEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tasks[':id'].edit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TasksIdEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tasks)[':id']['edit']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tasks)[':id']['edit']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.tasks)[':id']['edit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.tasks)[':id']['edit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1TasksIdEditQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.tasks)[':id']['edit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TasksIdEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TasksIdEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tasks[':id'].edit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1TasksCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tasks.create.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/tasks/create', keyArgs] as const
}

export function getApiV1TasksCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tasks.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TasksCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tasks.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TasksCreate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tasks.create.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tasks.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tasks.create.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tasks.create.$get>>>
            >
          >,
          ReturnType<typeof getApiV1TasksCreateQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tasks.create.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TasksCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TasksCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tasks.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1TasksBulkMutationKey() {
  return ['api', '/api/v1/tasks/bulk', 'POST'] as const
}

export function getPostApiV1TasksBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tasks.bulk.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.tasks.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TasksBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.tasks.bulk.$post>) {
      return parseResponse(client.api.v1.tasks.bulk.$post(args, options))
    },
  })
}

export function usePostApiV1TasksBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tasks.bulk.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.tasks.bulk.$post>,
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
  const mutationDefaults = getPostApiV1TasksBulkMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1TasksIdUploadMutationKey() {
  return ['api', '/api/v1/tasks/:id/upload', 'POST'] as const
}

export function getPostApiV1TasksIdUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.tasks)[':id']['upload']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.tasks)[':id']['upload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TasksIdUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.tasks)[':id']['upload']['$post']>,
    ) {
      return parseResponse(client.api.v1.tasks[':id'].upload.$post(args, options))
    },
  })
}

export function usePostApiV1TasksIdUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.tasks)[':id']['upload']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.tasks)[':id']['upload']['$post']>,
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
  const mutationDefaults = getPostApiV1TasksIdUploadMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1TasksSortMutationKey() {
  return ['api', '/api/v1/tasks/sort', 'POST'] as const
}

export function getPostApiV1TasksSortMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tasks.sort.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.tasks.sort.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TasksSortMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.tasks.sort.$post>) {
      return parseResponse(client.api.v1.tasks.sort.$post(args, options))
    },
  })
}

export function usePostApiV1TasksSort<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tasks.sort.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.tasks.sort.$post>,
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
  const mutationDefaults = getPostApiV1TasksSortMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1QuotesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.quotes.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/quotes', keyArgs] as const
}

export function getApiV1QuotesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.quotes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1QuotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.quotes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Quotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.quotes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.quotes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.quotes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.quotes.$get>>>>
          >,
          ReturnType<typeof getApiV1QuotesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.quotes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1QuotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1QuotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.quotes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1QuotesMutationKey() {
  return ['api', '/api/v1/quotes', 'POST'] as const
}

export function getPostApiV1QuotesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.quotes.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.quotes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1QuotesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.quotes.$post>) {
      return parseResponse(client.api.v1.quotes.$post(args, options))
    },
  })
}

export function usePostApiV1Quotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.quotes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.quotes.$post>,
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
  const mutationDefaults = getPostApiV1QuotesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1QuotesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.quotes)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/quotes/:id', keyArgs] as const
}

export function getApiV1QuotesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.quotes)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1QuotesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.quotes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1QuotesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.quotes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.quotes)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.quotes)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.quotes)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1QuotesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.quotes)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1QuotesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1QuotesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.quotes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1QuotesIdMutationKey() {
  return ['api', '/api/v1/quotes/:id', 'PUT'] as const
}

export function getPutApiV1QuotesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.quotes)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.quotes)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1QuotesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.quotes)[':id']['$put']>) {
      return parseResponse(client.api.v1.quotes[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1QuotesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.quotes)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.quotes)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1QuotesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1QuotesIdMutationKey() {
  return ['api', '/api/v1/quotes/:id', 'DELETE'] as const
}

export function getDeleteApiV1QuotesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.quotes)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.quotes)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1QuotesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.quotes)[':id']['$delete']>) {
      return parseResponse(client.api.v1.quotes[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1QuotesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.quotes)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.quotes)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1QuotesIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1QuotesIdEditQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.quotes)[':id']['edit']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/quotes/:id/edit', keyArgs] as const
}

export function getApiV1QuotesIdEditQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.quotes)[':id']['edit']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1QuotesIdEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.quotes[':id'].edit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1QuotesIdEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.quotes)[':id']['edit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.quotes)[':id']['edit']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.quotes)[':id']['edit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.quotes)[':id']['edit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1QuotesIdEditQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.quotes)[':id']['edit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1QuotesIdEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1QuotesIdEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.quotes[':id'].edit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1QuotesCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.quotes.create.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/quotes/create', keyArgs] as const
}

export function getApiV1QuotesCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.quotes.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1QuotesCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.quotes.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1QuotesCreate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.quotes.create.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.quotes.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.quotes.create.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.quotes.create.$get>>>
            >
          >,
          ReturnType<typeof getApiV1QuotesCreateQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.quotes.create.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1QuotesCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1QuotesCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.quotes.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1QuotesBulkMutationKey() {
  return ['api', '/api/v1/quotes/bulk', 'POST'] as const
}

export function getPostApiV1QuotesBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.quotes.bulk.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.quotes.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1QuotesBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.quotes.bulk.$post>) {
      return parseResponse(client.api.v1.quotes.bulk.$post(args, options))
    },
  })
}

export function usePostApiV1QuotesBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.quotes.bulk.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.quotes.bulk.$post>,
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
  const mutationDefaults = getPostApiV1QuotesBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1QuotesIdActionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.quotes)[':id'][':action']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/quotes/:id/:action', keyArgs] as const
}

export function getApiV1QuotesIdActionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.quotes)[':id'][':action']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1QuotesIdActionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.quotes[':id'][':action'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1QuotesIdAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.quotes)[':id'][':action']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.quotes)[':id'][':action']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.quotes)[':id'][':action']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.quotes)[':id'][':action']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1QuotesIdActionQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.quotes)[':id'][':action']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1QuotesIdActionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1QuotesIdActionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.quotes[':id'][':action'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1QuoteInvitationKeyDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.quote)[':invitation_key']['download']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/quote/:invitation_key/download', keyArgs] as const
}

export function getApiV1QuoteInvitationKeyDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.quote)[':invitation_key']['download']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1QuoteInvitationKeyDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.quote[':invitation_key'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1QuoteInvitationKeyDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.quote)[':invitation_key']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.quote)[':invitation_key']['download']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.quote)[':invitation_key']['download']['$get']>
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
                  ReturnType<(typeof client.api.v1.quote)[':invitation_key']['download']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1QuoteInvitationKeyDownloadQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.quote)[':invitation_key']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1QuoteInvitationKeyDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1QuoteInvitationKeyDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.quote[':invitation_key'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1QuotesIdUploadMutationKey() {
  return ['api', '/api/v1/quotes/:id/upload', 'POST'] as const
}

export function getPostApiV1QuotesIdUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.quotes)[':id']['upload']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.quotes)[':id']['upload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1QuotesIdUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.quotes)[':id']['upload']['$post']>,
    ) {
      return parseResponse(client.api.v1.quotes[':id'].upload.$post(args, options))
    },
  })
}

export function usePostApiV1QuotesIdUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.quotes)[':id']['upload']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.quotes)[':id']['upload']['$post']>,
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
  const mutationDefaults = getPostApiV1QuotesIdUploadMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1InvoicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.invoices.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/invoices', keyArgs] as const
}

export function getApiV1InvoicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.invoices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1InvoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.invoices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Invoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.invoices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.invoices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.invoices.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.invoices.$get>>>
            >
          >,
          ReturnType<typeof getApiV1InvoicesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.invoices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1InvoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1InvoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.invoices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1InvoicesMutationKey() {
  return ['api', '/api/v1/invoices', 'POST'] as const
}

export function getPostApiV1InvoicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.invoices.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.invoices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1InvoicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.invoices.$post>) {
      return parseResponse(client.api.v1.invoices.$post(args, options))
    },
  })
}

export function usePostApiV1Invoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.invoices.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.invoices.$post>,
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
  const mutationDefaults = getPostApiV1InvoicesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1InvoicesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.invoices)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/invoices/:id', keyArgs] as const
}

export function getApiV1InvoicesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.invoices)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1InvoicesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.invoices[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1InvoicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.invoices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.invoices)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.invoices)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.invoices)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1InvoicesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.invoices)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1InvoicesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1InvoicesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.invoices[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1InvoicesIdMutationKey() {
  return ['api', '/api/v1/invoices/:id', 'PUT'] as const
}

export function getPutApiV1InvoicesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.invoices)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.invoices)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1InvoicesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.invoices)[':id']['$put']>) {
      return parseResponse(client.api.v1.invoices[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1InvoicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.invoices)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.invoices)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1InvoicesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1InvoicesIdMutationKey() {
  return ['api', '/api/v1/invoices/:id', 'DELETE'] as const
}

export function getDeleteApiV1InvoicesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.invoices)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.invoices)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1InvoicesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.invoices)[':id']['$delete']>) {
      return parseResponse(client.api.v1.invoices[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1InvoicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.invoices)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.invoices)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1InvoicesIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1InvoicesIdEditQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.invoices)[':id']['edit']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/invoices/:id/edit', keyArgs] as const
}

export function getApiV1InvoicesIdEditQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.invoices)[':id']['edit']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1InvoicesIdEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.invoices[':id'].edit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1InvoicesIdEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.invoices)[':id']['edit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.invoices)[':id']['edit']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.invoices)[':id']['edit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.invoices)[':id']['edit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1InvoicesIdEditQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.invoices)[':id']['edit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1InvoicesIdEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1InvoicesIdEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.invoices[':id'].edit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1InvoicesCreateQueryKey() {
  return ['api', '/api/v1/invoices/create'] as const
}

export function getApiV1InvoicesCreateQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1InvoicesCreateQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.invoices.create.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1InvoicesCreate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.invoices.create.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.invoices.create.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.invoices.create.$get>>>
            >
          >,
          ReturnType<typeof getApiV1InvoicesCreateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.invoices.create.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1InvoicesCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1InvoicesCreateQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.invoices.create.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1InvoicesBulkMutationKey() {
  return ['api', '/api/v1/invoices/bulk', 'POST'] as const
}

export function getPostApiV1InvoicesBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.invoices.bulk.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.invoices.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1InvoicesBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.invoices.bulk.$post>) {
      return parseResponse(client.api.v1.invoices.bulk.$post(args, options))
    },
  })
}

export function usePostApiV1InvoicesBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.invoices.bulk.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.invoices.bulk.$post>,
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
  const mutationDefaults = getPostApiV1InvoicesBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1InvoicesIdActionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.invoices)[':id'][':action']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/invoices/:id/:action', keyArgs] as const
}

export function getApiV1InvoicesIdActionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.invoices)[':id'][':action']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1InvoicesIdActionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.invoices[':id'][':action'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1InvoicesIdAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.invoices)[':id'][':action']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.invoices)[':id'][':action']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.invoices)[':id'][':action']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.invoices)[':id'][':action']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1InvoicesIdActionQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.invoices)[':id'][':action']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1InvoicesIdActionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1InvoicesIdActionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.invoices[':id'][':action'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1InvoiceInvitationKeyDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.invoice)[':invitation_key']['download']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/invoice/:invitation_key/download', keyArgs] as const
}

export function getApiV1InvoiceInvitationKeyDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.invoice)[':invitation_key']['download']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1InvoiceInvitationKeyDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.invoice[':invitation_key'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1InvoiceInvitationKeyDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.invoice)[':invitation_key']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.invoice)[':invitation_key']['download']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.invoice)[':invitation_key']['download']['$get']>
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
                  ReturnType<(typeof client.api.v1.invoice)[':invitation_key']['download']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1InvoiceInvitationKeyDownloadQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.invoice)[':invitation_key']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1InvoiceInvitationKeyDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1InvoiceInvitationKeyDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.invoice[':invitation_key'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1InvoicesIdDeliveryNoteQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.invoices)[':id']['delivery_note']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/invoices/:id/delivery_note', keyArgs] as const
}

export function getApiV1InvoicesIdDeliveryNoteQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.invoices)[':id']['delivery_note']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1InvoicesIdDeliveryNoteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.invoices[':id'].delivery_note.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1InvoicesIdDeliveryNote<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.invoices)[':id']['delivery_note']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.invoices)[':id']['delivery_note']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.invoices)[':id']['delivery_note']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.invoices)[':id']['delivery_note']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1InvoicesIdDeliveryNoteQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.invoices)[':id']['delivery_note']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1InvoicesIdDeliveryNoteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1InvoicesIdDeliveryNoteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.invoices[':id'].delivery_note.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1InvoicesIdUploadMutationKey() {
  return ['api', '/api/v1/invoices/:id/upload', 'POST'] as const
}

export function getPostApiV1InvoicesIdUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.invoices)[':id']['upload']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.invoices)[':id']['upload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1InvoicesIdUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.invoices)[':id']['upload']['$post']>,
    ) {
      return parseResponse(client.api.v1.invoices[':id'].upload.$post(args, options))
    },
  })
}

export function usePostApiV1InvoicesIdUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.invoices)[':id']['upload']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.invoices)[':id']['upload']['$post']>,
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
  const mutationDefaults = getPostApiV1InvoicesIdUploadMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ProjectsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.projects.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/projects', keyArgs] as const
}

export function getApiV1ProjectsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.projects.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ProjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.projects.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Projects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.projects.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.projects.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.projects.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ProjectsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.projects.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ProjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.projects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ProjectsMutationKey() {
  return ['api', '/api/v1/projects', 'POST'] as const
}

export function getPostApiV1ProjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.projects.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.projects.$post>) {
      return parseResponse(client.api.v1.projects.$post(args, options))
    },
  })
}

export function usePostApiV1Projects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.projects.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.projects.$post>,
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
  const mutationDefaults = getPostApiV1ProjectsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ProjectsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.projects)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/projects/:id', keyArgs] as const
}

export function getApiV1ProjectsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.projects)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ProjectsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.projects[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ProjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.projects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.projects)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.projects)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.projects)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ProjectsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.projects)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProjectsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ProjectsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.projects[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1ProjectsIdMutationKey() {
  return ['api', '/api/v1/projects/:id', 'PUT'] as const
}

export function getPutApiV1ProjectsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.projects)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.projects)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ProjectsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.projects)[':id']['$put']>) {
      return parseResponse(client.api.v1.projects[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1ProjectsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.projects)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.projects)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1ProjectsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1ProjectsIdMutationKey() {
  return ['api', '/api/v1/projects/:id', 'DELETE'] as const
}

export function getDeleteApiV1ProjectsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.projects)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.projects)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ProjectsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.projects)[':id']['$delete']>) {
      return parseResponse(client.api.v1.projects[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1ProjectsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.projects)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.projects)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1ProjectsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ProjectsIdEditQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.projects)[':id']['edit']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/projects/:id/edit', keyArgs] as const
}

export function getApiV1ProjectsIdEditQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.projects)[':id']['edit']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ProjectsIdEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.projects[':id'].edit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ProjectsIdEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.projects)[':id']['edit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.projects)[':id']['edit']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.projects)[':id']['edit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.projects)[':id']['edit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ProjectsIdEditQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.projects)[':id']['edit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProjectsIdEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ProjectsIdEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.projects[':id'].edit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ProjectsCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.projects.create.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/projects/create', keyArgs] as const
}

export function getApiV1ProjectsCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.projects.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ProjectsCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.projects.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ProjectsCreate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.projects.create.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.projects.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.projects.create.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.projects.create.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ProjectsCreateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.projects.create.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProjectsCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ProjectsCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.projects.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ProjectsBulkMutationKey() {
  return ['api', '/api/v1/projects/bulk', 'POST'] as const
}

export function getPostApiV1ProjectsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.projects.bulk.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.projects.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ProjectsBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.projects.bulk.$post>) {
      return parseResponse(client.api.v1.projects.bulk.$post(args, options))
    },
  })
}

export function usePostApiV1ProjectsBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.projects.bulk.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.projects.bulk.$post>,
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
  const mutationDefaults = getPostApiV1ProjectsBulkMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ProjectsIdUploadMutationKey() {
  return ['api', '/api/v1/projects/:id/upload', 'POST'] as const
}

export function getPostApiV1ProjectsIdUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.projects)[':id']['upload']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.projects)[':id']['upload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ProjectsIdUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.projects)[':id']['upload']['$post']>,
    ) {
      return parseResponse(client.api.v1.projects[':id'].upload.$post(args, options))
    },
  })
}

export function usePostApiV1ProjectsIdUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.projects)[':id']['upload']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.projects)[':id']['upload']['$post']>,
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
  const mutationDefaults = getPostApiV1ProjectsIdUploadMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1VendorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.vendors.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/vendors', keyArgs] as const
}

export function getApiV1VendorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.vendors.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VendorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.vendors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Vendors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.vendors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.vendors.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.vendors.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.vendors.$get>>>>
          >,
          ReturnType<typeof getApiV1VendorsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.vendors.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VendorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VendorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.vendors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1VendorsMutationKey() {
  return ['api', '/api/v1/vendors', 'POST'] as const
}

export function getPostApiV1VendorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.vendors.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.vendors.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VendorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.vendors.$post>) {
      return parseResponse(client.api.v1.vendors.$post(args, options))
    },
  })
}

export function usePostApiV1Vendors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.vendors.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.vendors.$post>,
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
  const mutationDefaults = getPostApiV1VendorsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1VendorsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.vendors)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/vendors/:id', keyArgs] as const
}

export function getApiV1VendorsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.vendors)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VendorsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.vendors[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VendorsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.vendors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.vendors)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.vendors)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.vendors)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1VendorsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.vendors)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VendorsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VendorsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.vendors[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1VendorsIdMutationKey() {
  return ['api', '/api/v1/vendors/:id', 'PUT'] as const
}

export function getPutApiV1VendorsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.vendors)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.vendors)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1VendorsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.vendors)[':id']['$put']>) {
      return parseResponse(client.api.v1.vendors[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1VendorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.vendors)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.vendors)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1VendorsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1VendorsIdMutationKey() {
  return ['api', '/api/v1/vendors/:id', 'DELETE'] as const
}

export function getDeleteApiV1VendorsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.vendors)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.vendors)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1VendorsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.vendors)[':id']['$delete']>) {
      return parseResponse(client.api.v1.vendors[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1VendorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.vendors)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.vendors)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1VendorsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1VendorsIdEditQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.vendors)[':id']['edit']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/vendors/:id/edit', keyArgs] as const
}

export function getApiV1VendorsIdEditQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.vendors)[':id']['edit']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VendorsIdEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.vendors[':id'].edit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VendorsIdEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.vendors)[':id']['edit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.vendors)[':id']['edit']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.vendors)[':id']['edit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.vendors)[':id']['edit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1VendorsIdEditQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.vendors)[':id']['edit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VendorsIdEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VendorsIdEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.vendors[':id'].edit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1VendorsCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.vendors.create.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/vendors/create', keyArgs] as const
}

export function getApiV1VendorsCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.vendors.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VendorsCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.vendors.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VendorsCreate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.vendors.create.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.vendors.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.vendors.create.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.vendors.create.$get>>>
            >
          >,
          ReturnType<typeof getApiV1VendorsCreateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.vendors.create.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VendorsCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VendorsCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.vendors.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1VendorsBulkMutationKey() {
  return ['api', '/api/v1/vendors/bulk', 'POST'] as const
}

export function getPostApiV1VendorsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.vendors.bulk.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.vendors.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VendorsBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.vendors.bulk.$post>) {
      return parseResponse(client.api.v1.vendors.bulk.$post(args, options))
    },
  })
}

export function usePostApiV1VendorsBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.vendors.bulk.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.vendors.bulk.$post>,
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
  const mutationDefaults = getPostApiV1VendorsBulkMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1VendorsIdUploadMutationKey() {
  return ['api', '/api/v1/vendors/:id/upload', 'POST'] as const
}

export function getPostApiV1VendorsIdUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.vendors)[':id']['upload']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.vendors)[':id']['upload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VendorsIdUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.vendors)[':id']['upload']['$post']>,
    ) {
      return parseResponse(client.api.v1.vendors[':id'].upload.$post(args, options))
    },
  })
}

export function usePostApiV1VendorsIdUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.vendors)[':id']['upload']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.vendors)[':id']['upload']['$post']>,
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
  const mutationDefaults = getPostApiV1VendorsIdUploadMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1PaymentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.payments.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/payments', keyArgs] as const
}

export function getApiV1PaymentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.payments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PaymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.payments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Payments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.payments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payments.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payments.$get>>>
            >
          >,
          ReturnType<typeof getApiV1PaymentsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PaymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.payments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1PaymentsMutationKey() {
  return ['api', '/api/v1/payments', 'POST'] as const
}

export function getPostApiV1PaymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.payments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PaymentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.payments.$post>) {
      return parseResponse(client.api.v1.payments.$post(args, options))
    },
  })
}

export function usePostApiV1Payments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payments.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.payments.$post>,
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
  const mutationDefaults = getPostApiV1PaymentsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1PaymentsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.payments)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/payments/:id', keyArgs] as const
}

export function getApiV1PaymentsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.payments)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PaymentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.payments[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PaymentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.payments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.payments)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.payments)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.payments)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1PaymentsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.payments)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PaymentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PaymentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.payments[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1PaymentsIdMutationKey() {
  return ['api', '/api/v1/payments/:id', 'PUT'] as const
}

export function getPutApiV1PaymentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.payments)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.payments)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1PaymentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.payments)[':id']['$put']>) {
      return parseResponse(client.api.v1.payments[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1PaymentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.payments)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.payments)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1PaymentsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1PaymentsIdMutationKey() {
  return ['api', '/api/v1/payments/:id', 'DELETE'] as const
}

export function getDeleteApiV1PaymentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.payments)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.payments)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1PaymentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.payments)[':id']['$delete']>) {
      return parseResponse(client.api.v1.payments[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1PaymentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.payments)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.payments)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1PaymentsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1PaymentsIdEditQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.payments)[':id']['edit']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/payments/:id/edit', keyArgs] as const
}

export function getApiV1PaymentsIdEditQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.payments)[':id']['edit']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PaymentsIdEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.payments[':id'].edit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PaymentsIdEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.payments)[':id']['edit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.payments)[':id']['edit']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.payments)[':id']['edit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.payments)[':id']['edit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1PaymentsIdEditQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.payments)[':id']['edit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PaymentsIdEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PaymentsIdEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.payments[':id'].edit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1PaymentsCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.payments.create.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/payments/create', keyArgs] as const
}

export function getApiV1PaymentsCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.payments.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PaymentsCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.payments.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PaymentsCreate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payments.create.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.payments.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payments.create.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payments.create.$get>>>
            >
          >,
          ReturnType<typeof getApiV1PaymentsCreateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payments.create.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PaymentsCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PaymentsCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.payments.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1PaymentsRefundMutationKey() {
  return ['api', '/api/v1/payments/refund', 'POST'] as const
}

export function getPostApiV1PaymentsRefundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payments.refund.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.payments.refund.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PaymentsRefundMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.payments.refund.$post>) {
      return parseResponse(client.api.v1.payments.refund.$post(args, options))
    },
  })
}

export function usePostApiV1PaymentsRefund<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payments.refund.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.payments.refund.$post>,
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
  const mutationDefaults = getPostApiV1PaymentsRefundMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1PaymentsBulkMutationKey() {
  return ['api', '/api/v1/payments/bulk', 'POST'] as const
}

export function getPostApiV1PaymentsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payments.bulk.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.payments.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PaymentsBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.payments.bulk.$post>) {
      return parseResponse(client.api.v1.payments.bulk.$post(args, options))
    },
  })
}

export function usePostApiV1PaymentsBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.payments.bulk.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.payments.bulk.$post>,
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
  const mutationDefaults = getPostApiV1PaymentsBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1PaymentsIdActionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.payments)[':id'][':action']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/payments/:id/:action', keyArgs] as const
}

export function getApiV1PaymentsIdActionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.payments)[':id'][':action']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PaymentsIdActionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.payments[':id'][':action'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PaymentsIdAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.payments)[':id'][':action']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.payments)[':id'][':action']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.payments)[':id'][':action']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.payments)[':id'][':action']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1PaymentsIdActionQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.payments)[':id'][':action']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PaymentsIdActionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PaymentsIdActionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.payments[':id'][':action'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1PaymentsIdUploadMutationKey() {
  return ['api', '/api/v1/payments/:id/upload', 'POST'] as const
}

export function getPostApiV1PaymentsIdUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.payments)[':id']['upload']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.payments)[':id']['upload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PaymentsIdUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.payments)[':id']['upload']['$post']>,
    ) {
      return parseResponse(client.api.v1.payments[':id'].upload.$post(args, options))
    },
  })
}

export function usePostApiV1PaymentsIdUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.payments)[':id']['upload']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.payments)[':id']['upload']['$post']>,
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
  const mutationDefaults = getPostApiV1PaymentsIdUploadMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ClientsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.clients.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/clients', keyArgs] as const
}

export function getApiV1ClientsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.clients.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ClientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.clients.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Clients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.clients.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clients.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clients.$get>>>>
          >,
          ReturnType<typeof getApiV1ClientsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clients.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ClientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ClientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.clients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ClientsMutationKey() {
  return ['api', '/api/v1/clients', 'POST'] as const
}

export function getPostApiV1ClientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clients.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.clients.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ClientsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.clients.$post>) {
      return parseResponse(client.api.v1.clients.$post(args, options))
    },
  })
}

export function usePostApiV1Clients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clients.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.clients.$post>,
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
  const mutationDefaults = getPostApiV1ClientsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ClientsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.clients)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/clients/:id', keyArgs] as const
}

export function getApiV1ClientsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.clients)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ClientsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.clients[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ClientsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.clients)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.clients)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.clients)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.clients)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ClientsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.clients)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ClientsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ClientsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.clients[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1ClientsIdMutationKey() {
  return ['api', '/api/v1/clients/:id', 'PUT'] as const
}

export function getPutApiV1ClientsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.clients)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.clients)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ClientsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.clients)[':id']['$put']>) {
      return parseResponse(client.api.v1.clients[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1ClientsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.clients)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.clients)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1ClientsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1ClientsIdMutationKey() {
  return ['api', '/api/v1/clients/:id', 'DELETE'] as const
}

export function getDeleteApiV1ClientsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.clients)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.clients)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ClientsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.clients)[':id']['$delete']>) {
      return parseResponse(client.api.v1.clients[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1ClientsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.clients)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.clients)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1ClientsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ClientsIdEditQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.clients)[':id']['edit']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/clients/:id/edit', keyArgs] as const
}

export function getApiV1ClientsIdEditQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.clients)[':id']['edit']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ClientsIdEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.clients[':id'].edit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ClientsIdEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.clients)[':id']['edit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.clients)[':id']['edit']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.clients)[':id']['edit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.clients)[':id']['edit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ClientsIdEditQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.clients)[':id']['edit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ClientsIdEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ClientsIdEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.clients[':id'].edit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ClientsCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.clients.create.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/clients/create', keyArgs] as const
}

export function getApiV1ClientsCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.clients.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ClientsCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.clients.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ClientsCreate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clients.create.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.clients.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clients.create.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clients.create.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ClientsCreateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clients.create.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ClientsCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ClientsCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.clients.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ClientsBulkMutationKey() {
  return ['api', '/api/v1/clients/bulk', 'POST'] as const
}

export function getPostApiV1ClientsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clients.bulk.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.clients.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ClientsBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.clients.bulk.$post>) {
      return parseResponse(client.api.v1.clients.bulk.$post(args, options))
    },
  })
}

export function usePostApiV1ClientsBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clients.bulk.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.clients.bulk.$post>,
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
  const mutationDefaults = getPostApiV1ClientsBulkMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ClientsIdUploadMutationKey() {
  return ['api', '/api/v1/clients/:id/upload', 'POST'] as const
}

export function getPostApiV1ClientsIdUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.clients)[':id']['upload']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.clients)[':id']['upload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ClientsIdUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.clients)[':id']['upload']['$post']>,
    ) {
      return parseResponse(client.api.v1.clients[':id'].upload.$post(args, options))
    },
  })
}

export function usePostApiV1ClientsIdUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.clients)[':id']['upload']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.clients)[':id']['upload']['$post']>,
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
  const mutationDefaults = getPostApiV1ClientsIdUploadMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ClientsIdPurgeMutationKey() {
  return ['api', '/api/v1/clients/:id/purge', 'POST'] as const
}

export function getPostApiV1ClientsIdPurgeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.clients)[':id']['purge']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.clients)[':id']['purge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ClientsIdPurgeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.clients)[':id']['purge']['$post']>,
    ) {
      return parseResponse(client.api.v1.clients[':id'].purge.$post(args, options))
    },
  })
}

export function usePostApiV1ClientsIdPurge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.clients)[':id']['purge']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.clients)[':id']['purge']['$post']>,
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
  const mutationDefaults = getPostApiV1ClientsIdPurgeMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ClientsIdMergeableClientHashedIdMergeMutationKey() {
  return ['api', '/api/v1/clients/:id/:mergeable_client_hashed_id/merge', 'POST'] as const
}

export function getPostApiV1ClientsIdMergeableClientHashedIdMergeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.clients)[':id'][':mergeable_client_hashed_id']['merge']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.clients)[':id'][':mergeable_client_hashed_id']['merge']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ClientsIdMergeableClientHashedIdMergeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.clients)[':id'][':mergeable_client_hashed_id']['merge']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.clients[':id'][':mergeable_client_hashed_id'].merge.$post(args, options),
      )
    },
  })
}

export function usePostApiV1ClientsIdMergeableClientHashedIdMerge<
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
                    (typeof client.api.v1.clients)[':id'][':mergeable_client_hashed_id']['merge']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.clients)[':id'][':mergeable_client_hashed_id']['merge']['$post']
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
  const mutationDefaults = getPostApiV1ClientsIdMergeableClientHashedIdMergeMutationOptions<
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

export function getPostApiV1ClientStatementMutationKey() {
  return ['api', '/api/v1/client_statement', 'POST'] as const
}

export function getPostApiV1ClientStatementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.client_statement.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.client_statement.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ClientStatementMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.client_statement.$post>) {
      return parseResponse(client.api.v1.client_statement.$post(args, options))
    },
  })
}

export function usePostApiV1ClientStatement<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.client_statement.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.client_statement.$post>,
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
  const mutationDefaults = getPostApiV1ClientStatementMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ReactivateEmailBounceIdMutationKey() {
  return ['api', '/api/v1/reactivate_email/:bounce_id', 'POST'] as const
}

export function getPostApiV1ReactivateEmailBounceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.reactivate_email)[':bounce_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.reactivate_email)[':bounce_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReactivateEmailBounceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.reactivate_email)[':bounce_id']['$post']>,
    ) {
      return parseResponse(client.api.v1.reactivate_email[':bounce_id'].$post(args, options))
    },
  })
}

export function usePostApiV1ReactivateEmailBounceId<
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
                Awaited<ReturnType<(typeof client.api.v1.reactivate_email)[':bounce_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.reactivate_email)[':bounce_id']['$post']>,
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
  const mutationDefaults = getPostApiV1ReactivateEmailBounceIdMutationOptions<
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

export function getPostApiV1ClientsClientUpdateTaxDataMutationKey() {
  return ['api', '/api/v1/clients/:client/updateTaxData', 'POST'] as const
}

export function getPostApiV1ClientsClientUpdateTaxDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.clients)[':client']['updateTaxData']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.clients)[':client']['updateTaxData']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ClientsClientUpdateTaxDataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.clients)[':client']['updateTaxData']['$post']>,
    ) {
      return parseResponse(client.api.v1.clients[':client'].updateTaxData.$post(args, options))
    },
  })
}

export function usePostApiV1ClientsClientUpdateTaxData<
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
                  ReturnType<(typeof client.api.v1.clients)[':client']['updateTaxData']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.clients)[':client']['updateTaxData']['$post']>,
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
  const mutationDefaults = getPostApiV1ClientsClientUpdateTaxDataMutationOptions<
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

export function getApiV1PurchaseOrdersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.purchase_orders.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/purchase_orders', keyArgs] as const
}

export function getApiV1PurchaseOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.purchase_orders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PurchaseOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.purchase_orders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PurchaseOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.purchase_orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.purchase_orders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.purchase_orders.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.purchase_orders.$get>>>
            >
          >,
          ReturnType<typeof getApiV1PurchaseOrdersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.purchase_orders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PurchaseOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PurchaseOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.purchase_orders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1PurchaseOrdersMutationKey() {
  return ['api', '/api/v1/purchase_orders', 'POST'] as const
}

export function getPostApiV1PurchaseOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.purchase_orders.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.purchase_orders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PurchaseOrdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.purchase_orders.$post>) {
      return parseResponse(client.api.v1.purchase_orders.$post(args, options))
    },
  })
}

export function usePostApiV1PurchaseOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.purchase_orders.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.purchase_orders.$post>,
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
  const mutationDefaults = getPostApiV1PurchaseOrdersMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1PurchaseOrdersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.purchase_orders)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/purchase_orders/:id', keyArgs] as const
}

export function getApiV1PurchaseOrdersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.purchase_orders)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PurchaseOrdersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.purchase_orders[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PurchaseOrdersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.purchase_orders)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.purchase_orders)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.purchase_orders)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.purchase_orders)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1PurchaseOrdersIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.purchase_orders)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PurchaseOrdersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PurchaseOrdersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.purchase_orders[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1PurchaseOrderIdMutationKey() {
  return ['api', '/api/v1/purchase_order/:id', 'PUT'] as const
}

export function getPutApiV1PurchaseOrderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.purchase_order)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.purchase_order)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1PurchaseOrderIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.purchase_order)[':id']['$put']>) {
      return parseResponse(client.api.v1.purchase_order[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1PurchaseOrderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.purchase_order)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.purchase_order)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1PurchaseOrderIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1PurchaseOrderIdMutationKey() {
  return ['api', '/api/v1/purchase_order/:id', 'DELETE'] as const
}

export function getDeleteApiV1PurchaseOrderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.purchase_order)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.purchase_order)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1PurchaseOrderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.purchase_order)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.purchase_order[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1PurchaseOrderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.purchase_order)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.purchase_order)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1PurchaseOrderIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1PurchaseOrdersIdEditQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.purchase_orders)[':id']['edit']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/purchase_orders/:id/edit', keyArgs] as const
}

export function getApiV1PurchaseOrdersIdEditQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.purchase_orders)[':id']['edit']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PurchaseOrdersIdEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.purchase_orders[':id'].edit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PurchaseOrdersIdEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.purchase_orders)[':id']['edit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.purchase_orders)[':id']['edit']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.purchase_orders)[':id']['edit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.purchase_orders)[':id']['edit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1PurchaseOrdersIdEditQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.purchase_orders)[':id']['edit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PurchaseOrdersIdEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PurchaseOrdersIdEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.purchase_orders[':id'].edit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1PurchaseOrdersCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.purchase_orders.create.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/purchase_orders/create', keyArgs] as const
}

export function getApiV1PurchaseOrdersCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.purchase_orders.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PurchaseOrdersCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.purchase_orders.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PurchaseOrdersCreate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.purchase_orders.create.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.purchase_orders.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.purchase_orders.create.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.purchase_orders.create.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1PurchaseOrdersCreateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.purchase_orders.create.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PurchaseOrdersCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PurchaseOrdersCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.purchase_orders.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1PurchaseOrdersBulkMutationKey() {
  return ['api', '/api/v1/purchase_orders/bulk', 'POST'] as const
}

export function getPostApiV1PurchaseOrdersBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.purchase_orders.bulk.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.purchase_orders.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PurchaseOrdersBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.purchase_orders.bulk.$post>) {
      return parseResponse(client.api.v1.purchase_orders.bulk.$post(args, options))
    },
  })
}

export function usePostApiV1PurchaseOrdersBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.purchase_orders.bulk.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.purchase_orders.bulk.$post>,
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
  const mutationDefaults = getPostApiV1PurchaseOrdersBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1PurchaseOrdersIdActionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.purchase_orders)[':id'][':action']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/purchase_orders/:id/:action', keyArgs] as const
}

export function getApiV1PurchaseOrdersIdActionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.purchase_orders)[':id'][':action']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PurchaseOrdersIdActionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.purchase_orders[':id'][':action'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PurchaseOrdersIdAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.purchase_orders)[':id'][':action']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.purchase_orders)[':id'][':action']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.purchase_orders)[':id'][':action']['$get']>
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
                  ReturnType<(typeof client.api.v1.purchase_orders)[':id'][':action']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1PurchaseOrdersIdActionQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.purchase_orders)[':id'][':action']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PurchaseOrdersIdActionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PurchaseOrdersIdActionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.purchase_orders[':id'][':action'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1PurchaseOrdersIdUploadMutationKey() {
  return ['api', '/api/v1/purchase_orders/:id/upload', 'POST'] as const
}

export function getPostApiV1PurchaseOrdersIdUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.purchase_orders)[':id']['upload']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.purchase_orders)[':id']['upload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PurchaseOrdersIdUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.purchase_orders)[':id']['upload']['$post']>,
    ) {
      return parseResponse(client.api.v1.purchase_orders[':id'].upload.$post(args, options))
    },
  })
}

export function usePostApiV1PurchaseOrdersIdUpload<
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
                  ReturnType<(typeof client.api.v1.purchase_orders)[':id']['upload']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.purchase_orders)[':id']['upload']['$post']>,
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
  const mutationDefaults = getPostApiV1PurchaseOrdersIdUploadMutationOptions<
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

export function getApiV1PurchaseOrderInvitationKeyDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.purchase_order)[':invitation_key']['download']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/purchase_order/:invitation_key/download', keyArgs] as const
}

export function getApiV1PurchaseOrderInvitationKeyDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.purchase_order)[':invitation_key']['download']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PurchaseOrderInvitationKeyDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.purchase_order[':invitation_key'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PurchaseOrderInvitationKeyDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.purchase_order)[':invitation_key']['download']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.purchase_order)[':invitation_key']['download']['$get']>
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
                    (typeof client.api.v1.purchase_order)[':invitation_key']['download']['$get']
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
                    (typeof client.api.v1.purchase_order)[':invitation_key']['download']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1PurchaseOrderInvitationKeyDownloadQueryKey>
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
            ReturnType<(typeof client.api.v1.purchase_order)[':invitation_key']['download']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PurchaseOrderInvitationKeyDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PurchaseOrderInvitationKeyDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.purchase_order[':invitation_key'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ProductsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.products.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/products', keyArgs] as const
}

export function getApiV1ProductsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.products.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ProductsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.products.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Products<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.products.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.products.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.products.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ProductsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.products.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProductsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ProductsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.products.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ProductsMutationKey() {
  return ['api', '/api/v1/products', 'POST'] as const
}

export function getPostApiV1ProductsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.products.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.products.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ProductsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.products.$post>) {
      return parseResponse(client.api.v1.products.$post(args, options))
    },
  })
}

export function usePostApiV1Products<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.products.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.products.$post>,
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
  const mutationDefaults = getPostApiV1ProductsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ProductsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.products)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/products/:id', keyArgs] as const
}

export function getApiV1ProductsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.products)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ProductsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.products[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ProductsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.products)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.products)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.products)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.products)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ProductsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.products)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProductsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ProductsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.products[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1ProductsIdMutationKey() {
  return ['api', '/api/v1/products/:id', 'PUT'] as const
}

export function getPutApiV1ProductsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.products)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.products)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ProductsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.products)[':id']['$put']>) {
      return parseResponse(client.api.v1.products[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1ProductsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.products)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.products)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1ProductsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1ProductsIdMutationKey() {
  return ['api', '/api/v1/products/:id', 'DELETE'] as const
}

export function getDeleteApiV1ProductsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.products)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.products)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ProductsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.products)[':id']['$delete']>) {
      return parseResponse(client.api.v1.products[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1ProductsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.products)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.products)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1ProductsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ProductsIdEditQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.products)[':id']['edit']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/products/:id/edit', keyArgs] as const
}

export function getApiV1ProductsIdEditQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.products)[':id']['edit']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ProductsIdEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.products[':id'].edit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ProductsIdEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.products)[':id']['edit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.products)[':id']['edit']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.products)[':id']['edit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.products)[':id']['edit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ProductsIdEditQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.products)[':id']['edit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProductsIdEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ProductsIdEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.products[':id'].edit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ProductsCreateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.products.create.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/products/create', keyArgs] as const
}

export function getApiV1ProductsCreateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.products.create.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ProductsCreateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.products.create.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ProductsCreate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.products.create.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.products.create.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.products.create.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.products.create.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ProductsCreateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.products.create.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProductsCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ProductsCreateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.products.create.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ProductsBulkMutationKey() {
  return ['api', '/api/v1/products/bulk', 'POST'] as const
}

export function getPostApiV1ProductsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.products.bulk.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.products.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ProductsBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.products.bulk.$post>) {
      return parseResponse(client.api.v1.products.bulk.$post(args, options))
    },
  })
}

export function usePostApiV1ProductsBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.products.bulk.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.products.bulk.$post>,
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
  const mutationDefaults = getPostApiV1ProductsBulkMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ProductsIdUploadMutationKey() {
  return ['api', '/api/v1/products/:id/upload', 'POST'] as const
}

export function getPostApiV1ProductsIdUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.products)[':id']['upload']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.products)[':id']['upload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ProductsIdUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.products)[':id']['upload']['$post']>,
    ) {
      return parseResponse(client.api.v1.products[':id'].upload.$post(args, options))
    },
  })
}

export function usePostApiV1ProductsIdUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.products)[':id']['upload']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.products)[':id']['upload']['$post']>,
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
  const mutationDefaults = getPostApiV1ProductsIdUploadMutationOptions<TError, TOnMutateResult>(
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
