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

export function getAccountKey() {
  return ['account'] as const
}

export function getApiAppKey() {
  return ['api_app'] as const
}

export function getApiKeyKey() {
  return ['api_key'] as const
}

export function getBulkSendJobKey() {
  return ['bulk_send_job'] as const
}

export function getDocumentKey() {
  return ['document'] as const
}

export function getEmbeddedKey() {
  return ['embedded'] as const
}

export function getFaxKey() {
  return ['fax'] as const
}

export function getFaxLineKey() {
  return ['fax_line'] as const
}

export function getOauthKey() {
  return ['oauth'] as const
}

export function getReportKey() {
  return ['report'] as const
}

export function getSignatureRequestKey() {
  return ['signature_request'] as const
}

export function getTeamKey() {
  return ['team'] as const
}

export function getTemplateKey() {
  return ['template'] as const
}

export function getUnclaimedDraftKey() {
  return ['unclaimed_draft'] as const
}

export function getApiKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api_key.$get>>,
) {
  return ['api_key', '/api_key', toValue(args)] as const
}

export function getApiKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api_key.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api_key.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_key.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api_key.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_key.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_key.$get>>>>
          >,
          ReturnType<typeof getApiKeyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_key.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api_key.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiKeyMutationKey() {
  return ['api_key', '/api_key', 'POST'] as const
}

export function getPostApiKeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_key.$post>>>>>,
    TError,
    InferRequestType<typeof client.api_key.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiKeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api_key.$post>) {
      return parseResponse(client.api_key.$post(args, options))
    },
  })
}

export function usePostApiKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_key.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api_key.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiKeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiKeyApiKeyIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api_key)[':api_key_id']['$get']>>,
) {
  return ['api_key', '/api_key/:api_key_id', toValue(args)] as const
}

export function getApiKeyApiKeyIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api_key)[':api_key_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiKeyApiKeyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api_key[':api_key_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiKeyApiKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api_key)[':api_key_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api_key)[':api_key_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api_key)[':api_key_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api_key)[':api_key_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiKeyApiKeyIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api_key)[':api_key_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiKeyApiKeyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiKeyApiKeyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api_key[':api_key_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiKeyApiKeyIdMutationKey() {
  return ['api_key', '/api_key/:api_key_id', 'PUT'] as const
}

export function getPutApiKeyApiKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api_key)[':api_key_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api_key)[':api_key_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiKeyApiKeyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api_key)[':api_key_id']['$put']>) {
      return parseResponse(client.api_key[':api_key_id'].$put(args, options))
    },
  })
}

export function usePutApiKeyApiKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api_key)[':api_key_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api_key)[':api_key_id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiKeyApiKeyIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiKeyApiKeyIdMutationKey() {
  return ['api_key', '/api_key/:api_key_id', 'DELETE'] as const
}

export function getDeleteApiKeyApiKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api_key)[':api_key_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api_key)[':api_key_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiKeyApiKeyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api_key)[':api_key_id']['$delete']>) {
      return parseResponse(client.api_key[':api_key_id'].$delete(args, options))
    },
  })
}

export function useDeleteApiKeyApiKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api_key)[':api_key_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api_key)[':api_key_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiKeyApiKeyIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAccountCreateMutationKey() {
  return ['account', '/account/create', 'POST'] as const
}

export function getPostAccountCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.create.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.account.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.create.$post>) {
      return parseResponse(client.account.create.$post(args, options))
    },
  })
}

export function usePostAccountCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.create.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountCreateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.$get>>,
) {
  return ['account', '/account', toValue(args)] as const
}

export function getAccountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
          >,
          ReturnType<typeof getAccountQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountMutationKey() {
  return ['account', '/account', 'PUT'] as const
}

export function getPutAccountMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$put>>>>>,
    TError,
    InferRequestType<typeof client.account.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.$put>) {
      return parseResponse(client.account.$put(args, options))
    },
  })
}

export function usePutAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.account.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.settings.$get>>,
) {
  return ['account', '/account/settings', toValue(args)] as const
}

export function getAccountSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.settings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.settings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$get>>>
            >
          >,
          ReturnType<typeof getAccountSettingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountSettingsMutationKey() {
  return ['account', '/account/settings', 'POST'] as const
}

export function getPostAccountSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.account.settings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.settings.$post>) {
      return parseResponse(client.account.settings.$post(args, options))
    },
  })
}

export function usePostAccountSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.settings.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountSettingsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAccountVerifyMutationKey() {
  return ['account', '/account/verify', 'POST'] as const
}

export function getPostAccountVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.verify.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.account.verify.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountVerifyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.verify.$post>) {
      return parseResponse(client.account.verify.$post(args, options))
    },
  })
}

export function usePostAccountVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.verify.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.verify.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountVerifyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiAppMutationKey() {
  return ['api_app', '/api_app', 'POST'] as const
}

export function getPostApiAppMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_app.$post>>>>>,
    TError,
    InferRequestType<typeof client.api_app.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAppMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api_app.$post>) {
      return parseResponse(client.api_app.$post(args, options))
    },
  })
}

export function usePostApiApp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_app.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api_app.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiAppMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiAppClientIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api_app)[':client_id']['$get']>>,
) {
  return ['api_app', '/api_app/:client_id', toValue(args)] as const
}

export function getApiAppClientIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api_app)[':client_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAppClientIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api_app[':client_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAppClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api_app)[':client_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api_app)[':client_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api_app)[':client_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api_app)[':client_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAppClientIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api_app)[':client_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAppClientIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAppClientIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api_app[':client_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiAppClientIdMutationKey() {
  return ['api_app', '/api_app/:client_id', 'PUT'] as const
}

export function getPutApiAppClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api_app)[':client_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api_app)[':client_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiAppClientIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api_app)[':client_id']['$put']>) {
      return parseResponse(client.api_app[':client_id'].$put(args, options))
    },
  })
}

export function usePutApiAppClientId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api_app)[':client_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api_app)[':client_id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiAppClientIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiAppClientIdMutationKey() {
  return ['api_app', '/api_app/:client_id', 'DELETE'] as const
}

export function getDeleteApiAppClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api_app)[':client_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api_app)[':client_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAppClientIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api_app)[':client_id']['$delete']>) {
      return parseResponse(client.api_app[':client_id'].$delete(args, options))
    },
  })
}

export function useDeleteApiAppClientId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api_app)[':client_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api_app)[':client_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiAppClientIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiAppListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api_app.list.$get>>,
) {
  return ['api_app', '/api_app/list', toValue(args)] as const
}

export function getApiAppListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api_app.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAppListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api_app.list.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiAppList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_app.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api_app.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_app.list.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_app.list.$get>>>>
          >,
          ReturnType<typeof getApiAppListQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_app.list.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiAppListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAppListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api_app.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBulkSendJobBulkSendJobIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bulk_send_job)[':bulk_send_job_id']['$get']>
  >,
) {
  return ['bulk_send_job', '/bulk_send_job/:bulk_send_job_id', toValue(args)] as const
}

export function getBulkSendJobBulkSendJobIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bulk_send_job)[':bulk_send_job_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBulkSendJobBulkSendJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bulk_send_job[':bulk_send_job_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBulkSendJobBulkSendJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bulk_send_job)[':bulk_send_job_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bulk_send_job)[':bulk_send_job_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bulk_send_job)[':bulk_send_job_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bulk_send_job)[':bulk_send_job_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBulkSendJobBulkSendJobIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.bulk_send_job)[':bulk_send_job_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBulkSendJobBulkSendJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBulkSendJobBulkSendJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bulk_send_job[':bulk_send_job_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBulkSendJobListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bulk_send_job.list.$get>>,
) {
  return ['bulk_send_job', '/bulk_send_job/list', toValue(args)] as const
}

export function getBulkSendJobListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bulk_send_job.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBulkSendJobListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bulk_send_job.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBulkSendJobList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulk_send_job.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bulk_send_job.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bulk_send_job.list.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bulk_send_job.list.$get>>>
            >
          >,
          ReturnType<typeof getBulkSendJobListQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulk_send_job.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBulkSendJobListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBulkSendJobListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bulk_send_job.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDocumentDetectFieldsMutationKey() {
  return ['document', '/document/detect_fields', 'POST'] as const
}

export function getPostDocumentDetectFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.document.detect_fields.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.document.detect_fields.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentDetectFieldsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.document.detect_fields.$post>) {
      return parseResponse(client.document.detect_fields.$post(args, options))
    },
  })
}

export function usePostDocumentDetectFields<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.document.detect_fields.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.document.detect_fields.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDocumentDetectFieldsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostEmbeddedEditUrlTemplateIdMutationKey() {
  return ['embedded', '/embedded/edit_url/:template_id', 'POST'] as const
}

export function getPostEmbeddedEditUrlTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.embedded.edit_url)[':template_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.embedded.edit_url)[':template_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmbeddedEditUrlTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.embedded.edit_url)[':template_id']['$post']>,
    ) {
      return parseResponse(client.embedded.edit_url[':template_id'].$post(args, options))
    },
  })
}

export function usePostEmbeddedEditUrlTemplateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.embedded.edit_url)[':template_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.embedded.edit_url)[':template_id']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEmbeddedEditUrlTemplateIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEmbeddedSignUrlSignatureIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.embedded.sign_url)[':signature_id']['$get']>
  >,
) {
  return ['embedded', '/embedded/sign_url/:signature_id', toValue(args)] as const
}

export function getEmbeddedSignUrlSignatureIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.embedded.sign_url)[':signature_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmbeddedSignUrlSignatureIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.embedded.sign_url[':signature_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEmbeddedSignUrlSignatureId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.embedded.sign_url)[':signature_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.embedded.sign_url)[':signature_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.embedded.sign_url)[':signature_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.embedded.sign_url)[':signature_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEmbeddedSignUrlSignatureIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.embedded.sign_url)[':signature_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmbeddedSignUrlSignatureIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmbeddedSignUrlSignatureIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.embedded.sign_url[':signature_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFaxFaxIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.fax)[':fax_id']['$get']>>,
) {
  return ['fax', '/fax/:fax_id', toValue(args)] as const
}

export function getFaxFaxIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.fax)[':fax_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFaxFaxIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fax[':fax_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFaxFaxId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.fax)[':fax_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.fax)[':fax_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.fax)[':fax_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.fax)[':fax_id']['$get']>>>
            >
          >,
          ReturnType<typeof getFaxFaxIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.fax)[':fax_id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFaxFaxIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFaxFaxIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fax[':fax_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteFaxFaxIdMutationKey() {
  return ['fax', '/fax/:fax_id', 'DELETE'] as const
}

export function getDeleteFaxFaxIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.fax)[':fax_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.fax)[':fax_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFaxFaxIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.fax)[':fax_id']['$delete']>) {
      return parseResponse(client.fax[':fax_id'].$delete(args, options))
    },
  })
}

export function useDeleteFaxFaxId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.fax)[':fax_id']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.fax)[':fax_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFaxFaxIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFaxFilesFaxIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.fax.files)[':fax_id']['$get']>>,
) {
  return ['fax', '/fax/files/:fax_id', toValue(args)] as const
}

export function getFaxFilesFaxIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.fax.files)[':fax_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFaxFilesFaxIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fax.files[':fax_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFaxFilesFaxId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.fax.files)[':fax_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.fax.files)[':fax_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.fax.files)[':fax_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.fax.files)[':fax_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFaxFilesFaxIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.fax.files)[':fax_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFaxFilesFaxIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFaxFilesFaxIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fax.files[':fax_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutFaxLineAddUserMutationKey() {
  return ['fax_line', '/fax_line/add_user', 'PUT'] as const
}

export function getPutFaxLineAddUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.add_user.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.fax_line.add_user.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutFaxLineAddUserMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.fax_line.add_user.$put>) {
      return parseResponse(client.fax_line.add_user.$put(args, options))
    },
  })
}

export function usePutFaxLineAddUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.add_user.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.fax_line.add_user.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFaxLineAddUserMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFaxLineAreaCodesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fax_line.area_codes.$get>>,
) {
  return ['fax_line', '/fax_line/area_codes', toValue(args)] as const
}

export function getFaxLineAreaCodesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fax_line.area_codes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFaxLineAreaCodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fax_line.area_codes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFaxLineAreaCodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.area_codes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fax_line.area_codes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.area_codes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.area_codes.$get>>>
            >
          >,
          ReturnType<typeof getFaxLineAreaCodesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.area_codes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFaxLineAreaCodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFaxLineAreaCodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fax_line.area_codes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFaxLineCreateMutationKey() {
  return ['fax_line', '/fax_line/create', 'POST'] as const
}

export function getPostFaxLineCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.create.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.fax_line.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFaxLineCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.fax_line.create.$post>) {
      return parseResponse(client.fax_line.create.$post(args, options))
    },
  })
}

export function usePostFaxLineCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.fax_line.create.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFaxLineCreateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFaxLineQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fax_line.$get>>,
) {
  return ['fax_line', '/fax_line', toValue(args)] as const
}

export function getFaxLineQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fax_line.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFaxLineQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fax_line.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFaxLine<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fax_line.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.$get>>>>
          >,
          ReturnType<typeof getFaxLineQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFaxLineQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFaxLineQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fax_line.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteFaxLineMutationKey() {
  return ['fax_line', '/fax_line', 'DELETE'] as const
}

export function getDeleteFaxLineMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.$delete>>>>>,
    TError,
    InferRequestType<typeof client.fax_line.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFaxLineMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.fax_line.$delete>) {
      return parseResponse(client.fax_line.$delete(args, options))
    },
  })
}

export function useDeleteFaxLine<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.fax_line.$delete>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFaxLineMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFaxLineListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fax_line.list.$get>>,
) {
  return ['fax_line', '/fax_line/list', toValue(args)] as const
}

export function getFaxLineListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fax_line.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFaxLineListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fax_line.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFaxLineList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fax_line.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.list.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.list.$get>>>>
          >,
          ReturnType<typeof getFaxLineListQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFaxLineListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFaxLineListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fax_line.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutFaxLineRemoveUserMutationKey() {
  return ['fax_line', '/fax_line/remove_user', 'PUT'] as const
}

export function getPutFaxLineRemoveUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.remove_user.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.fax_line.remove_user.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutFaxLineRemoveUserMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.fax_line.remove_user.$put>) {
      return parseResponse(client.fax_line.remove_user.$put(args, options))
    },
  })
}

export function usePutFaxLineRemoveUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.remove_user.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.fax_line.remove_user.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFaxLineRemoveUserMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFaxListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fax.list.$get>>,
) {
  return ['fax', '/fax/list', toValue(args)] as const
}

export function getFaxListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fax.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFaxListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fax.list.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFaxList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fax.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.list.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.list.$get>>>>
          >,
          ReturnType<typeof getFaxListQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.list.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFaxListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFaxListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fax.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFaxSendMutationKey() {
  return ['fax', '/fax/send', 'POST'] as const
}

export function getPostFaxSendMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.send.$post>>>>>,
    TError,
    InferRequestType<typeof client.fax.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFaxSendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.fax.send.$post>) {
      return parseResponse(client.fax.send.$post(args, options))
    },
  })
}

export function usePostFaxSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.send.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.fax.send.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFaxSendMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostOauthTokenMutationKey() {
  return ['oauth', '/oauth/token', 'POST'] as const
}

export function getPostOauthTokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.$post>>>>>,
    TError,
    InferRequestType<typeof client.oauth.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.token.$post>) {
      return parseResponse(client.oauth.token.$post(args, options))
    },
  })
}

export function usePostOauthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.oauth.token.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOauthTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostOauthTokenRefreshMutationKey() {
  return ['oauth', '/oauth/token?refresh', 'POST'] as const
}

export function getPostOauthTokenRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.oauth)['token?refresh']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.oauth)['token?refresh']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthTokenRefreshMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.oauth)['token?refresh']['$post']>) {
      return parseResponse(client.oauth['token?refresh'].$post(args, options))
    },
  })
}

export function usePostOauthTokenRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth)['token?refresh']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.oauth)['token?refresh']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOauthTokenRefreshMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostReportCreateMutationKey() {
  return ['report', '/report/create', 'POST'] as const
}

export function getPostReportCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.create.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.report.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReportCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.report.create.$post>) {
      return parseResponse(client.report.create.$post(args, options))
    },
  })
}

export function usePostReportCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.create.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.report.create.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostReportCreateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSignatureRequestBulkCreateEmbeddedWithTemplateMutationKey() {
  return [
    'signature_request',
    '/signature_request/bulk_create_embedded_with_template',
    'POST',
  ] as const
}

export function getPostSignatureRequestBulkCreateEmbeddedWithTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.signature_request.bulk_create_embedded_with_template.$post>
          >
        >
      >
    >,
    TError,
    InferRequestType<typeof client.signature_request.bulk_create_embedded_with_template.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSignatureRequestBulkCreateEmbeddedWithTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.signature_request.bulk_create_embedded_with_template.$post
      >,
    ) {
      return parseResponse(
        client.signature_request.bulk_create_embedded_with_template.$post(args, options),
      )
    },
  })
}

export function usePostSignatureRequestBulkCreateEmbeddedWithTemplate<
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
                    typeof client.signature_request.bulk_create_embedded_with_template.$post
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            typeof client.signature_request.bulk_create_embedded_with_template.$post
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
  const mutationDefaults = getPostSignatureRequestBulkCreateEmbeddedWithTemplateMutationOptions<
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

export function getPostSignatureRequestBulkSendWithTemplateMutationKey() {
  return ['signature_request', '/signature_request/bulk_send_with_template', 'POST'] as const
}

export function getPostSignatureRequestBulkSendWithTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.signature_request.bulk_send_with_template.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.signature_request.bulk_send_with_template.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSignatureRequestBulkSendWithTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.signature_request.bulk_send_with_template.$post>,
    ) {
      return parseResponse(client.signature_request.bulk_send_with_template.$post(args, options))
    },
  })
}

export function usePostSignatureRequestBulkSendWithTemplate<
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
                Awaited<ReturnType<typeof client.signature_request.bulk_send_with_template.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.signature_request.bulk_send_with_template.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSignatureRequestBulkSendWithTemplateMutationOptions<
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

export function getPostSignatureRequestCancelSignatureRequestIdMutationKey() {
  return ['signature_request', '/signature_request/cancel/:signature_request_id', 'POST'] as const
}

export function getPostSignatureRequestCancelSignatureRequestIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.signature_request.cancel)[':signature_request_id']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.signature_request.cancel)[':signature_request_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSignatureRequestCancelSignatureRequestIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.signature_request.cancel)[':signature_request_id']['$post']
      >,
    ) {
      return parseResponse(
        client.signature_request.cancel[':signature_request_id'].$post(args, options),
      )
    },
  })
}

export function usePostSignatureRequestCancelSignatureRequestId<
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
                    (typeof client.signature_request.cancel)[':signature_request_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.signature_request.cancel)[':signature_request_id']['$post']
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
  const mutationDefaults = getPostSignatureRequestCancelSignatureRequestIdMutationOptions<
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

export function getPostSignatureRequestCreateEmbeddedMutationKey() {
  return ['signature_request', '/signature_request/create_embedded', 'POST'] as const
}

export function getPostSignatureRequestCreateEmbeddedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.signature_request.create_embedded.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.signature_request.create_embedded.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSignatureRequestCreateEmbeddedMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.signature_request.create_embedded.$post>,
    ) {
      return parseResponse(client.signature_request.create_embedded.$post(args, options))
    },
  })
}

export function usePostSignatureRequestCreateEmbedded<
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
                Awaited<ReturnType<typeof client.signature_request.create_embedded.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.signature_request.create_embedded.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSignatureRequestCreateEmbeddedMutationOptions<
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

export function getPostSignatureRequestCreateEmbeddedWithTemplateMutationKey() {
  return ['signature_request', '/signature_request/create_embedded_with_template', 'POST'] as const
}

export function getPostSignatureRequestCreateEmbeddedWithTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.signature_request.create_embedded_with_template.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.signature_request.create_embedded_with_template.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSignatureRequestCreateEmbeddedWithTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.signature_request.create_embedded_with_template.$post>,
    ) {
      return parseResponse(
        client.signature_request.create_embedded_with_template.$post(args, options),
      )
    },
  })
}

export function usePostSignatureRequestCreateEmbeddedWithTemplate<
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
                  ReturnType<typeof client.signature_request.create_embedded_with_template.$post>
                >
              >
            >
          >,
          TError,
          InferRequestType<typeof client.signature_request.create_embedded_with_template.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSignatureRequestCreateEmbeddedWithTemplateMutationOptions<
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

export function getPutSignatureRequestEditSignatureRequestIdMutationKey() {
  return ['signature_request', '/signature_request/edit/:signature_request_id', 'PUT'] as const
}

export function getPutSignatureRequestEditSignatureRequestIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.signature_request.edit)[':signature_request_id']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.signature_request.edit)[':signature_request_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSignatureRequestEditSignatureRequestIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.signature_request.edit)[':signature_request_id']['$put']
      >,
    ) {
      return parseResponse(
        client.signature_request.edit[':signature_request_id'].$put(args, options),
      )
    },
  })
}

export function usePutSignatureRequestEditSignatureRequestId<
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
                    (typeof client.signature_request.edit)[':signature_request_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.signature_request.edit)[':signature_request_id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSignatureRequestEditSignatureRequestIdMutationOptions<
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

export function getPutSignatureRequestEditEmbeddedSignatureRequestIdMutationKey() {
  return [
    'signature_request',
    '/signature_request/edit_embedded/:signature_request_id',
    'PUT',
  ] as const
}

export function getPutSignatureRequestEditEmbeddedSignatureRequestIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.signature_request.edit_embedded)[':signature_request_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.signature_request.edit_embedded)[':signature_request_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSignatureRequestEditEmbeddedSignatureRequestIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.signature_request.edit_embedded)[':signature_request_id']['$put']
      >,
    ) {
      return parseResponse(
        client.signature_request.edit_embedded[':signature_request_id'].$put(args, options),
      )
    },
  })
}

export function usePutSignatureRequestEditEmbeddedSignatureRequestId<
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
                    (typeof client.signature_request.edit_embedded)[':signature_request_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.signature_request.edit_embedded)[':signature_request_id']['$put']
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
  const mutationDefaults = getPutSignatureRequestEditEmbeddedSignatureRequestIdMutationOptions<
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

export function getPutSignatureRequestEditEmbeddedWithTemplateSignatureRequestIdMutationKey() {
  return [
    'signature_request',
    '/signature_request/edit_embedded_with_template/:signature_request_id',
    'PUT',
  ] as const
}

export function getPutSignatureRequestEditEmbeddedWithTemplateSignatureRequestIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.signature_request.edit_embedded_with_template)[':signature_request_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.signature_request.edit_embedded_with_template)[':signature_request_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSignatureRequestEditEmbeddedWithTemplateSignatureRequestIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.signature_request.edit_embedded_with_template)[':signature_request_id']['$put']
      >,
    ) {
      return parseResponse(
        client.signature_request.edit_embedded_with_template[':signature_request_id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutSignatureRequestEditEmbeddedWithTemplateSignatureRequestId<
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
                    (typeof client.signature_request.edit_embedded_with_template)[':signature_request_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.signature_request.edit_embedded_with_template)[':signature_request_id']['$put']
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
  const mutationDefaults =
    getPutSignatureRequestEditEmbeddedWithTemplateSignatureRequestIdMutationOptions<
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

export function getPutSignatureRequestEditWithTemplateSignatureRequestIdMutationKey() {
  return [
    'signature_request',
    '/signature_request/edit_with_template/:signature_request_id',
    'PUT',
  ] as const
}

export function getPutSignatureRequestEditWithTemplateSignatureRequestIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.signature_request.edit_with_template)[':signature_request_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.signature_request.edit_with_template)[':signature_request_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSignatureRequestEditWithTemplateSignatureRequestIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.signature_request.edit_with_template)[':signature_request_id']['$put']
      >,
    ) {
      return parseResponse(
        client.signature_request.edit_with_template[':signature_request_id'].$put(args, options),
      )
    },
  })
}

export function usePutSignatureRequestEditWithTemplateSignatureRequestId<
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
                    (typeof client.signature_request.edit_with_template)[':signature_request_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.signature_request.edit_with_template)[':signature_request_id']['$put']
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
  const mutationDefaults = getPutSignatureRequestEditWithTemplateSignatureRequestIdMutationOptions<
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

export function getSignatureRequestFilesSignatureRequestIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.signature_request.files)[':signature_request_id']['$get']>
  >,
) {
  return [
    'signature_request',
    '/signature_request/files/:signature_request_id',
    toValue(args),
  ] as const
}

export function getSignatureRequestFilesSignatureRequestIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.signature_request.files)[':signature_request_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSignatureRequestFilesSignatureRequestIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.signature_request.files[':signature_request_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSignatureRequestFilesSignatureRequestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.signature_request.files)[':signature_request_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.signature_request.files)[':signature_request_id']['$get']>
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
                    (typeof client.signature_request.files)[':signature_request_id']['$get']
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
                    (typeof client.signature_request.files)[':signature_request_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSignatureRequestFilesSignatureRequestIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
            ReturnType<(typeof client.signature_request.files)[':signature_request_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSignatureRequestFilesSignatureRequestIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSignatureRequestFilesSignatureRequestIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.signature_request.files[':signature_request_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSignatureRequestFilesAsDataUriSignatureRequestIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.signature_request.files_as_data_uri)[':signature_request_id']['$get']
    >
  >,
) {
  return [
    'signature_request',
    '/signature_request/files_as_data_uri/:signature_request_id',
    toValue(args),
  ] as const
}

export function getSignatureRequestFilesAsDataUriSignatureRequestIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.signature_request.files_as_data_uri)[':signature_request_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSignatureRequestFilesAsDataUriSignatureRequestIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.signature_request.files_as_data_uri[':signature_request_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSignatureRequestFilesAsDataUriSignatureRequestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.signature_request.files_as_data_uri)[':signature_request_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.signature_request.files_as_data_uri)[':signature_request_id']['$get']
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
                    (typeof client.signature_request.files_as_data_uri)[':signature_request_id']['$get']
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
                    (typeof client.signature_request.files_as_data_uri)[':signature_request_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSignatureRequestFilesAsDataUriSignatureRequestIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.signature_request.files_as_data_uri)[':signature_request_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSignatureRequestFilesAsDataUriSignatureRequestIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSignatureRequestFilesAsDataUriSignatureRequestIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.signature_request.files_as_data_uri[':signature_request_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSignatureRequestFilesAsFileUrlSignatureRequestIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.signature_request.files_as_file_url)[':signature_request_id']['$get']
    >
  >,
) {
  return [
    'signature_request',
    '/signature_request/files_as_file_url/:signature_request_id',
    toValue(args),
  ] as const
}

export function getSignatureRequestFilesAsFileUrlSignatureRequestIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.signature_request.files_as_file_url)[':signature_request_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSignatureRequestFilesAsFileUrlSignatureRequestIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.signature_request.files_as_file_url[':signature_request_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSignatureRequestFilesAsFileUrlSignatureRequestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.signature_request.files_as_file_url)[':signature_request_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.signature_request.files_as_file_url)[':signature_request_id']['$get']
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
                    (typeof client.signature_request.files_as_file_url)[':signature_request_id']['$get']
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
                    (typeof client.signature_request.files_as_file_url)[':signature_request_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSignatureRequestFilesAsFileUrlSignatureRequestIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.signature_request.files_as_file_url)[':signature_request_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSignatureRequestFilesAsFileUrlSignatureRequestIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSignatureRequestFilesAsFileUrlSignatureRequestIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.signature_request.files_as_file_url[':signature_request_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSignatureRequestSignatureRequestIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.signature_request)[':signature_request_id']['$get']>
  >,
) {
  return ['signature_request', '/signature_request/:signature_request_id', toValue(args)] as const
}

export function getSignatureRequestSignatureRequestIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.signature_request)[':signature_request_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSignatureRequestSignatureRequestIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.signature_request[':signature_request_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSignatureRequestSignatureRequestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.signature_request)[':signature_request_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.signature_request)[':signature_request_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.signature_request)[':signature_request_id']['$get']>
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
                  ReturnType<(typeof client.signature_request)[':signature_request_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSignatureRequestSignatureRequestIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.signature_request)[':signature_request_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSignatureRequestSignatureRequestIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSignatureRequestSignatureRequestIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.signature_request[':signature_request_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSignatureRequestListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.signature_request.list.$get>>,
) {
  return ['signature_request', '/signature_request/list', toValue(args)] as const
}

export function getSignatureRequestListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.signature_request.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSignatureRequestListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.signature_request.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSignatureRequestList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signature_request.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.signature_request.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.signature_request.list.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.signature_request.list.$get>>>
            >
          >,
          ReturnType<typeof getSignatureRequestListQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<typeof client.signature_request.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSignatureRequestListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSignatureRequestListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.signature_request.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSignatureRequestReleaseHoldSignatureRequestIdMutationKey() {
  return [
    'signature_request',
    '/signature_request/release_hold/:signature_request_id',
    'POST',
  ] as const
}

export function getPostSignatureRequestReleaseHoldSignatureRequestIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.signature_request.release_hold)[':signature_request_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.signature_request.release_hold)[':signature_request_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSignatureRequestReleaseHoldSignatureRequestIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.signature_request.release_hold)[':signature_request_id']['$post']
      >,
    ) {
      return parseResponse(
        client.signature_request.release_hold[':signature_request_id'].$post(args, options),
      )
    },
  })
}

export function usePostSignatureRequestReleaseHoldSignatureRequestId<
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
                    (typeof client.signature_request.release_hold)[':signature_request_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.signature_request.release_hold)[':signature_request_id']['$post']
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
  const mutationDefaults = getPostSignatureRequestReleaseHoldSignatureRequestIdMutationOptions<
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

export function getPostSignatureRequestRemindSignatureRequestIdMutationKey() {
  return ['signature_request', '/signature_request/remind/:signature_request_id', 'POST'] as const
}

export function getPostSignatureRequestRemindSignatureRequestIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.signature_request.remind)[':signature_request_id']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.signature_request.remind)[':signature_request_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSignatureRequestRemindSignatureRequestIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.signature_request.remind)[':signature_request_id']['$post']
      >,
    ) {
      return parseResponse(
        client.signature_request.remind[':signature_request_id'].$post(args, options),
      )
    },
  })
}

export function usePostSignatureRequestRemindSignatureRequestId<
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
                    (typeof client.signature_request.remind)[':signature_request_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.signature_request.remind)[':signature_request_id']['$post']
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
  const mutationDefaults = getPostSignatureRequestRemindSignatureRequestIdMutationOptions<
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

export function getPostSignatureRequestRemoveSignatureRequestIdMutationKey() {
  return ['signature_request', '/signature_request/remove/:signature_request_id', 'POST'] as const
}

export function getPostSignatureRequestRemoveSignatureRequestIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.signature_request.remove)[':signature_request_id']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.signature_request.remove)[':signature_request_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSignatureRequestRemoveSignatureRequestIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.signature_request.remove)[':signature_request_id']['$post']
      >,
    ) {
      return parseResponse(
        client.signature_request.remove[':signature_request_id'].$post(args, options),
      )
    },
  })
}

export function usePostSignatureRequestRemoveSignatureRequestId<
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
                    (typeof client.signature_request.remove)[':signature_request_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.signature_request.remove)[':signature_request_id']['$post']
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
  const mutationDefaults = getPostSignatureRequestRemoveSignatureRequestIdMutationOptions<
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

export function getPostSignatureRequestSendMutationKey() {
  return ['signature_request', '/signature_request/send', 'POST'] as const
}

export function getPostSignatureRequestSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.signature_request.send.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.signature_request.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSignatureRequestSendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.signature_request.send.$post>) {
      return parseResponse(client.signature_request.send.$post(args, options))
    },
  })
}

export function usePostSignatureRequestSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.signature_request.send.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.signature_request.send.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSignatureRequestSendMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSignatureRequestSendWithTemplateMutationKey() {
  return ['signature_request', '/signature_request/send_with_template', 'POST'] as const
}

export function getPostSignatureRequestSendWithTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.signature_request.send_with_template.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.signature_request.send_with_template.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSignatureRequestSendWithTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.signature_request.send_with_template.$post>,
    ) {
      return parseResponse(client.signature_request.send_with_template.$post(args, options))
    },
  })
}

export function usePostSignatureRequestSendWithTemplate<
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
                Awaited<ReturnType<typeof client.signature_request.send_with_template.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.signature_request.send_with_template.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSignatureRequestSendWithTemplateMutationOptions<
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

export function getPostSignatureRequestUpdateSignatureRequestIdMutationKey() {
  return ['signature_request', '/signature_request/update/:signature_request_id', 'POST'] as const
}

export function getPostSignatureRequestUpdateSignatureRequestIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.signature_request.update)[':signature_request_id']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.signature_request.update)[':signature_request_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSignatureRequestUpdateSignatureRequestIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.signature_request.update)[':signature_request_id']['$post']
      >,
    ) {
      return parseResponse(
        client.signature_request.update[':signature_request_id'].$post(args, options),
      )
    },
  })
}

export function usePostSignatureRequestUpdateSignatureRequestId<
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
                    (typeof client.signature_request.update)[':signature_request_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.signature_request.update)[':signature_request_id']['$post']
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
  const mutationDefaults = getPostSignatureRequestUpdateSignatureRequestIdMutationOptions<
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

export function getPutTeamAddMemberMutationKey() {
  return ['team', '/team/add_member', 'PUT'] as const
}

export function getPutTeamAddMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.add_member.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.team.add_member.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutTeamAddMemberMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.team.add_member.$put>) {
      return parseResponse(client.team.add_member.$put(args, options))
    },
  })
}

export function usePutTeamAddMember<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.team.add_member.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.team.add_member.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTeamAddMemberMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTeamCreateMutationKey() {
  return ['team', '/team/create', 'POST'] as const
}

export function getPostTeamCreateMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.create.$post>>>>>,
    TError,
    InferRequestType<typeof client.team.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTeamCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.team.create.$post>) {
      return parseResponse(client.team.create.$post(args, options))
    },
  })
}

export function usePostTeamCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.create.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.team.create.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTeamCreateMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTeamDestroyMutationKey() {
  return ['team', '/team/destroy', 'DELETE'] as const
}

export function getDeleteTeamDestroyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.destroy.$delete>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteTeamDestroyMutationKey(),
    async mutationFn() {
      return parseResponse(client.team.destroy.$delete(undefined, options))
    },
  })
}

export function useDeleteTeamDestroy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.team.destroy.$delete>>>
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
  const mutationDefaults = getDeleteTeamDestroyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTeamQueryKey() {
  return ['team', '/team'] as const
}

export function getTeamQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTeamQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTeam<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.$get>>>>>,
          ReturnType<typeof getTeamQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTeamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTeamQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.team.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutTeamMutationKey() {
  return ['team', '/team', 'PUT'] as const
}

export function getPutTeamMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.$put>>>>>,
    TError,
    InferRequestType<typeof client.team.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutTeamMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.team.$put>) {
      return parseResponse(client.team.$put(args, options))
    },
  })
}

export function usePutTeam<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.$put>>>>>,
          TError,
          InferRequestType<typeof client.team.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTeamMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTeamInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.team.info.$get>>,
) {
  return ['team', '/team/info', toValue(args)] as const
}

export function getTeamInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.team.info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team.info.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTeamInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.team.info.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.info.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.info.$get>>>>
          >,
          ReturnType<typeof getTeamInfoQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTeamInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team.info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamInvitesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.team.invites.$get>>,
) {
  return ['team', '/team/invites', toValue(args)] as const
}

export function getTeamInvitesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.team.invites.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamInvitesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team.invites.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTeamInvites<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.invites.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.team.invites.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.invites.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.invites.$get>>>>
          >,
          ReturnType<typeof getTeamInvitesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.invites.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTeamInvitesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamInvitesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team.invites.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamMembersTeamIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.team.members)[':team_id']['$get']>>,
) {
  return ['team', '/team/members/:team_id', toValue(args)] as const
}

export function getTeamMembersTeamIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.team.members)[':team_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamMembersTeamIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team.members[':team_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamMembersTeamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team.members)[':team_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.team.members)[':team_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.team.members)[':team_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.team.members)[':team_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamMembersTeamIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.team.members)[':team_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamMembersTeamIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamMembersTeamIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team.members[':team_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTeamRemoveMemberMutationKey() {
  return ['team', '/team/remove_member', 'POST'] as const
}

export function getPostTeamRemoveMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.remove_member.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.team.remove_member.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTeamRemoveMemberMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.team.remove_member.$post>) {
      return parseResponse(client.team.remove_member.$post(args, options))
    },
  })
}

export function usePostTeamRemoveMember<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.team.remove_member.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.team.remove_member.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTeamRemoveMemberMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTeamSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.team.settings.$get>>,
) {
  return ['team', '/team/settings', toValue(args)] as const
}

export function getTeamSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.team.settings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team.settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.team.settings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.settings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.settings.$get>>>>
          >,
          ReturnType<typeof getTeamSettingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTeamSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team.settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTeamSettingsMutationKey() {
  return ['team', '/team/settings', 'POST'] as const
}

export function getPostTeamSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.settings.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.team.settings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTeamSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.team.settings.$post>) {
      return parseResponse(client.team.settings.$post(args, options))
    },
  })
}

export function usePostTeamSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.settings.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.team.settings.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTeamSettingsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTeamSubTeamsTeamIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.team.sub_teams)[':team_id']['$get']>>,
) {
  return ['team', '/team/sub_teams/:team_id', toValue(args)] as const
}

export function getTeamSubTeamsTeamIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.team.sub_teams)[':team_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamSubTeamsTeamIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team.sub_teams[':team_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamSubTeamsTeamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team.sub_teams)[':team_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.team.sub_teams)[':team_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.team.sub_teams)[':team_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.team.sub_teams)[':team_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamSubTeamsTeamIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.team.sub_teams)[':team_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamSubTeamsTeamIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamSubTeamsTeamIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team.sub_teams[':team_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTemplateAddUserTemplateIdMutationKey() {
  return ['template', '/template/add_user/:template_id', 'POST'] as const
}

export function getPostTemplateAddUserTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.template.add_user)[':template_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.template.add_user)[':template_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplateAddUserTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.template.add_user)[':template_id']['$post']>,
    ) {
      return parseResponse(client.template.add_user[':template_id'].$post(args, options))
    },
  })
}

export function usePostTemplateAddUserTemplateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.template.add_user)[':template_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.template.add_user)[':template_id']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTemplateAddUserTemplateIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTemplateCreateMutationKey() {
  return ['template', '/template/create', 'POST'] as const
}

export function getPostTemplateCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.template.create.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.template.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplateCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.template.create.$post>) {
      return parseResponse(client.template.create.$post(args, options))
    },
  })
}

export function usePostTemplateCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.template.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.template.create.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTemplateCreateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTemplateCreateEmbeddedDraftMutationKey() {
  return ['template', '/template/create_embedded_draft', 'POST'] as const
}

export function getPostTemplateCreateEmbeddedDraftMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.template.create_embedded_draft.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.template.create_embedded_draft.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplateCreateEmbeddedDraftMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.template.create_embedded_draft.$post>) {
      return parseResponse(client.template.create_embedded_draft.$post(args, options))
    },
  })
}

export function usePostTemplateCreateEmbeddedDraft<
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
                Awaited<ReturnType<typeof client.template.create_embedded_draft.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.template.create_embedded_draft.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTemplateCreateEmbeddedDraftMutationOptions<
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

export function getPostTemplateDeleteTemplateIdMutationKey() {
  return ['template', '/template/delete/:template_id', 'POST'] as const
}

export function getPostTemplateDeleteTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.template.delete)[':template_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.template.delete)[':template_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplateDeleteTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.template.delete)[':template_id']['$post']>,
    ) {
      return parseResponse(client.template.delete[':template_id'].$post(args, options))
    },
  })
}

export function usePostTemplateDeleteTemplateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.template.delete)[':template_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.template.delete)[':template_id']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTemplateDeleteTemplateIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTemplateFilesTemplateIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.template.files)[':template_id']['$get']>>,
) {
  return ['template', '/template/files/:template_id', toValue(args)] as const
}

export function getTemplateFilesTemplateIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.template.files)[':template_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemplateFilesTemplateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.template.files[':template_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTemplateFilesTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.template.files)[':template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.template.files)[':template_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.template.files)[':template_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.template.files)[':template_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTemplateFilesTemplateIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.template.files)[':template_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplateFilesTemplateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemplateFilesTemplateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.template.files[':template_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTemplateFilesAsDataUriTemplateIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.template.files_as_data_uri)[':template_id']['$get']>
  >,
) {
  return ['template', '/template/files_as_data_uri/:template_id', toValue(args)] as const
}

export function getTemplateFilesAsDataUriTemplateIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.template.files_as_data_uri)[':template_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemplateFilesAsDataUriTemplateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.template.files_as_data_uri[':template_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTemplateFilesAsDataUriTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.template.files_as_data_uri)[':template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.template.files_as_data_uri)[':template_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.template.files_as_data_uri)[':template_id']['$get']>
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
                  ReturnType<(typeof client.template.files_as_data_uri)[':template_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTemplateFilesAsDataUriTemplateIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.template.files_as_data_uri)[':template_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplateFilesAsDataUriTemplateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemplateFilesAsDataUriTemplateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.template.files_as_data_uri[':template_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTemplateFilesAsFileUrlTemplateIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.template.files_as_file_url)[':template_id']['$get']>
  >,
) {
  return ['template', '/template/files_as_file_url/:template_id', toValue(args)] as const
}

export function getTemplateFilesAsFileUrlTemplateIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.template.files_as_file_url)[':template_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemplateFilesAsFileUrlTemplateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.template.files_as_file_url[':template_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTemplateFilesAsFileUrlTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.template.files_as_file_url)[':template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.template.files_as_file_url)[':template_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.template.files_as_file_url)[':template_id']['$get']>
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
                  ReturnType<(typeof client.template.files_as_file_url)[':template_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTemplateFilesAsFileUrlTemplateIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.template.files_as_file_url)[':template_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplateFilesAsFileUrlTemplateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemplateFilesAsFileUrlTemplateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.template.files_as_file_url[':template_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTemplateTemplateIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.template)[':template_id']['$get']>>,
) {
  return ['template', '/template/:template_id', toValue(args)] as const
}

export function getTemplateTemplateIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.template)[':template_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemplateTemplateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.template[':template_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTemplateTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.template)[':template_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.template)[':template_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.template)[':template_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.template)[':template_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTemplateTemplateIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.template)[':template_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplateTemplateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemplateTemplateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.template[':template_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTemplateListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.template.list.$get>>,
) {
  return ['template', '/template/list', toValue(args)] as const
}

export function getTemplateListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.template.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemplateListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.template.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTemplateList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.template.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.template.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.template.list.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.template.list.$get>>>>
          >,
          ReturnType<typeof getTemplateListQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.template.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTemplateListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemplateListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.template.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTemplateRemoveUserTemplateIdMutationKey() {
  return ['template', '/template/remove_user/:template_id', 'POST'] as const
}

export function getPostTemplateRemoveUserTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.template.remove_user)[':template_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.template.remove_user)[':template_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplateRemoveUserTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.template.remove_user)[':template_id']['$post']>,
    ) {
      return parseResponse(client.template.remove_user[':template_id'].$post(args, options))
    },
  })
}

export function usePostTemplateRemoveUserTemplateId<
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
                Awaited<ReturnType<(typeof client.template.remove_user)[':template_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.template.remove_user)[':template_id']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTemplateRemoveUserTemplateIdMutationOptions<
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

export function getPostTemplateUpdateFilesTemplateIdMutationKey() {
  return ['template', '/template/update_files/:template_id', 'POST'] as const
}

export function getPostTemplateUpdateFilesTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.template.update_files)[':template_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.template.update_files)[':template_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplateUpdateFilesTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.template.update_files)[':template_id']['$post']>,
    ) {
      return parseResponse(client.template.update_files[':template_id'].$post(args, options))
    },
  })
}

export function usePostTemplateUpdateFilesTemplateId<
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
                Awaited<ReturnType<(typeof client.template.update_files)[':template_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.template.update_files)[':template_id']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTemplateUpdateFilesTemplateIdMutationOptions<
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

export function getPostUnclaimedDraftCreateMutationKey() {
  return ['unclaimed_draft', '/unclaimed_draft/create', 'POST'] as const
}

export function getPostUnclaimedDraftCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.unclaimed_draft.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.unclaimed_draft.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUnclaimedDraftCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.unclaimed_draft.create.$post>) {
      return parseResponse(client.unclaimed_draft.create.$post(args, options))
    },
  })
}

export function usePostUnclaimedDraftCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.unclaimed_draft.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.unclaimed_draft.create.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUnclaimedDraftCreateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUnclaimedDraftCreateEmbeddedMutationKey() {
  return ['unclaimed_draft', '/unclaimed_draft/create_embedded', 'POST'] as const
}

export function getPostUnclaimedDraftCreateEmbeddedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.unclaimed_draft.create_embedded.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.unclaimed_draft.create_embedded.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUnclaimedDraftCreateEmbeddedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.unclaimed_draft.create_embedded.$post>) {
      return parseResponse(client.unclaimed_draft.create_embedded.$post(args, options))
    },
  })
}

export function usePostUnclaimedDraftCreateEmbedded<
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
                Awaited<ReturnType<typeof client.unclaimed_draft.create_embedded.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.unclaimed_draft.create_embedded.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUnclaimedDraftCreateEmbeddedMutationOptions<
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

export function getPostUnclaimedDraftCreateEmbeddedWithTemplateMutationKey() {
  return ['unclaimed_draft', '/unclaimed_draft/create_embedded_with_template', 'POST'] as const
}

export function getPostUnclaimedDraftCreateEmbeddedWithTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.unclaimed_draft.create_embedded_with_template.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.unclaimed_draft.create_embedded_with_template.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUnclaimedDraftCreateEmbeddedWithTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.unclaimed_draft.create_embedded_with_template.$post>,
    ) {
      return parseResponse(
        client.unclaimed_draft.create_embedded_with_template.$post(args, options),
      )
    },
  })
}

export function usePostUnclaimedDraftCreateEmbeddedWithTemplate<
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
                  ReturnType<typeof client.unclaimed_draft.create_embedded_with_template.$post>
                >
              >
            >
          >,
          TError,
          InferRequestType<typeof client.unclaimed_draft.create_embedded_with_template.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUnclaimedDraftCreateEmbeddedWithTemplateMutationOptions<
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

export function getPostUnclaimedDraftEditAndResendSignatureRequestIdMutationKey() {
  return [
    'unclaimed_draft',
    '/unclaimed_draft/edit_and_resend/:signature_request_id',
    'POST',
  ] as const
}

export function getPostUnclaimedDraftEditAndResendSignatureRequestIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.unclaimed_draft.edit_and_resend)[':signature_request_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.unclaimed_draft.edit_and_resend)[':signature_request_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUnclaimedDraftEditAndResendSignatureRequestIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.unclaimed_draft.edit_and_resend)[':signature_request_id']['$post']
      >,
    ) {
      return parseResponse(
        client.unclaimed_draft.edit_and_resend[':signature_request_id'].$post(args, options),
      )
    },
  })
}

export function usePostUnclaimedDraftEditAndResendSignatureRequestId<
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
                    (typeof client.unclaimed_draft.edit_and_resend)[':signature_request_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.unclaimed_draft.edit_and_resend)[':signature_request_id']['$post']
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
  const mutationDefaults = getPostUnclaimedDraftEditAndResendSignatureRequestIdMutationOptions<
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
