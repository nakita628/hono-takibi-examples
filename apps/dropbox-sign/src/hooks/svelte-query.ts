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

export function getApiKeyQueryKey(args: InferRequestType<typeof client.api_key.$get>) {
  return ['api_key', '/api_key', args] as const
}

export function getApiKeyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_key.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api_key.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_key.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiKeyQueryKey>
  >({
    queryKey: getApiKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api_key.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_key.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api_key.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_key.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiKeyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_key.$post>>>>>,
        TError,
        InferRequestType<typeof client.api_key.$post>,
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
    const mutationDefaults = getPostApiKeyMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiKeyApiKeyIdQueryKey(
  args: InferRequestType<(typeof client.api_key)[':api_key_id']['$get']>,
) {
  return ['api_key', '/api_key/:api_key_id', args] as const
}

export function getApiKeyApiKeyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api_key)[':api_key_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api_key)[':api_key_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api_key)[':api_key_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiKeyApiKeyIdQueryKey>
  >({
    queryKey: getApiKeyApiKeyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api_key[':api_key_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiKeyApiKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api_key)[':api_key_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api_key)[':api_key_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api_key)[':api_key_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiKeyApiKeyIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiKeyApiKeyIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutApiKeyApiKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiKeyApiKeyIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiKeyApiKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiKeyApiKeyIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAccountCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.create.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.account.create.$post>,
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
    const mutationDefaults = getPostAccountCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountQueryKey(args: InferRequestType<typeof client.account.$get>) {
  return ['account', '/account', args] as const
}

export function getAccountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.account.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountQueryKey>
  >({
    queryKey: getAccountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$put>>>>>,
        TError,
        InferRequestType<typeof client.account.$put>,
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
    const mutationDefaults = getPutAccountMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountSettingsQueryKey(
  args: InferRequestType<typeof client.account.settings.$get>,
) {
  return ['account', '/account/settings', args] as const
}

export function getAccountSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.account.settings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountSettingsQueryKey>
  >({
    queryKey: getAccountSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.settings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccountSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.settings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountSettingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostAccountSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.account.settings.$post>,
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
    const mutationDefaults = getPostAccountSettingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAccountVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.verify.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.account.verify.$post>,
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
    const mutationDefaults = getPostAccountVerifyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiApp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_app.$post>>>>>,
        TError,
        InferRequestType<typeof client.api_app.$post>,
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
    const mutationDefaults = getPostApiAppMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiAppClientIdQueryKey(
  args: InferRequestType<(typeof client.api_app)[':client_id']['$get']>,
) {
  return ['api_app', '/api_app/:client_id', args] as const
}

export function getApiAppClientIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api_app)[':client_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api_app)[':client_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api_app)[':client_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAppClientIdQueryKey>
  >({
    queryKey: getApiAppClientIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api_app[':client_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiAppClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api_app)[':client_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api_app)[':client_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api_app)[':client_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAppClientIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAppClientIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutApiAppClientId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api_app)[':client_id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api_app)[':client_id']['$put']>,
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
    const mutationDefaults = getPutApiAppClientIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiAppClientId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiAppClientIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiAppListQueryKey(args: InferRequestType<typeof client.api_app.list.$get>) {
  return ['api_app', '/api_app/list', args] as const
}

export function getApiAppListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_app.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api_app.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_app.list.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiAppListQueryKey>
  >({
    queryKey: getApiAppListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api_app.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiAppList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_app.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api_app.list.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_app.list.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiAppListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAppListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBulkSendJobBulkSendJobIdQueryKey(
  args: InferRequestType<(typeof client.bulk_send_job)[':bulk_send_job_id']['$get']>,
) {
  return ['bulk_send_job', '/bulk_send_job/:bulk_send_job_id', args] as const
}

export function getBulkSendJobBulkSendJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bulk_send_job)[':bulk_send_job_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bulk_send_job)[':bulk_send_job_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBulkSendJobBulkSendJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bulk_send_job[':bulk_send_job_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBulkSendJobBulkSendJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bulk_send_job)[':bulk_send_job_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bulk_send_job)[':bulk_send_job_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getBulkSendJobBulkSendJobIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getBulkSendJobListQueryKey(
  args: InferRequestType<typeof client.bulk_send_job.list.$get>,
) {
  return ['bulk_send_job', '/bulk_send_job/list', args] as const
}

export function getBulkSendJobListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulk_send_job.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.bulk_send_job.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulk_send_job.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBulkSendJobListQueryKey>
  >({
    queryKey: getBulkSendJobListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bulk_send_job.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBulkSendJobList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulk_send_job.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bulk_send_job.list.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.bulk_send_job.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBulkSendJobListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBulkSendJobListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostDocumentDetectFields<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.document.detect_fields.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.document.detect_fields.$post>,
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
    const mutationDefaults = getPostDocumentDetectFieldsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostEmbeddedEditUrlTemplateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmbeddedEditUrlTemplateIdMutationOptions<
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

export function getEmbeddedSignUrlSignatureIdQueryKey(
  args: InferRequestType<(typeof client.embedded.sign_url)[':signature_id']['$get']>,
) {
  return ['embedded', '/embedded/sign_url/:signature_id', args] as const
}

export function getEmbeddedSignUrlSignatureIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.embedded.sign_url)[':signature_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.embedded.sign_url)[':signature_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEmbeddedSignUrlSignatureIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.embedded.sign_url[':signature_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEmbeddedSignUrlSignatureId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.embedded.sign_url)[':signature_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.embedded.sign_url)[':signature_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getEmbeddedSignUrlSignatureIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFaxFaxIdQueryKey(
  args: InferRequestType<(typeof client.fax)[':fax_id']['$get']>,
) {
  return ['fax', '/fax/:fax_id', args] as const
}

export function getFaxFaxIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.fax)[':fax_id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.fax)[':fax_id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.fax)[':fax_id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFaxFaxIdQueryKey>
  >({
    queryKey: getFaxFaxIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fax[':fax_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFaxFaxId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.fax)[':fax_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.fax)[':fax_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.fax)[':fax_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFaxFaxIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFaxFaxIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteFaxFaxId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFaxFaxIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFaxFilesFaxIdQueryKey(
  args: InferRequestType<(typeof client.fax.files)[':fax_id']['$get']>,
) {
  return ['fax', '/fax/files/:fax_id', args] as const
}

export function getFaxFilesFaxIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.fax.files)[':fax_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fax.files)[':fax_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.fax.files)[':fax_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFaxFilesFaxIdQueryKey>
  >({
    queryKey: getFaxFilesFaxIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fax.files[':fax_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFaxFilesFaxId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.fax.files)[':fax_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.fax.files)[':fax_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.fax.files)[':fax_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFaxFilesFaxIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFaxFilesFaxIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutFaxLineAddUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.add_user.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.fax_line.add_user.$put>,
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
    const mutationDefaults = getPutFaxLineAddUserMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFaxLineAreaCodesQueryKey(
  args: InferRequestType<typeof client.fax_line.area_codes.$get>,
) {
  return ['fax_line', '/fax_line/area_codes', args] as const
}

export function getFaxLineAreaCodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.area_codes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.fax_line.area_codes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.area_codes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFaxLineAreaCodesQueryKey>
  >({
    queryKey: getFaxLineAreaCodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fax_line.area_codes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFaxLineAreaCodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.area_codes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.fax_line.area_codes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.area_codes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFaxLineAreaCodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFaxLineAreaCodesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostFaxLineCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.create.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.fax_line.create.$post>,
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
    const mutationDefaults = getPostFaxLineCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFaxLineQueryKey(args: InferRequestType<typeof client.fax_line.$get>) {
  return ['fax_line', '/fax_line', args] as const
}

export function getFaxLineQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.fax_line.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFaxLineQueryKey>
  >({
    queryKey: getFaxLineQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fax_line.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFaxLine<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.fax_line.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFaxLineQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFaxLineQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteFaxLine<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.fax_line.$delete>,
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
    const mutationDefaults = getDeleteFaxLineMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFaxLineListQueryKey(args: InferRequestType<typeof client.fax_line.list.$get>) {
  return ['fax_line', '/fax_line/list', args] as const
}

export function getFaxLineListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.fax_line.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFaxLineListQueryKey>
  >({
    queryKey: getFaxLineListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fax_line.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFaxLineList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.fax_line.list.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.list.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFaxLineListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFaxLineListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutFaxLineRemoveUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.remove_user.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.fax_line.remove_user.$put>,
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
    const mutationDefaults = getPutFaxLineRemoveUserMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFaxListQueryKey(args: InferRequestType<typeof client.fax.list.$get>) {
  return ['fax', '/fax/list', args] as const
}

export function getFaxListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.fax.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.list.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFaxListQueryKey>
  >({
    queryKey: getFaxListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fax.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFaxList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.fax.list.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.list.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFaxListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFaxListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostFaxSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.send.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.fax.send.$post>,
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
    const mutationDefaults = getPostFaxSendMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostOauthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.oauth.token.$post>,
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
    const mutationDefaults = getPostOauthTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostOauthTokenRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOauthTokenRefreshMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostReportCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.create.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.report.create.$post>,
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
    const mutationDefaults = getPostReportCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSignatureRequestBulkCreateEmbeddedWithTemplate<
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
                ReturnType<typeof client.signature_request.bulk_create_embedded_with_template.$post>
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.signature_request.bulk_create_embedded_with_template.$post>,
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
    const mutationDefaults = getPostSignatureRequestBulkCreateEmbeddedWithTemplateMutationOptions<
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

export function createPostSignatureRequestBulkSendWithTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSignatureRequestBulkSendWithTemplateMutationOptions<
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

export function createPostSignatureRequestCancelSignatureRequestId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSignatureRequestCancelSignatureRequestIdMutationOptions<
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

export function createPostSignatureRequestCreateEmbedded<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSignatureRequestCreateEmbeddedMutationOptions<
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

export function createPostSignatureRequestCreateEmbeddedWithTemplate<
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
                ReturnType<typeof client.signature_request.create_embedded_with_template.$post>
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.signature_request.create_embedded_with_template.$post>,
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
    const mutationDefaults = getPostSignatureRequestCreateEmbeddedWithTemplateMutationOptions<
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

export function createPutSignatureRequestEditSignatureRequestId<
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
                ReturnType<(typeof client.signature_request.edit)[':signature_request_id']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.signature_request.edit)[':signature_request_id']['$put']>,
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
    const mutationDefaults = getPutSignatureRequestEditSignatureRequestIdMutationOptions<
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

export function createPutSignatureRequestEditEmbeddedSignatureRequestId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSignatureRequestEditEmbeddedSignatureRequestIdMutationOptions<
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

export function createPutSignatureRequestEditEmbeddedWithTemplateSignatureRequestId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutSignatureRequestEditEmbeddedWithTemplateSignatureRequestIdMutationOptions<
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

export function createPutSignatureRequestEditWithTemplateSignatureRequestId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutSignatureRequestEditWithTemplateSignatureRequestIdMutationOptions<
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

export function getSignatureRequestFilesSignatureRequestIdQueryKey(
  args: InferRequestType<(typeof client.signature_request.files)[':signature_request_id']['$get']>,
) {
  return ['signature_request', '/signature_request/files/:signature_request_id', args] as const
}

export function getSignatureRequestFilesSignatureRequestIdQueryOptions<
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
  args: InferRequestType<(typeof client.signature_request.files)[':signature_request_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSignatureRequestFilesSignatureRequestIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.signature_request.files[':signature_request_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSignatureRequestFilesSignatureRequestId<
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
  args: () => InferRequestType<
    (typeof client.signature_request.files)[':signature_request_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSignatureRequestFilesSignatureRequestIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getSignatureRequestFilesAsDataUriSignatureRequestIdQueryKey(
  args: InferRequestType<
    (typeof client.signature_request.files_as_data_uri)[':signature_request_id']['$get']
  >,
) {
  return [
    'signature_request',
    '/signature_request/files_as_data_uri/:signature_request_id',
    args,
  ] as const
}

export function getSignatureRequestFilesAsDataUriSignatureRequestIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.signature_request.files_as_data_uri)[':signature_request_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSignatureRequestFilesAsDataUriSignatureRequestIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.signature_request.files_as_data_uri[':signature_request_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSignatureRequestFilesAsDataUriSignatureRequestId<
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
  args: () => InferRequestType<
    (typeof client.signature_request.files_as_data_uri)[':signature_request_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSignatureRequestFilesAsDataUriSignatureRequestIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getSignatureRequestFilesAsFileUrlSignatureRequestIdQueryKey(
  args: InferRequestType<
    (typeof client.signature_request.files_as_file_url)[':signature_request_id']['$get']
  >,
) {
  return [
    'signature_request',
    '/signature_request/files_as_file_url/:signature_request_id',
    args,
  ] as const
}

export function getSignatureRequestFilesAsFileUrlSignatureRequestIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.signature_request.files_as_file_url)[':signature_request_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSignatureRequestFilesAsFileUrlSignatureRequestIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.signature_request.files_as_file_url[':signature_request_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSignatureRequestFilesAsFileUrlSignatureRequestId<
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
  args: () => InferRequestType<
    (typeof client.signature_request.files_as_file_url)[':signature_request_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSignatureRequestFilesAsFileUrlSignatureRequestIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getSignatureRequestSignatureRequestIdQueryKey(
  args: InferRequestType<(typeof client.signature_request)[':signature_request_id']['$get']>,
) {
  return ['signature_request', '/signature_request/:signature_request_id', args] as const
}

export function getSignatureRequestSignatureRequestIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.signature_request)[':signature_request_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.signature_request)[':signature_request_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSignatureRequestSignatureRequestIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.signature_request[':signature_request_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSignatureRequestSignatureRequestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.signature_request)[':signature_request_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.signature_request)[':signature_request_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getSignatureRequestSignatureRequestIdQueryKey>
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
      ...getSignatureRequestSignatureRequestIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSignatureRequestListQueryKey(
  args: InferRequestType<typeof client.signature_request.list.$get>,
) {
  return ['signature_request', '/signature_request/list', args] as const
}

export function getSignatureRequestListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signature_request.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.signature_request.list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.signature_request.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSignatureRequestListQueryKey>
  >({
    queryKey: getSignatureRequestListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.signature_request.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSignatureRequestList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signature_request.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.signature_request.list.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.signature_request.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSignatureRequestListQueryKey>
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
      ...getSignatureRequestListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostSignatureRequestReleaseHoldSignatureRequestId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSignatureRequestReleaseHoldSignatureRequestIdMutationOptions<
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

export function createPostSignatureRequestRemindSignatureRequestId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSignatureRequestRemindSignatureRequestIdMutationOptions<
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

export function createPostSignatureRequestRemoveSignatureRequestId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSignatureRequestRemoveSignatureRequestIdMutationOptions<
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

export function createPostSignatureRequestSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.signature_request.send.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.signature_request.send.$post>,
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
    const mutationDefaults = getPostSignatureRequestSendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSignatureRequestSendWithTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSignatureRequestSendWithTemplateMutationOptions<
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

export function createPostSignatureRequestUpdateSignatureRequestId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSignatureRequestUpdateSignatureRequestIdMutationOptions<
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

export function createPutTeamAddMember<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.add_member.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.team.add_member.$put>,
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
    const mutationDefaults = getPutTeamAddMemberMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTeamCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.create.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.team.create.$post>,
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
    const mutationDefaults = getPostTeamCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteTeamDestroy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.destroy.$delete>>>>
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
    const mutationDefaults = getDeleteTeamDestroyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTeamQueryKey() {
  return ['team', '/team'] as const
}

export function getTeamQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTeamQueryKey>
  >({
    queryKey: getTeamQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.team.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTeam<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTeamQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPutTeam<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.$put>>>>>,
        TError,
        InferRequestType<typeof client.team.$put>,
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
    const mutationDefaults = getPutTeamMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTeamInfoQueryKey(args: InferRequestType<typeof client.team.info.$get>) {
  return ['team', '/team/info', args] as const
}

export function getTeamInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.info.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.team.info.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTeamInfoQueryKey>
  >({
    queryKey: getTeamInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team.info.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTeamInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.team.info.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTeamInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTeamInvitesQueryKey(args: InferRequestType<typeof client.team.invites.$get>) {
  return ['team', '/team/invites', args] as const
}

export function getTeamInvitesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.invites.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.team.invites.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.invites.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTeamInvitesQueryKey>
  >({
    queryKey: getTeamInvitesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team.invites.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTeamInvites<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.invites.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.team.invites.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.invites.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTeamInvitesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamInvitesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTeamMembersTeamIdQueryKey(
  args: InferRequestType<(typeof client.team.members)[':team_id']['$get']>,
) {
  return ['team', '/team/members/:team_id', args] as const
}

export function getTeamMembersTeamIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team.members)[':team_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team.members)[':team_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.team.members)[':team_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamMembersTeamIdQueryKey>
  >({
    queryKey: getTeamMembersTeamIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team.members[':team_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTeamMembersTeamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team.members)[':team_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.team.members)[':team_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team.members)[':team_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamMembersTeamIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamMembersTeamIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostTeamRemoveMember<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.team.remove_member.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.team.remove_member.$post>,
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
    const mutationDefaults = getPostTeamRemoveMemberMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTeamSettingsQueryKey(args: InferRequestType<typeof client.team.settings.$get>) {
  return ['team', '/team/settings', args] as const
}

export function getTeamSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.settings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.team.settings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTeamSettingsQueryKey>
  >({
    queryKey: getTeamSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team.settings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTeamSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.team.settings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.settings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTeamSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamSettingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostTeamSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.settings.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.team.settings.$post>,
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
    const mutationDefaults = getPostTeamSettingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTeamSubTeamsTeamIdQueryKey(
  args: InferRequestType<(typeof client.team.sub_teams)[':team_id']['$get']>,
) {
  return ['team', '/team/sub_teams/:team_id', args] as const
}

export function getTeamSubTeamsTeamIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team.sub_teams)[':team_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team.sub_teams)[':team_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTeamSubTeamsTeamIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team.sub_teams[':team_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTeamSubTeamsTeamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team.sub_teams)[':team_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.team.sub_teams)[':team_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamSubTeamsTeamIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostTemplateAddUserTemplateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplateAddUserTemplateIdMutationOptions<
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

export function createPostTemplateCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.template.create.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.template.create.$post>,
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
    const mutationDefaults = getPostTemplateCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTemplateCreateEmbeddedDraft<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplateCreateEmbeddedDraftMutationOptions<
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

export function createPostTemplateDeleteTemplateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplateDeleteTemplateIdMutationOptions<
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

export function getTemplateFilesTemplateIdQueryKey(
  args: InferRequestType<(typeof client.template.files)[':template_id']['$get']>,
) {
  return ['template', '/template/files/:template_id', args] as const
}

export function getTemplateFilesTemplateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.template.files)[':template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.template.files)[':template_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTemplateFilesTemplateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.template.files[':template_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTemplateFilesTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.template.files)[':template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.template.files)[':template_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getTemplateFilesTemplateIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTemplateFilesAsDataUriTemplateIdQueryKey(
  args: InferRequestType<(typeof client.template.files_as_data_uri)[':template_id']['$get']>,
) {
  return ['template', '/template/files_as_data_uri/:template_id', args] as const
}

export function getTemplateFilesAsDataUriTemplateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.template.files_as_data_uri)[':template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.template.files_as_data_uri)[':template_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTemplateFilesAsDataUriTemplateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.template.files_as_data_uri[':template_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTemplateFilesAsDataUriTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.template.files_as_data_uri)[':template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.template.files_as_data_uri)[':template_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getTemplateFilesAsDataUriTemplateIdQueryKey>
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
      ...getTemplateFilesAsDataUriTemplateIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTemplateFilesAsFileUrlTemplateIdQueryKey(
  args: InferRequestType<(typeof client.template.files_as_file_url)[':template_id']['$get']>,
) {
  return ['template', '/template/files_as_file_url/:template_id', args] as const
}

export function getTemplateFilesAsFileUrlTemplateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.template.files_as_file_url)[':template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.template.files_as_file_url)[':template_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTemplateFilesAsFileUrlTemplateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.template.files_as_file_url[':template_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTemplateFilesAsFileUrlTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.template.files_as_file_url)[':template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.template.files_as_file_url)[':template_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getTemplateFilesAsFileUrlTemplateIdQueryKey>
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
      ...getTemplateFilesAsFileUrlTemplateIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTemplateTemplateIdQueryKey(
  args: InferRequestType<(typeof client.template)[':template_id']['$get']>,
) {
  return ['template', '/template/:template_id', args] as const
}

export function getTemplateTemplateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.template)[':template_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.template)[':template_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.template)[':template_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplateTemplateIdQueryKey>
  >({
    queryKey: getTemplateTemplateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.template[':template_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTemplateTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.template)[':template_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.template)[':template_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.template)[':template_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplateTemplateIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTemplateTemplateIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTemplateListQueryKey(args: InferRequestType<typeof client.template.list.$get>) {
  return ['template', '/template/list', args] as const
}

export function getTemplateListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.template.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.template.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.template.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTemplateListQueryKey>
  >({
    queryKey: getTemplateListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.template.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTemplateList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.template.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.template.list.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.template.list.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTemplateListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTemplateListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostTemplateRemoveUserTemplateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplateRemoveUserTemplateIdMutationOptions<
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

export function createPostTemplateUpdateFilesTemplateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplateUpdateFilesTemplateIdMutationOptions<
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

export function createPostUnclaimedDraftCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.unclaimed_draft.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.unclaimed_draft.create.$post>,
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
    const mutationDefaults = getPostUnclaimedDraftCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUnclaimedDraftCreateEmbedded<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUnclaimedDraftCreateEmbeddedMutationOptions<
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

export function createPostUnclaimedDraftCreateEmbeddedWithTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUnclaimedDraftCreateEmbeddedWithTemplateMutationOptions<
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

export function createPostUnclaimedDraftEditAndResendSignatureRequestId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUnclaimedDraftEditAndResendSignatureRequestIdMutationOptions<
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
